n.d(t, { A: () => hq });
var l,
    r,
    i = n(477900),
    a = n(582128),
    s = n.t(a, 2),
    u = n(503698),
    o = n.n(u),
    c = n(855986),
    d = n(866665),
    f = n(821609),
    m = n(625903),
    h = n(259730),
    g = n(604525),
    p = n(534514),
    x = n(834730),
    v = n(289873),
    b = n(646973),
    j = n(742589),
    y = n(287809),
    w = n(723702),
    k = n(839214);
n(321073);
let A = Object.freeze({ x: 0.5, y: 0.5 });
function S(e) {
    return "" !== e.trim();
}
function C(e) {
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
function I(e) {
    let { kind: t, name: n } = C(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function N(e) {
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
let E = "[conjure:selected] ",
    _ = " \u2014 ";
function M(e) {
    if (!e.startsWith(E)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(E.length),
        i = r.indexOf(_),
        a = (-1 === i ? r : r.slice(0, i)).trim();
    return "" === a ? null : { label: a, body: l };
}
let R = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    P = new Map(),
    T = new Set();
function L(e) {
    return P.get(e) ?? R;
}
function $(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? P.set(e, t) : P.delete(e), [...T]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function D(e) {
    let t = L(e);
    t.active || $(e, { ...t, active: !0 });
}
function q(e) {
    let t = L(e);
    t.active && $(e, { ...t, active: !1 });
}
function O(e) {
    P.has(e) && $(e, R);
}
function F(e, t) {
    let n = L(e);
    n.active && $(e, { ...n, context: t });
}
function G(e, t) {
    return null != t && e.authorId === t;
}
function z(e) {
    return (
        T.add(e),
        () => {
            T.delete(e);
        }
    );
}
function U(e) {
    let t = a.useCallback(() => (null == e ? R : L(e)), [e]);
    return a.useSyncExternalStore(z, t, t);
}
(n(134528), n(947204));
let B = { past: [], present: [], future: [] };
function K(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function H(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function W(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => H(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: H(e.from, t, n), to: H(e.to, t, n) };
        case "text":
            return { ...e, at: H(e.at, t, n) };
    }
}
function V(e) {
    return e.some((e) => "erase" !== e.kind);
}
function X(e, t) {
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
function Y(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        i = l * l + r * r,
        a = 0 === i ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / i));
    return Math.hypot(e.x - (t.x + a * l), e.y - (t.y + a * r));
}
function Z(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function Q(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => Z(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                i = n.map((e) => e.y),
                a = Math.min(...r) - l,
                s = Math.min(...i) - l;
            return { x: a, y: s, width: Math.max(...r) + l - a, height: Math.max(...i) + l - s };
        }
        case "circle":
        case "square": {
            let n = Z(e.from, t),
                l = Z(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = Z(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function J(e) {
    return V(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let ee = [3, 6, 12],
    et = [10, 20, 40],
    en = new Map(),
    el = (0, k.D)(() => ({ byProject: {} })),
    er = {
        active: !0,
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: B,
        sketchDismissedFor: null,
        chatFocusRequest: 0,
        keptStill: null,
    };
function ei(e) {
    return el.getState().byProject[e] ?? null;
}
function ea(e, t) {
    let n = ei(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = el.getState();
    el.setState({ byProject: { ...r, [e]: l } });
}
function es(e, t) {
    null == t ? en.delete(e) : en.set(e, t);
}
function eu(e) {
    return en.get(e)?.() ?? Promise.resolve(null);
}
function eo(e) {
    let t = ei(e);
    if (null != t) {
        if (!J(t)) return void ec(e);
        (t.active && ea(e, (t) => ({ ...t, active: !1, keptStill: eu(e) })), O(e));
    }
}
function ec(e) {
    if (null == ei(e)) return;
    let { [e]: t, ...n } = el.getState().byProject;
    (el.setState({ byProject: n }), O(e));
}
function ed(e, t) {
    null != ei(e) &&
        (ea(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? D(e) : q(e));
}
function ef(e, t) {
    ea(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return K(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return K(
                        e,
                        e.present.map((e) => (e.id === t.id ? W(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : K(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : K(e, []);
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
function em(e) {
    ea(e, (e) => ({ ...e, chatFocusRequest: e.chatFocusRequest + 1 }));
}
function eh(e) {
    return el.useState((t) => null != e && t.byProject[e]?.active === !0);
}
var eg = n(314116),
    ep = n(858899),
    ex = n(949757),
    ev = n(800202),
    eb = n(191850),
    ej = n(792996),
    ey = n(540665);
let ew = new Set(),
    ek = null;
function eA(e, t) {
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
                ew.add(t),
                () => {
                    ew.delete(t);
                }
            );
        }, [e]));
}
var eS = n(400421),
    eC = n(573083),
    eI = n(971079),
    eN = n(61577),
    eE = n(686507),
    e_ = n(192308),
    eM = n(128761),
    eR = n(503922),
    eP = n(967008),
    eT = n(777847),
    eL = n(227007),
    e$ = n(398773),
    eD = n(735769),
    eq = n(513845),
    eO = n(802905),
    eF = n(951178);
let eG = { width: 320, height: 240 };
function ez(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eG;
}
function eU(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function eB(e) {
    return ez(e?.preview_overlay_widget ?? null);
}
var eK = n(855859),
    eH = n(238490),
    eW = n(991690);
function eV(e) {
    return e
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-+|-+$/g, "");
}
var eX = n(696645);
function eY(e) {
    return "frame" !== e.mode
        ? e.mode
        : null != e.view
          ? `frame-view-${e.view.id}`
          : null == e.appChannel
            ? `frame-${e.surface}`
            : `frame-${e.surface}-${e.appChannel}`;
}
function eZ(e, t) {
    if ("bot" === e.mode) return ej.intl.string(eb.default.gThNz6);
    if ("frame" === e.mode && null != e.view) return e.view.name;
    if ("frame" === e.mode && e.surface === eW.U.APP_CHANNEL) {
        let n = e.appChannel ?? eV(t);
        if ("" !== n) return `#${n}`;
    }
    switch (e.mode) {
        case "frame":
            if (null != e.view) return e.view.name;
            return null == e.appChannel
                ? (0, eX.X)(e.surface)
                : ej.intl.formatToPlainString(eb.default["6xVl+N"], {
                      surface: (0, eX.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return ej.intl.string(eb.default.y5GiL1);
        case "overlay":
            return ej.intl.string(eb.default["2940LX"]);
        case "bot":
            return ej.intl.string(eb.default.tjpaGN);
    }
}
var eQ = n(939398),
    eJ = n(52724),
    e0 = n(323384),
    e1 = n(983851),
    e2 = n(794083),
    e3 = n(861004),
    e4 = n(687966),
    e5 = n(430392),
    e7 = n(939249),
    e8 = n(789645),
    e6 = n(388155);
function e9(e, t) {
    return `${e}-tab-${eY(t).replace(/\s+/g, "-")}`;
}
function te(e, t) {
    let n = e.getBoundingClientRect(),
        l = t.getBoundingClientRect();
    l.left < n.left ? (e.scrollLeft -= n.left - l.left) : l.right > n.right && (e.scrollLeft += l.right - n.right);
}
let tt = { [eW.U.APP_CHANNEL]: e0.AppsIcon, [eW.U.VOICE_CHANNEL]: e1.VoiceNormalIcon, [eW.U.MAIN]: e2.ActivitiesIcon };
function tn(e) {
    let { targets: t, activeTarget: n, projectName: l, onSelect: r, closableTarget: s, onClose: u, panelId: c } = e,
        f = null == n ? null : eY(n),
        m = null == s ? null : eY(s),
        h = t.findIndex((e) => eY(e) === m),
        g = t.some((e) => eY(e) === f) ? f : t.length > 0 ? eY(t[0]) : null,
        p = ej.intl.string(eb.default["/TlGcK"]),
        v = a.useRef(null),
        b = a.useRef(null),
        j = a.useRef(null);
    a.useEffect(() => {
        let e = v.current;
        if (null != e)
            return (e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t));
        function t(t) {
            if (null == e || Math.abs(t.deltaY) <= Math.abs(t.deltaX)) return;
            let n = Math.abs(e.scrollLeft);
            (t.deltaY > 0 ? n < e.scrollWidth - e.clientWidth - 1 : n > 1) &&
                (t.preventDefault(), (e.scrollLeft += "rtl" === getComputedStyle(e).direction ? -t.deltaY : t.deltaY));
        }
    }, [v]);
    let y = (function (e, t) {
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
                for (let e of (a.observe(t), t.querySelectorAll(`.${e6.Mf}`))) a.observe(e);
                return (
                    t.addEventListener("scroll", r, { passive: !0 }),
                    () => {
                        (a.disconnect(), t.removeEventListener("scroll", r));
                    }
                );
            }, [e, t]),
            { left: n, right: r }
        );
    })(v, t);
    async function w(e) {
        let t,
            n = b.current;
        if (null == n) return;
        let l = (0, eJ.C)({
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
        let t = v.current,
            n = e.currentTarget.closest(`.${e6.Mf}`);
        null != t && null != n && te(t, n);
    }
    a.useLayoutEffect(() => {
        let e = v.current,
            t = j.current;
        null != e && null != t && te(e, t);
    }, [f]);
    let A = h < 0 ? null : eZ(t[h], l);
    return (0, i.jsxs)("div", {
        ref: v,
        className: o()(e6.vR, { [e6.e$]: y.left, [e6.Rh]: y.right }),
        children: [
            (0, i.jsx)("div", {
                ref: b,
                className: e6.gj,
                role: "tablist",
                "aria-label": ej.intl.string(eb.default.I2ucou),
                children: t.map((e, t) => {
                    let n = eY(e),
                        a = n === f,
                        s = eZ(e, l),
                        u = (function (e) {
                            switch (e.mode) {
                                case "frame":
                                    return tt[e.surface];
                                case "widget":
                                    return e3.UserSquareIcon;
                                case "overlay":
                                    return e4.GameControllerIcon;
                                case "bot":
                                    return e5.RobotIcon;
                            }
                        })(e);
                    return (0, i.jsx)(
                        "div",
                        {
                            ref: a ? j : void 0,
                            className: o()(e6.Mf, { [e6.yR]: a, [e6.P5]: t === h, [e6.h5]: h >= 0 && t > h }),
                            children: (0, i.jsxs)(e7.D, {
                                id: e9(c, e),
                                className: e6.eg,
                                role: "tab",
                                "aria-selected": a,
                                "aria-controls": a ? c : void 0,
                                tabIndex: n === g ? 0 : -1,
                                onClick: () => r(e),
                                onKeyDown: w,
                                onFocus: k,
                                children: [
                                    (0, i.jsx)(u, { size: "sm", color: "currentColor", className: e6.Ll }),
                                    (0, i.jsx)(x.E, {
                                        variant: "body-sm/medium",
                                        color: "none",
                                        lineClamp: 1,
                                        className: e6.Gn,
                                        children: s,
                                    }),
                                ],
                            }),
                        },
                        n,
                    );
                }),
            }),
            null != A
                ? (0, i.jsx)(d.m, {
                      position: "bottom",
                      text: p,
                      ariaHidden: !0,
                      children: (0, i.jsx)(e7.D, {
                          className: e6.b,
                          onClick: u,
                          "aria-label": `${p}, ${A}`,
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
    tu = n(625180),
    to = n(672929),
    tc = n(111534),
    td = n(754027),
    tf = n(165610),
    tm = n(738604),
    th = n(485104),
    tg = n(141299),
    tp = n(530165),
    tx = n(457827),
    tv = n(722701),
    tb = n(962998),
    tj = n(892188),
    ty = n(50181),
    tw = n(165862),
    tk = n(477782),
    tA = n(442433),
    tS = n(167483),
    tC = n(719593),
    tI = n(265872),
    tN = n(405433),
    tE = n(42473),
    t_ = n(811587),
    tM = n(95264),
    tR = n(412073);
function tP(e) {
    var t;
    let l,
        r,
        { project: s, guildId: u } = e,
        d =
            ((l = s?.id),
            (null !=
            (r = (0, c.bG)([tv.A], () => (null == l ? null : (tv.A.getPublishStatus(l)?.publishState ?? null)), [l]))
                ? (0, t_.l)(r)
                : (s?.supported_surfaces?.length ?? 0) > 0) && (0, ts.H_)(s)),
        { canShare: f } =
            ((t = s.id),
            (0, c.cf)(
                [ts.Ay, tv.A],
                () => {
                    let e = ts.Ay.getProject(t),
                        n = tv.A.getPublishStatus(t)?.publishState,
                        l = null != e && (0, ts.PV)(e);
                    return { canShare: null != e && null != n && (l ? "nothing_built" !== n : (0, t_.l)(n)) };
                },
                [t],
            )),
        m = a.useCallback(() => {
            null != s && (0, tM.A)(s, u);
        }, [s, u]),
        h = a.useRef(null);
    if (!d && !f) return null;
    let g = ej.intl.string(eb.default.XWgAfc),
        p = ej.intl.string(ej.t.RDE0Sc);
    return (0, i.jsx)(tI.Q, {
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
                className: o()(tR.Os, { [tR.q6]: l }),
                children: [
                    d
                        ? (0, i.jsx)(tE.A, {
                              className: o()(tR.MX, tR.mz, { [tR.JA]: f }),
                              icon: (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "none", children: g }),
                              "aria-label": g,
                              tooltipText: null,
                              onClick: m,
                          })
                        : null,
                    f
                        ? (0, i.jsx)(tE.A, {
                              className: o()(tR.MX, tR.uM, { [tR.w9]: d }),
                              icon: tN.ShareIcon,
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
var tT = n(616334),
    tL = n(450030),
    t$ = n(812771),
    tD = n(58736),
    tq = n(743898),
    tO = n(333007),
    tF = n(621466),
    tG = n(775121),
    tz = n(989145),
    tU = n(81369),
    tB = n(826745),
    tK = n(34595),
    tH = n(470779);
function tW(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
            onSubmit: c,
            onDismiss: f,
            canSubmit: m,
            closing: h,
            onUploadFile: g,
            anchor: p = "chip",
            allowAttachments: x = !0,
            placeholder: v,
            label: b,
        } = e,
        {
            drafts: j,
            addFiles: y,
            pasteFiles: w,
            removeDraft: k,
            settled: A,
            takeRefs: S,
        } = (0, tK.FM)({ projectId: t, surface: "design", onUploadFile: g }),
        C = a.useRef(null),
        I = (m || j.length > 0) && A && !h,
        N = a.useCallback(() => {
            if (!I) return;
            let e = S();
            c(e.length > 0 ? e : void 0);
        }, [I, S, c]),
        [E, _] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => _(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let M = a.useRef(null),
        [R, P] = a.useState(null);
    a.useLayoutEffect(() => {
        let e = M.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => P({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let T = R?.height ?? 44,
        L = l.left + 8,
        $ = l.top + 8,
        D = Math.max(n.x, L),
        q = Math.min(Math.max("point" === p ? n.y : n.y + 32 + 4, $), Math.max($, l.top + l.height - T - 8));
    return (0, i.jsxs)("div", {
        ref: M,
        className: o()(tH.M0, { [tH.ho]: E && !h, [tH.ET]: h }),
        style: { left: D, top: q },
        "data-testid": "conjure-design-compose-bar",
        children: [
            x
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("input", {
                              ref: C,
                              type: "file",
                              multiple: !0,
                              className: tH.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (y(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, i.jsx)(d.m, {
                              position: "bottom",
                              text: ej.intl.string(eb.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, i.jsx)("button", {
                                  type: "button",
                                  className: tH.tY,
                                  onClick: () => C.current?.click(),
                                  "aria-label": ej.intl.string(eb.default.lgvqSB),
                                  children: (0, i.jsx)(tU.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tH.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, i.jsx)(tB.y, {
                autoFocus: !0,
                rows: 1,
                className: tH.hF,
                value: s,
                placeholder: v ?? ("" === r ? ej.intl.string(eb.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": b ?? ej.intl.string(eb.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: h || !x ? void 0 : w,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), f());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), N());
                },
            }),
            j.length > 0
                ? (0, i.jsx)("div", {
                      className: tH.ZO,
                      children: j.map((e) => (0, i.jsx)(tK.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function tV(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tX(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tY(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = a.useState(() => (t ? tV(e()) : null));
    return (
        a.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tV(e());
                l((e) => (tX(e, t) ? e : t));
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
var tZ = n(876798),
    tQ = n(408278),
    tJ = n(48507),
    t0 = n(193885),
    t1 = n(744898),
    t2 = n(803656),
    t3 = n(241326),
    t4 = n(972213),
    t5 = n(646514);
function t7(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function t8(e, t, n) {
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
let t6 = t8("red", t7(t5.A.unsafe_rawColors.RED_400), () => ej.intl.string(eb.default.tvXfjt)),
    t9 = [
        t6,
        t8("yellow", t7(t5.A.unsafe_rawColors.YELLOW_300), () => ej.intl.string(eb.default.FYuaJ1)),
        t8("green", t7(t5.A.unsafe_rawColors.GREEN_360), () => ej.intl.string(eb.default["Vv+paS"])),
        t8("blue", t7(t5.A.unsafe_rawColors.BLUE_345), () => ej.intl.string(eb.default.k9b1QJ)),
        t8("white", t7(t5.A.unsafe_rawColors.WHITE), () => ej.intl.string(eb.default["1sOXwH"])),
    ];
function ne(e) {
    return t9.find((t) => t.id === e) ?? t6;
}
var nt = n(39416);
function nn(e) {
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
function nl(e) {
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
function nr(e) {
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
function ni(e) {
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
let na = ee.map((e) => ni(Math.min(16, e + 3))),
    ns = et.map((e) => ni(Math.min(16, e / 2.5))),
    nu = [eb.default.jZtZUr, eb.default.cTQdD0, eb.default.J3ucEg],
    no = {
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
            label: () => ej.intl.string(eb.default.oIZQbm),
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
            label: () => ej.intl.string(eb.default.ARNVr7),
        },
    };
function nc(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, i.jsx)(d.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)("span", {
            className: nt.z6,
            "data-active": l ? "" : void 0,
            children: (0, i.jsx)(tZ.k, {
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
function nd(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, i.jsx)(d.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)(tQ.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function nf(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = a.useState(!1),
        o = a.useCallback(() => u(!1), []),
        c = a.useCallback(() => u((e) => !e), []);
    return (0, i.jsxs)("div", {
        className: nt.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, i.jsx)("div", {
                      className: nt.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function nm(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: a, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: f } = n,
        m = ne(n.colorId),
        h = no[o],
        g = ej.intl.string(eb.default.hUm825),
        p = ej.intl.string(eb.default.n5IA3a),
        x = ej.intl.string(eb.default.r5dX6t),
        v = ej.intl.string(eb.default.VfYqDq);
    return (0, i.jsxs)("div", {
        className: nt.t$,
        children: [
            (0, i.jsx)("div", {
                className: nt.NT,
                children: (0, i.jsx)(nc, {
                    icon: nl,
                    label: ej.intl.string(eb.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => ed(t, "pick"),
                }),
            }),
            (0, i.jsxs)("div", {
                className: nt.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": ej.intl.string(eb.default["0IAEFf"]),
                children: [
                    (0, i.jsx)(nc, {
                        icon: nn,
                        label: ej.intl.string(eb.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => ed(t, "move"),
                    }),
                    (0, i.jsx)(nc, {
                        icon: tJ.LettersIcon,
                        label: ej.intl.string(eb.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => ed(t, "text"),
                    }),
                    (0, i.jsx)(nf, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(nc, {
                                icon: t0.PaintbrushThinIcon,
                                label: g,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (ed(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            na.map((n, l) =>
                                (0, i.jsx)(
                                    nc,
                                    {
                                        icon: n,
                                        label: ej.intl.string(nu[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            (ea(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), q(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(nf, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, i.jsx)(nc, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (ed(t, o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(no).map((n) =>
                                (0, i.jsx)(
                                    nc,
                                    {
                                        icon: no[n].icon,
                                        label: no[n].label(),
                                        pressed: u === n,
                                        onClick: () => {
                                            (ed(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, i.jsx)(nf, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(nc, {
                                icon: nr,
                                label: p,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (ed(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            ns.map((n, l) =>
                                (0, i.jsx)(
                                    nc,
                                    {
                                        icon: n,
                                        label: ej.intl.string(nu[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            (ea(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), q(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(nf, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, i.jsx)(nd, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            t9.map((n) =>
                                (0, i.jsx)(
                                    nc,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                ea(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)("div", { className: nt.Gz, role: "separator" }),
                    (0, i.jsx)(nd, {
                        icon: t1.UndoIcon,
                        label: ej.intl.string((0, w.cX)() ? eb.default["j/XmBQ"] : eb.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, i.jsx)(nd, {
                        icon: t2.RedoIcon,
                        label: ej.intl.string((0, w.cX)() ? eb.default.C7jhpn : eb.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: a,
                    }),
                    (0, i.jsx)(nd, {
                        icon: t3.TrashIcon,
                        label: ej.intl.string(eb.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, i.jsx)("div", { className: nt.Gz, role: "separator" }),
                    (0, i.jsx)(nd, { icon: t4.XLargeIcon, label: ej.intl.string(eb.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let nh = t5.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    ng = t5.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    np = t5.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function nx(e, t, n) {
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
                    (e.strokeStyle = np),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function nv(e) {
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
let nb = { dx: 0, dy: 0 },
    nj = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    ny = 1;
function nw(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = el.useState((e) => (null == s ? null : (e.byProject[s] ?? null))),
        { active: o } = U(s),
        c = (0, e_.Rv)(),
        [d, f] = a.useState(!1);
    a.useEffect(() => {
        if (null != s)
            return () => {
                ei(s)?.active === !0 && ec(s);
            };
    }, [s]);
    let m = u?.active === !0 && "pick" === u.tool;
    a.useEffect(() => {
        null != s && m && !o && D(s);
    }, [s, m, o]);
    let h = a.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, tl.wn)(e);
        if (null != t) return t;
        function n() {
            f(!1);
        }
        (0, tO.flushSync)(() => f(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, tl.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (a.useEffect(() => {
        if (null != s) return (es(s, h), () => es(s, null));
    }, [s, h]),
    null == s || null == u || !u.active || c)
        ? null
        : (0, i.jsx)(nk, { projectId: s, state: u, capturing: d, resolveIframe: r });
}
function nk(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tY(r),
        [u, o] = a.useState(null),
        [c, d] = a.useState(0),
        [f, m] = a.useState(null),
        [h, g] = a.useState(nb),
        p = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useRef(null),
        j = a.useRef(null),
        { tool: y, history: w } = n,
        k = ne(n.colorId),
        A = "pick" !== y,
        S = "marker" === n.tool ? ee[n.markerSize] : "eraser" === n.tool ? et[n.eraserSize] : null,
        C = "eraser" === y ? null : k.value,
        I = a.useMemo(
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
                                  i(n, `fill="none" stroke="${ng}" stroke-width="4"`),
                                  i(n, `fill="none" stroke="${nh}" stroke-width="2"`),
                                  i(3, `fill="${t ?? nh}" stroke="${ng}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(a)}") ${r} ${r}, crosshair`;
                      })(S, C),
            [S, C],
        ),
        N = "move" === y ? (w.present.find((e) => e.id === f) ?? null) : null,
        E = null != s;
    (a.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [E]),
        a.useLayoutEffect(() => {
            j.current = u;
        }, [u]));
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
            a = null == i ? w.present : w.present.map((e) => (e.id === i.id ? W(e, h.dx, h.dy) : e)),
            u = v.current;
        nx(r, null == u ? a : [...a, u], { width: s.width, height: s.height });
    }, [s, w.present, h]);
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
                id: `mark-${ny++}`,
                kind: "text",
                color: k.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            (X(n, s) && ef(t, { type: "commit", shape: n }), o(null), em(t));
        }, [t, k, s]),
        P = a.useCallback(() => {
            ((j.current = null), o(null), em(t));
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
                            l = null == N ? null : Q(N, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? N
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = Z(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => Z(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (Y(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = Z(e.from, n),
                                                                  r = Z(e.to, n),
                                                                  i = 6 + (e.width * n.width) / 2,
                                                                  a = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return a.some((e, t) => Y(l, e, a[(t + 1) % 4]) <= i);
                                                          }
                                                          case "circle": {
                                                              let t = Z(e.from, n),
                                                                  r = Z(e.to, n),
                                                                  i = Math.abs(r.x - t.x) / 2,
                                                                  a = Math.abs(r.y - t.y) / 2;
                                                              if (0 === i || 0 === a) return !1;
                                                              let s = (t.x + r.x) / 2,
                                                                  u = (t.y + r.y) / 2;
                                                              return (
                                                                  Math.abs(
                                                                      Math.hypot((l.x - s) / i, (l.y - u) / a) - 1,
                                                                  ) <=
                                                                  (6 + (e.width * n.width) / 2) / Math.min(i, a)
                                                              );
                                                          }
                                                          case "text": {
                                                              let t = Q(e, n);
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
                                      })(w.present, t, s);
                        if ((m(r?.id ?? null), null == r)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (b.current = { id: r.id, origin: t }));
                        return;
                    }
                    case "text":
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!V(w.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${ny++}`,
                                kind: "erase",
                                width: et[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${ny++}`,
                                kind: "marker",
                                color: k.value,
                                width: ee[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${ny++}`,
                                kind: y,
                                color: k.value,
                                width: 4 / s.width,
                                from: t,
                                to: t,
                            }));
                }
                _();
            },
            [s, y, k, N, w.present, n.markerSize, n.eraserSize, M, R, _],
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
                ((b.current = null), g(nb), ef(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && X(n, s) ? (ef(t, { type: "commit", shape: n }), em(t)) : _());
        }, [t, s, h, _]),
        D = a.useCallback(() => eo(t), [t]),
        q = a.useCallback(() => ef(t, { type: "undo" }), [t]),
        O = a.useCallback(() => ef(t, { type: "redo" }), [t]),
        F = a.useCallback(() => ef(t, { type: "clear" }), [t]),
        G = a.useRef({ tool: y, selected: N, exit: D, undo: q, redo: O });
    if (
        (a.useLayoutEffect(() => {
            G.current = { tool: y, selected: N, exit: D, undo: q, redo: O };
        }),
        a.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, tF.Cw)((0, tF.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), ef(t, { type: "remove", id: l.id }), m(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = nj[s];
                null != u && (e.preventDefault(), ed(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        a.useEffect(() => {
            if (A) return (tG.A.disable(), () => tG.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let z = Math.max(8, s.left - c - 8),
        U = null == N ? null : Q(null == b.current ? N : W(N, h.dx, h.dy), s);
    return (0, tO.createPortal)(
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: nt.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: nt.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, i.jsx)("canvas", {
                            ref: p,
                            className: nt.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": ej.intl.string(eb.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            style: { cursor: l ? void 0 : I },
                            onPointerDown: T,
                            onPointerMove: L,
                            onPointerUp: $,
                            onPointerCancel: $,
                        }),
                        null == U
                            ? null
                            : (0, i.jsxs)("div", {
                                  className: nt.r1,
                                  style: { left: U.x, top: U.y, width: U.width, height: U.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, i.jsx)("span", { className: nt.p$, "data-corner": "nw" }),
                                      (0, i.jsx)("span", { className: nt.p$, "data-corner": "ne" }),
                                      (0, i.jsx)("span", { className: nt.p$, "data-corner": "sw" }),
                                      (0, i.jsx)("span", { className: nt.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == u
                    ? null
                    : (0, i.jsx)(tW, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + u.at.x * s.width, y: s.top + u.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: ej.intl.string(eb.default["8gX1lw"]),
                          label: ej.intl.string(eb.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: u.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: R,
                          onUploadFile: (e) => (0, tz.vX)(t, e),
                          onDismiss: P,
                          canSubmit: "" !== u.value.trim(),
                          closing: !1,
                      }),
                (0, i.jsx)("div", {
                    ref: x,
                    className: nt.ej,
                    style: { left: z, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, i.jsx)(nm, { projectId: t, state: n, onExit: D, onUndo: q, onRedo: O, onClear: F }),
                }),
            ],
        }),
        document.body,
    );
}
var nA = n(308081),
    nS = n(516521),
    nC = n(683071),
    nI = n(65593),
    nN = n(218394),
    nE = n(115982),
    n_ = n(886540);
function nM(e) {
    return !(0, n_.BL)(e) && !0 !== e.stopRequested;
}
var nR = n(104317),
    nP = n(643278),
    nT = n(566424),
    nL = n(683063),
    n$ = n(140735),
    nD = n(847374),
    nq = n(320448),
    nO = n(138212);
function nF(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: a, ...s } = e;
    return (0, i.jsxs)("section", {
        className: o()(nO.Nr, r),
        ...s,
        children: [
            (0, i.jsxs)("header", {
                className: o()(nO.wx, null != n && nO.o5, a),
                children: [
                    (0, i.jsx)(x.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nG = n(148590);
function nz(e) {
    let { children: t } = e;
    return (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nU(e) {
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
        b = h ? nD.ChevronSmallDownIcon : nq.ChevronSmallRightIcon,
        j = null != n || l;
    return (0, i.jsxs)(nF, {
        ...f,
        title: t,
        trailing: j
            ? (0, i.jsxs)("span", {
                  className: nG.ZY,
                  children: [
                      n,
                      l
                          ? (0, i.jsx)(e7.D, {
                                className: nG.L$,
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
        headerClassName: h ? void 0 : nG.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, i.jsx)("div", { id: m, className: o()(nG.rf, u), hidden: !h, children: d })],
    });
}
var nB = n(883646);
let nK = [];
function nH(e) {
    let { status: t } = e;
    return (0, i.jsxs)("span", {
        className: o()(nB.xL, {
            [nB.Vb]: "in_progress" === t,
            [nB.cT]: "completed" === t,
            [nB.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return ej.intl.string(eb.default.KvBdun);
                case "in_progress":
                    return ej.intl.string(eb.default["m5G9+S"]);
                case "unfinished":
                    return ej.intl.string(eb.default.lRpwhD);
                default:
                    return ej.intl.string(eb.default.sPGeWi);
            }
        })(t),
        children: [
            (0, i.jsx)(v.y, {
                type: v.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nB.Qd,
                itemClassName: nB.xB,
                "aria-hidden": !0,
            }),
            (0, i.jsx)("svg", {
                className: nB.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, i.jsx)("path", { className: nB.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nW(e) {
    let { agents: t, active: n } = e,
        l = a.useMemo(() => (n ? t : nK), [n, t]),
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
        className: nB.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: a } = e,
                    { Illocon: s } = n;
                return (0, i.jsx)(
                    nL.u,
                    {
                        asset: (0, i.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: a,
                        position: "top",
                        children: (0, i.jsx)("span", {
                            className: nB.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, i.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      className: nB.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function nV(e) {
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
            ((t = (r ?? nK).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nK),
                [t],
            ));
    return (0, i.jsxs)("ul", {
        className: nB.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, i.jsxs)(
                    "li",
                    {
                        className: o()(nB.AS, { [nB.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, i.jsx)(nH, { status: n }),
                            (0, i.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nB.iV,
                                selectable: !0,
                                children: (0, i.jsx)("span", {
                                    className: nB.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, i.jsx)(nW, { agents: c.get(e.id) ?? nK, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, i.jsxs)("li", {
                      className: nB.AS,
                      "data-provisional": !0,
                      children: [
                          (0, i.jsx)(nH, { status: "pending" }),
                          (0, i.jsx)(x.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nB.iV,
                              selectable: !0,
                              children: (0, i.jsx)("span", { className: nB.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nX(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: a = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = ej.intl.formatToPlainString(eb.default["P/I+JW"], { completed: u, total: o }),
        d = ej.intl.formatToPlainString(eb.default["7tzwKB"], { completed: u, total: o });
    return (0, i.jsx)(nU, {
        title: ej.intl.string(eb.default.RtzECX),
        meta: (0, i.jsx)(nz, { children: c }),
        superseded: s,
        showLabel: ej.intl.string(eb.default.RKyN9q),
        hideLabel: ej.intl.string(eb.default.xydHoj),
        className: nB.Nr,
        bodyClassName: nB.rf,
        beforeBody: r && !s ? (0, i.jsx)(n$.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, i.jsx)(nV, { todos: t, provisional: n, agents: l, live: a }),
    });
}
var nY = n(308665),
    nZ = n(59678),
    nQ = n(903847);
function nJ(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        f = null != n,
        [m, h] = a.useState(n ?? "top"),
        [g, p] = a.useState(f),
        [x, v] = a.useState(!1),
        [b, j] = a.useState(!1),
        [y, w] = a.useState(f);
    (y !== f && (w(f), null != n ? (h(n), p(!0)) : (v(!1), j(!1))),
        a.useEffect(() => {
            if (f || !g) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [f, g]),
        a.useEffect(() => {
            if (!g || !f) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => v(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [g, f]));
    let [k, A] = a.useState(!1),
        [S, C] = a.useState(!1),
        [I, N] = a.useState(b);
    (I !== b && (N(b), b ? A(!0) : C(!1)),
        a.useEffect(() => {
            if (b || !k) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [b, k]),
        a.useEffect(() => {
            if (!k || !b) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, b]));
    let E = null != l && l.length > 0,
        _ = a.useCallback(() => j((e) => !e), []);
    return g
        ? (0, i.jsxs)("div", {
              className: nQ.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, i.jsxs)("div", {
                      className: o()(nQ.vK, { [nQ.ho]: x && f, [nQ.ET]: !f }),
                      children: [
                          null == c
                              ? (0, i.jsx)("ol", {
                                    className: o()(nQ.Rk, nZ.pj),
                                    "data-live": "true",
                                    children: (0, i.jsx)(nT.A, {
                                        glyph: (0, i.jsx)(nY.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, i.jsx)(e7.D, {
                                    className: nQ.pZ,
                                    onClick: c,
                                    "aria-label": ej.intl.string(eb.default.hEK6qu),
                                    children: (0, i.jsx)("ol", {
                                        className: o()(nQ.Rk, nZ.pj),
                                        "data-live": "true",
                                        children: (0, i.jsx)(nT.A, {
                                            glyph: (0, i.jsx)(nY.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          E
                              ? (0, i.jsx)(d.m, {
                                    text: ej.intl.string(eb.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, i.jsx)(e7.D, {
                                        className: nQ.BO,
                                        onClick: _,
                                        "aria-expanded": b,
                                        "aria-label": ej.intl.string(eb.default.RtzECX),
                                        children: (0, i.jsx)(nP.ClipboardListIcon, {
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
                  k && E
                      ? (0, i.jsx)("div", {
                            className: o()(nQ.vB, { [nQ.pg]: b && S, [nQ.ui]: !b }),
                            children: (0, i.jsx)(nX, {
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
let n0 = new Map(),
    n1 = (0, k.D)(() => ({ byMessageKey: {} }));
function n2(e, t) {
    let { [e]: n, ...l } = n1.getState().byMessageKey;
    n1.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var n3 = n(195880),
    n4 = n(287111),
    n5 = n(16619);
function n7(e) {
    let t = (0, n5.qh)("ConjureClarificationProjectPicker");
    return a.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var n8 = n(337232),
    n6 = n(890497),
    n9 = n(103557),
    le = n(29073),
    lt = n(590077);
function ln(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let i = n7(e),
                [s, u] = a.useState(null),
                [o, c] = a.useState([]),
                [d, f] = a.useState(t.prompt),
                [m, h] = a.useState(!1),
                [g, p] = a.useState(!1),
                x = a.useRef(new Map()),
                v = a.useRef(!1),
                b = a.useRef(!1),
                j = a.useMemo(() => i.filter((e) => !o.some((t) => t.target.projectId === e.projectId)), [i, o]),
                y = a.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                w = a.useMemo(() => {
                    let e = s ?? y;
                    return j.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, j]),
                k = a.useMemo(() => j.filter((e) => w.includes(e.projectId)), [j, w]),
                A = a.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                S = d.trim(),
                C = n && !m && (k.length > 0 ? "" !== S : o.length > 0),
                I = a.useCallback(
                    (t) => {
                        b.current ||
                            ((b.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, n4.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          ej.intl.formatToPlainString(eb.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = ej.intl.formatToPlainString(eb.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                N = a.useCallback(() => {
                    let t, n;
                    if (!C) return;
                    if (0 === k.length) return void I(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = ts.Ay.getProject(e)?.name ?? e),
                        (n = ej.intl.formatToPlainString(eb.default.ScoZLp, { name: t, projectId: e })),
                        `${S}

${n}`);
                    Promise.allSettled(
                        k.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, n3.m)() }), x.current.set(e.projectId, t)),
                                (0, n8.s)(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = k.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: S }))];
                        if (t.length === k.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), u(k.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [C, I, o, e, k, S]),
                E = a.useCallback(() => {
                    ((v.current = !0), o.length > 0 && !m && I(o), l());
                }, [I, o, l, m]);
            return {
                projects: j,
                targetIds: w,
                setTargetIds: A,
                prompt: d,
                setPrompt: f,
                sending: m,
                failed: g,
                canSubmit: C,
                submit: N,
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
        d = `${n.id}-heading`;
    return (0, i.jsxs)("section", {
        className: o()(le.nd, le.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, i.jsxs)("div", {
                className: le.wx,
                children: [
                    (0, i.jsx)(x.E, {
                        tag: "span",
                        id: d,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: le.TK,
                        children: n.summary,
                    }),
                    (0, i.jsx)(tQ.K, {
                        icon: e8.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": ej.intl.string(eb.default.KQUuAZ),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lt.r,
                children: [
                    0 === c.length
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ej.intl.string(eb.default.TbbzW5),
                          })
                        : (0, i.jsx)(n6.Z, {
                              label: ej.intl.string(eb.default["29gr8j"]),
                              placeholder: ej.intl.string(eb.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...u.targetIds],
                              onSelectionChange: u.setTargetIds,
                              disabled: u.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, i.jsx)(n9.f, {
                        label: ej.intl.string(eb.default.XZNsDA),
                        value: u.prompt,
                        onChange: u.setPrompt,
                        maxLength: 4e3,
                        disabled: u.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: u.failed ? ej.intl.string(eb.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: le.qr,
                children: (0, i.jsx)("div", {
                    className: le.zt,
                    children: (0, i.jsx)(f.$, {
                        variant: "primary",
                        size: "sm",
                        text: ej.intl.string(eb.default.gG4j6o),
                        disabled: !u.canSubmit,
                        loading: u.sending,
                        onClick: u.submit,
                    }),
                }),
            }),
        ],
    });
}
var ll = n(47167),
    lr = n(734057),
    li = n(994500),
    la = n(360047);
function ls(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
var lu = n(652215);
function lo(e) {
    return 0 === e.options.length && null == e.input;
}
function lc(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function ld(e, t, n) {
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
function lf(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function lm(e, t, n, l) {
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
let lh = {
    [lu.rbe.GUILD_TEXT]: "text",
    [lu.rbe.GUILD_VOICE]: "voice",
    [lu.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [lu.rbe.GUILD_STAGE_VOICE]: "stage",
    [lu.rbe.GUILD_FORUM]: "forum",
    [lu.rbe.GUILD_MEDIA]: "media",
};
function lg(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = lr.A.getChannel(t)?.type) ? void 0 : lh[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = y.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let lp = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lx = {
        channel: [eb.default["9+dfPT"], eb.default.pGSJqE],
        role: [eb.default["2VkCoD"], eb.default.c8YlX8],
        user: [eb.default.GZIAxl, eb.default["4bptbQ"]],
        project: [eb.default.twlOb6, eb.default.twlOb6],
        server: [eb.default.ZWXDeI, eb.default.ZWXDeI],
    };
function lv(e, t) {
    return ej.intl.string(lx[e][+!!t]);
}
var lb = n(658675),
    lj = n(22231),
    ly = n(123292),
    lw = n(900797),
    lk = n(331322),
    lA = n(771871),
    lS = n(700915),
    lC = n(985965),
    lI = n(831819);
function lN(e) {
    let { link: t, disabled: n } = e,
        l = a.useId(),
        [r, s] = a.useState(!1),
        u = a.useRef(null),
        { sentence: o, options: c } = t.data,
        d = c.length > 1,
        f = a.useMemo(() => c.map((e) => ({ name: e.label, value: e.build })), [c]);
    return (
        a.useEffect(() => {
            r && u.current?.querySelector("input:checked")?.focus();
        }, [r]),
        (0, i.jsx)("div", {
            className: lI.Nz,
            children: (0, i.jsxs)(lk.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(lS.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, i.jsx)(lC.A, { purpose: t.purpose }) : null,
                    null != o
                        ? (0, i.jsxs)("div", {
                              className: lI.em,
                              children: [
                                  (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: o }),
                                  d && !r
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(x.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, i.jsx)(ly.Q, {
                                                    text: ej.intl.string(eb.default.I5F6YX),
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
                              ref: u,
                              className: lI.zM,
                              children: [
                                  (0, i.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, i.jsx)(lA.z, {
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
var lE = n(344587),
    l_ = n(155078);
function lM(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let lR = [];
function lP(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? ej.intl.string(eb.default.ZZ641e)
          : ej.intl.string(1 === e.options.length ? eb.default["2g3gk9"] : eb.default.dkzChE);
}
var lT = n(762026);
function lL(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function l$(e, t) {
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
var lD = n(682163),
    lq = n(300344),
    lO = n(614733),
    lF = n(904363),
    lG = n(950902),
    lz = n(136722),
    lU = n(778858),
    lB = n(808728),
    lK = n(696451),
    lH = n(71393),
    lW = n(488926),
    lV = n(426035),
    lX = n(246338);
let lY = lz.kg(lu.xBc.VIEW_CHANNEL, lu.xBc.SEND_MESSAGES);
var lZ = n(384017);
function lQ(e) {
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
        return lg(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
        className: lZ.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, i.jsx)(n6.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => a(g(e), t),
              })
            : (0, i.jsx)(n6.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => a(null == e ? [] : g([e]), t),
              }),
    });
}
function lJ(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lq.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: i, value: s, disabled: u, onChange: o } = e,
            d =
                ((t = null != r && "channel" === i.input && "safety_alerts_channel" === i.default),
                (n = (0, c.bG)(
                    [ts.Ay],
                    () => {
                        let e = t ? ts.Ay.getProject(l) : null;
                        return null == e ? null : (0, lV.ug)(e);
                    },
                    [l, t],
                )),
                a.useEffect(() => {
                    null == r || null == n || lK.Ay.isMember(r, n) || lU.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [lB.A, lK.Ay, lH.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lH.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lB.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let a = (0, lX.Lp)(l, i.channel_filter).find((t) => t.id === e);
                        if (null == a) return null;
                        if (null != n && lK.Ay.isMember(r, n))
                            return lW.$3({ permission: lY, user: n, context: a }) ? a : null;
                        let s = a.permissionOverwrites[r]?.deny ?? lz.BY;
                        return lz.X8(s, lY) ? null : a;
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
                            o(((e = []), lg("channel", [d.id], () => (0, ll.m1)(d, y.default, li.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, i.jsx)(lQ, { ...r, guildId: n, options: s, placeholder: lv("channel", !0 === r.question.multi_select) });
}
function l0(e) {
    let { guildId: t, ...n } = e,
        l = (0, lF.A)(t);
    return (0, i.jsx)(lQ, { ...n, guildId: t, options: l, placeholder: lv("role", !0 === n.question.multi_select) });
}
function l1(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: a } = (0, lO.A)(t);
    return (0, i.jsx)(lQ, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: a,
        placeholder: lv("user", !0 === n.question.multi_select),
    });
}
function l2(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = n7(t),
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
    return 0 === s.length ? n : (0, i.jsx)(lQ, { ...l, options: s, placeholder: lv("project", !1) });
}
function l3(e) {
    let t = e.target;
    (0, tF.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function l4(e) {
    let { fallback: t, ...n } = e,
        l = (0, n5.z9)("ConjureClarificationEntityPicker"),
        r = a.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, i.jsx)(lD.Ay, { guild: e, size: lD.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, i.jsx)("div", {
              onFocus: l3,
              onMouseUp: l3,
              children: (0, i.jsx)(lQ, { ...n, options: r, placeholder: lv("server", !1) }),
          });
}
function l5(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lG.Tj)(t, !0);
    if ("project" === l.question.input) return (0, i.jsx)(l2, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, i.jsx)(l4, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, i.jsx)(lJ, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, i.jsx)(l0, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, i.jsx)(l1, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var l7 = n(87221),
    l8 = n(26430),
    l6 = n(750943),
    l9 = n(173936),
    re = n(95477),
    rt = n(256905),
    rn = n(490707),
    rl = n(907702);
function rr(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, rn._)(t, n),
        [d, f] = a.useState(null),
        m = null != s && d === s;
    return u
        ? (0, i.jsxs)("span", {
              className: o()(rl.Gt, rl.b6),
              children: [
                  (0, i.jsx)(l7.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: ej.intl.string(eb.default.lhgD88),
                  }),
              ],
          })
        : (0, i.jsx)("span", {
              className: o()(rl.Gt, { [rl.iP]: !m }),
              children:
                  null != s
                      ? (0, i.jsx)("img", {
                            src: s,
                            alt: l,
                            className: rl.Sl,
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
function ri(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: a,
            selected: s,
            disabled: u,
            reachable: c,
            tabbable: f,
            onPick: m,
            onView: h,
            onArrow: g,
            onMeasured: p,
            onRemove: v,
        } = e,
        b = ej.intl.formatToPlainString(eb.default.JGjZMs, { answer: r.label });
    return (0, i.jsxs)("div", {
        className: o()(rl.Vs, { [rl.Q9]: s, [rl.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, i.jsxs)(e7.D, {
                className: o()(rl.Up, { [rl.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => h(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), g(r, t));
                },
                role: a ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ej.intl.formatToPlainString(eb.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && f ? 0 : -1,
                children: [
                    (0, i.jsxs)("span", {
                        className: rl.$_,
                        children: [
                            null != r.image
                                ? (0, i.jsx)(rr, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, i.jsx)("span", { className: rl.Gt }),
                            (0, i.jsx)("span", {
                                className: rl.q3,
                                "aria-hidden": !0,
                                children: a
                                    ? (0, i.jsx)(lb.P, { checked: s, disabled: u })
                                    : (0, i.jsx)(lA.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: rl.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, l_.E)(t) : "")
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
            null != v
                ? (0, i.jsx)("span", {
                      className: rl.B4,
                      children: (0, i.jsx)(d.m, {
                          text: ej.intl.string(eb.default.HQEXJM),
                          children: (0, i.jsx)(tQ.K, {
                              icon: t3.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: v,
                              disabled: u,
                              "aria-label": ej.intl.string(eb.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, i.jsx)("span", {
                        className: rl.B4,
                        children: (0, i.jsx)(d.m, {
                            text: ej.intl.string(eb.default["4/eeDD"]),
                            children: (0, i.jsx)(tQ.K, {
                                icon: l8.MaximizeIcon,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => h(r),
                                "aria-label": b,
                                tabIndex: c && f ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function ra(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: c } = e,
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
                      label: ej.intl.string(eb.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        j = a.useCallback(
            (e) => {
                let n = (null == b ? f : [...f, b]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, tz.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, rt.R)({
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
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || u(l));
            },
            [r, d, u, f],
        );
    return (0, i.jsxs)("div", {
        className: rl.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == b
                ? null
                : (0, i.jsxs)("div", {
                      ref: h,
                      className: o()(rl.fF, "gallery" === m ? rl.nV : rl.nM, { [rl.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, i.jsx)(
                                  ri,
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
                                      onView: j,
                                      onArrow: y,
                                      onMeasured: (t) => g.current.set(e.id, t),
                                  },
                                  e.id,
                              ),
                          ),
                          null != b
                              ? (0, i.jsx)(
                                    ri,
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
            (0, i.jsx)(rs, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: ej.intl.string(/\bicons?\b/i.test(n.question) ? eb.default.qU4WN6 : eb.default.cbMDDB),
            }),
        ],
    });
}
function rs(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = a.useRef(null),
        [o, c] = a.useState(!1),
        [d, m] = a.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== d.trim() &&
            null == g &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, i.jsxs)("div", {
        className: rl.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, i.jsxs)("div", {
                className: rl.QJ,
                children: [
                    (0, i.jsx)(f.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l6.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, i.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: l9.LinkIcon,
                              text: ej.intl.string(eb.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, i.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: rl.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, n4.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            o
                ? (0, i.jsxs)("div", {
                      className: rl.vG,
                      children: [
                          (0, i.jsx)("div", {
                              className: rl.Hs,
                              children: (0, i.jsx)(re.k, {
                                  label: ej.intl.string(eb.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: ej.intl.string(eb.default.AVhvn8),
                                  value: d,
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
                              className: rl.gd,
                              children: [
                                  (0, i.jsx)(f.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ej.intl.string(eb.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, i.jsx)(ly.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: ej.intl.string(eb.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, i.jsx)(x.E, {
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
function ru(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = a.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, i.jsxs)(e7.D, {
        className: o()(lZ.uK, { [lZ.ue]: l, [lZ.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": ej.intl.formatToPlainString(d ? eb.default["2p6UFz"] : eb.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, i.jsx)("span", { className: lZ.dy, children: (0, i.jsx)(lb.P, { checked: u, disabled: l }) })
                : (0, i.jsx)("span", { className: lZ.Gy, "aria-hidden": !0, children: n }),
            (0, i.jsxs)("span", {
                className: lZ.qO,
                children: [
                    (0, i.jsx)("span", {
                        className: lZ.l8,
                        children: (0, i.jsx)(x.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lZ.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, i.jsx)(x.E, {
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
                ? (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/semibold",
                      color: "text-muted",
                      className: lZ.rM,
                      children: ej.intl.string(eb.default.zku6r1),
                  })
                : null,
        ],
    });
}
function ro(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: a = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return lM(n)
        ? (0, i.jsx)(ra, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: a, onPick: s, own: u })
        : (0, i.jsx)(i.Fragment, {
              children: n.options.map((e, t) =>
                  (0, i.jsx)(
                      ru,
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
let rc = [],
    rd = [];
function rf(e) {
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
        f = !0 === n.multi_select ? ej.intl.string(eb.default.tE8qbz) : lP(n);
    return (0, i.jsxs)("div", {
        className: o()(lZ.Ge, lZ.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, i.jsx)(x.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lZ.aK,
                      children: f,
                  }),
            (0, i.jsx)(ro, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: l$(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && lM(n))
                ? null
                : (0, i.jsxs)("div", {
                      className: lZ.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lZ.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(lj.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, i.jsx)("span", { className: o()(lZ.Pu, lZ.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, i.jsx)("div", {
                      className: lZ.$0,
                      children: (0, i.jsx)(ly.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: ej.intl.string(eb.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function rm(e) {
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
        [v, b] = a.useState({}),
        [j, y] = a.useState({}),
        [w, k] = a.useState({}),
        [A, S] = a.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [C, I] = a.useState({}),
        { builds: N, linkFor: E } = (function (e, t, n) {
            let l = a.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = ls(e, t, n[t.id] ?? []);
                                return null == l ? [] : [[t.id, l]];
                            }),
                        ),
                    [t, n, e],
                ),
                [r, i] = a.useState({}),
                [s, u] = a.useState({}),
                o = a.useRef(new Set());
            a.useEffect(() => {
                for (let e of Object.values(l))
                    o.current.has(e.key) ||
                        (o.current.add(e.key),
                        (async function (e, t, n) {
                            try {
                                let l = await (0, la.LW)(e, t);
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
                            o = null == a ? null : r[a.key],
                            c = n[i]?.[0]?.name,
                            f = d[e]?.name;
                        if (null == a || null == o || null == c || null == f) return null;
                        let m = a.caller === e,
                            h = d[a.caller],
                            g = {
                                caller: m ? f : c,
                                target: m ? c : f,
                                targetLive: o.live,
                                targetHasPreview: o.hasPreview,
                                callerHasPreview: null == h || (0, eF._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[a.key] ?? o.build,
                            x = t.questions.find((e) => e.id === i);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[a.target] ?? null,
                            flow: x?.link_flow ?? o.flow,
                            purpose: (0, lT.xP)(x?.link_purpose ?? o.purpose),
                            data: (0, lT.Bw)(g, p),
                            value: p,
                            aria: (0, lT.sr)(g),
                            onChange: (e) => u((t) => ({ ...t, [a.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, A),
        [_, M] = a.useState(!1),
        [R, P] = a.useState(0),
        [T, L] = a.useState(null),
        [$, D] = a.useState(null),
        [q, O] = a.useState(null),
        [F, G] = a.useState(!1),
        z = a.useRef(null),
        [U, B] = a.useState(null),
        K = a.useRef(null),
        H = a.useRef(0),
        W = null == r,
        V = l.questions.length,
        X = Math.min(R, V - 1),
        Y = l.questions[X],
        [Z, Q] = a.useState({ id: Y.id, expanded: !1 }),
        J = Z.id === Y.id && Z.expanded,
        [ee, et] = a.useState(null),
        en = j[Y.id] ?? "",
        el = !0 === Y.multi_select,
        er = lM(Y),
        ei = el ? ej.intl.string(eb.default.tE8qbz) : lP(Y),
        ea = el
            ? (w[Y.id] ?? rc)
            : ((t = v[Y.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : lR),
        es = (function (e, t, n) {
            let [l, r] = a.useState({}),
                [i, s] = a.useState({}),
                [u, o] = a.useState({}),
                c = ej.intl.string(eb.default.wTsP5l),
                d = a.useCallback((e) => l[e] ?? null, [l]),
                f = a.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : lL(t[e.id])),
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
                        if (u) return l$(h, f(a));
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
                                    null != l && (0, tz.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, tz.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !lL(e[d])) return e;
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
                                                error: { source: "upload", text: ej.intl.string(eb.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, tz.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : ej.intl.string(eb.default.l79PMc),
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
        })(n, v, b),
        eu = es.imageFor(Y.id),
        eo = es.selectedFor(Y),
        { text: ec, phase: ed } = (0, lE.Q)(Y.question),
        ef = ec === Y.question,
        em = ef && ee?.id === Y.id && ee.truncated;
    a.useLayoutEffect(() => {
        if (null == U || J || !ef) return;
        function e() {
            if (null == U) return;
            let e = U.scrollHeight > U.clientHeight + 1;
            et((t) => (t?.id === Y.id && t.truncated === e ? t : { id: Y.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(U), () => t.disconnect());
    }, [ef, U, Y.id, J]);
    let eh = ej.intl.string(J ? ej.t.iTcuma : ej.t.dcl9MQ),
        eg = a.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let i = lf(t, n);
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
                                              let r = ls(e, t, [n]);
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
                                              return (0, la.Ol)(t, n, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, N, r);
            },
            [l, N, r, n],
        ),
        ep = a.useCallback(
            (e, t) => {
                H.current += 1;
                let n = H.current;
                (L({ direction: t, moves: n }),
                    D({ question: Y, draft: en, selected: ea, ownImage: eu, ownSelected: eo, direction: t, moves: n }),
                    G(!0),
                    P(e));
            },
            [en, eu, eo, Y, ea],
        ),
        ex = a.useCallback(() => {
            let e = z.current,
                t = K.current;
            null != e && null != t && O({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = z.current,
            t = K.current;
        if (null == e || null == t) return;
        ex();
        let n = new ResizeObserver(ex);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ex]);
    let ev = T?.moves;
    a.useEffect(() => {
        if (null == ev) return;
        let e = setTimeout(() => D(null), 400),
            t = setTimeout(() => G(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ev]);
    let ey = a.useCallback(
            (e) => {
                let t = ld(l, e, X);
                null == t ? eg(e) : ep(t, t < X ? "back" : "forward");
            },
            [l, X, eg, ep],
        ),
        ew = a.useCallback(
            (e) => {
                if (W) return;
                let t = { ...v, [Y.id]: e };
                (b(t), ey(t));
            },
            [ey, v, W, Y.id],
        ),
        ek = a.useCallback(() => {
            W || 0 === X || ep(X - 1, "back");
        }, [W, X, ep]),
        eA = 0 !== X || W ? void 0 : m,
        eS = (X > 0 && !W) || null != eA,
        eC = a.useCallback(
            (e) => {
                y((e) => ({ ...e, [Y.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                er ? W || b((e) => ({ ...e, [Y.id]: t })) : ew(t);
            },
            [W, er, Y.id, ew],
        ),
        eI = a.useCallback(() => {
            (y((e) => ({ ...e, [Y.id]: "" })), ew({ kind: "custom", text: ej.intl.string(eb.default.zxSq2q) }));
        }, [Y.id, ew]),
        { multiPartFor: eN } = es,
        eE = a.useMemo(() => (el ? lm(Y, ea, en, eN(Y)) : null), [en, el, eN, Y, ea]),
        e_ = A[Y.id] ?? rd,
        eM = E(Y.id),
        eR = a.useMemo(() => {
            var e, t;
            let n;
            return null != Y.input
                ? ((e = Y.input),
                  (t = C[Y.id]),
                  (n = en.trim()),
                  {
                      kind: "entities",
                      entities: e_,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...e_.map((t) => (t.name.startsWith(lp[e]) ? t.name : `${lp[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [en, C, e_, Y.id, Y.input]),
        eP = a.useCallback(
            (e, t) => {
                (S((t) => ({ ...t, [Y.id]: e })), I((e) => ({ ...e, [Y.id]: t })));
            },
            [Y.id],
        ),
        eT = a.useCallback(() => M(!0), []),
        eL = a.useCallback(() => M(!1), []),
        e$ = es.controlsFor(Y, W),
        eD = a.useMemo(() => {
            var e;
            let t;
            return (
                (e = v[Y.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: ej.intl.string(eb.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(Y, e))
                    ? null
                    : "" === en.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? lm(Y, [t.optionId], en)
                        : lm(Y, [], en, t)
            );
        }, [v, en, Y]),
        eq = a.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eR, eE ?? eD, en),
            [en, eE, eD, eR],
        ),
        eO = a.useCallback(() => {
            null != eq && ew(eq);
        }, [eq, ew]),
        [eG, ez] = a.useState(!1),
        [eU, eB] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ez(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eK = a.useCallback(() => {
            null != s && (eB(!0), setTimeout(s, 150));
        }, [s]),
        eH = eq ?? (null == eR && null == eE ? (v[Y.id] ?? null) : null),
        eW = a.useMemo(
            () =>
                null == eH
                    ? (function (e, t, n) {
                          let l = e.questions[n];
                          if (l?.optional !== !0) return null;
                          let r = Object.fromEntries(
                              Object.entries(t).filter((e) => {
                                  let [t] = e;
                                  return t !== l.id;
                              }),
                          );
                          return null == ld(e, r, n) && "" === lf(e, r) ? null : r;
                      })(l, v, X)
                    : null,
            [v, l, X, eH],
        ),
        eV = null != eW,
        eX = (null != eH || eV) && !W,
        eY = X === V - 1,
        eZ = a.useCallback(() => {
            W || (null != eH ? ew(eH) : null != eW && (b(eW), ey(eW)));
        }, [ey, W, eH, ew, eW]),
        eQ = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tF.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tF.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tF.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eS
                            ? (e.preventDefault(), (eA ?? ek)())
                            : "ArrowRight" === e.key && eX && (e.preventDefault(), eZ())));
            },
            [eA, eS, eX, ek, eZ],
        ),
        eJ =
            er && !0 !== Y.upload
                ? null
                : (0, i.jsxs)("div", {
                      className: lZ.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lZ.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(lj.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, i.jsx)(tB.y, {
                              value: en,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  y((e) => ({ ...e, [Y.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eO());
                              },
                              placeholder: ej.intl.string(lo(Y) ? eb.default.yLN1x6 : eb.default["tOC+tn"]),
                              "aria-label": ej.intl.formatToPlainString(eb.default["4JeYPB"], { question: Y.question }),
                              disabled: W,
                              rows: 1,
                              className: lZ.Pu,
                              "data-conjure-clarification-other": Y.id,
                          }),
                      ],
                  });
    return (0, i.jsxs)("section", {
        className: o()(lZ.$O, { [lZ.fI]: eG && !eU, [lZ.Oh]: eU }),
        role: "dialog",
        "aria-label": Y.question,
        "data-conjure-clarification": l.id,
        "data-state": W ? "inert" : "open",
        "data-question-expanded": J ? "true" : void 0,
        "data-picker-open": _ && !F ? "true" : void 0,
        "data-step": X,
        tabIndex: -1,
        onKeyDown: eQ,
        children: [
            (0, i.jsxs)("div", {
                className: lZ.rf,
                style: null == q ? void 0 : { height: q.heading + q.rows },
                "data-moving": F ? "" : void 0,
                children: [
                    (0, i.jsxs)("div", {
                        ref: z,
                        className: lZ.wx,
                        children: [
                            (0, i.jsx)(x.E, {
                                ref: B,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: J ? void 0 : p,
                                className: o()(le.TK, lZ.R_, { [lZ.TB]: "exit" === ed, [lZ.JU]: "enter" === ed }),
                                children: ec,
                            }),
                            em || J
                                ? (0, i.jsx)("div", {
                                      className: le.Q7,
                                      children: (0, i.jsx)(d.m, {
                                          text: eh,
                                          children: (0, i.jsx)(tQ.K, {
                                              icon: J ? lw.ChevronSmallUpIcon : nD.ChevronSmallDownIcon,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Q({ id: Y.id, expanded: !J }),
                                              "aria-label": eh,
                                              "aria-controls": `${Y.id}-label`,
                                              "aria-expanded": J,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, i.jsx)(e7.D, {
                                      className: o()(le.gb, le.Q7),
                                      onClick: eK,
                                      "aria-label": ej.intl.string(eb.default.qVXlk0),
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
                        className: lZ.Cg,
                        style: null == q ? void 0 : { insetBlockStart: q.heading },
                        children: (0, i.jsxs)("div", {
                            className: lZ.I,
                            children: [
                                (0, i.jsxs)("div", {
                                    ref: K,
                                    className: lZ.Ge,
                                    role: "group",
                                    "aria-labelledby": `${Y.id}-label`,
                                    "data-direction": T?.direction,
                                    "data-parity": null == T ? void 0 : T.moves % 2,
                                    children: [
                                        null == ei
                                            ? null
                                            : (0, i.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lZ.aK,
                                                  children: ei,
                                              }),
                                        (0, i.jsx)(ro, {
                                            projectId: n,
                                            question: Y,
                                            selected: ea,
                                            disabled: W,
                                            onPick: (e) =>
                                                el
                                                    ? k((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Y.id]:
                                                                  ((n = t[Y.id] ?? rc),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  Y.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eC(e),
                                            own: e$,
                                        }),
                                        null != Y.input
                                            ? (0, i.jsx)(l5, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: e_,
                                                  disabled: W,
                                                  onChange: eP,
                                                  onFocus: eT,
                                                  onBlur: eL,
                                                  fallback: lc(Y) ? null : eJ,
                                              })
                                            : null,
                                        null != eM ? (0, i.jsx)(lN, { link: eM, disabled: W }) : null,
                                        null != Y.note
                                            ? (0, i.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lZ.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        lc(Y) ? eJ : null,
                                        !0 === Y.upload
                                            ? (0, i.jsx)("div", {
                                                  className: lZ.$0,
                                                  children: (0, i.jsx)(ly.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: ej.intl.string(eb.default.zxSq2q),
                                                      disabled: W,
                                                      onClick: eI,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == $
                                    ? null
                                    : (0, i.jsx)(
                                          rf,
                                          {
                                              projectId: n,
                                              question: $.question,
                                              draft: $.draft,
                                              selected: $.selected,
                                              ownImage: $.ownImage,
                                              ownSelected: $.ownSelected,
                                              direction: $.direction,
                                              disabled: W,
                                          },
                                          $.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            V > 1 || el || er || null != Y.input || null != m || !0 === Y.optional || lo(Y)
                ? (0, i.jsxs)("div", {
                      className: le.qr,
                      children: [
                          (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  V > 1
                                      ? ej.intl.formatToPlainString(eb.default.yzYUjq, { index: X + 1, total: V })
                                      : null,
                          }),
                          (0, i.jsxs)("div", {
                              className: le.zt,
                              children: [
                                  eS
                                      ? (0, i.jsx)(ly.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: h ?? ej.intl.string(eb.default.Pk5lfA),
                                            onClick: eA ?? ek,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  g
                                      ? null
                                      : (0, i.jsx)(f.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eY
                                                ? (u ?? ej.intl.string(ej.t.geKm7t))
                                                : ej.intl.string(eV ? eb.default.ZcrbKz : eb.default.w1nRmT),
                                            disabled: !eX,
                                            onClick: eZ,
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
var rh = n(557744),
    rg = n(223347),
    rp = n(890698),
    rx = n(27232),
    rv = n(505930);
let rb = [1, 2, 3, 4, 5];
n(786986);
var rj = n(693654);
function ry(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = a.useId(),
        u = a.useId();
    return (0, i.jsxs)("div", {
        className: rj.zm,
        children: [
            (0, i.jsx)(x.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, rp.wy)(t) }),
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: rj.uf,
                children: rb.map((e) => {
                    let a = null != n && e <= n,
                        s = a ? rx.StarIcon : rv.StarOutlineIcon;
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: rj.uK,
                            children: [
                                (0, i.jsx)("input", {
                                    type: "radio",
                                    name: u,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: rj.hF,
                                    "aria-label": (0, rp.MF)(t, e),
                                }),
                                (0, i.jsx)("span", {
                                    className: o()(rj.d4, { [rj.cO]: a }),
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
function rw(e) {
    let { pending: t } = e,
        n = (0, rp.PM)(t),
        l = a.useId();
    return (0, i.jsx)("section", {
        className: rj.Nr,
        "aria-labelledby": l,
        children: (0, i.jsxs)(lk.B, {
            gap: 12,
            children: [
                (0, i.jsxs)(lk.B, {
                    gap: 4,
                    children: [
                        (0, i.jsx)(p.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: ej.intl.string(eb.default.GVLtfq),
                        }),
                        (0, i.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ej.intl.string(eb.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, i.jsxs)(lk.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, i.jsx)(
                                ry,
                                {
                                    dimension: e,
                                    value: n.scores[e],
                                    disabled: n.submitting,
                                    onChange: (t) => n.setScore(e, t),
                                },
                                e,
                            ),
                        ),
                        (0, i.jsx)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: ej.intl.string(eb.default.BvaFUc),
                        }),
                    ],
                }),
                (0, i.jsx)(n9.f, {
                    label: ej.intl.string(eb.default.d28g0o),
                    placeholder: ej.intl.string(eb.default.EBB7lL),
                    value: n.feedback,
                    onChange: n.setFeedback,
                    rows: 3,
                    maxLength: 2e3,
                    disabled: n.submitting,
                }),
                null != n.error
                    ? (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: n.error,
                      })
                    : null,
                (0, i.jsx)(lk.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, i.jsx)(f.$, {
                        variant: "primary",
                        size: "sm",
                        text: ej.intl.string(eb.default.CYQood),
                        disabled: !n.canSubmit,
                        loading: n.submitting,
                        onClick: n.submit,
                    }),
                }),
            ],
        }),
    });
}
var rk = n(894443),
    rA = n(525530),
    rS = n(564963),
    rC = n(530557),
    rI = n(431527),
    rN = n(628284);
let rE = new Set(["select", "channel", "role", "user"]);
function r_(e, t) {
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
function rM(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var rR = n(914250),
    rP = n(202723);
function rT(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u, onDismiss: c } = e,
        d = a.useCallback(() => {
            (0, e_.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, i.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        m = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: rC.KeyIcon })), [r.fields]),
        h = (0, rS.bB)(l, s),
        g = o()(rP.Lo, { [rP.jY]: h });
    if ("superseded" === s)
        return (0, i.jsx)(
            "article",
            {
                className: g,
                children: (0, i.jsx)(x.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: ej.intl.string(eb.default.CTxtdV),
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
                    (0, i.jsx)(x.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: ej.intl.string(eb.default.HCQvpO),
                    }),
                    (0, i.jsx)(rI.C, { label: ej.intl.string(eb.default.HCQvpO), size: "xs", items: m }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, i.jsx)(
            "article",
            {
                className: rP.Lo,
                children: (0, i.jsx)(rI.C, { label: ej.intl.string(eb.default.HCQvpO), size: "xs", items: m }),
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
                        className: rP.$h,
                        children: [
                            (0, i.jsx)("span", {
                                className: rP.c9,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(rN.CircleCheckIcon, {
                                    size: "xs",
                                    color: t5.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: ej.intl.string(eb.default.sfp7Up),
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: r.fields
                            .map((e) => e.label)
                            .map((e) =>
                                ej.intl.formatToPlainString(eb.default["Z+FC3j"], {
                                    label: e,
                                    value: ej.intl.string(eb.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let p = null != r.note && "" !== r.note ? r.note : ej.intl.string(eb.default.MPGSHL),
        v = (0, i.jsx)(f.$, { variant: "primary", size: "sm", onClick: d, text: ej.intl.string(eb.default.EK8tKY) });
    return null != c
        ? (0, i.jsxs)("section", {
              className: o()(le.nd, rP.fw),
              "aria-label": ej.intl.string(eb.default.O0QIqj),
              children: [
                  (0, i.jsxs)("div", {
                      className: le.wx,
                      children: [
                          (0, i.jsx)(rC.KeyIcon, { size: "xs", color: t5.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: le.TK,
                              children: ej.intl.string(eb.default.O0QIqj),
                          }),
                          (0, i.jsx)(e7.D, {
                              className: o()(le.gb, le.Q7),
                              onClick: c,
                              "aria-label": ej.intl.string(eb.default.Hl7rif),
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
                      className: rP.DQ,
                      children: [
                          (0, i.jsx)(rR.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, i.jsx)(rI.C, { label: ej.intl.string(eb.default.HCQvpO), size: "xs", items: m }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: le.qr,
                      children: [
                          (0, i.jsx)(x.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: rP.xE,
                              children: ej.intl.string(eb.default["2OdXdn"]),
                          }),
                          (0, i.jsx)("div", { className: le.zt, children: v }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("article", {
              className: rP.Lo,
              children: [
                  (0, i.jsx)(x.E, {
                      variant: "body-xs/semibold",
                      color: null != u ? "text-brand" : "text-muted",
                      tag: "span",
                      children: ej.intl.string(null != u ? eb.default.O0QIqj : eb.default.HCQvpO),
                  }),
                  (0, i.jsx)(rR.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, i.jsx)(rI.C, { label: ej.intl.string(eb.default.HCQvpO), size: "xs", items: m }),
                  (0, i.jsx)("div", { className: rP.sq, children: v }),
              ],
          });
}
var rL = n(442331),
    r$ = n(513425);
let rD = new Set(),
    rq = new Set();
function rO(e) {
    return (
        rq.add(e),
        () => {
            rq.delete(e);
        }
    );
}
function rF() {
    return a.useSyncExternalStore(rO, () => rD);
}
function rG(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        let a = e[i];
        if (null == a || "assistant" !== a.role || null == a.settingsRequest || !(0, n_.BL)(a)) continue;
        let s = a.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(a.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rz(e, t, n) {
    if (!n || null == t) return !1;
    let l = rM(e, t);
    return l.length > 0 && !r_({ keys: l }, t);
}
var rU = n(782973),
    rB = n(290713),
    rK = n(411236);
function rH(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: d,
            summary: m,
            markSaved: h,
        } = (function (e, t, n) {
            let l = rF(),
                [r, i] = a.useState(!1),
                s = null != n ? l.has(n) : r,
                u = a.useCallback(() => {
                    if (null != n) {
                        if (!rD.has(n)) for (let e of ((rD = new Set([...rD, n])), rq)) e();
                    } else i(!0);
                }, [n]),
                o = (0, c.bG)([rL.A], () => rz(t, rL.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([r$.A], () => null != n && rG(r$.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [rL.A, lr.A],
                    () => {
                        var n;
                        let l = rL.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => lr.A.getChannel(e)?.name ?? null),
                              rM(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: ej.intl.formatToPlainString(eb.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return ej.intl.string(eb.default.CJq1rY);
                                                      case "checkbox":
                                                          return ej.intl.string(
                                                              !0 === t ? eb.default.nXtpn3 : eb.default["0vfaMW"],
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
                                                                      : ej.intl.string(eb.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? ej.intl.string(eb.default.nEv677)
                                                              : ej.intl.string(eb.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return ej.intl.string(eb.default.Fw9G9A);
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
        return (0, i.jsx)("article", {
            className: rK.Mk,
            children: (0, i.jsx)(x.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: ej.intl.string(eb.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, i.jsxs)("article", {
            className: rK.Mk,
            children: [
                (0, i.jsxs)("div", {
                    className: rK.Ol,
                    children: [
                        (0, i.jsx)(rN.CircleCheckIcon, {
                            size: "xs",
                            color: t5.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(x.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: ej.intl.string(eb.default.AxBLLy),
                        }),
                    ],
                }),
                m.length > 0
                    ? (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: m.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === rU.B,
        v = null != n.note && "" !== n.note ? n.note : p ? null : ej.intl.string(eb.default.XuOf5s);
    return (0, i.jsx)(rB.A, {
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
            let u = (0, i.jsx)(f.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: ej.intl.string(eb.default.A7dQd9),
            });
            return null == r
                ? (0, i.jsxs)("form", {
                      className: rK.Mk,
                      onSubmit: s,
                      children: [
                          (0, i.jsx)(x.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ej.intl.string(eb.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, i.jsx)(rR.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, i.jsx)("div", { className: rK.p0, children: u }),
                      ],
                  })
                : (0, i.jsxs)("form", {
                      className: o()(le.nd, le.jx),
                      "aria-label": ej.intl.string(eb.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, i.jsxs)("div", {
                              className: le.wx,
                              children: [
                                  (0, i.jsx)(x.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: le.TK,
                                      children: ej.intl.string(eb.default["jZjP+I"]),
                                  }),
                                  (0, i.jsx)(e7.D, {
                                      className: o()(le.gb, le.Q7),
                                      onClick: r,
                                      "aria-label": ej.intl.string(eb.default["iq+Pte"]),
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
                              className: rK.DQ,
                              children: [
                                  null != v
                                      ? (0, i.jsx)(rR.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: le.qr,
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rK.xE,
                                      children: ej.intl.string(eb.default["1w0jMk"]),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: le.zt,
                                      children: [
                                          (0, i.jsx)(f.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: ej.intl.string(eb.default["9J3OG8"]),
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
var rW = n(975571),
    rV = n(427123);
let rX = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rY = n(874421),
    rZ = n(932111),
    rQ = n(940874),
    rJ = n(404373),
    r0 = n(89222);
function r1(e) {
    return "" !== r0.A.getDraft(e).trim();
}
var r2 = n(29080);
function r3(e) {
    var t;
    let n,
        l,
        { steps: r, content: i, hasProposal: a, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, nE.B4)(r),
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
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, nE.Lf)(r) }),
    };
}
var r4 = n(62617),
    r5 = n(182368);
let r7 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    r8 = {
        snail: () => eb.default.ABeVsS,
        goat: () => eb.default.dhXay8,
        frog: () => eb.default.SHeweG,
        bunny: () => eb.default.FytFE1,
        cat: () => eb.default["5c+sHs"],
        caterpillar: () => eb.default["/FYcne"],
        butterfly: () => eb.default["Ib/AxK"],
        dog: () => eb.default.zDjBR1,
        spider: () => eb.default["6sxyrN"],
        bee: () => eb.default.cVtefg,
        bot: () => eb.default.MjCw0v,
    },
    r6 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = a.useMemo(
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, r4.Z)(),
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
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, r4.Z)(),
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
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, r4.Z)(),
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
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, r4.Z)(),
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
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, r4.Z)(),
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
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, r4.Z)(),
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
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, r4.Z)(),
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
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, r4.Z)(),
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
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, r4.Z)(),
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
                        () => (0, r4.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, r4.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: r5.u, tint: "var(--illo-purple-40)" },
    };
function r9(e) {
    return { ...r6[e], name: ej.intl.string(r8[e]()) };
}
function ie(e) {
    return r7.includes(e) ? r9(e) : void 0;
}
function it(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % r7.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, r7[(t + n) % r7.length]);
            }),
            l
        );
    })(e))
        t.set(n, r9(l));
    return t;
}
var il = n(615839);
function ir(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : ej.intl.string(eb.default.KcFvbo);
}
var ii = n(60160),
    ia = n(101147);
function is(e) {
    let t = (0, nE.SY)(e.steps);
    return null != t ? (0, nE.WQ)(t) : ir(e.task);
}
function iu(e) {
    let t = it(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? ie(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: ir(e.task),
                      todoId: e.task.todoId,
                      line: is(e),
                  },
              ];
    });
}
function io(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: a, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, nE.SY)(n.steps),
        d = o
            ? is(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ir(e));
                  switch (e.status) {
                      case "failed":
                          return ej.intl.formatToPlainString(eb.default.YrVgOf, { task: t });
                      case "cancelled":
                          return ej.intl.formatToPlainString(eb.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return ej.intl.formatToPlainString(eb.default["++9woZ"], {
                                  task: t,
                                  duration: (0, il.MB)(e.durationMs),
                              });
                          return ej.intl.formatToPlainString(eb.default.nmI9Uh, { task: t });
                      default:
                          return ej.intl.formatToPlainString(eb.default.nmI9Uh, { task: t });
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
                                    className: nZ.dO,
                                    children: n.steps.map((e) =>
                                        (0, i.jsx)(
                                            ia.A,
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
                                      className: nZ.iq,
                                      children: (0, i.jsx)(ii.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, i.jsx)(nT.A, {
        glyph: (0, i.jsx)(nL.u, {
            asset: (0, i.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: a,
            body: ir(u),
            position: "left",
            children: (0, i.jsx)("span", {
                className: nZ.nC,
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
var ic = n(998445),
    id = n(643210),
    im = n(648127),
    ih = n(372795),
    ig = n(163897);
let ip = "conjure-browser-viewer";
function ix(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [id.A],
            () =>
                n.flatMap((e) => {
                    let n = id.A.getTab(t, e);
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
        className: ig.kR,
        "aria-label": ej.intl.string(eb.default.Uvkr1G),
        children: l.map((e) =>
            (0, i.jsx)("li", { children: (0, i.jsx)(iv, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function iv(e) {
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
        c = (0, e_.Ry)(ip),
        [d, f] = a.useState(!1),
        m = a.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, im.i)(l.session);
    return (0, i.jsxs)(e7.D, {
        innerRef: s,
        className: o()(ig.Nr, h && ig.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, e_.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(277162),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, i.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: ip },
                )
            );
        },
        "aria-label": ej.intl.formatToPlainString(eb.default.G3a822, { title: g }),
        children: [
            (0, i.jsxs)("div", {
                className: ig.Gt,
                children: [
                    (0, i.jsx)(ih.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: ig.Ji,
                        "aria-label": ej.intl.formatToPlainString(eb.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, i.jsx)("div", {
                              className: ig.qf,
                              children: (0, i.jsx)(ic.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, i.jsx)("div", {
                              className: ig.HS,
                              children: (0, i.jsx)(x.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: ej.intl.string(eb.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("span", {
                className: ig.pG,
                children: [
                    (0, i.jsx)("span", { className: o()(ig.W9, h && ig.oM) }),
                    (0, i.jsx)(x.E, {
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
var ib = n(268409);
let ij = new WeakMap(),
    iy = new WeakMap();
function iw(e) {
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
            [r$.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = ij.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = iy.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), iy.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ij.set(e, n), n);
                })(r$.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, i.jsx)("li", { className: ib.h, children: (0, i.jsx)(ix, { projectId: t, sessionIds: u }) });
}
var ik = n(469393);
function iA(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, eM.lG)(t.authored_at);
    return (0, i.jsx)(nF, {
        title: ej.intl.string(eb.default["t+b0rz"]),
        children: (0, i.jsxs)("div", {
            className: ik.r,
            children: [
                (0, i.jsxs)("div", {
                    className: ik.z,
                    children: [
                        (0, i.jsx)(x.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, i.jsx)(f.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ej.intl.string(eb.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var iS = n(288610),
    iC = n(493490),
    iI = n(17742);
let iN = [];
function iE(e) {
    let t = (0, c.bG)([iC.A], () => (null != e ? iC.A.getCaptures(e) : iN)),
        n = (0, c.bG)([iC.A], () => (null != e ? iC.A.getSelectedCapture(e) : null)),
        [l, r] = a.useState(null),
        i = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        a.useEffect(() => {
            if (null == e || null == n || null == i) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, iI._F)(e, n);
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
var i_ = n(714917),
    iM = n(463660),
    iR = n(970211);
function iP(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([i_.A], () => (null != e ? i_.A.getBackground(e) : null)),
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
                                r = await (0, iM.Mg)(e, l);
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
        u = iE(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, i.jsx)("img", { className: iR.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, i.jsx)("img", {
                className: o()(iR.LO, { [iR.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var iT = n(155718);
function iL(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let i$ = ["command", "user_command", "message_command", "message"],
    iD = new Set([iT.kc.CHAT, iT.kc.USER, iT.kc.MESSAGE]);
function iq(e) {
    return e.type ?? iT.kc.CHAT;
}
function iO(e) {
    return iD.has(iq(e));
}
function iF(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function iG(e, t) {
    let n = i$.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !iF(e)), ...n.filter(iF)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || iF(r) || l.push(r);
    }
    return i$.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function iz(e, t, n) {
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
    let s = e.commands.filter(iO).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (iq(e)) {
                    case iT.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case iT.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(iF),
        o = i.length > 0 ? iG([...i, ...u], !0) : iG("both" === t ? [...s, a] : s, !1);
    return o.length > 0 ? o : [r];
}
var iU = n(377941),
    iB = n.n(iU);
function iK(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
n(205816);
let iH = { READ_MESSAGES: "VIEW_CHANNEL", VIEW_GUILD_INSIGHTS: "VIEW_GUILD_ANALYTICS" };
function iW(e) {
    return e.type === iT.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === iT.kc.USER || e.type === iT.kc.MESSAGE
          ? ""
          : "/";
}
let iV = {
        [eF.q7.APP_CHANNEL]: eb.default["3/aHX6"],
        [eF.q7.VOICE_CHANNEL]: eb.default["3/aHX6"],
        [eF.q7.ACTIVITY]: eb.default["3/aHX6"],
        [eF.q7.OVERLAY]: eb.default["rPpf5/"],
        [eF.q7.PROFILE_WIDGET]: null,
        [eF.q7.AUTOMOD]: null,
        [eF.q7.BOT]: null,
        [eF.q7.APPLICATION_COMMANDS]: null,
    },
    iX = [eF.q7.ACTIVITY, eF.q7.APP_CHANNEL, eF.q7.VOICE_CHANNEL, eF.q7.OVERLAY];
function iY(e) {
    return iX.find((t) => iL(e, t)) ?? null;
}
let iZ = 1920 / 1018;
function iQ(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let iJ = iQ(24, 1018),
    i0 = iQ(24, 1920);
function i1(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var i2 = n(90947),
    i3 = (((l = {}).IMAGE = "image"), l),
    i4 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    i5 = n(598748),
    i7 = n(773669);
let i8 = [],
    i6 = {},
    i9 = {};
function ae(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function at(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: i3.IMAGE,
        visibility: i4.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var an = n(127258),
    al = n(803306),
    ar = n(587895),
    ai = n(432005),
    aa = n(963852),
    as = n(95701),
    au = n(619019),
    ao = n(427262);
let ac = new as.nA({ id: "1337", guild_id: "1337", type: lu.rbe.GUILD_TEXT, name: "preview" });
function ad(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, c.bG)([y.default], () => y.default.getUser(e), [e]);
    return (
        a.useEffect(() => {
            r && i?.username !== t && (0, al.nj)(new au.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, i, e, t, l, n]),
        i
    );
}
let af = /^@\S+/;
var am = n(775602);
let ah = [eb.default["3eTjcV"], eb.default.l3j5nS];
var ag = n(97808),
    ap = n(778712),
    ax = n(486020),
    av = n(46054),
    ab = n(200700);
let aj = {
        alert: { label: () => ej.intl.string(eb.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ej.intl.string(eb.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ej.intl.string(eb.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ej.intl.string(eb.default.RGzFNK), blockedStyle: !1 },
    },
    ay = {
        blocked: { label: () => ej.intl.string(eb.default.YdnZ8q), tone: "red" },
        alert: { label: () => ej.intl.string(eb.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ej.intl.string(eb.default.RGzFNK), tone: "green" },
    },
    aw = ["blocked", "alert", "allowed"],
    ak = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function aA(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : ej.intl.formatToPlainString(ej.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, ab.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? ej.intl.formatToPlainString(ej.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? ej.intl.formatToPlainString(ej.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? ej.intl.formatToPlainString(ej.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? ej.intl.formatToPlainString(ej.t.opVZ9q, { mins: n / 60 })
                                      : ej.intl.formatToPlainString(ej.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var aS = n(984097),
    aC = n(13673);
let aI = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function aN(e) {
    let { example: t } = e,
        n = aA(t);
    return null == n
        ? null
        : (0, i.jsx)(x.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let aE = ["glazedgamer", "sprinkles", "donutking"];
function a_(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: a, blockedStyle: s } = aj[n.outcome];
    return (0, i.jsxs)("li", {
        className: o()(aS.nM, { [o()(aS.HV, aC.DX)]: s }),
        children: [
            (0, i.jsx)(n$.A, { children: `${a()}: ` }),
            (0, i.jsx)("span", {
                className: aS.my,
                children: (0, i.jsx)(ag.eu, {
                    src: (0, ax.AE)(void 0, void 0),
                    size: ap._3.SIZE_24,
                    "aria-label": ej.intl.string(eb.default["1yI0xV"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: aS.fw,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), av.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, i.jsx)(aN, { example: n }) : null,
                ],
            }),
        ],
    });
}
function aM(e) {
    let { group: t, firstIndex: n } = e,
        l = a.useId(),
        r = ay[t.section],
        s = new Set(t.examples.map(aA)),
        u = 1 === s.size ? t.examples.map(aA)[0] : null;
    return (0, i.jsxs)("div", {
        className: aS.UO,
        children: [
            (0, i.jsxs)("div", {
                className: aS.RZ,
                children: [
                    (0, i.jsx)(x.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: aI[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != u
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: aS.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, i.jsx)(x.E, {
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
                className: aS.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, i.jsx)(a_, { example: e, username: aE[(n + t) % aE.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function aR(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            aw
                .map((e) => ({ section: e, examples: t.filter((t) => ak[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, i.jsxs)("div", {
        className: aS.Nr,
        children: [
            "" !== r
                ? (0, i.jsx)("div", {
                      className: aS.hk,
                      children: (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, i.jsx)(
                    aM,
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
var aP = n(276293),
    aT = n(460905),
    aL = n(110384),
    a$ = n(365199),
    aD = n(633018),
    aq = n(763754),
    aO = n(267508),
    aF = n(194085),
    aG = n(20851),
    az = n(692508),
    aU = n(798819);
function aB(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, i.jsxs)("div", {
        className: o()(aU.item, aU.labelContainer, aU.colorDefault, {
            [aU.focused]: !0 === t.highlighted,
            [aU.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, i.jsx)("div", {
                      className: aU.iconContainerLeft,
                      children: (0, i.jsx)(n, { color: "currentColor", className: aU.icon }),
                  })
                : null,
            (0, i.jsx)("div", { className: o()(aU.label, az.Gy), children: t.label }),
            null != l
                ? (0, i.jsx)("div", {
                      className: aU.iconContainer,
                      children: (0, i.jsx)(l, { color: "currentColor", className: aU.icon }),
                  })
                : null,
        ],
    });
}
function aK(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = a.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, i.jsx)("img", { src: l, alt: "", className: o()(t, az.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: ej.intl.string(ej.t["5IEsGx"]), icon: aL.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: ej.intl.string(ej.t.LYju5J), muted: !0 };
    return (0, i.jsx)("div", {
        className: o()(aU.menu, az.MK),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: aU.scroller,
            children: [
                (0, i.jsx)(aB, { item: s }),
                (0, i.jsx)("div", { className: aU.separator }),
                (0, i.jsx)(aB, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function aH() {}
function aW(e) {
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
        { projectId: p, exchanges: v } = e,
        {
            items: b,
            botIcon: j,
            appIconSrc: w,
        } = ((t = (0, c.bG)([y.default], () => y.default.getCurrentUser())),
        (n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([ar.A], () => ar.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? ej.intl.string(eb.default.JEYq8M)),
        (u = (0, c.bG)([y.default], () => (null != l ? y.default.getUser(l) : void 0), [l])),
        (f = ad("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (m = d ? u : f),
        (h = ad("31338", ej.intl.string(eb.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ad("31339", (0, ao.mG)(t) ?? "", { enabled: null != t })),
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
                                      a = (0, ai.rh)({
                                          ...(0, aa.Ay)({
                                              channelId: ac.id,
                                              content: e,
                                              author: t,
                                              type: l ?? lu.lAJ.DEFAULT,
                                          }),
                                          id: i,
                                          state: lu.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: i,
                                                        name: n,
                                                        type: an.G.APPLICATION_COMMAND,
                                                        user: (0, aa.Vi)(s),
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
                                              messageType: lu.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: lu.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(af, `<@${a.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), a));
                                          break;
                                      case "event":
                                          d(((i = t.bot), i.split(`@${o.username}`).join(`<@${o.id}>`)), a);
                                  }
                              return c;
                          })(
                              v,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: ej.intl.string(eb.default["y+QYes"]),
                                  memberMessage: ej.intl.string(eb.default.BUTRDc),
                              },
                          ),
                [v, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === b.length) return null;
    let k = ac.name;
    return (0, i.jsxs)("div", {
        className: az.Ix,
        children: [
            (0, i.jsxs)("div", {
                className: az.ZO,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aP.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: o()(az.TE, "group-spacing-16"),
                children: b.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: null != r ? az.Rz : void 0,
                            children: [
                                (0, i.jsx)(aG.A, {
                                    message: n,
                                    channel: ac,
                                    author: (0, aq.FT)(n.author, ac),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, i.jsx)(aO.A, { message: n, channel: ac }) : void 0,
                                    usernameClassName: r?.target === "user" ? az.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, i.jsx)("div", {
                                          className: az.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, i.jsxs)(aF.Ay, {
                                              children: [
                                                  (0, i.jsx)(aF.qv, {
                                                      label: ej.intl.string(ej.t.lfIHs4),
                                                      icon: aT.ReactionIcon,
                                                      onClick: aH,
                                                  }),
                                                  (0, i.jsx)(aF.qv, {
                                                      label: ej.intl.string(ej.t["5IEsGx"]),
                                                      icon: aL.ArrowAngleLeftUpIcon,
                                                      onClick: aH,
                                                  }),
                                                  (0, i.jsx)(aF.qv, {
                                                      label: ej.intl.string(ej.t["UKOtz+"]),
                                                      icon: a$.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: aH,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)("div", {
                                          className: "user" === r.target ? az.ET : az.je,
                                          inert: !0,
                                          children: (0, i.jsx)(aK, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: w,
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
                className: az.DA,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aD.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: ej.intl.formatToPlainString(ej.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var aV = n(332173);
function aX(e) {
    let { name: t } = e;
    return (0, i.jsxs)(aV.A, { children: ["/", t] });
}
function aY(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(iB());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, i.jsx)(aX, { name: e.name }, e.start) : e.text));
}
n(827669);
var aZ = n(757789),
    aQ = n(26137),
    aJ = n(231483),
    a0 = n(558393);
let a1 = { frame: eb.default.Z2bt4u, bot: eb.default.EbvC13, commands: eb.default.EbvC13, automod: eb.default.tiMvei },
    a2 = {
        user_widget: { server: eb.default.VlI3et, personal: eb.default.njJ4YL },
        overlay_widget: { server: eb.default.nUcjJ1, personal: eb.default.RDpKqP },
    };
function a3(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var a4 = n(573634);
let a5 = {
    frame: e4.GameControllerIcon,
    overlay_widget: aZ.WindowTopIcon,
    user_widget: aQ.UserCircleIcon,
    bot: e5.RobotIcon,
    commands: e5.RobotIcon,
    automod: aJ.ShieldIcon,
};
function a7(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, i.jsxs)("div", {
        className: o()(a4.e7, l),
        children: [(0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function a8(e) {
    let { labels: t } = e;
    return (0, i.jsx)("ul", {
        className: a4.Ip,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    className: a4.jw,
                    children: (0, i.jsx)(x.E, {
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
function a6(e) {
    let { name: t, description: n } = e;
    return (0, i.jsxs)("li", {
        className: a4.lj,
        children: [
            (0, i.jsx)("span", {
                className: o()(a4.Vo, a4.G),
                children: (0, i.jsx)(e0.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, i.jsxs)("div", {
                className: a4.aV,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function a9(e) {
    let { commands: t } = e;
    return (0, i.jsx)("ul", {
        className: a4.wZ,
        children: t.map((e, t) => {
            let n = iW(e),
                l = e.description?.trim() ?? "";
            return (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsxs)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, i.jsx)(aX, { name: e.name })
                                : (0, i.jsx)(aV.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function se(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, i.jsx)("ul", {
        className: a4.p_,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    className: a4.Aw,
                    children: (0, i.jsx)(x.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, i.jsx)(aY, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function st(e) {
    let { experience: t, inServer: n, bullets: l, preview: r, blocks: a, commandNames: s } = e,
        u = a3(t) ? e0.AppsIcon : a5[t.kind],
        o = (function (e, t) {
            if (a3(e)) return ej.intl.string(eb.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = a2[e.kind];
                return ej.intl.string(t ? n.server : n.personal);
            }
            return ej.intl.string(a1[e.kind]);
        })(t, n),
        c = n && t.kind in a2 ? ej.intl.string(eb.default.UXJCSG) : null;
    return (0, i.jsxs)("section", {
        className: a4.s9,
        "aria-label": o,
        children: [
            (0, i.jsxs)("div", {
                className: a4.JQ,
                children: [
                    (0, i.jsx)("span", {
                        className: a4.Vo,
                        children: (0, i.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, i.jsx)(x.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != c ? (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, i.jsx)("div", { className: a4.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, i.jsx)(x.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, i.jsx)(aY, { text: l[0], commandNames: s }),
                  })
                : l.length > 0
                  ? (0, i.jsx)(se, { bullets: l, commandNames: s })
                  : null,
            a.length > 0 ? (0, i.jsx)("div", { className: a4.PG, children: a }) : null,
        ],
    });
}
function sn(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, inServer: u, guild: o, intro: c, proposal: d, renderPreview: f, commandNames: m } = e,
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
                                let n = t.map(iB()).join("|");
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
        g =
            ((r =
                h.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? h[0]),
            r?.experience.id);
    return (0, i.jsxs)("div", {
        className: a4.aN,
        children: [
            (0, i.jsxs)("div", {
                className: a4.Lv,
                children: [(0, i.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), c],
            }),
            h.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, i.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, i.jsx)("div", { className: a4.yF, role: "separator" }),
                            (0, i.jsx)(st, {
                                experience: t,
                                inServer: u,
                                bullets: n,
                                preview: f(t),
                                blocks: (function (e, t, n, l) {
                                    let r,
                                        a = n
                                            ? ((r = null != l ? a0.A.getGuildPermissionSpecMap(l) : null),
                                              [
                                                  {
                                                      key: "permissions",
                                                      caption: eb.default["2UbW6r"],
                                                      names: e.bot_permissions,
                                                      label: (e) => {
                                                          let t, n;
                                                          return (
                                                              (t = Object.hasOwn(iH, e) ? iH[e] : e),
                                                              (null != (n = Object.hasOwn(lu.xBc, t) ? lu.xBc[t] : null)
                                                                  ? r?.[n.toString()]?.title
                                                                  : null) ?? iK(e)
                                                          );
                                                      },
                                                  },
                                                  {
                                                      key: "intents",
                                                      caption: eb.default["7TKfpj"],
                                                      names: e.privileged_intents,
                                                      label: iK,
                                                  },
                                              ].flatMap((e) => {
                                                  let { key: t, caption: n, names: l, label: r } = e;
                                                  return null != l && l.length > 0
                                                      ? [
                                                            {
                                                                key: t,
                                                                caption: ej.intl.string(n),
                                                                labels: [...new Set(l.map(r))],
                                                            },
                                                        ]
                                                      : [];
                                              })).map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, i.jsx)(
                                                      a7,
                                                      { caption: n, children: (0, i.jsx)(a8, { labels: l }) },
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
                                                        let n = ej.intl.string(eb.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(eF.q7.APP_CHANNEL)) {
                                                            let r = e.app_channel_names ?? [];
                                                            l = (
                                                                null != t.app_channels && t.app_channels.length > 0
                                                                    ? t.app_channels
                                                                    : r.length > 0
                                                                      ? r.map((e) => ({ name: e }))
                                                                      : [{ name: eV(t.name) }]
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
                                                                a7,
                                                                {
                                                                    className: a4.Iw,
                                                                    caption: ej.intl.formatToPlainString(
                                                                        eb.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, i.jsx)("ul", {
                                                                        className: a4.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, i.jsx)(
                                                                                a6,
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
                                                            ? [ej.intl.string(eb.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [ej.intl.string(eb.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, i.jsx)(
                                                                    a7,
                                                                    {
                                                                        caption: ej.intl.string(eb.default.MY6UGJ),
                                                                        children: (0, i.jsx)(a8, { labels: r }),
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
                                                              a7,
                                                              {
                                                                  caption: ej.intl.string(ej.t["0hKkS+"]),
                                                                  children: (0, i.jsx)(a9, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...a,
                                            ];
                                        default:
                                            return a;
                                    }
                                })(d, t, t.id === g, o),
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
var sl = n(633075),
    sr = n(591410),
    si = n(27399);
function sa(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        r = a.useMemo(() => new sl.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, i.jsx)("div", {
              className: si.H,
              children: (0, i.jsx)(sr.A, {
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
var ss = n(443863);
function su(e) {
    let t,
        { projectId: n, src: l, alt: r, size: a, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / a.width, 970 / a.height)),
            { width: iQ(a.width * t, 1920), height: iQ(a.height * t, 1018) });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(iP, { projectId: n }),
            (0, i.jsx)("div", {
                className: ss.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": iJ,
                    "--custom-conjure-plan-overlay-widget-end": i0,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, i.jsx)("img", { src: l, alt: r, className: ss.M7, onError: s }),
            }),
        ],
    });
}
function so(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, tz.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, rt.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function sc(e) {
    return new Promise((t) => setTimeout(t, e));
}
function sd(e) {
    let { projectId: t, src: n, alt: l, size: r, generateImageRef: s } = e,
        u = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = u.current;
            if (null == e) return;
            let t = !1,
                n = [];
            return (
                !(async function (e) {
                    (await (async function (e) {
                        let t = Date.now() + 3e3;
                        for (; e.querySelectorAll("img").length < 2 && Date.now() < t;) await sc(50);
                    })(e),
                        await Promise.all(
                            Array.from(e.querySelectorAll("img"), async (e) => {
                                try {
                                    await e.decode();
                                    let l = await fetch(e.currentSrc, { cache: "reload" });
                                    if (!l.ok) return;
                                    let r = URL.createObjectURL(await l.blob());
                                    if (t) return void URL.revokeObjectURL(r);
                                    (n.push(r), (e.src = r), await e.decode());
                                } catch {}
                            }),
                        ),
                        t || s(e));
                })(e),
                () => {
                    ((t = !0), n.forEach((e) => URL.revokeObjectURL(e)));
                }
            );
        }, [s]),
        (0, i.jsx)("div", {
            ref: u,
            className: o()(ss.nj, ss.d9),
            style: { "--custom-conjure-plan-overlay-scene-aspect": String(iZ) },
            children: (0, i.jsx)(su, { projectId: t, src: n, alt: l, size: r, onError: () => {} }),
        })
    );
}
function sf(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: a, gone: s, handleError: u } = (0, rn._)(t, r);
    return s
        ? null
        : (0, i.jsx)(e7.D, {
              className: ss.xX,
              onClick: () => so(t, [{ id: r, alt: l }], 0),
              "aria-label": ej.intl.string(eb.default.TvAPIm),
              children: null == a ? null : (0, i.jsx)("img", { src: a, alt: l, className: ss.sN, onError: u }),
          });
}
function sm(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, rn._)(t, r),
        [f, m] = a.useState(!1),
        [h, g] = a.useState(!1),
        {
            slide: p,
            labels: v,
            pick: b,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([am.Ay], () => am.Ay.useReducedMotion),
                [r, i] = a.useState(0),
                [s, u] = a.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            a.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => i((e) => (e + 1) % ah.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let f = a.useCallback((e) => {
                    (u(!0), i(e));
                }, []),
                m = a.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: ah.map((e) => ej.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h }),
        j = ej.intl.string(eb.default.mjryK4),
        y = ej.intl.string(eb.default["rPpf5/"]),
        { generateImage: w } = (0, iS.R)({
            renderComponent: (e) =>
                null == s ? null : (0, i.jsx)(sd, { ...e, projectId: t, src: s, alt: y, size: l }),
            imageOptions: { width: 1920 },
        });
    return u
        ? null
        : (0, i.jsxs)("div", {
              className: ss.RM,
              onMouseEnter: () => m(!0),
              onMouseLeave: () => m(!1),
              onFocus: () => g(!0),
              onBlur: (e) => {
                  e.currentTarget.contains(e.relatedTarget) || g(!1);
              },
              children: [
                  (0, i.jsx)(e7.D, {
                      className: o()(ss.xX, ss.nj, { [ss.qQ]: 0 === p }),
                      style: { "--custom-conjure-plan-overlay-scene-aspect": String(iZ) },
                      onClick: () =>
                          (async function (e) {
                              let t,
                                  {
                                      projectId: n,
                                      id: l,
                                      widgetAlt: r,
                                      sceneAlt: i,
                                      startingIndex: a,
                                      captureScene: s,
                                  } = e;
                              try {
                                  t = await (0, tz.PK)(n, l);
                              } catch {
                                  return;
                              }
                              let u = null;
                              if (null != s)
                                  try {
                                      let e = await Promise.race([s(), sc(8e3)]);
                                      null != e && (u = URL.createObjectURL(e));
                                  } catch {}
                              let o = u;
                              (0, rt.R)({
                                  items: [
                                      { type: "IMAGE", url: t, alt: r },
                                      ...(null == o ? [] : [{ type: "IMAGE", url: o, alt: i }]),
                                  ],
                                  startingIndex: null == o ? 0 : a,
                                  shouldHideMediaOptions: !0,
                                  location: "ConjureChat",
                                  onClose: null == o ? void 0 : () => URL.revokeObjectURL(o),
                              });
                          })({
                              projectId: t,
                              id: r,
                              widgetAlt: j,
                              sceneAlt: y,
                              startingIndex: p,
                              captureScene: null == s ? null : w,
                          }),
                      "aria-label": ej.intl.string(eb.default.TvAPIm),
                      children:
                          null == s
                              ? null
                              : 0 === p
                                ? (0, i.jsx)("img", { src: s, alt: j, className: ss.Ac, onError: d })
                                : (0, i.jsx)(su, { projectId: t, src: s, alt: y, size: l, onError: d }),
                  }),
                  (0, i.jsx)("div", {
                      className: ss._4,
                      role: "group",
                      "aria-label": ej.intl.string(eb.default.EH36X6),
                      children: v.map((e, t) =>
                          (0, i.jsx)(
                              e7.D,
                              {
                                  className: o()(ss.c, { [ss.Cw]: p === t }),
                                  "aria-pressed": p === t,
                                  onClick: () => b(t),
                                  children: (0, i.jsx)(x.E, {
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
function sh(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: a, gone: s, handleError: u } = (0, rn._)(t, n);
    return s
        ? null
        : (0, i.jsx)("li", {
              children: (0, i.jsx)(e7.D, {
                  className: ss.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == a ? null : (0, i.jsx)("img", { src: a, alt: "", className: ss.rA, onError: u }),
              }),
          });
}
function sg(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: ej.intl.formatToPlainString(eb.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("section", {
              className: ss.Op,
              children: (0, i.jsxs)("div", {
                  className: ss.uW,
                  children: [
                      (0, i.jsx)(x.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: ej.intl.string(eb.default.ubBJcy),
                      }),
                      (0, i.jsx)("ul", {
                          className: ss.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: a } = e;
                              return (0, i.jsx)(sh, { projectId: t, id: r, alt: a, onOpen: () => so(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function sp(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        o,
        d,
        m,
        h,
        g,
        { projectId: p, proposal: v, version: b, onApprove: j } = e,
        { botExchanges: y } =
            ((n = iL(v, eF.q7.APPLICATION_COMMANDS)),
            (l =
                iL(v, eF.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(iO)
                          ? "commands"
                          : null
                    : null),
            (r = a.useMemo(
                () =>
                    null == l
                        ? []
                        : iz(v, l, {
                              message: ej.intl.string(eb.default.J7qggf),
                              reply: ej.intl.string(eb.default.nqYtiy),
                              event: ej.intl.string(eb.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        w = (function (e, t) {
            let { widget_config: n, widget_preview: l = i9 } = t,
                r = (0, c.bG)([i7.default], () => i7.default.locale),
                i = (0, c.bG)([ts.Ay], () => {
                    let t = ts.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = a.useState(i6);
                    return (
                        a.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, tz.PK)(e, l.id).then(
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
                                                          ...ae(n),
                                                          ...(null != n.fallback ? { fallback: ae(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = i2.uW.safeParse(r);
                                  if (!i.success) return null;
                                  let a = i.data;
                                  return null == a[i5.m.WIDGET_TOP] || null == a[i5.m.WIDGET_BOTTOM]
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
                                                                    type: i2.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (r[e] = { type: i2.oG.NUMBER, value: i })
                                                                : (r[e] = { type: i2.oG.STRING, value: i });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(at),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: i8,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return a.useMemo(() => (null == i || null == u ? null : { applicationId: i, rendererProps: u }), [i, u]);
        })(p, v),
        k = b?.superseded === !0,
        A = v.what_changed?.trim() ?? "",
        S =
            ((t = v.commands),
            a.useMemo(
                () =>
                    t
                        .filter((e) => "/" === iW(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((u =
                null == (s = iY(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (o = v.design_image) && o.id !== i1(v)?.id ? o : null),
            (m = i1(v)),
            (h =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? u),
            (g =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? u),
            {
                ui: null != d && null != h ? { experienceId: h, design: d } : null,
                overlay:
                    null != m && null != g ? { experienceId: g, design: m, size: ez(v.overlay_widget ?? null) } : null,
            }),
        I = a.useMemo(
            () =>
                v.commands.some(iO)
                    ? iz({ ...v, bot: void 0 }, "commands", {
                          message: ej.intl.string(eb.default.J7qggf),
                          reply: ej.intl.string(eb.default.nqYtiy),
                          event: ej.intl.string(eb.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        N = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p)?.name, [p]),
        E = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p)?.install_scope === "guild", [p]),
        _ = (0, c.bG)(
            [ts.Ay, lH.A],
            () => {
                let e = ts.Ay.getProject(p)?.guild_id;
                return null != e ? (lH.A.getGuild(e) ?? null) : null;
            },
            [p],
        ),
        M =
            k && null != b
                ? ej.intl.formatToPlainString(eb.default.YZ3qJs, { version: b.version })
                : ej.intl.string(eb.default["3b6e7o"]),
        R = k ? (0, i.jsx)(nz, { children: ej.intl.string(eb.default.hF2c41) }) : null;
    return (0, i.jsxs)(nU, {
        title: M,
        meta: R,
        superseded: k,
        showLabel: ej.intl.string(eb.default.yD8EJS),
        hideLabel: ej.intl.string(eb.default.nSPGNb),
        bodyClassName: ss.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, i.jsx)("div", {
                className: ss.Qs,
                children: (0, i.jsx)(sn, {
                    appName: N ?? v.experiences?.[0]?.name ?? "",
                    inServer: E,
                    guild: _,
                    intro: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, i.jsx)(aY, { text: v.summary, commandNames: S }),
                            }),
                            (0, i.jsx)(sg, { projectId: p, proposal: v }),
                            "" !== A
                                ? (0, i.jsxs)("section", {
                                      className: ss.uW,
                                      children: [
                                          (0, i.jsx)(x.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: ej.intl.string(eb.default.iNS4dl),
                                          }),
                                          (0, i.jsx)(x.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, i.jsx)(aY, { text: A, commandNames: S }),
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
                                            ? (0, i.jsx)(sf, {
                                                  projectId: p,
                                                  design: C.ui.design,
                                                  alt: ej.intl.string(
                                                      null == (t = iY(v)) ? eb.default["3/aHX6"] : iV[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, i.jsx)(sm, {
                                                  projectId: p,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, i.jsxs)(i.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != w ? (0, i.jsx)(sa, { ...w }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, i.jsx)(aR, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || iF(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, I);
                                return t.length > 0 ? (0, i.jsx)(aW, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: S,
                }),
            }),
            null == j || k
                ? null
                : (0, i.jsxs)("div", {
                      className: ss.qr,
                      children: [
                          (0, i.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              text: ej.intl.string(eb.default["6S+wRM"]),
                              onClick: j,
                          }),
                          (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: ej.intl.string(eb.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var sx = n(289565);
function sv(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, i.jsx)("div", { className: sx.m, children: n })
        : (0, i.jsxs)("div", {
              className: sx.Z,
              children: [
                  n,
                  (0, i.jsx)(d.m, {
                      text: ej.intl.string(ej.t.WAI6xu),
                      asContainer: !0,
                      children: (0, i.jsx)(tQ.K, {
                          "aria-label": ej.intl.string(ej.t.WAI6xu),
                          icon: e8.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function sb(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function sj(e, t) {
    return (e?.state === "action_needed" || e?.state === "publishing") && sb(t, e.status);
}
let sy = new WeakMap();
function sw(e) {
    let { projectId: t, publish: n } = e,
        l = (0, ty.A)(t, n);
    return (0, i.jsx)(f.$, {
        variant: "primary",
        size: "sm",
        loading: "publishing" === n.state && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sk(e) {
    let { projectId: t, cta: n } = e,
        l = (0, tm.Ay)(t);
    return null != l && sj(l, n)
        ? (0, i.jsx)(sv, {
              children: (0, i.jsxs)(lk.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, i.jsx)(sw, { projectId: t, publish: l }),
                      null != l.failure
                          ? (0, i.jsx)(x.E, {
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
var sA = n(303345),
    sS = n(44255),
    sC = n(416473),
    sI = n(289830);
function sN(e) {
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
                [s, u] = a.useState(null),
                o = a.useCallback(async () => {
                    (i("sending"), u(null));
                    try {
                        (await (0, sC.Du)(e, t.trigger), i("on"));
                    } catch (e) {
                        (u(e instanceof sA.A ? e.message : ej.intl.string(eb.default.EXceox)), i("error"));
                    }
                }, [e, t.trigger]),
                [d] = a.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? ej.intl.formatToPlainString(eb.default.orZDqY, { time: (0, sS.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sS.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, i.jsx)(nF, {
        title: ej.intl.string(eb.default.ZtfX9V),
        children: (0, i.jsxs)("div", {
            className: sI.r,
            children: [
                (0, i.jsxs)("div", {
                    className: sI.z,
                    children: [
                        (0, i.jsx)(x.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, i.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ej.intl.string(eb.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: ej.intl.string(eb.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, i.jsx)(f.$, {
                          variant: "secondary",
                          size: "sm",
                          text: ej.intl.string(eb.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sE = n(478016),
    s_ = n(989271);
function sM(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = a.useId(),
        s = null == l;
    return (0, i.jsxs)(e7.D, {
        className: o()(s_.nM, { [s_.f1]: s, [s_.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": ej.intl.formatToPlainString(eb.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, i.jsxs)("div", {
                className: s_.jo,
                children: [
                    n
                        ? (0, i.jsx)(sE.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: s_.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(x.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: s_.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, i.jsx)(x.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sR(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = a.useState(() => new Set()),
        u = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, i.jsx)(nF, {
        title: ej.intl.string(eb.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, i.jsx)(
                sM,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var sP = n(313537),
    sT = n(125372);
let sL = {
        add_to_server: eb.default["7SD3ul"],
        remove_from_server: eb.default.ErhKil,
        change_server: eb.default["1E5/ay"],
    },
    s$ = {
        add_to_server: eb.default["Wy+mGW"],
        remove_from_server: eb.default.vUWHZe,
        change_server: eb.default.MfnSEe,
    };
var sD = n(831913),
    sq = n(618785);
function sO(e) {
    var t;
    let n,
        l,
        r,
        a,
        s,
        u,
        o,
        d,
        m,
        h,
        g,
        p,
        { projectId: v, change: b, current: j, onReply: y } = e,
        {
            project: w,
            action: k,
            done: A,
            note: S,
        } = ((n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(v), [v])),
        (l = (0, sP.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === b.action ? b.guild_id : l),
        (a = (0, c.bG)([lH.A], () => lH.A.getGuild(t)?.name, [t]) ?? ej.intl.string(eb.default["6bhivN"])),
        (s = (0, sT.Y)(v).length > 0),
        (u =
            (0, c.bG)(
                [r$.A],
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
                    })(r$.A.getMessages(v), b, l),
                [v, b, l],
            ) &&
            null != n &&
            ("remove_from_server" === b.action ? !r : r)),
        (o = "change_server" !== b.action || null == b.guild_id || l === b.guild_id),
        (d = null != n && ("add_to_server" === b.action ? !r : r) && o && !u),
        (m = null != n && (0, ts.PV)(n)),
        (h = "remove_from_server" !== b.action),
        (g = d && m ? { kind: b.action, label: ej.intl.string(sL[b.action]), disabled: h && !s } : null),
        (p = null),
        d && !m
            ? (p = ej.intl.string(eb.default.Kt9exT))
            : g?.disabled === !0 && (p = ej.intl.string(eb.default.NXvmoQ)),
        { project: n, action: g, done: u ? ej.intl.formatToPlainString(s$[b.action], { server: a }) : null, note: p }),
        C = b.keep_label,
        I = j && null != k,
        N = I && null != C && null != y,
        E = A ?? (j ? S : null);
    return null != E || I
        ? (0, i.jsxs)(lk.B, {
              gap: 8,
              children: [
                  I
                      ? (0, i.jsxs)(lk.B, {
                            direction: "horizontal",
                            gap: 8,
                            wrap: !0,
                            children: [
                                (0, i.jsx)(f.$, {
                                    variant: "remove_from_server" === k.kind ? "critical-secondary" : "primary",
                                    size: "sm",
                                    text: k.label,
                                    disabled: k.disabled,
                                    onClick: () => {
                                        null != w &&
                                            (k?.kind === "remove_from_server"
                                                ? (0, sD.A)({ project: w })
                                                : (0, sq.A)({ projectId: v }));
                                    },
                                }),
                                N
                                    ? (0, i.jsx)(f.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: C,
                                          onClick: () => y(C),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != E ? (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: E }) : null,
              ],
          })
        : null;
}
var sF = n(919790),
    sG = n(908492),
    sz = n(971824),
    sU = n(162052),
    sB = n(165648);
function sK(e) {
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
        x = a.useMemo(() => (0, nE.Jf)(n, l), [n, l]),
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
            className: nZ.pj,
            "data-live": !1,
            children: (0, i.jsx)(nT.A, {
                glyph: (0, i.jsx)(r2.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: ej.intl.string(eb.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let b = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        j = m ? ((0, nE.lt)(n) ?? c ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = it(w.map((e) => e.taskId)),
        A = !g && (l || w.some((e) => "running" === e.task.status)),
        S = iu(w);
    return (0, i.jsxs)("ol", {
        className: nZ.pj,
        "data-live": A,
        children: [
            (0, i.jsx)(nR.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: w.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: b,
                connectsDown: w.length > 0,
                tier: x.turn?.tier,
            }),
            w.map((e, n) => {
                let l = null != e.task.helperMark ? ie(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          io,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: r.Illocon,
                              tint: r.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : r.name,
                              connectsDown: n < w.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, i.jsx)(iw, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, i.jsx)("li", {
                      className: nZ.YO,
                      children: (0, i.jsx)(nX, { todos: j, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sH(e) {
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
            publishCta: v,
            onPickIdea: b,
            pickedIdeaIds: j,
            onApprovePlan: y,
            sideReply: w = !1,
            sideReplyAcknowledges: k,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: S,
            restoreProposal: C,
            onRestoreProposal: I,
            publishScheduleProposal: N,
            publishScheduleProposalCurrent: E = !1,
            serverChange: _,
            serverChangeCurrent: M = !1,
            onCardReply: R,
        } = e,
        P = a.useMemo(
            () => r3({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        q = (A ? S : void 0) ?? P.attachmentsHost,
        O = $ && !A,
        F = null == c ? null : (0, i.jsx)(sF.A, { projectId: t, attachments: c }),
        G = null == F ? null : (0, i.jsx)("div", { className: nZ.MT, children: F }),
        z = w
            ? (0, i.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return ej.intl.string(eb.default.Mv5OmK);
                          case "queued":
                              return ej.intl.string(eb.default["Po/2mi"]);
                          case "restarting":
                              return ej.intl.string(eb.default.Vj0woh);
                          default:
                              return ej.intl.string(eb.default.gY3L8p);
                      }
                  })(k),
              })
            : null;
    return (0, i.jsxs)("div", {
        className: nZ.ue,
        children: [
            T.length > 0 && !A
                ? (0, i.jsx)("ol", {
                      className: nZ.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: nZ.DV,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: sB.PT,
                                          children: (0, sG.U)(e.content, !0, {
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
                ? (0, i.jsx)(sp, { projectId: t, proposal: r, version: s, onApprove: y })
                : O
                  ? (0, i.jsxs)("div", {
                        className: o()(nZ.ky, sU.XR),
                        children: [
                            (0, i.jsx)("div", {
                                className: o()(sB.PT, nZ.cW),
                                children: (0, sG.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === q ? G : null,
                            z,
                        ],
                    })
                  : null,
            null != d
                ? (0, i.jsx)("div", {
                      className: o()(nZ.ky, nZ.k1, sU.XR, { [sz.O]: null != m && "open" === h }),
                      children: (0, i.jsx)(rT, {
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
                      className: o()(nZ.ky, nZ.k1, sU.XR),
                      children: (0, i.jsx)(rH, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== q && ("closing" !== q || O) ? null : F,
            null != v ? (0, i.jsx)(sk, { projectId: t, cta: v }) : null,
            null != u && u.length > 0 ? (0, i.jsx)(sR, { ideas: u, pickedIdeaIds: j, onPick: b }) : null,
            null != C ? (0, i.jsx)(iA, { proposal: C, onRestore: I }) : null,
            null != _ ? (0, i.jsx)(sO, { projectId: t, change: _, current: M, onReply: R }) : null,
            null != N ? (0, i.jsx)(sN, { projectId: t, proposal: N, current: E }) : null,
            O ? null : z,
        ],
    });
}
var sW = n(286251),
    sV = n(146806),
    sX = n(475358),
    sY = n(783977),
    sZ = n(559647),
    sQ = n(787564),
    sJ = n(339200),
    s0 = n(234320),
    s1 = n(191023),
    s2 = n(285796),
    s3 = n(922329),
    s4 = n(153171);
function s5(e) {
    let { projectId: t } = e;
    return (0, i.jsx)(s3.p, {
        name: ej.intl.string(eb.default.xhFsEP),
        thumb: (0, i.jsxs)("span", {
            className: nt.PA,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(s1.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, i.jsx)("span", {
                    className: nt.OY,
                    children: (0, i.jsx)(lj.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, i.jsx)(x.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: ej.intl.string(eb.default["9y+Dae"]),
        }),
        children: (0, i.jsx)("button", {
            type: "button",
            className: s4.o1,
            onClick: () => {
                ei(t)?.active === !1 ? ec(t) : ea(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": ej.intl.string(eb.default.N852dj),
            children: (0, i.jsx)(s2.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function s7(e) {
    let { send: t } = e;
    return (0, i.jsxs)(s3.p, {
        compact: !0,
        name: ej.intl.string(eb.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, i.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: ej.intl.string(eb.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, i.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: s4.Rk }) : null,
            "failed" === t.status
                ? (0, i.jsx)(ly.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: ej.intl.string(eb.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var s8 = n(587157),
    s6 = n(347111),
    s9 = n(120234),
    ue = n(901173),
    ut = n(161431),
    un = n(46653),
    ul = n(695184),
    ur = n(661191),
    ui = n(502472);
function ua(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
        { creator: r, collaborators: i } = (0, ui.yv)(l),
        s = (0, c.bG)([un.default], () => un.default.getId()),
        u = null != l && (0, eF.pL)(l) ? l.guild_id : void 0,
        o = t?.toLowerCase() ?? null;
    return (
        a.useEffect(() => {
            n && null != u && null != o && ul.A.requestMembers(u, o, 100);
        }, [n, u, o]),
        (0, c.yK)(
            [lK.Ay, lH.A, y.default],
            () => {
                if (null == o) return [];
                let e = null != u ? lH.A.getGuild(u) : null,
                    t = (t) => (0, ue.mO)(t, o, null != e ? lK.Ay.getNick(e.id, t.id) : null),
                    n = new Set(l?.collaborator_role_ids ?? []),
                    a = null != e && n.has(ur.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                    c =
                        null == e
                            ? []
                            : lK.Ay.getMemberIds(e.id)
                                  .map((e) => y.default.getUser(e))
                                  .filter(
                                      (l) =>
                                          null != l &&
                                          t(l) &&
                                          (a ||
                                              (lK.Ay.getMember(e.id, l.id)?.roles ?? []).some((e) => n.has(e)) ||
                                              lW.$3({ permission: lu.xBc.MANAGE_GUILD, user: l, context: e })),
                                  ),
                    d = new Set();
                return [...[...(null != r ? [r] : []), ...i].filter(t), ...c].filter(
                    (e) => !(e.id === s || e.bot || d.has(e.id)) && (d.add(e.id), !0),
                );
            },
            [l, u, o, r, i, s],
        )
    );
}
var us = n(957071),
    uu = n(927659),
    uo = n(351906),
    uc = n(407653),
    ud = n(322915);
function uf(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: a, onSelect: s } = e,
        u = (0, c.bG)([uo.A], () => uo.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, i.jsx)(
                      uu.Ay.User,
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
                      uu.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, i.jsx)(uc.A, { projectId: n, file: e.file, className: ud.Vk }),
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
    return (0, i.jsx)(uu.Ay, {
        id: t,
        className: ud.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": ej.intl.string(eb.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, i.jsx)(um, { titleId: o, title: ej.intl.string(eb.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, i.jsx)(um, { titleId: d, title: ej.intl.string(eb.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function um(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, i.jsx)(x.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: ud.Gf, children: n }),
            l,
        ],
    });
}
var uh = n(719442),
    ug = n(355622),
    up = n(408018),
    ux = n(186306),
    uv = n(323350),
    ub = n(35277),
    uj = n(68059),
    uy = n(267102),
    uw = n(259691);
let uk = (0, as.createChannelRecord)({ id: "1", type: lu.rbe.DM });
function uA(e) {
    let t = sJ.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uS(e) {
    return (0, uv.WO)(sJ.VW.richValue(e), { mode: "raw" });
}
function uC(e, t) {
    ((e.children = (0, up.x7)(t)), (e.selection = uA(e)), e.onChange());
}
function uI(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rZ.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, i.jsxs)("span", { ...t, contentEditable: !1, children: [(0, i.jsx)(uw.A, { attachmentId: r }), n] });
}
var uN = n(366811);
function uE(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function u_(e) {
    let t = uN.A.getState().path;
    return uE(window.location.pathname, e) && (null == t || uE(t, e));
}
function uM(e, t) {
    return null != t && (0, tF.vq)(e) && t.contains(e);
}
var uR = n(497437),
    uP = n(465410);
let uT = "body-md/normal",
    uL = null;
function u$(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = a.useState(t),
        u = a.useRef(null),
        d = a.useRef(null),
        f = a.useRef(0),
        [m, h] = a.useState(0),
        [g, p] = a.useState(0),
        [v, b] = a.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            b({
                frontFrom: 1e3 * (0, sV._R)(f),
                frontTo: 1e3 * (0, sV._R)(m),
                backFrom: 1e3 * (0, sV.T)(f),
                backTo: 1e3 * (0, sV.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        a.useEffect(() => {
            f.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, y] = a.useState(0),
        [w, k] = a.useState(null),
        A = a.useRef(!1),
        S = a.useCallback(() => {
            (k(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    a.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let C = "in" === w ? v.backFrom : v.frontFrom,
        I = "out" === w ? v.frontTo : v.backTo,
        N = (0, c.bG)([am.Ay], () => am.Ay.useReducedMotion),
        E = t === ej.intl.string(eb.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, i.jsx)("span", {
            ref: n,
            className: o()(uR.VT, { [uR.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, I - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && j > 0 && null != w ? j % 2 : void 0,
            "data-wipe-kind": l ? (w ?? void 0) : void 0,
            children: (0, i.jsx)(sX.e, { shortcut: "tab", className: uR.xT, keyClassName: e }),
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(sW.o, {
                text: t,
                variant: uT,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(uR.xM, { [uR.s2]: l }),
                onStart: S,
                onComplete: () => s(t),
            }),
            M(uR.IS, n || (!N && "out" === w), u),
            (0, i.jsx)("span", {
                ref: d,
                className: uR.QI,
                "aria-hidden": !0,
                children: (0, i.jsx)(x.E, { variant: uT, tag: "span", children: t }),
            }),
            _
                ? (0, i.jsxs)("span", {
                      className: uR.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, i.jsx)(x.E, { variant: uT, tag: "span", className: uR.xM, children: t }),
                          M(uR.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uD = a.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                aiPaused: l = !1,
                running: r,
                restoring: s = !1,
                onSend: u,
                onInterrupt: f,
                escapeScopeRef: m,
                onUploadFile: h,
                onApprove: g,
                onImport: p,
                onSendToOtherProjects: x,
                suggestion: v,
                questionOpen: b = !1,
                secretPending: j = !1,
                hasPendingContext: y = !1,
                onDraftHasTextChange: w,
                modelSettings: k,
                onModelSettingsChange: A,
                visible: S = !0,
            } = e,
            C = n && !l,
            I = (function (e) {
                let t = a.useContext(uy.Ay),
                    [n] = a.useState(() => {
                        let n = (0, uh.ie)();
                        return (
                            (n.children = (0, up.x7)(e)),
                            (n.selection = uA(n)),
                            (0, uj.a)({
                                editor: n,
                                chatInputType: ug.oU.GENERIC_RICH_TEXTAREA,
                                channel: uk,
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
                                    for (let [t, l] of sJ.VW.nodes(e, { at: [], match: sJ.l5.isText }))
                                        for (let e of t.text.matchAll(rZ.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        ux.o.withMergedEntry(e, () =>
                                            sJ.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: i } of n.reverse())
                                                    ub.b.textToVoid(
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
            })(r0.A.getDraft(t)),
            [N, E] = a.useState(() => uS(I));
        (0, s9.N$)(N);
        let _ = a.useRef(N),
            [M, R] = a.useState(null),
            P = a.useCallback(() => {
                let e = uS(I);
                (e !== _.current && ((_.current = e), (0, s6.I)(t, e), E(e)),
                    R(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sJ.ZF.isCollapsed(t)) return null;
                            let [n] = sJ.VW.node(e, t.anchor.path);
                            return sJ.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(I),
                    ));
            }, [I, t]),
            T = a.useCallback((e) => uC(I, e), [I]),
            $ = "" !== N.trim();
        a.useEffect(() => w?.($), [$, w]);
        let D = a.useRef(t);
        a.useLayoutEffect(() => {
            D.current !== t && ((D.current = t), uC(I, r0.A.getDraft(t)));
        }, [I, t]);
        let q = (0, c.bG)([am.Ay], () => am.Ay.isSubmitButtonEnabled),
            [O, F] = a.useState(!1),
            [G, z] = a.useState(!1);
        (a.useEffect(() => {
            r ? z(!1) : (O && z(!0), F(!1));
        }, [r, O]),
            a.useEffect(() => {
                if (!G) return;
                let e = setTimeout(() => z(!1), uO);
                return () => clearTimeout(e);
            }, [G]));
        let {
                drafts: U,
                addFiles: K,
                pasteFiles: H,
                removeDraft: W,
                settled: V,
                takeRefs: X,
            } = (0, tK.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            Y = el.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && J(n);
            }),
            Z = el.useState((e) => (null == t ? null : (e.byProject[t]?.chatFocusRequest ?? null))),
            Q = a.useRef(Z);
        a.useEffect(() => {
            let e = Q.current;
            ((Q.current = Z), C && null != e && null != Z && Z !== e && sJ.VW.focus(I));
        }, [Z, C, I]);
        let ee = "" !== N.trim() || U.length > 0 || y || Y,
            et = C && ee && V,
            [en, er] = a.useState(null);
        a.useEffect(() => {
            if (null == en) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => er(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [en]);
        let es = (0, ut.rU)(t),
            [ed, ef] = a.useState(null),
            [em, eh] = a.useState(0),
            eg = a.useMemo(() => (null != M && C ? (0, ue.OG)(M, M.length) : null), [M, C]),
            ep = eg?.start ?? null;
        a.useEffect(() => {
            null == ep ? ef(null) : (0, ut.IP)(t);
        }, [ep, t]);
        let ex = ep === ed ? null : eg,
            ev = ua(t, ex?.text ?? null),
            ew = ua(t, N.includes("@") ? "" : null, !1),
            ek = a.useMemo(() => (null == ex ? [] : (0, ue.l$)(ev, es, ex.text)), [ex, ev, es]),
            eA = ex?.text;
        a.useEffect(() => eh(0), [eA]);
        let eS = ek.length > 0,
            eC = Math.min(em, Math.max(0, ek.length - 1)),
            eI = a.useId(),
            eN = a.useCallback(
                (e) => {
                    let t = ek[e];
                    null != ex &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: i } = l.anchor;
                            (ub.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: i } }),
                                ub.b.insertText(e, `${n} `));
                        })(I, ex.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ek, ex, I],
            ),
            eE = a.useCallback(() => {
                if (!et) return;
                let e = X(),
                    n = Y
                        ? (function (e) {
                              let t = ei(e);
                              if (null == t || !J(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? eu(e);
                              return (
                                  ei(e)?.active === !1
                                      ? ec(e)
                                      : ea(e, (e) => ({ ...e, history: B, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: i, messageKey: a } = (0, ey.Wx)(e, t, r),
                                          s = { projectId: e, nonce: i, job: null, thumbUrl: null };
                                      (n0.set(a, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  i = !1,
                                                  a = !1,
                                                  s = !1;
                                              function u() {
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
                                                  u(),
                                                  {
                                                      retry: u,
                                                      cancel: () => {
                                                          s = !0;
                                                      },
                                                  }
                                              );
                                          })({
                                              capture: (t) => (0 === t ? l : eu(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = nv(e),
                                                              r = nv(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              nx(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, tz.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, tz.n6)(e, t.id),
                                              send: (n) => (0, ey.dv)(e, t, [...r, n], { nonce: i }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      n2(a, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (n0.delete(a),
                                                          window.setTimeout(() => {
                                                              (n2(a, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                u((0, ue.wl)(N, ew), e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        i = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === i) return i;
                    null == uL && (uL = document.createElement("canvas").getContext("2d"));
                    let a = uL;
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
                })(uG(e$.current), eK.current, (0, ue.Lj)(N));
                ("" !== l && er(l), T(""), ef(null));
            }, [et, Y, t, N, ew, u, X, T]),
            e_ = a.useCallback(
                (e) => {
                    (e.preventDefault(), eE());
                },
                [eE],
            ),
            eM = a.useCallback(() => {
                null != f && !O && (F(!0), f(), C && sJ.VW.focus(I));
            }, [f, O, C, I]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                i = a.useRef(r);
            (a.useEffect(() => {
                i.current = r;
            }),
                a.useEffect(() => {
                    if (!t) return;
                    let e = uM(document.activeElement, l?.current);
                    function r(t) {
                        e = uM(t.target, l?.current);
                    }
                    function a(t) {
                        var r, a, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            u_(n) &&
                            ei(n)?.active !== !0 &&
                            !L(n).active &&
                            ((r = t.target),
                            (a = l?.current),
                            (s = e),
                            ((0, tF.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!uM(r, a) && null == r.closest('input, textarea, [contenteditable="true"]')
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
        })({ active: r && null != f && S, projectId: t, scopeRef: m, onEscape: eM });
        let eR = (r && null != f) || G,
            eP = null == v || "" !== N || !C || s || y ? null : v,
            eT = a.useCallback(
                (e) => {
                    if (eS && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ek.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eh((eC + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eN(eC));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ef(ex?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && ei(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), eo(t));
                        return;
                    }
                    if ("Escape" === e.key && r && null != f && u_(t)) {
                        (e.preventDefault(), e.stopPropagation(), eM());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eP) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), T(eP));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eE());
                },
                [eE, g, r, f, eM, eP, T, eS, ek.length, eC, eN, ex, t],
            ),
            eL = a.useCallback(
                (e) => {
                    C && H(e);
                },
                [C, H],
            );
        (0, s0.Vo)({
            event: lu.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eL(t);
            },
        });
        let e$ = a.useRef(null),
            eD = a.useCallback(() => {
                let e = _.current;
                x?.((0, ue.Lj)(e), () => {
                    _.current === e && T("");
                });
            }, [x, T]),
            [eq, eO] = a.useState(0),
            [eF, eG] = a.useState(!1);
        a.useEffect(() => {
            if (0 === N.length) return void eG(!1);
            let e = uG(e$.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eO(t);
            }
            eG(!0);
            let t = setTimeout(() => eG(!1), uq);
            return () => clearTimeout(t);
        }, [N]);
        let ez = a.useMemo(() => ({ "--custom-glow-x": `${eq}px` }), [eq]),
            eU = eF ? ` ${uR.EB}` : "",
            eB = s
                ? ej.intl.string(eb.default.qqlUiW)
                : l
                  ? ej.intl.string(eb.default.Z0hyNL)
                  : C
                    ? y
                        ? ej.intl.string(eb.default.knUjL3)
                        : Y
                          ? ej.intl.string(eb.default["6rXxwa"])
                          : j
                            ? ej.intl.string(eb.default.VxH5vv)
                            : b
                              ? ej.intl.string(eb.default.IevBEw)
                              : ej.intl.string(r ? eb.default["0BJa/0"] : eb.default.TEeU7z)
                    : ej.intl.string(eb.default.zZ9NgM),
            eK = a.useRef(0),
            eH = a.useRef(null),
            eW = a.useCallback((e) => {
                if ((eH.current?.disconnect(), null == e)) return;
                eK.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eK.current = e.clientWidth;
                });
                (t.observe(e), (eH.current = t));
            }, []),
            eV = a.useId(),
            eX = a.useId(),
            eY = null != eP,
            eZ = en ?? eP ?? eB,
            eQ = "" === N && "" !== eZ;
        return (0, i.jsxs)("form", {
            onSubmit: e_,
            className: uR.DA,
            children: [
                eS
                    ? (0, i.jsx)(uf, {
                          id: eI,
                          projectId: t,
                          suggestions: ek,
                          selectedIndex: eC,
                          onHover: eh,
                          onSelect: eN,
                      })
                    : null,
                U.length > 0 || Y
                    ? (0, i.jsxs)("div", {
                          className: uR.lN,
                          children: [
                              U.map((e) => (0, i.jsx)(tK.Nl, { draft: e, onRemove: W }, e.localId)),
                              Y ? (0, i.jsx)(s5, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, i.jsx)("span", { className: `${uR.wg} ${uR.LP}${eU}`, style: ez, "aria-hidden": !0 }),
                (0, i.jsx)("span", { className: `${uR.wg} ${uR.L3}${eU}`, style: ez, "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: uR.VA,
                    ref: e$,
                    children: [
                        (0, i.jsx)(us.A, {
                            navId: "conjure-composer-attach",
                            disabled: !C,
                            buttonClassName: `${uR.Y0} ${uR.nu}`,
                            iconClassName: uR.Qu,
                            onAddFiles: K,
                            onImport: p,
                            onSendToOtherProjects: null != x ? eD : void 0,
                        }),
                        eQ
                            ? (0, i.jsx)("div", {
                                  ref: eW,
                                  className: uR.ar,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(
                                      u$,
                                      { text: eZ, offering: eY && null == en, typed: null != en },
                                      S ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, i.jsx)(n$.A, { id: eX, children: ej.intl.string(eb.default.ldNl9x) }),
                        (0, i.jsx)(rZ.Fu.Provider, {
                            value: t,
                            children: (0, i.jsx)(sQ.A, {
                                editor: I,
                                containerClassName: o()(uR.sq, uP.dv),
                                className: uR.jp,
                                readOnly: !C,
                                canFocus: C,
                                onChange: P,
                                onBlur: () => R(null),
                                onKeyDown: eT,
                                onPaste: eL,
                                renderExtraElement: uI,
                                "aria-labelledby": eX,
                                "aria-describedby": eQ ? eV : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eS,
                                "aria-controls": eS ? eI : void 0,
                                "aria-activedescendant": eS ? ((0, uu.aI)(eC) ?? void 0) : void 0,
                            }),
                        }),
                        eQ ? (0, i.jsx)(n$.A, { id: eV, children: eB }) : null,
                        (0, i.jsx)("div", {
                            className: uR.Sz,
                            onMouseDown: eR ? uF : void 0,
                            children: eR
                                ? (0, i.jsx)(d.m, {
                                      text: ej.intl.string(eb.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)("button", {
                                          type: "button",
                                          className: `${uR.Y0} ${uR.$E} ${uR.PG}`,
                                          disabled: O || !r,
                                          onClick: eM,
                                          "aria-label": ej.intl.string(eb.default.wiguT0),
                                          children: (0, i.jsx)(r2.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : k?.tierSettings != null && null != A
                                  ? (0, i.jsx)(s8.A, {
                                        settings: k.tierSettings,
                                        tiers: k.tiers,
                                        choices: k.choices,
                                        disabled: !C,
                                        onChange: A,
                                        className: `${uR.Y0} ${uR.$E}`,
                                        icon: (0, i.jsx)(sY.FiltersHorizontalIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                        }),
                        q
                            ? (0, i.jsxs)("div", {
                                  className: uR.fF,
                                  children: [
                                      (0, i.jsx)("div", { className: uR.MT }),
                                      (0, i.jsx)("button", {
                                          type: "submit",
                                          className: uR.rt,
                                          disabled: !et,
                                          "aria-label": ej.intl.string(eb.default.rxW2cl),
                                          children: (0, i.jsx)(sZ.SendMessageIcon, {
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
    uq = 1500,
    uO = 1e3;
function uF(e) {
    e.preventDefault();
}
function uG(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uz = n(709753),
    uU = n(540338);
function uB(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, n_.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var uK = n(986109);
let uH = a.createContext(null);
function uW(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = a.useContext(uH),
        [f, m] = a.useState(() => am.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: o()(uK.xk, { [uK.g5]: f, [uK.Qo]: s, [uK.q3]: u }),
        children: n,
    });
}
let uV = new Map();
function uX(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let uY = "live_behind";
var uZ = n(165963);
function uQ(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([rL.A], () => null != n && n.length > 0 && r_({ keys: n }, rL.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: ej.intl.string(eb.default.F2yVHg) }
        : null;
}
function uJ(e) {
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
let u0 = [12e4];
var u1 = n(292771);
function u2(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([am.Ay], () => am.Ay.useReducedMotion),
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
            className: u1.wg,
            children: r.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(u1.qd, e.leaving ? u1.dv : u1.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function u3(e) {
    return e?.state === "action_needed" && e.permissionsChanged;
}
var u4 = n(247171);
function u5(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: a } = e;
    return (0, i.jsxs)("div", {
        className: o()(u4.row, r),
        children: [
            (0, i.jsx)(x.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: o()(u4.gutter, u4[n]),
                "aria-hidden": !0,
                children: (0, i.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, i.jsx)("div", { className: u4.content, children: a }),
        ],
    });
}
var u7 = n(830205);
function u8(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(u5, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: u7.aK,
        children: (0, i.jsxs)("div", {
            className: u7.n8,
            children: [
                (0, i.jsx)(x.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: u7.Qq,
                    children: l,
                }),
                null != n
                    ? (0, i.jsx)("div", {
                          className: u7.X8,
                          children: (0, i.jsx)(d.m, {
                              text: ej.intl.string(ej.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tQ.K, {
                                  "aria-label": ej.intl.string(ej.t.WAI6xu),
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
function u6(e) {
    let { projectId: t } = e,
        n = a.useContext(tm.bI);
    return (0, i.jsx)(u8, {
        icon: aJ.ShieldIcon,
        children: ej.intl.format(eb.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tm.vL)(t, n.guildId));
            },
        }),
    });
}
var u9 = n(443865),
    oe = n(716502);
function ot(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(u5, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: oe.Nr,
        children: (0, i.jsxs)("section", {
            className: oe.Qs,
            children: [
                l,
                null != n
                    ? (0, i.jsx)("div", {
                          className: oe.X8,
                          children: (0, i.jsx)(d.m, {
                              text: ej.intl.string(ej.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tQ.K, {
                                  "aria-label": ej.intl.string(ej.t.WAI6xu),
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
function on(e) {
    let { children: t } = e;
    return (0, i.jsx)(x.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: oe.DD,
        children: t,
    });
}
function ol(e) {
    let { children: t } = e;
    return (0, i.jsx)(x.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: oe.rf,
        children: t,
    });
}
function or(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: oe.o1, children: t });
}
var oi = n(95635);
function oa(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, ty.A)(t, n);
    return (0, i.jsx)(u8, {
        icon: oi.UploadIcon,
        onDismiss: l,
        children: ej.intl.format(eb.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let os = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && u3(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, i.jsx)(u6, { projectId: n });
        },
    },
    {
        id: uY,
        priority: 2,
        resolve: function (e) {
            var t;
            let { turn: n, publish: l, draftHasText: r, idleMs: i } = e;
            return null == n ||
                r ||
                l?.state !== "action_needed" ||
                !l.isUpdate ||
                null != l.disabledReason ||
                i < 12e4 ||
                (null != n.publishCta && sj(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(uY)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, i.jsx)(oa, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: i, ideasIntroAnchorId: a } = e;
            return !n || null == a || u3(l) ? null : null != t || r || i ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, i.jsxs)(ot, {
                icon: u9.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, i.jsx)(on, { children: ej.intl.string(eb.default.OJlbhX) }),
                    (0, i.jsx)(ol, { children: ej.intl.string(eb.default["3vJBni"]) }),
                    (0, i.jsx)(or, {
                        children: (0, i.jsx)(f.$, {
                            variant: "primary",
                            size: "sm",
                            text: ej.intl.string(eb.default["U/bLzU"]),
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
var ou = n(817921);
function oo(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let i = (function (e, t, n, l, r) {
                let i,
                    s = (0, tm.Ay)(e),
                    u = (0, c.bG)([y.default], () => y.default.getCurrentUser()?.id),
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
                                if ((0, n_.BL)(n)) return n;
                                if (!(0, n_.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || uJ(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === uX(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    b = uQ(e, x),
                    j = x?.settings_keys?.length ?? 0,
                    w = (0, c.bG)([rL.A], () => j > 0 && null == rL.A.getSettings(e), [j, e]),
                    k = (0, uz.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (i = (0, n_.Ji)(t)) || !!(0, n_.B0)(t, t.lastIndexOf(i))) &&
                        (null == m || !uJ(m)) &&
                        null == uB(t) &&
                        null == b &&
                        !w &&
                        0 === k.length,
                    idleMs: null != d ? Math.max(0, f - d) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = uV.get(`${e}:${n}`);
                        return null != l ? uX(t, l, u) : null;
                    },
                    isDismissed: (t) => (0, uZ.VS)(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, u0);
            (0, uZ.$p)();
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
                                uV.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                o.map((e) => ({
                    ...e,
                    options: {
                        context: i,
                        dismiss: null != e.tip.dismissal ? () => (0, uZ.qv)(e.tip, t, i.ideasIntroAnchorId) : void 0,
                    },
                }))
            );
        })(os, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, i.jsx)(uW, {
              role: "assistant",
              continuation: !0,
              children: (0, i.jsx)("div", {
                  className: ou.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, i.jsx)(u2, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var oc = n(52133),
    od = n(732159),
    of = n(888366),
    om = n(862026),
    oh = n(291192);
function og(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = a.useId(),
        r = (0, om.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, i.jsxs)("div", {
        className: oh.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, i.jsxs)("div", {
                className: oh.Sp,
                children: [
                    (0, i.jsx)("span", { className: oh.q3 }),
                    (0, i.jsxs)("span", {
                        className: oh.g8,
                        children: [
                            (0, i.jsx)(of.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, i.jsx)(x.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: oh.q3 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: oh.nM,
                role: "status",
                children: [
                    (0, i.jsxs)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          " ",
                                          (0, i.jsx)(ly.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, e_.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, i.jsx)(od.u, {
                                                                    ...t,
                                                                    title: ej.intl.string(eb.default["i+xjZM"]),
                                                                    subtitle: ej.intl.string(eb.default.fMBZmD),
                                                                    confirmText: ej.intl.string(eb.default.i5f3Uo),
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
                        ? (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var op = n(345942),
    ox = n(727419),
    ov = n(576705);
function ob(e) {
    let { guildId: t, update: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            " ",
            ej.intl.format(n ? eb.default.esEGL5 : eb.default["XrN+Bg"], {
                onOpen: () => ox.A.open(t, lu.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var oj = n(976860);
function oy(e) {
    return (0, c.bG)([ts.Ay, ar.A], () => {
        let t = ts.Ay.getProject(e);
        return null == t ? "" : (ar.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var ow = n(951465),
    ok = n(369455);
function oA(e) {
    var t, n, l;
    let r,
        a,
        { projectId: s, notice: u } = e,
        o = oy(s),
        d =
            null ==
            (a = (0, c.bG)([ts.Ay, lH.A], () => {
                let e = ts.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lH.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: a.id, name: a.name },
        f = (0, c.cf)([ts.Ay, tv.A, lH.A, ov.A], () => {
            let e = ts.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eF.q7.AUTOMOD) === !0 ||
                    tv.A.getPublishStatus(s)?.surface === "automod",
                n = lH.A.getGuild(e.guild_id),
                l = null != n && ov.A.can(lu.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, i.jsxs)(x.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            ej.intl.format(
                ((t = u),
                (n = d?.name ?? null),
                (l = f.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? eb.default.ESu5eZ
                        : eb.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? eb.default.ZnQW4S
                          : eb.default.ev23Cw
                      : t.update
                        ? r
                            ? eb.default["LuS8a/"]
                            : eb.default.gQzuLC
                        : l
                          ? eb.default.KORRGl
                          : r
                            ? eb.default["/npn7F"]
                            : eb.default.MOrR29),
                {
                    name: o,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, op.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, i.jsx)(ob, { guildId: f.guildId, update: u.update })
                : !f.automod && u.update && null != u.published_revision
                  ? (0, i.jsx)(oS, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function oS(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tm.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: i } = (0, c.cf)(
                    [tv.A, ts.Ay],
                    () => {
                        let r = tv.A.getPublishStatus(e),
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
                      ? ej.intl.format(eb.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, i.jsx)(
                                    e7.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: ok.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, oj.pX)(lu.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : ej.intl.format(eb.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = ts.Ay.getProject(e),
                                        i = null == r ? null : (0, tm.KL)(r, l);
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
                                null != e && (0, ow.A)(e);
                            },
                        }),
              ],
          });
}
var oC = n(73153),
    oI = n(505527),
    oN = n(367790),
    oE = n(354777),
    o_ = n(491182),
    oM = n(74096),
    oR = n(549587),
    oP = n(448368),
    oT = n(21299),
    oL = n(538355),
    o$ = n(715628),
    oD = n(752636),
    oq = n(9842),
    oO = n(589022),
    oF = n(967198),
    oG = n(531685),
    oz = n(503275);
let oU = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oB(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function oK(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function oH(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = oK(e, t),
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
    if (oB(r) && oB(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && oB(oK(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oW(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([am.Ay], () => am.Ay.useReducedMotion),
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
                      for (; i > 0 && oH(t, i);) i--;
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
                                    for (; l > t + 1 && n - l < 12 && oU.has(e.charAt(l - 1));) l--;
                                    return oU.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + a));
                                let u = s;
                                for (; u < t.length && u - s < 32 && oH(t, u);) u++;
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
var oV = n(624479),
    oX = n(890377),
    oY = n(92446),
    oZ = n(957565),
    oQ = n(180227);
function oJ(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: o()(oQ.QE, { [oQ.Rn]: t }),
              children: (0, i.jsx)(aF.Ay, {
                  children: n.map((e) =>
                      (0, i.jsx)(
                          aF.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function o0(e) {
    return oZ.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ej.intl.string(ej.t.JrGD7E), icon: oV.CopyIcon, onClick: () => (0, oZ.C)(e) }]
        : [];
}
function o1(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: ej.intl.string(eb.default.CXtLD2),
                          tooltip: ej.intl.string(eb.default.DOb1HM),
                          icon: oX.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ej.intl.string(eb.default.urZwpN),
                          icon: e8.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, i.jsx)(oJ, { groupStart: n, actions: [...r, ...o0(t)] });
}
function o2(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        a =
            null == l
                ? []
                : [{ id: "restore-version", label: ej.intl.string(eb.default.H8Jfhu), icon: t1.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oY.BugIcon, onClick: r }];
    return (0, i.jsx)(oJ, { groupStart: n, actions: [...a, ...o0(t), ...s] });
}
let o3 = (0, as.createChannelRecord)({ id: "conjure-builder", type: lu.rbe.DM }),
    o4 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function o5(e, t) {
    return null == e ? e : (0, i.jsx)("div", { className: o()(oQ.Yq, { [oQ.x1]: t }), children: e });
}
function o7(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let o8 = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function o6(e, t, n) {
    let { content: l } = (0, oL.A)(e, o8),
        r = a.useMemo(() => ((0, rZ.aW)(e.content) ? (0, oE.z2)(sG.U, e, o8).content : null), [e]) ?? l,
        s = a.useMemo(() => ({ message: e, channel: o3, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, i.jsx)(oM.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, o$.A)(s, r);
}
function o9(e) {
    let [t, n] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = a.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = a.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oT.m)(e, o3, t.usernameProfile, l),
        u = (0, oT.Jo)(t.avatarProfile, l),
        o = (0, c.bG)([oF.A], () => oF.A.getGuildId()),
        d = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        f = a.useCallback(
            (t) => {
                let n = y.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, i.jsx)(oO.A, { ...t, user: n, currentUser: d, guildId: o ?? void 0 });
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
let ce = { formatInline: !0, allowGameMentions: !0 };
function ct(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, oL.A)(n, ce),
        u = a.useMemo(() => {
            let e = "" === n.content ? null : (0, rZ.aW)(n.content) ? (0, oE.z2)(sG.U, n, ce).content : s;
            return null == l
                ? e
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("span", {
                              className: oQ.GV,
                              children: [
                                  (0, i.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: oQ.Rj,
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
            [li.A],
            () => ({
                isReplyAuthorBlocked: li.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: li.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        f = (0, aq.X4)(n),
        m = (0, aq.X4)(t),
        h = o9(n);
    return (0, i.jsx)(oP.A, {
        repliedAuthor: f,
        baseAuthor: m,
        baseMessage: t,
        channel: o3,
        referencedMessage: { state: oq.a.LOADED, message: n },
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
function cn(e) {
    let { message: t, author: n } = e,
        l = o9(t);
    return (0, i.jsx)(oR.Ay, {
        message: t,
        channel: o3,
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
function cl(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, oz.vm)(l),
        c = a.useMemo(() => (0, aq.FT)(o, null), [o]),
        d = a.useMemo(() => M(t), [t]),
        f = d?.body ?? t,
        m = (0, ue.Qu)(f),
        h = a.useMemo(() => {
            if (null == o) return null;
            let e = (0, aa.Ay)({ channelId: o3.id, content: f, author: o });
            return (0, ai.rh)({ ...e, timestamp: o7(n, e.timestamp), state: lu.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, i.jsx)(
              cr,
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
function cr(e) {
    let { message: t, author: n, content: l, selected: r, accessories: a, groupStart: s = !0, onQueuedAction: u } = e,
        o = o6(t, l);
    return (0, i.jsx)(o_.A, {
        className: oQ.yE,
        author: n,
        childrenHeader: s ? (0, i.jsx)(cn, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? o
                : (0, i.jsxs)("div", {
                      className: oQ.zq,
                      children: [
                          (0, i.jsxs)("span", {
                              className: oQ.GV,
                              children: [
                                  (0, i.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: oQ.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, i.jsx)("span", { className: oQ.WO, children: o }),
                      ],
                  }),
        childrenAccessories: o5(a, "" !== l),
        childrenButtons: (0, i.jsx)(o1, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function ci(e) {
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
        { text: f, revealing: m } = oW(t, { streaming: (0, c.bG)([oG.A], () => o && oG.A.isFocused(), [o]) }),
        h = a.useMemo(() => (0, aq.FT)(null, null), []),
        g = a.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, oz.vm)(p),
        v = a.useMemo(() => (null == r ? null : M(r.content)), [r]),
        b = a.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aa.Ay)({ channelId: o3.id, content: v?.body ?? r.content, author: x });
            return (0, ai.rh)({ ...e, id: r.id, timestamp: o7(r.createdAt, e.timestamp), state: lu.cmJ.SENT });
        }, [r, v, x]),
        j = a.useMemo(() => (null == r ? void 0 : { channel_id: o3.id, message_id: r.id }), [r]),
        [y] = a.useState(() => (0, aa.Ay)({ channelId: o3.id, content: "", author: o4 })),
        w = a.useMemo(
            () =>
                (0, ai.rh)({
                    ...y,
                    timestamp: o7(n, y.timestamp),
                    state: lu.cmJ.SENT,
                    ...(null != j ? { type: lu.lAJ.REPLY, message_reference: j } : {}),
                }),
            [y, n, j],
        ),
        k = a.useMemo(() => w.set("content", f), [w, f]),
        A = a.useMemo(
            () => (0, oD.A)({ message: w, channel: o3, author: g, guildId: void 0, isGroupStart: u }),
            [w, g, u],
        ),
        S = o6(k, f, oQ.OS);
    return (0, i.jsxs)("div", {
        className: oQ.$4,
        "data-replying": null != b ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, i.jsx)(o_.A, {
                className: oQ.yE,
                author: g,
                childrenRepliedMessage:
                    null == b
                        ? null
                        : (0, i.jsx)(ct, { baseMessage: w, referenced: b, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: S,
                childrenAccessories: o5(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            u ? (0, i.jsx)("img", { className: oQ.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var ca = n(981879);
function cs(e) {
    let { messageId: t, reaction: n } = e,
        l = a.useMemo(
            () =>
                (0, ai.rh)(
                    { ...(0, aa.Ay)({ channelId: o3.id, content: "" }), id: `conjure:${t}`, state: lu.cmJ.SENT },
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
                (oC.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: o3.id,
                    messageId: l.id,
                    users: [o4],
                    emoji: e,
                    reactionType: oI.v6.NORMAL,
                }),
                    oC.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: o3.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: oI.v6.NORMAL,
                    }));
            }
            return (
                t(),
                oC.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    oC.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, i.jsx)("div", {
            className: ca.H,
            children: (0, i.jsx)(oN.A, {
                message: l,
                channel: o3,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
n(775443);
var cu = n(990779),
    co = n(155899);
function cc(e) {
    let { onSelect: t, onClose: n = tA.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, i.jsx)(tw.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ej.intl.string(ej.t.ogxXGq),
        onSelect: t,
        children: (0, i.jsxs)(tk.rX, {
            children: [
                null != l
                    ? (0, i.jsx)(tk.Dr, {
                          id: "restore-version",
                          label: ej.intl.string(eb.default.H8Jfhu),
                          icon: t1.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, i.jsx)(tk.Dr, { id: "view-trace", label: "View Trace", icon: oY.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cd(e) {
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
        y = null != j && null != x ? () => cf(j, x) : void 0,
        w =
            ((t =
                (0, eS.BQ)() && "assistant" === b.role && (0, n_.BL)(b)
                    ? (b.turn_id ?? b.steps.find((e) => null != e.turn_id)?.turn_id ?? b.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [cu.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : cu.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        k =
            null != w
                ? () =>
                      (function (e, t) {
                          for (let n of ((ek = { projectId: e, traceId: t }), [...ew])) n(e);
                      })(l, w)
                : void 0,
        A = b.in_reply_to,
        S = b.restoreProposal;
    return (0, i.jsx)(uW, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != y || null != k
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = y),
                          (l = k),
                          void (0, tA.jA)(t, (e) => (0, i.jsx)(cc, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, i.jsx)(ci, {
            groupStart: n.groupStart,
            buttons: (0, i.jsx)(o2, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: y,
                onViewTrace: k,
            }),
            content: n.content,
            createdAt: b.created_at,
            replyTo: r,
            onJumpToReplied: null != A && null != a ? () => a(A) : void 0,
            accessories: (0, i.jsx)(sH, {
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
                pickedIdeaIds: null == b.ideas ? void 0 : u,
                attachments: b.attachments,
                secretRequest: n.active || m ? void 0 : b.secretRequest,
                secretRequestId: b.render_id,
                secretRequestAwaiting: o,
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
                              cf(
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
function cf(e, t) {
    (0, co.F)({ onConfirm: () => t(e) });
}
var cm = n(288539),
    ch = n(677683),
    cg = n(677690),
    cp = n(159711);
function cx(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: a } =
            ((t = (0, c.bG)([ch.A], () => ch.A.getOutcome(l))),
            (n = (0, c.bG)(
                [lr.A, y.default, li.A],
                () => {
                    let e = t?.status === "pinned" ? lr.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, ll.m1)(e, y.default, li.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = ej.intl.string(eb.default.UGAfl9);
    return null != r
        ? (0, i.jsx)(nF, {
              title: s,
              children: (0, i.jsx)(x.E, {
                  className: cp.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? ej.intl.formatToPlainString(eb.default.gKe6Lw, { channelName: a ?? "" })
                          : ej.intl.string(eb.default["+kpQ3v"]),
              }),
          })
        : (0, i.jsx)(nF, { title: s, children: (0, i.jsx)(cv, { projectId: l }) });
}
function cv(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: u,
            failed: o,
            pin: d,
            skip: m,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [lB.A, ov.A],
                        () =>
                            null == t
                                ? []
                                : lB.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === lu.rbe.GUILD_VOICE && ov.A.can(lu.xBc.MANAGE_CHANNELS, e),
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
                    let t = await (0, cg.pk)(f.id, m);
                    (u(!1), t ? (0, cg.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = a.useCallback(() => (0, cg.tg)(e, { status: "skipped" }), [e]);
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
        h = (0, lq.A)(n, "voice"),
        g = a.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, i.jsx)("div", {
        className: cp.r,
        children: (0, i.jsxs)(lk.B, {
            gap: 12,
            children: [
                (0, i.jsx)(x.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: ej.intl.string(eb.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, i.jsx)(n6.Z, {
                          selectionMode: "single",
                          label: ej.intl.string(eb.default.peOi1H),
                          placeholder: ej.intl.string(eb.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: o ? ej.intl.string(eb.default.d7EeAm) : void 0,
                          disabled: u,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ej.intl.string(eb.default.JVUsIY),
                      }),
                (0, i.jsxs)("div", {
                    className: cp.o,
                    children: [
                        (0, i.jsx)(f.$, {
                            variant: "secondary",
                            size: "sm",
                            text: ej.intl.string(eb.default.Iw0l8o),
                            disabled: u,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, i.jsx)(f.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: ej.intl.string(eb.default.FYI3qr),
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
function cb(e, t, n) {
    return (0, i.jsx)(cm.A, { userId: e, content: `@${t}` }, n);
}
function cj(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            a.useEffect(() => {
                (0, oz.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([y.default], () => (null == l ? null : y.default.getUser(l)), [l]),
                i = (0, ao.tx)(r),
                s = oy(e),
                u =
                    (0, c.bG)([lH.A], () => (null == t.guild_id ? null : lH.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    ej.intl.string(eb.default.R1tPlP),
                o = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([lH.A], () => (null == o ? null : lH.A.getGuild(o)?.name), [o]),
                f = null == r || null == i ? null : { user: i, userHook: (e, t) => n(r.id, i, t) };
            switch (t.type) {
                case "app_removed":
                    if (null != o) {
                        let e = d ?? t.moved_to_guild_name ?? ej.intl.string(eb.default.R1tPlP);
                        return null == f
                            ? ej.intl.format(eb.default.NVM0sD, { app: s, server: u, newServer: e })
                            : ej.intl.format(eb.default["/hlliy"], { app: s, server: u, newServer: e, ...f });
                    }
                    return null == f
                        ? ej.intl.format(eb.default.Lwsrhg, { app: s, server: u })
                        : ej.intl.format(eb.default.qqePfT, { app: s, server: u, ...f });
                case "bot_removed":
                    return null == f
                        ? ej.intl.format(eb.default.mT7EQG, { app: s, server: u })
                        : ej.intl.format(eb.default["lA/crI"], { app: s, server: u, ...f });
                case "preview_bot_removed":
                    return null == f
                        ? ej.intl.format(eb.default["4LVIeo"], { app: s, server: u })
                        : ej.intl.format(eb.default.YJOV6D, { app: s, server: u, ...f });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == f
                        ? ej.intl.format(eb.default["4VQfid"], { channel: e, server: u })
                        : ej.intl.format(eb.default.RlMIJN, { channel: e, server: u, ...f });
                }
                case "remixed":
                    return ej.intl.format(eb.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return ej.intl.string(eb.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, cb),
        r = uQ(t, n);
    return "voice_channel_pin" === n.type
        ? (0, i.jsx)(cx, { projectId: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, i.jsx)(rH, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let cy = a.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: a, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    n1.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rZ.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, i.jsx)(uW, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(cl, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null != t ? (0, i.jsx)(sF.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, i.jsx)(s7, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, i.jsx)(cs, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, rQ.tp)(e, t.id, n);
                            })(l, u, a),
                        }),
                    });
                }
                case "prose":
                    return (0, i.jsx)(uW, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(ci, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, i.jsx)(sF.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, i.jsx)(uW, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sK, {
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
                    return (0, i.jsx)(uW, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(ci, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, i.jsx)(oA, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, i.jsx)(uW, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(ci, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, i.jsx)(cj, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, i.jsx)(uW, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, i.jsx)(og, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, i.jsx)(uW, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sK, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, i.jsx)(uW, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sK, {
                            projectId: l,
                            steps: cw,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, i.jsx)(cd, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, oc.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, oc.A)(e.row, t.row, ["message"]) &&
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
                (0, oc.A)(e.replyTo, t.replyTo) &&
                (0, oc.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cw = [],
    ck = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cA = new WeakMap();
function cS(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cC(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cI = ["wheel", "touchstart", "pointerdown", "keydown"];
function cN(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cE = a.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: d,
            floatingSettingsMessageId: f,
            floatingSecretRenderId: m,
            liveClarificationId: h,
            onRestoreVersion: g,
            onCardReply: p,
            scrollerRef: b,
            stickToBottomRef: j,
            pinned: w,
            onUnpin: k,
            handleRef: A,
            onShowsLatestChange: S,
        } = e,
        C = a.useRef(null),
        [I, N] = a.useState(null),
        E = a.useCallback((e) => {
            ((C.current = e), N(e));
        }, []),
        [_, M] = a.useState(null),
        R = a.useRef(0);
    a.useEffect(() => () => window.clearTimeout(R.current), []);
    let P = a.useCallback((e) => {
            (M(e), window.clearTimeout(R.current), (R.current = window.setTimeout(() => M(null), 1600)));
        }, []),
        T = (0, c.bG)([tv.A], () => tv.A.getPublishStatus(t)),
        L = (0, c.bG)([y.default], () => y.default.getCurrentUser()?.id),
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
                                        let t = (0, nE.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        i = null != r.clarification && r.clarification.id === t,
                        a = cA.get(r);
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
                                (0, n_.ST)(e) ||
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
                        let i = !(0, n_.BL)(e),
                            a = r3({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = a.lastStreamedMessage?.key,
                            u = (0, nE.C6)(e.steps, { turnActive: i }),
                            { lastWork: o, open: c } = (0, nE.CT)(u, { turnActive: i }),
                            d = u.at(-1)?.index,
                            f = !1;
                        for (let n of u) {
                            if (null != n.prose && ck.test(n.prose.content)) f = !0;
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
                                        turnActive: nM(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = ck.test(e.content ?? "");
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
                    (cA.set(r, { superseded: e, liveCard: i, planned: s }), n.push(...s));
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
                        if (null != l) return sb(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, T)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = sy.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), sy.set(t, n)), n);
                      })),
                h,
            );
        }, [n, T, h]),
        D = a.useMemo(() => $.map((e) => e.key), [$]),
        [q, O] = a.useState(null),
        F = (function (e, t, n) {
            if (null == t) return cS(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cC(e, t.endKey, t.end - 1) + 1,
                i = cC(e, t.startKey, t.start);
            return (l && n && r - i > 120 && (i = r - 60), cS(e, i, r));
        })(D, q, w),
        G = a.useRef(F),
        z = a.useRef(D),
        U = a.useRef($),
        B = a.useRef(null),
        K = a.useRef(null),
        H = a.useRef(new Set()),
        W = a.useRef(null),
        V = a.useRef(!1),
        X = a.useCallback(() => {
            let e = b.current?.getScrollerNode(),
                t = V.current ? cN(C.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [b]);
    a.useLayoutEffect(() => {
        let e = b.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            V.current = !1;
        };
        for (let n of cI) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cI) e.removeEventListener(n, t);
        };
    }, [b]);
    let Y = a.useCallback(() => {
            let e = b.current?.getScrollerNode(),
                t = C.current;
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
        }, [b]),
        Z = a.useCallback(() => {
            let e = b.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: i } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cS(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!i && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cS(e, n, l));
                }
                let a = Math.max(t.start - 30, t.end - 120);
                return a < t.start ? cS(e, a, t.end) : null;
            })(z.current, G.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: j.current,
            });
            "older" === n ? (0, ey.P6)(t) : null != n && O(n);
        }, [b, j, t]);
    a.useImperativeHandle(
        A,
        () => ({
            handleScroll() {
                (Y(),
                    O((e) => {
                        let t = G.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    Z());
            },
            recordAnchor: Y,
            showLatest(e) {
                ((V.current = !1), (K.current = e ?? null), O(null));
            },
            snapshot() {
                let e = B.current;
                return null == e ? null : { window: G.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!z.current.includes(n.key)) return !1;
                (k(), (B.current = n));
                let l = G.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = b.current?.getScrollerNode(),
                        t = C.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else O(t);
                return !0;
            },
        }),
        [Y, Z, k, b],
    );
    let Q = a.useRef(null),
        J = a.useCallback(
            (e) => {
                var n;
                let l;
                ((Q.current = null), (V.current = !1));
                let r = C.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (k(), O(G.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), P(e));
                    return;
                }
                let i = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === i) {
                    (0, ey.P6)(t) && (Q.current = e);
                    return;
                }
                (k(),
                    (K.current = () => {
                        (C.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            P(e));
                    }),
                    O(((n = z.current), cS(n, (l = Math.max(0, i - 30)), l + 60))));
            },
            [P, k, t],
        );
    (a.useEffect(() => {
        let e = Q.current;
        null != e && J(e);
    }, [$, J]),
        a.useLayoutEffect(() => {
            if (null == I) return;
            let e = I.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), j.current)) return void b.current?.scrollToBottom();
                        (X(), Y());
                    }
                });
            return (t.observe(I), () => t.disconnect());
        }, [I, X, Y, b, j]));
    let ee = null == F.endKey;
    (a.useEffect(() => S?.(ee), [ee, S]),
        a.useLayoutEffect(() => {
            ((G.current = F), (z.current = D), (U.current = $));
        }),
        a.useLayoutEffect(() => {
            let e = b.current?.getScrollerNode(),
                l = C.current,
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
                    })(W, t, n);
            if (null != e && null != l) {
                let t = B.current;
                if (r && j.current && null != cN(l)) (k(), O(G.current), (V.current = !0), X());
                else if (j.current) b.current?.scrollToBottom();
                else if (V.current) X();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = K.current;
                ((K.current = null), n?.(), Y(), Z());
            }
            H.current = new Set(D);
        }, [t, n, $, D, F.start, F.end, b, j, k, X, Y, Z]));
    let et = a.useMemo(() => uB(n), [n]),
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
                : (0, n_.BL)(ei)
                  ? ei.awaitingUser
                  : null) ?? void 0,
        es = (0, c.bG)([rL.A], () => rL.A.getSettings(t)?.secrets, [t]),
        eu = (0, uz.WT)(t),
        eo = a.useMemo(() => (0, rS.Mv)(n, es), [n, es]);
    if (!(0, n_.i_)(n)) {
        if ("loading" === l)
            return (0, i.jsx)("ol", {
                className: o()(uK.x7, uK.jH),
                "aria-busy": !0,
                children: (0, i.jsx)("li", { className: uK.Ub, children: (0, i.jsx)(v.y, {}) }),
            });
        let e = "unavailable" === l ? eb.default.Td4Sf4 : eb.default.V1QiNz;
        return (0, i.jsx)("ol", {
            className: uK.x7,
            children: (0, i.jsx)(uW, { role: "assistant", children: (0, i.jsx)(ci, { content: ej.intl.string(e) }) }),
        });
    }
    return (0, i.jsx)(uH.Provider, {
        value: H,
        children: (0, i.jsxs)("ol", {
            ref: E,
            className: uK.x7,
            children: [
                $.slice(F.start, F.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, i.jsx)(
                            cy,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && _ === n.id,
                                currentUserId: "user" === e.kind ? L : void 0,
                            },
                            e.key,
                        );
                    let l = n === ei;
                    return (0, i.jsx)(
                        cy,
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
                            settingsFloating: n.id === f,
                            secretFloating: n.render_id === m,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === et ? d : void 0,
                            onRestoreVersion: g,
                            onCardReply: p,
                        },
                        e.key,
                    );
                }),
                ee
                    ? eu.map((e) =>
                          (0, i.jsx)(
                              uW,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, i.jsx)(ci, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, i.jsx)(uU.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ea && ee
                    ? (0, i.jsx)(uW, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, i.jsx)(ci, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, i.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ej.intl.string(eb.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                ee ? (0, i.jsx)(oo, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var c_ = n(731084),
    cM = n(336288),
    cR = n(187447);
function cP(e) {
    let { activity: t, id: n } = e,
        l = (0, nN.j)(),
        { text: r, revealing: s } = oW(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
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
            className: cR.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, i.jsx)(nS.Ch, {
                ref: u,
                onScroll: f,
                className: cR.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, i.jsx)("div", {
                    className: o()(sB.PT, cR.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: av.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cT = n(53659);
function cL(e) {
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
        [v, b] = a.useState(null),
        j = (0, c_.xu)({
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
        y = ej.intl.string(j),
        w = j === c_.kx["0"],
        [k, A] = a.useState(m ?? y),
        S = (0, nN.j)();
    (l || (0, c_.E4)(y, k) || (!S && !w)) && k !== y && A(y);
    let C = a.useRef(y);
    (a.useEffect(() => {
        C.current = y;
    }, [y]),
        a.useEffect(() => {
            h?.(k);
        }, [k, h]));
    let I = a.useRef(null),
        N = a.useRef(k);
    a.useEffect(() => {
        N.current = k;
    }, [k]);
    let E = a.useRef(w),
        _ = a.useRef(0);
    (a.useEffect(() => {
        ((E.current = w), !w && (0, c_.E8)(N.current) && A(C.current));
    }, [w]),
        a.useEffect(() => {
            if (!S) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, c_.E8)(N.current) ? _.current + 1 : 0), A((0, c_.Ov)(_.current)))
                    : C.current !== N.current
                      ? A(C.current)
                      : I.current?.play();
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
    return (0, i.jsx)(tI.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, i.jsx)(cP, { id: p, activity: t }),
        children: () =>
            (0, i.jsxs)(e7.D, {
                innerRef: g,
                className: o()(cT.hF, M && cT.Xd),
                "aria-label": ej.intl.string(
                    r
                        ? eb.default.qqlUiW
                        : j === eb.default.j8tmjK
                          ? eb.default.j8tmjK
                          : w
                            ? c_.kx["0"]
                            : eb.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ej.intl.string(j),
                onClick: T,
                children: [
                    (0, i.jsx)("span", {
                        className: cT.bl,
                        children: (0, i.jsx)(cM.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", {
                        className: cT.xu,
                        "aria-hidden": !!c || !!w || void 0,
                        children: S
                            ? (0, i.jsx)(sW.o, {
                                  ref: I,
                                  text: k,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: cT.yE,
                              })
                            : (0, i.jsx)(x.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: cT.yE,
                                  children: k,
                              }),
                    }),
                ],
            }),
    });
}
let c$ = { second: 1e3, minute: 6e4 };
function cD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let n;
            if (null == e) return;
            let r = c$[t];
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
var cq = n(719374);
function cO(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = cD(t);
    return (0, i.jsx)(x.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cq.$,
        "data-conjure-turn-timer": !0,
        children: (0, il.C7)(l),
    });
}
function cF(e) {
    let { startedAt: t } = e,
        n = cD(t, "minute");
    return (0, i.jsx)(n$.A, { role: "timer", children: (0, il.Us)(n) });
}
var cG = n(885574),
    cz = n(242779),
    cU = n(436804);
function cB(e) {
    return e.toLocaleString();
}
function cK(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, i.jsxs)("div", {
        className: cU.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: cU.mf,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cB((0, cz.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(x.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cB(n.input_tokens),
                    " in \xb7 ",
                    cB(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cB(n.cache_creation_input_tokens)} cache write \xb7 ${cB(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cH(e) {
    let { project: t } = e,
        n = (0, cz.wU)(t.compaction),
        l = (0, cz.wU)(t.classifier),
        r = (0, cz.wU)(t.image),
        a = (0, cz.wV)(t.orchestrator, t.codegen),
        s = (0, cz.wV)(a, n);
    return (0, i.jsxs)("div", {
        className: cU.si,
        role: "dialog",
        "aria-label": ej.intl.string(eb.default.p5EGzq),
        children: [
            (0, i.jsx)("div", {
                className: cU.Q$,
                children: (0, i.jsxs)("div", {
                    className: cU.mf,
                    children: [
                        (0, i.jsxs)(x.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cB((0, cz.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(cK, { label: ej.intl.string(eb.default["9Sj3SX"]), usage: a }),
            (0, i.jsx)(cK, { label: ej.intl.string(eb.default.ANCEo3), usage: n }),
            (0, i.jsx)(cK, { label: ej.intl.string(eb.default.ugL6D4), usage: l, cached: !1 }),
            (0, i.jsx)(cK, { label: ej.intl.string(eb.default.DHr5On), usage: r, cached: !1 }),
            (0, i.jsxs)("div", {
                className: cU.mf,
                children: [
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: ej.intl.string(eb.default["8OUg09"]),
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cz.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cz.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cW(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cH, { project: t }),
        children: (e) =>
            (0, i.jsx)(e7.D, {
                innerRef: n,
                className: cU.Y$,
                "aria-label": ej.intl.string(eb.default.Z96gxQ),
                ...e,
                children: (0, i.jsx)(cG.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cV = n(990250);
function cX(e) {
    let { queued: t } = e,
        n = ej.intl.string(eb.default.hzgPbZ);
    return (0, i.jsxs)("div", {
        className: cV.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, i.jsxs)("div", {
                className: cV.wx,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, i.jsx)(nS.Ch, {
                className: cV.XG,
                children: (0, i.jsx)("ul", {
                    className: cV.p_,
                    children: t.map((e) => (0, i.jsx)(cY, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cY(e) {
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
              className: cV.AS,
              children: (0, i.jsx)(x.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: ej.intl.string(eb.default["07XimM"]),
              }),
          })
        : (0, i.jsxs)("li", {
              className: cV.AS,
              children: [
                  (0, i.jsx)(x.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cV.Qs,
                      children: t,
                  }),
                  s
                      ? (0, i.jsx)(ly.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: ej.intl.string(l ? eb.default.nEMoeN : eb.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cZ(e) {
    let { queued: t, className: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cX, { queued: t }),
        children: (e) =>
            (0, i.jsx)(e7.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, i.jsx)(x.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: ej.intl.formatToPlainString(eb.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cQ = n(997421);
function cJ(e) {
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
        v = (0, eC.Zv)(t),
        b = (0, c.bG)([tv.A], () => tv.A.getPublishStatus(t)?.publishing === !0, [t]),
        [j, y] = a.useState(null),
        w = a.useCallback(
            (e) =>
                y(
                    (0, c_.E8)(e) || e === ej.intl.string(eb.default.mKK6wB) || e === ej.intl.string(eb.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        k = null == h ? null : (0, c_.uc)(h),
        A = null != s,
        S = s ?? (n ? l : void 0),
        C = n || r || A || !0 === m;
    return (0, i.jsxs)("div", {
        className: cQ.jf,
        children: [
            (0, i.jsxs)("div", {
                className: cQ.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || u || v || b
                        ? (0, i.jsx)(cL, {
                              activity: d,
                              compacting: f,
                              saving: m,
                              restoring: r,
                              remixing: A,
                              recalling: u,
                              controlling: v,
                              publishPending: b && C,
                              publishing: b,
                              spoken: j,
                              onSpokenChange: w,
                          })
                        : null,
                    null != S ? (0, i.jsx)(cO, { startedAt: S }) : null,
                ],
            }),
            null != S ? (0, i.jsx)(cF, { startedAt: S }) : null,
            0 === p.length ? null : (0, i.jsx)(cZ, { queued: p, className: o()(cQ.BP, cQ.A1) }),
            null == h || null == k
                ? null
                : (0, i.jsxs)("span", {
                      className: cQ.BP,
                      children: [
                          (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": k.aria,
                              children: k.text,
                          }),
                          (0, i.jsx)(cW, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ej.intl.formatToPlainString(eb.default["tCo+ZM"], { status: (0, c_.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cQ.XF,
                      children: (0, c_.Db)(g),
                  }),
        ],
    });
}
var c0 = n(698638),
    c1 = n(608711);
let c2 = [ej.intl.string(eb.default["9w+Chc"]), ej.intl.string(eb.default.WAvmdq), ej.intl.string(eb.default.SKsrzl)];
function c3(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        o,
        {
            projectId: m,
            restoreState: h,
            onRestoreVersion: g,
            onImportProject: p,
            escapeScopeRef: v,
            visible: b = !0,
        } = e,
        j = (0, c.bG)([r$.A], () => r$.A.getMessages(m), [m]),
        y = (0, c.bG)([ey.Ay], () => ey.Ay.getConnState(m), [m]),
        w = (0, c.bG)([r$.A], () => r$.A.getProjectUsage(m), [m]),
        k = (0, c.bG)([r$.A], () => r$.A.getThinkingActivity(m), [m]),
        A = (0, c.bG)([r$.A], () => r$.A.isCompacting(m), [m]),
        C = (0, c.bG)([r$.A], () => r$.A.isSaving(m), [m]),
        I = (0, c.bG)([rh.A], () => rh.A.getModelSettings(m), [m]),
        E = a.useRef(null),
        _ = a.useRef(null),
        M = a.useRef(null),
        R = a.useRef(null),
        {
            stickToBottomRef: P,
            pinned: T,
            atBottom: L,
            unpin: $,
            releasePinHold: D,
            showsLatest: q,
            showsLatestRef: F,
            handleShowsLatestChange: G,
            updatePin: z,
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
                    for (let e of cI) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of cI) t.removeEventListener(e, o);
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
        })(_),
        B = a.useCallback(() => {
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
            (D(), F.current ? e() : M.current?.showLatest(e));
        }, [D, F]),
        K = a.useCallback(() => {
            (z(), M.current?.handleScroll());
            let e = R.current;
            null != e && (e.position = P.current ? null : (M.current?.snapshot() ?? null));
        }, [z, P]),
        H = a.useContext(eL.A) === m;
    a.useLayoutEffect(() => {
        if (!H) return;
        let e = { position: eD.A.getProjectView(m).chatScroll };
        return ((R.current = e), () => (0, e$.g7)(m, { chatScroll: e.position }));
    }, [H, m]);
    let W = a.useRef(!H);
    (a.useLayoutEffect(() => {
        if (W.current || !(0, n_.i_)(j)) return;
        W.current = !0;
        let e = eD.A.getProjectView(m).chatScroll;
        null != e && M.current?.restore(e) !== !0 && null != R.current && (R.current.position = null);
    }, [j, m]),
        a.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            let t = _.current?.getScrollerNode(),
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
                    r && (P.current ? _.current?.scrollToBottom() : M.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [P]),
        a.useEffect(() => {
            (0, ey.ensureConnection)(m);
        }, [m]),
        (0, rJ.E1)(m, (0, nN.j)()));
    let V = U(m),
        X = (function (e) {
            let t = (0, tm.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lH.A], () => (null == n ? null : (lH.A.getGuild(n)?.name ?? null))),
                [r, i] = a.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: ej.intl.format("channel" === s ? eb.default["1cm4fj"] : eb.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => i(e),
                  };
        })(m),
        Y = (function (e) {
            let t = (0, c.bG)([rV.A], () => rV.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rX.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rW.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? ej.intl.format(eb.default["bw/n4C"], { helpdeskURL: e })
                            : ej.intl.format(eb.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: ej.intl.formatToPlainString(eb.default.GHgG2B, { percent: l, limit: n }) };
        })(m),
        Z =
            ((l = (0, c.bG)([rk.A], () => rk.A.getFailure(m))),
            (r = a.useCallback(() => (0, rA.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: ej.intl.format(eb.default.Up6Ssw, { reason: l }),
                      retry: { text: ej.intl.string(eb.default["ywA+ET"]), onClick: r },
                  }),
        Q = (0, rp.E8)(m),
        J = (0, c.bG)([rk.A], () => rk.A.getSetupStartedAt(m), [m]),
        ee = a.useCallback(
            (e, t) => {
                (0, ey.dv)(m, e, t);
            },
            [m],
        ),
        et = a.useCallback(
            (e, t, n) => {
                let l = n ?? ee;
                0 === V.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => S(e.comment)),
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
                                      i.push(`${t + 1}. ${N(e.target)}`),
                                      i.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let a = n.trim();
                              return ("" !== a && (i.push(""), i.push(`Note for the whole batch: ${a}`)), i.join("\n"));
                          })({ annotations: V.annotations, metaComment: e, context: V.context }),
                          t,
                      ),
                      O(m));
            },
            [V, ee, m],
        ),
        en = a.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of n0)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, ey.re)(e, l.nonce),
                        (function (e) {
                            let t = n0.get(e);
                            (n0.delete(e), n2(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                r$.A.isThinking(m)) &&
                (0, ey.fu)(m);
        }, [m]),
        el = a.useCallback((e) => (0, n4.RQ)(m, e.implementation_prompt), [m]),
        er = a.useCallback((e) => (0, n4.RQ)(m, e), [m]),
        [ei, ea] = (function (e) {
            let [t, n] = a.useState(() => r1(e)),
                [l, r] = a.useState(e),
                i = l !== e,
                s = i ? r1(e) : t;
            return (i && (r(e), n(s)), [s, n]);
        })(m),
        es = a.useCallback(() => ee(ej.intl.string(eb.default["t5CN3+"])), [ee]),
        eu = a.useCallback((e, t, n) => (0, n4.RQ)(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        eo = a.useCallback((e) => (0, rg.X)(m, e), [m]),
        ec = a.useCallback((e) => (0, tz.vX)(m, e), [m]),
        ed = a.useCallback((e) => (0, tK.gn)(m, "chat", Array.from(e), ec), [m, ec]),
        ef = a.useCallback(() => (0, n4.RQ)(m, ej.intl.string(eb.default.Zc7gML)), [m]),
        em = h?.status === "restoring",
        eh = "open" === y && !em,
        eg = j[j.length - 1],
        ex = null != eg && "assistant" === eg.role && null != eg.proposal,
        [ev, ew] = a.useState(null),
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
                })(j),
            [j],
        ),
        eA = null != ek && ek.id !== ev ? ek : null,
        eS = a.useCallback(() => {
            null != eA && ew(eA.id);
        }, [eA]),
        [eC, eI] = a.useState(null),
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
                                summary: ej.intl.string(eb.default["o2++BO"]),
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
        eE = eg?.appBuildRequest != null && (0, n_.BL)(eg) && eg.appBuildRequest.id !== eC ? eg.appBuildRequest : null,
        e_ = eN.request ?? (null == eA ? eE : null),
        eM = null == eN.request ? eA : null,
        eR = null != e_ && e_ === eN.request,
        { close: eP, sent: eT } = eN,
        eq = eN.request?.id,
        eO = a.useCallback(() => {
            eR ? eP() : null != e_ && eI(e_.id);
        }, [e_, eR, eP]),
        eF = a.useCallback(
            (e) => {
                (null != eq && eT(eq),
                    (0, ep.P0)({
                        text: ej.intl.formatToPlainString(eb.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [eq, eT],
        ),
        eG = (0, c.bG)([rL.A], () => rL.A.getSettings(m), [m]),
        [ez, eU] = a.useState(null),
        eB = rF(),
        eK =
            null != eg &&
            ((t = eg.id),
            (s = (0, rS.Mv)(j, eG?.secrets)),
            (u = rG(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, n_.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !rz(e.settingsRequest, eG, eB.has(e.id)))),
            )),
        eH =
            null != eg &&
            "assistant" === eg.role &&
            null != eg.settingsRequest &&
            null == eg.secretRequest &&
            (0, n_.BL)(eg) &&
            eg.id !== ez &&
            ((n = eg.settingsRequest),
            (o = n.keys ?? []),
            null != eG &&
                0 !== o.length &&
                o.every((e) => {
                    let t = eG.schema.find((t) => t.key === e);
                    return null != t && rE.has(t.type);
                })) &&
            r_(eg.settingsRequest, eG) &&
            !eK
                ? eg
                : null,
        eW = null == eN.request ? eH : null,
        eV = eW?.settingsRequest ?? null,
        eX = a.useCallback(() => {
            null != eH && eU(eH.id);
        }, [eH]),
        eY = null != eV,
        [eZ, eQ] = a.useState(null),
        eJ = eG?.secrets,
        e0 = a.useMemo(() => (0, rS.Qr)(j, (0, rS.Mv)(j, eJ)), [j, eJ]),
        e1 = null != e0 && e0.render_id !== eZ ? e0 : null,
        e2 = null == eM && null == e_ ? e1 : null,
        e3 = a.useCallback(() => {
            null != e1 && eQ(e1.render_id);
        }, [e1]),
        [e4, e5] = a.useState(null),
        e7 = eM?.id ?? e_?.id ?? e2?.render_id ?? eW?.id,
        e6 = null != eA || null != e_ || null != e1 || null != eH;
    a.useLayoutEffect(() => {
        let e = _.current?.getScrollerNode(),
            t = e4?.firstElementChild;
        if (null == e4 || null == e || !(0, tF.vq)(t, HTMLElement) || null == e7) return;
        function n() {
            P.current && _.current?.scrollToBottom();
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
    }, [e4, e7, _, P]);
    let e9 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([r$.A], () => r$.A.hasLoadedHistory(m), [m]),
            historyUnavailable: (0, c.bG)([r$.A], () => r$.A.isHistoryUnavailable(m), [m]),
            connState: y,
        }),
        te = !(0, n_.i_)(j),
        tt = "loading" === e9 && te,
        tn = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return c2[e % c2.length];
        }, [m]),
        tl = ex ? ej.intl.string(eb.default.Zc7gML) : "greeting" === e9 && te ? tn : null,
        tr = a.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, n_.BL)(t)) return t;
            }
        }, [j]),
        ti = null != tr,
        ta = a.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        ts = null != tr ? (0, rY.S)(tr) : void 0,
        tu = ex && eh ? ef : void 0,
        to = a.useCallback(() => (0, n4.RQ)(m, ej.intl.string(eb.default.EMgIuY)), [m]),
        [tc, td] = a.useState(null),
        [tf, th] = a.useState(ti);
    (tf !== ti && (th(ti), ti || td(null)),
        a.useEffect(() => {
            if (!ti) return;
            let e = _.current?.getScrollerNode(),
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
    let tg = q ? tc : "bottom",
        tp = a.useMemo(() => (null != tr ? (0, nR.b9)(tr.steps) : ""), [tr]),
        tx = a.useMemo(() => (null != tr ? ((0, nE.lt)(tr.steps) ?? tr.todos) : void 0), [tr]),
        tv = tr?.provisionalTodo,
        tb = null != tr && nM(tr),
        tj = a.useMemo(() => {
            var e;
            return null != tr ? ((e = tr.steps), iu((0, nE.Jf)(e, !0).tasks)) : void 0;
        }, [tr]);
    return (0, i.jsxs)("section", {
        ref: E,
        "data-conjure-chat": !0,
        className: c1.TE,
        children: [
            eh
                ? (0, i.jsx)(nI.A, {
                      title: ej.intl.string(eb.default.gy7byi),
                      description: ej.intl.string(eb.default["dkv/WO"]),
                      icons: c0.ir,
                      onDrop: ed,
                  })
                : null,
            (0, i.jsx)(nJ, {
                onJumpToActivity: B,
                line: tp,
                placement: ti && "top" === tg ? "top" : null,
                todos: tx,
                todosLive: tb,
                provisionalTodo: tv,
                agents: tj,
            }),
            (0, i.jsxs)("div", {
                className: c1.JX,
                children: [
                    (0, i.jsx)(nS.Ch, {
                        ref: _,
                        onScroll: K,
                        scrollbarGutter: tt ? "both-edges" : "stable",
                        className: [c1.N$, L ? null : c1.hB, eY ? c1.J9 : null].filter(Boolean).join(" "),
                        children: (0, i.jsx)(rZ.Fu.Provider, {
                            value: m,
                            children: (0, i.jsx)(cE, {
                                projectId: m,
                                messages: j,
                                emptyState: e9,
                                floatingSettingsMessageId: eH?.id,
                                floatingSecretRenderId: e2?.render_id,
                                liveClarificationId: eM?.id,
                                onPickIdea: eh ? el : void 0,
                                onAskForIdeas: eh ? es : void 0,
                                draftHasText: ei,
                                onApprovePlan: eh ? to : void 0,
                                onRestoreVersion: em || ti ? void 0 : g,
                                onCardReply: eh ? er : void 0,
                                scrollerRef: _,
                                stickToBottomRef: P,
                                pinned: T,
                                onUnpin: $,
                                handleRef: M,
                                onShowsLatestChange: G,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: c1.NJ,
                        children: (0, i.jsx)(cJ, {
                            projectId: m,
                            thinking: ti,
                            turnStartedAt: ts,
                            restoring: em,
                            remixStartedAt: J,
                            recalling: tt,
                            thinkingActivity: k,
                            compacting: A,
                            saving: C,
                            projectUsage: w,
                            connState: y,
                            queued: ta,
                        }),
                    }),
                    null == eM
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e5,
                              className: eY ? `${c1.B5} ${c1.J9}` : c1.B5,
                              children: (0, i.jsx)(
                                  rm,
                                  { projectId: m, clarification: eM, onSubmit: eh ? eu : void 0, onDismiss: eS },
                                  eM.id,
                              ),
                          }),
                    null == e_
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e5,
                              className: c1.B5,
                              children: (0, i.jsx)(
                                  ln,
                                  { projectId: m, request: e_, canSend: eh, onDismiss: eO, onSent: eR ? eF : void 0 },
                                  e_.id,
                              ),
                          }),
                    e2?.secretRequest == null
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e5,
                              className: c1.B5,
                              children: (0, i.jsx)(
                                  rT,
                                  {
                                      projectId: m,
                                      cardId: e2.render_id,
                                      request: e2.secretRequest,
                                      status: "open",
                                      onDismiss: e3,
                                  },
                                  e2.render_id,
                              ),
                          }),
                    null == eV
                        ? null
                        : (0, i.jsx)("div", {
                              ref: null == eM && null == e_ ? e5 : void 0,
                              className: c1.B5,
                              children: (0, i.jsx)(
                                  rH,
                                  { askId: eW?.id, projectId: m, request: eV, onDismiss: eX },
                                  eW?.id,
                              ),
                          }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: c1.Jx,
                children: [
                    (0, i.jsx)(nJ, {
                        onJumpToActivity: B,
                        line: tp,
                        placement: ti && "bottom" === tg ? "bottom" : null,
                        todos: tx,
                        todosLive: tb,
                        provisionalTodo: tv,
                        agents: tj,
                    }),
                    0 === V.annotations.length
                        ? null
                        : (0, i.jsxs)("div", {
                              className: c1.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: ej.intl.formatToPlainString(eb.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: ej.intl.string(eb.default["5zG+CR"]),
                                  }),
                                  (0, i.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ej.intl.string(eb.default["/zOv9+"]),
                                      onClick: () => O(m),
                                  }),
                              ],
                          }),
                    null == Q ? null : (0, i.jsx)(rw, { pending: Q }, Q.publishTurnId),
                    null == Z
                        ? null
                        : (0, i.jsx)("div", {
                              className: c1.qB,
                              children: (0, i.jsx)(nC.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: Z.message,
                                  action: Z.retry,
                              }),
                          }),
                    null == X
                        ? null
                        : (0, i.jsxs)("div", {
                              className: c1.Db,
                              children: [
                                  (0, i.jsx)(nC.w, { type: "warning", role: "status", message: X.message }),
                                  (0, i.jsx)("div", {
                                      className: c1.jU,
                                      children: (0, i.jsx)(d.m, {
                                          text: ej.intl.string(ej.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, i.jsx)(tQ.K, {
                                              "aria-label": ej.intl.string(ej.t.WAI6xu),
                                              icon: e8.XSmallIcon,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: X.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == Y
                        ? null
                        : (0, i.jsx)("div", {
                              className: c1.qB,
                              children: (0, i.jsx)(nC.w, {
                                  type: Y.blocked ? "critical" : "warning",
                                  role: Y.blocked ? "alert" : "status",
                                  message: Y.message,
                              }),
                          }),
                    (0, i.jsx)(uD, {
                        projectId: m,
                        escapeScopeRef: v,
                        canSend: eh,
                        running: ti,
                        restoring: em,
                        onSend: et,
                        hasPendingContext: V.annotations.length > 0,
                        onInterrupt: eh ? en : void 0,
                        onUploadFile: ec,
                        onImport: p,
                        onSendToOtherProjects: e6 ? void 0 : eN.open,
                        onApprove: tu,
                        suggestion: tl,
                        questionOpen: e6,
                        secretPending: null != e2,
                        modelSettings: I,
                        onModelSettingsChange: eo,
                        onDraftHasTextChange: ea,
                        aiPaused: Y?.blocked === !0,
                        visible: b,
                    }),
                ],
            }),
        ],
    });
}
var c4 = n(761508),
    c5 = n(209695),
    c7 = n(207438),
    c8 = n(683438),
    c6 = n(564218),
    c9 = n(488412),
    de = n(667931);
function dt(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n
        ? e
        : e.filter((e) =>
              (function (e) {
                  let t = [e.name];
                  for (let n of e.spans)
                      for (let e of (t.push(n.name, n.error ?? ""),
                      [...Object.values(n.attrs ?? {}), ...Object.values(n.details ?? {})]))
                          t.push(String(e));
                  return t.join(" ").toLowerCase();
              })(e).includes(n),
          );
}
var dn = n(311540),
    dl = n(747653),
    dr = n(165363);
function di(e) {
    return { kind: "launch", trace: e.trace, launchId: e.launchId };
}
var da = n(296032),
    ds = n(872892);
let du = { running: ds.Vf, ok: ds.mo, error: ds.Sr };
function dc(e) {
    let { status: t } = e;
    return (0, i.jsx)("span", { className: `${ds.Om} ${du[t]}`, role: "img", "aria-label": c9.Pv[t] });
}
function dd(e, t) {
    (0, e_.mM)(async () => {
        let { default: l } = await n.e(510016).then(n.bind(n, 918723));
        return (n) => (0, i.jsx)(l, { ...n, projectId: e, traceId: t });
    });
}
function df(e) {
    let { trace: t, onOpen: n } = e,
        l = t.spans.find((e) => null != e.error)?.error;
    return (0, i.jsxs)(e7.D, {
        className: ds.nM,
        onClick: n,
        children: [
            (0, i.jsxs)("div", {
                className: ds.sU,
                children: [
                    (0, i.jsx)(dc, { status: (0, de.lQ)(t) }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: ds._k,
                        children: t.name,
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: (0, c9.LK)(t),
                    }),
                ],
            }),
            (0, i.jsx)(x.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                children: (0, c9.Tl)(t),
            }),
            null == l
                ? null
                : (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dm(e) {
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
            (0, c6.H)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: tI.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(tw.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(tk.rX, {
                    children: (0, i.jsx)(tk.Dr, {
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
            return (0, i.jsx)(tQ.K, {
                ...e,
                buttonRef: l,
                icon: a$.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dh(e) {
    let t,
        l,
        r,
        s,
        u,
        o,
        d,
        f,
        { projectId: m } = e,
        [h, g] = a.useState(""),
        p =
            ((t = (0, c.yK)([cu.A], () => cu.A.getTimingTraces(m), [m])),
            (l = (0, c.yK)(
                [ts.Ay],
                () => {
                    let e = ts.Ay.getProject(m);
                    return null == e ? [] : [e.application_id, e.preview_application_id];
                },
                [m],
            )),
            (r = (0, c.bG)([dl.A], () => dl.A.getRecords())),
            (s = a.useMemo(
                () =>
                    r
                        .filter((e) => l.includes(e.applicationId))
                        .map((e) => ({ launchId: e.launchId, trace: (0, dr.x)(e) })),
                [l, r],
            )),
            (u = a.useMemo(() => dt(t, h), [t, h])),
            (o = a.useMemo(() => {
                let e;
                return (
                    (e = new Set(
                        dt(
                            s.map((e) => e.trace),
                            h,
                        ),
                    )),
                    s.filter((t) => e.has(t.trace))
                );
            }, [s, h])),
            (d = a.useMemo(
                () =>
                    (function (e, t) {
                        let n,
                            l = [...e].reverse(),
                            r = [
                                ...((n = [...t]).sort((e, t) => e.trace.started_at - t.trace.started_at), n),
                            ].reverse(),
                            i = [],
                            a = 0;
                        for (let e of l) {
                            for (; a < r.length && r[a].trace.started_at > e.started_at;) (i.push(di(r[a])), (a += 1));
                            i.push({ kind: "worker", trace: e });
                        }
                        for (let e of r.slice(a)) i.push(di(e));
                        return i;
                    })(u, o),
                [u, o],
            )),
            (f = a.useMemo(() => (0, dn.J)(u), [u])),
            { entries: d, workerTraces: u, workerStats: f, isEmpty: 0 === t.length && 0 === s.length });
    return p.isEmpty
        ? (0, i.jsxs)("div", {
              className: ds.Ie,
              children: [
                  (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, i.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail. Launches of this app on this device show up as they finish.",
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: ds.nd,
              children: [
                  (0, i.jsxs)("div", {
                      className: ds.Ko,
                      children: [
                          (0, i.jsx)("div", {
                              className: ds.fH,
                              children: (0, i.jsx)(c8.I, {
                                  query: h,
                                  onChange: g,
                                  onClear: () => g(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, i.jsx)(dm, { projectId: m, traces: p.workerTraces }),
                      ],
                  }),
                  (0, i.jsxs)(nS.Ch, {
                      className: ds.XG,
                      children: [
                          (0, i.jsx)(da.A, { stats: p.workerStats }),
                          0 === p.entries.length
                              ? (0, i.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, i.jsx)("ul", {
                                    className: ds.p_,
                                    "aria-label": "Traces",
                                    children: p.entries.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            {
                                                children: (0, i.jsx)(df, {
                                                    trace: e.trace,
                                                    onOpen: () =>
                                                        (function (e, t) {
                                                            if ("launch" === t.kind) {
                                                                var l;
                                                                return void ((l = t.launchId),
                                                                (0, e_.mM)(async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e(510016),
                                                                        n.e(514721),
                                                                    ]).then(n.bind(n, 911928));
                                                                    return (t) => (0, i.jsx)(e, { ...t, launchId: l });
                                                                }));
                                                            }
                                                            dd(e, t.trace.id);
                                                        })(m, e),
                                                }),
                                            },
                                            e.trace.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dg(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dp(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dx(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dv(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function db(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dj(e) {
    return ej.intl.string("preview" === e ? eb.default["2yLYlG"] : eb.default.eiAi57);
}
let dy = ["all", "preview", "stable", "web"];
function dw(e) {
    switch (e.reason) {
        case "local":
            return ej.intl.string(eb.default.mUeKML);
        case "unconfigured":
            return ej.intl.string(eb.default.bGefb5);
        case "unauthorized":
            return ej.intl.string(eb.default.KLx6Bb);
        default:
            return null != e.detail
                ? ej.intl.formatToPlainString(eb.default.t09Q6q, { detail: e.detail })
                : ej.intl.string(eb.default["t+tG59"]);
    }
}
function dk(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ej.intl.formatToPlainString(eb.default["XO/bN4"], {
              p50: dg(e.memory_p50_bytes ?? 0),
              p999: dg(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dA = {
    db: () => eb.default["7l+DFG"],
    db_preview: () => eb.default.FAuffi,
    runtime: () => eb.default["Gkl+ab"],
    runtime_preview: () => eb.default.ynpJzv,
    bot: () => eb.default["5/i0cj"],
    bot_preview: () => eb.default.m2jsnw,
};
var dS = n(911608),
    dC = n(177427);
function dI(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dC.KE,
        children: [
            (0, i.jsx)("div", {
                className: dC.IQ,
                children:
                    "loading" === n
                        ? (0, i.jsx)(v.y, { type: v.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ej.intl.string(eb.default.ZVByPX),
                            })
                          : null != t
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ej.intl.formatToPlainString(eb.default.INVO50, { time: dv(t) }),
                              })
                            : null,
            }),
            (0, i.jsx)(f.$, { variant: "secondary", size: "sm", text: ej.intl.string(eb.default.oKEgiu), onClick: l }),
        ],
    });
}
function dN(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("section", {
        className: dC.uW,
        "aria-label": t,
        children: [
            (0, i.jsx)(x.E, { variant: "body-xs/semibold", color: "text-muted", className: dC.Gf, children: t }),
            n,
        ],
    });
}
function dE(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: a, state: s } = e;
    return (0, i.jsxs)("div", {
        className: dC.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dC.x7,
                children: [
                    (0, i.jsxs)("span", {
                        className: dC.kS,
                        children: [a, (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, i.jsxs)("span", {
                        className: dC.kS,
                        children: [
                            s,
                            (0, i.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function d_(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        a = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = a >= 0.9;
    return (0, i.jsxs)("div", {
        className: dC.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dC.x7,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, i.jsx)(dS.z, {
                value: 100 * a,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dC.dh : void 0,
            }),
        ],
    });
}
function dM(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, i.jsx)(dE, {
            label: ej.intl.string(eb.default.SXP7pD),
            value: ej.intl.string(eb.default.E5hKVi),
            hint: dw(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, i.jsx)(dE, {
            label: ej.intl.string(eb.default.SXP7pD),
            value: "\u2014",
            hint: ej.intl.string(eb.default.AGvoMJ),
        });
    let l = dk(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dE, { label: ej.intl.string(eb.default["H/X+FI"]), value: dp(n.cpu_ms) }),
            null != l && (0, i.jsx)(dE, { label: ej.intl.string(eb.default.lmFmMO), value: l }),
        ],
    });
}
function dR(e) {
    let { analytics: t } = e,
        n = ej.intl.string(eb.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, i.jsx)(dN, {
            title: n,
            children: (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: dw(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dA[t] : null) ? ej.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, i.jsx)(dN, {
        title: n,
        children:
            0 === l.length
                ? (0, i.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: ej.intl.string(eb.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, i.jsx)(
                          dE,
                          {
                              label: n,
                              value: ej.intl.formatToPlainString(eb.default["w/2voO"], { cpu: dp(t.cpu_ms) }),
                              hint: dk(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dP = n(678708),
    dT = n(414499),
    dL = n(714800),
    d$ = n(81466),
    dD = n(424383),
    dq = n(664121),
    dO = n(816943),
    dF = n(268791),
    dG = n(514042),
    dz = n(738188),
    dU = n(872351),
    dB = n(708988),
    dK = n(150934),
    dH = n(417270);
let dW = "Restart Agent",
    dV = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dX(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dY(e, t) {
    return { label: e, value: null != t && "" !== t ? dv(t) : "Unknown", icon: "calendar" };
}
function dZ(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dQ(e, t, n, l) {
    let [r, i] = dV[n.status];
    return { label: e, value: `${dZ(n.bytes)} of ${dZ(n.max)} \xb7 ${r}`, hint: l, icon: t, state: i };
}
function dJ(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dv(e.at);
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
let d0 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d1(e) {
    let t = `container ${dX(e.local)} \xb7 remote ${dX(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: d0[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dx(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dx(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dx(n)} Ahead, ${dx(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let d2 = ["main", "wip"];
var d3 = n(400154);
let d4 = {
        checkout: dP.FolderIcon,
        edit: lj.PencilIcon,
        remote: dT.CloudIcon,
        commits: dL.ListNumberedIcon,
        calendar: d$.CalendarIcon,
        save: dD.SaveIcon,
        objects: dq.ServerIcon,
        download: dO.CloudDownloadIcon,
        size: dF.SpeedometerIcon,
        file: dG.FileIcon,
    },
    d5 = {
        ok: [rN.CircleCheckIcon, t5.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dz.WarningIcon, t5.A.colors.ICON_FEEDBACK_WARNING],
        error: [s2.CircleXIcon, t5.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dU.ArrowSmallUpIcon, t5.A.colors.ICON_MUTED],
        behind: [dB.ArrowSmallDownIcon, t5.A.colors.ICON_MUTED],
    };
function d7(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([cu.A], () => cu.A.getGitInfoState(t), [t]),
            load: a.useCallback(() => (0, c7.DK)(t), [t]),
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
                    `Updated ${dv(r)}`,
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
    return (0, i.jsxs)(dN, {
        title: "Git",
        children: [
            (0, i.jsx)("div", {
                className: d3.Lj,
                children:
                    "" !== l.line &&
                    (0, i.jsx)(x.E, {
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
                    if (!e.running || null != e.localError) return [dJ(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            dJ(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dx(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = d2.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d1))
                        : l.push(
                              { label: "Main", value: dX(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dX(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dx(e.commits) : "Unknown", icon: "commits" },
                            dY("Oldest Commit", e.oldest),
                            dY("Newest Commit", e.newest),
                            dJ(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dx(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dx(t.loose)} loose (${dg(t.looseBytes)}) \xb7 ${dx(t.packed)} packed in ${n} (${dg(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dx(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dx(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != i && l.push(i),
                        null != e.localBytes &&
                            l.push(
                                dQ(
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
                                  dQ("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: a } = e,
                        s = d4[r],
                        [u, o] = null != a ? d5[a] : [null, void 0];
                    return (0, i.jsx)(
                        dE,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === a,
                            icon: (0, i.jsx)(s, { size: "xs", color: t5.A.colors.ICON_MUTED }),
                            state: null != u ? (0, i.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function d8(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: o,
        } = (function (e) {
            let t = (0, c.bG)([cu.A], () => cu.A.getRestartAgentState(e), [e]),
                [n, l] = a.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                i = "restarted" === t.phase ? t.instanceSince : null,
                s = a.useRef(i);
            (a.useEffect(() => {
                null != i && i !== s.current && ((s.current = i), (0, c7.DK)(e));
            }, [e, i]),
                a.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = cu.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, c7.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                oC.h.dispatch({
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
            let u = a.useCallback(() => (0, c7.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dW,
                },
                restart: u,
            };
        })(t),
        d = a.useCallback(() => {
            (0, eg.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, i.jsxs)("div", {
        className: d3.Lj,
        children: [
            (0, i.jsxs)("div", {
                className: d3.nM,
                children: [
                    (0, i.jsx)(dK.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, i.jsx)(f.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dH.RetryIcon,
                        text: dW,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, i.jsx)(x.E, {
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
                            return `Restarted \xb7 new instance since ${dv(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dv(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function d6(e, t) {
    return (0, i.jsx)(dE, {
        label: e,
        value: ej.intl.formatToPlainString(eb.default.yHJxuP, { count: dx((0, cz.aM)(t)) }),
        hint: `${dx(t.input_tokens)} in \xb7 ${dx(t.output_tokens)} out \xb7 ${dx(t.cache_read_input_tokens)} cache read`,
    });
}
function d9(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        o,
        d,
        m,
        h,
        { projectId: g, status: p, fetchState: v, onRefresh: b } = e,
        {
            lastTurn: j,
            lastCompaction: y,
            lastDecline: w,
            forceState: k,
            restartState: A,
            turnRunning: S,
            handleForceCompaction: C,
            handleForceCompactionOverride: I,
            handleRestartWorkspace: N,
            lifetime: E,
            limits: _,
            session: M,
            contextCeiling: R,
        } = ((t = (0, c.bG)([cu.A], () => cu.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([cu.A], () => cu.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([cu.A], () => cu.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([cu.A], () => cu.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([cu.A], () => cu.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([r$.A], () => r$.A.isThinking(g), [g])),
        (o = a.useCallback(() => (0, c7.Lj)(g), [g])),
        (d = a.useCallback(() => (0, c7.Lj)(g, !0), [g])),
        (m = a.useCallback(() => (0, c7.bq)(g), [g])),
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
            handleRestartWorkspace: m,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, i.jsxs)("div", {
        className: d3.Mf,
        children: [
            (0, i.jsx)(dI, { generatedAt: p?.generated_at ?? null, fetchState: v, onRefresh: b }),
            (0, i.jsx)(dN, {
                title: ej.intl.string(eb.default.JghNal),
                children:
                    null == E
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ej.intl.string(eb.default.s0U5Fv),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dE, {
                                      label: ej.intl.string(eb.default["9nqym2"]),
                                      value: dx((0, cz.a7)(E.cost_usd)),
                                      hint: ej.intl.formatToPlainString(eb.default.NCdUIh, { count: dx(E.turns) }),
                                  }),
                                  d6(ej.intl.string(eb.default.xtxP0e), E.orchestrator),
                                  d6(ej.intl.string(eb.default["9Sj3SX"]), E.codegen),
                                  d6(ej.intl.string(eb.default.ANCEo3), (0, cz.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, i.jsx)(dE, {
                                          label: ej.intl.string(eb.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dx(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, i.jsx)(dN, {
                title: ej.intl.string(eb.default.dZHPE5),
                children:
                    null == j
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ej.intl.string(eb.default.DfVjal),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  d6(ej.intl.string(eb.default["7X3i9d"]), j.total),
                                  (0, i.jsx)(dE, {
                                      label: ej.intl.string(eb.default["8OUg09"]),
                                      value: `${Math.round((j.cache_hit_rate ?? (0, cz.CA)(j.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, i.jsxs)(dN, {
                title: ej.intl.string(eb.default.NbRk9a),
                children: [
                    null != y && null != R
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d_, {
                                      label: ej.intl.string(eb.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: R,
                                      formatValue: dx,
                                  }),
                                  (0, i.jsx)(dE, {
                                      label: ej.intl.string(eb.default.mRbSns),
                                      value: `${dx(y.tokensBefore)} \u{2192} ${dx(y.tokensAfter)}`,
                                      hint: ej.intl.formatToPlainString(eb.default.Vq3skS, {
                                          count: dx(y.retainedMessages),
                                          time: dv(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != R
                                      ? ej.intl.formatToPlainString(eb.default.GMLCNv, { ceiling: dx(R) })
                                      : ej.intl.string(eb.default.s0U5Fv),
                          }),
                    null != w &&
                        (0, i.jsx)(dE, {
                            label: ej.intl.string(eb.default["4BX5KK"]),
                            value: `${dx(w.projected)} / ${dx(w.threshold)}`,
                            critical: !0,
                            hint: ej.intl.formatToPlainString(eb.default["6ngCax"], { time: dv(w.observedAt) }),
                        }),
                    (0, i.jsxs)("div", {
                        className: d3.Lj,
                        children: [
                            (0, i.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ej.intl.string(eb.default["1EiJeb"]),
                                disabled: "pending" === k,
                                onClick: C,
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof k && "compacted" !== k.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ej.intl.string(eb.default.wox6Ev);
                                    if ("pending" === e) return ej.intl.string(eb.default.OcPHQ1);
                                    let t = dv(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return ej.intl.formatToPlainString(eb.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? eb.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? eb.default.YZb4hK
                                              : eb.default.ZoUSVK;
                                    return ej.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(k),
                            }),
                            "object" == typeof k &&
                                !0 === k.pendingTurn &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ej.intl.string(eb.default.ZxG2AI),
                                            onClick: I,
                                        }),
                                        (0, i.jsx)(x.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: ej.intl.string(eb.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: d3.Lj,
                        children: [
                            (0, i.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ej.intl.string(eb.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || S,
                                onClick: N,
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ej.intl.string(eb.default.mlok8D);
                                    if ("pending" === e) return ej.intl.string(eb.default["1ugSyK"]);
                                    let t = dv(e.observedAt);
                                    return ej.intl.formatToPlainString(
                                        "restarted" === e.outcome ? eb.default["76mfqO"] : eb.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, i.jsx)(d8, { projectId: g }),
                ],
            }),
            (0, i.jsx)(d7, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, i.jsxs)(dN, {
                    title: ej.intl.string(eb.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(dE, {
                                        label: ej.intl.string(eb.default.CLXHAs),
                                        value: dv(M.instance_since),
                                        hint: ej.intl.string(eb.default.UCwUEX),
                                    }),
                                    (0, i.jsx)(dE, {
                                        label: ej.intl.string(eb.default["8V8e1Z"]),
                                        value: dx(M.sockets),
                                    }),
                                    (0, i.jsx)(dE, {
                                        label: ej.intl.string(eb.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? ej.intl.string(eb.default.Wv025I)
                                            : ej.intl.string(eb.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, i.jsx)(dE, {
                                            label: ej.intl.string(eb.default["3oUYnv"]),
                                            value: dx(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, i.jsx)(dM, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, i.jsxs)(dN, {
                    title: ej.intl.string(eb.default["LEIhp/"]),
                    children: [
                        (0, i.jsx)(dE, {
                            label: ej.intl.string(eb.default.IlDBN3),
                            value: dx(_.max_subagent_iterations),
                        }),
                        (0, i.jsx)(dE, {
                            label: ej.intl.string(eb.default["ZdzKR+"]),
                            value: ej.intl.formatToPlainString(eb.default.yHJxuP, {
                                count: dx(_.context_window_tokens),
                            }),
                        }),
                        (0, i.jsx)(dE, {
                            label: ej.intl.string(eb.default.cIhN2W),
                            value: ej.intl.formatToPlainString(eb.default.yHJxuP, {
                                count: dx(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, i.jsx)(dE, {
                            label: ej.intl.string(eb.default["+fOn/q"]),
                            value: dx(_.max_user_message_chars),
                        }),
                        (0, i.jsx)(dE, { label: ej.intl.string(eb.default.kIHga0), value: dx(_.max_build_attempts) }),
                        (0, i.jsx)(dE, { label: ej.intl.string(eb.default.Iw03yW), value: dx(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fe = n(237528),
    ft = n(629584),
    fn = n(697361),
    fl = n(531893);
function fr(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, i.jsx)("div", {
              className: fl.ut,
              children: (0, i.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: ej.intl.string(eb.default.h1SE6R),
              }),
          });
}
function fi(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, i.jsxs)("div", {
              className: fl.qf,
              children: [
                  (0, i.jsx)(x.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: ej.intl.string(eb.default.h1SE6R),
                  }),
                  (0, i.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: ej.intl.string(eb.default["8SErdg"]),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: fl.qf,
              children: [
                  (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fa(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, i.jsx)("div", {
              className: fl.ps,
              children: (0, i.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: ej.intl.string(eb.default.V7Ri8H),
              }),
          })
        : null;
}
var fs = n(109079);
let fu = a.memo(function (e) {
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
        className: fs.vK,
        children: [
            (0, i.jsx)(x.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: fs.Mt,
                selectable: !0,
                children: (0, fn.R)(n.ts) ?? n.ts,
            }),
            (0, i.jsx)(x.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fs.dm,
                children: n.level,
            }),
            (0, i.jsxs)("div", {
                className: fs.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, i.jsx)("span", { className: fs.Cq, children: (0, i.jsx)(fe.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, i.jsx)("span", {
                            className: fs.Cq,
                            title: n.build ?? void 0,
                            children: (0, i.jsx)(fe.v, {
                                text: ej.intl.string(eb.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, i.jsxs)(x.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, i.jsxs)(e7.D, {
                                      className: fs.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": ej.intl.string(eb.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, i.jsx)(nD.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, i.jsx)(nq.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, i.jsxs)(x.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  ej.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker
                                                          ? eb.default.kUhyUv
                                                          : eb.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, i.jsx)(x.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: fs.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, i.jsx)(x.E, {
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
function fo(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([c5.A], () => c5.A.getLogs(t), [t]),
        l = (0, c.bG)([c5.A], () => c5.A.getHistoryState(t, "logs")),
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
                dy.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dj(e);
                            case "web":
                                return ej.intl.string(eb.default.IVzfVV);
                            default:
                                return ej.intl.string(eb.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, i.jsxs)("div", {
        className: fs.$F,
        children: [
            (0, i.jsxs)("div", {
                className: fs.y4,
                children: [
                    (0, i.jsx)(ft.I, {
                        look: "pill",
                        "aria-label": ej.intl.string(eb.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, i.jsx)("div", {
                        className: fs.KT,
                        children: (0, i.jsx)(c8.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: ej.intl.string(eb.default["m2+37Y"]),
                            "aria-label": ej.intl.string(eb.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, i.jsx)(fr, { state: l }),
            (0, i.jsxs)(nS.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: fs.sx,
                children: [
                    (0, i.jsx)(fa, { state: l }),
                    0 === n.length
                        ? (0, i.jsx)(fi, {
                              state: l,
                              emptyTitle: ej.intl.string(eb.default.S7qlPG),
                              emptyBody: ej.intl.string(eb.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: ej.intl.string(eb.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, i.jsx)(fu, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fc(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, i.jsx)(a.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, i.jsx)(a.Fragment, { children: r("stable", l) }, "stable")),
        (0, i.jsx)(dN, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ej.intl.string(eb.default.umcjif),
                      }),
        })
    );
}
function fd(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(dE, {
                      label: ej.intl.formatToPlainString(eb.default["01ZMS4"], { env: dj(n) }),
                      value: ((t = l.connected), ej.intl.string(t ? eb.default.Wv025I : eb.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, i.jsx)(dE, {
                      label: ej.intl.string(eb.default["z1dh+F"]),
                      value: dx(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dv(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, i.jsx)(dE, { label: ej.intl.string(eb.default.Iz5GnJ), value: dx(l.guild_count) }),
                  (0, i.jsx)(dE, {
                      label: ej.intl.string(eb.default["7UqtNv"]),
                      value: dx(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ej.intl.formatToPlainString(eb.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dv(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, i.jsx)(dE, {
                          label: ej.intl.string(eb.default["x3+JXJ"]),
                          value: dx(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, i.jsx)(dE, { label: dj(n), value: ej.intl.string(eb.default.lTHQss) });
}
function ff(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, i.jsx)(dE, {
        label: dj(t),
        value: ej.intl.formatToPlainString(eb.default["Xq+wHT"], {
            requests: dx(n.requests),
            failures: dx(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ej.intl.formatToPlainString(eb.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dv(n.last_failure.at),
                  })
                : ej.intl.formatToPlainString(eb.default["7KlGT6"], { time: dv(n.since) }),
    });
}
function fm(e) {
    let { env: t, runtime: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dE, {
                label: ej.intl.formatToPlainString(eb.default["92gVTm"], { env: dj(t) }),
                value: dx(n.connections),
            }),
            n.schedules.map((e) =>
                (0, i.jsx)(
                    dE,
                    {
                        label: ej.intl.formatToPlainString(eb.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? ej.intl.formatToPlainString(eb.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? ej.intl.formatToPlainString(eb.default.wxAWNv, { time: dv(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fh(e) {
    let { env: t, metrics: n } = e;
    return (0, i.jsx)(dE, {
        label: dj(t),
        value: ej.intl.formatToPlainString(eb.default.suAOj9, { calls: dx(n.calls), errors: dx(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fg(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, i.jsx)(dN, {
            title: t,
            children: (0, i.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: ej.intl.string(eb.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        a = n.cpu_ms_total > 0;
    return (0, i.jsxs)(dN, {
        title: t,
        children: [
            (0, i.jsx)(dE, {
                label: ej.intl.string(eb.default.xtD4Zp),
                value: dx(n.requests),
                hint: ej.intl.formatToPlainString(eb.default["7KlGT6"], { time: dv(n.since) }),
            }),
            (0, i.jsx)(dE, { label: ej.intl.string(eb.default.gfRhR3), value: dx(n.errors), critical: n.errors > 0 }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d_, {
                              label: ej.intl.string(eb.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dp,
                          }),
                          (0, i.jsx)(dE, {
                              label: ej.intl.string(eb.default.mSKImM),
                              value: dp(r),
                              hint: ej.intl.formatToPlainString(eb.default.JqMU05, {
                                  total: dp(n.cpu_ms_total),
                                  wall: dp(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(dE, {
                      label: ej.intl.string(eb.default.LEJ5r3),
                      value: ej.intl.string(eb.default["2Ekb2b"]),
                      hint: ej.intl.string(eb.default.G0aq7i),
                  }),
            !a &&
                n.wall_ms_total > 0 &&
                (0, i.jsx)(dE, { label: ej.intl.string(eb.default.xvmL1D), value: dp(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, i.jsx)(dE, {
                    label: ej.intl.string(eb.default["4sQYwH"]),
                    value: dx(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, i.jsx)(dE, {
                label: ej.intl.string(eb.default.bQenOy),
                value: dx(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ej.intl.formatToPlainString(eb.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, i.jsx)(dE, { label: ej.intl.string(eb.default.xgpn4Y), value: db(n.build) }),
        ],
    });
}
function fp(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: ej.intl.string(eb.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ej.intl.string(eb.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ej.intl.string(eb.default.eiAi57), metrics: n },
              ];
    return (0, i.jsx)(dN, {
        title: ej.intl.string(eb.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, i.jsx)(dE, { label: n, value: "\u2014" }, t)
                : (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)(dE, {
                                  label: ej.intl.formatToPlainString(eb.default.u7kJJ4, { env: n }),
                                  value: dg(l.r2_bytes),
                                  hint: ej.intl.formatToPlainString(
                                      l.r2_truncated ? eb.default.lH0oQw : eb.default.m9h02S,
                                      { count: dx(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, i.jsx)(d_, {
                                      label: ej.intl.formatToPlainString(eb.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dg,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fx(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: d3.Mf,
        children: [
            (0, i.jsx)(dI, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(fg, {
                            title: ej.intl.string(eb.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(fg, {
                            title: ej.intl.string(eb.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(fp, { status: t }),
                        null != t.bot &&
                            (0, i.jsx)(fc, {
                                title: ej.intl.string(eb.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fd, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, i.jsx)(fc, {
                                title: ej.intl.string(eb.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, i.jsx)(ff, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, i.jsx)(fc, {
                                title: ej.intl.string(eb.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fm, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, i.jsx)(fc, {
                                title: ej.intl.string(eb.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fh, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, i.jsx)(dR, { analytics: t.analytics }),
                        (0, i.jsxs)(dN, {
                            title: ej.intl.string(eb.default.fQMpFp),
                            children: [
                                (0, i.jsx)(dE, {
                                    label: ej.intl.string(eb.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? db(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, i.jsx)(dE, {
                                    label: ej.intl.string(eb.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? db(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fv = n(592465);
function fb(e) {
    let { projectId: t, onClose: n } = e,
        l = (0, eS.BQ)(),
        [r, s] = a.useState(() => (l && ek?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([cu.A], () => cu.A.getStatus(t), [t]),
        o = (0, c.bG)([cu.A], () => cu.A.getFetchState(t), [t]),
        d = a.useCallback(() => {
            ((0, c7.R7)(t), (0, c7.DK)(t));
        }, [t]);
    (a.useEffect(() => d(), [d]), a.useEffect(() => (0, ey.Rw)(t), [t]));
    let f = a.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ek || ek.projectId !== e) return null;
            let { traceId: t } = ek;
            return ((ek = null), t);
        })(t);
        return null != e && (dd(t, e), !0);
    }, [t, l]);
    (a.useEffect(() => {
        f();
    }, [f]),
        eA(t, () => {
            f() && s("trace");
        }));
    let m = a.useCallback(() => {
            (0, oZ.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: cu.A.getStatus(t),
                        last_turn_usage: cu.A.getLastTurnUsage(t),
                        last_compaction: cu.A.getLastCompaction(t),
                        last_compaction_decline: cu.A.getLastCompactionDecline(t),
                        timing_traces: cu.A.getTimingTraces(t),
                        logs: c5.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ep.P0)({ text: ej.intl.string(eb.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = ej.intl.string(eb.default["Q4FN+H"]);
    return (0, i.jsxs)("section", {
        className: fv.nd,
        "aria-label": h,
        children: [
            (0, i.jsxs)(tD.Ay, {
                "aria-label": h,
                toolbar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tD.Ay.Icon, {
                            icon: oV.CopyIcon,
                            tooltip: ej.intl.string(eb.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, i.jsx)(tD.Ay.Icon, {
                            icon: e8.XSmallIcon,
                            tooltip: ej.intl.string(ej.t.cpT0Cq),
                            onClick: n,
                        }),
                    ],
                }),
                children: [
                    (0, i.jsx)(tD.Ay.ChannelIcon, { icon: oY.BugIcon, "aria-hidden": !0 }),
                    (0, i.jsx)(tD.Ay.Title, { children: h }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: fv.rf,
                children: [
                    (0, i.jsxs)(c4.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": ej.intl.string(eb.default.RvvWIh),
                        className: fv.vR,
                        children: [
                            (0, i.jsx)(c4.V.Item, { id: "logs", children: ej.intl.string(eb.default["+VRYCm"]) }),
                            (0, i.jsx)(c4.V.Item, { id: "worker", children: ej.intl.string(eb.default["50D0FZ"]) }),
                            (0, i.jsx)(c4.V.Item, { id: "agent", children: ej.intl.string(eb.default.UkbTK1) }),
                            l ? (0, i.jsx)(c4.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, i.jsx)(fo, { projectId: t })
                        : "worker" === r
                          ? (0, i.jsx)(fx, { status: u, fetchState: o, onRefresh: d })
                          : "trace" === r && l
                            ? (0, i.jsx)(dh, { projectId: t })
                            : (0, i.jsx)(d9, { projectId: t, status: u, fetchState: o, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fj = n(365912),
    fy = n(873715);
function fw(e) {
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
let fk = Object.freeze({ x: -1, y: -1 });
function fA(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fw(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fS = n(192888);
function fC(e, t) {
    return (0, fS.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fA, () => ({ status: "failed" }));
}
var fI = n(108308);
let fN = { x: 25, y: 21 };
function fE(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function f_(e, t, n, l) {
    let r = fE(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fM(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fR(e) {
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
function fP(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: d } = U(u),
        m = (0, eC.Zv)(u),
        h = (0, e_.Rv)(),
        g = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        p = g?.id ?? null,
        [v, b] = a.useState(null),
        [j, w] = a.useState(!1),
        [k, M] = a.useState(!1),
        [R, P] = a.useState(null),
        [T, D] = a.useState(!1),
        q = a.useRef(null),
        z = a.useRef(null),
        B = a.useRef(null),
        [K, H] = a.useState(null),
        [W, V] = a.useState(!1),
        [X, Y] = a.useState(null),
        [Z, Q] = a.useState(null),
        J = a.useRef(!1),
        [ee, et] = a.useState(!1),
        [en, el] = a.useState(null),
        er = o && !m && !h;
    null == X || (er && X.projectId === u) || Y(null);
    let ea = X?.projectId ?? null;
    a.useEffect(() => {
        if (null != ea) return () => (0, n4.xJ)(ea, "design");
    }, [ea]);
    let es = tY(r, er);
    a.useEffect(() => {
        if (!er || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void M(!0);
        (w(!0), M(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fy.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    w(!1);
                    let n = "completed" === t.status ? fR(t.response) : null;
                    null == n ? M(!0) : (b(n), F(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (w(!1), M(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [er, r, u]);
    let eu = a.useRef(null);
    (a.useEffect(() => {
        if (!er || null == es || null == u) return;
        if (null == v) {
            eu.current = es;
            return;
        }
        if (tX(eu.current, es)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            eu.current = es;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fy.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !em.current) return;
                        let l = fR(e.response);
                        null != l && (b(l), F(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = fw(e.element);
                            null != i && r.set(l.id, i);
                        }),
                            (n = L(u)).active &&
                                0 !== r.size &&
                                $(u, {
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
    }, [er, es, v, d, u, r]),
        a.useEffect(() => {
            if (!er)
                return () => {
                    (P(null), Y(null), el(null), b(null));
                };
        }, [er]));
    let ec = a.useRef(null),
        ed = a.useRef(null),
        ef = a.useRef(!1),
        em = a.useRef(!1);
    a.useEffect(() => {
        ((em.current = er), er || ((ec.current = null), (ed.current = null), (B.current = null), D(!1)));
    }, [er]);
    let eh = a.useCallback(
            function e() {
                if (ef.current) return;
                let t = ec.current;
                if (null == t) return;
                ec.current = null;
                let n = r();
                null != n &&
                    ((ef.current = !0),
                    fC(n, t).then((t) => {
                        if (((ef.current = !1), em.current)) {
                            if ("picked" !== t.status || fO(t.target, ew.current.rect, ew.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? P(null)
                                    : "unsupported" === t.status && V(!0);
                            else {
                                let e = C(t.target);
                                (H((t) => (fq(t, e) ? t : e)),
                                    P((e) => {
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
        eg = a.useCallback(() => {
            if (null == X) return;
            let e = !J.current;
            (Q({ at: X.at, label: X.label, draft: X.draft, instant: e }), et(e), Y(null));
        }, [X]);
    (a.useEffect(() => {
        if (!ee) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => et(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [ee]),
        a.useEffect(() => {
            if (null == Z) return;
            let e = setTimeout(() => Q(null), f$);
            return () => clearTimeout(e);
        }, [Z]));
    let ep = null == v || null == es || v.viewport.width < 1 ? 1 : es.width / v.viewport.width,
        ex = null != v || k,
        ev = a.useMemo(() => v?.elements ?? [], [v]),
        ew = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        ew.current = { rect: es, scale: ep };
    }, [es, ep]);
    let ek = a.useCallback(
            (e, t, n) => {
                null != u &&
                    ((0, n4.xJ)(u, "design"),
                    el(null),
                    (J.current = !1),
                    Y({ projectId: u, target: e, anchor: t, draft: "", at: n, label: C(e) }));
            },
            [u],
        ),
        eA = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / ep, y: (e.clientY - t.top) / ep }), [ep]),
        eS = a.useCallback(() => {
            let e = B.current;
            if (null == e) return;
            let t = q.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = z.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(eS);
    let eI = a.useCallback(
            (e) => {
                if (null == es || null != en) return;
                if (((B.current = { x: e.clientX, y: e.clientY }), eS(), D(!0), null != X)) {
                    (Math.abs(e.clientX - X.at.x) > fD || Math.abs(e.clientY - X.at.y) > fD) && (J.current = !0);
                    return;
                }
                if (!ex) return void P(null);
                let t = eA(e, es);
                if (W) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let i of e) {
                                let { x: e, y: a, width: s, height: u } = i.rect;
                                if (s < 1 || u < 1 || t < e || n < a || t > e + s || n > a + u) continue;
                                let o = s * u;
                                o < r && ((l = i), (r = o));
                            }
                            return l;
                        })(ev, t.x, t.y),
                        n = null != e && fO(e, es, ep) ? null : e;
                    if (null != n) {
                        let e = C(n);
                        H((t) => (fq(t, e) ? t : e));
                    }
                    P((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ed.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ed.current = n), (ec.current = n), eh());
            },
            [es, ep, ex, eA, W, ev, X, en, eS, eh],
        ),
        eN = null == en ? null : d.find((e) => e.id === en.id),
        eE = er && (T || X?.target.marker != null || eN?.target.marker != null);
    a.useEffect(() => {
        if (eE)
            return () => {
                let e = r();
                null != e && fC(e, fk);
            };
    }, [eE, r]);
    let eM = a.useCallback(() => {
        (D(!1), P(null), (ed.current = null), (ec.current = null));
    }, []);
    a.useEffect(() => {
        if (!er || !T || !ex || W || null != X || null != en) return;
        let e = B.current,
            { rect: t, scale: n } = ew.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ed.current = l), (ec.current = l), eh());
    }, [er, T, ex, W, X, en, eh]);
    let eR = a.useCallback(
            (e) => {
                if (null != X || null != en) {
                    (eg(), el(null));
                    return;
                }
                if (null == R || null == es) return;
                let t = eA(e, es);
                ek(
                    R,
                    (function (e, t, n) {
                        let { x: l, y: r, width: i, height: a } = e.rect;
                        return i < 1 || a < 1
                            ? A
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - r) / a)) };
                    })(R, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [R, es, eA, X, en, ek, eg],
        ),
        eP = a.useCallback(() => {
            null != u && (P(null), ei(u)?.active === !0 ? eo(u) : O(u));
        }, [u]),
        eT = a.useCallback(() => {
            null != u &&
                (null != X
                    ? eg()
                    : en?.confirmingRemove === !0
                      ? el({ ...en, confirmingRemove: !1 })
                      : null != en
                        ? el(null)
                        : eP());
        }, [u, X, en, eg, eP]),
        eL = a.useRef(eT),
        e$ = a.useRef(u),
        eD = a.useRef(eP);
    a.useLayoutEffect(() => {
        ((eL.current = eT), (e$.current = u), (eD.current = eP));
    });
    let eq = a.useRef(null);
    a.useEffect(() => {
        if (er)
            return (
                tG.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        tG.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eL.current());
        }
        function t(e) {
            let t = e.target;
            !(0, tF.vq)(t) ||
                eq.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fj.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == e$.current || ei(e$.current)?.active !== !0) && eD.current());
        }
    }, [er, s]);
    let eO = a.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eT());
                    return;
                }
                if (null != X || null != en || 0 === ev.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == R ? -1 : ev.findIndex((e) => e.ref === R.ref);
                    P(ev[(n + (t ? 1 : -1) + ev.length) % ev.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != R &&
                    (e.preventDefault(),
                    ek(R, A, { x: (es?.left ?? 0) + R.rect.x * ep, y: (es?.top ?? 0) + R.rect.y * ep }));
            },
            [u, X, en, ev, R, ek, eT, es, ep],
        ),
        eF = a.useCallback(
            (e) => {
                null == u ||
                    null == X ||
                    ((S(X.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ey.dv)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = C(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${E}${r}${_}${N(e)}
${t.trim()}`;
                            })(X.target, X.draft),
                            e,
                        ),
                        eg(),
                        P(null)));
            },
            [u, X, eg],
        ),
        eG = a.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, tz.vX)(u, e)), [u]),
        ez = a.useCallback(() => {
            if (null != u && null != en && null != p && S(en.draft)) {
                var e, t;
                let n, l;
                ((e = en.id),
                    (t = en.draft.trim()),
                    null != (l = (n = L(u)).annotations.find((t) => t.id === e)) &&
                        G(l, p) &&
                        $(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    el({ ...en, editing: !1 }));
            }
        }, [u, en, p]),
        eU = a.useCallback(() => {
            if (null != u && null != en && null != p) {
                var e;
                let t, n;
                ((e = en.id),
                    null != (n = (t = L(u)).annotations.find((t) => t.id === e)) &&
                        G(n, p) &&
                        $(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    el(null));
            }
        }, [u, en, p]),
        eB = o
            ? j
                ? ej.intl.string(eb.default["Eb/YV9"])
                : k
                  ? ej.intl.string(eb.default.FD30bh)
                  : ej.intl.formatToPlainString(eb.default.dTSqLF, { count: d.length })
            : "",
        eK = er && null != es,
        eH = T && null == en,
        eW = X?.target ?? eN?.target ?? null,
        eV = X ?? Z,
        eX = X ?? (Z?.instant === !0 ? null : Z),
        eY =
            null != eN && null != es
                ? (function (e, t) {
                      let { left: n, top: l } = fM(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(f_(eN.target, eN.anchor, es, ep), es)
                : null;
    return (
        a.useEffect(() => {
            let e = r();
            if (eN?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eN;
            fC(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eN, r]),
        (0, tO.createPortal)(
            (0, i.jsxs)("div", {
                ref: eq,
                className: fI.Li,
                children: [
                    (0, i.jsx)(n$.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eB,
                    }),
                    eK
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: fI.MT,
                                      style: { left: es.left, top: es.top, width: es.width, height: es.height },
                                      "data-plain-cursor": eH ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": ej.intl.string(eb.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: eI,
                                      onMouseLeave: eM,
                                      onClick: eR,
                                      onKeyDown: eO,
                                  }),
                                  null != R && null == R.marker && null == X && null == en
                                      ? (0, i.jsx)(fF, { box: fE(R, es, ep) })
                                      : null,
                                  (0, i.jsx)("div", {
                                      ref: q,
                                      className: fI.aZ,
                                      children: (0, i.jsx)("div", {
                                          className: fI.xz,
                                          "data-shown": null != R && null == en && null == X ? "" : void 0,
                                          "data-instant": ee ? "" : void 0,
                                          children: (0, i.jsxs)(x.E, {
                                              variant: "body-xs/medium",
                                              className: fI.Ux,
                                              children: [
                                                  null == K
                                                      ? null
                                                      : (0, i.jsx)("span", { className: fI.Tl, children: K.kind }),
                                                  null == K || "" === K.name
                                                      ? null
                                                      : (0, i.jsxs)("span", {
                                                            className: fI.kh,
                                                            children: [" ", K.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: z,
                                      className: fI.Y,
                                      children: eH ? (0, i.jsx)("div", { className: fI.u }) : null,
                                  }),
                                  null == eX
                                      ? null
                                      : (0, i.jsx)("div", {
                                            className: fI.aZ,
                                            style: {
                                                transform: `translate3d(${eX.at.x + 20}px, ${eX.at.y + 20}px, 0)`,
                                            },
                                            children: (0, i.jsx)("div", {
                                                className: fI.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == X ? "" : void 0,
                                                children: (0, i.jsxs)(x.E, {
                                                    variant: "body-xs/medium",
                                                    className: fI.Ux,
                                                    children: [
                                                        (0, i.jsx)("span", {
                                                            className: fI.Tl,
                                                            children: eX.label.kind,
                                                        }),
                                                        "" === eX.label.name
                                                            ? null
                                                            : (0, i.jsxs)("span", {
                                                                  className: fI.kh,
                                                                  children: [" ", eX.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eW && null == eW.marker
                                      ? (0, i.jsx)("div", {
                                            className: fI.D0,
                                            style: fE(eW, es, ep),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  d.map((e, t) => {
                                      let n = f_(e.target, e.anchor, es, ep),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, i.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fI.xL,
                                              style: { ...fM(n, es), width: 24, height: 24 },
                                              "aria-label": ej.intl.formatToPlainString(eb.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: I(e.target),
                                              }),
                                              "aria-expanded": en?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == X && el(l);
                                              },
                                              onFocus: () => {
                                                  null == X && el(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), eg(), el(l));
                                              },
                                              children: (0, i.jsx)(fT, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eV || null == u
                                      ? null
                                      : (0, i.jsx)(tW, {
                                            projectId: u,
                                            at: { x: eV.at.x + 20, y: eV.at.y + 20 },
                                            bounds: es,
                                            kind: eV.label.kind,
                                            value: eV.draft,
                                            canSubmit: null != X && S(eV.draft),
                                            onChange: (e) => {
                                                null != X && Y({ ...X, draft: e });
                                            },
                                            onSubmit: eF,
                                            onDismiss: eg,
                                            onUploadFile: eG,
                                            closing: null == X,
                                        }),
                                  null != eN && null != en && null != eY
                                      ? (0, i.jsxs)(fL, {
                                            point: eY,
                                            frame: es,
                                            authorId: eN.authorId,
                                            title: I(eN.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                en.confirmingRemove ? el({ ...en, confirmingRemove: !1 }) : el(null);
                                            },
                                            onMouseLeave: () => {
                                                en.editing || en.confirmingRemove || el(null);
                                            },
                                            children: [
                                                en.editing
                                                    ? (0, i.jsx)(n9.f, {
                                                          autoFocus: !0,
                                                          label: ej.intl.string(eb.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: en.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => el({ ...en, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), ez());
                                                          },
                                                      })
                                                    : (0, i.jsx)(x.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: fI.aC,
                                                          children: eN.comment,
                                                      }),
                                                G(eN, p)
                                                    ? (0, i.jsx)("div", {
                                                          className: fI.eB,
                                                          children: en.confirmingRemove
                                                              ? (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(x.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fI.nv,
                                                                            children: ej.intl.string(eb.default.wOHvts),
                                                                        }),
                                                                        (0, i.jsx)(f.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ej.intl.string(eb.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                el({ ...en, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, i.jsx)(f.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ej.intl.string(eb.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eU,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(f.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: ej.intl.string(eb.default.friIzR),
                                                                            onClick: () =>
                                                                                el({
                                                                                    ...en,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        en.editing
                                                                            ? (0, i.jsx)(f.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !S(en.draft),
                                                                                  text: ej.intl.string(
                                                                                      eb.default.iicRP9,
                                                                                  ),
                                                                                  onClick: ez,
                                                                              })
                                                                            : (0, i.jsx)(f.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: ej.intl.string(
                                                                                      eb.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      el({
                                                                                          ...en,
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
function fT(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([y.default], () => y.default.getUser(t), [t]);
    return (0, i.jsx)(ag.eu, {
        src: null == n ? null : ax.Ay.getUserAvatarURL(n),
        size: ap._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fL(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        v = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(fN);
    a.useLayoutEffect(() => {
        let e = v.current?.getBoundingClientRect(),
            t = b.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: w,
            top: k,
            originX: A,
            originY: S,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - j.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - j.y, l), r)), originX: o.x - s, originY: o.y - u }),
        C = { left: w, top: k, "--custom-conjure-card-origin-x": `${A}px`, "--custom-conjure-card-origin-y": `${S}px` };
    return (0, i.jsxs)("div", {
        ref: v,
        className: fI.Nr,
        style: C,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, i.jsxs)("div", {
                className: fI.MY,
                children: [
                    (0, i.jsx)("span", { ref: b, className: fI.ip, children: (0, i.jsx)(fT, { authorId: d }) }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: fI.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: fI.zI, children: p }),
        ],
    });
}
let f$ = 300,
    fD = 2;
function fq(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fO(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fF(e) {
    let { box: t } = e;
    return (0, i.jsx)("div", { className: fI.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fG = n(318774),
    fz = n(91242),
    fU = n(253932),
    fB = n(697744),
    fK = n(130324);
function fH(e) {
    let t = (0, fB.c)(),
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
    let r = (0, nN.j)();
    return (
        a.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fW(e) {
    let { className: t } = e,
        { Component: n, events: l } = fH(3e4);
    return (0, i.jsxs)("div", {
        className: o()(t, fK.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, i.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: fK.ol,
                children: ej.intl.string(eb.default.AyiQEp),
            }),
        ],
    });
}
var fV = n(251363),
    fX = n(944142),
    fY = n(532247),
    fZ = n(501628);
function fQ(e) {
    let { progress: t } = e,
        { Component: n } = fH(1500),
        l = fU.Q_.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, i.jsx)("div", {
                className: fZ.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, i.jsx)(
                        "span",
                        {
                            className: fZ.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function fJ(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([fX.A], () => (s ? fX.A.getLiveReload(t) : null), [s, t]),
        o = (0, to.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        f = u?.background === !0,
        m = (function (e, t, n) {
            let l = (0, fY.dv)(e),
                [r, i] = a.useState(null),
                [s, u] = a.useState(l),
                [o, d] = a.useState(t);
            s !== l && (u(l), d(t), i(null != l || o ? null : (0, fY.QP)(e, s)));
            let f = (0, c.bG)(
                    [fz.A],
                    () => {
                        let e = fz.A.getFrame(n);
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
                        null != t.target && t.target === (0, fV.ow)(null, n) && e();
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
        h = f ? null : (0, fY.h_)(d, u?.step ?? null, m);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n$.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, i.jsx)("div", {
                      className: fZ.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, i.jsx)(fQ, { progress: h }),
                  })
                : null,
        ],
    });
}
let f0 = 0;
var f1 = n(782134),
    f2 = n(357858),
    f3 = n(343030),
    f4 = n(11411),
    f5 = n(111518),
    f7 = n(240666);
let f8 = { width: 1 / 0, height: 1 / 0 };
function f6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f8;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var f9 = n(702083);
function me(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
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
        f = n ? f6(l, d ?? void 0) : null;
    return (0, i.jsx)("div", {
        ref: r,
        className: o()(f9.dw, { [f9.PQ]: null != f }),
        children: (0, i.jsx)("div", { className: o()(f9.R9, { [f9.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var mt = n(347927);
function mn(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, i.jsxs)("div", {
        className: o()(mt.Bf, l && mt.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: mt.Ux,
                children: [
                    (0, i.jsx)(p.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, i.jsx)(x.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var ml = n(957272);
function mr(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: a, state: s } = (0, f5.A)({ applicationId: t, surface: n, launch: l });
    if (((0, f7.A)(t, n), s === f5.n.Launched)) {
        let e = (0, i.jsx)(f4.A, { frameId: a.id, level: f3.A.WithinAppContent, className: ml.Z7, overlay: r });
        return (0, td.Q5)(n) ? (0, i.jsx)(me, { children: e }) : e;
    }
    return (0, i.jsx)(mi, { state: s });
}
function mi(e) {
    let { state: t } = e;
    switch (t) {
        case f5.n.RenderingElsewhere:
            return (0, i.jsx)("div", {
                className: ml.qs,
                children: (0, i.jsx)(mn, {
                    title: ej.intl.string(eb.default["9kpdo7"]),
                    body: ej.intl.string(eb.default.iIA8Nj),
                }),
            });
        case f5.n.NoApplication:
            return (0, i.jsx)(fW, { className: ml.qs });
        case f5.n.DoesNotSupportSurface:
            return (0, i.jsx)("div", {
                className: ml.qs,
                children: (0, i.jsx)(mn, {
                    title: ej.intl.string(eb.default["7k4GyN"]),
                    body: ej.intl.string(eb.default.zdIy3R),
                }),
            });
        case f5.n.Error:
            return (0, i.jsxs)("div", {
                className: ml.qs,
                children: [
                    (0, i.jsx)(p.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: ej.intl.string(eb.default.lTPbnG),
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: ml.tj,
                        children: ej.intl.string(eb.default.e6GiAZ),
                    }),
                ],
            });
        case f5.n.AwaitingLaunch:
        case f5.n.Loading:
            return (0, i.jsx)("div", { className: ml.qs, children: (0, i.jsx)(v.y, {}) });
    }
}
var ma = n(308528),
    ms = n(334738),
    mu = n(5206),
    mo = n(365971),
    mc = n(703462);
function md(e) {
    let { message: t } = e;
    return (0, i.jsxs)("div", {
        className: mc.f,
        children: [
            (0, i.jsx)(e0.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mf() {
    return (0, i.jsx)("div", { className: mc.f, children: (0, i.jsx)(v.y, {}) });
}
function mm(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = a.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([lr.A], () => (null != o ? lr.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        a.useEffect(() => {
            null != t && ma.A.preload(lu.ME, t);
        }, [t]),
        (n = (0, c.bG)([oG.A], () => oG.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mo.Xg)();
            return (
                (0, ms.yl)(t, e),
                () => {
                    (0, ms.dm)(t, e);
                }
            );
        }, [t, n]));
    let [f, m] = a.useState(null),
        h = f === r;
    return (a.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, eq.CN)(l).then(
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
        ? (0, i.jsx)(md, { message: ej.intl.string(eb.default["VP/O8s"]) })
        : null == d
          ? (0, i.jsx)(mf, {})
          : (0, i.jsx)("div", {
                className: mc.g,
                children: (0, i.jsx)(mu.A, { channel: d, guild: null, chatInputType: ug.oU.SIDEBAR }, d.id),
            });
}
var mh = n(765671),
    mg = n(596977),
    mp = n(921853),
    mx = n(582063);
function mv(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        a = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(a + e + r.length) % r.length];
        (0, eq.vX)(t, n?.id ?? null);
    }
    let u = ej.intl.string(eb.default.Gl3XtE),
        o = ej.intl.string(eb.default["3FvcrY"]);
    return (0, i.jsxs)("div", {
        className: mx.aF,
        children: [
            (0, i.jsx)(d.m, {
                text: u,
                position: "top",
                children: (0, i.jsx)(tQ.K, {
                    icon: mp.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, i.jsx)("div", {
                className: mx.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: ej.intl.formatToPlainString(eb.default["140n5k"], {
                                  name: l.name,
                                  index: a + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: ej.intl.string(eb.default.wVJL0P),
                          }),
            }),
            (0, i.jsx)(d.m, {
                text: o,
                position: "top",
                children: (0, i.jsx)(tQ.K, {
                    icon: nq.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var mb = n(666476);
let mj = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function my() {
    (0, ep.P0)({ text: ej.intl.string(eb.default.jj3abP), variant: "critical" });
}
function mw(e) {
    let { projectId: t } = e,
        n = a.useRef(null),
        l = a.useRef(null),
        r = ej.intl.string(eb.default["xd/1IW"]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(tI.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(mk, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, i.jsx)("div", {
                        ref: n,
                        className: mx.m2,
                        children: (0, i.jsx)(d.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, i.jsx)(tQ.K, {
                                "aria-label": r,
                                icon: m.SettingsIcon,
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
                accept: mj.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mj.includes(n.type)
                                ? n.size > mb.aI
                                    ? (0, ep.P0)({ text: ej.intl.string(eb.default.T8Spiu), variant: "critical" })
                                    : (0, iM.M$)(t, n).catch(my)
                                : (0, ep.P0)({ text: ej.intl.string(eb.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mk(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([i_.A], () => i_.A.getBackground(t)),
        a = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, i.jsxs)(tw.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": ej.intl.string(eb.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, i.jsxs)(tk.rX, {
                children: [
                    (0, i.jsx)(tk.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: ej.intl.string(eb.default.uQpDky),
                        icon: l6.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, i.jsx)(tk.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: ej.intl.string(eb.default.AiAz8J),
                        icon: dH.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, iM.Og)(t).catch(my));
                        },
                    }),
                ],
            }),
            (0, i.jsx)(tk.rX, {
                children: (0, i.jsx)(tk.fP, {
                    id: "conjure-overlay-background-blur",
                    label: ej.intl.string(eb.default["hyN+kc"]),
                    checked: a,
                    action: () => {
                        (0, iM.Y1)(t, !a) || my();
                    },
                }),
            }),
        ],
    });
}
function mA(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, mh.Ay)(),
        { captures: c, selected: d } = iE(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: eU({ width: l - 48, height: r - 48 }, n) };
            let i = t.width / t.height,
                a = Math.min(l, r * i),
                s = a / 1920,
                u = eU({ width: 1872, height: 1920 / i - 48 }, n);
            return { top: (r - a / i) / 2 + 24 * s, end: (l - a) / 2 + 24 * s, scale: u * s };
        })({ width: u, height: o }, d, l);
    return (
        a.useEffect(() => (0, mg.L0)(), []),
        (0, i.jsxs)("div", {
            className: mx.JH,
            children: [
                (0, i.jsx)(iP, { projectId: n, gameCaptures: !0 }),
                (0, i.jsx)("div", {
                    ref: s,
                    className: mx.dw,
                    children: (0, i.jsx)("div", {
                        className: mx.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, i.jsx)(mr, { applicationId: t, surface: td.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, i.jsx)(mw, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, i.jsx)(mv, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
var mS = n(825484);
function mC(e) {
    let { onAddBot: t, loading: n = !1, agentPrompt: l } = e,
        r = (0, i.jsx)(f.$, {
            size: "sm",
            variant: "primary",
            text: ej.intl.string(eb.default.RGeB11),
            onClick: t,
            loading: n,
        });
    return null == l
        ? (0, i.jsx)(mn, {
              title: ej.intl.string(eb.default.xlEjZ8),
              body: ej.intl.string(eb.default["4ByPbd"]),
              children: r,
          })
        : (0, i.jsx)(mn, {
              title: ej.intl.string(eb.default.sRzJdk),
              body: ej.intl.formatToPlainString(eb.default.cbU1iq, { reason: l.reason }),
              children: (0, i.jsxs)(mS.e, {
                  size: "sm",
                  children: [
                      r,
                      (0, i.jsx)(f.$, {
                          size: "sm",
                          variant: "secondary",
                          text: ej.intl.string(eb.default.Vmb0K4),
                          onClick: l.onSkip,
                          disabled: n,
                      }),
                  ],
              }),
          });
}
var mI = n(409478),
    mN = n(652227);
function mE(e) {
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
            overlayWidgetSize: f = eG,
            projectId: m,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([rk.A], () => null != m && null != rk.A.getSetupStartedAt(m), [m]);
    return s?.type === "checking"
        ? (0, i.jsx)("div", { className: mN.qs, children: (0, i.jsx)(v.y, {}) })
        : s?.type === "bot_install"
          ? (0, i.jsx)("div", {
                className: mN.qs,
                children: (0, i.jsx)(mC, { onAddBot: s.onAddBot, loading: s.loading, agentPrompt: s.agentPrompt }),
            })
          : a
            ? null == t
                ? null
                : (0, i.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mN.RG,
                      children: [
                          (0, eH.yf)(u, o)
                              ? g
                                  ? (0, i.jsx)(m_, { projectId: m, onResume: p })
                                  : (0, i.jsx)(mr, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, i.jsx)("div", {
                                        className: mN.qs,
                                        children: (0, i.jsx)(mn, {
                                            wide: !0,
                                            title: ej.intl.string(eb.default["08U+YO"]),
                                            body: ej.intl.string(eb.default.pKBfrc),
                                        }),
                                    })
                                  : (0, i.jsx)(mI.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, i.jsx)(mA, { applicationId: t, projectId: m, size: f, frameOverlay: h?.(tf.ZN) })
                              : null,
                          "bot" === o && null != n && null != m
                              ? (0, i.jsx)(mm, { projectId: m, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, i.jsx)("div", { className: mN.qs, children: (0, i.jsx)(v.y, {}) })
              : (0, i.jsx)(fW, { className: mN.qs });
}
function m_(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, f2.Pu)(t),
        (0, i.jsx)("div", {
            className: mN.qs,
            children: (0, i.jsx)(mn, {
                wide: !0,
                title: ej.intl.string(eb.default.MMWEH2),
                body: ej.intl.string(eb.default.iKSu55),
                children:
                    null != n
                        ? (0, i.jsx)(f.$, {
                              size: "sm",
                              variant: "primary",
                              icon: f1.PlayIcon,
                              text: ej.intl.string(eb.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mM = n(175841),
    mR = n(156548),
    mP = n(750506),
    mT = n(867193),
    mL = n(539197),
    m$ = n(977020);
function mD(e) {
    let { projectId: t } = e,
        n = (0, mL.X2)(t),
        l = (function (e) {
            let [t, n] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mL.Ie)(e);
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
        className: m$.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [mL.t$]: "",
        children: [
            n.presses > 0
                ? (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)("div", { className: o()(m$.hN, m$.vW), style: f(n.pressX, n.pressY) }),
                              (0, i.jsx)("div", { className: o()(m$.hN, m$.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, i.jsx)("svg", {
                className: o()(m$.UE, { [m$.SP]: n.shown, [m$.Vq]: n.pressed, [m$.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, i.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mq = n(417760);
function mO(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([r$.A], () => null != e && r$.A.isThinking(e)),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(t);
            (t !== r && (i(t), t || l(!1)),
                a.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = a.useCallback(() => {
                null != e && (l(!0), (0, ey.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, eC.CU)(n),
        d = "controlling" === t,
        m = ej.intl.string(d ? (u ? eb.default["VJW/5P"] : eb.default["+hD2Iz"]) : eb.default["h+i1r9"]),
        h =
            null != r
                ? (0, i.jsx)(f.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ej.intl.string(eb.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, i.jsxs)("div", {
              className: o()(mq.M0, mq.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, i.jsx)(cM.i, { size: 12, color: "currentColor" })
                      : (0, i.jsx)(mM.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "none", className: mq.ID, children: m }),
                  d ? (0, i.jsx)(n$.A, { children: ej.intl.string(eb.default.fg1sor) }) : null,
                  d ? (0, i.jsx)("div", { className: mq.lC, children: h }) : null,
              ],
          })
        : (0, i.jsxs)("div", {
              className: mq.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, i.jsxs)("div", {
                      className: mq.sp,
                      children: [
                          (0, i.jsx)(mM.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, i.jsx)(cM.i, { size: 12, color: "currentColor" }) : null,
                          (0, i.jsxs)("div", {
                              className: mq.f4,
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: mq.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, i.jsx)(x.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: mq.Rb,
                                            children: ej.intl.string(eb.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, i.jsx)("div", { className: mq.lC, children: h }) : null,
              ],
          });
}
function mF(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, eC.Zv)(null != n && n === l ? t : null),
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
        c = (0, e_.Rv)(),
        d = (0, mR.cR)(s);
    a.useEffect(() => {
        u && d && null != s && (0, mR.BL)(s);
    }, [u, d, s]);
    let [f, m] = a.useState(null),
        [h, g] = a.useState(null),
        [p, x] = a.useState(null),
        v = "idle" !== o;
    a.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tV(r());
            m((t) => (tX(t, e) ? t : e));
            let t = null == h ? null : tV(h);
            (x((e) => (tX(e, t) ? e : t)), null != h && (0, mT.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mT.C)(0));
            }
        );
    }, [v, r, h]);
    let b = "idle" !== o && null != f,
        j = b && "controlling" === o && !c,
        y = null != f && f.width < 420,
        w = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        k =
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
            let [e] = a.useContext(mP.uY),
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
                      className: mq.D,
                      "data-phase": o,
                      children: (0, i.jsx)("div", {
                          className: mq.QF,
                          children: (0, i.jsx)(mO, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, tO.createPortal)(
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(n$.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === o
                                ? ej.intl.string(eb.default.oWcemF)
                                : "handoff" === o
                                  ? ej.intl.string(eb.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            j
                ? (0, tO.createPortal)(
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: mq.ys,
                                  style: k,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", {
                                  className: mq.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(mD, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var mG = n(399503),
    mz = n(853555),
    mU = n(944100),
    mB = n(327152),
    mK = n(187645);
let mH = { width: 1280, height: 720 },
    mW = new Map(),
    mV = !1;
function mX() {
    let e = new Map();
    for (let t of new Set([...r$.A.getActivityOrderedProjectIds(), ...(0, eC.T7)()])) {
        if (!(r$.A.isThinking(t) || (0, eC.wK)(t)) || eO.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ts.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, td.Rc)(t), (0, td.Th)(t)].find(tf.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...mW]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            mW.delete(t),
            n.unregisterLookup(),
            mU.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, mB.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        mW.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = mK.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    mY(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mW.set(e, l),
                    (l.unregisterLookup = (0, mz.Ng)(e, () => (0, fV.n5)(n, t))),
                    mU.A.registerFrameTarget(t, n, f3.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of mW) mY(t.element, e, t.frameId);
}
function mY(e, t, n) {
    if (fz.A.getFrame(n)?.surface.type === eW.U.OVERLAY) {
        let l = eB(ts.Ay.getProject(t));
        (e.classList.remove(mK.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, mB.Pn)(n, l));
        return;
    }
    let l = tc.A.isBuilderPreviewMobile();
    e.classList.toggle(mK.L, !l);
    let r = l ? f6(tc.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, mB.Pn)(n, r ?? mH));
}
var mZ = n(873727),
    mQ = n(47671),
    mJ = n(418842),
    m0 = n(413599);
let m1 = 0;
var m2 = n(487887);
let m3 = null;
var m4 = n(780338),
    m5 = n(782603),
    m7 = n(189714);
function m8(e) {
    let { projectId: t } = e,
        n = (0, m7.iI)(t),
        l = a.useRef(null),
        r = ej.intl.string(ej.t.h850Ss);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: l,
        animation: tI.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(tw.W, {
                "data-menu-migrated": !0,
                navId: `conjure-project-notifications-${t}`,
                "aria-label": r,
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(tk.rX, {
                    children: (0, i.jsx)(tk.Dr, {
                        id: n ? "unmute" : "mute",
                        label: ej.intl.string(n ? eb.default.s9rCuH : eb.default["a+i/As"]),
                        action: () => (0, m7.$L)(t, !n),
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: a } = e,
                { isShown: s } = t;
            return (0, i.jsx)(tD.Ay.Icon, {
                ref: l,
                onClick: a,
                tooltip: s ? null : r,
                icon: n ? m4.BellSlashIcon : m5.BellIcon,
                "aria-label": r,
                "aria-haspopup": "menu",
                "aria-expanded": s,
                selected: s,
            });
        },
    });
}
var m6 = n(541940);
function m9(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            mainClassName: u,
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
        y = (0, to.A)(l, s),
        w = y?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([m0.A], () => (0, mZ.x4)(m0.A.theme)),
            l = (0, c.bG)([mQ.A], () => mQ.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([am.Ay], () => ({
                reducedMotion: am.Ay.useReducedMotion,
                fontScale: (0, mZ.U0)(),
                highContrast: am.Ay.isHighContrastModeEnabled,
                forcedColors: am.Ay.useForcedColors,
                underlineLinks: am.Ay.alwaysShowLinkDecorations,
            })),
            d = fU.hH.useSetting(),
            f = (0, c.bG)([uo.A], () => uo.A.hidePersonalInformation),
            m = (0, mJ.C)(),
            h = (0, c.bG)(
                [fz.A, tc.A],
                () =>
                    tc.A.isBuilderPreviewMobile() &&
                    fz.A.getFrame(t)?.applicationId === tc.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = a.useRef(!1),
            p = a.useRef(!1),
            x = a.useRef(null),
            v = a.useCallback(() => {
                let l = (0, fV.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let a = {
                    revision: ++m1,
                    baseTheme: n,
                    customTheme: (0, mZ.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: i,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: h,
                    hidePersonalInformation: f,
                };
                (0, fS.W)(l, "set-env", a, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, i, h, t, f, s, d, e, r, m, o]),
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
                let n = (0, fV.n5)(e, t);
                null != n && n !== x.current && j();
            }),
            a.useEffect(() => {
                function n(n) {
                    n.target === (0, fV.n5)(e, t) && ((x.current = null), j());
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
    })(b, w),
        a.useEffect(() => {
            if (null != t) return (0, mz.Ng)(t, () => (0, fV.n5)(b, w));
        }, [t, b, w]));
    let k = a.useCallback(() => (0, fV.ow)(b, w), [b, w]),
        A = a.useCallback(() => (x ? (0, fV.ow)(b, w) : b), [x, b, w]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: o()(m6.Mh, u),
                children: [
                    d,
                    f,
                    v
                        ? null
                        : (0, i.jsx)(mF, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: A,
                              frameId: w,
                          }),
                    (0, i.jsx)("div", {
                        ref: j,
                        id: m,
                        role: null == m ? void 0 : "tabpanel",
                        "aria-labelledby": h,
                        className: m6.fm,
                        children: g,
                    }),
                ],
            }),
            p,
            v
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(fP, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: k,
                              toggleRef: n,
                          }),
                          (0, i.jsx)(nw, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: k }),
                      ],
                  }),
        ],
    });
}
function he(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
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
            restoreState: w,
            previewReady: k,
            previewGate: A,
            availability: S,
            activeMode: C,
            widgetApplicationId: I,
            overlayWidgetSize: N,
            previewPaused: E = !1,
            onResumePreview: _,
        } = e;
    (0, mG.k)(n, I);
    let M = u.type === eW.U.MAIN || (0, td.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
        }));
        a.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? m2.aX.LANDSCAPE : m2.aX.PORTRAIT), (m3 = e));
                else {
                    if (m3 !== e) return;
                    ((l = m2.aX.UNHANDLED), (m3 = null));
                }
                oC.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let R = a.useRef(null),
        [P, T] = a.useState(0);
    (a.useEffect(() => {
        if (null == n) return;
        (0, nA.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, nA.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = a.useRef(0)),
        a.useLayoutEffect(() => {
            M && ((t.current = ++f0), (0, eq.HV)(r));
        }, [r, M]),
        a.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === f0 && (0, eq.HV)(null);
            };
        }, [r, M]),
        a.useEffect(() => {
            null != n &&
                ((0, ey.ensureConnection)(n),
                mV ||
                    ((mV = !0),
                    r$.A.addChangeListener(mX),
                    ts.Ay.addChangeListener(mX),
                    fz.A.addChangeListener(mX),
                    tc.A.addChangeListener(mX),
                    eO.A.addChangeListener(mX),
                    (0, eC.W3)(mX),
                    mX()));
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
        $ = (0, tq.P)({ maxWidth: L, minWidth: 450 }),
        D = p || M;
    return (0, i.jsx)("div", {
        className: m6.cL,
        children: (0, i.jsx)("div", {
            ref: R,
            className: m6.LB,
            children: (0, i.jsx)(m9, {
                projectId: n,
                designFeedbackToggleRef: l,
                applicationId: r,
                previewApplicationId: s,
                surface: u,
                header: f,
                controlBar: m,
                previewPanelId: h,
                previewPanelLabelledBy: g,
                showsFrame: (0, eH.yf)(S, C),
                paused: E,
                mainClassName: null == f ? void 0 : o()(m6.ez, { [m6.zt]: p }),
                content: (0, i.jsx)(mE, {
                    applicationId: r,
                    previewApplicationId: s,
                    surface: u,
                    frameLaunchParams: d,
                    previewReady: k,
                    previewGate: A,
                    availability: S,
                    activeMode: C,
                    widgetApplicationId: I,
                    overlayWidgetSize: N,
                    projectId: n,
                    paused: E,
                    onResume: _,
                    renderFrameOverlay: (e) =>
                        (0, i.jsx)(fJ, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                }),
                sidebar:
                    null != n && D
                        ? (0, i.jsx)("div", {
                              className: p ? o()(m6.v7, { [m6.z4]: $, [m6.iu]: $ && null != m }) : m6.LL,
                              children: (0, i.jsx)(t$.A, {
                                  sidebarType: t$.X.CallChatSidebar,
                                  maxWidth: L,
                                  capturePointer: !0,
                                  children: (0, i.jsx)("div", {
                                      className: m6.cO,
                                      children: j
                                          ? (0, i.jsx)(fb, { projectId: n, onClose: y ?? (() => {}) }, n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(fG.Ay, { projectId: n }),
                                                    (0, i.jsx)(ht, { projectId: n, onClose: x }),
                                                    (0, i.jsx)("div", {
                                                        className: m6.cb,
                                                        children: (0, i.jsx)(
                                                            c3,
                                                            {
                                                                projectId: n,
                                                                restoreState: w,
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
function ht(e) {
    let { projectId: t, onClose: n } = e,
        l = ej.intl.string(eb.default.vLoFRs),
        r = ej.intl.string(eb.default.JD6Oit);
    return (0, i.jsx)(tD.Ay, {
        "aria-label": l,
        toolbar: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m8, { projectId: t }),
                (0, i.jsx)(tD.Ay.Icon, { icon: tL.PanelClosedIcon, tooltip: r, "aria-label": r, onClick: n }),
            ],
        }),
        children: (0, i.jsx)(tD.Ay.Title, { children: l }),
    });
}
var hn = n(473935),
    hl = n(785389),
    hr = n(889558),
    hi = n(860402);
let ha = new Set();
var hs = n(733791),
    hu = n(127139),
    ho = n(256616),
    hc = n(719588);
function hd(e) {
    (0, ep.P0)({ text: e, variant: "critical" });
}
function hf(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            isOwner: r,
            onExport: s,
            onHistory: u,
            onConnectTool: o,
            onToggleDebug: d,
            debugOpen: f,
            onPlaceViews: m,
            onCloseMenu: h,
        } = e,
        g = (0, hc.A)(t, n),
        p = (0, hs.CU)(t),
        x = (0, tp.UC)(t),
        { pending: v, connect: b } = (function (e, t) {
            let [n, l] = a.useState(ha),
                r = a.useRef(ha),
                i = a.useCallback((e) => {
                    ((r.current = (0, hl.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, hl.K9)(r.current, n.type);
                        null != a &&
                            ((r.current = a),
                            l(a),
                            (async function () {
                                let l = await (0, hi.JI)(e, n.type);
                                (i(n.type), "url" === l.type)
                                    ? (0, hr.h)({ href: l.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, hl.rq)(l.error)
                                              ? ej.intl.string(eb.default["jCQ/1B"])
                                              : ej.intl.string(eb.default.POxkSh),
                                      );
                            })().catch(() => i(n.type)));
                    },
                    [t, e, i],
                ),
            };
        })(t, hd),
        j = (0, c.bG)([rL.A], () => rL.A.getDeclaredConnections(t), [t]),
        y = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: ej.intl.string(eb.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: ej.intl.formatToPlainString(eb.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: ej.intl.formatToPlainString(eb.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: !1, refreshPending: !1, offers: a.useMemo(() => (0, hl.Xl)(j), [j]), connectPending: v }),
        w = a.useMemo(() => new Map(j.map((e) => [e.type, e])), [j]);
    return (0, i.jsxs)(tw.W, {
        "data-menu-migrated": !0,
        navId: `conjure-editor-actions-${t}`,
        "aria-label": ej.intl.string(ej.t.ogxXGq),
        onClose: h,
        onSelect: h,
        children: [
            (0, i.jsxs)(tk.rX, {
                children: [
                    (0, i.jsx)(tk.Dr, { id: "export", label: ej.intl.string(eb.default.WsEEP7), action: s }),
                    (0, i.jsx)(tk.Dr, { id: "history", label: ej.intl.string(eb.default["3hIVou"]), action: u }),
                    null != m
                        ? (0, i.jsx)(tk.Dr, { id: "place-views", label: ej.intl.string(eb.default.e4jp1l), action: m })
                        : null,
                ],
            }),
            oZ.p5 || null != d
                ? (0, i.jsxs)(tk.rX, {
                      children: [
                          oZ.p5
                              ? (0, i.jsx)(tk.Dr, {
                                    id: "copy-link",
                                    label: ej.intl.string(ej.t.WqhZss),
                                    icon: l9.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: l9.LinkIcon },
                                    action: () => (0, hu.V)(l, t),
                                })
                              : null,
                          oZ.p5
                              ? (0, i.jsx)(tk.Dr, {
                                    id: "copy-project-id",
                                    label: ej.intl.string(eb.default["nm/zuU"]),
                                    icon: hn.IdIcon,
                                    leadingAccessory: { type: "icon", icon: hn.IdIcon },
                                    action: () => (0, hu.o)(t),
                                })
                              : null,
                          null != d
                              ? (0, i.jsx)(tk.sL, {
                                    id: "debug",
                                    label: ej.intl.string(eb.default.Mt5k9d),
                                    leftIcon: oY.BugIcon,
                                    leadingAccessory: { type: "icon", icon: oY.BugIcon },
                                    checked: f,
                                    action: d,
                                })
                              : null,
                      ],
                  })
                : null,
            null != o || y.length > 0
                ? (0, i.jsxs)(tk.rX, {
                      children: [
                          null != o
                              ? (0, i.jsx)(tk.Dr, {
                                    id: "connect-tool",
                                    label: ej.intl.string(eb.default.yOIql5),
                                    action: o,
                                })
                              : null,
                          y.map((e) =>
                              (0, i.jsx)(
                                  tk.Dr,
                                  {
                                      id: e.id,
                                      label: e.label,
                                      disabled: e.disabled,
                                      dontCloseOnAction: !0,
                                      action: () => {
                                          let t = null == e.connectionType ? null : w.get(e.connectionType);
                                          null != t && b(t);
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                      ],
                  })
                : null,
            r
                ? (0, i.jsxs)(tk.rX, {
                      children: [
                          p
                              ? (0, i.jsx)(tk.Dr, {
                                    id: "unpublish",
                                    label: ej.intl.string(eb.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let e = ts.Ay.getProject(t);
                                        null != e && (0, ho.A)({ project: e });
                                    },
                                })
                              : null,
                          (0, i.jsx)(tk.Dr, {
                              id: "delete",
                              label: ej.intl.string(ej.t.oyYWHE),
                              color: "danger",
                              action: g,
                          }),
                      ],
                  })
                : null,
            null != x
                ? (0, i.jsx)(tk.rX, {
                      children: (0, i.jsx)(tk.Dr, {
                          id: "unpublish-from-server",
                          label: ej.intl.string(eb.default.mS61Dm),
                          color: "danger",
                          action: () => {
                              let e = ts.Ay.getProject(t);
                              null != e && (0, tS.A)({ project: e, target: x, action: "remove" });
                          },
                      }),
                  })
                : null,
        ],
    });
}
function hm(e) {
    let t = a.useRef(null),
        n = ej.intl.string(ej.t["UKOtz+"]);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tI.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)(hf, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: a } = l;
            return (0, i.jsx)(j.A.Icon, {
                ref: t,
                icon: a$.MoreHorizontalIcon,
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
var hh = n(663417),
    hg = n(646270),
    hp = n(31300),
    hx = n(831453),
    hv = n(872344),
    hb = n(64656),
    hj = n(766367),
    hy = n(113494),
    hw = n(86147),
    hk = n(729475),
    hA = n(12470),
    hS = n(811893),
    hC = n(387758),
    hI = n(715482),
    hN = n(429582),
    hE = n(869146),
    h_ = n(475815);
function hM(e) {
    let {
            projectId: t,
            previewPaused: n,
            pauseDisabled: l,
            onTogglePreviewPaused: r,
            drawing: a,
            fullscreenFrame: s,
            onTogglePopout: u,
            poppedOut: o,
            onCloseMenu: d,
        } = e,
        f = (function (e, t) {
            let n = (0, mR.cR)(e?.id ?? null),
                l = (0, eC.Zv)(t),
                r = (0, c.bG)(
                    [hE.A, fz.A],
                    () => null != e && hE.A.getWindowOpen(lu.MLl.ACTIVITY_POPOUT) && fz.A.getMainFrame()?.id === e.id,
                    [e],
                );
            if (!(0, tf.x1)(e) || r || l) return null;
            let i = (0, mR.fl)(e.id);
            return null != i && (0, h_.Ub)(i) ? { active: n, toggle: () => (0, mR.U8)(e.id) } : null;
        })(s, t),
        m = n ? f1.PlayIcon : hy.PauseIcon,
        h = f?.active === !0 ? hw.FullscreenExitIcon : hk.FullscreenEnterIcon,
        g = o ? hA.WindowReturnIcon : hS.WindowLaunchIcon,
        p = ej.intl.string(eb.default.WjdaFw),
        x = (0, mz.UJ)(t),
        v = null != x ? (0, hN.FO)(x) : null;
    return (0, i.jsx)(tw.W, {
        "data-menu-migrated": !0,
        navId: `conjure-frame-actions-${t}`,
        "aria-label": ej.intl.string(ej.t.ogxXGq),
        onClose: d,
        onSelect: d,
        children: (0, i.jsxs)(tk.rX, {
            children: [
                (0, i.jsx)(tk.Dr, {
                    id: "toggle-pause",
                    icon: m,
                    leadingAccessory: { type: "icon", icon: m },
                    label: ej.intl.string(n ? eb.default.ZKd2Cw : eb.default.VHxerm),
                    subtext: a ? p : void 0,
                    disabled: l || a,
                    action: r,
                }),
                null != f
                    ? (0, i.jsx)(tk.Dr, {
                          id: "toggle-fullscreen",
                          icon: h,
                          leadingAccessory: { type: "icon", icon: h },
                          label: ej.intl.string(f.active ? ej.t.Z7MyNB : ej.t.OIDkcp),
                          action: f.toggle,
                      })
                    : null,
                null != u
                    ? (0, i.jsx)(tk.Dr, {
                          id: "toggle-popout",
                          icon: g,
                          leadingAccessory: { type: "icon", icon: g },
                          label: ej.intl.string(o ? ej.t["NKV/MO"] : ej.t["3Zypbv"]),
                          subtext: a && !o ? p : void 0,
                          disabled: a && !o,
                          action: u,
                      })
                    : null,
                null != v
                    ? (0, i.jsx)(tk.Dr, {
                          id: "open-devtools",
                          icon: hC.AngleBracketsIcon,
                          leadingAccessory: { type: "icon", icon: hC.AngleBracketsIcon },
                          label: ej.intl.string(eb.default.gQB2mY),
                          action: v,
                      })
                    : null,
            ],
        }),
    });
}
function hR(e) {
    let t = a.useRef(null),
        n = ej.intl.string(ej.t["UKOtz+"]);
    return (0, i.jsx)(tI.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tI.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)(hM, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: a } = l;
            return (0, i.jsx)(tD.Ay.Icon, {
                ref: t,
                icon: hI.ChevronLargeDownIcon,
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
var hP = n(705609);
function hT(e) {
    let {
            projectId: t,
            projectName: n,
            toolbar: l,
            activeMode: r,
            activeTarget: a,
            frameTarget: s,
            onCloseApp: u,
            widgetRefreshApplicationId: o,
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
            refreshFrame: w,
            isRefreshing: k,
            handleRefresh: A,
            mobilePreview: S,
            mobilePreviewLabel: C,
            handleToggleMobilePreview: I,
            landscapePreview: N,
            rotatePreviewLabel: E,
            handleRotatePreview: _,
        } = l,
        M = (0, hb.A)(y?.id),
        { pending: R, refresh: P } = (0, hv.A)(o),
        T = eh(t) && !c,
        L = null;
    if ("widget" === r) {
        if (null != o) {
            let e = ej.intl.string(eb.default["/nOi5n"]);
            L = (0, i.jsx)(tD.Ay.Icon, { icon: hh.RefreshIcon, tooltip: e, "aria-label": e, disabled: R, onClick: P });
        }
    } else if ((0, tf.x1)(w)) {
        let e = ej.intl.string(eb.default.FZIHQN);
        L = (0, i.jsx)(tD.Ay.Icon, { icon: hh.RefreshIcon, tooltip: e, "aria-label": e, disabled: k, onClick: A });
    }
    let $ = p(C),
        D = p(E),
        q = S ? hg.MobilePhoneIcon : hp.ScreenIcon;
    return (0, i.jsxs)("div", {
        className: hP.M,
        children: [
            (0, i.jsx)(tn, {
                targets: b,
                activeTarget: a,
                projectName: n,
                onSelect: j,
                closableTarget: M ? s : null,
                onClose: u,
                panelId: x,
            }),
            (0, i.jsxs)("div", {
                className: hP.o,
                children: [
                    v,
                    L,
                    "frame" === r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(hj.A, { frame: y }),
                                  S
                                      ? (0, i.jsx)(tD.Ay.Icon, {
                                            icon: hx.RotateIcon,
                                            tooltip: D,
                                            "aria-label": D,
                                            selected: N,
                                            disabled: g,
                                            onClick: _,
                                        })
                                      : null,
                                  (0, i.jsx)(tD.Ay.Icon, {
                                      icon: q,
                                      tooltip: $,
                                      "aria-label": $,
                                      disabled: g,
                                      onClick: I,
                                  }),
                                  (0, i.jsx)(hR, {
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
var hL = n(705427),
    h$ = n(606128),
    hD = n(323140);
function hq(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: v, guildId: k } = e,
        A = a.useContext(eL.A),
        [S] = a.useState(() => (null != A ? eD.A.getProjectView(A) : null)),
        [C, I] = a.useState(S?.chatOpen ?? !0),
        [N, E] = a.useState(S?.debugOpen ?? !1);
    a.useEffect(() => {
        null != A && (0, e$.g7)(A, { chatOpen: C, debugOpen: N });
    }, [A, C, N]);
    let _ = a.useCallback(
            (e) => {
                null != A && (0, e$.g7)(A, { previewSelection: e });
            },
            [A],
        ),
        M = (0, eS.Qy)(),
        R = (0, eI.f)("ConjureSelectedProjectScreen"),
        P = a.useCallback(() => I(!0), []),
        T = a.useCallback(() => {
            (E(!1), I(!0));
        }, []),
        { restoreState: L, handleRestoreVersion: $ } = (function (e, t) {
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
                                (0, eR.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (a &&
                                                    c() &&
                                                    (0, ep.P0)({
                                                        text: ej.intl.formatToPlainString(eb.default.Z4n6LX, {
                                                            title: (0, eM.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, eP.c)(o, r);
                                                null != e && (0, ep.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, ep.P0)({
                                                    text: ej.intl.string(eb.default["PSdo+w"]),
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
        })(s, T),
        q = s?.id ?? null,
        F = (0, eT.bP)(),
        G = F?.blocking === !0 && F.projectId === q,
        {
            integrationStatus: z,
            isPreviewApplicationLoading: B,
            checkingIntegration: K,
            previewReady: H,
            hasFrame: W,
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
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, tr.YY)(u ?? void 0),
                d = null != l && t !== l,
                f = s?.preview_ready === !0,
                m = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, eH.Qg)({
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
                            await (0, tr.TA)(e);
                        } catch {}
                    })(u);
            }, [h, d, g, u]);
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
                    isPreviewApplicationLoading: o,
                    checkingIntegration: d,
                    previewReady: f,
                    hasFrame: m,
                }
            );
        })(s),
        V =
            (0, c.bG)([tv.A], () => (null == q ? void 0 : tv.A.getPublishStatus(q)?.previewAppChannels), [q]) ??
            z?.preview_app_channels,
        X = (0, c.bG)([tv.A], () => (null == q ? void 0 : tv.A.getPublishStatus(q)?.views?.views), [q]),
        Y = (0, c.bG)([tv.A], () => (null == q ? null : (tv.A.getPublishStatus(q)?.publishState ?? null)), [q]),
        Z = (0, c.bG)(
            [ey.Ay],
            () => {
                if (null == q) return !1;
                let e = ey.Ay.getConnState(q);
                return "failed" === e || "closed" === e;
            },
            [q],
        ),
        Q = (0, c.bG)([y.default], () => y.default.getCurrentUser()?.id),
        J = (0, c.bG)([ey.Ay], () => null != q && ey.Ay.isAccessRefused(q, Q), [q, Q]),
        {
            availability: ee,
            activeMode: et,
            setMode: en,
            frameSurface: es,
            frameSurfaceOptions: eu,
            setFrameSurface: ef,
            appChannel: em,
            setAppChannel: ew,
            view: ek,
            setView: eG,
            frameLaunchParams: ez,
            widgetApplicationId: eU,
        } = (0, eQ.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: W,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: z?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eF.q7.OVERLAY) === !0,
            previewAppChannels: V,
            previewViews: X,
            initialSelection: S?.previewSelection,
            onSelectionChange: _,
        }),
        eV = eB(s);
    ((0, eK.x)(q, (e) => {
        ee.modes.includes(e) && en(e);
    }),
        eA(q, () => {
            (I(!0), E(!0));
        }));
    let eX = ee.modes.includes("frame"),
        eY = (0, c.bG)([eO.A], () => eO.A.isPaused(q), [q]),
        eZ = (function (e) {
            let {
                    project: t,
                    modes: n,
                    activeMode: l,
                    frameSurface: r,
                    frameSurfaceOptions: i,
                    previewAppChannels: s,
                    previewViews: u,
                    setMode: o,
                    setFrameSurface: d,
                    setAppChannel: f,
                    setView: m,
                } = e,
                h = a.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                            return e.flatMap((e) =>
                                "frame" === e && l.length > 0
                                    ? l.map((t) => ({
                                          mode: e,
                                          surface: eW.U.APP_CHANNEL,
                                          view: { id: t.id, name: t.name },
                                      }))
                                    : "frame" === e
                                      ? t.flatMap((t) =>
                                            t === eW.U.APP_CHANNEL && n.length > 1
                                                ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                                : [{ mode: e, surface: t }],
                                        )
                                      : [{ mode: e }],
                            );
                        })(n, i, s, u),
                    [n, i, s, u],
                ),
                g = a.useCallback(
                    (e) => {
                        ("frame" === e.mode &&
                            (d(e.surface), null != e.appChannel && f?.(e.appChannel), null != e.view && m?.(e.view.id)),
                            o(e.mode));
                    },
                    [f, d, o, m],
                ),
                p = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewMobile()),
                x = ej.intl.string(p ? eb.default.tKGF0Q : eb.default.peqEOY),
                v = a.useCallback(() => (0, eq.GG)(!p), [p]),
                b = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewLandscape()),
                j = ej.intl.string(b ? eb.default.tunI2l : eb.default.DoNdjA),
                y = a.useCallback(() => (0, eq.Lw)(!b), [b]),
                w = (0, td.jS)(t),
                k = a.useMemo(() => (0, td.Op)(w, r), [w, r]),
                A = (0, to.A)(t?.preview_application_id ?? null, k),
                S = (0, to.A)(t?.preview_application_id ?? null, tf.ZN),
                C = "overlay" === l ? S : A,
                I = (0, tf.x1)(C) && C.data.proxyTicketRefreshing,
                N = a.useCallback(() => {
                    null == C || I || tu.A.refreshProxyTicket(C.id);
                }, [C, I]);
            return {
                previewTargetOptions: h,
                handleSelectPreviewTarget: g,
                mobilePreview: p,
                mobilePreviewLabel: x,
                handleToggleMobilePreview: v,
                landscapePreview: b,
                rotatePreviewLabel: j,
                handleRotatePreview: y,
                previewSurface: k,
                previewFrame: A,
                refreshFrame: C,
                isRefreshing: I,
                handleRefresh: N,
            };
        })({
            project: s,
            modes: ee.modes,
            activeMode: et,
            frameSurface: es,
            frameSurfaceOptions: eu,
            previewAppChannels: V,
            previewViews: X,
            setMode: en,
            setFrameSurface: ef,
            setAppChannel: ew,
            setView: eG,
        }),
        { previewSurface: eJ, previewFrame: e0 } = eZ,
        e1 = (0, b.A)(e0),
        e2 = eX && !eY,
        e3 = eh(q),
        e4 = e1.isPoppedOut ? eb.default.pmkK8i : eY ? eb.default.Yet11p : null,
        e5 = null != e4;
    function e7(e) {
        return null == e4 ? e : ej.intl.formatToPlainString(e4, { label: e });
    }
    let e8 = a.useCallback(() => I(!1), []),
        {
            designFeedbackActive: e6,
            designFeedbackToggleRef: te,
            agentDrivingPreview: tt,
            designFeedbackLabel: tn,
            handleToggleDesignFeedback: tI,
        } = (function (e, t, n) {
            let { active: l } = U(e);
            a.useEffect(() => {
                null != e && l && !t && O(e);
            }, [e, l, t]);
            let r = a.useRef(null),
                i = (0, eC.Zv)(e),
                s = ej.intl.string(i ? eb.default.Sme0T0 : l ? eb.default.vn5Rzu : eb.default["cl/Jyl"]),
                u = a.useCallback(() => {
                    if (null != e) {
                        if (l) return void O(e);
                        (n(), D(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: i,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })(q, e2 && (!e1.isPoppedOut || e3), T),
        [tN] = a.useState(() => w.isPlatformEmbedded && (0, tl.qM)());
    a.useEffect(() => {
        null != q && e3 && !e2 && ec(q);
    }, [q, e3, e2]);
    let tE = a.useCallback(() => {
            null != q &&
                (T(),
                (function (e) {
                    let t = ei(e);
                    if (null != t) {
                        t.active || ea(e, (e) => ({ ...e, active: !0, keptStill: null }));
                        return;
                    }
                    let { byProject: n } = el.getState();
                    el.setState({ byProject: { ...n, [e]: er } });
                })(q),
                ed(q, "marker"));
        }, [q, T]),
        t_ = a.useCallback(() => {
            null != q && eo(q);
        }, [q]),
        tM =
            e5 && !e3
                ? e7(ej.intl.string(eb.default["XWU+XF"]))
                : ej.intl.string(e3 ? eb.default.tuQ5f3 : tt ? eb.default.agwlrD : eb.default["XWU+XF"]),
        tR = e5 ? e7(ej.intl.string(eb.default["cl/Jyl"])) : tn,
        tL = a.useCallback(() => {
            E((e) => !e && (I(!0), !0));
        }, []),
        t$ = a.useCallback(() => E(!1), []),
        tD = a.useCallback(() => {
            null != q && (0, eq._j)(q);
        }, [q]),
        tq = a.useCallback(() => {
            null != q && (eY ? (0, eq._j)(q) : (0, eq.di)(q, e0?.id));
        }, [q, eY, e0?.id]),
        tO = a.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = e0?.id), (0, ey.Bn)(e), (0, tx.r)(t)), v());
        }, [s, e0?.id, v]),
        tF =
            ((t = (0, ev.z)(s)),
            (l = a.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, ex.vt)(e);
                    null != n
                        ? (0, ep.P0)({ text: n, variant: "critical" })
                        : (0, eg.A)({
                              title: ej.intl.formatToPlainString(eb.default["Gm+u1+"], { name: s.name }),
                              subtitle: ej.intl.string(eb.default.M7H3sJ),
                              confirmText: ej.intl.string(eb.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  P();
                                  try {
                                      await (0, ex.Hj)(t, e, ej.intl.string(eb.default.Owerd3));
                                  } catch {
                                      (0, ep.P0)({ text: ej.intl.string(eb.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, P],
            )),
            { onExport: t, onImport: (r = (0, ex.yN)(l)).open, importInput: r.input }),
        tG = a.useCallback(async () => {
            null != q && (await (0, tm.vL)(q, k));
        }, [k, q]),
        tz = (function (e, t) {
            let n = (0, c.bG)([th.A], () => (null == e ? null : th.A.getPrompt(e)), [e]),
                [l, r] = a.useState(!1),
                i = n?.id ?? null,
                s = a.useCallback(async () => {
                    if (null != e && null != i) {
                        r(!0);
                        try {
                            await (0, tm.vL)(e, t);
                        } finally {
                            r(!1);
                        }
                        (0, tg.aS)(e) && (0, tg.xy)(e, i, "added");
                    }
                }, [i, t, e]),
                u = a.useCallback(() => {
                    null != e && null != i && (0, tg.xy)(e, i, "skipped");
                }, [i, e]);
            return a.useMemo(() => (null == n ? null : { prompt: n, adding: l, onAddBot: s, onSkip: u }), [n, l, s, u]);
        })(q, k),
        tU =
            null != tz
                ? {
                      type: "bot_install",
                      onAddBot: tz.onAddBot,
                      loading: tz.adding || B,
                      agentPrompt: { reason: tz.prompt.reason, onSkip: tz.onSkip },
                  }
                : (0, eH.aN)(et, {
                        installScope: s?.install_scope ?? null,
                        previewReady: H,
                        integrationInstalled: z?.integration_installed ?? null,
                    })
                  ? { type: "bot_install", onAddBot: tG, loading: B }
                  : K && null == z
                    ? { type: "checking" }
                    : void 0,
        tB = (0, c.bG)([ts.Ay], () => null != q && ts.Ay.isProjectDeleting(q), [q]);
    a.useEffect(() => {
        ((null == s && u) || tB) && v();
    }, [s, u, tB, v]);
    let {
            publishOptions: tK,
            publish: tH,
            state: tW,
            variant: tV,
            text: tX,
            hint: tY,
            pendingChanges: tZ,
        } = (0, tC.A)(q, k, K || B),
        tQ = (0, ty.A)(q, tH, tK),
        tJ = (0, tp.UC)(q),
        t0 = "frame" === et && !eY && (0, tf.x1)(e0) && (e1.isPoppedOut || e1.canPopout),
        t1 = a.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: L?.status === "restoring",
                    onRestoreVersion: (e, t) => $(e, t, !0),
                }),
                    (0, e_.mM)(async () => {
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
        }, [s, L?.status, $]);
    (0, eE.z)(q, t1);
    let t2 = null == s || J ? void 0 : () => (0, tT.A)(s.id, { guildId: k, isPreview: !0, publishOptions: tK }),
        t3 = ee.modes.includes("widget") && "unavailable-authorization-revoked" !== ee.profileState ? eU : null,
        t4 =
            null == tH || null == s
                ? null
                : (0, i.jsx)("div", {
                      className: hD.As,
                      onMouseDown:
                          null == q || tH.disabled
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tb.dx)(q);
                                },
                      onContextMenu:
                          null == tJ
                              ? void 0
                              : (e) => {
                                    (0, tA.jA)(e, () =>
                                        (0, i.jsx)(tw.W, {
                                            "data-menu-migrated": !0,
                                            navId: `conjure-publish-actions-${s.id}`,
                                            "aria-label": ej.intl.string(ej.t.ogxXGq),
                                            onClose: tA.Z_,
                                            onSelect: tA.Z_,
                                            children: (0, i.jsx)(tk.Dr, {
                                                id: "unpublish-from-server",
                                                label: ej.intl.string(eb.default.mS61Dm),
                                                color: "danger",
                                                action: () => (0, tS.A)({ project: s, target: tJ, action: "remove" }),
                                            }),
                                        }),
                                    );
                                },
                      children: (0, i.jsx)(d.m, {
                          text: tY,
                          children: (0, i.jsx)(f.$, {
                              size: "sm",
                              variant: tV,
                              icon: "publishing" === tW ? hO : void 0,
                              text: tX,
                              onClick: () => tQ("header"),
                          }),
                      }),
                  }),
        t5 = ej.intl.string(eb.default.FzfmQ8),
        t7 = ej.intl.string(eb.default.xjJAQm),
        t8 = (0, i.jsx)(hL.A, {
            title: s?.name ?? ej.intl.string(eb.default.G1WwgK),
            project: s,
            onOpenProjectSettings: t2,
            draft: tZ,
            actions:
                null == s
                    ? null
                    : (0, i.jsxs)("div", {
                          className: hD.FO,
                          children: [
                              null != t2
                                  ? (0, i.jsx)(j.A.Icon, {
                                        icon: m.SettingsIcon,
                                        tooltip: t5,
                                        "aria-label": t5,
                                        onClick: t2,
                                    })
                                  : null,
                              (0, i.jsx)(hm, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: k,
                                  isOwner: (0, ts.PV)(s),
                                  onExport: tF.onExport,
                                  onHistory: t1,
                                  onConnectTool: R ? () => (0, eN.A)(s.id) : void 0,
                                  onToggleDebug: M ? tL : void 0,
                                  debugOpen: N,
                                  onPlaceViews:
                                      null == X || null == tH || tH.disabled
                                          ? void 0
                                          : () =>
                                                (0, tj.Y)({
                                                    projectId: s.id,
                                                    publishOptions: tK,
                                                    entryPoint: "context_menu",
                                                }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: hD.Cl,
                                  children: [(0, i.jsx)(tP, { project: s, guildId: k }), t4],
                              }),
                              C || J
                                  ? null
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", { className: hD.YJ, "aria-hidden": !0 }),
                                            (0, i.jsx)(j.A.Icon, {
                                                icon: h.PanelOpenIcon,
                                                tooltip: t7,
                                                "aria-label": t7,
                                                onClick: P,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        }),
        t6 = a.useId(),
        t9 = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return null == e
                ? null
                : "frame" !== e
                  ? { mode: e }
                  : null != l
                    ? { mode: e, surface: eW.U.APP_CHANNEL, view: l }
                    : null == n
                      ? { mode: e, surface: t }
                      : { mode: e, surface: t, appChannel: n };
        })(et, es, em, ek),
        ne = eX
            ? tN
                ? (0, i.jsx)(j.A.Icon, {
                      icon: g.ExperimentalDirectSelectIcon,
                      iconClassName: hD.D8,
                      tooltip: tM,
                      "aria-label": tM,
                      selected: e3,
                      disabled: (e5 || tt) && !e3,
                      onClick: e3 ? t_ : tE,
                  })
                : (0, i.jsx)(j.A.Icon, {
                      ref: te,
                      icon: g.ExperimentalDirectSelectIcon,
                      iconClassName: hD.D8,
                      tooltip: tR,
                      "aria-label": tR,
                      selected: e6,
                      disabled: e5 || tt,
                      onClick: tI,
                  })
            : null,
        nt =
            null != s && (null == Y ? Z : "nothing_built" !== Y)
                ? (0, i.jsx)(hT, {
                      editToggle: ne,
                      projectId: s.id,
                      projectName: s.name,
                      toolbar: eZ,
                      activeMode: et,
                      activeTarget: t9,
                      frameTarget: {
                          mode: "frame",
                          surface: es,
                          ...(null == em ? {} : { appChannel: em }),
                          ...(null == ek ? {} : { view: ek }),
                      },
                      onCloseApp: tO,
                      widgetRefreshApplicationId: t3,
                      previewPaused: eY,
                      onTogglePreviewPaused: tq,
                      onTogglePopout: t0 ? (e1.isPoppedOut ? e1.popIn : e1.popOut) : void 0,
                      poppedOut: e1.isPoppedOut,
                      agentDrivingPreview: tt,
                      previewControlsBlocked: e5,
                      blockedPreviewControlLabel: e7,
                      previewPanelId: t6,
                  })
                : null;
    return (0, i.jsxs)("div", {
        className: o()(hD.nj, h$.T),
        children: [
            tF.importInput,
            (0, i.jsx)("main", {
                className: hD.JX,
                children: G
                    ? (0, i.jsx)("div", {
                          className: hD.j5,
                          children: (0, i.jsx)("div", {
                              className: hD.sD,
                              children: (0, i.jsx)(p.D, {
                                  variant: "heading-lg/semibold",
                                  children: ej.intl.string(eb.default.i7PaZ5),
                              }),
                          }),
                      })
                    : null == s
                      ? (0, i.jsxs)("div", {
                            className: hD.j5,
                            children: [
                                t8,
                                (0, i.jsxs)("div", {
                                    className: hD.sD,
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-lg/semibold",
                                            children: ej.intl.string(eb.default.G1WwgK),
                                        }),
                                        (0, i.jsx)(x.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: ej.intl.string(eb.default.fINulo),
                                        }),
                                        (0, i.jsx)(f.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: ej.intl.string(eb.default["WFJ/vb"]),
                                            onClick: () => (0, ti.listProjects)(k),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : J
                        ? (0, i.jsxs)("div", {
                              className: hD.j5,
                              children: [
                                  t8,
                                  (0, i.jsx)("div", {
                                      className: hD.sD,
                                      children: (0, i.jsx)(p.D, {
                                          variant: "heading-lg/semibold",
                                          children: ej.intl.string(eb.default.Y2sGrh),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(tm.bI.Provider, {
                              value: tK,
                              children: (0, i.jsx)(
                                  he,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: te,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eJ,
                                      frameLaunchParams: ez,
                                      header: t8,
                                      controlBar: nt,
                                      previewPanelId: null == nt ? void 0 : t6,
                                      previewPanelLabelledBy: null == nt || null == t9 ? void 0 : e9(t6, t9),
                                      chatOpen: C,
                                      onCloseChat: e8,
                                      debugOpen: M && N,
                                      onCloseDebug: t$,
                                      onRestoreVersion: $,
                                      onImportProject: (0, ts.PV)(s) ? tF.onImport : void 0,
                                      restoreState: L,
                                      previewReady: H,
                                      previewGate: tU,
                                      availability: ee,
                                      activeMode: et,
                                      widgetApplicationId: eU,
                                      overlayWidgetSize: eV,
                                      previewPaused: eY,
                                      onResumePreview: tD,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function hO() {
    return (0, i.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: hD.Hv, itemClassName: hD.C5 });
}
