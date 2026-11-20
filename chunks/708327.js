n.d(t, { A: () => hV });
var l,
    r,
    i = n(477900),
    a = n(582128),
    s = n.t(a, 2),
    o = n(503698),
    u = n.n(o),
    c = n(855986),
    d = n(821609),
    f = n(625903),
    m = n(259730),
    h = n(604525),
    g = n(534514),
    p = n(834730),
    x = n(289873),
    v = n(646973),
    b = n(742589),
    j = n(723702),
    y = n(839214);
n(321073);
let k = Object.freeze({ x: 0.5, y: 0.5 });
function w(e) {
    return "" !== e.trim();
}
function A(e) {
    let t = e.name.trim(),
        n = (function (e) {
            switch (e.role) {
                case "button":
                    return "Button";
                case "link":
                    return "Link";
                case "heading":
                    return "Heading";
                case "textbox":
                    return "Input";
                case "checkbox":
                    return "Checkbox";
                case "radio":
                    return "Radio";
                case "combobox":
                    return "Dropdown";
                case "slider":
                    return "Slider";
                case "switch":
                    return "Toggle";
                case "img":
                    return "Image";
                case "list":
                    return "List";
                case "listitem":
                    return "List item";
                case "tab":
                    return "Tab";
                case "menuitem":
                    return "Menu item";
                case "dialog":
                    return "Dialog";
                case "progressbar":
                    return "Progress bar";
                case "separator":
                    return "Divider";
                case "label":
                    return "Label";
            }
            switch (e.tag) {
                case "img":
                case "picture":
                    return "Image";
                case "svg":
                    return "Icon";
                case "video":
                    return "Video";
                case "canvas":
                    return "Canvas";
                case "p":
                case "span":
                case "strong":
                case "em":
                case "small":
                case "blockquote":
                case "code":
                case "li":
                    return "Text";
                case "form":
                    return "Form";
                case "ul":
                case "ol":
                    return "List";
                case "table":
                    return "Table";
                case "header":
                    return "Header";
                case "footer":
                    return "Footer";
                case "nav":
                    return "Navigation";
                case "section":
                case "article":
                case "main":
                case "aside":
                case "figure":
                    return "Section";
                case "div":
                    return "Container";
            }
            return null;
        })(e);
    return null == n
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: n, name: t };
}
function S(e) {
    let { kind: t, name: n } = A(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function C(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let n = e.name.trim();
    return (
        "" !== n && t.push(`name="${n}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        null != e.marker && t.push(`marker="${e.marker}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let N = "[conjure:selected] ",
    I = " \u2014 ";
function E(e) {
    if (!e.startsWith(N)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(N.length),
        i = r.indexOf(I),
        a = (-1 === i ? r : r.slice(0, i)).trim();
    return "" === a ? null : { label: a, body: l };
}
let _ = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    M = new Map(),
    R = new Set();
function P(e) {
    return M.get(e) ?? _;
}
function T(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? M.set(e, t) : M.delete(e), [...R]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function L(e) {
    let t = P(e);
    t.active || T(e, { ...t, active: !0 });
}
function $(e) {
    let t = P(e);
    t.active && T(e, { ...t, active: !1 });
}
function D(e) {
    M.has(e) && T(e, _);
}
function q(e, t) {
    let n = P(e);
    n.active && T(e, { ...n, context: t });
}
function F(e, t) {
    return null != t && e.authorId === t;
}
function O(e) {
    return (
        R.add(e),
        () => {
            R.delete(e);
        }
    );
}
function G(e) {
    let t = a.useCallback(() => (null == e ? _ : P(e)), [e]);
    return a.useSyncExternalStore(O, t, t);
}
(n(134528), n(947204));
let z = { past: [], present: [], future: [] };
function U(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function B(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function K(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => B(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: B(e.from, t, n), to: B(e.to, t, n) };
        case "text":
            return { ...e, at: B(e.at, t, n) };
    }
}
function H(e) {
    return e.some((e) => "erase" !== e.kind);
}
function W(e, t) {
    switch (e.kind) {
        case "marker":
            return e.points.length > 1;
        case "erase":
            return e.points.length > 0;
        case "circle":
        case "square": {
            let n = e.width * t.width;
            return Math.abs(e.to.x - e.from.x) * t.width >= n && Math.abs(e.to.y - e.from.y) * t.height >= n;
        }
        case "text":
            return "" !== e.text.trim();
    }
}
function V(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        i = l * l + r * r,
        a = 0 === i ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / i));
    return Math.hypot(e.x - (t.x + a * l), e.y - (t.y + a * r));
}
function X(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function Y(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => X(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                i = n.map((e) => e.y),
                a = Math.min(...r) - l,
                s = Math.min(...i) - l;
            return { x: a, y: s, width: Math.max(...r) + l - a, height: Math.max(...i) + l - s };
        }
        case "circle":
        case "square": {
            let n = X(e.from, t),
                l = X(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = X(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function Q(e) {
    return H(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let Z = [3, 6, 12],
    J = [10, 20, 40],
    ee = new Map(),
    et = (0, y.D)(() => ({ byProject: {} })),
    en = {
        active: !0,
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: z,
        sketchDismissedFor: null,
        chatFocusRequest: 0,
        keptStill: null,
    };
function el(e) {
    return et.getState().byProject[e] ?? null;
}
function er(e, t) {
    let n = el(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = et.getState();
    et.setState({ byProject: { ...r, [e]: l } });
}
function ei(e, t) {
    null == t ? ee.delete(e) : ee.set(e, t);
}
function ea(e) {
    return ee.get(e)?.() ?? Promise.resolve(null);
}
function es(e) {
    let t = el(e);
    if (null != t) {
        if (!Q(t)) return void eo(e);
        (t.active && er(e, (t) => ({ ...t, active: !1, keptStill: ea(e) })), D(e));
    }
}
function eo(e) {
    if (null == el(e)) return;
    let { [e]: t, ...n } = et.getState().byProject;
    (et.setState({ byProject: n }), D(e));
}
function eu(e, t) {
    null != el(e) &&
        (er(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? L(e) : $(e));
}
function ec(e, t) {
    er(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return U(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return U(
                        e,
                        e.present.map((e) => (e.id === t.id ? K(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : U(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : U(e, []);
                case "undo": {
                    let t = e.past.at(-1);
                    if (null == t) return e;
                    return { past: e.past.slice(0, -1), present: t, future: [e.present, ...e.future] };
                }
                case "redo": {
                    let [t, ...n] = e.future;
                    if (null == t) return e;
                    return { past: [...e.past, e.present], present: t, future: n };
                }
            }
        })(e.history, t);
        return n === e.history ? e : { ...e, history: n };
    });
}
function ed(e) {
    er(e, (e) => ({ ...e, chatFocusRequest: e.chatFocusRequest + 1 }));
}
function ef(e) {
    return et.useState((t) => null != e && t.byProject[e]?.active === !0);
}
var em = n(314116),
    eh = n(858899),
    eg = n(949757),
    ep = n(800202),
    ex = n(191850),
    ev = n(792996),
    eb = n(540665);
let ej = new Set(),
    ey = null;
function ek(e, t) {
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
                ej.add(t),
                () => {
                    ej.delete(t);
                }
            );
        }, [e]));
}
var ew = n(253932);
function eA() {
    return ew.Q_.useSetting() || !1;
}
var eS = n(573083),
    eC = n(971079),
    eN = n(61577),
    eI = n(686507),
    eE = n(192308),
    e_ = n(128761),
    eM = n(503922),
    eR = n(967008),
    eP = n(777847),
    eT = n(227007),
    eL = n(398773),
    e$ = n(735769),
    eD = n(513845),
    eq = n(802905),
    eF = n(951178);
let eO = { width: 320, height: 240 };
function eG(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eO;
}
function ez(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function eU(e) {
    return eG(e?.preview_overlay_widget ?? null);
}
var eB = n(855859),
    eK = n(238490),
    eH = n(991690);
function eW(e) {
    return e
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-+|-+$/g, "");
}
var eV = n(696645);
function eX(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function eY(e, t) {
    if ("bot" === e.mode) return ev.intl.string(ex.default.gThNz6);
    if ("frame" === e.mode && e.surface === eH.U.APP_CHANNEL) {
        let n = e.appChannel ?? eW(t);
        if ("" !== n) return `#${n}`;
    }
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, eV.X)(e.surface)
                : ev.intl.formatToPlainString(ex.default["6xVl+N"], {
                      surface: (0, eV.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return ev.intl.string(ex.default.y5GiL1);
        case "overlay":
            return ev.intl.string(ex.default["2940LX"]);
        case "bot":
            return ev.intl.string(ex.default.tjpaGN);
    }
}
var eQ = n(939398),
    eZ = n(52724),
    eJ = n(323384),
    e0 = n(983851),
    e1 = n(794083),
    e2 = n(861004),
    e3 = n(687966),
    e4 = n(430392),
    e5 = n(939249),
    e7 = n(866665),
    e8 = n(789645),
    e9 = n(388155);
function e6(e, t) {
    return `${e}-tab-${eX(t).replace(/\s+/g, "-")}`;
}
function te(e, t) {
    let n = e.getBoundingClientRect(),
        l = t.getBoundingClientRect();
    l.left < n.left ? (e.scrollLeft -= n.left - l.left) : l.right > n.right && (e.scrollLeft += l.right - n.right);
}
let tt = { [eH.U.APP_CHANNEL]: eJ.AppsIcon, [eH.U.VOICE_CHANNEL]: e0.VoiceNormalIcon, [eH.U.MAIN]: e1.ActivitiesIcon };
function tn(e) {
    let { targets: t, activeTarget: n, projectName: l, onSelect: r, closableTarget: s, onClose: o, panelId: c } = e,
        d = null == n ? null : eX(n),
        f = null == s ? null : eX(s),
        m = t.findIndex((e) => eX(e) === f),
        h = t.some((e) => eX(e) === d) ? d : t.length > 0 ? eX(t[0]) : null,
        g = ev.intl.string(ex.default["/TlGcK"]),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useRef(null);
    a.useEffect(() => {
        let e = x.current;
        if (null != e)
            return (e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t));
        function t(t) {
            if (null == e || Math.abs(t.deltaY) <= Math.abs(t.deltaX)) return;
            let n = Math.abs(e.scrollLeft);
            (t.deltaY > 0 ? n < e.scrollWidth - e.clientWidth - 1 : n > 1) &&
                (t.preventDefault(), (e.scrollLeft += "rtl" === getComputedStyle(e).direction ? -t.deltaY : t.deltaY));
        }
    }, [x]);
    let j = (function (e, t) {
        let [n, l] = a.useState(!1),
            [r, i] = a.useState(!1);
        return (
            a.useLayoutEffect(() => {
                let t = e.current;
                if (null == t) return;
                let n = "rtl" === getComputedStyle(t).direction;
                function r() {
                    if (null == t) return;
                    let e = Math.abs(t.scrollLeft),
                        r = e > 1,
                        a = e < t.scrollWidth - t.clientWidth - 1;
                    (l(n ? a : r), i(n ? r : a));
                }
                r();
                let a = new ResizeObserver(r);
                for (let e of (a.observe(t), t.querySelectorAll(`.${e9.Mf}`))) a.observe(e);
                return (
                    t.addEventListener("scroll", r, { passive: !0 }),
                    () => {
                        (a.disconnect(), t.removeEventListener("scroll", r));
                    }
                );
            }, [e, t]),
            { left: n, right: r }
        );
    })(x, t);
    async function y(e) {
        let t,
            n = v.current;
        if (null == n) return;
        let l = (0, eZ.C)({
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
        let t = x.current,
            n = e.currentTarget.closest(`.${e9.Mf}`);
        null != t && null != n && te(t, n);
    }
    a.useLayoutEffect(() => {
        let e = x.current,
            t = b.current;
        null != e && null != t && te(e, t);
    }, [d]);
    let w = m < 0 ? null : eY(t[m], l);
    return (0, i.jsxs)("div", {
        ref: x,
        className: u()(e9.vR, { [e9.e$]: j.left, [e9.Rh]: j.right }),
        children: [
            (0, i.jsx)("div", {
                ref: v,
                className: e9.gj,
                role: "tablist",
                "aria-label": ev.intl.string(ex.default.I2ucou),
                children: t.map((e, t) => {
                    let n = eX(e),
                        a = n === d,
                        s = eY(e, l),
                        o = (function (e) {
                            switch (e.mode) {
                                case "frame":
                                    return tt[e.surface];
                                case "widget":
                                    return e2.UserSquareIcon;
                                case "overlay":
                                    return e3.GameControllerIcon;
                                case "bot":
                                    return e4.RobotIcon;
                            }
                        })(e);
                    return (0, i.jsx)(
                        "div",
                        {
                            ref: a ? b : void 0,
                            className: u()(e9.Mf, { [e9.yR]: a, [e9.P5]: t === m, [e9.h5]: m >= 0 && t > m }),
                            children: (0, i.jsxs)(e5.D, {
                                id: e6(c, e),
                                className: e9.eg,
                                role: "tab",
                                "aria-selected": a,
                                "aria-controls": a ? c : void 0,
                                tabIndex: n === h ? 0 : -1,
                                onClick: () => r(e),
                                onKeyDown: y,
                                onFocus: k,
                                children: [
                                    (0, i.jsx)(o, { size: "sm", color: "currentColor", className: e9.Ll }),
                                    (0, i.jsx)(p.E, {
                                        variant: "body-sm/medium",
                                        color: "none",
                                        lineClamp: 1,
                                        className: e9.Gn,
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
                ? (0, i.jsx)(e7.m, {
                      position: "bottom",
                      text: g,
                      ariaHidden: !0,
                      children: (0, i.jsx)(e5.D, {
                          className: e9.b,
                          onClick: o,
                          "aria-label": `${g}, ${w}`,
                          children: (0, i.jsx)(e8.XSmallIcon, { size: "sm", color: "currentColor" }),
                      }),
                  })
                : null,
        ],
    });
}
var tl = n(27184),
    tr = n(627363),
    ti = n(233470),
    ta = n(153207),
    ts = n(260498),
    to = n(625180),
    tu = n(672929),
    tc = n(111534),
    td = n(754027),
    tf = n(165610),
    tm = n(457827),
    th = n(722701),
    tg = n(962998),
    tp = n(738604),
    tx = n(585412),
    tv = n(719593),
    tb = n(265872),
    tj = n(405433),
    ty = n(42473),
    tk = n(811587),
    tw = n(95264),
    tA = n(412073);
function tS(e) {
    var t;
    let l,
        r,
        { project: s, guildId: o } = e,
        d =
            ((l = s?.id),
            (null !=
            (r = (0, c.bG)([th.A], () => (null == l ? null : (th.A.getPublishStatus(l)?.publishState ?? null)), [l]))
                ? (0, tk.lE)(r)
                : (s?.supported_surfaces?.length ?? 0) > 0) && (0, ts.H_)(s)),
        { canShare: f } =
            ((t = s.id),
            (0, c.cf)(
                [ts.Ay, th.A],
                () => {
                    let e = ts.Ay.getProject(t),
                        n = th.A.getPublishStatus(t)?.publishState,
                        l = null != e && (0, ts.PV)(e);
                    return { canShare: null != e && null != n && (l ? "nothing_built" !== n : (0, tk.lE)(n)) };
                },
                [t],
            )),
        m = a.useCallback(() => {
            null != s && (0, tw.A)(s, o);
        }, [s, o]),
        h = a.useRef(null);
    if (!d && !f) return null;
    let g = ev.intl.string(ex.default.XWgAfc),
        x = ev.intl.string(ev.t.RDE0Sc);
    return (0, i.jsx)(tb.Q, {
        targetElementRef: h,
        position: "bottom",
        align: "right",
        ignoreModalClicks: !0,
        renderPopout: async () => {
            let { default: e } = await Promise.all([n.e(440720), n.e(159957), n.e(441532), n.e(838858)]).then(
                n.bind(n, 958234),
            );
            return () => (0, i.jsx)(e, { projectId: s.id });
        },
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsxs)("div", {
                ref: h,
                className: u()(tA.Os, { [tA.q6]: l }),
                children: [
                    d
                        ? (0, i.jsx)(ty.A, {
                              className: u()(tA.MX, tA.mz, { [tA.JA]: f }),
                              icon: (0, i.jsx)(p.E, { variant: "body-sm/medium", color: "none", children: g }),
                              "aria-label": g,
                              tooltipText: null,
                              onClick: m,
                          })
                        : null,
                    f
                        ? (0, i.jsx)(ty.A, {
                              className: u()(tA.MX, tA.uM, { [tA.w9]: d }),
                              icon: tj.ShareIcon,
                              tooltipText: x,
                              tooltipShouldShow: !l,
                              onClick: n,
                          })
                        : null,
                ],
            });
        },
    });
}
var tC = n(616334),
    tN = n(450030),
    tI = n(812771),
    tE = n(58736),
    t_ = n(743898),
    tM = n(333007),
    tR = n(621466),
    tP = n(775121),
    tT = n(989145),
    tL = n(81369),
    t$ = n(826745),
    tD = n(34595),
    tq = n(470779);
function tF(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
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
            drafts: b,
            addFiles: j,
            pasteFiles: y,
            removeDraft: k,
            settled: w,
            takeRefs: A,
        } = (0, tD.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        S = a.useRef(null),
        C = (f || b.length > 0) && w && !m,
        N = a.useCallback(() => {
            if (!C) return;
            let e = A();
            c(e.length > 0 ? e : void 0);
        }, [C, A, c]),
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
        [M, R] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = _.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => R({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let P = M?.height ?? 44,
        T = l.left + 8,
        L = l.top + 8,
        $ = Math.max(n.x, T),
        D = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, L), Math.max(L, l.top + l.height - P - 8));
    return (0, i.jsxs)("div", {
        ref: _,
        className: u()(tq.M0, { [tq.ho]: I && !m, [tq.ET]: m }),
        style: { left: $, top: D },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("input", {
                              ref: S,
                              type: "file",
                              multiple: !0,
                              className: tq.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (j(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, i.jsx)(e7.m, {
                              position: "bottom",
                              text: ev.intl.string(ex.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, i.jsx)("button", {
                                  type: "button",
                                  className: tq.tY,
                                  onClick: () => S.current?.click(),
                                  "aria-label": ev.intl.string(ex.default.lgvqSB),
                                  children: (0, i.jsx)(tL.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tq.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, i.jsx)(t$.y, {
                autoFocus: !0,
                rows: 1,
                className: tq.hF,
                value: s,
                placeholder: x ?? ("" === r ? ev.intl.string(ex.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? ev.intl.string(ex.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            b.length > 0
                ? (0, i.jsx)("div", {
                      className: tq.ZO,
                      children: b.map((e) => (0, i.jsx)(tD.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function tO(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tG(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tz(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = a.useState(() => (t ? tO(e()) : null));
    return (
        a.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tO(e());
                l((e) => (tG(e, t) ? e : t));
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
var tU = n(876798),
    tB = n(408278),
    tK = n(48507),
    tH = n(193885),
    tW = n(744898),
    tV = n(803656),
    tX = n(241326),
    tY = n(972213),
    tQ = n(646514);
function tZ(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function tJ(e, t, n) {
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
let t0 = tJ("red", tZ(tQ.A.unsafe_rawColors.RED_400), () => ev.intl.string(ex.default.tvXfjt)),
    t1 = [
        t0,
        tJ("yellow", tZ(tQ.A.unsafe_rawColors.YELLOW_300), () => ev.intl.string(ex.default.FYuaJ1)),
        tJ("green", tZ(tQ.A.unsafe_rawColors.GREEN_360), () => ev.intl.string(ex.default["Vv+paS"])),
        tJ("blue", tZ(tQ.A.unsafe_rawColors.BLUE_345), () => ev.intl.string(ex.default.k9b1QJ)),
        tJ("white", tZ(tQ.A.unsafe_rawColors.WHITE), () => ev.intl.string(ex.default["1sOXwH"])),
    ];
function t2(e) {
    return t1.find((t) => t.id === e) ?? t0;
}
var t3 = n(39416);
function t4(e) {
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
function t5(e) {
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
function t7(e) {
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
function t8(e) {
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
let t9 = Z.map((e) => t8(Math.min(16, e + 3))),
    t6 = J.map((e) => t8(Math.min(16, e / 2.5))),
    ne = [ex.default.jZtZUr, ex.default.cTQdD0, ex.default.J3ucEg],
    nt = {
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
            label: () => ev.intl.string(ex.default.oIZQbm),
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
            label: () => ev.intl.string(ex.default.ARNVr7),
        },
    };
function nn(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, i.jsx)(e7.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)("span", {
            className: t3.z6,
            "data-active": l ? "" : void 0,
            children: (0, i.jsx)(tU.k, {
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
function nl(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, i.jsx)(e7.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)(tB.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function nr(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = a.useState(!1),
        u = a.useCallback(() => o(!1), []),
        c = a.useCallback(() => o((e) => !e), []);
    return (0, i.jsxs)("div", {
        className: t3.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, i.jsx)("div", {
                      className: t3.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function ni(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: a, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: f } = n,
        m = t2(n.colorId),
        h = nt[u],
        g = ev.intl.string(ex.default.hUm825),
        p = ev.intl.string(ex.default.n5IA3a),
        x = ev.intl.string(ex.default.r5dX6t),
        v = ev.intl.string(ex.default.VfYqDq);
    return (0, i.jsxs)("div", {
        className: t3.t$,
        children: [
            (0, i.jsx)("div", {
                className: t3.NT,
                children: (0, i.jsx)(nn, {
                    icon: t5,
                    label: ev.intl.string(ex.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => eu(t, "pick"),
                }),
            }),
            (0, i.jsxs)("div", {
                className: t3.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": ev.intl.string(ex.default["0IAEFf"]),
                children: [
                    (0, i.jsx)(nn, {
                        icon: t4,
                        label: ev.intl.string(ex.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => eu(t, "move"),
                    }),
                    (0, i.jsx)(nn, {
                        icon: tK.LettersIcon,
                        label: ev.intl.string(ex.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => eu(t, "text"),
                    }),
                    (0, i.jsx)(nr, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(nn, {
                                icon: tH.PaintbrushThinIcon,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (eu(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            t9.map((n, l) =>
                                (0, i.jsx)(
                                    nn,
                                    {
                                        icon: n,
                                        label: ev.intl.string(ne[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (er(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), $(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(nr, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, i.jsx)(nn, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (eu(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(nt).map((n) =>
                                (0, i.jsx)(
                                    nn,
                                    {
                                        icon: nt[n].icon,
                                        label: nt[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (eu(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, i.jsx)(nr, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(nn, {
                                icon: t7,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (eu(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            t6.map((n, l) =>
                                (0, i.jsx)(
                                    nn,
                                    {
                                        icon: n,
                                        label: ev.intl.string(ne[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (er(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), $(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(nr, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, i.jsx)(nl, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            t1.map((n) =>
                                (0, i.jsx)(
                                    nn,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                er(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)("div", { className: t3.Gz, role: "separator" }),
                    (0, i.jsx)(nl, {
                        icon: tW.UndoIcon,
                        label: ev.intl.string((0, j.cX)() ? ex.default["j/XmBQ"] : ex.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, i.jsx)(nl, {
                        icon: tV.RedoIcon,
                        label: ev.intl.string((0, j.cX)() ? ex.default.C7jhpn : ex.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: a,
                    }),
                    (0, i.jsx)(nl, {
                        icon: tX.TrashIcon,
                        label: ev.intl.string(ex.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, i.jsx)("div", { className: t3.Gz, role: "separator" }),
                    (0, i.jsx)(nl, { icon: tY.XLargeIcon, label: ev.intl.string(ex.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let na = tQ.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    ns = tQ.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    no = tQ.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function nu(e, t, n) {
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
                    (e.strokeStyle = no),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function nc(e) {
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
let nd = { dx: 0, dy: 0 },
    nf = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    nm = 1;
function nh(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = et.useState((e) => (null == s ? null : (e.byProject[s] ?? null))),
        { active: u } = G(s),
        c = (0, eE.Rv)(),
        [d, f] = a.useState(!1);
    a.useEffect(() => {
        if (null != s)
            return () => {
                el(s)?.active === !0 && eo(s);
            };
    }, [s]);
    let m = o?.active === !0 && "pick" === o.tool;
    a.useEffect(() => {
        null != s && m && !u && L(s);
    }, [s, m, u]);
    let h = a.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, tl.wn)(e);
        if (null != t) return t;
        function n() {
            f(!1);
        }
        (0, tM.flushSync)(() => f(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, tl.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (a.useEffect(() => {
        if (null != s) return (ei(s, h), () => ei(s, null));
    }, [s, h]),
    null == s || null == o || !o.active || c)
        ? null
        : (0, i.jsx)(ng, { projectId: s, state: o, capturing: d, resolveIframe: r });
}
function ng(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tz(r),
        [o, u] = a.useState(null),
        [c, d] = a.useState(0),
        [f, m] = a.useState(null),
        [h, g] = a.useState(nd),
        p = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useRef(null),
        j = a.useRef(null),
        { tool: y, history: k } = n,
        w = t2(n.colorId),
        A = "pick" !== y,
        S = "marker" === n.tool ? Z[n.markerSize] : "eraser" === n.tool ? J[n.eraserSize] : null,
        C = "eraser" === y ? null : w.value,
        N = a.useMemo(
            () =>
                null == S
                    ? void 0
                    : (function (e, t) {
                          let n = Math.ceil(Math.max(e, 24) / 2),
                              l = 2 * n + 4;
                          if (l > 128) return "crosshair";
                          let r = l / 2,
                              i = (e, t) => `<circle cx="${r}" cy="${r}" r="${e}" ${t}/>`,
                              a = [
                                  `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${l}" viewBox="0 0 ${l} ${l}">`,
                                  i(n, `fill="none" stroke="${ns}" stroke-width="4"`),
                                  i(n, `fill="none" stroke="${na}" stroke-width="2"`),
                                  i(3, `fill="${t ?? na}" stroke="${ns}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(a)}") ${r} ${r}, crosshair`;
                      })(S, C),
            [S, C],
        ),
        I = "move" === y ? (k.present.find((e) => e.id === f) ?? null) : null,
        E = null != s;
    (a.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [E]),
        a.useLayoutEffect(() => {
            j.current = o;
        }, [o]));
    let _ = a.useCallback(() => {
        let e = p.current;
        if (null == e || null == s) return;
        let t = window.devicePixelRatio,
            n = Math.round(s.width * t),
            l = Math.round(s.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let r = e.getContext("2d");
        if (null == r) return;
        (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, n, l), r.setTransform(t, 0, 0, t, 0, 0));
        let i = b.current,
            a = null == i ? k.present : k.present.map((e) => (e.id === i.id ? K(e, h.dx, h.dy) : e)),
            o = v.current;
        nu(r, null == o ? a : [...a, o], { width: s.width, height: s.height });
    }, [s, k.present, h]);
    a.useLayoutEffect(_, [_]);
    let M = a.useCallback(
            (e) =>
                null == s ? { x: 0, y: 0 } : { x: (e.clientX - s.left) / s.width, y: (e.clientY - s.top) / s.height },
            [s],
        ),
        R = a.useCallback(() => {
            let e = j.current;
            if (null == e || null == s) return;
            j.current = null;
            let n = {
                id: `mark-${nm++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            (W(n, s) && ec(t, { type: "commit", shape: n }), u(null), ed(t));
        }, [t, w, s]),
        P = a.useCallback(() => {
            ((j.current = null), u(null), ed(t));
        }, [t]),
        T = a.useCallback(
            (e) => {
                if (0 !== e.button || null == s) return;
                if (null != j.current) return void R();
                let t = M(e);
                switch (y) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * s.width, y: t.y * s.height },
                            l = null == I ? null : Y(I, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? I
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = X(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => X(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (V(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = X(e.from, n),
                                                                  r = X(e.to, n),
                                                                  i = 6 + (e.width * n.width) / 2,
                                                                  a = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return a.some((e, t) => V(l, e, a[(t + 1) % 4]) <= i);
                                                          }
                                                          case "circle": {
                                                              let t = X(e.from, n),
                                                                  r = X(e.to, n),
                                                                  i = Math.abs(r.x - t.x) / 2,
                                                                  a = Math.abs(r.y - t.y) / 2;
                                                              if (0 === i || 0 === a) return !1;
                                                              let s = (t.x + r.x) / 2,
                                                                  o = (t.y + r.y) / 2;
                                                              return (
                                                                  Math.abs(
                                                                      Math.hypot((l.x - s) / i, (l.y - o) / a) - 1,
                                                                  ) <=
                                                                  (6 + (e.width * n.width) / 2) / Math.min(i, a)
                                                              );
                                                          }
                                                          case "text": {
                                                              let t = Y(e, n);
                                                              return (
                                                                  l.x >= t.x - 6 &&
                                                                  l.x <= t.x + t.width + 6 &&
                                                                  l.y >= t.y - 6 &&
                                                                  l.y <= t.y + t.height + 6
                                                              );
                                                          }
                                                      }
                                                  })(e[l], t, n)
                                              )
                                                  return e[l];
                                          return null;
                                      })(k.present, t, s);
                        if ((m(r?.id ?? null), null == r)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (b.current = { id: r.id, origin: t }));
                        return;
                    }
                    case "text":
                        u({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!H(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${nm++}`,
                                kind: "erase",
                                width: J[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${nm++}`,
                                kind: "marker",
                                color: w.value,
                                width: Z[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${nm++}`,
                                kind: y,
                                color: w.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                _();
            },
            [s, y, w, I, k.present, n.markerSize, n.eraserSize, M, R, _],
        ),
        L = a.useCallback(
            (e) => {
                let t = M(e),
                    n = b.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = v.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (v.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (v.current = { ...l, to: t }),
                    _());
            },
            [M, _],
        ),
        $ = a.useCallback(() => {
            p.current?.removeAttribute("data-dragging");
            let e = b.current;
            if (null != e) {
                ((b.current = null), g(nd), ec(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && W(n, s) ? (ec(t, { type: "commit", shape: n }), ed(t)) : _());
        }, [t, s, h, _]),
        D = a.useCallback(() => es(t), [t]),
        q = a.useCallback(() => ec(t, { type: "undo" }), [t]),
        F = a.useCallback(() => ec(t, { type: "redo" }), [t]),
        O = a.useCallback(() => ec(t, { type: "clear" }), [t]),
        G = a.useRef({ tool: y, selected: I, exit: D, undo: q, redo: F });
    if (
        (a.useLayoutEffect(() => {
            G.current = { tool: y, selected: I, exit: D, undo: q, redo: F };
        }),
        a.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, tR.Cw)((0, tR.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != j.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: i, redo: a } = G.current,
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
                    (e.preventDefault(), ec(t, { type: "remove", id: l.id }), m(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = nf[s];
                null != o && (e.preventDefault(), eu(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        a.useEffect(() => {
            if (A) return (tP.A.disable(), () => tP.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let z = Math.max(8, s.left - c - 8),
        U = null == I ? null : Y(null == b.current ? I : K(I, h.dx, h.dy), s);
    return (0, tM.createPortal)(
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: t3.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: t3.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, i.jsx)("canvas", {
                            ref: p,
                            className: t3.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": ev.intl.string(ex.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            style: { cursor: l ? void 0 : N },
                            onPointerDown: T,
                            onPointerMove: L,
                            onPointerUp: $,
                            onPointerCancel: $,
                        }),
                        null == U
                            ? null
                            : (0, i.jsxs)("div", {
                                  className: t3.r1,
                                  style: { left: U.x, top: U.y, width: U.width, height: U.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, i.jsx)("span", { className: t3.p$, "data-corner": "nw" }),
                                      (0, i.jsx)("span", { className: t3.p$, "data-corner": "ne" }),
                                      (0, i.jsx)("span", { className: t3.p$, "data-corner": "sw" }),
                                      (0, i.jsx)("span", { className: t3.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == o
                    ? null
                    : (0, i.jsx)(tF, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + o.at.x * s.width, y: s.top + o.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: ev.intl.string(ex.default["8gX1lw"]),
                          label: ev.intl.string(ex.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: o.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: R,
                          onUploadFile: (e) => (0, tT.vX)(t, e),
                          onDismiss: P,
                          canSubmit: "" !== o.value.trim(),
                          closing: !1,
                      }),
                (0, i.jsx)("div", {
                    ref: x,
                    className: t3.ej,
                    style: { left: z, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, i.jsx)(ni, { projectId: t, state: n, onExit: D, onUndo: q, onRedo: F, onClear: O }),
                }),
            ],
        }),
        document.body,
    );
}
var np = n(308081),
    nx = n(516521),
    nv = n(683071),
    nb = n(65593),
    nj = n(218394),
    ny = n(115982),
    nk = n(886540);
function nw(e) {
    return !(0, nk.BL)(e) && !0 !== e.stopRequested;
}
var nA = n(104317),
    nS = n(643278),
    nC = n(566424),
    nN = n(683063),
    nI = n(140735),
    nE = n(847374),
    n_ = n(320448),
    nM = n(138212);
function nR(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: a, ...s } = e;
    return (0, i.jsxs)("section", {
        className: u()(nM.Nr, r),
        ...s,
        children: [
            (0, i.jsxs)("header", {
                className: u()(nM.wx, null != n && nM.o5, a),
                children: [
                    (0, i.jsx)(p.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nP = n(148590);
function nT(e) {
    let { children: t } = e;
    return (0, i.jsx)(p.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nL(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: o,
            beforeBody: c,
            children: d,
            ...f
        } = e,
        m = a.useId(),
        [h, g] = a.useState(!l),
        [p, x] = a.useState(l);
    p !== l && (x(l), g(!l));
    let v = a.useCallback(() => g((e) => !e), []),
        b = h ? nE.ChevronSmallDownIcon : n_.ChevronSmallRightIcon,
        j = null != n || l;
    return (0, i.jsxs)(nR, {
        ...f,
        title: t,
        trailing: j
            ? (0, i.jsxs)("span", {
                  className: nP.ZY,
                  children: [
                      n,
                      l
                          ? (0, i.jsx)(e5.D, {
                                className: nP.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, i.jsx)(b, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : nP.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, i.jsx)("div", { id: m, className: u()(nP.rf, o), hidden: !h, children: d })],
    });
}
var n$ = n(883646);
let nD = [];
function nq(e) {
    let { status: t } = e;
    return (0, i.jsxs)("span", {
        className: u()(n$.xL, {
            [n$.Vb]: "in_progress" === t,
            [n$.cT]: "completed" === t,
            [n$.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ev.intl.string(ex.default.KvBdun);
                case "in_progress":
                    return ev.intl.string(ex.default["m5G9+S"]);
                case "unfinished":
                    return ev.intl.string(ex.default.lRpwhD);
                default:
                    return ev.intl.string(ex.default.sPGeWi);
            }
        })(t),
        children: [
            (0, i.jsx)(x.y, {
                type: x.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: n$.Qd,
                itemClassName: n$.xB,
                "aria-hidden": !0,
            }),
            (0, i.jsx)("svg", {
                className: n$.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, i.jsx)("path", { className: n$.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nF(e) {
    let { agents: t, active: n } = e,
        l = a.useMemo(() => (n ? t : nD), [n, t]),
        r = a.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = a.useState(l),
        [c, d] = a.useState(s),
        [f, m] = a.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
    let h = o.some((e) => !r.has(e.key));
    if (
        (a.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        a.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => m(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, i.jsxs)("span", {
        className: n$.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: a } = e,
                    { Illocon: s } = n;
                return (0, i.jsx)(
                    nN.u,
                    {
                        asset: (0, i.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: a,
                        position: "top",
                        children: (0, i.jsx)("span", {
                            className: n$.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, i.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, i.jsx)(p.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: n$.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function nO(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [n, l] = a.useState(() => new Set(e)),
                [r, i] = a.useState(t),
                [s, o] = a.useState(() => new Set());
            return (
                r !== t && (i(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                a.useEffect(() => {
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
        })(a.useMemo(() => n.map((e) => e.id), [n])),
        c =
            ((t = (r ?? nD).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nD),
                [t],
            ));
    return (0, i.jsxs)("ul", {
        className: n$.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, i.jsxs)(
                    "li",
                    {
                        className: u()(n$.AS, { [n$.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, i.jsx)(nq, { status: n }),
                            (0, i.jsx)(p.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: n$.iV,
                                selectable: !0,
                                children: (0, i.jsx)("span", {
                                    className: n$.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, i.jsx)(nF, { agents: c.get(e.id) ?? nD, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, i.jsxs)("li", {
                      className: n$.AS,
                      "data-provisional": !0,
                      children: [
                          (0, i.jsx)(nq, { status: "pending" }),
                          (0, i.jsx)(p.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: n$.iV,
                              selectable: !0,
                              children: (0, i.jsx)("span", { className: n$.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nG(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: a = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = ev.intl.formatToPlainString(ex.default["P/I+JW"], { completed: o, total: u }),
        d = ev.intl.formatToPlainString(ex.default["7tzwKB"], { completed: o, total: u });
    return (0, i.jsx)(nL, {
        title: ev.intl.string(ex.default.RtzECX),
        meta: (0, i.jsx)(nT, { children: c }),
        superseded: s,
        showLabel: ev.intl.string(ex.default.RKyN9q),
        hideLabel: ev.intl.string(ex.default.xydHoj),
        className: n$.Nr,
        bodyClassName: n$.rf,
        beforeBody: r && !s ? (0, i.jsx)(nI.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, i.jsx)(nO, { todos: t, provisional: n, agents: l, live: a }),
    });
}
var nz = n(308665),
    nU = n(59678),
    nB = n(903847);
function nK(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: c } = e,
        d = null != n,
        [f, m] = a.useState(n ?? "top"),
        [h, g] = a.useState(d),
        [p, x] = a.useState(!1),
        [v, b] = a.useState(!1),
        [j, y] = a.useState(d);
    (j !== d && (y(d), null != n ? (m(n), g(!0)) : (x(!1), b(!1))),
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
        [A, S] = a.useState(!1),
        [C, N] = a.useState(v);
    (C !== v && (N(v), v ? w(!0) : S(!1)),
        a.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        a.useEffect(() => {
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
        E = a.useCallback(() => b((e) => !e), []);
    return h
        ? (0, i.jsxs)("div", {
              className: nB.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, i.jsxs)("div", {
                      className: u()(nB.vK, { [nB.ho]: p && d, [nB.ET]: !d }),
                      children: [
                          null == c
                              ? (0, i.jsx)("ol", {
                                    className: u()(nB.Rk, nU.pj),
                                    "data-live": "true",
                                    children: (0, i.jsx)(nC.A, {
                                        glyph: (0, i.jsx)(nz.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, i.jsx)(e5.D, {
                                    className: nB.pZ,
                                    onClick: c,
                                    "aria-label": ev.intl.string(ex.default.hEK6qu),
                                    children: (0, i.jsx)("ol", {
                                        className: u()(nB.Rk, nU.pj),
                                        "data-live": "true",
                                        children: (0, i.jsx)(nC.A, {
                                            glyph: (0, i.jsx)(nz.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, i.jsx)(e7.m, {
                                    text: ev.intl.string(ex.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, i.jsx)(e5.D, {
                                        className: nB.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": ev.intl.string(ex.default.RtzECX),
                                        children: (0, i.jsx)(nS.ClipboardListIcon, {
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
                            className: u()(nB.vB, { [nB.pg]: v && A, [nB.ui]: !v }),
                            children: (0, i.jsx)(nG, {
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
let nH = new Map(),
    nW = (0, y.D)(() => ({ byMessageKey: {} }));
function nV(e, t) {
    let { [e]: n, ...l } = nW.getState().byMessageKey;
    nW.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nX = n(195880),
    nY = n(287111),
    nQ = n(16619);
function nZ(e) {
    let t = (0, nQ.qh)("ConjureClarificationProjectPicker");
    return a.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var nJ = n(337232),
    n0 = n(890497),
    n1 = n(103557),
    n2 = n(29073),
    n3 = n(590077);
function n4(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let i = nZ(e),
                [s, o] = a.useState(null),
                [u, c] = a.useState([]),
                [d, f] = a.useState(t.prompt),
                [m, h] = a.useState(!1),
                [g, p] = a.useState(!1),
                x = a.useRef(new Map()),
                v = a.useRef(!1),
                b = a.useRef(!1),
                j = a.useMemo(() => i.filter((e) => !u.some((t) => t.target.projectId === e.projectId)), [i, u]),
                y = a.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = a.useMemo(() => {
                    let e = s ?? y;
                    return j.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, j]),
                w = a.useMemo(() => j.filter((e) => k.includes(e.projectId)), [j, k]),
                A = a.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                S = d.trim(),
                C = n && !m && (w.length > 0 ? "" !== S : u.length > 0),
                N = a.useCallback(
                    (t) => {
                        b.current ||
                            ((b.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, nY.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          ev.intl.formatToPlainString(ex.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = ev.intl.formatToPlainString(ex.default.jZlNst, { targets: l });
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
                    if (0 === w.length) return void N(u);
                    (h(!0), p(!1));
                    let l =
                        ((t = ts.Ay.getProject(e)?.name ?? e),
                        (n = ev.intl.formatToPlainString(ex.default.ScoZLp, { name: t, projectId: e })),
                        `${S}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nX.m)() }), x.current.set(e.projectId, t)),
                                (0, nJ.s)(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: S }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && N(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [C, N, u, e, w, S]),
                E = a.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !m && N(u), l());
                }, [N, u, l, m]);
            return {
                projects: j,
                targetIds: k,
                setTargetIds: A,
                prompt: d,
                setPrompt: f,
                sending: m,
                failed: g,
                canSubmit: C,
                submit: I,
                dismiss: E,
            };
        })(t, n, l, r, s),
        c = a.useMemo(
            () =>
                o.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [o.projects],
        ),
        f = `${n.id}-heading`;
    return (0, i.jsxs)("section", {
        className: u()(n2.nd, n2.jx),
        "aria-labelledby": f,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, i.jsxs)("div", {
                className: n2.wx,
                children: [
                    (0, i.jsx)(p.E, {
                        tag: "span",
                        id: f,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: n2.TK,
                        children: n.summary,
                    }),
                    (0, i.jsx)(tB.K, {
                        icon: e8.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": ev.intl.string(ex.default.KQUuAZ),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: n3.r,
                children: [
                    0 === c.length
                        ? (0, i.jsx)(p.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ev.intl.string(ex.default.TbbzW5),
                          })
                        : (0, i.jsx)(n0.Z, {
                              label: ev.intl.string(ex.default["29gr8j"]),
                              placeholder: ev.intl.string(ex.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, i.jsx)(n1.f, {
                        label: ev.intl.string(ex.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? ev.intl.string(ex.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: n2.qr,
                children: (0, i.jsx)("div", {
                    className: n2.zt,
                    children: (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: ev.intl.string(ex.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var n5 = n(47167),
    n7 = n(734057),
    n8 = n(994500),
    n9 = n(287809),
    n6 = n(360047);
function le(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
var lt = n(652215);
function ln(e) {
    return 0 === e.options.length && null == e.input;
}
function ll(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function lr(e, t, n) {
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
function li(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function la(e, t, n, l) {
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
let ls = {
    [lt.rbe.GUILD_TEXT]: "text",
    [lt.rbe.GUILD_VOICE]: "voice",
    [lt.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [lt.rbe.GUILD_STAGE_VOICE]: "stage",
    [lt.rbe.GUILD_FORUM]: "forum",
    [lt.rbe.GUILD_MEDIA]: "media",
};
function lo(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = n7.A.getChannel(t)?.type) ? void 0 : ls[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = n9.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let lu = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lc = {
        channel: [ex.default["9+dfPT"], ex.default.pGSJqE],
        role: [ex.default["2VkCoD"], ex.default.c8YlX8],
        user: [ex.default.GZIAxl, ex.default["4bptbQ"]],
        project: [ex.default.twlOb6, ex.default.twlOb6],
        server: [ex.default.ZWXDeI, ex.default.ZWXDeI],
    };
function ld(e, t) {
    return ev.intl.string(lc[e][+!!t]);
}
var lf = n(658675),
    lm = n(22231),
    lh = n(123292),
    lg = n(900797),
    lp = n(331322),
    lx = n(771871),
    lv = n(700915),
    lb = n(985965),
    lj = n(831819);
function ly(e) {
    let { link: t, disabled: n } = e,
        l = a.useId(),
        [r, s] = a.useState(!1),
        o = a.useRef(null),
        { sentence: u, options: c } = t.data,
        d = c.length > 1,
        f = a.useMemo(() => c.map((e) => ({ name: e.label, value: e.build })), [c]);
    return (
        a.useEffect(() => {
            r && o.current?.querySelector("input:checked")?.focus();
        }, [r]),
        (0, i.jsx)("div", {
            className: lj.Nz,
            children: (0, i.jsxs)(lp.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(lv.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, i.jsx)(lb.A, { purpose: t.purpose }) : null,
                    null != u
                        ? (0, i.jsxs)("div", {
                              className: lj.em,
                              children: [
                                  (0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                                  d && !r
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(p.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, i.jsx)(lh.Q, {
                                                    text: ev.intl.string(ex.default.I5F6YX),
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
                        ? (0, i.jsxs)("div", {
                              ref: o,
                              className: lj.zM,
                              children: [
                                  (0, i.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, i.jsx)(lx.z, {
                                      "aria-labelledby": l,
                                      options: f,
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
var lk = n(344587),
    lw = n(155078);
function lA(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let lS = [];
function lC(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? ev.intl.string(ex.default.ZZ641e)
          : ev.intl.string(1 === e.options.length ? ex.default["2g3gk9"] : ex.default.dkzChE);
}
var lN = n(762026);
function lI(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function lE(e, t) {
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
var l_ = n(682163),
    lM = n(300344),
    lR = n(614733),
    lP = n(904363),
    lT = n(950902),
    lL = n(136722),
    l$ = n(778858),
    lD = n(808728),
    lq = n(696451),
    lF = n(71393),
    lO = n(488926),
    lG = n(426035),
    lz = n(246338);
let lU = lL.kg(lt.xBc.VIEW_CHANNEL, lt.xBc.SEND_MESSAGES);
var lB = n(384017);
function lK(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: a,
            onFocus: s,
            onBlur: o,
            options: u,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: f,
        } = e,
        m = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        return lo(n.input ?? "channel", e, (e) => u.find((t) => t.value === e)?.label, l);
    }
    let p = {
        options: u,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: f,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, i.jsx)("div", {
        className: lB.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, i.jsx)(n0.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => a(g(e), t),
              })
            : (0, i.jsx)(n0.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => a(null == e ? [] : g([e]), t),
              }),
    });
}
function lH(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lM.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: i, value: s, disabled: o, onChange: u } = e,
            d =
                ((t = null != r && "channel" === i.input && "safety_alerts_channel" === i.default),
                (n = (0, c.bG)(
                    [ts.Ay],
                    () => {
                        let e = t ? ts.Ay.getProject(l) : null;
                        return null == e ? null : (0, lG.ug)(e);
                    },
                    [l, t],
                )),
                a.useEffect(() => {
                    null == r || null == n || lq.Ay.isMember(r, n) || l$.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [lD.A, lq.Ay, lF.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lF.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lD.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let a = (0, lz.Lp)(l, i.channel_filter).find((t) => t.id === e);
                        if (null == a) return null;
                        if (null != n && lq.Ay.isMember(r, n))
                            return lO.$3({ permission: lU, user: n, context: a }) ? a : null;
                        let s = a.permissionOverwrites[r]?.deny ?? lL.BY;
                        return lL.X8(s, lU) ? null : a;
                    },
                    [r, n, t, i.channel_filter],
                )),
            f = a.useRef(null),
            m = a.useRef(!1);
        a.useEffect(() => {
            if (!m.current && !o && null != r) {
                if (null == f.current) {
                    if (s.length > 0) m.current = !0;
                    else if (null != d) {
                        var e;
                        ((f.current = d.id),
                            u(((e = []), lo("channel", [d.id], () => (0, n5.m1)(d, n9.default, n8.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), u([], r));
            }
        }, [d, o, r, u, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, i.jsx)(lK, { ...r, guildId: n, options: s, placeholder: ld("channel", !0 === r.question.multi_select) });
}
function lW(e) {
    let { guildId: t, ...n } = e,
        l = (0, lP.A)(t);
    return (0, i.jsx)(lK, { ...n, guildId: t, options: l, placeholder: ld("role", !0 === n.question.multi_select) });
}
function lV(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: a } = (0, lR.A)(t);
    return (0, i.jsx)(lK, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: a,
        placeholder: ld("user", !0 === n.question.multi_select),
    });
}
function lX(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = nZ(t),
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
    return 0 === s.length ? n : (0, i.jsx)(lK, { ...l, options: s, placeholder: ld("project", !1) });
}
function lY(e) {
    let t = e.target;
    (0, tR.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lQ(e) {
    let { fallback: t, ...n } = e,
        l = (0, nQ.z9)("ConjureClarificationEntityPicker"),
        r = a.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, i.jsx)(l_.Ay, { guild: e, size: l_.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, i.jsx)("div", {
              onFocus: lY,
              onMouseUp: lY,
              children: (0, i.jsx)(lK, { ...n, options: r, placeholder: ld("server", !1) }),
          });
}
function lZ(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lT.Tj)(t, !0);
    if ("project" === l.question.input) return (0, i.jsx)(lX, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, i.jsx)(lQ, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, i.jsx)(lH, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, i.jsx)(lW, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, i.jsx)(lV, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lJ = n(87221),
    l0 = n(26430),
    l1 = n(750943),
    l2 = n(173936),
    l3 = n(95477),
    l4 = n(256905),
    l5 = n(490707),
    l7 = n(907702);
function l8(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, l5._)(t, n),
        [d, f] = a.useState(null),
        m = null != s && d === s;
    return o
        ? (0, i.jsxs)("span", {
              className: u()(l7.Gt, l7.b6),
              children: [
                  (0, i.jsx)(lJ.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, i.jsx)(p.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: ev.intl.string(ex.default.lhgD88),
                  }),
              ],
          })
        : (0, i.jsx)("span", {
              className: u()(l7.Gt, { [l7.iP]: !m }),
              children:
                  null != s
                      ? (0, i.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l7.Sl,
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
function l9(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: a,
            selected: s,
            disabled: o,
            reachable: c,
            tabbable: d,
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: x,
        } = e,
        v = ev.intl.formatToPlainString(ex.default.JGjZMs, { answer: r.label });
    return (0, i.jsxs)("div", {
        className: u()(l7.Vs, { [l7.Q9]: s, [l7.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, i.jsxs)(e5.D, {
                className: u()(l7.Up, { [l7.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => m(r) : void 0) : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: a ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ev.intl.formatToPlainString(ex.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, i.jsxs)("span", {
                        className: l7.$_,
                        children: [
                            null != r.image
                                ? (0, i.jsx)(l8, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, i.jsx)("span", { className: l7.Gt }),
                            (0, i.jsx)("span", {
                                className: l7.q3,
                                "aria-hidden": !0,
                                children: a
                                    ? (0, i.jsx)(lf.P, { checked: s, disabled: o })
                                    : (0, i.jsx)(lx.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(p.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: l7.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lw.E)(t) : "")
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
            null != x
                ? (0, i.jsx)("span", {
                      className: l7.B4,
                      children: (0, i.jsx)(e7.m, {
                          text: ev.intl.string(ex.default.HQEXJM),
                          children: (0, i.jsx)(tB.K, {
                              icon: tX.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: o,
                              "aria-label": ev.intl.string(ex.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, i.jsx)("span", {
                        className: l7.B4,
                        children: (0, i.jsx)(e7.m, {
                            text: ev.intl.string(ex.default["4/eeDD"]),
                            children: (0, i.jsx)(tB.K, {
                                icon: l0.MaximizeIcon,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": v,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function l6(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: o, own: c } = e,
        d = !0 === n.multi_select,
        { options: f } = n,
        m = f.length > 4 ? "gallery" : "row",
        h = a.useRef(null),
        g = a.useRef(new Map()),
        [p, x] = a.useState(null),
        v = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => l.includes(e.id)) ?? f[0])?.id,
        b = a.useMemo(() => {
            var e;
            return null == c.image
                ? null
                : ((e = c.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: ev.intl.string(ex.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        j = a.useCallback(
            (e) => {
                let n = (null == b ? f : [...f, b]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, tT.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, l4.R)({
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
            [f, b, t],
        ),
        y = a.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || o(l));
            },
            [r, d, o, f],
        );
    return (0, i.jsxs)("div", {
        className: l7.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == b
                ? null
                : (0, i.jsxs)("div", {
                      ref: h,
                      className: u()(l7.fF, "gallery" === m ? l7.nV : l7.nM, { [l7.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, i.jsx)(
                                  l9,
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
                                      onView: j,
                                      onArrow: y,
                                      onMeasured: (t) => g.current.set(e.id, t),
                                  },
                                  e.id,
                              ),
                          ),
                          null != b
                              ? (0, i.jsx)(
                                    l9,
                                    {
                                        projectId: t,
                                        option: b,
                                        multi: d,
                                        selected: c.selected,
                                        disabled: r,
                                        reachable: s,
                                        tabbable: !0,
                                        onPick: c.onPick,
                                        onView: j,
                                        onArrow: () => void 0,
                                        onMeasured: (e) => g.current.set(b.id, e),
                                        onRemove: c.onRemove,
                                    },
                                    b.id,
                                )
                              : null,
                      ],
                  }),
            (0, i.jsx)(re, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: ev.intl.string(/\bicons?\b/i.test(n.question) ? ex.default.qU4WN6 : ex.default.cbMDDB),
            }),
        ],
    });
}
function re(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = a.useRef(null),
        [u, c] = a.useState(!1),
        [f, m] = a.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function x() {
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
        className: l7.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, i.jsxs)("div", {
                className: l7.QJ,
                children: [
                    (0, i.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l1.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => o.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, i.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: l2.LinkIcon,
                              text: ev.intl.string(ex.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, i.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: l7.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nY.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            u
                ? (0, i.jsxs)("div", {
                      className: l7.vG,
                      children: [
                          (0, i.jsx)("div", {
                              className: l7.Hs,
                              children: (0, i.jsx)(l3.k, {
                                  label: ev.intl.string(ex.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ev.intl.string(ex.default.AVhvn8),
                                  value: f,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), x())
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
                              className: l7.gd,
                              children: [
                                  (0, i.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ev.intl.string(ex.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === f.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, i.jsx)(lh.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: ev.intl.string(ex.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, i.jsx)(p.E, {
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
function rt(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = a.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, i.jsxs)(e5.D, {
        className: u()(lB.uK, { [lB.ue]: l, [lB.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": ev.intl.formatToPlainString(d ? ex.default["2p6UFz"] : ex.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, i.jsx)("span", { className: lB.dy, children: (0, i.jsx)(lf.P, { checked: o, disabled: l }) })
                : (0, i.jsx)("span", { className: lB.Gy, "aria-hidden": !0, children: n }),
            (0, i.jsxs)("span", {
                className: lB.qO,
                children: [
                    (0, i.jsx)("span", {
                        className: lB.l8,
                        children: (0, i.jsx)(p.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lB.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, i.jsx)(p.E, {
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
                ? (0, i.jsx)(p.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: lB.rM,
                      children: ev.intl.string(ex.default.zku6r1),
                  })
                : null,
        ],
    });
}
function rn(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: a = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lA(n)
        ? (0, i.jsx)(l6, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: a, onPick: s, own: o })
        : (0, i.jsx)(i.Fragment, {
              children: n.options.map((e, t) =>
                  (0, i.jsx)(
                      rt,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: u ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: a,
                      },
                      e.id,
                  ),
              ),
          });
}
let rl = [],
    rr = [];
function ri(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: a,
            disabled: s,
            ownImage: o,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        f = !0 === n.multi_select ? ev.intl.string(ex.default.tE8qbz) : lC(n);
    return (0, i.jsxs)("div", {
        className: u()(lB.Ge, lB.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, i.jsx)(p.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lB.aK,
                      children: f,
                  }),
            (0, i.jsx)(rn, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lE(o, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && lA(n))
                ? null
                : (0, i.jsxs)("div", {
                      className: lB.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lB.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(lm.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, i.jsx)("span", { className: u()(lB.Pu, lB.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, i.jsx)("div", {
                      className: lB.$0,
                      children: (0, i.jsx)(lh.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: ev.intl.string(ex.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function ra(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: o,
            onBack: f,
            backText: m,
            hideSubmit: h = !1,
            headingLines: g = 5,
        } = e,
        [x, v] = a.useState({}),
        [b, j] = a.useState({}),
        [y, k] = a.useState({}),
        [w, A] = a.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [S, C] = a.useState({}),
        { builds: N, linkFor: I } = (function (e, t, n) {
            let l = a.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = le(e, t, n[t.id] ?? []);
                                return null == l ? [] : [[t.id, l]];
                            }),
                        ),
                    [t, n, e],
                ),
                [r, i] = a.useState({}),
                [s, o] = a.useState({}),
                u = a.useRef(new Set());
            a.useEffect(() => {
                for (let e of Object.values(l))
                    u.current.has(e.key) ||
                        (u.current.add(e.key),
                        (async function (e, t, n) {
                            try {
                                let l = await (0, n6.LW)(e, t);
                                i((e) => ({ ...e, [n]: l }));
                            } catch {}
                        })(e.target, e.caller, e.key));
            }, [l]);
            let d = (0, c.cf)(
                [ts.Ay],
                () =>
                    Object.fromEntries(
                        Object.values(l).flatMap((e) => [e.target, e.caller].map((e) => [e, ts.Ay.getProject(e)])),
                    ),
                [l],
            );
            return {
                builds: a.useMemo(
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
                linkFor: a.useCallback(
                    (i) => {
                        let a = l[i],
                            u = null == a ? null : r[a.key],
                            c = n[i]?.[0]?.name,
                            f = d[e]?.name;
                        if (null == a || null == u || null == c || null == f) return null;
                        let m = a.caller === e,
                            h = d[a.caller],
                            g = {
                                caller: m ? f : c,
                                target: m ? c : f,
                                targetLive: u.live,
                                targetHasPreview: u.hasPreview,
                                callerHasPreview: null == h || (0, eF._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[a.key] ?? u.build,
                            x = t.questions.find((e) => e.id === i);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[a.target] ?? null,
                            flow: x?.link_flow ?? u.flow,
                            purpose: (0, lN.xP)(x?.link_purpose ?? u.purpose),
                            data: (0, lN.Bw)(g, p),
                            value: p,
                            aria: (0, lN.sr)(g),
                            onChange: (e) => o((t) => ({ ...t, [a.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, w),
        [E, _] = a.useState(!1),
        [M, R] = a.useState(0),
        [P, T] = a.useState(null),
        [L, $] = a.useState(null),
        [D, q] = a.useState(null),
        [F, O] = a.useState(!1),
        G = a.useRef(null),
        [z, U] = a.useState(null),
        B = a.useRef(null),
        K = a.useRef(0),
        H = null == r,
        W = l.questions.length,
        V = Math.min(M, W - 1),
        X = l.questions[V],
        [Y, Q] = a.useState({ id: X.id, expanded: !1 }),
        Z = Y.id === X.id && Y.expanded,
        [J, ee] = a.useState(null),
        et = b[X.id] ?? "",
        en = !0 === X.multi_select,
        el = lA(X),
        er = en ? ev.intl.string(ex.default.tE8qbz) : lC(X),
        ei = en
            ? (y[X.id] ?? rl)
            : ((t = x[X.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : lS),
        ea = (function (e, t, n) {
            let [l, r] = a.useState({}),
                [i, s] = a.useState({}),
                [o, u] = a.useState({}),
                c = ev.intl.string(ex.default.wTsP5l),
                d = a.useCallback((e) => l[e] ?? null, [l]),
                f = a.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : lI(t[e.id])),
                    [t, l, o],
                ),
                m = a.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = a.useCallback(
                    (a, o) => {
                        let d = a.id,
                            m = !0 === a.multi_select,
                            h = l[d] ?? null;
                        if (o) return lE(h, f(a));
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
                                    null != l && (0, tT.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(a),
                            busy: i[d]?.busy ?? null,
                            error: i[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, tT.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !lI(e[d])) return e;
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
                                                error: { source: "upload", text: ev.intl.string(ex.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, tT.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ev.intl.string(ex.default.l79PMc),
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
        })(n, x, v),
        es = ea.imageFor(X.id),
        eo = ea.selectedFor(X),
        { text: eu, phase: ec } = (0, lk.Q)(X.question),
        ed = eu === X.question,
        ef = ed && J?.id === X.id && J.truncated;
    a.useLayoutEffect(() => {
        if (null == z || Z || !ed) return;
        function e() {
            if (null == z) return;
            let e = z.scrollHeight > z.clientHeight + 1;
            ee((t) => (t?.id === X.id && t.truncated === e ? t : { id: X.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(z), () => t.disconnect());
    }, [ed, z, X.id, Z]);
    let em = ev.intl.string(Z ? ev.t.iTcuma : ev.t.dcl9MQ),
        eh = a.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let i = li(t, n);
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
                                (s = t.questions.flatMap((t) => {
                                    let r = n[t.id];
                                    return r?.kind !== "entities"
                                        ? []
                                        : r.entities.flatMap((n) => {
                                              let r = le(e, t, [n]);
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
                                    ? a()
                                    : Promise.allSettled(
                                          s.map((e) => {
                                              let { target: t, caller: n, ...l } = e;
                                              return (0, n6.Ol)(t, n, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, N, r);
            },
            [l, N, r, n],
        ),
        eg = a.useCallback(
            (e, t) => {
                K.current += 1;
                let n = K.current;
                (T({ direction: t, moves: n }),
                    $({ question: X, draft: et, selected: ei, ownImage: es, ownSelected: eo, direction: t, moves: n }),
                    O(!0),
                    R(e));
            },
            [et, es, eo, X, ei],
        ),
        ep = a.useCallback(() => {
            let e = G.current,
                t = B.current;
            null != e && null != t && q({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = G.current,
            t = B.current;
        if (null == e || null == t) return;
        ep();
        let n = new ResizeObserver(ep);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ep]);
    let eb = P?.moves;
    a.useEffect(() => {
        if (null == eb) return;
        let e = setTimeout(() => $(null), 400),
            t = setTimeout(() => O(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eb]);
    let ej = a.useCallback(
            (e) => {
                let t = lr(l, e, V);
                null == t ? eh(e) : eg(t, t < V ? "back" : "forward");
            },
            [l, V, eh, eg],
        ),
        ey = a.useCallback(
            (e) => {
                if (H) return;
                let t = { ...x, [X.id]: e };
                (v(t), ej(t));
            },
            [ej, x, H, X.id],
        ),
        ek = a.useCallback(() => {
            H || 0 === V || eg(V - 1, "back");
        }, [H, V, eg]),
        ew = 0 !== V || H ? void 0 : f,
        eA = (V > 0 && !H) || null != ew,
        eS = a.useCallback(
            (e) => {
                j((e) => ({ ...e, [X.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                el ? H || v((e) => ({ ...e, [X.id]: t })) : ey(t);
            },
            [H, el, X.id, ey],
        ),
        eC = a.useCallback(() => {
            (j((e) => ({ ...e, [X.id]: "" })), ey({ kind: "custom", text: ev.intl.string(ex.default.zxSq2q) }));
        }, [X.id, ey]),
        { multiPartFor: eN } = ea,
        eI = a.useMemo(() => (en ? la(X, ei, et, eN(X)) : null), [et, en, eN, X, ei]),
        eE = w[X.id] ?? rr,
        e_ = I(X.id),
        eM = a.useMemo(() => {
            var e, t;
            let n;
            return null != X.input
                ? ((e = X.input),
                  (t = S[X.id]),
                  (n = et.trim()),
                  {
                      kind: "entities",
                      entities: eE,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eE.map((t) => (t.name.startsWith(lu[e]) ? t.name : `${lu[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [et, S, eE, X.id, X.input]),
        eR = a.useCallback(
            (e, t) => {
                (A((t) => ({ ...t, [X.id]: e })), C((e) => ({ ...e, [X.id]: t })));
            },
            [X.id],
        ),
        eP = a.useCallback(() => _(!0), []),
        eT = a.useCallback(() => _(!1), []),
        eL = ea.controlsFor(X, H),
        e$ = a.useMemo(() => {
            var e;
            let t;
            return (
                (e = x[X.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: ev.intl.string(ex.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(X, e))
                    ? null
                    : "" === et.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? la(X, [t.optionId], et)
                        : la(X, [], et, t)
            );
        }, [x, et, X]),
        eD = a.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eM, eI ?? e$, et),
            [et, eI, e$, eM],
        ),
        eq = a.useCallback(() => {
            null != eD && ey(eD);
        }, [eD, ey]),
        [eO, eG] = a.useState(!1),
        [ez, eU] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eG(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eB = a.useCallback(() => {
            null != s && (eU(!0), setTimeout(s, 150));
        }, [s]),
        eK = eD ?? (null == eM && null == eI ? (x[X.id] ?? null) : null),
        eH = a.useMemo(
            () =>
                null == eK
                    ? (function (e, t, n) {
                          let l = e.questions[n];
                          if (l?.optional !== !0) return null;
                          let r = Object.fromEntries(
                              Object.entries(t).filter((e) => {
                                  let [t] = e;
                                  return t !== l.id;
                              }),
                          );
                          return null == lr(e, r, n) && "" === li(e, r) ? null : r;
                      })(l, x, V)
                    : null,
            [x, l, V, eK],
        ),
        eW = null != eH,
        eV = (null != eK || eW) && !H,
        eX = V === W - 1,
        eY = a.useCallback(() => {
            H || (null != eK ? ey(eK) : null != eH && (v(eH), ej(eH)));
        }, [ej, H, eK, ey, eH]),
        eQ = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tR.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tR.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tR.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eA
                            ? (e.preventDefault(), (ew ?? ek)())
                            : "ArrowRight" === e.key && eV && (e.preventDefault(), eY())));
            },
            [ew, eA, eV, ek, eY],
        ),
        eZ =
            el && !0 !== X.upload
                ? null
                : (0, i.jsxs)("div", {
                      className: lB.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lB.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(lm.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, i.jsx)(t$.y, {
                              value: et,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  j((e) => ({ ...e, [X.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eq());
                              },
                              placeholder: ev.intl.string(ln(X) ? ex.default.yLN1x6 : ex.default["tOC+tn"]),
                              "aria-label": ev.intl.formatToPlainString(ex.default["4JeYPB"], { question: X.question }),
                              disabled: H,
                              rows: 1,
                              className: lB.Pu,
                              "data-conjure-clarification-other": X.id,
                          }),
                      ],
                  });
    return (0, i.jsxs)("section", {
        className: u()(lB.$O, { [lB.fI]: eO && !ez, [lB.Oh]: ez }),
        role: "dialog",
        "aria-label": X.question,
        "data-conjure-clarification": l.id,
        "data-state": H ? "inert" : "open",
        "data-question-expanded": Z ? "true" : void 0,
        "data-picker-open": E && !F ? "true" : void 0,
        "data-step": V,
        tabIndex: -1,
        onKeyDown: eQ,
        children: [
            (0, i.jsxs)("div", {
                className: lB.rf,
                style: null == D ? void 0 : { height: D.heading + D.rows },
                "data-moving": F ? "" : void 0,
                children: [
                    (0, i.jsxs)("div", {
                        ref: G,
                        className: lB.wx,
                        children: [
                            (0, i.jsx)(p.E, {
                                ref: U,
                                tag: "span",
                                id: `${X.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Z ? void 0 : g,
                                className: u()(n2.TK, lB.R_, { [lB.TB]: "exit" === ec, [lB.JU]: "enter" === ec }),
                                children: eu,
                            }),
                            ef || Z
                                ? (0, i.jsx)("div", {
                                      className: n2.Q7,
                                      children: (0, i.jsx)(e7.m, {
                                          text: em,
                                          children: (0, i.jsx)(tB.K, {
                                              icon: Z ? lg.ChevronSmallUpIcon : nE.ChevronSmallDownIcon,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Q({ id: X.id, expanded: !Z }),
                                              "aria-label": em,
                                              "aria-controls": `${X.id}-label`,
                                              "aria-expanded": Z,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, i.jsx)(e5.D, {
                                      className: u()(n2.gb, n2.Q7),
                                      onClick: eB,
                                      "aria-label": ev.intl.string(ex.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, i.jsx)(e8.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: lB.Cg,
                        style: null == D ? void 0 : { insetBlockStart: D.heading },
                        children: (0, i.jsxs)("div", {
                            className: lB.I,
                            children: [
                                (0, i.jsxs)("div", {
                                    ref: B,
                                    className: lB.Ge,
                                    role: "group",
                                    "aria-labelledby": `${X.id}-label`,
                                    "data-direction": P?.direction,
                                    "data-parity": null == P ? void 0 : P.moves % 2,
                                    children: [
                                        null == er
                                            ? null
                                            : (0, i.jsx)(p.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lB.aK,
                                                  children: er,
                                              }),
                                        (0, i.jsx)(rn, {
                                            projectId: n,
                                            question: X,
                                            selected: ei,
                                            disabled: H,
                                            onPick: (e) =>
                                                en
                                                    ? k((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [X.id]:
                                                                  ((n = t[X.id] ?? rl),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  X.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eS(e),
                                            own: eL,
                                        }),
                                        null != X.input
                                            ? (0, i.jsx)(lZ, {
                                                  projectId: n,
                                                  question: X,
                                                  value: eE,
                                                  disabled: H,
                                                  onChange: eR,
                                                  onFocus: eP,
                                                  onBlur: eT,
                                                  fallback: ll(X) ? null : eZ,
                                              })
                                            : null,
                                        null != e_ ? (0, i.jsx)(ly, { link: e_, disabled: H }) : null,
                                        null != X.note
                                            ? (0, i.jsx)(p.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lB.aK,
                                                  children: X.note,
                                              })
                                            : null,
                                        ll(X) ? eZ : null,
                                        !0 === X.upload
                                            ? (0, i.jsx)("div", {
                                                  className: lB.$0,
                                                  children: (0, i.jsx)(lh.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: ev.intl.string(ex.default.zxSq2q),
                                                      disabled: H,
                                                      onClick: eC,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == L
                                    ? null
                                    : (0, i.jsx)(
                                          ri,
                                          {
                                              projectId: n,
                                              question: L.question,
                                              draft: L.draft,
                                              selected: L.selected,
                                              ownImage: L.ownImage,
                                              ownSelected: L.ownSelected,
                                              direction: L.direction,
                                              disabled: H,
                                          },
                                          L.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            W > 1 || en || el || null != X.input || null != f || !0 === X.optional || ln(X)
                ? (0, i.jsxs)("div", {
                      className: n2.qr,
                      children: [
                          (0, i.jsx)(p.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  W > 1
                                      ? ev.intl.formatToPlainString(ex.default.yzYUjq, { index: V + 1, total: W })
                                      : null,
                          }),
                          (0, i.jsxs)("div", {
                              className: n2.zt,
                              children: [
                                  eA
                                      ? (0, i.jsx)(lh.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: m ?? ev.intl.string(ex.default.Pk5lfA),
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
                                                ? (o ?? ev.intl.string(ev.t.geKm7t))
                                                : ev.intl.string(eW ? ex.default.ZcrbKz : ex.default.w1nRmT),
                                            disabled: !eV,
                                            onClick: eY,
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
var rs = n(557744),
    ro = n(223347),
    ru = n(890698),
    rc = n(27232),
    rd = n(505930);
let rf = [1, 2, 3, 4, 5];
n(786986);
var rm = n(693654);
function rh(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = a.useId(),
        o = a.useId();
    return (0, i.jsxs)("div", {
        className: rm.zm,
        children: [
            (0, i.jsx)(p.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, ru.wy)(t) }),
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: rm.uf,
                children: rf.map((e) => {
                    let a = null != n && e <= n,
                        s = a ? rc.StarIcon : rd.StarOutlineIcon;
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: rm.uK,
                            children: [
                                (0, i.jsx)("input", {
                                    type: "radio",
                                    name: o,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: rm.hF,
                                    "aria-label": (0, ru.MF)(t, e),
                                }),
                                (0, i.jsx)("span", {
                                    className: u()(rm.d4, { [rm.cO]: a }),
                                    children: (0, i.jsx)(s, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
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
function rg(e) {
    let { pending: t } = e,
        n = (0, ru.PM)(t),
        l = a.useId();
    return (0, i.jsx)("section", {
        className: rm.Nr,
        "aria-labelledby": l,
        children: (0, i.jsxs)(lp.B, {
            gap: 12,
            children: [
                (0, i.jsxs)(lp.B, {
                    gap: 4,
                    children: [
                        (0, i.jsx)(g.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: ev.intl.string(ex.default.GVLtfq),
                        }),
                        (0, i.jsx)(p.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ev.intl.string(ex.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, i.jsxs)(lp.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, i.jsx)(
                                rh,
                                {
                                    dimension: e,
                                    value: n.scores[e],
                                    disabled: n.submitting,
                                    onChange: (t) => n.setScore(e, t),
                                },
                                e,
                            ),
                        ),
                        (0, i.jsx)(p.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: ev.intl.string(ex.default.BvaFUc),
                        }),
                    ],
                }),
                (0, i.jsx)(n1.f, {
                    label: ev.intl.string(ex.default.d28g0o),
                    placeholder: ev.intl.string(ex.default.EBB7lL),
                    value: n.feedback,
                    onChange: n.setFeedback,
                    rows: 3,
                    maxLength: 2e3,
                    disabled: n.submitting,
                }),
                null != n.error
                    ? (0, i.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: n.error,
                      })
                    : null,
                (0, i.jsx)(lp.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, i.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: ev.intl.string(ex.default.CYQood),
                        disabled: !n.canSubmit,
                        loading: n.submitting,
                        onClick: n.submit,
                    }),
                }),
            ],
        }),
    });
}
var rp = n(894443),
    rx = n(525530),
    rv = n(564963),
    rb = n(530557),
    rj = n(431527),
    ry = n(628284);
let rk = new Set(["select", "channel", "role", "user"]);
function rw(e, t) {
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
function rA(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var rS = n(914250),
    rC = n(202723);
function rN(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o, onDismiss: c } = e,
        f = a.useCallback(() => {
            (0, eE.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, i.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        m = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: rb.KeyIcon })), [r.fields]),
        h = (0, rv.bB)(l, s),
        g = u()(rC.Lo, { [rC.jY]: h });
    if ("superseded" === s)
        return (0, i.jsx)(
            "article",
            {
                className: g,
                children: (0, i.jsx)(p.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: ev.intl.string(ex.default.CTxtdV),
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
                    (0, i.jsx)(p.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: ev.intl.string(ex.default.HCQvpO),
                    }),
                    (0, i.jsx)(rj.C, { label: ev.intl.string(ex.default.HCQvpO), size: "xs", items: m }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, i.jsx)(
            "article",
            {
                className: rC.Lo,
                children: (0, i.jsx)(rj.C, { label: ev.intl.string(ex.default.HCQvpO), size: "xs", items: m }),
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
                        className: rC.$h,
                        children: [
                            (0, i.jsx)("span", {
                                className: rC.c9,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(ry.CircleCheckIcon, {
                                    size: "xs",
                                    color: tQ.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, i.jsx)(p.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: ev.intl.string(ex.default.sfp7Up),
                            }),
                        ],
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: r.fields
                            .map((e) => e.label)
                            .map((e) =>
                                ev.intl.formatToPlainString(ex.default["Z+FC3j"], {
                                    label: e,
                                    value: ev.intl.string(ex.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let x = null != r.note && "" !== r.note ? r.note : ev.intl.string(ex.default.MPGSHL),
        v = (0, i.jsx)(d.$, { variant: "primary", size: "sm", onClick: f, text: ev.intl.string(ex.default.EK8tKY) });
    return null != c
        ? (0, i.jsxs)("section", {
              className: u()(n2.nd, rC.fw),
              "aria-label": ev.intl.string(ex.default.O0QIqj),
              children: [
                  (0, i.jsxs)("div", {
                      className: n2.wx,
                      children: [
                          (0, i.jsx)(rb.KeyIcon, { size: "xs", color: tQ.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, i.jsx)(p.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: n2.TK,
                              children: ev.intl.string(ex.default.O0QIqj),
                          }),
                          (0, i.jsx)(e5.D, {
                              className: u()(n2.gb, n2.Q7),
                              onClick: c,
                              "aria-label": ev.intl.string(ex.default.Hl7rif),
                              children: (0, i.jsx)(e8.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: rC.DQ,
                      children: [
                          (0, i.jsx)(rS.A, { text: x, variant: "body-sm/normal", color: "text-default" }),
                          (0, i.jsx)(rj.C, { label: ev.intl.string(ex.default.HCQvpO), size: "xs", items: m }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: n2.qr,
                      children: [
                          (0, i.jsx)(p.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: rC.xE,
                              children: ev.intl.string(ex.default["2OdXdn"]),
                          }),
                          (0, i.jsx)("div", { className: n2.zt, children: v }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("article", {
              className: rC.Lo,
              children: [
                  (0, i.jsx)(p.E, {
                      variant: "body-xs/semibold",
                      color: null != o ? "text-brand" : "text-muted",
                      tag: "span",
                      children: ev.intl.string(null != o ? ex.default.O0QIqj : ex.default.HCQvpO),
                  }),
                  (0, i.jsx)(rS.A, { text: x, variant: "body-sm/normal", color: "text-default" }),
                  (0, i.jsx)(rj.C, { label: ev.intl.string(ex.default.HCQvpO), size: "xs", items: m }),
                  (0, i.jsx)("div", { className: rC.sq, children: v }),
              ],
          });
}
var rI = n(442331),
    rE = n(513425);
let r_ = new Set(),
    rM = new Set();
function rR(e) {
    return (
        rM.add(e),
        () => {
            rM.delete(e);
        }
    );
}
function rP() {
    return a.useSyncExternalStore(rR, () => r_);
}
function rT(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        let a = e[i];
        if (null == a || "assistant" !== a.role || null == a.settingsRequest || !(0, nk.BL)(a)) continue;
        let s = a.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(a.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rL(e, t, n) {
    if (!n || null == t) return !1;
    let l = rA(e, t);
    return l.length > 0 && !rw({ keys: l }, t);
}
var r$ = n(782973),
    rD = n(290713),
    rq = n(411236);
function rF(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: o,
            superseded: f,
            summary: m,
            markSaved: h,
        } = (function (e, t, n) {
            let l = rP(),
                [r, i] = a.useState(!1),
                s = null != n ? l.has(n) : r,
                o = a.useCallback(() => {
                    if (null != n) {
                        if (!r_.has(n)) for (let e of ((r_ = new Set([...r_, n])), rM)) e();
                    } else i(!0);
                }, [n]),
                u = (0, c.bG)([rI.A], () => rL(t, rI.A.getSettings(e), s), [e, t, s]);
            return {
                done: u,
                superseded: (0, c.bG)([rE.A], () => null != n && rT(rE.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [rI.A, n7.A],
                    () => {
                        var n;
                        let l = rI.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => n7.A.getChannel(e)?.name ?? null),
                              rA(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: ev.intl.formatToPlainString(ex.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return ev.intl.string(ex.default.CJq1rY);
                                                      case "checkbox":
                                                          return ev.intl.string(
                                                              !0 === t ? ex.default.nXtpn3 : ex.default["0vfaMW"],
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
                                                                      : ev.intl.string(ex.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? ev.intl.string(ex.default.nEv677)
                                                              : ev.intl.string(ex.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return ev.intl.string(ex.default.Fw9G9A);
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
    if (f && !g)
        return (0, i.jsx)("article", {
            className: rq.Mk,
            children: (0, i.jsx)(p.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: ev.intl.string(ex.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, i.jsxs)("article", {
            className: rq.Mk,
            children: [
                (0, i.jsxs)("div", {
                    className: rq.Ol,
                    children: [
                        (0, i.jsx)(ry.CircleCheckIcon, {
                            size: "xs",
                            color: tQ.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(p.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: ev.intl.string(ex.default.AxBLLy),
                        }),
                    ],
                }),
                m.length > 0
                    ? (0, i.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: m.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let x = n.keys?.length === 1 && n.keys[0] === r$.B,
        v = null != n.note && "" !== n.note ? n.note : x ? null : ev.intl.string(ex.default.XuOf5s);
    return (0, i.jsx)(rD.A, {
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
            let o = (0, i.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: ev.intl.string(ex.default.A7dQd9),
            });
            return null == r
                ? (0, i.jsxs)("form", {
                      className: rq.Mk,
                      onSubmit: s,
                      children: [
                          (0, i.jsx)(p.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ev.intl.string(ex.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, i.jsx)(rS.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, i.jsx)("div", { className: rq.p0, children: o }),
                      ],
                  })
                : (0, i.jsxs)("form", {
                      className: u()(n2.nd, n2.jx),
                      "aria-label": ev.intl.string(ex.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, i.jsxs)("div", {
                              className: n2.wx,
                              children: [
                                  (0, i.jsx)(p.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: n2.TK,
                                      children: ev.intl.string(ex.default["jZjP+I"]),
                                  }),
                                  (0, i.jsx)(e5.D, {
                                      className: u()(n2.gb, n2.Q7),
                                      onClick: r,
                                      "aria-label": ev.intl.string(ex.default["iq+Pte"]),
                                      children: (0, i.jsx)(e8.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: rq.DQ,
                              children: [
                                  null != v
                                      ? (0, i.jsx)(rS.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: n2.qr,
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rq.xE,
                                      children: ev.intl.string(ex.default["1w0jMk"]),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: n2.zt,
                                      children: [
                                          (0, i.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: ev.intl.string(ex.default["9J3OG8"]),
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
var rO = n(975571),
    rG = n(427123);
let rz = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rU = n(874421),
    rB = n(932111),
    rK = n(940874),
    rH = n(404373),
    rW = n(89222);
function rV(e) {
    return "" !== rW.A.getDraft(e).trim();
}
var rX = n(29080);
function rY(e) {
    var t;
    let n,
        l,
        { steps: r, content: i, hasProposal: a, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, ny.B4)(r),
        c = u.filter((e) => "message" === e.type).at(-1),
        d =
            !a &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = i.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        f = u.filter((e) => e !== d),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, ny.Lf)(r) }),
    };
}
var rQ = n(62617),
    rZ = n(182368);
let rJ = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    r0 = {
        snail: () => ex.default.ABeVsS,
        goat: () => ex.default.dhXay8,
        frog: () => ex.default.SHeweG,
        bunny: () => ex.default.FytFE1,
        cat: () => ex.default["5c+sHs"],
        caterpillar: () => ex.default["/FYcne"],
        butterfly: () => ex.default["Ib/AxK"],
        dog: () => ex.default.zDjBR1,
        spider: () => ex.default["6sxyrN"],
        bee: () => ex.default.cVtefg,
        bot: () => ex.default.MjCw0v,
    },
    r1 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rQ.Z)(),
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
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rQ.Z)(),
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
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rQ.Z)(),
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
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rQ.Z)(),
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
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rQ.Z)(),
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
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rQ.Z)(),
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
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rQ.Z)(),
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
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rQ.Z)(),
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
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rQ.Z)(),
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
                    o = a.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rQ.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rZ.u, tint: "var(--illo-purple-40)" },
    };
function r2(e) {
    return { ...r1[e], name: ev.intl.string(r0[e]()) };
}
function r3(e) {
    return rJ.includes(e) ? r2(e) : void 0;
}
function r4(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rJ.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rJ[(t + n) % rJ.length]);
            }),
            l
        );
    })(e))
        t.set(n, r2(l));
    return t;
}
var r5 = n(615839);
function r7(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ev.intl.string(ex.default.KcFvbo);
}
var r8 = n(60160),
    r9 = n(101147);
function r6(e) {
    let t = (0, ny.SY)(e.steps);
    return null != t ? (0, ny.WQ)(t) : r7(e.task);
}
function ie(e) {
    let t = r4(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? r3(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: r7(e.task),
                      todoId: e.task.todoId,
                      line: r6(e),
                  },
              ];
    });
}
function it(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: a, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, ny.SY)(n.steps),
        d = u
            ? r6(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(r7(e));
                  switch (e.status) {
                      case "failed":
                          return ev.intl.formatToPlainString(ex.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ev.intl.formatToPlainString(ex.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return ev.intl.formatToPlainString(ex.default["++9woZ"], {
                                  task: t,
                                  duration: (0, r5.MB)(e.durationMs),
                              });
                          return ev.intl.formatToPlainString(ex.default.nmI9Uh, { task: t });
                      default:
                          return ev.intl.formatToPlainString(ex.default.nmI9Uh, { task: t });
                  }
              })(o),
        f = u ? c : void 0,
        m =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, i.jsx)("ol", {
                                    className: nU.dO,
                                    children: n.steps.map((e) =>
                                        (0, i.jsx)(
                                            r9.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, i.jsx)(
                                  "div",
                                  {
                                      className: nU.iq,
                                      children: (0, i.jsx)(r8.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, i.jsx)(nC.A, {
        glyph: (0, i.jsx)(nN.u, {
            asset: (0, i.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: a,
            body: r7(o),
            position: "left",
            children: (0, i.jsx)("span", {
                className: nU.nC,
                children: (0, i.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var il = n(998445),
    ir = n(643210),
    ii = n(648127),
    ia = n(372795),
    is = n(163897);
let io = "conjure-browser-viewer";
function iu(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [ir.A],
            () =>
                n.flatMap((e) => {
                    let n = ir.A.getTab(t, e);
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
        className: is.kR,
        "aria-label": ev.intl.string(ex.default.Uvkr1G),
        children: l.map((e) =>
            (0, i.jsx)("li", { children: (0, i.jsx)(ic, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function ic(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, o] = (function () {
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
        c = (0, eE.Ry)(io),
        [d, f] = a.useState(!1),
        m = a.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, ii.i)(l.session);
    return (0, i.jsxs)(e5.D, {
        innerRef: s,
        className: u()(is.Nr, h && is.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, eE.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(409495),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, i.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: io },
                )
            );
        },
        "aria-label": ev.intl.formatToPlainString(ex.default.G3a822, { title: g }),
        children: [
            (0, i.jsxs)("div", {
                className: is.Gt,
                children: [
                    (0, i.jsx)(ia.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: is.Ji,
                        "aria-label": ev.intl.formatToPlainString(ex.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, i.jsx)("div", {
                              className: is.qf,
                              children: (0, i.jsx)(il.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, i.jsx)("div", {
                              className: is.HS,
                              children: (0, i.jsx)(p.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: ev.intl.string(ex.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("span", {
                className: is.pG,
                children: [
                    (0, i.jsx)("span", { className: u()(is.W9, h && is.oM) }),
                    (0, i.jsx)(p.E, {
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
var id = n(268409);
let im = new WeakMap(),
    ih = new WeakMap();
function ig(e) {
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
        o = (0, c.yK)(
            [rE.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = im.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = ih.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), ih.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (im.set(e, n), n);
                })(rE.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, i.jsx)("li", { className: id.h, children: (0, i.jsx)(iu, { projectId: t, sessionIds: o }) });
}
var ip = n(469393);
function ix(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, e_.lG)(t.authored_at);
    return (0, i.jsx)(nR, {
        title: ev.intl.string(ex.default["t+b0rz"]),
        children: (0, i.jsxs)("div", {
            className: ip.r,
            children: [
                (0, i.jsxs)("div", {
                    className: ip.z,
                    children: [
                        (0, i.jsx)(p.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, i.jsx)(p.E, {
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
                          text: ev.intl.string(ex.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var iv = n(493490),
    ib = n(17742);
let ij = [];
function iy(e) {
    let t = (0, c.bG)([iv.A], () => (null != e ? iv.A.getCaptures(e) : ij)),
        n = (0, c.bG)([iv.A], () => (null != e ? iv.A.getSelectedCapture(e) : null)),
        [l, r] = a.useState(null),
        i = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        a.useEffect(() => {
            if (null == e || null == n || null == i) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, ib._F)(e, n);
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
var ik = n(714917),
    iw = n(463660),
    iA = n(970211);
function iS(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([ik.A], () => (null != e ? ik.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, i] = a.useState(null),
                [s, o] = a.useState(null),
                [u, d] = a.useState(!1);
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
                                r = await (0, iw.Mg)(e, l);
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
                    m === f && o(f);
                }, [m, f]);
            return { src: null == e || null != n || u ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        o = iy(n ? t : null);
    return null != o.selected
        ? null != o.src
            ? (0, i.jsx)("img", { className: iA.F1, src: o.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, i.jsx)("img", {
                className: u()(iA.LO, { [iA.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var iC = n(155718);
function iN(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let iI = ["command", "user_command", "message_command", "message"],
    iE = new Set([iC.kc.CHAT, iC.kc.USER, iC.kc.MESSAGE]);
function i_(e) {
    return e.type ?? iC.kc.CHAT;
}
function iM(e) {
    return iE.has(i_(e));
}
function iR(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function iP(e, t) {
    let n = iI.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !iR(e)), ...n.filter(iR)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || iR(r) || l.push(r);
    }
    return iI.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function iT(e, t, n) {
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
    let s = e.commands.filter(iM).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (i_(e)) {
                    case iC.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case iC.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(iR),
        u = i.length > 0 ? iP([...i, ...o], !0) : iP("both" === t ? [...s, a] : s, !1);
    return u.length > 0 ? u : [r];
}
var iL = n(377941),
    i$ = n.n(iL);
function iD(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
n(205816);
let iq = { READ_MESSAGES: "VIEW_CHANNEL", VIEW_GUILD_INSIGHTS: "VIEW_GUILD_ANALYTICS" };
function iF(e) {
    return e.type === iC.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === iC.kc.USER || e.type === iC.kc.MESSAGE
          ? ""
          : "/";
}
let iO = {
        [eF.q7.APP_CHANNEL]: ex.default["3/aHX6"],
        [eF.q7.VOICE_CHANNEL]: ex.default["3/aHX6"],
        [eF.q7.ACTIVITY]: ex.default["3/aHX6"],
        [eF.q7.OVERLAY]: ex.default["rPpf5/"],
        [eF.q7.PROFILE_WIDGET]: null,
        [eF.q7.AUTOMOD]: null,
        [eF.q7.BOT]: null,
        [eF.q7.APPLICATION_COMMANDS]: null,
    },
    iG = [eF.q7.ACTIVITY, eF.q7.APP_CHANNEL, eF.q7.VOICE_CHANNEL, eF.q7.OVERLAY];
function iz(e) {
    return iG.find((t) => iN(e, t)) ?? null;
}
let iU = 1920 / 1018;
function iB(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let iK = iB(24, 1018),
    iH = iB(24, 1920);
function iW(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var iV = n(90947),
    iX = (((l = {}).IMAGE = "image"), l),
    iY = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    iQ = n(598748),
    iZ = n(773669);
let iJ = [],
    i0 = {},
    i1 = {};
function i2(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function i3(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: iX.IMAGE,
        visibility: iY.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var i4 = n(127258),
    i5 = n(803306),
    i7 = n(587895),
    i8 = n(432005),
    i9 = n(963852),
    i6 = n(95701),
    ae = n(619019),
    at = n(427262);
let an = new i6.nA({ id: "1337", guild_id: "1337", type: lt.rbe.GUILD_TEXT, name: "preview" });
function al(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, c.bG)([n9.default], () => n9.default.getUser(e), [e]);
    return (
        a.useEffect(() => {
            r && i?.username !== t && (0, i5.nj)(new ae.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, i, e, t, l, n]),
        i
    );
}
let ar = /^@\S+/;
var ai = n(775602);
let aa = [ex.default["3eTjcV"], ex.default.l3j5nS];
var as = n(97808),
    ao = n(778712),
    au = n(486020),
    ac = n(46054),
    ad = n(200700);
let af = {
        alert: { label: () => ev.intl.string(ex.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ev.intl.string(ex.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ev.intl.string(ex.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ev.intl.string(ex.default.RGzFNK), blockedStyle: !1 },
    },
    am = {
        blocked: { label: () => ev.intl.string(ex.default.YdnZ8q), tone: "red" },
        alert: { label: () => ev.intl.string(ex.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ev.intl.string(ex.default.RGzFNK), tone: "green" },
    },
    ah = ["blocked", "alert", "allowed"],
    ag = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function ap(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : ev.intl.formatToPlainString(ev.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, ad.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? ev.intl.formatToPlainString(ev.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? ev.intl.formatToPlainString(ev.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? ev.intl.formatToPlainString(ev.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? ev.intl.formatToPlainString(ev.t.opVZ9q, { mins: n / 60 })
                                      : ev.intl.formatToPlainString(ev.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var ax = n(984097),
    av = n(13673);
let ab = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function aj(e) {
    let { example: t } = e,
        n = ap(t);
    return null == n
        ? null
        : (0, i.jsx)(p.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let ay = ["glazedgamer", "sprinkles", "donutking"];
function ak(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: a, blockedStyle: s } = af[n.outcome];
    return (0, i.jsxs)("li", {
        className: u()(ax.nM, { [u()(ax.HV, av.DX)]: s }),
        children: [
            (0, i.jsx)(nI.A, { children: `${a()}: ` }),
            (0, i.jsx)("span", {
                className: ax.my,
                children: (0, i.jsx)(as.eu, {
                    src: (0, au.AE)(void 0, void 0),
                    size: ao._3.SIZE_24,
                    "aria-label": ev.intl.string(ex.default["1yI0xV"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ax.fw,
                children: [
                    (0, i.jsx)(p.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ac.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, i.jsx)(aj, { example: n }) : null,
                ],
            }),
        ],
    });
}
function aw(e) {
    let { group: t, firstIndex: n } = e,
        l = a.useId(),
        r = am[t.section],
        s = new Set(t.examples.map(ap)),
        o = 1 === s.size ? t.examples.map(ap)[0] : null;
    return (0, i.jsxs)("div", {
        className: ax.UO,
        children: [
            (0, i.jsxs)("div", {
                className: ax.RZ,
                children: [
                    (0, i.jsx)(p.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: ab[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: ax.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, i.jsx)(p.E, {
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
            (0, i.jsx)("ul", {
                className: ax.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, i.jsx)(ak, { example: e, username: ay[(n + t) % ay.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function aA(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            ah
                .map((e) => ({ section: e, examples: t.filter((t) => ag[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, i.jsxs)("div", {
        className: ax.Nr,
        children: [
            "" !== r
                ? (0, i.jsx)("div", {
                      className: ax.hk,
                      children: (0, i.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, i.jsx)(
                    aw,
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
var aS = n(276293),
    aC = n(460905),
    aN = n(110384),
    aI = n(365199),
    aE = n(633018),
    a_ = n(763754),
    aM = n(267508),
    aR = n(194085),
    aP = n(20851),
    aT = n(692508),
    aL = n(798819);
function a$(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, i.jsxs)("div", {
        className: u()(aL.item, aL.labelContainer, aL.colorDefault, {
            [aL.focused]: !0 === t.highlighted,
            [aL.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, i.jsx)("div", {
                      className: aL.iconContainerLeft,
                      children: (0, i.jsx)(n, { color: "currentColor", className: aL.icon }),
                  })
                : null,
            (0, i.jsx)("div", { className: u()(aL.label, aT.Gy), children: t.label }),
            null != l
                ? (0, i.jsx)("div", {
                      className: aL.iconContainer,
                      children: (0, i.jsx)(l, { color: "currentColor", className: aL.icon }),
                  })
                : null,
        ],
    });
}
function aD(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = a.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, i.jsx)("img", { src: l, alt: "", className: u()(t, aT.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: ev.intl.string(ev.t["5IEsGx"]), icon: aN.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: ev.intl.string(ev.t.LYju5J), muted: !0 };
    return (0, i.jsx)("div", {
        className: u()(aL.menu, aT.MK),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: aL.scroller,
            children: [
                (0, i.jsx)(a$, { item: s }),
                (0, i.jsx)("div", { className: aL.separator }),
                (0, i.jsx)(a$, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function aq() {}
function aF(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        d,
        f,
        m,
        h,
        g,
        { projectId: x, exchanges: v } = e,
        {
            items: b,
            botIcon: j,
            appIconSrc: y,
        } = ((t = (0, c.bG)([n9.default], () => n9.default.getCurrentUser())),
        (n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(x))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([i7.A], () => i7.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? ev.intl.string(ex.default.JEYq8M)),
        (o = (0, c.bG)([n9.default], () => (null != l ? n9.default.getUser(l) : void 0), [l])),
        (f = al("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (m = d ? o : f),
        (h = al("31338", ev.intl.string(ex.default["9iAOsw"]), { discriminator: "0003" })),
        (g = al("31339", (0, at.mG)(t) ?? "", { enabled: null != t })),
        {
            items: a.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
                        ? []
                        : (function (e, t, n) {
                              var l, r, i;
                              let { bot: a, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      i = String(c.length + 1),
                                      a = (0, i8.rh)({
                                          ...(0, i9.Ay)({
                                              channelId: an.id,
                                              content: e,
                                              author: t,
                                              type: l ?? lt.lAJ.DEFAULT,
                                          }),
                                          id: i,
                                          state: lt.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: i,
                                                        name: n,
                                                        type: i4.G.APPLICATION_COMMAND,
                                                        user: (0, i9.Vi)(s),
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
                                              messageType: lt.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? n.memberMessage : n.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, a, {
                                                  interactionName: t.user,
                                                  messageType: lt.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(ar, `<@${a.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), a));
                                          break;
                                      case "event":
                                          d(((i = t.bot), i.split(`@${u.username}`).join(`<@${u.id}>`)), a);
                                  }
                              return c;
                          })(
                              v,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: ev.intl.string(ex.default["y+QYes"]),
                                  memberMessage: ev.intl.string(ex.default.BUTRDc),
                              },
                          ),
                [v, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === b.length) return null;
    let k = an.name;
    return (0, i.jsxs)("div", {
        className: aT.Ix,
        children: [
            (0, i.jsxs)("div", {
                className: aT.ZO,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aS.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(p.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: u()(aT.TE, "group-spacing-16"),
                children: b.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: null != r ? aT.Rz : void 0,
                            children: [
                                (0, i.jsx)(aP.A, {
                                    message: n,
                                    channel: an,
                                    author: (0, a_.FT)(n.author, an),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, i.jsx)(aM.A, { message: n, channel: an }) : void 0,
                                    usernameClassName: r?.target === "user" ? aT.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, i.jsx)("div", {
                                          className: aT.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, i.jsxs)(aR.Ay, {
                                              children: [
                                                  (0, i.jsx)(aR.qv, {
                                                      label: ev.intl.string(ev.t.lfIHs4),
                                                      icon: aC.ReactionIcon,
                                                      onClick: aq,
                                                  }),
                                                  (0, i.jsx)(aR.qv, {
                                                      label: ev.intl.string(ev.t["5IEsGx"]),
                                                      icon: aN.ArrowAngleLeftUpIcon,
                                                      onClick: aq,
                                                  }),
                                                  (0, i.jsx)(aR.qv, {
                                                      label: ev.intl.string(ev.t["UKOtz+"]),
                                                      icon: aI.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: aq,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)("div", {
                                          className: "user" === r.target ? aT.ET : aT.je,
                                          inert: !0,
                                          children: (0, i.jsx)(aD, {
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
                className: aT.DA,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aE.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: ev.intl.formatToPlainString(ev.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var aO = n(332173);
function aG(e) {
    let { name: t } = e;
    return (0, i.jsxs)(aO.A, { children: ["/", t] });
}
function az(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(i$());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, i.jsx)(aG, { name: e.name }, e.start) : e.text));
}
n(827669);
var aU = n(757789),
    aB = n(26137),
    aK = n(231483),
    aH = n(558393);
let aW = { frame: ex.default.Z2bt4u, bot: ex.default.EbvC13, commands: ex.default.EbvC13, automod: ex.default.tiMvei },
    aV = {
        user_widget: { server: ex.default.VlI3et, personal: ex.default.njJ4YL },
        overlay_widget: { server: ex.default.nUcjJ1, personal: ex.default.RDpKqP },
    };
function aX(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var aY = n(573634);
let aQ = {
    frame: e3.GameControllerIcon,
    overlay_widget: aU.WindowTopIcon,
    user_widget: aB.UserCircleIcon,
    bot: e4.RobotIcon,
    commands: e4.RobotIcon,
    automod: aK.ShieldIcon,
};
function aZ(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, i.jsxs)("div", {
        className: u()(aY.e7, l),
        children: [(0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function aJ(e) {
    let { labels: t } = e;
    return (0, i.jsx)("ul", {
        className: aY.Ip,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    className: aY.jw,
                    children: (0, i.jsx)(p.E, {
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
function a0(e) {
    let { name: t, description: n } = e;
    return (0, i.jsxs)("li", {
        className: aY.lj,
        children: [
            (0, i.jsx)("span", {
                className: u()(aY.Vo, aY.G),
                children: (0, i.jsx)(eJ.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, i.jsxs)("div", {
                className: aY.aV,
                children: [
                    (0, i.jsx)(p.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function a1(e) {
    let { commands: t } = e;
    return (0, i.jsx)("ul", {
        className: aY.wZ,
        children: t.map((e, t) => {
            let n = iF(e),
                l = e.description?.trim() ?? "";
            return (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsxs)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, i.jsx)(aG, { name: e.name })
                                : (0, i.jsx)(aO.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function a2(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, i.jsx)("ul", {
        className: aY.p_,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    className: aY.Aw,
                    children: (0, i.jsx)(p.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, i.jsx)(az, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function a3(e) {
    let { experience: t, inServer: n, bullets: l, preview: r, blocks: a, commandNames: s } = e,
        o = aX(t) ? eJ.AppsIcon : aQ[t.kind],
        u = (function (e, t) {
            if (aX(e)) return ev.intl.string(ex.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = aV[e.kind];
                return ev.intl.string(t ? n.server : n.personal);
            }
            return ev.intl.string(aW[e.kind]);
        })(t, n),
        c = n && t.kind in aV ? ev.intl.string(ex.default.UXJCSG) : null;
    return (0, i.jsxs)("section", {
        className: aY.s9,
        "aria-label": u,
        children: [
            (0, i.jsxs)("div", {
                className: aY.JQ,
                children: [
                    (0, i.jsx)("span", {
                        className: aY.Vo,
                        children: (0, i.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, i.jsx)(p.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != c ? (0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, i.jsx)("div", { className: aY.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, i.jsx)(p.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, i.jsx)(az, { text: l[0], commandNames: s }),
                  })
                : l.length > 0
                  ? (0, i.jsx)(a2, { bullets: l, commandNames: s })
                  : null,
            a.length > 0 ? (0, i.jsx)("div", { className: aY.PG, children: a }) : null,
        ],
    });
}
function a4(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, inServer: o, guild: u, intro: c, proposal: d, renderPreview: f, commandNames: m } = e,
        h =
            ((t = d.experiences ?? []),
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
                                let n = t.map(i$()).join("|");
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
        p =
            ((r =
                h.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? h[0]),
            r?.experience.id);
    return (0, i.jsxs)("div", {
        className: aY.aN,
        children: [
            (0, i.jsxs)("div", {
                className: aY.Lv,
                children: [(0, i.jsx)(g.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), c],
            }),
            h.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, i.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, i.jsx)("div", { className: aY.yF, role: "separator" }),
                            (0, i.jsx)(a3, {
                                experience: t,
                                inServer: o,
                                bullets: n,
                                preview: f(t),
                                blocks: (function (e, t, n, l) {
                                    let r,
                                        a = n
                                            ? ((r = null != l ? aH.A.getGuildPermissionSpecMap(l) : null),
                                              [
                                                  {
                                                      key: "permissions",
                                                      caption: ex.default["2UbW6r"],
                                                      names: e.bot_permissions,
                                                      label: (e) => {
                                                          let t, n;
                                                          return (
                                                              (t = Object.hasOwn(iq, e) ? iq[e] : e),
                                                              (null != (n = Object.hasOwn(lt.xBc, t) ? lt.xBc[t] : null)
                                                                  ? r?.[n.toString()]?.title
                                                                  : null) ?? iD(e)
                                                          );
                                                      },
                                                  },
                                                  {
                                                      key: "intents",
                                                      caption: ex.default["7TKfpj"],
                                                      names: e.privileged_intents,
                                                      label: iD,
                                                  },
                                              ].flatMap((e) => {
                                                  let { key: t, caption: n, names: l, label: r } = e;
                                                  return null != l && l.length > 0
                                                      ? [
                                                            {
                                                                key: t,
                                                                caption: ev.intl.string(n),
                                                                labels: [...new Set(l.map(r))],
                                                            },
                                                        ]
                                                      : [];
                                              })).map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, i.jsx)(
                                                      aZ,
                                                      { caption: n, children: (0, i.jsx)(aJ, { labels: l }) },
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
                                                        let n = ev.intl.string(ex.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(eF.q7.APP_CHANNEL)) {
                                                            let r = e.app_channel_names ?? [];
                                                            l = (
                                                                null != t.app_channels && t.app_channels.length > 0
                                                                    ? t.app_channels
                                                                    : r.length > 0
                                                                      ? r.map((e) => ({ name: e }))
                                                                      : [{ name: eW(t.name) }]
                                                            ).map((e) => {
                                                                let { name: t, description: l } = e,
                                                                    r = l?.trim() ?? "";
                                                                return { name: t, description: "" !== r ? r : n };
                                                            });
                                                        }
                                                        return {
                                                            channels: l,
                                                            launchableAnywhere: t.surfaces.includes(eF.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(eF.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, i.jsx)(
                                                                aZ,
                                                                {
                                                                    className: aY.Iw,
                                                                    caption: ev.intl.formatToPlainString(
                                                                        ex.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, i.jsx)("ul", {
                                                                        className: aY.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, i.jsx)(
                                                                                a0,
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
                                                            ? [ev.intl.string(ex.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [ev.intl.string(ex.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, i.jsx)(
                                                                    aZ,
                                                                    {
                                                                        caption: ev.intl.string(ex.default.MY6UGJ),
                                                                        children: (0, i.jsx)(aJ, { labels: r }),
                                                                    },
                                                                    "features",
                                                                ),
                                                            ),
                                                        l
                                                    );
                                                })(e, t),
                                                ...a,
                                            ];
                                        case "bot":
                                        case "commands":
                                            return [
                                                ...(0 === e.commands.length
                                                    ? []
                                                    : [
                                                          (0, i.jsx)(
                                                              aZ,
                                                              {
                                                                  caption: ev.intl.string(ev.t["0hKkS+"]),
                                                                  children: (0, i.jsx)(a1, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...a,
                                            ];
                                        default:
                                            return a;
                                    }
                                })(d, t, t.id === p, u),
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
var a5 = n(633075),
    a7 = n(591410),
    a8 = n(27399);
function a9(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([n9.default], () => n9.default.getCurrentUser()),
        r = a.useMemo(() => new a5.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, i.jsx)("div", {
              className: a8.H,
              children: (0, i.jsx)(a7.A, {
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
var a6 = n(443863);
function se(e) {
    let t,
        { projectId: n, src: l, alt: r, size: a, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / a.width, 970 / a.height)),
            { width: iB(a.width * t, 1920), height: iB(a.height * t, 1018) });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(iS, { projectId: n }),
            (0, i.jsx)("div", {
                className: a6.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": iK,
                    "--custom-conjure-plan-overlay-widget-end": iH,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, i.jsx)("img", { src: l, alt: r, className: a6.M7, onError: s }),
            }),
        ],
    });
}
function st(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, tT.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, l4.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function sn(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: a, gone: s, handleError: o } = (0, l5._)(t, r);
    return s
        ? null
        : (0, i.jsx)(e5.D, {
              className: a6.xX,
              onClick: () => st(t, [{ id: r, alt: l }], 0),
              "aria-label": ev.intl.string(ex.default.TvAPIm),
              children: null == a ? null : (0, i.jsx)("img", { src: a, alt: l, className: a6.sN, onError: o }),
          });
}
function sl(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: d } = (0, l5._)(t, r),
        [f, m] = a.useState(!1),
        [h, g] = a.useState(!1),
        {
            slide: x,
            labels: v,
            pick: b,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([ai.Ay], () => ai.Ay.useReducedMotion),
                [r, i] = a.useState(0),
                [s, o] = a.useState(!1),
                u = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            a.useEffect(() => {
                if (!u) return;
                let e = setInterval(() => i((e) => (e + 1) % aa.length), 4e3);
                return () => clearInterval(e);
            }, [u]);
            let f = a.useCallback((e) => {
                    (o(!0), i(e));
                }, []),
                m = a.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: aa.map((e) => ev.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h });
    if (o) return null;
    let j = ev.intl.string(ex.default.mjryK4),
        y = ev.intl.string(ex.default["rPpf5/"]);
    return (0, i.jsxs)("div", {
        className: a6.RM,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, i.jsx)(e5.D, {
                className: u()(a6.xX, a6.nj, { [a6.qQ]: 0 === x }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(iU) },
                onClick: () => st(t, [{ id: r, alt: j }], 0),
                "aria-label": ev.intl.string(ex.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === x
                          ? (0, i.jsx)("img", { src: s, alt: j, className: a6.Ac, onError: d })
                          : (0, i.jsx)(se, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, i.jsx)("div", {
                className: a6._4,
                role: "group",
                "aria-label": ev.intl.string(ex.default.EH36X6),
                children: v.map((e, t) =>
                    (0, i.jsx)(
                        e5.D,
                        {
                            className: u()(a6.c, { [a6.Cw]: x === t }),
                            "aria-pressed": x === t,
                            onClick: () => b(t),
                            children: (0, i.jsx)(p.E, {
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
function sr(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: a, gone: s, handleError: o } = (0, l5._)(t, n);
    return s
        ? null
        : (0, i.jsx)("li", {
              children: (0, i.jsx)(e5.D, {
                  className: a6.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == a ? null : (0, i.jsx)("img", { src: a, alt: "", className: a6.rA, onError: o }),
              }),
          });
}
function si(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: ev.intl.formatToPlainString(ex.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("section", {
              className: a6.Op,
              children: (0, i.jsxs)("div", {
                  className: a6.uW,
                  children: [
                      (0, i.jsx)(p.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: ev.intl.string(ex.default.ubBJcy),
                      }),
                      (0, i.jsx)("ul", {
                          className: a6.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: a } = e;
                              return (0, i.jsx)(sr, { projectId: t, id: r, alt: a, onOpen: () => st(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function sa(e) {
    var t;
    let n,
        l,
        r,
        s,
        o,
        u,
        f,
        m,
        h,
        g,
        { projectId: x, proposal: v, version: b, onApprove: j } = e,
        { botExchanges: y } =
            ((n = iN(v, eF.q7.APPLICATION_COMMANDS)),
            (l =
                iN(v, eF.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(iM)
                          ? "commands"
                          : null
                    : null),
            (r = a.useMemo(
                () =>
                    null == l
                        ? []
                        : iT(v, l, {
                              message: ev.intl.string(ex.default.J7qggf),
                              reply: ev.intl.string(ex.default.nqYtiy),
                              event: ev.intl.string(ex.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = i1 } = t,
                r = (0, c.bG)([iZ.default], () => iZ.default.locale),
                i = (0, c.bG)([ts.Ay], () => {
                    let t = ts.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = a.useState(i0);
                    return (
                        a.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, tT.PK)(e, l.id).then(
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
                o = a.useMemo(
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
                                                          ...i2(n),
                                                          ...(null != n.fallback ? { fallback: i2(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = iV.uW.safeParse(r);
                                  if (!i.success) return null;
                                  let a = i.data;
                                  return null == a[iQ.m.WIDGET_TOP] || null == a[iQ.m.WIDGET_BOTTOM]
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
                                                                    type: iV.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (r[e] = { type: iV.oG.NUMBER, value: i })
                                                                : (r[e] = { type: iV.oG.STRING, value: i });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(i3),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: iJ,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return a.useMemo(() => (null == i || null == o ? null : { applicationId: i, rendererProps: o }), [i, o]);
        })(x, v),
        w = b?.superseded === !0,
        A = v.what_changed?.trim() ?? "",
        S =
            ((t = v.commands),
            a.useMemo(
                () =>
                    t
                        .filter((e) => "/" === iF(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((o =
                null == (s = iz(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (f = null != (u = v.design_image) && u.id !== iW(v)?.id ? u : null),
            (m = iW(v)),
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
                ui: null != f && null != h ? { experienceId: h, design: f } : null,
                overlay:
                    null != m && null != g ? { experienceId: g, design: m, size: eG(v.overlay_widget ?? null) } : null,
            }),
        N = a.useMemo(
            () =>
                v.commands.some(iM)
                    ? iT({ ...v, bot: void 0 }, "commands", {
                          message: ev.intl.string(ex.default.J7qggf),
                          reply: ev.intl.string(ex.default.nqYtiy),
                          event: ev.intl.string(ex.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        I = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(x)?.name, [x]),
        E = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(x)?.install_scope === "guild", [x]),
        _ = (0, c.bG)(
            [ts.Ay, lF.A],
            () => {
                let e = ts.Ay.getProject(x)?.guild_id;
                return null != e ? (lF.A.getGuild(e) ?? null) : null;
            },
            [x],
        ),
        M =
            w && null != b
                ? ev.intl.formatToPlainString(ex.default.YZ3qJs, { version: b.version })
                : ev.intl.string(ex.default["3b6e7o"]),
        R = w ? (0, i.jsx)(nT, { children: ev.intl.string(ex.default.hF2c41) }) : null;
    return (0, i.jsxs)(nL, {
        title: M,
        meta: R,
        superseded: w,
        showLabel: ev.intl.string(ex.default.yD8EJS),
        hideLabel: ev.intl.string(ex.default.nSPGNb),
        bodyClassName: a6.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, i.jsx)("div", {
                className: a6.Qs,
                children: (0, i.jsx)(a4, {
                    appName: I ?? v.experiences?.[0]?.name ?? "",
                    inServer: E,
                    guild: _,
                    intro: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(p.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, i.jsx)(az, { text: v.summary, commandNames: S }),
                            }),
                            (0, i.jsx)(si, { projectId: x, proposal: v }),
                            "" !== A
                                ? (0, i.jsxs)("section", {
                                      className: a6.uW,
                                      children: [
                                          (0, i.jsx)(p.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: ev.intl.string(ex.default.iNS4dl),
                                          }),
                                          (0, i.jsx)(p.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, i.jsx)(az, { text: A, commandNames: S }),
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
                                        e.id === C.ui?.experienceId
                                            ? (0, i.jsx)(sn, {
                                                  projectId: x,
                                                  design: C.ui.design,
                                                  alt: ev.intl.string(
                                                      null == (t = iz(v)) ? ex.default["3/aHX6"] : iO[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, i.jsx)(sl, {
                                                  projectId: x,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, i.jsxs)(i.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, i.jsx)(a9, { ...k }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, i.jsx)(aA, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || iR(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, i.jsx)(aF, { projectId: x, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: S,
                }),
            }),
            null == j || w
                ? null
                : (0, i.jsxs)("div", {
                      className: a6.qr,
                      children: [
                          (0, i.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: ev.intl.string(ex.default["6S+wRM"]),
                              onClick: j,
                          }),
                          (0, i.jsx)(p.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: ev.intl.string(ex.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var ss = n(289565);
function so(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, i.jsx)("div", { className: ss.m, children: n })
        : (0, i.jsxs)("div", {
              className: ss.Z,
              children: [
                  n,
                  (0, i.jsx)(e7.m, {
                      text: ev.intl.string(ev.t.WAI6xu),
                      asContainer: !0,
                      children: (0, i.jsx)(tB.K, {
                          "aria-label": ev.intl.string(ev.t.WAI6xu),
                          icon: e8.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function su(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function sc(e, t) {
    return null != e && su(t, e.status);
}
let sd = new WeakMap();
function sf(e) {
    let { projectId: t, publish: n } = e,
        l = (0, tx.A)(t, n);
    return (0, i.jsx)(d.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sm(e) {
    let { projectId: t, cta: n } = e,
        l = (0, tp.Ay)(t);
    return null != l && sc(l, n)
        ? (0, i.jsx)(so, {
              children: (0, i.jsxs)(lp.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, i.jsx)(sf, { projectId: t, publish: l }),
                      null != l.failure
                          ? (0, i.jsx)(p.E, {
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
var sh = n(303345),
    sg = n(44255),
    sp = n(416473),
    sx = n(289830);
function sv(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
                    [ts.Ay],
                    () => {
                        let t = ts.Ay.getProject(e);
                        return null != t && (0, ts.jf)(t);
                    },
                    [e],
                ),
                [r, i] = a.useState("idle"),
                [s, o] = a.useState(null),
                u = a.useCallback(async () => {
                    (i("sending"), o(null));
                    try {
                        (await (0, sp.Du)(e, t.trigger), i("on"));
                    } catch (e) {
                        (o(e instanceof sh.A ? e.message : ev.intl.string(ex.default.EXceox)), i("error"));
                    }
                }, [e, t.trigger]),
                [d] = a.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? ev.intl.formatToPlainString(ex.default.orZDqY, { time: (0, sg.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sg.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? u : void 0,
            };
        })(t, n, l);
    return (0, i.jsx)(nR, {
        title: ev.intl.string(ex.default.ZtfX9V),
        children: (0, i.jsxs)("div", {
            className: sx.r,
            children: [
                (0, i.jsxs)("div", {
                    className: sx.z,
                    children: [
                        (0, i.jsx)(p.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, i.jsx)(p.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, i.jsx)(p.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ev.intl.string(ex.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, i.jsx)(p.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: ev.intl.string(ex.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, i.jsx)(p.E, {
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
                          text: ev.intl.string(ex.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sb = n(478016),
    sj = n(989271);
function sy(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = a.useId(),
        s = null == l;
    return (0, i.jsxs)(e5.D, {
        className: u()(sj.nM, { [sj.f1]: s, [sj.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": ev.intl.formatToPlainString(ex.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, i.jsxs)("div", {
                className: sj.jo,
                children: [
                    n
                        ? (0, i.jsx)(sb.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sj.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(p.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: sj.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, i.jsx)(p.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sk(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, i.jsx)(nR, {
        title: ev.intl.string(ex.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, i.jsx)(
                sy,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var sw = n(313537),
    sA = n(125372);
let sS = {
        add_to_server: ex.default["7SD3ul"],
        remove_from_server: ex.default.ErhKil,
        change_server: ex.default["1E5/ay"],
    },
    sC = {
        add_to_server: ex.default["Wy+mGW"],
        remove_from_server: ex.default.vUWHZe,
        change_server: ex.default.MfnSEe,
    };
var sN = n(831913),
    sI = n(618785);
function sE(e) {
    var t;
    let n,
        l,
        r,
        a,
        s,
        o,
        u,
        f,
        m,
        h,
        g,
        x,
        { projectId: v, change: b, current: j, onReply: y } = e,
        {
            project: k,
            action: w,
            done: A,
            note: S,
        } = ((n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(v), [v])),
        (l = (0, sw.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === b.action ? b.guild_id : l),
        (a = (0, c.bG)([lF.A], () => lF.A.getGuild(t)?.name, [t]) ?? ev.intl.string(ex.default["6bhivN"])),
        (s = (0, sA.Y)(v).length > 0),
        (o =
            (0, c.bG)(
                [rE.A],
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
                        let [i] = r;
                        return "change_server" === t.action
                            ? null != n &&
                                  i.moved_to_guild_id === n &&
                                  (null == t.guild_id || i.guild_id === t.guild_id)
                            : null == i.moved_to_guild_id && i.guild_id === t.guild_id;
                    })(rE.A.getMessages(v), b, l),
                [v, b, l],
            ) &&
            null != n &&
            ("remove_from_server" === b.action ? !r : r)),
        (u = "change_server" !== b.action || null == b.guild_id || l === b.guild_id),
        (f = null != n && ("add_to_server" === b.action ? !r : r) && u && !o),
        (m = null != n && (0, ts.PV)(n)),
        (h = "remove_from_server" !== b.action),
        (g = f && m ? { kind: b.action, label: ev.intl.string(sS[b.action]), disabled: h && !s } : null),
        (x = null),
        f && !m
            ? (x = ev.intl.string(ex.default.Kt9exT))
            : g?.disabled === !0 && (x = ev.intl.string(ex.default.NXvmoQ)),
        { project: n, action: g, done: o ? ev.intl.formatToPlainString(sC[b.action], { server: a }) : null, note: x }),
        C = b.keep_label,
        N = j && null != w,
        I = N && null != C && null != y,
        E = A ?? (j ? S : null);
    return null != E || N
        ? (0, i.jsxs)(lp.B, {
              gap: 8,
              children: [
                  N
                      ? (0, i.jsxs)(lp.B, {
                            direction: "horizontal",
                            gap: 8,
                            wrap: !0,
                            children: [
                                (0, i.jsx)(d.$, {
                                    variant: "remove_from_server" === w.kind ? "critical-secondary" : "primary",
                                    size: "sm",
                                    text: w.label,
                                    disabled: w.disabled,
                                    onClick: () => {
                                        null != k &&
                                            (w?.kind === "remove_from_server"
                                                ? (0, sN.A)({ project: k })
                                                : (0, sI.A)({ projectId: v }));
                                    },
                                }),
                                I
                                    ? (0, i.jsx)(d.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: C,
                                          onClick: () => y(C),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != E ? (0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: E }) : null,
              ],
          })
        : null;
}
var s_ = n(919790),
    sM = n(908492),
    sR = n(971824),
    sP = n(162052),
    sT = n(165648);
function sL(e) {
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
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = a.useMemo(() => (0, ny.Jf)(n, l), [n, l]),
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
    if (u)
        return (0, i.jsx)("ol", {
            className: nU.pj,
            "data-live": !1,
            children: (0, i.jsx)(nC.A, {
                glyph: (0, i.jsx)(rX.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ev.intl.string(ex.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let b = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        j = m ? ((0, ny.lt)(n) ?? c ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = r4(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        S = ie(k);
    return (0, i.jsxs)("ol", {
        className: nU.pj,
        "data-live": A,
        children: [
            (0, i.jsx)(nA.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: b,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? r3(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          it,
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
            (0, i.jsx)(ig, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, i.jsx)("li", {
                      className: nU.YO,
                      children: (0, i.jsx)(nG, { todos: j, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function s$(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: o,
            attachments: c,
            secretRequest: d,
            secretRequestId: f,
            secretRequestAwaiting: m,
            secretRequestStatus: h = "open",
            settingsRequest: g,
            settingsAskId: x,
            publishCta: v,
            onPickIdea: b,
            pickedIdeaIds: j,
            onApprovePlan: y,
            sideReply: k = !1,
            sideReplyAcknowledges: w,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: S,
            restoreProposal: C,
            onRestoreProposal: N,
            publishScheduleProposal: I,
            publishScheduleProposalCurrent: E = !1,
            serverChange: _,
            serverChangeCurrent: M = !1,
            onCardReply: R,
        } = e,
        P = a.useMemo(
            () => rY({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        q = (A ? S : void 0) ?? P.attachmentsHost,
        F = $ && !A,
        O = null == c ? null : (0, i.jsx)(s_.A, { projectId: t, attachments: c }),
        G = null == O ? null : (0, i.jsx)("div", { className: nU.MT, children: O }),
        z = k
            ? (0, i.jsx)(p.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ev.intl.string(ex.default.Mv5OmK);
                          case "queued":
                              return ev.intl.string(ex.default["Po/2mi"]);
                          case "restarting":
                              return ev.intl.string(ex.default.Vj0woh);
                          default:
                              return ev.intl.string(ex.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, i.jsxs)("div", {
        className: nU.ue,
        children: [
            T.length > 0 && !A
                ? (0, i.jsx)("ol", {
                      className: nU.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: nU.DV,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: sT.PT,
                                          children: (0, sM.U)(e.content, !0, {
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
                ? (0, i.jsx)(sa, { projectId: t, proposal: r, version: s, onApprove: y })
                : F
                  ? (0, i.jsxs)("div", {
                        className: u()(nU.ky, sP.XR),
                        children: [
                            (0, i.jsx)("div", {
                                className: u()(sT.PT, nU.cW),
                                children: (0, sM.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === q ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, i.jsx)("div", {
                      className: u()(nU.ky, nU.k1, sP.XR, { [sR.O]: null != m && "open" === h }),
                      children: (0, i.jsx)(rN, {
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
                      className: u()(nU.ky, nU.k1, sP.XR),
                      children: (0, i.jsx)(rF, { projectId: t, request: g, askId: x }),
                  })
                : null,
            "standalone" !== q && ("closing" !== q || F) ? null : O,
            null != v ? (0, i.jsx)(sm, { projectId: t, cta: v }) : null,
            null != o && o.length > 0 ? (0, i.jsx)(sk, { ideas: o, pickedIdeaIds: j, onPick: b }) : null,
            null != C ? (0, i.jsx)(ix, { proposal: C, onRestore: N }) : null,
            null != _ ? (0, i.jsx)(sE, { projectId: t, change: _, current: M, onReply: R }) : null,
            null != I ? (0, i.jsx)(sv, { projectId: t, proposal: I, current: E }) : null,
            F ? null : z,
        ],
    });
}
var sD = n(286251),
    sq = n(146806),
    sF = n(475358),
    sO = n(783977),
    sG = n(559647),
    sz = n(787564),
    sU = n(339200),
    sB = n(234320),
    sK = n(191023),
    sH = n(285796),
    sW = n(922329),
    sV = n(153171);
function sX(e) {
    let { projectId: t } = e;
    return (0, i.jsx)(sW.p, {
        name: ev.intl.string(ex.default.xhFsEP),
        thumb: (0, i.jsxs)("span", {
            className: t3.PA,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(sK.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, i.jsx)("span", {
                    className: t3.OY,
                    children: (0, i.jsx)(lm.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, i.jsx)(p.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: ev.intl.string(ex.default["9y+Dae"]),
        }),
        children: (0, i.jsx)("button", {
            type: "button",
            className: sV.o1,
            onClick: () => {
                el(t)?.active === !1 ? eo(t) : er(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": ev.intl.string(ex.default.N852dj),
            children: (0, i.jsx)(sH.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sY(e) {
    let { send: t } = e;
    return (0, i.jsxs)(sW.p, {
        compact: !0,
        name: ev.intl.string(ex.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, i.jsx)(p.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: ev.intl.string(ex.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, i.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE, className: sV.Rk }) : null,
            "failed" === t.status
                ? (0, i.jsx)(lh.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: ev.intl.string(ex.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sQ = n(587157),
    sZ = n(347111),
    sJ = n(120234),
    s0 = n(901173),
    s1 = n(161431),
    s2 = n(46653),
    s3 = n(695184),
    s4 = n(661191),
    s5 = n(475458),
    s7 = n(957071),
    s8 = n(927659),
    s9 = n(351906),
    s6 = n(407653),
    oe = n(322915);
function ot(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: a, onSelect: s } = e,
        o = (0, c.bG)([s9.A], () => s9.A.hidePersonalInformation ?? !1),
        u = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, i.jsx)(
                      s8.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: o,
                          selected: t === r,
                          onHover: a,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, i.jsx)(
                      s8.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, i.jsx)(s6.A, { projectId: n, file: e.file, className: oe.Vk }),
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
    return (0, i.jsx)(s8.Ay, {
        id: t,
        className: oe.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": ev.intl.string(ex.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, i.jsx)(on, { titleId: u, title: ev.intl.string(ex.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, i.jsx)(on, { titleId: d, title: ev.intl.string(ex.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function on(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, i.jsx)(p.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: oe.Gf, children: n }),
            l,
        ],
    });
}
var ol = n(719442),
    or = n(355622),
    oi = n(408018),
    oa = n(186306),
    os = n(323350),
    oo = n(35277),
    ou = n(68059),
    oc = n(267102),
    od = n(259691);
let of = (0, i6.createChannelRecord)({ id: "1", type: lt.rbe.DM });
function om(e) {
    let t = sU.VW.end(e, []);
    return { anchor: t, focus: t };
}
function oh(e) {
    return (0, os.WO)(sU.VW.richValue(e), { mode: "raw" });
}
function og(e, t) {
    ((e.children = (0, oi.x7)(t)), (e.selection = om(e)), e.onChange());
}
function op(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rB.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, i.jsxs)("span", { ...t, contentEditable: !1, children: [(0, i.jsx)(od.A, { attachmentId: r }), n] });
}
var ox = n(366811);
function ov(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function ob(e) {
    let t = ox.A.getState().path;
    return ov(window.location.pathname, e) && (null == t || ov(t, e));
}
function oj(e, t) {
    return null != t && (0, tR.vq)(e) && t.contains(e);
}
var oy = n(497437),
    ok = n(465410);
let ow = "body-md/normal",
    oA = null;
function oS(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = a.useState(t),
        o = a.useRef(null),
        d = a.useRef(null),
        f = a.useRef(0),
        [m, h] = a.useState(0),
        [g, x] = a.useState(0),
        [v, b] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (a.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = f.current;
        function l() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = d.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                i = Number.isNaN(r) ? 0 : r,
                a = e.offsetWidth,
                s = l.offsetWidth + i;
            (x(a + i), h(s));
            let u = s + a,
                c = Math.max(n, l.offsetWidth) + i + a,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : u / c;
            b({
                frontFrom: 1e3 * (0, sq._R)(f),
                frontTo: 1e3 * (0, sq._R)(m),
                backFrom: 1e3 * (0, sq.T)(f),
                backTo: 1e3 * (0, sq.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        a.useEffect(() => {
            f.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, y] = a.useState(0),
        [k, w] = a.useState(null),
        A = a.useRef(!1),
        S = a.useCallback(() => {
            (w(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    a.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let C = "in" === k ? v.backFrom : v.frontFrom,
        N = "out" === k ? v.frontTo : v.backTo,
        I = (0, c.bG)([ai.Ay], () => ai.Ay.useReducedMotion),
        E = t === ev.intl.string(ex.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, i.jsx)("span", {
            ref: n,
            className: u()(oy.VT, { [oy.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, N - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != k ? j % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, i.jsx)(sF.e, { shortcut: "tab", className: oy.xT, keyClassName: e }),
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(sD.o, {
                text: t,
                variant: ow,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(oy.xM, { [oy.s2]: l }),
                onStart: S,
                onComplete: () => s(t),
            }),
            M(oy.IS, n || (!I && "out" === k), o),
            (0, i.jsx)("span", {
                ref: d,
                className: oy.QI,
                "aria-hidden": !0,
                children: (0, i.jsx)(p.E, { variant: ow, tag: "span", children: t }),
            }),
            _
                ? (0, i.jsxs)("span", {
                      className: oy.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, i.jsx)(p.E, { variant: ow, tag: "span", className: oy.xM, children: t }),
                          M(oy.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let oC = a.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                aiPaused: l = !1,
                running: r,
                restoring: s = !1,
                onSend: o,
                onInterrupt: d,
                escapeScopeRef: f,
                onUploadFile: m,
                onApprove: h,
                onImport: g,
                onSendToOtherProjects: p,
                suggestion: x,
                questionOpen: v = !1,
                secretPending: b = !1,
                hasPendingContext: j = !1,
                onDraftHasTextChange: y,
                modelSettings: k,
                onModelSettingsChange: w,
                visible: A = !0,
            } = e,
            S = n && !l,
            C = (function (e) {
                let t = a.useContext(oc.Ay),
                    [n] = a.useState(() => {
                        let n = (0, ol.ie)();
                        return (
                            (n.children = (0, oi.x7)(e)),
                            (n.selection = om(n)),
                            (0, ou.a)({
                                editor: n,
                                chatInputType: or.oU.GENERIC_RICH_TEXTAREA,
                                channel: of,
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
                                    for (let [t, l] of sU.VW.nodes(e, { at: [], match: sU.l5.isText }))
                                        for (let e of t.text.matchAll(rB.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        oa.o.withMergedEntry(e, () =>
                                            sU.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: i } of n.reverse())
                                                    oo.b.textToVoid(
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
            })(rW.A.getDraft(t)),
            [N, I] = a.useState(() => oh(C));
        (0, sJ.N$)(N);
        let E = a.useRef(N),
            [_, M] = a.useState(null),
            R = a.useCallback(() => {
                let e = oh(C);
                (e !== E.current && ((E.current = e), (0, sZ.I)(t, e), I(e)),
                    M(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sU.ZF.isCollapsed(t)) return null;
                            let [n] = sU.VW.node(e, t.anchor.path);
                            return sU.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(C),
                    ));
            }, [C, t]),
            T = a.useCallback((e) => og(C, e), [C]),
            L = "" !== N.trim();
        a.useEffect(() => y?.(L), [L, y]);
        let $ = a.useRef(t);
        a.useLayoutEffect(() => {
            $.current !== t && (($.current = t), og(C, rW.A.getDraft(t)));
        }, [C, t]);
        let D = (0, c.bG)([ai.Ay], () => ai.Ay.isSubmitButtonEnabled),
            [q, F] = a.useState(!1),
            [O, G] = a.useState(!1);
        (a.useEffect(() => {
            r ? G(!1) : (q && G(!0), F(!1));
        }, [r, q]),
            a.useEffect(() => {
                if (!O) return;
                let e = setTimeout(() => G(!1), oI);
                return () => clearTimeout(e);
            }, [O]));
        let {
                drafts: U,
                addFiles: B,
                pasteFiles: K,
                removeDraft: H,
                settled: W,
                takeRefs: V,
            } = (0, tD.FM)({ projectId: t, surface: "chat", onUploadFile: m }),
            X = et.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && Q(n);
            }),
            Y = et.useState((e) => (null == t ? null : (e.byProject[t]?.chatFocusRequest ?? null))),
            Z = a.useRef(Y);
        a.useEffect(() => {
            let e = Z.current;
            ((Z.current = Y), S && null != e && null != Y && Y !== e && sU.VW.focus(C));
        }, [Y, S, C]);
        let J = "" !== N.trim() || U.length > 0 || j || X,
            ee = S && J && W,
            [en, ei] = a.useState(null);
        a.useEffect(() => {
            if (null == en) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => ei(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [en]);
        let eu = (0, s1.rU)(t),
            [ec, ed] = a.useState(null),
            [ef, em] = a.useState(0),
            eh = a.useMemo(() => (null != _ && S ? (0, s0.OG)(_, _.length) : null), [_, S]),
            eg = eh?.start ?? null;
        a.useEffect(() => {
            null == eg ? ed(null) : (0, s1.IP)(t);
        }, [eg, t]);
        let ep = eg === ec ? null : eh,
            ej = (function (e, t) {
                let n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, s5.yv)(n),
                    i = (0, c.bG)([s2.default], () => s2.default.getId()),
                    s = null != n && (0, eF.pL)(n) ? n.guild_id : void 0,
                    o = t?.toLowerCase() ?? null;
                return (
                    a.useEffect(() => {
                        null != s && null != o && s3.A.requestMembers(s, o, 100);
                    }, [s, o]),
                    (0, c.yK)(
                        [lq.Ay, lF.A, n9.default],
                        () => {
                            if (null == o) return [];
                            let e = null != s ? lF.A.getGuild(s) : null,
                                t = (t) => (0, s0.mO)(t, o, null != e ? lq.Ay.getNick(e.id, t.id) : null),
                                a = new Set(n?.collaborator_role_ids ?? []),
                                u = null != e && a.has(s4.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : lq.Ay.getMemberIds(e.id)
                                              .map((e) => n9.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (u ||
                                                          (lq.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              a.has(e),
                                                          ) ||
                                                          lO.$3({
                                                              permission: lt.xBc.MANAGE_GUILD,
                                                              user: n,
                                                              context: e,
                                                          })),
                                              ),
                                d = new Set();
                            return [...[...(null != l ? [l] : []), ...r].filter(t), ...c].filter(
                                (e) => !(e.id === i || e.bot || d.has(e.id)) && (d.add(e.id), !0),
                            );
                        },
                        [n, s, o, l, r, i],
                    )
                );
            })(t, ep?.text ?? null),
            ey = a.useMemo(() => (null == ep ? [] : (0, s0.l$)(ej, eu, ep.text)), [ep, ej, eu]),
            ek = ep?.text;
        a.useEffect(() => em(0), [ek]);
        let ew = ey.length > 0,
            eA = Math.min(ef, Math.max(0, ey.length - 1)),
            eS = a.useId(),
            eC = a.useCallback(
                (e) => {
                    let t = ey[e];
                    null != ep &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: i } = l.anchor;
                            (oo.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: i } }),
                                oo.b.insertText(e, `${n} `));
                        })(C, ep.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ey, ep, C],
            ),
            eN = a.useCallback(() => {
                if (!ee) return;
                let e = V(),
                    n = X
                        ? (function (e) {
                              let t = el(e);
                              if (null == t || !Q(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? ea(e);
                              return (
                                  el(e)?.active === !1
                                      ? eo(e)
                                      : er(e, (e) => ({ ...e, history: z, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: i, messageKey: a } = (0, eb.Wx)(e, t, r),
                                          s = { projectId: e, nonce: i, job: null, thumbUrl: null };
                                      (nH.set(a, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  i = !1,
                                                  a = !1,
                                                  s = !1;
                                              function o() {
                                                  (async function () {
                                                      if (!(i || a || s)) {
                                                          ((i = !0), e.update("uploading", l));
                                                          try {
                                                              if (((n ??= await e.capture(t++)), null == n))
                                                                  throw Error("capture failed");
                                                              if (((l ??= await e.composite(n)), null == l))
                                                                  throw Error("composite failed");
                                                              if (
                                                                  (null == r || (await e.isStaged(r)) || (r = null),
                                                                  s ||
                                                                      (e.update("uploading", l),
                                                                      (r ??= await e.upload(l)),
                                                                      s))
                                                              )
                                                                  return;
                                                              if (!e.send(r)) throw Error("send failed");
                                                              ((a = !0), e.update("sent", l));
                                                          } catch {
                                                              s || e.update("failed", l);
                                                          } finally {
                                                              i = !1;
                                                          }
                                                      }
                                                  })().catch(() => {});
                                              }
                                              return (
                                                  o(),
                                                  {
                                                      retry: o,
                                                      cancel: () => {
                                                          s = !0;
                                                      },
                                                  }
                                              );
                                          })({
                                              capture: (t) => (0 === t ? l : ea(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = nc(e),
                                                              r = nc(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              nu(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, tT.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, tT.n6)(e, t.id),
                                              send: (n) => (0, eb.dv)(e, t, [...r, n], { nonce: i }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nV(a, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nH.delete(a),
                                                          window.setTimeout(() => {
                                                              (nV(a, null),
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
                        i = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === i) return i;
                    null == oA && (oA = document.createElement("canvas").getContext("2d"));
                    let a = oA;
                    if (null == a) return i;
                    let s = getComputedStyle(e);
                    a.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let o =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (o <= 0 || a.measureText(i).width <= o) return i;
                    let u = 0,
                        c = i.length;
                    for (; u < c;) {
                        let e = Math.ceil((u + c) / 2);
                        a.measureText(i.slice(0, e)).width <= o ? (u = e) : (c = e - 1);
                    }
                    let d = i.slice(0, u),
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(o_(eT.current), eB.current, (0, s0.Lj)(N));
                ("" !== l && ei(l), T(""), ed(null));
            }, [ee, X, t, N, o, V, T]),
            eI = a.useCallback(
                (e) => {
                    (e.preventDefault(), eN());
                },
                [eN],
            ),
            eE = a.useCallback(() => {
                null != d && !q && (F(!0), d(), S && sU.VW.focus(C));
            }, [d, q, S, C]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                i = a.useRef(r);
            (a.useEffect(() => {
                i.current = r;
            }),
                a.useEffect(() => {
                    if (!t) return;
                    let e = oj(document.activeElement, l?.current);
                    function r(t) {
                        e = oj(t.target, l?.current);
                    }
                    function a(t) {
                        var r, a, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            ob(n) &&
                            el(n)?.active !== !0 &&
                            !P(n).active &&
                            ((r = t.target),
                            (a = l?.current),
                            (s = e),
                            ((0, tR.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!oj(r, a) && null == r.closest('input, textarea, [contenteditable="true"]')
                                : s) && (t.preventDefault(), t.stopPropagation(), i.current()));
                    }
                    return (
                        window.addEventListener("keydown", a, !0),
                        window.addEventListener("pointerdown", r, !0),
                        window.addEventListener("focusin", r, !0),
                        () => {
                            (window.removeEventListener("keydown", a, !0),
                                window.removeEventListener("pointerdown", r, !0),
                                window.removeEventListener("focusin", r, !0));
                        }
                    );
                }, [t, n, l]));
        })({ active: r && null != d && A, projectId: t, scopeRef: f, onEscape: eE });
        let e_ = (r && null != d) || O,
            eM = null == x || "" !== N || !S || s || j ? null : x,
            eR = a.useCallback(
                (e) => {
                    if (ew && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ey.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), em((eA + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eC(eA));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ed(ep?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && el(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), es(t));
                        return;
                    }
                    if ("Escape" === e.key && r && null != d && ob(t)) {
                        (e.preventDefault(), e.stopPropagation(), eE());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eM) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), T(eM));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != h && (e.preventDefault(), h());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eN());
                },
                [eN, h, r, d, eE, eM, T, ew, ey.length, eA, eC, ep, t],
            ),
            eP = a.useCallback(
                (e) => {
                    S && K(e);
                },
                [S, K],
            );
        (0, sB.Vo)({
            event: lt.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eP(t);
            },
        });
        let eT = a.useRef(null),
            eL = a.useCallback(() => {
                let e = E.current;
                p?.((0, s0.Lj)(e), () => {
                    E.current === e && T("");
                });
            }, [p, T]),
            [e$, eD] = a.useState(0),
            [eq, eO] = a.useState(!1);
        a.useEffect(() => {
            if (0 === N.length) return void eO(!1);
            let e = o_(eT.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eD(t);
            }
            eO(!0);
            let t = setTimeout(() => eO(!1), oN);
            return () => clearTimeout(t);
        }, [N]);
        let eG = a.useMemo(() => ({ "--custom-glow-x": `${e$}px` }), [e$]),
            ez = eq ? ` ${oy.EB}` : "",
            eU = s
                ? ev.intl.string(ex.default.qqlUiW)
                : l
                  ? ev.intl.string(ex.default.Z0hyNL)
                  : S
                    ? j
                        ? ev.intl.string(ex.default.knUjL3)
                        : X
                          ? ev.intl.string(ex.default["6rXxwa"])
                          : b
                            ? ev.intl.string(ex.default.VxH5vv)
                            : v
                              ? ev.intl.string(ex.default.IevBEw)
                              : ev.intl.string(r ? ex.default["0BJa/0"] : ex.default.TEeU7z)
                    : ev.intl.string(ex.default.zZ9NgM),
            eB = a.useRef(0),
            eK = a.useRef(null),
            eH = a.useCallback((e) => {
                if ((eK.current?.disconnect(), null == e)) return;
                eB.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eB.current = e.clientWidth;
                });
                (t.observe(e), (eK.current = t));
            }, []),
            eW = a.useId(),
            eV = a.useId(),
            eX = null != eM,
            eY = en ?? eM ?? eU,
            eQ = "" === N && "" !== eY;
        return (0, i.jsxs)("form", {
            onSubmit: eI,
            className: oy.DA,
            children: [
                ew
                    ? (0, i.jsx)(ot, {
                          id: eS,
                          projectId: t,
                          suggestions: ey,
                          selectedIndex: eA,
                          onHover: em,
                          onSelect: eC,
                      })
                    : null,
                U.length > 0 || X
                    ? (0, i.jsxs)("div", {
                          className: oy.lN,
                          children: [
                              U.map((e) => (0, i.jsx)(tD.Nl, { draft: e, onRemove: H }, e.localId)),
                              X ? (0, i.jsx)(sX, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, i.jsx)("span", { className: `${oy.wg} ${oy.LP}${ez}`, style: eG, "aria-hidden": !0 }),
                (0, i.jsx)("span", { className: `${oy.wg} ${oy.L3}${ez}`, style: eG, "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: oy.VA,
                    ref: eT,
                    children: [
                        (0, i.jsx)(s7.A, {
                            navId: "conjure-composer-attach",
                            disabled: !S,
                            buttonClassName: `${oy.Y0} ${oy.nu}`,
                            iconClassName: oy.Qu,
                            onAddFiles: B,
                            onImport: g,
                            onSendToOtherProjects: null != p ? eL : void 0,
                        }),
                        eQ
                            ? (0, i.jsx)("div", {
                                  ref: eH,
                                  className: oy.ar,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(
                                      oS,
                                      { text: eY, offering: eX && null == en, typed: null != en },
                                      A ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, i.jsx)(nI.A, { id: eV, children: ev.intl.string(ex.default.ldNl9x) }),
                        (0, i.jsx)(rB.Fu.Provider, {
                            value: t,
                            children: (0, i.jsx)(sz.A, {
                                editor: C,
                                containerClassName: u()(oy.sq, ok.dv),
                                className: oy.jp,
                                readOnly: !S,
                                canFocus: S,
                                onChange: R,
                                onBlur: () => M(null),
                                onKeyDown: eR,
                                onPaste: eP,
                                renderExtraElement: op,
                                "aria-labelledby": eV,
                                "aria-describedby": eQ ? eW : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ew,
                                "aria-controls": ew ? eS : void 0,
                                "aria-activedescendant": ew ? ((0, s8.aI)(eA) ?? void 0) : void 0,
                            }),
                        }),
                        eQ ? (0, i.jsx)(nI.A, { id: eW, children: eU }) : null,
                        (0, i.jsx)("div", {
                            className: oy.Sz,
                            onMouseDown: e_ ? oE : void 0,
                            children: e_
                                ? (0, i.jsx)(e7.m, {
                                      text: ev.intl.string(ex.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)("button", {
                                          type: "button",
                                          className: `${oy.Y0} ${oy.$E} ${oy.PG}`,
                                          disabled: q || !r,
                                          onClick: eE,
                                          "aria-label": ev.intl.string(ex.default.wiguT0),
                                          children: (0, i.jsx)(rX.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : k?.tierSettings != null && null != w
                                  ? (0, i.jsx)(sQ.A, {
                                        settings: k.tierSettings,
                                        tiers: k.tiers,
                                        choices: k.choices,
                                        disabled: !S,
                                        onChange: w,
                                        className: `${oy.Y0} ${oy.$E}`,
                                        icon: (0, i.jsx)(sO.FiltersHorizontalIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                        }),
                        D
                            ? (0, i.jsxs)("div", {
                                  className: oy.fF,
                                  children: [
                                      (0, i.jsx)("div", { className: oy.MT }),
                                      (0, i.jsx)("button", {
                                          type: "submit",
                                          className: oy.rt,
                                          disabled: !ee,
                                          "aria-label": ev.intl.string(ex.default.rxW2cl),
                                          children: (0, i.jsx)(sG.SendMessageIcon, {
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
    oN = 1500,
    oI = 1e3;
function oE(e) {
    e.preventDefault();
}
function o_(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var oM = n(709753),
    oR = n(540338);
function oP(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, nk.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var oT = n(986109);
let oL = a.createContext(null);
function o$(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = a.useContext(oL),
        [f, m] = a.useState(() => ai.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: u()(oT.xk, { [oT.g5]: f, [oT.Qo]: s, [oT.q3]: o }),
        children: n,
    });
}
let oD = new Map();
function oq(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let oF = "live_behind";
var oO = n(165963);
function oG(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([rI.A], () => null != n && n.length > 0 && rw({ keys: n }, rI.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: ev.intl.string(ex.default.F2yVHg) }
        : null;
}
function oz(e) {
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
let oU = [12e4];
var oB = n(292771);
function oK(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([ai.Ay], () => ai.Ay.useReducedMotion),
        [r, s] = a.useState([{ presentation: t, leaving: !1 }]),
        o = r.find((e) => !e.leaving)?.presentation;
    o !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = a.useRef(null),
        f = a.useRef(null),
        m = a.useRef(null),
        h = a.useRef(o);
    a.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            i = r?.querySelector("[data-conjure-tip-icon]"),
            a = f.current,
            s = m.current,
            u = r?.offsetHeight ?? 0,
            c =
                null != i
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = i.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((f.current = c), (m.current = u));
        let g = h.current !== o;
        if (((h.current = o), !g || l || null == s || null == a || null == i || null == c)) return;
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
            n.animate([{ height: `${s}px` }, { height: `${u}px` }], {
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
            className: oB.wg,
            children: r.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: u()(oB.qd, e.leaving ? oB.dv : oB.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function oH(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var oW = n(247171);
function oV(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: a } = e;
    return (0, i.jsxs)("div", {
        className: u()(oW.row, r),
        children: [
            (0, i.jsx)(p.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: u()(oW.gutter, oW[n]),
                "aria-hidden": !0,
                children: (0, i.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, i.jsx)("div", { className: oW.content, children: a }),
        ],
    });
}
var oX = n(830205);
function oY(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(oV, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: oX.aK,
        children: (0, i.jsxs)("div", {
            className: oX.n8,
            children: [
                (0, i.jsx)(p.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: oX.Qq,
                    children: l,
                }),
                null != n
                    ? (0, i.jsx)("div", {
                          className: oX.X8,
                          children: (0, i.jsx)(e7.m, {
                              text: ev.intl.string(ev.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tB.K, {
                                  "aria-label": ev.intl.string(ev.t.WAI6xu),
                                  icon: e8.XSmallIcon,
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
function oQ(e) {
    let { projectId: t } = e,
        n = a.useContext(tp.bI);
    return (0, i.jsx)(oY, {
        icon: aK.ShieldIcon,
        children: ev.intl.format(ex.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tp.vL)(t, n.guildId));
            },
        }),
    });
}
var oZ = n(443865),
    oJ = n(716502);
function o0(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(oV, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: oJ.Nr,
        children: (0, i.jsxs)("section", {
            className: oJ.Qs,
            children: [
                l,
                null != n
                    ? (0, i.jsx)("div", {
                          className: oJ.X8,
                          children: (0, i.jsx)(e7.m, {
                              text: ev.intl.string(ev.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tB.K, {
                                  "aria-label": ev.intl.string(ev.t.WAI6xu),
                                  icon: e8.XSmallIcon,
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
function o1(e) {
    let { children: t } = e;
    return (0, i.jsx)(p.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: oJ.DD,
        children: t,
    });
}
function o2(e) {
    let { children: t } = e;
    return (0, i.jsx)(p.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: oJ.rf,
        children: t,
    });
}
function o3(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: oJ.o1, children: t });
}
var o4 = n(95635);
function o5(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, tx.A)(t, n);
    return (0, i.jsx)(oY, {
        icon: o4.UploadIcon,
        onDismiss: l,
        children: ev.intl.format(ex.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let o7 = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && oH(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, i.jsx)(oQ, { projectId: n });
        },
    },
    {
        id: oF,
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
                (null != n.publishCta && sc(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(oF)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, i.jsx)(o5, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: i, ideasIntroAnchorId: a } = e;
            return !n || null == a || oH(l) ? null : null != t || r || i ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, i.jsxs)(o0, {
                icon: oZ.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, i.jsx)(o1, { children: ev.intl.string(ex.default.OJlbhX) }),
                    (0, i.jsx)(o2, { children: ev.intl.string(ex.default["3vJBni"]) }),
                    (0, i.jsx)(o3, {
                        children: (0, i.jsx)(d.$, {
                            variant: "primary",
                            size: "sm",
                            text: ev.intl.string(ex.default["U/bLzU"]),
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
var o8 = n(817921);
function o9(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let i = (function (e, t, n, l, r) {
                let i,
                    s = (0, tp.Ay)(e),
                    o = (0, c.bG)([n9.default], () => n9.default.getCurrentUser()?.id),
                    u = t.at(-1),
                    d = null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
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
                                if ((0, nk.BL)(n)) return n;
                                if (!(0, nk.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || oz(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === oq(t, g.created_at, o) ? g.id : null,
                    x = u?.projectEvent?.type === "remixed" ? u.projectEvent : null,
                    v = x?.id ?? p,
                    b = oG(e, x),
                    j = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([rI.A], () => j > 0 && null == rI.A.getSettings(e), [j, e]),
                    k = (0, oM.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (i = (0, nk.Ji)(t)) || !!(0, nk.B0)(t, t.lastIndexOf(i))) &&
                        (null == m || !oz(m)) &&
                        null == oP(t) &&
                        null == b &&
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
                        let l = oD.get(`${e}:${n}`);
                        return null != l ? oq(t, l, o) : null;
                    },
                    isDismissed: (t) => (0, oO.VS)(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, oU);
            (0, oO.$p)();
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
                })(e, i, i.isDismissed),
                u = [s, o].filter((e) => null != e);
            return (
                a.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of u)
                        0 !== i.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                oD.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                u.map((e) => ({
                    ...e,
                    options: {
                        context: i,
                        dismiss: null != e.tip.dismissal ? () => (0, oO.qv)(e.tip, t, i.ideasIntroAnchorId) : void 0,
                    },
                }))
            );
        })(o7, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, i.jsx)(o$, {
              role: "assistant",
              continuation: !0,
              children: (0, i.jsx)("div", {
                  className: o8.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, i.jsx)(oK, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var o6 = n(52133),
    ue = n(732159),
    ut = n(888366),
    un = n(862026),
    ul = n(291192);
function ur(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = a.useId(),
        r = (0, un.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, i.jsxs)("div", {
        className: ul.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, i.jsxs)("div", {
                className: ul.Sp,
                children: [
                    (0, i.jsx)("span", { className: ul.q3 }),
                    (0, i.jsxs)("span", {
                        className: ul.g8,
                        children: [
                            (0, i.jsx)(ut.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, i.jsx)(p.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: ul.q3 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: ul.nM,
                role: "status",
                children: [
                    (0, i.jsxs)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          " ",
                                          (0, i.jsx)(lh.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, eE.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, i.jsx)(ue.u, {
                                                                    ...t,
                                                                    title: ev.intl.string(ex.default["i+xjZM"]),
                                                                    subtitle: ev.intl.string(ex.default.fMBZmD),
                                                                    confirmText: ev.intl.string(ex.default.i5f3Uo),
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
                        ? (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var ui = n(345942),
    ua = n(727419),
    us = n(576705);
function uo(e) {
    let { guildId: t, update: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            " ",
            ev.intl.format(n ? ex.default.esEGL5 : ex.default["XrN+Bg"], {
                onOpen: () => ua.A.open(t, lt.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var uu = n(976860);
function uc(e) {
    return (0, c.bG)([ts.Ay, i7.A], () => {
        let t = ts.Ay.getProject(e);
        return null == t ? "" : (i7.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var ud = n(951465),
    uf = n(369455);
function um(e) {
    var t, n, l;
    let r,
        a,
        { projectId: s, notice: o } = e,
        u = uc(s),
        d =
            null ==
            (a = (0, c.bG)([ts.Ay, lF.A], () => {
                let e = ts.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lF.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: a.id, name: a.name },
        f = (0, c.cf)([ts.Ay, th.A, lF.A, us.A], () => {
            let e = ts.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eF.q7.AUTOMOD) === !0 ||
                    th.A.getPublishStatus(s)?.surface === "automod",
                n = lF.A.getGuild(e.guild_id),
                l = null != n && us.A.can(lt.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, i.jsxs)(p.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            ev.intl.format(
                ((t = o),
                (n = d?.name ?? null),
                (l = f.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? ex.default.ESu5eZ
                        : ex.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? ex.default.ZnQW4S
                          : ex.default.ev23Cw
                      : t.update
                        ? r
                            ? ex.default["LuS8a/"]
                            : ex.default.gQzuLC
                        : l
                          ? ex.default.KORRGl
                          : r
                            ? ex.default["/npn7F"]
                            : ex.default.MOrR29),
                {
                    name: u,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, ui.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, i.jsx)(uo, { guildId: f.guildId, update: o.update })
                : !f.automod && o.update && null != o.published_revision
                  ? (0, i.jsx)(uh, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function uh(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tp.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: i } = (0, c.cf)(
                    [th.A, ts.Ay],
                    () => {
                        let r = th.A.getPublishStatus(e),
                            i = ts.Ay.getProject(e);
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
                                (0, ts.jf)(i),
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
                      ? ev.intl.format(ex.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, i.jsx)(
                                    e5.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uf.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, uu.pX)(lt.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : ev.intl.format(ex.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = ts.Ay.getProject(e),
                                        i = null == r ? null : (0, tp.KL)(r, l);
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
                                null != e && (0, ud.A)(e);
                            },
                        }),
              ],
          });
}
var ug = n(73153),
    up = n(505527),
    ux = n(367790),
    uv = n(354777),
    ub = n(491182),
    uj = n(74096),
    uy = n(549587),
    uk = n(448368),
    uw = n(21299),
    uA = n(538355),
    uS = n(715628),
    uC = n(752636),
    uN = n(9842),
    uI = n(589022),
    uE = n(967198),
    u_ = n(531685),
    uM = n(503275);
let uR = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function uP(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function uT(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function uL(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = uT(e, t),
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
    if (uP(r) && uP(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && uP(uT(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function u$(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([ai.Ay], () => ai.Ay.useReducedMotion),
        r = n && !l,
        [i, s] = a.useState(() => ({ target: e, length: e.length })),
        o = i;
    (o.target !== e &&
        (o = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          i = 0;
                      for (; i < r && e.charCodeAt(i) === t.charCodeAt(i);) i++;
                      for (; i > 0 && uL(t, i);) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        r || o.length === e.length || (o = { target: e, length: e.length }),
        o !== i && s(o));
    let u = r && o.length < e.length,
        d = a.useRef(o);
    a.useLayoutEffect(() => {
        d.current = o;
    });
    let f = a.useRef(0),
        m = a.useRef(0);
    (a.useEffect(() => {
        if (u)
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
                                    for (; l > t + 1 && n - l < 12 && uR.has(e.charAt(l - 1));) l--;
                                    return uR.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + a));
                                let o = s;
                                for (; o < t.length && o - s < 32 && uL(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
            );
    }, [u]),
        a.useEffect(() => {
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
var uD = n(624479),
    uq = n(890377),
    uF = n(92446),
    uO = n(957565),
    uG = n(180227);
function uz(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: u()(uG.QE, { [uG.Rn]: t }),
              children: (0, i.jsx)(aR.Ay, {
                  children: n.map((e) =>
                      (0, i.jsx)(
                          aR.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function uU(e) {
    return uO.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ev.intl.string(ev.t.JrGD7E), icon: uD.CopyIcon, onClick: () => (0, uO.C)(e) }]
        : [];
}
function uB(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: ev.intl.string(ex.default.CXtLD2),
                          tooltip: ev.intl.string(ex.default.DOb1HM),
                          icon: uq.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ev.intl.string(ex.default.urZwpN),
                          icon: e8.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, i.jsx)(uz, { groupStart: n, actions: [...r, ...uU(t)] });
}
function uK(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        a =
            null == l
                ? []
                : [{ id: "restore-version", label: ev.intl.string(ex.default.H8Jfhu), icon: tW.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: uF.BugIcon, onClick: r }];
    return (0, i.jsx)(uz, { groupStart: n, actions: [...a, ...uU(t), ...s] });
}
let uH = (0, i6.createChannelRecord)({ id: "conjure-builder", type: lt.rbe.DM }),
    uW = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function uV(e, t) {
    return null == e ? e : (0, i.jsx)("div", { className: u()(uG.Yq, { [uG.x1]: t }), children: e });
}
function uX(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let uY = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function uQ(e, t, n) {
    let { content: l } = (0, uA.A)(e, uY),
        r = a.useMemo(() => ((0, rB.aW)(e.content) ? (0, uv.z2)(sM.U, e, uY).content : null), [e]) ?? l,
        s = a.useMemo(() => ({ message: e, channel: uH, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, i.jsx)(uj.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, uS.A)(s, r);
}
function uZ(e) {
    let [t, n] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = a.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = a.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, uw.m)(e, uH, t.usernameProfile, l),
        o = (0, uw.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([uE.A], () => uE.A.getGuildId()),
        d = (0, c.bG)([n9.default], () => n9.default.getCurrentUser()),
        f = a.useCallback(
            (t) => {
                let n = n9.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, i.jsx)(uI.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: f,
        guildId: u ?? void 0,
    };
}
let uJ = { formatInline: !0, allowGameMentions: !0 };
function u0(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, uA.A)(n, uJ),
        o = a.useMemo(() => {
            let e = "" === n.content ? null : (0, rB.aW)(n.content) ? (0, uv.z2)(sM.U, n, uJ).content : s;
            return null == l
                ? e
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("span", {
                              className: uG.GV,
                              children: [
                                  (0, i.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: uG.Rj,
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
            [n8.A],
            () => ({
                isReplyAuthorBlocked: n8.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: n8.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        f = (0, a_.X4)(n),
        m = (0, a_.X4)(t),
        g = uZ(n);
    return (0, i.jsx)(uk.A, {
        repliedAuthor: f,
        baseAuthor: m,
        baseMessage: t,
        channel: uH,
        referencedMessage: { state: uN.a.LOADED, message: n },
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
function u1(e) {
    let { message: t, author: n } = e,
        l = uZ(t);
    return (0, i.jsx)(uy.Ay, {
        message: t,
        channel: uH,
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
function u2(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, uM.vm)(l),
        c = a.useMemo(() => (0, a_.FT)(u, null), [u]),
        d = a.useMemo(() => E(t), [t]),
        f = d?.body ?? t,
        m = (0, s0.Qu)(f),
        h = a.useMemo(() => {
            if (null == u) return null;
            let e = (0, i9.Ay)({ channelId: uH.id, content: f, author: u });
            return (0, i8.rh)({ ...e, timestamp: uX(n, e.timestamp), state: lt.cmJ.SENT });
        }, [f, u, n]);
    return null == h
        ? null
        : (0, i.jsx)(
              u3,
              {
                  message: h,
                  author: c,
                  content: f,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: o,
              },
              m,
          );
}
function u3(e) {
    let { message: t, author: n, content: l, selected: r, accessories: a, groupStart: s = !0, onQueuedAction: o } = e,
        u = uQ(t, l);
    return (0, i.jsx)(ub.A, {
        className: uG.yE,
        author: n,
        childrenHeader: s ? (0, i.jsx)(u1, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, i.jsxs)("div", {
                      className: uG.zq,
                      children: [
                          (0, i.jsxs)("span", {
                              className: uG.GV,
                              children: [
                                  (0, i.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: uG.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, i.jsx)("span", { className: uG.WO, children: u }),
                      ],
                  }),
        childrenAccessories: uV(a, "" !== l),
        childrenButtons: (0, i.jsx)(uB, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function u4(e) {
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
        { text: f, revealing: m } = u$(t, { streaming: (0, c.bG)([u_.A], () => u && u_.A.isFocused(), [u]) }),
        h = a.useMemo(() => (0, a_.FT)(null, null), []),
        g = a.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, uM.vm)(p),
        v = a.useMemo(() => (null == r ? null : E(r.content)), [r]),
        b = a.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, i9.Ay)({ channelId: uH.id, content: v?.body ?? r.content, author: x });
            return (0, i8.rh)({ ...e, id: r.id, timestamp: uX(r.createdAt, e.timestamp), state: lt.cmJ.SENT });
        }, [r, v, x]),
        j = a.useMemo(() => (null == r ? void 0 : { channel_id: uH.id, message_id: r.id }), [r]),
        [y] = a.useState(() => (0, i9.Ay)({ channelId: uH.id, content: "", author: uW })),
        k = a.useMemo(
            () =>
                (0, i8.rh)({
                    ...y,
                    timestamp: uX(n, y.timestamp),
                    state: lt.cmJ.SENT,
                    ...(null != j ? { type: lt.lAJ.REPLY, message_reference: j } : {}),
                }),
            [y, n, j],
        ),
        w = a.useMemo(() => k.set("content", f), [k, f]),
        A = a.useMemo(
            () => (0, uC.A)({ message: k, channel: uH, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        S = uQ(w, f, uG.OS);
    return (0, i.jsxs)("div", {
        className: uG.$4,
        "data-replying": null != b ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, i.jsx)(ub.A, {
                className: uG.yE,
                author: g,
                childrenRepliedMessage:
                    null == b
                        ? null
                        : (0, i.jsx)(u0, { baseMessage: k, referenced: b, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: S,
                childrenAccessories: uV(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            o ? (0, i.jsx)("img", { className: uG.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var u5 = n(981879);
function u7(e) {
    let { messageId: t, reaction: n } = e,
        l = a.useMemo(
            () =>
                (0, i8.rh)(
                    { ...(0, i9.Ay)({ channelId: uH.id, content: "" }), id: `conjure:${t}`, state: lt.cmJ.SENT },
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
                (ug.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: uH.id,
                    messageId: l.id,
                    users: [uW],
                    emoji: e,
                    reactionType: up.v6.NORMAL,
                }),
                    ug.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: uH.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: up.v6.NORMAL,
                    }));
            }
            return (
                t(),
                ug.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    ug.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, i.jsx)("div", {
            className: u5.H,
            children: (0, i.jsx)(ux.A, {
                message: l,
                channel: uH,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var u8 = n(442433);
n(775443);
var u9 = n(990779),
    u6 = n(155899),
    ce = n(165862),
    ct = n(477782);
function cn(e) {
    let { onSelect: t, onClose: n = u8.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, i.jsx)(ce.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ev.intl.string(ev.t.ogxXGq),
        onSelect: t,
        children: (0, i.jsxs)(ct.rX, {
            children: [
                null != l
                    ? (0, i.jsx)(ct.Dr, {
                          id: "restore-version",
                          label: ev.intl.string(ex.default.H8Jfhu),
                          icon: tW.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, i.jsx)(ct.Dr, { id: "view-trace", label: "View Trace", icon: uF.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cl(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: a,
            planVersion: s,
            pickedIdeaIds: o,
            secretRequestAwaiting: u,
            secretRequestStatus: d,
            settingsFloating: f = !1,
            secretFloating: m = !1,
            isNewest: h = !1,
            onPickIdea: g,
            onApprovePlan: p,
            onRestoreVersion: x,
            onCardReply: v,
        } = e,
        b = n.message,
        j =
            null != x
                ? "assistant" !== b.role || null == b.sourceSha
                    ? null
                    : {
                          sha: b.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(b.created_at).toISOString(),
                          subject: b.content,
                      }
                : null,
        y = null != j && null != x ? () => cr(j, x) : void 0,
        k =
            ((t =
                eA() && "assistant" === b.role && (0, nk.BL)(b)
                    ? (b.turn_id ?? b.steps.find((e) => null != e.turn_id)?.turn_id ?? b.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [u9.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : u9.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((ey = { projectId: e, traceId: t }), [...ej])) n(e);
                      })(l, k)
                : void 0,
        A = b.in_reply_to,
        S = b.restoreProposal;
    return (0, i.jsx)(o$, {
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
                          void (0, u8.jA)(t, (e) => (0, i.jsx)(cn, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, i.jsx)(u4, {
            groupStart: n.groupStart,
            buttons: (0, i.jsx)(uK, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: y,
                onViewTrace: w,
            }),
            content: n.content,
            createdAt: b.created_at,
            replyTo: r,
            onJumpToReplied: null != A && null != a ? () => a(A) : void 0,
            accessories: (0, i.jsx)(s$, {
                projectId: l,
                steps: b.steps,
                content: "",
                proposal: b.proposal,
                planVersion: s,
                interrupted: !0 === b.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: b.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : b.ideas,
                pickedIdeaIds: null == b.ideas ? void 0 : o,
                attachments: b.attachments,
                secretRequest: n.active || m ? void 0 : b.secretRequest,
                secretRequestId: b.render_id,
                secretRequestAwaiting: u,
                secretRequestStatus: d,
                settingsRequest: n.active || f ? void 0 : b.settingsRequest,
                settingsAskId: b.id,
                publishCta: n.active ? null : b.publishCta,
                onPickIdea: g,
                onApprovePlan: p,
                restoreProposal: S,
                publishScheduleProposal: b.publishScheduleProposal,
                publishScheduleProposalCurrent: h,
                serverChange: n.active ? void 0 : b.serverChange,
                serverChangeCurrent: h,
                onCardReply: v,
                onRestoreProposal:
                    null != S && null != x && h
                        ? () =>
                              cr(
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
function cr(e, t) {
    (0, u6.F)({ onConfirm: () => t(e) });
}
var ci = n(288539),
    ca = n(677683),
    cs = n(677690),
    co = n(159711);
function cu(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: a } =
            ((t = (0, c.bG)([ca.A], () => ca.A.getOutcome(l))),
            (n = (0, c.bG)(
                [n7.A, n9.default, n8.A],
                () => {
                    let e = t?.status === "pinned" ? n7.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, n5.m1)(e, n9.default, n8.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = ev.intl.string(ex.default.UGAfl9);
    return null != r
        ? (0, i.jsx)(nR, {
              title: s,
              children: (0, i.jsx)(p.E, {
                  className: co.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? ev.intl.formatToPlainString(ex.default.gKe6Lw, { channelName: a ?? "" })
                          : ev.intl.string(ex.default["+kpQ3v"]),
              }),
          })
        : (0, i.jsx)(nR, { title: s, children: (0, i.jsx)(cc, { projectId: l }) });
}
function cc(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: o,
            failed: u,
            pin: f,
            skip: m,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [lD.A, us.A],
                        () =>
                            null == t
                                ? []
                                : lD.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === lt.rbe.GUILD_VOICE && us.A.can(lt.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, i] = a.useState(null),
                [s, o] = a.useState(!1),
                [u, d] = a.useState(!1),
                f = l.find((e) => e.id === r) ?? null,
                m = n?.application_id,
                h = a.useCallback(async () => {
                    if (null == f || null == m) return;
                    (o(!0), d(!1));
                    let t = await (0, cs.pk)(f.id, m);
                    (o(!1), t ? (0, cs.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = a.useCallback(() => (0, cs.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: f,
                setPicked: i,
                pinning: s,
                failed: u,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, lM.A)(n, "voice"),
        g = a.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, i.jsx)("div", {
        className: co.r,
        children: (0, i.jsxs)(lp.B, {
            gap: 12,
            children: [
                (0, i.jsx)(p.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: ev.intl.string(ex.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, i.jsx)(n0.Z, {
                          selectionMode: "single",
                          label: ev.intl.string(ex.default.peOi1H),
                          placeholder: ev.intl.string(ex.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: u ? ev.intl.string(ex.default.d7EeAm) : void 0,
                          disabled: o,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, i.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ev.intl.string(ex.default.JVUsIY),
                      }),
                (0, i.jsxs)("div", {
                    className: co.o,
                    children: [
                        (0, i.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: ev.intl.string(ex.default.Iw0l8o),
                            disabled: o,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, i.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: ev.intl.string(ex.default.FYI3qr),
                                  disabled: null == r,
                                  loading: o,
                                  onClick: f,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function cd(e, t, n) {
    return (0, i.jsx)(ci.A, { userId: e, content: `@${t}` }, n);
}
function cf(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            a.useEffect(() => {
                (0, uM.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([n9.default], () => (null == l ? null : n9.default.getUser(l)), [l]),
                i = (0, at.tx)(r),
                s = uc(e),
                o =
                    (0, c.bG)([lF.A], () => (null == t.guild_id ? null : lF.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    ev.intl.string(ex.default.R1tPlP),
                u = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([lF.A], () => (null == u ? null : lF.A.getGuild(u)?.name), [u]),
                f = null == r || null == i ? null : { user: i, userHook: (e, t) => n(r.id, i, t) };
            switch (t.type) {
                case "app_removed":
                    if (null != u) {
                        let e = d ?? t.moved_to_guild_name ?? ev.intl.string(ex.default.R1tPlP);
                        return null == f
                            ? ev.intl.format(ex.default.NVM0sD, { app: s, server: o, newServer: e })
                            : ev.intl.format(ex.default["/hlliy"], { app: s, server: o, newServer: e, ...f });
                    }
                    return null == f
                        ? ev.intl.format(ex.default.Lwsrhg, { app: s, server: o })
                        : ev.intl.format(ex.default.qqePfT, { app: s, server: o, ...f });
                case "bot_removed":
                    return null == f
                        ? ev.intl.format(ex.default.mT7EQG, { app: s, server: o })
                        : ev.intl.format(ex.default["lA/crI"], { app: s, server: o, ...f });
                case "preview_bot_removed":
                    return null == f
                        ? ev.intl.format(ex.default["4LVIeo"], { app: s, server: o })
                        : ev.intl.format(ex.default.YJOV6D, { app: s, server: o, ...f });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == f
                        ? ev.intl.format(ex.default["4VQfid"], { channel: e, server: o })
                        : ev.intl.format(ex.default.RlMIJN, { channel: e, server: o, ...f });
                }
                case "remixed":
                    return ev.intl.format(ex.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return ev.intl.string(ex.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, cd),
        r = oG(t, n);
    return "voice_channel_pin" === n.type
        ? (0, i.jsx)(cu, { projectId: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(p.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, i.jsx)(rF, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let cm = a.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: a, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    nW.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rB.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, i.jsx)(o$, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(u2, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null != t ? (0, i.jsx)(s_.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, i.jsx)(sY, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, i.jsx)(u7, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, rK.tp)(e, t.id, n);
                            })(l, o, a),
                        }),
                    });
                }
                case "prose":
                    return (0, i.jsx)(o$, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(u4, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, i.jsx)(s_.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, i.jsx)(o$, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sL, {
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
                    return (0, i.jsx)(o$, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(u4, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, i.jsx)(um, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, i.jsx)(o$, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(u4, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, i.jsx)(cf, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, i.jsx)(o$, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, i.jsx)(ur, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, i.jsx)(o$, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sL, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, i.jsx)(o$, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sL, {
                            projectId: l,
                            steps: ch,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, i.jsx)(cl, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, o6.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, o6.A)(e.row, t.row, ["message"]) &&
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
                (0, o6.A)(e.replyTo, t.replyTo) &&
                (0, o6.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    ch = [],
    cg = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cp = new WeakMap();
function cx(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cv(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cb = ["wheel", "touchstart", "pointerdown", "keydown"];
function cj(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cy = a.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: o,
            onApprovePlan: d,
            floatingSettingsMessageId: f,
            floatingSecretRenderId: m,
            liveClarificationId: h,
            onRestoreVersion: g,
            onCardReply: v,
            scrollerRef: b,
            stickToBottomRef: j,
            pinned: y,
            onUnpin: k,
            handleRef: w,
            onShowsLatestChange: A,
        } = e,
        S = a.useRef(null),
        [C, N] = a.useState(null),
        I = a.useCallback((e) => {
            ((S.current = e), N(e));
        }, []),
        [E, _] = a.useState(null),
        M = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(M.current), []);
    let R = a.useCallback((e) => {
            (_(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => _(null), 1600)));
        }, []),
        P = (0, c.bG)([th.A], () => th.A.getPublishStatus(t)),
        T = (0, c.bG)([n9.default], () => n9.default.getCurrentUser()?.id),
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
                                        let t = (0, ny.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        i = null != r.clarification && r.clarification.id === t,
                        a = cp.get(r);
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
                                (0, nk.ST)(e) ||
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
                        let i = !(0, nk.BL)(e),
                            a = rY({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = a.lastStreamedMessage?.key,
                            o = (0, ny.C6)(e.steps, { turnActive: i }),
                            { lastWork: u, open: c } = (0, ny.CT)(o, { turnActive: i }),
                            d = o.at(-1)?.index,
                            f = !1;
                        for (let n of o) {
                            if (null != n.prose && cg.test(n.prose.content)) f = !0;
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
                                        reportsDuration: n.index === u,
                                        hostsChecklist: n.hasTodos,
                                        turnActive: nw(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = cg.test(e.content ?? "");
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
                            (a.showsClosingMessage && !m) ||
                                null != e.proposal ||
                                (null != e.clarification && !n) ||
                                null != e.restoreProposal ||
                                null != e.publishScheduleProposal ||
                                (!i &&
                                    (null != e.ideas ||
                                        null != e.publishCta ||
                                        null != e.secretRequest ||
                                        null != e.settingsRequest ||
                                        null != e.serverChange)) ||
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
                    (cp.set(r, { superseded: e, liveCard: i, planned: s }), n.push(...s));
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
                        if (null != l) return su(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = sd.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), sd.set(t, n)), n);
                      })),
                h,
            );
        }, [n, P, h]),
        $ = a.useMemo(() => L.map((e) => e.key), [L]),
        [D, q] = a.useState(null),
        F = (function (e, t, n) {
            if (null == t) return cx(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cv(e, t.endKey, t.end - 1) + 1,
                i = cv(e, t.startKey, t.start);
            return (l && n && r - i > 120 && (i = r - 60), cx(e, i, r));
        })($, D, y),
        O = a.useRef(F),
        G = a.useRef($),
        z = a.useRef(L),
        U = a.useRef(null),
        B = a.useRef(null),
        K = a.useRef(new Set()),
        H = a.useRef(null),
        W = a.useRef(!1),
        V = a.useCallback(() => {
            let e = b.current?.getScrollerNode(),
                t = W.current ? cj(S.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [b]);
    a.useLayoutEffect(() => {
        let e = b.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            W.current = !1;
        };
        for (let n of cb) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cb) e.removeEventListener(n, t);
        };
    }, [b]);
    let X = a.useCallback(() => {
            let e = b.current?.getScrollerNode(),
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
            U.current = null != a && null != s ? { key: s, offset: a.getBoundingClientRect().top - n } : null;
        }, [b]),
        Y = a.useCallback(() => {
            let e = b.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: i } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cx(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!i && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cx(e, n, l));
                }
                let a = Math.max(t.start - 30, t.end - 120);
                return a < t.start ? cx(e, a, t.end) : null;
            })(G.current, O.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: j.current,
            });
            "older" === n ? (0, eb.P6)(t) : null != n && q(n);
        }, [b, j, t]);
    a.useImperativeHandle(
        w,
        () => ({
            handleScroll() {
                (X(),
                    q((e) => {
                        let t = O.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    Y());
            },
            recordAnchor: X,
            showLatest(e) {
                ((W.current = !1), (B.current = e ?? null), q(null));
            },
            snapshot() {
                let e = U.current;
                return null == e ? null : { window: O.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!G.current.includes(n.key)) return !1;
                (k(), (U.current = n));
                let l = O.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = b.current?.getScrollerNode(),
                        t = S.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else q(t);
                return !0;
            },
        }),
        [X, Y, k, b],
    );
    let Q = a.useRef(null),
        Z = a.useCallback(
            (e) => {
                var n;
                let l;
                ((Q.current = null), (W.current = !1));
                let r = S.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (k(), q(O.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), R(e));
                    return;
                }
                let i = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === i) {
                    (0, eb.P6)(t) && (Q.current = e);
                    return;
                }
                (k(),
                    (B.current = () => {
                        (S.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            R(e));
                    }),
                    q(((n = G.current), cx(n, (l = Math.max(0, i - 30)), l + 60))));
            },
            [R, k, t],
        );
    (a.useEffect(() => {
        let e = Q.current;
        null != e && Z(e);
    }, [L, Z]),
        a.useLayoutEffect(() => {
            if (null == C) return;
            let e = C.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), j.current)) return void b.current?.scrollToBottom();
                        (V(), X());
                    }
                });
            return (t.observe(C), () => t.disconnect());
        }, [C, V, X, b, j]));
    let J = null == F.endKey;
    (a.useEffect(() => A?.(J), [J, A]),
        a.useLayoutEffect(() => {
            ((O.current = F), (G.current = $), (z.current = L));
        }),
        a.useLayoutEffect(() => {
            let e = b.current?.getScrollerNode(),
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
                    })(H, t, n);
            if (null != e && null != l) {
                let t = U.current;
                if (r && j.current && null != cj(l)) (k(), q(O.current), (W.current = !0), V());
                else if (j.current) b.current?.scrollToBottom();
                else if (W.current) V();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = B.current;
                ((B.current = null), n?.(), X(), Y());
            }
            K.current = new Set($);
        }, [t, n, L, $, F.start, F.end, b, j, k, V, X, Y]));
    let ee = a.useMemo(() => oP(n), [n]),
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
                : (0, nk.BL)(er)
                  ? er.awaitingUser
                  : null) ?? void 0,
        ea = (0, c.bG)([rI.A], () => rI.A.getSettings(t)?.secrets, [t]),
        es = (0, oM.WT)(t),
        eo = a.useMemo(() => (0, rv.Mv)(n, ea), [n, ea]);
    if (!(0, nk.i_)(n)) {
        if ("loading" === l)
            return (0, i.jsx)("ol", {
                className: u()(oT.x7, oT.jH),
                "aria-busy": !0,
                children: (0, i.jsx)("li", { className: oT.Ub, children: (0, i.jsx)(x.y, {}) }),
            });
        let e = "unavailable" === l ? ex.default.Td4Sf4 : ex.default.V1QiNz;
        return (0, i.jsx)("ol", {
            className: oT.x7,
            children: (0, i.jsx)(o$, { role: "assistant", children: (0, i.jsx)(u4, { content: ev.intl.string(e) }) }),
        });
    }
    return (0, i.jsx)(oL.Provider, {
        value: K,
        children: (0, i.jsxs)("ol", {
            ref: I,
            className: oT.x7,
            children: [
                L.slice(F.start, F.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, i.jsx)(
                            cm,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && E === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === er;
                    return (0, i.jsx)(
                        cm,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? el.get(n.in_reply_to) : void 0,
                            onJumpTo: Z,
                            planVersion: et.get(n.render_id),
                            pickedIdeaIds: en.get(n.render_id),
                            secretRequestAwaiting: l ? ei : void 0,
                            secretRequestStatus: eo.get(n.render_id),
                            settingsFloating: n.id === f,
                            secretFloating: n.render_id === m,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === ee ? d : void 0,
                            onRestoreVersion: g,
                            onCardReply: v,
                        },
                        e.key,
                    );
                }),
                J
                    ? es.map((e) =>
                          (0, i.jsx)(
                              o$,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, i.jsx)(u4, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, i.jsx)(oR.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ei && J
                    ? (0, i.jsx)(o$, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, i.jsx)(u4, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, i.jsx)(p.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ev.intl.string(ex.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                J ? (0, i.jsx)(o9, { projectId: t, messages: n, draftHasText: !0 === o, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var ck = n(731084),
    cw = n(336288),
    cA = n(187447);
function cS(e) {
    let { activity: t, id: n } = e,
        l = (0, nj.j)(),
        { text: r, revealing: s } = u$(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = a.useRef(null),
        c = a.useRef(!0),
        d = a.useRef(0),
        f = a.useCallback(() => {
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
        a.useLayoutEffect(() => {
            if (!c.current) return;
            let e = o.current;
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
            className: cA.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, i.jsx)(nx.Ch, {
                ref: o,
                onScroll: f,
                className: cA.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, i.jsx)("div", {
                    className: u()(sT.PT, cA.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ac.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cC = n(53659);
function cN(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: o = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: f = !1,
            spoken: m,
            onSpokenChange: h,
        } = e,
        g = a.useRef(null),
        x = a.useId(),
        [v, b] = a.useState(null),
        j = (0, ck.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: o,
            controlling: c,
            publishPending: d,
            publishing: f,
        }),
        y = ev.intl.string(j),
        k = j === ck.kx["0"],
        [w, A] = a.useState(m ?? y),
        S = (0, nj.j)();
    (l || (0, ck.E4)(y, w) || (!S && !k)) && w !== y && A(y);
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
        ((E.current = k), !k && (0, ck.E8)(I.current) && A(C.current));
    }, [k]),
        a.useEffect(() => {
            if (!S) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, ck.E8)(I.current) ? _.current + 1 : 0), A((0, ck.Ov)(_.current)))
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
        R = t?.session ?? null,
        P = M && null != R && v === R,
        T = a.useCallback(() => {
            M && null != R && b((e) => (e === R ? null : R));
        }, [M, R]),
        L = a.useCallback(() => b(null), []);
    return (0, i.jsx)(tb.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, i.jsx)(cS, { id: x, activity: t }),
        children: () =>
            (0, i.jsxs)(e5.D, {
                innerRef: g,
                className: u()(cC.hF, M && cC.Xd),
                "aria-label": ev.intl.string(
                    r
                        ? ex.default.qqlUiW
                        : j === ex.default.j8tmjK
                          ? ex.default.j8tmjK
                          : k
                            ? ck.kx["0"]
                            : ex.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? x : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ev.intl.string(j),
                onClick: T,
                children: [
                    (0, i.jsx)("span", {
                        className: cC.bl,
                        children: (0, i.jsx)(cw.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", {
                        className: cC.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: S
                            ? (0, i.jsx)(sD.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: cC.yE,
                              })
                            : (0, i.jsx)(p.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: cC.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cI = { second: 1e3, minute: 6e4 };
function cE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cI[t];
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
var c_ = n(719374);
function cM(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = cE(t);
    return (0, i.jsx)(p.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: c_.$,
        "data-conjure-turn-timer": !0,
        children: (0, r5.C7)(l),
    });
}
function cR(e) {
    let { startedAt: t } = e,
        n = cE(t, "minute");
    return (0, i.jsx)(nI.A, { role: "timer", children: (0, r5.Us)(n) });
}
var cP = n(885574),
    cT = n(242779),
    cL = n(436804);
function c$(e) {
    return e.toLocaleString();
}
function cD(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, i.jsxs)("div", {
        className: cL.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: cL.mf,
                children: [
                    (0, i.jsx)(p.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [c$((0, cT.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(p.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    c$(n.input_tokens),
                    " in \xb7 ",
                    c$(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${c$(n.cache_creation_input_tokens)} cache write \xb7 ${c$(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cq(e) {
    let { project: t } = e,
        n = (0, cT.wU)(t.compaction),
        l = (0, cT.wU)(t.classifier),
        r = (0, cT.wU)(t.image),
        a = (0, cT.wV)(t.orchestrator, t.codegen),
        s = (0, cT.wV)(a, n);
    return (0, i.jsxs)("div", {
        className: cL.si,
        role: "dialog",
        "aria-label": ev.intl.string(ex.default.p5EGzq),
        children: [
            (0, i.jsx)("div", {
                className: cL.Q$,
                children: (0, i.jsxs)("div", {
                    className: cL.mf,
                    children: [
                        (0, i.jsxs)(p.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [c$((0, cT.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(p.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(cD, { label: ev.intl.string(ex.default["9Sj3SX"]), usage: a }),
            (0, i.jsx)(cD, { label: ev.intl.string(ex.default.ANCEo3), usage: n }),
            (0, i.jsx)(cD, { label: ev.intl.string(ex.default.ugL6D4), usage: l, cached: !1 }),
            (0, i.jsx)(cD, { label: ev.intl.string(ex.default.DHr5On), usage: r, cached: !1 }),
            (0, i.jsxs)("div", {
                className: cL.mf,
                children: [
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: ev.intl.string(ex.default["8OUg09"]),
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cT.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cT.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cF(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, i.jsx)(tb.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cq, { project: t }),
        children: (e) =>
            (0, i.jsx)(e5.D, {
                innerRef: n,
                className: cL.Y$,
                "aria-label": ev.intl.string(ex.default.Z96gxQ),
                ...e,
                children: (0, i.jsx)(cP.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cO = n(990250);
function cG(e) {
    let { queued: t } = e,
        n = ev.intl.string(ex.default.hzgPbZ);
    return (0, i.jsxs)("div", {
        className: cO.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, i.jsxs)("div", {
                className: cO.wx,
                children: [
                    (0, i.jsx)(p.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, i.jsx)(nx.Ch, {
                className: cO.XG,
                children: (0, i.jsx)("ul", {
                    className: cO.p_,
                    children: t.map((e) => (0, i.jsx)(cz, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cz(e) {
    let { content: t } = e,
        n = a.useRef(null),
        [l, r] = a.useState(!1),
        [s, o] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = n.current;
        null == e || l || o(e.scrollHeight > e.clientHeight);
    }, [t, l]),
    "" === t)
        ? (0, i.jsx)("li", {
              className: cO.AS,
              children: (0, i.jsx)(p.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: ev.intl.string(ex.default["07XimM"]),
              }),
          })
        : (0, i.jsxs)("li", {
              className: cO.AS,
              children: [
                  (0, i.jsx)(p.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cO.Qs,
                      children: t,
                  }),
                  s
                      ? (0, i.jsx)(lh.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: ev.intl.string(l ? ex.default.nEMoeN : ex.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cU(e) {
    let { queued: t, className: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(tb.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cG, { queued: t }),
        children: (e) =>
            (0, i.jsx)(e5.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, i.jsx)(p.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: ev.intl.formatToPlainString(ex.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cB = n(997421);
function cK(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: o = !1,
            thinkingActivity: d,
            compacting: f,
            saving: m,
            projectUsage: h,
            connState: g,
            queued: x,
        } = e,
        v = (0, eS.Zv)(t),
        b = (0, c.bG)([th.A], () => th.A.getPublishStatus(t)?.publishing === !0, [t]),
        [j, y] = a.useState(null),
        k = a.useCallback(
            (e) =>
                y(
                    (0, ck.E8)(e) || e === ev.intl.string(ex.default.mKK6wB) || e === ev.intl.string(ex.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, ck.uc)(h),
        A = null != s,
        S = s ?? (n ? l : void 0),
        C = n || r || A || !0 === m;
    return (0, i.jsxs)("div", {
        className: cB.jf,
        children: [
            (0, i.jsxs)("div", {
                className: cB.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || o || v || b
                        ? (0, i.jsx)(cN, {
                              activity: d,
                              compacting: f,
                              saving: m,
                              restoring: r,
                              remixing: A,
                              recalling: o,
                              controlling: v,
                              publishPending: b && C,
                              publishing: b,
                              spoken: j,
                              onSpokenChange: k,
                          })
                        : null,
                    null != S ? (0, i.jsx)(cM, { startedAt: S }) : null,
                ],
            }),
            null != S ? (0, i.jsx)(cR, { startedAt: S }) : null,
            0 === x.length ? null : (0, i.jsx)(cU, { queued: x, className: u()(cB.BP, cB.A1) }),
            null == h || null == w
                ? null
                : (0, i.jsxs)("span", {
                      className: cB.BP,
                      children: [
                          (0, i.jsx)(p.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, i.jsx)(cF, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, i.jsx)(p.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ev.intl.formatToPlainString(ex.default["tCo+ZM"], { status: (0, ck.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cB.XF,
                      children: (0, ck.Db)(g),
                  }),
        ],
    });
}
var cH = n(698638),
    cW = n(608711);
let cV = [ev.intl.string(ex.default["9w+Chc"]), ev.intl.string(ex.default.WAvmdq), ev.intl.string(ex.default.SKsrzl)];
function cX(e) {
    var t, n;
    let l,
        r,
        s,
        o,
        u,
        {
            projectId: f,
            restoreState: m,
            onRestoreVersion: h,
            onImportProject: g,
            escapeScopeRef: x,
            visible: v = !0,
        } = e,
        b = (0, c.bG)([rE.A], () => rE.A.getMessages(f), [f]),
        j = (0, c.bG)([eb.Ay], () => eb.Ay.getConnState(f), [f]),
        y = (0, c.bG)([rE.A], () => rE.A.getProjectUsage(f), [f]),
        k = (0, c.bG)([rE.A], () => rE.A.getThinkingActivity(f), [f]),
        A = (0, c.bG)([rE.A], () => rE.A.isCompacting(f), [f]),
        S = (0, c.bG)([rE.A], () => rE.A.isSaving(f), [f]),
        N = (0, c.bG)([rs.A], () => rs.A.getModelSettings(f), [f]),
        I = a.useRef(null),
        E = a.useRef(null),
        _ = a.useRef(null),
        M = a.useRef(null),
        {
            stickToBottomRef: R,
            pinned: P,
            atBottom: T,
            unpin: L,
            releasePinHold: $,
            showsLatest: q,
            showsLatestRef: F,
            handleShowsLatestChange: O,
            updatePin: z,
        } = (function (e) {
            let t = a.useRef(!0),
                [n, l] = a.useState(!0),
                [r, i] = a.useState(!0),
                s = a.useRef(!1),
                o = a.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                u = a.useCallback(() => {
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
                    for (let e of cb) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of cb) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = a.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    a = !s.current && r < 32 && f.current;
                t.current = a;
                let o = r > 1 || !f.current;
                (i((e) => (!o === e ? e : !o)), l((e) => (e === a ? e : a)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: o,
                releasePinHold: u,
                showsLatest: c,
                showsLatestRef: f,
                handleShowsLatestChange: m,
                updatePin: h,
            };
        })(E),
        U = a.useCallback(() => {
            function e() {
                let e = I.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            ($(), F.current ? e() : _.current?.showLatest(e));
        }, [$, F]),
        B = a.useCallback(() => {
            (z(), _.current?.handleScroll());
            let e = M.current;
            null != e && (e.position = R.current ? null : (_.current?.snapshot() ?? null));
        }, [z, R]),
        K = a.useContext(eT.A) === f;
    a.useLayoutEffect(() => {
        if (!K) return;
        let e = { position: e$.A.getProjectView(f).chatScroll };
        return ((M.current = e), () => (0, eL.g7)(f, { chatScroll: e.position }));
    }, [K, f]);
    let H = a.useRef(!K);
    (a.useLayoutEffect(() => {
        if (H.current || !(0, nk.i_)(b)) return;
        H.current = !0;
        let e = e$.A.getProjectView(f).chatScroll;
        null != e && _.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [b, f]),
        a.useLayoutEffect(() => {
            let e = I.current;
            if (null == e) return;
            let t = E.current?.getScrollerNode(),
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
                    r && (R.current ? E.current?.scrollToBottom() : _.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [R]),
        a.useEffect(() => {
            (0, eb.ensureConnection)(f);
        }, [f]),
        (0, rH.E1)(f, (0, nj.j)()));
    let W = G(f),
        V = (function (e) {
            let t = (0, tp.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lF.A], () => (null == n ? null : (lF.A.getGuild(n)?.name ?? null))),
                [r, i] = a.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: ev.intl.format("channel" === s ? ex.default["1cm4fj"] : ex.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => i(e),
                  };
        })(f),
        X = (function (e) {
            let t = (0, c.bG)([rG.A], () => rG.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rz.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rO.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? ev.intl.format(ex.default["bw/n4C"], { helpdeskURL: e })
                            : ev.intl.format(ex.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: ev.intl.formatToPlainString(ex.default.GHgG2B, { percent: l, limit: n }) };
        })(f),
        Y =
            ((l = (0, c.bG)([rp.A], () => rp.A.getFailure(f))),
            (r = a.useCallback(() => (0, rx.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: ev.intl.format(ex.default.Up6Ssw, { reason: l }),
                      retry: { text: ev.intl.string(ex.default["ywA+ET"]), onClick: r },
                  }),
        Q = (0, ru.E8)(f),
        Z = (0, c.bG)([rp.A], () => rp.A.getSetupStartedAt(f), [f]),
        J = a.useCallback(
            (e, t) => {
                (0, eb.dv)(f, e, t);
            },
            [f],
        ),
        ee = a.useCallback(
            (e, t, n) => {
                let l = n ?? J;
                0 === W.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => w(e.comment)),
                                  i = [];
                              if (
                                  (i.push(
                                      `My design feedback: ${1 === r.length ? "1 comment" : `${r.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (i.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      i.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              r.forEach((e, t) => {
                                  let n;
                                  (i.push(""),
                                      i.push(`${t + 1}. ${C(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let a = n.trim();
                              return ("" !== a && (i.push(""), i.push(`Note for the whole batch: ${a}`)), i.join("\n"));
                          })({ annotations: W.annotations, metaComment: e, context: W.context }),
                          t,
                      ),
                      D(f));
            },
            [W, J, f],
        ),
        et = a.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nH)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, eb.re)(e, l.nonce),
                        (function (e) {
                            let t = nH.get(e);
                            (nH.delete(e), nV(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(f) ||
                rE.A.isThinking(f)) &&
                (0, eb.fu)(f);
        }, [f]),
        en = a.useCallback((e) => (0, nY.RQ)(f, e.implementation_prompt), [f]),
        el = a.useCallback((e) => (0, nY.RQ)(f, e), [f]),
        [er, ei] = (function (e) {
            let [t, n] = a.useState(() => rV(e)),
                [l, r] = a.useState(e),
                i = l !== e,
                s = i ? rV(e) : t;
            return (i && (r(e), n(s)), [s, n]);
        })(f),
        ea = a.useCallback(() => J(ev.intl.string(ex.default["t5CN3+"])), [J]),
        es = a.useCallback((e, t, n) => (0, nY.RQ)(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        eo = a.useCallback((e) => (0, ro.X)(f, e), [f]),
        eu = a.useCallback((e) => (0, tT.vX)(f, e), [f]),
        ec = a.useCallback((e) => (0, tD.gn)(f, "chat", Array.from(e), eu), [f, eu]),
        ed = a.useCallback(() => (0, nY.RQ)(f, ev.intl.string(ex.default.Zc7gML)), [f]),
        ef = m?.status === "restoring",
        em = "open" === j && !ef,
        eg = b[b.length - 1],
        ep = null != eg && "assistant" === eg.role && null != eg.proposal,
        [ej, ey] = a.useState(null),
        ek = a.useMemo(
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
        ew = null != ek && ek.id !== ej ? ek : null,
        eA = a.useCallback(() => {
            null != ew && ey(ew.id);
        }, [ew]),
        [eS, eC] = a.useState(null),
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
                                summary: ev.intl.string(ex.default["o2++BO"]),
                                prompt: t.trim().slice(0, 4e3),
                            },
                            clearComposer: n,
                        }),
                    [e, r],
                ),
                o = a.useCallback(() => r(null), [r]),
                u = a.useCallback(
                    (e) => {
                        let t = l.current;
                        t?.request.id === e && (t.clearComposer(), r(null));
                    },
                    [r],
                );
            return { request: i?.request ?? null, open: s, close: o, sent: u };
        })(f),
        eI = eg?.appBuildRequest != null && (0, nk.BL)(eg) && eg.appBuildRequest.id !== eS ? eg.appBuildRequest : null,
        eE = eN.request ?? (null == ew ? eI : null),
        e_ = null == eN.request ? ew : null,
        eM = null != eE && eE === eN.request,
        { close: eR, sent: eP } = eN,
        eD = eN.request?.id,
        eq = a.useCallback(() => {
            eM ? eR() : null != eE && eC(eE.id);
        }, [eE, eM, eR]),
        eF = a.useCallback(
            (e) => {
                (null != eD && eP(eD),
                    (0, eh.P0)({
                        text: ev.intl.formatToPlainString(ex.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [eD, eP],
        ),
        eO = (0, c.bG)([rI.A], () => rI.A.getSettings(f), [f]),
        [eG, ez] = a.useState(null),
        eU = rP(),
        eB =
            null != eg &&
            ((t = eg.id),
            (s = (0, rv.Mv)(b, eO?.secrets)),
            (o = rT(b)),
            b.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, nk.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !rL(e.settingsRequest, eO, eU.has(e.id)))),
            )),
        eK =
            null != eg &&
            "assistant" === eg.role &&
            null != eg.settingsRequest &&
            null == eg.secretRequest &&
            (0, nk.BL)(eg) &&
            eg.id !== eG &&
            ((n = eg.settingsRequest),
            (u = n.keys ?? []),
            null != eO &&
                0 !== u.length &&
                u.every((e) => {
                    let t = eO.schema.find((t) => t.key === e);
                    return null != t && rk.has(t.type);
                })) &&
            rw(eg.settingsRequest, eO) &&
            !eB
                ? eg
                : null,
        eH = null == eN.request ? eK : null,
        eW = eH?.settingsRequest ?? null,
        eV = a.useCallback(() => {
            null != eK && ez(eK.id);
        }, [eK]),
        eX = null != eW,
        [eY, eQ] = a.useState(null),
        eZ = eO?.secrets,
        eJ = a.useMemo(() => (0, rv.Qr)(b, (0, rv.Mv)(b, eZ)), [b, eZ]),
        e0 = null != eJ && eJ.render_id !== eY ? eJ : null,
        e1 = null == e_ && null == eE ? e0 : null,
        e2 = a.useCallback(() => {
            null != e0 && eQ(e0.render_id);
        }, [e0]),
        [e3, e4] = a.useState(null),
        e5 = e_?.id ?? eE?.id ?? e1?.render_id ?? eH?.id,
        e9 = null != ew || null != eE || null != e0 || null != eK;
    a.useLayoutEffect(() => {
        let e = E.current?.getScrollerNode(),
            t = e3?.firstElementChild;
        if (null == e3 || null == e || !(0, tR.vq)(t, HTMLElement) || null == e5) return;
        function n() {
            R.current && E.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - e3.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [e3, e5, E, R]);
    let e6 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([rE.A], () => rE.A.hasLoadedHistory(f), [f]),
            historyUnavailable: (0, c.bG)([rE.A], () => rE.A.isHistoryUnavailable(f), [f]),
            connState: j,
        }),
        te = !(0, nk.i_)(b),
        tt = "loading" === e6 && te,
        tn = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return cV[e % cV.length];
        }, [f]),
        tl = ep ? ev.intl.string(ex.default.Zc7gML) : "greeting" === e6 && te ? tn : null,
        tr = a.useMemo(() => {
            for (let e = b.length - 1; e >= 0; e--) {
                let t = b[e];
                if ("assistant" === t.role && !(0, nk.BL)(t)) return t;
            }
        }, [b]),
        ti = null != tr,
        ta = a.useMemo(() => b.filter((e) => "user" === e.role && "queued" === e.disposition), [b]),
        ts = null != tr ? (0, rU.S)(tr) : void 0,
        to = ep && em ? ed : void 0,
        tu = a.useCallback(() => (0, nY.RQ)(f, ev.intl.string(ex.default.EMgIuY)), [f]),
        [tc, td] = a.useState(null),
        [tf, tm] = a.useState(ti);
    (tf !== ti && (tm(ti), ti || td(null)),
        a.useEffect(() => {
            if (!ti) return;
            let e = E.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? td(null)
                        : td(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [ti, tr?.steps, q]));
    let th = q ? tc : "bottom",
        tg = a.useMemo(() => (null != tr ? (0, nA.b9)(tr.steps) : ""), [tr]),
        tx = a.useMemo(() => (null != tr ? ((0, ny.lt)(tr.steps) ?? tr.todos) : void 0), [tr]),
        tv = tr?.provisionalTodo,
        tb = null != tr && nw(tr),
        tj = a.useMemo(() => {
            var e;
            return null != tr ? ((e = tr.steps), ie((0, ny.Jf)(e, !0).tasks)) : void 0;
        }, [tr]);
    return (0, i.jsxs)("section", {
        ref: I,
        "data-conjure-chat": !0,
        className: cW.TE,
        children: [
            em
                ? (0, i.jsx)(nb.A, {
                      title: ev.intl.string(ex.default.gy7byi),
                      description: ev.intl.string(ex.default["dkv/WO"]),
                      icons: cH.ir,
                      onDrop: ec,
                  })
                : null,
            (0, i.jsx)(nK, {
                onJumpToActivity: U,
                line: tg,
                placement: ti && "top" === th ? "top" : null,
                todos: tx,
                todosLive: tb,
                provisionalTodo: tv,
                agents: tj,
            }),
            (0, i.jsxs)("div", {
                className: cW.JX,
                children: [
                    (0, i.jsx)(nx.Ch, {
                        ref: E,
                        onScroll: B,
                        scrollbarGutter: tt ? "both-edges" : "stable",
                        className: [cW.N$, T ? null : cW.hB, eX ? cW.J9 : null].filter(Boolean).join(" "),
                        children: (0, i.jsx)(rB.Fu.Provider, {
                            value: f,
                            children: (0, i.jsx)(cy, {
                                projectId: f,
                                messages: b,
                                emptyState: e6,
                                floatingSettingsMessageId: eK?.id,
                                floatingSecretRenderId: e1?.render_id,
                                liveClarificationId: e_?.id,
                                onPickIdea: em ? en : void 0,
                                onAskForIdeas: em ? ea : void 0,
                                draftHasText: er,
                                onApprovePlan: em ? tu : void 0,
                                onRestoreVersion: ef || ti ? void 0 : h,
                                onCardReply: em ? el : void 0,
                                scrollerRef: E,
                                stickToBottomRef: R,
                                pinned: P,
                                onUnpin: L,
                                handleRef: _,
                                onShowsLatestChange: O,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: cW.NJ,
                        children: (0, i.jsx)(cK, {
                            projectId: f,
                            thinking: ti,
                            turnStartedAt: ts,
                            restoring: ef,
                            remixStartedAt: Z,
                            recalling: tt,
                            thinkingActivity: k,
                            compacting: A,
                            saving: S,
                            projectUsage: y,
                            connState: j,
                            queued: ta,
                        }),
                    }),
                    null == e_
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e4,
                              className: eX ? `${cW.B5} ${cW.J9}` : cW.B5,
                              children: (0, i.jsx)(
                                  ra,
                                  { projectId: f, clarification: e_, onSubmit: em ? es : void 0, onDismiss: eA },
                                  e_.id,
                              ),
                          }),
                    null == eE
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e4,
                              className: cW.B5,
                              children: (0, i.jsx)(
                                  n4,
                                  { projectId: f, request: eE, canSend: em, onDismiss: eq, onSent: eM ? eF : void 0 },
                                  eE.id,
                              ),
                          }),
                    e1?.secretRequest == null
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e4,
                              className: cW.B5,
                              children: (0, i.jsx)(
                                  rN,
                                  {
                                      projectId: f,
                                      cardId: e1.render_id,
                                      request: e1.secretRequest,
                                      status: "open",
                                      onDismiss: e2,
                                  },
                                  e1.render_id,
                              ),
                          }),
                    null == eW
                        ? null
                        : (0, i.jsx)("div", {
                              ref: null == e_ && null == eE ? e4 : void 0,
                              className: cW.B5,
                              children: (0, i.jsx)(
                                  rF,
                                  { askId: eH?.id, projectId: f, request: eW, onDismiss: eV },
                                  eH?.id,
                              ),
                          }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: cW.Jx,
                children: [
                    (0, i.jsx)(nK, {
                        onJumpToActivity: U,
                        line: tg,
                        placement: ti && "bottom" === th ? "bottom" : null,
                        todos: tx,
                        todosLive: tb,
                        provisionalTodo: tv,
                        agents: tj,
                    }),
                    0 === W.annotations.length
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cW.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: ev.intl.formatToPlainString(ex.default["7b49dS"], {
                                          count: W.annotations.length,
                                      }),
                                  }),
                                  (0, i.jsx)(p.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: ev.intl.string(ex.default["5zG+CR"]),
                                  }),
                                  (0, i.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ev.intl.string(ex.default["/zOv9+"]),
                                      onClick: () => D(f),
                                  }),
                              ],
                          }),
                    null == Q ? null : (0, i.jsx)(rg, { pending: Q }, Q.publishTurnId),
                    null == Y
                        ? null
                        : (0, i.jsx)("div", {
                              className: cW.qB,
                              children: (0, i.jsx)(nv.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: Y.message,
                                  action: Y.retry,
                              }),
                          }),
                    null == V
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cW.Db,
                              children: [
                                  (0, i.jsx)(nv.w, { type: "warning", role: "status", message: V.message }),
                                  (0, i.jsx)("div", {
                                      className: cW.jU,
                                      children: (0, i.jsx)(e7.m, {
                                          text: ev.intl.string(ev.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, i.jsx)(tB.K, {
                                              "aria-label": ev.intl.string(ev.t.WAI6xu),
                                              icon: e8.XSmallIcon,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: V.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == X
                        ? null
                        : (0, i.jsx)("div", {
                              className: cW.qB,
                              children: (0, i.jsx)(nv.w, {
                                  type: X.blocked ? "critical" : "warning",
                                  role: X.blocked ? "alert" : "status",
                                  message: X.message,
                              }),
                          }),
                    (0, i.jsx)(oC, {
                        projectId: f,
                        escapeScopeRef: x,
                        canSend: em,
                        running: ti,
                        restoring: ef,
                        onSend: ee,
                        hasPendingContext: W.annotations.length > 0,
                        onInterrupt: em ? et : void 0,
                        onUploadFile: eu,
                        onImport: g,
                        onSendToOtherProjects: e9 ? void 0 : eN.open,
                        onApprove: to,
                        suggestion: tl,
                        questionOpen: e9,
                        secretPending: null != e1,
                        modelSettings: N,
                        onModelSettingsChange: eo,
                        onDraftHasTextChange: ei,
                        aiPaused: X?.blocked === !0,
                        visible: v,
                    }),
                ],
            }),
        ],
    });
}
var cY = n(761508),
    cQ = n(209695),
    cZ = n(207438),
    cJ = n(683438),
    c0 = n(564218);
function c1(e, t) {
    return String(e).padStart(t, "0");
}
function c2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${c1(l.getHours(), 2)}:${c1(l.getMinutes(), 2)}:${c1(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${c1(l.getMilliseconds(), 3)}` : r;
}
var c3 = n(667931);
let c4 = {
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
    c5 = { running: "Running", ok: "Done", error: "Failed" };
function c7(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function c8(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function c9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function c6(e) {
    return c8(e.count > 1 ? e.totalMs : e.end - e.start);
}
let de = ["Arguments", "Result", "Usage", "Details"];
function dt(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function dn(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function dl(e) {
    let t = (0, c3.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, c3.lp)(e) ? "interrupted" : "still running";
}
function dr(e) {
    return [c2(new Date(e.started_at).toISOString()) ?? "", c9(e.spans.length), (0, c3.Sj)((0, c3.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function di(e) {
    let t = (0, c3.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: i } = (0, c3.N5)(r);
        (n.set(i, (n.get(i) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += da(r, "in")),
                (l.output += da(r, "out")),
                (l.cacheRead += da(r, "cache_read")),
                (l.cacheWrite += da(r, "cache_write")),
                (l.costUsd += da(r, "cost_usd"))));
    }
    let r = c3.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function da(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var ds = n(738188),
    du = n(430993),
    dc = n(364840),
    dd = n(224640),
    df = n(20742);
let dm = { collapsed: new Set(), revealed: new Set() };
var dh = n(872892);
let dg = {
    op: dh.Q,
    model: dh.i3,
    tool: dh.dH,
    setup: dh.kc,
    worktree: dh.Qx,
    sandbox: dh.QH,
    build: dh.F1,
    platform: dh.Op,
    other: dh.fv,
};
function dp(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      c9(t.calls, "model call"),
                      `${c7(t.input)} in`,
                      `${c7(t.output)} out`,
                      `${c7(t.cacheRead)} cache read`,
                      `${c7(t.cacheWrite)} cache write`,
                      dn(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, i.jsxs)("div", {
        className: dh.M1,
        children: [
            (0, i.jsx)("div", {
                className: dh.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, i.jsx)(
                              "div",
                              {
                                  className: `${dh.DJ} ${dg[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, i.jsx)("div", {
                className: dh.o1,
                children: c3.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${c8(n)}`;
                    return (0, i.jsxs)(
                        "span",
                        {
                            className: dh.fI,
                            children: [
                                (0, i.jsx)("span", { className: `${dh.nf} ${dg[e]}` }),
                                (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: c4[e] }),
                                null == l
                                    ? null
                                    : (0, i.jsx)(p.E, {
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
                : (0, i.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dx(e) {
    return `conjure-perf-trace-${e}`;
}
function dv(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: a } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, i.jsxs)("div", {
        className: dh.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, i.jsx)("div", { className: r }),
            (0, i.jsx)(p.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dh.p0} ${s + o > 85 ? dh.EU : dh.jh}`,
                children: a,
            }),
        ],
    });
}
function db(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? n_.ChevronSmallRightIcon : nE.ChevronSmallDownIcon,
        f = a.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        m = a.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, i.jsxs)(e5.D, {
        tag: "div",
        role: "treeitem",
        id: dx(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${dh.$y} ${r ? dh.wQ : ""}`,
        onClick: f,
        children: [
            (0, i.jsxs)("div", {
                className: dh.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, i.jsx)(e5.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dh.ai,
                              onClick: m,
                              children: (0, i.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, i.jsx)("span", { className: dh.YJ }),
                    (0, i.jsx)(p.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dh.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, i.jsx)("span", { className: `${dh.nf} ${dg[t.category]}` }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: dh.eu,
                        children: t.service,
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: dh.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, i.jsx)(p.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: dh.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, i.jsx)(ds.WarningIcon, { size: "xs", color: "currentColor", className: dh.ik })
                        : null,
                ],
            }),
            (0, i.jsx)(dv, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dh.M0} ${dh.Nh}`
                    : t.running
                      ? `${dh.M0} ${dh.rF}`
                      : `${dh.M0} ${dg[t.category]}`,
                duration: c6(t),
            }),
        ],
    });
}
function dj(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, i.jsxs)(e5.D, {
        tag: "div",
        role: "treeitem",
        id: dx(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dh.$y} ${l ? dh.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, i.jsxs)("div", {
                className: dh.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, i.jsx)("span", {
                        className: dh.ai,
                        children: (0, i.jsx)(n_.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", { className: dh.U9 }),
                    (0, i.jsx)("span", { className: `${dh.nf} ${dh.dL}` }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: dh.MQ,
                        children: c9(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, i.jsx)(dv, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dh.M0} ${dh.ab} ${dh.dL}`,
                duration: c8(t.totalMs),
            }),
        ],
    });
}
function dy(e) {
    let { node: t } = e;
    return null == t
        ? (0, i.jsx)(p.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, i.jsxs)("div", {
              className: dh._0,
              children: [
                  (0, i.jsxs)("div", {
                      className: dh.TQ,
                      children: [
                          (0, i.jsx)("span", { className: `${dh.nf} ${dg[t.category]}` }),
                          (0, i.jsx)(p.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [dt("Start", `+${c8(e.start)}`), dt("Duration", c6(e))];
                      e.count > 1
                          ? t.push(
                                dt("Calls", String(e.count)),
                                dt("Longest call", c8(e.maxMs)),
                                dt("Spread over", c8(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(dt("Self time", c8(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(dt("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(dt("Notes", l.join(", "))),
                          null != e.span.error && t.push(dt("Error", e.span.error)));
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
                              s = "cost_usd" === t ? dn(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), dt(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...de.flatMap((e) => {
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
                                      : (0, i.jsx)(p.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: dh.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, i.jsxs)(
                                          a.Fragment,
                                          {
                                              children: [
                                                  (0, i.jsx)(p.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, i.jsx)(p.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: dh.vl,
                                                            children: n,
                                                        })
                                                      : (0, i.jsx)(p.E, {
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
function dk(e) {
    let { trace: t } = e,
        n = a.useMemo(() => di(t), [t]);
    return (0, i.jsx)(dp, { stats: n });
}
function dw(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = a.useMemo(() => (null == e ? null : (0, c3.TK)(e)), [e]),
                [n, l] = a.useState(() => (null == t ? dm : (0, c3.hB)(t))),
                [r, i] = a.useState(null),
                s = a.useRef(null == t ? new Set() : (0, c3.x7)(t));
            a.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, c3.x7)(t)), l((n) => (0, c3._0)(n, t, e)));
            }, [t]);
            let o = a.useMemo(() => (null == t ? [] : (0, c3.wu)(t, n)), [t, n]),
                u = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c3.IE)(t, e);
                        null != n && l((e) => (0, c3.TN)(e, n));
                    },
                    [t],
                ),
                c = a.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c3.IE)(t, e);
                        null != n && l((e) => (0, c3.H$)(e, n));
                    },
                    [t],
                ),
                f = a.useCallback(() => {
                    null != t && l((0, c3.vH)(t));
                }, [t]),
                m = a.useCallback(() => {
                    null != t && l((0, c3.rQ)(t));
                }, [t]),
                h = a.useCallback(() => {
                    null != t && l((0, c3.hB)(t));
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
                select: i,
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: f, expandSubtree: m } = n,
        h = (0, c3.dj)(t),
        g = a.useMemo(() => (0, c3.nF)(h), [h]),
        x = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        v = a.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
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
                    null != t && (u(t.key), document.getElementById(dx(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, u, o, c],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(du.c, {
                children: [
                    (0, i.jsxs)("div", {
                        className: dh.z,
                        children: [
                            (0, i.jsx)(p.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dl(t),
                            }),
                            (0, i.jsx)(p.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dr(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, i.jsx)(p.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, i.jsx)(p.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${c9(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, i.jsx)(dk, { trace: t }),
                    (0, i.jsxs)("div", {
                        className: dh.KE,
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
                            (0, i.jsx)(p.E, {
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
                        "aria-activedescendant": null == o ? void 0 : dx(o),
                        className: dh.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(x) },
                        onKeyDown: v,
                        children: [
                            (0, i.jsxs)("div", {
                                className: dh.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: dh.So,
                                        children: (0, i.jsx)(p.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: dh.c1,
                                        children: g.map((e) =>
                                            (0, i.jsx)(
                                                p.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dh.io} ${(e / h) * 100 > 85 ? dh.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : c8(e),
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
                                          db,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, i.jsx)(dj, { row: e, extent: h, selected: e.key === o, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(dc.j, { children: (0, i.jsx)(dy, { node: s }) }),
        ],
    });
}
function dA(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        a = (0, c.bG)([u9.A], () => u9.A.getTimingTrace(l, r), [l, r]),
        s = a?.name ?? "Perf Trace";
    return (0, i.jsxs)(dd.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, i.jsx)(df.rQ, { title: s }),
            null == a
                ? (0, i.jsx)(du.c, {
                      children: (0, i.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, i.jsx)(dw, { trace: a }),
        ],
    });
}
let dS = { running: dh.Vf, ok: dh.mo, error: dh.Sr };
function dC(e) {
    let { status: t } = e;
    return (0, i.jsx)("span", { className: `${dh.Om} ${dS[t]}`, role: "img", "aria-label": c5[t] });
}
function dN(e, t) {
    (0, eE.qf)((n) => (0, i.jsx)(dA, { ...n, projectId: e, traceId: t }));
}
function dI(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = a.useCallback(() => dN(t, n.id), [t, n.id]);
    return (0, i.jsxs)(e5.D, {
        className: dh.nM,
        onClick: r,
        children: [
            (0, i.jsxs)("div", {
                className: dh.sU,
                children: [
                    (0, i.jsx)(dC, { status: (0, c3.lQ)(n) }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: dh._k,
                        children: n.name,
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dl(n),
                    }),
                ],
            }),
            (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: dr(n) }),
            null == l
                ? null
                : (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dE(e) {
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
            (0, c0.H)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, i.jsx)(tb.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: tb.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(ce.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(ct.rX, {
                    children: (0, i.jsx)(ct.Dr, {
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
            return (0, i.jsx)(tB.K, {
                ...e,
                buttonRef: l,
                icon: aI.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function d_(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([u9.A], () => u9.A.getTimingTraces(t), [t]),
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
        o = a.useMemo(() => [...s].reverse(), [s]),
        u = a.useMemo(
            () =>
                (function (e) {
                    let t = e.map(di);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: c3.BF.map((e) => ({
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
              className: dh.Ie,
              children: [
                  (0, i.jsx)(p.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, i.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: dh.nd,
              children: [
                  (0, i.jsxs)("div", {
                      className: dh.Ko,
                      children: [
                          (0, i.jsx)("div", {
                              className: dh.fH,
                              children: (0, i.jsx)(cJ.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, i.jsx)(dE, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, i.jsxs)(nx.Ch, {
                      className: dh.XG,
                      children: [
                          (0, i.jsx)(dp, { stats: u }),
                          0 === o.length
                              ? (0, i.jsx)(p.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, i.jsx)("ul", {
                                    className: dh.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(dI, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dM(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dR(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dP(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dT(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dL(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function d$(e) {
    return ev.intl.string("preview" === e ? ex.default["2yLYlG"] : ex.default.eiAi57);
}
let dD = ["all", "preview", "stable", "web"];
function dq(e) {
    switch (e.reason) {
        case "local":
            return ev.intl.string(ex.default.mUeKML);
        case "unconfigured":
            return ev.intl.string(ex.default.bGefb5);
        case "unauthorized":
            return ev.intl.string(ex.default.KLx6Bb);
        default:
            return null != e.detail
                ? ev.intl.formatToPlainString(ex.default.t09Q6q, { detail: e.detail })
                : ev.intl.string(ex.default["t+tG59"]);
    }
}
function dF(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ev.intl.formatToPlainString(ex.default["XO/bN4"], {
              p50: dM(e.memory_p50_bytes ?? 0),
              p999: dM(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dO = {
    db: () => ex.default["7l+DFG"],
    db_preview: () => ex.default.FAuffi,
    runtime: () => ex.default["Gkl+ab"],
    runtime_preview: () => ex.default.ynpJzv,
    bot: () => ex.default["5/i0cj"],
    bot_preview: () => ex.default.m2jsnw,
};
var dG = n(911608),
    dz = n(177427);
function dU(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dz.KE,
        children: [
            (0, i.jsx)("div", {
                className: dz.IQ,
                children:
                    "loading" === n
                        ? (0, i.jsx)(x.y, { type: x.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, i.jsx)(p.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ev.intl.string(ex.default.ZVByPX),
                            })
                          : null != t
                            ? (0, i.jsx)(p.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ev.intl.formatToPlainString(ex.default.INVO50, { time: dT(t) }),
                              })
                            : null,
            }),
            (0, i.jsx)(d.$, { variant: "secondary", size: "sm", text: ev.intl.string(ex.default.oKEgiu), onClick: l }),
        ],
    });
}
function dB(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("section", {
        className: dz.uW,
        "aria-label": t,
        children: [
            (0, i.jsx)(p.E, { variant: "body-xs/semibold", color: "text-muted", className: dz.Gf, children: t }),
            n,
        ],
    });
}
function dK(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: a, state: s } = e;
    return (0, i.jsxs)("div", {
        className: dz.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dz.x7,
                children: [
                    (0, i.jsxs)("span", {
                        className: dz.kS,
                        children: [a, (0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, i.jsxs)("span", {
                        className: dz.kS,
                        children: [
                            s,
                            (0, i.jsx)(p.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dH(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        a = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = a >= 0.9;
    return (0, i.jsxs)("div", {
        className: dz.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dz.x7,
                children: [
                    (0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, i.jsx)(dG.z, {
                value: 100 * a,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dz.dh : void 0,
            }),
        ],
    });
}
function dW(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, i.jsx)(dK, {
            label: ev.intl.string(ex.default.SXP7pD),
            value: ev.intl.string(ex.default.E5hKVi),
            hint: dq(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, i.jsx)(dK, {
            label: ev.intl.string(ex.default.SXP7pD),
            value: "\u2014",
            hint: ev.intl.string(ex.default.AGvoMJ),
        });
    let l = dF(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dK, { label: ev.intl.string(ex.default["H/X+FI"]), value: dR(n.cpu_ms) }),
            null != l && (0, i.jsx)(dK, { label: ev.intl.string(ex.default.lmFmMO), value: l }),
        ],
    });
}
function dV(e) {
    let { analytics: t } = e,
        n = ev.intl.string(ex.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, i.jsx)(dB, {
            title: n,
            children: (0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: dq(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dO[t] : null) ? ev.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, i.jsx)(dB, {
        title: n,
        children:
            0 === l.length
                ? (0, i.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: ev.intl.string(ex.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, i.jsx)(
                          dK,
                          {
                              label: n,
                              value: ev.intl.formatToPlainString(ex.default["w/2voO"], { cpu: dR(t.cpu_ms) }),
                              hint: dF(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dX = n(678708),
    dY = n(414499),
    dQ = n(714800),
    dZ = n(81466),
    dJ = n(424383),
    d0 = n(664121),
    d1 = n(816943),
    d2 = n(268791),
    d3 = n(514042),
    d4 = n(872351),
    d5 = n(708988),
    d7 = n(150934),
    d8 = n(417270);
let d9 = "Restart Agent",
    d6 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fe(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function ft(e, t) {
    return { label: e, value: null != t && "" !== t ? dT(t) : "Unknown", icon: "calendar" };
}
function fn(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fl(e, t, n, l) {
    let [r, i] = d6[n.status];
    return { label: e, value: `${fn(n.bytes)} of ${fn(n.max)} \xb7 ${r}`, hint: l, icon: t, state: i };
}
function fr(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dT(e.at);
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
let fi = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fa(e) {
    let t = `container ${fe(e.local)} \xb7 remote ${fe(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fi[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dP(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dP(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dP(n)} Ahead, ${dP(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fs = ["main", "wip"];
var fo = n(400154);
let fu = {
        checkout: dX.FolderIcon,
        edit: lm.PencilIcon,
        remote: dY.CloudIcon,
        commits: dQ.ListNumberedIcon,
        calendar: dZ.CalendarIcon,
        save: dJ.SaveIcon,
        objects: d0.ServerIcon,
        download: d1.CloudDownloadIcon,
        size: d2.SpeedometerIcon,
        file: d3.FileIcon,
    },
    fc = {
        ok: [ry.CircleCheckIcon, tQ.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [ds.WarningIcon, tQ.A.colors.ICON_FEEDBACK_WARNING],
        error: [sH.CircleXIcon, tQ.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [d4.ArrowSmallUpIcon, tQ.A.colors.ICON_MUTED],
        behind: [d5.ArrowSmallDownIcon, tQ.A.colors.ICON_MUTED],
    };
function fd(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([u9.A], () => u9.A.getGitInfoState(t), [t]),
            load: a.useCallback(() => (0, cZ.DK)(t), [t]),
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
                    `Updated ${dT(r)}`,
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
    return (0, i.jsxs)(dB, {
        title: "Git",
        children: [
            (0, i.jsx)("div", {
                className: fo.Lj,
                children:
                    "" !== l.line &&
                    (0, i.jsx)(p.E, {
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
                    if (!e.running || null != e.localError) return [fr(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fr(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dP(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fs.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fa))
                        : l.push(
                              { label: "Main", value: fe(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fe(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dP(e.commits) : "Unknown", icon: "commits" },
                            ft("Oldest Commit", e.oldest),
                            ft("Newest Commit", e.newest),
                            fr(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dP(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dP(t.loose)} loose (${dM(t.looseBytes)}) \xb7 ${dP(t.packed)} packed in ${n} (${dM(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dP(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dP(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != i && l.push(i),
                        null != e.localBytes &&
                            l.push(
                                fl(
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
                                  fl("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: a } = e,
                        s = fu[r],
                        [o, u] = null != a ? fc[a] : [null, void 0];
                    return (0, i.jsx)(
                        dK,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === a,
                            icon: (0, i.jsx)(s, { size: "xs", color: tQ.A.colors.ICON_MUTED }),
                            state: null != o ? (0, i.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function ff(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, c.bG)([u9.A], () => u9.A.getRestartAgentState(e), [e]),
                [n, l] = a.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                i = "restarted" === t.phase ? t.instanceSince : null,
                s = a.useRef(i);
            (a.useEffect(() => {
                null != i && i !== s.current && ((s.current = i), (0, cZ.DK)(e));
            }, [e, i]),
                a.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = u9.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cZ.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                ug.h.dispatch({
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
            let o = a.useCallback(() => (0, cZ.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: d9,
                },
                restart: o,
            };
        })(t),
        f = a.useCallback(() => {
            (0, em.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, i.jsxs)("div", {
        className: fo.Lj,
        children: [
            (0, i.jsxs)("div", {
                className: fo.nM,
                children: [
                    (0, i.jsx)(d7.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, i.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: d8.RetryIcon,
                        text: d9,
                        loading: l,
                        disabled: l,
                        onClick: f,
                    }),
                ],
            }),
            (0, i.jsx)(p.E, {
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
                            return `Restarted \xb7 new instance since ${dT(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dT(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fm(e, t) {
    return (0, i.jsx)(dK, {
        label: e,
        value: ev.intl.formatToPlainString(ex.default.yHJxuP, { count: dP((0, cT.aM)(t)) }),
        hint: `${dP(t.input_tokens)} in \xb7 ${dP(t.output_tokens)} out \xb7 ${dP(t.cache_read_input_tokens)} cache read`,
    });
}
function fh(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        u,
        f,
        m,
        h,
        { projectId: g, status: x, fetchState: v, onRefresh: b } = e,
        {
            lastTurn: j,
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
            contextCeiling: R,
        } = ((t = (0, c.bG)([u9.A], () => u9.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([u9.A], () => u9.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([u9.A], () => u9.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([u9.A], () => u9.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([u9.A], () => u9.A.getSandboxRestartState(g), [g])),
        (o = (0, c.bG)([rE.A], () => rE.A.isThinking(g), [g])),
        (u = a.useCallback(() => (0, cZ.Lj)(g), [g])),
        (f = a.useCallback(() => (0, cZ.Lj)(g, !0), [g])),
        (m = a.useCallback(() => (0, cZ.bq)(g), [g])),
        (h = x?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: o,
            handleForceCompaction: u,
            handleForceCompactionOverride: f,
            handleRestartWorkspace: m,
            lifetime: x?.agent?.lifetime ?? null,
            limits: h,
            session: x?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, i.jsxs)("div", {
        className: fo.Mf,
        children: [
            (0, i.jsx)(dU, { generatedAt: x?.generated_at ?? null, fetchState: v, onRefresh: b }),
            (0, i.jsx)(dB, {
                title: ev.intl.string(ex.default.JghNal),
                children:
                    null == E
                        ? (0, i.jsx)(p.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ev.intl.string(ex.default.s0U5Fv),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dK, {
                                      label: ev.intl.string(ex.default["9nqym2"]),
                                      value: dP((0, cT.a7)(E.cost_usd)),
                                      hint: ev.intl.formatToPlainString(ex.default.NCdUIh, { count: dP(E.turns) }),
                                  }),
                                  fm(ev.intl.string(ex.default.xtxP0e), E.orchestrator),
                                  fm(ev.intl.string(ex.default["9Sj3SX"]), E.codegen),
                                  fm(ev.intl.string(ex.default.ANCEo3), (0, cT.wU)(E.compaction)),
                                  x?.agent?.outcomes != null &&
                                      Object.keys(x.agent.outcomes).length > 0 &&
                                      (0, i.jsx)(dK, {
                                          label: ev.intl.string(ex.default.SQHm7C),
                                          value: Object.entries(x.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dP(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, i.jsx)(dB, {
                title: ev.intl.string(ex.default.dZHPE5),
                children:
                    null == j
                        ? (0, i.jsx)(p.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ev.intl.string(ex.default.DfVjal),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  fm(ev.intl.string(ex.default["7X3i9d"]), j.total),
                                  (0, i.jsx)(dK, {
                                      label: ev.intl.string(ex.default["8OUg09"]),
                                      value: `${Math.round((j.cache_hit_rate ?? (0, cT.CA)(j.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, i.jsxs)(dB, {
                title: ev.intl.string(ex.default.NbRk9a),
                children: [
                    null != y && null != R
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dH, {
                                      label: ev.intl.string(ex.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: R,
                                      formatValue: dP,
                                  }),
                                  (0, i.jsx)(dK, {
                                      label: ev.intl.string(ex.default.mRbSns),
                                      value: `${dP(y.tokensBefore)} \u{2192} ${dP(y.tokensAfter)}`,
                                      hint: ev.intl.formatToPlainString(ex.default.Vq3skS, {
                                          count: dP(y.retainedMessages),
                                          time: dT(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(p.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != R
                                      ? ev.intl.formatToPlainString(ex.default.GMLCNv, { ceiling: dP(R) })
                                      : ev.intl.string(ex.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, i.jsx)(dK, {
                            label: ev.intl.string(ex.default["4BX5KK"]),
                            value: `${dP(k.projected)} / ${dP(k.threshold)}`,
                            critical: !0,
                            hint: ev.intl.formatToPlainString(ex.default["6ngCax"], { time: dT(k.observedAt) }),
                        }),
                    (0, i.jsxs)("div", {
                        className: fo.Lj,
                        children: [
                            (0, i.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ev.intl.string(ex.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, i.jsx)(p.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ev.intl.string(ex.default.wox6Ev);
                                    if ("pending" === e) return ev.intl.string(ex.default.OcPHQ1);
                                    let t = dT(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ev.intl.formatToPlainString(ex.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? ex.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ex.default.YZb4hK
                                              : ex.default.ZoUSVK;
                                    return ev.intl.formatToPlainString(n, {
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
                                            text: ev.intl.string(ex.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, i.jsx)(p.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: ev.intl.string(ex.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: fo.Lj,
                        children: [
                            (0, i.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ev.intl.string(ex.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || S,
                                onClick: I,
                            }),
                            (0, i.jsx)(p.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ev.intl.string(ex.default.mlok8D);
                                    if ("pending" === e) return ev.intl.string(ex.default["1ugSyK"]);
                                    let t = dT(e.observedAt);
                                    return ev.intl.formatToPlainString(
                                        "restarted" === e.outcome ? ex.default["76mfqO"] : ex.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, i.jsx)(ff, { projectId: g }),
                ],
            }),
            (0, i.jsx)(fd, { projectId: g }),
            (null != M || x?.analytics != null) &&
                (0, i.jsxs)(dB, {
                    title: ev.intl.string(ex.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(dK, {
                                        label: ev.intl.string(ex.default.CLXHAs),
                                        value: dT(M.instance_since),
                                        hint: ev.intl.string(ex.default.UCwUEX),
                                    }),
                                    (0, i.jsx)(dK, {
                                        label: ev.intl.string(ex.default["8V8e1Z"]),
                                        value: dP(M.sockets),
                                    }),
                                    (0, i.jsx)(dK, {
                                        label: ev.intl.string(ex.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? ev.intl.string(ex.default.Wv025I)
                                            : ev.intl.string(ex.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, i.jsx)(dK, {
                                            label: ev.intl.string(ex.default["3oUYnv"]),
                                            value: dP(M.queued_messages),
                                        }),
                                ],
                            }),
                        x?.analytics != null && (0, i.jsx)(dW, { analytics: x.analytics }),
                    ],
                }),
            null != _ &&
                (0, i.jsxs)(dB, {
                    title: ev.intl.string(ex.default["LEIhp/"]),
                    children: [
                        (0, i.jsx)(dK, {
                            label: ev.intl.string(ex.default.IlDBN3),
                            value: dP(_.max_subagent_iterations),
                        }),
                        (0, i.jsx)(dK, {
                            label: ev.intl.string(ex.default["ZdzKR+"]),
                            value: ev.intl.formatToPlainString(ex.default.yHJxuP, {
                                count: dP(_.context_window_tokens),
                            }),
                        }),
                        (0, i.jsx)(dK, {
                            label: ev.intl.string(ex.default.cIhN2W),
                            value: ev.intl.formatToPlainString(ex.default.yHJxuP, {
                                count: dP(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, i.jsx)(dK, {
                            label: ev.intl.string(ex.default["+fOn/q"]),
                            value: dP(_.max_user_message_chars),
                        }),
                        (0, i.jsx)(dK, { label: ev.intl.string(ex.default.kIHga0), value: dP(_.max_build_attempts) }),
                        (0, i.jsx)(dK, { label: ev.intl.string(ex.default.Iw03yW), value: dP(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fg = n(237528),
    fp = n(629584),
    fx = n(531893);
function fv(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, i.jsx)("div", {
              className: fx.ut,
              children: (0, i.jsx)(p.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: ev.intl.string(ex.default.h1SE6R),
              }),
          });
}
function fb(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, i.jsxs)("div", {
              className: fx.qf,
              children: [
                  (0, i.jsx)(p.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: ev.intl.string(ex.default.h1SE6R),
                  }),
                  (0, i.jsx)(p.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: ev.intl.string(ex.default["8SErdg"]),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: fx.qf,
              children: [
                  (0, i.jsx)(p.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fj(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, i.jsx)("div", {
              className: fx.ps,
              children: (0, i.jsx)(p.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: ev.intl.string(ex.default.V7Ri8H),
              }),
          })
        : null;
}
var fy = n(109079);
let fk = a.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = a.useState(!1),
        o = a.useId(),
        u = a.useMemo(
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
        className: fy.vK,
        children: [
            (0, i.jsx)(p.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: fy.Mt,
                selectable: !0,
                children: c2(n.ts) ?? n.ts,
            }),
            (0, i.jsx)(p.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fy.dm,
                children: n.level,
            }),
            (0, i.jsxs)("div", {
                className: fy.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, i.jsx)("span", { className: fy.Cq, children: (0, i.jsx)(fg.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, i.jsx)("span", {
                            className: fy.Cq,
                            title: n.build ?? void 0,
                            children: (0, i.jsx)(fg.v, {
                                text: ev.intl.string(ex.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, i.jsxs)(p.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, i.jsxs)(e5.D, {
                                      className: fy.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": ev.intl.string(ex.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, i.jsx)(nE.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, i.jsx)(n_.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, i.jsxs)(p.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  ev.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? ex.default.kUhyUv
                                                          : ex.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, i.jsx)(p.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: fy.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, i.jsx)(p.E, {
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
function fw(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cQ.A], () => cQ.A.getLogs(t), [t]),
        l = (0, c.bG)([cQ.A], () => cQ.A.getHistoryState(t, "logs")),
        [r, s] = a.useState("all"),
        [o, u] = a.useState(""),
        d = a.useMemo(() => {
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
                dD.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return d$(e);
                            case "web":
                                return ev.intl.string(ex.default.IVzfVV);
                            default:
                                return ev.intl.string(ex.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, i.jsxs)("div", {
        className: fy.$F,
        children: [
            (0, i.jsxs)("div", {
                className: fy.y4,
                children: [
                    (0, i.jsx)(fp.I, {
                        look: "pill",
                        "aria-label": ev.intl.string(ex.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, i.jsx)("div", {
                        className: fy.KT,
                        children: (0, i.jsx)(cJ.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: ev.intl.string(ex.default["m2+37Y"]),
                            "aria-label": ev.intl.string(ex.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, i.jsx)(fv, { state: l }),
            (0, i.jsxs)(nx.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: fy.sx,
                children: [
                    (0, i.jsx)(fj, { state: l }),
                    0 === n.length
                        ? (0, i.jsx)(fb, {
                              state: l,
                              emptyTitle: ev.intl.string(ex.default.S7qlPG),
                              emptyBody: ev.intl.string(ex.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, i.jsx)(p.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: ev.intl.string(ex.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, i.jsx)(fk, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fA(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, i.jsx)(a.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, i.jsx)(a.Fragment, { children: r("stable", l) }, "stable")),
        (0, i.jsx)(dB, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, i.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ev.intl.string(ex.default.umcjif),
                      }),
        })
    );
}
function fS(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(dK, {
                      label: ev.intl.formatToPlainString(ex.default["01ZMS4"], { env: d$(n) }),
                      value: ((t = l.connected), ev.intl.string(t ? ex.default.Wv025I : ex.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, i.jsx)(dK, {
                      label: ev.intl.string(ex.default["z1dh+F"]),
                      value: dP(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dT(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, i.jsx)(dK, { label: ev.intl.string(ex.default.Iz5GnJ), value: dP(l.guild_count) }),
                  (0, i.jsx)(dK, {
                      label: ev.intl.string(ex.default["7UqtNv"]),
                      value: dP(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ev.intl.formatToPlainString(ex.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dT(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, i.jsx)(dK, {
                          label: ev.intl.string(ex.default["x3+JXJ"]),
                          value: dP(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, i.jsx)(dK, { label: d$(n), value: ev.intl.string(ex.default.lTHQss) });
}
function fC(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, i.jsx)(dK, {
        label: d$(t),
        value: ev.intl.formatToPlainString(ex.default["Xq+wHT"], {
            requests: dP(n.requests),
            failures: dP(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ev.intl.formatToPlainString(ex.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dT(n.last_failure.at),
                  })
                : ev.intl.formatToPlainString(ex.default["7KlGT6"], { time: dT(n.since) }),
    });
}
function fN(e) {
    let { env: t, runtime: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dK, {
                label: ev.intl.formatToPlainString(ex.default["92gVTm"], { env: d$(t) }),
                value: dP(n.connections),
            }),
            n.schedules.map((e) =>
                (0, i.jsx)(
                    dK,
                    {
                        label: ev.intl.formatToPlainString(ex.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ev.intl.formatToPlainString(ex.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ev.intl.formatToPlainString(ex.default.wxAWNv, { time: dT(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fI(e) {
    let { env: t, metrics: n } = e;
    return (0, i.jsx)(dK, {
        label: d$(t),
        value: ev.intl.formatToPlainString(ex.default.suAOj9, { calls: dP(n.calls), errors: dP(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fE(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, i.jsx)(dB, {
            title: t,
            children: (0, i.jsx)(p.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: ev.intl.string(ex.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        a = n.cpu_ms_total > 0;
    return (0, i.jsxs)(dB, {
        title: t,
        children: [
            (0, i.jsx)(dK, {
                label: ev.intl.string(ex.default.xtD4Zp),
                value: dP(n.requests),
                hint: ev.intl.formatToPlainString(ex.default["7KlGT6"], { time: dT(n.since) }),
            }),
            (0, i.jsx)(dK, { label: ev.intl.string(ex.default.gfRhR3), value: dP(n.errors), critical: n.errors > 0 }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(dH, {
                              label: ev.intl.string(ex.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dR,
                          }),
                          (0, i.jsx)(dK, {
                              label: ev.intl.string(ex.default.mSKImM),
                              value: dR(r),
                              hint: ev.intl.formatToPlainString(ex.default.JqMU05, {
                                  total: dR(n.cpu_ms_total),
                                  wall: dR(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(dK, {
                      label: ev.intl.string(ex.default.LEJ5r3),
                      value: ev.intl.string(ex.default["2Ekb2b"]),
                      hint: ev.intl.string(ex.default.G0aq7i),
                  }),
            !a &&
                n.wall_ms_total > 0 &&
                (0, i.jsx)(dK, { label: ev.intl.string(ex.default.xvmL1D), value: dR(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, i.jsx)(dK, {
                    label: ev.intl.string(ex.default["4sQYwH"]),
                    value: dP(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, i.jsx)(dK, {
                label: ev.intl.string(ex.default.bQenOy),
                value: dP(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ev.intl.formatToPlainString(ex.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, i.jsx)(dK, { label: ev.intl.string(ex.default.xgpn4Y), value: dL(n.build) }),
        ],
    });
}
function f_(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: ev.intl.string(ex.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ev.intl.string(ex.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ev.intl.string(ex.default.eiAi57), metrics: n },
              ];
    return (0, i.jsx)(dB, {
        title: ev.intl.string(ex.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, i.jsx)(dK, { label: n, value: "\u2014" }, t)
                : (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)(dK, {
                                  label: ev.intl.formatToPlainString(ex.default.u7kJJ4, { env: n }),
                                  value: dM(l.r2_bytes),
                                  hint: ev.intl.formatToPlainString(
                                      l.r2_truncated ? ex.default.lH0oQw : ex.default.m9h02S,
                                      { count: dP(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, i.jsx)(dH, {
                                      label: ev.intl.formatToPlainString(ex.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dM,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fM(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: fo.Mf,
        children: [
            (0, i.jsx)(dU, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(fE, {
                            title: ev.intl.string(ex.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(fE, {
                            title: ev.intl.string(ex.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(f_, { status: t }),
                        null != t.bot &&
                            (0, i.jsx)(fA, {
                                title: ev.intl.string(ex.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fS, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, i.jsx)(fA, {
                                title: ev.intl.string(ex.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fC, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, i.jsx)(fA, {
                                title: ev.intl.string(ex.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fN, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, i.jsx)(fA, {
                                title: ev.intl.string(ex.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fI, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, i.jsx)(dV, { analytics: t.analytics }),
                        (0, i.jsxs)(dB, {
                            title: ev.intl.string(ex.default.fQMpFp),
                            children: [
                                (0, i.jsx)(dK, {
                                    label: ev.intl.string(ex.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dL(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, i.jsx)(dK, {
                                    label: ev.intl.string(ex.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dL(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fR = n(592465);
function fP(e) {
    let { projectId: t, onClose: n } = e,
        l = eA(),
        [r, s] = a.useState(() => (l && ey?.projectId === t ? "trace" : "logs")),
        o = (0, c.bG)([u9.A], () => u9.A.getStatus(t), [t]),
        u = (0, c.bG)([u9.A], () => u9.A.getFetchState(t), [t]),
        d = a.useCallback(() => {
            ((0, cZ.R7)(t), (0, cZ.DK)(t));
        }, [t]);
    (a.useEffect(() => d(), [d]), a.useEffect(() => (0, eb.Rw)(t), [t]));
    let f = a.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ey || ey.projectId !== e) return null;
            let { traceId: t } = ey;
            return ((ey = null), t);
        })(t);
        return null != e && (dN(t, e), !0);
    }, [t, l]);
    (a.useEffect(() => {
        f();
    }, [f]),
        ek(t, () => {
            f() && s("trace");
        }));
    let m = a.useCallback(() => {
            (0, uO.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: u9.A.getStatus(t),
                        last_turn_usage: u9.A.getLastTurnUsage(t),
                        last_compaction: u9.A.getLastCompaction(t),
                        last_compaction_decline: u9.A.getLastCompactionDecline(t),
                        timing_traces: u9.A.getTimingTraces(t),
                        logs: cQ.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eh.P0)({ text: ev.intl.string(ex.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = ev.intl.string(ex.default["Q4FN+H"]);
    return (0, i.jsxs)("section", {
        className: fR.nd,
        "aria-label": h,
        children: [
            (0, i.jsxs)(tE.Ay, {
                "aria-label": h,
                toolbar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tE.Ay.Icon, {
                            icon: uD.CopyIcon,
                            tooltip: ev.intl.string(ex.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, i.jsx)(tE.Ay.Icon, {
                            icon: e8.XSmallIcon,
                            tooltip: ev.intl.string(ev.t.cpT0Cq),
                            onClick: n,
                        }),
                    ],
                }),
                children: [
                    (0, i.jsx)(tE.Ay.ChannelIcon, { icon: uF.BugIcon, "aria-hidden": !0 }),
                    (0, i.jsx)(tE.Ay.Title, { children: h }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: fR.rf,
                children: [
                    (0, i.jsxs)(cY.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": ev.intl.string(ex.default.RvvWIh),
                        className: fR.vR,
                        children: [
                            (0, i.jsx)(cY.V.Item, { id: "logs", children: ev.intl.string(ex.default["+VRYCm"]) }),
                            (0, i.jsx)(cY.V.Item, { id: "worker", children: ev.intl.string(ex.default["50D0FZ"]) }),
                            (0, i.jsx)(cY.V.Item, { id: "agent", children: ev.intl.string(ex.default.UkbTK1) }),
                            l ? (0, i.jsx)(cY.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, i.jsx)(fw, { projectId: t })
                        : "worker" === r
                          ? (0, i.jsx)(fM, { status: o, fetchState: u, onRefresh: d })
                          : "trace" === r && l
                            ? (0, i.jsx)(d_, { projectId: t })
                            : (0, i.jsx)(fh, { projectId: t, status: o, fetchState: u, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fT = n(365912),
    fL = n(873715);
function f$(e) {
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
let fD = Object.freeze({ x: -1, y: -1 });
function fq(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = f$(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fF = n(192888);
function fO(e, t) {
    return (0, fF.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fq, () => ({ status: "failed" }));
}
var fG = n(108308);
let fz = { x: 25, y: 21 };
function fU(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fB(e, t, n, l) {
    let r = fU(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fK(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fH(e) {
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
function fW(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: f } = G(o),
        m = (0, eS.Zv)(o),
        h = (0, eE.Rv)(),
        g = (0, c.bG)([n9.default], () => n9.default.getCurrentUser()),
        x = g?.id ?? null,
        [v, b] = a.useState(null),
        [j, y] = a.useState(!1),
        [E, _] = a.useState(!1),
        [M, R] = a.useState(null),
        [L, $] = a.useState(!1),
        O = a.useRef(null),
        z = a.useRef(null),
        U = a.useRef(null),
        [B, K] = a.useState(null),
        [H, W] = a.useState(!1),
        [V, X] = a.useState(null),
        [Y, Q] = a.useState(null),
        Z = a.useRef(!1),
        [J, ee] = a.useState(!1),
        [et, en] = a.useState(null),
        er = u && !m && !h;
    null == V || (er && V.projectId === o) || X(null);
    let ei = V?.projectId ?? null;
    a.useEffect(() => {
        if (null != ei) return () => (0, nY.xJ)(ei, "design");
    }, [ei]);
    let ea = tz(r, er);
    a.useEffect(() => {
        if (!er || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void _(!0);
        (y(!0), _(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fL.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fH(t.response) : null;
                    null == n ? _(!0) : (b(n), q(o, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), _(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [er, r, o]);
    let eo = a.useRef(null);
    (a.useEffect(() => {
        if (!er || null == ea || null == o) return;
        if (null == v) {
            eo.current = ea;
            return;
        }
        if (tG(eo.current, ea)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            eo.current = ea;
            let t = [];
            for (let e = 0; e < f.length; e += 24) t.push(f.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fL.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ef.current) return;
                        let l = fH(e.response);
                        null != l && (b(l), q(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = f$(e.element);
                            null != i && r.set(l.id, i);
                        }),
                            (n = P(o)).active &&
                                0 !== r.size &&
                                T(o, {
                                    ...n,
                                    annotations: n.annotations.map((e) => {
                                        let t = r.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [er, ea, v, f, o, r]),
        a.useEffect(() => {
            if (!er)
                return () => {
                    (R(null), X(null), en(null), b(null));
                };
        }, [er]));
    let eu = a.useRef(null),
        ec = a.useRef(null),
        ed = a.useRef(!1),
        ef = a.useRef(!1);
    a.useEffect(() => {
        ((ef.current = er), er || ((eu.current = null), (ec.current = null), (U.current = null), $(!1)));
    }, [er]);
    let em = a.useCallback(
            function e() {
                if (ed.current) return;
                let t = eu.current;
                if (null == t) return;
                eu.current = null;
                let n = r();
                null != n &&
                    ((ed.current = !0),
                    fO(n, t).then((t) => {
                        if (((ed.current = !1), ef.current)) {
                            if ("picked" !== t.status || fJ(t.target, ey.current.rect, ey.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? R(null)
                                    : "unsupported" === t.status && W(!0);
                            else {
                                let e = A(t.target);
                                (K((t) => (fZ(t, e) ? t : e)),
                                    R((e) => {
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
        eh = a.useCallback(() => {
            if (null == V) return;
            let e = !Z.current;
            (Q({ at: V.at, label: V.label, draft: V.draft, instant: e }), ee(e), X(null));
        }, [V]);
    (a.useEffect(() => {
        if (!J) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [J]),
        a.useEffect(() => {
            if (null == Y) return;
            let e = setTimeout(() => Q(null), fY);
            return () => clearTimeout(e);
        }, [Y]));
    let eg = null == v || null == ea || v.viewport.width < 1 ? 1 : ea.width / v.viewport.width,
        ep = null != v || E,
        ej = a.useMemo(() => v?.elements ?? [], [v]),
        ey = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        ey.current = { rect: ea, scale: eg };
    }, [ea, eg]);
    let ek = a.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, nY.xJ)(o, "design"),
                    en(null),
                    (Z.current = !1),
                    X({ projectId: o, target: e, anchor: t, draft: "", at: n, label: A(e) }));
            },
            [o],
        ),
        ew = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / eg, y: (e.clientY - t.top) / eg }), [eg]),
        eA = a.useCallback(() => {
            let e = U.current;
            if (null == e) return;
            let t = O.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = z.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(eA);
    let eC = a.useCallback(
            (e) => {
                if (null == ea || null != et) return;
                if (((U.current = { x: e.clientX, y: e.clientY }), eA(), $(!0), null != V)) {
                    (Math.abs(e.clientX - V.at.x) > fQ || Math.abs(e.clientY - V.at.y) > fQ) && (Z.current = !0);
                    return;
                }
                if (!ep) return void R(null);
                let t = ew(e, ea);
                if (H) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let i of e) {
                                let { x: e, y: a, width: s, height: o } = i.rect;
                                if (s < 1 || o < 1 || t < e || n < a || t > e + s || n > a + o) continue;
                                let u = s * o;
                                u < r && ((l = i), (r = u));
                            }
                            return l;
                        })(ej, t.x, t.y),
                        n = null != e && fJ(e, ea, eg) ? null : e;
                    if (null != n) {
                        let e = A(n);
                        K((t) => (fZ(t, e) ? t : e));
                    }
                    R((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ec.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ec.current = n), (eu.current = n), em());
            },
            [ea, eg, ep, ew, H, ej, V, et, eA, em],
        ),
        eN = null == et ? null : f.find((e) => e.id === et.id),
        eI = er && (L || V?.target.marker != null || eN?.target.marker != null);
    a.useEffect(() => {
        if (eI)
            return () => {
                let e = r();
                null != e && fO(e, fD);
            };
    }, [eI, r]);
    let e_ = a.useCallback(() => {
        ($(!1), R(null), (ec.current = null), (eu.current = null));
    }, []);
    a.useEffect(() => {
        if (!er || !L || !ep || H || null != V || null != et) return;
        let e = U.current,
            { rect: t, scale: n } = ey.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ec.current = l), (eu.current = l), em());
    }, [er, L, ep, H, V, et, em]);
    let eM = a.useCallback(
            (e) => {
                if (null != V || null != et) {
                    (eh(), en(null));
                    return;
                }
                if (null == M || null == ea) return;
                let t = ew(e, ea);
                ek(
                    M,
                    (function (e, t, n) {
                        let { x: l, y: r, width: i, height: a } = e.rect;
                        return i < 1 || a < 1
                            ? k
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - r) / a)) };
                    })(M, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [M, ea, ew, V, et, ek, eh],
        ),
        eR = a.useCallback(() => {
            null != o && (R(null), el(o)?.active === !0 ? es(o) : D(o));
        }, [o]),
        eP = a.useCallback(() => {
            null != o &&
                (null != V
                    ? eh()
                    : et?.confirmingRemove === !0
                      ? en({ ...et, confirmingRemove: !1 })
                      : null != et
                        ? en(null)
                        : eR());
        }, [o, V, et, eh, eR]),
        eT = a.useRef(eP),
        eL = a.useRef(o),
        e$ = a.useRef(eR);
    a.useLayoutEffect(() => {
        ((eT.current = eP), (eL.current = o), (e$.current = eR));
    });
    let eD = a.useRef(null);
    a.useEffect(() => {
        if (er)
            return (
                tP.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        tP.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eT.current());
        }
        function t(e) {
            let t = e.target;
            !(0, tR.vq)(t) ||
                eD.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fT.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eL.current || el(eL.current)?.active !== !0) && e$.current());
        }
    }, [er, s]);
    let eq = a.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eP());
                    return;
                }
                if (null != V || null != et || 0 === ej.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == M ? -1 : ej.findIndex((e) => e.ref === M.ref);
                    R(ej[(n + (t ? 1 : -1) + ej.length) % ej.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != M &&
                    (e.preventDefault(),
                    ek(M, k, { x: (ea?.left ?? 0) + M.rect.x * eg, y: (ea?.top ?? 0) + M.rect.y * eg }));
            },
            [o, V, et, ej, M, ek, eP, ea, eg],
        ),
        eF = a.useCallback(
            (e) => {
                null == o ||
                    null == V ||
                    ((w(V.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, eb.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = A(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${N}${r}${I}${C(e)}
${t.trim()}`;
                            })(V.target, V.draft),
                            e,
                        ),
                        eh(),
                        R(null)));
            },
            [o, V, eh],
        ),
        eO = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, tT.vX)(o, e)), [o]),
        eG = a.useCallback(() => {
            if (null != o && null != et && null != x && w(et.draft)) {
                var e, t;
                let n, l;
                ((e = et.id),
                    (t = et.draft.trim()),
                    null != (l = (n = P(o)).annotations.find((t) => t.id === e)) &&
                        F(l, x) &&
                        T(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    en({ ...et, editing: !1 }));
            }
        }, [o, et, x]),
        ez = a.useCallback(() => {
            if (null != o && null != et && null != x) {
                var e;
                let t, n;
                ((e = et.id),
                    null != (n = (t = P(o)).annotations.find((t) => t.id === e)) &&
                        F(n, x) &&
                        T(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    en(null));
            }
        }, [o, et, x]),
        eU = u
            ? j
                ? ev.intl.string(ex.default["Eb/YV9"])
                : E
                  ? ev.intl.string(ex.default.FD30bh)
                  : ev.intl.formatToPlainString(ex.default.dTSqLF, { count: f.length })
            : "",
        eB = er && null != ea,
        eK = L && null == et,
        eH = V?.target ?? eN?.target ?? null,
        eW = V ?? Y,
        eV = V ?? (Y?.instant === !0 ? null : Y),
        eX =
            null != eN && null != ea
                ? (function (e, t) {
                      let { left: n, top: l } = fK(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fB(eN.target, eN.anchor, ea, eg), ea)
                : null;
    return (
        a.useEffect(() => {
            let e = r();
            if (eN?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eN;
            fO(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eN, r]),
        (0, tM.createPortal)(
            (0, i.jsxs)("div", {
                ref: eD,
                className: fG.Li,
                children: [
                    (0, i.jsx)(nI.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eU,
                    }),
                    eB
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: fG.MT,
                                      style: { left: ea.left, top: ea.top, width: ea.width, height: ea.height },
                                      "data-plain-cursor": eK ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ev.intl.string(ex.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: eC,
                                      onMouseLeave: e_,
                                      onClick: eM,
                                      onKeyDown: eq,
                                  }),
                                  null != M && null == M.marker && null == V && null == et
                                      ? (0, i.jsx)(f0, { box: fU(M, ea, eg) })
                                      : null,
                                  (0, i.jsx)("div", {
                                      ref: O,
                                      className: fG.aZ,
                                      children: (0, i.jsx)("div", {
                                          className: fG.xz,
                                          "data-shown": null != M && null == et && null == V ? "" : void 0,
                                          "data-instant": J ? "" : void 0,
                                          children: (0, i.jsxs)(p.E, {
                                              variant: "body-xs/medium",
                                              className: fG.Ux,
                                              children: [
                                                  null == B
                                                      ? null
                                                      : (0, i.jsx)("span", { className: fG.Tl, children: B.kind }),
                                                  null == B || "" === B.name
                                                      ? null
                                                      : (0, i.jsxs)("span", {
                                                            className: fG.kh,
                                                            children: [" ", B.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: z,
                                      className: fG.Y,
                                      children: eK ? (0, i.jsx)("div", { className: fG.u }) : null,
                                  }),
                                  null == eV
                                      ? null
                                      : (0, i.jsx)("div", {
                                            className: fG.aZ,
                                            style: {
                                                transform: `translate3d(${eV.at.x + 20}px, ${eV.at.y + 20}px, 0)`,
                                            },
                                            children: (0, i.jsx)("div", {
                                                className: fG.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == V ? "" : void 0,
                                                children: (0, i.jsxs)(p.E, {
                                                    variant: "body-xs/medium",
                                                    className: fG.Ux,
                                                    children: [
                                                        (0, i.jsx)("span", {
                                                            className: fG.Tl,
                                                            children: eV.label.kind,
                                                        }),
                                                        "" === eV.label.name
                                                            ? null
                                                            : (0, i.jsxs)("span", {
                                                                  className: fG.kh,
                                                                  children: [" ", eV.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eH && null == eH.marker
                                      ? (0, i.jsx)("div", {
                                            className: fG.D0,
                                            style: fU(eH, ea, eg),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  f.map((e, t) => {
                                      let n = fB(e.target, e.anchor, ea, eg),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, i.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fG.xL,
                                              style: { ...fK(n, ea), width: 24, height: 24 },
                                              "aria-label": ev.intl.formatToPlainString(ex.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: S(e.target),
                                              }),
                                              "aria-expanded": et?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == V && en(l);
                                              },
                                              onFocus: () => {
                                                  null == V && en(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), eh(), en(l));
                                              },
                                              children: (0, i.jsx)(fV, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eW || null == o
                                      ? null
                                      : (0, i.jsx)(tF, {
                                            projectId: o,
                                            at: { x: eW.at.x + 20, y: eW.at.y + 20 },
                                            bounds: ea,
                                            kind: eW.label.kind,
                                            value: eW.draft,
                                            canSubmit: null != V && w(eW.draft),
                                            onChange: (e) => {
                                                null != V && X({ ...V, draft: e });
                                            },
                                            onSubmit: eF,
                                            onDismiss: eh,
                                            onUploadFile: eO,
                                            closing: null == V,
                                        }),
                                  null != eN && null != et && null != eX
                                      ? (0, i.jsxs)(fX, {
                                            point: eX,
                                            frame: ea,
                                            authorId: eN.authorId,
                                            title: S(eN.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                et.confirmingRemove ? en({ ...et, confirmingRemove: !1 }) : en(null);
                                            },
                                            onMouseLeave: () => {
                                                et.editing || et.confirmingRemove || en(null);
                                            },
                                            children: [
                                                et.editing
                                                    ? (0, i.jsx)(n1.f, {
                                                          autoFocus: !0,
                                                          label: ev.intl.string(ex.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: et.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => en({ ...et, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eG());
                                                          },
                                                      })
                                                    : (0, i.jsx)(p.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: fG.aC,
                                                          children: eN.comment,
                                                      }),
                                                F(eN, x)
                                                    ? (0, i.jsx)("div", {
                                                          className: fG.eB,
                                                          children: et.confirmingRemove
                                                              ? (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(p.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fG.nv,
                                                                            children: ev.intl.string(ex.default.wOHvts),
                                                                        }),
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ev.intl.string(ex.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                en({ ...et, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ev.intl.string(ex.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: ez,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(d.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ev.intl.string(ex.default.friIzR),
                                                                            onClick: () =>
                                                                                en({
                                                                                    ...et,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        et.editing
                                                                            ? (0, i.jsx)(d.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !w(et.draft),
                                                                                  text: ev.intl.string(
                                                                                      ex.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eG,
                                                                              })
                                                                            : (0, i.jsx)(d.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ev.intl.string(
                                                                                      ex.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      en({
                                                                                          ...et,
                                                                                          editing: !0,
                                                                                          draft: eN.comment,
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
function fV(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([n9.default], () => n9.default.getUser(t), [t]);
    return (0, i.jsx)(as.eu, {
        src: null == n ? null : au.Ay.getUserAvatarURL(n),
        size: ao._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fX(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: x } = e,
        v = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(fz);
    a.useLayoutEffect(() => {
        let e = v.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
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
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${S}px` };
    return (0, i.jsxs)("div", {
        ref: v,
        className: fG.Nr,
        style: C,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, i.jsxs)("div", {
                className: fG.MY,
                children: [
                    (0, i.jsx)("span", { ref: b, className: fG.ip, children: (0, i.jsx)(fV, { authorId: d }) }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: fG.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: fG.zI, children: x }),
        ],
    });
}
let fY = 300,
    fQ = 2;
function fZ(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fJ(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function f0(e) {
    let { box: t } = e;
    return (0, i.jsx)("div", { className: fG.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var f1 = n(318774),
    f2 = n(91242),
    f3 = n(697744),
    f4 = n(130324);
function f5(e) {
    let t = (0, f3.c)(),
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
    let r = (0, nj.j)();
    return (
        a.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function f7(e) {
    let { className: t } = e,
        { Component: n, events: l } = f5(3e4);
    return (0, i.jsxs)("div", {
        className: u()(t, f4.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, i.jsx)(p.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: f4.ol,
                children: ev.intl.string(ex.default.AyiQEp),
            }),
        ],
    });
}
var f8 = n(251363),
    f9 = n(944142),
    f6 = n(532247),
    me = n(501628);
function mt(e) {
    let { progress: t } = e,
        { Component: n } = f5(1500),
        l = ew.Q_.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, i.jsx)(p.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, i.jsx)("div", {
                className: me.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, i.jsx)(
                        "span",
                        {
                            className: me.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, i.jsx)(p.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mn(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([f9.A], () => (s ? f9.A.getLiveReload(t) : null), [s, t]),
        u = (0, tu.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        f = o?.background === !0,
        m = (function (e, t, n) {
            let l = (0, f6.dv)(e),
                [r, i] = a.useState(null),
                [s, o] = a.useState(l),
                [u, d] = a.useState(t);
            s !== l && (o(l), d(t), i(null != l || u ? null : (0, f6.QP)(e, s)));
            let f = (0, c.bG)(
                    [f2.A],
                    () => {
                        let e = f2.A.getFrame(n);
                        return (0, tf.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, f8.ow)(null, n) && e();
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
        })(d, f, u),
        h = f ? null : (0, f6.h_)(d, o?.step ?? null, m);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(nI.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, i.jsx)("div", {
                      className: me.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, i.jsx)(mt, { progress: h }),
                  })
                : null,
        ],
    });
}
let ml = 0;
var mr = n(782134),
    mi = n(357858),
    ma = n(343030),
    ms = n(11411),
    mo = n(111518),
    mu = n(240666);
let mc = { width: 1 / 0, height: 1 / 0 };
function md(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mc;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mf = n(702083);
function mm(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
        })),
        r = a.useRef(null),
        [s, o] = a.useState(null);
    a.useLayoutEffect(() => {
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
        f = n ? md(l, d ?? void 0) : null;
    return (0, i.jsx)("div", {
        ref: r,
        className: u()(mf.dw, { [mf.PQ]: null != f }),
        children: (0, i.jsx)("div", { className: u()(mf.R9, { [mf.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var mh = n(347927);
function mg(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, i.jsxs)("div", {
        className: u()(mh.Bf, l && mh.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: mh.Ux,
                children: [
                    (0, i.jsx)(g.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, i.jsx)(p.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var mp = n(957272);
function mx(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: a, state: s } = (0, mo.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mu.A)(t, n), s === mo.n.Launched)) {
        let e = (0, i.jsx)(ms.A, { frameId: a.id, level: ma.A.WithinAppContent, className: mp.Z7, overlay: r });
        return (0, td.Q5)(n) ? (0, i.jsx)(mm, { children: e }) : e;
    }
    return (0, i.jsx)(mv, { state: s });
}
function mv(e) {
    let { state: t } = e;
    switch (t) {
        case mo.n.RenderingElsewhere:
            return (0, i.jsx)("div", {
                className: mp.qs,
                children: (0, i.jsx)(mg, {
                    title: ev.intl.string(ex.default["9kpdo7"]),
                    body: ev.intl.string(ex.default.iIA8Nj),
                }),
            });
        case mo.n.NoApplication:
            return (0, i.jsx)(f7, { className: mp.qs });
        case mo.n.DoesNotSupportSurface:
            return (0, i.jsx)("div", {
                className: mp.qs,
                children: (0, i.jsx)(mg, {
                    title: ev.intl.string(ex.default["7k4GyN"]),
                    body: ev.intl.string(ex.default.zdIy3R),
                }),
            });
        case mo.n.Error:
            return (0, i.jsxs)("div", {
                className: mp.qs,
                children: [
                    (0, i.jsx)(g.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: ev.intl.string(ex.default.lTPbnG),
                    }),
                    (0, i.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: mp.tj,
                        children: ev.intl.string(ex.default.e6GiAZ),
                    }),
                ],
            });
        case mo.n.AwaitingLaunch:
        case mo.n.Loading:
            return (0, i.jsx)("div", { className: mp.qs, children: (0, i.jsx)(x.y, {}) });
    }
}
var mb = n(308528),
    mj = n(334738),
    my = n(5206),
    mk = n(365971),
    mw = n(703462);
function mA(e) {
    let { message: t } = e;
    return (0, i.jsxs)("div", {
        className: mw.f,
        children: [
            (0, i.jsx)(eJ.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, i.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mS() {
    return (0, i.jsx)("div", { className: mw.f, children: (0, i.jsx)(x.y, {}) });
}
function mC(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, o] = a.useState(null),
        u = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([n7.A], () => (null != u ? n7.A.getChannel(u) : null), [u]);
    ((t = d?.id ?? null),
        a.useEffect(() => {
            null != t && mb.A.preload(lt.ME, t);
        }, [t]),
        (n = (0, c.bG)([u_.A], () => u_.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mk.Xg)();
            return (
                (0, mj.yl)(t, e),
                () => {
                    (0, mj.dm)(t, e);
                }
            );
        }, [t, n]));
    let [f, m] = a.useState(null),
        h = f === r;
    return (a.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, eD.CN)(l).then(
                (t) => {
                    e || o({ previewApplicationId: r, channelId: t });
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
        ? (0, i.jsx)(mA, { message: ev.intl.string(ex.default["VP/O8s"]) })
        : null == d
          ? (0, i.jsx)(mS, {})
          : (0, i.jsx)("div", {
                className: mw.g,
                children: (0, i.jsx)(my.A, { channel: d, guild: null, chatInputType: or.oU.SIDEBAR }, d.id),
            });
}
var mN = n(765671),
    mI = n(596977),
    mE = n(921853),
    m_ = n(582063);
function mM(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        a = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(a + e + r.length) % r.length];
        (0, eD.vX)(t, n?.id ?? null);
    }
    let o = ev.intl.string(ex.default.Gl3XtE),
        u = ev.intl.string(ex.default["3FvcrY"]);
    return (0, i.jsxs)("div", {
        className: m_.aF,
        children: [
            (0, i.jsx)(e7.m, {
                text: o,
                position: "top",
                children: (0, i.jsx)(tB.K, {
                    icon: mE.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(-1),
                }),
            }),
            (0, i.jsx)("div", {
                className: m_.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, i.jsx)(p.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: ev.intl.formatToPlainString(ex.default["140n5k"], {
                                  name: l.name,
                                  index: a + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, i.jsx)(p.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: ev.intl.string(ex.default.wVJL0P),
                          }),
            }),
            (0, i.jsx)(e7.m, {
                text: u,
                position: "top",
                children: (0, i.jsx)(tB.K, {
                    icon: n_.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var mR = n(666476);
let mP = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mT() {
    (0, eh.P0)({ text: ev.intl.string(ex.default.jj3abP), variant: "critical" });
}
function mL(e) {
    let { projectId: t } = e,
        n = a.useRef(null),
        l = a.useRef(null),
        r = ev.intl.string(ex.default["xd/1IW"]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(tb.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(m$, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, i.jsx)("div", {
                        ref: n,
                        className: m_.m2,
                        children: (0, i.jsx)(e7.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, i.jsx)(tB.K, {
                                "aria-label": r,
                                icon: f.SettingsIcon,
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
                accept: mP.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mP.includes(n.type)
                                ? n.size > mR.aI
                                    ? (0, eh.P0)({ text: ev.intl.string(ex.default.T8Spiu), variant: "critical" })
                                    : (0, iw.M$)(t, n).catch(mT)
                                : (0, eh.P0)({ text: ev.intl.string(ex.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function m$(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([ik.A], () => ik.A.getBackground(t)),
        a = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, i.jsxs)(ce.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": ev.intl.string(ex.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, i.jsxs)(ct.rX, {
                children: [
                    (0, i.jsx)(ct.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: ev.intl.string(ex.default.uQpDky),
                        icon: l1.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, i.jsx)(ct.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: ev.intl.string(ex.default.AiAz8J),
                        icon: d8.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, iw.Og)(t).catch(mT));
                        },
                    }),
                ],
            }),
            (0, i.jsx)(ct.rX, {
                children: (0, i.jsx)(ct.fP, {
                    id: "conjure-overlay-background-blur",
                    label: ev.intl.string(ex.default["hyN+kc"]),
                    checked: a,
                    action: () => {
                        (0, iw.Y1)(t, !a) || mT();
                    },
                }),
            }),
        ],
    });
}
function mD(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: o, height: u } = (0, mN.Ay)(),
        { captures: c, selected: d } = iy(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: ez({ width: l - 48, height: r - 48 }, n) };
            let i = t.width / t.height,
                a = Math.min(l, r * i),
                s = a / 1920,
                o = ez({ width: 1872, height: 1920 / i - 48 }, n);
            return { top: (r - a / i) / 2 + 24 * s, end: (l - a) / 2 + 24 * s, scale: o * s };
        })({ width: o, height: u }, d, l);
    return (
        a.useEffect(() => (0, mI.L0)(), []),
        (0, i.jsxs)("div", {
            className: m_.JH,
            children: [
                (0, i.jsx)(iS, { projectId: n, gameCaptures: !0 }),
                (0, i.jsx)("div", {
                    ref: s,
                    className: m_.dw,
                    children: (0, i.jsx)("div", {
                        className: m_.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, i.jsx)(mx, { applicationId: t, surface: td.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, i.jsx)(mL, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, i.jsx)(mM, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function mq(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, i.jsx)(mg, {
        title: ev.intl.string(ex.default.xlEjZ8),
        body: ev.intl.string(ex.default["4ByPbd"]),
        children: (0, i.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: ev.intl.string(ex.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var mF = n(409478),
    mO = n(652227);
function mG(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: a,
            previewGate: s,
            availability: o,
            activeMode: u,
            widgetApplicationId: d,
            overlayWidgetSize: f = eO,
            projectId: m,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        v = (0, c.bG)([rp.A], () => null != m && null != rp.A.getSetupStartedAt(m), [m]);
    return s?.type === "checking"
        ? (0, i.jsx)("div", { className: mO.qs, children: (0, i.jsx)(x.y, {}) })
        : s?.type === "bot_install"
          ? (0, i.jsx)("div", {
                className: mO.qs,
                children: (0, i.jsx)(mq, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : a
            ? null == t
                ? null
                : (0, i.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mO.RG,
                      children: [
                          (0, eK.yf)(o, u)
                              ? g
                                  ? (0, i.jsx)(mz, { projectId: m, onResume: p })
                                  : (0, i.jsx)(mx, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === u && null != d
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, i.jsx)("div", {
                                        className: mO.qs,
                                        children: (0, i.jsx)(mg, {
                                            wide: !0,
                                            title: ev.intl.string(ex.default["08U+YO"]),
                                            body: ev.intl.string(ex.default.pKBfrc),
                                        }),
                                    })
                                  : (0, i.jsx)(mF.A, { applicationId: d })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, i.jsx)(mD, { applicationId: t, projectId: m, size: f, frameOverlay: h?.(tf.ZN) })
                              : null,
                          "bot" === u && null != n && null != m
                              ? (0, i.jsx)(mC, { projectId: m, previewApplicationId: n })
                              : null,
                      ],
                  })
            : v
              ? (0, i.jsx)("div", { className: mO.qs, children: (0, i.jsx)(x.y, {}) })
              : (0, i.jsx)(f7, { className: mO.qs });
}
function mz(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mi.Pu)(t),
        (0, i.jsx)("div", {
            className: mO.qs,
            children: (0, i.jsx)(mg, {
                wide: !0,
                title: ev.intl.string(ex.default.MMWEH2),
                body: ev.intl.string(ex.default.iKSu55),
                children:
                    null != n
                        ? (0, i.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mr.PlayIcon,
                              text: ev.intl.string(ex.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mU = n(175841),
    mB = n(156548),
    mK = n(750506),
    mH = n(867193),
    mW = n(539197),
    mV = n(977020);
function mX(e) {
    let { projectId: t } = e,
        n = (0, mW.X2)(t),
        l = (function (e) {
            let [t, n] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mW.Ie)(e);
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
    function f(e, t) {
        return { "--custom-conjure-cursor-x": `${e * d}px`, "--custom-conjure-cursor-y": `${t * d}px` };
    }
    return (0, i.jsxs)("div", {
        className: mV.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [mW.t$]: "",
        children: [
            n.presses > 0
                ? (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)("div", { className: u()(mV.hN, mV.vW), style: f(n.pressX, n.pressY) }),
                              (0, i.jsx)("div", { className: u()(mV.hN, mV.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, i.jsx)("svg", {
                className: u()(mV.UE, { [mV.SP]: n.shown, [mV.Vq]: n.pressed, [mV.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, i.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mY = n(417760);
function mQ(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([rE.A], () => null != e && rE.A.isThinking(e)),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(t);
            (t !== r && (i(t), t || l(!1)),
                a.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = a.useCallback(() => {
                null != e && (l(!0), (0, eb.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        o = (0, eS.CU)(n),
        f = "controlling" === t,
        m = ev.intl.string(f ? (o ? ex.default["VJW/5P"] : ex.default["+hD2Iz"]) : ex.default["h+i1r9"]),
        h =
            null != r
                ? (0, i.jsx)(d.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ev.intl.string(ex.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, i.jsxs)("div", {
              className: u()(mY.M0, mY.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  f
                      ? (0, i.jsx)(cw.i, { size: 12, color: "currentColor" })
                      : (0, i.jsx)(mU.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, i.jsx)(p.E, { variant: "body-sm/semibold", color: "none", className: mY.ID, children: m }),
                  f ? (0, i.jsx)(nI.A, { children: ev.intl.string(ex.default.fg1sor) }) : null,
                  f ? (0, i.jsx)("div", { className: mY.lC, children: h }) : null,
              ],
          })
        : (0, i.jsxs)("div", {
              className: mY.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, i.jsxs)("div", {
                      className: mY.sp,
                      children: [
                          (0, i.jsx)(mU.SparklesIcon, { size: "sm", color: "currentColor" }),
                          f ? (0, i.jsx)(cw.i, { size: 12, color: "currentColor" }) : null,
                          (0, i.jsxs)("div", {
                              className: mY.f4,
                              children: [
                                  (0, i.jsx)(p.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: mY.w9,
                                      children: m,
                                  }),
                                  f
                                      ? (0, i.jsx)(p.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: mY.Rb,
                                            children: ev.intl.string(ex.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  f ? (0, i.jsx)("div", { className: mY.lC, children: h }) : null,
              ],
          });
}
function mZ(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, eS.Zv)(null != n && n === l ? t : null),
        u = (function (e) {
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
        })(o),
        c = (0, eE.Rv)(),
        d = (0, mB.cR)(s);
    a.useEffect(() => {
        o && d && null != s && (0, mB.BL)(s);
    }, [o, d, s]);
    let [f, m] = a.useState(null),
        [h, g] = a.useState(null),
        [p, x] = a.useState(null),
        v = "idle" !== u;
    a.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tO(r());
            m((t) => (tG(t, e) ? t : e));
            let t = null == h ? null : tO(h);
            (x((e) => (tG(e, t) ? e : t)), null != h && (0, mH.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mH.C)(0));
            }
        );
    }, [v, r, h]);
    let b = "idle" !== u && null != f,
        j = b && "controlling" === u && !c,
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
            let [e] = a.useContext(mK.uY),
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
            b
                ? (0, i.jsx)("div", {
                      ref: g,
                      className: mY.D,
                      "data-phase": u,
                      children: (0, i.jsx)("div", {
                          className: mY.QF,
                          children: (0, i.jsx)(mQ, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, tM.createPortal)(
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(nI.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? ev.intl.string(ex.default.oWcemF)
                                : "handoff" === u
                                  ? ev.intl.string(ex.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            j
                ? (0, tM.createPortal)(
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: mY.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", {
                                  className: mY.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(mX, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var mJ = n(399503),
    m0 = n(853555),
    m1 = n(944100),
    m2 = n(327152),
    m3 = n(187645);
let m4 = { width: 1280, height: 720 },
    m5 = new Map(),
    m7 = !1;
function m8() {
    let e = new Map();
    for (let t of new Set([...rE.A.getActivityOrderedProjectIds(), ...(0, eS.T7)()])) {
        if (!(rE.A.isThinking(t) || (0, eS.wK)(t)) || eq.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ts.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, td.Rc)(t), (0, td.Th)(t)].find(tf.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...m5]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            m5.delete(t),
            n.unregisterLookup(),
            m1.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, m2.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        m5.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = m3.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    m9(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (m5.set(e, l),
                    (l.unregisterLookup = (0, m0.Ng)(e, () => (0, f8.n5)(n, t))),
                    m1.A.registerFrameTarget(t, n, ma.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of m5) m9(t.element, e, t.frameId);
}
function m9(e, t, n) {
    if (f2.A.getFrame(n)?.surface.type === eH.U.OVERLAY) {
        let l = eU(ts.Ay.getProject(t));
        (e.classList.remove(m3.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, m2.Pn)(n, l));
        return;
    }
    let l = tc.A.isBuilderPreviewMobile();
    e.classList.toggle(m3.L, !l);
    let r = l ? md(tc.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, m2.Pn)(n, r ?? m4));
}
var m6 = n(873727),
    he = n(47671),
    ht = n(418842),
    hn = n(413599);
let hl = 0;
var hr = n(487887);
let hi = null;
var ha = n(780338),
    hs = n(782603),
    ho = n(189714);
function hu(e) {
    let { projectId: t } = e,
        n = (0, ho.iI)(t),
        l = a.useRef(null),
        r = ev.intl.string(ev.t.h850Ss);
    return (0, i.jsx)(tb.Y, {
        targetElementRef: l,
        animation: tb.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(ce.W, {
                "data-menu-migrated": !0,
                navId: `conjure-project-notifications-${t}`,
                "aria-label": r,
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(ct.rX, {
                    children: (0, i.jsx)(ct.Dr, {
                        id: n ? "unmute" : "mute",
                        label: ev.intl.string(n ? ex.default.s9rCuH : ex.default["a+i/As"]),
                        action: () => (0, ho.$L)(t, !n),
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: a } = e,
                { isShown: s } = t;
            return (0, i.jsx)(tE.Ay.Icon, {
                ref: l,
                onClick: a,
                tooltip: s ? null : r,
                icon: n ? ha.BellSlashIcon : hs.BellIcon,
                "aria-label": r,
                "aria-haspopup": "menu",
                "aria-expanded": s,
                selected: s,
            });
        },
    });
}
var hc = n(541940);
function hd(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            mainClassName: o,
            header: d,
            controlBar: f,
            previewPanelId: m,
            previewPanelLabelledBy: h,
            content: g,
            sidebar: p,
            showsFrame: x,
            paused: v,
        } = e,
        [b, j] = a.useState(null),
        y = (0, tu.A)(l, s),
        k = y?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([hn.A], () => (0, m6.x4)(hn.A.theme)),
            l = (0, c.bG)([he.A], () => he.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([ai.Ay], () => ({
                reducedMotion: ai.Ay.useReducedMotion,
                fontScale: (0, m6.U0)(),
                highContrast: ai.Ay.isHighContrastModeEnabled,
                forcedColors: ai.Ay.useForcedColors,
                underlineLinks: ai.Ay.alwaysShowLinkDecorations,
            })),
            d = ew.hH.useSetting(),
            f = (0, c.bG)([s9.A], () => s9.A.hidePersonalInformation),
            m = (0, ht.C)(),
            h = (0, c.bG)(
                [f2.A, tc.A],
                () =>
                    tc.A.isBuilderPreviewMobile() &&
                    f2.A.getFrame(t)?.applicationId === tc.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = a.useRef(!1),
            p = a.useRef(!1),
            x = a.useRef(null),
            v = a.useCallback(() => {
                let l = (0, f8.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let a = {
                    revision: ++hl,
                    baseTheme: n,
                    customTheme: (0, m6.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                    formFactor: h,
                    hidePersonalInformation: f,
                };
                (0, fF.W)(l, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, i, h, t, f, s, d, e, r, m, u]),
            b = a.useRef(v);
        a.useLayoutEffect(() => {
            b.current = v;
        });
        let j = a.useCallback(() => {
            g.current ||
                ((g.current = !0),
                queueMicrotask(() => {
                    ((g.current = !1), p.current || b.current());
                }));
        }, []);
        (a.useEffect(
            () => (
                (p.current = !1),
                () => {
                    p.current = !0;
                }
            ),
            [],
        ),
            a.useEffect(() => {
                j();
            }, [l, j]),
            a.useLayoutEffect(() => {
                (v(), j());
            }, [j, v]),
            a.useLayoutEffect(() => {
                let n = (0, f8.n5)(e, t);
                null != n && n !== x.current && j();
            }),
            a.useEffect(() => {
                function n(n) {
                    n.target === (0, f8.n5)(e, t) && ((x.current = null), j());
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
    })(b, k),
        a.useEffect(() => {
            if (null != t) return (0, m0.Ng)(t, () => (0, f8.n5)(b, k));
        }, [t, b, k]));
    let w = a.useCallback(() => (0, f8.ow)(b, k), [b, k]),
        A = a.useCallback(() => (x ? (0, f8.ow)(b, k) : b), [x, b, k]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: u()(hc.Mh, o),
                children: [
                    d,
                    f,
                    v
                        ? null
                        : (0, i.jsx)(mZ, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: A,
                              frameId: k,
                          }),
                    (0, i.jsx)("div", {
                        ref: j,
                        id: m,
                        role: null == m ? void 0 : "tabpanel",
                        "aria-labelledby": h,
                        className: hc.fm,
                        children: g,
                    }),
                ],
            }),
            p,
            v
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(fW, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: w,
                              toggleRef: n,
                          }),
                          (0, i.jsx)(nh, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: w }),
                      ],
                  }),
        ],
    });
}
function hf(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: o,
            frameLaunchParams: d,
            header: f,
            controlBar: m,
            previewPanelId: h,
            previewPanelLabelledBy: g,
            chatOpen: p,
            onCloseChat: x,
            onRestoreVersion: v,
            onImportProject: b,
            debugOpen: j = !1,
            onCloseDebug: y,
            restoreState: k,
            previewReady: w,
            previewGate: A,
            availability: S,
            activeMode: C,
            widgetApplicationId: N,
            overlayWidgetSize: I,
            previewPaused: E = !1,
            onResumePreview: _,
        } = e;
    (0, mJ.k)(n, N);
    let M = o.type === eH.U.MAIN || (0, td.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
        }));
        a.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hr.aX.LANDSCAPE : hr.aX.PORTRAIT), (hi = e));
                else {
                    if (hi !== e) return;
                    ((l = hr.aX.UNHANDLED), (hi = null));
                }
                ug.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let R = a.useRef(null),
        [P, T] = a.useState(0);
    (a.useEffect(() => {
        if (null == n) return;
        (0, np.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, np.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = a.useRef(0)),
        a.useLayoutEffect(() => {
            M && ((t.current = ++ml), (0, eD.HV)(r));
        }, [r, M]),
        a.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === ml && (0, eD.HV)(null);
            };
        }, [r, M]),
        a.useEffect(() => {
            null != n &&
                ((0, eb.ensureConnection)(n),
                m7 ||
                    ((m7 = !0),
                    rE.A.addChangeListener(m8),
                    ts.Ay.addChangeListener(m8),
                    f2.A.addChangeListener(m8),
                    tc.A.addChangeListener(m8),
                    eq.A.addChangeListener(m8),
                    (0, eS.W3)(m8),
                    m8()));
        }, [n]),
        a.useLayoutEffect(() => {
            let e = R.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(450, P - 320),
        $ = (0, t_.P)({ maxWidth: L, minWidth: 450 }),
        D = p || M;
    return (0, i.jsx)("div", {
        className: hc.cL,
        children: (0, i.jsx)("div", {
            ref: R,
            className: hc.LB,
            children: (0, i.jsx)(hd, {
                projectId: n,
                designFeedbackToggleRef: l,
                applicationId: r,
                previewApplicationId: s,
                surface: o,
                header: f,
                controlBar: m,
                previewPanelId: h,
                previewPanelLabelledBy: g,
                showsFrame: (0, eK.yf)(S, C),
                paused: E,
                mainClassName: null == f ? void 0 : u()(hc.ez, { [hc.zt]: p }),
                content: (0, i.jsx)(mG, {
                    applicationId: r,
                    previewApplicationId: s,
                    surface: o,
                    frameLaunchParams: d,
                    previewReady: w,
                    previewGate: A,
                    availability: S,
                    activeMode: C,
                    widgetApplicationId: N,
                    overlayWidgetSize: I,
                    projectId: n,
                    paused: E,
                    onResume: _,
                    renderFrameOverlay: (e) =>
                        (0, i.jsx)(mn, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                }),
                sidebar:
                    null != n && D
                        ? (0, i.jsx)("div", {
                              className: p ? u()(hc.v7, { [hc.z4]: $, [hc.iu]: $ && null != m }) : hc.LL,
                              children: (0, i.jsx)(tI.A, {
                                  sidebarType: tI.X.CallChatSidebar,
                                  maxWidth: L,
                                  capturePointer: !0,
                                  children: (0, i.jsx)("div", {
                                      className: hc.cO,
                                      children: j
                                          ? (0, i.jsx)(fP, { projectId: n, onClose: y ?? (() => {}) }, n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(f1.Ay, { projectId: n }),
                                                    (0, i.jsx)(hm, { projectId: n, onClose: x }),
                                                    (0, i.jsx)("div", {
                                                        className: hc.cb,
                                                        children: (0, i.jsx)(
                                                            cX,
                                                            {
                                                                projectId: n,
                                                                restoreState: k,
                                                                onRestoreVersion: v,
                                                                onImportProject: b,
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
function hm(e) {
    let { projectId: t, onClose: n } = e,
        l = ev.intl.string(ex.default.vLoFRs),
        r = ev.intl.string(ex.default.JD6Oit);
    return (0, i.jsx)(tE.Ay, {
        "aria-label": l,
        toolbar: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(hu, { projectId: t }),
                (0, i.jsx)(tE.Ay.Icon, { icon: tN.PanelClosedIcon, tooltip: r, "aria-label": r, onClick: n }),
            ],
        }),
        children: (0, i.jsx)(tE.Ay.Title, { children: l }),
    });
}
var hh = n(473935),
    hg = n(785389),
    hp = n(889558),
    hx = n(860402);
let hv = new Set();
var hb = n(733791),
    hj = n(127139),
    hy = n(256616),
    hk = n(842615);
function hw(e) {
    (0, eh.P0)({ text: e, variant: "critical" });
}
function hA(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            isOwner: r,
            onExport: s,
            onHistory: o,
            onConnectTool: u,
            onToggleDebug: d,
            debugOpen: f,
            onCloseMenu: m,
        } = e,
        h = (0, hk.A)(t, n),
        g = (0, hb.CU)(t),
        { pending: p, connect: x } = (function (e, t) {
            let [n, l] = a.useState(hv),
                r = a.useRef(hv),
                i = a.useCallback((e) => {
                    ((r.current = (0, hg.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, hg.K9)(r.current, n.type);
                        null != a &&
                            ((r.current = a),
                            l(a),
                            (async function () {
                                let l = await (0, hx.JI)(e, n.type);
                                (i(n.type), "url" === l.type)
                                    ? (0, hp.h)({ href: l.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, hg.rq)(l.error)
                                              ? ev.intl.string(ex.default["jCQ/1B"])
                                              : ev.intl.string(ex.default.POxkSh),
                                      );
                            })().catch(() => i(n.type)));
                    },
                    [t, e, i],
                ),
            };
        })(t, hw),
        v = (0, c.bG)([rI.A], () => rI.A.getDeclaredConnections(t), [t]),
        b = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: ev.intl.string(ex.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ev.intl.formatToPlainString(ex.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ev.intl.formatToPlainString(ex.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: !1, refreshPending: !1, offers: a.useMemo(() => (0, hg.Xl)(v), [v]), connectPending: p }),
        j = a.useMemo(() => new Map(v.map((e) => [e.type, e])), [v]);
    return (0, i.jsxs)(ce.W, {
        "data-menu-migrated": !0,
        navId: `conjure-editor-actions-${t}`,
        "aria-label": ev.intl.string(ev.t.ogxXGq),
        onClose: m,
        onSelect: m,
        children: [
            (0, i.jsxs)(ct.rX, {
                children: [
                    (0, i.jsx)(ct.Dr, { id: "export", label: ev.intl.string(ex.default.WsEEP7), action: s }),
                    (0, i.jsx)(ct.Dr, { id: "history", label: ev.intl.string(ex.default["3hIVou"]), action: o }),
                ],
            }),
            uO.p5 || null != d
                ? (0, i.jsxs)(ct.rX, {
                      children: [
                          uO.p5
                              ? (0, i.jsx)(ct.Dr, {
                                    id: "copy-link",
                                    label: ev.intl.string(ev.t.WqhZss),
                                    icon: l2.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: l2.LinkIcon },
                                    action: () => (0, hj.V)(l, t),
                                })
                              : null,
                          uO.p5
                              ? (0, i.jsx)(ct.Dr, {
                                    id: "copy-project-id",
                                    label: ev.intl.string(ex.default["nm/zuU"]),
                                    icon: hh.IdIcon,
                                    leadingAccessory: { type: "icon", icon: hh.IdIcon },
                                    action: () => (0, hj.o)(t),
                                })
                              : null,
                          null != d
                              ? (0, i.jsx)(ct.sL, {
                                    id: "debug",
                                    label: ev.intl.string(ex.default.Mt5k9d),
                                    leftIcon: uF.BugIcon,
                                    leadingAccessory: { type: "icon", icon: uF.BugIcon },
                                    checked: f,
                                    action: d,
                                })
                              : null,
                      ],
                  })
                : null,
            null != u || b.length > 0
                ? (0, i.jsxs)(ct.rX, {
                      children: [
                          null != u
                              ? (0, i.jsx)(ct.Dr, {
                                    id: "connect-tool",
                                    label: ev.intl.string(ex.default.yOIql5),
                                    action: u,
                                })
                              : null,
                          b.map((e) =>
                              (0, i.jsx)(
                                  ct.Dr,
                                  {
                                      id: e.id,
                                      label: e.label,
                                      disabled: e.disabled,
                                      dontCloseOnAction: !0,
                                      action: () => {
                                          let t = null == e.connectionType ? null : j.get(e.connectionType);
                                          null != t && x(t);
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                      ],
                  })
                : null,
            r
                ? (0, i.jsxs)(ct.rX, {
                      children: [
                          g
                              ? (0, i.jsx)(ct.Dr, {
                                    id: "unpublish",
                                    label: ev.intl.string(ex.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let e = ts.Ay.getProject(t);
                                        null != e && (0, hy.A)({ project: e });
                                    },
                                })
                              : null,
                          (0, i.jsx)(ct.Dr, {
                              id: "delete",
                              label: ev.intl.string(ev.t.oyYWHE),
                              color: "danger",
                              action: h,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function hS(e) {
    let t = a.useRef(null),
        n = ev.intl.string(ev.t["UKOtz+"]);
    return (0, i.jsx)(tb.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tb.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)(hA, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: a } = l;
            return (0, i.jsx)(b.A.Icon, {
                ref: t,
                icon: aI.MoreHorizontalIcon,
                tooltip: a ? null : n,
                "aria-label": n,
                "aria-haspopup": "menu",
                "aria-expanded": a,
                selected: a,
                onClick: r,
            });
        },
    });
}
var hC = n(663417),
    hN = n(646270),
    hI = n(31300),
    hE = n(831453),
    h_ = n(872344),
    hM = n(64656),
    hR = n(766367),
    hP = n(113494),
    hT = n(86147),
    hL = n(729475),
    h$ = n(12470),
    hD = n(811893),
    hq = n(715482),
    hF = n(869146),
    hO = n(475815);
function hG(e) {
    let {
            projectId: t,
            previewPaused: n,
            pauseDisabled: l,
            onTogglePreviewPaused: r,
            drawing: a,
            fullscreenFrame: s,
            onTogglePopout: o,
            poppedOut: u,
            onCloseMenu: d,
        } = e,
        f = (function (e, t) {
            let n = (0, mB.cR)(e?.id ?? null),
                l = (0, eS.Zv)(t),
                r = (0, c.bG)(
                    [hF.A, f2.A],
                    () => null != e && hF.A.getWindowOpen(lt.MLl.ACTIVITY_POPOUT) && f2.A.getMainFrame()?.id === e.id,
                    [e],
                );
            if (!(0, tf.x1)(e) || r || l) return null;
            let i = (0, mB.fl)(e.id);
            return null != i && (0, hO.Ub)(i) ? { active: n, toggle: () => (0, mB.U8)(e.id) } : null;
        })(s, t),
        m = n ? mr.PlayIcon : hP.PauseIcon,
        h = f?.active === !0 ? hT.FullscreenExitIcon : hL.FullscreenEnterIcon,
        g = u ? h$.WindowReturnIcon : hD.WindowLaunchIcon,
        p = ev.intl.string(ex.default.WjdaFw);
    return (0, i.jsx)(ce.W, {
        "data-menu-migrated": !0,
        navId: `conjure-frame-actions-${t}`,
        "aria-label": ev.intl.string(ev.t.ogxXGq),
        onClose: d,
        onSelect: d,
        children: (0, i.jsxs)(ct.rX, {
            children: [
                (0, i.jsx)(ct.Dr, {
                    id: "toggle-pause",
                    icon: m,
                    leadingAccessory: { type: "icon", icon: m },
                    label: ev.intl.string(n ? ex.default.ZKd2Cw : ex.default.VHxerm),
                    subtext: a ? p : void 0,
                    disabled: l || a,
                    action: r,
                }),
                null != f
                    ? (0, i.jsx)(ct.Dr, {
                          id: "toggle-fullscreen",
                          icon: h,
                          leadingAccessory: { type: "icon", icon: h },
                          label: ev.intl.string(f.active ? ev.t.Z7MyNB : ev.t.OIDkcp),
                          action: f.toggle,
                      })
                    : null,
                null != o
                    ? (0, i.jsx)(ct.Dr, {
                          id: "toggle-popout",
                          icon: g,
                          leadingAccessory: { type: "icon", icon: g },
                          label: ev.intl.string(u ? ev.t["NKV/MO"] : ev.t["3Zypbv"]),
                          subtext: a && !u ? p : void 0,
                          disabled: a && !u,
                          action: o,
                      })
                    : null,
            ],
        }),
    });
}
function hz(e) {
    let t = a.useRef(null),
        n = ev.intl.string(ev.t["UKOtz+"]);
    return (0, i.jsx)(tb.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tb.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)(hG, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: a } = l;
            return (0, i.jsx)(tE.Ay.Icon, {
                ref: t,
                icon: hq.ChevronLargeDownIcon,
                tooltip: a ? null : n,
                "aria-label": n,
                "aria-haspopup": "menu",
                "aria-expanded": a,
                selected: a,
                onClick: r,
            });
        },
    });
}
var hU = n(705609);
function hB(e) {
    let {
            projectId: t,
            projectName: n,
            toolbar: l,
            activeMode: r,
            activeTarget: a,
            frameTarget: s,
            onCloseApp: o,
            widgetRefreshApplicationId: u,
            previewPaused: c,
            onTogglePreviewPaused: d,
            onTogglePopout: f,
            poppedOut: m,
            agentDrivingPreview: h,
            previewControlsBlocked: g,
            blockedPreviewControlLabel: p,
            previewPanelId: x,
            editToggle: v,
        } = e,
        {
            previewTargetOptions: b,
            handleSelectPreviewTarget: j,
            previewFrame: y,
            refreshFrame: k,
            isRefreshing: w,
            handleRefresh: A,
            mobilePreview: S,
            mobilePreviewLabel: C,
            handleToggleMobilePreview: N,
            landscapePreview: I,
            rotatePreviewLabel: E,
            handleRotatePreview: _,
        } = l,
        M = (0, hM.A)(y?.id),
        { pending: R, refresh: P } = (0, h_.A)(u),
        T = ef(t) && !c,
        L = null;
    if ("widget" === r) {
        if (null != u) {
            let e = ev.intl.string(ex.default["/nOi5n"]);
            L = (0, i.jsx)(tE.Ay.Icon, { icon: hC.RefreshIcon, tooltip: e, "aria-label": e, disabled: R, onClick: P });
        }
    } else if ((0, tf.x1)(k)) {
        let e = ev.intl.string(ex.default.FZIHQN);
        L = (0, i.jsx)(tE.Ay.Icon, { icon: hC.RefreshIcon, tooltip: e, "aria-label": e, disabled: w, onClick: A });
    }
    let $ = p(C),
        D = p(E),
        q = S ? hN.MobilePhoneIcon : hI.ScreenIcon;
    return (0, i.jsxs)("div", {
        className: hU.M,
        children: [
            (0, i.jsx)(tn, {
                targets: b,
                activeTarget: a,
                projectName: n,
                onSelect: j,
                closableTarget: M ? s : null,
                onClose: o,
                panelId: x,
            }),
            (0, i.jsxs)("div", {
                className: hU.o,
                children: [
                    v,
                    L,
                    "frame" === r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(hR.A, { frame: y }),
                                  S
                                      ? (0, i.jsx)(tE.Ay.Icon, {
                                            icon: hE.RotateIcon,
                                            tooltip: D,
                                            "aria-label": D,
                                            selected: I,
                                            disabled: g,
                                            onClick: _,
                                        })
                                      : null,
                                  (0, i.jsx)(tE.Ay.Icon, {
                                      icon: q,
                                      tooltip: $,
                                      "aria-label": $,
                                      disabled: g,
                                      onClick: N,
                                  }),
                                  (0, i.jsx)(hz, {
                                      projectId: t,
                                      previewPaused: c,
                                      pauseDisabled: !c && h,
                                      onTogglePreviewPaused: d,
                                      drawing: T,
                                      fullscreenFrame: c ? null : y,
                                      onTogglePopout: f,
                                      poppedOut: m,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
var hK = n(705427),
    hH = n(606128),
    hW = n(323140);
function hV(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: x, guildId: y } = e,
        k = a.useContext(eT.A),
        [w] = a.useState(() => (null != k ? e$.A.getProjectView(k) : null)),
        [A, S] = a.useState(w?.chatOpen ?? !0),
        [C, N] = a.useState(w?.debugOpen ?? !1);
    a.useEffect(() => {
        null != k && (0, eL.g7)(k, { chatOpen: A, debugOpen: C });
    }, [k, A, C]);
    let I = a.useCallback(
            (e) => {
                null != k && (0, eL.g7)(k, { previewSelection: e });
            },
            [k],
        ),
        E = eA(),
        _ = (0, eC.f)("ConjureSelectedProjectScreen"),
        M = a.useCallback(() => S(!0), []),
        R = a.useCallback(() => {
            (N(!1), S(!0));
        }, []),
        { restoreState: P, handleRestoreVersion: T } = (function (e, t) {
            let [n, l] = a.useState(null),
                r = e?.id ?? null,
                i = a.useRef(r),
                s = a.useRef(!0),
                o = a.useRef(!1);
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
                            if (null == e || o.current) return;
                            let u = e.id;
                            function c() {
                                return s.current && i.current === u;
                            }
                            ((o.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, eM.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (a &&
                                                    c() &&
                                                    (0, eh.P0)({
                                                        text: ev.intl.formatToPlainString(ex.default.Z4n6LX, {
                                                            title: (0, e_.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, eR.c)(u, r);
                                                null != e && (0, eh.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, eh.P0)({
                                                    text: ev.intl.string(ex.default["PSdo+w"]),
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
        })(s, R),
        $ = s?.id ?? null,
        q = (0, eP.bP)(),
        F = q?.blocking === !0 && q.projectId === $,
        {
            integrationStatus: O,
            isPreviewApplicationLoading: z,
            checkingIntegration: U,
            previewReady: B,
            hasFrame: K,
        } = (function (e) {
            let [t, n] = a.useState(null),
                l = e?.id ?? null,
                r = a.useRef(l),
                i = a.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [ts.Ay, ta.A],
                    () => (null == l ? null : (ts.Ay.getIntegrationStatus(l) ?? ta.A.getIntegrationStatus(l))),
                    [l],
                ),
                o = e?.preview_application_id ?? null,
                { isLoading: u } = (0, tr.YY)(o ?? void 0),
                d = null != l && t !== l,
                f = s?.preview_ready === !0,
                m = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, eK.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: h,
                });
            a.useEffect(() => {
                g &&
                    !d &&
                    null != o &&
                    (async function (e) {
                        try {
                            await (0, tr.TA)(e);
                        } catch {}
                    })(o);
            }, [h, d, g, o]);
            let p = a.useCallback(async () => {
                if (null == l || r.current !== l) return;
                i.current?.abort();
                let e = new AbortController();
                ((i.current = e), n(null));
                try {
                    await ((0, ti.CG)(l)?.catch(() => (0, ti.U1)(l, e.signal)) ?? (0, ti.U1)(l, e.signal));
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
                    isPreviewApplicationLoading: u,
                    checkingIntegration: d,
                    previewReady: f,
                    hasFrame: m,
                }
            );
        })(s),
        H =
            (0, c.bG)([th.A], () => (null == $ ? void 0 : th.A.getPublishStatus($)?.previewAppChannels), [$]) ??
            O?.preview_app_channels,
        W = (0, c.bG)([th.A], () => (null == $ ? null : (th.A.getPublishStatus($)?.publishState ?? null)), [$]),
        V = (0, c.bG)(
            [eb.Ay],
            () => {
                if (null == $) return !1;
                let e = eb.Ay.getConnState($);
                return "failed" === e || "closed" === e;
            },
            [$],
        ),
        {
            availability: X,
            activeMode: Y,
            setMode: Q,
            frameSurface: Z,
            frameSurfaceOptions: J,
            setFrameSurface: ee,
            appChannel: ei,
            setAppChannel: ea,
            frameLaunchParams: ec,
            widgetApplicationId: ed,
        } = (0, eQ.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: K,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: O?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eF.q7.OVERLAY) === !0,
            previewAppChannels: H,
            initialSelection: w?.previewSelection,
            onSelectionChange: I,
        }),
        ej = eU(s);
    ((0, eB.x)($, (e) => {
        X.modes.includes(e) && Q(e);
    }),
        ek($, () => {
            (S(!0), N(!0));
        }));
    let ey = X.modes.includes("frame"),
        ew = (0, c.bG)([eq.A], () => eq.A.isPaused($), [$]),
        eO = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: i,
                    previewAppChannels: s,
                    setMode: o,
                    setFrameSurface: u,
                    setAppChannel: d,
                } = e,
                f = a.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === eH.U.APP_CHANNEL && n.length > 1
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
                        ("frame" === e.mode && (u(e.surface), null != e.appChannel && d?.(e.appChannel)), o(e.mode));
                    },
                    [d, u, o],
                ),
                h = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewMobile()),
                g = ev.intl.string(h ? ex.default.tKGF0Q : ex.default.peqEOY),
                p = a.useCallback(() => (0, eD.GG)(!h), [h]),
                x = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewLandscape()),
                v = ev.intl.string(x ? ex.default.tunI2l : ex.default.DoNdjA),
                b = a.useCallback(() => (0, eD.Lw)(!x), [x]),
                j = (0, td.jS)(t),
                y = a.useMemo(() => (0, td.Op)(j, r), [j, r]),
                k = (0, tu.A)(t?.preview_application_id ?? null, y),
                w = (0, tu.A)(t?.preview_application_id ?? null, tf.ZN),
                A = "overlay" === l ? w : k,
                S = (0, tf.x1)(A) && A.data.proxyTicketRefreshing,
                C = a.useCallback(() => {
                    null == A || S || to.A.refreshProxyTicket(A.id);
                }, [A, S]);
            return {
                previewTargetOptions: f,
                handleSelectPreviewTarget: m,
                mobilePreview: h,
                mobilePreviewLabel: g,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: v,
                handleRotatePreview: b,
                previewSurface: y,
                previewFrame: k,
                refreshFrame: A,
                isRefreshing: S,
                handleRefresh: C,
            };
        })({
            project: s,
            modes: X.modes,
            activeMode: Y,
            frameSurface: Z,
            frameSurfaceOptions: J,
            previewAppChannels: H,
            setMode: Q,
            setFrameSurface: ee,
            setAppChannel: ea,
        }),
        { previewSurface: eG, previewFrame: ez } = eO,
        eW = (0, v.A)(ez),
        eV = ey && !ew,
        eX = ef($),
        eY = eW.isPoppedOut ? ex.default.pmkK8i : ew ? ex.default.Yet11p : null,
        eZ = null != eY;
    function eJ(e) {
        return null == eY ? e : ev.intl.formatToPlainString(eY, { label: e });
    }
    let e0 = a.useCallback(() => S(!1), []),
        {
            designFeedbackActive: e1,
            designFeedbackToggleRef: e2,
            agentDrivingPreview: e3,
            designFeedbackLabel: e4,
            handleToggleDesignFeedback: e5,
        } = (function (e, t, n) {
            let { active: l } = G(e);
            a.useEffect(() => {
                null != e && l && !t && D(e);
            }, [e, l, t]);
            let r = a.useRef(null),
                i = (0, eS.Zv)(e),
                s = ev.intl.string(i ? ex.default.Sme0T0 : l ? ex.default.vn5Rzu : ex.default["cl/Jyl"]),
                o = a.useCallback(() => {
                    if (null != e) {
                        if (l) return void D(e);
                        (n(), L(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: i,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })($, eV && (!eW.isPoppedOut || eX), R),
        [e7] = a.useState(() => j.isPlatformEmbedded && (0, tl.qM)());
    a.useEffect(() => {
        null != $ && eX && !eV && eo($);
    }, [$, eX, eV]);
    let e8 = a.useCallback(() => {
            null != $ &&
                (R(),
                (function (e) {
                    let t = el(e);
                    if (null != t) {
                        t.active || er(e, (e) => ({ ...e, active: !0, keptStill: null }));
                        return;
                    }
                    let { byProject: n } = et.getState();
                    et.setState({ byProject: { ...n, [e]: en } });
                })($),
                eu($, "marker"));
        }, [$, R]),
        e9 = a.useCallback(() => {
            null != $ && es($);
        }, [$]),
        te =
            eZ && !eX
                ? eJ(ev.intl.string(ex.default["XWU+XF"]))
                : ev.intl.string(eX ? ex.default.tuQ5f3 : e3 ? ex.default.agwlrD : ex.default["XWU+XF"]),
        tt = eZ ? eJ(ev.intl.string(ex.default["cl/Jyl"])) : e4,
        tn = a.useCallback(() => {
            N((e) => !e && (S(!0), !0));
        }, []),
        tb = a.useCallback(() => N(!1), []),
        tj = a.useCallback(() => {
            null != $ && (0, eD._j)($);
        }, [$]),
        ty = a.useCallback(() => {
            null != $ && (ew ? (0, eD._j)($) : (0, eD.di)($, ez?.id));
        }, [$, ew, ez?.id]),
        tk = a.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = ez?.id), (0, eb.Bn)(e), (0, tm.r)(t)), x());
        }, [s, ez?.id, x]),
        tw =
            ((t = (0, ep.z)(s)),
            (l = a.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, eg.vt)(e);
                    null != n
                        ? (0, eh.P0)({ text: n, variant: "critical" })
                        : (0, em.A)({
                              title: ev.intl.formatToPlainString(ex.default["Gm+u1+"], { name: s.name }),
                              subtitle: ev.intl.string(ex.default.M7H3sJ),
                              confirmText: ev.intl.string(ex.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  M();
                                  try {
                                      await (0, eg.Hj)(t, e, ev.intl.string(ex.default.Owerd3));
                                  } catch {
                                      (0, eh.P0)({ text: ev.intl.string(ex.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, M],
            )),
            { onExport: t, onImport: (r = (0, eg.yN)(l)).open, importInput: r.input }),
        tA = a.useCallback(async () => {
            null != $ && (await (0, tp.vL)($, y));
        }, [y, $]),
        tN = (0, eK.aN)(Y, {
            installScope: s?.install_scope ?? null,
            previewReady: B,
            integrationInstalled: O?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tA, loading: z }
            : U && null == O
              ? { type: "checking" }
              : void 0,
        tI = (0, c.bG)([ts.Ay], () => null != $ && ts.Ay.isProjectDeleting($), [$]);
    a.useEffect(() => {
        ((null == s && o) || tI) && x();
    }, [s, o, tI, x]);
    let {
            publishOptions: tE,
            publish: t_,
            publishing: tM,
            variant: tR,
            text: tP,
            pendingChanges: tT,
        } = (0, tv.A)($, y, U || z),
        tL = (0, tx.A)($, t_, tE),
        t$ = "frame" === Y && !ew && (0, tf.x1)(ez) && (eW.isPoppedOut || eW.canPopout),
        tD = a.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: P?.status === "restoring",
                    onRestoreVersion: (e, t) => T(e, t, !0),
                }),
                    (0, eE.mM)(async () => {
                        let { default: t } = await Promise.all([
                            n.e(323079),
                            n.e(437655),
                            n.e(420238),
                            n.e(795807),
                            n.e(231782),
                            n.e(587883),
                        ]).then(n.bind(n, 247270));
                        return (n) => (0, i.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, P?.status, T]);
    (0, eI.z)($, tD);
    let tq = null == s ? void 0 : () => (0, tC.A)(s.id, { guildId: y, isPreview: !0, publishOptions: tE }),
        tF = X.modes.includes("widget") && "unavailable-authorization-revoked" !== X.profileState ? ed : null,
        tO =
            null != t_ && null != s && ("primary" === tR || tM)
                ? (0, i.jsx)("div", {
                      className: hW.As,
                      onMouseDown:
                          null == $ || t_.disabled || tM
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tg.dx)($);
                                },
                      children: (0, i.jsx)(d.$, {
                          size: "sm",
                          variant: "primary",
                          icon: tM ? hX : void 0,
                          text: tP,
                          onClick: () => tL("header"),
                      }),
                  })
                : null,
        tG = ev.intl.string(ex.default.FzfmQ8),
        tz = ev.intl.string(ex.default.xjJAQm),
        tU = (0, i.jsx)(hK.A, {
            title: s?.name ?? ev.intl.string(ex.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tq,
            draft: tT,
            actions:
                null == s
                    ? null
                    : (0, i.jsxs)("div", {
                          className: hW.FO,
                          children: [
                              (0, i.jsx)(b.A.Icon, {
                                  icon: f.SettingsIcon,
                                  tooltip: tG,
                                  "aria-label": tG,
                                  onClick: tq,
                              }),
                              (0, i.jsx)(hS, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: y,
                                  isOwner: (0, ts.PV)(s),
                                  onExport: tw.onExport,
                                  onHistory: tD,
                                  onConnectTool: _ ? () => (0, eN.A)(s.id) : void 0,
                                  onToggleDebug: E ? tn : void 0,
                                  debugOpen: C,
                              }),
                              (0, i.jsxs)("div", {
                                  className: hW.Cl,
                                  children: [(0, i.jsx)(tS, { project: s, guildId: y }), tO],
                              }),
                              A
                                  ? null
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", { className: hW.YJ, "aria-hidden": !0 }),
                                            (0, i.jsx)(b.A.Icon, {
                                                icon: m.PanelOpenIcon,
                                                tooltip: tz,
                                                "aria-label": tz,
                                                onClick: M,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        }),
        tB = a.useId(),
        tK = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null == e
                ? null
                : "frame" !== e
                  ? { mode: e }
                  : null == n
                    ? { mode: e, surface: t }
                    : { mode: e, surface: t, appChannel: n };
        })(Y, Z, ei),
        tH = ey
            ? e7
                ? (0, i.jsx)(b.A.Icon, {
                      icon: h.ExperimentalDirectSelectIcon,
                      iconClassName: hW.D8,
                      tooltip: te,
                      "aria-label": te,
                      selected: eX,
                      disabled: (eZ || e3) && !eX,
                      onClick: eX ? e9 : e8,
                  })
                : (0, i.jsx)(b.A.Icon, {
                      ref: e2,
                      icon: h.ExperimentalDirectSelectIcon,
                      iconClassName: hW.D8,
                      tooltip: tt,
                      "aria-label": tt,
                      selected: e1,
                      disabled: eZ || e3,
                      onClick: e5,
                  })
            : null,
        tW =
            null != s && (null == W ? V : "nothing_built" !== W)
                ? (0, i.jsx)(hB, {
                      editToggle: tH,
                      projectId: s.id,
                      projectName: s.name,
                      toolbar: eO,
                      activeMode: Y,
                      activeTarget: tK,
                      frameTarget: { mode: "frame", surface: Z, ...(null == ei ? {} : { appChannel: ei }) },
                      onCloseApp: tk,
                      widgetRefreshApplicationId: tF,
                      previewPaused: ew,
                      onTogglePreviewPaused: ty,
                      onTogglePopout: t$ ? (eW.isPoppedOut ? eW.popIn : eW.popOut) : void 0,
                      poppedOut: eW.isPoppedOut,
                      agentDrivingPreview: e3,
                      previewControlsBlocked: eZ,
                      blockedPreviewControlLabel: eJ,
                      previewPanelId: tB,
                  })
                : null;
    return (0, i.jsxs)("div", {
        className: u()(hW.nj, hH.T),
        children: [
            tw.importInput,
            (0, i.jsx)("main", {
                className: hW.JX,
                children: F
                    ? (0, i.jsx)("div", {
                          className: hW.j5,
                          children: (0, i.jsx)("div", {
                              className: hW.sD,
                              children: (0, i.jsx)(g.D, {
                                  variant: "heading-lg/semibold",
                                  children: ev.intl.string(ex.default.i7PaZ5),
                              }),
                          }),
                      })
                    : null == s
                      ? (0, i.jsxs)("div", {
                            className: hW.j5,
                            children: [
                                tU,
                                (0, i.jsxs)("div", {
                                    className: hW.sD,
                                    children: [
                                        (0, i.jsx)(g.D, {
                                            variant: "heading-lg/semibold",
                                            children: ev.intl.string(ex.default.G1WwgK),
                                        }),
                                        (0, i.jsx)(p.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: ev.intl.string(ex.default.fINulo),
                                        }),
                                        (0, i.jsx)(d.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: ev.intl.string(ex.default["WFJ/vb"]),
                                            onClick: () => (0, ti.listProjects)(y),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : (0, i.jsx)(tp.bI.Provider, {
                            value: tE,
                            children: (0, i.jsx)(
                                hf,
                                {
                                    projectId: s.id,
                                    designFeedbackToggleRef: e2,
                                    applicationId: s.preview_application_id,
                                    previewApplicationId: s.preview_application_id,
                                    surface: eG,
                                    frameLaunchParams: ec,
                                    header: tU,
                                    controlBar: tW,
                                    previewPanelId: null == tW ? void 0 : tB,
                                    previewPanelLabelledBy: null == tW || null == tK ? void 0 : e6(tB, tK),
                                    chatOpen: A,
                                    onCloseChat: e0,
                                    debugOpen: E && C,
                                    onCloseDebug: tb,
                                    onRestoreVersion: T,
                                    onImportProject: (0, ts.PV)(s) ? tw.onImport : void 0,
                                    restoreState: P,
                                    previewReady: B,
                                    previewGate: tN,
                                    availability: X,
                                    activeMode: Y,
                                    widgetApplicationId: ed,
                                    overlayWidgetSize: ej,
                                    previewPaused: ew,
                                    onResumePreview: tj,
                                },
                                s.id,
                            ),
                        }),
            }),
        ],
    });
}
function hX() {
    return (0, i.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE, className: hW.Hv, itemClassName: hW.C5 });
}
