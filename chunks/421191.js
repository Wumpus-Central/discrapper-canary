n.d(t, { A: () => hr });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    o = n(503698),
    u = n.n(o),
    c = n(855986),
    d = n(821609),
    m = n(478016),
    f = n(22231),
    h = n(604525),
    g = n(625903),
    p = n(259730),
    x = n(534514),
    v = n(834730),
    j = n(289873),
    b = n(646973),
    y = n(742589),
    k = n(723702),
    w = n(171691),
    C = n(314116),
    A = n(858899),
    S = n(949757),
    N = n(800202),
    I = n(191850),
    E = n(792996);
let _ = new Set(),
    M = null;
function R(e, t) {
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
                _.add(t),
                () => {
                    _.delete(t);
                }
            );
        }, [e]));
}
var P = n(253932);
function T() {
    return P.Q_.useSetting() || !1;
}
var L = n(573083),
    $ = n(57570),
    D = n(971079),
    q = n(61577),
    F = n(686507),
    O = n(192308),
    G = n(128761),
    z = n(503922),
    U = n(967008),
    B = n(227007),
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
    if ("bot" === e.mode) return E.intl.string(I.default.gThNz6);
    if ("frame" === e.mode && e.surface === en.U.APP_CHANNEL) {
        let n = e.appChannel ?? el(t);
        if ("" !== n) return `#${n}`;
    }
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, er.X)(e.surface)
                : E.intl.formatToPlainString(I.default["6xVl+N"], {
                      surface: (0, er.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return E.intl.string(I.default.y5GiL1);
        case "overlay":
            return E.intl.string(I.default["2940LX"]);
        case "bot":
            return E.intl.string(I.default.tjpaGN);
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
        g = E.intl.string(I.default["/TlGcK"]),
        p = i.useRef(null),
        x = i.useRef(null),
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
            n = x.current;
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
                ref: x,
                className: ev.gj,
                role: "tablist",
                "aria-label": E.intl.string(I.default.I2ucou),
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
                                    (0, a.jsx)(v.E, {
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
    eC = n(627363),
    eA = n(233470),
    eS = n(153207),
    eN = n(260498),
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
    eF = n(826058),
    eO = n(50181),
    eG = n(719593),
    ez = n(95264),
    eU = n(616334),
    eB = n(405433),
    eK = n(265872),
    eH = n(811587);
function eW(e) {
    let { projectId: t, variant: l } = e,
        { canShare: r, firstShare: s } = (0, c.cf)(
            [eN.Ay, eD.A],
            () => {
                let e = eN.Ay.getProject(t),
                    n = eD.A.getPublishStatus(t)?.publishState,
                    l = null != e && (0, eN.PV)(e),
                    r = null != e && null != n && (l ? "nothing_built" !== n : (0, eH.lE)(n));
                return { canShare: r, firstShare: r && l && "user" === e.install_scope };
            },
            [t],
        ),
        o = i.useRef(null);
    return r
        ? s
            ? (0, a.jsx)(d.$, {
                  size: "sm",
                  variant: l,
                  icon: eB.ShareIcon,
                  text: E.intl.string(E.t.RDE0Sc),
                  onClick: () => {
                      var e;
                      return (
                          (e = { projectId: t }),
                          void (0, O.mM)(async () => {
                              let { default: t } = await Promise.all([
                                  n.e(943832),
                                  n.e(159957),
                                  n.e(441532),
                                  n.e(500704),
                                  n.e(322408),
                                  n.e(970902),
                              ]).then(n.bind(n, 214645));
                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                          })
                      );
                  },
              })
            : (0, a.jsx)(eK.Q, {
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
                          children: (0, a.jsx)(d.$, {
                              size: "sm",
                              variant: l,
                              icon: eB.ShareIcon,
                              text: E.intl.string(E.t.RDE0Sc),
                              onClick: t,
                          }),
                      });
                  },
              })
        : null;
}
var eV = n(450030),
    eX = n(812771),
    eQ = n(58736),
    eZ = n(743898);
(n(134528), n(947204));
var eY = n(333007),
    eJ = n(621466),
    e0 = n(775121),
    e1 = n(989145),
    e2 = n(81369),
    e3 = n(826745),
    e4 = n(34595),
    e5 = n(470779);
function e7(e) {
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
        } = (0, e4.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        A = i.useRef(null),
        S = (m || j.length > 0) && w && !f,
        N = i.useCallback(() => {
            if (!S) return;
            let e = C();
            c(e.length > 0 ? e : void 0);
        }, [S, C, c]),
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
        className: u()(e5.M0, { [e5.ho]: _ && !f, [e5.ET]: f }),
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
                              className: e5.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(ep.m, {
                              position: "bottom",
                              text: E.intl.string(I.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: e5.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(I.default.lgvqSB),
                                  children: (0, a.jsx)(e2.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: e5.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(e3.y, {
                autoFocus: !0,
                rows: 1,
                className: e5.hF,
                value: s,
                placeholder: x ?? ("" === r ? E.intl.string(I.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? E.intl.string(I.default.KCYqWL),
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
                      className: e5.ZO,
                      children: j.map((e) => (0, a.jsx)(e4.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function e8(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function e9(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function e6(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? e8(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = e8(e());
                l((e) => (e9(e, t) ? e : t));
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
    ta = n(744898),
    ti = n(803656),
    ts = n(241326),
    to = n(972213),
    tu = n(646514);
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
let tm = td("red", tc(tu.A.unsafe_rawColors.RED_400), () => E.intl.string(I.default.tvXfjt)),
    tf = [
        tm,
        td("yellow", tc(tu.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(I.default.FYuaJ1)),
        td("green", tc(tu.A.unsafe_rawColors.GREEN_360), () => E.intl.string(I.default["Vv+paS"])),
        td("blue", tc(tu.A.unsafe_rawColors.BLUE_345), () => E.intl.string(I.default.k9b1QJ)),
        td("white", tc(tu.A.unsafe_rawColors.WHITE), () => E.intl.string(I.default["1sOXwH"])),
    ];
function th(e) {
    return tf.find((t) => t.id === e) ?? tm;
}
var tg = n(39416);
function tp(e) {
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
function tx(e) {
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
let tb = w.ck.map((e) => tj(Math.min(16, e + 3))),
    ty = w.Cw.map((e) => tj(Math.min(16, e / 2.5))),
    tk = [I.default.jZtZUr, I.default.cTQdD0, I.default.J3ucEg],
    tw = {
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
            label: () => E.intl.string(I.default.oIZQbm),
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
            label: () => E.intl.string(I.default.ARNVr7),
        },
    };
function tC(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(ep.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: tg.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tt.k, {
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
function tA(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(ep.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tn.K, {
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
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: tg.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: tg.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function tN(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = th(n.colorId);
    function h(e) {
        return (0, w.rC)(t, e);
    }
    let g = tw[u],
        p = E.intl.string(I.default.hUm825),
        x = E.intl.string(I.default.n5IA3a),
        v = E.intl.string(I.default.r5dX6t),
        j = E.intl.string(I.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: tg.t$,
        children: [
            (0, a.jsx)("div", {
                className: tg.NT,
                children: (0, a.jsx)(tC, {
                    icon: tx,
                    label: E.intl.string(I.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => h("pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tg.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(I.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(tC, {
                        icon: tp,
                        label: E.intl.string(I.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => h("move"),
                    }),
                    (0, a.jsx)(tC, {
                        icon: tl.LettersIcon,
                        label: E.intl.string(I.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => h("text"),
                    }),
                    (0, a.jsx)(tS, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tC, {
                                icon: tr.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            tb.map((n, l) =>
                                (0, a.jsx)(
                                    tC,
                                    {
                                        icon: n,
                                        label: E.intl.string(tk[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            ((0, w.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tS, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(tC, {
                                icon: g.icon,
                                label: v,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (h(u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(tw).map((t) =>
                                (0, a.jsx)(
                                    tC,
                                    {
                                        icon: tw[t].icon,
                                        label: tw[t].label(),
                                        pressed: o === t,
                                        onClick: () => {
                                            (h(t), e());
                                        },
                                    },
                                    t,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tS, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tC, {
                                icon: tv,
                                label: x,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            ty.map((n, l) =>
                                (0, a.jsx)(
                                    tC,
                                    {
                                        icon: n,
                                        label: E.intl.string(tk[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            ((0, w._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tS, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(tA, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            tf.map((n) =>
                                (0, a.jsx)(
                                    tC,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            ((0, w.Yx)(t, n.id), e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: tg.Gz, role: "separator" }),
                    (0, a.jsx)(tA, {
                        icon: ta.UndoIcon,
                        label: E.intl.string((0, k.cX)() ? I.default["j/XmBQ"] : I.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(tA, {
                        icon: ti.RedoIcon,
                        label: E.intl.string((0, k.cX)() ? I.default.C7jhpn : I.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(tA, {
                        icon: ts.TrashIcon,
                        label: E.intl.string(I.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: tg.Gz, role: "separator" }),
                    (0, a.jsx)(tA, { icon: to.XLargeIcon, label: E.intl.string(I.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let tI = tu.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    tE = tu.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    t_ = tu.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
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
                    (e.strokeStyle = t_),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function tR(e) {
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
let tP = { dx: 0, dy: 0 },
    tT = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    tL = 1;
function t$(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = (0, w.d5)(s),
        { active: u } = (0, $.rt)(s),
        c = (0, O.Rv)(),
        [d, m] = i.useState(!1);
    i.useEffect(() => {
        if (null != s)
            return () => {
                (0, w.K7)(s)?.active === !0 && (0, w.It)(s);
            };
    }, [s]);
    let f = o?.active === !0 && "pick" === o.tool;
    i.useEffect(() => {
        null != s && f && !u && (0, $.w4)(s);
    }, [s, f, u]);
    let h = i.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, ew.wn)(e);
        if (null != t) return t;
        function n() {
            m(!1);
        }
        (0, eY.flushSync)(() => m(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, ew.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (i.useEffect(() => {
        if (null != s) return ((0, w.j5)(s, h), () => (0, w.j5)(s, null));
    }, [s, h]),
    null == s || null == o || !o.active || c)
        ? null
        : (0, a.jsx)(tD, { projectId: s, state: o, capturing: d, resolveIframe: r });
}
function tD(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = e6(r),
        [o, u] = i.useState(null),
        [c, d] = i.useState(0),
        [m, f] = i.useState(null),
        [h, g] = i.useState(tP),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        { tool: y, history: k } = n,
        C = th(n.colorId),
        A = "pick" !== y,
        S = (0, w.Qq)(n),
        N = "eraser" === y ? null : C.value,
        _ = i.useMemo(
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
                                  a(n, `fill="none" stroke="${tE}" stroke-width="4"`),
                                  a(n, `fill="none" stroke="${tI}" stroke-width="2"`),
                                  a(3, `fill="${t ?? tI}" stroke="${tE}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(i)}") ${r} ${r}, crosshair`;
                      })(S, N),
            [S, N],
        ),
        M = "move" === y ? (k.present.find((e) => e.id === m) ?? null) : null,
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
            i = null == a ? k.present : k.present.map((e) => (e.id === a.id ? (0, te.y)(e, h.dx, h.dy) : e)),
            o = v.current;
        tM(r, null == o ? i : [...i, o], { width: s.width, height: s.height });
    }, [s, k.present, h]);
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
                id: `mark-${tL++}`,
                kind: "text",
                color: C.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, te.oy)(n, s) && (0, w.tD)(t, { type: "commit", shape: n }), u(null), (0, w.QP)(t));
        }, [t, C, s]),
        $ = i.useCallback(() => {
            ((b.current = null), u(null), (0, w.QP)(t));
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
                            l = null == M ? null : (0, te.k_)(M, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? M
                                    : (0, te.WF)(k.present, t, s, 6);
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
                        if (!(0, te.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tL++}`,
                                kind: "erase",
                                width: w.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tL++}`,
                                kind: "marker",
                                color: C.value,
                                width: w.ck[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${tL++}`,
                                kind: y,
                                color: C.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                P();
            },
            [s, y, C, M, k.present, n.markerSize, n.eraserSize, T, L, P],
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
                ((j.current = null), g(tP), (0, w.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, te.oy)(n, s)
                    ? ((0, w.tD)(t, { type: "commit", shape: n }), (0, w.QP)(t))
                    : P());
        }, [t, s, h, P]),
        O = i.useCallback(() => (0, w.V9)(t), [t]),
        G = i.useCallback(() => (0, w.tD)(t, { type: "undo" }), [t]),
        z = i.useCallback(() => (0, w.tD)(t, { type: "redo" }), [t]),
        U = i.useCallback(() => (0, w.tD)(t, { type: "clear" }), [t]),
        B = i.useRef({ tool: y, selected: M, exit: O, undo: G, redo: z });
    if (
        (i.useLayoutEffect(() => {
            B.current = { tool: y, selected: M, exit: O, undo: G, redo: z };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, eJ.Cw)((0, eJ.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), (0, w.tD)(t, { type: "remove", id: l.id }), f(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = tT[s];
                null != o && (e.preventDefault(), (0, w.rC)(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (A) return (e0.A.disable(), () => e0.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == M ? null : (0, te.k_)(null == j.current ? M : (0, te.y)(M, h.dx, h.dy), s);
    return (0, eY.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: tg.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: tg.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: p,
                            className: tg.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": E.intl.string(I.default["qlgN+X"]),
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
                                  className: tg.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: tg.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: tg.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: tg.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: tg.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == o
                    ? null
                    : (0, a.jsx)(e7, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + o.at.x * s.width, y: s.top + o.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: E.intl.string(I.default["8gX1lw"]),
                          label: E.intl.string(I.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: o.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: L,
                          onUploadFile: (e) => (0, e1.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== o.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: x,
                    className: tg.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(tN, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: U }),
                }),
            ],
        }),
        document.body,
    );
}
var tq = n(308081),
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
    tW = n(643278),
    tV = n(566424),
    tX = n(683063),
    tQ = n(140735),
    tZ = n(847374),
    tY = n(320448),
    tJ = n(138212);
function t0(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: u()(tJ.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: u()(tJ.wx, null != n && tJ.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
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
    return (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function t3(e) {
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
        j = h ? tZ.ChevronSmallDownIcon : tY.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, a.jsxs)(t0, {
        ...m,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: t1.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(eg.D, {
                                className: t1.L$,
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
        headerClassName: h ? void 0 : t1.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: f, className: u()(t1.rf, o), hidden: !h, children: d })],
    });
}
n(321073);
var t4 = n(883646);
let t5 = [];
function t7(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: u()(t4.xL, {
            [t4.Vb]: "in_progress" === t,
            [t4.cT]: "completed" === t,
            [t4.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return E.intl.string(I.default.KvBdun);
                case "in_progress":
                    return E.intl.string(I.default["m5G9+S"]);
                case "unfinished":
                    return E.intl.string(I.default.lRpwhD);
                default:
                    return E.intl.string(I.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(j.y, {
                type: j.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: t4.Qd,
                itemClassName: t4.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: t4.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: t4.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function t8(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : t5), [n, t]),
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
        className: t4.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    tX.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: t4.MA,
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
                      className: t4.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function t9(e) {
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
            ((t = (r ?? t5).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? t5),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: t4.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: u()(t4.AS, { [t4.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(t7, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: t4.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: t4.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(t8, { agents: c.get(e.id) ?? t5, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: t4.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(t7, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: t4.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: t4.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function t6(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(I.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(I.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(t3, {
        title: E.intl.string(I.default.RtzECX),
        meta: (0, a.jsx)(t2, { children: c }),
        superseded: s,
        showLabel: E.intl.string(I.default.RKyN9q),
        hideLabel: E.intl.string(I.default.xydHoj),
        className: t4.Nr,
        bodyClassName: t4.rf,
        beforeBody: r && !s ? (0, a.jsx)(tQ.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(t9, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var ne = n(308665),
    nt = n(59678),
    nn = n(903847);
function nl(e) {
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
    let _ = null != l && l.length > 0,
        M = i.useCallback(() => j((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: nn.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: u()(nn.vK, { [nn.ho]: p && d, [nn.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: u()(nn.Rk, nt.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(tV.A, {
                                        glyph: (0, a.jsx)(ne.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eg.D, {
                                    className: nn.pZ,
                                    onClick: c,
                                    "aria-label": E.intl.string(I.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: u()(nn.Rk, nt.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(tV.A, {
                                            glyph: (0, a.jsx)(ne.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          _
                              ? (0, a.jsx)(ep.m, {
                                    text: E.intl.string(I.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eg.D, {
                                        className: nn.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(I.default.RtzECX),
                                        children: (0, a.jsx)(tW.ClipboardListIcon, {
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
                            className: u()(nn.vB, { [nn.pg]: v && C, [nn.ui]: !v }),
                            children: (0, a.jsx)(t6, {
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
var nr = n(839214),
    na = n(78564);
let ni = new Map(),
    ns = (0, nr.D)(() => ({ byMessageKey: {} }));
function no(e, t) {
    let { [e]: n, ...l } = ns.getState().byMessageKey;
    ns.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nu = n(195880),
    nc = n(287111),
    nd = n(16619);
function nm(e) {
    let t = (0, nd.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var nf = n(736553),
    nh = n(382541),
    ng = n(890497),
    np = n(103557),
    nx = n(29073),
    nv = n(590077);
function nj(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = nm(e),
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
                                : (0, nc.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          E.intl.formatToPlainString(I.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = E.intl.formatToPlainString(I.default.jZlNst, { targets: l });
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
                    if (!S) return;
                    if (0 === w.length) return void N(u);
                    (h(!0), p(!1));
                    let l =
                        ((t = eN.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(I.default.ScoZLp, { name: t, projectId: e })),
                        `${A}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nu.m)() }), x.current.set(e.projectId, t)),
                                (async function (e, t, n) {
                                    let l,
                                        { ticket: r, baseUrl: a } = await (0, nh.dv)(e),
                                        i = new nf.u();
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
                M = i.useCallback(() => {
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
        className: u()(nx.nd, nx.jx),
        "aria-labelledby": m,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: nx.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: m,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nx.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tn.K, {
                        icon: ex.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(I.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nv.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(I.default.TbbzW5),
                          })
                        : (0, a.jsx)(ng.Z, {
                              label: E.intl.string(I.default["29gr8j"]),
                              placeholder: E.intl.string(I.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(np.f, {
                        label: E.intl.string(I.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? E.intl.string(I.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: nx.qr,
                children: (0, a.jsx)("div", {
                    className: nx.zt,
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(I.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
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
    nC = n(360047);
function nA(e, t, n) {
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
function nN(e) {
    return 0 === e.options.length && null == e.input;
}
function nI(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function nE(e, t, n) {
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
        a = e.options.filter((e) => t.includes(e.id)).map((e) => e.label);
    return {
        kind: "multi",
        optionIds: t,
        ...("" === r ? {} : { custom: r }),
        ...(null == l ? {} : { attachment: l.attachment }),
        text: [...a, ...(null == l ? [] : [l.text]), ...("" === r ? [] : [r])].join(", "),
    };
}
let nR = {
    [nS.rbe.GUILD_TEXT]: "text",
    [nS.rbe.GUILD_VOICE]: "voice",
    [nS.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [nS.rbe.GUILD_STAGE_VOICE]: "stage",
    [nS.rbe.GUILD_FORUM]: "forum",
    [nS.rbe.GUILD_MEDIA]: "media",
};
function nP(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = ny.A.getChannel(t)?.type) ? void 0 : nR[n];
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
let nT = { channel: "#", role: "@", user: "@", project: "", server: "" },
    nL = {
        channel: [I.default["9+dfPT"], I.default.pGSJqE],
        role: [I.default["2VkCoD"], I.default.c8YlX8],
        user: [I.default.GZIAxl, I.default["4bptbQ"]],
        project: [I.default.twlOb6, I.default.twlOb6],
        server: [I.default.ZWXDeI, I.default.ZWXDeI],
    };
function n$(e, t) {
    return E.intl.string(nL[e][+!!t]);
}
var nD = n(658675),
    nq = n(123292),
    nF = n(900797),
    nO = n(331322),
    nG = n(771871),
    nz = n(700915),
    nU = n(985965),
    nB = n(831819);
function nK(e) {
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
            className: nB.Nz,
            children: (0, a.jsxs)(nO.B, {
                gap: 4,
                children: [
                    (0, a.jsx)(nz.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, a.jsx)(nU.A, { purpose: t.purpose }) : null,
                    null != u
                        ? (0, a.jsxs)("div", {
                              className: nB.em,
                              children: [
                                  (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                                  d && !r
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(v.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, a.jsx)(nq.Q, {
                                                    text: E.intl.string(I.default.I5F6YX),
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
                              className: nB.zM,
                              children: [
                                  (0, a.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, a.jsx)(nG.z, {
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
var nH = n(344587),
    nW = n(155078);
function nV(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let nX = [];
function nQ(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? E.intl.string(I.default.ZZ641e)
          : E.intl.string(1 === e.options.length ? I.default["2g3gk9"] : I.default.dkzChE);
}
var nZ = n(762026);
function nY(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function nJ(e, t) {
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
var n0 = n(682163),
    n1 = n(300344),
    n2 = n(614733),
    n3 = n(904363),
    n4 = n(950902),
    n5 = n(136722),
    n7 = n(778858),
    n8 = n(808728),
    n9 = n(696451),
    n6 = n(71393),
    le = n(488926),
    lt = n(426035),
    ln = n(246338);
let ll = n5.kg(nS.xBc.VIEW_CHANNEL, nS.xBc.SEND_MESSAGES);
var lr = n(384017);
function la(e) {
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
        return nP(n.input ?? "channel", e, (e) => u.find((t) => t.value === e)?.label, l);
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
        className: lr.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(ng.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(ng.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function li(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, n1.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: o, onChange: u } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [eN.Ay],
                    () => {
                        let e = t ? eN.Ay.getProject(l) : null;
                        return null == e ? null : (0, lt.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || n9.Ay.isMember(r, n) || n7.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [n8.A, n9.Ay, n6.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = n6.A.getGuild(r)?.safetyAlertsChannelId,
                            l = n8.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, ln.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && n9.Ay.isMember(r, n))
                            return le.$3({ permission: ll, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? n5.BY;
                        return n5.X8(s, ll) ? null : i;
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
                            u(((e = []), nP("channel", [d.id], () => (0, nb.m1)(d, nw.default, nk.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== m.current ? (f.current = !0) : null == d && ((f.current = !0), u([], r));
            }
        }, [d, o, r, u, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(la, { ...r, guildId: n, options: s, placeholder: n$("channel", !0 === r.question.multi_select) });
}
function ls(e) {
    let { guildId: t, ...n } = e,
        l = (0, n3.A)(t);
    return (0, a.jsx)(la, { ...n, guildId: t, options: l, placeholder: n$("role", !0 === n.question.multi_select) });
}
function lo(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, n2.A)(t);
    return (0, a.jsx)(la, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: n$("user", !0 === n.question.multi_select),
    });
}
function lu(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = nm(t),
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
    return 0 === s.length ? n : (0, a.jsx)(la, { ...l, options: s, placeholder: n$("project", !1) });
}
function lc(e) {
    let t = e.target;
    (0, eJ.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function ld(e) {
    let { fallback: t, ...n } = e,
        l = (0, nd.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(n0.Ay, { guild: e, size: n0.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: lc,
              onMouseUp: lc,
              children: (0, a.jsx)(la, { ...n, options: r, placeholder: n$("server", !1) }),
          });
}
function lm(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, n4.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lu, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(ld, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(li, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(ls, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lo, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lf = n(87221),
    lh = n(26430),
    lg = n(750943),
    lp = n(173936),
    lx = n(95477),
    lv = n(256905),
    lj = n(490707),
    lb = n(907702);
function ly(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, lj._)(t, n),
        [d, m] = i.useState(null),
        f = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: u()(lb.Gt, lb.b6),
              children: [
                  (0, a.jsx)(lf.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(I.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: u()(lb.Gt, { [lb.iP]: !f }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: lb.Sl,
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
function lk(e) {
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
        x = E.intl.formatToPlainString(I.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: u()(lb.Vs, { [lb.Q9]: s, [lb.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(eg.D, {
                className: u()(lb.Up, { [lb.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => f(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": E.intl.formatToPlainString(I.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: lb.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(ly, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: lb.Gt }),
                            (0, a.jsx)("span", {
                                className: lb.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(nD.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(nG.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: lb.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, nW.E)(t) : "")
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
                      className: lb.B4,
                      children: (0, a.jsx)(ep.m, {
                          text: E.intl.string(I.default.HQEXJM),
                          children: (0, a.jsx)(tn.K, {
                              icon: ts.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": E.intl.string(I.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: lb.B4,
                        children: (0, a.jsx)(ep.m, {
                            text: E.intl.string(I.default["4/eeDD"]),
                            children: (0, a.jsx)(tn.K, {
                                icon: lh.MaximizeIcon,
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
function lw(e) {
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
                      label: E.intl.string(I.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        b = i.useCallback(
            (e) => {
                let n = (null == j ? m : [...m, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, e1.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, lv.R)({
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
        className: lb.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === m.length && null == j
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: u()(lb.fF, "gallery" === f ? lb.nV : lb.nM, { [lb.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": f,
                      "data-count": m.length,
                      children: [
                          m.map((e) =>
                              (0, a.jsx)(
                                  lk,
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
                                    lk,
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
                uploadText: E.intl.string(/\bicons?\b/i.test(n.question) ? I.default.qU4WN6 : I.default.cbMDDB),
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
        className: lb.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: lb.QJ,
                children: [
                    (0, a.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lg.ImagePlusIcon,
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
                              icon: lp.LinkIcon,
                              text: E.intl.string(I.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: lb.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nc.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: lb.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: lb.Hs,
                              children: (0, a.jsx)(lx.k, {
                                  label: E.intl.string(I.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: E.intl.string(I.default.AVhvn8),
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
                              className: lb.gd,
                              children: [
                                  (0, a.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(I.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === m.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(nq.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: E.intl.string(I.default.eXZL4X),
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
function lA(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eg.D, {
        className: u()(lr.uK, { [lr.ue]: l, [lr.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": E.intl.formatToPlainString(d ? I.default["2p6UFz"] : I.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: lr.dy, children: (0, a.jsx)(nD.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: lr.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lr.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lr.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lr.ed,
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
                      className: lr.rM,
                      children: E.intl.string(I.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lS(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return nV(n)
        ? (0, a.jsx)(lw, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      lA,
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
let lN = [],
    lI = [];
function lE(e) {
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
        m = !0 === n.multi_select ? E.intl.string(I.default.tE8qbz) : nQ(n);
    return (0, a.jsxs)("div", {
        className: u()(lr.Ge, lr.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == m
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lr.aK,
                      children: m,
                  }),
            (0, a.jsx)(lS, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: nJ(o, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && nV(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: lr.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lr.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(f.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: u()(lr.Pu, lr.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: lr.$0,
                      children: (0, a.jsx)(nq.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: E.intl.string(I.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function l_(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: m,
            backText: h,
            hideSubmit: g = !1,
            headingLines: p = 5,
        } = e,
        [x, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState({}),
        [C, A] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [S, N] = i.useState({}),
        { builds: _, linkFor: M } = (function (e, t, n) {
            let l = i.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = nA(e, t, n[t.id] ?? []);
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
                [eN.Ay],
                () =>
                    Object.fromEntries(
                        Object.values(l).flatMap((e) => [e.target, e.caller].map((e) => [e, eN.Ay.getProject(e)])),
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
                            purpose: (0, nZ.xP)(x?.link_purpose ?? u.purpose),
                            data: (0, nZ.Bw)(g, p),
                            value: p,
                            aria: (0, nZ.sr)(g),
                            onChange: (e) => o((t) => ({ ...t, [i.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, C),
        [R, P] = i.useState(!1),
        [T, L] = i.useState(0),
        [$, D] = i.useState(null),
        [q, F] = i.useState(null),
        [O, G] = i.useState(null),
        [z, U] = i.useState(!1),
        B = i.useRef(null),
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
        es = nV(J),
        eo = ei ? E.intl.string(I.default.tE8qbz) : nQ(J),
        eu = ei
            ? (k[J.id] ?? lN)
            : ((t = x[J.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : nX),
        ec = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = E.intl.string(I.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : nY(t[e.id])),
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
                        if (o) return nJ(h, m(i));
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
                                    null != l && (0, e1.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, e1.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (f || !nY(e[d])) return e;
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
                                                error: { source: "upload", text: E.intl.string(I.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, e1.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : E.intl.string(I.default.l79PMc),
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
        ed = ec.imageFor(J.id),
        em = ec.selectedFor(J),
        { text: ef, phase: eh } = (0, nH.Q)(J.question),
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
    let eb = E.intl.string(en ? E.t.iTcuma : E.t.dcl9MQ),
        ey = i.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let a = n_(t, n);
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
                                              let r = nA(e, t, [n]);
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
                    U(!0),
                    L(e));
            },
            [ea, ed, em, J, eu],
        ),
        ew = i.useCallback(() => {
            let e = B.current,
                t = W.current;
            null != e && null != t && G({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = B.current,
            t = W.current;
        if (null == e || null == t) return;
        ew();
        let n = new ResizeObserver(ew);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ew]);
    let eC = $?.moves;
    i.useEffect(() => {
        if (null == eC) return;
        let e = setTimeout(() => F(null), 400),
            t = setTimeout(() => U(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eC]);
    let eA = i.useCallback(
            (e) => {
                let t = nE(l, e, Y);
                null == t ? ey(e) : ek(t, t < Y ? "back" : "forward");
            },
            [l, Y, ey, ek],
        ),
        eS = i.useCallback(
            (e) => {
                if (Q) return;
                let t = { ...x, [J.id]: e };
                (j(t), eA(t));
            },
            [eA, x, Q, J.id],
        ),
        eI = i.useCallback(() => {
            Q || 0 === Y || ek(Y - 1, "back");
        }, [Q, Y, ek]),
        eE = 0 !== Y || Q ? void 0 : m,
        e_ = (Y > 0 && !Q) || null != eE,
        eM = i.useCallback(
            (e) => {
                y((e) => ({ ...e, [J.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                es ? Q || j((e) => ({ ...e, [J.id]: t })) : eS(t);
            },
            [Q, es, J.id, eS],
        ),
        eR = i.useCallback(() => {
            (y((e) => ({ ...e, [J.id]: "" })), eS({ kind: "custom", text: E.intl.string(I.default.zxSq2q) }));
        }, [J.id, eS]),
        { multiPartFor: eP } = ec,
        eT = i.useMemo(() => (ei ? nM(J, eu, ea, eP(J)) : null), [ea, ei, eP, J, eu]),
        eL = C[J.id] ?? lI,
        e$ = M(J.id),
        eD = i.useMemo(() => {
            var e, t;
            let n;
            return null != J.input
                ? ((e = J.input),
                  (t = S[J.id]),
                  (n = ea.trim()),
                  {
                      kind: "entities",
                      entities: eL,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eL.map((t) => (t.name.startsWith(nT[e]) ? t.name : `${nT[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ea, S, eL, J.id, J.input]),
        eq = i.useCallback(
            (e, t) => {
                (A((t) => ({ ...t, [J.id]: e })), N((e) => ({ ...e, [J.id]: t })));
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
                (e = x[J.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: E.intl.string(I.default.wTsP5l) };
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
                        ? nM(J, [t.optionId], ea)
                        : nM(J, [], ea, t)
            );
        }, [x, ea, J]),
        eU = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eD, eT ?? ez, ea),
            [ea, eT, ez, eD],
        ),
        eB = i.useCallback(() => {
            null != eU && eS(eU);
        }, [eU, eS]),
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
        eQ = eU ?? (null == eD && null == eT ? (x[J.id] ?? null) : null),
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
                          return null == nE(e, r, n) && "" === n_(e, r) ? null : r;
                      })(l, x, Y)
                    : null,
            [x, l, Y, eQ],
        ),
        eY = null != eZ,
        e0 = (null != eQ || eY) && !Q,
        e2 = Y === Z - 1,
        e4 = i.useCallback(() => {
            Q || (null != eQ ? eS(eQ) : null != eZ && (j(eZ), eA(eZ)));
        }, [eA, Q, eQ, eS, eZ]),
        e5 = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, eJ.vq)(e.target, HTMLTextAreaElement) ||
                    (0, eJ.vq)(e.target, HTMLInputElement) ||
                    ((!(0, eJ.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && e_
                            ? (e.preventDefault(), (eE ?? eI)())
                            : "ArrowRight" === e.key && e0 && (e.preventDefault(), e4())));
            },
            [eE, e_, e0, eI, e4],
        ),
        e7 =
            es && !0 !== J.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: lr.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lr.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(f.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(e3.y, {
                              value: ea,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  y((e) => ({ ...e, [J.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eB());
                              },
                              placeholder: E.intl.string(nN(J) ? I.default.yLN1x6 : I.default["tOC+tn"]),
                              "aria-label": E.intl.formatToPlainString(I.default["4JeYPB"], { question: J.question }),
                              disabled: Q,
                              rows: 1,
                              className: lr.Pu,
                              "data-conjure-clarification-other": J.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: u()(lr.$O, { [lr.fI]: eK && !eW, [lr.Oh]: eW }),
        role: "dialog",
        "aria-label": J.question,
        "data-conjure-clarification": l.id,
        "data-state": Q ? "inert" : "open",
        "data-question-expanded": en ? "true" : void 0,
        "data-picker-open": R && !z ? "true" : void 0,
        "data-step": Y,
        tabIndex: -1,
        onKeyDown: e5,
        children: [
            (0, a.jsxs)("div", {
                className: lr.rf,
                style: null == O ? void 0 : { height: O.heading + O.rows },
                "data-moving": z ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: B,
                        className: lr.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: H,
                                tag: "span",
                                id: `${J.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: en ? void 0 : p,
                                className: u()(nx.TK, lr.R_, { [lr.TB]: "exit" === eh, [lr.JU]: "enter" === eh }),
                                children: ef,
                            }),
                            ej || en
                                ? (0, a.jsx)("div", {
                                      className: nx.Q7,
                                      children: (0, a.jsx)(ep.m, {
                                          text: eb,
                                          children: (0, a.jsx)(tn.K, {
                                              icon: en ? nF.ChevronSmallUpIcon : tZ.ChevronSmallDownIcon,
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
                                      className: u()(nx.gb, nx.Q7),
                                      onClick: eX,
                                      "aria-label": E.intl.string(I.default.qVXlk0),
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
                        className: lr.Cg,
                        style: null == O ? void 0 : { insetBlockStart: O.heading },
                        children: (0, a.jsxs)("div", {
                            className: lr.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: W,
                                    className: lr.Ge,
                                    role: "group",
                                    "aria-labelledby": `${J.id}-label`,
                                    "data-direction": $?.direction,
                                    "data-parity": null == $ ? void 0 : $.moves % 2,
                                    children: [
                                        null == eo
                                            ? null
                                            : (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lr.aK,
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
                                                                  ((n = t[J.id] ?? lN),
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
                                            ? (0, a.jsx)(lm, {
                                                  projectId: n,
                                                  question: J,
                                                  value: eL,
                                                  disabled: Q,
                                                  onChange: eq,
                                                  onFocus: eF,
                                                  onBlur: eO,
                                                  fallback: nI(J) ? null : e7,
                                              })
                                            : null,
                                        null != e$ ? (0, a.jsx)(nK, { link: e$, disabled: Q }) : null,
                                        null != J.note
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lr.aK,
                                                  children: J.note,
                                              })
                                            : null,
                                        nI(J) ? e7 : null,
                                        !0 === J.upload
                                            ? (0, a.jsx)("div", {
                                                  className: lr.$0,
                                                  children: (0, a.jsx)(nq.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: E.intl.string(I.default.zxSq2q),
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
                                          lE,
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
            Z > 1 || ei || es || null != J.input || null != m || !0 === J.optional || nN(J)
                ? (0, a.jsxs)("div", {
                      className: nx.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  Z > 1
                                      ? E.intl.formatToPlainString(I.default.yzYUjq, { index: Y + 1, total: Z })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: nx.zt,
                              children: [
                                  e_
                                      ? (0, a.jsx)(nq.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: h ?? E.intl.string(I.default.Pk5lfA),
                                            onClick: eE ?? eI,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  g
                                      ? null
                                      : (0, a.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: e2
                                                ? (o ?? E.intl.string(E.t.geKm7t))
                                                : E.intl.string(eY ? I.default.ZcrbKz : I.default.w1nRmT),
                                            disabled: !e0,
                                            onClick: e4,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": e2 ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var lM = n(71637),
    lR = n(557744),
    lP = n(223347),
    lT = n(890698),
    lL = n(27232),
    l$ = n(505930),
    lD = n(506774),
    lq = n(385081);
let lF = "conjurePublishRatings",
    lO = "conjurePublishRatingViews",
    lG = [1, 2, 3, 4, 5],
    lz = { 1: I.default.GhbsGA, 2: I.default.cm0nwU, 3: I.default.kGvlh2, 4: I.default.dVBSUg, 5: I.default.DKlgF7 };
function lU(e) {
    return E.intl.string(lz[e]);
}
let lB = new Set(),
    lK = 0;
function lH() {
    return lD.w.get(lF) ?? {};
}
function lW(e, t) {
    return lH()[e]?.[t] ?? null;
}
function lV(e) {
    return (lB.add(e), () => lB.delete(e));
}
function lX(e) {
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
var lQ = n(693654);
function lZ(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = i.useId(),
        o = i.useId();
    return (0, a.jsxs)("div", {
        className: lQ.zm,
        children: [
            (0, a.jsx)(v.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, lT.wy)(t) }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: lQ.uf,
                children: lG.map((e) => {
                    let i = null != n && e <= n,
                        s = i ? lL.StarIcon : l$.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: lQ.uK,
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: o,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: lQ.hF,
                                    "aria-label": (0, lT.MF)(t, e),
                                }),
                                (0, a.jsx)("span", {
                                    className: u()(lQ.d4, { [lQ.cO]: i }),
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
function lY(e) {
    let { pending: t } = e,
        n = (0, lT.PM)(t),
        l = i.useId();
    return (0, a.jsx)("section", {
        className: lQ.Nr,
        "aria-labelledby": l,
        children: (0, a.jsxs)(nO.B, {
            gap: 12,
            children: [
                (0, a.jsxs)(nO.B, {
                    gap: 4,
                    children: [
                        (0, a.jsx)(x.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: E.intl.string(I.default.GVLtfq),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: E.intl.string(I.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, a.jsxs)(nO.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, a.jsx)(
                                lZ,
                                {
                                    dimension: e,
                                    value: n.scores[e],
                                    disabled: n.submitting,
                                    onChange: (t) => n.setScore(e, t),
                                },
                                e,
                            ),
                        ),
                        (0, a.jsx)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: E.intl.string(I.default.BvaFUc),
                        }),
                    ],
                }),
                (0, a.jsx)(np.f, {
                    label: E.intl.string(I.default.d28g0o),
                    placeholder: E.intl.string(I.default.EBB7lL),
                    value: n.feedback,
                    onChange: n.setFeedback,
                    rows: 3,
                    maxLength: 2e3,
                    disabled: n.submitting,
                }),
                null != n.error
                    ? (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: n.error,
                      })
                    : null,
                (0, a.jsx)(nO.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(I.default.CYQood),
                        disabled: !n.canSubmit,
                        loading: n.submitting,
                        onClick: n.submit,
                    }),
                }),
            ],
        }),
    });
}
var lJ = n(894443),
    l0 = n(525530),
    l1 = n(564963),
    l2 = n(530557),
    l3 = n(431527),
    l4 = n(628284);
let l5 = new Set(["select", "channel", "role", "user"]);
function l7(e, t) {
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
var l9 = n(914250),
    l6 = n(202723);
function re(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o, onDismiss: c } = e,
        m = i.useCallback(() => {
            (0, O.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: l2.KeyIcon })), [r.fields]),
        h = (0, l1.bB)(l, s),
        g = u()(l6.Lo, { [l6.jY]: h });
    if ("superseded" === s)
        return (0, a.jsx)(
            "article",
            {
                className: g,
                children: (0, a.jsx)(v.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: E.intl.string(I.default.CTxtdV),
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
                        children: E.intl.string(I.default.HCQvpO),
                    }),
                    (0, a.jsx)(l3.C, { label: E.intl.string(I.default.HCQvpO), size: "xs", items: f }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, a.jsx)(
            "article",
            {
                className: l6.Lo,
                children: (0, a.jsx)(l3.C, { label: E.intl.string(I.default.HCQvpO), size: "xs", items: f }),
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
                        className: l6.$h,
                        children: [
                            (0, a.jsx)("span", {
                                className: l6.c9,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(l4.CircleCheckIcon, {
                                    size: "xs",
                                    color: tu.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: E.intl.string(I.default.sfp7Up),
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
                                E.intl.formatToPlainString(I.default["Z+FC3j"], {
                                    label: e,
                                    value: E.intl.string(I.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let p = null != r.note && "" !== r.note ? r.note : E.intl.string(I.default.MPGSHL),
        x = (0, a.jsx)(d.$, { variant: "primary", size: "sm", onClick: m, text: E.intl.string(I.default.EK8tKY) });
    return null != c
        ? (0, a.jsxs)("section", {
              className: u()(nx.nd, l6.fw),
              "aria-label": E.intl.string(I.default.O0QIqj),
              children: [
                  (0, a.jsxs)("div", {
                      className: nx.wx,
                      children: [
                          (0, a.jsx)(l2.KeyIcon, { size: "xs", color: tu.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: nx.TK,
                              children: E.intl.string(I.default.O0QIqj),
                          }),
                          (0, a.jsx)(eg.D, {
                              className: u()(nx.gb, nx.Q7),
                              onClick: c,
                              "aria-label": E.intl.string(I.default.Hl7rif),
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
                      className: l6.DQ,
                      children: [
                          (0, a.jsx)(l9.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, a.jsx)(l3.C, { label: E.intl.string(I.default.HCQvpO), size: "xs", items: f }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: nx.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: l6.xE,
                              children: E.intl.string(I.default["2OdXdn"]),
                          }),
                          (0, a.jsx)("div", { className: nx.zt, children: x }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("article", {
              className: l6.Lo,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "body-xs/semibold",
                      color: null != o ? "text-brand" : "text-muted",
                      tag: "span",
                      children: E.intl.string(null != o ? I.default.O0QIqj : I.default.HCQvpO),
                  }),
                  (0, a.jsx)(l9.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, a.jsx)(l3.C, { label: E.intl.string(I.default.HCQvpO), size: "xs", items: f }),
                  (0, a.jsx)("div", { className: l6.sq, children: x }),
              ],
          });
}
var rt = n(442331),
    rn = n(513425);
let rl = new Set(),
    rr = new Set();
function ra(e) {
    return (
        rr.add(e),
        () => {
            rr.delete(e);
        }
    );
}
function ri() {
    return i.useSyncExternalStore(ra, () => rl);
}
function rs(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, tB.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function ro(e, t, n) {
    if (!n || null == t) return !1;
    let l = l8(e, t);
    return l.length > 0 && !l7({ keys: l }, t);
}
var ru = n(782973),
    rc = n(290713),
    rd = n(411236);
function rm(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: o,
            superseded: m,
            summary: f,
            markSaved: h,
        } = (function (e, t, n) {
            let l = ri(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                o = i.useCallback(() => {
                    if (null != n) {
                        if (!rl.has(n)) for (let e of ((rl = new Set([...rl, n])), rr)) e();
                    } else a(!0);
                }, [n]),
                u = (0, c.bG)([rt.A], () => ro(t, rt.A.getSettings(e), s), [e, t, s]);
            return {
                done: u,
                superseded: (0, c.bG)([rn.A], () => null != n && rs(rn.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [rt.A, ny.A],
                    () => {
                        var n;
                        let l = rt.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => ny.A.getChannel(e)?.name ?? null),
                              l8(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: E.intl.formatToPlainString(I.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return E.intl.string(I.default.CJq1rY);
                                                      case "checkbox":
                                                          return E.intl.string(
                                                              !0 === t ? I.default.nXtpn3 : I.default["0vfaMW"],
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
                                                                      : E.intl.string(I.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? E.intl.string(I.default.nEv677)
                                                              : E.intl.string(I.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return E.intl.string(I.default.Fw9G9A);
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
            className: rd.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(I.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: rd.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rd.Ol,
                    children: [
                        (0, a.jsx)(l4.CircleCheckIcon, {
                            size: "xs",
                            color: tu.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: E.intl.string(I.default.AxBLLy),
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
    let p = n.keys?.length === 1 && n.keys[0] === ru.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : E.intl.string(I.default.XuOf5s);
    return (0, a.jsx)(rc.A, {
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
                text: E.intl.string(I.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rd.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(I.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, a.jsx)(l9.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rd.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: u()(nx.nd, nx.jx),
                      "aria-label": E.intl.string(I.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: nx.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nx.TK,
                                      children: E.intl.string(I.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(eg.D, {
                                      className: u()(nx.gb, nx.Q7),
                                      onClick: r,
                                      "aria-label": E.intl.string(I.default["iq+Pte"]),
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
                              className: rd.DQ,
                              children: [
                                  null != x
                                      ? (0, a.jsx)(l9.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: nx.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rd.xE,
                                      children: E.intl.string(I.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: nx.zt,
                                      children: [
                                          (0, a.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: E.intl.string(I.default["9J3OG8"]),
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
var rf = n(975571),
    rh = n(427123);
let rg = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rp = n(874421),
    rx = n(932111),
    rv = n(940874),
    rj = n(404373),
    rb = n(89222);
function ry(e) {
    return "" !== rb.A.getDraft(e).trim();
}
var rk = n(29080);
function rw(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, tU.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, tU.Lf)(r) }),
    };
}
var rC = n(62617),
    rA = n(182368);
let rS = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rN = {
        snail: () => I.default.ABeVsS,
        goat: () => I.default.dhXay8,
        frog: () => I.default.SHeweG,
        bunny: () => I.default.FytFE1,
        cat: () => I.default["5c+sHs"],
        caterpillar: () => I.default["/FYcne"],
        butterfly: () => I.default["Ib/AxK"],
        dog: () => I.default.zDjBR1,
        spider: () => I.default["6sxyrN"],
        bee: () => I.default.cVtefg,
        bot: () => I.default.MjCw0v,
    },
    rI = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rC.Z)(),
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
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rC.Z)(),
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
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rC.Z)(),
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
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rC.Z)(),
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
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rC.Z)(),
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
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rC.Z)(),
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
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rC.Z)(),
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
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rC.Z)(),
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
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rC.Z)(),
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
                        () => (0, rC.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rC.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rA.u, tint: "var(--illo-purple-40)" },
    };
function rE(e) {
    return { ...rI[e], name: E.intl.string(rN[e]()) };
}
function r_(e) {
    return rS.includes(e) ? rE(e) : void 0;
}
function rM(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rS.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rS[(t + n) % rS.length]);
            }),
            l
        );
    })(e))
        t.set(n, rE(l));
    return t;
}
var rR = n(615839);
function rP(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(I.default.KcFvbo);
}
var rT = n(60160),
    rL = n(101147);
function r$(e) {
    let t = (0, tU.SY)(e.steps);
    return null != t ? (0, tU.WQ)(t) : rP(e.task);
}
function rD(e) {
    let t = rM(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? r_(e.task.helperMark) : void 0,
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
                      line: r$(e),
                  },
              ];
    });
}
function rq(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, tU.SY)(n.steps),
        d = u
            ? r$(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rP(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(I.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(I.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(I.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rR.MB)(e.durationMs),
                              });
                          return E.intl.formatToPlainString(I.default.nmI9Uh, { task: t });
                      default:
                          return E.intl.formatToPlainString(I.default.nmI9Uh, { task: t });
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
                                    className: nt.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rL.A,
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
                                      className: nt.iq,
                                      children: (0, a.jsx)(rT.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(tV.A, {
        glyph: (0, a.jsx)(tX.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rP(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nt.nC,
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
var rF = n(998445),
    rO = n(643210),
    rG = n(648127),
    rz = n(372795),
    rU = n(163897);
let rB = "conjure-browser-viewer";
function rK(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [rO.A],
            () =>
                n.flatMap((e) => {
                    let n = rO.A.getTab(t, e);
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
        className: rU.kR,
        "aria-label": E.intl.string(I.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(rH, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function rH(e) {
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
        c = (0, O.Ry)(rB),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, rG.i)(l.session);
    return (0, a.jsxs)(eg.D, {
        innerRef: s,
        className: u()(rU.Nr, h && rU.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, O.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(409495),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: rB },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(I.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: rU.Gt,
                children: [
                    (0, a.jsx)(rz.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: rU.Ji,
                        "aria-label": E.intl.formatToPlainString(I.default.rnwqXb, { name: g }),
                        onStateChange: f,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: rU.qf,
                              children: (0, a.jsx)(rF.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: rU.HS,
                              children: (0, a.jsx)(v.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: E.intl.string(I.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: rU.pG,
                children: [
                    (0, a.jsx)("span", { className: u()(rU.W9, h && rU.oM) }),
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
var rW = n(268409);
let rV = new WeakMap(),
    rX = new WeakMap();
function rQ(e) {
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
            [rn.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = rV.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = rX.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), rX.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (rV.set(e, n), n);
                })(rn.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, a.jsx)("li", { className: rW.h, children: (0, a.jsx)(rK, { projectId: t, sessionIds: o }) });
}
var rZ = n(469393);
function rY(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, G.lG)(t.authored_at);
    return (0, a.jsx)(t0, {
        title: E.intl.string(I.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rZ.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rZ.z,
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
                          text: E.intl.string(I.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var rJ = n(493490),
    r0 = n(17742);
let r1 = [];
function r2(e) {
    let t = (0, c.bG)([rJ.A], () => (null != e ? rJ.A.getCaptures(e) : r1)),
        n = (0, c.bG)([rJ.A], () => (null != e ? rJ.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, r0._F)(e, n);
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
var r3 = n(714917),
    r4 = n(463660),
    r5 = n(970211);
function r7(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([r3.A], () => (null != e ? r3.A.getBackground(e) : null)),
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
                                r = await (0, r4.Mg)(e, l);
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
        o = r2(n ? t : null);
    return null != o.selected
        ? null != o.src
            ? (0, a.jsx)("img", { className: r5.F1, src: o.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: u()(r5.LO, { [r5.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var r8 = n(155718);
function r9(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let r6 = ["command", "user_command", "message_command", "message"],
    ae = new Set([r8.kc.CHAT, r8.kc.USER, r8.kc.MESSAGE]);
function at(e) {
    return e.type ?? r8.kc.CHAT;
}
function an(e) {
    return ae.has(at(e));
}
function al(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function ar(e, t) {
    let n = r6.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !al(e)), ...n.filter(al)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || al(r) || l.push(r);
    }
    return r6.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function aa(e, t, n) {
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
    let s = e.commands.filter(an).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (at(e)) {
                    case r8.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case r8.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(al),
        u = a.length > 0 ? ar([...a, ...o], !0) : ar("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var ai = n(377941),
    as = n.n(ai);
function ao(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function au(e) {
    return e.type === r8.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === r8.kc.USER || e.type === r8.kc.MESSAGE
          ? ""
          : "/";
}
let ac = {
        [X.q7.APP_CHANNEL]: I.default["3/aHX6"],
        [X.q7.VOICE_CHANNEL]: I.default["3/aHX6"],
        [X.q7.ACTIVITY]: I.default["3/aHX6"],
        [X.q7.OVERLAY]: I.default["rPpf5/"],
        [X.q7.PROFILE_WIDGET]: null,
        [X.q7.AUTOMOD]: null,
        [X.q7.BOT]: null,
        [X.q7.APPLICATION_COMMANDS]: null,
    },
    ad = [X.q7.ACTIVITY, X.q7.APP_CHANNEL, X.q7.VOICE_CHANNEL, X.q7.OVERLAY];
function am(e) {
    return ad.find((t) => r9(e, t)) ?? null;
}
let af = 1920 / 1018;
function ah(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let ag = ah(24, 1018),
    ap = ah(24, 1920);
function ax(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var av = n(90947),
    aj = (((l = {}).IMAGE = "image"), l),
    ab = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    ay = n(598748),
    ak = n(773669);
let aw = [],
    aC = {},
    aA = {};
function aS(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aN(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aj.IMAGE,
        visibility: ab.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aI = n(127258),
    aE = n(803306),
    a_ = n(587895),
    aM = n(432005),
    aR = n(963852),
    aP = n(95701),
    aT = n(619019),
    aL = n(427262);
let a$ = new aP.nA({ id: "1337", guild_id: "1337", type: nS.rbe.GUILD_TEXT, name: "preview" });
function aD(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([nw.default], () => nw.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, aE.nj)(new aT.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aq = /^@\S+/;
var aF = n(775602);
let aO = [I.default["3eTjcV"], I.default.l3j5nS];
var aG = n(97808),
    az = n(778712),
    aU = n(486020),
    aB = n(46054),
    aK = n(200700);
let aH = {
        alert: { label: () => E.intl.string(I.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(I.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(I.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(I.default.RGzFNK), blockedStyle: !1 },
    },
    aW = {
        blocked: { label: () => E.intl.string(I.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(I.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(I.default.RGzFNK), tone: "green" },
    },
    aV = ["blocked", "alert", "allowed"],
    aX = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function aQ(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, aK.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? E.intl.formatToPlainString(E.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? E.intl.formatToPlainString(E.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? E.intl.formatToPlainString(E.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? E.intl.formatToPlainString(E.t.opVZ9q, { mins: n / 60 })
                                      : E.intl.formatToPlainString(E.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var aZ = n(984097),
    aY = n(13673);
let aJ = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function a0(e) {
    let { example: t } = e,
        n = aQ(t);
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
let a1 = ["glazedgamer", "sprinkles", "donutking"];
function a2(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = aH[n.outcome];
    return (0, a.jsxs)("li", {
        className: u()(aZ.nM, { [u()(aZ.HV, aY.DX)]: s }),
        children: [
            (0, a.jsx)(tQ.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: aZ.my,
                children: (0, a.jsx)(aG.eu, {
                    src: (0, aU.AE)(void 0, void 0),
                    size: az._3.SIZE_24,
                    "aria-label": E.intl.string(I.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: aZ.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), aB.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(a0, { example: n }) : null,
                ],
            }),
        ],
    });
}
function a3(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = aW[t.section],
        s = new Set(t.examples.map(aQ)),
        o = 1 === s.size ? t.examples.map(aQ)[0] : null;
    return (0, a.jsxs)("div", {
        className: aZ.UO,
        children: [
            (0, a.jsxs)("div", {
                className: aZ.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: aJ[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: aZ.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(v.E, {
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
                className: aZ.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(a2, { example: e, username: a1[(n + t) % a1.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function a4(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            aV
                .map((e) => ({ section: e, examples: t.filter((t) => aX[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: aZ.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: aZ.hk,
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
                    a3,
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
var a5 = n(276293),
    a7 = n(460905),
    a8 = n(110384),
    a9 = n(365199),
    a6 = n(633018),
    ie = n(763754),
    it = n(267508),
    il = n(194085),
    ir = n(20851),
    ia = n(692508),
    ii = n(798819);
function is(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: u()(ii.item, ii.labelContainer, ii.colorDefault, {
            [ii.focused]: !0 === t.highlighted,
            [ii.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: ii.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: ii.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: u()(ii.label, ia.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: ii.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: ii.icon }),
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
                          return (0, a.jsx)("img", { src: l, alt: "", className: u()(t, ia.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: a8.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: u()(ii.menu, ia.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: ii.scroller,
            children: [
                (0, a.jsx)(is, { item: s }),
                (0, a.jsx)("div", { className: ii.separator }),
                (0, a.jsx)(is, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function iu() {}
function ic(e) {
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
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, c.bG)([nw.default], () => nw.default.getCurrentUser())),
        (n = (0, c.bG)([eN.Ay], () => eN.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([a_.A], () => a_.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(I.default.JEYq8M)),
        (o = (0, c.bG)([nw.default], () => (null != l ? nw.default.getUser(l) : void 0), [l])),
        (m = aD("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (f = d ? o : m),
        (h = aD("31338", E.intl.string(I.default["9iAOsw"]), { discriminator: "0003" })),
        (g = aD("31339", (0, aL.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, aM.rh)({
                                          ...(0, aR.Ay)({
                                              channelId: a$.id,
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
                                                        type: aI.G.APPLICATION_COMMAND,
                                                        user: (0, aR.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(aq, `<@${i.id}>`)), s),
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
                                  targetMessage: E.intl.string(I.default["y+QYes"]),
                                  memberMessage: E.intl.string(I.default.BUTRDc),
                              },
                          ),
                [x, f, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? f?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = a$.name;
    return (0, a.jsxs)("div", {
        className: ia.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: ia.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(a5.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: u()(ia.TE, "group-spacing-16"),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? ia.Rz : void 0,
                            children: [
                                (0, a.jsx)(ir.A, {
                                    message: n,
                                    channel: a$,
                                    author: (0, ie.FT)(n.author, a$),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(it.A, { message: n, channel: a$ }) : void 0,
                                    usernameClassName: r?.target === "user" ? ia.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: ia.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(il.Ay, {
                                              children: [
                                                  (0, a.jsx)(il.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: a7.ReactionIcon,
                                                      onClick: iu,
                                                  }),
                                                  (0, a.jsx)(il.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: a8.ArrowAngleLeftUpIcon,
                                                      onClick: iu,
                                                  }),
                                                  (0, a.jsx)(il.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: a9.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: iu,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? ia.ET : ia.je,
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
                className: ia.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(a6.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: E.intl.formatToPlainString(E.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var id = n(332173);
function im(e) {
    let { name: t } = e;
    return (0, a.jsxs)(id.A, { children: ["/", t] });
}
function ih(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(as());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(im, { name: e.name }, e.start) : e.text));
}
n(827669);
var ig = n(757789),
    ip = n(26137),
    ix = n(231483);
let iv = { frame: I.default.Z2bt4u, bot: I.default.EbvC13, commands: I.default.EbvC13, automod: I.default.tiMvei },
    ij = {
        user_widget: { server: I.default.VlI3et, personal: I.default.njJ4YL },
        overlay_widget: { server: I.default.nUcjJ1, personal: I.default.RDpKqP },
    };
function ib(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var iy = n(573634);
let ik = {
    frame: ef.GameControllerIcon,
    overlay_widget: ig.WindowTopIcon,
    user_widget: ip.UserCircleIcon,
    bot: eh.RobotIcon,
    commands: eh.RobotIcon,
    automod: ix.ShieldIcon,
};
function iw(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: u()(iy.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function iC(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iy.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iy.jw,
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
function iA(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iy.lj,
        children: [
            (0, a.jsx)("span", {
                className: u()(iy.Vo, iy.G),
                children: (0, a.jsx)(eu.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iy.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iS(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iy.wZ,
        children: t.map((e, t) => {
            let n = au(e),
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
                                ? (0, a.jsx)(im, { name: e.name })
                                : (0, a.jsx)(id.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function iN(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iy.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iy.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(ih, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function iI(e) {
    let { experience: t, inServer: n, bullets: l, preview: r, blocks: i, commandNames: s } = e,
        o = ib(t) ? eu.AppsIcon : ik[t.kind],
        u = (function (e, t) {
            if (ib(e)) return E.intl.string(I.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = ij[e.kind];
                return E.intl.string(t ? n.server : n.personal);
            }
            return E.intl.string(iv[e.kind]);
        })(t, n),
        c = n && t.kind in ij ? E.intl.string(I.default.UXJCSG) : null;
    return (0, a.jsxs)("section", {
        className: iy.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: iy.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iy.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != c ? (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, a.jsx)("div", { className: iy.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(ih, { text: l[0], commandNames: s }),
                  })
                : l.length > 0
                  ? (0, a.jsx)(iN, { bullets: l, commandNames: s })
                  : null,
            i.length > 0 ? (0, a.jsx)("div", { className: iy.PG, children: i }) : null,
        ],
    });
}
function iE(e) {
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
                                let n = t.map(as()).join("|");
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
        className: iy.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iy.Lv,
                children: [(0, a.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iy.yF, role: "separator" }),
                            (0, a.jsx)(iI, {
                                experience: t,
                                inServer: o,
                                bullets: n,
                                preview: d(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: I.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: I.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: E.intl.string(n), labels: l.map(ao) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      iw,
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
                                                        let n = E.intl.string(I.default["6/3tGY"]),
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
                                                                iw,
                                                                {
                                                                    className: iy.Iw,
                                                                    caption: E.intl.formatToPlainString(
                                                                        I.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iy.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                iA,
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
                                                            ? [E.intl.string(I.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [E.intl.string(I.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    iw,
                                                                    {
                                                                        caption: E.intl.string(I.default.MY6UGJ),
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
                                                              iw,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iS, { commands: e.commands }),
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
var i_ = n(633075),
    iM = n(591410),
    iR = n(27399);
function iP(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()),
        r = i.useMemo(() => new i_.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iR.H,
              children: (0, a.jsx)(iM.A, {
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
var iT = n(443863);
function iL(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: ah(i.width * t, 1920), height: ah(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r7, { projectId: n }),
            (0, a.jsx)("div", {
                className: iT.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": ag,
                    "--custom-conjure-plan-overlay-widget-end": ap,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: iT.M7, onError: s }),
            }),
        ],
    });
}
function i$(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e1.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lv.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function iD(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: o } = (0, lj._)(t, r);
    return s
        ? null
        : (0, a.jsx)(eg.D, {
              className: iT.xX,
              onClick: () => i$(t, [{ id: r, alt: l }], 0),
              "aria-label": E.intl.string(I.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: iT.sN, onError: o }),
          });
}
function iq(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: d } = (0, lj._)(t, r),
        [m, f] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: x,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([aF.Ay], () => aF.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, o] = i.useState(!1),
                u = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!u) return;
                let e = setInterval(() => a((e) => (e + 1) % aO.length), 4e3);
                return () => clearInterval(e);
            }, [u]);
            let m = i.useCallback((e) => {
                    (o(!0), a(e));
                }, []),
                f = i.useCallback(() => m(d), [m, d]);
            return { slide: d, labels: aO.map((e) => E.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: m || h });
    if (o) return null;
    let b = E.intl.string(I.default.mjryK4),
        y = E.intl.string(I.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: iT.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(eg.D, {
                className: u()(iT.xX, iT.nj, { [iT.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(af) },
                onClick: () => i$(t, [{ id: r, alt: b }], 0),
                "aria-label": E.intl.string(I.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: b, className: iT.Ac, onError: d })
                          : (0, a.jsx)(iL, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: iT._4,
                role: "group",
                "aria-label": E.intl.string(I.default.EH36X6),
                children: x.map((e, t) =>
                    (0, a.jsx)(
                        eg.D,
                        {
                            className: u()(iT.c, { [iT.Cw]: p === t }),
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
function iF(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: o } = (0, lj._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(eg.D, {
                  className: iT.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: iT.rA, onError: o }),
              }),
          });
}
function iO(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: E.intl.formatToPlainString(I.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: iT.Op,
              children: (0, a.jsxs)("div", {
                  className: iT.uW,
                  children: [
                      (0, a.jsx)(v.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: E.intl.string(I.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: iT.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(iF, { projectId: t, id: r, alt: i, onOpen: () => i$(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function iG(e) {
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
        { projectId: p, proposal: x, version: j, onApprove: b } = e,
        { botExchanges: y } =
            ((n = r9(x, X.q7.APPLICATION_COMMANDS)),
            (l =
                r9(x, X.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(an)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : aa(x, l, {
                              message: E.intl.string(I.default.J7qggf),
                              reply: E.intl.string(I.default.nqYtiy),
                              event: E.intl.string(I.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = aA } = t,
                r = (0, c.bG)([ak.default], () => ak.default.locale),
                a = (0, c.bG)([eN.Ay], () => {
                    let t = eN.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aC);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, e1.PK)(e, l.id).then(
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
                                                          ...aS(n),
                                                          ...(null != n.fallback ? { fallback: aS(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = av.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[ay.m.WIDGET_TOP] || null == i[ay.m.WIDGET_BOTTOM]
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
                                                                    type: av.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: av.oG.NUMBER, value: a })
                                                                : (r[e] = { type: av.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aN),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aw,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == o ? null : { applicationId: a, rendererProps: o }), [a, o]);
        })(p, x),
        w = j?.superseded === !0,
        C = x.what_changed?.trim() ?? "",
        A =
            ((t = x.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === au(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        S =
            ((o =
                null == (s = am(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (m = null != (u = x.design_image) && u.id !== ax(x)?.id ? u : null),
            (f = ax(x)),
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
                ui: null != m && null != h ? { experienceId: h, design: m } : null,
                overlay:
                    null != f && null != g ? { experienceId: g, design: f, size: Z(x.overlay_widget ?? null) } : null,
            }),
        N = i.useMemo(
            () =>
                x.commands.some(an)
                    ? aa({ ...x, bot: void 0 }, "commands", {
                          message: E.intl.string(I.default.J7qggf),
                          reply: E.intl.string(I.default.nqYtiy),
                          event: E.intl.string(I.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        _ = (0, c.bG)([eN.Ay], () => eN.Ay.getProject(p)?.name, [p]),
        M = (0, c.bG)([eN.Ay], () => eN.Ay.getProject(p)?.install_scope === "guild", [p]),
        R =
            w && null != j
                ? E.intl.formatToPlainString(I.default.YZ3qJs, { version: j.version })
                : E.intl.string(I.default["3b6e7o"]),
        P = w ? (0, a.jsx)(t2, { children: E.intl.string(I.default.hF2c41) }) : null;
    return (0, a.jsxs)(t3, {
        title: R,
        meta: P,
        superseded: w,
        showLabel: E.intl.string(I.default.yD8EJS),
        hideLabel: E.intl.string(I.default.nSPGNb),
        bodyClassName: iT.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: iT.Qs,
                children: (0, a.jsx)(iE, {
                    appName: _ ?? x.experiences?.[0]?.name ?? "",
                    inServer: M,
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(ih, { text: x.summary, commandNames: A }),
                            }),
                            (0, a.jsx)(iO, { projectId: p, proposal: x }),
                            "" !== C
                                ? (0, a.jsxs)("section", {
                                      className: iT.uW,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: E.intl.string(I.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(ih, { text: C, commandNames: A }),
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
                                            ? (0, a.jsx)(iD, {
                                                  projectId: p,
                                                  design: S.ui.design,
                                                  alt: E.intl.string(null == (t = am(x)) ? I.default["3/aHX6"] : ac[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === S.overlay?.experienceId
                                            ? (0, a.jsx)(iq, {
                                                  projectId: p,
                                                  design: S.overlay.design,
                                                  size: S.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(iP, { ...k }) : null;
                            case "automod":
                                return null != x.automod && x.automod.examples.length > 0
                                    ? (0, a.jsx)(a4, { automod: x.automod })
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
                                        (r = l.some((e) => "command" === e.kind || al(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, a.jsx)(ic, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
                }),
            }),
            null == b || w
                ? null
                : (0, a.jsxs)("div", {
                      className: iT.qr,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: E.intl.string(I.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: E.intl.string(I.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var iz = n(289565);
function iU(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: iz.m, children: n })
        : (0, a.jsxs)("div", {
              className: iz.Z,
              children: [
                  n,
                  (0, a.jsx)(ep.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tn.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: ex.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function iB(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function iK(e, t) {
    return null != e && iB(t, e.status);
}
let iH = new WeakMap();
var iW = n(175841),
    iV = n(189213);
function iX(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, lq.Fz)(e, n);
                },
            };
        })(t),
        u = E.intl.string(I.default.IqkF07);
    return (0, a.jsx)(iV.a, {
        ...n,
        title: u,
        actions: [
            {
                variant: "primary",
                text: E.intl.string(I.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (o(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(np.f, {
            label: u,
            hideLabel: !0,
            placeholder: E.intl.string(I.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var iQ = n(54100);
function iZ(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: iQ.mo,
        role: "status",
        children: [
            (0, a.jsx)(iW.SparklesIcon, { size: "xs", color: "currentColor", className: iQ.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, {
                variant: "body-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? E.intl.string(I.default["nIc9/M"])
                        : 3 === t
                          ? E.intl.string(I.default.ausj8U)
                          : E.intl.string(I.default.HilSjw),
            }),
        ],
    });
}
function iY(e) {
    let { projectId: t, turnId: n, cta: l, status: r, placement: s } = e,
        { rating: o, rate: c } = (function (e) {
            let { projectId: t, turnId: n } = e;
            i.useSyncExternalStore(lV, () => lK);
            let { publishReason: l, surface: r, placement: a, publishState: s } = lX(e);
            return (
                i.useEffect(() => {
                    !(function (e) {
                        if (null != lW(e.projectId, e.turnId)) return;
                        let t = lD.w.get(lO) ?? {};
                        t[e.projectId]?.[e.turnId] !== !0 &&
                            ((0, lq.rv)(e),
                            lD.w.set(lO, { ...t, [e.projectId]: { ...t[e.projectId], [e.turnId]: !0 } }));
                    })({ projectId: t, turnId: n, publishReason: l, surface: r, placement: a, publishState: s });
                }, [t, n, l, r, a, s]),
                {
                    rating: lW(t, n),
                    rate(t) {
                        let n = (function (e) {
                            let { rating: t, ...n } = e,
                                { projectId: l, turnId: r } = n;
                            if (null != lW(l, r)) return null;
                            let a = { ...lX(n), rating: t };
                            (0, lq.gw)(a);
                            let i = lH();
                            return (lD.w.set(lF, { ...i, [l]: { ...i[l], [r]: t } }), lK++, lB.forEach((e) => e()), a);
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
        null != o && !g)
    )
        return (0, a.jsx)(iZ, { rating: o });
    let y = null != o,
        k = y ? o : (f ?? d),
        w = y || (null == f && null != d);
    function C(e) {
        if (y) return;
        (m(e), h(null), p(!0));
        let t = c(e);
        null != t && (0, O.qf)((e) => (0, a.jsx)(iX, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: iQ.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, a.jsxs)("span", {
                className: iQ.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: j,
                        variant: "body-xs/medium",
                        color: "text-muted",
                        className: u()(iQ.Pf, { [iQ.KH]: null == k }),
                        children: E.intl.string(I.default.mTV326),
                    }),
                    lG.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "body-xs/medium",
                                color: "text-default",
                                className: u()(iQ.Pf, { [iQ.KH]: k === e }),
                                children: lU(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": j,
                className: iQ.uf,
                children: lG.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? lL.StarIcon : l$.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: iQ.uK,
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
                                        b.current ? m(e) : C(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((b.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), C(e)));
                                    },
                                    onKeyUp: () => {
                                        b.current = !1;
                                    },
                                    className: iQ.hF,
                                    "aria-label": E.intl.formatToPlainString(I.default.NU7Dex, {
                                        rating: e,
                                        label: lU(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: u()(iQ.d4, { [iQ.cO]: t, [iQ.Ng]: t && w }),
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
function iJ(e) {
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
function i0(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, eF.Ay)(t),
        i = (0, lT.CF)();
    return null != r && iK(r, l)
        ? (0, a.jsx)(iU, {
              children: (0, a.jsxs)(nO.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(iJ, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null == n || i
                          ? null
                          : (0, a.jsx)(iY, {
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
var i1 = n(303345),
    i2 = n(44255),
    i3 = n(416473),
    i4 = n(289830);
function i5(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [eN.Ay],
                    () => {
                        let t = eN.Ay.getProject(e);
                        return null != t && (0, eN.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, o] = i.useState(null),
                u = i.useCallback(async () => {
                    (a("sending"), o(null));
                    try {
                        (await (0, i3.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (o(e instanceof i1.A ? e.message : E.intl.string(I.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(I.default.orZDqY, { time: (0, i2.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, i2.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? u : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(t0, {
        title: E.intl.string(I.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: i4.r,
            children: [
                (0, a.jsxs)("div", {
                    className: i4.z,
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
                            children: E.intl.string(I.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: E.intl.string(I.default.k4IRsm),
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
                          text: E.intl.string(I.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var i7 = n(989271);
function i8(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(eg.D, {
        className: u()(i7.nM, { [i7.f1]: s, [i7.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(I.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: i7.jo,
                children: [
                    n
                        ? (0, a.jsx)(m.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: i7.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: i7.G9,
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
function i9(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(t0, {
        title: E.intl.string(I.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                i8,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var i6 = n(313537),
    se = n(125372);
let st = {
        add_to_server: I.default["7SD3ul"],
        remove_from_server: I.default.ErhKil,
        change_server: I.default["1E5/ay"],
    },
    sn = { add_to_server: I.default["Wy+mGW"], remove_from_server: I.default.vUWHZe, change_server: I.default.MfnSEe };
var sl = n(831913),
    sr = n(618785);
function sa(e) {
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
        { projectId: x, change: j, current: b, onReply: y } = e,
        {
            project: k,
            action: w,
            done: C,
            note: A,
        } = ((n = (0, c.bG)([eN.Ay], () => eN.Ay.getProject(x), [x])),
        (l = (0, i6.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === j.action ? j.guild_id : l),
        (i = (0, c.bG)([n6.A], () => n6.A.getGuild(t)?.name, [t]) ?? E.intl.string(I.default["6bhivN"])),
        (s = (0, se.Y)(x).length > 0),
        (o =
            (0, c.bG)(
                [rn.A],
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
                    })(rn.A.getMessages(x), j, l),
                [x, j, l],
            ) &&
            null != n &&
            ("remove_from_server" === j.action ? !r : r)),
        (u = "change_server" !== j.action || null == j.guild_id || l === j.guild_id),
        (m = null != n && ("add_to_server" === j.action ? !r : r) && u && !o),
        (f = null != n && (0, eN.PV)(n)),
        (h = "remove_from_server" !== j.action),
        (g = m && f ? { kind: j.action, label: E.intl.string(st[j.action]), disabled: h && !s } : null),
        (p = null),
        m && !f ? (p = E.intl.string(I.default.Kt9exT)) : g?.disabled === !0 && (p = E.intl.string(I.default.NXvmoQ)),
        { project: n, action: g, done: o ? E.intl.formatToPlainString(sn[j.action], { server: i }) : null, note: p }),
        S = j.keep_label,
        N = b && null != w,
        _ = N && null != S && null != y,
        M = C ?? (b ? A : null);
    return null != M || N
        ? (0, a.jsxs)(nO.B, {
              gap: 8,
              children: [
                  N
                      ? (0, a.jsxs)(nO.B, {
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
                                                ? (0, sl.A)({ project: k })
                                                : (0, sr.A)({ projectId: x }));
                                    },
                                }),
                                _
                                    ? (0, a.jsx)(d.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: S,
                                          onClick: () => y(S),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != M ? (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: M }) : null,
              ],
          })
        : null;
}
var si = n(919790),
    ss = n(908492),
    so = n(971824),
    su = n(162052),
    sc = n(165648);
function sd(e) {
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
        x = i.useMemo(() => (0, tU.Jf)(n, l), [n, l]),
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
            className: nt.pj,
            "data-live": !1,
            children: (0, a.jsx)(tV.A, {
                glyph: (0, a.jsx)(rk.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(I.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, tU.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rM(k.map((e) => e.taskId)),
        C = !g && (l || k.some((e) => "running" === e.task.status)),
        A = rD(k);
    return (0, a.jsxs)("ol", {
        className: nt.pj,
        "data-live": C,
        children: [
            (0, a.jsx)(tH.Ay, {
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
                let l = null != e.task.helperMark ? r_(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          rq,
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
            (0, a.jsx)(rQ, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: nt.YO,
                      children: (0, a.jsx)(t6, { todos: b, provisional: d, agents: A, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sm(e) {
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
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: C,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: S,
            restoreProposal: N,
            onRestoreProposal: _,
            publishScheduleProposal: M,
            publishScheduleProposalCurrent: R = !1,
            serverChange: P,
            serverChangeCurrent: T = !1,
            onCardReply: L,
        } = e,
        $ = i.useMemo(
            () => rw({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: D, lastStreamedMessage: q, showsClosingMessage: F, closingContent: O } = $,
        G = (A ? S : void 0) ?? $.attachmentsHost,
        z = F && !A,
        U = null == c ? null : (0, a.jsx)(si.A, { projectId: t, attachments: c }),
        B = null == U ? null : (0, a.jsx)("div", { className: nt.MT, children: U }),
        K = w
            ? (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return E.intl.string(I.default.Mv5OmK);
                          case "queued":
                              return E.intl.string(I.default["Po/2mi"]);
                          case "restarting":
                              return E.intl.string(I.default.Vj0woh);
                          default:
                              return E.intl.string(I.default.gY3L8p);
                      }
                  })(C),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nt.ue,
        children: [
            D.length > 0 && !A
                ? (0, a.jsx)("ol", {
                      className: nt.dO,
                      children: D.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nt.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sc.PT,
                                          children: (0, ss.U)(e.content, !0, {
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
                ? (0, a.jsx)(iG, { projectId: t, proposal: r, version: s, onApprove: k })
                : z
                  ? (0, a.jsxs)("div", {
                        className: u()(nt.ky, su.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: u()(sc.PT, nt.cW),
                                children: (0, ss.U)(O, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === G ? B : null,
                            K,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: u()(nt.ky, nt.k1, su.XR, { [so.O]: null != f && "open" === h }),
                      children: (0, a.jsx)(re, {
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
                      className: u()(nt.ky, nt.k1, su.XR),
                      children: (0, a.jsx)(rm, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== G && ("closing" !== G || z) ? null : U,
            null != x ? (0, a.jsx)(i0, { projectId: t, turnId: j ?? null, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(i9, { ideas: o, pickedIdeaIds: y, onPick: b }) : null,
            null != N ? (0, a.jsx)(rY, { proposal: N, onRestore: _ }) : null,
            null != P ? (0, a.jsx)(sa, { projectId: t, change: P, current: T, onReply: L }) : null,
            null != M ? (0, a.jsx)(i5, { projectId: t, proposal: M, current: R }) : null,
            z ? null : K,
        ],
    });
}
var sf = n(286251),
    sh = n(146806),
    sg = n(475358),
    sp = n(783977),
    sx = n(559647),
    sv = n(787564),
    sj = n(339200),
    sb = n(234320),
    sy = n(191023),
    sk = n(285796),
    sw = n(922329),
    sC = n(153171);
function sA(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(sw.p, {
        name: E.intl.string(I.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: tg.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sy.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: tg.OY,
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
            children: E.intl.string(I.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: sC.o1,
            onClick: () => (0, w.xU)(t),
            "aria-label": E.intl.string(I.default.N852dj),
            children: (0, a.jsx)(sk.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sS(e) {
    let { send: t } = e;
    return (0, a.jsxs)(sw.p, {
        compact: !0,
        name: E.intl.string(I.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: E.intl.string(I.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: sC.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(nq.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: E.intl.string(I.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sN = n(587157),
    sI = n(347111),
    sE = n(120234),
    s_ = n(901173),
    sM = n(161431),
    sR = n(46653),
    sP = n(695184),
    sT = n(661191),
    sL = n(475458),
    s$ = n(957071),
    sD = n(927659),
    sq = n(351906),
    sF = n(407653),
    sO = n(322915);
function sG(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        o = (0, c.bG)([sq.A], () => sq.A.hidePersonalInformation ?? !1),
        u = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      sD.Ay.User,
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
                      sD.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(sF.A, { projectId: n, file: e.file, className: sO.Vk }),
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
    return (0, a.jsx)(sD.Ay, {
        id: t,
        className: sO.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(I.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(sz, { titleId: u, title: E.intl.string(I.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(sz, { titleId: d, title: E.intl.string(I.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function sz(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sO.Gf, children: n }),
            l,
        ],
    });
}
var sU = n(719442),
    sB = n(355622),
    sK = n(408018),
    sH = n(186306),
    sW = n(323350),
    sV = n(35277),
    sX = n(68059),
    sQ = n(267102),
    sZ = n(259691);
let sY = (0, aP.createChannelRecord)({ id: "1", type: nS.rbe.DM });
function sJ(e) {
    let t = sj.VW.end(e, []);
    return { anchor: t, focus: t };
}
function s0(e) {
    return (0, sW.WO)(sj.VW.richValue(e), { mode: "raw" });
}
function s1(e, t) {
    ((e.children = (0, sK.x7)(t)), (e.selection = sJ(e)), e.onChange());
}
function s2(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rx.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(sZ.A, { attachmentId: r }), n] });
}
var s3 = n(366811);
function s4(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function s5(e) {
    let t = s3.A.getState().path;
    return s4(window.location.pathname, e) && (null == t || s4(t, e));
}
function s7(e, t) {
    return null != t && (0, eJ.vq)(e) && t.contains(e);
}
var s8 = n(497437),
    s9 = n(465410);
let s6 = "body-md/normal",
    oe = null;
function ot(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        o = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(0),
        [f, h] = i.useState(0),
        [g, p] = i.useState(0),
        [x, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
                frontFrom: 1e3 * (0, sh._R)(m),
                frontTo: 1e3 * (0, sh._R)(f),
                backFrom: 1e3 * (0, sh.T)(m),
                backTo: 1e3 * (0, sh.T)(f),
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
        C = i.useRef(!1),
        A = i.useCallback(() => {
            (w(C.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        C.current = n;
    }, [n, t]);
    let S = "in" === k ? x.backFrom : x.frontFrom,
        N = "out" === k ? x.frontTo : x.backTo,
        _ = (0, c.bG)([aF.Ay], () => aF.Ay.useReducedMotion),
        M = t === E.intl.string(I.default.Zc7gML),
        R = r === t && M;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: u()(s8.VT, { [s8.qk]: l }),
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
            children: (0, a.jsx)(sg.e, { shortcut: "tab", className: s8.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sf.o, {
                text: t,
                variant: s6,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(s8.xM, { [s8.s2]: l }),
                onStart: A,
                onComplete: () => s(t),
            }),
            P(s8.IS, n || (!_ && "out" === k), o),
            (0, a.jsx)("span", {
                ref: d,
                className: s8.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: s6, tag: "span", children: t }),
            }),
            R
                ? (0, a.jsxs)("span", {
                      className: s8.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: s6, tag: "span", className: s8.xM, children: t }),
                          P(s8.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let on = i.memo(function (e) {
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
                onModelSettingsChange: C,
                visible: A = !0,
            } = e,
            S = n && !l,
            N = (function (e) {
                let t = i.useContext(sQ.Ay),
                    [n] = i.useState(() => {
                        let n = (0, sU.ie)();
                        return (
                            (n.children = (0, sK.x7)(e)),
                            (n.selection = sJ(n)),
                            (0, sX.a)({
                                editor: n,
                                chatInputType: sB.oU.GENERIC_RICH_TEXTAREA,
                                channel: sY,
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
                                    for (let [t, l] of sj.VW.nodes(e, { at: [], match: sj.l5.isText }))
                                        for (let e of t.text.matchAll(rx.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        sH.o.withMergedEntry(e, () =>
                                            sj.VW.withoutNormalizing(e, () => {
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
            })(rb.A.getDraft(t)),
            [_, M] = i.useState(() => s0(N));
        (0, sE.N$)(_);
        let R = i.useRef(_),
            [P, T] = i.useState(null),
            L = i.useCallback(() => {
                let e = s0(N);
                (e !== R.current && ((R.current = e), (0, sI.I)(t, e), M(e)),
                    T(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sj.ZF.isCollapsed(t)) return null;
                            let [n] = sj.VW.node(e, t.anchor.path);
                            return sj.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(N),
                    ));
            }, [N, t]),
            D = i.useCallback((e) => s1(N, e), [N]),
            q = "" !== _.trim();
        i.useEffect(() => y?.(q), [q, y]);
        let F = i.useRef(t);
        i.useLayoutEffect(() => {
            F.current !== t && ((F.current = t), s1(N, rb.A.getDraft(t)));
        }, [N, t]);
        let O = (0, c.bG)([aF.Ay], () => aF.Ay.isSubmitButtonEnabled),
            [G, z] = i.useState(!1),
            [U, B] = i.useState(!1);
        (i.useEffect(() => {
            r ? B(!1) : (G && B(!0), z(!1));
        }, [r, G]),
            i.useEffect(() => {
                if (!U) return;
                let e = setTimeout(() => B(!1), or);
                return () => clearTimeout(e);
            }, [U]));
        let {
                drafts: K,
                addFiles: H,
                pasteFiles: W,
                removeDraft: V,
                settled: Q,
                takeRefs: Z,
            } = (0, e4.FM)({ projectId: t, surface: "chat", onUploadFile: f }),
            Y = (0, w.fc)(t),
            J = (0, w.bE)(t),
            ee = i.useRef(J);
        i.useEffect(() => {
            let e = ee.current;
            ((ee.current = J), S && null != e && null != J && J !== e && sj.VW.focus(N));
        }, [J, S, N]);
        let et = "" !== _.trim() || K.length > 0 || b || Y,
            en = S && et && Q,
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
        let ea = (0, sM.rU)(t),
            [ei, es] = i.useState(null),
            [eo, eu] = i.useState(0),
            ec = i.useMemo(() => (null != P && S ? (0, s_.OG)(P, P.length) : null), [P, S]),
            ed = ec?.start ?? null;
        i.useEffect(() => {
            null == ed ? es(null) : (0, sM.IP)(t);
        }, [ed, t]);
        let em = ed === ei ? null : ec,
            ef = (function (e, t) {
                let n = (0, c.bG)([eN.Ay], () => eN.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, sL.yv)(n),
                    a = (0, c.bG)([sR.default], () => sR.default.getId()),
                    s = null != n && (0, X.pL)(n) ? n.guild_id : void 0,
                    o = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != s && null != o && sP.A.requestMembers(s, o, 100);
                    }, [s, o]),
                    (0, c.yK)(
                        [n9.Ay, n6.A, nw.default],
                        () => {
                            if (null == o) return [];
                            let e = null != s ? n6.A.getGuild(s) : null,
                                t = (t) => (0, s_.mO)(t, o, null != e ? n9.Ay.getNick(e.id, t.id) : null),
                                i = new Set(n?.collaborator_role_ids ?? []),
                                u = null != e && i.has(sT.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : n9.Ay.getMemberIds(e.id)
                                              .map((e) => nw.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (u ||
                                                          (n9.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              i.has(e),
                                                          ) ||
                                                          le.$3({
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
            eh = i.useMemo(() => (null == em ? [] : (0, s_.l$)(ef, ea, em.text)), [em, ef, ea]),
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
                            (sV.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                sV.b.insertText(e, `${n} `));
                        })(N, em.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [eh, em, N],
            ),
            ey = i.useCallback(() => {
                if (!en) return;
                let e = Z(),
                    n = Y
                        ? (function (e) {
                              let t = (0, w.K7)(e);
                              if (null == t || !(0, na.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, w.C)(e);
                              return (
                                  (0, w.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, e$.Wx)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (ni.set(i, s),
                                          (s.job = (0, na.B)({
                                              capture: (t) => (0 === t ? l : (0, w.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tR(e),
                                                              r = tR(e);
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
                                                  (0, e1.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, e1.n6)(e, t.id),
                                              send: (n) => (0, e$.dv)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      no(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (ni.delete(i),
                                                          window.setTimeout(() => {
                                                              (no(i, null),
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
                    null == oe && (oe = document.createElement("canvas").getContext("2d"));
                    let i = oe;
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
                })(oi(eE.current), eF.current, (0, s_.Lj)(_));
                ("" !== l && er(l), D(""), es(null));
            }, [en, Y, t, _, o, Z, D]),
            ek = i.useCallback(
                (e) => {
                    (e.preventDefault(), ey());
                },
                [ey],
            ),
            ew = i.useCallback(() => {
                null != d && !G && (z(!0), d(), S && sj.VW.focus(N));
            }, [d, G, S, N]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (!t) return;
                    let e = s7(document.activeElement, l?.current);
                    function r(t) {
                        e = s7(t.target, l?.current);
                    }
                    function i(t) {
                        var r, i, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            s5(n) &&
                            (0, w.K7)(n)?.active !== !0 &&
                            !(0, $._c)(n).active &&
                            ((r = t.target),
                            (i = l?.current),
                            (s = e),
                            ((0, eJ.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!s7(r, i) && null == r.closest('input, textarea, [contenteditable="true"]')
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
        })({ active: r && null != d && A, projectId: t, scopeRef: m, onEscape: ew });
        let eC = (r && null != d) || U,
            eA = null == x || "" !== _ || !S || s || b ? null : x,
            eS = i.useCallback(
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
                    if ("Escape" === e.key && (0, w.K7)(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), (0, w.V9)(t));
                        return;
                    }
                    if ("Escape" === e.key && r && null != d && s5(t)) {
                        (e.preventDefault(), e.stopPropagation(), ew());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eA) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), D(eA));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != h && (e.preventDefault(), h());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ey());
                },
                [ey, h, r, d, ew, eA, D, ex, eh.length, ev, eb, em, t],
            ),
            eI = i.useCallback(
                (e) => {
                    S && W(e);
                },
                [S, W],
            );
        (0, sb.Vo)({
            event: nS.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eI(t);
            },
        });
        let eE = i.useRef(null),
            e_ = i.useCallback(() => {
                let e = R.current;
                p?.((0, s_.Lj)(e), () => {
                    R.current === e && D("");
                });
            }, [p, D]),
            [eM, eR] = i.useState(0),
            [eP, eT] = i.useState(!1);
        i.useEffect(() => {
            if (0 === _.length) return void eT(!1);
            let e = oi(eE.current);
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
            let t = setTimeout(() => eT(!1), ol);
            return () => clearTimeout(t);
        }, [_]);
        let eL = i.useMemo(() => ({ "--custom-glow-x": `${eM}px` }), [eM]),
            eD = eP ? ` ${s8.EB}` : "",
            eq = s
                ? E.intl.string(I.default.qqlUiW)
                : l
                  ? E.intl.string(I.default.Z0hyNL)
                  : S
                    ? b
                        ? E.intl.string(I.default.knUjL3)
                        : Y
                          ? E.intl.string(I.default["6rXxwa"])
                          : j
                            ? E.intl.string(I.default.VxH5vv)
                            : v
                              ? E.intl.string(I.default.IevBEw)
                              : E.intl.string(r ? I.default["0BJa/0"] : I.default.TEeU7z)
                    : E.intl.string(I.default.zZ9NgM),
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
            eU = i.useId(),
            eB = null != eA,
            eK = el ?? eA ?? eq,
            eH = "" === _ && "" !== eK;
        return (0, a.jsxs)("form", {
            onSubmit: ek,
            className: s8.DA,
            children: [
                ex
                    ? (0, a.jsx)(sG, {
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
                          className: s8.lN,
                          children: [
                              K.map((e) => (0, a.jsx)(e4.Nl, { draft: e, onRemove: V }, e.localId)),
                              Y ? (0, a.jsx)(sA, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${s8.wg} ${s8.LP}${eD}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${s8.wg} ${s8.L3}${eD}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: s8.VA,
                    ref: eE,
                    children: [
                        (0, a.jsx)(s$.A, {
                            navId: "conjure-composer-attach",
                            disabled: !S,
                            buttonClassName: `${s8.Y0} ${s8.nu}`,
                            iconClassName: s8.Qu,
                            onAddFiles: H,
                            onImport: g,
                            onSendToOtherProjects: null != p ? e_ : void 0,
                        }),
                        eH
                            ? (0, a.jsx)("div", {
                                  ref: eG,
                                  className: s8.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(
                                      ot,
                                      { text: eK, offering: eB && null == el, typed: null != el },
                                      A ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, a.jsx)(tQ.A, { id: eU, children: E.intl.string(I.default.ldNl9x) }),
                        (0, a.jsx)(rx.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sv.A, {
                                editor: N,
                                containerClassName: u()(s8.sq, s9.dv),
                                className: s8.jp,
                                readOnly: !S,
                                canFocus: S,
                                onChange: L,
                                onBlur: () => T(null),
                                onKeyDown: eS,
                                onPaste: eI,
                                renderExtraElement: s2,
                                "aria-labelledby": eU,
                                "aria-describedby": eH ? ez : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ex,
                                "aria-controls": ex ? ej : void 0,
                                "aria-activedescendant": ex ? ((0, sD.aI)(ev) ?? void 0) : void 0,
                            }),
                        }),
                        eH ? (0, a.jsx)(tQ.A, { id: ez, children: eq }) : null,
                        (0, a.jsx)("div", {
                            className: s8.Sz,
                            onMouseDown: eC ? oa : void 0,
                            children: eC
                                ? (0, a.jsx)(ep.m, {
                                      text: E.intl.string(I.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${s8.Y0} ${s8.$E} ${s8.PG}`,
                                          disabled: G || !r,
                                          onClick: ew,
                                          "aria-label": E.intl.string(I.default.wiguT0),
                                          children: (0, a.jsx)(rk.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : k?.tierSettings != null && null != C
                                  ? (0, a.jsx)(sN.A, {
                                        settings: k.tierSettings,
                                        tiers: k.tiers,
                                        choices: k.choices,
                                        disabled: !S,
                                        onChange: C,
                                        className: `${s8.Y0} ${s8.$E}`,
                                        icon: (0, a.jsx)(sp.FiltersHorizontalIcon, {
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
                                  className: s8.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: s8.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: s8.rt,
                                          disabled: !en,
                                          "aria-label": E.intl.string(I.default.rxW2cl),
                                          children: (0, a.jsx)(sx.SendMessageIcon, {
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
    ol = 1500,
    or = 1e3;
function oa(e) {
    e.preventDefault();
}
function oi(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var os = n(709753),
    oo = n(540338);
function ou(e) {
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
var oc = n(986109);
let od = i.createContext(null);
function om(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(od),
        [m, f] = i.useState(() => aF.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: u()(oc.xk, { [oc.g5]: m, [oc.Qo]: s, [oc.q3]: o }),
        children: n,
    });
}
let of = new Map();
function oh(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let og = "live_behind",
    op = "conjureTipDismissals",
    ox = new Set(),
    ov = new Set(),
    oj = 0;
function ob() {
    let e = lD.w.get(op);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function oy(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return ox.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && ob().anchor[t]?.[e.id] === n;
        case "app":
            return ob().app[t]?.includes(e.id) === !0;
        case "forever":
            return ob().forever.includes(e.id);
    }
}
function ok(e) {
    return (ov.add(e), () => ov.delete(e));
}
function ow(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([rt.A], () => null != n && n.length > 0 && l7({ keys: n }, rt.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: E.intl.string(I.default.F2yVHg) }
        : null;
}
function oC(e) {
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
let oA = [12e4];
var oS = n(292771);
function oN(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([aF.Ay], () => aF.Ay.useReducedMotion),
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
            className: oS.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: u()(oS.qd, e.leaving ? oS.dv : oS.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function oI(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var oE = n(247171);
function o_(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: u()(oE.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: u()(oE.gutter, oE[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: oE.content, children: i }),
        ],
    });
}
var oM = n(830205);
function oR(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(o_, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: oM.aK,
        children: (0, a.jsxs)("div", {
            className: oM.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: oM.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: oM.X8,
                          children: (0, a.jsx)(ep.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tn.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
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
function oP(e) {
    let { projectId: t } = e,
        n = i.useContext(eF.bI);
    return (0, a.jsx)(oR, {
        icon: ix.ShieldIcon,
        children: E.intl.format(I.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eF.vL)(t, n.guildId));
            },
        }),
    });
}
var oT = n(443865),
    oL = n(716502);
function o$(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(o_, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: oL.Nr,
        children: (0, a.jsxs)("section", {
            className: oL.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: oL.X8,
                          children: (0, a.jsx)(ep.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tn.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
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
function oD(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: oL.DD,
        children: t,
    });
}
function oq(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: oL.rf,
        children: t,
    });
}
function oF(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: oL.o1, children: t });
}
var oO = n(95635);
function oG(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eO.A)(t, n);
    return (0, a.jsx)(oR, {
        icon: oO.UploadIcon,
        onDismiss: l,
        children: E.intl.format(I.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let oz = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && oI(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(oP, { projectId: n });
        },
    },
    {
        id: og,
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
                (null != n.publishCta && iK(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(og)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(oG, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || oI(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(o$, {
                icon: oT.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(oD, { children: E.intl.string(I.default.OJlbhX) }),
                    (0, a.jsx)(oq, { children: E.intl.string(I.default["3vJBni"]) }),
                    (0, a.jsx)(oF, {
                        children: (0, a.jsx)(d.$, {
                            variant: "primary",
                            size: "sm",
                            text: E.intl.string(I.default["U/bLzU"]),
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
var oU = n(817921);
function oB(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, eF.Ay)(e),
                    o = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()?.id),
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
                                if ((0, tB.BL)(n)) return n;
                                if (!(0, tB.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == f || oC(f) ? null : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === oh(t, g.created_at, o) ? g.id : null,
                    x = u?.projectEvent?.type === "remixed" ? u.projectEvent : null,
                    v = x?.id ?? p,
                    j = ow(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([rt.A], () => b > 0 && null == rt.A.getSettings(e), [b, e]),
                    k = (0, os.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, tB.Ji)(t)) || !!(0, tB.B0)(t, t.lastIndexOf(a))) &&
                        (null == f || !oC(f)) &&
                        null == ou(t) &&
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
                        let l = of.get(`${e}:${n}`);
                        return null != l ? oh(t, l, o) : null;
                    },
                    isDismissed: (t) => oy(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, oA);
            i.useSyncExternalStore(ok, () => oj);
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
                                of.set(`${e}:${t}`, n);
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
                                          if (null == e.dismissal || oy(e, t, n)) return;
                                          let l = ob();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  ox.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  lD.w.set(op, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  lD.w.set(op, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  lD.w.set(op, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (oj++, ov.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(oz, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(om, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: oU.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(oN, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var oK = n(52133),
    oH = n(732159),
    oW = n(888366),
    oV = n(862026),
    oX = n(291192);
function oQ(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, oV.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: oX.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: oX.Sp,
                children: [
                    (0, a.jsx)("span", { className: oX.q3 }),
                    (0, a.jsxs)("span", {
                        className: oX.g8,
                        children: [
                            (0, a.jsx)(oW.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: oX.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: oX.nM,
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
                                          (0, a.jsx)(nq.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, O.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(oH.u, {
                                                                    ...t,
                                                                    title: E.intl.string(I.default["i+xjZM"]),
                                                                    subtitle: E.intl.string(I.default.fMBZmD),
                                                                    confirmText: E.intl.string(I.default.i5f3Uo),
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
var oZ = n(345942),
    oY = n(727419),
    oJ = n(576705);
function o0(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            E.intl.format(n ? I.default.esEGL5 : I.default["XrN+Bg"], {
                onOpen: () => oY.A.open(t, nS.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var o1 = n(976860);
function o2(e) {
    return (0, c.bG)([eN.Ay, a_.A], () => {
        let t = eN.Ay.getProject(e);
        return null == t ? "" : (a_.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var o3 = n(951465),
    o4 = n(369455);
function o5(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: o } = e,
        u = o2(s),
        d =
            null ==
            (i = (0, c.bG)([eN.Ay, n6.A], () => {
                let e = eN.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (n6.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        m = (0, c.cf)([eN.Ay, eD.A, n6.A, oJ.A], () => {
            let e = eN.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(X.q7.AUTOMOD) === !0 ||
                    eD.A.getPublishStatus(s)?.surface === "automod",
                n = n6.A.getGuild(e.guild_id),
                l = null != n && oJ.A.can(nS.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(v.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            E.intl.format(
                ((t = o),
                (n = d?.name ?? null),
                (l = m.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? I.default.ESu5eZ
                        : I.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? I.default.ZnQW4S
                          : I.default.ev23Cw
                      : t.update
                        ? r
                            ? I.default["LuS8a/"]
                            : I.default.gQzuLC
                        : l
                          ? I.default.KORRGl
                          : r
                            ? I.default["/npn7F"]
                            : I.default.MOrR29),
                {
                    name: u,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, oZ.u)(d.guildId);
                    },
                },
            ),
            null != m.guildId
                ? (0, a.jsx)(o0, { guildId: m.guildId, update: o.update })
                : !m.automod && o.update && null != o.published_revision
                  ? (0, a.jsx)(o7, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function o7(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eF.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [eD.A, eN.Ay],
                    () => {
                        let r = eD.A.getPublishStatus(e),
                            a = eN.Ay.getProject(e);
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
                                (0, eN.jf)(a),
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
                      ? E.intl.format(I.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    eg.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: o4.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, o1.pX)(nS.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : E.intl.format(I.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eN.Ay.getProject(e),
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
                                null != e && (0, o3.A)(e);
                            },
                        }),
              ],
          });
}
var o8 = n(73153),
    o9 = n(505527),
    o6 = n(367790),
    ue = n(354777),
    ut = n(491182),
    un = n(74096),
    ul = n(549587),
    ur = n(448368),
    ua = n(21299),
    ui = n(538355),
    us = n(715628),
    uo = n(752636),
    uu = n(9842),
    uc = n(589022),
    ud = n(967198),
    um = n(531685),
    uf = n(503275);
let uh = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function ug(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function up(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function ux(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = up(e, t),
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
    if (ug(r) && ug(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && ug(up(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function uv(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([aF.Ay], () => aF.Ay.useReducedMotion),
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
                      for (; a > 0 && ux(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && uh.has(e.charAt(l - 1));) l--;
                                    return uh.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && ux(t, o);) o++;
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
var uj = n(624479),
    ub = n(890377),
    uy = n(92446),
    uk = n(957565),
    uw = n(180227);
function uC(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: u()(uw.QE, { [uw.Rn]: t }),
              children: (0, a.jsx)(il.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          il.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function uA(e) {
    return uk.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: uj.CopyIcon, onClick: () => (0, uk.C)(e) }]
        : [];
}
function uS(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(I.default.CXtLD2),
                          tooltip: E.intl.string(I.default.DOb1HM),
                          icon: ub.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(I.default.urZwpN),
                          icon: ex.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(uC, { groupStart: n, actions: [...r, ...uA(t)] });
}
function uN(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(I.default.H8Jfhu), icon: ta.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: uy.BugIcon, onClick: r }];
    return (0, a.jsx)(uC, { groupStart: n, actions: [...i, ...uA(t), ...s] });
}
let uI = (0, aP.createChannelRecord)({ id: "conjure-builder", type: nS.rbe.DM }),
    uE = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function u_(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: u()(uw.Yq, { [uw.x1]: t }), children: e });
}
function uM(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let uR = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function uP(e, t, n) {
    let { content: l } = (0, ui.A)(e, uR),
        r = i.useMemo(() => ((0, rx.aW)(e.content) ? (0, ue.z2)(ss.U, e, uR).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: uI, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(un.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, us.A)(s, r);
}
function uT(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, ua.m)(e, uI, t.usernameProfile, l),
        o = (0, ua.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([ud.A], () => ud.A.getGuildId()),
        d = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = nw.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(uc.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
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
let uL = { formatInline: !0, allowGameMentions: !0 };
function u$(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, ui.A)(n, uL),
        o = i.useMemo(() => {
            let e = "" === n.content ? null : (0, rx.aW)(n.content) ? (0, ue.z2)(ss.U, n, uL).content : s;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: uw.GV,
                              children: [
                                  (0, a.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: uw.Rj,
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
            [nk.A],
            () => ({
                isReplyAuthorBlocked: nk.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: nk.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        m = (0, ie.X4)(n),
        f = (0, ie.X4)(t),
        g = uT(n);
    return (0, a.jsx)(ur.A, {
        repliedAuthor: m,
        baseAuthor: f,
        baseMessage: t,
        channel: uI,
        referencedMessage: { state: uu.a.LOADED, message: n },
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
function uD(e) {
    let { message: t, author: n } = e,
        l = uT(t);
    return (0, a.jsx)(ul.Ay, {
        message: t,
        channel: uI,
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
function uq(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, uf.vm)(l),
        c = i.useMemo(() => (0, ie.FT)(u, null), [u]),
        d = i.useMemo(() => (0, lM.W1)(t), [t]),
        m = d?.body ?? t,
        f = (0, s_.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, aR.Ay)({ channelId: uI.id, content: m, author: u });
            return (0, aM.rh)({ ...e, timestamp: uM(n, e.timestamp), state: nS.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              uF,
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
function uF(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = uP(t, l);
    return (0, a.jsx)(ut.A, {
        className: uw.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(uD, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: uw.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: uw.GV,
                              children: [
                                  (0, a.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: uw.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: uw.WO, children: u }),
                      ],
                  }),
        childrenAccessories: u_(i, "" !== l),
        childrenButtons: (0, a.jsx)(uS, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function uO(e) {
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
        { text: m, revealing: f } = uv(t, { streaming: (0, c.bG)([um.A], () => u && um.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, ie.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, uf.vm)(p),
        v = i.useMemo(() => (null == r ? null : (0, lM.W1)(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aR.Ay)({ channelId: uI.id, content: v?.body ?? r.content, author: x });
            return (0, aM.rh)({ ...e, id: r.id, timestamp: uM(r.createdAt, e.timestamp), state: nS.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: uI.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aR.Ay)({ channelId: uI.id, content: "", author: uE })),
        k = i.useMemo(
            () =>
                (0, aM.rh)({
                    ...y,
                    timestamp: uM(n, y.timestamp),
                    state: nS.cmJ.SENT,
                    ...(null != b ? { type: nS.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        C = i.useMemo(
            () => (0, uo.A)({ message: k, channel: uI, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        A = uP(w, m, uw.OS);
    return (0, a.jsxs)("div", {
        className: uw.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(ut.A, {
                className: uw.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(u$, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: C,
                childrenMessageContent: A,
                childrenAccessories: u_(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            o ? (0, a.jsx)("img", { className: uw.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var uG = n(981879);
function uz(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, aM.rh)(
                    { ...(0, aR.Ay)({ channelId: uI.id, content: "" }), id: `conjure:${t}`, state: nS.cmJ.SENT },
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
                (o8.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: uI.id,
                    messageId: l.id,
                    users: [uE],
                    emoji: e,
                    reactionType: o9.v6.NORMAL,
                }),
                    o8.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: uI.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: o9.v6.NORMAL,
                    }));
            }
            return (
                t(),
                o8.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    o8.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: uG.H,
            children: (0, a.jsx)(o6.A, {
                message: l,
                channel: uI,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var uU = n(442433);
n(775443);
var uB = n(990779),
    uK = n(155899),
    uH = n(165862),
    uW = n(477782);
function uV(e) {
    let { onSelect: t, onClose: n = uU.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(uH.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(uW.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(uW.Dr, {
                          id: "restore-version",
                          label: E.intl.string(I.default.H8Jfhu),
                          icon: ta.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(uW.Dr, { id: "view-trace", label: "View Trace", icon: uy.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function uX(e) {
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
        y = null != b && null != x ? () => uQ(b, x) : void 0,
        k =
            ((t =
                T() && "assistant" === j.role && (0, tB.BL)(j)
                    ? (j.turn_id ?? j.steps.find((e) => null != e.turn_id)?.turn_id ?? j.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [uB.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : uB.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((M = { projectId: e, traceId: t }), [..._])) n(e);
                      })(l, k)
                : void 0,
        C = j.in_reply_to,
        A = j.restoreProposal;
    return (0, a.jsx)(om, {
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
                          void (0, uU.jA)(t, (e) => (0, a.jsx)(uV, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(uO, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(uN, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: y,
                onViewTrace: w,
            }),
            content: n.content,
            createdAt: j.created_at,
            replyTo: r,
            onJumpToReplied: null != C && null != i ? () => i(C) : void 0,
            accessories: (0, a.jsx)(sm, {
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
                turnId: (0, tB.lb)(j) ?? void 0,
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
                              uQ(
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
function uQ(e, t) {
    (0, uK.F)({ onConfirm: () => t(e) });
}
var uZ = n(288539),
    uY = n(677683),
    uJ = n(677690),
    u0 = n(159711);
function u1(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([uY.A], () => uY.A.getOutcome(l))),
            (n = (0, c.bG)(
                [ny.A, nw.default, nk.A],
                () => {
                    let e = t?.status === "pinned" ? ny.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, nb.m1)(e, nw.default, nk.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = E.intl.string(I.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(t0, {
              title: s,
              children: (0, a.jsx)(v.E, {
                  className: u0.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? E.intl.formatToPlainString(I.default.gKe6Lw, { channelName: i ?? "" })
                          : E.intl.string(I.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(t0, { title: s, children: (0, a.jsx)(u2, { projectId: l }) });
}
function u2(e) {
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
            let n = (0, c.bG)([eN.Ay], () => eN.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [n8.A, oJ.A],
                        () =>
                            null == t
                                ? []
                                : n8.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === nS.rbe.GUILD_VOICE && oJ.A.can(nS.xBc.MANAGE_CHANNELS, e),
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
                    let t = await (0, uJ.pk)(m.id, f);
                    (o(!1), t ? (0, uJ.tg)(e, { status: "pinned", channelId: m.id }) : d(!0));
                }, [f, e, m]),
                g = i.useCallback(() => (0, uJ.tg)(e, { status: "skipped" }), [e]);
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
        h = (0, n1.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: u0.r,
        children: (0, a.jsxs)(nO.B, {
            gap: 12,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: E.intl.string(I.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(ng.Z, {
                          selectionMode: "single",
                          label: E.intl.string(I.default.peOi1H),
                          placeholder: E.intl.string(I.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: u ? E.intl.string(I.default.d7EeAm) : void 0,
                          disabled: o,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(I.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: u0.o,
                    children: [
                        (0, a.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: E.intl.string(I.default.Iw0l8o),
                            disabled: o,
                            onClick: f,
                        }),
                        g.length > 0
                            ? (0, a.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: E.intl.string(I.default.FYI3qr),
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
function u3(e, t, n) {
    return (0, a.jsx)(uZ.A, { userId: e, content: `@${t}` }, n);
}
function u4(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, uf.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nw.default], () => (null == l ? null : nw.default.getUser(l)), [l]),
                a = (0, aL.tx)(r),
                s = o2(e),
                o =
                    (0, c.bG)([n6.A], () => (null == t.guild_id ? null : n6.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    E.intl.string(I.default.R1tPlP),
                u = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([n6.A], () => (null == u ? null : n6.A.getGuild(u)?.name), [u]),
                m = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    if (null != u) {
                        let e = d ?? t.moved_to_guild_name ?? E.intl.string(I.default.R1tPlP);
                        return null == m
                            ? E.intl.format(I.default.NVM0sD, { app: s, server: o, newServer: e })
                            : E.intl.format(I.default["/hlliy"], { app: s, server: o, newServer: e, ...m });
                    }
                    return null == m
                        ? E.intl.format(I.default.Lwsrhg, { app: s, server: o })
                        : E.intl.format(I.default.qqePfT, { app: s, server: o, ...m });
                case "bot_removed":
                    return null == m
                        ? E.intl.format(I.default.mT7EQG, { app: s, server: o })
                        : E.intl.format(I.default["lA/crI"], { app: s, server: o, ...m });
                case "preview_bot_removed":
                    return null == m
                        ? E.intl.format(I.default["4LVIeo"], { app: s, server: o })
                        : E.intl.format(I.default.YJOV6D, { app: s, server: o, ...m });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == m
                        ? E.intl.format(I.default["4VQfid"], { channel: e, server: o })
                        : E.intl.format(I.default.RlMIJN, { channel: e, server: o, ...m });
                }
                case "remixed":
                    return E.intl.format(I.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return E.intl.string(I.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, u3),
        r = ow(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(u1, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(v.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rm, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let u5 = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    ns.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rx.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(om, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uq, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(si.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(sS, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(uz, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, rv.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(om, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uO, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(si.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(om, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sd, {
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
                    return (0, a.jsx)(om, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uO, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(o5, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(om, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(uO, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(u4, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(om, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(oQ, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(om, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sd, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(om, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sd, {
                            projectId: l,
                            steps: u7,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(uX, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, oK.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, oK.A)(e.row, t.row, ["message"]) &&
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
                (0, oK.A)(e.replyTo, t.replyTo) &&
                (0, oK.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    u7 = [],
    u8 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    u9 = new WeakMap();
function u6(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function ce(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let ct = ["wheel", "touchstart", "pointerdown", "keydown"];
function cn(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cl = i.memo(function (e) {
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
            stickToBottomRef: b,
            pinned: y,
            onUnpin: k,
            handleRef: w,
            onShowsLatestChange: C,
        } = e,
        A = i.useRef(null),
        [S, N] = i.useState(null),
        _ = i.useCallback((e) => {
            ((A.current = e), N(e));
        }, []),
        [M, R] = i.useState(null),
        P = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(P.current), []);
    let T = i.useCallback((e) => {
            (R(e), window.clearTimeout(P.current), (P.current = window.setTimeout(() => R(null), 1600)));
        }, []),
        L = (0, c.bG)([eD.A], () => eD.A.getPublishStatus(t)),
        $ = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()?.id),
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
                                        let t = (0, tU.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = u9.get(r);
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
                                (0, tB.ST)(e) ||
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
                        let a = !(0, tB.BL)(e),
                            i = rw({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, tU.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, tU.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && u8.test(n.prose.content)) m = !0;
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
                                        turnActive: tK(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = u8.test(e.content ?? "");
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
                    (u9.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return iB(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, L)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = iH.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), iH.set(t, n)), n);
                      })),
                h,
            );
        }, [n, L, h]),
        q = i.useMemo(() => D.map((e) => e.key), [D]),
        [F, O] = i.useState(null),
        G = (function (e, t, n) {
            if (null == t) return u6(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : ce(e, t.endKey, t.end - 1) + 1,
                a = ce(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), u6(e, a, r));
        })(q, F, y),
        z = i.useRef(G),
        U = i.useRef(q),
        B = i.useRef(D),
        K = i.useRef(null),
        H = i.useRef(null),
        W = i.useRef(new Set()),
        V = i.useRef(null),
        X = i.useRef(!1),
        Q = i.useCallback(() => {
            let e = x.current?.getScrollerNode(),
                t = X.current ? cn(A.current) : null;
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
        for (let n of ct) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of ct) e.removeEventListener(n, t);
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
                    return ((n = Math.min(e.length, t.end + 30)), u6(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), u6(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? u6(e, i, t.end) : null;
            })(U.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: b.current,
            });
            "older" === n ? (0, e$.P6)(t) : null != n && O(n);
        }, [x, b, t]);
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
                (k(), (K.current = n));
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
        [Z, Y, k, x],
    );
    let J = i.useRef(null),
        ee = i.useCallback(
            (e) => {
                var n;
                let l;
                ((J.current = null), (X.current = !1));
                let r = A.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (k(), O(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), T(e));
                    return;
                }
                let a = B.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, e$.P6)(t) && (J.current = e);
                    return;
                }
                (k(),
                    (H.current = () => {
                        (A.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            T(e));
                    }),
                    O(((n = U.current), u6(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [T, k, t],
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
                        if (((e = l), b.current)) return void x.current?.scrollToBottom();
                        (Q(), Z());
                    }
                });
            return (t.observe(S), () => t.disconnect());
        }, [S, Q, Z, x, b]));
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
                    })(V, t, n);
            if (null != e && null != l) {
                let t = K.current;
                if (r && b.current && null != cn(l)) (k(), O(z.current), (X.current = !0), Q());
                else if (b.current) x.current?.scrollToBottom();
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
        }, [t, n, D, q, G.start, G.end, x, b, k, Q, Z, Y]));
    let en = i.useMemo(() => ou(n), [n]),
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
                : (0, tB.BL)(ei)
                  ? ei.awaitingUser
                  : null) ?? void 0,
        eo = (0, c.bG)([rt.A], () => rt.A.getSettings(t)?.secrets, [t]),
        eu = (0, os.WT)(t),
        ec = i.useMemo(() => (0, l1.Mv)(n, eo), [n, eo]);
    if (!(0, tB.i_)(n)) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: u()(oc.x7, oc.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: oc.Ub, children: (0, a.jsx)(j.y, {}) }),
            });
        let e = "unavailable" === l ? I.default.Td4Sf4 : I.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: oc.x7,
            children: (0, a.jsx)(om, { role: "assistant", children: (0, a.jsx)(uO, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(od.Provider, {
        value: W,
        children: (0, a.jsxs)("ol", {
            ref: _,
            className: oc.x7,
            children: [
                D.slice(G.start, G.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            u5,
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
                        u5,
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
                              om,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(uO, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(oo.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != es && et
                    ? (0, a.jsx)(om, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(uO, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.string(I.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                et ? (0, a.jsx)(oB, { projectId: t, messages: n, draftHasText: !0 === o, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cr = n(731084),
    ca = n(336288),
    ci = n(187447);
function cs(e) {
    let { activity: t, id: n } = e,
        l = (0, tz.j)(),
        { text: r, revealing: s } = uv(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
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
            className: ci.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(tF.Ch, {
                ref: o,
                onScroll: m,
                className: ci.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: u()(sc.PT, ci.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: aB.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var co = n(53659);
function cu(e) {
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
        [x, j] = i.useState(null),
        b = (0, cr.xu)({
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
        y = E.intl.string(b),
        k = b === cr.kx["0"],
        [w, C] = i.useState(f ?? y),
        A = (0, tz.j)();
    (l || (0, cr.E4)(y, w) || (!A && !k)) && w !== y && C(y);
    let S = i.useRef(y);
    (i.useEffect(() => {
        S.current = y;
    }, [y]),
        i.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let N = i.useRef(null),
        _ = i.useRef(w);
    i.useEffect(() => {
        _.current = w;
    }, [w]);
    let M = i.useRef(k),
        R = i.useRef(0);
    (i.useEffect(() => {
        ((M.current = k), !k && (0, cr.E8)(_.current) && C(S.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                M.current
                    ? ((R.current = (0, cr.E8)(_.current) ? R.current + 1 : 0), C((0, cr.Ov)(R.current)))
                    : S.current !== _.current
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
    let P = null != t && "" !== t.text,
        T = t?.session ?? null,
        L = P && null != T && x === T,
        $ = i.useCallback(() => {
            P && null != T && j((e) => (e === T ? null : T));
        }, [P, T]),
        D = i.useCallback(() => j(null), []);
    return (0, a.jsx)(eK.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: D,
        renderPopout: () => (0, a.jsx)(cs, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(eg.D, {
                innerRef: g,
                className: u()(co.hF, P && co.Xd),
                "aria-label": E.intl.string(
                    r
                        ? I.default.qqlUiW
                        : b === I.default.j8tmjK
                          ? I.default.j8tmjK
                          : k
                            ? cr.kx["0"]
                            : I.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: $,
                children: [
                    (0, a.jsx)("span", {
                        className: co.bl,
                        children: (0, a.jsx)(ca.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: co.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(sf.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: co.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: co.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cc = { second: 1e3, minute: 6e4 };
function cd(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cc[t];
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
var cm = n(719374);
function cf(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = cd(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cm.$,
        "data-conjure-turn-timer": !0,
        children: (0, rR.C7)(l),
    });
}
function ch(e) {
    let { startedAt: t } = e,
        n = cd(t, "minute");
    return (0, a.jsx)(tQ.A, { role: "timer", children: (0, rR.Us)(n) });
}
var cg = n(885574),
    cp = n(242779),
    cx = n(436804);
function cv(e) {
    return e.toLocaleString();
}
function cj(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cx.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cx.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cv((0, cp.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cv(n.input_tokens),
                    " in \xb7 ",
                    cv(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cv(n.cache_creation_input_tokens)} cache write \xb7 ${cv(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cb(e) {
    let { project: t } = e,
        n = (0, cp.wU)(t.compaction),
        l = (0, cp.wU)(t.classifier),
        r = (0, cp.wU)(t.image),
        i = (0, cp.wV)(t.orchestrator, t.codegen),
        s = (0, cp.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cx.si,
        role: "dialog",
        "aria-label": E.intl.string(I.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cx.Q$,
                children: (0, a.jsxs)("div", {
                    className: cx.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cv((0, cp.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cj, { label: E.intl.string(I.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cj, { label: E.intl.string(I.default.ANCEo3), usage: n }),
            (0, a.jsx)(cj, { label: E.intl.string(I.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cj, { label: E.intl.string(I.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cx.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(I.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cp.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cp.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cy(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eK.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cb, { project: t }),
        children: (e) =>
            (0, a.jsx)(eg.D, {
                innerRef: n,
                className: cx.Y$,
                "aria-label": E.intl.string(I.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cg.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ck = n(990250);
function cw(e) {
    let { queued: t } = e,
        n = E.intl.string(I.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: ck.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: ck.wx,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(tF.Ch, {
                className: ck.XG,
                children: (0, a.jsx)("ul", {
                    className: ck.p_,
                    children: t.map((e) => (0, a.jsx)(cC, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cC(e) {
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
              className: ck.AS,
              children: (0, a.jsx)(v.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: E.intl.string(I.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: ck.AS,
              children: [
                  (0, a.jsx)(v.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: ck.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(nq.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: E.intl.string(l ? I.default.nEMoeN : I.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cA(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(eK.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cw, { queued: t }),
        children: (e) =>
            (0, a.jsx)(eg.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: E.intl.formatToPlainString(I.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cS = n(997421);
function cN(e) {
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
        x = (0, L.Zv)(t),
        j = (0, c.bG)([eD.A], () => eD.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, cr.E8)(e) || e === E.intl.string(I.default.mKK6wB) || e === E.intl.string(I.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, cr.uc)(h),
        C = null != s,
        A = s ?? (n ? l : void 0),
        S = n || r || C || !0 === f;
    return (0, a.jsxs)("div", {
        className: cS.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cS.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    S || o || x || j
                        ? (0, a.jsx)(cu, {
                              activity: d,
                              compacting: m,
                              saving: f,
                              restoring: r,
                              remixing: C,
                              recalling: o,
                              controlling: x,
                              publishPending: j && S,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != A ? (0, a.jsx)(cf, { startedAt: A }) : null,
                ],
            }),
            null != A ? (0, a.jsx)(ch, { startedAt: A }) : null,
            0 === p.length ? null : (0, a.jsx)(cA, { queued: p, className: u()(cS.BP, cS.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cS.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(cy, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(I.default["tCo+ZM"], { status: (0, cr.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cS.XF,
                      children: (0, cr.Db)(g),
                  }),
        ],
    });
}
var cI = n(698638),
    cE = n(608711);
let c_ = [E.intl.string(I.default["9w+Chc"]), E.intl.string(I.default.WAvmdq), E.intl.string(I.default.SKsrzl)];
function cM(e) {
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
            visible: x = !0,
        } = e,
        j = (0, c.bG)([rn.A], () => rn.A.getMessages(m), [m]),
        b = (0, c.bG)([e$.Ay], () => e$.Ay.getConnState(m), [m]),
        y = (0, c.bG)([rn.A], () => rn.A.getProjectUsage(m), [m]),
        k = (0, c.bG)([rn.A], () => rn.A.getThinkingActivity(m), [m]),
        w = (0, c.bG)([rn.A], () => rn.A.isCompacting(m), [m]),
        C = (0, c.bG)([rn.A], () => rn.A.isSaving(m), [m]),
        S = (0, c.bG)([lR.A], () => lR.A.getModelSettings(m), [m]),
        N = i.useRef(null),
        _ = i.useRef(null),
        M = i.useRef(null),
        R = i.useRef(null),
        {
            stickToBottomRef: P,
            pinned: T,
            atBottom: L,
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
                    for (let e of ct) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of ct) t.removeEventListener(e, u);
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
            (q(), O.current ? e() : M.current?.showLatest(e));
        }, [q, O]),
        W = i.useCallback(() => {
            (z(), M.current?.handleScroll());
            let e = R.current;
            null != e && (e.position = P.current ? null : (M.current?.snapshot() ?? null));
        }, [z, P]),
        V = i.useContext(B.A) === m;
    i.useLayoutEffect(() => {
        if (!V) return;
        let e = { position: H.A.getProjectView(m).chatScroll };
        return ((R.current = e), () => (0, K.g7)(m, { chatScroll: e.position }));
    }, [V, m]);
    let X = i.useRef(!V);
    (i.useLayoutEffect(() => {
        if (X.current || !(0, tB.i_)(j)) return;
        X.current = !0;
        let e = H.A.getProjectView(m).chatScroll;
        null != e && M.current?.restore(e) !== !0 && null != R.current && (R.current.position = null);
    }, [j, m]),
        i.useLayoutEffect(() => {
            let e = N.current;
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
        (0, rj.E1)(m, (0, tz.j)()));
    let Q = (0, $.rt)(m),
        Z = (function (e) {
            let t = (0, eF.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([n6.A], () => (null == n ? null : (n6.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: E.intl.format("channel" === s ? I.default["1cm4fj"] : I.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(m),
        Y = (function (e) {
            let t = (0, c.bG)([rh.A], () => rh.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rg.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rf.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? E.intl.format(I.default["bw/n4C"], { helpdeskURL: e })
                            : E.intl.format(I.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: E.intl.formatToPlainString(I.default.GHgG2B, { percent: l, limit: n }) };
        })(m),
        J =
            ((l = (0, c.bG)([lJ.A], () => lJ.A.getFailure(m))),
            (r = i.useCallback(() => (0, l0.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: E.intl.format(I.default.Up6Ssw, { reason: l }),
                      retry: { text: E.intl.string(I.default["ywA+ET"]), onClick: r },
                  }),
        ee = (0, lT.E8)(m),
        et = (0, c.bG)([lJ.A], () => lJ.A.getSetupStartedAt(m), [m]),
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
                    : (l((0, lM.BL)({ annotations: Q.annotations, metaComment: e, context: Q.context }), t),
                      (0, $.mB)(m));
            },
            [Q, en, m],
        ),
        er = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of ni)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, e$.re)(e, l.nonce),
                        (function (e) {
                            let t = ni.get(e);
                            (ni.delete(e), no(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                rn.A.isThinking(m)) &&
                (0, e$.fu)(m);
        }, [m]),
        ea = i.useCallback((e) => (0, nc.RQ)(m, e.implementation_prompt), [m]),
        ei = i.useCallback((e) => (0, nc.RQ)(m, e), [m]),
        [es, eo] = (function (e) {
            let [t, n] = i.useState(() => ry(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? ry(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(m),
        eu = i.useCallback(() => en(E.intl.string(I.default["t5CN3+"])), [en]),
        ec = i.useCallback((e, t, n) => (0, nc.RQ)(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        ed = i.useCallback((e) => (0, lP.X)(m, e), [m]),
        em = i.useCallback((e) => (0, e1.vX)(m, e), [m]),
        ef = i.useCallback((e) => (0, e4.gn)(m, "chat", Array.from(e), em), [m, em]),
        eh = i.useCallback(() => (0, nc.RQ)(m, E.intl.string(I.default.Zc7gML)), [m]),
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
        eC = null != ew && ew.id !== ey ? ew : null,
        eA = i.useCallback(() => {
            null != eC && ek(eC.id);
        }, [eC]),
        [eS, eN] = i.useState(null),
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
                                summary: E.intl.string(I.default["o2++BO"]),
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
        eE = ej?.appBuildRequest != null && (0, tB.BL)(ej) && ej.appBuildRequest.id !== eS ? ej.appBuildRequest : null,
        e_ = eI.request ?? (null == eC ? eE : null),
        eM = null == eI.request ? eC : null,
        eR = null != e_ && e_ === eI.request,
        { close: eP, sent: eT } = eI,
        eL = eI.request?.id,
        eD = i.useCallback(() => {
            eR ? eP() : null != e_ && eN(e_.id);
        }, [e_, eR, eP]),
        eq = i.useCallback(
            (e) => {
                (null != eL && eT(eL),
                    (0, A.P0)({
                        text: E.intl.formatToPlainString(I.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [eL, eT],
        ),
        eO = (0, c.bG)([rt.A], () => rt.A.getSettings(m), [m]),
        [eG, ez] = i.useState(null),
        eU = ri(),
        eB =
            null != ej &&
            ((t = ej.id),
            (s = (0, l1.Mv)(j, eO?.secrets)),
            (o = rs(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tB.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !ro(e.settingsRequest, eO, eU.has(e.id)))),
            )),
        eK =
            null != ej &&
            "assistant" === ej.role &&
            null != ej.settingsRequest &&
            null == ej.secretRequest &&
            (0, tB.BL)(ej) &&
            ej.id !== eG &&
            ((n = ej.settingsRequest),
            (u = n.keys ?? []),
            null != eO &&
                0 !== u.length &&
                u.every((e) => {
                    let t = eO.schema.find((t) => t.key === e);
                    return null != t && l5.has(t.type);
                })) &&
            l7(ej.settingsRequest, eO) &&
            !eB
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
        e0 = i.useMemo(() => (0, l1.Qr)(j, (0, l1.Mv)(j, eY)), [j, eY]),
        e2 = null != e0 && e0.render_id !== eQ ? e0 : null,
        e3 = null == eM && null == e_ ? e2 : null,
        e5 = i.useCallback(() => {
            null != e2 && eZ(e2.render_id);
        }, [e2]),
        [e7, e8] = i.useState(null),
        e9 = eM?.id ?? e_?.id ?? e3?.render_id ?? eH?.id,
        e6 = null != eC || null != e_ || null != e2 || null != eK;
    i.useLayoutEffect(() => {
        let e = _.current?.getScrollerNode(),
            t = e7?.firstElementChild;
        if (null == e7 || null == e || !(0, eJ.vq)(t, HTMLElement) || null == e9) return;
        function n() {
            P.current && _.current?.scrollToBottom();
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
    }, [e7, e9, _, P]);
    let te = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([rn.A], () => rn.A.hasLoadedHistory(m), [m]),
            historyUnavailable: (0, c.bG)([rn.A], () => rn.A.isHistoryUnavailable(m), [m]),
            connState: b,
        }),
        tt = !(0, tB.i_)(j),
        tl = "loading" === te && tt,
        tr = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return c_[e % c_.length];
        }, [m]),
        ta = eb ? E.intl.string(I.default.Zc7gML) : "greeting" === te && tt ? tr : null,
        ti = i.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, tB.BL)(t)) return t;
            }
        }, [j]),
        ts = null != ti,
        to = i.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        tu = null != ti ? (0, rp.S)(ti) : void 0,
        tc = eb && ev ? eh : void 0,
        td = i.useCallback(() => (0, nc.RQ)(m, E.intl.string(I.default.EMgIuY)), [m]),
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
        tx = i.useMemo(() => (null != ti ? (0, tH.b9)(ti.steps) : ""), [ti]),
        tv = i.useMemo(() => (null != ti ? ((0, tU.lt)(ti.steps) ?? ti.todos) : void 0), [ti]),
        tj = ti?.provisionalTodo,
        tb = null != ti && tK(ti),
        ty = i.useMemo(() => {
            var e;
            return null != ti ? ((e = ti.steps), rD((0, tU.Jf)(e, !0).tasks)) : void 0;
        }, [ti]);
    return (0, a.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: cE.TE,
        children: [
            ev
                ? (0, a.jsx)(tG.A, {
                      title: E.intl.string(I.default.gy7byi),
                      description: E.intl.string(I.default["dkv/WO"]),
                      icons: cI.ir,
                      onDrop: ef,
                  })
                : null,
            (0, a.jsx)(nl, {
                onJumpToActivity: U,
                line: tx,
                placement: ts && "top" === tp ? "top" : null,
                todos: tv,
                todosLive: tb,
                provisionalTodo: tj,
                agents: ty,
            }),
            (0, a.jsxs)("div", {
                className: cE.JX,
                children: [
                    (0, a.jsx)(tF.Ch, {
                        ref: _,
                        onScroll: W,
                        scrollbarGutter: tl ? "both-edges" : "stable",
                        className: [cE.N$, L ? null : cE.hB, eX ? cE.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rx.Fu.Provider, {
                            value: m,
                            children: (0, a.jsx)(cl, {
                                projectId: m,
                                messages: j,
                                emptyState: te,
                                floatingSettingsMessageId: eK?.id,
                                floatingSecretRenderId: e3?.render_id,
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
                        className: cE.NJ,
                        children: (0, a.jsx)(cN, {
                            projectId: m,
                            thinking: ts,
                            turnStartedAt: tu,
                            restoring: eg,
                            remixStartedAt: et,
                            recalling: tl,
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
                              className: eX ? `${cE.B5} ${cE.J9}` : cE.B5,
                              children: (0, a.jsx)(
                                  l_,
                                  { projectId: m, clarification: eM, onSubmit: ev ? ec : void 0, onDismiss: eA },
                                  eM.id,
                              ),
                          }),
                    null == e_
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: cE.B5,
                              children: (0, a.jsx)(
                                  nj,
                                  { projectId: m, request: e_, canSend: ev, onDismiss: eD, onSent: eR ? eq : void 0 },
                                  e_.id,
                              ),
                          }),
                    e3?.secretRequest == null
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: cE.B5,
                              children: (0, a.jsx)(
                                  re,
                                  {
                                      projectId: m,
                                      cardId: e3.render_id,
                                      request: e3.secretRequest,
                                      status: "open",
                                      onDismiss: e5,
                                  },
                                  e3.render_id,
                              ),
                          }),
                    null == eW
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eM && null == e_ ? e8 : void 0,
                              className: cE.B5,
                              children: (0, a.jsx)(
                                  rm,
                                  { askId: eH?.id, projectId: m, request: eW, onDismiss: eV },
                                  eH?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cE.Jx,
                children: [
                    (0, a.jsx)(nl, {
                        onJumpToActivity: U,
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
                              className: cE.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(I.default["7b49dS"], {
                                          count: Q.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(I.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(I.default["/zOv9+"]),
                                      onClick: () => (0, $.mB)(m),
                                  }),
                              ],
                          }),
                    null == ee ? null : (0, a.jsx)(lY, { pending: ee }, ee.publishTurnId),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: cE.qB,
                              children: (0, a.jsx)(tO.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: J.message,
                                  action: J.retry,
                              }),
                          }),
                    null == Z
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cE.Db,
                              children: [
                                  (0, a.jsx)(tO.w, { type: "warning", role: "status", message: Z.message }),
                                  (0, a.jsx)("div", {
                                      className: cE.jU,
                                      children: (0, a.jsx)(ep.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tn.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
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
                              className: cE.qB,
                              children: (0, a.jsx)(tO.w, {
                                  type: Y.blocked ? "critical" : "warning",
                                  role: Y.blocked ? "alert" : "status",
                                  message: Y.message,
                              }),
                          }),
                    (0, a.jsx)(on, {
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
                        secretPending: null != e3,
                        modelSettings: S,
                        onModelSettingsChange: ed,
                        onDraftHasTextChange: eo,
                        aiPaused: Y?.blocked === !0,
                        visible: x,
                    }),
                ],
            }),
        ],
    });
}
var cR = n(761508),
    cP = n(209695),
    cT = n(207438),
    cL = n(683438),
    c$ = n(721507);
function cD(e, t) {
    return String(e).padStart(t, "0");
}
function cq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cD(l.getHours(), 2)}:${cD(l.getMinutes(), 2)}:${cD(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cD(l.getMilliseconds(), 3)}` : r;
}
var cF = n(667931);
let cO = {
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
    cG = { running: "Running", ok: "Done", error: "Failed" };
function cz(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cU(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cK(e) {
    return cU(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cH = ["Arguments", "Result", "Usage", "Details"];
function cW(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cV(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cX(e) {
    let t = (0, cF.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cF.lp)(e) ? "interrupted" : "still running";
}
function cQ(e) {
    return [cq(new Date(e.started_at).toISOString()) ?? "", cB(e.spans.length), (0, cF.Sj)((0, cF.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cZ(e) {
    let t = (0, cF.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cF.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += cY(r, "in")),
                (l.output += cY(r, "out")),
                (l.cacheRead += cY(r, "cache_read")),
                (l.cacheWrite += cY(r, "cache_write")),
                (l.costUsd += cY(r, "cost_usd"))));
    }
    let r = cF.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function cY(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var cJ = n(738188),
    c0 = n(430993),
    c1 = n(364840),
    c2 = n(224640),
    c3 = n(20742);
let c4 = { collapsed: new Set(), revealed: new Set() };
var c5 = n(872892);
let c7 = {
    op: c5.Q,
    model: c5.i3,
    tool: c5.dH,
    setup: c5.kc,
    worktree: c5.Qx,
    sandbox: c5.QH,
    build: c5.F1,
    platform: c5.Op,
    other: c5.fv,
};
function c8(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cB(t.calls, "model call"),
                      `${cz(t.input)} in`,
                      `${cz(t.output)} out`,
                      `${cz(t.cacheRead)} cache read`,
                      `${cz(t.cacheWrite)} cache write`,
                      cV(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: c5.M1,
        children: [
            (0, a.jsx)("div", {
                className: c5.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${c5.DJ} ${c7[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: c5.o1,
                children: cF.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cU(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: c5.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${c5.nf} ${c7[e]}` }),
                                (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: cO[e] }),
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
function c9(e) {
    return `conjure-perf-trace-${e}`;
}
function c6(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: c5.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${c5.p0} ${s + o > 85 ? c5.EU : c5.jh}`,
                children: i,
            }),
        ],
    });
}
function de(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? tY.ChevronSmallRightIcon : tZ.ChevronSmallDownIcon,
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
        id: c9(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${c5.$y} ${r ? c5.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: c5.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(eg.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: c5.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: c5.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: c5.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${c5.nf} ${c7[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: c5.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: c5.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: c5.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(cJ.WarningIcon, { size: "xs", color: "currentColor", className: c5.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(c6, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${c5.M0} ${c5.Nh}`
                    : t.running
                      ? `${c5.M0} ${c5.rF}`
                      : `${c5.M0} ${c7[t.category]}`,
                duration: cK(t),
            }),
        ],
    });
}
function dt(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(eg.D, {
        tag: "div",
        role: "treeitem",
        id: c9(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${c5.$y} ${l ? c5.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: c5.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: c5.ai,
                        children: (0, a.jsx)(tY.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: c5.U9 }),
                    (0, a.jsx)("span", { className: `${c5.nf} ${c5.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: c5.MQ,
                        children: cB(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(c6, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${c5.M0} ${c5.ab} ${c5.dL}`,
                duration: cU(t.totalMs),
            }),
        ],
    });
}
function dn(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: c5._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: c5.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${c5.nf} ${c7[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cW("Start", `+${cU(e.start)}`), cW("Duration", cK(e))];
                      e.count > 1
                          ? t.push(
                                cW("Calls", String(e.count)),
                                cW("Longest call", cU(e.maxMs)),
                                cW("Spread over", cU(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cW("Self time", cU(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cW("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cW("Notes", l.join(", "))),
                          null != e.span.error && t.push(cW("Error", e.span.error)));
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
                              s = "cost_usd" === t ? cV(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cW(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cH.flatMap((e) => {
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
                                            className: c5.xd,
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
                                                            className: c5.vl,
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
function dl(e) {
    let { trace: t } = e,
        n = i.useMemo(() => cZ(t), [t]);
    return (0, a.jsx)(c8, { stats: n });
}
function dr(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cF.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? c4 : (0, cF.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cF.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cF.x7)(t)), l((n) => (0, cF._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, cF.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cF.IE)(t, e);
                        null != n && l((e) => (0, cF.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cF.IE)(t, e);
                        null != n && l((e) => (0, cF.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, cF.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, cF.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cF.hB)(t));
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
        h = (0, cF.dj)(t),
        g = i.useMemo(() => (0, cF.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        x = i.useCallback(
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
                    null != t && (u(t.key), document.getElementById(c9(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, m, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(c0.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: c5.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cX(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cQ(t),
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
                                      children: `${cB(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dl, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: c5.KE,
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
                        "aria-activedescendant": null == o ? void 0 : c9(o),
                        className: c5.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, a.jsxs)("div", {
                                className: c5.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: c5.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: c5.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${c5.io} ${(e / h) * 100 > 85 ? c5.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cU(e),
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
                                          de,
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
                                    : (0, a.jsx)(dt, { row: e, extent: h, selected: e.key === o, onReveal: m }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c1.j, { children: (0, a.jsx)(dn, { node: s }) }),
        ],
    });
}
function da(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([uB.A], () => uB.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(c2.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(c3.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(c0.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dr, { trace: i }),
        ],
    });
}
let di = { running: c5.Vf, ok: c5.mo, error: c5.Sr };
function ds(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${c5.Om} ${di[t]}`, role: "img", "aria-label": cG[t] });
}
function du(e, t) {
    (0, O.qf)((n) => (0, a.jsx)(da, { ...n, projectId: e, traceId: t }));
}
function dc(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => du(t, n.id), [t, n.id]);
    return (0, a.jsxs)(eg.D, {
        className: c5.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: c5.sU,
                children: [
                    (0, a.jsx)(ds, { status: (0, cF.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: c5._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cX(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cQ(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dd(e) {
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
            (0, c$.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(eK.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eK.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(uH.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(uW.rX, {
                    children: (0, a.jsx)(uW.Dr, {
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
            return (0, a.jsx)(tn.K, {
                ...e,
                buttonRef: l,
                icon: a9.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dm(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([uB.A], () => uB.A.getTimingTraces(t), [t]),
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
                    let t = e.map(cZ);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cF.BF.map((e) => ({
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
              className: c5.Ie,
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
              className: c5.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: c5.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: c5.fH,
                              children: (0, a.jsx)(cL.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dd, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(tF.Ch, {
                      className: c5.XG,
                      children: [
                          (0, a.jsx)(c8, { stats: u }),
                          0 === o.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: c5.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dc, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function df(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dh(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dg(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dp(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dx(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dv(e) {
    return E.intl.string("preview" === e ? I.default["2yLYlG"] : I.default.eiAi57);
}
let dj = ["all", "preview", "stable", "web"];
function db(e) {
    switch (e.reason) {
        case "local":
            return E.intl.string(I.default.mUeKML);
        case "unconfigured":
            return E.intl.string(I.default.bGefb5);
        case "unauthorized":
            return E.intl.string(I.default.KLx6Bb);
        default:
            return null != e.detail
                ? E.intl.formatToPlainString(I.default.t09Q6q, { detail: e.detail })
                : E.intl.string(I.default["t+tG59"]);
    }
}
function dy(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(I.default["XO/bN4"], {
              p50: df(e.memory_p50_bytes ?? 0),
              p999: df(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dk = {
    db: () => I.default["7l+DFG"],
    db_preview: () => I.default.FAuffi,
    runtime: () => I.default["Gkl+ab"],
    runtime_preview: () => I.default.ynpJzv,
    bot: () => I.default["5/i0cj"],
    bot_preview: () => I.default.m2jsnw,
};
var dw = n(911608),
    dC = n(177427);
function dA(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dC.KE,
        children: [
            (0, a.jsx)("div", {
                className: dC.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(j.y, { type: j.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: E.intl.string(I.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.formatToPlainString(I.default.INVO50, { time: dp(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(d.$, { variant: "secondary", size: "sm", text: E.intl.string(I.default.oKEgiu), onClick: l }),
        ],
    });
}
function dS(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dC.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "body-xs/semibold", color: "text-muted", className: dC.Gf, children: t }),
            n,
        ],
    });
}
function dN(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dC.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dC.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dC.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dC.kS,
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
function dI(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dC.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dC.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dw.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dC.dh : void 0,
            }),
        ],
    });
}
function dE(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dN, {
            label: E.intl.string(I.default.SXP7pD),
            value: E.intl.string(I.default.E5hKVi),
            hint: db(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dN, {
            label: E.intl.string(I.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(I.default.AGvoMJ),
        });
    let l = dy(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dN, { label: E.intl.string(I.default["H/X+FI"]), value: dh(n.cpu_ms) }),
            null != l && (0, a.jsx)(dN, { label: E.intl.string(I.default.lmFmMO), value: l }),
        ],
    });
}
function d_(e) {
    let { analytics: t } = e,
        n = E.intl.string(I.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dS, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: db(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dk[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dS, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: E.intl.string(I.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dN,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(I.default["w/2voO"], { cpu: dh(t.cpu_ms) }),
                              hint: dy(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dM = n(678708),
    dR = n(414499),
    dP = n(714800),
    dT = n(81466),
    dL = n(424383),
    d$ = n(664121),
    dD = n(816943),
    dq = n(268791),
    dF = n(514042),
    dO = n(872351),
    dG = n(708988),
    dz = n(150934),
    dU = n(417270);
let dB = "Restart Agent",
    dK = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dH(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dW(e, t) {
    return { label: e, value: null != t && "" !== t ? dp(t) : "Unknown", icon: "calendar" };
}
function dV(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dX(e, t, n, l) {
    let [r, a] = dK[n.status];
    return { label: e, value: `${dV(n.bytes)} of ${dV(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function dQ(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dp(e.at);
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
let dZ = { main: "Main vs Remote", wip: "WIP vs Remote" };
function dY(e) {
    let t = `container ${dH(e.local)} \xb7 remote ${dH(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dZ[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dg(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dg(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dg(n)} Ahead, ${dg(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let dJ = ["main", "wip"];
var d0 = n(400154);
let d1 = {
        checkout: dM.FolderIcon,
        edit: f.PencilIcon,
        remote: dR.CloudIcon,
        commits: dP.ListNumberedIcon,
        calendar: dT.CalendarIcon,
        save: dL.SaveIcon,
        objects: d$.ServerIcon,
        download: dD.CloudDownloadIcon,
        size: dq.SpeedometerIcon,
        file: dF.FileIcon,
    },
    d2 = {
        ok: [l4.CircleCheckIcon, tu.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [cJ.WarningIcon, tu.A.colors.ICON_FEEDBACK_WARNING],
        error: [sk.CircleXIcon, tu.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dO.ArrowSmallUpIcon, tu.A.colors.ICON_MUTED],
        behind: [dG.ArrowSmallDownIcon, tu.A.colors.ICON_MUTED],
    };
function d3(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([uB.A], () => uB.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cT.DK)(t), [t]),
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
                    `Updated ${dp(r)}`,
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
    return (0, a.jsxs)(dS, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: d0.Lj,
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
                    if (!e.running || null != e.localError) return [dQ(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dQ(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dg(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = dJ.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(dY))
                        : l.push(
                              { label: "Main", value: dH(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dH(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dg(e.commits) : "Unknown", icon: "commits" },
                            dW("Oldest Commit", e.oldest),
                            dW("Newest Commit", e.newest),
                            dQ(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dg(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dg(t.loose)} loose (${df(t.looseBytes)}) \xb7 ${dg(t.packed)} packed in ${n} (${df(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dg(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dg(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                dX(
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
                                  dX("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = d1[r],
                        [o, u] = null != i ? d2[i] : [null, void 0];
                    return (0, a.jsx)(
                        dN,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: tu.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function d4(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, c.bG)([uB.A], () => uB.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cT.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = uB.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cT.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                o8.h.dispatch({
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
            let o = i.useCallback(() => (0, cT.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dB,
                },
                restart: o,
            };
        })(t),
        m = i.useCallback(() => {
            (0, C.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, a.jsxs)("div", {
        className: d0.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: d0.nM,
                children: [
                    (0, a.jsx)(dz.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dU.RetryIcon,
                        text: dB,
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
                            return `Restarted \xb7 new instance since ${dp(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dp(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function d5(e, t) {
    return (0, a.jsx)(dN, {
        label: e,
        value: E.intl.formatToPlainString(I.default.yHJxuP, { count: dg((0, cp.aM)(t)) }),
        hint: `${dg(t.input_tokens)} in \xb7 ${dg(t.output_tokens)} out \xb7 ${dg(t.cache_read_input_tokens)} cache read`,
    });
}
function d7(e) {
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
        { projectId: g, status: p, fetchState: x, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: C,
            turnRunning: A,
            handleForceCompaction: S,
            handleForceCompactionOverride: N,
            handleRestartWorkspace: _,
            lifetime: M,
            limits: R,
            session: P,
            contextCeiling: T,
        } = ((t = (0, c.bG)([uB.A], () => uB.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([uB.A], () => uB.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([uB.A], () => uB.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([uB.A], () => uB.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([uB.A], () => uB.A.getSandboxRestartState(g), [g])),
        (o = (0, c.bG)([rn.A], () => rn.A.isThinking(g), [g])),
        (u = i.useCallback(() => (0, cT.Lj)(g), [g])),
        (m = i.useCallback(() => (0, cT.Lj)(g, !0), [g])),
        (f = i.useCallback(() => (0, cT.bq)(g), [g])),
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
        className: d0.Mf,
        children: [
            (0, a.jsx)(dA, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: j }),
            (0, a.jsx)(dS, {
                title: E.intl.string(I.default.JghNal),
                children:
                    null == M
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(I.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dN, {
                                      label: E.intl.string(I.default["9nqym2"]),
                                      value: dg((0, cp.a7)(M.cost_usd)),
                                      hint: E.intl.formatToPlainString(I.default.NCdUIh, { count: dg(M.turns) }),
                                  }),
                                  d5(E.intl.string(I.default.xtxP0e), M.orchestrator),
                                  d5(E.intl.string(I.default["9Sj3SX"]), M.codegen),
                                  d5(E.intl.string(I.default.ANCEo3), (0, cp.wU)(M.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dN, {
                                          label: E.intl.string(I.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dg(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dS, {
                title: E.intl.string(I.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(I.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  d5(E.intl.string(I.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dN, {
                                      label: E.intl.string(I.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cp.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dS, {
                title: E.intl.string(I.default.NbRk9a),
                children: [
                    null != y && null != T
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dI, {
                                      label: E.intl.string(I.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: T,
                                      formatValue: dg,
                                  }),
                                  (0, a.jsx)(dN, {
                                      label: E.intl.string(I.default.mRbSns),
                                      value: `${dg(y.tokensBefore)} \u{2192} ${dg(y.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(I.default.Vq3skS, {
                                          count: dg(y.retainedMessages),
                                          time: dp(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != T
                                      ? E.intl.formatToPlainString(I.default.GMLCNv, { ceiling: dg(T) })
                                      : E.intl.string(I.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dN, {
                            label: E.intl.string(I.default["4BX5KK"]),
                            value: `${dg(k.projected)} / ${dg(k.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(I.default["6ngCax"], { time: dp(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: d0.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(I.default["1EiJeb"]),
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
                                    if ("idle" === e) return E.intl.string(I.default.wox6Ev);
                                    if ("pending" === e) return E.intl.string(I.default.OcPHQ1);
                                    let t = dp(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return E.intl.formatToPlainString(I.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? I.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? I.default.YZb4hK
                                              : I.default.ZoUSVK;
                                    return E.intl.formatToPlainString(n, {
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
                                            text: E.intl.string(I.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: E.intl.string(I.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: d0.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(I.default["5qCjBu"]),
                                loading: "pending" === C,
                                disabled: "pending" === C || A,
                                onClick: _,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof C && "restarted" !== C.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(I.default.mlok8D);
                                    if ("pending" === e) return E.intl.string(I.default["1ugSyK"]);
                                    let t = dp(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? I.default["76mfqO"] : I.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(C),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d4, { projectId: g }),
                ],
            }),
            (0, a.jsx)(d3, { projectId: g }),
            (null != P || p?.analytics != null) &&
                (0, a.jsxs)(dS, {
                    title: E.intl.string(I.default.EsSzCS),
                    children: [
                        null != P &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dN, {
                                        label: E.intl.string(I.default.CLXHAs),
                                        value: dp(P.instance_since),
                                        hint: E.intl.string(I.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dN, { label: E.intl.string(I.default["8V8e1Z"]), value: dg(P.sockets) }),
                                    (0, a.jsx)(dN, {
                                        label: E.intl.string(I.default["4pBzYW"]),
                                        value: P.turn_inflight
                                            ? E.intl.string(I.default.Wv025I)
                                            : E.intl.string(I.default["7/lsFY"]),
                                    }),
                                    P.queued_messages > 0 &&
                                        (0, a.jsx)(dN, {
                                            label: E.intl.string(I.default["3oUYnv"]),
                                            value: dg(P.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(dE, { analytics: p.analytics }),
                    ],
                }),
            null != R &&
                (0, a.jsxs)(dS, {
                    title: E.intl.string(I.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dN, {
                            label: E.intl.string(I.default.IlDBN3),
                            value: dg(R.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dN, {
                            label: E.intl.string(I.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(I.default.yHJxuP, { count: dg(R.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dN, {
                            label: E.intl.string(I.default.cIhN2W),
                            value: E.intl.formatToPlainString(I.default.yHJxuP, {
                                count: dg(R.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dN, {
                            label: E.intl.string(I.default["+fOn/q"]),
                            value: dg(R.max_user_message_chars),
                        }),
                        (0, a.jsx)(dN, { label: E.intl.string(I.default.kIHga0), value: dg(R.max_build_attempts) }),
                        (0, a.jsx)(dN, { label: E.intl.string(I.default.Iw03yW), value: dg(R.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var d8 = n(237528),
    d9 = n(629584),
    d6 = n(531893);
function me(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: d6.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(I.default.h1SE6R),
              }),
          });
}
function mt(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: d6.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: E.intl.string(I.default.h1SE6R),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(I.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: d6.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function mn(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: d6.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(I.default.V7Ri8H),
              }),
          })
        : null;
}
var ml = n(109079);
let mr = i.memo(function (e) {
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
        className: ml.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: ml.Mt,
                selectable: !0,
                children: cq(n.ts) ?? n.ts,
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
                className: ml.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: ml.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: ml.Cq, children: (0, a.jsx)(d8.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: ml.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(d8.v, { text: E.intl.string(I.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(eg.D, {
                                      className: ml.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(I.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(tZ.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(tY.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  E.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? I.default.kUhyUv : I.default["N+fphl"],
                                                      { count: u.size },
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
                                          className: ml.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
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
function ma(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cP.A], () => cP.A.getLogs(t), [t]),
        l = (0, c.bG)([cP.A], () => cP.A.getHistoryState(t, "logs")),
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
                dj.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dv(e);
                            case "web":
                                return E.intl.string(I.default.IVzfVV);
                            default:
                                return E.intl.string(I.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: ml.$F,
        children: [
            (0, a.jsxs)("div", {
                className: ml.y4,
                children: [
                    (0, a.jsx)(d9.I, {
                        look: "pill",
                        "aria-label": E.intl.string(I.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: ml.KT,
                        children: (0, a.jsx)(cL.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: E.intl.string(I.default["m2+37Y"]),
                            "aria-label": E.intl.string(I.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(me, { state: l }),
            (0, a.jsxs)(tF.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: ml.sx,
                children: [
                    (0, a.jsx)(mn, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(mt, {
                              state: l,
                              emptyTitle: E.intl.string(I.default.S7qlPG),
                              emptyBody: E.intl.string(I.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: E.intl.string(I.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(mr, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function mi(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dS, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(I.default.umcjif),
                      }),
        })
    );
}
function ms(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dN, {
                      label: E.intl.formatToPlainString(I.default["01ZMS4"], { env: dv(n) }),
                      value: ((t = l.connected), E.intl.string(t ? I.default.Wv025I : I.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dN, {
                      label: E.intl.string(I.default["z1dh+F"]),
                      value: dg(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dp(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dN, { label: E.intl.string(I.default.Iz5GnJ), value: dg(l.guild_count) }),
                  (0, a.jsx)(dN, {
                      label: E.intl.string(I.default["7UqtNv"]),
                      value: dg(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(I.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dp(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dN, {
                          label: E.intl.string(I.default["x3+JXJ"]),
                          value: dg(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dN, { label: dv(n), value: E.intl.string(I.default.lTHQss) });
}
function mo(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dN, {
        label: dv(t),
        value: E.intl.formatToPlainString(I.default["Xq+wHT"], {
            requests: dg(n.requests),
            failures: dg(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(I.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dp(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(I.default["7KlGT6"], { time: dp(n.since) }),
    });
}
function mu(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dN, {
                label: E.intl.formatToPlainString(I.default["92gVTm"], { env: dv(t) }),
                value: dg(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dN,
                    {
                        label: E.intl.formatToPlainString(I.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? E.intl.formatToPlainString(I.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? E.intl.formatToPlainString(I.default.wxAWNv, { time: dp(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function mc(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dN, {
        label: dv(t),
        value: E.intl.formatToPlainString(I.default.suAOj9, { calls: dg(n.calls), errors: dg(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function md(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dS, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: E.intl.string(I.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dS, {
        title: t,
        children: [
            (0, a.jsx)(dN, {
                label: E.intl.string(I.default.xtD4Zp),
                value: dg(n.requests),
                hint: E.intl.formatToPlainString(I.default["7KlGT6"], { time: dp(n.since) }),
            }),
            (0, a.jsx)(dN, { label: E.intl.string(I.default.gfRhR3), value: dg(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dI, {
                              label: E.intl.string(I.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dh,
                          }),
                          (0, a.jsx)(dN, {
                              label: E.intl.string(I.default.mSKImM),
                              value: dh(r),
                              hint: E.intl.formatToPlainString(I.default.JqMU05, {
                                  total: dh(n.cpu_ms_total),
                                  wall: dh(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dN, {
                      label: E.intl.string(I.default.LEJ5r3),
                      value: E.intl.string(I.default["2Ekb2b"]),
                      hint: E.intl.string(I.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dN, { label: E.intl.string(I.default.xvmL1D), value: dh(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dN, { label: E.intl.string(I.default["4sQYwH"]), value: dg(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dN, {
                label: E.intl.string(I.default.bQenOy),
                value: dg(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(I.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dN, { label: E.intl.string(I.default.xgpn4Y), value: dx(n.build) }),
        ],
    });
}
function mm(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(I.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(I.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(I.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dS, {
        title: E.intl.string(I.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dN, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dN, {
                                  label: E.intl.formatToPlainString(I.default.u7kJJ4, { env: n }),
                                  value: df(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? I.default.lH0oQw : I.default.m9h02S,
                                      { count: dg(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dI, {
                                      label: E.intl.formatToPlainString(I.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: df,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function mf(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: d0.Mf,
        children: [
            (0, a.jsx)(dA, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(md, {
                            title: E.intl.string(I.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(md, {
                            title: E.intl.string(I.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mm, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(mi, {
                                title: E.intl.string(I.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ms, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(mi, {
                                title: E.intl.string(I.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mo, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(mi, {
                                title: E.intl.string(I.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mu, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(mi, {
                                title: E.intl.string(I.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mc, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(d_, { analytics: t.analytics }),
                        (0, a.jsxs)(dS, {
                            title: E.intl.string(I.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dN, {
                                    label: E.intl.string(I.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dx(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dN, {
                                    label: E.intl.string(I.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dx(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var mh = n(592465);
function mg(e) {
    let { projectId: t, onClose: n } = e,
        l = T(),
        [r, s] = i.useState(() => (l && M?.projectId === t ? "trace" : "logs")),
        o = (0, c.bG)([uB.A], () => uB.A.getStatus(t), [t]),
        u = (0, c.bG)([uB.A], () => uB.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, cT.R7)(t), (0, cT.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, e$.Rw)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == M || M.projectId !== e) return null;
            let { traceId: t } = M;
            return ((M = null), t);
        })(t);
        return null != e && (du(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        R(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, uk.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: uB.A.getStatus(t),
                        last_turn_usage: uB.A.getLastTurnUsage(t),
                        last_compaction: uB.A.getLastCompaction(t),
                        last_compaction_decline: uB.A.getLastCompactionDecline(t),
                        timing_traces: uB.A.getTimingTraces(t),
                        logs: cP.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, A.P0)({ text: E.intl.string(I.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(I.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: mh.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(eQ.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(eQ.Ay.Icon, {
                            icon: uj.CopyIcon,
                            tooltip: E.intl.string(I.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(eQ.Ay.Icon, { icon: ex.XSmallIcon, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(eQ.Ay.ChannelIcon, { icon: uy.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(eQ.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mh.rf,
                children: [
                    (0, a.jsxs)(cR.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(I.default.RvvWIh),
                        className: mh.vR,
                        children: [
                            (0, a.jsx)(cR.V.Item, { id: "logs", children: E.intl.string(I.default["+VRYCm"]) }),
                            (0, a.jsx)(cR.V.Item, { id: "worker", children: E.intl.string(I.default["50D0FZ"]) }),
                            (0, a.jsx)(cR.V.Item, { id: "agent", children: E.intl.string(I.default.UkbTK1) }),
                            l ? (0, a.jsx)(cR.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(ma, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(mf, { status: o, fetchState: u, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(dm, { projectId: t })
                            : (0, a.jsx)(d7, { projectId: t, status: o, fetchState: u, onRefresh: d }),
                ],
            }),
        ],
    });
}
var mp = n(365912),
    mx = n(873715);
function mv(e) {
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
let mj = Object.freeze({ x: -1, y: -1 });
function mb(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = mv(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var my = n(192888);
function mk(e, t) {
    return (0, my.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(mb, () => ({ status: "failed" }));
}
var mw = n(108308);
let mC = { x: 25, y: 21 };
function mA(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mS(e, t, n, l) {
    let r = mA(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function mN(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mI(e) {
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
function mE(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: m } = (0, $.rt)(o),
        f = (0, L.Zv)(o),
        h = (0, O.Rv)(),
        g = (0, c.bG)([nw.default], () => nw.default.getCurrentUser()),
        p = g?.id ?? null,
        [x, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, C] = i.useState(!1),
        [A, S] = i.useState(null),
        [N, _] = i.useState(!1),
        M = i.useRef(null),
        R = i.useRef(null),
        P = i.useRef(null),
        [T, D] = i.useState(null),
        [q, F] = i.useState(!1),
        [G, z] = i.useState(null),
        [U, B] = i.useState(null),
        K = i.useRef(!1),
        [H, W] = i.useState(!1),
        [V, X] = i.useState(null),
        Q = u && !f && !h;
    null == G || (Q && G.projectId === o) || z(null);
    let Z = G?.projectId ?? null;
    i.useEffect(() => {
        if (null != Z) return () => (0, nc.xJ)(Z, "design");
    }, [Z]);
    let Y = e6(r, Q);
    i.useEffect(() => {
        if (!Q || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void C(!0);
        (y(!0), C(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, mx.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? mI(t.response) : null;
                    null == n ? C(!0) : (j(n), (0, $.F5)(o, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), C(!0));
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
        if (e9(J.current, Y)) return;
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
                    (0, mx.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = mI(e.response);
                        null != n && (j(n), (0, $.F5)(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let a = mv(e.element);
                            null != a && l.set(r.id, a);
                        }),
                            (0, $.AW)(o, l));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [Q, Y, x, m, o, r]),
        i.useEffect(() => {
            if (!Q)
                return () => {
                    (S(null), z(null), X(null), j(null));
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
                    mk(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mL(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && F(!0);
                            else {
                                let e = (0, lM.Sk)(t.target);
                                (D((t) => (mT(t, e) ? t : e)),
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
            if (null == G) return;
            let e = !K.current;
            (B({ at: G.at, label: G.label, draft: G.draft, instant: e }), W(e), z(null));
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
            if (null == U) return;
            let e = setTimeout(() => B(null), mR);
            return () => clearTimeout(e);
        }, [U]));
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
                    ((0, nc.xJ)(o, "design"),
                    X(null),
                    (K.current = !1),
                    z({ projectId: o, target: e, anchor: t, draft: "", at: n, label: (0, lM.Sk)(e) }));
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
                    (Math.abs(e.clientX - G.at.x) > mP || Math.abs(e.clientY - G.at.y) > mP) && (K.current = !0);
                    return;
                }
                if (!es) return void S(null);
                let t = ed(e, Y);
                if (q) {
                    let e = (0, lM.CZ)(eo, t.x, t.y),
                        n = null != e && mL(e, Y, ei) ? null : e;
                    if (null != n) {
                        let e = (0, lM.Sk)(n);
                        D((t) => (mT(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (ee.current = n), er());
            },
            [Y, ei, es, ed, q, eo, G, V, em, er],
        ),
        eh = null == V ? null : m.find((e) => e.id === V.id),
        eg = Q && (N || G?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && mk(e, mj);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (_(!1), S(null), (et.current = null), (ee.current = null));
    }, []);
    i.useEffect(() => {
        if (!Q || !N || !es || q || null != G || null != V) return;
        let e = P.current,
            { rect: t, scale: n } = eu.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (ee.current = l), er());
    }, [Q, N, es, q, G, V, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != G || null != V) {
                    (ea(), X(null));
                    return;
                }
                if (null == A || null == Y) return;
                let t = ed(e, Y);
                ec(A, (0, lM.Hm)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
            },
            [A, Y, ed, G, V, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != o && (S(null), (0, w.K7)(o)?.active === !0 ? (0, w.V9)(o) : (0, $.mB)(o));
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
                e0.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        e0.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, eJ.vq)(t) ||
                ew.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, mp.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || (0, w.K7)(ey.current)?.active !== !0) && ek.current());
        }
    }, [Q, s]);
    let eC = i.useCallback(
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
                    let n = null == A ? -1 : eo.findIndex((e) => e.ref === A.ref);
                    S(eo[(n + (t ? 1 : -1) + eo.length) % eo.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != A &&
                    (e.preventDefault(),
                    ec(A, lM.QU, { x: (Y?.left ?? 0) + A.rect.x * ei, y: (Y?.top ?? 0) + A.rect.y * ei }));
            },
            [o, G, V, eo, A, ec, ej, Y, ei],
        ),
        eA = i.useCallback(
            (e) => {
                null == o ||
                    null == G ||
                    (((0, lM.Ch)(G.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, e$.dv)(o, (0, lM.Q9)(G.target, G.draft), e), ea(), S(null)));
            },
            [o, G, ea],
        ),
        eS = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, e1.vX)(o, e)), [o]),
        eN = i.useCallback(() => {
            null == o ||
                null == V ||
                null == p ||
                ((0, lM.Ch)(V.draft) && ((0, $.pV)(o, p, V.id, V.draft.trim()), X({ ...V, editing: !1 })));
        }, [o, V, p]),
        eI = i.useCallback(() => {
            null != o && null != V && null != p && ((0, $.aC)(o, p, V.id), X(null));
        }, [o, V, p]),
        eE = u
            ? b
                ? E.intl.string(I.default["Eb/YV9"])
                : k
                  ? E.intl.string(I.default.FD30bh)
                  : E.intl.formatToPlainString(I.default.dTSqLF, { count: m.length })
            : "",
        e_ = Q && null != Y,
        eM = N && null == V,
        eR = G?.target ?? eh?.target ?? null,
        eP = G ?? U,
        eT = G ?? (U?.instant === !0 ? null : U),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = mN(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mS(eh.target, eh.anchor, Y, ei), Y)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            mk(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, eY.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: mw.Li,
                children: [
                    (0, a.jsx)(tQ.A, {
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
                                      className: mw.MT,
                                      style: { left: Y.left, top: Y.top, width: Y.width, height: Y.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(I.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eC,
                                  }),
                                  null != A && null == A.marker && null == G && null == V
                                      ? (0, a.jsx)(m$, { box: mA(A, Y, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: mw.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: mw.xz,
                                          "data-shown": null != A && null == V && null == G ? "" : void 0,
                                          "data-instant": H ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "body-xs/medium",
                                              className: mw.Ux,
                                              children: [
                                                  null == T
                                                      ? null
                                                      : (0, a.jsx)("span", { className: mw.Tl, children: T.kind }),
                                                  null == T || "" === T.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: mw.kh,
                                                            children: [" ", T.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: R,
                                      className: mw.Y,
                                      children: eM ? (0, a.jsx)("div", { className: mw.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: mw.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: mw.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == G ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "body-xs/medium",
                                                    className: mw.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: mw.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: mw.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, a.jsx)("div", { className: mw.D0, style: mA(eR, Y, ei), "aria-hidden": !0 })
                                      : null,
                                  m.map((e, t) => {
                                      let n = mS(e.target, e.anchor, Y, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mw.xL,
                                              style: { ...mN(n, Y), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(I.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: (0, lM.Bx)(e.target),
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
                                              children: (0, a.jsx)(m_, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == o
                                      ? null
                                      : (0, a.jsx)(e7, {
                                            projectId: o,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: Y,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != G && (0, lM.Ch)(eP.draft),
                                            onChange: (e) => {
                                                null != G && z({ ...G, draft: e });
                                            },
                                            onSubmit: eA,
                                            onDismiss: ea,
                                            onUploadFile: eS,
                                            closing: null == G,
                                        }),
                                  null != eh && null != V && null != eL
                                      ? (0, a.jsxs)(mM, {
                                            point: eL,
                                            frame: Y,
                                            authorId: eh.authorId,
                                            title: (0, lM.Bx)(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                V.confirmingRemove ? X({ ...V, confirmingRemove: !1 }) : X(null);
                                            },
                                            onMouseLeave: () => {
                                                V.editing || V.confirmingRemove || X(null);
                                            },
                                            children: [
                                                V.editing
                                                    ? (0, a.jsx)(np.f, {
                                                          autoFocus: !0,
                                                          label: E.intl.string(I.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: V.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => X({ ...V, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eN());
                                                          },
                                                      })
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: mw.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, $.It)(eh, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: mw.eB,
                                                          children: V.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mw.nv,
                                                                            children: E.intl.string(I.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(I.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                X({ ...V, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: E.intl.string(I.default.friIzR),
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
                                                                            text: E.intl.string(I.default.friIzR),
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
                                                                                  disabled: !(0, lM.Ch)(V.draft),
                                                                                  text: E.intl.string(I.default.iicRP9),
                                                                                  onClick: eN,
                                                                              })
                                                                            : (0, a.jsx)(d.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: E.intl.string(
                                                                                      I.default["6eW9lg"],
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
function m_(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nw.default], () => nw.default.getUser(t), [t]);
    return (0, a.jsx)(aG.eu, {
        src: null == n ? null : aU.Ay.getUserAvatarURL(n),
        size: az._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function mM(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(mC);
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
            originX: C,
            originY: A,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), r)), originX: u.x - s, originY: u.y - o }),
        S = { left: k, top: w, "--custom-conjure-card-origin-x": `${C}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: mw.Nr,
        style: S,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: mw.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: mw.ip, children: (0, a.jsx)(m_, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: mw.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: mw.zI, children: p }),
        ],
    });
}
let mR = 300,
    mP = 2;
function mT(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mL(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function m$(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: mw.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mD = n(318774),
    mq = n(91242),
    mF = n(697744),
    mO = n(130324);
function mG(e) {
    let t = (0, mF.c)(),
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
    let r = (0, tz.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mz(e) {
    let { className: t } = e,
        { Component: n, events: l } = mG(3e4);
    return (0, a.jsxs)("div", {
        className: u()(t, mO.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mO.ol,
                children: E.intl.string(I.default.AyiQEp),
            }),
        ],
    });
}
var mU = n(251363),
    mB = n(944142),
    mK = n(532247),
    mH = n(501628);
function mW(e) {
    let { progress: t } = e,
        { Component: n } = mG(1500),
        l = P.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mH.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mH.PM,
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
function mV(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([mB.A], () => (s ? mB.A.getLiveReload(t) : null), [s, t]),
        u = (0, eE.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        m = o?.background === !0,
        f = (function (e, t, n) {
            let l = (0, mK.dv)(e),
                [r, a] = i.useState(null),
                [s, o] = i.useState(l),
                [u, d] = i.useState(t);
            s !== l && (o(l), d(t), a(null != l || u ? null : (0, mK.QP)(e, s)));
            let m = (0, c.bG)(
                    [mq.A],
                    () => {
                        let e = mq.A.getFrame(n);
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
                        null != t.target && t.target === (0, mU.ow)(null, n) && e();
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
        h = m ? null : (0, mK.h_)(d, o?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tQ.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: mH.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mW, { progress: h }),
                  })
                : null,
        ],
    });
}
let mX = 0;
var mQ = n(782134),
    mZ = n(357858),
    mY = n(343030),
    mJ = n(11411),
    m0 = n(111518),
    m1 = n(240666);
let m2 = { width: 1 / 0, height: 1 / 0 };
function m3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m2;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var m4 = n(702083);
function m5(e) {
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
        m = n ? m3(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: u()(m4.dw, { [m4.PQ]: null != m }),
        children: (0, a.jsx)("div", { className: u()(m4.R9, { [m4.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var m7 = n(347927);
function m8(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: u()(m7.Bf, l && m7.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: m7.Ux,
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
var m9 = n(957272);
function m6(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, m0.A)({ applicationId: t, surface: n, launch: l });
    if (((0, m1.A)(t, n), s === m0.n.Launched)) {
        let e = (0, a.jsx)(mJ.A, { frameId: i.id, level: mY.A.WithinAppContent, className: m9.Z7, overlay: r });
        return (0, eM.Q5)(n) ? (0, a.jsx)(m5, { children: e }) : e;
    }
    return (0, a.jsx)(fe, { state: s });
}
function fe(e) {
    let { state: t } = e;
    switch (t) {
        case m0.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: m9.qs,
                children: (0, a.jsx)(m8, {
                    title: E.intl.string(I.default["9kpdo7"]),
                    body: E.intl.string(I.default.iIA8Nj),
                }),
            });
        case m0.n.NoApplication:
            return (0, a.jsx)(mz, { className: m9.qs });
        case m0.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: m9.qs,
                children: (0, a.jsx)(m8, {
                    title: E.intl.string(I.default["7k4GyN"]),
                    body: E.intl.string(I.default.zdIy3R),
                }),
            });
        case m0.n.Error:
            return (0, a.jsxs)("div", {
                className: m9.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: E.intl.string(I.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: m9.tj,
                        children: E.intl.string(I.default.e6GiAZ),
                    }),
                ],
            });
        case m0.n.AwaitingLaunch:
        case m0.n.Loading:
            return (0, a.jsx)("div", { className: m9.qs, children: (0, a.jsx)(j.y, {}) });
    }
}
var ft = n(308528),
    fn = n(334738),
    fl = n(5206),
    fr = n(365971),
    fa = n(703462);
function fi(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: fa.f,
        children: [
            (0, a.jsx)(eu.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fs() {
    return (0, a.jsx)("div", { className: fa.f, children: (0, a.jsx)(j.y, {}) });
}
function fo(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, o] = i.useState(null),
        u = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([ny.A], () => (null != u ? ny.A.getChannel(u) : null), [u]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && ft.A.preload(nS.ME, t);
        }, [t]),
        (n = (0, c.bG)([um.A], () => um.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fr.Xg)();
            return (
                (0, fn.yl)(t, e),
                () => {
                    (0, fn.dm)(t, e);
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
        ? (0, a.jsx)(fi, { message: E.intl.string(I.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(fs, {})
          : (0, a.jsx)("div", {
                className: fa.g,
                children: (0, a.jsx)(fl.A, { channel: d, guild: null, chatInputType: sB.oU.SIDEBAR }, d.id),
            });
}
var fu = n(765671),
    fc = n(596977),
    fd = n(921853),
    fm = n(582063);
function ff(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, W.vX)(t, n?.id ?? null);
    }
    let o = E.intl.string(I.default.Gl3XtE),
        u = E.intl.string(I.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: fm.aF,
        children: [
            (0, a.jsx)(ep.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(tn.K, {
                    icon: fd.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: fm.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: E.intl.formatToPlainString(I.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: E.intl.string(I.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(ep.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tn.K, {
                    icon: tY.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var fh = n(666476);
let fg = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function fp() {
    (0, A.P0)({ text: E.intl.string(I.default.jj3abP), variant: "critical" });
}
function fx(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(I.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eK.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(fv, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: fm.m2,
                        children: (0, a.jsx)(ep.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tn.K, {
                                "aria-label": r,
                                icon: g.SettingsIcon,
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
                accept: fg.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (fg.includes(n.type)
                                ? n.size > fh.aI
                                    ? (0, A.P0)({ text: E.intl.string(I.default.T8Spiu), variant: "critical" })
                                    : (0, r4.M$)(t, n).catch(fp)
                                : (0, A.P0)({ text: E.intl.string(I.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fv(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([r3.A], () => r3.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(uH.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(I.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(uW.rX, {
                children: [
                    (0, a.jsx)(uW.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(I.default.uQpDky),
                        icon: lg.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(uW.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(I.default.AiAz8J),
                        icon: dU.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, r4.Og)(t).catch(fp));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(uW.rX, {
                children: (0, a.jsx)(uW.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(I.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, r4.Y1)(t, !i) || fp();
                    },
                }),
            }),
        ],
    });
}
function fj(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: o, height: u } = (0, fu.Ay)(),
        { captures: c, selected: d } = r2(n),
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
        i.useEffect(() => (0, fc.L0)(), []),
        (0, a.jsxs)("div", {
            className: fm.JH,
            children: [
                (0, a.jsx)(r7, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: fm.dw,
                    children: (0, a.jsx)("div", {
                        className: fm.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${m.top}px`,
                            "--custom-conjure-overlay-widget-end": `${m.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(m.scale),
                        },
                        children: (0, a.jsx)(m6, { applicationId: t, surface: eM.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(fx, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(ff, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function fb(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(m8, {
        title: E.intl.string(I.default.xlEjZ8),
        body: E.intl.string(I.default["4ByPbd"]),
        children: (0, a.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: E.intl.string(I.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var fy = n(409478),
    fk = n(652227);
function fw(e) {
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
        x = (0, c.bG)([lJ.A], () => null != f && null != lJ.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: fk.qs, children: (0, a.jsx)(j.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: fk.qs,
                children: (0, a.jsx)(fb, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: fk.RG,
                      children: [
                          (0, et.yf)(o, u)
                              ? g
                                  ? (0, a.jsx)(fC, { projectId: f, onResume: p })
                                  : (0, a.jsx)(m6, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === u && null != d
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: fk.qs,
                                        children: (0, a.jsx)(m8, {
                                            wide: !0,
                                            title: E.intl.string(I.default["08U+YO"]),
                                            body: E.intl.string(I.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(fy.A, { applicationId: d })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(fj, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(eR.ZN) })
                              : null,
                          "bot" === u && null != n && null != f
                              ? (0, a.jsx)(fo, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: fk.qs, children: (0, a.jsx)(j.y, {}) })
              : (0, a.jsx)(mz, { className: fk.qs });
}
function fC(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mZ.Pu)(t),
        (0, a.jsx)("div", {
            className: fk.qs,
            children: (0, a.jsx)(m8, {
                wide: !0,
                title: E.intl.string(I.default.MMWEH2),
                body: E.intl.string(I.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mQ.PlayIcon,
                              text: E.intl.string(I.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var fA = n(156548),
    fS = n(750506),
    fN = n(867193),
    fI = n(539197),
    fE = n(977020);
function f_(e) {
    let { projectId: t } = e,
        n = (0, fI.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fI.Ie)(e);
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
        className: fE.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [fI.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: u()(fE.hN, fE.vW), style: m(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: u()(fE.hN, fE.A7), style: m(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: u()(fE.UE, { [fE.SP]: n.shown, [fE.Vq]: n.pressed, [fE.GP]: n.dipping }),
                style: m(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fM = n(417760);
function fR(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([rn.A], () => null != e && rn.A.isThinking(e)),
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
        o = (0, L.CU)(n),
        m = "controlling" === t,
        f = E.intl.string(m ? (o ? I.default["VJW/5P"] : I.default["+hD2Iz"]) : I.default["h+i1r9"]),
        h =
            null != r
                ? (0, a.jsx)(d.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: E.intl.string(I.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: u()(fM.M0, fM.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  m
                      ? (0, a.jsx)(ca.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(iW.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "none", className: fM.ID, children: f }),
                  m ? (0, a.jsx)(tQ.A, { children: E.intl.string(I.default.fg1sor) }) : null,
                  m ? (0, a.jsx)("div", { className: fM.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fM.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fM.sp,
                      children: [
                          (0, a.jsx)(iW.SparklesIcon, { size: "sm", color: "currentColor" }),
                          m ? (0, a.jsx)(ca.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fM.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: fM.w9,
                                      children: f,
                                  }),
                                  m
                                      ? (0, a.jsx)(v.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: fM.Rb,
                                            children: E.intl.string(I.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  m ? (0, a.jsx)("div", { className: fM.lC, children: h }) : null,
              ],
          });
}
function fP(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, L.Zv)(null != n && n === l ? t : null),
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
        c = (0, O.Rv)(),
        d = (0, fA.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, fA.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = e8(r());
            f((t) => (e9(t, e) ? t : e));
            let t = null == h ? null : e8(h);
            (x((e) => (e9(e, t) ? e : t)), null != h && (0, fN.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fN.C)(0));
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
            let [e] = i.useContext(fS.uY),
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
                      className: fM.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: fM.QF,
                          children: (0, a.jsx)(fR, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, eY.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(tQ.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? E.intl.string(I.default.oWcemF)
                                : "handoff" === u
                                  ? E.intl.string(I.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, eY.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: fM.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fM.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(f_, { projectId: t }),
                          ],
                      }),
                      C,
                  )
                : null,
        ],
    });
}
var fT = n(399503),
    fL = n(853555),
    f$ = n(944100),
    fD = n(327152),
    fq = n(187645);
let fF = { width: 1280, height: 720 },
    fO = new Map(),
    fG = !1;
function fz() {
    let e = new Map();
    for (let t of new Set([...rn.A.getActivityOrderedProjectIds(), ...(0, L.T7)()])) {
        if (!(rn.A.isThinking(t) || (0, L.wK)(t)) || V.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eN.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, eM.Rc)(t), (0, eM.Th)(t)].find(eR.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fO]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fO.delete(t),
            n.unregisterLookup(),
            f$.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, fD.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        fO.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fq.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fU(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fO.set(e, l),
                    (l.unregisterLookup = (0, fL.Ng)(e, () => (0, mU.n5)(n, t))),
                    f$.A.registerFrameTarget(t, n, mY.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of fO) fU(t.element, e, t.frameId);
}
function fU(e, t, n) {
    if (mq.A.getFrame(n)?.surface.type === en.U.OVERLAY) {
        let l = J(eN.Ay.getProject(t));
        (e.classList.remove(fq.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, fD.Pn)(n, l));
        return;
    }
    let l = e_.A.isBuilderPreviewMobile();
    e.classList.toggle(fq.L, !l);
    let r = l ? m3(e_.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, fD.Pn)(n, r ?? fF));
}
var fB = n(873727),
    fK = n(47671),
    fH = n(418842),
    fW = n(413599);
let fV = 0;
var fX = n(487887);
let fQ = null;
var fZ = n(541940);
function fY(e) {
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
        let n = (0, c.bG)([fW.A], () => (0, fB.x4)(fW.A.theme)),
            l = (0, c.bG)([fK.A], () => fK.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([aF.Ay], () => ({
                reducedMotion: aF.Ay.useReducedMotion,
                fontScale: (0, fB.U0)(),
                highContrast: aF.Ay.isHighContrastModeEnabled,
                forcedColors: aF.Ay.useForcedColors,
                underlineLinks: aF.Ay.alwaysShowLinkDecorations,
            })),
            d = P.hH.useSetting(),
            m = (0, c.bG)([sq.A], () => sq.A.hidePersonalInformation),
            f = (0, fH.C)(),
            h = (0, c.bG)(
                [mq.A, e_.A],
                () =>
                    e_.A.isBuilderPreviewMobile() &&
                    mq.A.getFrame(t)?.applicationId === e_.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = i.useRef(!1),
            p = i.useRef(!1),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, mU.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++fV,
                    baseTheme: n,
                    customTheme: (0, fB.Lq)(),
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
                (0, my.W)(l, "set-env", i, {
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
                let n = (0, mU.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, mU.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, fL.Ng)(t, () => (0, mU.n5)(j, k));
        }, [t, j, k]));
    let w = i.useCallback(() => (0, mU.ow)(j, k), [j, k]),
        C = i.useCallback(() => (x ? (0, mU.ow)(j, k) : j), [x, j, k]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: u()(fZ.Mh, o),
                children: [
                    d,
                    m,
                    v
                        ? null
                        : (0, a.jsx)(fP, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: C,
                              frameId: k,
                          }),
                    (0, a.jsx)("div", {
                        ref: b,
                        id: f,
                        role: null == f ? void 0 : "tabpanel",
                        "aria-labelledby": h,
                        className: fZ.fm,
                        children: g,
                    }),
                ],
            }),
            p,
            v
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mE, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: w,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(t$, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: w }),
                      ],
                  }),
        ],
    });
}
function fJ(e) {
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
            previewGate: C,
            availability: A,
            activeMode: S,
            widgetApplicationId: N,
            overlayWidgetSize: I,
            previewPaused: E = !1,
            onResumePreview: _,
        } = e;
    (0, fT.k)(n, N);
    let M = o.type === en.U.MAIN || (0, eM.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([e_.A], () => ({
            mobile: e_.A.isBuilderPreviewMobile(),
            landscape: e_.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fX.aX.LANDSCAPE : fX.aX.PORTRAIT), (fQ = e));
                else {
                    if (fQ !== e) return;
                    ((l = fX.aX.UNHANDLED), (fQ = null));
                }
                o8.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let R = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, tq.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, tq.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            M && ((t.current = ++mX), (0, W.HV)(r));
        }, [r, M]),
        i.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === mX && (0, W.HV)(null);
            };
        }, [r, M]),
        i.useEffect(() => {
            null != n &&
                ((0, e$.ensureConnection)(n),
                fG ||
                    ((fG = !0),
                    rn.A.addChangeListener(fz),
                    eN.Ay.addChangeListener(fz),
                    mq.A.addChangeListener(fz),
                    e_.A.addChangeListener(fz),
                    V.A.addChangeListener(fz),
                    (0, L.W3)(fz),
                    fz()));
        }, [n]),
        i.useLayoutEffect(() => {
            let e = R.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let $ = Math.max(450, P - 320),
        D = (0, eZ.P)({ maxWidth: $, minWidth: 450 }),
        q = p || M;
    return (0, a.jsx)("div", {
        className: fZ.cL,
        children: (0, a.jsx)("div", {
            ref: R,
            className: fZ.LB,
            children: (0, a.jsx)(fY, {
                projectId: n,
                designFeedbackToggleRef: l,
                applicationId: r,
                previewApplicationId: s,
                surface: o,
                header: m,
                controlBar: f,
                previewPanelId: h,
                previewPanelLabelledBy: g,
                showsFrame: (0, et.yf)(A, S),
                paused: E,
                mainClassName: null == m ? void 0 : u()(fZ.ez, { [fZ.zt]: p }),
                content: (0, a.jsx)(fw, {
                    applicationId: r,
                    previewApplicationId: s,
                    surface: o,
                    frameLaunchParams: d,
                    previewReady: w,
                    previewGate: C,
                    availability: A,
                    activeMode: S,
                    widgetApplicationId: N,
                    overlayWidgetSize: I,
                    projectId: n,
                    paused: E,
                    onResume: _,
                    renderFrameOverlay: (e) =>
                        (0, a.jsx)(mV, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                }),
                sidebar:
                    null != n && q
                        ? (0, a.jsx)("div", {
                              className: p ? u()(fZ.v7, { [fZ.z4]: D }) : fZ.LL,
                              children: (0, a.jsx)(eX.A, {
                                  sidebarType: eX.X.CallChatSidebar,
                                  maxWidth: $,
                                  capturePointer: !0,
                                  children: (0, a.jsx)("div", {
                                      className: fZ.cO,
                                      children: b
                                          ? (0, a.jsx)(mg, { projectId: n, onClose: y ?? (() => {}) }, n)
                                          : (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(mD.Ay, { projectId: n }),
                                                    (0, a.jsx)(f0, { onClose: x }),
                                                    (0, a.jsx)("div", {
                                                        className: fZ.cb,
                                                        children: (0, a.jsx)(
                                                            cM,
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
function f0(e) {
    let { onClose: t } = e,
        n = E.intl.string(I.default.vLoFRs),
        l = E.intl.string(I.default.JD6Oit);
    return (0, a.jsx)(eQ.Ay, {
        "aria-label": n,
        toolbar: (0, a.jsx)(eQ.Ay.Icon, { icon: eV.PanelClosedIcon, tooltip: l, "aria-label": l, onClick: t }),
        children: (0, a.jsx)(eQ.Ay.Title, { children: n }),
    });
}
var f1 = n(663417),
    f2 = n(646270),
    f3 = n(31300),
    f4 = n(113494),
    f5 = n(831453),
    f7 = n(872344),
    f8 = n(64656),
    f9 = n(766367),
    f6 = n(705609);
function he(e) {
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
            previewTargetOptions: x,
            handleSelectPreviewTarget: j,
            previewFrame: b,
            refreshFrame: y,
            isRefreshing: k,
            handleRefresh: C,
            mobilePreview: A,
            mobilePreviewLabel: S,
            handleToggleMobilePreview: N,
            landscapePreview: _,
            rotatePreviewLabel: M,
            handleRotatePreview: R,
        } = l,
        P = (0, f8.A)(b?.id),
        { pending: T, refresh: L } = (0, f7.A)(c),
        $ = (0, w.lQ)(t) && !d,
        D = null;
    if ("widget" === r) {
        if (null != c) {
            let e = E.intl.string(I.default["/nOi5n"]);
            D = (0, a.jsx)(eQ.Ay.Icon, { icon: f1.RefreshIcon, tooltip: e, "aria-label": e, disabled: T, onClick: L });
        }
    } else if ((0, eR.x1)(y)) {
        let e = E.intl.string(I.default.FZIHQN);
        D = (0, a.jsx)(eQ.Ay.Icon, { icon: f1.RefreshIcon, tooltip: e, "aria-label": e, disabled: k, onClick: C });
    }
    let q = E.intl.string(d ? I.default.ZKd2Cw : I.default.VHxerm),
        F = g(S),
        O = g(M),
        G = A ? f2.MobilePhoneIcon : f3.ScreenIcon;
    return (0, a.jsxs)("div", {
        className: f6.M0,
        children: [
            (0, a.jsx)(ek, {
                targets: x,
                activeTarget: i,
                projectName: n,
                onSelect: j,
                closableTarget: P ? s : null,
                onClose: o,
                panelId: p,
            }),
            (0, a.jsxs)("div", {
                className: f6.o1,
                children: [
                    D,
                    "frame" === r
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(f9.A, { frame: b }),
                                  (0, a.jsx)(eQ.Ay.Icon, {
                                      icon: d ? mQ.PlayIcon : f4.PauseIcon,
                                      tooltip: $ ? E.intl.string(I.default.WjdaFw) : q,
                                      "aria-label": q,
                                      disabled: (!d && f) || $,
                                      onClick: m,
                                  }),
                                  A
                                      ? (0, a.jsx)(eQ.Ay.Icon, {
                                            icon: f5.RotateIcon,
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
                                          className: u()(f6.ZB, { [f6.xD]: h }),
                                          onClick: h ? void 0 : N,
                                          "aria-label": F,
                                          "aria-disabled": h,
                                          children: [
                                              (0, a.jsx)(G, { size: "sm", color: "currentColor" }),
                                              (0, a.jsx)(v.E, {
                                                  variant: "body-sm/medium",
                                                  color: "none",
                                                  children: E.intl.string(A ? I.default.peqEOY : I.default.tKGF0Q),
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
var ht = n(563339),
    hn = n(606128),
    hl = n(323140);
function hr(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: j, guildId: _, inServer: M = !1 } = e,
        P = i.useContext(B.A),
        [Q] = i.useState(() => (null != P ? H.A.getProjectView(P) : null)),
        [Z, Y] = i.useState(Q?.chatOpen ?? !0),
        [el, er] = i.useState(Q?.debugOpen ?? !1);
    i.useEffect(() => {
        null != P && (0, K.g7)(P, { chatOpen: Z, debugOpen: el });
    }, [P, Z, el]);
    let ea = i.useCallback(
            (e) => {
                null != P && (0, K.g7)(P, { previewSelection: e });
            },
            [P],
        ),
        ei = T(),
        eo = (0, D.f)("ConjureSelectedProjectScreen"),
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
                                (0, z.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, A.P0)({
                                                        text: E.intl.formatToPlainString(I.default.Z4n6LX, {
                                                            title: (0, G.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, U.c)(u, r);
                                                null != e && (0, A.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, A.P0)({
                                                    text: E.intl.string(I.default["PSdo+w"]),
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
        {
            integrationStatus: eh,
            isPreviewApplicationLoading: eg,
            checkingIntegration: ep,
            previewReady: ex,
            hasFrame: ev,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [eN.Ay, eS.A],
                    () => (null == l ? null : (eN.Ay.getIntegrationStatus(l) ?? eS.A.getIntegrationStatus(l))),
                    [l],
                ),
                o = e?.preview_application_id ?? null,
                { isLoading: u } = (0, eC.YY)(o ?? void 0),
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
                            await (0, eC.TA)(e);
                        } catch {}
                    })(o);
            }, [h, d, g, o]);
            let p = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, eA.CG)(l)?.catch(() => (0, eA.U1)(l, e.signal)) ?? (0, eA.U1)(l, e.signal));
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
        eb =
            (0, c.bG)([eD.A], () => (null == ef ? void 0 : eD.A.getPublishStatus(ef)?.previewAppChannels), [ef]) ??
            eh?.preview_app_channels,
        {
            availability: ey,
            activeMode: ek,
            setMode: eB,
            frameSurface: eK,
            frameSurfaceOptions: eH,
            setFrameSurface: eV,
            appChannel: eX,
            setAppChannel: eQ,
            frameLaunchParams: eZ,
            widgetApplicationId: eY,
        } = (0, es.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ev,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: eh?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(X.q7.OVERLAY) === !0,
            previewAppChannels: eb,
            initialSelection: Q?.previewSelection,
            onSelectionChange: ea,
        }),
        eJ = J(s);
    ((0, ee.x)(ef, (e) => {
        ey.modes.includes(e) && eB(e);
    }),
        R(ef, () => {
            (Y(!0), er(!0));
        }));
    let e0 = ey.modes.includes("frame"),
        e1 = (0, c.bG)([V.A], () => V.A.isPaused(ef), [ef]),
        e2 = (function (e) {
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
                g = E.intl.string(h ? I.default.tKGF0Q : I.default.peqEOY),
                p = i.useCallback(() => (0, W.GG)(!h), [h]),
                x = (0, c.bG)([e_.A], () => e_.A.isBuilderPreviewLandscape()),
                v = E.intl.string(x ? I.default.tunI2l : I.default.DoNdjA),
                j = i.useCallback(() => (0, W.Lw)(!x), [x]),
                b = (0, eM.jS)(t),
                y = i.useMemo(() => (0, eM.Op)(b, r), [b, r]),
                k = (0, eE.A)(t?.preview_application_id ?? null, y),
                w = (0, eE.A)(t?.preview_application_id ?? null, eR.ZN),
                C = "overlay" === l ? w : k,
                A = (0, eR.x1)(C) && C.data.proxyTicketRefreshing,
                S = i.useCallback(() => {
                    null == C || A || eI.A.refreshProxyTicket(C.id);
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
            modes: ey.modes,
            activeMode: ek,
            frameSurface: eK,
            frameSurfaceOptions: eH,
            previewAppChannels: eb,
            setMode: eB,
            setFrameSurface: eV,
            setAppChannel: eQ,
        }),
        { previewSurface: e3, previewFrame: e4 } = e2,
        e5 = (0, b.A)(e4),
        e7 = e0 && !e1,
        e8 = (0, w.lQ)(ef),
        e9 = e5.isPoppedOut ? I.default.pmkK8i : e1 ? I.default.Yet11p : null,
        e6 = null != e9;
    function te(e) {
        return null == e9 ? e : E.intl.formatToPlainString(e9, { label: e });
    }
    let tt = i.useCallback(() => Y(!1), []),
        {
            designFeedbackActive: tn,
            designFeedbackToggleRef: tl,
            agentDrivingPreview: tr,
            designFeedbackLabel: ta,
            handleToggleDesignFeedback: ti,
        } = (function (e, t, n) {
            let { active: l } = (0, $.rt)(e);
            i.useEffect(() => {
                null != e && l && !t && (0, $.mB)(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, L.Zv)(e),
                s = E.intl.string(a ? I.default.Sme0T0 : l ? I.default.vn5Rzu : I.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void (0, $.mB)(e);
                        (n(), (0, $.w4)(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(ef, e7 && (!e5.isPoppedOut || e8), ec),
        [ts] = i.useState(() => k.isPlatformEmbedded && (0, ew.qM)());
    i.useEffect(() => {
        null != ef && e8 && !e7 && (0, w.It)(ef);
    }, [ef, e8, e7]);
    let to = i.useCallback(() => {
            null != ef && (ec(), (0, w.c$)(ef), (0, w.rC)(ef, "marker"));
        }, [ef, ec]),
        tu = i.useCallback(() => {
            null != ef && (0, w.V9)(ef);
        }, [ef]),
        tc =
            e6 && !e8
                ? te(E.intl.string(I.default["XWU+XF"]))
                : E.intl.string(e8 ? I.default.tuQ5f3 : tr ? I.default.agwlrD : I.default["XWU+XF"]),
        td = e6 ? te(E.intl.string(I.default["cl/Jyl"])) : ta,
        tm = i.useCallback(() => {
            er((e) => !e && (Y(!0), !0));
        }, []),
        tf = i.useCallback(() => er(!1), []),
        th = i.useCallback(() => {
            null != ef && (0, W._j)(ef);
        }, [ef]),
        tg = i.useCallback(() => {
            null != ef && (e1 ? (0, W._j)(ef) : (0, W.di)(ef, e4?.id));
        }, [ef, e1, e4?.id]),
        tp = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = e4?.id), (0, e$.Bn)(e), (0, eL.r)(t)), j());
        }, [s, e4?.id, j]),
        tx =
            ((t = (0, N.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, S.vt)(e);
                    null != n
                        ? (0, A.P0)({ text: n, variant: "critical" })
                        : (0, C.A)({
                              title: E.intl.formatToPlainString(I.default["Gm+u1+"], { name: s.name }),
                              subtitle: E.intl.string(I.default.M7H3sJ),
                              confirmText: E.intl.string(I.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  eu();
                                  try {
                                      await (0, S.Hj)(t, e, E.intl.string(I.default.Owerd3));
                                  } catch {
                                      (0, A.P0)({ text: E.intl.string(I.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, eu],
            )),
            { onExport: t, onImport: (r = (0, S.yN)(l)).open, importInput: r.input }),
        tv = i.useCallback(() => {
            null != s && (0, ez.A)(s, _);
        }, [s, _]),
        tj = i.useCallback(async () => {
            null != ef && (await (0, eF.vL)(ef, _));
        }, [_, ef]),
        tb = (0, et.aN)(ek, {
            installScope: s?.install_scope ?? null,
            previewReady: ex,
            integrationInstalled: eh?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tj, loading: eg }
            : ep && null == eh
              ? { type: "checking" }
              : void 0,
        ty = (0, c.bG)([eN.Ay], () => null != ef && eN.Ay.isProjectDeleting(ef), [ef]);
    i.useEffect(() => {
        ((null == s && o) || ty) && j();
    }, [s, o, ty, j]);
    let {
            publishOptions: tk,
            publish: tw,
            publishing: tC,
            confirmation: tA,
            variant: tS,
            text: tN,
            pendingChanges: tI,
        } = (0, eG.A)(ef, _, ep || eg),
        tE = (0, eO.A)(ef, tw, tk),
        t_ = "frame" === ek && !e1 && (0, eR.x1)(e4) && (e5.isPoppedOut || e5.canPopout),
        tM = i.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: ed?.status === "restoring",
                    onRestoreVersion: (e, t) => em(e, t, !0),
                }),
                    (0, O.mM)(async () => {
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
    (0, F.z)(ef, tM);
    let tR = null == s ? void 0 : () => (0, eU.A)(s.id, { guildId: _, isPreview: !0, publishOptions: tk }),
        tP = ey.modes.includes("widget") && "unavailable-authorization-revoked" !== ey.profileState ? eY : null,
        tT =
            null == s
                ? null
                : (0, a.jsx)(eT.A, {
                      ...(0, eP.A)(s, _),
                      hideProjectSettings: !0,
                      fullscreenFrame: "frame" !== ek || e1 ? null : e4,
                      onTogglePopout: t_ ? (e5.isPoppedOut ? e5.popIn : e5.popOut) : void 0,
                      poppedOut: e5.isPoppedOut,
                      onToggleDebug: ei ? tm : void 0,
                      debugOpen: el,
                      onExport: tx.onExport,
                      onImport: tx.onImport,
                      onRemix: tv,
                      onConnectTool: eo ? () => (0, q.A)(s.id) : void 0,
                      onHistory: tM,
                      previewProjectId: s.id,
                  }),
        tL = null != tw && null != s && ("primary" === tS || tC || null != tA),
        t$ = tL
            ? (0, a.jsx)("div", {
                  className: hl.As,
                  onMouseDown:
                      null == ef || tw.disabled || tC
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, eq.dx)(ef);
                            },
                  children: (0, a.jsx)(d.$, {
                      size: "sm",
                      variant: "primary",
                      icon: tC ? ha : null != tA ? m.CheckmarkSmallIcon : void 0,
                      text: tN,
                      onClick: () => tE("header"),
                  }),
              })
            : null,
        tD = E.intl.string(I.default.FzfmQ8),
        tq = E.intl.string(I.default.xjJAQm),
        tF = (0, a.jsx)(ht.A, {
            title: s?.name ?? E.intl.string(I.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tR,
            hideShareTarget: M,
            draft: tI,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: hl.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: hl.w7,
                                  children: [
                                      t$,
                                      (0, a.jsx)(eW, { projectId: s.id, variant: tL ? "secondary" : "primary" }),
                                  ],
                              }),
                              e0
                                  ? ts
                                      ? (0, a.jsx)(y.A.Icon, {
                                            icon: f.PencilIcon,
                                            tooltip: tc,
                                            "aria-label": tc,
                                            selected: e8,
                                            disabled: (e6 || tr) && !e8,
                                            onClick: e8 ? tu : to,
                                        })
                                      : (0, a.jsx)(y.A.Icon, {
                                            ref: tl,
                                            icon: h.ExperimentalDirectSelectIcon,
                                            iconClassName: hl.D8,
                                            tooltip: td,
                                            "aria-label": td,
                                            selected: tn,
                                            disabled: e6 || tr,
                                            onClick: ti,
                                        })
                                  : null,
                              (0, a.jsx)(y.A.Icon, {
                                  icon: g.SettingsIcon,
                                  tooltip: tD,
                                  "aria-label": tD,
                                  onClick: tR,
                              }),
                              tT,
                              Z
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("div", { className: hl.YJ, "aria-hidden": !0 }),
                                            (0, a.jsx)(y.A.Icon, {
                                                icon: p.PanelOpenIcon,
                                                tooltip: tq,
                                                "aria-label": tq,
                                                onClick: eu,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        }),
        tO = i.useId(),
        tG = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null == e
                ? null
                : "frame" !== e
                  ? { mode: e }
                  : null == n
                    ? { mode: e, surface: t }
                    : { mode: e, surface: t, appChannel: n };
        })(ek, eK, eX),
        tz =
            null == s
                ? null
                : (0, a.jsx)(he, {
                      projectId: s.id,
                      projectName: s.name,
                      toolbar: e2,
                      activeMode: ek,
                      activeTarget: tG,
                      frameTarget: { mode: "frame", surface: eK, ...(null == eX ? {} : { appChannel: eX }) },
                      onCloseApp: tp,
                      widgetRefreshApplicationId: tP,
                      previewPaused: e1,
                      onTogglePreviewPaused: tg,
                      agentDrivingPreview: tr,
                      previewControlsBlocked: e6,
                      blockedPreviewControlLabel: te,
                      previewPanelId: tO,
                  });
    return (0, a.jsxs)("div", {
        className: u()(hl.nj, hn.T),
        children: [
            tx.importInput,
            (0, a.jsx)("main", {
                className: hl.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: hl.j5,
                              children: [
                                  tF,
                                  (0, a.jsxs)("div", {
                                      className: hl.sD,
                                      children: [
                                          (0, a.jsx)(x.D, {
                                              variant: "heading-lg/semibold",
                                              children: E.intl.string(I.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              children: E.intl.string(I.default.fINulo),
                                          }),
                                          (0, a.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(I.default["WFJ/vb"]),
                                              onClick: () => (0, eA.listProjects)(_),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(eF.bI.Provider, {
                              value: tk,
                              children: (0, a.jsx)(
                                  fJ,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: tl,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: e3,
                                      frameLaunchParams: eZ,
                                      header: tF,
                                      controlBar: tz,
                                      previewPanelId: tO,
                                      previewPanelLabelledBy: null == tG ? void 0 : ej(tO, tG),
                                      chatOpen: Z,
                                      onCloseChat: tt,
                                      debugOpen: ei && el,
                                      onCloseDebug: tf,
                                      onRestoreVersion: em,
                                      onImportProject: (0, eN.PV)(s) ? tx.onImport : void 0,
                                      restoreState: ed,
                                      previewReady: ex,
                                      previewGate: tb,
                                      availability: ey,
                                      activeMode: ek,
                                      widgetApplicationId: eY,
                                      overlayWidgetSize: eJ,
                                      previewPaused: e1,
                                      onResumePreview: th,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function ha() {
    return (0, a.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: hl.Hv, itemClassName: hl.C5 });
}
