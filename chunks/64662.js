n.d(t, { A: () => fW });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    o = n(503698),
    u = n.n(o),
    c = n(855986),
    d = n(821609),
    m = n(22231),
    f = n(604525),
    h = n(625903),
    g = n(259730),
    p = n(534514),
    x = n(834730),
    v = n(289873),
    j = n(646973),
    b = n(742589),
    y = n(723702),
    k = n(171691),
    w = n(314116),
    A = n(858899),
    C = n(949757),
    N = n(800202),
    S = n(191850),
    I = n(792996);
let E = new Set(),
    _ = null;
function M(e, t) {
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
                E.add(t),
                () => {
                    E.delete(t);
                }
            );
        }, [e]));
}
var R = n(253932);
function P() {
    return R.Q_.useSetting() || !1;
}
var T = n(573083),
    L = n(57570),
    $ = n(971079),
    D = n(61577),
    q = n(686507),
    F = n(192308),
    O = n(128761),
    G = n(503922),
    z = n(967008),
    B = n(777847),
    U = n(227007),
    K = n(398773),
    H = n(735769),
    W = n(513845),
    V = n(802905),
    X = n(951178);
let Q = { width: 320, height: 240 };
function Z(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : Q;
}
function Y(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function J(e) {
    return Z(e?.preview_overlay_widget ?? null);
}
var ee = n(855859),
    et = n(238490),
    en = n(991690);
function el(e) {
    return e
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-+|-+$/g, "");
}
var er = n(696645);
function ea(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function ei(e, t) {
    if ("bot" === e.mode) return I.intl.string(S.default.gThNz6);
    if ("frame" === e.mode && e.surface === en.U.APP_CHANNEL) {
        let n = e.appChannel ?? el(t);
        if ("" !== n) return `#${n}`;
    }
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, er.X)(e.surface)
                : I.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, er.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return I.intl.string(S.default.y5GiL1);
        case "overlay":
            return I.intl.string(S.default["2940LX"]);
        case "bot":
            return I.intl.string(S.default.tjpaGN);
    }
}
var es = n(939398),
    eo = n(52724),
    eu = n(323384),
    ec = n(983851),
    ed = n(794083),
    em = n(861004),
    ef = n(687966),
    eh = n(430392),
    eg = n(939249),
    ep = n(866665),
    ex = n(789645),
    ev = n(388155);
function ej(e, t) {
    return `${e}-tab-${ea(t).replace(/\s+/g, "-")}`;
}
function eb(e, t) {
    let n = e.getBoundingClientRect(),
        l = t.getBoundingClientRect();
    l.left < n.left ? (e.scrollLeft -= n.left - l.left) : l.right > n.right && (e.scrollLeft += l.right - n.right);
}
let ey = { [en.U.APP_CHANNEL]: eu.AppsIcon, [en.U.VOICE_CHANNEL]: ec.VoiceNormalIcon, [en.U.MAIN]: ed.ActivitiesIcon };
function ek(e) {
    let { targets: t, activeTarget: n, projectName: l, onSelect: r, closableTarget: s, onClose: o, panelId: c } = e,
        d = null == n ? null : ea(n),
        m = null == s ? null : ea(s),
        f = t.findIndex((e) => ea(e) === m),
        h = t.some((e) => ea(e) === d) ? d : t.length > 0 ? ea(t[0]) : null,
        g = I.intl.string(S.default["/TlGcK"]),
        p = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null);
    i.useEffect(() => {
        let e = p.current;
        if (null != e)
            return (e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t));
        function t(t) {
            if (null == e || Math.abs(t.deltaY) <= Math.abs(t.deltaX)) return;
            let n = Math.abs(e.scrollLeft);
            (t.deltaY > 0 ? n < e.scrollWidth - e.clientWidth - 1 : n > 1) &&
                (t.preventDefault(), (e.scrollLeft += "rtl" === getComputedStyle(e).direction ? -t.deltaY : t.deltaY));
        }
    }, [p]);
    let b = (function (e, t) {
        let [n, l] = i.useState(!1),
            [r, a] = i.useState(!1);
        return (
            i.useLayoutEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = "rtl" === getComputedStyle(t).direction;
                function r() {
                    if (null == t) return;
                    let e = Math.abs(t.scrollLeft),
                        r = e > 1,
                        i = e < t.scrollWidth - t.clientWidth - 1;
                    (l(n ? i : r), a(n ? r : i));
                }
                r();
                let i = new ResizeObserver(r);
                for (let e of (i.observe(t), t.querySelectorAll(`.${ev.Mf}`))) i.observe(e);
                return (
                    t.addEventListener("scroll", r, { passive: !0 }),
                    () => {
                        (i.disconnect(), t.removeEventListener("scroll", r));
                    }
                );
            }, [e, t]),
            { left: n, right: r }
        );
    })(p, t);
    async function y(e) {
        let t,
            n = v.current;
        if (null == n) return;
        let l = (0, eo.C)({
                getFocusableElements: () => Array.from(n.querySelectorAll('[role="tab"]')),
                getActiveElement: () => n.ownerDocument.activeElement,
            }),
            r = "rtl" === getComputedStyle(n).direction;
        switch (e.key) {
            case "ArrowLeft":
            case "ArrowRight":
                t =
                    ("ArrowRight" === e.key) !== r
                        ? l.getNextFocusableElement({ wrap: !0 })
                        : l.getPreviousFocusableElement({ wrap: !0 });
                break;
            case "Home":
                t = l.getFirstFocusableElement();
                break;
            case "End":
                t = l.getLastFocusableElement();
                break;
            default:
                return;
        }
        (e.preventDefault(), (await t)?.focus());
    }
    function k(e) {
        let t = p.current,
            n = e.currentTarget.closest(`.${ev.Mf}`);
        null != t && null != n && eb(t, n);
    }
    i.useLayoutEffect(() => {
        let e = p.current,
            t = j.current;
        null != e && null != t && eb(e, t);
    }, [d]);
    let w = f < 0 ? null : ei(t[f], l);
    return (0, a.jsxs)("div", {
        ref: p,
        className: u()(ev.vR, { [ev.e$]: b.left, [ev.Rh]: b.right }),
        children: [
            (0, a.jsx)("div", {
                ref: v,
                className: ev.gj,
                role: "tablist",
                "aria-label": I.intl.string(S.default.I2ucou),
                children: t.map((e, t) => {
                    let n = ea(e),
                        i = n === d,
                        s = ei(e, l),
                        o = (function (e) {
                            switch (e.mode) {
                                case "frame":
                                    return ey[e.surface];
                                case "widget":
                                    return em.UserSquareIcon;
                                case "overlay":
                                    return ef.GameControllerIcon;
                                case "bot":
                                    return eh.RobotIcon;
                            }
                        })(e);
                    return (0, a.jsx)(
                        "div",
                        {
                            ref: i ? j : void 0,
                            className: u()(ev.Mf, { [ev.yR]: i, [ev.P5]: t === f, [ev.h5]: f >= 0 && t > f }),
                            children: (0, a.jsxs)(eg.D, {
                                id: ej(c, e),
                                className: ev.eg,
                                role: "tab",
                                "aria-selected": i,
                                "aria-controls": i ? c : void 0,
                                tabIndex: n === h ? 0 : -1,
                                onClick: () => r(e),
                                onKeyDown: y,
                                onFocus: k,
                                children: [
                                    (0, a.jsx)(o, { size: "sm", color: "currentColor", className: ev.Ll }),
                                    (0, a.jsx)(x.E, {
                                        variant: "body-sm/medium",
                                        color: "none",
                                        lineClamp: 1,
                                        className: ev.Gn,
                                        children: s,
                                    }),
                                ],
                            }),
                        },
                        n,
                    );
                }),
            }),
            null != w
                ? (0, a.jsx)(ep.m, {
                      position: "bottom",
                      text: g,
                      ariaHidden: !0,
                      children: (0, a.jsx)(eg.D, {
                          className: ev.b,
                          onClick: o,
                          "aria-label": `${g}, ${w}`,
                          children: (0, a.jsx)(ex.XSmallIcon, { size: "sm", color: "currentColor" }),
                      }),
                  })
                : null,
        ],
    });
}
var ew = n(27184),
    eA = n(627363),
    eC = n(233470),
    eN = n(153207),
    eS = n(260498),
    eI = n(625180),
    eE = n(672929),
    e_ = n(111534),
    eM = n(754027),
    eR = n(165610),
    eP = n(174865),
    eT = n(822588),
    eL = n(457827),
    e$ = n(540665),
    eD = n(722701),
    eq = n(962998),
    eF = n(738604),
    eO = n(585412),
    eG = n(719593),
    ez = n(265872),
    eB = n(405433),
    eU = n(42473),
    eK = n(811587),
    eH = n(95264),
    eW = n(412073);
function eV(e) {
    var t;
    let l,
        r,
        { project: s, guildId: o } = e,
        d =
            ((l = s?.id),
            (null !=
            (r = (0, c.bG)([eD.A], () => (null == l ? null : (eD.A.getPublishStatus(l)?.publishState ?? null)), [l]))
                ? (0, eK.lE)(r)
                : (s?.supported_surfaces?.length ?? 0) > 0) && (0, eS.H_)(s)),
        { canShare: m } =
            ((t = s.id),
            (0, c.cf)(
                [eS.Ay, eD.A],
                () => {
                    let e = eS.Ay.getProject(t),
                        n = eD.A.getPublishStatus(t)?.publishState,
                        l = null != e && (0, eS.PV)(e);
                    return { canShare: null != e && null != n && (l ? "nothing_built" !== n : (0, eK.lE)(n)) };
                },
                [t],
            )),
        f = i.useCallback(() => {
            null != s && (0, eH.A)(s, o);
        }, [s, o]),
        h = i.useRef(null);
    if (!d && !m) return null;
    let g = I.intl.string(S.default.XWgAfc),
        p = I.intl.string(I.t.RDE0Sc);
    return (0, a.jsx)(ez.Q, {
        targetElementRef: h,
        position: "bottom",
        align: "right",
        ignoreModalClicks: !0,
        renderPopout: async () => {
            let { default: e } = await Promise.all([n.e(440720), n.e(159957), n.e(441532), n.e(838858)]).then(
                n.bind(n, 958234),
            );
            return () => (0, a.jsx)(e, { projectId: s.id });
        },
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, a.jsxs)("div", {
                ref: h,
                className: u()(eW.Os, { [eW.q6]: l }),
                children: [
                    d
                        ? (0, a.jsx)(eU.A, {
                              className: u()(eW.MX, eW.mz, { [eW.JA]: m }),
                              icon: (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "none", children: g }),
                              "aria-label": g,
                              tooltipText: null,
                              onClick: f,
                          })
                        : null,
                    m
                        ? (0, a.jsx)(eU.A, {
                              className: u()(eW.MX, eW.uM, { [eW.w9]: d }),
                              icon: eB.ShareIcon,
                              tooltipText: p,
                              tooltipShouldShow: !l,
                              onClick: n,
                          })
                        : null,
                ],
            });
        },
    });
}
var eX = n(616334),
    eQ = n(450030),
    eZ = n(812771),
    eY = n(58736),
    eJ = n(743898);
(n(134528), n(947204));
var e0 = n(333007),
    e1 = n(621466),
    e2 = n(775121),
    e3 = n(989145),
    e4 = n(81369),
    e5 = n(826745),
    e7 = n(34595),
    e8 = n(470779);
function e9(e) {
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
            takeRefs: A,
        } = (0, e7.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        C = i.useRef(null),
        N = (m || j.length > 0) && w && !f,
        E = i.useCallback(() => {
            if (!N) return;
            let e = A();
            c(e.length > 0 ? e : void 0);
        }, [N, A, c]),
        [_, M] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => M(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let R = i.useRef(null),
        [P, T] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = R.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => T({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let L = P?.height ?? 44,
        $ = l.left + 8,
        D = l.top + 8,
        q = Math.max(n.x, $),
        F = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, D), Math.max(D, l.top + l.height - L - 8));
    return (0, a.jsxs)("div", {
        ref: R,
        className: u()(e8.M0, { [e8.ho]: _ && !f, [e8.ET]: f }),
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
                              className: e8.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(ep.m, {
                              position: "bottom",
                              text: I.intl.string(S.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: e8.tY,
                                  onClick: () => C.current?.click(),
                                  "aria-label": I.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(e4.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: e8.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(e5.y, {
                autoFocus: !0,
                rows: 1,
                className: e8.hF,
                value: s,
                placeholder: x ?? ("" === r ? I.intl.string(S.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? I.intl.string(S.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: f || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), E());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: e8.ZO,
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
    to = n(803656),
    tu = n(241326),
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
let th = tf("red", tm(td.A.unsafe_rawColors.RED_400), () => I.intl.string(S.default.tvXfjt)),
    tg = [
        th,
        tf("yellow", tm(td.A.unsafe_rawColors.YELLOW_300), () => I.intl.string(S.default.FYuaJ1)),
        tf("green", tm(td.A.unsafe_rawColors.GREEN_360), () => I.intl.string(S.default["Vv+paS"])),
        tf("blue", tm(td.A.unsafe_rawColors.BLUE_345), () => I.intl.string(S.default.k9b1QJ)),
        tf("white", tm(td.A.unsafe_rawColors.WHITE), () => I.intl.string(S.default["1sOXwH"])),
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
let tk = k.ck.map((e) => ty(Math.min(16, e + 3))),
    tw = k.Cw.map((e) => ty(Math.min(16, e / 2.5))),
    tA = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
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
            label: () => I.intl.string(S.default.oIZQbm),
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
            label: () => I.intl.string(S.default.ARNVr7),
        },
    };
function tN(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(ep.m, {
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
function tS(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(ep.m, {
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
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: tx.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: tx.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function tE(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = tp(n.colorId);
    function h(e) {
        return (0, k.rC)(t, e);
    }
    let g = tC[u],
        p = I.intl.string(S.default.hUm825),
        x = I.intl.string(S.default.n5IA3a),
        v = I.intl.string(S.default.r5dX6t),
        j = I.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: tx.t$,
        children: [
            (0, a.jsx)("div", {
                className: tx.NT,
                children: (0, a.jsx)(tN, {
                    icon: tj,
                    label: I.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => h("pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tx.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": I.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(tN, {
                        icon: tv,
                        label: I.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => h("move"),
                    }),
                    (0, a.jsx)(tN, {
                        icon: ta.LettersIcon,
                        label: I.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => h("text"),
                    }),
                    (0, a.jsx)(tI, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tN, {
                                icon: ti.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tk.map((n, l) =>
                                (0, a.jsx)(
                                    tN,
                                    {
                                        icon: n,
                                        label: I.intl.string(tA[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            ((0, k.KZ)(t, l), e());
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
                            (0, a.jsx)(tN, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (h(u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tC).map((t) =>
                                (0, a.jsx)(
                                    tN,
                                    {
                                        icon: tC[t].icon,
                                        label: tC[t].label(),
                                        pressed: o === t,
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
                            (0, a.jsx)(tN, {
                                icon: tb,
                                label: x,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            tw.map((n, l) =>
                                (0, a.jsx)(
                                    tN,
                                    {
                                        icon: n,
                                        label: I.intl.string(tA[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            ((0, k._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tI, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(tS, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            tg.map((n) =>
                                (0, a.jsx)(
                                    tN,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            ((0, k.Yx)(t, n.id), e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: tx.Gz, role: "separator" }),
                    (0, a.jsx)(tS, {
                        icon: ts.UndoIcon,
                        label: I.intl.string((0, y.cX)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(tS, {
                        icon: to.RedoIcon,
                        label: I.intl.string((0, y.cX)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(tS, {
                        icon: tu.TrashIcon,
                        label: I.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: tx.Gz, role: "separator" }),
                    (0, a.jsx)(tS, { icon: tc.XLargeIcon, label: I.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let t_ = td.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tM = td.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    tR = td.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
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
                    (e.strokeStyle = tR),
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
let tL = { dx: 0, dy: 0 },
    t$ = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    tD = 1;
function tq(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = (0, k.d5)(s),
        { active: u } = (0, L.rt)(s),
        c = (0, F.Rv)(),
        [d, m] = i.useState(!1);
    i.useEffect(() => {
        if (null != s)
            return () => {
                (0, k.K7)(s)?.active === !0 && (0, k.It)(s);
            };
    }, [s]);
    let f = o?.active === !0 && "pick" === o.tool;
    i.useEffect(() => {
        null != s && f && !u && (0, L.w4)(s);
    }, [s, f, u]);
    let h = i.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, ew.wn)(e);
        if (null != t) return t;
        function n() {
            m(!1);
        }
        (0, e0.flushSync)(() => m(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, ew.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (i.useEffect(() => {
        if (null != s) return ((0, k.j5)(s, h), () => (0, k.j5)(s, null));
    }, [s, h]),
    null == s || null == o || !o.active || c)
        ? null
        : (0, a.jsx)(tF, { projectId: s, state: o, capturing: d, resolveIframe: r });
}
function tF(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tt(r),
        [o, u] = i.useState(null),
        [c, d] = i.useState(0),
        [m, f] = i.useState(null),
        [h, g] = i.useState(tL),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        { tool: y, history: w } = n,
        A = tp(n.colorId),
        C = "pick" !== y,
        N = (0, k.Qq)(n),
        E = "eraser" === y ? null : A.value,
        _ = i.useMemo(
            () =>
                null == N
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
                      })(N, E),
            [N, E],
        ),
        M = "move" === y ? (w.present.find((e) => e.id === m) ?? null) : null,
        R = null != s;
    (i.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [R]),
        i.useLayoutEffect(() => {
            b.current = o;
        }, [o]));
    let P = i.useCallback(() => {
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
            i = null == a ? w.present : w.present.map((e) => (e.id === a.id ? (0, tn.y)(e, h.dx, h.dy) : e)),
            o = v.current;
        tP(r, null == o ? i : [...i, o], { width: s.width, height: s.height });
    }, [s, w.present, h]);
    i.useLayoutEffect(P, [P]);
    let T = i.useCallback(
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
                color: A.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, tn.oy)(n, s) && (0, k.tD)(t, { type: "commit", shape: n }), u(null), (0, k.QP)(t));
        }, [t, A, s]),
        $ = i.useCallback(() => {
            ((b.current = null), u(null), (0, k.QP)(t));
        }, [t]),
        D = i.useCallback(
            (e) => {
                if (0 !== e.button || null == s) return;
                if (null != b.current) return void L();
                let t = T(e);
                switch (y) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * s.width, y: t.y * s.height },
                            l = null == M ? null : (0, tn.k_)(M, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? M
                                    : (0, tn.WF)(w.present, t, s, 6);
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
                        if (!(0, tn.jG)(w.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tD++}`,
                                kind: "erase",
                                width: k.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tD++}`,
                                kind: "marker",
                                color: A.value,
                                width: k.ck[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tD++}`,
                                kind: y,
                                color: A.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                P();
            },
            [s, y, A, M, w.present, n.markerSize, n.eraserSize, T, L, P],
        ),
        q = i.useCallback(
            (e) => {
                let t = T(e),
                    n = j.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = v.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (v.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (v.current = { ...l, to: t }),
                    P());
            },
            [T, P],
        ),
        F = i.useCallback(() => {
            p.current?.removeAttribute("data-dragging");
            let e = j.current;
            if (null != e) {
                ((j.current = null), g(tL), (0, k.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, tn.oy)(n, s)
                    ? ((0, k.tD)(t, { type: "commit", shape: n }), (0, k.QP)(t))
                    : P());
        }, [t, s, h, P]),
        O = i.useCallback(() => (0, k.V9)(t), [t]),
        G = i.useCallback(() => (0, k.tD)(t, { type: "undo" }), [t]),
        z = i.useCallback(() => (0, k.tD)(t, { type: "redo" }), [t]),
        B = i.useCallback(() => (0, k.tD)(t, { type: "clear" }), [t]),
        U = i.useRef({ tool: y, selected: M, exit: O, undo: G, redo: z });
    if (
        (i.useLayoutEffect(() => {
            U.current = { tool: y, selected: M, exit: O, undo: G, redo: z };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, e1.Cw)((0, e1.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != b.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = U.current,
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
                    (e.preventDefault(), (0, k.tD)(t, { type: "remove", id: l.id }), f(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = t$[s];
                null != o && (e.preventDefault(), (0, k.rC)(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (C) return (e2.A.disable(), () => e2.A.enable());
        }, [C]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == M ? null : (0, tn.k_)(null == j.current ? M : (0, tn.y)(M, h.dx, h.dy), s);
    return (0, e0.createPortal)(
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
                            "data-interactive": C && !l ? "" : void 0,
                            "aria-label": I.intl.string(S.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            style: { cursor: l ? void 0 : _ },
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
                null == o
                    ? null
                    : (0, a.jsx)(e9, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + o.at.x * s.width, y: s.top + o.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: I.intl.string(S.default["8gX1lw"]),
                          label: I.intl.string(S.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: o.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: L,
                          onUploadFile: (e) => (0, e3.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== o.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: x,
                    className: tx.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(tE, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: B }),
                }),
            ],
        }),
        document.body,
    );
}
var tO = n(308081),
    tG = n(516521),
    tz = n(683071),
    tB = n(65593),
    tU = n(218394),
    tK = n(115982),
    tH = n(886540);
function tW(e) {
    return !(0, tH.BL)(e) && !0 !== e.stopRequested;
}
var tV = n(104317),
    tX = n(643278),
    tQ = n(566424),
    tZ = n(683063),
    tY = n(140735),
    tJ = n(847374),
    t0 = n(320448),
    t1 = n(138212);
function t2(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: u()(t1.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: u()(t1.wx, null != n && t1.o5, i),
                children: [
                    (0, a.jsx)(x.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var t3 = n(148590);
function t4(e) {
    let { children: t } = e;
    return (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function t5(e) {
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
        j = h ? tJ.ChevronSmallDownIcon : t0.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, a.jsxs)(t2, {
        ...m,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: t3.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(eg.D, {
                                className: t3.L$,
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
        headerClassName: h ? void 0 : t3.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: f, className: u()(t3.rf, o), hidden: !h, children: d })],
    });
}
n(321073);
var t7 = n(883646);
let t8 = [];
function t9(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: u()(t7.xL, {
            [t7.Vb]: "in_progress" === t,
            [t7.cT]: "completed" === t,
            [t7.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return I.intl.string(S.default.KvBdun);
                case "in_progress":
                    return I.intl.string(S.default["m5G9+S"]);
                case "unfinished":
                    return I.intl.string(S.default.lRpwhD);
                default:
                    return I.intl.string(S.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(v.y, {
                type: v.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: t7.Qd,
                itemClassName: t7.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: t7.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: t7.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function t6(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : t8), [n, t]),
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
        className: t7.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    tZ.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: t7.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: t7.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function ne(e) {
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
        className: t7.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: u()(t7.AS, { [t7.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(t9, { status: n }),
                            (0, a.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: t7.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: t7.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(t6, { agents: c.get(e.id) ?? t8, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: t7.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(t9, { status: "pending" }),
                          (0, a.jsx)(x.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: t7.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: t7.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nt(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = I.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = I.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(t5, {
        title: I.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(t4, { children: c }),
        superseded: s,
        showLabel: I.intl.string(S.default.RKyN9q),
        hideLabel: I.intl.string(S.default.xydHoj),
        className: t7.Nr,
        bodyClassName: t7.rf,
        beforeBody: r && !s ? (0, a.jsx)(tY.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(ne, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nn = n(308665),
    nl = n(59678),
    nr = n(903847);
function na(e) {
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
        [A, C] = i.useState(!1),
        [N, E] = i.useState(v);
    (N !== v && (E(v), v ? w(!0) : C(!1)),
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
    let _ = null != l && l.length > 0,
        M = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: nr.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: u()(nr.vK, { [nr.ho]: p && d, [nr.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: u()(nr.Rk, nl.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(tQ.A, {
                                        glyph: (0, a.jsx)(nn.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eg.D, {
                                    className: nr.pZ,
                                    onClick: c,
                                    "aria-label": I.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: u()(nr.Rk, nl.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(tQ.A, {
                                            glyph: (0, a.jsx)(nn.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          _
                              ? (0, a.jsx)(ep.m, {
                                    text: I.intl.string(S.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eg.D, {
                                        className: nr.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": I.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(tX.ClipboardListIcon, {
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
                  k && _
                      ? (0, a.jsx)("div", {
                            className: u()(nr.vB, { [nr.pg]: v && A, [nr.ui]: !v }),
                            children: (0, a.jsx)(nt, {
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
var ni = n(839214),
    ns = n(78564);
let no = new Map(),
    nu = (0, ni.D)(() => ({ byMessageKey: {} }));
function nc(e, t) {
    let { [e]: n, ...l } = nu.getState().byMessageKey;
    nu.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nd = n(195880),
    nm = n(287111),
    nf = n(16619);
function nh(e) {
    let t = (0, nf.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var ng = n(337232),
    np = n(890497),
    nx = n(103557),
    nv = n(29073),
    nj = n(590077);
function nb(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = nh(e),
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
                A = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                C = d.trim(),
                N = n && !f && (w.length > 0 ? "" !== C : u.length > 0),
                E = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, nm.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          I.intl.formatToPlainString(S.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = I.intl.formatToPlainString(S.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                _ = i.useCallback(() => {
                    let t, n;
                    if (!N) return;
                    if (0 === w.length) return void E(u);
                    (h(!0), p(!1));
                    let l =
                        ((t = eS.Ay.getProject(e)?.name ?? e),
                        (n = I.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nd.m)() }), x.current.set(e.projectId, t)),
                                (0, ng.s)(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && E(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [N, E, u, e, w, C]),
                M = i.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !f && E(u), l());
                }, [E, u, l, f]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: A,
                prompt: d,
                setPrompt: m,
                sending: f,
                failed: g,
                canSubmit: N,
                submit: _,
                dismiss: M,
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
        m = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: u()(nv.nd, nv.jx),
        "aria-labelledby": m,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: nv.wx,
                children: [
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        id: m,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nv.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tr.K, {
                        icon: ex.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": I.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nj.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: I.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(np.Z, {
                              label: I.intl.string(S.default["29gr8j"]),
                              placeholder: I.intl.string(S.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(nx.f, {
                        label: I.intl.string(S.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? I.intl.string(S.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: nv.qr,
                children: (0, a.jsx)("div", {
                    className: nv.zt,
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: I.intl.string(S.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var ny = n(47167),
    nk = n(734057),
    nw = n(994500),
    nA = n(287809),
    nC = n(360047);
function nN(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
var nS = n(652215);
function nI(e) {
    return 0 === e.options.length && null == e.input;
}
function nE(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function n_(e, t, n) {
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
function nM(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function nR(e, t, n, l) {
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
    [nS.rbe.GUILD_TEXT]: "text",
    [nS.rbe.GUILD_VOICE]: "voice",
    [nS.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [nS.rbe.GUILD_STAGE_VOICE]: "stage",
    [nS.rbe.GUILD_FORUM]: "forum",
    [nS.rbe.GUILD_MEDIA]: "media",
};
function nT(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = nk.A.getChannel(t)?.type) ? void 0 : nP[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = nA.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nL = { channel: "#", role: "@", user: "@", project: "", server: "" },
    n$ = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
        server: [S.default.ZWXDeI, S.default.ZWXDeI],
    };
function nD(e, t) {
    return I.intl.string(n$[e][+!!t]);
}
var nq = n(658675),
    nF = n(123292),
    nO = n(900797),
    nG = n(331322),
    nz = n(771871),
    nB = n(700915),
    nU = n(985965),
    nK = n(831819);
function nH(e) {
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
            className: nK.Nz,
            children: (0, a.jsxs)(nG.B, {
                gap: 4,
                children: [
                    (0, a.jsx)(nB.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, a.jsx)(nU.A, { purpose: t.purpose }) : null,
                    null != u
                        ? (0, a.jsxs)("div", {
                              className: nK.em,
                              children: [
                                  (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                                  d && !r
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(x.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, a.jsx)(nF.Q, {
                                                    text: I.intl.string(S.default.I5F6YX),
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
                              className: nK.zM,
                              children: [
                                  (0, a.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, a.jsx)(nz.z, {
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
    nV = n(155078);
function nX(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let nQ = [];
function nZ(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? I.intl.string(S.default.ZZ641e)
          : I.intl.string(1 === e.options.length ? S.default["2g3gk9"] : S.default.dkzChE);
}
var nY = n(762026);
function nJ(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function n0(e, t) {
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
var n1 = n(682163),
    n2 = n(300344),
    n3 = n(614733),
    n4 = n(904363),
    n5 = n(950902),
    n7 = n(136722),
    n8 = n(778858),
    n9 = n(808728),
    n6 = n(696451),
    le = n(71393),
    lt = n(488926),
    ln = n(426035),
    ll = n(246338);
let lr = n7.kg(nS.xBc.VIEW_CHANNEL, nS.xBc.SEND_MESSAGES);
var la = n(384017);
function li(e) {
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
        return nT(n.input ?? "channel", e, (e) => u.find((t) => t.value === e)?.label, l);
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
        className: la.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(np.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(np.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function ls(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, n2.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: o, onChange: u } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [eS.Ay],
                    () => {
                        let e = t ? eS.Ay.getProject(l) : null;
                        return null == e ? null : (0, ln.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || n6.Ay.isMember(r, n) || n8.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [n9.A, n6.Ay, le.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = le.A.getGuild(r)?.safetyAlertsChannelId,
                            l = n9.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, ll.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && n6.Ay.isMember(r, n))
                            return lt.$3({ permission: lr, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? n7.BY;
                        return n7.X8(s, lr) ? null : i;
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
                            u(((e = []), nT("channel", [d.id], () => (0, ny.m1)(d, nA.default, nw.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== m.current ? (f.current = !0) : null == d && ((f.current = !0), u([], r));
            }
        }, [d, o, r, u, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(li, { ...r, guildId: n, options: s, placeholder: nD("channel", !0 === r.question.multi_select) });
}
function lo(e) {
    let { guildId: t, ...n } = e,
        l = (0, n4.A)(t);
    return (0, a.jsx)(li, { ...n, guildId: t, options: l, placeholder: nD("role", !0 === n.question.multi_select) });
}
function lu(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, n3.A)(t);
    return (0, a.jsx)(li, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: nD("user", !0 === n.question.multi_select),
    });
}
function lc(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = nh(t),
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
    return 0 === s.length ? n : (0, a.jsx)(li, { ...l, options: s, placeholder: nD("project", !1) });
}
function ld(e) {
    let t = e.target;
    (0, e1.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lm(e) {
    let { fallback: t, ...n } = e,
        l = (0, nf.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(n1.Ay, { guild: e, size: n1.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: ld,
              onMouseUp: ld,
              children: (0, a.jsx)(li, { ...n, options: r, placeholder: nD("server", !1) }),
          });
}
function lf(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, n5.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lc, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lm, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(ls, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lo, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lu, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lh = n(87221),
    lg = n(26430),
    lp = n(750943),
    lx = n(173936),
    lv = n(95477),
    lj = n(256905),
    lb = n(490707),
    ly = n(907702);
function lk(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, lb._)(t, n),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: u()(ly.Gt, ly.b6),
              children: [
                  (0, a.jsx)(lh.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: I.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: u()(ly.Gt, { [ly.iP]: !f }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: ly.Sl,
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
function lw(e) {
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
        v = I.intl.formatToPlainString(S.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: u()(ly.Vs, { [ly.Q9]: s, [ly.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(eg.D, {
                className: u()(ly.Up, { [ly.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => f(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": I.intl.formatToPlainString(S.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: ly.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(lk, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: ly.Gt }),
                            (0, a.jsx)("span", {
                                className: ly.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(nq.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(nz.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: ly.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, nV.E)(t) : "")
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
                      className: ly.B4,
                      children: (0, a.jsx)(ep.m, {
                          text: I.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(tr.K, {
                              icon: tu.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": I.intl.string(S.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: ly.B4,
                        children: (0, a.jsx)(ep.m, {
                            text: I.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(tr.K, {
                                icon: lg.MaximizeIcon,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(r),
                                "aria-label": v,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function lA(e) {
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
                      label: I.intl.string(S.default.SUdqCQ),
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
                            (0, lj.R)({
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
        className: ly.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === m.length && null == j
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: u()(ly.fF, "gallery" === f ? ly.nV : ly.nM, { [ly.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": f,
                      "data-count": m.length,
                      children: [
                          m.map((e) =>
                              (0, a.jsx)(
                                  lw,
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
                                    lw,
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
                uploadText: I.intl.string(/\bicons?\b/i.test(n.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function lC(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
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
        className: ly.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: ly.QJ,
                children: [
                    (0, a.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lp.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => o.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: lx.LinkIcon,
                              text: I.intl.string(S.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: ly.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nm.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: ly.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: ly.Hs,
                              children: (0, a.jsx)(lv.k, {
                                  label: I.intl.string(S.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: I.intl.string(S.default.AVhvn8),
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
                              className: ly.gd,
                              children: [
                                  (0, a.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: I.intl.string(S.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === m.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(nF.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: I.intl.string(S.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(x.E, {
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
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eg.D, {
        className: u()(la.uK, { [la.ue]: l, [la.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": I.intl.formatToPlainString(d ? S.default["2p6UFz"] : S.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: la.dy, children: (0, a.jsx)(nq.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: la.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: la.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: la.l8,
                        children: (0, a.jsx)(x.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: la.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, a.jsx)(x.E, {
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
                ? (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: la.rM,
                      children: I.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lS(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return nX(n)
        ? (0, a.jsx)(lA, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      lN,
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
let lI = [],
    lE = [];
function l_(e) {
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
        f = !0 === n.multi_select ? I.intl.string(S.default.tE8qbz) : nZ(n);
    return (0, a.jsxs)("div", {
        className: u()(la.Ge, la.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: la.aK,
                      children: f,
                  }),
            (0, a.jsx)(lS, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: n0(o, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && nX(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: la.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: la.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(m.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: u()(la.Pu, la.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: la.$0,
                      children: (0, a.jsx)(nF.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: I.intl.string(S.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function lM(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: f,
            backText: h,
            hideSubmit: g = !1,
            headingLines: p = 5,
        } = e,
        [v, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState({}),
        [A, C] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [N, E] = i.useState({}),
        { builds: _, linkFor: M } = (function (e, t, n) {
            let l = i.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = nN(e, t, n[t.id] ?? []);
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
                                let l = await (0, nC.LW)(e, t);
                                a((e) => ({ ...e, [n]: l }));
                            } catch {}
                        })(e.target, e.caller, e.key));
            }, [l]);
            let d = (0, c.cf)(
                [eS.Ay],
                () =>
                    Object.fromEntries(
                        Object.values(l).flatMap((e) => [e.target, e.caller].map((e) => [e, eS.Ay.getProject(e)])),
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
                                callerHasPreview: null == h || (0, X._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[i.key] ?? u.build,
                            x = t.questions.find((e) => e.id === a);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[i.target] ?? null,
                            flow: x?.link_flow ?? u.flow,
                            purpose: (0, nY.xP)(x?.link_purpose ?? u.purpose),
                            data: (0, nY.Bw)(g, p),
                            value: p,
                            aria: (0, nY.sr)(g),
                            onChange: (e) => o((t) => ({ ...t, [i.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, A),
        [R, P] = i.useState(!1),
        [T, L] = i.useState(0),
        [$, D] = i.useState(null),
        [q, F] = i.useState(null),
        [O, G] = i.useState(null),
        [z, B] = i.useState(!1),
        U = i.useRef(null),
        [K, H] = i.useState(null),
        W = i.useRef(null),
        V = i.useRef(0),
        Q = null == r,
        Z = l.questions.length,
        Y = Math.min(T, Z - 1),
        J = l.questions[Y],
        [ee, et] = i.useState({ id: J.id, expanded: !1 }),
        en = ee.id === J.id && ee.expanded,
        [el, er] = i.useState(null),
        ea = b[J.id] ?? "",
        ei = !0 === J.multi_select,
        es = nX(J),
        eo = ei ? I.intl.string(S.default.tE8qbz) : nZ(J),
        eu = ei
            ? (k[J.id] ?? lI)
            : ((t = v[J.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : nQ),
        ec = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = I.intl.string(S.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : nJ(t[e.id])),
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
                        if (o) return n0(h, m(i));
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
                                    ((0, e3.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (f || !nJ(e[d])) return e;
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
                                                error: { source: "upload", text: I.intl.string(S.default["kUw/b1"]) },
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
                                                        : I.intl.string(S.default.l79PMc),
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
        })(n, v, j),
        ed = ec.imageFor(J.id),
        em = ec.selectedFor(J),
        { text: ef, phase: eh } = (0, nW.Q)(J.question),
        ev = ef === J.question,
        ej = ev && el?.id === J.id && el.truncated;
    i.useLayoutEffect(() => {
        if (null == K || en || !ev) return;
        function e() {
            if (null == K) return;
            let e = K.scrollHeight > K.clientHeight + 1;
            er((t) => (t?.id === J.id && t.truncated === e ? t : { id: J.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(K), () => t.disconnect());
    }, [ev, K, J.id, en]);
    let eb = I.intl.string(en ? I.t.iTcuma : I.t.dcl9MQ),
        ey = i.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let a = nM(t, n);
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
                                              let r = nN(e, t, [n]);
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
                                              return (0, nC.Ol)(t, n, l);
                                          }),
                                      ).then(i));
                        }
                    })(n, l, e, _, r);
            },
            [l, _, r, n],
        ),
        ek = i.useCallback(
            (e, t) => {
                V.current += 1;
                let n = V.current;
                (D({ direction: t, moves: n }),
                    F({ question: J, draft: ea, selected: eu, ownImage: ed, ownSelected: em, direction: t, moves: n }),
                    B(!0),
                    L(e));
            },
            [ea, ed, em, J, eu],
        ),
        ew = i.useCallback(() => {
            let e = U.current,
                t = W.current;
            null != e && null != t && G({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = U.current,
            t = W.current;
        if (null == e || null == t) return;
        ew();
        let n = new ResizeObserver(ew);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ew]);
    let eA = $?.moves;
    i.useEffect(() => {
        if (null == eA) return;
        let e = setTimeout(() => F(null), 400),
            t = setTimeout(() => B(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eA]);
    let eC = i.useCallback(
            (e) => {
                let t = n_(l, e, Y);
                null == t ? ey(e) : ek(t, t < Y ? "back" : "forward");
            },
            [l, Y, ey, ek],
        ),
        eN = i.useCallback(
            (e) => {
                if (Q) return;
                let t = { ...v, [J.id]: e };
                (j(t), eC(t));
            },
            [eC, v, Q, J.id],
        ),
        eI = i.useCallback(() => {
            Q || 0 === Y || ek(Y - 1, "back");
        }, [Q, Y, ek]),
        eE = 0 !== Y || Q ? void 0 : f,
        e_ = (Y > 0 && !Q) || null != eE,
        eM = i.useCallback(
            (e) => {
                y((e) => ({ ...e, [J.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                es ? Q || j((e) => ({ ...e, [J.id]: t })) : eN(t);
            },
            [Q, es, J.id, eN],
        ),
        eR = i.useCallback(() => {
            (y((e) => ({ ...e, [J.id]: "" })), eN({ kind: "custom", text: I.intl.string(S.default.zxSq2q) }));
        }, [J.id, eN]),
        { multiPartFor: eP } = ec,
        eT = i.useMemo(() => (ei ? nR(J, eu, ea, eP(J)) : null), [ea, ei, eP, J, eu]),
        eL = A[J.id] ?? lE,
        e$ = M(J.id),
        eD = i.useMemo(() => {
            var e, t;
            let n;
            return null != J.input
                ? ((e = J.input),
                  (t = N[J.id]),
                  (n = ea.trim()),
                  {
                      kind: "entities",
                      entities: eL,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eL.map((t) => (t.name.startsWith(nL[e]) ? t.name : `${nL[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ea, N, eL, J.id, J.input]),
        eq = i.useCallback(
            (e, t) => {
                (C((t) => ({ ...t, [J.id]: e })), E((e) => ({ ...e, [J.id]: t })));
            },
            [J.id],
        ),
        eF = i.useCallback(() => P(!0), []),
        eO = i.useCallback(() => P(!1), []),
        eG = ec.controlsFor(J, Q),
        ez = i.useMemo(() => {
            var e;
            let t;
            return (
                (e = v[J.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: I.intl.string(S.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(J, e))
                    ? null
                    : "" === ea.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? nR(J, [t.optionId], ea)
                        : nR(J, [], ea, t)
            );
        }, [v, ea, J]),
        eB = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eD, eT ?? ez, ea),
            [ea, eT, ez, eD],
        ),
        eU = i.useCallback(() => {
            null != eB && eN(eB);
        }, [eB, eN]),
        [eK, eH] = i.useState(!1),
        [eW, eV] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eH(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eX = i.useCallback(() => {
            null != s && (eV(!0), setTimeout(s, 150));
        }, [s]),
        eQ = eB ?? (null == eD && null == eT ? (v[J.id] ?? null) : null),
        eZ = i.useMemo(
            () =>
                null == eQ
                    ? (function (e, t, n) {
                          let l = e.questions[n];
                          if (l?.optional !== !0) return null;
                          let r = Object.fromEntries(
                              Object.entries(t).filter((e) => {
                                  let [t] = e;
                                  return t !== l.id;
                              }),
                          );
                          return null == n_(e, r, n) && "" === nM(e, r) ? null : r;
                      })(l, v, Y)
                    : null,
            [v, l, Y, eQ],
        ),
        eY = null != eZ,
        eJ = (null != eQ || eY) && !Q,
        e0 = Y === Z - 1,
        e2 = i.useCallback(() => {
            Q || (null != eQ ? eN(eQ) : null != eZ && (j(eZ), eC(eZ)));
        }, [eC, Q, eQ, eN, eZ]),
        e4 = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, e1.vq)(e.target, HTMLTextAreaElement) ||
                    (0, e1.vq)(e.target, HTMLInputElement) ||
                    ((!(0, e1.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && e_
                            ? (e.preventDefault(), (eE ?? eI)())
                            : "ArrowRight" === e.key && eJ && (e.preventDefault(), e2())));
            },
            [eE, e_, eJ, eI, e2],
        ),
        e7 =
            es && !0 !== J.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: la.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: la.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(m.PencilIcon, {
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
                                  y((e) => ({ ...e, [J.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eU());
                              },
                              placeholder: I.intl.string(nI(J) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                              "aria-label": I.intl.formatToPlainString(S.default["4JeYPB"], { question: J.question }),
                              disabled: Q,
                              rows: 1,
                              className: la.Pu,
                              "data-conjure-clarification-other": J.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: u()(la.$O, { [la.fI]: eK && !eW, [la.Oh]: eW }),
        role: "dialog",
        "aria-label": J.question,
        "data-conjure-clarification": l.id,
        "data-state": Q ? "inert" : "open",
        "data-question-expanded": en ? "true" : void 0,
        "data-picker-open": R && !z ? "true" : void 0,
        "data-step": Y,
        tabIndex: -1,
        onKeyDown: e4,
        children: [
            (0, a.jsxs)("div", {
                className: la.rf,
                style: null == O ? void 0 : { height: O.heading + O.rows },
                "data-moving": z ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: U,
                        className: la.wx,
                        children: [
                            (0, a.jsx)(x.E, {
                                ref: H,
                                tag: "span",
                                id: `${J.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: en ? void 0 : p,
                                className: u()(nv.TK, la.R_, { [la.TB]: "exit" === eh, [la.JU]: "enter" === eh }),
                                children: ef,
                            }),
                            ej || en
                                ? (0, a.jsx)("div", {
                                      className: nv.Q7,
                                      children: (0, a.jsx)(ep.m, {
                                          text: eb,
                                          children: (0, a.jsx)(tr.K, {
                                              icon: en ? nO.ChevronSmallUpIcon : tJ.ChevronSmallDownIcon,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => et({ id: J.id, expanded: !en }),
                                              "aria-label": eb,
                                              "aria-controls": `${J.id}-label`,
                                              "aria-expanded": en,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(eg.D, {
                                      className: u()(nv.gb, nv.Q7),
                                      onClick: eX,
                                      "aria-label": I.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(ex.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: la.Cg,
                        style: null == O ? void 0 : { insetBlockStart: O.heading },
                        children: (0, a.jsxs)("div", {
                            className: la.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: W,
                                    className: la.Ge,
                                    role: "group",
                                    "aria-labelledby": `${J.id}-label`,
                                    "data-direction": $?.direction,
                                    "data-parity": null == $ ? void 0 : $.moves % 2,
                                    children: [
                                        null == eo
                                            ? null
                                            : (0, a.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: la.aK,
                                                  children: eo,
                                              }),
                                        (0, a.jsx)(lS, {
                                            projectId: n,
                                            question: J,
                                            selected: eu,
                                            disabled: Q,
                                            onPick: (e) =>
                                                ei
                                                    ? w((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [J.id]:
                                                                  ((n = t[J.id] ?? lI),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  J.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eM(e),
                                            own: eG,
                                        }),
                                        null != J.input
                                            ? (0, a.jsx)(lf, {
                                                  projectId: n,
                                                  question: J,
                                                  value: eL,
                                                  disabled: Q,
                                                  onChange: eq,
                                                  onFocus: eF,
                                                  onBlur: eO,
                                                  fallback: nE(J) ? null : e7,
                                              })
                                            : null,
                                        null != e$ ? (0, a.jsx)(nH, { link: e$, disabled: Q }) : null,
                                        null != J.note
                                            ? (0, a.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: la.aK,
                                                  children: J.note,
                                              })
                                            : null,
                                        nE(J) ? e7 : null,
                                        !0 === J.upload
                                            ? (0, a.jsx)("div", {
                                                  className: la.$0,
                                                  children: (0, a.jsx)(nF.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: I.intl.string(S.default.zxSq2q),
                                                      disabled: Q,
                                                      onClick: eR,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == q
                                    ? null
                                    : (0, a.jsx)(
                                          l_,
                                          {
                                              projectId: n,
                                              question: q.question,
                                              draft: q.draft,
                                              selected: q.selected,
                                              ownImage: q.ownImage,
                                              ownSelected: q.ownSelected,
                                              direction: q.direction,
                                              disabled: Q,
                                          },
                                          q.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            Z > 1 || ei || es || null != J.input || null != f || !0 === J.optional || nI(J)
                ? (0, a.jsxs)("div", {
                      className: nv.qr,
                      children: [
                          (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  Z > 1
                                      ? I.intl.formatToPlainString(S.default.yzYUjq, { index: Y + 1, total: Z })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: nv.zt,
                              children: [
                                  e_
                                      ? (0, a.jsx)(nF.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: h ?? I.intl.string(S.default.Pk5lfA),
                                            onClick: eE ?? eI,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  g
                                      ? null
                                      : (0, a.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: e0
                                                ? (o ?? I.intl.string(I.t.geKm7t))
                                                : I.intl.string(eY ? S.default.ZcrbKz : S.default.w1nRmT),
                                            disabled: !eJ,
                                            onClick: e2,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": e0 ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var lR = n(71637),
    lP = n(557744),
    lT = n(223347),
    lL = n(890698),
    l$ = n(27232),
    lD = n(505930);
let lq = [1, 2, 3, 4, 5];
n(786986);
var lF = n(693654);
function lO(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = i.useId(),
        o = i.useId();
    return (0, a.jsxs)("div", {
        className: lF.zm,
        children: [
            (0, a.jsx)(x.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, lL.wy)(t) }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: lF.uf,
                children: lq.map((e) => {
                    let i = null != n && e <= n,
                        s = i ? l$.StarIcon : lD.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: lF.uK,
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: o,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: lF.hF,
                                    "aria-label": (0, lL.MF)(t, e),
                                }),
                                (0, a.jsx)("span", {
                                    className: u()(lF.d4, { [lF.cO]: i }),
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
function lG(e) {
    let { pending: t } = e,
        n = (0, lL.PM)(t),
        l = i.useId();
    return (0, a.jsx)("section", {
        className: lF.Nr,
        "aria-labelledby": l,
        children: (0, a.jsxs)(nG.B, {
            gap: 12,
            children: [
                (0, a.jsxs)(nG.B, {
                    gap: 4,
                    children: [
                        (0, a.jsx)(p.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: I.intl.string(S.default.GVLtfq),
                        }),
                        (0, a.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: I.intl.string(S.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, a.jsxs)(nG.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, a.jsx)(
                                lO,
                                {
                                    dimension: e,
                                    value: n.scores[e],
                                    disabled: n.submitting,
                                    onChange: (t) => n.setScore(e, t),
                                },
                                e,
                            ),
                        ),
                        (0, a.jsx)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: I.intl.string(S.default.BvaFUc),
                        }),
                    ],
                }),
                (0, a.jsx)(nx.f, {
                    label: I.intl.string(S.default.d28g0o),
                    placeholder: I.intl.string(S.default.EBB7lL),
                    value: n.feedback,
                    onChange: n.setFeedback,
                    rows: 3,
                    maxLength: 2e3,
                    disabled: n.submitting,
                }),
                null != n.error
                    ? (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: n.error,
                      })
                    : null,
                (0, a.jsx)(nG.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: I.intl.string(S.default.CYQood),
                        disabled: !n.canSubmit,
                        loading: n.submitting,
                        onClick: n.submit,
                    }),
                }),
            ],
        }),
    });
}
var lz = n(894443),
    lB = n(525530),
    lU = n(564963),
    lK = n(530557),
    lH = n(431527),
    lW = n(628284);
let lV = new Set(["select", "channel", "role", "user"]);
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
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o, onDismiss: c } = e,
        m = i.useCallback(() => {
            (0, F.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: lK.KeyIcon })), [r.fields]),
        h = (0, lU.bB)(l, s),
        g = u()(lY.Lo, { [lY.jY]: h });
    if ("superseded" === s)
        return (0, a.jsx)(
            "article",
            {
                className: g,
                children: (0, a.jsx)(x.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: I.intl.string(S.default.CTxtdV),
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
                    (0, a.jsx)(x.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: I.intl.string(S.default.HCQvpO),
                    }),
                    (0, a.jsx)(lH.C, { label: I.intl.string(S.default.HCQvpO), size: "xs", items: f }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, a.jsx)(
            "article",
            {
                className: lY.Lo,
                children: (0, a.jsx)(lH.C, { label: I.intl.string(S.default.HCQvpO), size: "xs", items: f }),
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
                        className: lY.$h,
                        children: [
                            (0, a.jsx)("span", {
                                className: lY.c9,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(lW.CircleCheckIcon, {
                                    size: "xs",
                                    color: td.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: I.intl.string(S.default.sfp7Up),
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: r.fields
                            .map((e) => e.label)
                            .map((e) =>
                                I.intl.formatToPlainString(S.default["Z+FC3j"], {
                                    label: e,
                                    value: I.intl.string(S.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let p = null != r.note && "" !== r.note ? r.note : I.intl.string(S.default.MPGSHL),
        v = (0, a.jsx)(d.$, { variant: "primary", size: "sm", onClick: m, text: I.intl.string(S.default.EK8tKY) });
    return null != c
        ? (0, a.jsxs)("section", {
              className: u()(nv.nd, lY.fw),
              "aria-label": I.intl.string(S.default.O0QIqj),
              children: [
                  (0, a.jsxs)("div", {
                      className: nv.wx,
                      children: [
                          (0, a.jsx)(lK.KeyIcon, { size: "xs", color: td.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: nv.TK,
                              children: I.intl.string(S.default.O0QIqj),
                          }),
                          (0, a.jsx)(eg.D, {
                              className: u()(nv.gb, nv.Q7),
                              onClick: c,
                              "aria-label": I.intl.string(S.default.Hl7rif),
                              children: (0, a.jsx)(ex.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: lY.DQ,
                      children: [
                          (0, a.jsx)(lZ.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, a.jsx)(lH.C, { label: I.intl.string(S.default.HCQvpO), size: "xs", items: f }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: nv.qr,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: lY.xE,
                              children: I.intl.string(S.default["2OdXdn"]),
                          }),
                          (0, a.jsx)("div", { className: nv.zt, children: v }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("article", {
              className: lY.Lo,
              children: [
                  (0, a.jsx)(x.E, {
                      variant: "body-xs/semibold",
                      color: null != o ? "text-brand" : "text-muted",
                      tag: "span",
                      children: I.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                  }),
                  (0, a.jsx)(lZ.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, a.jsx)(lH.C, { label: I.intl.string(S.default.HCQvpO), size: "xs", items: f }),
                  (0, a.jsx)("div", { className: lY.sq, children: v }),
              ],
          });
}
var l0 = n(442331),
    l1 = n(513425);
let l2 = new Set(),
    l3 = new Set();
function l4(e) {
    return (
        l3.add(e),
        () => {
            l3.delete(e);
        }
    );
}
function l5() {
    return i.useSyncExternalStore(l4, () => l2);
}
function l7(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, tH.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function l8(e, t, n) {
    if (!n || null == t) return !1;
    let l = lQ(e, t);
    return l.length > 0 && !lX({ keys: l }, t);
}
var l9 = n(782973),
    l6 = n(290713),
    re = n(411236);
function rt(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: o,
            superseded: m,
            summary: f,
            markSaved: h,
        } = (function (e, t, n) {
            let l = l5(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                o = i.useCallback(() => {
                    if (null != n) {
                        if (!l2.has(n)) for (let e of ((l2 = new Set([...l2, n])), l3)) e();
                    } else a(!0);
                }, [n]),
                u = (0, c.bG)([l0.A], () => l8(t, l0.A.getSettings(e), s), [e, t, s]);
            return {
                done: u,
                superseded: (0, c.bG)([l1.A], () => null != n && l7(l1.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [l0.A, nk.A],
                    () => {
                        var n;
                        let l = l0.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => nk.A.getChannel(e)?.name ?? null),
                              lQ(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: I.intl.formatToPlainString(S.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return I.intl.string(S.default.CJq1rY);
                                                      case "checkbox":
                                                          return I.intl.string(
                                                              !0 === t ? S.default.nXtpn3 : S.default["0vfaMW"],
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
                                                                      : I.intl.string(S.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? I.intl.string(S.default.nEv677)
                                                              : I.intl.string(S.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return I.intl.string(S.default.Fw9G9A);
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
    if (m && !g)
        return (0, a.jsx)("article", {
            className: re.Mk,
            children: (0, a.jsx)(x.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: I.intl.string(S.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: re.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: re.Ol,
                    children: [
                        (0, a.jsx)(lW.CircleCheckIcon, {
                            size: "xs",
                            color: td.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(x.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: I.intl.string(S.default.AxBLLy),
                        }),
                    ],
                }),
                f.length > 0
                    ? (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: f.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === l9.B,
        v = null != n.note && "" !== n.note ? n.note : p ? null : I.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(l6.A, {
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
            let o = (0, a.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: I.intl.string(S.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: re.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: I.intl.string(S.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, a.jsx)(lZ.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: re.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: u()(nv.nd, nv.jx),
                      "aria-label": I.intl.string(S.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: nv.wx,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nv.TK,
                                      children: I.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(eg.D, {
                                      className: u()(nv.gb, nv.Q7),
                                      onClick: r,
                                      "aria-label": I.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(ex.XSmallIcon, {
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
                                  null != v
                                      ? (0, a.jsx)(lZ.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: nv.qr,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: re.xE,
                                      children: I.intl.string(S.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: nv.zt,
                                      children: [
                                          (0, a.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: I.intl.string(S.default["9J3OG8"]),
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
var rn = n(975571),
    rl = n(427123);
let rr = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var ra = n(874421),
    ri = n(932111),
    rs = n(940874),
    ro = n(404373),
    ru = n(89222);
function rc(e) {
    return "" !== ru.A.getDraft(e).trim();
}
var rd = n(29080);
function rm(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, tK.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, tK.Lf)(r) }),
    };
}
var rf = n(62617),
    rh = n(182368);
let rg = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rp = {
        snail: () => S.default.ABeVsS,
        goat: () => S.default.dhXay8,
        frog: () => S.default.SHeweG,
        bunny: () => S.default.FytFE1,
        cat: () => S.default["5c+sHs"],
        caterpillar: () => S.default["/FYcne"],
        butterfly: () => S.default["Ib/AxK"],
        dog: () => S.default.zDjBR1,
        spider: () => S.default["6sxyrN"],
        bee: () => S.default.cVtefg,
        bot: () => S.default.MjCw0v,
    },
    rx = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rf.Z)(),
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
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rf.Z)(),
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
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rf.Z)(),
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
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rf.Z)(),
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
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rf.Z)(),
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
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rf.Z)(),
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
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rf.Z)(),
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
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rf.Z)(),
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
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rf.Z)(),
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
                        () => (0, rf.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rf.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rh.u, tint: "var(--illo-purple-40)" },
    };
function rv(e) {
    return { ...rx[e], name: I.intl.string(rp[e]()) };
}
function rj(e) {
    return rg.includes(e) ? rv(e) : void 0;
}
function rb(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rg.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rg[(t + n) % rg.length]);
            }),
            l
        );
    })(e))
        t.set(n, rv(l));
    return t;
}
var ry = n(615839);
function rk(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : I.intl.string(S.default.KcFvbo);
}
var rw = n(60160),
    rA = n(101147);
function rC(e) {
    let t = (0, tK.SY)(e.steps);
    return null != t ? (0, tK.WQ)(t) : rk(e.task);
}
function rN(e) {
    let t = rb(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rj(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: rk(e.task),
                      todoId: e.task.todoId,
                      line: rC(e),
                  },
              ];
    });
}
function rS(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, tK.SY)(n.steps),
        d = u
            ? rC(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rk(e));
                  switch (e.status) {
                      case "failed":
                          return I.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return I.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return I.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, ry.MB)(e.durationMs),
                              });
                          return I.intl.formatToPlainString(S.default.nmI9Uh, { task: t });
                      default:
                          return I.intl.formatToPlainString(S.default.nmI9Uh, { task: t });
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
                                    className: nl.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rA.A,
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
                                      className: nl.iq,
                                      children: (0, a.jsx)(rw.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(tQ.A, {
        glyph: (0, a.jsx)(tZ.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rk(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nl.nC,
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
var rI = n(998445),
    rE = n(643210),
    r_ = n(648127),
    rM = n(372795),
    rR = n(163897);
let rP = "conjure-browser-viewer";
function rT(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [rE.A],
            () =>
                n.flatMap((e) => {
                    let n = rE.A.getTab(t, e);
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
        className: rR.kR,
        "aria-label": I.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rL, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rL(e) {
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
        c = (0, F.Ry)(rP),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, r_.i)(l.session);
    return (0, a.jsxs)(eg.D, {
        innerRef: s,
        className: u()(rR.Nr, h && rR.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, F.mM)(
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
        "aria-label": I.intl.formatToPlainString(S.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rR.Gt,
                children: [
                    (0, a.jsx)(rM.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: rR.Ji,
                        "aria-label": I.intl.formatToPlainString(S.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rR.qf,
                              children: (0, a.jsx)(rI.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rR.HS,
                              children: (0, a.jsx)(x.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: I.intl.string(S.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: rR.pG,
                children: [
                    (0, a.jsx)("span", { className: u()(rR.W9, h && rR.oM) }),
                    (0, a.jsx)(x.E, {
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
var r$ = n(268409);
let rD = new WeakMap(),
    rq = new WeakMap();
function rF(e) {
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
            [l1.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rD.get(e);
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
                    return (rD.set(e, n), n);
                })(l1.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, a.jsx)("li", { className: r$.h, children: (0, a.jsx)(rT, { projectId: t, sessionIds: o }) });
}
var rO = n(469393);
function rG(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, O.lG)(t.authored_at);
    return (0, a.jsx)(t2, {
        title: I.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rO.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rO.z,
                    children: [
                        (0, a.jsx)(x.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(x.E, {
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
                          text: I.intl.string(S.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var rz = n(493490),
    rB = n(17742);
let rU = [];
function rK(e) {
    let t = (0, c.bG)([rz.A], () => (null != e ? rz.A.getCaptures(e) : rU)),
        n = (0, c.bG)([rz.A], () => (null != e ? rz.A.getSelectedCapture(e) : null)),
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
var rH = n(714917),
    rW = n(463660),
    rV = n(970211);
function rX(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([rH.A], () => (null != e ? rH.A.getBackground(e) : null)),
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
                    f === m && o(m);
                }, [f, m]);
            return { src: null == e || null != n || u ? f : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        o = rK(n ? t : null);
    return null != o.selected
        ? null != o.src
            ? (0, a.jsx)("img", { className: rV.F1, src: o.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: u()(rV.LO, { [rV.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var rQ = n(155718);
function rZ(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let rY = ["command", "user_command", "message_command", "message"],
    rJ = new Set([rQ.kc.CHAT, rQ.kc.USER, rQ.kc.MESSAGE]);
function r0(e) {
    return e.type ?? rQ.kc.CHAT;
}
function r1(e) {
    return rJ.has(r0(e));
}
function r2(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function r3(e, t) {
    let n = rY.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !r2(e)), ...n.filter(r2)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || r2(r) || l.push(r);
    }
    return rY.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function r4(e, t, n) {
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
    let s = e.commands.filter(r1).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (r0(e)) {
                    case rQ.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case rQ.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(r2),
        u = a.length > 0 ? r3([...a, ...o], !0) : r3("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var r5 = n(377941),
    r7 = n.n(r5);
function r8(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function r9(e) {
    return e.type === rQ.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === rQ.kc.USER || e.type === rQ.kc.MESSAGE
          ? ""
          : "/";
}
let r6 = {
        [X.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [X.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [X.q7.ACTIVITY]: S.default["3/aHX6"],
        [X.q7.OVERLAY]: S.default["rPpf5/"],
        [X.q7.PROFILE_WIDGET]: null,
        [X.q7.AUTOMOD]: null,
        [X.q7.BOT]: null,
        [X.q7.APPLICATION_COMMANDS]: null,
    },
    ae = [X.q7.ACTIVITY, X.q7.APP_CHANNEL, X.q7.VOICE_CHANNEL, X.q7.OVERLAY];
function at(e) {
    return ae.find((t) => rZ(e, t)) ?? null;
}
let an = 1920 / 1018;
function al(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let ar = al(24, 1018),
    aa = al(24, 1920);
function ai(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var as = n(90947),
    ao = (((l = {}).IMAGE = "image"), l),
    au = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    ac = n(598748),
    ad = n(773669);
let am = [],
    af = {},
    ah = {};
function ag(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function ap(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: ao.IMAGE,
        visibility: au.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var ax = n(127258),
    av = n(803306),
    aj = n(587895),
    ab = n(432005),
    ay = n(963852),
    ak = n(95701),
    aw = n(619019),
    aA = n(427262);
let aC = new ak.nA({ id: "1337", guild_id: "1337", type: nS.rbe.GUILD_TEXT, name: "preview" });
function aN(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([nA.default], () => nA.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, av.nj)(new aw.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aS = /^@\S+/;
var aI = n(775602);
let aE = [S.default["3eTjcV"], S.default.l3j5nS];
var a_ = n(97808),
    aM = n(778712),
    aR = n(486020),
    aP = n(46054),
    aT = n(200700);
let aL = {
        alert: { label: () => I.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => I.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => I.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => I.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    a$ = {
        blocked: { label: () => I.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => I.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => I.intl.string(S.default.RGzFNK), tone: "green" },
    },
    aD = ["blocked", "alert", "allowed"],
    aq = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function aF(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : I.intl.formatToPlainString(I.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, aT.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? I.intl.formatToPlainString(I.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? I.intl.formatToPlainString(I.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? I.intl.formatToPlainString(I.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? I.intl.formatToPlainString(I.t.opVZ9q, { mins: n / 60 })
                                      : I.intl.formatToPlainString(I.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var aO = n(984097),
    aG = n(13673);
let az = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function aB(e) {
    let { example: t } = e,
        n = aF(t);
    return null == n
        ? null
        : (0, a.jsx)(x.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let aU = ["glazedgamer", "sprinkles", "donutking"];
function aK(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = aL[n.outcome];
    return (0, a.jsxs)("li", {
        className: u()(aO.nM, { [u()(aO.HV, aG.DX)]: s }),
        children: [
            (0, a.jsx)(tY.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: aO.my,
                children: (0, a.jsx)(a_.eu, {
                    src: (0, aR.AE)(void 0, void 0),
                    size: aM._3.SIZE_24,
                    "aria-label": I.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: aO.fw,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(x.E, {
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
function aH(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = a$[t.section],
        s = new Set(t.examples.map(aF)),
        o = 1 === s.size ? t.examples.map(aF)[0] : null;
    return (0, a.jsxs)("div", {
        className: aO.UO,
        children: [
            (0, a.jsxs)("div", {
                className: aO.RZ,
                children: [
                    (0, a.jsx)(x.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: az[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: aO.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(x.E, {
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
                className: aO.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(aK, { example: e, username: aU[(n + t) % aU.length], showReason: s.size > 1 }, t),
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
            aD
                .map((e) => ({ section: e, examples: t.filter((t) => aq[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: aO.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: aO.hk,
                      children: (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    aH,
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
var aV = n(276293),
    aX = n(460905),
    aQ = n(110384),
    aZ = n(365199),
    aY = n(633018),
    aJ = n(763754),
    a0 = n(267508),
    a1 = n(194085),
    a2 = n(20851),
    a3 = n(692508),
    a4 = n(798819);
function a5(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: u()(a4.item, a4.labelContainer, a4.colorDefault, {
            [a4.focused]: !0 === t.highlighted,
            [a4.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: a4.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: a4.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: u()(a4.label, a3.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: a4.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: a4.icon }),
                  })
                : null,
        ],
    });
}
function a7(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: u()(t, a3.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: I.intl.string(I.t["5IEsGx"]), icon: aQ.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: I.intl.string(I.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: u()(a4.menu, a3.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: a4.scroller,
            children: [
                (0, a.jsx)(a5, { item: s }),
                (0, a.jsx)("div", { className: a4.separator }),
                (0, a.jsx)(a5, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function a8() {}
function a9(e) {
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
        { projectId: p, exchanges: v } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, c.bG)([nA.default], () => nA.default.getCurrentUser())),
        (n = (0, c.bG)([eS.Ay], () => eS.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([aj.A], () => aj.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? I.intl.string(S.default.JEYq8M)),
        (o = (0, c.bG)([nA.default], () => (null != l ? nA.default.getUser(l) : void 0), [l])),
        (m = aN("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (f = d ? o : m),
        (h = aN("31338", I.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (g = aN("31339", (0, aA.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, ab.rh)({
                                          ...(0, ay.Ay)({
                                              channelId: aC.id,
                                              content: e,
                                              author: t,
                                              type: l ?? nS.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: nS.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: ax.G.APPLICATION_COMMAND,
                                                        user: (0, ay.Vi)(s),
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
                                              messageType: nS.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: nS.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(aS, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              v,
                              { bot: f, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: I.intl.string(S.default["y+QYes"]),
                                  memberMessage: I.intl.string(S.default.BUTRDc),
                              },
                          ),
                [v, f, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? f?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = aC.name;
    return (0, a.jsxs)("div", {
        className: a3.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: a3.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(aV.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: u()(a3.TE, "group-spacing-16"),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? a3.Rz : void 0,
                            children: [
                                (0, a.jsx)(a2.A, {
                                    message: n,
                                    channel: aC,
                                    author: (0, aJ.FT)(n.author, aC),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(a0.A, { message: n, channel: aC }) : void 0,
                                    usernameClassName: r?.target === "user" ? a3.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: a3.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(a1.Ay, {
                                              children: [
                                                  (0, a.jsx)(a1.qv, {
                                                      label: I.intl.string(I.t.lfIHs4),
                                                      icon: aX.ReactionIcon,
                                                      onClick: a8,
                                                  }),
                                                  (0, a.jsx)(a1.qv, {
                                                      label: I.intl.string(I.t["5IEsGx"]),
                                                      icon: aQ.ArrowAngleLeftUpIcon,
                                                      onClick: a8,
                                                  }),
                                                  (0, a.jsx)(a1.qv, {
                                                      label: I.intl.string(I.t["UKOtz+"]),
                                                      icon: aZ.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: a8,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? a3.ET : a3.je,
                                          inert: !0,
                                          children: (0, a.jsx)(a7, {
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
                className: a3.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(aY.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: I.intl.formatToPlainString(I.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var a6 = n(332173);
function ie(e) {
    let { name: t } = e;
    return (0, a.jsxs)(a6.A, { children: ["/", t] });
}
function it(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(r7());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(ie, { name: e.name }, e.start) : e.text));
}
n(827669);
var il = n(757789),
    ir = n(26137),
    ia = n(231483);
let ii = { frame: S.default.Z2bt4u, bot: S.default.EbvC13, commands: S.default.EbvC13, automod: S.default.tiMvei },
    is = {
        user_widget: { server: S.default.VlI3et, personal: S.default.njJ4YL },
        overlay_widget: { server: S.default.nUcjJ1, personal: S.default.RDpKqP },
    };
function io(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var iu = n(573634);
let ic = {
    frame: ef.GameControllerIcon,
    overlay_widget: il.WindowTopIcon,
    user_widget: ir.UserCircleIcon,
    bot: eh.RobotIcon,
    commands: eh.RobotIcon,
    automod: ia.ShieldIcon,
};
function id(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: u()(iu.e7, l),
        children: [(0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function im(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iu.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iu.jw,
                    children: (0, a.jsx)(x.E, {
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
function ih(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iu.lj,
        children: [
            (0, a.jsx)("span", {
                className: u()(iu.Vo, iu.G),
                children: (0, a.jsx)(eu.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iu.aV,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function ig(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iu.wZ,
        children: t.map((e, t) => {
            let n = r9(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(ie, { name: e.name })
                                : (0, a.jsx)(a6.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function ip(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iu.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iu.Aw,
                    children: (0, a.jsx)(x.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(it, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function ix(e) {
    let { experience: t, inServer: n, bullets: l, preview: r, blocks: i, commandNames: s } = e,
        o = io(t) ? eu.AppsIcon : ic[t.kind],
        u = (function (e, t) {
            if (io(e)) return I.intl.string(S.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = is[e.kind];
                return I.intl.string(t ? n.server : n.personal);
            }
            return I.intl.string(ii[e.kind]);
        })(t, n),
        c = n && t.kind in is ? I.intl.string(S.default.UXJCSG) : null;
    return (0, a.jsxs)("section", {
        className: iu.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: iu.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iu.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(x.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != c ? (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, a.jsx)("div", { className: iu.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, a.jsx)(x.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(it, { text: l[0], commandNames: s }),
                  })
                : l.length > 0
                  ? (0, a.jsx)(ip, { bullets: l, commandNames: s })
                  : null,
            i.length > 0 ? (0, a.jsx)("div", { className: iu.PG, children: i }) : null,
        ],
    });
}
function iv(e) {
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
                                let n = t.map(r7()).join("|");
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
        className: iu.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iu.Lv,
                children: [(0, a.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iu.yF, role: "separator" }),
                            (0, a.jsx)(ix, {
                                experience: t,
                                inServer: o,
                                bullets: n,
                                preview: d(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: S.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: S.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: I.intl.string(n), labels: l.map(r8) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      id,
                                                      { caption: n, children: (0, a.jsx)(im, { labels: l }) },
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
                                                        let n = I.intl.string(S.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(X.q7.APP_CHANNEL)) {
                                                            let r = e.app_channel_names ?? [];
                                                            l = (
                                                                null != t.app_channels && t.app_channels.length > 0
                                                                    ? t.app_channels
                                                                    : r.length > 0
                                                                      ? r.map((e) => ({ name: e }))
                                                                      : [{ name: el(t.name) }]
                                                            ).map((e) => {
                                                                let { name: t, description: l } = e,
                                                                    r = l?.trim() ?? "";
                                                                return { name: t, description: "" !== r ? r : n };
                                                            });
                                                        }
                                                        return {
                                                            channels: l,
                                                            launchableAnywhere: t.surfaces.includes(X.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(X.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, a.jsx)(
                                                                id,
                                                                {
                                                                    className: iu.Iw,
                                                                    caption: I.intl.formatToPlainString(
                                                                        S.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iu.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                ih,
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
                                                            ? [I.intl.string(S.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [I.intl.string(S.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    id,
                                                                    {
                                                                        caption: I.intl.string(S.default.MY6UGJ),
                                                                        children: (0, a.jsx)(im, { labels: r }),
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
                                                              id,
                                                              {
                                                                  caption: I.intl.string(I.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(ig, { commands: e.commands }),
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
var ij = n(633075),
    ib = n(591410),
    iy = n(27399);
function ik(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nA.default], () => nA.default.getCurrentUser()),
        r = i.useMemo(() => new ij.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iy.H,
              children: (0, a.jsx)(ib.A, {
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
var iw = n(443863);
function iA(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: al(i.width * t, 1920), height: al(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(rX, { projectId: n }),
            (0, a.jsx)("div", {
                className: iw.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": ar,
                    "--custom-conjure-plan-overlay-widget-end": aa,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: iw.M7, onError: s }),
            }),
        ],
    });
}
function iC(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e3.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lj.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function iN(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: o } = (0, lb._)(t, r);
    return s
        ? null
        : (0, a.jsx)(eg.D, {
              className: iw.xX,
              onClick: () => iC(t, [{ id: r, alt: l }], 0),
              "aria-label": I.intl.string(S.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: iw.sN, onError: o }),
          });
}
function iS(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: d } = (0, lb._)(t, r),
        [m, f] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: v,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([aI.Ay], () => aI.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, o] = i.useState(!1),
                u = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!u) return;
                let e = setInterval(() => a((e) => (e + 1) % aE.length), 4e3);
                return () => clearInterval(e);
            }, [u]);
            let m = i.useCallback((e) => {
                    (o(!0), a(e));
                }, []),
                f = i.useCallback(() => m(d), [m, d]);
            return { slide: d, labels: aE.map((e) => I.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: m || h });
    if (o) return null;
    let b = I.intl.string(S.default.mjryK4),
        y = I.intl.string(S.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: iw.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(eg.D, {
                className: u()(iw.xX, iw.nj, { [iw.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(an) },
                onClick: () => iC(t, [{ id: r, alt: b }], 0),
                "aria-label": I.intl.string(S.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: b, className: iw.Ac, onError: d })
                          : (0, a.jsx)(iA, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: iw._4,
                role: "group",
                "aria-label": I.intl.string(S.default.EH36X6),
                children: v.map((e, t) =>
                    (0, a.jsx)(
                        eg.D,
                        {
                            className: u()(iw.c, { [iw.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => j(t),
                            children: (0, a.jsx)(x.E, {
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
function iI(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: o } = (0, lb._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(eg.D, {
                  className: iw.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: iw.rA, onError: o }),
              }),
          });
}
function iE(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: I.intl.formatToPlainString(S.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: iw.Op,
              children: (0, a.jsxs)("div", {
                  className: iw.uW,
                  children: [
                      (0, a.jsx)(x.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: I.intl.string(S.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: iw.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(iI, { projectId: t, id: r, alt: i, onOpen: () => iC(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function i_(e) {
    var t;
    let n,
        l,
        r,
        s,
        o,
        u,
        m,
        f,
        h,
        g,
        { projectId: p, proposal: v, version: j, onApprove: b } = e,
        { botExchanges: y } =
            ((n = rZ(v, X.q7.APPLICATION_COMMANDS)),
            (l =
                rZ(v, X.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(r1)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : r4(v, l, {
                              message: I.intl.string(S.default.J7qggf),
                              reply: I.intl.string(S.default.nqYtiy),
                              event: I.intl.string(S.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = ah } = t,
                r = (0, c.bG)([ad.default], () => ad.default.locale),
                a = (0, c.bG)([eS.Ay], () => {
                    let t = eS.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(af);
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
                                                          ...ag(n),
                                                          ...(null != n.fallback ? { fallback: ag(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = as.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[ac.m.WIDGET_TOP] || null == i[ac.m.WIDGET_BOTTOM]
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
                                                                    type: as.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: as.oG.NUMBER, value: a })
                                                                : (r[e] = { type: as.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(ap),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: am,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == o ? null : { applicationId: a, rendererProps: o }), [a, o]);
        })(p, v),
        w = j?.superseded === !0,
        A = v.what_changed?.trim() ?? "",
        C =
            ((t = v.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === r9(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        N =
            ((o =
                null == (s = at(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (m = null != (u = v.design_image) && u.id !== ai(v)?.id ? u : null),
            (f = ai(v)),
            (h =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? o),
            (g =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? o),
            {
                ui: null != m && null != h ? { experienceId: h, design: m } : null,
                overlay:
                    null != f && null != g ? { experienceId: g, design: f, size: Z(v.overlay_widget ?? null) } : null,
            }),
        E = i.useMemo(
            () =>
                v.commands.some(r1)
                    ? r4({ ...v, bot: void 0 }, "commands", {
                          message: I.intl.string(S.default.J7qggf),
                          reply: I.intl.string(S.default.nqYtiy),
                          event: I.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        _ = (0, c.bG)([eS.Ay], () => eS.Ay.getProject(p)?.name, [p]),
        M = (0, c.bG)([eS.Ay], () => eS.Ay.getProject(p)?.install_scope === "guild", [p]),
        R =
            w && null != j
                ? I.intl.formatToPlainString(S.default.YZ3qJs, { version: j.version })
                : I.intl.string(S.default["3b6e7o"]),
        P = w ? (0, a.jsx)(t4, { children: I.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(t5, {
        title: R,
        meta: P,
        superseded: w,
        showLabel: I.intl.string(S.default.yD8EJS),
        hideLabel: I.intl.string(S.default.nSPGNb),
        bodyClassName: iw.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: iw.Qs,
                children: (0, a.jsx)(iv, {
                    appName: _ ?? v.experiences?.[0]?.name ?? "",
                    inServer: M,
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(it, { text: v.summary, commandNames: C }),
                            }),
                            (0, a.jsx)(iE, { projectId: p, proposal: v }),
                            "" !== A
                                ? (0, a.jsxs)("section", {
                                      className: iw.uW,
                                      children: [
                                          (0, a.jsx)(x.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: I.intl.string(S.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(x.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(it, { text: A, commandNames: C }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: v,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget": {
                                let t,
                                    n =
                                        e.id === N.ui?.experienceId
                                            ? (0, a.jsx)(iN, {
                                                  projectId: p,
                                                  design: N.ui.design,
                                                  alt: I.intl.string(null == (t = at(v)) ? S.default["3/aHX6"] : r6[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === N.overlay?.experienceId
                                            ? (0, a.jsx)(iS, {
                                                  projectId: p,
                                                  design: N.overlay.design,
                                                  size: N.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(ik, { ...k }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, a.jsx)(aW, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || r2(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, E);
                                return t.length > 0 ? (0, a.jsx)(a9, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: C,
                }),
            }),
            null == b || w
                ? null
                : (0, a.jsxs)("div", {
                      className: iw.qr,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: I.intl.string(S.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: I.intl.string(S.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var iM = n(289565);
function iR(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: iM.m, children: n })
        : (0, a.jsxs)("div", {
              className: iM.Z,
              children: [
                  n,
                  (0, a.jsx)(ep.m, {
                      text: I.intl.string(I.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tr.K, {
                          "aria-label": I.intl.string(I.t.WAI6xu),
                          icon: ex.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function iP(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function iT(e, t) {
    return null != e && iP(t, e.status);
}
let iL = new WeakMap();
function i$(e) {
    let { projectId: t, publish: n } = e,
        l = (0, eO.A)(t, n);
    return (0, a.jsx)(d.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function iD(e) {
    let { projectId: t, cta: n } = e,
        l = (0, eF.Ay)(t);
    return null != l && iT(l, n)
        ? (0, a.jsx)(iR, {
              children: (0, a.jsxs)(nG.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(i$, { projectId: t, publish: l }),
                      null != l.failure
                          ? (0, a.jsx)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: l.failure,
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var iq = n(303345),
    iF = n(44255),
    iO = n(416473),
    iG = n(289830);
function iz(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [eS.Ay],
                    () => {
                        let t = eS.Ay.getProject(e);
                        return null != t && (0, eS.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, o] = i.useState(null),
                u = i.useCallback(async () => {
                    (a("sending"), o(null));
                    try {
                        (await (0, iO.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (o(e instanceof iq.A ? e.message : I.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? I.intl.formatToPlainString(S.default.orZDqY, { time: (0, iF.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, iF.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? u : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(t2, {
        title: I.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: iG.r,
            children: [
                (0, a.jsxs)("div", {
                    className: iG.z,
                    children: [
                        (0, a.jsx)(x.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: I.intl.string(S.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: I.intl.string(S.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(x.E, {
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
                          text: I.intl.string(S.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var iB = n(478016),
    iU = n(989271);
function iK(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(eg.D, {
        className: u()(iU.nM, { [iU.f1]: s, [iU.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": I.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: iU.jo,
                children: [
                    n
                        ? (0, a.jsx)(iB.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: iU.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(x.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: iU.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function iH(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(t2, {
        title: I.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                iK,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var iW = n(313537),
    iV = n(125372);
let iX = {
        add_to_server: S.default["7SD3ul"],
        remove_from_server: S.default.ErhKil,
        change_server: S.default["1E5/ay"],
    },
    iQ = { add_to_server: S.default["Wy+mGW"], remove_from_server: S.default.vUWHZe, change_server: S.default.MfnSEe };
var iZ = n(831913),
    iY = n(618785);
function iJ(e) {
    var t;
    let n,
        l,
        r,
        i,
        s,
        o,
        u,
        m,
        f,
        h,
        g,
        p,
        { projectId: v, change: j, current: b, onReply: y } = e,
        {
            project: k,
            action: w,
            done: A,
            note: C,
        } = ((n = (0, c.bG)([eS.Ay], () => eS.Ay.getProject(v), [v])),
        (l = (0, iW.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === j.action ? j.guild_id : l),
        (i = (0, c.bG)([le.A], () => le.A.getGuild(t)?.name, [t]) ?? I.intl.string(S.default["6bhivN"])),
        (s = (0, iV.Y)(v).length > 0),
        (o =
            (0, c.bG)(
                [l1.A],
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
                    })(l1.A.getMessages(v), j, l),
                [v, j, l],
            ) &&
            null != n &&
            ("remove_from_server" === j.action ? !r : r)),
        (u = "change_server" !== j.action || null == j.guild_id || l === j.guild_id),
        (m = null != n && ("add_to_server" === j.action ? !r : r) && u && !o),
        (f = null != n && (0, eS.PV)(n)),
        (h = "remove_from_server" !== j.action),
        (g = m && f ? { kind: j.action, label: I.intl.string(iX[j.action]), disabled: h && !s } : null),
        (p = null),
        m && !f ? (p = I.intl.string(S.default.Kt9exT)) : g?.disabled === !0 && (p = I.intl.string(S.default.NXvmoQ)),
        { project: n, action: g, done: o ? I.intl.formatToPlainString(iQ[j.action], { server: i }) : null, note: p }),
        N = j.keep_label,
        E = b && null != w,
        _ = E && null != N && null != y,
        M = A ?? (b ? C : null);
    return null != M || E
        ? (0, a.jsxs)(nG.B, {
              gap: 8,
              children: [
                  E
                      ? (0, a.jsxs)(nG.B, {
                            direction: "horizontal",
                            gap: 8,
                            wrap: !0,
                            children: [
                                (0, a.jsx)(d.$, {
                                    variant: "remove_from_server" === w.kind ? "critical-secondary" : "primary",
                                    size: "sm",
                                    text: w.label,
                                    disabled: w.disabled,
                                    onClick: () => {
                                        null != k &&
                                            (w?.kind === "remove_from_server"
                                                ? (0, iZ.A)({ project: k })
                                                : (0, iY.A)({ projectId: v }));
                                    },
                                }),
                                _
                                    ? (0, a.jsx)(d.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: N,
                                          onClick: () => y(N),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != M ? (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: M }) : null,
              ],
          })
        : null;
}
var i0 = n(919790),
    i1 = n(908492),
    i2 = n(971824),
    i3 = n(162052),
    i4 = n(165648);
function i5(e) {
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
        x = i.useMemo(() => (0, tK.Jf)(n, l), [n, l]),
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
            className: nl.pj,
            "data-live": !1,
            children: (0, a.jsx)(tQ.A, {
                glyph: (0, a.jsx)(rd.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: I.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, tK.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rb(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        C = rN(k);
    return (0, a.jsxs)("ol", {
        className: nl.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(tV.Ay, {
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
                let l = null != e.task.helperMark ? rj(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rS,
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
            (0, a.jsx)(rF, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: nl.YO,
                      children: (0, a.jsx)(nt, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function i7(e) {
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
            publishCta: v,
            onPickIdea: j,
            pickedIdeaIds: b,
            onApprovePlan: y,
            sideReply: k = !1,
            sideReplyAcknowledges: w,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: N,
            onRestoreProposal: E,
            publishScheduleProposal: _,
            publishScheduleProposalCurrent: M = !1,
            serverChange: R,
            serverChangeCurrent: P = !1,
            onCardReply: T,
        } = e,
        L = i.useMemo(
            () => rm({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: $, lastStreamedMessage: D, showsClosingMessage: q, closingContent: F } = L,
        O = (A ? C : void 0) ?? L.attachmentsHost,
        G = q && !A,
        z = null == c ? null : (0, a.jsx)(i0.A, { projectId: t, attachments: c }),
        B = null == z ? null : (0, a.jsx)("div", { className: nl.MT, children: z }),
        U = k
            ? (0, a.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return I.intl.string(S.default.Mv5OmK);
                          case "queued":
                              return I.intl.string(S.default["Po/2mi"]);
                          case "restarting":
                              return I.intl.string(S.default.Vj0woh);
                          default:
                              return I.intl.string(S.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nl.ue,
        children: [
            $.length > 0 && !A
                ? (0, a.jsx)("ol", {
                      className: nl.dO,
                      children: $.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nl.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: i4.PT,
                                          children: (0, i1.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === O && e === D ? B : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(i_, { projectId: t, proposal: r, version: s, onApprove: y })
                : G
                  ? (0, a.jsxs)("div", {
                        className: u()(nl.ky, i3.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: u()(i4.PT, nl.cW),
                                children: (0, i1.U)(F, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === O ? B : null,
                            U,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: u()(nl.ky, nl.k1, i3.XR, { [i2.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(lJ, {
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
                      className: u()(nl.ky, nl.k1, i3.XR),
                      children: (0, a.jsx)(rt, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== O && ("closing" !== O || G) ? null : z,
            null != v ? (0, a.jsx)(iD, { projectId: t, cta: v }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(iH, { ideas: o, pickedIdeaIds: b, onPick: j }) : null,
            null != N ? (0, a.jsx)(rG, { proposal: N, onRestore: E }) : null,
            null != R ? (0, a.jsx)(iJ, { projectId: t, change: R, current: P, onReply: T }) : null,
            null != _ ? (0, a.jsx)(iz, { projectId: t, proposal: _, current: M }) : null,
            G ? null : U,
        ],
    });
}
var i8 = n(286251),
    i9 = n(146806),
    i6 = n(475358),
    se = n(783977),
    st = n(559647),
    sn = n(787564),
    sl = n(339200),
    sr = n(234320),
    sa = n(191023),
    si = n(285796),
    ss = n(922329),
    so = n(153171);
function su(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(ss.p, {
        name: I.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: tx.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sa.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: tx.OY,
                    children: (0, a.jsx)(m.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(x.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: I.intl.string(S.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: so.o1,
            onClick: () => (0, k.xU)(t),
            "aria-label": I.intl.string(S.default.N852dj),
            children: (0, a.jsx)(si.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sc(e) {
    let { send: t } = e;
    return (0, a.jsxs)(ss.p, {
        compact: !0,
        name: I.intl.string(S.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: I.intl.string(S.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: so.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(nF.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: I.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sd = n(587157),
    sm = n(347111),
    sf = n(120234),
    sh = n(901173),
    sg = n(161431),
    sp = n(46653),
    sx = n(695184),
    sv = n(661191),
    sj = n(475458),
    sb = n(957071),
    sy = n(927659),
    sk = n(351906),
    sw = n(407653),
    sA = n(322915);
function sC(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        o = (0, c.bG)([sk.A], () => sk.A.hidePersonalInformation ?? !1),
        u = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      sy.Ay.User,
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
                      sy.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(sw.A, { projectId: n, file: e.file, className: sA.Vk }),
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
    return (0, a.jsx)(sy.Ay, {
        id: t,
        className: sA.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": I.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(sN, { titleId: u, title: I.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(sN, { titleId: d, title: I.intl.string(S.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function sN(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(x.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sA.Gf, children: n }),
            l,
        ],
    });
}
var sS = n(719442),
    sI = n(355622),
    sE = n(408018),
    s_ = n(186306),
    sM = n(323350),
    sR = n(35277),
    sP = n(68059),
    sT = n(267102),
    sL = n(259691);
let s$ = (0, ak.createChannelRecord)({ id: "1", type: nS.rbe.DM });
function sD(e) {
    let t = sl.VW.end(e, []);
    return { anchor: t, focus: t };
}
function sq(e) {
    return (0, sM.WO)(sl.VW.richValue(e), { mode: "raw" });
}
function sF(e, t) {
    ((e.children = (0, sE.x7)(t)), (e.selection = sD(e)), e.onChange());
}
function sO(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(ri.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(sL.A, { attachmentId: r }), n] });
}
var sG = n(366811);
function sz(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function sB(e) {
    let t = sG.A.getState().path;
    return sz(window.location.pathname, e) && (null == t || sz(t, e));
}
function sU(e, t) {
    return null != t && (0, e1.vq)(e) && t.contains(e);
}
var sK = n(497437),
    sH = n(465410);
let sW = "body-md/normal",
    sV = null;
function sX(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        o = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(0),
        [f, h] = i.useState(0),
        [g, p] = i.useState(0),
        [v, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            j({
                frontFrom: 1e3 * (0, i9._R)(m),
                frontTo: 1e3 * (0, i9._R)(f),
                backFrom: 1e3 * (0, i9.T)(m),
                backTo: 1e3 * (0, i9.T)(f),
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
    let N = "in" === k ? v.backFrom : v.frontFrom,
        E = "out" === k ? v.frontTo : v.backTo,
        _ = (0, c.bG)([aI.Ay], () => aI.Ay.useReducedMotion),
        M = t === I.intl.string(S.default.Zc7gML),
        R = r === t && M;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: u()(sK.VT, { [sK.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${N}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, E - N)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(i6.e, { shortcut: "tab", className: sK.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i8.o, {
                text: t,
                variant: sW,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(sK.xM, { [sK.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            P(sK.IS, n || (!_ && "out" === k), o),
            (0, a.jsx)("span", {
                ref: d,
                className: sK.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(x.E, { variant: sW, tag: "span", children: t }),
            }),
            R
                ? (0, a.jsxs)("span", {
                      className: sK.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(x.E, { variant: sW, tag: "span", className: sK.xM, children: t }),
                          P(sK.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let sQ = i.memo(function (e) {
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
                modelSettings: w,
                onModelSettingsChange: A,
                visible: C = !0,
            } = e,
            N = n && !l,
            E = (function (e) {
                let t = i.useContext(sT.Ay),
                    [n] = i.useState(() => {
                        let n = (0, sS.ie)();
                        return (
                            (n.children = (0, sE.x7)(e)),
                            (n.selection = sD(n)),
                            (0, sP.a)({
                                editor: n,
                                chatInputType: sI.oU.GENERIC_RICH_TEXTAREA,
                                channel: s$,
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
                                    for (let [t, l] of sl.VW.nodes(e, { at: [], match: sl.l5.isText }))
                                        for (let e of t.text.matchAll(ri.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        s_.o.withMergedEntry(e, () =>
                                            sl.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    sR.b.textToVoid(
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
            })(ru.A.getDraft(t)),
            [_, M] = i.useState(() => sq(E));
        (0, sf.N$)(_);
        let R = i.useRef(_),
            [P, T] = i.useState(null),
            $ = i.useCallback(() => {
                let e = sq(E);
                (e !== R.current && ((R.current = e), (0, sm.I)(t, e), M(e)),
                    T(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sl.ZF.isCollapsed(t)) return null;
                            let [n] = sl.VW.node(e, t.anchor.path);
                            return sl.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(E),
                    ));
            }, [E, t]),
            D = i.useCallback((e) => sF(E, e), [E]),
            q = "" !== _.trim();
        i.useEffect(() => y?.(q), [q, y]);
        let F = i.useRef(t);
        i.useLayoutEffect(() => {
            F.current !== t && ((F.current = t), sF(E, ru.A.getDraft(t)));
        }, [E, t]);
        let O = (0, c.bG)([aI.Ay], () => aI.Ay.isSubmitButtonEnabled),
            [G, z] = i.useState(!1),
            [B, U] = i.useState(!1);
        (i.useEffect(() => {
            r ? U(!1) : (G && U(!0), z(!1));
        }, [r, G]),
            i.useEffect(() => {
                if (!B) return;
                let e = setTimeout(() => U(!1), sY);
                return () => clearTimeout(e);
            }, [B]));
        let {
                drafts: K,
                addFiles: H,
                pasteFiles: W,
                removeDraft: V,
                settled: Q,
                takeRefs: Z,
            } = (0, e7.FM)({ projectId: t, surface: "chat", onUploadFile: f }),
            Y = (0, k.fc)(t),
            J = (0, k.bE)(t),
            ee = i.useRef(J);
        i.useEffect(() => {
            let e = ee.current;
            ((ee.current = J), N && null != e && null != J && J !== e && sl.VW.focus(E));
        }, [J, N, E]);
        let et = "" !== _.trim() || K.length > 0 || b || Y,
            en = N && et && Q,
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
        let ea = (0, sg.rU)(t),
            [ei, es] = i.useState(null),
            [eo, eu] = i.useState(0),
            ec = i.useMemo(() => (null != P && N ? (0, sh.OG)(P, P.length) : null), [P, N]),
            ed = ec?.start ?? null;
        i.useEffect(() => {
            null == ed ? es(null) : (0, sg.IP)(t);
        }, [ed, t]);
        let em = ed === ei ? null : ec,
            ef = (function (e, t) {
                let n = (0, c.bG)([eS.Ay], () => eS.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, sj.yv)(n),
                    a = (0, c.bG)([sp.default], () => sp.default.getId()),
                    s = null != n && (0, X.pL)(n) ? n.guild_id : void 0,
                    o = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != s && null != o && sx.A.requestMembers(s, o, 100);
                    }, [s, o]),
                    (0, c.yK)(
                        [n6.Ay, le.A, nA.default],
                        () => {
                            if (null == o) return [];
                            let e = null != s ? le.A.getGuild(s) : null,
                                t = (t) => (0, sh.mO)(t, o, null != e ? n6.Ay.getNick(e.id, t.id) : null),
                                i = new Set(n?.collaborator_role_ids ?? []),
                                u = null != e && i.has(sv.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : n6.Ay.getMemberIds(e.id)
                                              .map((e) => nA.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (u ||
                                                          (n6.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              i.has(e),
                                                          ) ||
                                                          lt.$3({
                                                              permission: nS.xBc.MANAGE_GUILD,
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
            eh = i.useMemo(() => (null == em ? [] : (0, sh.l$)(ef, ea, em.text)), [em, ef, ea]),
            eg = em?.text;
        i.useEffect(() => eu(0), [eg]);
        let ex = eh.length > 0,
            ev = Math.min(eo, Math.max(0, eh.length - 1)),
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
                            (sR.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                sR.b.insertText(e, `${n} `));
                        })(E, em.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [eh, em, E],
            ),
            ey = i.useCallback(() => {
                if (!en) return;
                let e = Z(),
                    n = Y
                        ? (function (e) {
                              let t = (0, k.K7)(e);
                              if (null == t || !(0, ns.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, k.C)(e);
                              return (
                                  (0, k.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, e$.Wx)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (no.set(i, s),
                                          (s.job = (0, ns.B)({
                                              capture: (t) => (0 === t ? l : (0, k.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tT(e),
                                                              r = tT(e);
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
                                              send: (n) => (0, e$.dv)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nc(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (no.delete(i),
                                                          window.setTimeout(() => {
                                                              (nc(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                o(_, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == sV && (sV = document.createElement("canvas").getContext("2d"));
                    let i = sV;
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
                })(s0(eE.current), eF.current, (0, sh.Lj)(_));
                ("" !== l && er(l), D(""), es(null));
            }, [en, Y, t, _, o, Z, D]),
            ek = i.useCallback(
                (e) => {
                    (e.preventDefault(), ey());
                },
                [ey],
            ),
            ew = i.useCallback(() => {
                null != d && !G && (z(!0), d(), N && sl.VW.focus(E));
            }, [d, G, N, E]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (!t) return;
                    let e = sU(document.activeElement, l?.current);
                    function r(t) {
                        e = sU(t.target, l?.current);
                    }
                    function i(t) {
                        var r, i, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            sB(n) &&
                            (0, k.K7)(n)?.active !== !0 &&
                            !(0, L._c)(n).active &&
                            ((r = t.target),
                            (i = l?.current),
                            (s = e),
                            ((0, e1.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!sU(r, i) && null == r.closest('input, textarea, [contenteditable="true"]')
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
        let eA = (r && null != d) || B,
            eC = null == x || "" !== _ || !N || s || b ? null : x,
            eN = i.useCallback(
                (e) => {
                    if (ex && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = eh.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eu((ev + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eb(ev));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), es(em?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && (0, k.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, k.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && r && null != d && sB(t)) {
                        (e.preventDefault(), e.stopPropagation(), ew());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eC) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), D(eC));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != h && (e.preventDefault(), h());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ey());
                },
                [ey, h, r, d, ew, eC, D, ex, eh.length, ev, eb, em, t],
            ),
            eI = i.useCallback(
                (e) => {
                    N && W(e);
                },
                [N, W],
            );
        (0, sr.Vo)({
            event: nS.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eI(t);
            },
        });
        let eE = i.useRef(null),
            e_ = i.useCallback(() => {
                let e = R.current;
                p?.((0, sh.Lj)(e), () => {
                    R.current === e && D("");
                });
            }, [p, D]),
            [eM, eR] = i.useState(0),
            [eP, eT] = i.useState(!1);
        i.useEffect(() => {
            if (0 === _.length) return void eT(!1);
            let e = s0(eE.current);
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
            eT(!0);
            let t = setTimeout(() => eT(!1), sZ);
            return () => clearTimeout(t);
        }, [_]);
        let eL = i.useMemo(() => ({ "--custom-glow-x": `${eM}px` }), [eM]),
            eD = eP ? ` ${sK.EB}` : "",
            eq = s
                ? I.intl.string(S.default.qqlUiW)
                : l
                  ? I.intl.string(S.default.Z0hyNL)
                  : N
                    ? b
                        ? I.intl.string(S.default.knUjL3)
                        : Y
                          ? I.intl.string(S.default["6rXxwa"])
                          : j
                            ? I.intl.string(S.default.VxH5vv)
                            : v
                              ? I.intl.string(S.default.IevBEw)
                              : I.intl.string(r ? S.default["0BJa/0"] : S.default.TEeU7z)
                    : I.intl.string(S.default.zZ9NgM),
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
            ez = i.useId(),
            eB = i.useId(),
            eU = null != eC,
            eK = el ?? eC ?? eq,
            eH = "" === _ && "" !== eK;
        return (0, a.jsxs)("form", {
            onSubmit: ek,
            className: sK.DA,
            children: [
                ex
                    ? (0, a.jsx)(sC, {
                          id: ej,
                          projectId: t,
                          suggestions: eh,
                          selectedIndex: ev,
                          onHover: eu,
                          onSelect: eb,
                      })
                    : null,
                K.length > 0 || Y
                    ? (0, a.jsxs)("div", {
                          className: sK.lN,
                          children: [
                              K.map((e) => (0, a.jsx)(e7.Nl, { draft: e, onRemove: V }, e.localId)),
                              Y ? (0, a.jsx)(su, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${sK.wg} ${sK.LP}${eD}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${sK.wg} ${sK.L3}${eD}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: sK.VA,
                    ref: eE,
                    children: [
                        (0, a.jsx)(sb.A, {
                            navId: "conjure-composer-attach",
                            disabled: !N,
                            buttonClassName: `${sK.Y0} ${sK.nu}`,
                            iconClassName: sK.Qu,
                            onAddFiles: H,
                            onImport: g,
                            onSendToOtherProjects: null != p ? e_ : void 0,
                        }),
                        eH
                            ? (0, a.jsx)("div", {
                                  ref: eG,
                                  className: sK.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(
                                      sX,
                                      { text: eK, offering: eU && null == el, typed: null != el },
                                      C ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, a.jsx)(tY.A, { id: eB, children: I.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(ri.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sn.A, {
                                editor: E,
                                containerClassName: u()(sK.sq, sH.dv),
                                className: sK.jp,
                                readOnly: !N,
                                canFocus: N,
                                onChange: $,
                                onBlur: () => T(null),
                                onKeyDown: eN,
                                onPaste: eI,
                                renderExtraElement: sO,
                                "aria-labelledby": eB,
                                "aria-describedby": eH ? ez : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ex,
                                "aria-controls": ex ? ej : void 0,
                                "aria-activedescendant": ex ? ((0, sy.aI)(ev) ?? void 0) : void 0,
                            }),
                        }),
                        eH ? (0, a.jsx)(tY.A, { id: ez, children: eq }) : null,
                        (0, a.jsx)("div", {
                            className: sK.Sz,
                            onMouseDown: eA ? sJ : void 0,
                            children: eA
                                ? (0, a.jsx)(ep.m, {
                                      text: I.intl.string(S.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${sK.Y0} ${sK.$E} ${sK.PG}`,
                                          disabled: G || !r,
                                          onClick: ew,
                                          "aria-label": I.intl.string(S.default.wiguT0),
                                          children: (0, a.jsx)(rd.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : w?.tierSettings != null && null != A
                                  ? (0, a.jsx)(sd.A, {
                                        settings: w.tierSettings,
                                        tiers: w.tiers,
                                        choices: w.choices,
                                        disabled: !N,
                                        onChange: A,
                                        className: `${sK.Y0} ${sK.$E}`,
                                        icon: (0, a.jsx)(se.FiltersHorizontalIcon, {
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
                                  className: sK.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: sK.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: sK.rt,
                                          disabled: !en,
                                          "aria-label": I.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(st.SendMessageIcon, {
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
    sZ = 1500,
    sY = 1e3;
function sJ(e) {
    e.preventDefault();
}
function s0(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var s1 = n(709753),
    s2 = n(540338);
function s3(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, tH.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var s4 = n(986109);
let s5 = i.createContext(null);
function s7(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(s5),
        [m, f] = i.useState(() => aI.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: u()(s4.xk, { [s4.g5]: m, [s4.Qo]: s, [s4.q3]: o }),
        children: n,
    });
}
let s8 = new Map();
function s9(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let s6 = "live_behind";
var oe = n(165963);
function ot(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([l0.A], () => null != n && n.length > 0 && lX({ keys: n }, l0.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: I.intl.string(S.default.F2yVHg) }
        : null;
}
function on(e) {
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
let ol = [12e4];
var or = n(292771);
function oa(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([aI.Ay], () => aI.Ay.useReducedMotion),
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
            className: or.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: u()(or.qd, e.leaving ? or.dv : or.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function oi(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var os = n(247171);
function oo(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: u()(os.row, r),
        children: [
            (0, a.jsx)(x.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: u()(os.gutter, os[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: os.content, children: i }),
        ],
    });
}
var ou = n(830205);
function oc(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(oo, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: ou.aK,
        children: (0, a.jsxs)("div", {
            className: ou.n8,
            children: [
                (0, a.jsx)(x.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: ou.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: ou.X8,
                          children: (0, a.jsx)(ep.m, {
                              text: I.intl.string(I.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tr.K, {
                                  "aria-label": I.intl.string(I.t.WAI6xu),
                                  icon: ex.XSmallIcon,
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
function od(e) {
    let { projectId: t } = e,
        n = i.useContext(eF.bI);
    return (0, a.jsx)(oc, {
        icon: ia.ShieldIcon,
        children: I.intl.format(S.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eF.vL)(t, n.guildId));
            },
        }),
    });
}
var om = n(443865),
    of = n(716502);
function oh(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(oo, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: of.Nr,
        children: (0, a.jsxs)("section", {
            className: of.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: of.X8,
                          children: (0, a.jsx)(ep.m, {
                              text: I.intl.string(I.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tr.K, {
                                  "aria-label": I.intl.string(I.t.WAI6xu),
                                  icon: ex.XSmallIcon,
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
function og(e) {
    let { children: t } = e;
    return (0, a.jsx)(x.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: of.DD,
        children: t,
    });
}
function op(e) {
    let { children: t } = e;
    return (0, a.jsx)(x.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: of.rf,
        children: t,
    });
}
function ox(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: of.o1, children: t });
}
var ov = n(95635);
function oj(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eO.A)(t, n);
    return (0, a.jsx)(oc, {
        icon: ov.UploadIcon,
        onDismiss: l,
        children: I.intl.format(S.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let ob = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && oi(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(od, { projectId: n });
        },
    },
    {
        id: s6,
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
                (null != n.publishCta && iT(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(s6)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(oj, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || oi(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(oh, {
                icon: om.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(og, { children: I.intl.string(S.default.OJlbhX) }),
                    (0, a.jsx)(op, { children: I.intl.string(S.default["3vJBni"]) }),
                    (0, a.jsx)(ox, {
                        children: (0, a.jsx)(d.$, {
                            variant: "primary",
                            size: "sm",
                            text: I.intl.string(S.default["U/bLzU"]),
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
var oy = n(817921);
function ok(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, eF.Ay)(e),
                    o = (0, c.bG)([nA.default], () => nA.default.getCurrentUser()?.id),
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
                                if ((0, tH.BL)(n)) return n;
                                if (!(0, tH.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == f || on(f) ? null : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === s9(t, g.created_at, o) ? g.id : null,
                    x = u?.projectEvent?.type === "remixed" ? u.projectEvent : null,
                    v = x?.id ?? p,
                    j = ot(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([l0.A], () => b > 0 && null == l0.A.getSettings(e), [b, e]),
                    k = (0, s1.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, tH.Ji)(t)) || !!(0, tH.B0)(t, t.lastIndexOf(a))) &&
                        (null == f || !on(f)) &&
                        null == s3(t) &&
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
                        let l = s8.get(`${e}:${n}`);
                        return null != l ? s9(t, l, o) : null;
                    },
                    isDismissed: (t) => (0, oe.VS)(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, ol);
            (0, oe.$p)();
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
                                s8.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                u.map((e) => ({
                    ...e,
                    options: {
                        context: a,
                        dismiss: null != e.tip.dismissal ? () => (0, oe.qv)(e.tip, t, a.ideasIntroAnchorId) : void 0,
                    },
                }))
            );
        })(ob, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(s7, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: oy.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(oa, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var ow = n(52133),
    oA = n(732159),
    oC = n(888366),
    oN = n(862026),
    oS = n(291192);
function oI(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, oN.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: oS.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: oS.Sp,
                children: [
                    (0, a.jsx)("span", { className: oS.q3 }),
                    (0, a.jsxs)("span", {
                        className: oS.g8,
                        children: [
                            (0, a.jsx)(oC.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(x.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: oS.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: oS.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(nF.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, F.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(oA.u, {
                                                                    ...t,
                                                                    title: I.intl.string(S.default["i+xjZM"]),
                                                                    subtitle: I.intl.string(S.default.fMBZmD),
                                                                    confirmText: I.intl.string(S.default.i5f3Uo),
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
                        ? (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var oE = n(345942),
    o_ = n(727419),
    oM = n(576705);
function oR(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            I.intl.format(n ? S.default.esEGL5 : S.default["XrN+Bg"], {
                onOpen: () => o_.A.open(t, nS.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var oP = n(976860);
function oT(e) {
    return (0, c.bG)([eS.Ay, aj.A], () => {
        let t = eS.Ay.getProject(e);
        return null == t ? "" : (aj.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var oL = n(951465),
    o$ = n(369455);
function oD(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: o } = e,
        u = oT(s),
        d =
            null ==
            (i = (0, c.bG)([eS.Ay, le.A], () => {
                let e = eS.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (le.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        m = (0, c.cf)([eS.Ay, eD.A, le.A, oM.A], () => {
            let e = eS.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(X.q7.AUTOMOD) === !0 ||
                    eD.A.getPublishStatus(s)?.surface === "automod",
                n = le.A.getGuild(e.guild_id),
                l = null != n && oM.A.can(nS.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(x.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            I.intl.format(
                ((t = o),
                (n = d?.name ?? null),
                (l = m.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? S.default.ESu5eZ
                        : S.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? S.default.ZnQW4S
                          : S.default.ev23Cw
                      : t.update
                        ? r
                            ? S.default["LuS8a/"]
                            : S.default.gQzuLC
                        : l
                          ? S.default.KORRGl
                          : r
                            ? S.default["/npn7F"]
                            : S.default.MOrR29),
                {
                    name: u,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, oE.u)(d.guildId);
                    },
                },
            ),
            null != m.guildId
                ? (0, a.jsx)(oR, { guildId: m.guildId, update: o.update })
                : !m.automod && o.update && null != o.published_revision
                  ? (0, a.jsx)(oq, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function oq(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eF.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [eD.A, eS.Ay],
                    () => {
                        let r = eD.A.getPublishStatus(e),
                            a = eS.Ay.getProject(e);
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
                                (0, eS.jf)(a),
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
                      ? I.intl.format(S.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    eg.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: o$.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, oP.pX)(nS.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : I.intl.format(S.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eS.Ay.getProject(e),
                                        a = null == r ? null : (0, eF.KL)(r, l);
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
                                null != e && (0, oL.A)(e);
                            },
                        }),
              ],
          });
}
var oF = n(73153),
    oO = n(505527),
    oG = n(367790),
    oz = n(354777),
    oB = n(491182),
    oU = n(74096),
    oK = n(549587),
    oH = n(448368),
    oW = n(21299),
    oV = n(538355),
    oX = n(715628),
    oQ = n(752636),
    oZ = n(9842),
    oY = n(589022),
    oJ = n(967198),
    o0 = n(531685),
    o1 = n(503275);
let o2 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function o3(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function o4(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function o5(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = o4(e, t),
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
    if (o3(r) && o3(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && o3(o4(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function o7(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([aI.Ay], () => aI.Ay.useReducedMotion),
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
                      for (; a > 0 && o5(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && o2.has(e.charAt(l - 1));) l--;
                                    return o2.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && o5(t, o);) o++;
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
var o8 = n(624479),
    o9 = n(890377),
    o6 = n(92446),
    ue = n(957565),
    ut = n(180227);
function un(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: u()(ut.QE, { [ut.Rn]: t }),
              children: (0, a.jsx)(a1.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          a1.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function ul(e) {
    return ue.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: I.intl.string(I.t.JrGD7E), icon: o8.CopyIcon, onClick: () => (0, ue.C)(e) }]
        : [];
}
function ur(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: I.intl.string(S.default.CXtLD2),
                          tooltip: I.intl.string(S.default.DOb1HM),
                          icon: o9.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: I.intl.string(S.default.urZwpN),
                          icon: ex.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(un, { groupStart: n, actions: [...r, ...ul(t)] });
}
function ua(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: I.intl.string(S.default.H8Jfhu), icon: ts.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: o6.BugIcon, onClick: r }];
    return (0, a.jsx)(un, { groupStart: n, actions: [...i, ...ul(t), ...s] });
}
let ui = (0, ak.createChannelRecord)({ id: "conjure-builder", type: nS.rbe.DM }),
    us = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function uo(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: u()(ut.Yq, { [ut.x1]: t }), children: e });
}
function uu(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let uc = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function ud(e, t, n) {
    let { content: l } = (0, oV.A)(e, uc),
        r = i.useMemo(() => ((0, ri.aW)(e.content) ? (0, oz.z2)(i1.U, e, uc).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: ui, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(oU.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, oX.A)(s, r);
}
function um(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oW.m)(e, ui, t.usernameProfile, l),
        o = (0, oW.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([oJ.A], () => oJ.A.getGuildId()),
        d = (0, c.bG)([nA.default], () => nA.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = nA.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(oY.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
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
let uf = { formatInline: !0, allowGameMentions: !0 };
function uh(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, oV.A)(n, uf),
        o = i.useMemo(() => {
            let e = "" === n.content ? null : (0, ri.aW)(n.content) ? (0, oz.z2)(i1.U, n, uf).content : s;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: ut.GV,
                              children: [
                                  (0, a.jsx)(f.ExperimentalDirectSelectIcon, {
                                      className: ut.Rj,
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
            [nw.A],
            () => ({
                isReplyAuthorBlocked: nw.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nw.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        m = (0, aJ.X4)(n),
        h = (0, aJ.X4)(t),
        g = um(n);
    return (0, a.jsx)(oH.A, {
        repliedAuthor: m,
        baseAuthor: h,
        baseMessage: t,
        channel: ui,
        referencedMessage: { state: oZ.a.LOADED, message: n },
        content: o,
        compact: !1,
        isReplyAuthorBlocked: u,
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
function ug(e) {
    let { message: t, author: n } = e,
        l = um(t);
    return (0, a.jsx)(oK.Ay, {
        message: t,
        channel: ui,
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
function up(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, o1.vm)(l),
        c = i.useMemo(() => (0, aJ.FT)(u, null), [u]),
        d = i.useMemo(() => (0, lR.W1)(t), [t]),
        m = d?.body ?? t,
        f = (0, sh.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, ay.Ay)({ channelId: ui.id, content: m, author: u });
            return (0, ab.rh)({ ...e, timestamp: uu(n, e.timestamp), state: nS.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              ux,
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
function ux(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = ud(t, l);
    return (0, a.jsx)(oB.A, {
        className: ut.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(ug, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: ut.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: ut.GV,
                              children: [
                                  (0, a.jsx)(f.ExperimentalDirectSelectIcon, {
                                      className: ut.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: ut.WO, children: u }),
                      ],
                  }),
        childrenAccessories: uo(i, "" !== l),
        childrenButtons: (0, a.jsx)(ur, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function uv(e) {
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
        { text: m, revealing: f } = o7(t, { streaming: (0, c.bG)([o0.A], () => u && o0.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, aJ.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, o1.vm)(p),
        v = i.useMemo(() => (null == r ? null : (0, lR.W1)(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ay.Ay)({ channelId: ui.id, content: v?.body ?? r.content, author: x });
            return (0, ab.rh)({ ...e, id: r.id, timestamp: uu(r.createdAt, e.timestamp), state: nS.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: ui.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, ay.Ay)({ channelId: ui.id, content: "", author: us })),
        k = i.useMemo(
            () =>
                (0, ab.rh)({
                    ...y,
                    timestamp: uu(n, y.timestamp),
                    state: nS.cmJ.SENT,
                    ...(null != b ? { type: nS.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        A = i.useMemo(
            () => (0, oQ.A)({ message: k, channel: ui, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        C = ud(w, m, ut.OS);
    return (0, a.jsxs)("div", {
        className: ut.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(oB.A, {
                className: ut.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(uh, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: C,
                childrenAccessories: uo(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            o ? (0, a.jsx)("img", { className: ut.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var uj = n(981879);
function ub(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, ab.rh)(
                    { ...(0, ay.Ay)({ channelId: ui.id, content: "" }), id: `conjure:${t}`, state: nS.cmJ.SENT },
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
                (oF.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: ui.id,
                    messageId: l.id,
                    users: [us],
                    emoji: e,
                    reactionType: oO.v6.NORMAL,
                }),
                    oF.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: ui.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: oO.v6.NORMAL,
                    }));
            }
            return (
                t(),
                oF.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    oF.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: uj.H,
            children: (0, a.jsx)(oG.A, {
                message: l,
                channel: ui,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var uy = n(442433);
n(775443);
var uk = n(990779),
    uw = n(155899),
    uA = n(165862),
    uC = n(477782);
function uN(e) {
    let { onSelect: t, onClose: n = uy.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(uA.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": I.intl.string(I.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(uC.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(uC.Dr, {
                          id: "restore-version",
                          label: I.intl.string(S.default.H8Jfhu),
                          icon: ts.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(uC.Dr, { id: "view-trace", label: "View Trace", icon: o6.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function uS(e) {
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
        y = null != b && null != x ? () => uI(b, x) : void 0,
        k =
            ((t =
                P() && "assistant" === j.role && (0, tH.BL)(j)
                    ? (j.turn_id ?? j.steps.find((e) => null != e.turn_id)?.turn_id ?? j.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [uk.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : uk.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((_ = { projectId: e, traceId: t }), [...E])) n(e);
                      })(l, k)
                : void 0,
        A = j.in_reply_to,
        C = j.restoreProposal;
    return (0, a.jsx)(s7, {
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
                          void (0, uy.jA)(t, (e) => (0, a.jsx)(uN, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(uv, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(ua, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: y,
                onViewTrace: w,
            }),
            content: n.content,
            createdAt: j.created_at,
            replyTo: r,
            onJumpToReplied: null != A && null != i ? () => i(A) : void 0,
            accessories: (0, a.jsx)(i7, {
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
                onPickIdea: g,
                onApprovePlan: p,
                restoreProposal: C,
                publishScheduleProposal: j.publishScheduleProposal,
                publishScheduleProposalCurrent: h,
                serverChange: n.active ? void 0 : j.serverChange,
                serverChangeCurrent: h,
                onCardReply: v,
                onRestoreProposal:
                    null != C && null != x && h
                        ? () =>
                              uI(
                                  {
                                      sha: C.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: C.authored_at,
                                      subject: C.subject,
                                  },
                                  x,
                              )
                        : void 0,
            }),
        }),
    });
}
function uI(e, t) {
    (0, uw.F)({ onConfirm: () => t(e) });
}
var uE = n(288539),
    u_ = n(677683),
    uM = n(677690),
    uR = n(159711);
function uP(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([u_.A], () => u_.A.getOutcome(l))),
            (n = (0, c.bG)(
                [nk.A, nA.default, nw.A],
                () => {
                    let e = t?.status === "pinned" ? nk.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, ny.m1)(e, nA.default, nw.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = I.intl.string(S.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(t2, {
              title: s,
              children: (0, a.jsx)(x.E, {
                  className: uR.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? I.intl.formatToPlainString(S.default.gKe6Lw, { channelName: i ?? "" })
                          : I.intl.string(S.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(t2, { title: s, children: (0, a.jsx)(uT, { projectId: l }) });
}
function uT(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: o,
            failed: u,
            pin: m,
            skip: f,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([eS.Ay], () => eS.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [n9.A, oM.A],
                        () =>
                            null == t
                                ? []
                                : n9.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === nS.rbe.GUILD_VOICE && oM.A.can(nS.xBc.MANAGE_CHANNELS, e),
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
                    let t = await (0, uM.pk)(m.id, f);
                    (o(!1), t ? (0, uM.tg)(e, { status: "pinned", channelId: m.id }) : d(!0));
                }, [f, e, m]),
                g = i.useCallback(() => (0, uM.tg)(e, { status: "skipped" }), [e]);
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
        h = (0, n2.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: uR.r,
        children: (0, a.jsxs)(nG.B, {
            gap: 12,
            children: [
                (0, a.jsx)(x.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: I.intl.string(S.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(np.Z, {
                          selectionMode: "single",
                          label: I.intl.string(S.default.peOi1H),
                          placeholder: I.intl.string(S.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: u ? I.intl.string(S.default.d7EeAm) : void 0,
                          disabled: o,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: I.intl.string(S.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: uR.o,
                    children: [
                        (0, a.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: I.intl.string(S.default.Iw0l8o),
                            disabled: o,
                            onClick: f,
                        }),
                        g.length > 0
                            ? (0, a.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: I.intl.string(S.default.FYI3qr),
                                  disabled: null == r,
                                  loading: o,
                                  onClick: m,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function uL(e, t, n) {
    return (0, a.jsx)(uE.A, { userId: e, content: `@${t}` }, n);
}
function u$(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, o1.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nA.default], () => (null == l ? null : nA.default.getUser(l)), [l]),
                a = (0, aA.tx)(r),
                s = oT(e),
                o =
                    (0, c.bG)([le.A], () => (null == t.guild_id ? null : le.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    I.intl.string(S.default.R1tPlP),
                u = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([le.A], () => (null == u ? null : le.A.getGuild(u)?.name), [u]),
                m = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    if (null != u) {
                        let e = d ?? t.moved_to_guild_name ?? I.intl.string(S.default.R1tPlP);
                        return null == m
                            ? I.intl.format(S.default.NVM0sD, { app: s, server: o, newServer: e })
                            : I.intl.format(S.default["/hlliy"], { app: s, server: o, newServer: e, ...m });
                    }
                    return null == m
                        ? I.intl.format(S.default.Lwsrhg, { app: s, server: o })
                        : I.intl.format(S.default.qqePfT, { app: s, server: o, ...m });
                case "bot_removed":
                    return null == m
                        ? I.intl.format(S.default.mT7EQG, { app: s, server: o })
                        : I.intl.format(S.default["lA/crI"], { app: s, server: o, ...m });
                case "preview_bot_removed":
                    return null == m
                        ? I.intl.format(S.default["4LVIeo"], { app: s, server: o })
                        : I.intl.format(S.default.YJOV6D, { app: s, server: o, ...m });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == m
                        ? I.intl.format(S.default["4VQfid"], { channel: e, server: o })
                        : I.intl.format(S.default.RlMIJN, { channel: e, server: o, ...m });
                }
                case "remixed":
                    return I.intl.format(S.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return I.intl.string(S.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, uL),
        r = ot(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(uP, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(x.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rt, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let uD = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    nu.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, ri.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(s7, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(up, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(i0.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(sc, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(ub, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, rs.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(s7, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uv, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(i0.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(s7, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(i5, {
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
                    return (0, a.jsx)(s7, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uv, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(oD, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(s7, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uv, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(u$, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(s7, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(oI, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(s7, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(i5, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(s7, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(i5, {
                            projectId: l,
                            steps: uq,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(uS, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, ow.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, ow.A)(e.row, t.row, ["message"]) &&
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
                (0, ow.A)(e.replyTo, t.replyTo) &&
                (0, ow.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    uq = [],
    uF = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    uO = new WeakMap();
function uG(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function uz(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let uB = ["wheel", "touchstart", "pointerdown", "keydown"];
function uU(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let uK = i.memo(function (e) {
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
            scrollerRef: j,
            stickToBottomRef: b,
            pinned: y,
            onUnpin: k,
            handleRef: w,
            onShowsLatestChange: A,
        } = e,
        C = i.useRef(null),
        [N, E] = i.useState(null),
        _ = i.useCallback((e) => {
            ((C.current = e), E(e));
        }, []),
        [M, R] = i.useState(null),
        P = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(P.current), []);
    let T = i.useCallback((e) => {
            (R(e), window.clearTimeout(P.current), (P.current = window.setTimeout(() => R(null), 1600)));
        }, []),
        L = (0, c.bG)([eD.A], () => eD.A.getPublishStatus(t)),
        $ = (0, c.bG)([nA.default], () => nA.default.getCurrentUser()?.id),
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
                                        let t = (0, tK.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = uO.get(r);
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
                                (0, tH.ST)(e) ||
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
                        let a = !(0, tH.BL)(e),
                            i = rm({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, tK.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, tK.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && uF.test(n.prose.content)) m = !0;
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
                                        turnActive: tW(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = uF.test(e.content ?? "");
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
                    (uO.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return iP(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, L)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = iL.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), iL.set(t, n)), n);
                      })),
                h,
            );
        }, [n, L, h]),
        q = i.useMemo(() => D.map((e) => e.key), [D]),
        [F, O] = i.useState(null),
        G = (function (e, t, n) {
            if (null == t) return uG(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : uz(e, t.endKey, t.end - 1) + 1,
                a = uz(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), uG(e, a, r));
        })(q, F, y),
        z = i.useRef(G),
        B = i.useRef(q),
        U = i.useRef(D),
        K = i.useRef(null),
        H = i.useRef(null),
        W = i.useRef(new Set()),
        V = i.useRef(null),
        X = i.useRef(!1),
        Q = i.useCallback(() => {
            let e = j.current?.getScrollerNode(),
                t = X.current ? uU(C.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [j]);
    i.useLayoutEffect(() => {
        let e = j.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            X.current = !1;
        };
        for (let n of uB) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of uB) e.removeEventListener(n, t);
        };
    }, [j]);
    let Z = i.useCallback(() => {
            let e = j.current?.getScrollerNode(),
                t = C.current;
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
        }, [j]),
        Y = i.useCallback(() => {
            let e = j.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), uG(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), uG(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? uG(e, i, t.end) : null;
            })(B.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: b.current,
            });
            "older" === n ? (0, e$.P6)(t) : null != n && O(n);
        }, [j, b, t]);
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
                if (!B.current.includes(n.key)) return !1;
                (k(), (K.current = n));
                let l = z.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = j.current?.getScrollerNode(),
                        t = C.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else O(t);
                return !0;
            },
        }),
        [Z, Y, k, j],
    );
    let J = i.useRef(null),
        ee = i.useCallback(
            (e) => {
                var n;
                let l;
                ((J.current = null), (X.current = !1));
                let r = C.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (k(), O(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), T(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, e$.P6)(t) && (J.current = e);
                    return;
                }
                (k(),
                    (H.current = () => {
                        (C.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            T(e));
                    }),
                    O(((n = B.current), uG(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [T, k, t],
        );
    (i.useEffect(() => {
        let e = J.current;
        null != e && ee(e);
    }, [D, ee]),
        i.useLayoutEffect(() => {
            if (null == N) return;
            let e = N.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), b.current)) return void j.current?.scrollToBottom();
                        (Q(), Z());
                    }
                });
            return (t.observe(N), () => t.disconnect());
        }, [N, Q, Z, j, b]));
    let et = null == G.endKey;
    (i.useEffect(() => A?.(et), [et, A]),
        i.useLayoutEffect(() => {
            ((z.current = G), (B.current = q), (U.current = D));
        }),
        i.useLayoutEffect(() => {
            let e = j.current?.getScrollerNode(),
                l = C.current,
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
                let t = K.current;
                if (r && b.current && null != uU(l)) (k(), O(z.current), (X.current = !0), Q());
                else if (b.current) j.current?.scrollToBottom();
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
            W.current = new Set(q);
        }, [t, n, D, q, G.start, G.end, j, b, k, Q, Z, Y]));
    let en = i.useMemo(() => s3(n), [n]),
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
                : (0, tH.BL)(ei)
                  ? ei.awaitingUser
                  : null) ?? void 0,
        eo = (0, c.bG)([l0.A], () => l0.A.getSettings(t)?.secrets, [t]),
        eu = (0, s1.WT)(t),
        ec = i.useMemo(() => (0, lU.Mv)(n, eo), [n, eo]);
    if (!(0, tH.i_)(n)) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: u()(s4.x7, s4.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: s4.Ub, children: (0, a.jsx)(v.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: s4.x7,
            children: (0, a.jsx)(s7, { role: "assistant", children: (0, a.jsx)(uv, { content: I.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(s5.Provider, {
        value: W,
        children: (0, a.jsxs)("ol", {
            ref: _,
            className: s4.x7,
            children: [
                D.slice(G.start, G.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            uD,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && M === n.id,
                                currentUserId: "user" === e.kind ? $ : void 0,
                            },
                            e.key,
                        );
                    let l = n === ei;
                    return (0, a.jsx)(
                        uD,
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
                              s7,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(uv, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(s2.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != es && et
                    ? (0, a.jsx)(s7, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(uv, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: I.intl.string(S.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                et ? (0, a.jsx)(ok, { projectId: t, messages: n, draftHasText: !0 === o, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var uH = n(731084),
    uW = n(336288),
    uV = n(187447);
function uX(e) {
    let { activity: t, id: n } = e,
        l = (0, tU.j)(),
        { text: r, revealing: s } = o7(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
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
            className: uV.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(tG.Ch, {
                ref: o,
                onScroll: m,
                className: uV.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: u()(i4.PT, uV.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: aP.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var uQ = n(53659);
function uZ(e) {
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
        [v, j] = i.useState(null),
        b = (0, uH.xu)({
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
        y = I.intl.string(b),
        k = b === uH.kx["0"],
        [w, A] = i.useState(f ?? y),
        C = (0, tU.j)();
    (l || (0, uH.E4)(y, w) || (!C && !k)) && w !== y && A(y);
    let N = i.useRef(y);
    (i.useEffect(() => {
        N.current = y;
    }, [y]),
        i.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let E = i.useRef(null),
        _ = i.useRef(w);
    i.useEffect(() => {
        _.current = w;
    }, [w]);
    let M = i.useRef(k),
        R = i.useRef(0);
    (i.useEffect(() => {
        ((M.current = k), !k && (0, uH.E8)(_.current) && A(N.current));
    }, [k]),
        i.useEffect(() => {
            if (!C) return;
            let e = 0,
                t = 0;
            function n() {
                M.current
                    ? ((R.current = (0, uH.E8)(_.current) ? R.current + 1 : 0), A((0, uH.Ov)(R.current)))
                    : N.current !== _.current
                      ? A(N.current)
                      : E.current?.play();
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
    let P = null != t && "" !== t.text,
        T = t?.session ?? null,
        L = P && null != T && v === T,
        $ = i.useCallback(() => {
            P && null != T && j((e) => (e === T ? null : T));
        }, [P, T]),
        D = i.useCallback(() => j(null), []);
    return (0, a.jsx)(ez.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: D,
        renderPopout: () => (0, a.jsx)(uX, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(eg.D, {
                innerRef: g,
                className: u()(uQ.hF, P && uQ.Xd),
                "aria-label": I.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : k
                            ? uH.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": I.intl.string(b),
                onClick: $,
                children: [
                    (0, a.jsx)("span", {
                        className: uQ.bl,
                        children: (0, a.jsx)(uW.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: uQ.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: C
                            ? (0, a.jsx)(i8.o, {
                                  ref: E,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: uQ.yE,
                              })
                            : (0, a.jsx)(x.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: uQ.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let uY = { second: 1e3, minute: 6e4 };
function uJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = uY[t];
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
var u0 = n(719374);
function u1(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = uJ(t);
    return (0, a.jsx)(x.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: u0.$,
        "data-conjure-turn-timer": !0,
        children: (0, ry.C7)(l),
    });
}
function u2(e) {
    let { startedAt: t } = e,
        n = uJ(t, "minute");
    return (0, a.jsx)(tY.A, { role: "timer", children: (0, ry.Us)(n) });
}
var u3 = n(885574),
    u4 = n(242779),
    u5 = n(436804);
function u7(e) {
    return e.toLocaleString();
}
function u8(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: u5.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: u5.mf,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [u7((0, u4.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(x.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    u7(n.input_tokens),
                    " in \xb7 ",
                    u7(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${u7(n.cache_creation_input_tokens)} cache write \xb7 ${u7(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function u9(e) {
    let { project: t } = e,
        n = (0, u4.wU)(t.compaction),
        l = (0, u4.wU)(t.classifier),
        r = (0, u4.wU)(t.image),
        i = (0, u4.wV)(t.orchestrator, t.codegen),
        s = (0, u4.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: u5.si,
        role: "dialog",
        "aria-label": I.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: u5.Q$,
                children: (0, a.jsxs)("div", {
                    className: u5.mf,
                    children: [
                        (0, a.jsxs)(x.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [u7((0, u4.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(u8, { label: I.intl.string(S.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(u8, { label: I.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(u8, { label: I.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(u8, { label: I.intl.string(S.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: u5.mf,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: I.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, u4.sj)(s) ? "\u2014" : `${Math.round(100 * (0, u4.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function u6(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ez.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(u9, { project: t }),
        children: (e) =>
            (0, a.jsx)(eg.D, {
                innerRef: n,
                className: u5.Y$,
                "aria-label": I.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(u3.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ce = n(990250);
function ct(e) {
    let { queued: t } = e,
        n = I.intl.string(S.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: ce.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: ce.wx,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(tG.Ch, {
                className: ce.XG,
                children: (0, a.jsx)("ul", {
                    className: ce.p_,
                    children: t.map((e) => (0, a.jsx)(cn, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cn(e) {
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
              className: ce.AS,
              children: (0, a.jsx)(x.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: I.intl.string(S.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: ce.AS,
              children: [
                  (0, a.jsx)(x.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: ce.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(nF.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: I.intl.string(l ? S.default.nEMoeN : S.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cl(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ez.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(ct, { queued: t }),
        children: (e) =>
            (0, a.jsx)(eg.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(x.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: I.intl.formatToPlainString(S.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cr = n(997421);
function ca(e) {
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
        v = (0, T.Zv)(t),
        j = (0, c.bG)([eD.A], () => eD.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, uH.E8)(e) || e === I.intl.string(S.default.mKK6wB) || e === I.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, uH.uc)(h),
        A = null != s,
        C = s ?? (n ? l : void 0),
        N = n || r || A || !0 === f;
    return (0, a.jsxs)("div", {
        className: cr.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cr.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || o || v || j
                        ? (0, a.jsx)(uZ, {
                              activity: d,
                              compacting: m,
                              saving: f,
                              restoring: r,
                              remixing: A,
                              recalling: o,
                              controlling: v,
                              publishPending: j && N,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != C ? (0, a.jsx)(u1, { startedAt: C }) : null,
                ],
            }),
            null != C ? (0, a.jsx)(u2, { startedAt: C }) : null,
            0 === p.length ? null : (0, a.jsx)(cl, { queued: p, className: u()(cr.BP, cr.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cr.BP,
                      children: [
                          (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(u6, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": I.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, uH.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cr.XF,
                      children: (0, uH.Db)(g),
                  }),
        ],
    });
}
var ci = n(698638),
    cs = n(608711);
let co = [I.intl.string(S.default["9w+Chc"]), I.intl.string(S.default.WAvmdq), I.intl.string(S.default.SKsrzl)];
function cu(e) {
    var t, n;
    let l,
        r,
        s,
        o,
        u,
        {
            projectId: m,
            restoreState: f,
            onRestoreVersion: h,
            onImportProject: g,
            escapeScopeRef: p,
            visible: v = !0,
        } = e,
        j = (0, c.bG)([l1.A], () => l1.A.getMessages(m), [m]),
        b = (0, c.bG)([e$.Ay], () => e$.Ay.getConnState(m), [m]),
        y = (0, c.bG)([l1.A], () => l1.A.getProjectUsage(m), [m]),
        k = (0, c.bG)([l1.A], () => l1.A.getThinkingActivity(m), [m]),
        w = (0, c.bG)([l1.A], () => l1.A.isCompacting(m), [m]),
        C = (0, c.bG)([l1.A], () => l1.A.isSaving(m), [m]),
        N = (0, c.bG)([lP.A], () => lP.A.getModelSettings(m), [m]),
        E = i.useRef(null),
        _ = i.useRef(null),
        M = i.useRef(null),
        R = i.useRef(null),
        {
            stickToBottomRef: P,
            pinned: T,
            atBottom: $,
            unpin: D,
            releasePinHold: q,
            showsLatest: F,
            showsLatestRef: O,
            handleShowsLatestChange: G,
            updatePin: z,
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
                    for (let e of uB) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of uB) t.removeEventListener(e, u);
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
        })(_),
        B = i.useCallback(() => {
            function e() {
                let e = E.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (q(), O.current ? e() : M.current?.showLatest(e));
        }, [q, O]),
        W = i.useCallback(() => {
            (z(), M.current?.handleScroll());
            let e = R.current;
            null != e && (e.position = P.current ? null : (M.current?.snapshot() ?? null));
        }, [z, P]),
        V = i.useContext(U.A) === m;
    i.useLayoutEffect(() => {
        if (!V) return;
        let e = { position: H.A.getProjectView(m).chatScroll };
        return ((R.current = e), () => (0, K.g7)(m, { chatScroll: e.position }));
    }, [V, m]);
    let X = i.useRef(!V);
    (i.useLayoutEffect(() => {
        if (X.current || !(0, tH.i_)(j)) return;
        X.current = !0;
        let e = H.A.getProjectView(m).chatScroll;
        null != e && M.current?.restore(e) !== !0 && null != R.current && (R.current.position = null);
    }, [j, m]),
        i.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            let t = _.current?.getScrollerNode(),
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
                    r && (P.current ? _.current?.scrollToBottom() : M.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [P]),
        i.useEffect(() => {
            (0, e$.ensureConnection)(m);
        }, [m]),
        (0, ro.E1)(m, (0, tU.j)()));
    let Q = (0, L.rt)(m),
        Z = (function (e) {
            let t = (0, eF.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([le.A], () => (null == n ? null : (le.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: I.intl.format("channel" === s ? S.default["1cm4fj"] : S.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(m),
        Y = (function (e) {
            let t = (0, c.bG)([rl.A], () => rl.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rr.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rn.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? I.intl.format(S.default["bw/n4C"], { helpdeskURL: e })
                            : I.intl.format(S.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: I.intl.formatToPlainString(S.default.GHgG2B, { percent: l, limit: n }) };
        })(m),
        J =
            ((l = (0, c.bG)([lz.A], () => lz.A.getFailure(m))),
            (r = i.useCallback(() => (0, lB.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: I.intl.format(S.default.Up6Ssw, { reason: l }),
                      retry: { text: I.intl.string(S.default["ywA+ET"]), onClick: r },
                  }),
        ee = (0, lL.E8)(m),
        et = (0, c.bG)([lz.A], () => lz.A.getSetupStartedAt(m), [m]),
        en = i.useCallback(
            (e, t) => {
                (0, e$.dv)(m, e, t);
            },
            [m],
        ),
        el = i.useCallback(
            (e, t, n) => {
                let l = n ?? en;
                0 === Q.annotations.length
                    ? l(e, t)
                    : (l((0, lR.BL)({ annotations: Q.annotations, metaComment: e, context: Q.context }), t),
                      (0, L.mB)(m));
            },
            [Q, en, m],
        ),
        er = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of no)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, e$.re)(e, l.nonce),
                        (function (e) {
                            let t = no.get(e);
                            (no.delete(e), nc(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                l1.A.isThinking(m)) &&
                (0, e$.fu)(m);
        }, [m]),
        ea = i.useCallback((e) => (0, nm.RQ)(m, e.implementation_prompt), [m]),
        ei = i.useCallback((e) => (0, nm.RQ)(m, e), [m]),
        [es, eo] = (function (e) {
            let [t, n] = i.useState(() => rc(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rc(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(m),
        eu = i.useCallback(() => en(I.intl.string(S.default["t5CN3+"])), [en]),
        ec = i.useCallback((e, t, n) => (0, nm.RQ)(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        ed = i.useCallback((e) => (0, lT.X)(m, e), [m]),
        em = i.useCallback((e) => (0, e3.vX)(m, e), [m]),
        ef = i.useCallback((e) => (0, e7.gn)(m, "chat", Array.from(e), em), [m, em]),
        eh = i.useCallback(() => (0, nm.RQ)(m, I.intl.string(S.default.Zc7gML)), [m]),
        eg = f?.status === "restoring",
        ev = "open" === b && !eg,
        ej = j[j.length - 1],
        eb = null != ej && "assistant" === ej.role && null != ej.proposal,
        [ey, ek] = i.useState(null),
        ew = i.useMemo(
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
        eA = null != ew && ew.id !== ey ? ew : null,
        eC = i.useCallback(() => {
            null != eA && ek(eA.id);
        }, [eA]),
        [eN, eS] = i.useState(null),
        eI = (function (e) {
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
                                summary: I.intl.string(S.default["o2++BO"]),
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
        })(m),
        eE = ej?.appBuildRequest != null && (0, tH.BL)(ej) && ej.appBuildRequest.id !== eN ? ej.appBuildRequest : null,
        e_ = eI.request ?? (null == eA ? eE : null),
        eM = null == eI.request ? eA : null,
        eR = null != e_ && e_ === eI.request,
        { close: eP, sent: eT } = eI,
        eL = eI.request?.id,
        eD = i.useCallback(() => {
            eR ? eP() : null != e_ && eS(e_.id);
        }, [e_, eR, eP]),
        eq = i.useCallback(
            (e) => {
                (null != eL && eT(eL),
                    (0, A.P0)({
                        text: I.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eL, eT],
        ),
        eO = (0, c.bG)([l0.A], () => l0.A.getSettings(m), [m]),
        [eG, ez] = i.useState(null),
        eB = l5(),
        eU =
            null != ej &&
            ((t = ej.id),
            (s = (0, lU.Mv)(j, eO?.secrets)),
            (o = l7(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tH.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !l8(e.settingsRequest, eO, eB.has(e.id)))),
            )),
        eK =
            null != ej &&
            "assistant" === ej.role &&
            null != ej.settingsRequest &&
            null == ej.secretRequest &&
            (0, tH.BL)(ej) &&
            ej.id !== eG &&
            ((n = ej.settingsRequest),
            (u = n.keys ?? []),
            null != eO &&
                0 !== u.length &&
                u.every((e) => {
                    let t = eO.schema.find((t) => t.key === e);
                    return null != t && lV.has(t.type);
                })) &&
            lX(ej.settingsRequest, eO) &&
            !eU
                ? ej
                : null,
        eH = null == eI.request ? eK : null,
        eW = eH?.settingsRequest ?? null,
        eV = i.useCallback(() => {
            null != eK && ez(eK.id);
        }, [eK]),
        eX = null != eW,
        [eQ, eZ] = i.useState(null),
        eY = eO?.secrets,
        eJ = i.useMemo(() => (0, lU.Qr)(j, (0, lU.Mv)(j, eY)), [j, eY]),
        e0 = null != eJ && eJ.render_id !== eQ ? eJ : null,
        e2 = null == eM && null == e_ ? e0 : null,
        e4 = i.useCallback(() => {
            null != e0 && eZ(e0.render_id);
        }, [e0]),
        [e5, e8] = i.useState(null),
        e9 = eM?.id ?? e_?.id ?? e2?.render_id ?? eH?.id,
        e6 = null != eA || null != e_ || null != e0 || null != eK;
    i.useLayoutEffect(() => {
        let e = _.current?.getScrollerNode(),
            t = e5?.firstElementChild;
        if (null == e5 || null == e || !(0, e1.vq)(t, HTMLElement) || null == e9) return;
        function n() {
            P.current && _.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - e5.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [e5, e9, _, P]);
    let te = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([l1.A], () => l1.A.hasLoadedHistory(m), [m]),
            historyUnavailable: (0, c.bG)([l1.A], () => l1.A.isHistoryUnavailable(m), [m]),
            connState: b,
        }),
        tt = !(0, tH.i_)(j),
        tn = "loading" === te && tt,
        tl = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return co[e % co.length];
        }, [m]),
        ta = eb ? I.intl.string(S.default.Zc7gML) : "greeting" === te && tt ? tl : null,
        ti = i.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, tH.BL)(t)) return t;
            }
        }, [j]),
        ts = null != ti,
        to = i.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        tu = null != ti ? (0, ra.S)(ti) : void 0,
        tc = eb && ev ? eh : void 0,
        td = i.useCallback(() => (0, nm.RQ)(m, I.intl.string(S.default.EMgIuY)), [m]),
        [tm, tf] = i.useState(null),
        [th, tg] = i.useState(ts);
    (th !== ts && (tg(ts), ts || tf(null)),
        i.useEffect(() => {
            if (!ts) return;
            let e = _.current?.getScrollerNode(),
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
        }, [ts, ti?.steps, F]));
    let tp = F ? tm : "bottom",
        tx = i.useMemo(() => (null != ti ? (0, tV.b9)(ti.steps) : ""), [ti]),
        tv = i.useMemo(() => (null != ti ? ((0, tK.lt)(ti.steps) ?? ti.todos) : void 0), [ti]),
        tj = ti?.provisionalTodo,
        tb = null != ti && tW(ti),
        ty = i.useMemo(() => {
            var e;
            return null != ti ? ((e = ti.steps), rN((0, tK.Jf)(e, !0).tasks)) : void 0;
        }, [ti]);
    return (0, a.jsxs)("section", {
        ref: E,
        "data-conjure-chat": !0,
        className: cs.TE,
        children: [
            ev
                ? (0, a.jsx)(tB.A, {
                      title: I.intl.string(S.default.gy7byi),
                      description: I.intl.string(S.default["dkv/WO"]),
                      icons: ci.ir,
                      onDrop: ef,
                  })
                : null,
            (0, a.jsx)(na, {
                onJumpToActivity: B,
                line: tx,
                placement: ts && "top" === tp ? "top" : null,
                todos: tv,
                todosLive: tb,
                provisionalTodo: tj,
                agents: ty,
            }),
            (0, a.jsxs)("div", {
                className: cs.JX,
                children: [
                    (0, a.jsx)(tG.Ch, {
                        ref: _,
                        onScroll: W,
                        scrollbarGutter: tn ? "both-edges" : "stable",
                        className: [cs.N$, $ ? null : cs.hB, eX ? cs.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(ri.Fu.Provider, {
                            value: m,
                            children: (0, a.jsx)(uK, {
                                projectId: m,
                                messages: j,
                                emptyState: te,
                                floatingSettingsMessageId: eK?.id,
                                floatingSecretRenderId: e2?.render_id,
                                liveClarificationId: eM?.id,
                                onPickIdea: ev ? ea : void 0,
                                onAskForIdeas: ev ? eu : void 0,
                                draftHasText: es,
                                onApprovePlan: ev ? td : void 0,
                                onRestoreVersion: eg || ts ? void 0 : h,
                                onCardReply: ev ? ei : void 0,
                                scrollerRef: _,
                                stickToBottomRef: P,
                                pinned: T,
                                onUnpin: D,
                                handleRef: M,
                                onShowsLatestChange: G,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cs.NJ,
                        children: (0, a.jsx)(ca, {
                            projectId: m,
                            thinking: ts,
                            turnStartedAt: tu,
                            restoring: eg,
                            remixStartedAt: et,
                            recalling: tn,
                            thinkingActivity: k,
                            compacting: w,
                            saving: C,
                            projectUsage: y,
                            connState: b,
                            queued: to,
                        }),
                    }),
                    null == eM
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: eX ? `${cs.B5} ${cs.J9}` : cs.B5,
                              children: (0, a.jsx)(
                                  lM,
                                  { projectId: m, clarification: eM, onSubmit: ev ? ec : void 0, onDismiss: eC },
                                  eM.id,
                              ),
                          }),
                    null == e_
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: cs.B5,
                              children: (0, a.jsx)(
                                  nb,
                                  { projectId: m, request: e_, canSend: ev, onDismiss: eD, onSent: eR ? eq : void 0 },
                                  e_.id,
                              ),
                          }),
                    e2?.secretRequest == null
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: cs.B5,
                              children: (0, a.jsx)(
                                  lJ,
                                  {
                                      projectId: m,
                                      cardId: e2.render_id,
                                      request: e2.secretRequest,
                                      status: "open",
                                      onDismiss: e4,
                                  },
                                  e2.render_id,
                              ),
                          }),
                    null == eW
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eM && null == e_ ? e8 : void 0,
                              className: cs.B5,
                              children: (0, a.jsx)(
                                  rt,
                                  { askId: eH?.id, projectId: m, request: eW, onDismiss: eV },
                                  eH?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cs.Jx,
                children: [
                    (0, a.jsx)(na, {
                        onJumpToActivity: B,
                        line: tx,
                        placement: ts && "bottom" === tp ? "bottom" : null,
                        todos: tv,
                        todosLive: tb,
                        provisionalTodo: tj,
                        agents: ty,
                    }),
                    0 === Q.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cs.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: I.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: Q.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: I.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: I.intl.string(S.default["/zOv9+"]),
                                      onClick: () => (0, L.mB)(m),
                                  }),
                              ],
                          }),
                    null == ee ? null : (0, a.jsx)(lG, { pending: ee }, ee.publishTurnId),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: cs.qB,
                              children: (0, a.jsx)(tz.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: J.message,
                                  action: J.retry,
                              }),
                          }),
                    null == Z
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cs.Db,
                              children: [
                                  (0, a.jsx)(tz.w, { type: "warning", role: "status", message: Z.message }),
                                  (0, a.jsx)("div", {
                                      className: cs.jU,
                                      children: (0, a.jsx)(ep.m, {
                                          text: I.intl.string(I.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tr.K, {
                                              "aria-label": I.intl.string(I.t.WAI6xu),
                                              icon: ex.XSmallIcon,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: Z.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == Y
                        ? null
                        : (0, a.jsx)("div", {
                              className: cs.qB,
                              children: (0, a.jsx)(tz.w, {
                                  type: Y.blocked ? "critical" : "warning",
                                  role: Y.blocked ? "alert" : "status",
                                  message: Y.message,
                              }),
                          }),
                    (0, a.jsx)(sQ, {
                        projectId: m,
                        escapeScopeRef: p,
                        canSend: ev,
                        running: ts,
                        restoring: eg,
                        onSend: el,
                        hasPendingContext: Q.annotations.length > 0,
                        onInterrupt: ev ? er : void 0,
                        onUploadFile: em,
                        onImport: g,
                        onSendToOtherProjects: e6 ? void 0 : eI.open,
                        onApprove: tc,
                        suggestion: ta,
                        questionOpen: e6,
                        secretPending: null != e2,
                        modelSettings: N,
                        onModelSettingsChange: ed,
                        onDraftHasTextChange: eo,
                        aiPaused: Y?.blocked === !0,
                        visible: v,
                    }),
                ],
            }),
        ],
    });
}
var cc = n(761508),
    cd = n(209695),
    cm = n(207438),
    cf = n(683438),
    ch = n(721507);
function cg(e, t) {
    return String(e).padStart(t, "0");
}
function cp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cg(l.getHours(), 2)}:${cg(l.getMinutes(), 2)}:${cg(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cg(l.getMilliseconds(), 3)}` : r;
}
var cx = n(667931);
let cv = {
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
    cj = { running: "Running", ok: "Done", error: "Failed" };
function cb(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cy(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function ck(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cw(e) {
    return cy(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cA = ["Arguments", "Result", "Usage", "Details"];
function cC(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cN(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cS(e) {
    let t = (0, cx.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cx.lp)(e) ? "interrupted" : "still running";
}
function cI(e) {
    return [cp(new Date(e.started_at).toISOString()) ?? "", ck(e.spans.length), (0, cx.Sj)((0, cx.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cE(e) {
    let t = (0, cx.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cx.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += c_(r, "in")),
                (l.output += c_(r, "out")),
                (l.cacheRead += c_(r, "cache_read")),
                (l.cacheWrite += c_(r, "cache_write")),
                (l.costUsd += c_(r, "cost_usd"))));
    }
    let r = cx.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function c_(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var cM = n(738188),
    cR = n(430993),
    cP = n(364840),
    cT = n(224640),
    cL = n(20742);
let c$ = { collapsed: new Set(), revealed: new Set() };
var cD = n(872892);
let cq = {
    op: cD.Q,
    model: cD.i3,
    tool: cD.dH,
    setup: cD.kc,
    worktree: cD.Qx,
    sandbox: cD.QH,
    build: cD.F1,
    platform: cD.Op,
    other: cD.fv,
};
function cF(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      ck(t.calls, "model call"),
                      `${cb(t.input)} in`,
                      `${cb(t.output)} out`,
                      `${cb(t.cacheRead)} cache read`,
                      `${cb(t.cacheWrite)} cache write`,
                      cN(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: cD.M1,
        children: [
            (0, a.jsx)("div", {
                className: cD.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${cD.DJ} ${cq[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: cD.o1,
                children: cx.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cy(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: cD.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${cD.nf} ${cq[e]}` }),
                                (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: cv[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(x.E, {
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
                : (0, a.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function cO(e) {
    return `conjure-perf-trace-${e}`;
}
function cG(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: cD.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(x.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${cD.p0} ${s + o > 85 ? cD.EU : cD.jh}`,
                children: i,
            }),
        ],
    });
}
function cz(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? t0.ChevronSmallRightIcon : tJ.ChevronSmallDownIcon,
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
    return (0, a.jsxs)(eg.D, {
        tag: "div",
        role: "treeitem",
        id: cO(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${cD.$y} ${r ? cD.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: cD.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(eg.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: cD.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: cD.YJ }),
                    (0, a.jsx)(x.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: cD.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${cD.nf} ${cq[t.category]}` }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: cD.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: cD.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(x.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: cD.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(cM.WarningIcon, { size: "xs", color: "currentColor", className: cD.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(cG, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${cD.M0} ${cD.Nh}`
                    : t.running
                      ? `${cD.M0} ${cD.rF}`
                      : `${cD.M0} ${cq[t.category]}`,
                duration: cw(t),
            }),
        ],
    });
}
function cB(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(eg.D, {
        tag: "div",
        role: "treeitem",
        id: cO(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${cD.$y} ${l ? cD.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: cD.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: cD.ai,
                        children: (0, a.jsx)(t0.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: cD.U9 }),
                    (0, a.jsx)("span", { className: `${cD.nf} ${cD.dL}` }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: cD.MQ,
                        children: ck(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(cG, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${cD.M0} ${cD.ab} ${cD.dL}`,
                duration: cy(t.totalMs),
            }),
        ],
    });
}
function cU(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(x.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: cD._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: cD.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${cD.nf} ${cq[t.category]}` }),
                          (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cC("Start", `+${cy(e.start)}`), cC("Duration", cw(e))];
                      e.count > 1
                          ? t.push(
                                cC("Calls", String(e.count)),
                                cC("Longest call", cy(e.maxMs)),
                                cC("Spread over", cy(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cC("Self time", cy(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cC("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cC("Notes", l.join(", "))),
                          null != e.span.error && t.push(cC("Error", e.span.error)));
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
                              s = "cost_usd" === t ? cN(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cC(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cA.flatMap((e) => {
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
                                      : (0, a.jsx)(x.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: cD.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(x.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(x.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: cD.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(x.E, {
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
function cK(e) {
    let { trace: t } = e,
        n = i.useMemo(() => cE(t), [t]);
    return (0, a.jsx)(cF, { stats: n });
}
function cH(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cx.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? c$ : (0, cx.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cx.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cx.x7)(t)), l((n) => (0, cx._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, cx.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cx.IE)(t, e);
                        null != n && l((e) => (0, cx.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cx.IE)(t, e);
                        null != n && l((e) => (0, cx.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, cx.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, cx.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cx.hB)(t));
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
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: m, expandSubtree: f } = n,
        h = (0, cx.dj)(t),
        g = i.useMemo(() => (0, cx.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        v = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
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
                    null != t && (u(t.key), document.getElementById(cO(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, m, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(cR.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: cD.z,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cS(t),
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cI(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(x.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(x.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${ck(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(cK, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: cD.KE,
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
                            (0, a.jsx)(x.E, {
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
                        "aria-activedescendant": null == o ? void 0 : cO(o),
                        className: cD.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: v,
                        children: [
                            (0, a.jsxs)("div", {
                                className: cD.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: cD.So,
                                        children: (0, a.jsx)(x.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: cD.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                x.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${cD.io} ${(e / h) * 100 > 85 ? cD.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cy(e),
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
                                          cz,
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
                                    : (0, a.jsx)(cB, { row: e, extent: h, selected: e.key === o, onReveal: m }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(cP.j, { children: (0, a.jsx)(cU, { node: s }) }),
        ],
    });
}
function cW(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([uk.A], () => uk.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(cT.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(cL.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(cR.c, {
                      children: (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(cH, { trace: i }),
        ],
    });
}
let cV = { running: cD.Vf, ok: cD.mo, error: cD.Sr };
function cX(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${cD.Om} ${cV[t]}`, role: "img", "aria-label": cj[t] });
}
function cQ(e, t) {
    (0, F.qf)((n) => (0, a.jsx)(cW, { ...n, projectId: e, traceId: t }));
}
function cZ(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => cQ(t, n.id), [t, n.id]);
    return (0, a.jsxs)(eg.D, {
        className: cD.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: cD.sU,
                children: [
                    (0, a.jsx)(cX, { status: (0, cx.lQ)(n) }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: cD._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cS(n),
                    }),
                ],
            }),
            (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cI(n) }),
            null == l
                ? null
                : (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function cY(e) {
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
            (0, ch.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(ez.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ez.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(uA.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(uC.rX, {
                    children: (0, a.jsx)(uC.Dr, {
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
                icon: aZ.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function cJ(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([uk.A], () => uk.A.getTimingTraces(t), [t]),
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
                    let t = e.map(cE);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cx.BF.map((e) => ({
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
              className: cD.Ie,
              children: [
                  (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: cD.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: cD.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: cD.fH,
                              children: (0, a.jsx)(cf.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(cY, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(tG.Ch, {
                      className: cD.XG,
                      children: [
                          (0, a.jsx)(cF, { stats: u }),
                          0 === o.length
                              ? (0, a.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: cD.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(cZ, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function c0(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function c1(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function c2(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function c3(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function c4(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function c5(e) {
    return I.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let c7 = ["all", "preview", "stable", "web"];
function c8(e) {
    switch (e.reason) {
        case "local":
            return I.intl.string(S.default.mUeKML);
        case "unconfigured":
            return I.intl.string(S.default.bGefb5);
        case "unauthorized":
            return I.intl.string(S.default.KLx6Bb);
        default:
            return null != e.detail
                ? I.intl.formatToPlainString(S.default.t09Q6q, { detail: e.detail })
                : I.intl.string(S.default["t+tG59"]);
    }
}
function c9(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : I.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: c0(e.memory_p50_bytes ?? 0),
              p999: c0(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let c6 = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var de = n(911608),
    dt = n(177427);
function dn(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dt.KE,
        children: [
            (0, a.jsx)("div", {
                className: dt.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(v.y, { type: v.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: I.intl.string(S.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: I.intl.formatToPlainString(S.default.INVO50, { time: c3(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(d.$, { variant: "secondary", size: "sm", text: I.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function dl(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dt.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(x.E, { variant: "body-xs/semibold", color: "text-muted", className: dt.Gf, children: t }),
            n,
        ],
    });
}
function dr(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dt.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dt.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dt.kS,
                        children: [i, (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dt.kS,
                        children: [
                            s,
                            (0, a.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function da(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dt.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dt.x7,
                children: [
                    (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(de.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dt.dh : void 0,
            }),
        ],
    });
}
function di(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dr, {
            label: I.intl.string(S.default.SXP7pD),
            value: I.intl.string(S.default.E5hKVi),
            hint: c8(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dr, {
            label: I.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: I.intl.string(S.default.AGvoMJ),
        });
    let l = c9(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dr, { label: I.intl.string(S.default["H/X+FI"]), value: c1(n.cpu_ms) }),
            null != l && (0, a.jsx)(dr, { label: I.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function ds(e) {
    let { analytics: t } = e,
        n = I.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dl, {
            title: n,
            children: (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: c8(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? c6[t] : null) ? I.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dl, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: I.intl.string(S.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dr,
                          {
                              label: n,
                              value: I.intl.formatToPlainString(S.default["w/2voO"], { cpu: c1(t.cpu_ms) }),
                              hint: c9(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var du = n(678708),
    dc = n(414499),
    dd = n(714800),
    dm = n(81466),
    df = n(424383),
    dh = n(664121),
    dg = n(816943),
    dp = n(268791),
    dx = n(514042),
    dv = n(872351),
    dj = n(708988),
    db = n(150934),
    dy = n(417270);
let dk = "Restart Agent",
    dw = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dA(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dC(e, t) {
    return { label: e, value: null != t && "" !== t ? c3(t) : "Unknown", icon: "calendar" };
}
function dN(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dS(e, t, n, l) {
    let [r, a] = dw[n.status];
    return { label: e, value: `${dN(n.bytes)} of ${dN(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function dI(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = c3(e.at);
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
let dE = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d_(e) {
    let t = `container ${dA(e.local)} \xb7 remote ${dA(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dE[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${c2(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${c2(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${c2(n)} Ahead, ${c2(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let dM = ["main", "wip"];
var dR = n(400154);
let dP = {
        checkout: du.FolderIcon,
        edit: m.PencilIcon,
        remote: dc.CloudIcon,
        commits: dd.ListNumberedIcon,
        calendar: dm.CalendarIcon,
        save: df.SaveIcon,
        objects: dh.ServerIcon,
        download: dg.CloudDownloadIcon,
        size: dp.SpeedometerIcon,
        file: dx.FileIcon,
    },
    dT = {
        ok: [lW.CircleCheckIcon, td.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [cM.WarningIcon, td.A.colors.ICON_FEEDBACK_WARNING],
        error: [si.CircleXIcon, td.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dv.ArrowSmallUpIcon, td.A.colors.ICON_MUTED],
        behind: [dj.ArrowSmallDownIcon, td.A.colors.ICON_MUTED],
    };
function dL(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([uk.A], () => uk.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cm.DK)(t), [t]),
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
                    `Updated ${c3(r)}`,
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
    return (0, a.jsxs)(dl, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: dR.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(x.E, {
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
                    if (!e.running || null != e.localError) return [dI(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dI(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : c2(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = dM.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d_))
                        : l.push(
                              { label: "Main", value: dA(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dA(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? c2(e.commits) : "Unknown", icon: "commits" },
                            dC("Oldest Commit", e.oldest),
                            dC("Newest Commit", e.newest),
                            dI(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${c2(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${c2(t.loose)} loose (${c0(t.looseBytes)}) \xb7 ${c2(t.packed)} packed in ${n} (${c0(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${c2(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${c2(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                dS(
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
                                  dS("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = dP[r],
                        [o, u] = null != i ? dT[i] : [null, void 0];
                    return (0, a.jsx)(
                        dr,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: td.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function d$(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, c.bG)([uk.A], () => uk.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cm.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = uk.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cm.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                oF.h.dispatch({
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
            let o = i.useCallback(() => (0, cm.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dk,
                },
                restart: o,
            };
        })(t),
        m = i.useCallback(() => {
            (0, w.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, a.jsxs)("div", {
        className: dR.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: dR.nM,
                children: [
                    (0, a.jsx)(db.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dy.RetryIcon,
                        text: dk,
                        loading: l,
                        disabled: l,
                        onClick: m,
                    }),
                ],
            }),
            (0, a.jsx)(x.E, {
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
                            return `Restarted \xb7 new instance since ${c3(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${c3(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function dD(e, t) {
    return (0, a.jsx)(dr, {
        label: e,
        value: I.intl.formatToPlainString(S.default.yHJxuP, { count: c2((0, u4.aM)(t)) }),
        hint: `${c2(t.input_tokens)} in \xb7 ${c2(t.output_tokens)} out \xb7 ${c2(t.cache_read_input_tokens)} cache read`,
    });
}
function dq(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        u,
        m,
        f,
        h,
        { projectId: g, status: p, fetchState: v, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: A,
            turnRunning: C,
            handleForceCompaction: N,
            handleForceCompactionOverride: E,
            handleRestartWorkspace: _,
            lifetime: M,
            limits: R,
            session: P,
            contextCeiling: T,
        } = ((t = (0, c.bG)([uk.A], () => uk.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([uk.A], () => uk.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([uk.A], () => uk.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([uk.A], () => uk.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([uk.A], () => uk.A.getSandboxRestartState(g), [g])),
        (o = (0, c.bG)([l1.A], () => l1.A.isThinking(g), [g])),
        (u = i.useCallback(() => (0, cm.Lj)(g), [g])),
        (m = i.useCallback(() => (0, cm.Lj)(g, !0), [g])),
        (f = i.useCallback(() => (0, cm.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: o,
            handleForceCompaction: u,
            handleForceCompactionOverride: m,
            handleRestartWorkspace: f,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: dR.Mf,
        children: [
            (0, a.jsx)(dn, { generatedAt: p?.generated_at ?? null, fetchState: v, onRefresh: j }),
            (0, a.jsx)(dl, {
                title: I.intl.string(S.default.JghNal),
                children:
                    null == M
                        ? (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: I.intl.string(S.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dr, {
                                      label: I.intl.string(S.default["9nqym2"]),
                                      value: c2((0, u4.a7)(M.cost_usd)),
                                      hint: I.intl.formatToPlainString(S.default.NCdUIh, { count: c2(M.turns) }),
                                  }),
                                  dD(I.intl.string(S.default.xtxP0e), M.orchestrator),
                                  dD(I.intl.string(S.default["9Sj3SX"]), M.codegen),
                                  dD(I.intl.string(S.default.ANCEo3), (0, u4.wU)(M.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dr, {
                                          label: I.intl.string(S.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${c2(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dl, {
                title: I.intl.string(S.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: I.intl.string(S.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  dD(I.intl.string(S.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dr, {
                                      label: I.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, u4.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dl, {
                title: I.intl.string(S.default.NbRk9a),
                children: [
                    null != y && null != T
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(da, {
                                      label: I.intl.string(S.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: T,
                                      formatValue: c2,
                                  }),
                                  (0, a.jsx)(dr, {
                                      label: I.intl.string(S.default.mRbSns),
                                      value: `${c2(y.tokensBefore)} \u{2192} ${c2(y.tokensAfter)}`,
                                      hint: I.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: c2(y.retainedMessages),
                                          time: c3(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != T
                                      ? I.intl.formatToPlainString(S.default.GMLCNv, { ceiling: c2(T) })
                                      : I.intl.string(S.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dr, {
                            label: I.intl.string(S.default["4BX5KK"]),
                            value: `${c2(k.projected)} / ${c2(k.threshold)}`,
                            critical: !0,
                            hint: I.intl.formatToPlainString(S.default["6ngCax"], { time: c3(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: dR.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: I.intl.string(S.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: N,
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return I.intl.string(S.default.wox6Ev);
                                    if ("pending" === e) return I.intl.string(S.default.OcPHQ1);
                                    let t = c3(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return I.intl.formatToPlainString(S.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? S.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? S.default.YZb4hK
                                              : S.default.ZoUSVK;
                                    return I.intl.formatToPlainString(n, {
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
                                            text: I.intl.string(S.default.ZxG2AI),
                                            onClick: E,
                                        }),
                                        (0, a.jsx)(x.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: I.intl.string(S.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: dR.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: I.intl.string(S.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || C,
                                onClick: _,
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return I.intl.string(S.default.mlok8D);
                                    if ("pending" === e) return I.intl.string(S.default["1ugSyK"]);
                                    let t = c3(e.observedAt);
                                    return I.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d$, { projectId: g }),
                ],
            }),
            (0, a.jsx)(dL, { projectId: g }),
            (null != P || p?.analytics != null) &&
                (0, a.jsxs)(dl, {
                    title: I.intl.string(S.default.EsSzCS),
                    children: [
                        null != P &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dr, {
                                        label: I.intl.string(S.default.CLXHAs),
                                        value: c3(P.instance_since),
                                        hint: I.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dr, { label: I.intl.string(S.default["8V8e1Z"]), value: c2(P.sockets) }),
                                    (0, a.jsx)(dr, {
                                        label: I.intl.string(S.default["4pBzYW"]),
                                        value: P.turn_inflight
                                            ? I.intl.string(S.default.Wv025I)
                                            : I.intl.string(S.default["7/lsFY"]),
                                    }),
                                    P.queued_messages > 0 &&
                                        (0, a.jsx)(dr, {
                                            label: I.intl.string(S.default["3oUYnv"]),
                                            value: c2(P.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(di, { analytics: p.analytics }),
                    ],
                }),
            null != R &&
                (0, a.jsxs)(dl, {
                    title: I.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dr, {
                            label: I.intl.string(S.default.IlDBN3),
                            value: c2(R.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dr, {
                            label: I.intl.string(S.default["ZdzKR+"]),
                            value: I.intl.formatToPlainString(S.default.yHJxuP, { count: c2(R.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dr, {
                            label: I.intl.string(S.default.cIhN2W),
                            value: I.intl.formatToPlainString(S.default.yHJxuP, {
                                count: c2(R.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dr, {
                            label: I.intl.string(S.default["+fOn/q"]),
                            value: c2(R.max_user_message_chars),
                        }),
                        (0, a.jsx)(dr, { label: I.intl.string(S.default.kIHga0), value: c2(R.max_build_attempts) }),
                        (0, a.jsx)(dr, { label: I.intl.string(S.default.Iw03yW), value: c2(R.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var dF = n(237528),
    dO = n(629584),
    dG = n(531893);
function dz(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: dG.ut,
              children: (0, a.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: I.intl.string(S.default.h1SE6R),
              }),
          });
}
function dB(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: dG.qf,
              children: [
                  (0, a.jsx)(x.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: I.intl.string(S.default.h1SE6R),
                  }),
                  (0, a.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: I.intl.string(S.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dG.qf,
              children: [
                  (0, a.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function dU(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: dG.ps,
              children: (0, a.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: I.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var dK = n(109079);
let dH = i.memo(function (e) {
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
        className: dK.vK,
        children: [
            (0, a.jsx)(x.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: dK.Mt,
                selectable: !0,
                children: cp(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(x.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: dK.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: dK.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: dK.Cq, children: (0, a.jsx)(dF.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: dK.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(dF.v, { text: I.intl.string(S.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(x.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(eg.D, {
                                      className: dK.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": I.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(tJ.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(t0.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(x.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  I.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? S.default.kUhyUv : S.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(x.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: dK.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(x.E, {
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
function dW(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cd.A], () => cd.A.getLogs(t), [t]),
        l = (0, c.bG)([cd.A], () => cd.A.getHistoryState(t, "logs")),
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
                c7.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return c5(e);
                            case "web":
                                return I.intl.string(S.default.IVzfVV);
                            default:
                                return I.intl.string(S.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: dK.$F,
        children: [
            (0, a.jsxs)("div", {
                className: dK.y4,
                children: [
                    (0, a.jsx)(dO.I, {
                        look: "pill",
                        "aria-label": I.intl.string(S.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: dK.KT,
                        children: (0, a.jsx)(cf.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: I.intl.string(S.default["m2+37Y"]),
                            "aria-label": I.intl.string(S.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(dz, { state: l }),
            (0, a.jsxs)(tG.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: dK.sx,
                children: [
                    (0, a.jsx)(dU, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(dB, {
                              state: l,
                              emptyTitle: I.intl.string(S.default.S7qlPG),
                              emptyBody: I.intl.string(S.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: I.intl.string(S.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(dH, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function dV(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dl, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: I.intl.string(S.default.umcjif),
                      }),
        })
    );
}
function dX(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dr, {
                      label: I.intl.formatToPlainString(S.default["01ZMS4"], { env: c5(n) }),
                      value: ((t = l.connected), I.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dr, {
                      label: I.intl.string(S.default["z1dh+F"]),
                      value: c2(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${c3(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dr, { label: I.intl.string(S.default.Iz5GnJ), value: c2(l.guild_count) }),
                  (0, a.jsx)(dr, {
                      label: I.intl.string(S.default["7UqtNv"]),
                      value: c2(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? I.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: c3(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dr, {
                          label: I.intl.string(S.default["x3+JXJ"]),
                          value: c2(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dr, { label: c5(n), value: I.intl.string(S.default.lTHQss) });
}
function dQ(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dr, {
        label: c5(t),
        value: I.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: c2(n.requests),
            failures: c2(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? I.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: c3(n.last_failure.at),
                  })
                : I.intl.formatToPlainString(S.default["7KlGT6"], { time: c3(n.since) }),
    });
}
function dZ(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dr, {
                label: I.intl.formatToPlainString(S.default["92gVTm"], { env: c5(t) }),
                value: c2(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dr,
                    {
                        label: I.intl.formatToPlainString(S.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? I.intl.formatToPlainString(S.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? I.intl.formatToPlainString(S.default.wxAWNv, { time: c3(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function dY(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dr, {
        label: c5(t),
        value: I.intl.formatToPlainString(S.default.suAOj9, { calls: c2(n.calls), errors: c2(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function dJ(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dl, {
            title: t,
            children: (0, a.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: I.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dl, {
        title: t,
        children: [
            (0, a.jsx)(dr, {
                label: I.intl.string(S.default.xtD4Zp),
                value: c2(n.requests),
                hint: I.intl.formatToPlainString(S.default["7KlGT6"], { time: c3(n.since) }),
            }),
            (0, a.jsx)(dr, { label: I.intl.string(S.default.gfRhR3), value: c2(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(da, {
                              label: I.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: c1,
                          }),
                          (0, a.jsx)(dr, {
                              label: I.intl.string(S.default.mSKImM),
                              value: c1(r),
                              hint: I.intl.formatToPlainString(S.default.JqMU05, {
                                  total: c1(n.cpu_ms_total),
                                  wall: c1(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dr, {
                      label: I.intl.string(S.default.LEJ5r3),
                      value: I.intl.string(S.default["2Ekb2b"]),
                      hint: I.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dr, { label: I.intl.string(S.default.xvmL1D), value: c1(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dr, { label: I.intl.string(S.default["4sQYwH"]), value: c2(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dr, {
                label: I.intl.string(S.default.bQenOy),
                value: c2(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: I.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dr, { label: I.intl.string(S.default.xgpn4Y), value: c4(n.build) }),
        ],
    });
}
function d0(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: I.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: I.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: I.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dl, {
        title: I.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dr, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dr, {
                                  label: I.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: c0(l.r2_bytes),
                                  hint: I.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: c2(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(da, {
                                      label: I.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: c0,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function d1(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dR.Mf,
        children: [
            (0, a.jsx)(dn, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(dJ, {
                            title: I.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(dJ, {
                            title: I.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(d0, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(dV, {
                                title: I.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dX, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(dV, {
                                title: I.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dQ, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(dV, {
                                title: I.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dZ, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(dV, {
                                title: I.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dY, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(ds, { analytics: t.analytics }),
                        (0, a.jsxs)(dl, {
                            title: I.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dr, {
                                    label: I.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? c4(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dr, {
                                    label: I.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? c4(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var d2 = n(592465);
function d3(e) {
    let { projectId: t, onClose: n } = e,
        l = P(),
        [r, s] = i.useState(() => (l && _?.projectId === t ? "trace" : "logs")),
        o = (0, c.bG)([uk.A], () => uk.A.getStatus(t), [t]),
        u = (0, c.bG)([uk.A], () => uk.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, cm.R7)(t), (0, cm.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, e$.Rw)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == _ || _.projectId !== e) return null;
            let { traceId: t } = _;
            return ((_ = null), t);
        })(t);
        return null != e && (cQ(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        M(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, ue.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: uk.A.getStatus(t),
                        last_turn_usage: uk.A.getLastTurnUsage(t),
                        last_compaction: uk.A.getLastCompaction(t),
                        last_compaction_decline: uk.A.getLastCompactionDecline(t),
                        timing_traces: uk.A.getTimingTraces(t),
                        logs: cd.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, A.P0)({ text: I.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = I.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: d2.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(eY.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(eY.Ay.Icon, {
                            icon: o8.CopyIcon,
                            tooltip: I.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(eY.Ay.Icon, { icon: ex.XSmallIcon, tooltip: I.intl.string(I.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(eY.Ay.ChannelIcon, { icon: o6.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(eY.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: d2.rf,
                children: [
                    (0, a.jsxs)(cc.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": I.intl.string(S.default.RvvWIh),
                        className: d2.vR,
                        children: [
                            (0, a.jsx)(cc.V.Item, { id: "logs", children: I.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(cc.V.Item, { id: "worker", children: I.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(cc.V.Item, { id: "agent", children: I.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(cc.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(dW, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(d1, { status: o, fetchState: u, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(cJ, { projectId: t })
                            : (0, a.jsx)(dq, { projectId: t, status: o, fetchState: u, onRefresh: d }),
                ],
            }),
        ],
    });
}
var d4 = n(365912),
    d5 = n(873715);
function d7(e) {
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
let d8 = Object.freeze({ x: -1, y: -1 });
function d9(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = d7(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var d6 = n(192888);
function me(e, t) {
    return (0, d6.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(d9, () => ({ status: "failed" }));
}
var mt = n(108308);
let mn = { x: 25, y: 21 };
function ml(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mr(e, t, n, l) {
    let r = ml(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function ma(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mi(e) {
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
function ms(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: m } = (0, L.rt)(o),
        f = (0, T.Zv)(o),
        h = (0, F.Rv)(),
        g = (0, c.bG)([nA.default], () => nA.default.getCurrentUser()),
        p = g?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [w, A] = i.useState(!1),
        [C, N] = i.useState(null),
        [E, _] = i.useState(!1),
        M = i.useRef(null),
        R = i.useRef(null),
        P = i.useRef(null),
        [$, D] = i.useState(null),
        [q, O] = i.useState(!1),
        [G, z] = i.useState(null),
        [B, U] = i.useState(null),
        K = i.useRef(!1),
        [H, W] = i.useState(!1),
        [V, X] = i.useState(null),
        Q = u && !f && !h;
    null == G || (Q && G.projectId === o) || z(null);
    let Z = G?.projectId ?? null;
    i.useEffect(() => {
        if (null != Z) return () => (0, nm.xJ)(Z, "design");
    }, [Z]);
    let Y = tt(r, Q);
    i.useEffect(() => {
        if (!Q || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void A(!0);
        (y(!0), A(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, d5.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? mi(t.response) : null;
                    null == n ? A(!0) : (j(n), (0, L.F5)(o, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), A(!0));
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
        if (null == v) {
            J.current = Y;
            return;
        }
        if (te(J.current, Y)) return;
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
                    (0, d5.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = mi(e.response);
                        null != n && (j(n), (0, L.F5)(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let a = d7(e.element);
                            null != a && l.set(r.id, a);
                        }),
                            (0, L.AW)(o, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, Y, v, m, o, r]),
        i.useEffect(() => {
            if (!Q)
                return () => {
                    (N(null), z(null), X(null), j(null));
                };
        }, [Q]));
    let ee = i.useRef(null),
        et = i.useRef(null),
        en = i.useRef(!1),
        el = i.useRef(!1);
    i.useEffect(() => {
        ((el.current = Q), Q || ((ee.current = null), (et.current = null), (P.current = null), _(!1)));
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
                    me(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mf(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && O(!0);
                            else {
                                let e = (0, lR.Sk)(t.target);
                                (D((t) => (mm(t, e) ? t : e)),
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
        ea = i.useCallback(() => {
            if (null == G) return;
            let e = !K.current;
            (U({ at: G.at, label: G.label, draft: G.draft, instant: e }), W(e), z(null));
        }, [G]);
    (i.useEffect(() => {
        if (!H) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => W(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [H]),
        i.useEffect(() => {
            if (null == B) return;
            let e = setTimeout(() => U(null), mc);
            return () => clearTimeout(e);
        }, [B]));
    let ei = null == v || null == Y || v.viewport.width < 1 ? 1 : Y.width / v.viewport.width,
        es = null != v || w,
        eo = i.useMemo(() => v?.elements ?? [], [v]),
        eu = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eu.current = { rect: Y, scale: ei };
    }, [Y, ei]);
    let ec = i.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, nm.xJ)(o, "design"),
                    X(null),
                    (K.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: (0, lR.Sk)(e) }));
            },
            [o],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        em = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = R.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(em);
    let ef = i.useCallback(
            (e) => {
                if (null == Y || null != V) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), em(), _(!0), null != G)) {
                    (Math.abs(e.clientX - G.at.x) > md || Math.abs(e.clientY - G.at.y) > md) && (K.current = !0);
                    return;
                }
                if (!es) return void N(null);
                let t = ed(e, Y);
                if (q) {
                    let e = (0, lR.CZ)(eo, t.x, t.y),
                        n = null != e && mf(e, Y, ei) ? null : e;
                    if (null != n) {
                        let e = (0, lR.Sk)(n);
                        D((t) => (mm(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ei, es, ed, q, eo, G, V, em, er],
        ),
        eh = null == V ? null : m.find((e) => e.id === V.id),
        eg = Q && (E || G?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && me(e, d8);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (_(!1), N(null), (et.current = null), (ee.current = null));
    }, []);
    i.useEffect(() => {
        if (!Q || !E || !es || q || null != G || null != V) return;
        let e = P.current,
            { rect: t, scale: n } = eu.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (ee.current = l), er());
    }, [Q, E, es, q, G, V, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != G || null != V) {
                    (ea(), X(null));
                    return;
                }
                if (null == C || null == Y) return;
                let t = ed(e, Y);
                ec(C, (0, lR.Hm)(C, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [C, Y, ed, G, V, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != o && (N(null), (0, k.K7)(o)?.active === !0 ? (0, k.V9)(o) : (0, L.mB)(o));
        }, [o]),
        ej = i.useCallback(() => {
            null != o &&
                (null != G
                    ? ea()
                    : V?.confirmingRemove === !0
                      ? X({ ...V, confirmingRemove: !1 })
                      : null != V
                        ? X(null)
                        : ev());
        }, [o, G, V, ea, ev]),
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
                        return ((0, d4.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || (0, k.K7)(ey.current)?.active !== !0) && ek.current());
        }
    }, [Q, s]);
    let eA = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != G || null != V || 0 === eo.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == C ? -1 : eo.findIndex((e) => e.ref === C.ref);
                    N(eo[(n + (t ? 1 : -1) + eo.length) % eo.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != C &&
                    (e.preventDefault(),
                    ec(C, lR.QU, { x: (Y?.left ?? 0) + C.rect.x * ei, y: (Y?.top ?? 0) + C.rect.y * ei }));
            },
            [o, G, V, eo, C, ec, ej, Y, ei],
        ),
        eC = i.useCallback(
            (e) => {
                null == o ||
                    null == G ||
                    (((0, lR.Ch)(G.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, e$.dv)(o, (0, lR.Q9)(G.target, G.draft), e), ea(), N(null)));
            },
            [o, G, ea],
        ),
        eN = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, e3.vX)(o, e)), [o]),
        eS = i.useCallback(() => {
            null == o ||
                null == V ||
                null == p ||
                ((0, lR.Ch)(V.draft) && ((0, L.pV)(o, p, V.id, V.draft.trim()), X({ ...V, editing: !1 })));
        }, [o, V, p]),
        eI = i.useCallback(() => {
            null != o && null != V && null != p && ((0, L.aC)(o, p, V.id), X(null));
        }, [o, V, p]),
        eE = u
            ? b
                ? I.intl.string(S.default["Eb/YV9"])
                : w
                  ? I.intl.string(S.default.FD30bh)
                  : I.intl.formatToPlainString(S.default.dTSqLF, { count: m.length })
            : "",
        e_ = Q && null != Y,
        eM = E && null == V,
        eR = G?.target ?? eh?.target ?? null,
        eP = G ?? B,
        eT = G ?? (B?.instant === !0 ? null : B),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = ma(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mr(eh.target, eh.anchor, Y, ei), Y)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            me(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, e0.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: mt.Li,
                children: [
                    (0, a.jsx)(tY.A, {
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
                                      className: mt.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": I.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eA,
                                  }),
                                  null != C && null == C.marker && null == G && null == V
                                      ? (0, a.jsx)(mh, { box: ml(C, Y, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: mt.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: mt.xz,
                                          "data-shown": null != C && null == V && null == G ? "" : void 0,
                                          "data-instant": H ? "" : void 0,
                                          children: (0, a.jsxs)(x.E, {
                                              variant: "body-xs/medium",
                                              className: mt.Ux,
                                              children: [
                                                  null == $
                                                      ? null
                                                      : (0, a.jsx)("span", { className: mt.Tl, children: $.kind }),
                                                  null == $ || "" === $.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: mt.kh,
                                                            children: [" ", $.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: R,
                                      className: mt.Y,
                                      children: eM ? (0, a.jsx)("div", { className: mt.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: mt.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: mt.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == G ? "" : void 0,
                                                children: (0, a.jsxs)(x.E, {
                                                    variant: "body-xs/medium",
                                                    className: mt.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: mt.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: mt.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, a.jsx)("div", { className: mt.D0, style: ml(eR, Y, ei), "aria-hidden": !0 })
                                      : null,
                                  m.map((e, t) => {
                                      let n = mr(e.target, e.anchor, Y, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mt.xL,
                                              style: { ...ma(n, Y), width: 24, height: 24 },
                                              "aria-label": I.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lR.Bx)(e.target),
                                              }),
                                              "aria-expanded": V?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == G && X(l);
                                              },
                                              onFocus: () => {
                                                  null == G && X(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ea(), X(l));
                                              },
                                              children: (0, a.jsx)(mo, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == o
                                      ? null
                                      : (0, a.jsx)(e9, {
                                            projectId: o,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: Y,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != G && (0, lR.Ch)(eP.draft),
                                            onChange: (e) => {
                                                null != G && z({ ...G, draft: e });
                                            },
                                            onSubmit: eC,
                                            onDismiss: ea,
                                            onUploadFile: eN,
                                            closing: null == G,
                                        }),
                                  null != eh && null != V && null != eL
                                      ? (0, a.jsxs)(mu, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lR.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                V.confirmingRemove ? X({ ...V, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                V.editing || V.confirmingRemove || X(null);
                                            },
                                            children: [
                                                V.editing
                                                    ? (0, a.jsx)(nx.f, {
                                                          autoFocus: !0,
                                                          label: I.intl.string(S.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: V.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => X({ ...V, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eS());
                                                          },
                                                      })
                                                    : (0, a.jsx)(x.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: mt.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, L.It)(eh, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: mt.eB,
                                                          children: V.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(x.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mt.nv,
                                                                            children: I.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: I.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                X({ ...V, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: I.intl.string(S.default.friIzR),
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
                                                                            text: I.intl.string(S.default.friIzR),
                                                                            onClick: () =>
                                                                                X({
                                                                                    ...V,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        V.editing
                                                                            ? (0, a.jsx)(d.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !(0, lR.Ch)(V.draft),
                                                                                  text: I.intl.string(S.default.iicRP9),
                                                                                  onClick: eS,
                                                                              })
                                                                            : (0, a.jsx)(d.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: I.intl.string(
                                                                                      S.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      X({
                                                                                          ...V,
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
function mo(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nA.default], () => nA.default.getUser(t), [t]);
    return (0, a.jsx)(a_.eu, {
        src: null == n ? null : aR.Ay.getUserAvatarURL(n),
        size: aM._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function mu(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        v = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(mn);
    i.useLayoutEffect(() => {
        let e = v.current?.getBoundingClientRect(),
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
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), r)), originX: u.x - s, originY: u.y - o }),
        N = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${C}px` };
    return (0, a.jsxs)("div", {
        ref: v,
        className: mt.Nr,
        style: N,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: mt.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: mt.ip, children: (0, a.jsx)(mo, { authorId: d }) }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: mt.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: mt.zI, children: p }),
        ],
    });
}
let mc = 300,
    md = 2;
function mm(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mf(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mh(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: mt.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mg = n(318774),
    mp = n(91242),
    mx = n(697744),
    mv = n(130324);
function mj(e) {
    let t = (0, mx.c)(),
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
    let r = (0, tU.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mb(e) {
    let { className: t } = e,
        { Component: n, events: l } = mj(3e4);
    return (0, a.jsxs)("div", {
        className: u()(t, mv.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mv.ol,
                children: I.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var my = n(251363),
    mk = n(944142),
    mw = n(532247),
    mA = n(501628);
function mC(e) {
    let { progress: t } = e,
        { Component: n } = mj(1500),
        l = R.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mA.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mA.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(x.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mN(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([mk.A], () => (s ? mk.A.getLiveReload(t) : null), [s, t]),
        u = (0, eE.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        m = o?.background === !0,
        f = (function (e, t, n) {
            let l = (0, mw.dv)(e),
                [r, a] = i.useState(null),
                [s, o] = i.useState(l),
                [u, d] = i.useState(t);
            s !== l && (o(l), d(t), a(null != l || u ? null : (0, mw.QP)(e, s)));
            let m = (0, c.bG)(
                    [mp.A],
                    () => {
                        let e = mp.A.getFrame(n);
                        return (0, eR.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, my.ow)(null, n) && e();
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
        h = m ? null : (0, mw.h_)(d, o?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tY.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: mA.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mC, { progress: h }),
                  })
                : null,
        ],
    });
}
let mS = 0;
var mI = n(782134),
    mE = n(357858),
    m_ = n(343030),
    mM = n(11411),
    mR = n(111518),
    mP = n(240666);
let mT = { width: 1 / 0, height: 1 / 0 };
function mL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mT;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var m$ = n(702083);
function mD(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([e_.A], () => ({
            mobile: e_.A.isBuilderPreviewMobile(),
            landscape: e_.A.isBuilderPreviewLandscape(),
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
        m = n ? mL(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: u()(m$.dw, { [m$.PQ]: null != m }),
        children: (0, a.jsx)("div", { className: u()(m$.R9, { [m$.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var mq = n(347927);
function mF(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: u()(mq.Bf, l && mq.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: mq.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(x.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var mO = n(957272);
function mG(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, mR.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mP.A)(t, n), s === mR.n.Launched)) {
        let e = (0, a.jsx)(mM.A, { frameId: i.id, level: m_.A.WithinAppContent, className: mO.Z7, overlay: r });
        return (0, eM.Q5)(n) ? (0, a.jsx)(mD, { children: e }) : e;
    }
    return (0, a.jsx)(mz, { state: s });
}
function mz(e) {
    let { state: t } = e;
    switch (t) {
        case mR.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: mO.qs,
                children: (0, a.jsx)(mF, {
                    title: I.intl.string(S.default["9kpdo7"]),
                    body: I.intl.string(S.default.iIA8Nj),
                }),
            });
        case mR.n.NoApplication:
            return (0, a.jsx)(mb, { className: mO.qs });
        case mR.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: mO.qs,
                children: (0, a.jsx)(mF, {
                    title: I.intl.string(S.default["7k4GyN"]),
                    body: I.intl.string(S.default.zdIy3R),
                }),
            });
        case mR.n.Error:
            return (0, a.jsxs)("div", {
                className: mO.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: I.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: mO.tj,
                        children: I.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case mR.n.AwaitingLaunch:
        case mR.n.Loading:
            return (0, a.jsx)("div", { className: mO.qs, children: (0, a.jsx)(v.y, {}) });
    }
}
var mB = n(308528),
    mU = n(334738),
    mK = n(5206),
    mH = n(365971),
    mW = n(703462);
function mV(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: mW.f,
        children: [
            (0, a.jsx)(eu.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mX() {
    return (0, a.jsx)("div", { className: mW.f, children: (0, a.jsx)(v.y, {}) });
}
function mQ(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, o] = i.useState(null),
        u = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nk.A], () => (null != u ? nk.A.getChannel(u) : null), [u]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && mB.A.preload(nS.ME, t);
        }, [t]),
        (n = (0, c.bG)([o0.A], () => o0.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mH.Xg)();
            return (
                (0, mU.yl)(t, e),
                () => {
                    (0, mU.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, W.CN)(l).then(
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
        ? (0, a.jsx)(mV, { message: I.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(mX, {})
          : (0, a.jsx)("div", {
                className: mW.g,
                children: (0, a.jsx)(mK.A, { channel: d, guild: null, chatInputType: sI.oU.SIDEBAR }, d.id),
            });
}
var mZ = n(765671),
    mY = n(596977),
    mJ = n(921853),
    m0 = n(582063);
function m1(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, W.vX)(t, n?.id ?? null);
    }
    let o = I.intl.string(S.default.Gl3XtE),
        u = I.intl.string(S.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: m0.aF,
        children: [
            (0, a.jsx)(ep.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(tr.K, {
                    icon: mJ.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: m0.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: I.intl.formatToPlainString(S.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: I.intl.string(S.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(ep.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tr.K, {
                    icon: t0.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var m2 = n(666476);
let m3 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function m4() {
    (0, A.P0)({ text: I.intl.string(S.default.jj3abP), variant: "critical" });
}
function m5(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = I.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ez.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(m7, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: m0.m2,
                        children: (0, a.jsx)(ep.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tr.K, {
                                "aria-label": r,
                                icon: h.SettingsIcon,
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
                accept: m3.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (m3.includes(n.type)
                                ? n.size > m2.aI
                                    ? (0, A.P0)({ text: I.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, rW.M$)(t, n).catch(m4)
                                : (0, A.P0)({ text: I.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function m7(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([rH.A], () => rH.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(uA.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": I.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(uC.rX, {
                children: [
                    (0, a.jsx)(uC.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: I.intl.string(S.default.uQpDky),
                        icon: lp.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(uC.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: I.intl.string(S.default.AiAz8J),
                        icon: dy.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, rW.Og)(t).catch(m4));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(uC.rX, {
                children: (0, a.jsx)(uC.fP, {
                    id: "conjure-overlay-background-blur",
                    label: I.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, rW.Y1)(t, !i) || m4();
                    },
                }),
            }),
        ],
    });
}
function m8(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: o, height: u } = (0, mZ.Ay)(),
        { captures: c, selected: d } = rK(n),
        m = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: Y({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                o = Y({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: o * s };
        })({ width: o, height: u }, d, l);
    return (
        i.useEffect(() => (0, mY.L0)(), []),
        (0, a.jsxs)("div", {
            className: m0.JH,
            children: [
                (0, a.jsx)(rX, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: m0.dw,
                    children: (0, a.jsx)("div", {
                        className: m0.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${m.top}px`,
                            "--custom-conjure-overlay-widget-end": `${m.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(m.scale),
                        },
                        children: (0, a.jsx)(mG, { applicationId: t, surface: eM.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(m5, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(m1, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function m9(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(mF, {
        title: I.intl.string(S.default.xlEjZ8),
        body: I.intl.string(S.default["4ByPbd"]),
        children: (0, a.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: I.intl.string(S.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var m6 = n(409478),
    fe = n(652227);
function ft(e) {
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
            overlayWidgetSize: m = Q,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([lz.A], () => null != f && null != lz.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: fe.qs, children: (0, a.jsx)(v.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: fe.qs,
                children: (0, a.jsx)(m9, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: fe.RG,
                      children: [
                          (0, et.yf)(o, u)
                              ? g
                                  ? (0, a.jsx)(fn, { projectId: f, onResume: p })
                                  : (0, a.jsx)(mG, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === u && null != d
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: fe.qs,
                                        children: (0, a.jsx)(mF, {
                                            wide: !0,
                                            title: I.intl.string(S.default["08U+YO"]),
                                            body: I.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(m6.A, { applicationId: d })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(m8, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(eR.ZN) })
                              : null,
                          "bot" === u && null != n && null != f
                              ? (0, a.jsx)(mQ, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: fe.qs, children: (0, a.jsx)(v.y, {}) })
              : (0, a.jsx)(mb, { className: fe.qs });
}
function fn(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mE.Pu)(t),
        (0, a.jsx)("div", {
            className: fe.qs,
            children: (0, a.jsx)(mF, {
                wide: !0,
                title: I.intl.string(S.default.MMWEH2),
                body: I.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mI.PlayIcon,
                              text: I.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var fl = n(175841),
    fr = n(156548),
    fa = n(750506),
    fi = n(867193),
    fs = n(539197),
    fo = n(977020);
function fu(e) {
    let { projectId: t } = e,
        n = (0, fs.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fs.Ie)(e);
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
        className: fo.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [fs.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: u()(fo.hN, fo.vW), style: m(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: u()(fo.hN, fo.A7), style: m(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: u()(fo.UE, { [fo.SP]: n.shown, [fo.Vq]: n.pressed, [fo.GP]: n.dipping }),
                style: m(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fc = n(417760);
function fd(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([l1.A], () => null != e && l1.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, e$.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        o = (0, T.CU)(n),
        m = "controlling" === t,
        f = I.intl.string(m ? (o ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        h =
            null != r
                ? (0, a.jsx)(d.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: I.intl.string(S.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: u()(fc.M0, fc.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  m
                      ? (0, a.jsx)(uW.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(fl.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(x.E, { variant: "body-sm/semibold", color: "none", className: fc.ID, children: f }),
                  m ? (0, a.jsx)(tY.A, { children: I.intl.string(S.default.fg1sor) }) : null,
                  m ? (0, a.jsx)("div", { className: fc.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fc.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fc.sp,
                      children: [
                          (0, a.jsx)(fl.SparklesIcon, { size: "sm", color: "currentColor" }),
                          m ? (0, a.jsx)(uW.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fc.f4,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: fc.w9,
                                      children: f,
                                  }),
                                  m
                                      ? (0, a.jsx)(x.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: fc.Rb,
                                            children: I.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  m ? (0, a.jsx)("div", { className: fc.lC, children: h }) : null,
              ],
          });
}
function fm(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, T.Zv)(null != n && n === l ? t : null),
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
        c = (0, F.Rv)(),
        d = (0, fr.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, fr.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = e6(r());
            f((t) => (te(t, e) ? t : e));
            let t = null == h ? null : e6(h);
            (x((e) => (te(e, t) ? e : t)), null != h && (0, fi.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fi.C)(0));
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
        A = (function () {
            let [e] = i.useContext(fa.uY),
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
                      className: fc.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: fc.QF,
                          children: (0, a.jsx)(fd, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, e0.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(tY.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? I.intl.string(S.default.oWcemF)
                                : "handoff" === u
                                  ? I.intl.string(S.default["h+i1r9"])
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
                                  className: fc.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fc.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(fu, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var ff = n(399503),
    fh = n(853555),
    fg = n(944100),
    fp = n(327152),
    fx = n(187645);
let fv = { width: 1280, height: 720 },
    fj = new Map(),
    fb = !1;
function fy() {
    let e = new Map();
    for (let t of new Set([...l1.A.getActivityOrderedProjectIds(), ...(0, T.T7)()])) {
        if (!(l1.A.isThinking(t) || (0, T.wK)(t)) || V.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eS.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, eM.Rc)(t), (0, eM.Th)(t)].find(eR.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fj]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fj.delete(t),
            n.unregisterLookup(),
            fg.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, fp.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        fj.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fx.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fk(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fj.set(e, l),
                    (l.unregisterLookup = (0, fh.Ng)(e, () => (0, my.n5)(n, t))),
                    fg.A.registerFrameTarget(t, n, m_.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of fj) fk(t.element, e, t.frameId);
}
function fk(e, t, n) {
    if (mp.A.getFrame(n)?.surface.type === en.U.OVERLAY) {
        let l = J(eS.Ay.getProject(t));
        (e.classList.remove(fx.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, fp.Pn)(n, l));
        return;
    }
    let l = e_.A.isBuilderPreviewMobile();
    e.classList.toggle(fx.L, !l);
    let r = l ? mL(e_.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, fp.Pn)(n, r ?? fv));
}
var fw = n(873727),
    fA = n(47671),
    fC = n(418842),
    fN = n(413599);
let fS = 0;
var fI = n(487887);
let fE = null;
var f_ = n(541940);
function fM(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            mainClassName: o,
            header: d,
            controlBar: m,
            previewPanelId: f,
            previewPanelLabelledBy: h,
            content: g,
            sidebar: p,
            showsFrame: x,
            paused: v,
        } = e,
        [j, b] = i.useState(null),
        y = (0, eE.A)(l, s),
        k = y?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([fN.A], () => (0, fw.x4)(fN.A.theme)),
            l = (0, c.bG)([fA.A], () => fA.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([aI.Ay], () => ({
                reducedMotion: aI.Ay.useReducedMotion,
                fontScale: (0, fw.U0)(),
                highContrast: aI.Ay.isHighContrastModeEnabled,
                forcedColors: aI.Ay.useForcedColors,
                underlineLinks: aI.Ay.alwaysShowLinkDecorations,
            })),
            d = R.hH.useSetting(),
            m = (0, c.bG)([sk.A], () => sk.A.hidePersonalInformation),
            f = (0, fC.C)(),
            h = (0, c.bG)(
                [mp.A, e_.A],
                () =>
                    e_.A.isBuilderPreviewMobile() &&
                    mp.A.getFrame(t)?.applicationId === e_.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = i.useRef(!1),
            p = i.useRef(!1),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, my.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++fS,
                    baseTheme: n,
                    customTheme: (0, fw.Lq)(),
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
                (0, d6.W)(l, "set-env", i, {
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
                let n = (0, my.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, my.n5)(e, t) && ((x.current = null), b());
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
    })(j, k),
        i.useEffect(() => {
            if (null != t) return (0, fh.Ng)(t, () => (0, my.n5)(j, k));
        }, [t, j, k]));
    let w = i.useCallback(() => (0, my.ow)(j, k), [j, k]),
        A = i.useCallback(() => (x ? (0, my.ow)(j, k) : j), [x, j, k]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: u()(f_.Mh, o),
                children: [
                    d,
                    m,
                    v
                        ? null
                        : (0, a.jsx)(fm, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: A,
                              frameId: k,
                          }),
                    (0, a.jsx)("div", {
                        ref: b,
                        id: f,
                        role: null == f ? void 0 : "tabpanel",
                        "aria-labelledby": h,
                        className: f_.fm,
                        children: g,
                    }),
                ],
            }),
            p,
            v
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(ms, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: w,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(tq, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: w }),
                      ],
                  }),
        ],
    });
}
function fR(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: o,
            frameLaunchParams: d,
            header: m,
            controlBar: f,
            previewPanelId: h,
            previewPanelLabelledBy: g,
            chatOpen: p,
            onCloseChat: x,
            onRestoreVersion: v,
            onImportProject: j,
            debugOpen: b = !1,
            onCloseDebug: y,
            restoreState: k,
            previewReady: w,
            previewGate: A,
            availability: C,
            activeMode: N,
            widgetApplicationId: S,
            overlayWidgetSize: I,
            previewPaused: E = !1,
            onResumePreview: _,
        } = e;
    (0, ff.k)(n, S);
    let M = o.type === en.U.MAIN || (0, eM.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([e_.A], () => ({
            mobile: e_.A.isBuilderPreviewMobile(),
            landscape: e_.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fI.aX.LANDSCAPE : fI.aX.PORTRAIT), (fE = e));
                else {
                    if (fE !== e) return;
                    ((l = fI.aX.UNHANDLED), (fE = null));
                }
                oF.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let R = i.useRef(null),
        [P, L] = i.useState(0);
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
            M && ((t.current = ++mS), (0, W.HV)(r));
        }, [r, M]),
        i.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === mS && (0, W.HV)(null);
            };
        }, [r, M]),
        i.useEffect(() => {
            null != n &&
                ((0, e$.ensureConnection)(n),
                fb ||
                    ((fb = !0),
                    l1.A.addChangeListener(fy),
                    eS.Ay.addChangeListener(fy),
                    mp.A.addChangeListener(fy),
                    e_.A.addChangeListener(fy),
                    V.A.addChangeListener(fy),
                    (0, T.W3)(fy),
                    fy()));
        }, [n]),
        i.useLayoutEffect(() => {
            let e = R.current;
            if (null == e) return;
            function t() {
                null != e && L(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let $ = Math.max(450, P - 320),
        D = (0, eJ.P)({ maxWidth: $, minWidth: 450 }),
        q = p || M;
    return (0, a.jsx)("div", {
        className: f_.cL,
        children: (0, a.jsx)("div", {
            ref: R,
            className: f_.LB,
            children: (0, a.jsx)(fM, {
                projectId: n,
                designFeedbackToggleRef: l,
                applicationId: r,
                previewApplicationId: s,
                surface: o,
                header: m,
                controlBar: f,
                previewPanelId: h,
                previewPanelLabelledBy: g,
                showsFrame: (0, et.yf)(C, N),
                paused: E,
                mainClassName: null == m ? void 0 : u()(f_.ez, { [f_.zt]: p }),
                content: (0, a.jsx)(ft, {
                    applicationId: r,
                    previewApplicationId: s,
                    surface: o,
                    frameLaunchParams: d,
                    previewReady: w,
                    previewGate: A,
                    availability: C,
                    activeMode: N,
                    widgetApplicationId: S,
                    overlayWidgetSize: I,
                    projectId: n,
                    paused: E,
                    onResume: _,
                    renderFrameOverlay: (e) =>
                        (0, a.jsx)(mN, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                }),
                sidebar:
                    null != n && q
                        ? (0, a.jsx)("div", {
                              className: p ? u()(f_.v7, { [f_.z4]: D }) : f_.LL,
                              children: (0, a.jsx)(eZ.A, {
                                  sidebarType: eZ.X.CallChatSidebar,
                                  maxWidth: $,
                                  capturePointer: !0,
                                  children: (0, a.jsx)("div", {
                                      className: f_.cO,
                                      children: b
                                          ? (0, a.jsx)(d3, { projectId: n, onClose: y ?? (() => {}) }, n)
                                          : (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(mg.Ay, { projectId: n }),
                                                    (0, a.jsx)(fP, { onClose: x }),
                                                    (0, a.jsx)("div", {
                                                        className: f_.cb,
                                                        children: (0, a.jsx)(
                                                            cu,
                                                            {
                                                                projectId: n,
                                                                restoreState: k,
                                                                onRestoreVersion: v,
                                                                onImportProject: j,
                                                                escapeScopeRef: R,
                                                                visible: p,
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
    });
}
function fP(e) {
    let { onClose: t } = e,
        n = I.intl.string(S.default.vLoFRs),
        l = I.intl.string(S.default.JD6Oit);
    return (0, a.jsx)(eY.Ay, {
        "aria-label": n,
        toolbar: (0, a.jsx)(eY.Ay.Icon, { icon: eQ.PanelClosedIcon, tooltip: l, "aria-label": l, onClick: t }),
        children: (0, a.jsx)(eY.Ay.Title, { children: n }),
    });
}
var fT = n(663417),
    fL = n(646270),
    f$ = n(31300),
    fD = n(113494),
    fq = n(831453),
    fF = n(872344),
    fO = n(64656),
    fG = n(766367),
    fz = n(705609);
function fB(e) {
    let {
            projectId: t,
            projectName: n,
            toolbar: l,
            activeMode: r,
            activeTarget: i,
            frameTarget: s,
            onCloseApp: o,
            widgetRefreshApplicationId: c,
            previewPaused: d,
            onTogglePreviewPaused: m,
            agentDrivingPreview: f,
            previewControlsBlocked: h,
            blockedPreviewControlLabel: g,
            previewPanelId: p,
        } = e,
        {
            previewTargetOptions: v,
            handleSelectPreviewTarget: j,
            previewFrame: b,
            refreshFrame: y,
            isRefreshing: w,
            handleRefresh: A,
            mobilePreview: C,
            mobilePreviewLabel: N,
            handleToggleMobilePreview: E,
            landscapePreview: _,
            rotatePreviewLabel: M,
            handleRotatePreview: R,
        } = l,
        P = (0, fO.A)(b?.id),
        { pending: T, refresh: L } = (0, fF.A)(c),
        $ = (0, k.lQ)(t) && !d,
        D = null;
    if ("widget" === r) {
        if (null != c) {
            let e = I.intl.string(S.default["/nOi5n"]);
            D = (0, a.jsx)(eY.Ay.Icon, { icon: fT.RefreshIcon, tooltip: e, "aria-label": e, disabled: T, onClick: L });
        }
    } else if ((0, eR.x1)(y)) {
        let e = I.intl.string(S.default.FZIHQN);
        D = (0, a.jsx)(eY.Ay.Icon, { icon: fT.RefreshIcon, tooltip: e, "aria-label": e, disabled: w, onClick: A });
    }
    let q = I.intl.string(d ? S.default.ZKd2Cw : S.default.VHxerm),
        F = g(N),
        O = g(M),
        G = C ? fL.MobilePhoneIcon : f$.ScreenIcon;
    return (0, a.jsxs)("div", {
        className: fz.M0,
        children: [
            (0, a.jsx)(ek, {
                targets: v,
                activeTarget: i,
                projectName: n,
                onSelect: j,
                closableTarget: P ? s : null,
                onClose: o,
                panelId: p,
            }),
            (0, a.jsxs)("div", {
                className: fz.o1,
                children: [
                    D,
                    "frame" === r
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(fG.A, { frame: b }),
                                  (0, a.jsx)(eY.Ay.Icon, {
                                      icon: d ? mI.PlayIcon : fD.PauseIcon,
                                      tooltip: $ ? I.intl.string(S.default.WjdaFw) : q,
                                      "aria-label": q,
                                      disabled: (!d && f) || $,
                                      onClick: m,
                                  }),
                                  C
                                      ? (0, a.jsx)(eY.Ay.Icon, {
                                            icon: fq.RotateIcon,
                                            tooltip: O,
                                            "aria-label": O,
                                            selected: _,
                                            disabled: h,
                                            onClick: R,
                                        })
                                      : null,
                                  (0, a.jsx)(ep.m, {
                                      text: F,
                                      position: "bottom",
                                      ariaHidden: !0,
                                      children: (0, a.jsxs)(eg.D, {
                                          className: u()(fz.ZB, { [fz.xD]: h }),
                                          onClick: h ? void 0 : E,
                                          "aria-label": F,
                                          "aria-disabled": h,
                                          children: [
                                              (0, a.jsx)(G, { size: "sm", color: "currentColor" }),
                                              (0, a.jsx)(x.E, {
                                                  variant: "body-sm/medium",
                                                  color: "none",
                                                  children: I.intl.string(C ? S.default.peqEOY : S.default.tKGF0Q),
                                              }),
                                          ],
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
var fU = n(563339),
    fK = n(606128),
    fH = n(323140);
function fW(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: v, guildId: E, inServer: _ = !1 } = e,
        R = i.useContext(U.A),
        [Q] = i.useState(() => (null != R ? H.A.getProjectView(R) : null)),
        [Z, Y] = i.useState(Q?.chatOpen ?? !0),
        [el, er] = i.useState(Q?.debugOpen ?? !1);
    i.useEffect(() => {
        null != R && (0, K.g7)(R, { chatOpen: Z, debugOpen: el });
    }, [R, Z, el]);
    let ea = i.useCallback(
            (e) => {
                null != R && (0, K.g7)(R, { previewSelection: e });
            },
            [R],
        ),
        ei = P(),
        eo = (0, $.f)("ConjureSelectedProjectScreen"),
        eu = i.useCallback(() => Y(!0), []),
        ec = i.useCallback(() => {
            (er(!1), Y(!0));
        }, []),
        { restoreState: ed, handleRestoreVersion: em } = (function (e, t) {
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
                                (0, G.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, A.P0)({
                                                        text: I.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, O.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, z.c)(u, r);
                                                null != e && (0, A.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, A.P0)({
                                                    text: I.intl.string(S.default["PSdo+w"]),
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
        })(s, ec),
        ef = s?.id ?? null,
        eh = (0, B.bP)(),
        eg = eh?.blocking === !0 && eh.projectId === ef,
        {
            integrationStatus: ep,
            isPreviewApplicationLoading: ex,
            checkingIntegration: ev,
            previewReady: eb,
            hasFrame: ey,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [eS.Ay, eN.A],
                    () => (null == l ? null : (eS.Ay.getIntegrationStatus(l) ?? eN.A.getIntegrationStatus(l))),
                    [l],
                ),
                o = e?.preview_application_id ?? null,
                { isLoading: u } = (0, eA.YY)(o ?? void 0),
                d = null != l && t !== l,
                m = s?.preview_ready === !0,
                f = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, et.Qg)({
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
                            await (0, eA.TA)(e);
                        } catch {}
                    })(o);
            }, [h, d, g, o]);
            let p = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, eC.CG)(l)?.catch(() => (0, eC.U1)(l, e.signal)) ?? (0, eC.U1)(l, e.signal));
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
        ek =
            (0, c.bG)([eD.A], () => (null == ef ? void 0 : eD.A.getPublishStatus(ef)?.previewAppChannels), [ef]) ??
            ep?.preview_app_channels,
        {
            availability: ez,
            activeMode: eB,
            setMode: eU,
            frameSurface: eK,
            frameSurfaceOptions: eH,
            setFrameSurface: eW,
            appChannel: eQ,
            setAppChannel: eZ,
            frameLaunchParams: eY,
            widgetApplicationId: eJ,
        } = (0, es.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ey,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: ep?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(X.q7.OVERLAY) === !0,
            previewAppChannels: ek,
            initialSelection: Q?.previewSelection,
            onSelectionChange: ea,
        }),
        e0 = J(s);
    ((0, ee.x)(ef, (e) => {
        ez.modes.includes(e) && eU(e);
    }),
        M(ef, () => {
            (Y(!0), er(!0));
        }));
    let e1 = ez.modes.includes("frame"),
        e2 = (0, c.bG)([V.A], () => V.A.isPaused(ef), [ef]),
        e3 = (function (e) {
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
                                          t === en.U.APP_CHANNEL && n.length > 1
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
                h = (0, c.bG)([e_.A], () => e_.A.isBuilderPreviewMobile()),
                g = I.intl.string(h ? S.default.tKGF0Q : S.default.peqEOY),
                p = i.useCallback(() => (0, W.GG)(!h), [h]),
                x = (0, c.bG)([e_.A], () => e_.A.isBuilderPreviewLandscape()),
                v = I.intl.string(x ? S.default.tunI2l : S.default.DoNdjA),
                j = i.useCallback(() => (0, W.Lw)(!x), [x]),
                b = (0, eM.jS)(t),
                y = i.useMemo(() => (0, eM.Op)(b, r), [b, r]),
                k = (0, eE.A)(t?.preview_application_id ?? null, y),
                w = (0, eE.A)(t?.preview_application_id ?? null, eR.ZN),
                A = "overlay" === l ? w : k,
                C = (0, eR.x1)(A) && A.data.proxyTicketRefreshing,
                N = i.useCallback(() => {
                    null == A || C || eI.A.refreshProxyTicket(A.id);
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
                handleRefresh: N,
            };
        })({
            project: s,
            modes: ez.modes,
            activeMode: eB,
            frameSurface: eK,
            frameSurfaceOptions: eH,
            previewAppChannels: ek,
            setMode: eU,
            setFrameSurface: eW,
            setAppChannel: eZ,
        }),
        { previewSurface: e4, previewFrame: e5 } = e3,
        e7 = (0, j.A)(e5),
        e8 = e1 && !e2,
        e9 = (0, k.lQ)(ef),
        e6 = e7.isPoppedOut ? S.default.pmkK8i : e2 ? S.default.Yet11p : null,
        te = null != e6;
    function tt(e) {
        return null == e6 ? e : I.intl.formatToPlainString(e6, { label: e });
    }
    let tn = i.useCallback(() => Y(!1), []),
        {
            designFeedbackActive: tl,
            designFeedbackToggleRef: tr,
            agentDrivingPreview: ta,
            designFeedbackLabel: ti,
            handleToggleDesignFeedback: ts,
        } = (function (e, t, n) {
            let { active: l } = (0, L.rt)(e);
            i.useEffect(() => {
                null != e && l && !t && (0, L.mB)(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, T.Zv)(e),
                s = I.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void (0, L.mB)(e);
                        (n(), (0, L.w4)(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(ef, e8 && (!e7.isPoppedOut || e9), ec),
        [to] = i.useState(() => y.isPlatformEmbedded && (0, ew.qM)());
    i.useEffect(() => {
        null != ef && e9 && !e8 && (0, k.It)(ef);
    }, [ef, e9, e8]);
    let tu = i.useCallback(() => {
            null != ef && (ec(), (0, k.c$)(ef), (0, k.rC)(ef, "marker"));
        }, [ef, ec]),
        tc = i.useCallback(() => {
            null != ef && (0, k.V9)(ef);
        }, [ef]),
        td =
            te && !e9
                ? tt(I.intl.string(S.default["XWU+XF"]))
                : I.intl.string(e9 ? S.default.tuQ5f3 : ta ? S.default.agwlrD : S.default["XWU+XF"]),
        tm = te ? tt(I.intl.string(S.default["cl/Jyl"])) : ti,
        tf = i.useCallback(() => {
            er((e) => !e && (Y(!0), !0));
        }, []),
        th = i.useCallback(() => er(!1), []),
        tg = i.useCallback(() => {
            null != ef && (0, W._j)(ef);
        }, [ef]),
        tp = i.useCallback(() => {
            null != ef && (e2 ? (0, W._j)(ef) : (0, W.di)(ef, e5?.id));
        }, [ef, e2, e5?.id]),
        tx = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = e5?.id), (0, e$.Bn)(e), (0, eL.r)(t)), v());
        }, [s, e5?.id, v]),
        tv =
            ((t = (0, N.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, C.vt)(e);
                    null != n
                        ? (0, A.P0)({ text: n, variant: "critical" })
                        : (0, w.A)({
                              title: I.intl.formatToPlainString(S.default["Gm+u1+"], { name: s.name }),
                              subtitle: I.intl.string(S.default.M7H3sJ),
                              confirmText: I.intl.string(S.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  eu();
                                  try {
                                      await (0, C.Hj)(t, e, I.intl.string(S.default.Owerd3));
                                  } catch {
                                      (0, A.P0)({ text: I.intl.string(S.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, eu],
            )),
            { onExport: t, onImport: (r = (0, C.yN)(l)).open, importInput: r.input }),
        tj = i.useCallback(async () => {
            null != ef && (await (0, eF.vL)(ef, E));
        }, [E, ef]),
        tb = (0, et.aN)(eB, {
            installScope: s?.install_scope ?? null,
            previewReady: eb,
            integrationInstalled: ep?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tj, loading: ex }
            : ev && null == ep
              ? { type: "checking" }
              : void 0,
        ty = (0, c.bG)([eS.Ay], () => null != ef && eS.Ay.isProjectDeleting(ef), [ef]);
    i.useEffect(() => {
        ((null == s && o) || ty) && v();
    }, [s, o, ty, v]);
    let {
            publishOptions: tk,
            publish: tw,
            publishing: tA,
            variant: tC,
            text: tN,
            pendingChanges: tS,
        } = (0, eG.A)(ef, E, ev || ex),
        tI = (0, eO.A)(ef, tw, tk),
        tE = "frame" === eB && !e2 && (0, eR.x1)(e5) && (e7.isPoppedOut || e7.canPopout),
        t_ = i.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: ed?.status === "restoring",
                    onRestoreVersion: (e, t) => em(e, t, !0),
                }),
                    (0, F.mM)(async () => {
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
        }, [s, ed?.status, em]);
    (0, q.z)(ef, t_);
    let tM = null == s ? void 0 : () => (0, eX.A)(s.id, { guildId: E, isPreview: !0, publishOptions: tk }),
        tR = ez.modes.includes("widget") && "unavailable-authorization-revoked" !== ez.profileState ? eJ : null,
        tP =
            null == s
                ? null
                : (0, a.jsx)(eT.A, {
                      ...(0, eP.A)(s, E),
                      hideProjectSettings: !0,
                      fullscreenFrame: "frame" !== eB || e2 ? null : e5,
                      onTogglePopout: tE ? (e7.isPoppedOut ? e7.popIn : e7.popOut) : void 0,
                      poppedOut: e7.isPoppedOut,
                      onToggleDebug: ei ? tf : void 0,
                      debugOpen: el,
                      onExport: tv.onExport,
                      onImport: tv.onImport,
                      onConnectTool: eo ? () => (0, D.A)(s.id) : void 0,
                      onHistory: t_,
                      previewProjectId: s.id,
                  }),
        tT =
            null != tw && null != s && ("primary" === tC || tA)
                ? (0, a.jsx)("div", {
                      className: fH.As,
                      onMouseDown:
                          null == ef || tw.disabled || tA
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, eq.dx)(ef);
                                },
                      children: (0, a.jsx)(d.$, {
                          size: "sm",
                          variant: "primary",
                          icon: tA ? fV : void 0,
                          text: tN,
                          onClick: () => tI("header"),
                      }),
                  })
                : null,
        tL = I.intl.string(S.default.FzfmQ8),
        t$ = I.intl.string(S.default.xjJAQm),
        tD = (0, a.jsx)(fU.A, {
            title: s?.name ?? I.intl.string(S.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tM,
            hideShareTarget: _,
            draft: tS,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: fH.FO,
                          children: [
                              e1
                                  ? to
                                      ? (0, a.jsx)(b.A.Icon, {
                                            icon: m.PencilIcon,
                                            tooltip: td,
                                            "aria-label": td,
                                            selected: e9,
                                            disabled: (te || ta) && !e9,
                                            onClick: e9 ? tc : tu,
                                        })
                                      : (0, a.jsx)(b.A.Icon, {
                                            ref: tr,
                                            icon: f.ExperimentalDirectSelectIcon,
                                            iconClassName: fH.D8,
                                            tooltip: tm,
                                            "aria-label": tm,
                                            selected: tl,
                                            disabled: te || ta,
                                            onClick: ts,
                                        })
                                  : null,
                              (0, a.jsx)(b.A.Icon, {
                                  icon: h.SettingsIcon,
                                  tooltip: tL,
                                  "aria-label": tL,
                                  onClick: tM,
                              }),
                              tP,
                              (0, a.jsxs)("div", {
                                  className: fH.Cl,
                                  children: [(0, a.jsx)(eV, { project: s, guildId: E }), tT],
                              }),
                              Z
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("div", { className: fH.YJ, "aria-hidden": !0 }),
                                            (0, a.jsx)(b.A.Icon, {
                                                icon: g.PanelOpenIcon,
                                                tooltip: t$,
                                                "aria-label": t$,
                                                onClick: eu,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        }),
        tq = i.useId(),
        tF = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null == e
                ? null
                : "frame" !== e
                  ? { mode: e }
                  : null == n
                    ? { mode: e, surface: t }
                    : { mode: e, surface: t, appChannel: n };
        })(eB, eK, eQ),
        tO =
            null == s
                ? null
                : (0, a.jsx)(fB, {
                      projectId: s.id,
                      projectName: s.name,
                      toolbar: e3,
                      activeMode: eB,
                      activeTarget: tF,
                      frameTarget: { mode: "frame", surface: eK, ...(null == eQ ? {} : { appChannel: eQ }) },
                      onCloseApp: tx,
                      widgetRefreshApplicationId: tR,
                      previewPaused: e2,
                      onTogglePreviewPaused: tp,
                      agentDrivingPreview: ta,
                      previewControlsBlocked: te,
                      blockedPreviewControlLabel: tt,
                      previewPanelId: tq,
                  });
    return (0, a.jsxs)("div", {
        className: u()(fH.nj, fK.T),
        children: [
            tv.importInput,
            (0, a.jsx)("main", {
                className: fH.JX,
                children: eg
                    ? (0, a.jsx)("div", {
                          className: fH.j5,
                          children: (0, a.jsx)("div", {
                              className: fH.sD,
                              children: (0, a.jsx)(p.D, {
                                  variant: "heading-lg/semibold",
                                  children: I.intl.string(S.default.i7PaZ5),
                              }),
                          }),
                      })
                    : null == s
                      ? (0, a.jsxs)("div", {
                            className: fH.j5,
                            children: [
                                tD,
                                (0, a.jsxs)("div", {
                                    className: fH.sD,
                                    children: [
                                        (0, a.jsx)(p.D, {
                                            variant: "heading-lg/semibold",
                                            children: I.intl.string(S.default.G1WwgK),
                                        }),
                                        (0, a.jsx)(x.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: I.intl.string(S.default.fINulo),
                                        }),
                                        (0, a.jsx)(d.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: I.intl.string(S.default["WFJ/vb"]),
                                            onClick: () => (0, eC.listProjects)(E),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : (0, a.jsx)(eF.bI.Provider, {
                            value: tk,
                            children: (0, a.jsx)(
                                fR,
                                {
                                    projectId: s.id,
                                    designFeedbackToggleRef: tr,
                                    applicationId: s.preview_application_id,
                                    previewApplicationId: s.preview_application_id,
                                    surface: e4,
                                    frameLaunchParams: eY,
                                    header: tD,
                                    controlBar: tO,
                                    previewPanelId: tq,
                                    previewPanelLabelledBy: null == tF ? void 0 : ej(tq, tF),
                                    chatOpen: Z,
                                    onCloseChat: tn,
                                    debugOpen: ei && el,
                                    onCloseDebug: th,
                                    onRestoreVersion: em,
                                    onImportProject: (0, eS.PV)(s) ? tv.onImport : void 0,
                                    restoreState: ed,
                                    previewReady: eb,
                                    previewGate: tb,
                                    availability: ez,
                                    activeMode: eB,
                                    widgetApplicationId: eJ,
                                    overlayWidgetSize: e0,
                                    previewPaused: e2,
                                    onResumePreview: tg,
                                },
                                s.id,
                            ),
                        }),
            }),
        ],
    });
}
function fV() {
    return (0, a.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: fH.Hv, itemClassName: fH.C5 });
}
