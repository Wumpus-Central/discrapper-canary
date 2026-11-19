n.d(t, { A: () => fH });
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
    B = n(967008),
    U = n(777847),
    K = n(227007),
    H = n(398773),
    W = n(735769),
    V = n(513845),
    X = n(802905),
    Q = n(951178);
let Z = { width: 320, height: 240 };
function Y(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : Z;
}
function J(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function ee(e) {
    return Y(e?.preview_overlay_widget ?? null);
}
var et = n(855859),
    en = n(238490),
    el = n(991690);
function er(e) {
    return e
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-+|-+$/g, "");
}
var ea = n(696645);
function ei(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function es(e, t) {
    if ("bot" === e.mode) return E.intl.string(I.default.gThNz6);
    if ("frame" === e.mode && e.surface === el.U.APP_CHANNEL) {
        let n = e.appChannel ?? er(t);
        if ("" !== n) return `#${n}`;
    }
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, ea.X)(e.surface)
                : E.intl.formatToPlainString(I.default["6xVl+N"], {
                      surface: (0, ea.X)(e.surface),
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
var eo = n(939398),
    eu = n(52724),
    ec = n(323384),
    ed = n(983851),
    em = n(794083),
    ef = n(861004),
    eh = n(687966),
    eg = n(430392),
    ep = n(939249),
    ex = n(866665),
    ev = n(789645),
    ej = n(388155);
function eb(e, t) {
    return `${e}-tab-${ei(t).replace(/\s+/g, "-")}`;
}
function ey(e, t) {
    let n = e.getBoundingClientRect(),
        l = t.getBoundingClientRect();
    l.left < n.left ? (e.scrollLeft -= n.left - l.left) : l.right > n.right && (e.scrollLeft += l.right - n.right);
}
let ek = { [el.U.APP_CHANNEL]: ec.AppsIcon, [el.U.VOICE_CHANNEL]: ed.VoiceNormalIcon, [el.U.MAIN]: em.ActivitiesIcon };
function ew(e) {
    let { targets: t, activeTarget: n, projectName: l, onSelect: r, closableTarget: s, onClose: o, panelId: c } = e,
        d = null == n ? null : ei(n),
        m = null == s ? null : ei(s),
        f = t.findIndex((e) => ei(e) === m),
        h = t.some((e) => ei(e) === d) ? d : t.length > 0 ? ei(t[0]) : null,
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
                for (let e of (i.observe(t), t.querySelectorAll(`.${ej.Mf}`))) i.observe(e);
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
        let l = (0, eu.C)({
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
            n = e.currentTarget.closest(`.${ej.Mf}`);
        null != t && null != n && ey(t, n);
    }
    i.useLayoutEffect(() => {
        let e = p.current,
            t = j.current;
        null != e && null != t && ey(e, t);
    }, [d]);
    let w = f < 0 ? null : es(t[f], l);
    return (0, a.jsxs)("div", {
        ref: p,
        className: u()(ej.vR, { [ej.e$]: b.left, [ej.Rh]: b.right }),
        children: [
            (0, a.jsx)("div", {
                ref: x,
                className: ej.gj,
                role: "tablist",
                "aria-label": E.intl.string(I.default.I2ucou),
                children: t.map((e, t) => {
                    let n = ei(e),
                        i = n === d,
                        s = es(e, l),
                        o = (function (e) {
                            switch (e.mode) {
                                case "frame":
                                    return ek[e.surface];
                                case "widget":
                                    return ef.UserSquareIcon;
                                case "overlay":
                                    return eh.GameControllerIcon;
                                case "bot":
                                    return eg.RobotIcon;
                            }
                        })(e);
                    return (0, a.jsx)(
                        "div",
                        {
                            ref: i ? j : void 0,
                            className: u()(ej.Mf, { [ej.yR]: i, [ej.P5]: t === f, [ej.h5]: f >= 0 && t > f }),
                            children: (0, a.jsxs)(ep.D, {
                                id: eb(c, e),
                                className: ej.eg,
                                role: "tab",
                                "aria-selected": i,
                                "aria-controls": i ? c : void 0,
                                tabIndex: n === h ? 0 : -1,
                                onClick: () => r(e),
                                onKeyDown: y,
                                onFocus: k,
                                children: [
                                    (0, a.jsx)(o, { size: "sm", color: "currentColor", className: ej.Ll }),
                                    (0, a.jsx)(v.E, {
                                        variant: "body-sm/medium",
                                        color: "none",
                                        lineClamp: 1,
                                        className: ej.Gn,
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
                ? (0, a.jsx)(ex.m, {
                      position: "bottom",
                      text: g,
                      ariaHidden: !0,
                      children: (0, a.jsx)(ep.D, {
                          className: ej.b,
                          onClick: o,
                          "aria-label": `${g}, ${w}`,
                          children: (0, a.jsx)(ev.XSmallIcon, { size: "sm", color: "currentColor" }),
                      }),
                  })
                : null,
        ],
    });
}
var eC = n(27184),
    eA = n(627363),
    eS = n(233470),
    eN = n(153207),
    eI = n(260498),
    eE = n(625180),
    e_ = n(672929),
    eM = n(111534),
    eR = n(754027),
    eP = n(165610),
    eT = n(174865),
    eL = n(822588),
    e$ = n(457827),
    eD = n(540665),
    eq = n(722701),
    eF = n(962998),
    eO = n(826058),
    eG = n(50181),
    ez = n(719593),
    eB = n(95264),
    eU = n(616334),
    eK = n(405433),
    eH = n(265872),
    eW = n(811587);
function eV(e) {
    let { projectId: t, variant: l } = e,
        { canShare: r, firstShare: s } = (0, c.cf)(
            [eI.Ay, eq.A],
            () => {
                let e = eI.Ay.getProject(t),
                    n = eq.A.getPublishStatus(t)?.publishState,
                    l = null != e && (0, eI.PV)(e),
                    r = null != e && null != n && (l ? "nothing_built" !== n : (0, eW.lE)(n));
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
                  icon: eK.ShareIcon,
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
            : (0, a.jsx)(eH.Q, {
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
                              icon: eK.ShareIcon,
                              text: E.intl.string(E.t.RDE0Sc),
                              onClick: t,
                          }),
                      });
                  },
              })
        : null;
}
var eX = n(450030),
    eQ = n(812771),
    eZ = n(58736),
    eY = n(743898);
(n(134528), n(947204));
var eJ = n(333007),
    e0 = n(621466),
    e1 = n(775121),
    e2 = n(989145),
    e3 = n(81369),
    e4 = n(826745),
    e5 = n(34595),
    e7 = n(470779);
function e8(e) {
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
        } = (0, e5.FM)({ projectId: t, surface: "design", onUploadFile: h }),
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
        className: u()(e7.M0, { [e7.ho]: _ && !f, [e7.ET]: f }),
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
                              className: e7.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(ex.m, {
                              position: "bottom",
                              text: E.intl.string(I.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: e7.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(I.default.lgvqSB),
                                  children: (0, a.jsx)(e3.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: e7.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(e4.y, {
                autoFocus: !0,
                rows: 1,
                className: e7.hF,
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
                      className: e7.ZO,
                      children: j.map((e) => (0, a.jsx)(e5.Nl, { draft: e, onRemove: k }, e.localId)),
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
function e6(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function te(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? e9(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = e9(e());
                l((e) => (e6(e, t) ? e : t));
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
var tt = n(46676),
    tn = n(876798),
    tl = n(408278),
    tr = n(48507),
    ta = n(193885),
    ti = n(744898),
    ts = n(803656),
    to = n(241326),
    tu = n(972213),
    tc = n(646514);
function td(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function tm(e, t, n) {
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
let tf = tm("red", td(tc.A.unsafe_rawColors.RED_400), () => E.intl.string(I.default.tvXfjt)),
    th = [
        tf,
        tm("yellow", td(tc.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(I.default.FYuaJ1)),
        tm("green", td(tc.A.unsafe_rawColors.GREEN_360), () => E.intl.string(I.default["Vv+paS"])),
        tm("blue", td(tc.A.unsafe_rawColors.BLUE_345), () => E.intl.string(I.default.k9b1QJ)),
        tm("white", td(tc.A.unsafe_rawColors.WHITE), () => E.intl.string(I.default["1sOXwH"])),
    ];
function tg(e) {
    return th.find((t) => t.id === e) ?? tf;
}
var tp = n(39416);
function tx(e) {
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
function tv(e) {
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
            d: "M14.5 4.5 20 10l-8.5 8.5H7L4 15.5a1.5 1.5 0 0 1 0-2.1L14.5 4.5ZM9.5 9.5l5.5 5.5M7 18.5h13",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinejoin: "round",
        }),
    });
}
function tb(e) {
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
let ty = w.ck.map((e) => tb(Math.min(16, e + 3))),
    tk = w.Cw.map((e) => tb(Math.min(16, e / 2.5))),
    tw = [I.default.jZtZUr, I.default.cTQdD0, I.default.J3ucEg],
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
function tA(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(ex.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: tp.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tn.k, {
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
    return (0, a.jsx)(ex.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tl.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function tN(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: tp.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: tp.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function tI(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = tg(n.colorId);
    function h(e) {
        return (0, w.rC)(t, e);
    }
    let g = tC[u],
        p = E.intl.string(I.default.hUm825),
        x = E.intl.string(I.default.n5IA3a),
        v = E.intl.string(I.default.r5dX6t),
        j = E.intl.string(I.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: tp.t$,
        children: [
            (0, a.jsx)("div", {
                className: tp.NT,
                children: (0, a.jsx)(tA, {
                    icon: tv,
                    label: E.intl.string(I.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => h("pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: tp.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(I.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(tA, {
                        icon: tx,
                        label: E.intl.string(I.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => h("move"),
                    }),
                    (0, a.jsx)(tA, {
                        icon: tr.LettersIcon,
                        label: E.intl.string(I.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => h("text"),
                    }),
                    (0, a.jsx)(tN, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tA, {
                                icon: ta.PaintbrushThinIcon,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (h("marker"), e());
                                },
                            }),
                        children: (e) =>
                            ty.map((n, l) =>
                                (0, a.jsx)(
                                    tA,
                                    {
                                        icon: n,
                                        label: E.intl.string(tw[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            ((0, w.KZ)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tN, {
                        label: v,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(tA, {
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
                                    tA,
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
                    (0, a.jsx)(tN, {
                        label: x,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(tA, {
                                icon: tj,
                                label: x,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (h("eraser"), e());
                                },
                            }),
                        children: (e) =>
                            tk.map((n, l) =>
                                (0, a.jsx)(
                                    tA,
                                    {
                                        icon: n,
                                        label: E.intl.string(tw[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            ((0, w._A)(t, l), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(tN, {
                        label: j,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(tS, { icon: f.icon, label: j, onClick: e }),
                        children: (e) =>
                            th.map((n) =>
                                (0, a.jsx)(
                                    tA,
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
                    (0, a.jsx)("div", { className: tp.Gz, role: "separator" }),
                    (0, a.jsx)(tS, {
                        icon: ti.UndoIcon,
                        label: E.intl.string((0, k.cX)() ? I.default["j/XmBQ"] : I.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(tS, {
                        icon: ts.RedoIcon,
                        label: E.intl.string((0, k.cX)() ? I.default.C7jhpn : I.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(tS, {
                        icon: to.TrashIcon,
                        label: E.intl.string(I.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: tp.Gz, role: "separator" }),
                    (0, a.jsx)(tS, { icon: tu.XLargeIcon, label: E.intl.string(I.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let tE = tc.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    t_ = tc.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    tM = tc.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function tR(e, t, n) {
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
                    (e.strokeStyle = tM),
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
let tT = { dx: 0, dy: 0 },
    tL = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    t$ = 1;
function tD(e) {
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
        let t = await (0, eC.wn)(e);
        if (null != t) return t;
        function n() {
            m(!1);
        }
        (0, eJ.flushSync)(() => m(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, eC.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (i.useEffect(() => {
        if (null != s) return ((0, w.j5)(s, h), () => (0, w.j5)(s, null));
    }, [s, h]),
    null == s || null == o || !o.active || c)
        ? null
        : (0, a.jsx)(tq, { projectId: s, state: o, capturing: d, resolveIframe: r });
}
function tq(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = te(r),
        [o, u] = i.useState(null),
        [c, d] = i.useState(0),
        [m, f] = i.useState(null),
        [h, g] = i.useState(tT),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        { tool: y, history: k } = n,
        C = tg(n.colorId),
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
                                  a(n, `fill="none" stroke="${t_}" stroke-width="4"`),
                                  a(n, `fill="none" stroke="${tE}" stroke-width="2"`),
                                  a(3, `fill="${t ?? tE}" stroke="${t_}" stroke-width="1"`),
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
            i = null == a ? k.present : k.present.map((e) => (e.id === a.id ? (0, tt.y)(e, h.dx, h.dy) : e)),
            o = v.current;
        tR(r, null == o ? i : [...i, o], { width: s.width, height: s.height });
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
                id: `mark-${t$++}`,
                kind: "text",
                color: C.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            ((0, tt.oy)(n, s) && (0, w.tD)(t, { type: "commit", shape: n }), u(null), (0, w.QP)(t));
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
                            l = null == M ? null : (0, tt.k_)(M, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? M
                                    : (0, tt.WF)(k.present, t, s, 6);
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
                        if (!(0, tt.jG)(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${t$++}`,
                                kind: "erase",
                                width: w.Cw[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${t$++}`,
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
                                id: `mark-${t$++}`,
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
                ((j.current = null), g(tT), (0, w.tD)(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && (0, tt.oy)(n, s)
                    ? ((0, w.tD)(t, { type: "commit", shape: n }), (0, w.QP)(t))
                    : P());
        }, [t, s, h, P]),
        O = i.useCallback(() => (0, w.V9)(t), [t]),
        G = i.useCallback(() => (0, w.tD)(t, { type: "undo" }), [t]),
        z = i.useCallback(() => (0, w.tD)(t, { type: "redo" }), [t]),
        B = i.useCallback(() => (0, w.tD)(t, { type: "clear" }), [t]),
        U = i.useRef({ tool: y, selected: M, exit: O, undo: G, redo: z });
    if (
        (i.useLayoutEffect(() => {
            U.current = { tool: y, selected: M, exit: O, undo: G, redo: z };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, e0.Cw)((0, e0.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), (0, w.tD)(t, { type: "remove", id: l.id }), f(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = tL[s];
                null != o && (e.preventDefault(), (0, w.rC)(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (A) return (e1.A.disable(), () => e1.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let K = Math.max(8, s.left - c - 8),
        H = null == M ? null : (0, tt.k_)(null == j.current ? M : (0, tt.y)(M, h.dx, h.dy), s);
    return (0, eJ.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: tp.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: tp.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: p,
                            className: tp.Ji,
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
                                  className: tp.r1,
                                  style: { left: H.x, top: H.y, width: H.width, height: H.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: tp.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: tp.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: tp.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: tp.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == o
                    ? null
                    : (0, a.jsx)(e8, {
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
                          onUploadFile: (e) => (0, e2.vX)(t, e),
                          onDismiss: $,
                          canSubmit: "" !== o.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: x,
                    className: tp.ej,
                    style: { left: K, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(tI, { projectId: t, state: n, onExit: O, onUndo: G, onRedo: z, onClear: B }),
                }),
            ],
        }),
        document.body,
    );
}
var tF = n(308081),
    tO = n(516521),
    tG = n(683071),
    tz = n(65593),
    tB = n(218394),
    tU = n(115982),
    tK = n(886540);
function tH(e) {
    return !(0, tK.BL)(e) && !0 !== e.stopRequested;
}
var tW = n(104317),
    tV = n(643278),
    tX = n(566424),
    tQ = n(683063),
    tZ = n(140735),
    tY = n(847374),
    tJ = n(320448),
    t0 = n(138212);
function t1(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: u()(t0.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: u()(t0.wx, null != n && t0.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var t2 = n(148590);
function t3(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function t4(e) {
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
        j = h ? tY.ChevronSmallDownIcon : tJ.ChevronSmallRightIcon,
        b = null != n || l;
    return (0, a.jsxs)(t1, {
        ...m,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: t2.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(ep.D, {
                                className: t2.L$,
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
        headerClassName: h ? void 0 : t2.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: f, className: u()(t2.rf, o), hidden: !h, children: d })],
    });
}
n(321073);
var t5 = n(883646);
let t7 = [];
function t8(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: u()(t5.xL, {
            [t5.Vb]: "in_progress" === t,
            [t5.cT]: "completed" === t,
            [t5.GZ]: "unfinished" === t,
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
                className: t5.Qd,
                itemClassName: t5.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: t5.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: t5.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function t9(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : t7), [n, t]),
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
        className: t5.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    tQ.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: t5.MA,
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
                      className: t5.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function t6(e) {
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
            ((t = (r ?? t7).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? t7),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: t5.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: u()(t5.AS, { [t5.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(t8, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: t5.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: t5.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(t9, { agents: c.get(e.id) ?? t7, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: t5.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(t8, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: t5.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: t5.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ne(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(I.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(I.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(t4, {
        title: E.intl.string(I.default.RtzECX),
        meta: (0, a.jsx)(t3, { children: c }),
        superseded: s,
        showLabel: E.intl.string(I.default.RKyN9q),
        hideLabel: E.intl.string(I.default.xydHoj),
        className: t5.Nr,
        bodyClassName: t5.rf,
        beforeBody: r && !s ? (0, a.jsx)(tZ.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(t6, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nt = n(308665),
    nn = n(59678),
    nl = n(903847);
function nr(e) {
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
              className: nl.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: u()(nl.vK, { [nl.ho]: p && d, [nl.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: u()(nl.Rk, nn.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(tX.A, {
                                        glyph: (0, a.jsx)(nt.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(ep.D, {
                                    className: nl.pZ,
                                    onClick: c,
                                    "aria-label": E.intl.string(I.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: u()(nl.Rk, nn.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(tX.A, {
                                            glyph: (0, a.jsx)(nt.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          _
                              ? (0, a.jsx)(ex.m, {
                                    text: E.intl.string(I.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(ep.D, {
                                        className: nl.BO,
                                        onClick: M,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(I.default.RtzECX),
                                        children: (0, a.jsx)(tV.ClipboardListIcon, {
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
                            className: u()(nl.vB, { [nl.pg]: v && C, [nl.ui]: !v }),
                            children: (0, a.jsx)(ne, {
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
var na = n(839214),
    ni = n(78564);
let ns = new Map(),
    no = (0, na.D)(() => ({ byMessageKey: {} }));
function nu(e, t) {
    let { [e]: n, ...l } = no.getState().byMessageKey;
    no.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nc = n(195880),
    nd = n(287111),
    nm = n(16619);
function nf(e) {
    let t = (0, nm.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var nh = n(736553),
    ng = n(382541),
    np = n(890497),
    nx = n(103557),
    nv = n(29073),
    nj = n(590077);
function nb(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = nf(e),
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
                                : (0, nd.RQ)(
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
                        ((t = eI.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(I.default.ScoZLp, { name: t, projectId: e })),
                        `${A}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nc.m)() }), x.current.set(e.projectId, t)),
                                (async function (e, t, n) {
                                    let l,
                                        { ticket: r, baseUrl: a } = await (0, ng.dv)(e),
                                        i = new nh.u();
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
        className: u()(nv.nd, nv.jx),
        "aria-labelledby": m,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: nv.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: m,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: nv.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tl.K, {
                        icon: ev.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(I.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nj.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(I.default.TbbzW5),
                          })
                        : (0, a.jsx)(np.Z, {
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
                    (0, a.jsx)(nx.f, {
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
                className: nv.qr,
                children: (0, a.jsx)("div", {
                    className: nv.zt,
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
var ny = n(47167),
    nk = n(734057),
    nw = n(994500),
    nC = n(287809),
    nA = n(360047);
function nS(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
var nN = n(652215);
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
    [nN.rbe.GUILD_TEXT]: "text",
    [nN.rbe.GUILD_VOICE]: "voice",
    [nN.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [nN.rbe.GUILD_STAGE_VOICE]: "stage",
    [nN.rbe.GUILD_FORUM]: "forum",
    [nN.rbe.GUILD_MEDIA]: "media",
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
                let n = nC.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let nL = { channel: "#", role: "@", user: "@", project: "", server: "" },
    n$ = {
        channel: [I.default["9+dfPT"], I.default.pGSJqE],
        role: [I.default["2VkCoD"], I.default.c8YlX8],
        user: [I.default.GZIAxl, I.default["4bptbQ"]],
        project: [I.default.twlOb6, I.default.twlOb6],
        server: [I.default.ZWXDeI, I.default.ZWXDeI],
    };
function nD(e, t) {
    return E.intl.string(n$[e][+!!t]);
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
                                                (0, a.jsx)(nF.Q, {
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
          ? E.intl.string(I.default.ZZ641e)
          : E.intl.string(1 === e.options.length ? I.default["2g3gk9"] : I.default.dkzChE);
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
let lr = n7.kg(nN.xBc.VIEW_CHANNEL, nN.xBc.SEND_MESSAGES);
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
                    [eI.Ay],
                    () => {
                        let e = t ? eI.Ay.getProject(l) : null;
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
                            u(((e = []), nT("channel", [d.id], () => (0, ny.m1)(d, nC.default, nw.A), e)), r));
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
        r = nf(t),
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
    (0, e0.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lm(e) {
    let { fallback: t, ...n } = e,
        l = (0, nm.z9)("ConjureClarificationEntityPicker"),
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
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(I.default.lhgD88),
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
        x = E.intl.formatToPlainString(I.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: u()(ly.Vs, { [ly.Q9]: s, [ly.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(ep.D, {
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
                "aria-label": E.intl.formatToPlainString(I.default.AQbxhf, { answer: r.label }),
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
                    (0, a.jsx)(v.E, {
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
                      children: (0, a.jsx)(ex.m, {
                          text: E.intl.string(I.default.HQEXJM),
                          children: (0, a.jsx)(tl.K, {
                              icon: to.TrashIcon,
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
                        className: ly.B4,
                        children: (0, a.jsx)(ex.m, {
                            text: E.intl.string(I.default["4/eeDD"]),
                            children: (0, a.jsx)(tl.K, {
                                icon: lg.MaximizeIcon,
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
                    Promise.all(n.map((e) => (0, e2.PK)(t, e.image.attachment_id))).then(
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
            (0, a.jsx)(lA, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: E.intl.string(/\bicons?\b/i.test(n.question) ? I.default.qU4WN6 : I.default.cbMDDB),
            }),
        ],
    });
}
function lA(e) {
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
                        className: ly.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nd.rh)(t, l, l.name, l.type)));
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
                              className: ly.gd,
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
                                  (0, a.jsx)(nF.Q, {
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
function lS(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(ep.D, {
        className: u()(la.uK, { [la.ue]: l, [la.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: la.dy, children: (0, a.jsx)(nq.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: la.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: la.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: la.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: la.ed,
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
                      className: la.rM,
                      children: E.intl.string(I.default.zku6r1),
                  })
                : null,
        ],
    });
}
function lN(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return nX(n)
        ? (0, a.jsx)(lC, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      lS,
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
        m = !0 === n.multi_select ? E.intl.string(I.default.tE8qbz) : nZ(n);
    return (0, a.jsxs)("div", {
        className: u()(la.Ge, la.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == m
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: la.aK,
                      children: m,
                  }),
            (0, a.jsx)(lN, {
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
                              children: (0, a.jsx)(f.PencilIcon, {
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
                          text: E.intl.string(I.default.zxSq2q),
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
                                let l = nS(e, t, n[t.id] ?? []);
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
                                let l = await (0, nA.LW)(e, t);
                                a((e) => ({ ...e, [n]: l }));
                            } catch {}
                        })(e.target, e.caller, e.key));
            }, [l]);
            let d = (0, c.cf)(
                [eI.Ay],
                () =>
                    Object.fromEntries(
                        Object.values(l).flatMap((e) => [e.target, e.caller].map((e) => [e, eI.Ay.getProject(e)])),
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
                                callerHasPreview: null == h || (0, Q._7)(h),
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
        })(n, l, C),
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
        X = null == r,
        Z = l.questions.length,
        Y = Math.min(T, Z - 1),
        J = l.questions[Y],
        [ee, et] = i.useState({ id: J.id, expanded: !1 }),
        en = ee.id === J.id && ee.expanded,
        [el, er] = i.useState(null),
        ea = b[J.id] ?? "",
        ei = !0 === J.multi_select,
        es = nX(J),
        eo = ei ? E.intl.string(I.default.tE8qbz) : nZ(J),
        eu = ei
            ? (k[J.id] ?? lI)
            : ((t = x[J.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : nQ),
        ec = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = E.intl.string(I.default.wTsP5l),
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
                                    null != l && (0, e2.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, e2.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                error: { source: "upload", text: E.intl.string(I.default["kUw/b1"]) },
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
        { text: ef, phase: eh } = (0, nW.Q)(J.question),
        eg = ef === J.question,
        ej = eg && el?.id === J.id && el.truncated;
    i.useLayoutEffect(() => {
        if (null == K || en || !eg) return;
        function e() {
            if (null == K) return;
            let e = K.scrollHeight > K.clientHeight + 1;
            er((t) => (t?.id === J.id && t.truncated === e ? t : { id: J.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(K), () => t.disconnect());
    }, [eg, K, J.id, en]);
    let eb = E.intl.string(en ? E.t.iTcuma : E.t.dcl9MQ),
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
                                              let r = nS(e, t, [n]);
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
                                              return (0, nA.Ol)(t, n, l);
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
    let eC = $?.moves;
    i.useEffect(() => {
        if (null == eC) return;
        let e = setTimeout(() => F(null), 400),
            t = setTimeout(() => B(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eC]);
    let eA = i.useCallback(
            (e) => {
                let t = n_(l, e, Y);
                null == t ? ey(e) : ek(t, t < Y ? "back" : "forward");
            },
            [l, Y, ey, ek],
        ),
        eS = i.useCallback(
            (e) => {
                if (X) return;
                let t = { ...x, [J.id]: e };
                (j(t), eA(t));
            },
            [eA, x, X, J.id],
        ),
        eN = i.useCallback(() => {
            X || 0 === Y || ek(Y - 1, "back");
        }, [X, Y, ek]),
        eE = 0 !== Y || X ? void 0 : m,
        e_ = (Y > 0 && !X) || null != eE,
        eM = i.useCallback(
            (e) => {
                y((e) => ({ ...e, [J.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                es ? X || j((e) => ({ ...e, [J.id]: t })) : eS(t);
            },
            [X, es, J.id, eS],
        ),
        eR = i.useCallback(() => {
            (y((e) => ({ ...e, [J.id]: "" })), eS({ kind: "custom", text: E.intl.string(I.default.zxSq2q) }));
        }, [J.id, eS]),
        { multiPartFor: eP } = ec,
        eT = i.useMemo(() => (ei ? nR(J, eu, ea, eP(J)) : null), [ea, ei, eP, J, eu]),
        eL = C[J.id] ?? lE,
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
                          ...eL.map((t) => (t.name.startsWith(nL[e]) ? t.name : `${nL[e]}${t.name}`)),
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
        eG = ec.controlsFor(J, X),
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
                        ? nR(J, [t.optionId], ea)
                        : nR(J, [], ea, t)
            );
        }, [x, ea, J]),
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
            null != eB && eS(eB);
        }, [eB, eS]),
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
        eQ = eB ?? (null == eD && null == eT ? (x[J.id] ?? null) : null),
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
                      })(l, x, Y)
                    : null,
            [x, l, Y, eQ],
        ),
        eY = null != eZ,
        eJ = (null != eQ || eY) && !X,
        e1 = Y === Z - 1,
        e3 = i.useCallback(() => {
            X || (null != eQ ? eS(eQ) : null != eZ && (j(eZ), eA(eZ)));
        }, [eA, X, eQ, eS, eZ]),
        e5 = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, e0.vq)(e.target, HTMLTextAreaElement) ||
                    (0, e0.vq)(e.target, HTMLInputElement) ||
                    ((!(0, e0.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && e_
                            ? (e.preventDefault(), (eE ?? eN)())
                            : "ArrowRight" === e.key && eJ && (e.preventDefault(), e3())));
            },
            [eE, e_, eJ, eN, e3],
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
                              children: (0, a.jsx)(f.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(e4.y, {
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
                              placeholder: E.intl.string(nI(J) ? I.default.yLN1x6 : I.default["tOC+tn"]),
                              "aria-label": E.intl.formatToPlainString(I.default["4JeYPB"], { question: J.question }),
                              disabled: X,
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
        "data-state": X ? "inert" : "open",
        "data-question-expanded": en ? "true" : void 0,
        "data-picker-open": R && !z ? "true" : void 0,
        "data-step": Y,
        tabIndex: -1,
        onKeyDown: e5,
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
                            (0, a.jsx)(v.E, {
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
                                      children: (0, a.jsx)(ex.m, {
                                          text: eb,
                                          children: (0, a.jsx)(tl.K, {
                                              icon: en ? nO.ChevronSmallUpIcon : tY.ChevronSmallDownIcon,
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
                                : (0, a.jsx)(ep.D, {
                                      className: u()(nv.gb, nv.Q7),
                                      onClick: eX,
                                      "aria-label": E.intl.string(I.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(ev.XSmallIcon, {
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
                                            : (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: la.aK,
                                                  children: eo,
                                              }),
                                        (0, a.jsx)(lN, {
                                            projectId: n,
                                            question: J,
                                            selected: eu,
                                            disabled: X,
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
                                                  disabled: X,
                                                  onChange: eq,
                                                  onFocus: eF,
                                                  onBlur: eO,
                                                  fallback: nE(J) ? null : e7,
                                              })
                                            : null,
                                        null != e$ ? (0, a.jsx)(nH, { link: e$, disabled: X }) : null,
                                        null != J.note
                                            ? (0, a.jsx)(v.E, {
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
                                                      text: E.intl.string(I.default.zxSq2q),
                                                      disabled: X,
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
                                              disabled: X,
                                          },
                                          q.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            Z > 1 || ei || es || null != J.input || null != m || !0 === J.optional || nI(J)
                ? (0, a.jsxs)("div", {
                      className: nv.qr,
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
                              className: nv.zt,
                              children: [
                                  e_
                                      ? (0, a.jsx)(nF.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: h ?? E.intl.string(I.default.Pk5lfA),
                                            onClick: eE ?? eN,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  g
                                      ? null
                                      : (0, a.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: e1
                                                ? (o ?? E.intl.string(E.t.geKm7t))
                                                : E.intl.string(eY ? I.default.ZcrbKz : I.default.w1nRmT),
                                            disabled: !eJ,
                                            onClick: e3,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": e1 ? "true" : void 0,
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
            (0, a.jsx)(v.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, lL.wy)(t) }),
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
                        (0, a.jsx)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: E.intl.string(I.default.BvaFUc),
                        }),
                    ],
                }),
                (0, a.jsx)(nx.f, {
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
                (0, a.jsx)(nG.B, {
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
            (0, O.mM)(async () => {
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
                    (0, a.jsx)(lH.C, { label: E.intl.string(I.default.HCQvpO), size: "xs", items: f }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, a.jsx)(
            "article",
            {
                className: lY.Lo,
                children: (0, a.jsx)(lH.C, { label: E.intl.string(I.default.HCQvpO), size: "xs", items: f }),
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
                                    color: tc.A.colors.ICON_FEEDBACK_POSITIVE,
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
              className: u()(nv.nd, lY.fw),
              "aria-label": E.intl.string(I.default.O0QIqj),
              children: [
                  (0, a.jsxs)("div", {
                      className: nv.wx,
                      children: [
                          (0, a.jsx)(lK.KeyIcon, { size: "xs", color: tc.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: nv.TK,
                              children: E.intl.string(I.default.O0QIqj),
                          }),
                          (0, a.jsx)(ep.D, {
                              className: u()(nv.gb, nv.Q7),
                              onClick: c,
                              "aria-label": E.intl.string(I.default.Hl7rif),
                              children: (0, a.jsx)(ev.XSmallIcon, {
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
                          (0, a.jsx)(lH.C, { label: E.intl.string(I.default.HCQvpO), size: "xs", items: f }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: nv.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: lY.xE,
                              children: E.intl.string(I.default["2OdXdn"]),
                          }),
                          (0, a.jsx)("div", { className: nv.zt, children: x }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("article", {
              className: lY.Lo,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "body-xs/semibold",
                      color: null != o ? "text-brand" : "text-muted",
                      tag: "span",
                      children: E.intl.string(null != o ? I.default.O0QIqj : I.default.HCQvpO),
                  }),
                  (0, a.jsx)(lZ.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, a.jsx)(lH.C, { label: E.intl.string(I.default.HCQvpO), size: "xs", items: f }),
                  (0, a.jsx)("div", { className: lY.sq, children: x }),
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
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, tK.BL)(i)) continue;
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
            className: re.Mk,
            children: (0, a.jsx)(v.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: E.intl.string(I.default["+uXDk+"]),
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
                            color: tc.A.colors.ICON_FEEDBACK_POSITIVE,
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
    let p = n.keys?.length === 1 && n.keys[0] === l9.B,
        x = null != n.note && "" !== n.note ? n.note : p ? null : E.intl.string(I.default.XuOf5s);
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
                text: E.intl.string(I.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: re.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(I.default["jZjP+I"]),
                          }),
                          null != x
                              ? (0, a.jsx)(lZ.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: re.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: u()(nv.nd, nv.jx),
                      "aria-label": E.intl.string(I.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: nv.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: nv.TK,
                                      children: E.intl.string(I.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(ep.D, {
                                      className: u()(nv.gb, nv.Q7),
                                      onClick: r,
                                      "aria-label": E.intl.string(I.default["iq+Pte"]),
                                      children: (0, a.jsx)(ev.XSmallIcon, {
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
                                  null != x
                                      ? (0, a.jsx)(lZ.A, { text: x, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: nv.qr,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: re.xE,
                                      children: E.intl.string(I.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: nv.zt,
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
var rf = n(62617),
    rh = n(182368);
let rg = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rp = {
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
    return { ...rx[e], name: E.intl.string(rp[e]()) };
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
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(I.default.KcFvbo);
}
var rw = n(60160),
    rC = n(101147);
function rA(e) {
    let t = (0, tU.SY)(e.steps);
    return null != t ? (0, tU.WQ)(t) : rk(e.task);
}
function rS(e) {
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
                      line: rA(e),
                  },
              ];
    });
}
function rN(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, tU.SY)(n.steps),
        d = u
            ? rA(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(rk(e));
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
                                  duration: (0, ry.MB)(e.durationMs),
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
                                    className: nn.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            rC.A,
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
                                      className: nn.iq,
                                      children: (0, a.jsx)(rw.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(tX.A, {
        glyph: (0, a.jsx)(tQ.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: rk(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nn.nC,
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
        "aria-label": E.intl.string(I.default.Uvkr1G),
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
        c = (0, O.Ry)(rP),
        [d, m] = i.useState(!1),
        f = i.useCallback((e, t) => m(t), []),
        { ended: h } = l,
        g = (0, r_.i)(l.session);
    return (0, a.jsxs)(ep.D, {
        innerRef: s,
        className: u()(rR.Nr, h && rR.Xj),
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
                    { modalKey: rP },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(I.default.G3a822, { title: g }),
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
                        "aria-label": E.intl.formatToPlainString(I.default.rnwqXb, { name: g }),
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
                className: rR.pG,
                children: [
                    (0, a.jsx)("span", { className: u()(rR.W9, h && rR.oM) }),
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
        l = (0, G.lG)(t.authored_at);
    return (0, a.jsx)(t1, {
        title: E.intl.string(I.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: rO.r,
            children: [
                (0, a.jsxs)("div", {
                    className: rO.z,
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
        [Q.q7.APP_CHANNEL]: I.default["3/aHX6"],
        [Q.q7.VOICE_CHANNEL]: I.default["3/aHX6"],
        [Q.q7.ACTIVITY]: I.default["3/aHX6"],
        [Q.q7.OVERLAY]: I.default["rPpf5/"],
        [Q.q7.PROFILE_WIDGET]: null,
        [Q.q7.AUTOMOD]: null,
        [Q.q7.BOT]: null,
        [Q.q7.APPLICATION_COMMANDS]: null,
    },
    ae = [Q.q7.ACTIVITY, Q.q7.APP_CHANNEL, Q.q7.VOICE_CHANNEL, Q.q7.OVERLAY];
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
    aC = n(427262);
let aA = new ak.nA({ id: "1337", guild_id: "1337", type: nN.rbe.GUILD_TEXT, name: "preview" });
function aS(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([nC.default], () => nC.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, av.nj)(new aw.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aN = /^@\S+/;
var aI = n(775602);
let aE = [I.default["3eTjcV"], I.default.l3j5nS];
var a_ = n(97808),
    aM = n(778712),
    aR = n(486020),
    aP = n(46054),
    aT = n(200700);
let aL = {
        alert: { label: () => E.intl.string(I.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(I.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(I.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(I.default.RGzFNK), blockedStyle: !1 },
    },
    a$ = {
        blocked: { label: () => E.intl.string(I.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(I.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(I.default.RGzFNK), tone: "green" },
    },
    aD = ["blocked", "alert", "allowed"],
    aq = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function aF(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, aT.getFriendlyDurationString)(n))
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
var aO = n(984097),
    aG = n(13673);
let az = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function aB(e) {
    let { example: t } = e,
        n = aF(t);
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
let aU = ["glazedgamer", "sprinkles", "donutking"];
function aK(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = aL[n.outcome];
    return (0, a.jsxs)("li", {
        className: u()(aO.nM, { [u()(aO.HV, aG.DX)]: s }),
        children: [
            (0, a.jsx)(tZ.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: aO.my,
                children: (0, a.jsx)(a_.eu, {
                    src: (0, aR.AE)(void 0, void 0),
                    size: aM._3.SIZE_24,
                    "aria-label": E.intl.string(I.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: aO.fw,
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
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: az[r.tone],
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
                                      className: aO.IQ,
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
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: aQ.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
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
        { projectId: p, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, c.bG)([nC.default], () => nC.default.getCurrentUser())),
        (n = (0, c.bG)([eI.Ay], () => eI.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([aj.A], () => aj.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(I.default.JEYq8M)),
        (o = (0, c.bG)([nC.default], () => (null != l ? nC.default.getUser(l) : void 0), [l])),
        (m = aS("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (f = d ? o : m),
        (h = aS("31338", E.intl.string(I.default["9iAOsw"]), { discriminator: "0003" })),
        (g = aS("31339", (0, aC.mG)(t) ?? "", { enabled: null != t })),
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
                                              channelId: aA.id,
                                              content: e,
                                              author: t,
                                              type: l ?? nN.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: nN.cmJ.SENT,
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
                                              messageType: nN.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: nN.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(aN, `<@${i.id}>`)), s),
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
    let k = aA.name;
    return (0, a.jsxs)("div", {
        className: a3.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: a3.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(aV.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
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
                                    channel: aA,
                                    author: (0, aJ.FT)(n.author, aA),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(a0.A, { message: n, channel: aA }) : void 0,
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
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: aX.ReactionIcon,
                                                      onClick: a8,
                                                  }),
                                                  (0, a.jsx)(a1.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: aQ.ArrowAngleLeftUpIcon,
                                                      onClick: a8,
                                                  }),
                                                  (0, a.jsx)(a1.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
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
let ii = { frame: I.default.Z2bt4u, bot: I.default.EbvC13, commands: I.default.EbvC13, automod: I.default.tiMvei },
    is = {
        user_widget: { server: I.default.VlI3et, personal: I.default.njJ4YL },
        overlay_widget: { server: I.default.nUcjJ1, personal: I.default.RDpKqP },
    };
function io(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var iu = n(573634);
let ic = {
    frame: eh.GameControllerIcon,
    overlay_widget: il.WindowTopIcon,
    user_widget: ir.UserCircleIcon,
    bot: eg.RobotIcon,
    commands: eg.RobotIcon,
    automod: ia.ShieldIcon,
};
function id(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: u()(iu.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
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
function ih(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iu.lj,
        children: [
            (0, a.jsx)("span", {
                className: u()(iu.Vo, iu.G),
                children: (0, a.jsx)(ec.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iu.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
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
                    children: (0, a.jsxs)(v.E, {
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
                    children: (0, a.jsx)(v.E, {
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
        o = io(t) ? ec.AppsIcon : ic[t.kind],
        u = (function (e, t) {
            if (io(e)) return E.intl.string(I.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = is[e.kind];
                return E.intl.string(t ? n.server : n.personal);
            }
            return E.intl.string(ii[e.kind]);
        })(t, n),
        c = n && t.kind in is ? E.intl.string(I.default.UXJCSG) : null;
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
                    (0, a.jsx)(v.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != c ? (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, a.jsx)("div", { className: iu.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, a.jsx)(v.E, {
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
                children: [(0, a.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
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
                                                      ? [{ key: t, caption: E.intl.string(n), labels: l.map(r8) }]
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
                                                        let n = E.intl.string(I.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(Q.q7.APP_CHANNEL)) {
                                                            let r = e.app_channel_names ?? [];
                                                            l = (
                                                                null != t.app_channels && t.app_channels.length > 0
                                                                    ? t.app_channels
                                                                    : r.length > 0
                                                                      ? r.map((e) => ({ name: e }))
                                                                      : [{ name: er(t.name) }]
                                                            ).map((e) => {
                                                                let { name: t, description: l } = e,
                                                                    r = l?.trim() ?? "";
                                                                return { name: t, description: "" !== r ? r : n };
                                                            });
                                                        }
                                                        return {
                                                            channels: l,
                                                            launchableAnywhere: t.surfaces.includes(Q.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(Q.q7.VOICE_CHANNEL),
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
                                                                    caption: E.intl.formatToPlainString(
                                                                        I.default.w8F5sy,
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
                                                                    id,
                                                                    {
                                                                        caption: E.intl.string(I.default.MY6UGJ),
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
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
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
        l = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()),
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
function iC(e) {
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
function iA(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, e2.PK)(e, n);
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
function iS(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: o } = (0, lb._)(t, r);
    return s
        ? null
        : (0, a.jsx)(ep.D, {
              className: iw.xX,
              onClick: () => iA(t, [{ id: r, alt: l }], 0),
              "aria-label": E.intl.string(I.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: iw.sN, onError: o }),
          });
}
function iN(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: d } = (0, lb._)(t, r),
        [m, f] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: x,
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
            return { slide: d, labels: aE.map((e) => E.intl.string(e)), pick: m, hold: f };
        })({ ready: null != s, paused: m || h });
    if (o) return null;
    let b = E.intl.string(I.default.mjryK4),
        y = E.intl.string(I.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: iw.RM,
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(ep.D, {
                className: u()(iw.xX, iw.nj, { [iw.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(an) },
                onClick: () => iA(t, [{ id: r, alt: b }], 0),
                "aria-label": E.intl.string(I.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: b, className: iw.Ac, onError: d })
                          : (0, a.jsx)(iC, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: iw._4,
                role: "group",
                "aria-label": E.intl.string(I.default.EH36X6),
                children: x.map((e, t) =>
                    (0, a.jsx)(
                        ep.D,
                        {
                            className: u()(iw.c, { [iw.Cw]: p === t }),
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
function iI(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: o } = (0, lb._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(ep.D, {
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
            return { id: n, alt: E.intl.formatToPlainString(I.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: iw.Op,
              children: (0, a.jsxs)("div", {
                  className: iw.uW,
                  children: [
                      (0, a.jsx)(v.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: E.intl.string(I.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: iw.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(iI, { projectId: t, id: r, alt: i, onOpen: () => iA(t, l, n) }, r);
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
        { projectId: p, proposal: x, version: j, onApprove: b } = e,
        { botExchanges: y } =
            ((n = rZ(x, Q.q7.APPLICATION_COMMANDS)),
            (l =
                rZ(x, Q.q7.BOT) || n
                    ? null != x.bot
                        ? x.bot.interaction
                        : n && x.commands.some(r1)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : r4(x, l, {
                              message: E.intl.string(I.default.J7qggf),
                              reply: E.intl.string(I.default.nqYtiy),
                              event: E.intl.string(I.default["05lU9W"]),
                          }),
                [x, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = ah } = t,
                r = (0, c.bG)([ad.default], () => ad.default.locale),
                a = (0, c.bG)([eI.Ay], () => {
                    let t = eI.Ay.getProject(e);
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
        })(p, x),
        w = j?.superseded === !0,
        C = x.what_changed?.trim() ?? "",
        A =
            ((t = x.commands),
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
        S =
            ((o =
                null == (s = at(x))
                    ? null
                    : (x.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (m = null != (u = x.design_image) && u.id !== ai(x)?.id ? u : null),
            (f = ai(x)),
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
                    null != f && null != g ? { experienceId: g, design: f, size: Y(x.overlay_widget ?? null) } : null,
            }),
        N = i.useMemo(
            () =>
                x.commands.some(r1)
                    ? r4({ ...x, bot: void 0 }, "commands", {
                          message: E.intl.string(I.default.J7qggf),
                          reply: E.intl.string(I.default.nqYtiy),
                          event: E.intl.string(I.default["05lU9W"]),
                      })
                    : [],
            [x],
        ),
        _ = (0, c.bG)([eI.Ay], () => eI.Ay.getProject(p)?.name, [p]),
        M = (0, c.bG)([eI.Ay], () => eI.Ay.getProject(p)?.install_scope === "guild", [p]),
        R =
            w && null != j
                ? E.intl.formatToPlainString(I.default.YZ3qJs, { version: j.version })
                : E.intl.string(I.default["3b6e7o"]),
        P = w ? (0, a.jsx)(t3, { children: E.intl.string(I.default.hF2c41) }) : null;
    return (0, a.jsxs)(t4, {
        title: R,
        meta: P,
        superseded: w,
        showLabel: E.intl.string(I.default.yD8EJS),
        hideLabel: E.intl.string(I.default.nSPGNb),
        bodyClassName: iw.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: iw.Qs,
                children: (0, a.jsx)(iv, {
                    appName: _ ?? x.experiences?.[0]?.name ?? "",
                    inServer: M,
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(it, { text: x.summary, commandNames: A }),
                            }),
                            (0, a.jsx)(iE, { projectId: p, proposal: x }),
                            "" !== C
                                ? (0, a.jsxs)("section", {
                                      className: iw.uW,
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
                                              children: (0, a.jsx)(it, { text: C, commandNames: A }),
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
                                            ? (0, a.jsx)(iS, {
                                                  projectId: p,
                                                  design: S.ui.design,
                                                  alt: E.intl.string(null == (t = at(x)) ? I.default["3/aHX6"] : r6[t]),
                                              })
                                            : null,
                                    l =
                                        e.id === S.overlay?.experienceId
                                            ? (0, a.jsx)(iN, {
                                                  projectId: p,
                                                  design: S.overlay.design,
                                                  size: S.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(ik, { ...k }) : null;
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
                                        (r = l.some((e) => "command" === e.kind || r2(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, a.jsx)(a9, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
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
var iM = n(289565);
function iR(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: iM.m, children: n })
        : (0, a.jsxs)("div", {
              className: iM.Z,
              children: [
                  n,
                  (0, a.jsx)(ex.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tl.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: ev.XSmallIcon,
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
        l = (0, eG.A)(t, n);
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
        l = (0, eO.Ay)(t);
    return null != l && iT(l, n)
        ? (0, a.jsx)(iR, {
              children: (0, a.jsxs)(nG.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(i$, { projectId: t, publish: l }),
                      null != l.failure
                          ? (0, a.jsx)(v.E, {
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
                    [eI.Ay],
                    () => {
                        let t = eI.Ay.getProject(e);
                        return null != t && (0, eI.jf)(t);
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
                        (o(e instanceof iq.A ? e.message : E.intl.string(I.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(I.default.orZDqY, { time: (0, iF.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, iF.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? u : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(t1, {
        title: E.intl.string(I.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: iG.r,
            children: [
                (0, a.jsxs)("div", {
                    className: iG.z,
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
var iB = n(989271);
function iU(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(ep.D, {
        className: u()(iB.nM, { [iB.f1]: s, [iB.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(I.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: iB.jo,
                children: [
                    n
                        ? (0, a.jsx)(m.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: iB.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: iB.G9,
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
function iK(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(t1, {
        title: E.intl.string(I.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                iU,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var iH = n(313537),
    iW = n(125372);
let iV = {
        add_to_server: I.default["7SD3ul"],
        remove_from_server: I.default.ErhKil,
        change_server: I.default["1E5/ay"],
    },
    iX = { add_to_server: I.default["Wy+mGW"], remove_from_server: I.default.vUWHZe, change_server: I.default.MfnSEe };
var iQ = n(831913),
    iZ = n(618785);
function iY(e) {
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
        } = ((n = (0, c.bG)([eI.Ay], () => eI.Ay.getProject(x), [x])),
        (l = (0, iH.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === j.action ? j.guild_id : l),
        (i = (0, c.bG)([le.A], () => le.A.getGuild(t)?.name, [t]) ?? E.intl.string(I.default["6bhivN"])),
        (s = (0, iW.Y)(x).length > 0),
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
                    })(l1.A.getMessages(x), j, l),
                [x, j, l],
            ) &&
            null != n &&
            ("remove_from_server" === j.action ? !r : r)),
        (u = "change_server" !== j.action || null == j.guild_id || l === j.guild_id),
        (m = null != n && ("add_to_server" === j.action ? !r : r) && u && !o),
        (f = null != n && (0, eI.PV)(n)),
        (h = "remove_from_server" !== j.action),
        (g = m && f ? { kind: j.action, label: E.intl.string(iV[j.action]), disabled: h && !s } : null),
        (p = null),
        m && !f ? (p = E.intl.string(I.default.Kt9exT)) : g?.disabled === !0 && (p = E.intl.string(I.default.NXvmoQ)),
        { project: n, action: g, done: o ? E.intl.formatToPlainString(iX[j.action], { server: i }) : null, note: p }),
        S = j.keep_label,
        N = b && null != w,
        _ = N && null != S && null != y,
        M = C ?? (b ? A : null);
    return null != M || N
        ? (0, a.jsxs)(nG.B, {
              gap: 8,
              children: [
                  N
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
                                                ? (0, iQ.A)({ project: k })
                                                : (0, iZ.A)({ projectId: x }));
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
var iJ = n(919790),
    i0 = n(908492),
    i1 = n(971824),
    i2 = n(162052),
    i3 = n(165648);
function i4(e) {
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
            className: nn.pj,
            "data-live": !1,
            children: (0, a.jsx)(tX.A, {
                glyph: (0, a.jsx)(rd.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
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
        w = rb(k.map((e) => e.taskId)),
        C = !g && (l || k.some((e) => "running" === e.task.status)),
        A = rS(k);
    return (0, a.jsxs)("ol", {
        className: nn.pj,
        "data-live": C,
        children: [
            (0, a.jsx)(tW.Ay, {
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
                          rN,
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
                      className: nn.YO,
                      children: (0, a.jsx)(ne, { todos: b, provisional: d, agents: A, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function i5(e) {
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
            onPickIdea: j,
            pickedIdeaIds: b,
            onApprovePlan: y,
            sideReply: k = !1,
            sideReplyAcknowledges: w,
            hoistedProse: C = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: S,
            onRestoreProposal: N,
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
        O = (C ? A : void 0) ?? L.attachmentsHost,
        G = q && !C,
        z = null == c ? null : (0, a.jsx)(iJ.A, { projectId: t, attachments: c }),
        B = null == z ? null : (0, a.jsx)("div", { className: nn.MT, children: z }),
        U = k
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
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nn.ue,
        children: [
            $.length > 0 && !C
                ? (0, a.jsx)("ol", {
                      className: nn.dO,
                      children: $.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nn.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: i3.PT,
                                          children: (0, i0.U)(e.content, !0, {
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
                        className: u()(nn.ky, i2.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: u()(i3.PT, nn.cW),
                                children: (0, i0.U)(F, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === O ? B : null,
                            U,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: u()(nn.ky, nn.k1, i2.XR, { [i1.O]: null != f && "open" === h }),
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
                      className: u()(nn.ky, nn.k1, i2.XR),
                      children: (0, a.jsx)(rt, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== O && ("closing" !== O || G) ? null : z,
            null != x ? (0, a.jsx)(iD, { projectId: t, cta: x }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(iK, { ideas: o, pickedIdeaIds: b, onPick: j }) : null,
            null != S ? (0, a.jsx)(rG, { proposal: S, onRestore: N }) : null,
            null != R ? (0, a.jsx)(iY, { projectId: t, change: R, current: P, onReply: T }) : null,
            null != _ ? (0, a.jsx)(iz, { projectId: t, proposal: _, current: M }) : null,
            G ? null : U,
        ],
    });
}
var i7 = n(286251),
    i8 = n(146806),
    i9 = n(475358),
    i6 = n(783977),
    se = n(559647),
    st = n(787564),
    sn = n(339200),
    sl = n(234320),
    sr = n(191023),
    sa = n(285796),
    si = n(922329),
    ss = n(153171);
function so(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(si.p, {
        name: E.intl.string(I.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: tp.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sr.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: tp.OY,
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
            className: ss.o1,
            onClick: () => (0, w.xU)(t),
            "aria-label": E.intl.string(I.default.N852dj),
            children: (0, a.jsx)(sa.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function su(e) {
    let { send: t } = e;
    return (0, a.jsxs)(si.p, {
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
            "uploading" === t.status ? (0, a.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: ss.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(nF.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: E.intl.string(I.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sc = n(587157),
    sd = n(347111),
    sm = n(120234),
    sf = n(901173),
    sh = n(161431),
    sg = n(46653),
    sp = n(695184),
    sx = n(661191),
    sv = n(475458),
    sj = n(957071),
    sb = n(927659),
    sy = n(351906),
    sk = n(407653),
    sw = n(322915);
function sC(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        o = (0, c.bG)([sy.A], () => sy.A.hidePersonalInformation ?? !1),
        u = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      sb.Ay.User,
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
                      sb.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(sk.A, { projectId: n, file: e.file, className: sw.Vk }),
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
    return (0, a.jsx)(sb.Ay, {
        id: t,
        className: sw.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(I.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(sA, { titleId: u, title: E.intl.string(I.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(sA, { titleId: d, title: E.intl.string(I.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function sA(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: sw.Gf, children: n }),
            l,
        ],
    });
}
var sS = n(719442),
    sN = n(355622),
    sI = n(408018),
    sE = n(186306),
    s_ = n(323350),
    sM = n(35277),
    sR = n(68059),
    sP = n(267102),
    sT = n(259691);
let sL = (0, ak.createChannelRecord)({ id: "1", type: nN.rbe.DM });
function s$(e) {
    let t = sn.VW.end(e, []);
    return { anchor: t, focus: t };
}
function sD(e) {
    return (0, s_.WO)(sn.VW.richValue(e), { mode: "raw" });
}
function sq(e, t) {
    ((e.children = (0, sI.x7)(t)), (e.selection = s$(e)), e.onChange());
}
function sF(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(ri.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(sT.A, { attachmentId: r }), n] });
}
var sO = n(366811);
function sG(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function sz(e) {
    let t = sO.A.getState().path;
    return sG(window.location.pathname, e) && (null == t || sG(t, e));
}
function sB(e, t) {
    return null != t && (0, e0.vq)(e) && t.contains(e);
}
var sU = n(497437),
    sK = n(465410);
let sH = "body-md/normal",
    sW = null;
function sV(e) {
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
                frontFrom: 1e3 * (0, i8._R)(m),
                frontTo: 1e3 * (0, i8._R)(f),
                backFrom: 1e3 * (0, i8.T)(m),
                backTo: 1e3 * (0, i8.T)(f),
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
        _ = (0, c.bG)([aI.Ay], () => aI.Ay.useReducedMotion),
        M = t === E.intl.string(I.default.Zc7gML),
        R = r === t && M;
    function P(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: u()(sU.VT, { [sU.qk]: l }),
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
            children: (0, a.jsx)(i9.e, { shortcut: "tab", className: sU.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i7.o, {
                text: t,
                variant: sH,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(sU.xM, { [sU.s2]: l }),
                onStart: A,
                onComplete: () => s(t),
            }),
            P(sU.IS, n || (!_ && "out" === k), o),
            (0, a.jsx)("span", {
                ref: d,
                className: sU.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: sH, tag: "span", children: t }),
            }),
            R
                ? (0, a.jsxs)("span", {
                      className: sU.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: sH, tag: "span", className: sU.xM, children: t }),
                          P(sU.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let sX = i.memo(function (e) {
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
                let t = i.useContext(sP.Ay),
                    [n] = i.useState(() => {
                        let n = (0, sS.ie)();
                        return (
                            (n.children = (0, sI.x7)(e)),
                            (n.selection = s$(n)),
                            (0, sR.a)({
                                editor: n,
                                chatInputType: sN.oU.GENERIC_RICH_TEXTAREA,
                                channel: sL,
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
                                    for (let [t, l] of sn.VW.nodes(e, { at: [], match: sn.l5.isText }))
                                        for (let e of t.text.matchAll(ri.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        sE.o.withMergedEntry(e, () =>
                                            sn.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    sM.b.textToVoid(
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
            [_, M] = i.useState(() => sD(N));
        (0, sm.N$)(_);
        let R = i.useRef(_),
            [P, T] = i.useState(null),
            L = i.useCallback(() => {
                let e = sD(N);
                (e !== R.current && ((R.current = e), (0, sd.I)(t, e), M(e)),
                    T(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sn.ZF.isCollapsed(t)) return null;
                            let [n] = sn.VW.node(e, t.anchor.path);
                            return sn.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(N),
                    ));
            }, [N, t]),
            D = i.useCallback((e) => sq(N, e), [N]),
            q = "" !== _.trim();
        i.useEffect(() => y?.(q), [q, y]);
        let F = i.useRef(t);
        i.useLayoutEffect(() => {
            F.current !== t && ((F.current = t), sq(N, ru.A.getDraft(t)));
        }, [N, t]);
        let O = (0, c.bG)([aI.Ay], () => aI.Ay.isSubmitButtonEnabled),
            [G, z] = i.useState(!1),
            [B, U] = i.useState(!1);
        (i.useEffect(() => {
            r ? U(!1) : (G && U(!0), z(!1));
        }, [r, G]),
            i.useEffect(() => {
                if (!B) return;
                let e = setTimeout(() => U(!1), sZ);
                return () => clearTimeout(e);
            }, [B]));
        let {
                drafts: K,
                addFiles: H,
                pasteFiles: W,
                removeDraft: V,
                settled: X,
                takeRefs: Z,
            } = (0, e5.FM)({ projectId: t, surface: "chat", onUploadFile: f }),
            Y = (0, w.fc)(t),
            J = (0, w.bE)(t),
            ee = i.useRef(J);
        i.useEffect(() => {
            let e = ee.current;
            ((ee.current = J), S && null != e && null != J && J !== e && sn.VW.focus(N));
        }, [J, S, N]);
        let et = "" !== _.trim() || K.length > 0 || b || Y,
            en = S && et && X,
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
        let ea = (0, sh.rU)(t),
            [ei, es] = i.useState(null),
            [eo, eu] = i.useState(0),
            ec = i.useMemo(() => (null != P && S ? (0, sf.OG)(P, P.length) : null), [P, S]),
            ed = ec?.start ?? null;
        i.useEffect(() => {
            null == ed ? es(null) : (0, sh.IP)(t);
        }, [ed, t]);
        let em = ed === ei ? null : ec,
            ef = (function (e, t) {
                let n = (0, c.bG)([eI.Ay], () => eI.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, sv.yv)(n),
                    a = (0, c.bG)([sg.default], () => sg.default.getId()),
                    s = null != n && (0, Q.pL)(n) ? n.guild_id : void 0,
                    o = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != s && null != o && sp.A.requestMembers(s, o, 100);
                    }, [s, o]),
                    (0, c.yK)(
                        [n6.Ay, le.A, nC.default],
                        () => {
                            if (null == o) return [];
                            let e = null != s ? le.A.getGuild(s) : null,
                                t = (t) => (0, sf.mO)(t, o, null != e ? n6.Ay.getNick(e.id, t.id) : null),
                                i = new Set(n?.collaborator_role_ids ?? []),
                                u = null != e && i.has(sx.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : n6.Ay.getMemberIds(e.id)
                                              .map((e) => nC.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (u ||
                                                          (n6.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              i.has(e),
                                                          ) ||
                                                          lt.$3({
                                                              permission: nN.xBc.MANAGE_GUILD,
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
            eh = i.useMemo(() => (null == em ? [] : (0, sf.l$)(ef, ea, em.text)), [em, ef, ea]),
            eg = em?.text;
        i.useEffect(() => eu(0), [eg]);
        let ep = eh.length > 0,
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
                            (sM.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                sM.b.insertText(e, `${n} `));
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
                              if (null == t || !(0, ni.C)(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? (0, w.C)(e);
                              return (
                                  (0, w.My)(e),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, eD.Wx)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (ns.set(i, s),
                                          (s.job = (0, ni.B)({
                                              capture: (t) => (0 === t ? l : (0, w.C)(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = tP(e),
                                                              r = tP(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              tR(r.ctx, t, e),
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
                                              send: (n) => (0, eD.dv)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nu(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (ns.delete(i),
                                                          window.setTimeout(() => {
                                                              (nu(i, null),
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
                    null == sW && (sW = document.createElement("canvas").getContext("2d"));
                    let i = sW;
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
                })(sJ(eE.current), eF.current, (0, sf.Lj)(_));
                ("" !== l && er(l), D(""), es(null));
            }, [en, Y, t, _, o, Z, D]),
            ek = i.useCallback(
                (e) => {
                    (e.preventDefault(), ey());
                },
                [ey],
            ),
            ew = i.useCallback(() => {
                null != d && !G && (z(!0), d(), S && sn.VW.focus(N));
            }, [d, G, S, N]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (!t) return;
                    let e = sB(document.activeElement, l?.current);
                    function r(t) {
                        e = sB(t.target, l?.current);
                    }
                    function i(t) {
                        var r, i, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            sz(n) &&
                            (0, w.K7)(n)?.active !== !0 &&
                            !(0, $._c)(n).active &&
                            ((r = t.target),
                            (i = l?.current),
                            (s = e),
                            ((0, e0.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!sB(r, i) && null == r.closest('input, textarea, [contenteditable="true"]')
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
        let eC = (r && null != d) || B,
            eA = null == x || "" !== _ || !S || s || b ? null : x,
            eS = i.useCallback(
                (e) => {
                    if (ep && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
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
                    if ("Escape" === e.key && r && null != d && sz(t)) {
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
                [ey, h, r, d, ew, eA, D, ep, eh.length, ev, eb, em, t],
            ),
            eN = i.useCallback(
                (e) => {
                    S && W(e);
                },
                [S, W],
            );
        (0, sl.Vo)({
            event: nN.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eN(t);
            },
        });
        let eE = i.useRef(null),
            e_ = i.useCallback(() => {
                let e = R.current;
                p?.((0, sf.Lj)(e), () => {
                    R.current === e && D("");
                });
            }, [p, D]),
            [eM, eR] = i.useState(0),
            [eP, eT] = i.useState(!1);
        i.useEffect(() => {
            if (0 === _.length) return void eT(!1);
            let e = sJ(eE.current);
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
            let t = setTimeout(() => eT(!1), sQ);
            return () => clearTimeout(t);
        }, [_]);
        let eL = i.useMemo(() => ({ "--custom-glow-x": `${eM}px` }), [eM]),
            e$ = eP ? ` ${sU.EB}` : "",
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
            eB = i.useId(),
            eU = null != eA,
            eK = el ?? eA ?? eq,
            eH = "" === _ && "" !== eK;
        return (0, a.jsxs)("form", {
            onSubmit: ek,
            className: sU.DA,
            children: [
                ep
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
                          className: sU.lN,
                          children: [
                              K.map((e) => (0, a.jsx)(e5.Nl, { draft: e, onRemove: V }, e.localId)),
                              Y ? (0, a.jsx)(so, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${sU.wg} ${sU.LP}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${sU.wg} ${sU.L3}${e$}`, style: eL, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: sU.VA,
                    ref: eE,
                    children: [
                        (0, a.jsx)(sj.A, {
                            navId: "conjure-composer-attach",
                            disabled: !S,
                            buttonClassName: `${sU.Y0} ${sU.nu}`,
                            iconClassName: sU.Qu,
                            onAddFiles: H,
                            onImport: g,
                            onSendToOtherProjects: null != p ? e_ : void 0,
                        }),
                        eH
                            ? (0, a.jsx)("div", {
                                  ref: eG,
                                  className: sU.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(
                                      sV,
                                      { text: eK, offering: eU && null == el, typed: null != el },
                                      A ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, a.jsx)(tZ.A, { id: eB, children: E.intl.string(I.default.ldNl9x) }),
                        (0, a.jsx)(ri.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(st.A, {
                                editor: N,
                                containerClassName: u()(sU.sq, sK.dv),
                                className: sU.jp,
                                readOnly: !S,
                                canFocus: S,
                                onChange: L,
                                onBlur: () => T(null),
                                onKeyDown: eS,
                                onPaste: eN,
                                renderExtraElement: sF,
                                "aria-labelledby": eB,
                                "aria-describedby": eH ? ez : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ep,
                                "aria-controls": ep ? ej : void 0,
                                "aria-activedescendant": ep ? ((0, sb.aI)(ev) ?? void 0) : void 0,
                            }),
                        }),
                        eH ? (0, a.jsx)(tZ.A, { id: ez, children: eq }) : null,
                        (0, a.jsx)("div", {
                            className: sU.Sz,
                            onMouseDown: eC ? sY : void 0,
                            children: eC
                                ? (0, a.jsx)(ex.m, {
                                      text: E.intl.string(I.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${sU.Y0} ${sU.$E} ${sU.PG}`,
                                          disabled: G || !r,
                                          onClick: ew,
                                          "aria-label": E.intl.string(I.default.wiguT0),
                                          children: (0, a.jsx)(rd.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : k?.tierSettings != null && null != C
                                  ? (0, a.jsx)(sc.A, {
                                        settings: k.tierSettings,
                                        tiers: k.tiers,
                                        choices: k.choices,
                                        disabled: !S,
                                        onChange: C,
                                        className: `${sU.Y0} ${sU.$E}`,
                                        icon: (0, a.jsx)(i6.FiltersHorizontalIcon, {
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
                                  className: sU.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: sU.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: sU.rt,
                                          disabled: !en,
                                          "aria-label": E.intl.string(I.default.rxW2cl),
                                          children: (0, a.jsx)(se.SendMessageIcon, {
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
    sQ = 1500,
    sZ = 1e3;
function sY(e) {
    e.preventDefault();
}
function sJ(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var s0 = n(709753),
    s1 = n(540338);
function s2(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, tK.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var s3 = n(986109);
let s4 = i.createContext(null);
function s5(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(s4),
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
        className: u()(s3.xk, { [s3.g5]: m, [s3.Qo]: s, [s3.q3]: o }),
        children: n,
    });
}
let s7 = new Map();
function s8(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let s9 = "live_behind";
var s6 = n(165963);
function oe(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([l0.A], () => null != n && n.length > 0 && lX({ keys: n }, l0.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: E.intl.string(I.default.F2yVHg) }
        : null;
}
function ot(e) {
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
let on = [12e4];
var ol = n(292771);
function or(e) {
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
            className: ol.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: u()(ol.qd, e.leaving ? ol.dv : ol.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function oa(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var oi = n(247171);
function os(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: u()(oi.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: u()(oi.gutter, oi[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: oi.content, children: i }),
        ],
    });
}
var oo = n(830205);
function ou(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(os, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: oo.aK,
        children: (0, a.jsxs)("div", {
            className: oo.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: oo.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: oo.X8,
                          children: (0, a.jsx)(ex.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tl.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: ev.XSmallIcon,
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
function oc(e) {
    let { projectId: t } = e,
        n = i.useContext(eO.bI);
    return (0, a.jsx)(ou, {
        icon: ia.ShieldIcon,
        children: E.intl.format(I.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, eO.vL)(t, n.guildId));
            },
        }),
    });
}
var od = n(443865),
    om = n(716502);
function of(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(os, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: om.Nr,
        children: (0, a.jsxs)("section", {
            className: om.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: om.X8,
                          children: (0, a.jsx)(ex.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tl.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: ev.XSmallIcon,
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
function oh(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: om.DD,
        children: t,
    });
}
function og(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: om.rf,
        children: t,
    });
}
function op(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: om.o1, children: t });
}
var ox = n(95635);
function ov(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, eG.A)(t, n);
    return (0, a.jsx)(ou, {
        icon: ox.UploadIcon,
        onDismiss: l,
        children: E.intl.format(I.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let oj = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && oa(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(oc, { projectId: n });
        },
    },
    {
        id: s9,
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
                : null != (t = e.messagesSinceShown(s9)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(ov, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || oa(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(of, {
                icon: od.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(oh, { children: E.intl.string(I.default.OJlbhX) }),
                    (0, a.jsx)(og, { children: E.intl.string(I.default["3vJBni"]) }),
                    (0, a.jsx)(op, {
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
var ob = n(817921);
function oy(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, eO.Ay)(e),
                    o = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()?.id),
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
                                if ((0, tK.BL)(n)) return n;
                                if (!(0, tK.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == f || ot(f) ? null : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === s8(t, g.created_at, o) ? g.id : null,
                    x = u?.projectEvent?.type === "remixed" ? u.projectEvent : null,
                    v = x?.id ?? p,
                    j = oe(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([l0.A], () => b > 0 && null == l0.A.getSettings(e), [b, e]),
                    k = (0, s0.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, tK.Ji)(t)) || !!(0, tK.B0)(t, t.lastIndexOf(a))) &&
                        (null == f || !ot(f)) &&
                        null == s2(t) &&
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
                        let l = s7.get(`${e}:${n}`);
                        return null != l ? s8(t, l, o) : null;
                    },
                    isDismissed: (t) => (0, s6.VS)(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, on);
            (0, s6.$p)();
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
                                s7.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                u.map((e) => ({
                    ...e,
                    options: {
                        context: a,
                        dismiss: null != e.tip.dismissal ? () => (0, s6.qv)(e.tip, t, a.ideasIntroAnchorId) : void 0,
                    },
                }))
            );
        })(oj, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(s5, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: ob.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(or, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var ok = n(52133),
    ow = n(732159),
    oC = n(888366),
    oA = n(862026),
    oS = n(291192);
function oN(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, oA.L)(t, n);
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
                            (0, a.jsx)(v.E, {
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
                    (0, a.jsxs)(v.E, {
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
                                                        void (0, O.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(ow.u, {
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
var oI = n(345942),
    oE = n(727419),
    o_ = n(576705);
function oM(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            E.intl.format(n ? I.default.esEGL5 : I.default["XrN+Bg"], {
                onOpen: () => oE.A.open(t, nN.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var oR = n(976860);
function oP(e) {
    return (0, c.bG)([eI.Ay, aj.A], () => {
        let t = eI.Ay.getProject(e);
        return null == t ? "" : (aj.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var oT = n(951465),
    oL = n(369455);
function o$(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: o } = e,
        u = oP(s),
        d =
            null ==
            (i = (0, c.bG)([eI.Ay, le.A], () => {
                let e = eI.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (le.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        m = (0, c.cf)([eI.Ay, eq.A, le.A, o_.A], () => {
            let e = eI.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(Q.q7.AUTOMOD) === !0 ||
                    eq.A.getPublishStatus(s)?.surface === "automod",
                n = le.A.getGuild(e.guild_id),
                l = null != n && o_.A.can(nN.xBc.MANAGE_GUILD, n);
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
                        null != d && (0, oI.u)(d.guildId);
                    },
                },
            ),
            null != m.guildId
                ? (0, a.jsx)(oM, { guildId: m.guildId, update: o.update })
                : !m.automod && o.update && null != o.published_revision
                  ? (0, a.jsx)(oD, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function oD(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(eO.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [eq.A, eI.Ay],
                    () => {
                        let r = eq.A.getPublishStatus(e),
                            a = eI.Ay.getProject(e);
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
                                (0, eI.jf)(a),
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
                                    ep.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: oL.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, oR.pX)(nN.BVt.CHANNEL(t, n, l));
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
                                        r = eI.Ay.getProject(e),
                                        a = null == r ? null : (0, eO.KL)(r, l);
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
                                null != e && (0, oT.A)(e);
                            },
                        }),
              ],
          });
}
var oq = n(73153),
    oF = n(505527),
    oO = n(367790),
    oG = n(354777),
    oz = n(491182),
    oB = n(74096),
    oU = n(549587),
    oK = n(448368),
    oH = n(21299),
    oW = n(538355),
    oV = n(715628),
    oX = n(752636),
    oQ = n(9842),
    oZ = n(589022),
    oY = n(967198),
    oJ = n(531685),
    o0 = n(503275);
let o1 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function o2(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function o3(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function o4(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = o3(e, t),
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
    if (o2(r) && o2(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && o2(o3(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function o5(e, t) {
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
                      for (; a > 0 && o4(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && o1.has(e.charAt(l - 1));) l--;
                                    return o1.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && o4(t, o);) o++;
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
var o7 = n(624479),
    o8 = n(890377),
    o9 = n(92446),
    o6 = n(957565),
    ue = n(180227);
function ut(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: u()(ue.QE, { [ue.Rn]: t }),
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
function un(e) {
    return o6.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: o7.CopyIcon, onClick: () => (0, o6.C)(e) }]
        : [];
}
function ul(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(I.default.CXtLD2),
                          tooltip: E.intl.string(I.default.DOb1HM),
                          icon: o8.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(I.default.urZwpN),
                          icon: ev.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(ut, { groupStart: n, actions: [...r, ...un(t)] });
}
function ur(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(I.default.H8Jfhu), icon: ti.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: o9.BugIcon, onClick: r }];
    return (0, a.jsx)(ut, { groupStart: n, actions: [...i, ...un(t), ...s] });
}
let ua = (0, ak.createChannelRecord)({ id: "conjure-builder", type: nN.rbe.DM }),
    ui = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function us(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: u()(ue.Yq, { [ue.x1]: t }), children: e });
}
function uo(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let uu = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function uc(e, t, n) {
    let { content: l } = (0, oW.A)(e, uu),
        r = i.useMemo(() => ((0, ri.aW)(e.content) ? (0, oG.z2)(i0.U, e, uu).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: ua, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(oB.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, oV.A)(s, r);
}
function ud(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oH.m)(e, ua, t.usernameProfile, l),
        o = (0, oH.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([oY.A], () => oY.A.getGuildId()),
        d = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = nC.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(oZ.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
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
let um = { formatInline: !0, allowGameMentions: !0 };
function uf(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, oW.A)(n, um),
        o = i.useMemo(() => {
            let e = "" === n.content ? null : (0, ri.aW)(n.content) ? (0, oG.z2)(i0.U, n, um).content : s;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: ue.GV,
                              children: [
                                  (0, a.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: ue.Rj,
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
        f = (0, aJ.X4)(t),
        g = ud(n);
    return (0, a.jsx)(oK.A, {
        repliedAuthor: m,
        baseAuthor: f,
        baseMessage: t,
        channel: ua,
        referencedMessage: { state: oQ.a.LOADED, message: n },
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
function uh(e) {
    let { message: t, author: n } = e,
        l = ud(t);
    return (0, a.jsx)(oU.Ay, {
        message: t,
        channel: ua,
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
function ug(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, o0.vm)(l),
        c = i.useMemo(() => (0, aJ.FT)(u, null), [u]),
        d = i.useMemo(() => (0, lR.W1)(t), [t]),
        m = d?.body ?? t,
        f = (0, sf.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, ay.Ay)({ channelId: ua.id, content: m, author: u });
            return (0, ab.rh)({ ...e, timestamp: uo(n, e.timestamp), state: nN.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              up,
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
function up(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = uc(t, l);
    return (0, a.jsx)(oz.A, {
        className: ue.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(uh, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: ue.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: ue.GV,
                              children: [
                                  (0, a.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: ue.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: ue.WO, children: u }),
                      ],
                  }),
        childrenAccessories: us(i, "" !== l),
        childrenButtons: (0, a.jsx)(ul, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function ux(e) {
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
        { text: m, revealing: f } = o5(t, { streaming: (0, c.bG)([oJ.A], () => u && oJ.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, aJ.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, o0.vm)(p),
        v = i.useMemo(() => (null == r ? null : (0, lR.W1)(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, ay.Ay)({ channelId: ua.id, content: v?.body ?? r.content, author: x });
            return (0, ab.rh)({ ...e, id: r.id, timestamp: uo(r.createdAt, e.timestamp), state: nN.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: ua.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, ay.Ay)({ channelId: ua.id, content: "", author: ui })),
        k = i.useMemo(
            () =>
                (0, ab.rh)({
                    ...y,
                    timestamp: uo(n, y.timestamp),
                    state: nN.cmJ.SENT,
                    ...(null != b ? { type: nN.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        C = i.useMemo(
            () => (0, oX.A)({ message: k, channel: ua, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        A = uc(w, m, ue.OS);
    return (0, a.jsxs)("div", {
        className: ue.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(oz.A, {
                className: ue.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(uf, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: C,
                childrenMessageContent: A,
                childrenAccessories: us(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            o ? (0, a.jsx)("img", { className: ue.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var uv = n(981879);
function uj(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, ab.rh)(
                    { ...(0, ay.Ay)({ channelId: ua.id, content: "" }), id: `conjure:${t}`, state: nN.cmJ.SENT },
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
                (oq.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: ua.id,
                    messageId: l.id,
                    users: [ui],
                    emoji: e,
                    reactionType: oF.v6.NORMAL,
                }),
                    oq.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: ua.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: oF.v6.NORMAL,
                    }));
            }
            return (
                t(),
                oq.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    oq.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: uv.H,
            children: (0, a.jsx)(oO.A, {
                message: l,
                channel: ua,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var ub = n(442433);
n(775443);
var uy = n(990779),
    uk = n(155899),
    uw = n(165862),
    uC = n(477782);
function uA(e) {
    let { onSelect: t, onClose: n = ub.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(uw.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(uC.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(uC.Dr, {
                          id: "restore-version",
                          label: E.intl.string(I.default.H8Jfhu),
                          icon: ti.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(uC.Dr, { id: "view-trace", label: "View Trace", icon: o9.BugIcon, action: r })
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
        y = null != b && null != x ? () => uN(b, x) : void 0,
        k =
            ((t =
                T() && "assistant" === j.role && (0, tK.BL)(j)
                    ? (j.turn_id ?? j.steps.find((e) => null != e.turn_id)?.turn_id ?? j.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [uy.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : uy.A.getTimingTraces(l).findLast((e) => {
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
    return (0, a.jsx)(s5, {
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
                          void (0, ub.jA)(t, (e) => (0, a.jsx)(uA, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(ux, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(ur, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: y,
                onViewTrace: w,
            }),
            content: n.content,
            createdAt: j.created_at,
            replyTo: r,
            onJumpToReplied: null != C && null != i ? () => i(C) : void 0,
            accessories: (0, a.jsx)(i5, {
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
                restoreProposal: A,
                publishScheduleProposal: j.publishScheduleProposal,
                publishScheduleProposalCurrent: h,
                serverChange: n.active ? void 0 : j.serverChange,
                serverChangeCurrent: h,
                onCardReply: v,
                onRestoreProposal:
                    null != A && null != x && h
                        ? () =>
                              uN(
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
function uN(e, t) {
    (0, uk.F)({ onConfirm: () => t(e) });
}
var uI = n(288539),
    uE = n(677683),
    u_ = n(677690),
    uM = n(159711);
function uR(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([uE.A], () => uE.A.getOutcome(l))),
            (n = (0, c.bG)(
                [nk.A, nC.default, nw.A],
                () => {
                    let e = t?.status === "pinned" ? nk.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, ny.m1)(e, nC.default, nw.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = E.intl.string(I.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(t1, {
              title: s,
              children: (0, a.jsx)(v.E, {
                  className: uM.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? E.intl.formatToPlainString(I.default.gKe6Lw, { channelName: i ?? "" })
                          : E.intl.string(I.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(t1, { title: s, children: (0, a.jsx)(uP, { projectId: l }) });
}
function uP(e) {
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
            let n = (0, c.bG)([eI.Ay], () => eI.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [n9.A, o_.A],
                        () =>
                            null == t
                                ? []
                                : n9.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === nN.rbe.GUILD_VOICE && o_.A.can(nN.xBc.MANAGE_CHANNELS, e),
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
                    let t = await (0, u_.pk)(m.id, f);
                    (o(!1), t ? (0, u_.tg)(e, { status: "pinned", channelId: m.id }) : d(!0));
                }, [f, e, m]),
                g = i.useCallback(() => (0, u_.tg)(e, { status: "skipped" }), [e]);
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
        className: uM.r,
        children: (0, a.jsxs)(nG.B, {
            gap: 12,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: E.intl.string(I.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(np.Z, {
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
                    className: uM.o,
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
function uT(e, t, n) {
    return (0, a.jsx)(uI.A, { userId: e, content: `@${t}` }, n);
}
function uL(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, o0.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([nC.default], () => (null == l ? null : nC.default.getUser(l)), [l]),
                a = (0, aC.tx)(r),
                s = oP(e),
                o =
                    (0, c.bG)([le.A], () => (null == t.guild_id ? null : le.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    E.intl.string(I.default.R1tPlP),
                u = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([le.A], () => (null == u ? null : le.A.getGuild(u)?.name), [u]),
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
        })(t, n, uT),
        r = oe(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(uR, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(v.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rt, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let u$ = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    no.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, ri.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(s5, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ug, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(iJ.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(su, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(uj, { messageId: o.id, reaction: o.agentReaction })
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
                    return (0, a.jsx)(s5, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ux, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(iJ.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(s5, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(i4, {
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
                    return (0, a.jsx)(s5, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ux, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(o$, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(s5, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ux, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(uL, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(s5, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(oN, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(s5, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(i4, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(s5, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(i4, {
                            projectId: l,
                            steps: uD,
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
                (0, ok.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, ok.A)(e.row, t.row, ["message"]) &&
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
                (0, ok.A)(e.replyTo, t.replyTo) &&
                (0, ok.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    uD = [],
    uq = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    uF = new WeakMap();
function uO(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function uG(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let uz = ["wheel", "touchstart", "pointerdown", "keydown"];
function uB(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let uU = i.memo(function (e) {
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
        L = (0, c.bG)([eq.A], () => eq.A.getPublishStatus(t)),
        $ = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()?.id),
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
                        i = uF.get(r);
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
                                (0, tK.ST)(e) ||
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
                        let a = !(0, tK.BL)(e),
                            i = rm({
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
                            if (null != n.prose && uq.test(n.prose.content)) m = !0;
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
                                        turnActive: tH(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = uq.test(e.content ?? "");
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
                    (uF.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
            if (null == t) return uO(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : uG(e, t.endKey, t.end - 1) + 1,
                a = uG(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), uO(e, a, r));
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
            let e = x.current?.getScrollerNode(),
                t = X.current ? uB(A.current) : null;
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
        for (let n of uz) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of uz) e.removeEventListener(n, t);
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
                    return ((n = Math.min(e.length, t.end + 30)), uO(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), uO(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? uO(e, i, t.end) : null;
            })(B.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: b.current,
            });
            "older" === n ? (0, eD.P6)(t) : null != n && O(n);
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
                if (!B.current.includes(n.key)) return !1;
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
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, eD.P6)(t) && (J.current = e);
                    return;
                }
                (k(),
                    (H.current = () => {
                        (A.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            T(e));
                    }),
                    O(((n = B.current), uO(n, (l = Math.max(0, a - 30)), l + 60))));
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
            ((z.current = G), (B.current = q), (U.current = D));
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
                if (r && b.current && null != uB(l)) (k(), O(z.current), (X.current = !0), Q());
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
    let en = i.useMemo(() => s2(n), [n]),
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
                : (0, tK.BL)(ei)
                  ? ei.awaitingUser
                  : null) ?? void 0,
        eo = (0, c.bG)([l0.A], () => l0.A.getSettings(t)?.secrets, [t]),
        eu = (0, s0.WT)(t),
        ec = i.useMemo(() => (0, lU.Mv)(n, eo), [n, eo]);
    if (!(0, tK.i_)(n)) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: u()(s3.x7, s3.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: s3.Ub, children: (0, a.jsx)(j.y, {}) }),
            });
        let e = "unavailable" === l ? I.default.Td4Sf4 : I.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: s3.x7,
            children: (0, a.jsx)(s5, { role: "assistant", children: (0, a.jsx)(ux, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(s4.Provider, {
        value: W,
        children: (0, a.jsxs)("ol", {
            ref: _,
            className: s3.x7,
            children: [
                D.slice(G.start, G.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            u$,
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
                        u$,
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
                              s5,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(ux, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(s1.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != es && et
                    ? (0, a.jsx)(s5, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(ux, {
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
                et ? (0, a.jsx)(oy, { projectId: t, messages: n, draftHasText: !0 === o, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var uK = n(731084),
    uH = n(336288),
    uW = n(187447);
function uV(e) {
    let { activity: t, id: n } = e,
        l = (0, tB.j)(),
        { text: r, revealing: s } = o5(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
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
            className: uW.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(tO.Ch, {
                ref: o,
                onScroll: m,
                className: uW.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: u()(i3.PT, uW.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: aP.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var uX = n(53659);
function uQ(e) {
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
        b = (0, uK.xu)({
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
        k = b === uK.kx["0"],
        [w, C] = i.useState(f ?? y),
        A = (0, tB.j)();
    (l || (0, uK.E4)(y, w) || (!A && !k)) && w !== y && C(y);
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
        ((M.current = k), !k && (0, uK.E8)(_.current) && C(S.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                M.current
                    ? ((R.current = (0, uK.E8)(_.current) ? R.current + 1 : 0), C((0, uK.Ov)(R.current)))
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
    return (0, a.jsx)(eH.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: L,
        onRequestClose: D,
        renderPopout: () => (0, a.jsx)(uV, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(ep.D, {
                innerRef: g,
                className: u()(uX.hF, P && uX.Xd),
                "aria-label": E.intl.string(
                    r
                        ? I.default.qqlUiW
                        : b === I.default.j8tmjK
                          ? I.default.j8tmjK
                          : k
                            ? uK.kx["0"]
                            : I.default["Uuj/gh"],
                ),
                "aria-expanded": L,
                "aria-describedby": L ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: $,
                children: [
                    (0, a.jsx)("span", {
                        className: uX.bl,
                        children: (0, a.jsx)(uH.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: uX.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(i7.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: uX.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: uX.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let uZ = { second: 1e3, minute: 6e4 };
function uY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = uZ[t];
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
var uJ = n(719374);
function u0(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = uY(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: uJ.$,
        "data-conjure-turn-timer": !0,
        children: (0, ry.C7)(l),
    });
}
function u1(e) {
    let { startedAt: t } = e,
        n = uY(t, "minute");
    return (0, a.jsx)(tZ.A, { role: "timer", children: (0, ry.Us)(n) });
}
var u2 = n(885574),
    u3 = n(242779),
    u4 = n(436804);
function u5(e) {
    return e.toLocaleString();
}
function u7(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: u4.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: u4.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [u5((0, u3.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    u5(n.input_tokens),
                    " in \xb7 ",
                    u5(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${u5(n.cache_creation_input_tokens)} cache write \xb7 ${u5(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function u8(e) {
    let { project: t } = e,
        n = (0, u3.wU)(t.compaction),
        l = (0, u3.wU)(t.classifier),
        r = (0, u3.wU)(t.image),
        i = (0, u3.wV)(t.orchestrator, t.codegen),
        s = (0, u3.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: u4.si,
        role: "dialog",
        "aria-label": E.intl.string(I.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: u4.Q$,
                children: (0, a.jsxs)("div", {
                    className: u4.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [u5((0, u3.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(u7, { label: E.intl.string(I.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(u7, { label: E.intl.string(I.default.ANCEo3), usage: n }),
            (0, a.jsx)(u7, { label: E.intl.string(I.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(u7, { label: E.intl.string(I.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: u4.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(I.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, u3.sj)(s) ? "\u2014" : `${Math.round(100 * (0, u3.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function u9(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(eH.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(u8, { project: t }),
        children: (e) =>
            (0, a.jsx)(ep.D, {
                innerRef: n,
                className: u4.Y$,
                "aria-label": E.intl.string(I.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(u2.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var u6 = n(990250);
function ce(e) {
    let { queued: t } = e,
        n = E.intl.string(I.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: u6.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: u6.wx,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(tO.Ch, {
                className: u6.XG,
                children: (0, a.jsx)("ul", {
                    className: u6.p_,
                    children: t.map((e) => (0, a.jsx)(ct, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function ct(e) {
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
              className: u6.AS,
              children: (0, a.jsx)(v.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: E.intl.string(I.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: u6.AS,
              children: [
                  (0, a.jsx)(v.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: u6.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(nF.Q, {
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
function cn(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(eH.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(ce, { queued: t }),
        children: (e) =>
            (0, a.jsx)(ep.D, {
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
var cl = n(997421);
function cr(e) {
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
        j = (0, c.bG)([eq.A], () => eq.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, uK.E8)(e) || e === E.intl.string(I.default.mKK6wB) || e === E.intl.string(I.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, uK.uc)(h),
        C = null != s,
        A = s ?? (n ? l : void 0),
        S = n || r || C || !0 === f;
    return (0, a.jsxs)("div", {
        className: cl.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cl.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    S || o || x || j
                        ? (0, a.jsx)(uQ, {
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
                    null != A ? (0, a.jsx)(u0, { startedAt: A }) : null,
                ],
            }),
            null != A ? (0, a.jsx)(u1, { startedAt: A }) : null,
            0 === p.length ? null : (0, a.jsx)(cn, { queued: p, className: u()(cl.BP, cl.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cl.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(u9, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(I.default["tCo+ZM"], { status: (0, uK.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cl.XF,
                      children: (0, uK.Db)(g),
                  }),
        ],
    });
}
var ca = n(698638),
    ci = n(608711);
let cs = [E.intl.string(I.default["9w+Chc"]), E.intl.string(I.default.WAvmdq), E.intl.string(I.default.SKsrzl)];
function co(e) {
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
        j = (0, c.bG)([l1.A], () => l1.A.getMessages(m), [m]),
        b = (0, c.bG)([eD.Ay], () => eD.Ay.getConnState(m), [m]),
        y = (0, c.bG)([l1.A], () => l1.A.getProjectUsage(m), [m]),
        k = (0, c.bG)([l1.A], () => l1.A.getThinkingActivity(m), [m]),
        w = (0, c.bG)([l1.A], () => l1.A.isCompacting(m), [m]),
        C = (0, c.bG)([l1.A], () => l1.A.isSaving(m), [m]),
        S = (0, c.bG)([lP.A], () => lP.A.getModelSettings(m), [m]),
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
                    for (let e of uz) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of uz) t.removeEventListener(e, u);
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
        U = i.useCallback(() => {
            (z(), M.current?.handleScroll());
            let e = R.current;
            null != e && (e.position = P.current ? null : (M.current?.snapshot() ?? null));
        }, [z, P]),
        V = i.useContext(K.A) === m;
    i.useLayoutEffect(() => {
        if (!V) return;
        let e = { position: W.A.getProjectView(m).chatScroll };
        return ((R.current = e), () => (0, H.g7)(m, { chatScroll: e.position }));
    }, [V, m]);
    let X = i.useRef(!V);
    (i.useLayoutEffect(() => {
        if (X.current || !(0, tK.i_)(j)) return;
        X.current = !0;
        let e = W.A.getProjectView(m).chatScroll;
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
            (0, eD.ensureConnection)(m);
        }, [m]),
        (0, ro.E1)(m, (0, tB.j)()));
    let Q = (0, $.rt)(m),
        Z = (function (e) {
            let t = (0, eO.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([le.A], () => (null == n ? null : (le.A.getGuild(n)?.name ?? null))),
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
            let t = (0, c.bG)([rl.A], () => rl.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rr.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rn.A.getSubmitRequestURL();
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
            ((l = (0, c.bG)([lz.A], () => lz.A.getFailure(m))),
            (r = i.useCallback(() => (0, lB.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: E.intl.format(I.default.Up6Ssw, { reason: l }),
                      retry: { text: E.intl.string(I.default["ywA+ET"]), onClick: r },
                  }),
        ee = (0, lL.E8)(m),
        et = (0, c.bG)([lz.A], () => lz.A.getSetupStartedAt(m), [m]),
        en = i.useCallback(
            (e, t) => {
                (0, eD.dv)(m, e, t);
            },
            [m],
        ),
        el = i.useCallback(
            (e, t, n) => {
                let l = n ?? en;
                0 === Q.annotations.length
                    ? l(e, t)
                    : (l((0, lR.BL)({ annotations: Q.annotations, metaComment: e, context: Q.context }), t),
                      (0, $.mB)(m));
            },
            [Q, en, m],
        ),
        er = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of ns)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, eD.re)(e, l.nonce),
                        (function (e) {
                            let t = ns.get(e);
                            (ns.delete(e), nu(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                l1.A.isThinking(m)) &&
                (0, eD.fu)(m);
        }, [m]),
        ea = i.useCallback((e) => (0, nd.RQ)(m, e.implementation_prompt), [m]),
        ei = i.useCallback((e) => (0, nd.RQ)(m, e), [m]),
        [es, eo] = (function (e) {
            let [t, n] = i.useState(() => rc(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rc(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(m),
        eu = i.useCallback(() => en(E.intl.string(I.default["t5CN3+"])), [en]),
        ec = i.useCallback((e, t, n) => (0, nd.RQ)(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        ed = i.useCallback((e) => (0, lT.X)(m, e), [m]),
        em = i.useCallback((e) => (0, e2.vX)(m, e), [m]),
        ef = i.useCallback((e) => (0, e5.gn)(m, "chat", Array.from(e), em), [m, em]),
        eh = i.useCallback(() => (0, nd.RQ)(m, E.intl.string(I.default.Zc7gML)), [m]),
        eg = f?.status === "restoring",
        ep = "open" === b && !eg,
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
        eE = ej?.appBuildRequest != null && (0, tK.BL)(ej) && ej.appBuildRequest.id !== eS ? ej.appBuildRequest : null,
        e_ = eI.request ?? (null == eC ? eE : null),
        eM = null == eI.request ? eC : null,
        eR = null != e_ && e_ === eI.request,
        { close: eP, sent: eT } = eI,
        eL = eI.request?.id,
        e$ = i.useCallback(() => {
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
        eF = (0, c.bG)([l0.A], () => l0.A.getSettings(m), [m]),
        [eG, ez] = i.useState(null),
        eB = l5(),
        eU =
            null != ej &&
            ((t = ej.id),
            (s = (0, lU.Mv)(j, eF?.secrets)),
            (o = l7(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, tK.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !l8(e.settingsRequest, eF, eB.has(e.id)))),
            )),
        eK =
            null != ej &&
            "assistant" === ej.role &&
            null != ej.settingsRequest &&
            null == ej.secretRequest &&
            (0, tK.BL)(ej) &&
            ej.id !== eG &&
            ((n = ej.settingsRequest),
            (u = n.keys ?? []),
            null != eF &&
                0 !== u.length &&
                u.every((e) => {
                    let t = eF.schema.find((t) => t.key === e);
                    return null != t && lV.has(t.type);
                })) &&
            lX(ej.settingsRequest, eF) &&
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
        eY = eF?.secrets,
        eJ = i.useMemo(() => (0, lU.Qr)(j, (0, lU.Mv)(j, eY)), [j, eY]),
        e1 = null != eJ && eJ.render_id !== eQ ? eJ : null,
        e3 = null == eM && null == e_ ? e1 : null,
        e4 = i.useCallback(() => {
            null != e1 && eZ(e1.render_id);
        }, [e1]),
        [e7, e8] = i.useState(null),
        e9 = eM?.id ?? e_?.id ?? e3?.render_id ?? eH?.id,
        e6 = null != eC || null != e_ || null != e1 || null != eK;
    i.useLayoutEffect(() => {
        let e = _.current?.getScrollerNode(),
            t = e7?.firstElementChild;
        if (null == e7 || null == e || !(0, e0.vq)(t, HTMLElement) || null == e9) return;
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
            historyLoaded: (0, c.bG)([l1.A], () => l1.A.hasLoadedHistory(m), [m]),
            historyUnavailable: (0, c.bG)([l1.A], () => l1.A.isHistoryUnavailable(m), [m]),
            connState: b,
        }),
        tt = !(0, tK.i_)(j),
        tn = "loading" === te && tt,
        tr = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return cs[e % cs.length];
        }, [m]),
        ta = eb ? E.intl.string(I.default.Zc7gML) : "greeting" === te && tt ? tr : null,
        ti = i.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, tK.BL)(t)) return t;
            }
        }, [j]),
        ts = null != ti,
        to = i.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        tu = null != ti ? (0, ra.S)(ti) : void 0,
        tc = eb && ep ? eh : void 0,
        td = i.useCallback(() => (0, nd.RQ)(m, E.intl.string(I.default.EMgIuY)), [m]),
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
        tx = i.useMemo(() => (null != ti ? (0, tW.b9)(ti.steps) : ""), [ti]),
        tv = i.useMemo(() => (null != ti ? ((0, tU.lt)(ti.steps) ?? ti.todos) : void 0), [ti]),
        tj = ti?.provisionalTodo,
        tb = null != ti && tH(ti),
        ty = i.useMemo(() => {
            var e;
            return null != ti ? ((e = ti.steps), rS((0, tU.Jf)(e, !0).tasks)) : void 0;
        }, [ti]);
    return (0, a.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: ci.TE,
        children: [
            ep
                ? (0, a.jsx)(tz.A, {
                      title: E.intl.string(I.default.gy7byi),
                      description: E.intl.string(I.default["dkv/WO"]),
                      icons: ca.ir,
                      onDrop: ef,
                  })
                : null,
            (0, a.jsx)(nr, {
                onJumpToActivity: B,
                line: tx,
                placement: ts && "top" === tp ? "top" : null,
                todos: tv,
                todosLive: tb,
                provisionalTodo: tj,
                agents: ty,
            }),
            (0, a.jsxs)("div", {
                className: ci.JX,
                children: [
                    (0, a.jsx)(tO.Ch, {
                        ref: _,
                        onScroll: U,
                        scrollbarGutter: tn ? "both-edges" : "stable",
                        className: [ci.N$, L ? null : ci.hB, eX ? ci.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(ri.Fu.Provider, {
                            value: m,
                            children: (0, a.jsx)(uU, {
                                projectId: m,
                                messages: j,
                                emptyState: te,
                                floatingSettingsMessageId: eK?.id,
                                floatingSecretRenderId: e3?.render_id,
                                liveClarificationId: eM?.id,
                                onPickIdea: ep ? ea : void 0,
                                onAskForIdeas: ep ? eu : void 0,
                                draftHasText: es,
                                onApprovePlan: ep ? td : void 0,
                                onRestoreVersion: eg || ts ? void 0 : h,
                                onCardReply: ep ? ei : void 0,
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
                        className: ci.NJ,
                        children: (0, a.jsx)(cr, {
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
                              className: eX ? `${ci.B5} ${ci.J9}` : ci.B5,
                              children: (0, a.jsx)(
                                  lM,
                                  { projectId: m, clarification: eM, onSubmit: ep ? ec : void 0, onDismiss: eA },
                                  eM.id,
                              ),
                          }),
                    null == e_
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: ci.B5,
                              children: (0, a.jsx)(
                                  nb,
                                  { projectId: m, request: e_, canSend: ep, onDismiss: e$, onSent: eR ? eq : void 0 },
                                  e_.id,
                              ),
                          }),
                    e3?.secretRequest == null
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e8,
                              className: ci.B5,
                              children: (0, a.jsx)(
                                  lJ,
                                  {
                                      projectId: m,
                                      cardId: e3.render_id,
                                      request: e3.secretRequest,
                                      status: "open",
                                      onDismiss: e4,
                                  },
                                  e3.render_id,
                              ),
                          }),
                    null == eW
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eM && null == e_ ? e8 : void 0,
                              className: ci.B5,
                              children: (0, a.jsx)(
                                  rt,
                                  { askId: eH?.id, projectId: m, request: eW, onDismiss: eV },
                                  eH?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ci.Jx,
                children: [
                    (0, a.jsx)(nr, {
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
                              className: ci.g0,
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
                    null == ee ? null : (0, a.jsx)(lG, { pending: ee }, ee.publishTurnId),
                    null == J
                        ? null
                        : (0, a.jsx)("div", {
                              className: ci.qB,
                              children: (0, a.jsx)(tG.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: J.message,
                                  action: J.retry,
                              }),
                          }),
                    null == Z
                        ? null
                        : (0, a.jsxs)("div", {
                              className: ci.Db,
                              children: [
                                  (0, a.jsx)(tG.w, { type: "warning", role: "status", message: Z.message }),
                                  (0, a.jsx)("div", {
                                      className: ci.jU,
                                      children: (0, a.jsx)(ex.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tl.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: ev.XSmallIcon,
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
                              className: ci.qB,
                              children: (0, a.jsx)(tG.w, {
                                  type: Y.blocked ? "critical" : "warning",
                                  role: Y.blocked ? "alert" : "status",
                                  message: Y.message,
                              }),
                          }),
                    (0, a.jsx)(sX, {
                        projectId: m,
                        escapeScopeRef: p,
                        canSend: ep,
                        running: ts,
                        restoring: eg,
                        onSend: el,
                        hasPendingContext: Q.annotations.length > 0,
                        onInterrupt: ep ? er : void 0,
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
var cu = n(761508),
    cc = n(209695),
    cd = n(207438),
    cm = n(683438),
    cf = n(721507);
function ch(e, t) {
    return String(e).padStart(t, "0");
}
function cg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${ch(l.getHours(), 2)}:${ch(l.getMinutes(), 2)}:${ch(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${ch(l.getMilliseconds(), 3)}` : r;
}
var cp = n(667931);
let cx = {
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
    cv = { running: "Running", ok: "Done", error: "Failed" };
function cj(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cb(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function cy(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function ck(e) {
    return cb(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cw = ["Arguments", "Result", "Usage", "Details"];
function cC(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cA(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function cS(e) {
    let t = (0, cp.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cp.lp)(e) ? "interrupted" : "still running";
}
function cN(e) {
    return [cg(new Date(e.started_at).toISOString()) ?? "", cy(e.spans.length), (0, cp.Sj)((0, cp.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function cI(e) {
    let t = (0, cp.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cp.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += cE(r, "in")),
                (l.output += cE(r, "out")),
                (l.cacheRead += cE(r, "cache_read")),
                (l.cacheWrite += cE(r, "cache_write")),
                (l.costUsd += cE(r, "cost_usd"))));
    }
    let r = cp.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function cE(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var c_ = n(738188),
    cM = n(430993),
    cR = n(364840),
    cP = n(224640),
    cT = n(20742);
let cL = { collapsed: new Set(), revealed: new Set() };
var c$ = n(872892);
let cD = {
    op: c$.Q,
    model: c$.i3,
    tool: c$.dH,
    setup: c$.kc,
    worktree: c$.Qx,
    sandbox: c$.QH,
    build: c$.F1,
    platform: c$.Op,
    other: c$.fv,
};
function cq(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cy(t.calls, "model call"),
                      `${cj(t.input)} in`,
                      `${cj(t.output)} out`,
                      `${cj(t.cacheRead)} cache read`,
                      `${cj(t.cacheWrite)} cache write`,
                      cA(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: c$.M1,
        children: [
            (0, a.jsx)("div", {
                className: c$.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${c$.DJ} ${cD[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: c$.o1,
                children: cp.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cb(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: c$.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${c$.nf} ${cD[e]}` }),
                                (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: cx[e] }),
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
function cF(e) {
    return `conjure-perf-trace-${e}`;
}
function cO(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: c$.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${c$.p0} ${s + o > 85 ? c$.EU : c$.jh}`,
                children: i,
            }),
        ],
    });
}
function cG(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? tJ.ChevronSmallRightIcon : tY.ChevronSmallDownIcon,
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
    return (0, a.jsxs)(ep.D, {
        tag: "div",
        role: "treeitem",
        id: cF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${c$.$y} ${r ? c$.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: c$.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(ep.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: c$.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: c$.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: c$.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${c$.nf} ${cD[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: c$.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: c$.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: c$.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(c_.WarningIcon, { size: "xs", color: "currentColor", className: c$.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(cO, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${c$.M0} ${c$.Nh}`
                    : t.running
                      ? `${c$.M0} ${c$.rF}`
                      : `${c$.M0} ${cD[t.category]}`,
                duration: ck(t),
            }),
        ],
    });
}
function cz(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(ep.D, {
        tag: "div",
        role: "treeitem",
        id: cF(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${c$.$y} ${l ? c$.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: c$.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: c$.ai,
                        children: (0, a.jsx)(tJ.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: c$.U9 }),
                    (0, a.jsx)("span", { className: `${c$.nf} ${c$.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: c$.MQ,
                        children: cy(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(cO, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${c$.M0} ${c$.ab} ${c$.dL}`,
                duration: cb(t.totalMs),
            }),
        ],
    });
}
function cB(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: c$._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: c$.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${c$.nf} ${cD[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cC("Start", `+${cb(e.start)}`), cC("Duration", ck(e))];
                      e.count > 1
                          ? t.push(
                                cC("Calls", String(e.count)),
                                cC("Longest call", cb(e.maxMs)),
                                cC("Spread over", cb(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cC("Self time", cb(e.selfMs)));
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
                              s = "cost_usd" === t ? cA(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cC(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cw.flatMap((e) => {
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
                                            className: c$.xd,
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
                                                            className: c$.vl,
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
function cU(e) {
    let { trace: t } = e,
        n = i.useMemo(() => cI(t), [t]);
    return (0, a.jsx)(cq, { stats: n });
}
function cK(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cp.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? cL : (0, cp.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cp.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cp.x7)(t)), l((n) => (0, cp._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, cp.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cp.IE)(t, e);
                        null != n && l((e) => (0, cp.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cp.IE)(t, e);
                        null != n && l((e) => (0, cp.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, cp.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, cp.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cp.hB)(t));
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
        h = (0, cp.dj)(t),
        g = i.useMemo(() => (0, cp.nF)(h), [h]),
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
                    null != t && (u(t.key), document.getElementById(cF(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, m, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(cM.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: c$.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: cS(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: cN(t),
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
                                      children: `${cy(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(cU, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: c$.KE,
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
                        "aria-activedescendant": null == o ? void 0 : cF(o),
                        className: c$.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: x,
                        children: [
                            (0, a.jsxs)("div", {
                                className: c$.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: c$.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: c$.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${c$.io} ${(e / h) * 100 > 85 ? c$.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cb(e),
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
                                          cG,
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
                                    : (0, a.jsx)(cz, { row: e, extent: h, selected: e.key === o, onReveal: m }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(cR.j, { children: (0, a.jsx)(cB, { node: s }) }),
        ],
    });
}
function cH(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([uy.A], () => uy.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(cP.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(cT.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(cM.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(cK, { trace: i }),
        ],
    });
}
let cW = { running: c$.Vf, ok: c$.mo, error: c$.Sr };
function cV(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${c$.Om} ${cW[t]}`, role: "img", "aria-label": cv[t] });
}
function cX(e, t) {
    (0, O.qf)((n) => (0, a.jsx)(cH, { ...n, projectId: e, traceId: t }));
}
function cQ(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => cX(t, n.id), [t, n.id]);
    return (0, a.jsxs)(ep.D, {
        className: c$.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: c$.sU,
                children: [
                    (0, a.jsx)(cV, { status: (0, cp.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: c$._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: cS(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: cN(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function cZ(e) {
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
            (0, cf.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(eH.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: eH.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(uw.W, {
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
            return (0, a.jsx)(tl.K, {
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
function cY(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([uy.A], () => uy.A.getTimingTraces(t), [t]),
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
                    let t = e.map(cI);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cp.BF.map((e) => ({
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
              className: c$.Ie,
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
              className: c$.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: c$.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: c$.fH,
                              children: (0, a.jsx)(cm.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(cZ, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(tO.Ch, {
                      className: c$.XG,
                      children: [
                          (0, a.jsx)(cq, { stats: u }),
                          0 === o.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: c$.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(cQ, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function cJ(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function c0(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function c1(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function c2(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function c3(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function c4(e) {
    return E.intl.string("preview" === e ? I.default["2yLYlG"] : I.default.eiAi57);
}
let c5 = ["all", "preview", "stable", "web"];
function c7(e) {
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
function c8(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(I.default["XO/bN4"], {
              p50: cJ(e.memory_p50_bytes ?? 0),
              p999: cJ(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let c9 = {
    db: () => I.default["7l+DFG"],
    db_preview: () => I.default.FAuffi,
    runtime: () => I.default["Gkl+ab"],
    runtime_preview: () => I.default.ynpJzv,
    bot: () => I.default["5/i0cj"],
    bot_preview: () => I.default.m2jsnw,
};
var c6 = n(911608),
    de = n(177427);
function dt(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: de.KE,
        children: [
            (0, a.jsx)("div", {
                className: de.IQ,
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
                                  children: E.intl.formatToPlainString(I.default.INVO50, { time: c2(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(d.$, { variant: "secondary", size: "sm", text: E.intl.string(I.default.oKEgiu), onClick: l }),
        ],
    });
}
function dn(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: de.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "body-xs/semibold", color: "text-muted", className: de.Gf, children: t }),
            n,
        ],
    });
}
function dl(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: de.N8,
        children: [
            (0, a.jsxs)("div", {
                className: de.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: de.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: de.kS,
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
function dr(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: de.N8,
        children: [
            (0, a.jsxs)("div", {
                className: de.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(c6.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? de.dh : void 0,
            }),
        ],
    });
}
function da(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dl, {
            label: E.intl.string(I.default.SXP7pD),
            value: E.intl.string(I.default.E5hKVi),
            hint: c7(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dl, {
            label: E.intl.string(I.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(I.default.AGvoMJ),
        });
    let l = c8(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dl, { label: E.intl.string(I.default["H/X+FI"]), value: c0(n.cpu_ms) }),
            null != l && (0, a.jsx)(dl, { label: E.intl.string(I.default.lmFmMO), value: l }),
        ],
    });
}
function di(e) {
    let { analytics: t } = e,
        n = E.intl.string(I.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dn, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: c7(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? c9[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dn, {
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
                          dl,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(I.default["w/2voO"], { cpu: c0(t.cpu_ms) }),
                              hint: c8(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var ds = n(678708),
    du = n(414499),
    dc = n(714800),
    dd = n(81466),
    dm = n(424383),
    df = n(664121),
    dh = n(816943),
    dg = n(268791),
    dp = n(514042),
    dx = n(872351),
    dv = n(708988),
    dj = n(150934),
    db = n(417270);
let dy = "Restart Agent",
    dk = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dw(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dC(e, t) {
    return { label: e, value: null != t && "" !== t ? c2(t) : "Unknown", icon: "calendar" };
}
function dA(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dS(e, t, n, l) {
    let [r, a] = dk[n.status];
    return { label: e, value: `${dA(n.bytes)} of ${dA(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function dN(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = c2(e.at);
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
let dI = { main: "Main vs Remote", wip: "WIP vs Remote" };
function dE(e) {
    let t = `container ${dw(e.local)} \xb7 remote ${dw(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: dI[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${c1(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${c1(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${c1(n)} Ahead, ${c1(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let d_ = ["main", "wip"];
var dM = n(400154);
let dR = {
        checkout: ds.FolderIcon,
        edit: f.PencilIcon,
        remote: du.CloudIcon,
        commits: dc.ListNumberedIcon,
        calendar: dd.CalendarIcon,
        save: dm.SaveIcon,
        objects: df.ServerIcon,
        download: dh.CloudDownloadIcon,
        size: dg.SpeedometerIcon,
        file: dp.FileIcon,
    },
    dP = {
        ok: [lW.CircleCheckIcon, tc.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [c_.WarningIcon, tc.A.colors.ICON_FEEDBACK_WARNING],
        error: [sa.CircleXIcon, tc.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dx.ArrowSmallUpIcon, tc.A.colors.ICON_MUTED],
        behind: [dv.ArrowSmallDownIcon, tc.A.colors.ICON_MUTED],
    };
function dT(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([uy.A], () => uy.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cd.DK)(t), [t]),
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
                    `Updated ${c2(r)}`,
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
    return (0, a.jsxs)(dn, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: dM.Lj,
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
                    if (!e.running || null != e.localError) return [dN(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dN(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : c1(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = d_.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(dE))
                        : l.push(
                              { label: "Main", value: dw(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dw(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? c1(e.commits) : "Unknown", icon: "commits" },
                            dC("Oldest Commit", e.oldest),
                            dC("Newest Commit", e.newest),
                            dN(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${c1(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${c1(t.loose)} loose (${cJ(t.looseBytes)}) \xb7 ${c1(t.packed)} packed in ${n} (${cJ(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${c1(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${c1(e.missingObjects)} not downloaded`,
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
                        s = dR[r],
                        [o, u] = null != i ? dP[i] : [null, void 0];
                    return (0, a.jsx)(
                        dl,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: tc.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function dL(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, c.bG)([uy.A], () => uy.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cd.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = uy.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cd.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                oq.h.dispatch({
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
            let o = i.useCallback(() => (0, cd.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dy,
                },
                restart: o,
            };
        })(t),
        m = i.useCallback(() => {
            (0, C.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, a.jsxs)("div", {
        className: dM.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: dM.nM,
                children: [
                    (0, a.jsx)(dj.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: db.RetryIcon,
                        text: dy,
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
                            return `Restarted \xb7 new instance since ${c2(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${c2(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function d$(e, t) {
    return (0, a.jsx)(dl, {
        label: e,
        value: E.intl.formatToPlainString(I.default.yHJxuP, { count: c1((0, u3.aM)(t)) }),
        hint: `${c1(t.input_tokens)} in \xb7 ${c1(t.output_tokens)} out \xb7 ${c1(t.cache_read_input_tokens)} cache read`,
    });
}
function dD(e) {
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
        } = ((t = (0, c.bG)([uy.A], () => uy.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([uy.A], () => uy.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([uy.A], () => uy.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([uy.A], () => uy.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([uy.A], () => uy.A.getSandboxRestartState(g), [g])),
        (o = (0, c.bG)([l1.A], () => l1.A.isThinking(g), [g])),
        (u = i.useCallback(() => (0, cd.Lj)(g), [g])),
        (m = i.useCallback(() => (0, cd.Lj)(g, !0), [g])),
        (f = i.useCallback(() => (0, cd.bq)(g), [g])),
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
        className: dM.Mf,
        children: [
            (0, a.jsx)(dt, { generatedAt: p?.generated_at ?? null, fetchState: x, onRefresh: j }),
            (0, a.jsx)(dn, {
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
                                  (0, a.jsx)(dl, {
                                      label: E.intl.string(I.default["9nqym2"]),
                                      value: c1((0, u3.a7)(M.cost_usd)),
                                      hint: E.intl.formatToPlainString(I.default.NCdUIh, { count: c1(M.turns) }),
                                  }),
                                  d$(E.intl.string(I.default.xtxP0e), M.orchestrator),
                                  d$(E.intl.string(I.default["9Sj3SX"]), M.codegen),
                                  d$(E.intl.string(I.default.ANCEo3), (0, u3.wU)(M.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dl, {
                                          label: E.intl.string(I.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${c1(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dn, {
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
                                  d$(E.intl.string(I.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dl, {
                                      label: E.intl.string(I.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, u3.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dn, {
                title: E.intl.string(I.default.NbRk9a),
                children: [
                    null != y && null != T
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dr, {
                                      label: E.intl.string(I.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: T,
                                      formatValue: c1,
                                  }),
                                  (0, a.jsx)(dl, {
                                      label: E.intl.string(I.default.mRbSns),
                                      value: `${c1(y.tokensBefore)} \u{2192} ${c1(y.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(I.default.Vq3skS, {
                                          count: c1(y.retainedMessages),
                                          time: c2(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != T
                                      ? E.intl.formatToPlainString(I.default.GMLCNv, { ceiling: c1(T) })
                                      : E.intl.string(I.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dl, {
                            label: E.intl.string(I.default["4BX5KK"]),
                            value: `${c1(k.projected)} / ${c1(k.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(I.default["6ngCax"], { time: c2(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: dM.Lj,
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
                                    let t = c2(e.observedAt);
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
                        className: dM.Lj,
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
                                    let t = c2(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? I.default["76mfqO"] : I.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(C),
                            }),
                        ],
                    }),
                    (0, a.jsx)(dL, { projectId: g }),
                ],
            }),
            (0, a.jsx)(dT, { projectId: g }),
            (null != P || p?.analytics != null) &&
                (0, a.jsxs)(dn, {
                    title: E.intl.string(I.default.EsSzCS),
                    children: [
                        null != P &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dl, {
                                        label: E.intl.string(I.default.CLXHAs),
                                        value: c2(P.instance_since),
                                        hint: E.intl.string(I.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dl, { label: E.intl.string(I.default["8V8e1Z"]), value: c1(P.sockets) }),
                                    (0, a.jsx)(dl, {
                                        label: E.intl.string(I.default["4pBzYW"]),
                                        value: P.turn_inflight
                                            ? E.intl.string(I.default.Wv025I)
                                            : E.intl.string(I.default["7/lsFY"]),
                                    }),
                                    P.queued_messages > 0 &&
                                        (0, a.jsx)(dl, {
                                            label: E.intl.string(I.default["3oUYnv"]),
                                            value: c1(P.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(da, { analytics: p.analytics }),
                    ],
                }),
            null != R &&
                (0, a.jsxs)(dn, {
                    title: E.intl.string(I.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dl, {
                            label: E.intl.string(I.default.IlDBN3),
                            value: c1(R.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dl, {
                            label: E.intl.string(I.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(I.default.yHJxuP, { count: c1(R.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dl, {
                            label: E.intl.string(I.default.cIhN2W),
                            value: E.intl.formatToPlainString(I.default.yHJxuP, {
                                count: c1(R.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dl, {
                            label: E.intl.string(I.default["+fOn/q"]),
                            value: c1(R.max_user_message_chars),
                        }),
                        (0, a.jsx)(dl, { label: E.intl.string(I.default.kIHga0), value: c1(R.max_build_attempts) }),
                        (0, a.jsx)(dl, { label: E.intl.string(I.default.Iw03yW), value: c1(R.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var dq = n(237528),
    dF = n(629584),
    dO = n(531893);
function dG(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: dO.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(I.default.h1SE6R),
              }),
          });
}
function dz(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: dO.qf,
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
              className: dO.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function dB(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: dO.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(I.default.V7Ri8H),
              }),
          })
        : null;
}
var dU = n(109079);
let dK = i.memo(function (e) {
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
        className: dU.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: dU.Mt,
                selectable: !0,
                children: cg(n.ts) ?? n.ts,
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
                className: dU.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: dU.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: dU.Cq, children: (0, a.jsx)(dq.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: dU.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(dq.v, { text: E.intl.string(I.default.TrC9c8), variant: "redLight" }),
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
                                  (0, a.jsxs)(ep.D, {
                                      className: dU.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(I.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(tY.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(tJ.ChevronSmallRightIcon, {
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
                                          className: dU.dF,
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
function dH(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cc.A], () => cc.A.getLogs(t), [t]),
        l = (0, c.bG)([cc.A], () => cc.A.getHistoryState(t, "logs")),
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
                c5.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return c4(e);
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
        className: dU.$F,
        children: [
            (0, a.jsxs)("div", {
                className: dU.y4,
                children: [
                    (0, a.jsx)(dF.I, {
                        look: "pill",
                        "aria-label": E.intl.string(I.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: dU.KT,
                        children: (0, a.jsx)(cm.I, {
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
            n.length > 0 && (0, a.jsx)(dG, { state: l }),
            (0, a.jsxs)(tO.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: dU.sx,
                children: [
                    (0, a.jsx)(dB, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(dz, {
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
                          : d.map((e) => (0, a.jsx)(dK, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function dW(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dn, {
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
function dV(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dl, {
                      label: E.intl.formatToPlainString(I.default["01ZMS4"], { env: c4(n) }),
                      value: ((t = l.connected), E.intl.string(t ? I.default.Wv025I : I.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dl, {
                      label: E.intl.string(I.default["z1dh+F"]),
                      value: c1(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${c2(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dl, { label: E.intl.string(I.default.Iz5GnJ), value: c1(l.guild_count) }),
                  (0, a.jsx)(dl, {
                      label: E.intl.string(I.default["7UqtNv"]),
                      value: c1(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(I.default.MasSly, {
                                    code: l.last_close_code,
                                    time: c2(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dl, {
                          label: E.intl.string(I.default["x3+JXJ"]),
                          value: c1(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dl, { label: c4(n), value: E.intl.string(I.default.lTHQss) });
}
function dX(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dl, {
        label: c4(t),
        value: E.intl.formatToPlainString(I.default["Xq+wHT"], {
            requests: c1(n.requests),
            failures: c1(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(I.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: c2(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(I.default["7KlGT6"], { time: c2(n.since) }),
    });
}
function dQ(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dl, {
                label: E.intl.formatToPlainString(I.default["92gVTm"], { env: c4(t) }),
                value: c1(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dl,
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
                                  ? E.intl.formatToPlainString(I.default.wxAWNv, { time: c2(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function dZ(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dl, {
        label: c4(t),
        value: E.intl.formatToPlainString(I.default.suAOj9, { calls: c1(n.calls), errors: c1(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function dY(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dn, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: E.intl.string(I.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dn, {
        title: t,
        children: [
            (0, a.jsx)(dl, {
                label: E.intl.string(I.default.xtD4Zp),
                value: c1(n.requests),
                hint: E.intl.formatToPlainString(I.default["7KlGT6"], { time: c2(n.since) }),
            }),
            (0, a.jsx)(dl, { label: E.intl.string(I.default.gfRhR3), value: c1(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dr, {
                              label: E.intl.string(I.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: c0,
                          }),
                          (0, a.jsx)(dl, {
                              label: E.intl.string(I.default.mSKImM),
                              value: c0(r),
                              hint: E.intl.formatToPlainString(I.default.JqMU05, {
                                  total: c0(n.cpu_ms_total),
                                  wall: c0(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dl, {
                      label: E.intl.string(I.default.LEJ5r3),
                      value: E.intl.string(I.default["2Ekb2b"]),
                      hint: E.intl.string(I.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dl, { label: E.intl.string(I.default.xvmL1D), value: c0(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dl, { label: E.intl.string(I.default["4sQYwH"]), value: c1(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dl, {
                label: E.intl.string(I.default.bQenOy),
                value: c1(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(I.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dl, { label: E.intl.string(I.default.xgpn4Y), value: c3(n.build) }),
        ],
    });
}
function dJ(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(I.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(I.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(I.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dn, {
        title: E.intl.string(I.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dl, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dl, {
                                  label: E.intl.formatToPlainString(I.default.u7kJJ4, { env: n }),
                                  value: cJ(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? I.default.lH0oQw : I.default.m9h02S,
                                      { count: c1(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dr, {
                                      label: E.intl.formatToPlainString(I.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: cJ,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function d0(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dM.Mf,
        children: [
            (0, a.jsx)(dt, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(dY, {
                            title: E.intl.string(I.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(dY, {
                            title: E.intl.string(I.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(dJ, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(dW, {
                                title: E.intl.string(I.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dV, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(dW, {
                                title: E.intl.string(I.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dX, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(dW, {
                                title: E.intl.string(I.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dQ, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(dW, {
                                title: E.intl.string(I.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dZ, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(di, { analytics: t.analytics }),
                        (0, a.jsxs)(dn, {
                            title: E.intl.string(I.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dl, {
                                    label: E.intl.string(I.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? c3(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dl, {
                                    label: E.intl.string(I.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? c3(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var d1 = n(592465);
function d2(e) {
    let { projectId: t, onClose: n } = e,
        l = T(),
        [r, s] = i.useState(() => (l && M?.projectId === t ? "trace" : "logs")),
        o = (0, c.bG)([uy.A], () => uy.A.getStatus(t), [t]),
        u = (0, c.bG)([uy.A], () => uy.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, cd.R7)(t), (0, cd.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, eD.Rw)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == M || M.projectId !== e) return null;
            let { traceId: t } = M;
            return ((M = null), t);
        })(t);
        return null != e && (cX(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        R(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, o6.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: uy.A.getStatus(t),
                        last_turn_usage: uy.A.getLastTurnUsage(t),
                        last_compaction: uy.A.getLastCompaction(t),
                        last_compaction_decline: uy.A.getLastCompactionDecline(t),
                        timing_traces: uy.A.getTimingTraces(t),
                        logs: cc.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, A.P0)({ text: E.intl.string(I.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(I.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: d1.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(eZ.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(eZ.Ay.Icon, {
                            icon: o7.CopyIcon,
                            tooltip: E.intl.string(I.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(eZ.Ay.Icon, { icon: ev.XSmallIcon, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(eZ.Ay.ChannelIcon, { icon: o9.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(eZ.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: d1.rf,
                children: [
                    (0, a.jsxs)(cu.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(I.default.RvvWIh),
                        className: d1.vR,
                        children: [
                            (0, a.jsx)(cu.V.Item, { id: "logs", children: E.intl.string(I.default["+VRYCm"]) }),
                            (0, a.jsx)(cu.V.Item, { id: "worker", children: E.intl.string(I.default["50D0FZ"]) }),
                            (0, a.jsx)(cu.V.Item, { id: "agent", children: E.intl.string(I.default.UkbTK1) }),
                            l ? (0, a.jsx)(cu.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(dH, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(d0, { status: o, fetchState: u, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(cY, { projectId: t })
                            : (0, a.jsx)(dD, { projectId: t, status: o, fetchState: u, onRefresh: d }),
                ],
            }),
        ],
    });
}
var d3 = n(365912),
    d4 = n(873715);
function d5(e) {
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
let d7 = Object.freeze({ x: -1, y: -1 });
function d8(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = d5(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var d9 = n(192888);
function d6(e, t) {
    return (0, d9.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(d8, () => ({ status: "failed" }));
}
var me = n(108308);
let mt = { x: 25, y: 21 };
function mn(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function ml(e, t, n, l) {
    let r = mn(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function mr(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function ma(e) {
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
function mi(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: m } = (0, $.rt)(o),
        f = (0, L.Zv)(o),
        h = (0, O.Rv)(),
        g = (0, c.bG)([nC.default], () => nC.default.getCurrentUser()),
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
        [B, U] = i.useState(null),
        K = i.useRef(!1),
        [H, W] = i.useState(!1),
        [V, X] = i.useState(null),
        Q = u && !f && !h;
    null == G || (Q && G.projectId === o) || z(null);
    let Z = G?.projectId ?? null;
    i.useEffect(() => {
        if (null != Z) return () => (0, nd.xJ)(Z, "design");
    }, [Z]);
    let Y = te(r, Q);
    i.useEffect(() => {
        if (!Q || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void C(!0);
        (y(!0), C(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, d4.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? ma(t.response) : null;
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
        if (e6(J.current, Y)) return;
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
                    (0, d4.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        if ("completed" !== e.status || !el.current) return;
                        let n = ma(e.response);
                        null != n && (j(n), (0, $.F5)(o, { url: n.url, title: n.title, viewport: n.viewport }));
                        let l = new Map();
                        (e.response.results.forEach((e, n) => {
                            let r = t[n];
                            if (null == r || "locate" !== e.action || !e.ok) return;
                            let a = d5(e.element);
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
                    d6(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mm(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && F(!0);
                            else {
                                let e = (0, lR.Sk)(t.target);
                                (D((t) => (md(t, e) ? t : e)),
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
            let e = setTimeout(() => U(null), mu);
            return () => clearTimeout(e);
        }, [B]));
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
                    ((0, nd.xJ)(o, "design"),
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
                    (Math.abs(e.clientX - G.at.x) > mc || Math.abs(e.clientY - G.at.y) > mc) && (K.current = !0);
                    return;
                }
                if (!es) return void S(null);
                let t = ed(e, Y);
                if (q) {
                    let e = (0, lR.CZ)(eo, t.x, t.y),
                        n = null != e && mm(e, Y, ei) ? null : e;
                    if (null != n) {
                        let e = (0, lR.Sk)(n);
                        D((t) => (md(t, e) ? t : e));
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
                null != e && d6(e, d7);
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
                ec(A, (0, lR.Hm)(A, t.x, t.y), { x: e.clientX, y: e.clientY });
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
                        return ((0, d3.J$)(e), !0);
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
                    ec(A, lR.QU, { x: (Y?.left ?? 0) + A.rect.x * ei, y: (Y?.top ?? 0) + A.rect.y * ei }));
            },
            [o, G, V, eo, A, ec, ej, Y, ei],
        ),
        eA = i.useCallback(
            (e) => {
                null == o ||
                    null == G ||
                    (((0, lR.Ch)(G.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, eD.dv)(o, (0, lR.Q9)(G.target, G.draft), e), ea(), S(null)));
            },
            [o, G, ea],
        ),
        eS = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, e2.vX)(o, e)), [o]),
        eN = i.useCallback(() => {
            null == o ||
                null == V ||
                null == p ||
                ((0, lR.Ch)(V.draft) && ((0, $.pV)(o, p, V.id, V.draft.trim()), X({ ...V, editing: !1 })));
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
        eP = G ?? B,
        eT = G ?? (B?.instant === !0 ? null : B),
        eL =
            null != eh && null != Y
                ? (function (e, t) {
                      let { left: n, top: l } = mr(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(ml(eh.target, eh.anchor, Y, ei), Y)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            d6(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, eJ.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: me.Li,
                children: [
                    (0, a.jsx)(tZ.A, {
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
                                      className: me.MT,
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
                                      ? (0, a.jsx)(mf, { box: mn(A, Y, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: me.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: me.xz,
                                          "data-shown": null != A && null == V && null == G ? "" : void 0,
                                          "data-instant": H ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "body-xs/medium",
                                              className: me.Ux,
                                              children: [
                                                  null == T
                                                      ? null
                                                      : (0, a.jsx)("span", { className: me.Tl, children: T.kind }),
                                                  null == T || "" === T.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: me.kh,
                                                            children: [" ", T.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: R,
                                      className: me.Y,
                                      children: eM ? (0, a.jsx)("div", { className: me.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: me.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: me.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == G ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "body-xs/medium",
                                                    className: me.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: me.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: me.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eR && null == eR.marker
                                      ? (0, a.jsx)("div", { className: me.D0, style: mn(eR, Y, ei), "aria-hidden": !0 })
                                      : null,
                                  m.map((e, t) => {
                                      let n = ml(e.target, e.anchor, Y, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: me.xL,
                                              style: { ...mr(n, Y), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(I.default.SxaIQA, {
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
                                              children: (0, a.jsx)(ms, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == o
                                      ? null
                                      : (0, a.jsx)(e8, {
                                            projectId: o,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: Y,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != G && (0, lR.Ch)(eP.draft),
                                            onChange: (e) => {
                                                null != G && z({ ...G, draft: e });
                                            },
                                            onSubmit: eA,
                                            onDismiss: ea,
                                            onUploadFile: eS,
                                            closing: null == G,
                                        }),
                                  null != eh && null != V && null != eL
                                      ? (0, a.jsxs)(mo, {
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
                                                          className: me.aC,
                                                          children: eh.comment,
                                                      }),
                                                (0, $.It)(eh, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: me.eB,
                                                          children: V.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: me.nv,
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
                                                                                  disabled: !(0, lR.Ch)(V.draft),
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
function ms(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([nC.default], () => nC.default.getUser(t), [t]);
    return (0, a.jsx)(a_.eu, {
        src: null == n ? null : aR.Ay.getUserAvatarURL(n),
        size: aM._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function mo(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(mt);
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
        className: me.Nr,
        style: S,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: me.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: me.ip, children: (0, a.jsx)(ms, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: me.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: me.zI, children: p }),
        ],
    });
}
let mu = 300,
    mc = 2;
function md(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mm(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mf(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: me.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mh = n(318774),
    mg = n(91242),
    mp = n(697744),
    mx = n(130324);
function mv(e) {
    let t = (0, mp.c)(),
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
    let r = (0, tB.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mj(e) {
    let { className: t } = e,
        { Component: n, events: l } = mv(3e4);
    return (0, a.jsxs)("div", {
        className: u()(t, mx.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: mx.ol,
                children: E.intl.string(I.default.AyiQEp),
            }),
        ],
    });
}
var mb = n(251363),
    my = n(944142),
    mk = n(532247),
    mw = n(501628);
function mC(e) {
    let { progress: t } = e,
        { Component: n } = mv(1500),
        l = P.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mw.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mw.PM,
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
function mA(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([my.A], () => (s ? my.A.getLiveReload(t) : null), [s, t]),
        u = (0, e_.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        m = o?.background === !0,
        f = (function (e, t, n) {
            let l = (0, mk.dv)(e),
                [r, a] = i.useState(null),
                [s, o] = i.useState(l),
                [u, d] = i.useState(t);
            s !== l && (o(l), d(t), a(null != l || u ? null : (0, mk.QP)(e, s)));
            let m = (0, c.bG)(
                    [mg.A],
                    () => {
                        let e = mg.A.getFrame(n);
                        return (0, eP.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, mb.ow)(null, n) && e();
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
        h = m ? null : (0, mk.h_)(d, o?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tZ.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: mw.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mC, { progress: h }),
                  })
                : null,
        ],
    });
}
let mS = 0;
var mN = n(782134),
    mI = n(357858),
    mE = n(343030),
    m_ = n(11411),
    mM = n(111518),
    mR = n(240666);
let mP = { width: 1 / 0, height: 1 / 0 };
function mT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mP;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mL = n(702083);
function m$(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([eM.A], () => ({
            mobile: eM.A.isBuilderPreviewMobile(),
            landscape: eM.A.isBuilderPreviewLandscape(),
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
        m = n ? mT(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: u()(mL.dw, { [mL.PQ]: null != m }),
        children: (0, a.jsx)("div", { className: u()(mL.R9, { [mL.Vg]: null != m }), style: m ?? void 0, children: t }),
    });
}
var mD = n(347927);
function mq(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: u()(mD.Bf, l && mD.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: mD.Ux,
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
var mF = n(957272);
function mO(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, mM.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mR.A)(t, n), s === mM.n.Launched)) {
        let e = (0, a.jsx)(m_.A, { frameId: i.id, level: mE.A.WithinAppContent, className: mF.Z7, overlay: r });
        return (0, eR.Q5)(n) ? (0, a.jsx)(m$, { children: e }) : e;
    }
    return (0, a.jsx)(mG, { state: s });
}
function mG(e) {
    let { state: t } = e;
    switch (t) {
        case mM.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: mF.qs,
                children: (0, a.jsx)(mq, {
                    title: E.intl.string(I.default["9kpdo7"]),
                    body: E.intl.string(I.default.iIA8Nj),
                }),
            });
        case mM.n.NoApplication:
            return (0, a.jsx)(mj, { className: mF.qs });
        case mM.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: mF.qs,
                children: (0, a.jsx)(mq, {
                    title: E.intl.string(I.default["7k4GyN"]),
                    body: E.intl.string(I.default.zdIy3R),
                }),
            });
        case mM.n.Error:
            return (0, a.jsxs)("div", {
                className: mF.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: E.intl.string(I.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: mF.tj,
                        children: E.intl.string(I.default.e6GiAZ),
                    }),
                ],
            });
        case mM.n.AwaitingLaunch:
        case mM.n.Loading:
            return (0, a.jsx)("div", { className: mF.qs, children: (0, a.jsx)(j.y, {}) });
    }
}
var mz = n(308528),
    mB = n(334738),
    mU = n(5206),
    mK = n(365971),
    mH = n(703462);
function mW(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: mH.f,
        children: [
            (0, a.jsx)(ec.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mV() {
    return (0, a.jsx)("div", { className: mH.f, children: (0, a.jsx)(j.y, {}) });
}
function mX(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, o] = i.useState(null),
        u = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([nk.A], () => (null != u ? nk.A.getChannel(u) : null), [u]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && mz.A.preload(nN.ME, t);
        }, [t]),
        (n = (0, c.bG)([oJ.A], () => oJ.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mK.Xg)();
            return (
                (0, mB.yl)(t, e),
                () => {
                    (0, mB.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, V.CN)(l).then(
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
        ? (0, a.jsx)(mW, { message: E.intl.string(I.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(mV, {})
          : (0, a.jsx)("div", {
                className: mH.g,
                children: (0, a.jsx)(mU.A, { channel: d, guild: null, chatInputType: sN.oU.SIDEBAR }, d.id),
            });
}
var mQ = n(765671),
    mZ = n(596977),
    mY = n(921853),
    mJ = n(582063);
function m0(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, V.vX)(t, n?.id ?? null);
    }
    let o = E.intl.string(I.default.Gl3XtE),
        u = E.intl.string(I.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: mJ.aF,
        children: [
            (0, a.jsx)(ex.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(tl.K, {
                    icon: mY.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: mJ.Dn,
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
            (0, a.jsx)(ex.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tl.K, {
                    icon: tJ.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var m1 = n(666476);
let m2 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function m3() {
    (0, A.P0)({ text: E.intl.string(I.default.jj3abP), variant: "critical" });
}
function m4(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(I.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eH.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(m5, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: mJ.m2,
                        children: (0, a.jsx)(ex.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tl.K, {
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
                accept: m2.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (m2.includes(n.type)
                                ? n.size > m1.aI
                                    ? (0, A.P0)({ text: E.intl.string(I.default.T8Spiu), variant: "critical" })
                                    : (0, rW.M$)(t, n).catch(m3)
                                : (0, A.P0)({ text: E.intl.string(I.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function m5(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([rH.A], () => rH.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(uw.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(I.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(uC.rX, {
                children: [
                    (0, a.jsx)(uC.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(I.default.uQpDky),
                        icon: lp.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(uC.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(I.default.AiAz8J),
                        icon: db.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, rW.Og)(t).catch(m3));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(uC.rX, {
                children: (0, a.jsx)(uC.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(I.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, rW.Y1)(t, !i) || m3();
                    },
                }),
            }),
        ],
    });
}
function m7(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: o, height: u } = (0, mQ.Ay)(),
        { captures: c, selected: d } = rK(n),
        m = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: J({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                o = J({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: o * s };
        })({ width: o, height: u }, d, l);
    return (
        i.useEffect(() => (0, mZ.L0)(), []),
        (0, a.jsxs)("div", {
            className: mJ.JH,
            children: [
                (0, a.jsx)(rX, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: mJ.dw,
                    children: (0, a.jsx)("div", {
                        className: mJ.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${m.top}px`,
                            "--custom-conjure-overlay-widget-end": `${m.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(m.scale),
                        },
                        children: (0, a.jsx)(mO, { applicationId: t, surface: eR.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(m4, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(m0, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function m8(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(mq, {
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
var m9 = n(409478),
    m6 = n(652227);
function fe(e) {
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
            overlayWidgetSize: m = Z,
            projectId: f,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([lz.A], () => null != f && null != lz.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: m6.qs, children: (0, a.jsx)(j.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: m6.qs,
                children: (0, a.jsx)(m8, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: m6.RG,
                      children: [
                          (0, en.yf)(o, u)
                              ? g
                                  ? (0, a.jsx)(ft, { projectId: f, onResume: p })
                                  : (0, a.jsx)(mO, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === u && null != d
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: m6.qs,
                                        children: (0, a.jsx)(mq, {
                                            wide: !0,
                                            title: E.intl.string(I.default["08U+YO"]),
                                            body: E.intl.string(I.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(m9.A, { applicationId: d })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(m7, { applicationId: t, projectId: f, size: m, frameOverlay: h?.(eP.ZN) })
                              : null,
                          "bot" === u && null != n && null != f
                              ? (0, a.jsx)(mX, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: m6.qs, children: (0, a.jsx)(j.y, {}) })
              : (0, a.jsx)(mj, { className: m6.qs });
}
function ft(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mI.Pu)(t),
        (0, a.jsx)("div", {
            className: m6.qs,
            children: (0, a.jsx)(mq, {
                wide: !0,
                title: E.intl.string(I.default.MMWEH2),
                body: E.intl.string(I.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mN.PlayIcon,
                              text: E.intl.string(I.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var fn = n(175841),
    fl = n(156548),
    fr = n(750506),
    fa = n(867193),
    fi = n(539197),
    fs = n(977020);
function fo(e) {
    let { projectId: t } = e,
        n = (0, fi.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fi.Ie)(e);
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
        className: fs.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [fi.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: u()(fs.hN, fs.vW), style: m(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: u()(fs.hN, fs.A7), style: m(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: u()(fs.UE, { [fs.SP]: n.shown, [fs.Vq]: n.pressed, [fs.GP]: n.dipping }),
                style: m(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fu = n(417760);
function fc(e) {
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
                null != e && (l(!0), (0, eD.fu)(e));
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
              className: u()(fu.M0, fu.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  m
                      ? (0, a.jsx)(uH.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(fn.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "body-sm/semibold", color: "none", className: fu.ID, children: f }),
                  m ? (0, a.jsx)(tZ.A, { children: E.intl.string(I.default.fg1sor) }) : null,
                  m ? (0, a.jsx)("div", { className: fu.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fu.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fu.sp,
                      children: [
                          (0, a.jsx)(fn.SparklesIcon, { size: "sm", color: "currentColor" }),
                          m ? (0, a.jsx)(uH.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fu.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: fu.w9,
                                      children: f,
                                  }),
                                  m
                                      ? (0, a.jsx)(v.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: fu.Rb,
                                            children: E.intl.string(I.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  m ? (0, a.jsx)("div", { className: fu.lC, children: h }) : null,
              ],
          });
}
function fd(e) {
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
        d = (0, fl.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, fl.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = e9(r());
            f((t) => (e6(t, e) ? t : e));
            let t = null == h ? null : e9(h);
            (x((e) => (e6(e, t) ? e : t)), null != h && (0, fa.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fa.C)(0));
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
            let [e] = i.useContext(fr.uY),
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
                      className: fu.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: fu.QF,
                          children: (0, a.jsx)(fc, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, eJ.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(tZ.A, {
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
                ? (0, eJ.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: fu.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fu.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(fo, { projectId: t }),
                          ],
                      }),
                      C,
                  )
                : null,
        ],
    });
}
var fm = n(399503),
    ff = n(853555),
    fh = n(944100),
    fg = n(327152),
    fp = n(187645);
let fx = { width: 1280, height: 720 },
    fv = new Map(),
    fj = !1;
function fb() {
    let e = new Map();
    for (let t of new Set([...l1.A.getActivityOrderedProjectIds(), ...(0, L.T7)()])) {
        if (!(l1.A.isThinking(t) || (0, L.wK)(t)) || X.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eI.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, eR.Rc)(t), (0, eR.Th)(t)].find(eP.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fv]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fv.delete(t),
            n.unregisterLookup(),
            fh.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, fg.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        fv.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fp.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fy(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fv.set(e, l),
                    (l.unregisterLookup = (0, ff.Ng)(e, () => (0, mb.n5)(n, t))),
                    fh.A.registerFrameTarget(t, n, mE.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of fv) fy(t.element, e, t.frameId);
}
function fy(e, t, n) {
    if (mg.A.getFrame(n)?.surface.type === el.U.OVERLAY) {
        let l = ee(eI.Ay.getProject(t));
        (e.classList.remove(fp.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, fg.Pn)(n, l));
        return;
    }
    let l = eM.A.isBuilderPreviewMobile();
    e.classList.toggle(fp.L, !l);
    let r = l ? mT(eM.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, fg.Pn)(n, r ?? fx));
}
var fk = n(873727),
    fw = n(47671),
    fC = n(418842),
    fA = n(413599);
let fS = 0;
var fN = n(487887);
let fI = null;
var fE = n(541940);
function f_(e) {
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
        y = (0, e_.A)(l, s),
        k = y?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([fA.A], () => (0, fk.x4)(fA.A.theme)),
            l = (0, c.bG)([fw.A], () => fw.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([aI.Ay], () => ({
                reducedMotion: aI.Ay.useReducedMotion,
                fontScale: (0, fk.U0)(),
                highContrast: aI.Ay.isHighContrastModeEnabled,
                forcedColors: aI.Ay.useForcedColors,
                underlineLinks: aI.Ay.alwaysShowLinkDecorations,
            })),
            d = P.hH.useSetting(),
            m = (0, c.bG)([sy.A], () => sy.A.hidePersonalInformation),
            f = (0, fC.C)(),
            h = (0, c.bG)(
                [mg.A, eM.A],
                () =>
                    eM.A.isBuilderPreviewMobile() &&
                    mg.A.getFrame(t)?.applicationId === eM.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = i.useRef(!1),
            p = i.useRef(!1),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, mb.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++fS,
                    baseTheme: n,
                    customTheme: (0, fk.Lq)(),
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
                (0, d9.W)(l, "set-env", i, {
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
                let n = (0, mb.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, mb.n5)(e, t) && ((x.current = null), b());
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
            if (null != t) return (0, ff.Ng)(t, () => (0, mb.n5)(j, k));
        }, [t, j, k]));
    let w = i.useCallback(() => (0, mb.ow)(j, k), [j, k]),
        C = i.useCallback(() => (x ? (0, mb.ow)(j, k) : j), [x, j, k]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: u()(fE.Mh, o),
                children: [
                    d,
                    m,
                    v
                        ? null
                        : (0, a.jsx)(fd, {
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
                        className: fE.fm,
                        children: g,
                    }),
                ],
            }),
            p,
            v
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mi, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: w,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(tD, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: w }),
                      ],
                  }),
        ],
    });
}
function fM(e) {
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
    (0, fm.k)(n, N);
    let M = o.type === el.U.MAIN || (0, eR.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([eM.A], () => ({
            mobile: eM.A.isBuilderPreviewMobile(),
            landscape: eM.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fN.aX.LANDSCAPE : fN.aX.PORTRAIT), (fI = e));
                else {
                    if (fI !== e) return;
                    ((l = fN.aX.UNHANDLED), (fI = null));
                }
                oq.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let R = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, tF.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, tF.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            M && ((t.current = ++mS), (0, V.HV)(r));
        }, [r, M]),
        i.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === mS && (0, V.HV)(null);
            };
        }, [r, M]),
        i.useEffect(() => {
            null != n &&
                ((0, eD.ensureConnection)(n),
                fj ||
                    ((fj = !0),
                    l1.A.addChangeListener(fb),
                    eI.Ay.addChangeListener(fb),
                    mg.A.addChangeListener(fb),
                    eM.A.addChangeListener(fb),
                    X.A.addChangeListener(fb),
                    (0, L.W3)(fb),
                    fb()));
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
        D = (0, eY.P)({ maxWidth: $, minWidth: 450 }),
        q = p || M;
    return (0, a.jsx)("div", {
        className: fE.cL,
        children: (0, a.jsx)("div", {
            ref: R,
            className: fE.LB,
            children: (0, a.jsx)(f_, {
                projectId: n,
                designFeedbackToggleRef: l,
                applicationId: r,
                previewApplicationId: s,
                surface: o,
                header: m,
                controlBar: f,
                previewPanelId: h,
                previewPanelLabelledBy: g,
                showsFrame: (0, en.yf)(A, S),
                paused: E,
                mainClassName: null == m ? void 0 : u()(fE.ez, { [fE.zt]: p }),
                content: (0, a.jsx)(fe, {
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
                        (0, a.jsx)(mA, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                }),
                sidebar:
                    null != n && q
                        ? (0, a.jsx)("div", {
                              className: p ? u()(fE.v7, { [fE.z4]: D }) : fE.LL,
                              children: (0, a.jsx)(eQ.A, {
                                  sidebarType: eQ.X.CallChatSidebar,
                                  maxWidth: $,
                                  capturePointer: !0,
                                  children: (0, a.jsx)("div", {
                                      className: fE.cO,
                                      children: b
                                          ? (0, a.jsx)(d2, { projectId: n, onClose: y ?? (() => {}) }, n)
                                          : (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(mh.Ay, { projectId: n }),
                                                    (0, a.jsx)(fR, { onClose: x }),
                                                    (0, a.jsx)("div", {
                                                        className: fE.cb,
                                                        children: (0, a.jsx)(
                                                            co,
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
function fR(e) {
    let { onClose: t } = e,
        n = E.intl.string(I.default.vLoFRs),
        l = E.intl.string(I.default.JD6Oit);
    return (0, a.jsx)(eZ.Ay, {
        "aria-label": n,
        toolbar: (0, a.jsx)(eZ.Ay.Icon, { icon: eX.PanelClosedIcon, tooltip: l, "aria-label": l, onClick: t }),
        children: (0, a.jsx)(eZ.Ay.Title, { children: n }),
    });
}
var fP = n(663417),
    fT = n(646270),
    fL = n(31300),
    f$ = n(113494),
    fD = n(831453),
    fq = n(872344),
    fF = n(64656),
    fO = n(766367),
    fG = n(705609);
function fz(e) {
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
        P = (0, fF.A)(b?.id),
        { pending: T, refresh: L } = (0, fq.A)(c),
        $ = (0, w.lQ)(t) && !d,
        D = null;
    if ("widget" === r) {
        if (null != c) {
            let e = E.intl.string(I.default["/nOi5n"]);
            D = (0, a.jsx)(eZ.Ay.Icon, { icon: fP.RefreshIcon, tooltip: e, "aria-label": e, disabled: T, onClick: L });
        }
    } else if ((0, eP.x1)(y)) {
        let e = E.intl.string(I.default.FZIHQN);
        D = (0, a.jsx)(eZ.Ay.Icon, { icon: fP.RefreshIcon, tooltip: e, "aria-label": e, disabled: k, onClick: C });
    }
    let q = E.intl.string(d ? I.default.ZKd2Cw : I.default.VHxerm),
        F = g(S),
        O = g(M),
        G = A ? fT.MobilePhoneIcon : fL.ScreenIcon;
    return (0, a.jsxs)("div", {
        className: fG.M0,
        children: [
            (0, a.jsx)(ew, {
                targets: x,
                activeTarget: i,
                projectName: n,
                onSelect: j,
                closableTarget: P ? s : null,
                onClose: o,
                panelId: p,
            }),
            (0, a.jsxs)("div", {
                className: fG.o1,
                children: [
                    D,
                    "frame" === r
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(fO.A, { frame: b }),
                                  (0, a.jsx)(eZ.Ay.Icon, {
                                      icon: d ? mN.PlayIcon : f$.PauseIcon,
                                      tooltip: $ ? E.intl.string(I.default.WjdaFw) : q,
                                      "aria-label": q,
                                      disabled: (!d && f) || $,
                                      onClick: m,
                                  }),
                                  A
                                      ? (0, a.jsx)(eZ.Ay.Icon, {
                                            icon: fD.RotateIcon,
                                            tooltip: O,
                                            "aria-label": O,
                                            selected: _,
                                            disabled: h,
                                            onClick: R,
                                        })
                                      : null,
                                  (0, a.jsx)(ex.m, {
                                      text: F,
                                      position: "bottom",
                                      ariaHidden: !0,
                                      children: (0, a.jsxs)(ep.D, {
                                          className: u()(fG.ZB, { [fG.xD]: h }),
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
var fB = n(563339),
    fU = n(606128),
    fK = n(323140);
function fH(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: j, guildId: _, inServer: M = !1 } = e,
        P = i.useContext(K.A),
        [Z] = i.useState(() => (null != P ? W.A.getProjectView(P) : null)),
        [Y, J] = i.useState(Z?.chatOpen ?? !0),
        [er, ea] = i.useState(Z?.debugOpen ?? !1);
    i.useEffect(() => {
        null != P && (0, H.g7)(P, { chatOpen: Y, debugOpen: er });
    }, [P, Y, er]);
    let ei = i.useCallback(
            (e) => {
                null != P && (0, H.g7)(P, { previewSelection: e });
            },
            [P],
        ),
        es = T(),
        eu = (0, D.f)("ConjureSelectedProjectScreen"),
        ec = i.useCallback(() => J(!0), []),
        ed = i.useCallback(() => {
            (ea(!1), J(!0));
        }, []),
        { restoreState: em, handleRestoreVersion: ef } = (function (e, t) {
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
                                                let e = await (0, B.c)(u, r);
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
        })(s, ed),
        eh = s?.id ?? null,
        eg = (0, U.bP)(),
        ep = eg?.blocking === !0 && eg.projectId === eh,
        {
            integrationStatus: ex,
            isPreviewApplicationLoading: ev,
            checkingIntegration: ej,
            previewReady: ey,
            hasFrame: ek,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [eI.Ay, eN.A],
                    () => (null == l ? null : (eI.Ay.getIntegrationStatus(l) ?? eN.A.getIntegrationStatus(l))),
                    [l],
                ),
                o = e?.preview_application_id ?? null,
                { isLoading: u } = (0, eA.YY)(o ?? void 0),
                d = null != l && t !== l,
                m = s?.preview_ready === !0,
                f = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, en.Qg)({
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
                    await ((0, eS.CG)(l)?.catch(() => (0, eS.U1)(l, e.signal)) ?? (0, eS.U1)(l, e.signal));
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
        ew =
            (0, c.bG)([eq.A], () => (null == eh ? void 0 : eq.A.getPublishStatus(eh)?.previewAppChannels), [eh]) ??
            ex?.preview_app_channels,
        {
            availability: eK,
            activeMode: eH,
            setMode: eW,
            frameSurface: eX,
            frameSurfaceOptions: eQ,
            setFrameSurface: eZ,
            appChannel: eY,
            setAppChannel: eJ,
            frameLaunchParams: e0,
            widgetApplicationId: e1,
        } = (0, eo.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: ek,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: ex?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(Q.q7.OVERLAY) === !0,
            previewAppChannels: ew,
            initialSelection: Z?.previewSelection,
            onSelectionChange: ei,
        }),
        e2 = ee(s);
    ((0, et.x)(eh, (e) => {
        eK.modes.includes(e) && eW(e);
    }),
        R(eh, () => {
            (J(!0), ea(!0));
        }));
    let e3 = eK.modes.includes("frame"),
        e4 = (0, c.bG)([X.A], () => X.A.isPaused(eh), [eh]),
        e5 = (function (e) {
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
                                          t === el.U.APP_CHANNEL && n.length > 1
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
                h = (0, c.bG)([eM.A], () => eM.A.isBuilderPreviewMobile()),
                g = E.intl.string(h ? I.default.tKGF0Q : I.default.peqEOY),
                p = i.useCallback(() => (0, V.GG)(!h), [h]),
                x = (0, c.bG)([eM.A], () => eM.A.isBuilderPreviewLandscape()),
                v = E.intl.string(x ? I.default.tunI2l : I.default.DoNdjA),
                j = i.useCallback(() => (0, V.Lw)(!x), [x]),
                b = (0, eR.jS)(t),
                y = i.useMemo(() => (0, eR.Op)(b, r), [b, r]),
                k = (0, e_.A)(t?.preview_application_id ?? null, y),
                w = (0, e_.A)(t?.preview_application_id ?? null, eP.ZN),
                C = "overlay" === l ? w : k,
                A = (0, eP.x1)(C) && C.data.proxyTicketRefreshing,
                S = i.useCallback(() => {
                    null == C || A || eE.A.refreshProxyTicket(C.id);
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
            modes: eK.modes,
            activeMode: eH,
            frameSurface: eX,
            frameSurfaceOptions: eQ,
            previewAppChannels: ew,
            setMode: eW,
            setFrameSurface: eZ,
            setAppChannel: eJ,
        }),
        { previewSurface: e7, previewFrame: e8 } = e5,
        e9 = (0, b.A)(e8),
        e6 = e3 && !e4,
        te = (0, w.lQ)(eh),
        tt = e9.isPoppedOut ? I.default.pmkK8i : e4 ? I.default.Yet11p : null,
        tn = null != tt;
    function tl(e) {
        return null == tt ? e : E.intl.formatToPlainString(tt, { label: e });
    }
    let tr = i.useCallback(() => J(!1), []),
        {
            designFeedbackActive: ta,
            designFeedbackToggleRef: ti,
            agentDrivingPreview: ts,
            designFeedbackLabel: to,
            handleToggleDesignFeedback: tu,
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
        })(eh, e6 && (!e9.isPoppedOut || te), ed),
        [tc] = i.useState(() => k.isPlatformEmbedded && (0, eC.qM)());
    i.useEffect(() => {
        null != eh && te && !e6 && (0, w.It)(eh);
    }, [eh, te, e6]);
    let td = i.useCallback(() => {
            null != eh && (ed(), (0, w.c$)(eh), (0, w.rC)(eh, "marker"));
        }, [eh, ed]),
        tm = i.useCallback(() => {
            null != eh && (0, w.V9)(eh);
        }, [eh]),
        tf =
            tn && !te
                ? tl(E.intl.string(I.default["XWU+XF"]))
                : E.intl.string(te ? I.default.tuQ5f3 : ts ? I.default.agwlrD : I.default["XWU+XF"]),
        th = tn ? tl(E.intl.string(I.default["cl/Jyl"])) : to,
        tg = i.useCallback(() => {
            ea((e) => !e && (J(!0), !0));
        }, []),
        tp = i.useCallback(() => ea(!1), []),
        tx = i.useCallback(() => {
            null != eh && (0, V._j)(eh);
        }, [eh]),
        tv = i.useCallback(() => {
            null != eh && (e4 ? (0, V._j)(eh) : (0, V.di)(eh, e8?.id));
        }, [eh, e4, e8?.id]),
        tj = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = e8?.id), (0, eD.Bn)(e), (0, e$.r)(t)), j());
        }, [s, e8?.id, j]),
        tb =
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
                                  ec();
                                  try {
                                      await (0, S.Hj)(t, e, E.intl.string(I.default.Owerd3));
                                  } catch {
                                      (0, A.P0)({ text: E.intl.string(I.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, ec],
            )),
            { onExport: t, onImport: (r = (0, S.yN)(l)).open, importInput: r.input }),
        ty = i.useCallback(() => {
            null != s && (0, eB.A)(s, _);
        }, [s, _]),
        tk = i.useCallback(async () => {
            null != eh && (await (0, eO.vL)(eh, _));
        }, [_, eh]),
        tw = (0, en.aN)(eH, {
            installScope: s?.install_scope ?? null,
            previewReady: ey,
            integrationInstalled: ex?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tk, loading: ev }
            : ej && null == ex
              ? { type: "checking" }
              : void 0,
        tC = (0, c.bG)([eI.Ay], () => null != eh && eI.Ay.isProjectDeleting(eh), [eh]);
    i.useEffect(() => {
        ((null == s && o) || tC) && j();
    }, [s, o, tC, j]);
    let {
            publishOptions: tA,
            publish: tS,
            publishing: tN,
            confirmation: tI,
            variant: tE,
            text: t_,
            pendingChanges: tM,
        } = (0, ez.A)(eh, _, ej || ev),
        tR = (0, eG.A)(eh, tS, tA),
        tP = "frame" === eH && !e4 && (0, eP.x1)(e8) && (e9.isPoppedOut || e9.canPopout),
        tT = i.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: em?.status === "restoring",
                    onRestoreVersion: (e, t) => ef(e, t, !0),
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
        }, [s, em?.status, ef]);
    (0, F.z)(eh, tT);
    let tL = null == s ? void 0 : () => (0, eU.A)(s.id, { guildId: _, isPreview: !0, publishOptions: tA }),
        t$ = eK.modes.includes("widget") && "unavailable-authorization-revoked" !== eK.profileState ? e1 : null,
        tD =
            null == s
                ? null
                : (0, a.jsx)(eL.A, {
                      ...(0, eT.A)(s, _),
                      hideProjectSettings: !0,
                      fullscreenFrame: "frame" !== eH || e4 ? null : e8,
                      onTogglePopout: tP ? (e9.isPoppedOut ? e9.popIn : e9.popOut) : void 0,
                      poppedOut: e9.isPoppedOut,
                      onToggleDebug: es ? tg : void 0,
                      debugOpen: er,
                      onExport: tb.onExport,
                      onImport: tb.onImport,
                      onRemix: ty,
                      onConnectTool: eu ? () => (0, q.A)(s.id) : void 0,
                      onHistory: tT,
                      previewProjectId: s.id,
                  }),
        tq = null != tS && null != s && ("primary" === tE || tN || null != tI),
        tF = tq
            ? (0, a.jsx)("div", {
                  className: fK.As,
                  onMouseDown:
                      null == eh || tS.disabled || tN
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, eF.dx)(eh);
                            },
                  children: (0, a.jsx)(d.$, {
                      size: "sm",
                      variant: "primary",
                      icon: tN ? fW : null != tI ? m.CheckmarkSmallIcon : void 0,
                      text: t_,
                      onClick: () => tR("header"),
                  }),
              })
            : null,
        tO = E.intl.string(I.default.FzfmQ8),
        tG = E.intl.string(I.default.xjJAQm),
        tz = (0, a.jsx)(fB.A, {
            title: s?.name ?? E.intl.string(I.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tL,
            hideShareTarget: M,
            draft: tM,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: fK.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: fK.w7,
                                  children: [
                                      tF,
                                      (0, a.jsx)(eV, { projectId: s.id, variant: tq ? "secondary" : "primary" }),
                                  ],
                              }),
                              e3
                                  ? tc
                                      ? (0, a.jsx)(y.A.Icon, {
                                            icon: f.PencilIcon,
                                            tooltip: tf,
                                            "aria-label": tf,
                                            selected: te,
                                            disabled: (tn || ts) && !te,
                                            onClick: te ? tm : td,
                                        })
                                      : (0, a.jsx)(y.A.Icon, {
                                            ref: ti,
                                            icon: h.ExperimentalDirectSelectIcon,
                                            iconClassName: fK.D8,
                                            tooltip: th,
                                            "aria-label": th,
                                            selected: ta,
                                            disabled: tn || ts,
                                            onClick: tu,
                                        })
                                  : null,
                              (0, a.jsx)(y.A.Icon, {
                                  icon: g.SettingsIcon,
                                  tooltip: tO,
                                  "aria-label": tO,
                                  onClick: tL,
                              }),
                              tD,
                              Y
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("div", { className: fK.YJ, "aria-hidden": !0 }),
                                            (0, a.jsx)(y.A.Icon, {
                                                icon: p.PanelOpenIcon,
                                                tooltip: tG,
                                                "aria-label": tG,
                                                onClick: ec,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        }),
        tB = i.useId(),
        tU = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null == e
                ? null
                : "frame" !== e
                  ? { mode: e }
                  : null == n
                    ? { mode: e, surface: t }
                    : { mode: e, surface: t, appChannel: n };
        })(eH, eX, eY),
        tK =
            null == s
                ? null
                : (0, a.jsx)(fz, {
                      projectId: s.id,
                      projectName: s.name,
                      toolbar: e5,
                      activeMode: eH,
                      activeTarget: tU,
                      frameTarget: { mode: "frame", surface: eX, ...(null == eY ? {} : { appChannel: eY }) },
                      onCloseApp: tj,
                      widgetRefreshApplicationId: t$,
                      previewPaused: e4,
                      onTogglePreviewPaused: tv,
                      agentDrivingPreview: ts,
                      previewControlsBlocked: tn,
                      blockedPreviewControlLabel: tl,
                      previewPanelId: tB,
                  });
    return (0, a.jsxs)("div", {
        className: u()(fK.nj, fU.T),
        children: [
            tb.importInput,
            (0, a.jsx)("main", {
                className: fK.JX,
                children: ep
                    ? (0, a.jsx)("div", {
                          className: fK.j5,
                          children: (0, a.jsx)("div", {
                              className: fK.sD,
                              children: (0, a.jsx)(x.D, {
                                  variant: "heading-lg/semibold",
                                  children: E.intl.string(I.default.i7PaZ5),
                              }),
                          }),
                      })
                    : null == s
                      ? (0, a.jsxs)("div", {
                            className: fK.j5,
                            children: [
                                tz,
                                (0, a.jsxs)("div", {
                                    className: fK.sD,
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
                                            onClick: () => (0, eS.listProjects)(_),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : (0, a.jsx)(eO.bI.Provider, {
                            value: tA,
                            children: (0, a.jsx)(
                                fM,
                                {
                                    projectId: s.id,
                                    designFeedbackToggleRef: ti,
                                    applicationId: s.preview_application_id,
                                    previewApplicationId: s.preview_application_id,
                                    surface: e7,
                                    frameLaunchParams: e0,
                                    header: tz,
                                    controlBar: tK,
                                    previewPanelId: tB,
                                    previewPanelLabelledBy: null == tU ? void 0 : eb(tB, tU),
                                    chatOpen: Y,
                                    onCloseChat: tr,
                                    debugOpen: es && er,
                                    onCloseDebug: tp,
                                    onRestoreVersion: ef,
                                    onImportProject: (0, eI.PV)(s) ? tb.onImport : void 0,
                                    restoreState: em,
                                    previewReady: ey,
                                    previewGate: tw,
                                    availability: eK,
                                    activeMode: eH,
                                    widgetApplicationId: e1,
                                    overlayWidgetSize: e2,
                                    previewPaused: e4,
                                    onResumePreview: tx,
                                },
                                s.id,
                            ),
                        }),
            }),
        ],
    });
}
function fW() {
    return (0, a.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: fK.Hv, itemClassName: fK.C5 });
}
