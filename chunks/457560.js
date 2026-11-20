n.d(t, { A: () => hH });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
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
        a = r.indexOf(I),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
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
function z(e) {
    let t = i.useCallback(() => (null == e ? _ : P(e)), [e]);
    return i.useSyncExternalStore(O, t, t);
}
(n(134528), n(947204));
let G = { past: [], present: [], future: [] };
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
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
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
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
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
        history: G,
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
function ea(e, t) {
    null == t ? ee.delete(e) : ee.set(e, t);
}
function ei(e) {
    return ee.get(e)?.() ?? Promise.resolve(null);
}
function es(e) {
    let t = el(e);
    if (null != t) {
        if (!Q(t)) return void eo(e);
        (t.active && er(e, (t) => ({ ...t, active: !1, keptStill: ei(e) })), D(e));
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
function ez(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eO;
}
function eG(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function eU(e) {
    return ez(e?.preview_overlay_widget ?? null);
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
    e6 = n(388155);
function e9(e, t) {
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
        x = i.useRef(null),
        v = i.useRef(null),
        b = i.useRef(null);
    i.useEffect(() => {
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
                for (let e of (i.observe(t), t.querySelectorAll(`.${e6.Mf}`))) i.observe(e);
                return (
                    t.addEventListener("scroll", r, { passive: !0 }),
                    () => {
                        (i.disconnect(), t.removeEventListener("scroll", r));
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
            n = e.currentTarget.closest(`.${e6.Mf}`);
        null != t && null != n && te(t, n);
    }
    i.useLayoutEffect(() => {
        let e = x.current,
            t = b.current;
        null != e && null != t && te(e, t);
    }, [d]);
    let w = m < 0 ? null : eY(t[m], l);
    return (0, a.jsxs)("div", {
        ref: x,
        className: u()(e6.vR, { [e6.e$]: j.left, [e6.Rh]: j.right }),
        children: [
            (0, a.jsx)("div", {
                ref: v,
                className: e6.gj,
                role: "tablist",
                "aria-label": ev.intl.string(ex.default.I2ucou),
                children: t.map((e, t) => {
                    let n = eX(e),
                        i = n === d,
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
                    return (0, a.jsx)(
                        "div",
                        {
                            ref: i ? b : void 0,
                            className: u()(e6.Mf, { [e6.yR]: i, [e6.P5]: t === m, [e6.h5]: m >= 0 && t > m }),
                            children: (0, a.jsxs)(e5.D, {
                                id: e9(c, e),
                                className: e6.eg,
                                role: "tab",
                                "aria-selected": i,
                                "aria-controls": i ? c : void 0,
                                tabIndex: n === h ? 0 : -1,
                                onClick: () => r(e),
                                onKeyDown: y,
                                onFocus: k,
                                children: [
                                    (0, a.jsx)(o, { size: "sm", color: "currentColor", className: e6.Ll }),
                                    (0, a.jsx)(p.E, {
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
            null != w
                ? (0, a.jsx)(e7.m, {
                      position: "bottom",
                      text: g,
                      ariaHidden: !0,
                      children: (0, a.jsx)(e5.D, {
                          className: e6.b,
                          onClick: o,
                          "aria-label": `${g}, ${w}`,
                          children: (0, a.jsx)(e8.XSmallIcon, { size: "sm", color: "currentColor" }),
                      }),
                  })
                : null,
        ],
    });
}
var tl = n(27184),
    tr = n(627363),
    ta = n(233470),
    ti = n(153207),
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
        m = i.useCallback(() => {
            null != s && (0, tw.A)(s, o);
        }, [s, o]),
        h = i.useRef(null);
    if (!d && !f) return null;
    let g = ev.intl.string(ex.default.XWgAfc),
        x = ev.intl.string(ev.t.RDE0Sc);
    return (0, a.jsx)(tb.Q, {
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
                className: u()(tA.Os, { [tA.q6]: l }),
                children: [
                    d
                        ? (0, a.jsx)(ty.A, {
                              className: u()(tA.MX, tA.mz, { [tA.JA]: f }),
                              icon: (0, a.jsx)(p.E, { variant: "body-sm/medium", color: "none", children: g }),
                              "aria-label": g,
                              tooltipText: null,
                              onClick: m,
                          })
                        : null,
                    f
                        ? (0, a.jsx)(ty.A, {
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
        S = i.useRef(null),
        C = (f || b.length > 0) && w && !m,
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
        [M, R] = i.useState(null);
    i.useLayoutEffect(() => {
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
    return (0, a.jsxs)("div", {
        ref: _,
        className: u()(tq.M0, { [tq.ho]: I && !m, [tq.ET]: m }),
        style: { left: $, top: D },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
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
                          (0, a.jsx)(e7.m, {
                              position: "bottom",
                              text: ev.intl.string(ex.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: tq.tY,
                                  onClick: () => S.current?.click(),
                                  "aria-label": ev.intl.string(ex.default.lgvqSB),
                                  children: (0, a.jsx)(tL.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tq.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(t$.y, {
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
                ? (0, a.jsx)("div", {
                      className: tq.ZO,
                      children: b.map((e) => (0, a.jsx)(tD.Nl, { draft: e, onRemove: k }, e.localId)),
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
function tz(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tG(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? tO(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tO(e());
                l((e) => (tz(e, t) ? e : t));
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
function t5(e) {
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
function t7(e) {
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
function t8(e) {
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
let t6 = Z.map((e) => t8(Math.min(16, e + 3))),
    t9 = J.map((e) => t8(Math.min(16, e / 2.5))),
    ne = [ex.default.jZtZUr, ex.default.cTQdD0, ex.default.J3ucEg],
    nt = {
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
            label: () => ev.intl.string(ex.default.oIZQbm),
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
            label: () => ev.intl.string(ex.default.ARNVr7),
        },
    };
function nn(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(e7.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: t3.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tU.k, {
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
    return (0, a.jsx)(e7.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tB.K, {
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
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: t3.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
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
function na(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: f } = n,
        m = t2(n.colorId),
        h = nt[u],
        g = ev.intl.string(ex.default.hUm825),
        p = ev.intl.string(ex.default.n5IA3a),
        x = ev.intl.string(ex.default.r5dX6t),
        v = ev.intl.string(ex.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: t3.t$,
        children: [
            (0, a.jsx)("div", {
                className: t3.NT,
                children: (0, a.jsx)(nn, {
                    icon: t5,
                    label: ev.intl.string(ex.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => eu(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: t3.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": ev.intl.string(ex.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(nn, {
                        icon: t4,
                        label: ev.intl.string(ex.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => eu(t, "move"),
                    }),
                    (0, a.jsx)(nn, {
                        icon: tK.LettersIcon,
                        label: ev.intl.string(ex.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => eu(t, "text"),
                    }),
                    (0, a.jsx)(nr, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(nn, {
                                icon: tH.PaintbrushThinIcon,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (eu(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            t6.map((n, l) =>
                                (0, a.jsx)(
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
                    (0, a.jsx)(nr, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(nn, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (eu(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(nt).map((n) =>
                                (0, a.jsx)(
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
                    (0, a.jsx)(nr, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(nn, {
                                icon: t7,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (eu(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            t9.map((n, l) =>
                                (0, a.jsx)(
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
                    (0, a.jsx)(nr, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(nl, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            t1.map((n) =>
                                (0, a.jsx)(
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
                    (0, a.jsx)("div", { className: t3.Gz, role: "separator" }),
                    (0, a.jsx)(nl, {
                        icon: tW.UndoIcon,
                        label: ev.intl.string((0, j.cX)() ? ex.default["j/XmBQ"] : ex.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(nl, {
                        icon: tV.RedoIcon,
                        label: ev.intl.string((0, j.cX)() ? ex.default.C7jhpn : ex.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(nl, {
                        icon: tX.TrashIcon,
                        label: ev.intl.string(ex.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: t3.Gz, role: "separator" }),
                    (0, a.jsx)(nl, { icon: tY.XLargeIcon, label: ev.intl.string(ex.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let ni = tQ.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
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
        { active: u } = z(s),
        c = (0, eE.Rv)(),
        [d, f] = i.useState(!1);
    i.useEffect(() => {
        if (null != s)
            return () => {
                el(s)?.active === !0 && eo(s);
            };
    }, [s]);
    let m = o?.active === !0 && "pick" === o.tool;
    i.useEffect(() => {
        null != s && m && !u && L(s);
    }, [s, m, u]);
    let h = i.useCallback(async () => {
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
    return (i.useEffect(() => {
        if (null != s) return (ea(s, h), () => ea(s, null));
    }, [s, h]),
    null == s || null == o || !o.active || c)
        ? null
        : (0, a.jsx)(ng, { projectId: s, state: o, capturing: d, resolveIframe: r });
}
function ng(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tG(r),
        [o, u] = i.useState(null),
        [c, d] = i.useState(0),
        [f, m] = i.useState(null),
        [h, g] = i.useState(nd),
        p = i.useRef(null),
        x = i.useRef(null),
        v = i.useRef(null),
        b = i.useRef(null),
        j = i.useRef(null),
        { tool: y, history: k } = n,
        w = t2(n.colorId),
        A = "pick" !== y,
        S = "marker" === n.tool ? Z[n.markerSize] : "eraser" === n.tool ? J[n.eraserSize] : null,
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
                                  a(n, `fill="none" stroke="${ns}" stroke-width="4"`),
                                  a(n, `fill="none" stroke="${ni}" stroke-width="2"`),
                                  a(3, `fill="${t ?? ni}" stroke="${ns}" stroke-width="1"`),
                                  "</svg>",
                              ].join("");
                          return `url("data:image/svg+xml,${encodeURIComponent(i)}") ${r} ${r}, crosshair`;
                      })(S, C),
            [S, C],
        ),
        I = "move" === y ? (k.present.find((e) => e.id === f) ?? null) : null,
        E = null != s;
    (i.useLayoutEffect(() => {
        d(x.current?.offsetWidth ?? 0);
    }, [E]),
        i.useLayoutEffect(() => {
            j.current = o;
        }, [o]));
    let _ = i.useCallback(() => {
        let e = p.current;
        if (null == e || null == s) return;
        let t = window.devicePixelRatio,
            n = Math.round(s.width * t),
            l = Math.round(s.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let r = e.getContext("2d");
        if (null == r) return;
        (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, n, l), r.setTransform(t, 0, 0, t, 0, 0));
        let a = b.current,
            i = null == a ? k.present : k.present.map((e) => (e.id === a.id ? K(e, h.dx, h.dy) : e)),
            o = v.current;
        nu(r, null == o ? i : [...i, o], { width: s.width, height: s.height });
    }, [s, k.present, h]);
    i.useLayoutEffect(_, [_]);
    let M = i.useCallback(
            (e) =>
                null == s ? { x: 0, y: 0 } : { x: (e.clientX - s.left) / s.width, y: (e.clientY - s.top) / s.height },
            [s],
        ),
        R = i.useCallback(() => {
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
        P = i.useCallback(() => {
            ((j.current = null), u(null), ed(t));
        }, [t]),
        T = i.useCallback(
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
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => V(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = X(e.from, n),
                                                                  r = X(e.to, n),
                                                                  a = Math.abs(r.x - t.x) / 2,
                                                                  i = Math.abs(r.y - t.y) / 2;
                                                              if (0 === a || 0 === i) return !1;
                                                              let s = (t.x + r.x) / 2,
                                                                  o = (t.y + r.y) / 2;
                                                              return (
                                                                  Math.abs(
                                                                      Math.hypot((l.x - s) / a, (l.y - o) / i) - 1,
                                                                  ) <=
                                                                  (6 + (e.width * n.width) / 2) / Math.min(a, i)
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
        L = i.useCallback(
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
        $ = i.useCallback(() => {
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
        D = i.useCallback(() => es(t), [t]),
        q = i.useCallback(() => ec(t, { type: "undo" }), [t]),
        F = i.useCallback(() => ec(t, { type: "redo" }), [t]),
        O = i.useCallback(() => ec(t, { type: "clear" }), [t]),
        z = i.useRef({ tool: y, selected: I, exit: D, undo: q, redo: F });
    if (
        (i.useLayoutEffect(() => {
            z.current = { tool: y, selected: I, exit: D, undo: q, redo: F };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, tR.Cw)((0, tR.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != j.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = z.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? i() : a());
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
        i.useEffect(() => {
            if (A) return (tP.A.disable(), () => tP.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let G = Math.max(8, s.left - c - 8),
        U = null == I ? null : Y(null == b.current ? I : K(I, h.dx, h.dy), s);
    return (0, tM.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: t3.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: t3.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
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
                            : (0, a.jsxs)("div", {
                                  className: t3.r1,
                                  style: { left: U.x, top: U.y, width: U.width, height: U.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: t3.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: t3.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: t3.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: t3.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == o
                    ? null
                    : (0, a.jsx)(tF, {
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
                (0, a.jsx)("div", {
                    ref: x,
                    className: t3.ej,
                    style: { left: G, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(na, { projectId: t, state: n, onExit: D, onUndo: q, onRedo: F, onClear: O }),
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
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: u()(nM.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: u()(nM.wx, null != n && nM.o5, i),
                children: [
                    (0, a.jsx)(p.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
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
    return (0, a.jsx)(p.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
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
        m = i.useId(),
        [h, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        b = h ? nE.ChevronSmallDownIcon : n_.ChevronSmallRightIcon,
        j = null != n || l;
    return (0, a.jsxs)(nR, {
        ...f,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: nP.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(e5.D, {
                                className: nP.L$,
                                onClick: v,
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, a.jsx)(b, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : nP.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: m, className: u()(nP.rf, o), hidden: !h, children: d })],
    });
}
var n$ = n(883646);
let nD = [];
function nq(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
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
            (0, a.jsx)(x.y, {
                type: x.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: n$.Qd,
                itemClassName: n$.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: n$.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: n$.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nF(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : nD), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [c, d] = i.useState(s),
        [f, m] = i.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
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
    return (0, a.jsxs)("span", {
        className: n$.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    nN.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: n$.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, a.jsx)(p.E, {
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
            ((t = (r ?? nD).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nD),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: n$.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: u()(n$.AS, { [n$.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nq, { status: n }),
                            (0, a.jsx)(p.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: n$.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: n$.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(nF, { agents: c.get(e.id) ?? nD, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: n$.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(nq, { status: "pending" }),
                          (0, a.jsx)(p.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: n$.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: n$.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nz(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = ev.intl.formatToPlainString(ex.default["P/I+JW"], { completed: o, total: u }),
        d = ev.intl.formatToPlainString(ex.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(nL, {
        title: ev.intl.string(ex.default.RtzECX),
        meta: (0, a.jsx)(nT, { children: c }),
        superseded: s,
        showLabel: ev.intl.string(ex.default.RKyN9q),
        hideLabel: ev.intl.string(ex.default.xydHoj),
        className: n$.Nr,
        bodyClassName: n$.rf,
        beforeBody: r && !s ? (0, a.jsx)(nI.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nO, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nG = n(308665),
    nU = n(59678),
    nB = n(903847);
function nK(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: c } = e,
        d = null != n,
        [f, m] = i.useState(n ?? "top"),
        [h, g] = i.useState(d),
        [p, x] = i.useState(!1),
        [v, b] = i.useState(!1),
        [j, y] = i.useState(d);
    (j !== d && (y(d), null != n ? (m(n), g(!0)) : (x(!1), b(!1))),
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
        E = i.useCallback(() => b((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: nB.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: u()(nB.vK, { [nB.ho]: p && d, [nB.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: u()(nB.Rk, nU.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(nC.A, {
                                        glyph: (0, a.jsx)(nG.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(e5.D, {
                                    className: nB.pZ,
                                    onClick: c,
                                    "aria-label": ev.intl.string(ex.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: u()(nB.Rk, nU.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(nC.A, {
                                            glyph: (0, a.jsx)(nG.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(e7.m, {
                                    text: ev.intl.string(ex.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(e5.D, {
                                        className: nB.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": ev.intl.string(ex.default.RtzECX),
                                        children: (0, a.jsx)(nS.ClipboardListIcon, {
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
                            className: u()(nB.vB, { [nB.pg]: v && A, [nB.ui]: !v }),
                            children: (0, a.jsx)(nz, {
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
    return i.useMemo(
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
            let a = nZ(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, f] = i.useState(t.prompt),
                [m, h] = i.useState(!1),
                [g, p] = i.useState(!1),
                x = i.useRef(new Map()),
                v = i.useRef(!1),
                b = i.useRef(!1),
                j = i.useMemo(() => a.filter((e) => !u.some((t) => t.target.projectId === e.projectId)), [a, u]),
                y = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = i.useMemo(() => {
                    let e = s ?? y;
                    return j.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, j]),
                w = i.useMemo(() => j.filter((e) => k.includes(e.projectId)), [j, k]),
                A = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                S = d.trim(),
                C = n && !m && (w.length > 0 ? "" !== S : u.length > 0),
                N = i.useCallback(
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
                I = i.useCallback(() => {
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
                E = i.useCallback(() => {
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
        f = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: u()(n2.nd, n2.jx),
        "aria-labelledby": f,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: n2.wx,
                children: [
                    (0, a.jsx)(p.E, {
                        tag: "span",
                        id: f,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: n2.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tB.K, {
                        icon: e8.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": ev.intl.string(ex.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: n3.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(p.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ev.intl.string(ex.default.TbbzW5),
                          })
                        : (0, a.jsx)(n0.Z, {
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
                    (0, a.jsx)(n1.f, {
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
            (0, a.jsx)("div", {
                className: n2.qr,
                children: (0, a.jsx)("div", {
                    className: n2.zt,
                    children: (0, a.jsx)(d.$, {
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
    n6 = n(287809),
    n9 = n(360047);
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
                  var r, a;
                  let i = (n + e) % l.length;
                  if (((r = l[i]), (a = t[l[i].id]), !0 !== r.optional && (null == a || "" === a.text.trim())))
                      return i;
              }
              return null;
          })(e, t, n);
}
function la(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function li(e, t, n, l) {
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
                let n = n6.default.getUser(t)?.username;
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
        l = i.useId(),
        [r, s] = i.useState(!1),
        o = i.useRef(null),
        { sentence: u, options: c } = t.data,
        d = c.length > 1,
        f = i.useMemo(() => c.map((e) => ({ name: e.label, value: e.build })), [c]);
    return (
        i.useEffect(() => {
            r && o.current?.querySelector("input:checked")?.focus();
        }, [r]),
        (0, a.jsx)("div", {
            className: lj.Nz,
            children: (0, a.jsxs)(lp.B, {
                gap: 4,
                children: [
                    (0, a.jsx)(lv.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, a.jsx)(lb.A, { purpose: t.purpose }) : null,
                    null != u
                        ? (0, a.jsxs)("div", {
                              className: lj.em,
                              children: [
                                  (0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                                  d && !r
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(p.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, a.jsx)(lh.Q, {
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
                        ? (0, a.jsxs)("div", {
                              ref: o,
                              className: lj.zM,
                              children: [
                                  (0, a.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, a.jsx)(lx.z, {
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
    lz = n(426035),
    lG = n(246338);
let lU = lL.kg(lt.xBc.VIEW_CHANNEL, lt.xBc.SEND_MESSAGES);
var lB = n(384017);
function lK(e) {
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
    return (0, a.jsx)("div", {
        className: lB.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(n0.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(n0.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lH(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lM.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: o, onChange: u } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [ts.Ay],
                    () => {
                        let e = t ? ts.Ay.getProject(l) : null;
                        return null == e ? null : (0, lz.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || lq.Ay.isMember(r, n) || l$.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [lD.A, lq.Ay, lF.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lF.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lD.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, lG.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && lq.Ay.isMember(r, n))
                            return lO.$3({ permission: lU, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? lL.BY;
                        return lL.X8(s, lU) ? null : i;
                    },
                    [r, n, t, a.channel_filter],
                )),
            f = i.useRef(null),
            m = i.useRef(!1);
        i.useEffect(() => {
            if (!m.current && !o && null != r) {
                if (null == f.current) {
                    if (s.length > 0) m.current = !0;
                    else if (null != d) {
                        var e;
                        ((f.current = d.id),
                            u(((e = []), lo("channel", [d.id], () => (0, n5.m1)(d, n6.default, n8.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), u([], r));
            }
        }, [d, o, r, u, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lK, { ...r, guildId: n, options: s, placeholder: ld("channel", !0 === r.question.multi_select) });
}
function lW(e) {
    let { guildId: t, ...n } = e,
        l = (0, lP.A)(t);
    return (0, a.jsx)(lK, { ...n, guildId: t, options: l, placeholder: ld("role", !0 === n.question.multi_select) });
}
function lV(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lR.A)(t);
    return (0, a.jsx)(lK, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: ld("user", !0 === n.question.multi_select),
    });
}
function lX(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = nZ(t),
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
    return 0 === s.length ? n : (0, a.jsx)(lK, { ...l, options: s, placeholder: ld("project", !1) });
}
function lY(e) {
    let t = e.target;
    (0, tR.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lQ(e) {
    let { fallback: t, ...n } = e,
        l = (0, nQ.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(l_.Ay, { guild: e, size: l_.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: lY,
              onMouseUp: lY,
              children: (0, a.jsx)(lK, { ...n, options: r, placeholder: ld("server", !1) }),
          });
}
function lZ(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lT.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lX, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lQ, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lH, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lW, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lV, { guildId: r, ...l }, l.question.id);
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
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: u()(l7.Gt, l7.b6),
              children: [
                  (0, a.jsx)(lJ.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(p.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: ev.intl.string(ex.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: u()(l7.Gt, { [l7.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
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
function l6(e) {
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
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: x,
        } = e,
        v = ev.intl.formatToPlainString(ex.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: u()(l7.Vs, { [l7.Q9]: s, [l7.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(e5.D, {
                className: u()(l7.Up, { [l7.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => m(r) : void 0) : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": ev.intl.formatToPlainString(ex.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: l7.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(l8, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: l7.Gt }),
                            (0, a.jsx)("span", {
                                className: l7.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(lf.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(lx.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(p.E, {
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
                ? (0, a.jsx)("span", {
                      className: l7.B4,
                      children: (0, a.jsx)(e7.m, {
                          text: ev.intl.string(ex.default.HQEXJM),
                          children: (0, a.jsx)(tB.K, {
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
                  ? (0, a.jsx)("span", {
                        className: l7.B4,
                        children: (0, a.jsx)(e7.m, {
                            text: ev.intl.string(ex.default["4/eeDD"]),
                            children: (0, a.jsx)(tB.K, {
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
function l9(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: o, own: c } = e,
        d = !0 === n.multi_select,
        { options: f } = n,
        m = f.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        g = i.useRef(new Map()),
        [p, x] = i.useState(null),
        v = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => l.includes(e.id)) ?? f[0])?.id,
        b = i.useMemo(() => {
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
        j = i.useCallback(
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
        y = i.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || o(l));
            },
            [r, d, o, f],
        );
    return (0, a.jsxs)("div", {
        className: l7.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == b
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: u()(l7.fF, "gallery" === m ? l7.nV : l7.nM, { [l7.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, a.jsx)(
                                  l6,
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
                              ? (0, a.jsx)(
                                    l6,
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
            (0, a.jsx)(re, {
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
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [f, m] = i.useState(""),
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
    return (0, a.jsxs)("div", {
        className: l7.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: l7.QJ,
                children: [
                    (0, a.jsx)(d.$, {
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
                        : (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: l2.LinkIcon,
                              text: ev.intl.string(ex.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
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
                ? (0, a.jsxs)("div", {
                      className: l7.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: l7.Hs,
                              children: (0, a.jsx)(l3.k, {
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
                          (0, a.jsxs)("div", {
                              className: l7.gd,
                              children: [
                                  (0, a.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: ev.intl.string(ex.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === f.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lh.Q, {
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
                ? (0, a.jsx)(p.E, {
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
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(e5.D, {
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
                ? (0, a.jsx)("span", { className: lB.dy, children: (0, a.jsx)(lf.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: lB.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lB.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lB.l8,
                        children: (0, a.jsx)(p.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lB.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, a.jsx)(p.E, {
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
                ? (0, a.jsx)(p.E, {
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
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lA(n)
        ? (0, a.jsx)(l9, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      rt,
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
let rl = [],
    rr = [];
function ra(e) {
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
        f = !0 === n.multi_select ? ev.intl.string(ex.default.tE8qbz) : lC(n);
    return (0, a.jsxs)("div", {
        className: u()(lB.Ge, lB.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, a.jsx)(p.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lB.aK,
                      children: f,
                  }),
            (0, a.jsx)(rn, {
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
                : (0, a.jsxs)("div", {
                      className: lB.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lB.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lm.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: u()(lB.Pu, lB.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: lB.$0,
                      children: (0, a.jsx)(lh.Q, {
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
function ri(e) {
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
        [x, v] = i.useState({}),
        [b, j] = i.useState({}),
        [y, k] = i.useState({}),
        [w, A] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [S, C] = i.useState({}),
        { builds: N, linkFor: I } = (function (e, t, n) {
            let l = i.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = le(e, t, n[t.id] ?? []);
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
                                let l = await (0, n9.LW)(e, t);
                                a((e) => ({ ...e, [n]: l }));
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
                            f = d[e]?.name;
                        if (null == i || null == u || null == c || null == f) return null;
                        let m = i.caller === e,
                            h = d[i.caller],
                            g = {
                                caller: m ? f : c,
                                target: m ? c : f,
                                targetLive: u.live,
                                targetHasPreview: u.hasPreview,
                                callerHasPreview: null == h || (0, eF._7)(h),
                                callerLiveOnVibeyard: !1,
                            },
                            p = s[i.key] ?? u.build,
                            x = t.questions.find((e) => e.id === a);
                        return {
                            sides: g,
                            callerProject: h ?? null,
                            targetProject: d[i.target] ?? null,
                            flow: x?.link_flow ?? u.flow,
                            purpose: (0, lN.xP)(x?.link_purpose ?? u.purpose),
                            data: (0, lN.Bw)(g, p),
                            value: p,
                            aria: (0, lN.sr)(g),
                            onChange: (e) => o((t) => ({ ...t, [i.key]: e })),
                        };
                    },
                    [s, t, n, l, e, d, r],
                ),
            };
        })(n, l, w),
        [E, _] = i.useState(!1),
        [M, R] = i.useState(0),
        [P, T] = i.useState(null),
        [L, $] = i.useState(null),
        [D, q] = i.useState(null),
        [F, O] = i.useState(!1),
        z = i.useRef(null),
        [G, U] = i.useState(null),
        B = i.useRef(null),
        K = i.useRef(0),
        H = null == r,
        W = l.questions.length,
        V = Math.min(M, W - 1),
        X = l.questions[V],
        [Y, Q] = i.useState({ id: X.id, expanded: !1 }),
        Z = Y.id === X.id && Y.expanded,
        [J, ee] = i.useState(null),
        et = b[X.id] ?? "",
        en = !0 === X.multi_select,
        el = lA(X),
        er = en ? ev.intl.string(ex.default.tE8qbz) : lC(X),
        ea = en
            ? (y[X.id] ?? rl)
            : ((t = x[X.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : lS),
        ei = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = ev.intl.string(ex.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                f = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : lI(t[e.id])),
                    [t, l, o],
                ),
                m = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            m = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (o) return lE(h, f(i));
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
                            selected: f(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
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
                    [c, t, l, e, f, n, a],
                );
            return { imageFor: d, selectedFor: f, multiPartFor: m, controlsFor: h };
        })(n, x, v),
        es = ei.imageFor(X.id),
        eo = ei.selectedFor(X),
        { text: eu, phase: ec } = (0, lk.Q)(X.question),
        ed = eu === X.question,
        ef = ed && J?.id === X.id && J.truncated;
    i.useLayoutEffect(() => {
        if (null == G || Z || !ed) return;
        function e() {
            if (null == G) return;
            let e = G.scrollHeight > G.clientHeight + 1;
            ee((t) => (t?.id === X.id && t.truncated === e ? t : { id: X.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(G), () => t.disconnect());
    }, [ed, G, X.id, Z]);
    let em = ev.intl.string(Z ? ev.t.iTcuma : ev.t.dcl9MQ),
        eh = i.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let a = la(t, n);
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
                                    ? i()
                                    : Promise.allSettled(
                                          s.map((e) => {
                                              let { target: t, caller: n, ...l } = e;
                                              return (0, n9.Ol)(t, n, l);
                                          }),
                                      ).then(i));
                        }
                    })(n, l, e, N, r);
            },
            [l, N, r, n],
        ),
        eg = i.useCallback(
            (e, t) => {
                K.current += 1;
                let n = K.current;
                (T({ direction: t, moves: n }),
                    $({ question: X, draft: et, selected: ea, ownImage: es, ownSelected: eo, direction: t, moves: n }),
                    O(!0),
                    R(e));
            },
            [et, es, eo, X, ea],
        ),
        ep = i.useCallback(() => {
            let e = z.current,
                t = B.current;
            null != e && null != t && q({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = z.current,
            t = B.current;
        if (null == e || null == t) return;
        ep();
        let n = new ResizeObserver(ep);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ep]);
    let eb = P?.moves;
    i.useEffect(() => {
        if (null == eb) return;
        let e = setTimeout(() => $(null), 400),
            t = setTimeout(() => O(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eb]);
    let ej = i.useCallback(
            (e) => {
                let t = lr(l, e, V);
                null == t ? eh(e) : eg(t, t < V ? "back" : "forward");
            },
            [l, V, eh, eg],
        ),
        ey = i.useCallback(
            (e) => {
                if (H) return;
                let t = { ...x, [X.id]: e };
                (v(t), ej(t));
            },
            [ej, x, H, X.id],
        ),
        ek = i.useCallback(() => {
            H || 0 === V || eg(V - 1, "back");
        }, [H, V, eg]),
        ew = 0 !== V || H ? void 0 : f,
        eA = (V > 0 && !H) || null != ew,
        eS = i.useCallback(
            (e) => {
                j((e) => ({ ...e, [X.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                el ? H || v((e) => ({ ...e, [X.id]: t })) : ey(t);
            },
            [H, el, X.id, ey],
        ),
        eC = i.useCallback(() => {
            (j((e) => ({ ...e, [X.id]: "" })), ey({ kind: "custom", text: ev.intl.string(ex.default.zxSq2q) }));
        }, [X.id, ey]),
        { multiPartFor: eN } = ei,
        eI = i.useMemo(() => (en ? li(X, ea, et, eN(X)) : null), [et, en, eN, X, ea]),
        eE = w[X.id] ?? rr,
        e_ = I(X.id),
        eM = i.useMemo(() => {
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
        eR = i.useCallback(
            (e, t) => {
                (A((t) => ({ ...t, [X.id]: e })), C((e) => ({ ...e, [X.id]: t })));
            },
            [X.id],
        ),
        eP = i.useCallback(() => _(!0), []),
        eT = i.useCallback(() => _(!1), []),
        eL = ei.controlsFor(X, H),
        e$ = i.useMemo(() => {
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
                        ? li(X, [t.optionId], et)
                        : li(X, [], et, t)
            );
        }, [x, et, X]),
        eD = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eM, eI ?? e$, et),
            [et, eI, e$, eM],
        ),
        eq = i.useCallback(() => {
            null != eD && ey(eD);
        }, [eD, ey]),
        [eO, ez] = i.useState(!1),
        [eG, eU] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ez(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eB = i.useCallback(() => {
            null != s && (eU(!0), setTimeout(s, 150));
        }, [s]),
        eK = eD ?? (null == eM && null == eI ? (x[X.id] ?? null) : null),
        eH = i.useMemo(
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
                          return null == lr(e, r, n) && "" === la(e, r) ? null : r;
                      })(l, x, V)
                    : null,
            [x, l, V, eK],
        ),
        eW = null != eH,
        eV = (null != eK || eW) && !H,
        eX = V === W - 1,
        eY = i.useCallback(() => {
            H || (null != eK ? ey(eK) : null != eH && (v(eH), ej(eH)));
        }, [ej, H, eK, ey, eH]),
        eQ = i.useCallback(
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
                : (0, a.jsxs)("div", {
                      className: lB.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lB.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lm.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(t$.y, {
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
    return (0, a.jsxs)("section", {
        className: u()(lB.$O, { [lB.fI]: eO && !eG, [lB.Oh]: eG }),
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
            (0, a.jsxs)("div", {
                className: lB.rf,
                style: null == D ? void 0 : { height: D.heading + D.rows },
                "data-moving": F ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: z,
                        className: lB.wx,
                        children: [
                            (0, a.jsx)(p.E, {
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
                                ? (0, a.jsx)("div", {
                                      className: n2.Q7,
                                      children: (0, a.jsx)(e7.m, {
                                          text: em,
                                          children: (0, a.jsx)(tB.K, {
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
                                : (0, a.jsx)(e5.D, {
                                      className: u()(n2.gb, n2.Q7),
                                      onClick: eB,
                                      "aria-label": ev.intl.string(ex.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(e8.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: lB.Cg,
                        style: null == D ? void 0 : { insetBlockStart: D.heading },
                        children: (0, a.jsxs)("div", {
                            className: lB.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: B,
                                    className: lB.Ge,
                                    role: "group",
                                    "aria-labelledby": `${X.id}-label`,
                                    "data-direction": P?.direction,
                                    "data-parity": null == P ? void 0 : P.moves % 2,
                                    children: [
                                        null == er
                                            ? null
                                            : (0, a.jsx)(p.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lB.aK,
                                                  children: er,
                                              }),
                                        (0, a.jsx)(rn, {
                                            projectId: n,
                                            question: X,
                                            selected: ea,
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
                                            ? (0, a.jsx)(lZ, {
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
                                        null != e_ ? (0, a.jsx)(ly, { link: e_, disabled: H }) : null,
                                        null != X.note
                                            ? (0, a.jsx)(p.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lB.aK,
                                                  children: X.note,
                                              })
                                            : null,
                                        ll(X) ? eZ : null,
                                        !0 === X.upload
                                            ? (0, a.jsx)("div", {
                                                  className: lB.$0,
                                                  children: (0, a.jsx)(lh.Q, {
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
                                    : (0, a.jsx)(
                                          ra,
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
                ? (0, a.jsxs)("div", {
                      className: n2.qr,
                      children: [
                          (0, a.jsx)(p.E, {
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
                          (0, a.jsxs)("div", {
                              className: n2.zt,
                              children: [
                                  eA
                                      ? (0, a.jsx)(lh.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: m ?? ev.intl.string(ex.default.Pk5lfA),
                                            onClick: ew ?? ek,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  h
                                      ? null
                                      : (0, a.jsx)(d.$, {
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
        s = i.useId(),
        o = i.useId();
    return (0, a.jsxs)("div", {
        className: rm.zm,
        children: [
            (0, a.jsx)(p.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, ru.wy)(t) }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: rm.uf,
                children: rf.map((e) => {
                    let i = null != n && e <= n,
                        s = i ? rc.StarIcon : rd.StarOutlineIcon;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: rm.uK,
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: o,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: rm.hF,
                                    "aria-label": (0, ru.MF)(t, e),
                                }),
                                (0, a.jsx)("span", {
                                    className: u()(rm.d4, { [rm.cO]: i }),
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
function rg(e) {
    let { pending: t } = e,
        n = (0, ru.PM)(t),
        l = i.useId();
    return (0, a.jsx)("section", {
        className: rm.Nr,
        "aria-labelledby": l,
        children: (0, a.jsxs)(lp.B, {
            gap: 12,
            children: [
                (0, a.jsxs)(lp.B, {
                    gap: 4,
                    children: [
                        (0, a.jsx)(g.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: ev.intl.string(ex.default.GVLtfq),
                        }),
                        (0, a.jsx)(p.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ev.intl.string(ex.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, a.jsxs)(lp.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, a.jsx)(
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
                        (0, a.jsx)(p.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: ev.intl.string(ex.default.BvaFUc),
                        }),
                    ],
                }),
                (0, a.jsx)(n1.f, {
                    label: ev.intl.string(ex.default.d28g0o),
                    placeholder: ev.intl.string(ex.default.EBB7lL),
                    value: n.feedback,
                    onChange: n.setFeedback,
                    rows: 3,
                    maxLength: 2e3,
                    disabled: n.submitting,
                }),
                null != n.error
                    ? (0, a.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: n.error,
                      })
                    : null,
                (0, a.jsx)(lp.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, a.jsx)(d.$, {
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
        f = i.useCallback(() => {
            (0, eE.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        m = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: rb.KeyIcon })), [r.fields]),
        h = (0, rv.bB)(l, s),
        g = u()(rC.Lo, { [rC.jY]: h });
    if ("superseded" === s)
        return (0, a.jsx)(
            "article",
            {
                className: g,
                children: (0, a.jsx)(p.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: ev.intl.string(ex.default.CTxtdV),
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
                    (0, a.jsx)(p.E, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        tag: "span",
                        children: ev.intl.string(ex.default.HCQvpO),
                    }),
                    (0, a.jsx)(rj.C, { label: ev.intl.string(ex.default.HCQvpO), size: "xs", items: m }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, a.jsx)(
            "article",
            {
                className: rC.Lo,
                children: (0, a.jsx)(rj.C, { label: ev.intl.string(ex.default.HCQvpO), size: "xs", items: m }),
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
                        className: rC.$h,
                        children: [
                            (0, a.jsx)("span", {
                                className: rC.c9,
                                "aria-hidden": !0,
                                children: (0, a.jsx)(ry.CircleCheckIcon, {
                                    size: "xs",
                                    color: tQ.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, a.jsx)(p.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: ev.intl.string(ex.default.sfp7Up),
                            }),
                        ],
                    }),
                    (0, a.jsx)(p.E, {
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
        v = (0, a.jsx)(d.$, { variant: "primary", size: "sm", onClick: f, text: ev.intl.string(ex.default.EK8tKY) });
    return null != c
        ? (0, a.jsxs)("section", {
              className: u()(n2.nd, rC.fw),
              "aria-label": ev.intl.string(ex.default.O0QIqj),
              children: [
                  (0, a.jsxs)("div", {
                      className: n2.wx,
                      children: [
                          (0, a.jsx)(rb.KeyIcon, { size: "xs", color: tQ.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, a.jsx)(p.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: n2.TK,
                              children: ev.intl.string(ex.default.O0QIqj),
                          }),
                          (0, a.jsx)(e5.D, {
                              className: u()(n2.gb, n2.Q7),
                              onClick: c,
                              "aria-label": ev.intl.string(ex.default.Hl7rif),
                              children: (0, a.jsx)(e8.XSmallIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: rC.DQ,
                      children: [
                          (0, a.jsx)(rS.A, { text: x, variant: "body-sm/normal", color: "text-default" }),
                          (0, a.jsx)(rj.C, { label: ev.intl.string(ex.default.HCQvpO), size: "xs", items: m }),
                      ],
                  }),
                  (0, a.jsxs)("div", {
                      className: n2.qr,
                      children: [
                          (0, a.jsx)(p.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: rC.xE,
                              children: ev.intl.string(ex.default["2OdXdn"]),
                          }),
                          (0, a.jsx)("div", { className: n2.zt, children: v }),
                      ],
                  }),
              ],
          })
        : (0, a.jsxs)("article", {
              className: rC.Lo,
              children: [
                  (0, a.jsx)(p.E, {
                      variant: "body-xs/semibold",
                      color: null != o ? "text-brand" : "text-muted",
                      tag: "span",
                      children: ev.intl.string(null != o ? ex.default.O0QIqj : ex.default.HCQvpO),
                  }),
                  (0, a.jsx)(rS.A, { text: x, variant: "body-sm/normal", color: "text-default" }),
                  (0, a.jsx)(rj.C, { label: ev.intl.string(ex.default.HCQvpO), size: "xs", items: m }),
                  (0, a.jsx)("div", { className: rC.sq, children: v }),
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
    return i.useSyncExternalStore(rR, () => r_);
}
function rT(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, nk.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
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
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                o = i.useCallback(() => {
                    if (null != n) {
                        if (!r_.has(n)) for (let e of ((r_ = new Set([...r_, n])), rM)) e();
                    } else a(!0);
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
        return (0, a.jsx)("article", {
            className: rq.Mk,
            children: (0, a.jsx)(p.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: ev.intl.string(ex.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: rq.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rq.Ol,
                    children: [
                        (0, a.jsx)(ry.CircleCheckIcon, {
                            size: "xs",
                            color: tQ.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(p.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: ev.intl.string(ex.default.AxBLLy),
                        }),
                    ],
                }),
                m.length > 0
                    ? (0, a.jsx)(p.E, {
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
    return (0, a.jsx)(rD.A, {
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
                text: ev.intl.string(ex.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rq.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(p.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: ev.intl.string(ex.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, a.jsx)(rS.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rq.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: u()(n2.nd, n2.jx),
                      "aria-label": ev.intl.string(ex.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: n2.wx,
                              children: [
                                  (0, a.jsx)(p.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: n2.TK,
                                      children: ev.intl.string(ex.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(e5.D, {
                                      className: u()(n2.gb, n2.Q7),
                                      onClick: r,
                                      "aria-label": ev.intl.string(ex.default["iq+Pte"]),
                                      children: (0, a.jsx)(e8.XSmallIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rq.DQ,
                              children: [
                                  null != v
                                      ? (0, a.jsx)(rS.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: n2.qr,
                              children: [
                                  (0, a.jsx)(p.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rq.xE,
                                      children: ev.intl.string(ex.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: n2.zt,
                                      children: [
                                          (0, a.jsx)(d.$, {
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
    rz = n(427123);
let rG = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
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
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, ny.B4)(r),
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
        f = u.filter((e) => e !== d),
        m = f.filter((e) => "message" === e.type).at(-1),
        h = !i && !s && "" !== a.trim();
    return {
        streamed: f,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? a.trim() : "",
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
                    o = i.useMemo(
                        () => (0, rQ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
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
    r6 = n(101147);
function r9(e) {
    let t = (0, ny.SY)(e.steps);
    return null != t ? (0, ny.WQ)(t) : r7(e.task);
}
function ae(e) {
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
                      line: r9(e),
                  },
              ];
    });
}
function at(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, ny.SY)(n.steps),
        d = u
            ? r9(n)
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
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: nU.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            r6.A,
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
                                      className: nU.iq,
                                      children: (0, a.jsx)(r8.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(nC.A, {
        glyph: (0, a.jsx)(nN.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: r7(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nU.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
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
var an = n(998445),
    al = n(643210),
    ar = n(648127),
    aa = n(372795),
    ai = n(163897);
let as = "conjure-browser-viewer";
function ao(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [al.A],
            () =>
                n.flatMap((e) => {
                    let n = al.A.getTab(t, e);
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
        className: ai.kR,
        "aria-label": ev.intl.string(ex.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(au, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function au(e) {
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
        c = (0, eE.Ry)(as),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, ar.i)(l.session);
    return (0, a.jsxs)(e5.D, {
        innerRef: s,
        className: u()(ai.Nr, h && ai.Xj),
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
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: as },
                )
            );
        },
        "aria-label": ev.intl.formatToPlainString(ex.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: ai.Gt,
                children: [
                    (0, a.jsx)(aa.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: ai.Ji,
                        "aria-label": ev.intl.formatToPlainString(ex.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: ai.qf,
                              children: (0, a.jsx)(an.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: ai.HS,
                              children: (0, a.jsx)(p.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: ev.intl.string(ex.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: ai.pG,
                children: [
                    (0, a.jsx)("span", { className: u()(ai.W9, h && ai.oM) }),
                    (0, a.jsx)(p.E, {
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
var ac = n(268409);
let ad = new WeakMap(),
    af = new WeakMap();
function am(e) {
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
            [rE.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = ad.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = af.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), af.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ad.set(e, n), n);
                })(rE.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, a.jsx)("li", { className: ac.h, children: (0, a.jsx)(ao, { projectId: t, sessionIds: o }) });
}
var ah = n(469393);
function ag(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, e_.lG)(t.authored_at);
    return (0, a.jsx)(nR, {
        title: ev.intl.string(ex.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: ah.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ah.z,
                    children: [
                        (0, a.jsx)(p.E, { variant: "body-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(p.E, {
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
                          text: ev.intl.string(ex.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var ap = n(493490),
    ax = n(17742);
let av = [];
function ab(e) {
    let t = (0, c.bG)([ap.A], () => (null != e ? ap.A.getCaptures(e) : av)),
        n = (0, c.bG)([ap.A], () => (null != e ? ap.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, ax._F)(e, n);
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
var aj = n(714917),
    ay = n(463660),
    ak = n(970211);
function aw(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([aj.A], () => (null != e ? aj.A.getBackground(e) : null)),
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
                                r = await (0, ay.Mg)(e, l);
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
            let f = null != l ? r : null,
                m = null == l || (null != f && f === s) ? t : f,
                h = i.useCallback(() => {
                    m === f && o(f);
                }, [m, f]);
            return { src: null == e || null != n || u ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        o = ab(n ? t : null);
    return null != o.selected
        ? null != o.src
            ? (0, a.jsx)("img", { className: ak.F1, src: o.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: u()(ak.LO, { [ak.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var aA = n(155718);
function aS(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let aC = ["command", "user_command", "message_command", "message"],
    aN = new Set([aA.kc.CHAT, aA.kc.USER, aA.kc.MESSAGE]);
function aI(e) {
    return e.type ?? aA.kc.CHAT;
}
function aE(e) {
    return aN.has(aI(e));
}
function a_(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aM(e, t) {
    let n = aC.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !a_(e)), ...n.filter(a_)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || a_(r) || l.push(r);
    }
    return aC.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function aR(e, t, n) {
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
    let s = e.commands.filter(aE).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (aI(e)) {
                    case aA.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case aA.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(a_),
        u = a.length > 0 ? aM([...a, ...o], !0) : aM("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var aP = n(377941),
    aT = n.n(aP);
function aL(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function a$(e) {
    return e.type === aA.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === aA.kc.USER || e.type === aA.kc.MESSAGE
          ? ""
          : "/";
}
let aD = {
        [eF.q7.APP_CHANNEL]: ex.default["3/aHX6"],
        [eF.q7.VOICE_CHANNEL]: ex.default["3/aHX6"],
        [eF.q7.ACTIVITY]: ex.default["3/aHX6"],
        [eF.q7.OVERLAY]: ex.default["rPpf5/"],
        [eF.q7.PROFILE_WIDGET]: null,
        [eF.q7.AUTOMOD]: null,
        [eF.q7.BOT]: null,
        [eF.q7.APPLICATION_COMMANDS]: null,
    },
    aq = [eF.q7.ACTIVITY, eF.q7.APP_CHANNEL, eF.q7.VOICE_CHANNEL, eF.q7.OVERLAY];
function aF(e) {
    return aq.find((t) => aS(e, t)) ?? null;
}
let aO = 1920 / 1018;
function az(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let aG = az(24, 1018),
    aU = az(24, 1920);
function aB(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var aK = n(90947),
    aH = (((l = {}).IMAGE = "image"), l),
    aW = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aV = n(598748),
    aX = n(773669);
let aY = [],
    aQ = {},
    aZ = {};
function aJ(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function a0(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aH.IMAGE,
        visibility: aW.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var a1 = n(127258),
    a2 = n(803306),
    a3 = n(587895),
    a4 = n(432005),
    a5 = n(963852),
    a7 = n(95701),
    a8 = n(619019),
    a6 = n(427262);
let a9 = new a7.nA({ id: "1337", guild_id: "1337", type: lt.rbe.GUILD_TEXT, name: "preview" });
function ie(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([n6.default], () => n6.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, a2.nj)(new a8.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let it = /^@\S+/;
var il = n(775602);
let ir = [ex.default["3eTjcV"], ex.default.l3j5nS];
var ia = n(97808),
    ii = n(778712),
    is = n(486020),
    io = n(46054),
    iu = n(200700);
let ic = {
        alert: { label: () => ev.intl.string(ex.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => ev.intl.string(ex.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => ev.intl.string(ex.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => ev.intl.string(ex.default.RGzFNK), blockedStyle: !1 },
    },
    id = {
        blocked: { label: () => ev.intl.string(ex.default.YdnZ8q), tone: "red" },
        alert: { label: () => ev.intl.string(ex.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => ev.intl.string(ex.default.RGzFNK), tone: "green" },
    },
    im = ["blocked", "alert", "allowed"],
    ih = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function ig(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : ev.intl.formatToPlainString(ev.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, iu.getFriendlyDurationString)(n))
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
var ip = n(984097),
    ix = n(13673);
let iv = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function ib(e) {
    let { example: t } = e,
        n = ig(t);
    return null == n
        ? null
        : (0, a.jsx)(p.E, {
              variant: "body-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let ij = ["glazedgamer", "sprinkles", "donutking"];
function iy(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = ic[n.outcome];
    return (0, a.jsxs)("li", {
        className: u()(ip.nM, { [u()(ip.HV, ix.DX)]: s }),
        children: [
            (0, a.jsx)(nI.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: ip.my,
                children: (0, a.jsx)(ia.eu, {
                    src: (0, is.AE)(void 0, void 0),
                    size: ii._3.SIZE_24,
                    "aria-label": ev.intl.string(ex.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ip.fw,
                children: [
                    (0, a.jsx)(p.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), io.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(ib, { example: n }) : null,
                ],
            }),
        ],
    });
}
function ik(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = id[t.section],
        s = new Set(t.examples.map(ig)),
        o = 1 === s.size ? t.examples.map(ig)[0] : null;
    return (0, a.jsxs)("div", {
        className: ip.UO,
        children: [
            (0, a.jsxs)("div", {
                className: ip.RZ,
                children: [
                    (0, a.jsx)(p.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: iv[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(p.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: ip.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(p.E, {
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
                className: ip.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(iy, { example: e, username: ij[(n + t) % ij.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function iw(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            im
                .map((e) => ({ section: e, examples: t.filter((t) => ih[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: ip.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: ip.hk,
                      children: (0, a.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    ik,
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
var iA = n(276293),
    iS = n(460905),
    iC = n(110384),
    iN = n(365199),
    iI = n(633018),
    iE = n(763754),
    i_ = n(267508),
    iM = n(194085),
    iR = n(20851),
    iP = n(692508),
    iT = n(798819);
function iL(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: u()(iT.item, iT.labelContainer, iT.colorDefault, {
            [iT.focused]: !0 === t.highlighted,
            [iT.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: iT.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: iT.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: u()(iT.label, iP.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: iT.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: iT.icon }),
                  })
                : null,
        ],
    });
}
function i$(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: u()(t, iP.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: ev.intl.string(ev.t["5IEsGx"]), icon: iC.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: ev.intl.string(ev.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: u()(iT.menu, iP.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: iT.scroller,
            children: [
                (0, a.jsx)(iL, { item: s }),
                (0, a.jsx)("div", { className: iT.separator }),
                (0, a.jsx)(iL, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function iD() {}
function iq(e) {
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
        } = ((t = (0, c.bG)([n6.default], () => n6.default.getCurrentUser())),
        (n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(x))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([a3.A], () => a3.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? ev.intl.string(ex.default.JEYq8M)),
        (o = (0, c.bG)([n6.default], () => (null != l ? n6.default.getUser(l) : void 0), [l])),
        (f = ie("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (m = d ? o : f),
        (h = ie("31338", ev.intl.string(ex.default["9iAOsw"]), { discriminator: "0003" })),
        (g = ie("31339", (0, a6.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
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
                                      i = (0, a4.rh)({
                                          ...(0, a5.Ay)({
                                              channelId: a9.id,
                                              content: e,
                                              author: t,
                                              type: l ?? lt.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: lt.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: a1.G.APPLICATION_COMMAND,
                                                        user: (0, a5.Vi)(s),
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
                                              messageType: lt.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: lt.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(it, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
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
    let k = a9.name;
    return (0, a.jsxs)("div", {
        className: iP.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: iP.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(iA.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(p.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: u()(iP.TE, "group-spacing-16"),
                children: b.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? iP.Rz : void 0,
                            children: [
                                (0, a.jsx)(iR.A, {
                                    message: n,
                                    channel: a9,
                                    author: (0, iE.FT)(n.author, a9),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(i_.A, { message: n, channel: a9 }) : void 0,
                                    usernameClassName: r?.target === "user" ? iP.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: iP.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(iM.Ay, {
                                              children: [
                                                  (0, a.jsx)(iM.qv, {
                                                      label: ev.intl.string(ev.t.lfIHs4),
                                                      icon: iS.ReactionIcon,
                                                      onClick: iD,
                                                  }),
                                                  (0, a.jsx)(iM.qv, {
                                                      label: ev.intl.string(ev.t["5IEsGx"]),
                                                      icon: iC.ArrowAngleLeftUpIcon,
                                                      onClick: iD,
                                                  }),
                                                  (0, a.jsx)(iM.qv, {
                                                      label: ev.intl.string(ev.t["UKOtz+"]),
                                                      icon: iN.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: iD,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? iP.ET : iP.je,
                                          inert: !0,
                                          children: (0, a.jsx)(i$, {
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
                className: iP.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(iI.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(p.E, {
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
var iF = n(332173);
function iO(e) {
    let { name: t } = e;
    return (0, a.jsxs)(iF.A, { children: ["/", t] });
}
function iz(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(aT());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(iO, { name: e.name }, e.start) : e.text));
}
n(827669);
var iG = n(757789),
    iU = n(26137),
    iB = n(231483);
let iK = { frame: ex.default.Z2bt4u, bot: ex.default.EbvC13, commands: ex.default.EbvC13, automod: ex.default.tiMvei },
    iH = {
        user_widget: { server: ex.default.VlI3et, personal: ex.default.njJ4YL },
        overlay_widget: { server: ex.default.nUcjJ1, personal: ex.default.RDpKqP },
    };
function iW(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var iV = n(573634);
let iX = {
    frame: e3.GameControllerIcon,
    overlay_widget: iG.WindowTopIcon,
    user_widget: iU.UserCircleIcon,
    bot: e4.RobotIcon,
    commands: e4.RobotIcon,
    automod: iB.ShieldIcon,
};
function iY(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: u()(iV.e7, l),
        children: [(0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function iQ(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iV.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iV.jw,
                    children: (0, a.jsx)(p.E, {
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
function iZ(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iV.lj,
        children: [
            (0, a.jsx)("span", {
                className: u()(iV.Vo, iV.G),
                children: (0, a.jsx)(eJ.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iV.aV,
                children: [
                    (0, a.jsx)(p.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iJ(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iV.wZ,
        children: t.map((e, t) => {
            let n = a$(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(iO, { name: e.name })
                                : (0, a.jsx)(iF.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function i0(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iV.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iV.Aw,
                    children: (0, a.jsx)(p.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(iz, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function i1(e) {
    let { experience: t, inServer: n, bullets: l, preview: r, blocks: i, commandNames: s } = e,
        o = iW(t) ? eJ.AppsIcon : iX[t.kind],
        u = (function (e, t) {
            if (iW(e)) return ev.intl.string(ex.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = iH[e.kind];
                return ev.intl.string(t ? n.server : n.personal);
            }
            return ev.intl.string(iK[e.kind]);
        })(t, n),
        c = n && t.kind in iH ? ev.intl.string(ex.default.UXJCSG) : null;
    return (0, a.jsxs)("section", {
        className: iV.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: iV.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iV.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(p.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != c ? (0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, a.jsx)("div", { className: iV.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, a.jsx)(p.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(iz, { text: l[0], commandNames: s }),
                  })
                : l.length > 0
                  ? (0, a.jsx)(i0, { bullets: l, commandNames: s })
                  : null,
            i.length > 0 ? (0, a.jsx)("div", { className: iV.PG, children: i }) : null,
        ],
    });
}
function i2(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, inServer: o, intro: u, proposal: c, renderPreview: d, commandNames: f } = e,
        m =
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
                                let n = t.map(aT()).join("|");
                                return RegExp(`(?<![\\p{L}\\p{N}/.:])/(?:${n})(?![\\p{L}\\p{N}_-])`, "iu").test(e);
                            })(e, f),
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
                m.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? m[0]),
            r?.experience.id);
    return (0, a.jsxs)("div", {
        className: iV.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iV.Lv,
                children: [(0, a.jsx)(g.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            m.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iV.yF, role: "separator" }),
                            (0, a.jsx)(i1, {
                                experience: t,
                                inServer: o,
                                bullets: n,
                                preview: d(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: ex.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: ex.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: ev.intl.string(n), labels: l.map(aL) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      iY,
                                                      { caption: n, children: (0, a.jsx)(iQ, { labels: l }) },
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
                                                            (0, a.jsx)(
                                                                iY,
                                                                {
                                                                    className: iV.Iw,
                                                                    caption: ev.intl.formatToPlainString(
                                                                        ex.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iV.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                iZ,
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
                                                                (0, a.jsx)(
                                                                    iY,
                                                                    {
                                                                        caption: ev.intl.string(ex.default.MY6UGJ),
                                                                        children: (0, a.jsx)(iQ, { labels: r }),
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
                                                              iY,
                                                              {
                                                                  caption: ev.intl.string(ev.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iJ, { commands: e.commands }),
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
                                commandNames: f,
                            }),
                        ],
                    },
                    t.id,
                );
            }),
        ],
    });
}
var i3 = n(633075),
    i4 = n(591410),
    i5 = n(27399);
function i7(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([n6.default], () => n6.default.getCurrentUser()),
        r = i.useMemo(() => new i3.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: i5.H,
              children: (0, a.jsx)(i4.A, {
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
var i8 = n(443863);
function i6(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: az(i.width * t, 1920), height: az(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(aw, { projectId: n }),
            (0, a.jsx)("div", {
                className: i8.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": aG,
                    "--custom-conjure-plan-overlay-widget-end": aU,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: i8.M7, onError: s }),
            }),
        ],
    });
}
function i9(e, t, n) {
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
function se(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: o } = (0, l5._)(t, r);
    return s
        ? null
        : (0, a.jsx)(e5.D, {
              className: i8.xX,
              onClick: () => i9(t, [{ id: r, alt: l }], 0),
              "aria-label": ev.intl.string(ex.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: i8.sN, onError: o }),
          });
}
function st(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: d } = (0, l5._)(t, r),
        [f, m] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: x,
            labels: v,
            pick: b,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([il.Ay], () => il.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, o] = i.useState(!1),
                u = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!u) return;
                let e = setInterval(() => a((e) => (e + 1) % ir.length), 4e3);
                return () => clearInterval(e);
            }, [u]);
            let f = i.useCallback((e) => {
                    (o(!0), a(e));
                }, []),
                m = i.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: ir.map((e) => ev.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h });
    if (o) return null;
    let j = ev.intl.string(ex.default.mjryK4),
        y = ev.intl.string(ex.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: i8.RM,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(e5.D, {
                className: u()(i8.xX, i8.nj, { [i8.qQ]: 0 === x }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(aO) },
                onClick: () => i9(t, [{ id: r, alt: j }], 0),
                "aria-label": ev.intl.string(ex.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === x
                          ? (0, a.jsx)("img", { src: s, alt: j, className: i8.Ac, onError: d })
                          : (0, a.jsx)(i6, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: i8._4,
                role: "group",
                "aria-label": ev.intl.string(ex.default.EH36X6),
                children: v.map((e, t) =>
                    (0, a.jsx)(
                        e5.D,
                        {
                            className: u()(i8.c, { [i8.Cw]: x === t }),
                            "aria-pressed": x === t,
                            onClick: () => b(t),
                            children: (0, a.jsx)(p.E, {
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
function sn(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: o } = (0, l5._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(e5.D, {
                  className: i8.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: i8.rA, onError: o }),
              }),
          });
}
function sl(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: ev.intl.formatToPlainString(ex.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: i8.Op,
              children: (0, a.jsxs)("div", {
                  className: i8.uW,
                  children: [
                      (0, a.jsx)(p.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: ev.intl.string(ex.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: i8.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(sn, { projectId: t, id: r, alt: i, onOpen: () => i9(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function sr(e) {
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
            ((n = aS(v, eF.q7.APPLICATION_COMMANDS)),
            (l =
                aS(v, eF.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(aE)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : aR(v, l, {
                              message: ev.intl.string(ex.default.J7qggf),
                              reply: ev.intl.string(ex.default.nqYtiy),
                              event: ev.intl.string(ex.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = aZ } = t,
                r = (0, c.bG)([aX.default], () => aX.default.locale),
                a = (0, c.bG)([ts.Ay], () => {
                    let t = ts.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aQ);
                    return (
                        i.useEffect(() => {
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
                                                          ...aJ(n),
                                                          ...(null != n.fallback ? { fallback: aJ(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aK.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[aV.m.WIDGET_TOP] || null == i[aV.m.WIDGET_BOTTOM]
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
                                                                    type: aK.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aK.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aK.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(a0),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aY,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == o ? null : { applicationId: a, rendererProps: o }), [a, o]);
        })(x, v),
        w = b?.superseded === !0,
        A = v.what_changed?.trim() ?? "",
        S =
            ((t = v.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === a$(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((o =
                null == (s = aF(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (f = null != (u = v.design_image) && u.id !== aB(v)?.id ? u : null),
            (m = aB(v)),
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
                    null != m && null != g ? { experienceId: g, design: m, size: ez(v.overlay_widget ?? null) } : null,
            }),
        N = i.useMemo(
            () =>
                v.commands.some(aE)
                    ? aR({ ...v, bot: void 0 }, "commands", {
                          message: ev.intl.string(ex.default.J7qggf),
                          reply: ev.intl.string(ex.default.nqYtiy),
                          event: ev.intl.string(ex.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        I = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(x)?.name, [x]),
        E = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(x)?.install_scope === "guild", [x]),
        _ =
            w && null != b
                ? ev.intl.formatToPlainString(ex.default.YZ3qJs, { version: b.version })
                : ev.intl.string(ex.default["3b6e7o"]),
        M = w ? (0, a.jsx)(nT, { children: ev.intl.string(ex.default.hF2c41) }) : null;
    return (0, a.jsxs)(nL, {
        title: _,
        meta: M,
        superseded: w,
        showLabel: ev.intl.string(ex.default.yD8EJS),
        hideLabel: ev.intl.string(ex.default.nSPGNb),
        bodyClassName: i8.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: i8.Qs,
                children: (0, a.jsx)(i2, {
                    appName: I ?? v.experiences?.[0]?.name ?? "",
                    inServer: E,
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(iz, { text: v.summary, commandNames: S }),
                            }),
                            (0, a.jsx)(sl, { projectId: x, proposal: v }),
                            "" !== A
                                ? (0, a.jsxs)("section", {
                                      className: i8.uW,
                                      children: [
                                          (0, a.jsx)(p.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: ev.intl.string(ex.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(p.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(iz, { text: A, commandNames: S }),
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
                                            ? (0, a.jsx)(se, {
                                                  projectId: x,
                                                  design: C.ui.design,
                                                  alt: ev.intl.string(
                                                      null == (t = aF(v)) ? ex.default["3/aHX6"] : aD[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, a.jsx)(st, {
                                                  projectId: x,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(i7, { ...k }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, a.jsx)(iw, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || a_(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, a.jsx)(iq, { projectId: x, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: S,
                }),
            }),
            null == j || w
                ? null
                : (0, a.jsxs)("div", {
                      className: i8.qr,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: ev.intl.string(ex.default["6S+wRM"]),
                              onClick: j,
                          }),
                          (0, a.jsx)(p.E, {
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
var sa = n(289565);
function si(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: sa.m, children: n })
        : (0, a.jsxs)("div", {
              className: sa.Z,
              children: [
                  n,
                  (0, a.jsx)(e7.m, {
                      text: ev.intl.string(ev.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tB.K, {
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
function ss(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function so(e, t) {
    return null != e && ss(t, e.status);
}
let su = new WeakMap();
function sc(e) {
    let { projectId: t, publish: n } = e,
        l = (0, tx.A)(t, n);
    return (0, a.jsx)(d.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sd(e) {
    let { projectId: t, cta: n } = e,
        l = (0, tp.Ay)(t);
    return null != l && so(l, n)
        ? (0, a.jsx)(si, {
              children: (0, a.jsxs)(lp.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(sc, { projectId: t, publish: l }),
                      null != l.failure
                          ? (0, a.jsx)(p.E, {
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
var sf = n(303345),
    sm = n(44255),
    sh = n(416473),
    sg = n(289830);
function sp(e) {
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
                [r, a] = i.useState("idle"),
                [s, o] = i.useState(null),
                u = i.useCallback(async () => {
                    (a("sending"), o(null));
                    try {
                        (await (0, sh.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (o(e instanceof sf.A ? e.message : ev.intl.string(ex.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? ev.intl.formatToPlainString(ex.default.orZDqY, { time: (0, sm.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sm.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? u : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(nR, {
        title: ev.intl.string(ex.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: sg.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sg.z,
                    children: [
                        (0, a.jsx)(p.E, { variant: "body-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(p.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(p.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ev.intl.string(ex.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(p.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: ev.intl.string(ex.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(p.E, {
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
var sx = n(478016),
    sv = n(989271);
function sb(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(e5.D, {
        className: u()(sv.nM, { [sv.f1]: s, [sv.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": ev.intl.formatToPlainString(ex.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sv.jo,
                children: [
                    n
                        ? (0, a.jsx)(sx.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sv.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(p.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: sv.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(p.E, {
                      tag: "div",
                      id: r,
                      variant: "body-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sj(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nR, {
        title: ev.intl.string(ex.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                sb,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var sy = n(313537),
    sk = n(125372);
let sw = {
        add_to_server: ex.default["7SD3ul"],
        remove_from_server: ex.default.ErhKil,
        change_server: ex.default["1E5/ay"],
    },
    sA = {
        add_to_server: ex.default["Wy+mGW"],
        remove_from_server: ex.default.vUWHZe,
        change_server: ex.default.MfnSEe,
    };
var sS = n(831913),
    sC = n(618785);
function sN(e) {
    var t;
    let n,
        l,
        r,
        i,
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
        (l = (0, sy.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === b.action ? b.guild_id : l),
        (i = (0, c.bG)([lF.A], () => lF.A.getGuild(t)?.name, [t]) ?? ev.intl.string(ex.default["6bhivN"])),
        (s = (0, sk.Y)(v).length > 0),
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
                        let [a] = r;
                        return "change_server" === t.action
                            ? null != n &&
                                  a.moved_to_guild_id === n &&
                                  (null == t.guild_id || a.guild_id === t.guild_id)
                            : null == a.moved_to_guild_id && a.guild_id === t.guild_id;
                    })(rE.A.getMessages(v), b, l),
                [v, b, l],
            ) &&
            null != n &&
            ("remove_from_server" === b.action ? !r : r)),
        (u = "change_server" !== b.action || null == b.guild_id || l === b.guild_id),
        (f = null != n && ("add_to_server" === b.action ? !r : r) && u && !o),
        (m = null != n && (0, ts.PV)(n)),
        (h = "remove_from_server" !== b.action),
        (g = f && m ? { kind: b.action, label: ev.intl.string(sw[b.action]), disabled: h && !s } : null),
        (x = null),
        f && !m
            ? (x = ev.intl.string(ex.default.Kt9exT))
            : g?.disabled === !0 && (x = ev.intl.string(ex.default.NXvmoQ)),
        { project: n, action: g, done: o ? ev.intl.formatToPlainString(sA[b.action], { server: i }) : null, note: x }),
        C = b.keep_label,
        N = j && null != w,
        I = N && null != C && null != y,
        E = A ?? (j ? S : null);
    return null != E || N
        ? (0, a.jsxs)(lp.B, {
              gap: 8,
              children: [
                  N
                      ? (0, a.jsxs)(lp.B, {
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
                                                ? (0, sS.A)({ project: k })
                                                : (0, sC.A)({ projectId: v }));
                                    },
                                }),
                                I
                                    ? (0, a.jsx)(d.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: C,
                                          onClick: () => y(C),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != E ? (0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: E }) : null,
              ],
          })
        : null;
}
var sI = n(919790),
    sE = n(908492),
    s_ = n(971824),
    sM = n(162052),
    sR = n(165648);
function sP(e) {
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
        x = i.useMemo(() => (0, ny.Jf)(n, l), [n, l]),
        v = i.useMemo(
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
        return (0, a.jsx)("ol", {
            className: nU.pj,
            "data-live": !1,
            children: (0, a.jsx)(nC.A, {
                glyph: (0, a.jsx)(rX.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
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
        S = ae(k);
    return (0, a.jsxs)("ol", {
        className: nU.pj,
        "data-live": A,
        children: [
            (0, a.jsx)(nA.Ay, {
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
                    : (0, a.jsx)(
                          at,
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
            (0, a.jsx)(am, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: nU.YO,
                      children: (0, a.jsx)(nz, { todos: j, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sT(e) {
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
        P = i.useMemo(
            () => rY({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        q = (A ? S : void 0) ?? P.attachmentsHost,
        F = $ && !A,
        O = null == c ? null : (0, a.jsx)(sI.A, { projectId: t, attachments: c }),
        z = null == O ? null : (0, a.jsx)("div", { className: nU.MT, children: O }),
        G = k
            ? (0, a.jsx)(p.E, {
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
    return (0, a.jsxs)("div", {
        className: nU.ue,
        children: [
            T.length > 0 && !A
                ? (0, a.jsx)("ol", {
                      className: nU.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nU.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sR.PT,
                                          children: (0, sE.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === q && e === L ? z : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(sr, { projectId: t, proposal: r, version: s, onApprove: y })
                : F
                  ? (0, a.jsxs)("div", {
                        className: u()(nU.ky, sM.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: u()(sR.PT, nU.cW),
                                children: (0, sE.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === q ? z : null,
                            G,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: u()(nU.ky, nU.k1, sM.XR, { [s_.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(rN, {
                          projectId: t,
                          cardId: f ?? "",
                          request: d,
                          status: h,
                          awaiting: "open" === h ? m : void 0,
                      }),
                  })
                : null,
            null != g
                ? (0, a.jsx)("div", {
                      className: u()(nU.ky, nU.k1, sM.XR),
                      children: (0, a.jsx)(rF, { projectId: t, request: g, askId: x }),
                  })
                : null,
            "standalone" !== q && ("closing" !== q || F) ? null : O,
            null != v ? (0, a.jsx)(sd, { projectId: t, cta: v }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(sj, { ideas: o, pickedIdeaIds: j, onPick: b }) : null,
            null != C ? (0, a.jsx)(ag, { proposal: C, onRestore: N }) : null,
            null != _ ? (0, a.jsx)(sN, { projectId: t, change: _, current: M, onReply: R }) : null,
            null != I ? (0, a.jsx)(sp, { projectId: t, proposal: I, current: E }) : null,
            F ? null : G,
        ],
    });
}
var sL = n(286251),
    s$ = n(146806),
    sD = n(475358),
    sq = n(783977),
    sF = n(559647),
    sO = n(787564),
    sz = n(339200),
    sG = n(234320),
    sU = n(191023),
    sB = n(285796),
    sK = n(922329),
    sH = n(153171);
function sW(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(sK.p, {
        name: ev.intl.string(ex.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: t3.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sU.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: t3.OY,
                    children: (0, a.jsx)(lm.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(p.E, {
            variant: "body-xs/normal",
            color: "text-muted",
            children: ev.intl.string(ex.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: sH.o1,
            onClick: () => {
                el(t)?.active === !1 ? eo(t) : er(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": ev.intl.string(ex.default.N852dj),
            children: (0, a.jsx)(sB.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function sV(e) {
    let { send: t } = e;
    return (0, a.jsxs)(sK.p, {
        compact: !0,
        name: ev.intl.string(ex.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(p.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: ev.intl.string(ex.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE, className: sH.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(lh.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: ev.intl.string(ex.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var sX = n(587157),
    sY = n(347111),
    sQ = n(120234),
    sZ = n(901173),
    sJ = n(161431),
    s0 = n(46653),
    s1 = n(695184),
    s2 = n(661191),
    s3 = n(475458),
    s4 = n(957071),
    s5 = n(927659),
    s7 = n(351906),
    s8 = n(407653),
    s6 = n(322915);
function s9(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        o = (0, c.bG)([s7.A], () => s7.A.hidePersonalInformation ?? !1),
        u = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      s5.Ay.User,
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
                      s5.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(s8.A, { projectId: n, file: e.file, className: s6.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        m = l.findIndex((e) => "file" === e.kind),
        h = -1 === m ? f : f.slice(0, m),
        g = -1 === m ? [] : f.slice(m);
    return (0, a.jsx)(s5.Ay, {
        id: t,
        className: s6.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": ev.intl.string(ex.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(oe, { titleId: u, title: ev.intl.string(ex.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(oe, { titleId: d, title: ev.intl.string(ex.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function oe(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(p.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: s6.Gf, children: n }),
            l,
        ],
    });
}
var ot = n(719442),
    on = n(355622),
    ol = n(408018),
    or = n(186306),
    oa = n(323350),
    oi = n(35277),
    os = n(68059),
    oo = n(267102),
    ou = n(259691);
let oc = (0, a7.createChannelRecord)({ id: "1", type: lt.rbe.DM });
function od(e) {
    let t = sz.VW.end(e, []);
    return { anchor: t, focus: t };
}
function of(e) {
    return (0, oa.WO)(sz.VW.richValue(e), { mode: "raw" });
}
function om(e, t) {
    ((e.children = (0, ol.x7)(t)), (e.selection = od(e)), e.onChange());
}
function oh(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rB.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(ou.A, { attachmentId: r }), n] });
}
var og = n(366811);
function op(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function ox(e) {
    let t = og.A.getState().path;
    return op(window.location.pathname, e) && (null == t || op(t, e));
}
function ov(e, t) {
    return null != t && (0, tR.vq)(e) && t.contains(e);
}
var ob = n(497437),
    oj = n(465410);
let oy = "body-md/normal",
    ok = null;
function ow(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        o = i.useRef(null),
        d = i.useRef(null),
        f = i.useRef(0),
        [m, h] = i.useState(0),
        [g, x] = i.useState(0),
        [v, b] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
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
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (x(i + a), h(s));
            let u = s + i,
                c = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : u / c;
            b({
                frontFrom: 1e3 * (0, s$._R)(f),
                frontTo: 1e3 * (0, s$._R)(m),
                backFrom: 1e3 * (0, s$.T)(f),
                backTo: 1e3 * (0, s$.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            f.current = d.current?.offsetWidth ?? 0;
        }, [t]));
    let [j, y] = i.useState(0),
        [k, w] = i.useState(null),
        A = i.useRef(!1),
        S = i.useCallback(() => {
            (w(A.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        A.current = n;
    }, [n, t]);
    let C = "in" === k ? v.backFrom : v.frontFrom,
        N = "out" === k ? v.frontTo : v.backTo,
        I = (0, c.bG)([il.Ay], () => il.Ay.useReducedMotion),
        E = t === ev.intl.string(ex.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: u()(ob.VT, { [ob.qk]: l }),
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
            children: (0, a.jsx)(sD.e, { shortcut: "tab", className: ob.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sL.o, {
                text: t,
                variant: oy,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(ob.xM, { [ob.s2]: l }),
                onStart: S,
                onComplete: () => s(t),
            }),
            M(ob.IS, n || (!I && "out" === k), o),
            (0, a.jsx)("span", {
                ref: d,
                className: ob.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(p.E, { variant: oy, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: ob.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(p.E, { variant: oy, tag: "span", className: ob.xM, children: t }),
                          M(ob.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let oA = i.memo(function (e) {
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
                let t = i.useContext(oo.Ay),
                    [n] = i.useState(() => {
                        let n = (0, ot.ie)();
                        return (
                            (n.children = (0, ol.x7)(e)),
                            (n.selection = od(n)),
                            (0, os.a)({
                                editor: n,
                                chatInputType: on.oU.GENERIC_RICH_TEXTAREA,
                                channel: oc,
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
                                    for (let [t, l] of sz.VW.nodes(e, { at: [], match: sz.l5.isText }))
                                        for (let e of t.text.matchAll(rB.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        or.o.withMergedEntry(e, () =>
                                            sz.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    oi.b.textToVoid(
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
            })(rW.A.getDraft(t)),
            [N, I] = i.useState(() => of(C));
        (0, sQ.N$)(N);
        let E = i.useRef(N),
            [_, M] = i.useState(null),
            R = i.useCallback(() => {
                let e = of(C);
                (e !== E.current && ((E.current = e), (0, sY.I)(t, e), I(e)),
                    M(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sz.ZF.isCollapsed(t)) return null;
                            let [n] = sz.VW.node(e, t.anchor.path);
                            return sz.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(C),
                    ));
            }, [C, t]),
            T = i.useCallback((e) => om(C, e), [C]),
            L = "" !== N.trim();
        i.useEffect(() => y?.(L), [L, y]);
        let $ = i.useRef(t);
        i.useLayoutEffect(() => {
            $.current !== t && (($.current = t), om(C, rW.A.getDraft(t)));
        }, [C, t]);
        let D = (0, c.bG)([il.Ay], () => il.Ay.isSubmitButtonEnabled),
            [q, F] = i.useState(!1),
            [O, z] = i.useState(!1);
        (i.useEffect(() => {
            r ? z(!1) : (q && z(!0), F(!1));
        }, [r, q]),
            i.useEffect(() => {
                if (!O) return;
                let e = setTimeout(() => z(!1), oC);
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
            Z = i.useRef(Y);
        i.useEffect(() => {
            let e = Z.current;
            ((Z.current = Y), S && null != e && null != Y && Y !== e && sz.VW.focus(C));
        }, [Y, S, C]);
        let J = "" !== N.trim() || U.length > 0 || j || X,
            ee = S && J && W,
            [en, ea] = i.useState(null);
        i.useEffect(() => {
            if (null == en) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => ea(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [en]);
        let eu = (0, sJ.rU)(t),
            [ec, ed] = i.useState(null),
            [ef, em] = i.useState(0),
            eh = i.useMemo(() => (null != _ && S ? (0, sZ.OG)(_, _.length) : null), [_, S]),
            eg = eh?.start ?? null;
        i.useEffect(() => {
            null == eg ? ed(null) : (0, sJ.IP)(t);
        }, [eg, t]);
        let ep = eg === ec ? null : eh,
            ej = (function (e, t) {
                let n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, s3.yv)(n),
                    a = (0, c.bG)([s0.default], () => s0.default.getId()),
                    s = null != n && (0, eF.pL)(n) ? n.guild_id : void 0,
                    o = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != s && null != o && s1.A.requestMembers(s, o, 100);
                    }, [s, o]),
                    (0, c.yK)(
                        [lq.Ay, lF.A, n6.default],
                        () => {
                            if (null == o) return [];
                            let e = null != s ? lF.A.getGuild(s) : null,
                                t = (t) => (0, sZ.mO)(t, o, null != e ? lq.Ay.getNick(e.id, t.id) : null),
                                i = new Set(n?.collaborator_role_ids ?? []),
                                u = null != e && i.has(s2.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : lq.Ay.getMemberIds(e.id)
                                              .map((e) => n6.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (u ||
                                                          (lq.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              i.has(e),
                                                          ) ||
                                                          lO.$3({
                                                              permission: lt.xBc.MANAGE_GUILD,
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
            })(t, ep?.text ?? null),
            ey = i.useMemo(() => (null == ep ? [] : (0, sZ.l$)(ej, eu, ep.text)), [ep, ej, eu]),
            ek = ep?.text;
        i.useEffect(() => em(0), [ek]);
        let ew = ey.length > 0,
            eA = Math.min(ef, Math.max(0, ey.length - 1)),
            eS = i.useId(),
            eC = i.useCallback(
                (e) => {
                    let t = ey[e];
                    null != ep &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (oi.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                oi.b.insertText(e, `${n} `));
                        })(C, ep.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ey, ep, C],
            ),
            eN = i.useCallback(() => {
                if (!ee) return;
                let e = V(),
                    n = X
                        ? (function (e) {
                              let t = el(e);
                              if (null == t || !Q(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? ei(e);
                              return (
                                  el(e)?.active === !1
                                      ? eo(e)
                                      : er(e, (e) => ({ ...e, history: G, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, eb.Wx)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (nH.set(i, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  a = !1,
                                                  i = !1,
                                                  s = !1;
                                              function o() {
                                                  (async function () {
                                                      if (!(a || i || s)) {
                                                          ((a = !0), e.update("uploading", l));
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
                                                              ((i = !0), e.update("sent", l));
                                                          } catch {
                                                              s || e.update("failed", l);
                                                          } finally {
                                                              a = !1;
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
                                              capture: (t) => (0 === t ? l : ei(e)),
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
                                              send: (n) => (0, eb.dv)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nV(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nH.delete(i),
                                                          window.setTimeout(() => {
                                                              (nV(i, null),
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
                    null == ok && (ok = document.createElement("canvas").getContext("2d"));
                    let i = ok;
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
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(oI(eT.current), eB.current, (0, sZ.Lj)(N));
                ("" !== l && ea(l), T(""), ed(null));
            }, [ee, X, t, N, o, V, T]),
            eI = i.useCallback(
                (e) => {
                    (e.preventDefault(), eN());
                },
                [eN],
            ),
            eE = i.useCallback(() => {
                null != d && !q && (F(!0), d(), S && sz.VW.focus(C));
            }, [d, q, S, C]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (!t) return;
                    let e = ov(document.activeElement, l?.current);
                    function r(t) {
                        e = ov(t.target, l?.current);
                    }
                    function i(t) {
                        var r, i, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            ox(n) &&
                            el(n)?.active !== !0 &&
                            !P(n).active &&
                            ((r = t.target),
                            (i = l?.current),
                            (s = e),
                            ((0, tR.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!ov(r, i) && null == r.closest('input, textarea, [contenteditable="true"]')
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
        })({ active: r && null != d && A, projectId: t, scopeRef: f, onEscape: eE });
        let e_ = (r && null != d) || O,
            eM = null == x || "" !== N || !S || s || j ? null : x,
            eR = i.useCallback(
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
                    if ("Escape" === e.key && r && null != d && ox(t)) {
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
            eP = i.useCallback(
                (e) => {
                    S && K(e);
                },
                [S, K],
            );
        (0, sG.Vo)({
            event: lt.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eP(t);
            },
        });
        let eT = i.useRef(null),
            eL = i.useCallback(() => {
                let e = E.current;
                p?.((0, sZ.Lj)(e), () => {
                    E.current === e && T("");
                });
            }, [p, T]),
            [e$, eD] = i.useState(0),
            [eq, eO] = i.useState(!1);
        i.useEffect(() => {
            if (0 === N.length) return void eO(!1);
            let e = oI(eT.current);
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
            let t = setTimeout(() => eO(!1), oS);
            return () => clearTimeout(t);
        }, [N]);
        let ez = i.useMemo(() => ({ "--custom-glow-x": `${e$}px` }), [e$]),
            eG = eq ? ` ${ob.EB}` : "",
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
            eB = i.useRef(0),
            eK = i.useRef(null),
            eH = i.useCallback((e) => {
                if ((eK.current?.disconnect(), null == e)) return;
                eB.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eB.current = e.clientWidth;
                });
                (t.observe(e), (eK.current = t));
            }, []),
            eW = i.useId(),
            eV = i.useId(),
            eX = null != eM,
            eY = en ?? eM ?? eU,
            eQ = "" === N && "" !== eY;
        return (0, a.jsxs)("form", {
            onSubmit: eI,
            className: ob.DA,
            children: [
                ew
                    ? (0, a.jsx)(s9, {
                          id: eS,
                          projectId: t,
                          suggestions: ey,
                          selectedIndex: eA,
                          onHover: em,
                          onSelect: eC,
                      })
                    : null,
                U.length > 0 || X
                    ? (0, a.jsxs)("div", {
                          className: ob.lN,
                          children: [
                              U.map((e) => (0, a.jsx)(tD.Nl, { draft: e, onRemove: H }, e.localId)),
                              X ? (0, a.jsx)(sW, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${ob.wg} ${ob.LP}${eG}`, style: ez, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${ob.wg} ${ob.L3}${eG}`, style: ez, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: ob.VA,
                    ref: eT,
                    children: [
                        (0, a.jsx)(s4.A, {
                            navId: "conjure-composer-attach",
                            disabled: !S,
                            buttonClassName: `${ob.Y0} ${ob.nu}`,
                            iconClassName: ob.Qu,
                            onAddFiles: B,
                            onImport: g,
                            onSendToOtherProjects: null != p ? eL : void 0,
                        }),
                        eQ
                            ? (0, a.jsx)("div", {
                                  ref: eH,
                                  className: ob.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(
                                      ow,
                                      { text: eY, offering: eX && null == en, typed: null != en },
                                      A ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, a.jsx)(nI.A, { id: eV, children: ev.intl.string(ex.default.ldNl9x) }),
                        (0, a.jsx)(rB.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sO.A, {
                                editor: C,
                                containerClassName: u()(ob.sq, oj.dv),
                                className: ob.jp,
                                readOnly: !S,
                                canFocus: S,
                                onChange: R,
                                onBlur: () => M(null),
                                onKeyDown: eR,
                                onPaste: eP,
                                renderExtraElement: oh,
                                "aria-labelledby": eV,
                                "aria-describedby": eQ ? eW : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ew,
                                "aria-controls": ew ? eS : void 0,
                                "aria-activedescendant": ew ? ((0, s5.aI)(eA) ?? void 0) : void 0,
                            }),
                        }),
                        eQ ? (0, a.jsx)(nI.A, { id: eW, children: eU }) : null,
                        (0, a.jsx)("div", {
                            className: ob.Sz,
                            onMouseDown: e_ ? oN : void 0,
                            children: e_
                                ? (0, a.jsx)(e7.m, {
                                      text: ev.intl.string(ex.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${ob.Y0} ${ob.$E} ${ob.PG}`,
                                          disabled: q || !r,
                                          onClick: eE,
                                          "aria-label": ev.intl.string(ex.default.wiguT0),
                                          children: (0, a.jsx)(rX.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : k?.tierSettings != null && null != w
                                  ? (0, a.jsx)(sX.A, {
                                        settings: k.tierSettings,
                                        tiers: k.tiers,
                                        choices: k.choices,
                                        disabled: !S,
                                        onChange: w,
                                        className: `${ob.Y0} ${ob.$E}`,
                                        icon: (0, a.jsx)(sq.FiltersHorizontalIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                        }),
                        D
                            ? (0, a.jsxs)("div", {
                                  className: ob.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: ob.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: ob.rt,
                                          disabled: !ee,
                                          "aria-label": ev.intl.string(ex.default.rxW2cl),
                                          children: (0, a.jsx)(sF.SendMessageIcon, {
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
    oS = 1500,
    oC = 1e3;
function oN(e) {
    e.preventDefault();
}
function oI(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var oE = n(709753),
    o_ = n(540338);
function oM(e) {
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
var oR = n(986109);
let oP = i.createContext(null);
function oT(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(oP),
        [f, m] = i.useState(() => il.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
        h = i.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: c,
        onAnimationEnd: f ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: u()(oR.xk, { [oR.g5]: f, [oR.Qo]: s, [oR.q3]: o }),
        children: n,
    });
}
let oL = new Map();
function o$(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let oD = "live_behind";
var oq = n(165963);
function oF(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([rI.A], () => null != n && n.length > 0 && rw({ keys: n }, rI.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: ev.intl.string(ex.default.F2yVHg) }
        : null;
}
function oO(e) {
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
let oz = [12e4];
var oG = n(292771);
function oU(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([il.Ay], () => il.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        o = r.find((e) => !e.leaving)?.presentation;
    o !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = i.useRef(null),
        f = i.useRef(null),
        m = i.useRef(null),
        h = i.useRef(o);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = f.current,
            s = m.current,
            u = r?.offsetHeight ?? 0,
            c =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((f.current = c), (m.current = u));
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
            className: oG.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: u()(oG.qd, e.leaving ? oG.dv : oG.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function oB(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var oK = n(247171);
function oH(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: u()(oK.row, r),
        children: [
            (0, a.jsx)(p.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: u()(oK.gutter, oK[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: oK.content, children: i }),
        ],
    });
}
var oW = n(830205);
function oV(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(oH, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: oW.aK,
        children: (0, a.jsxs)("div", {
            className: oW.n8,
            children: [
                (0, a.jsx)(p.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: oW.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: oW.X8,
                          children: (0, a.jsx)(e7.m, {
                              text: ev.intl.string(ev.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tB.K, {
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
function oX(e) {
    let { projectId: t } = e,
        n = i.useContext(tp.bI);
    return (0, a.jsx)(oV, {
        icon: iB.ShieldIcon,
        children: ev.intl.format(ex.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tp.vL)(t, n.guildId));
            },
        }),
    });
}
var oY = n(443865),
    oQ = n(716502);
function oZ(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(oH, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: oQ.Nr,
        children: (0, a.jsxs)("section", {
            className: oQ.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: oQ.X8,
                          children: (0, a.jsx)(e7.m, {
                              text: ev.intl.string(ev.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tB.K, {
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
function oJ(e) {
    let { children: t } = e;
    return (0, a.jsx)(p.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: oQ.DD,
        children: t,
    });
}
function o0(e) {
    let { children: t } = e;
    return (0, a.jsx)(p.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: oQ.rf,
        children: t,
    });
}
function o1(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: oQ.o1, children: t });
}
var o2 = n(95635);
function o3(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, tx.A)(t, n);
    return (0, a.jsx)(oV, {
        icon: o2.UploadIcon,
        onDismiss: l,
        children: ev.intl.format(ex.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let o4 = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && oB(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(oX, { projectId: n });
        },
    },
    {
        id: oD,
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
                (null != n.publishCta && so(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(oD)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(o3, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || oB(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(oZ, {
                icon: oY.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(oJ, { children: ev.intl.string(ex.default.OJlbhX) }),
                    (0, a.jsx)(o0, { children: ev.intl.string(ex.default["3vJBni"]) }),
                    (0, a.jsx)(o1, {
                        children: (0, a.jsx)(d.$, {
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
var o5 = n(817921);
function o7(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, tp.Ay)(e),
                    o = (0, c.bG)([n6.default], () => n6.default.getCurrentUser()?.id),
                    u = t.at(-1),
                    d = null != u ? Math.max(u.created_at, u.finished_at ?? 0, u.settled_at ?? 0) : null,
                    f = (function (e, t) {
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
                    h = null == m || oO(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === o$(t, g.created_at, o) ? g.id : null,
                    x = u?.projectEvent?.type === "remixed" ? u.projectEvent : null,
                    v = x?.id ?? p,
                    b = oF(e, x),
                    j = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([rI.A], () => j > 0 && null == rI.A.getSettings(e), [j, e]),
                    k = (0, oE.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, nk.Ji)(t)) || !!(0, nk.B0)(t, t.lastIndexOf(a))) &&
                        (null == m || !oO(m)) &&
                        null == oM(t) &&
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
                        let l = oL.get(`${e}:${n}`);
                        return null != l ? o$(t, l, o) : null;
                    },
                    isDismissed: (t) => (0, oq.VS)(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, oz);
            (0, oq.$p)();
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
                                oL.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                u.map((e) => ({
                    ...e,
                    options: {
                        context: a,
                        dismiss: null != e.tip.dismissal ? () => (0, oq.qv)(e.tip, t, a.ideasIntroAnchorId) : void 0,
                    },
                }))
            );
        })(o4, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(oT, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: o5.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(oU, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var o8 = n(52133),
    o6 = n(732159),
    o9 = n(888366),
    ue = n(862026),
    ut = n(291192);
function un(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, ue.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: ut.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: ut.Sp,
                children: [
                    (0, a.jsx)("span", { className: ut.q3 }),
                    (0, a.jsxs)("span", {
                        className: ut.g8,
                        children: [
                            (0, a.jsx)(o9.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(p.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: ut.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ut.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(lh.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, eE.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(o6.u, {
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
                        ? (0, a.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var ul = n(345942),
    ur = n(727419),
    ua = n(576705);
function ui(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            ev.intl.format(n ? ex.default.esEGL5 : ex.default["XrN+Bg"], {
                onOpen: () => ur.A.open(t, lt.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var us = n(976860);
function uo(e) {
    return (0, c.bG)([ts.Ay, a3.A], () => {
        let t = ts.Ay.getProject(e);
        return null == t ? "" : (a3.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uu = n(951465),
    uc = n(369455);
function ud(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: o } = e,
        u = uo(s),
        d =
            null ==
            (i = (0, c.bG)([ts.Ay, lF.A], () => {
                let e = ts.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lF.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        f = (0, c.cf)([ts.Ay, th.A, lF.A, ua.A], () => {
            let e = ts.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eF.q7.AUTOMOD) === !0 ||
                    th.A.getPublishStatus(s)?.surface === "automod",
                n = lF.A.getGuild(e.guild_id),
                l = null != n && ua.A.can(lt.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(p.E, {
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
                        null != d && (0, ul.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, a.jsx)(ui, { guildId: f.guildId, update: o.update })
                : !f.automod && o.update && null != o.published_revision
                  ? (0, a.jsx)(uf, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function uf(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tp.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [th.A, ts.Ay],
                    () => {
                        let r = th.A.getPublishStatus(e),
                            a = ts.Ay.getProject(e);
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
                                (0, ts.jf)(a),
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
                      ? ev.intl.format(ex.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    e5.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uc.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, us.pX)(lt.BVt.CHANNEL(t, n, l));
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
                                        a = null == r ? null : (0, tp.KL)(r, l);
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
                                null != e && (0, uu.A)(e);
                            },
                        }),
              ],
          });
}
var um = n(73153),
    uh = n(505527),
    ug = n(367790),
    up = n(354777),
    ux = n(491182),
    uv = n(74096),
    ub = n(549587),
    uj = n(448368),
    uy = n(21299),
    uk = n(538355),
    uw = n(715628),
    uA = n(752636),
    uS = n(9842),
    uC = n(589022),
    uN = n(967198),
    uI = n(531685),
    uE = n(503275);
let u_ = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function uM(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function uR(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function uP(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = uR(e, t),
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
    if (uM(r) && uM(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && uM(uR(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function uT(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([il.Ay], () => il.Ay.useReducedMotion),
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
                      for (; a > 0 && uP(t, a);) a--;
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
    let f = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
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
                                    for (; l > t + 1 && n - l < 12 && u_.has(e.charAt(l - 1));) l--;
                                    return u_.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && uP(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
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
var uL = n(624479),
    u$ = n(890377),
    uD = n(92446),
    uq = n(957565),
    uF = n(180227);
function uO(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: u()(uF.QE, { [uF.Rn]: t }),
              children: (0, a.jsx)(iM.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          iM.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function uz(e) {
    return uq.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: ev.intl.string(ev.t.JrGD7E), icon: uL.CopyIcon, onClick: () => (0, uq.C)(e) }]
        : [];
}
function uG(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: ev.intl.string(ex.default.CXtLD2),
                          tooltip: ev.intl.string(ex.default.DOb1HM),
                          icon: u$.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: ev.intl.string(ex.default.urZwpN),
                          icon: e8.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(uO, { groupStart: n, actions: [...r, ...uz(t)] });
}
function uU(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: ev.intl.string(ex.default.H8Jfhu), icon: tW.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: uD.BugIcon, onClick: r }];
    return (0, a.jsx)(uO, { groupStart: n, actions: [...i, ...uz(t), ...s] });
}
let uB = (0, a7.createChannelRecord)({ id: "conjure-builder", type: lt.rbe.DM }),
    uK = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function uH(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: u()(uF.Yq, { [uF.x1]: t }), children: e });
}
function uW(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let uV = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function uX(e, t, n) {
    let { content: l } = (0, uk.A)(e, uV),
        r = i.useMemo(() => ((0, rB.aW)(e.content) ? (0, up.z2)(sE.U, e, uV).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: uB, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(uv.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, uw.A)(s, r);
}
function uY(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, uy.m)(e, uB, t.usernameProfile, l),
        o = (0, uy.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([uN.A], () => uN.A.getGuildId()),
        d = (0, c.bG)([n6.default], () => n6.default.getCurrentUser()),
        f = i.useCallback(
            (t) => {
                let n = n6.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(uC.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
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
let uQ = { formatInline: !0, allowGameMentions: !0 };
function uZ(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, uk.A)(n, uQ),
        o = i.useMemo(() => {
            let e = "" === n.content ? null : (0, rB.aW)(n.content) ? (0, up.z2)(sE.U, n, uQ).content : s;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: uF.GV,
                              children: [
                                  (0, a.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: uF.Rj,
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
        f = (0, iE.X4)(n),
        m = (0, iE.X4)(t),
        g = uY(n);
    return (0, a.jsx)(uj.A, {
        repliedAuthor: f,
        baseAuthor: m,
        baseMessage: t,
        channel: uB,
        referencedMessage: { state: uS.a.LOADED, message: n },
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
function uJ(e) {
    let { message: t, author: n } = e,
        l = uY(t);
    return (0, a.jsx)(ub.Ay, {
        message: t,
        channel: uB,
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
function u0(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, uE.vm)(l),
        c = i.useMemo(() => (0, iE.FT)(u, null), [u]),
        d = i.useMemo(() => E(t), [t]),
        f = d?.body ?? t,
        m = (0, sZ.Qu)(f),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, a5.Ay)({ channelId: uB.id, content: f, author: u });
            return (0, a4.rh)({ ...e, timestamp: uW(n, e.timestamp), state: lt.cmJ.SENT });
        }, [f, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              u1,
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
function u1(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = uX(t, l);
    return (0, a.jsx)(ux.A, {
        className: uF.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(uJ, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: uF.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: uF.GV,
                              children: [
                                  (0, a.jsx)(h.ExperimentalDirectSelectIcon, {
                                      className: uF.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: uF.WO, children: u }),
                      ],
                  }),
        childrenAccessories: uH(i, "" !== l),
        childrenButtons: (0, a.jsx)(uG, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function u2(e) {
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
        { text: f, revealing: m } = uT(t, { streaming: (0, c.bG)([uI.A], () => u && uI.A.isFocused(), [u]) }),
        h = i.useMemo(() => (0, iE.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, uE.vm)(p),
        v = i.useMemo(() => (null == r ? null : E(r.content)), [r]),
        b = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, a5.Ay)({ channelId: uB.id, content: v?.body ?? r.content, author: x });
            return (0, a4.rh)({ ...e, id: r.id, timestamp: uW(r.createdAt, e.timestamp), state: lt.cmJ.SENT });
        }, [r, v, x]),
        j = i.useMemo(() => (null == r ? void 0 : { channel_id: uB.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, a5.Ay)({ channelId: uB.id, content: "", author: uK })),
        k = i.useMemo(
            () =>
                (0, a4.rh)({
                    ...y,
                    timestamp: uW(n, y.timestamp),
                    state: lt.cmJ.SENT,
                    ...(null != j ? { type: lt.lAJ.REPLY, message_reference: j } : {}),
                }),
            [y, n, j],
        ),
        w = i.useMemo(() => k.set("content", f), [k, f]),
        A = i.useMemo(
            () => (0, uA.A)({ message: k, channel: uB, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        S = uX(w, f, uF.OS);
    return (0, a.jsxs)("div", {
        className: uF.$4,
        "data-replying": null != b ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(ux.A, {
                className: uF.yE,
                author: g,
                childrenRepliedMessage:
                    null == b
                        ? null
                        : (0, a.jsx)(uZ, { baseMessage: k, referenced: b, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: S,
                childrenAccessories: uH(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            o ? (0, a.jsx)("img", { className: uF.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var u3 = n(981879);
function u4(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, a4.rh)(
                    { ...(0, a5.Ay)({ channelId: uB.id, content: "" }), id: `conjure:${t}`, state: lt.cmJ.SENT },
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
                (um.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: uB.id,
                    messageId: l.id,
                    users: [uK],
                    emoji: e,
                    reactionType: uh.v6.NORMAL,
                }),
                    um.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: uB.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: uh.v6.NORMAL,
                    }));
            }
            return (
                t(),
                um.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    um.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: u3.H,
            children: (0, a.jsx)(ug.A, {
                message: l,
                channel: uB,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var u5 = n(442433);
n(775443);
var u7 = n(990779),
    u8 = n(155899),
    u6 = n(165862),
    u9 = n(477782);
function ce(e) {
    let { onSelect: t, onClose: n = u5.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(u6.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": ev.intl.string(ev.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(u9.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(u9.Dr, {
                          id: "restore-version",
                          label: ev.intl.string(ex.default.H8Jfhu),
                          icon: tW.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(u9.Dr, { id: "view-trace", label: "View Trace", icon: uD.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function ct(e) {
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
        y = null != j && null != x ? () => cn(j, x) : void 0,
        k =
            ((t =
                eA() && "assistant" === b.role && (0, nk.BL)(b)
                    ? (b.turn_id ?? b.steps.find((e) => null != e.turn_id)?.turn_id ?? b.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [u7.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : u7.A.getTimingTraces(l).findLast((e) => {
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
    return (0, a.jsx)(oT, {
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
                          void (0, u5.jA)(t, (e) => (0, a.jsx)(ce, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(u2, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(uU, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: y,
                onViewTrace: w,
            }),
            content: n.content,
            createdAt: b.created_at,
            replyTo: r,
            onJumpToReplied: null != A && null != i ? () => i(A) : void 0,
            accessories: (0, a.jsx)(sT, {
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
                              cn(
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
function cn(e, t) {
    (0, u8.F)({ onConfirm: () => t(e) });
}
var cl = n(288539),
    cr = n(677683),
    ca = n(677690),
    ci = n(159711);
function cs(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([cr.A], () => cr.A.getOutcome(l))),
            (n = (0, c.bG)(
                [n7.A, n6.default, n8.A],
                () => {
                    let e = t?.status === "pinned" ? n7.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, n5.m1)(e, n6.default, n8.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = ev.intl.string(ex.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(nR, {
              title: s,
              children: (0, a.jsx)(p.E, {
                  className: ci.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? ev.intl.formatToPlainString(ex.default.gKe6Lw, { channelName: i ?? "" })
                          : ev.intl.string(ex.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(nR, { title: s, children: (0, a.jsx)(co, { projectId: l }) });
}
function co(e) {
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
                        [lD.A, ua.A],
                        () =>
                            null == t
                                ? []
                                : lD.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === lt.rbe.GUILD_VOICE && ua.A.can(lt.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, a] = i.useState(null),
                [s, o] = i.useState(!1),
                [u, d] = i.useState(!1),
                f = l.find((e) => e.id === r) ?? null,
                m = n?.application_id,
                h = i.useCallback(async () => {
                    if (null == f || null == m) return;
                    (o(!0), d(!1));
                    let t = await (0, ca.pk)(f.id, m);
                    (o(!1), t ? (0, ca.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = i.useCallback(() => (0, ca.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: f,
                setPicked: a,
                pinning: s,
                failed: u,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, lM.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: ci.r,
        children: (0, a.jsxs)(lp.B, {
            gap: 12,
            children: [
                (0, a.jsx)(p.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: ev.intl.string(ex.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(n0.Z, {
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
                    : (0, a.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ev.intl.string(ex.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: ci.o,
                    children: [
                        (0, a.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: ev.intl.string(ex.default.Iw0l8o),
                            disabled: o,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, a.jsx)(d.$, {
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
function cu(e, t, n) {
    return (0, a.jsx)(cl.A, { userId: e, content: `@${t}` }, n);
}
function cc(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, uE.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([n6.default], () => (null == l ? null : n6.default.getUser(l)), [l]),
                a = (0, a6.tx)(r),
                s = uo(e),
                o =
                    (0, c.bG)([lF.A], () => (null == t.guild_id ? null : lF.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    ev.intl.string(ex.default.R1tPlP),
                u = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([lF.A], () => (null == u ? null : lF.A.getGuild(u)?.name), [u]),
                f = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
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
        })(t, n, cu),
        r = oF(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(cs, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(p.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rF, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let cd = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    nW.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rB.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(oT, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(u0, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(sI.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(sV, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(u4, { messageId: o.id, reaction: o.agentReaction })
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
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(oT, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(u2, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(sI.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(oT, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sP, {
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
                    return (0, a.jsx)(oT, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(u2, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(ud, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(oT, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(u2, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cc, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(oT, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(un, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(oT, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sP, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(oT, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sP, {
                            projectId: l,
                            steps: cf,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(ct, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, o8.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, o8.A)(e.row, t.row, ["message"]) &&
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
                (0, o8.A)(e.replyTo, t.replyTo) &&
                (0, o8.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cf = [],
    cm = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    ch = new WeakMap();
function cg(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cp(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cx = ["wheel", "touchstart", "pointerdown", "keydown"];
function cv(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cb = i.memo(function (e) {
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
        S = i.useRef(null),
        [C, N] = i.useState(null),
        I = i.useCallback((e) => {
            ((S.current = e), N(e));
        }, []),
        [E, _] = i.useState(null),
        M = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(M.current), []);
    let R = i.useCallback((e) => {
            (_(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => _(null), 1600)));
        }, []),
        P = (0, c.bG)([th.A], () => th.A.getPublishStatus(t)),
        T = (0, c.bG)([n6.default], () => n6.default.getCurrentUser()?.id),
        L = i.useMemo(() => {
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
                        a = null != r.clarification && r.clarification.id === t,
                        i = ch.get(r);
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
                        let a = !(0, nk.BL)(e),
                            i = rY({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, ny.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, ny.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            f = !1;
                        for (let n of o) {
                            if (null != n.prose && cm.test(n.prose.content)) f = !0;
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
                                        turnActive: nw(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = cm.test(e.content ?? "");
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
                            (i.showsClosingMessage && !m) ||
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
                    (ch.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return ss(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = su.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), su.set(t, n)), n);
                      })),
                h,
            );
        }, [n, P, h]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, q] = i.useState(null),
        F = (function (e, t, n) {
            if (null == t) return cg(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cp(e, t.endKey, t.end - 1) + 1,
                a = cp(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cg(e, a, r));
        })($, D, y),
        O = i.useRef(F),
        z = i.useRef($),
        G = i.useRef(L),
        U = i.useRef(null),
        B = i.useRef(null),
        K = i.useRef(new Set()),
        H = i.useRef(null),
        W = i.useRef(!1),
        V = i.useCallback(() => {
            let e = b.current?.getScrollerNode(),
                t = W.current ? cv(S.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [b]);
    i.useLayoutEffect(() => {
        let e = b.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            W.current = !1;
        };
        for (let n of cx) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cx) e.removeEventListener(n, t);
        };
    }, [b]);
    let X = i.useCallback(() => {
            let e = b.current?.getScrollerNode(),
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
            U.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [b]),
        Y = i.useCallback(() => {
            let e = b.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cg(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cg(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cg(e, i, t.end) : null;
            })(z.current, O.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: j.current,
            });
            "older" === n ? (0, eb.P6)(t) : null != n && q(n);
        }, [b, j, t]);
    i.useImperativeHandle(
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
                if (!z.current.includes(n.key)) return !1;
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
    let Q = i.useRef(null),
        Z = i.useCallback(
            (e) => {
                var n;
                let l;
                ((Q.current = null), (W.current = !1));
                let r = S.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (k(), q(O.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), R(e));
                    return;
                }
                let a = G.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, eb.P6)(t) && (Q.current = e);
                    return;
                }
                (k(),
                    (B.current = () => {
                        (S.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            R(e));
                    }),
                    q(((n = z.current), cg(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [R, k, t],
        );
    (i.useEffect(() => {
        let e = Q.current;
        null != e && Z(e);
    }, [L, Z]),
        i.useLayoutEffect(() => {
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
    (i.useEffect(() => A?.(J), [J, A]),
        i.useLayoutEffect(() => {
            ((O.current = F), (z.current = $), (G.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = b.current?.getScrollerNode(),
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
                    })(H, t, n);
            if (null != e && null != l) {
                let t = U.current;
                if (r && j.current && null != cv(l)) (k(), q(O.current), (W.current = !0), V());
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
    let ee = i.useMemo(() => oM(n), [n]),
        et = i.useMemo(
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
        en = i.useMemo(
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
        el = i.useMemo(
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
        ea =
            (er?.role !== "assistant" || null == er.awaitingUser || null == er.secretRequest
                ? null
                : (0, nk.BL)(er)
                  ? er.awaitingUser
                  : null) ?? void 0,
        ei = (0, c.bG)([rI.A], () => rI.A.getSettings(t)?.secrets, [t]),
        es = (0, oE.WT)(t),
        eo = i.useMemo(() => (0, rv.Mv)(n, ei), [n, ei]);
    if (!(0, nk.i_)(n)) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: u()(oR.x7, oR.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: oR.Ub, children: (0, a.jsx)(x.y, {}) }),
            });
        let e = "unavailable" === l ? ex.default.Td4Sf4 : ex.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: oR.x7,
            children: (0, a.jsx)(oT, { role: "assistant", children: (0, a.jsx)(u2, { content: ev.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(oP.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: I,
            className: oR.x7,
            children: [
                L.slice(F.start, F.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cd,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && E === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === er;
                    return (0, a.jsx)(
                        cd,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? el.get(n.in_reply_to) : void 0,
                            onJumpTo: Z,
                            planVersion: et.get(n.render_id),
                            pickedIdeaIds: en.get(n.render_id),
                            secretRequestAwaiting: l ? ea : void 0,
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
                          (0, a.jsx)(
                              oT,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(u2, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(o_.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ea && J
                    ? (0, a.jsx)(oT, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(u2, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(p.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ev.intl.string(ex.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                J ? (0, a.jsx)(o7, { projectId: t, messages: n, draftHasText: !0 === o, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cj = n(731084),
    cy = n(336288),
    ck = n(187447);
function cw(e) {
    let { activity: t, id: n } = e,
        l = (0, nj.j)(),
        { text: r, revealing: s } = uT(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null),
        c = i.useRef(!0),
        d = i.useRef(0),
        f = i.useCallback(() => {
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
            className: ck.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nx.Ch, {
                ref: o,
                onScroll: f,
                className: ck.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: u()(sR.PT, ck.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: io.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cA = n(53659);
function cS(e) {
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
        g = i.useRef(null),
        x = i.useId(),
        [v, b] = i.useState(null),
        j = (0, cj.xu)({
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
        k = j === cj.kx["0"],
        [w, A] = i.useState(m ?? y),
        S = (0, nj.j)();
    (l || (0, cj.E4)(y, w) || (!S && !k)) && w !== y && A(y);
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
        ((E.current = k), !k && (0, cj.E8)(I.current) && A(C.current));
    }, [k]),
        i.useEffect(() => {
            if (!S) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, cj.E8)(I.current) ? _.current + 1 : 0), A((0, cj.Ov)(_.current)))
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
        T = i.useCallback(() => {
            M && null != R && b((e) => (e === R ? null : R));
        }, [M, R]),
        L = i.useCallback(() => b(null), []);
    return (0, a.jsx)(tb.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(cw, { id: x, activity: t }),
        children: () =>
            (0, a.jsxs)(e5.D, {
                innerRef: g,
                className: u()(cA.hF, M && cA.Xd),
                "aria-label": ev.intl.string(
                    r
                        ? ex.default.qqlUiW
                        : j === ex.default.j8tmjK
                          ? ex.default.j8tmjK
                          : k
                            ? cj.kx["0"]
                            : ex.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? x : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": ev.intl.string(j),
                onClick: T,
                children: [
                    (0, a.jsx)("span", {
                        className: cA.bl,
                        children: (0, a.jsx)(cy.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cA.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: S
                            ? (0, a.jsx)(sL.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: cA.yE,
                              })
                            : (0, a.jsx)(p.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: cA.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cC = { second: 1e3, minute: 6e4 };
function cN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cC[t];
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
var cI = n(719374);
function cE(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = cN(t);
    return (0, a.jsx)(p.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cI.$,
        "data-conjure-turn-timer": !0,
        children: (0, r5.C7)(l),
    });
}
function c_(e) {
    let { startedAt: t } = e,
        n = cN(t, "minute");
    return (0, a.jsx)(nI.A, { role: "timer", children: (0, r5.Us)(n) });
}
var cM = n(885574),
    cR = n(242779),
    cP = n(436804);
function cT(e) {
    return e.toLocaleString();
}
function cL(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cP.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cP.mf,
                children: [
                    (0, a.jsx)(p.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cT((0, cR.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(p.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cT(n.input_tokens),
                    " in \xb7 ",
                    cT(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cT(n.cache_creation_input_tokens)} cache write \xb7 ${cT(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function c$(e) {
    let { project: t } = e,
        n = (0, cR.wU)(t.compaction),
        l = (0, cR.wU)(t.classifier),
        r = (0, cR.wU)(t.image),
        i = (0, cR.wV)(t.orchestrator, t.codegen),
        s = (0, cR.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cP.si,
        role: "dialog",
        "aria-label": ev.intl.string(ex.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cP.Q$,
                children: (0, a.jsxs)("div", {
                    className: cP.mf,
                    children: [
                        (0, a.jsxs)(p.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cT((0, cR.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(p.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cL, { label: ev.intl.string(ex.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cL, { label: ev.intl.string(ex.default.ANCEo3), usage: n }),
            (0, a.jsx)(cL, { label: ev.intl.string(ex.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cL, { label: ev.intl.string(ex.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cP.mf,
                children: [
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: ev.intl.string(ex.default["8OUg09"]),
                    }),
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cR.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cR.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cD(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tb.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(c$, { project: t }),
        children: (e) =>
            (0, a.jsx)(e5.D, {
                innerRef: n,
                className: cP.Y$,
                "aria-label": ev.intl.string(ex.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cM.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cq = n(990250);
function cF(e) {
    let { queued: t } = e,
        n = ev.intl.string(ex.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cq.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cq.wx,
                children: [
                    (0, a.jsx)(p.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(nx.Ch, {
                className: cq.XG,
                children: (0, a.jsx)("ul", {
                    className: cq.p_,
                    children: t.map((e) => (0, a.jsx)(cO, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cO(e) {
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
              className: cq.AS,
              children: (0, a.jsx)(p.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: ev.intl.string(ex.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cq.AS,
              children: [
                  (0, a.jsx)(p.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cq.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(lh.Q, {
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
function cz(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(tb.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cF, { queued: t }),
        children: (e) =>
            (0, a.jsx)(e5.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(p.E, {
                    tag: "span",
                    variant: "body-xs/medium",
                    color: "text-muted",
                    children: ev.intl.formatToPlainString(ex.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cG = n(997421);
function cU(e) {
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
        [j, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, cj.E8)(e) || e === ev.intl.string(ex.default.mKK6wB) || e === ev.intl.string(ex.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, cj.uc)(h),
        A = null != s,
        S = s ?? (n ? l : void 0),
        C = n || r || A || !0 === m;
    return (0, a.jsxs)("div", {
        className: cG.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cG.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || o || v || b
                        ? (0, a.jsx)(cS, {
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
                    null != S ? (0, a.jsx)(cE, { startedAt: S }) : null,
                ],
            }),
            null != S ? (0, a.jsx)(c_, { startedAt: S }) : null,
            0 === x.length ? null : (0, a.jsx)(cz, { queued: x, className: u()(cG.BP, cG.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cG.BP,
                      children: [
                          (0, a.jsx)(p.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(cD, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(p.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": ev.intl.formatToPlainString(ex.default["tCo+ZM"], { status: (0, cj.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cG.XF,
                      children: (0, cj.Db)(g),
                  }),
        ],
    });
}
var cB = n(698638),
    cK = n(608711);
let cH = [ev.intl.string(ex.default["9w+Chc"]), ev.intl.string(ex.default.WAvmdq), ev.intl.string(ex.default.SKsrzl)];
function cW(e) {
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
        I = i.useRef(null),
        E = i.useRef(null),
        _ = i.useRef(null),
        M = i.useRef(null),
        {
            stickToBottomRef: R,
            pinned: P,
            atBottom: T,
            unpin: L,
            releasePinHold: $,
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
                f = i.useRef(!0),
                m = i.useCallback((e) => {
                    ((f.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of cx) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of cx) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && f.current;
                t.current = i;
                let o = r > 1 || !f.current;
                (a((e) => (!o === e ? e : !o)), l((e) => (e === i ? e : i)));
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
        U = i.useCallback(() => {
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
        B = i.useCallback(() => {
            (G(), _.current?.handleScroll());
            let e = M.current;
            null != e && (e.position = R.current ? null : (_.current?.snapshot() ?? null));
        }, [G, R]),
        K = i.useContext(eT.A) === f;
    i.useLayoutEffect(() => {
        if (!K) return;
        let e = { position: e$.A.getProjectView(f).chatScroll };
        return ((M.current = e), () => (0, eL.g7)(f, { chatScroll: e.position }));
    }, [K, f]);
    let H = i.useRef(!K);
    (i.useLayoutEffect(() => {
        if (H.current || !(0, nk.i_)(b)) return;
        H.current = !0;
        let e = e$.A.getProjectView(f).chatScroll;
        null != e && _.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [b, f]),
        i.useLayoutEffect(() => {
            let e = I.current;
            if (null == e) return;
            let t = E.current?.getScrollerNode(),
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
                    r && (R.current ? E.current?.scrollToBottom() : _.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [R]),
        i.useEffect(() => {
            (0, eb.ensureConnection)(f);
        }, [f]),
        (0, rH.E1)(f, (0, nj.j)()));
    let W = z(f),
        V = (function (e) {
            let t = (0, tp.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lF.A], () => (null == n ? null : (lF.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: ev.intl.format("channel" === s ? ex.default["1cm4fj"] : ex.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(f),
        X = (function (e) {
            let t = (0, c.bG)([rz.A], () => rz.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rG.format(t.limitUsd);
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
            (r = i.useCallback(() => (0, rx.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: ev.intl.format(ex.default.Up6Ssw, { reason: l }),
                      retry: { text: ev.intl.string(ex.default["ywA+ET"]), onClick: r },
                  }),
        Q = (0, ru.E8)(f),
        Z = (0, c.bG)([rp.A], () => rp.A.getSetupStartedAt(f), [f]),
        J = i.useCallback(
            (e, t) => {
                (0, eb.dv)(f, e, t);
            },
            [f],
        ),
        ee = i.useCallback(
            (e, t, n) => {
                let l = n ?? J;
                0 === W.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => w(e.comment)),
                                  a = [];
                              if (
                                  (a.push(
                                      `My design feedback: ${1 === r.length ? "1 comment" : `${r.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (a.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      a.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              r.forEach((e, t) => {
                                  let n;
                                  (a.push(""),
                                      a.push(`${t + 1}. ${C(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: W.annotations, metaComment: e, context: W.context }),
                          t,
                      ),
                      D(f));
            },
            [W, J, f],
        ),
        et = i.useCallback(() => {
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
        en = i.useCallback((e) => (0, nY.RQ)(f, e.implementation_prompt), [f]),
        el = i.useCallback((e) => (0, nY.RQ)(f, e), [f]),
        [er, ea] = (function (e) {
            let [t, n] = i.useState(() => rV(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rV(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(f),
        ei = i.useCallback(() => J(ev.intl.string(ex.default["t5CN3+"])), [J]),
        es = i.useCallback((e, t, n) => (0, nY.RQ)(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        eo = i.useCallback((e) => (0, ro.X)(f, e), [f]),
        eu = i.useCallback((e) => (0, tT.vX)(f, e), [f]),
        ec = i.useCallback((e) => (0, tD.gn)(f, "chat", Array.from(e), eu), [f, eu]),
        ed = i.useCallback(() => (0, nY.RQ)(f, ev.intl.string(ex.default.Zc7gML)), [f]),
        ef = m?.status === "restoring",
        em = "open" === j && !ef,
        eg = b[b.length - 1],
        ep = null != eg && "assistant" === eg.role && null != eg.proposal,
        [ej, ey] = i.useState(null),
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
        ew = null != ek && ek.id !== ej ? ek : null,
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
                                summary: ev.intl.string(ex.default["o2++BO"]),
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
        eI = eg?.appBuildRequest != null && (0, nk.BL)(eg) && eg.appBuildRequest.id !== eS ? eg.appBuildRequest : null,
        eE = eN.request ?? (null == ew ? eI : null),
        e_ = null == eN.request ? ew : null,
        eM = null != eE && eE === eN.request,
        { close: eR, sent: eP } = eN,
        eD = eN.request?.id,
        eq = i.useCallback(() => {
            eM ? eR() : null != eE && eC(eE.id);
        }, [eE, eM, eR]),
        eF = i.useCallback(
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
        [ez, eG] = i.useState(null),
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
            eg.id !== ez &&
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
        eV = i.useCallback(() => {
            null != eK && eG(eK.id);
        }, [eK]),
        eX = null != eW,
        [eY, eQ] = i.useState(null),
        eZ = eO?.secrets,
        eJ = i.useMemo(() => (0, rv.Qr)(b, (0, rv.Mv)(b, eZ)), [b, eZ]),
        e0 = null != eJ && eJ.render_id !== eY ? eJ : null,
        e1 = null == e_ && null == eE ? e0 : null,
        e2 = i.useCallback(() => {
            null != e0 && eQ(e0.render_id);
        }, [e0]),
        [e3, e4] = i.useState(null),
        e5 = e_?.id ?? eE?.id ?? e1?.render_id ?? eH?.id,
        e6 = null != ew || null != eE || null != e0 || null != eK;
    i.useLayoutEffect(() => {
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
    let e9 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([rE.A], () => rE.A.hasLoadedHistory(f), [f]),
            historyUnavailable: (0, c.bG)([rE.A], () => rE.A.isHistoryUnavailable(f), [f]),
            connState: j,
        }),
        te = !(0, nk.i_)(b),
        tt = "loading" === e9 && te,
        tn = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return cH[e % cH.length];
        }, [f]),
        tl = ep ? ev.intl.string(ex.default.Zc7gML) : "greeting" === e9 && te ? tn : null,
        tr = i.useMemo(() => {
            for (let e = b.length - 1; e >= 0; e--) {
                let t = b[e];
                if ("assistant" === t.role && !(0, nk.BL)(t)) return t;
            }
        }, [b]),
        ta = null != tr,
        ti = i.useMemo(() => b.filter((e) => "user" === e.role && "queued" === e.disposition), [b]),
        ts = null != tr ? (0, rU.S)(tr) : void 0,
        to = ep && em ? ed : void 0,
        tu = i.useCallback(() => (0, nY.RQ)(f, ev.intl.string(ex.default.EMgIuY)), [f]),
        [tc, td] = i.useState(null),
        [tf, tm] = i.useState(ta);
    (tf !== ta && (tm(ta), ta || td(null)),
        i.useEffect(() => {
            if (!ta) return;
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
        }, [ta, tr?.steps, q]));
    let th = q ? tc : "bottom",
        tg = i.useMemo(() => (null != tr ? (0, nA.b9)(tr.steps) : ""), [tr]),
        tx = i.useMemo(() => (null != tr ? ((0, ny.lt)(tr.steps) ?? tr.todos) : void 0), [tr]),
        tv = tr?.provisionalTodo,
        tb = null != tr && nw(tr),
        tj = i.useMemo(() => {
            var e;
            return null != tr ? ((e = tr.steps), ae((0, ny.Jf)(e, !0).tasks)) : void 0;
        }, [tr]);
    return (0, a.jsxs)("section", {
        ref: I,
        "data-conjure-chat": !0,
        className: cK.TE,
        children: [
            em
                ? (0, a.jsx)(nb.A, {
                      title: ev.intl.string(ex.default.gy7byi),
                      description: ev.intl.string(ex.default["dkv/WO"]),
                      icons: cB.ir,
                      onDrop: ec,
                  })
                : null,
            (0, a.jsx)(nK, {
                onJumpToActivity: U,
                line: tg,
                placement: ta && "top" === th ? "top" : null,
                todos: tx,
                todosLive: tb,
                provisionalTodo: tv,
                agents: tj,
            }),
            (0, a.jsxs)("div", {
                className: cK.JX,
                children: [
                    (0, a.jsx)(nx.Ch, {
                        ref: E,
                        onScroll: B,
                        scrollbarGutter: tt ? "both-edges" : "stable",
                        className: [cK.N$, T ? null : cK.hB, eX ? cK.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rB.Fu.Provider, {
                            value: f,
                            children: (0, a.jsx)(cb, {
                                projectId: f,
                                messages: b,
                                emptyState: e9,
                                floatingSettingsMessageId: eK?.id,
                                floatingSecretRenderId: e1?.render_id,
                                liveClarificationId: e_?.id,
                                onPickIdea: em ? en : void 0,
                                onAskForIdeas: em ? ei : void 0,
                                draftHasText: er,
                                onApprovePlan: em ? tu : void 0,
                                onRestoreVersion: ef || ta ? void 0 : h,
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
                    (0, a.jsx)("div", {
                        className: cK.NJ,
                        children: (0, a.jsx)(cU, {
                            projectId: f,
                            thinking: ta,
                            turnStartedAt: ts,
                            restoring: ef,
                            remixStartedAt: Z,
                            recalling: tt,
                            thinkingActivity: k,
                            compacting: A,
                            saving: S,
                            projectUsage: y,
                            connState: j,
                            queued: ti,
                        }),
                    }),
                    null == e_
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e4,
                              className: eX ? `${cK.B5} ${cK.J9}` : cK.B5,
                              children: (0, a.jsx)(
                                  ri,
                                  { projectId: f, clarification: e_, onSubmit: em ? es : void 0, onDismiss: eA },
                                  e_.id,
                              ),
                          }),
                    null == eE
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e4,
                              className: cK.B5,
                              children: (0, a.jsx)(
                                  n4,
                                  { projectId: f, request: eE, canSend: em, onDismiss: eq, onSent: eM ? eF : void 0 },
                                  eE.id,
                              ),
                          }),
                    e1?.secretRequest == null
                        ? null
                        : (0, a.jsx)("div", {
                              ref: e4,
                              className: cK.B5,
                              children: (0, a.jsx)(
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
                        : (0, a.jsx)("div", {
                              ref: null == e_ && null == eE ? e4 : void 0,
                              className: cK.B5,
                              children: (0, a.jsx)(
                                  rF,
                                  { askId: eH?.id, projectId: f, request: eW, onDismiss: eV },
                                  eH?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cK.Jx,
                children: [
                    (0, a.jsx)(nK, {
                        onJumpToActivity: U,
                        line: tg,
                        placement: ta && "bottom" === th ? "bottom" : null,
                        todos: tx,
                        todosLive: tb,
                        provisionalTodo: tv,
                        agents: tj,
                    }),
                    0 === W.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cK.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(p.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: ev.intl.formatToPlainString(ex.default["7b49dS"], {
                                          count: W.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(p.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: ev.intl.string(ex.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: ev.intl.string(ex.default["/zOv9+"]),
                                      onClick: () => D(f),
                                  }),
                              ],
                          }),
                    null == Q ? null : (0, a.jsx)(rg, { pending: Q }, Q.publishTurnId),
                    null == Y
                        ? null
                        : (0, a.jsx)("div", {
                              className: cK.qB,
                              children: (0, a.jsx)(nv.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: Y.message,
                                  action: Y.retry,
                              }),
                          }),
                    null == V
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cK.Db,
                              children: [
                                  (0, a.jsx)(nv.w, { type: "warning", role: "status", message: V.message }),
                                  (0, a.jsx)("div", {
                                      className: cK.jU,
                                      children: (0, a.jsx)(e7.m, {
                                          text: ev.intl.string(ev.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tB.K, {
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
                        : (0, a.jsx)("div", {
                              className: cK.qB,
                              children: (0, a.jsx)(nv.w, {
                                  type: X.blocked ? "critical" : "warning",
                                  role: X.blocked ? "alert" : "status",
                                  message: X.message,
                              }),
                          }),
                    (0, a.jsx)(oA, {
                        projectId: f,
                        escapeScopeRef: x,
                        canSend: em,
                        running: ta,
                        restoring: ef,
                        onSend: ee,
                        hasPendingContext: W.annotations.length > 0,
                        onInterrupt: em ? et : void 0,
                        onUploadFile: eu,
                        onImport: g,
                        onSendToOtherProjects: e6 ? void 0 : eN.open,
                        onApprove: to,
                        suggestion: tl,
                        questionOpen: e6,
                        secretPending: null != e1,
                        modelSettings: N,
                        onModelSettingsChange: eo,
                        onDraftHasTextChange: ea,
                        aiPaused: X?.blocked === !0,
                        visible: v,
                    }),
                ],
            }),
        ],
    });
}
var cV = n(761508),
    cX = n(209695),
    cY = n(207438),
    cQ = n(683438),
    cZ = n(564218);
function cJ(e, t) {
    return String(e).padStart(t, "0");
}
function c0(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cJ(l.getHours(), 2)}:${cJ(l.getMinutes(), 2)}:${cJ(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cJ(l.getMilliseconds(), 3)}` : r;
}
var c1 = n(667931);
let c2 = {
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
    c3 = { running: "Running", ok: "Done", error: "Failed" };
function c4(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function c5(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function c7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function c8(e) {
    return c5(e.count > 1 ? e.totalMs : e.end - e.start);
}
let c6 = ["Arguments", "Result", "Usage", "Details"];
function c9(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function de(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function dt(e) {
    let t = (0, c1.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, c1.lp)(e) ? "interrupted" : "still running";
}
function dn(e) {
    return [c0(new Date(e.started_at).toISOString()) ?? "", c7(e.spans.length), (0, c1.Sj)((0, c1.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function dl(e) {
    let t = (0, c1.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, c1.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += dr(r, "in")),
                (l.output += dr(r, "out")),
                (l.cacheRead += dr(r, "cache_read")),
                (l.cacheWrite += dr(r, "cache_write")),
                (l.costUsd += dr(r, "cost_usd"))));
    }
    let r = c1.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function dr(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var da = n(738188),
    di = n(430993),
    ds = n(364840),
    du = n(224640),
    dc = n(20742);
let dd = { collapsed: new Set(), revealed: new Set() };
var df = n(872892);
let dm = {
    op: df.Q,
    model: df.i3,
    tool: df.dH,
    setup: df.kc,
    worktree: df.Qx,
    sandbox: df.QH,
    build: df.F1,
    platform: df.Op,
    other: df.fv,
};
function dh(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      c7(t.calls, "model call"),
                      `${c4(t.input)} in`,
                      `${c4(t.output)} out`,
                      `${c4(t.cacheRead)} cache read`,
                      `${c4(t.cacheWrite)} cache write`,
                      de(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: df.M1,
        children: [
            (0, a.jsx)("div", {
                className: df.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${df.DJ} ${dm[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: df.o1,
                children: c1.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${c5(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: df.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${df.nf} ${dm[e]}` }),
                                (0, a.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: c2[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(p.E, {
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
                : (0, a.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dg(e) {
    return `conjure-perf-trace-${e}`;
}
function dp(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: df.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(p.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${df.p0} ${s + o > 85 ? df.EU : df.jh}`,
                children: i,
            }),
        ],
    });
}
function dx(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? n_.ChevronSmallRightIcon : nE.ChevronSmallDownIcon,
        f = i.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        m = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, a.jsxs)(e5.D, {
        tag: "div",
        role: "treeitem",
        id: dg(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${df.$y} ${r ? df.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: df.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(e5.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: df.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: df.YJ }),
                    (0, a.jsx)(p.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: df.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${df.nf} ${dm[t.category]}` }),
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: df.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: df.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(p.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: df.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(da.WarningIcon, { size: "xs", color: "currentColor", className: df.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dp, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${df.M0} ${df.Nh}`
                    : t.running
                      ? `${df.M0} ${df.rF}`
                      : `${df.M0} ${dm[t.category]}`,
                duration: c8(t),
            }),
        ],
    });
}
function dv(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(e5.D, {
        tag: "div",
        role: "treeitem",
        id: dg(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${df.$y} ${l ? df.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: df.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: df.ai,
                        children: (0, a.jsx)(n_.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: df.U9 }),
                    (0, a.jsx)("span", { className: `${df.nf} ${df.dL}` }),
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: df.MQ,
                        children: c7(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dp, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${df.M0} ${df.ab} ${df.dL}`,
                duration: c5(t.totalMs),
            }),
        ],
    });
}
function db(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(p.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: df._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: df.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${df.nf} ${dm[t.category]}` }),
                          (0, a.jsx)(p.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [c9("Start", `+${c5(e.start)}`), c9("Duration", c8(e))];
                      e.count > 1
                          ? t.push(
                                c9("Calls", String(e.count)),
                                c9("Longest call", c5(e.maxMs)),
                                c9("Spread over", c5(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(c9("Self time", c5(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(c9("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(c9("Notes", l.join(", "))),
                          null != e.span.error && t.push(c9("Error", e.span.error)));
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
                              s = "cost_usd" === t ? de(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), c9(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...c6.flatMap((e) => {
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
                                      : (0, a.jsx)(p.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: df.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(p.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(p.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: df.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(p.E, {
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
function dj(e) {
    let { trace: t } = e,
        n = i.useMemo(() => dl(t), [t]);
    return (0, a.jsx)(dh, { stats: n });
}
function dy(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, c1.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dd : (0, c1.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, c1.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, c1.x7)(t)), l((n) => (0, c1._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, c1.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c1.IE)(t, e);
                        null != n && l((e) => (0, c1.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c1.IE)(t, e);
                        null != n && l((e) => (0, c1.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, c1.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, c1.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, c1.hB)(t));
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
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: f, expandSubtree: m } = n,
        h = (0, c1.dj)(t),
        g = i.useMemo(() => (0, c1.nF)(h), [h]),
        x = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        v = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) f(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) m(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(dg(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(di.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: df.z,
                        children: [
                            (0, a.jsx)(p.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dt(t),
                            }),
                            (0, a.jsx)(p.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dn(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(p.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(p.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${c7(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dj, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: df.KE,
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
                            (0, a.jsx)(p.E, {
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
                        "aria-activedescendant": null == o ? void 0 : dg(o),
                        className: df.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(x) },
                        onKeyDown: v,
                        children: [
                            (0, a.jsxs)("div", {
                                className: df.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: df.So,
                                        children: (0, a.jsx)(p.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: df.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                p.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${df.io} ${(e / h) * 100 > 85 ? df.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : c5(e),
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
                                          dx,
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
                                    : (0, a.jsx)(dv, { row: e, extent: h, selected: e.key === o, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(ds.j, { children: (0, a.jsx)(db, { node: s }) }),
        ],
    });
}
function dk(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([u7.A], () => u7.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(du.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(dc.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(di.c, {
                      children: (0, a.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dy, { trace: i }),
        ],
    });
}
let dw = { running: df.Vf, ok: df.mo, error: df.Sr };
function dA(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${df.Om} ${dw[t]}`, role: "img", "aria-label": c3[t] });
}
function dS(e, t) {
    (0, eE.qf)((n) => (0, a.jsx)(dk, { ...n, projectId: e, traceId: t }));
}
function dC(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dS(t, n.id), [t, n.id]);
    return (0, a.jsxs)(e5.D, {
        className: df.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: df.sU,
                children: [
                    (0, a.jsx)(dA, { status: (0, c1.lQ)(n) }),
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: df._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(p.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dt(n),
                    }),
                ],
            }),
            (0, a.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: dn(n) }),
            null == l
                ? null
                : (0, a.jsx)(p.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dN(e) {
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
            (0, cZ.H)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(tb.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: tb.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(u6.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(u9.rX, {
                    children: (0, a.jsx)(u9.Dr, {
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
            return (0, a.jsx)(tB.K, {
                ...e,
                buttonRef: l,
                icon: iN.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dI(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([u7.A], () => u7.A.getTimingTraces(t), [t]),
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
                    let t = e.map(dl);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: c1.BF.map((e) => ({
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
              className: df.Ie,
              children: [
                  (0, a.jsx)(p.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: df.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: df.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: df.fH,
                              children: (0, a.jsx)(cQ.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dN, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nx.Ch, {
                      className: df.XG,
                      children: [
                          (0, a.jsx)(dh, { stats: u }),
                          0 === o.length
                              ? (0, a.jsx)(p.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: df.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dC, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dE(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function d_(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dM(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dR(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dP(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dT(e) {
    return ev.intl.string("preview" === e ? ex.default["2yLYlG"] : ex.default.eiAi57);
}
let dL = ["all", "preview", "stable", "web"];
function d$(e) {
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
function dD(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : ev.intl.formatToPlainString(ex.default["XO/bN4"], {
              p50: dE(e.memory_p50_bytes ?? 0),
              p999: dE(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dq = {
    db: () => ex.default["7l+DFG"],
    db_preview: () => ex.default.FAuffi,
    runtime: () => ex.default["Gkl+ab"],
    runtime_preview: () => ex.default.ynpJzv,
    bot: () => ex.default["5/i0cj"],
    bot_preview: () => ex.default.m2jsnw,
};
var dF = n(911608),
    dO = n(177427);
function dz(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dO.KE,
        children: [
            (0, a.jsx)("div", {
                className: dO.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(x.y, { type: x.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(p.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: ev.intl.string(ex.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(p.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: ev.intl.formatToPlainString(ex.default.INVO50, { time: dR(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(d.$, { variant: "secondary", size: "sm", text: ev.intl.string(ex.default.oKEgiu), onClick: l }),
        ],
    });
}
function dG(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dO.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(p.E, { variant: "body-xs/semibold", color: "text-muted", className: dO.Gf, children: t }),
            n,
        ],
    });
}
function dU(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dO.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dO.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dO.kS,
                        children: [i, (0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dO.kS,
                        children: [
                            s,
                            (0, a.jsx)(p.E, {
                                variant: "body-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dB(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dO.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dO.x7,
                children: [
                    (0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dF.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dO.dh : void 0,
            }),
        ],
    });
}
function dK(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dU, {
            label: ev.intl.string(ex.default.SXP7pD),
            value: ev.intl.string(ex.default.E5hKVi),
            hint: d$(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dU, {
            label: ev.intl.string(ex.default.SXP7pD),
            value: "\u2014",
            hint: ev.intl.string(ex.default.AGvoMJ),
        });
    let l = dD(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dU, { label: ev.intl.string(ex.default["H/X+FI"]), value: d_(n.cpu_ms) }),
            null != l && (0, a.jsx)(dU, { label: ev.intl.string(ex.default.lmFmMO), value: l }),
        ],
    });
}
function dH(e) {
    let { analytics: t } = e,
        n = ev.intl.string(ex.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dG, {
            title: n,
            children: (0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: d$(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dq[t] : null) ? ev.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dG, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: ev.intl.string(ex.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dU,
                          {
                              label: n,
                              value: ev.intl.formatToPlainString(ex.default["w/2voO"], { cpu: d_(t.cpu_ms) }),
                              hint: dD(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dW = n(678708),
    dV = n(414499),
    dX = n(714800),
    dY = n(81466),
    dQ = n(424383),
    dZ = n(664121),
    dJ = n(816943),
    d0 = n(268791),
    d1 = n(514042),
    d2 = n(872351),
    d3 = n(708988),
    d4 = n(150934),
    d5 = n(417270);
let d7 = "Restart Agent",
    d8 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function d6(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function d9(e, t) {
    return { label: e, value: null != t && "" !== t ? dR(t) : "Unknown", icon: "calendar" };
}
function fe(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function ft(e, t, n, l) {
    let [r, a] = d8[n.status];
    return { label: e, value: `${fe(n.bytes)} of ${fe(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fn(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dR(e.at);
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
let fl = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fr(e) {
    let t = `container ${d6(e.local)} \xb7 remote ${d6(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fl[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dM(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dM(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dM(n)} Ahead, ${dM(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fa = ["main", "wip"];
var fi = n(400154);
let fs = {
        checkout: dW.FolderIcon,
        edit: lm.PencilIcon,
        remote: dV.CloudIcon,
        commits: dX.ListNumberedIcon,
        calendar: dY.CalendarIcon,
        save: dQ.SaveIcon,
        objects: dZ.ServerIcon,
        download: dJ.CloudDownloadIcon,
        size: d0.SpeedometerIcon,
        file: d1.FileIcon,
    },
    fo = {
        ok: [ry.CircleCheckIcon, tQ.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [da.WarningIcon, tQ.A.colors.ICON_FEEDBACK_WARNING],
        error: [sB.CircleXIcon, tQ.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [d2.ArrowSmallUpIcon, tQ.A.colors.ICON_MUTED],
        behind: [d3.ArrowSmallDownIcon, tQ.A.colors.ICON_MUTED],
    };
function fu(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([u7.A], () => u7.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cY.DK)(t), [t]),
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
                    `Updated ${dR(r)}`,
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
    return (0, a.jsxs)(dG, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fi.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(p.E, {
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
                    if (!e.running || null != e.localError) return [fn(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fn(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dM(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fa.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fr))
                        : l.push(
                              { label: "Main", value: d6(e.heads.main), icon: "remote" },
                              { label: "WIP", value: d6(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dM(e.commits) : "Unknown", icon: "commits" },
                            d9("Oldest Commit", e.oldest),
                            d9("Newest Commit", e.newest),
                            fn(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dM(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dM(t.loose)} loose (${dE(t.looseBytes)}) \xb7 ${dM(t.packed)} packed in ${n} (${dE(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dM(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dM(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                ft(
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
                                  ft("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fs[r],
                        [o, u] = null != i ? fo[i] : [null, void 0];
                    return (0, a.jsx)(
                        dU,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: tQ.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function fc(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, c.bG)([u7.A], () => u7.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cY.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = u7.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cY.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                um.h.dispatch({
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
            let o = i.useCallback(() => (0, cY.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: d7,
                },
                restart: o,
            };
        })(t),
        f = i.useCallback(() => {
            (0, em.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, a.jsxs)("div", {
        className: fi.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fi.nM,
                children: [
                    (0, a.jsx)(d4.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: d5.RetryIcon,
                        text: d7,
                        loading: l,
                        disabled: l,
                        onClick: f,
                    }),
                ],
            }),
            (0, a.jsx)(p.E, {
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
                            return `Restarted \xb7 new instance since ${dR(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dR(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fd(e, t) {
    return (0, a.jsx)(dU, {
        label: e,
        value: ev.intl.formatToPlainString(ex.default.yHJxuP, { count: dM((0, cR.aM)(t)) }),
        hint: `${dM(t.input_tokens)} in \xb7 ${dM(t.output_tokens)} out \xb7 ${dM(t.cache_read_input_tokens)} cache read`,
    });
}
function ff(e) {
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
        } = ((t = (0, c.bG)([u7.A], () => u7.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([u7.A], () => u7.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([u7.A], () => u7.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([u7.A], () => u7.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([u7.A], () => u7.A.getSandboxRestartState(g), [g])),
        (o = (0, c.bG)([rE.A], () => rE.A.isThinking(g), [g])),
        (u = i.useCallback(() => (0, cY.Lj)(g), [g])),
        (f = i.useCallback(() => (0, cY.Lj)(g, !0), [g])),
        (m = i.useCallback(() => (0, cY.bq)(g), [g])),
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
    return (0, a.jsxs)("div", {
        className: fi.Mf,
        children: [
            (0, a.jsx)(dz, { generatedAt: x?.generated_at ?? null, fetchState: v, onRefresh: b }),
            (0, a.jsx)(dG, {
                title: ev.intl.string(ex.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(p.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ev.intl.string(ex.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dU, {
                                      label: ev.intl.string(ex.default["9nqym2"]),
                                      value: dM((0, cR.a7)(E.cost_usd)),
                                      hint: ev.intl.formatToPlainString(ex.default.NCdUIh, { count: dM(E.turns) }),
                                  }),
                                  fd(ev.intl.string(ex.default.xtxP0e), E.orchestrator),
                                  fd(ev.intl.string(ex.default["9Sj3SX"]), E.codegen),
                                  fd(ev.intl.string(ex.default.ANCEo3), (0, cR.wU)(E.compaction)),
                                  x?.agent?.outcomes != null &&
                                      Object.keys(x.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dU, {
                                          label: ev.intl.string(ex.default.SQHm7C),
                                          value: Object.entries(x.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dM(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dG, {
                title: ev.intl.string(ex.default.dZHPE5),
                children:
                    null == j
                        ? (0, a.jsx)(p.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: ev.intl.string(ex.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fd(ev.intl.string(ex.default["7X3i9d"]), j.total),
                                  (0, a.jsx)(dU, {
                                      label: ev.intl.string(ex.default["8OUg09"]),
                                      value: `${Math.round((j.cache_hit_rate ?? (0, cR.CA)(j.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dG, {
                title: ev.intl.string(ex.default.NbRk9a),
                children: [
                    null != y && null != R
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dB, {
                                      label: ev.intl.string(ex.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: R,
                                      formatValue: dM,
                                  }),
                                  (0, a.jsx)(dU, {
                                      label: ev.intl.string(ex.default.mRbSns),
                                      value: `${dM(y.tokensBefore)} \u{2192} ${dM(y.tokensAfter)}`,
                                      hint: ev.intl.formatToPlainString(ex.default.Vq3skS, {
                                          count: dM(y.retainedMessages),
                                          time: dR(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(p.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != R
                                      ? ev.intl.formatToPlainString(ex.default.GMLCNv, { ceiling: dM(R) })
                                      : ev.intl.string(ex.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dU, {
                            label: ev.intl.string(ex.default["4BX5KK"]),
                            value: `${dM(k.projected)} / ${dM(k.threshold)}`,
                            critical: !0,
                            hint: ev.intl.formatToPlainString(ex.default["6ngCax"], { time: dR(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fi.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ev.intl.string(ex.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, a.jsx)(p.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ev.intl.string(ex.default.wox6Ev);
                                    if ("pending" === e) return ev.intl.string(ex.default.OcPHQ1);
                                    let t = dR(e.observedAt);
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
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(d.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: ev.intl.string(ex.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, a.jsx)(p.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: ev.intl.string(ex.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: fi.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: ev.intl.string(ex.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || S,
                                onClick: I,
                            }),
                            (0, a.jsx)(p.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return ev.intl.string(ex.default.mlok8D);
                                    if ("pending" === e) return ev.intl.string(ex.default["1ugSyK"]);
                                    let t = dR(e.observedAt);
                                    return ev.intl.formatToPlainString(
                                        "restarted" === e.outcome ? ex.default["76mfqO"] : ex.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fc, { projectId: g }),
                ],
            }),
            (0, a.jsx)(fu, { projectId: g }),
            (null != M || x?.analytics != null) &&
                (0, a.jsxs)(dG, {
                    title: ev.intl.string(ex.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dU, {
                                        label: ev.intl.string(ex.default.CLXHAs),
                                        value: dR(M.instance_since),
                                        hint: ev.intl.string(ex.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dU, {
                                        label: ev.intl.string(ex.default["8V8e1Z"]),
                                        value: dM(M.sockets),
                                    }),
                                    (0, a.jsx)(dU, {
                                        label: ev.intl.string(ex.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? ev.intl.string(ex.default.Wv025I)
                                            : ev.intl.string(ex.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, a.jsx)(dU, {
                                            label: ev.intl.string(ex.default["3oUYnv"]),
                                            value: dM(M.queued_messages),
                                        }),
                                ],
                            }),
                        x?.analytics != null && (0, a.jsx)(dK, { analytics: x.analytics }),
                    ],
                }),
            null != _ &&
                (0, a.jsxs)(dG, {
                    title: ev.intl.string(ex.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dU, {
                            label: ev.intl.string(ex.default.IlDBN3),
                            value: dM(_.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dU, {
                            label: ev.intl.string(ex.default["ZdzKR+"]),
                            value: ev.intl.formatToPlainString(ex.default.yHJxuP, {
                                count: dM(_.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(dU, {
                            label: ev.intl.string(ex.default.cIhN2W),
                            value: ev.intl.formatToPlainString(ex.default.yHJxuP, {
                                count: dM(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dU, {
                            label: ev.intl.string(ex.default["+fOn/q"]),
                            value: dM(_.max_user_message_chars),
                        }),
                        (0, a.jsx)(dU, { label: ev.intl.string(ex.default.kIHga0), value: dM(_.max_build_attempts) }),
                        (0, a.jsx)(dU, { label: ev.intl.string(ex.default.Iw03yW), value: dM(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fm = n(237528),
    fh = n(629584),
    fg = n(531893);
function fp(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fg.ut,
              children: (0, a.jsx)(p.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: ev.intl.string(ex.default.h1SE6R),
              }),
          });
}
function fx(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fg.qf,
              children: [
                  (0, a.jsx)(p.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: ev.intl.string(ex.default.h1SE6R),
                  }),
                  (0, a.jsx)(p.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: ev.intl.string(ex.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fg.qf,
              children: [
                  (0, a.jsx)(p.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fv(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fg.ps,
              children: (0, a.jsx)(p.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: ev.intl.string(ex.default.V7Ri8H),
              }),
          })
        : null;
}
var fb = n(109079);
let fj = i.memo(function (e) {
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
        className: fb.vK,
        children: [
            (0, a.jsx)(p.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: fb.Mt,
                selectable: !0,
                children: c0(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(p.E, {
                tag: "span",
                variant: "footnote/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fb.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fb.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fb.Cq, children: (0, a.jsx)(fm.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fb.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fm.v, {
                                text: ev.intl.string(ex.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(p.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(e5.D, {
                                      className: fb.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": ev.intl.string(ex.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(nE.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(n_.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(p.E, {
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
                                      (0, a.jsx)(p.E, {
                                          tag: "div",
                                          variant: "body-xs/normal",
                                          color: c,
                                          className: fb.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(p.E, {
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
function fy(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([cX.A], () => cX.A.getLogs(t), [t]),
        l = (0, c.bG)([cX.A], () => cX.A.getHistoryState(t, "logs")),
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
        f = i.useRef(null),
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && f.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = f.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                dL.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dT(e);
                            case "web":
                                return ev.intl.string(ex.default.IVzfVV);
                            default:
                                return ev.intl.string(ex.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: fb.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fb.y4,
                children: [
                    (0, a.jsx)(fh.I, {
                        look: "pill",
                        "aria-label": ev.intl.string(ex.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fb.KT,
                        children: (0, a.jsx)(cQ.I, {
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
            n.length > 0 && (0, a.jsx)(fp, { state: l }),
            (0, a.jsxs)(nx.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: fb.sx,
                children: [
                    (0, a.jsx)(fv, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fx, {
                              state: l,
                              emptyTitle: ev.intl.string(ex.default.S7qlPG),
                              emptyBody: ev.intl.string(ex.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(p.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: ev.intl.string(ex.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(fj, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fk(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dG, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(p.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: ev.intl.string(ex.default.umcjif),
                      }),
        })
    );
}
function fw(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dU, {
                      label: ev.intl.formatToPlainString(ex.default["01ZMS4"], { env: dT(n) }),
                      value: ((t = l.connected), ev.intl.string(t ? ex.default.Wv025I : ex.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dU, {
                      label: ev.intl.string(ex.default["z1dh+F"]),
                      value: dM(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dR(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dU, { label: ev.intl.string(ex.default.Iz5GnJ), value: dM(l.guild_count) }),
                  (0, a.jsx)(dU, {
                      label: ev.intl.string(ex.default["7UqtNv"]),
                      value: dM(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? ev.intl.formatToPlainString(ex.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dR(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dU, {
                          label: ev.intl.string(ex.default["x3+JXJ"]),
                          value: dM(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dU, { label: dT(n), value: ev.intl.string(ex.default.lTHQss) });
}
function fA(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dU, {
        label: dT(t),
        value: ev.intl.formatToPlainString(ex.default["Xq+wHT"], {
            requests: dM(n.requests),
            failures: dM(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? ev.intl.formatToPlainString(ex.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dR(n.last_failure.at),
                  })
                : ev.intl.formatToPlainString(ex.default["7KlGT6"], { time: dR(n.since) }),
    });
}
function fS(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dU, {
                label: ev.intl.formatToPlainString(ex.default["92gVTm"], { env: dT(t) }),
                value: dM(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dU,
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
                                  ? ev.intl.formatToPlainString(ex.default.wxAWNv, { time: dR(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fC(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dU, {
        label: dT(t),
        value: ev.intl.formatToPlainString(ex.default.suAOj9, { calls: dM(n.calls), errors: dM(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fN(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dG, {
            title: t,
            children: (0, a.jsx)(p.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: ev.intl.string(ex.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dG, {
        title: t,
        children: [
            (0, a.jsx)(dU, {
                label: ev.intl.string(ex.default.xtD4Zp),
                value: dM(n.requests),
                hint: ev.intl.formatToPlainString(ex.default["7KlGT6"], { time: dR(n.since) }),
            }),
            (0, a.jsx)(dU, { label: ev.intl.string(ex.default.gfRhR3), value: dM(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dB, {
                              label: ev.intl.string(ex.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: d_,
                          }),
                          (0, a.jsx)(dU, {
                              label: ev.intl.string(ex.default.mSKImM),
                              value: d_(r),
                              hint: ev.intl.formatToPlainString(ex.default.JqMU05, {
                                  total: d_(n.cpu_ms_total),
                                  wall: d_(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dU, {
                      label: ev.intl.string(ex.default.LEJ5r3),
                      value: ev.intl.string(ex.default["2Ekb2b"]),
                      hint: ev.intl.string(ex.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dU, { label: ev.intl.string(ex.default.xvmL1D), value: d_(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dU, {
                    label: ev.intl.string(ex.default["4sQYwH"]),
                    value: dM(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(dU, {
                label: ev.intl.string(ex.default.bQenOy),
                value: dM(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: ev.intl.formatToPlainString(ex.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dU, { label: ev.intl.string(ex.default.xgpn4Y), value: dP(n.build) }),
        ],
    });
}
function fI(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: ev.intl.string(ex.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: ev.intl.string(ex.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: ev.intl.string(ex.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dG, {
        title: ev.intl.string(ex.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dU, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dU, {
                                  label: ev.intl.formatToPlainString(ex.default.u7kJJ4, { env: n }),
                                  value: dE(l.r2_bytes),
                                  hint: ev.intl.formatToPlainString(
                                      l.r2_truncated ? ex.default.lH0oQw : ex.default.m9h02S,
                                      { count: dM(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dB, {
                                      label: ev.intl.formatToPlainString(ex.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dE,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fE(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fi.Mf,
        children: [
            (0, a.jsx)(dz, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fN, {
                            title: ev.intl.string(ex.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fN, {
                            title: ev.intl.string(ex.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fI, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fk, {
                                title: ev.intl.string(ex.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fw, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fk, {
                                title: ev.intl.string(ex.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fA, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fk, {
                                title: ev.intl.string(ex.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fS, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fk, {
                                title: ev.intl.string(ex.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fC, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dH, { analytics: t.analytics }),
                        (0, a.jsxs)(dG, {
                            title: ev.intl.string(ex.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dU, {
                                    label: ev.intl.string(ex.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dP(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dU, {
                                    label: ev.intl.string(ex.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dP(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var f_ = n(592465);
function fM(e) {
    let { projectId: t, onClose: n } = e,
        l = eA(),
        [r, s] = i.useState(() => (l && ey?.projectId === t ? "trace" : "logs")),
        o = (0, c.bG)([u7.A], () => u7.A.getStatus(t), [t]),
        u = (0, c.bG)([u7.A], () => u7.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, cY.R7)(t), (0, cY.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, eb.Rw)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ey || ey.projectId !== e) return null;
            let { traceId: t } = ey;
            return ((ey = null), t);
        })(t);
        return null != e && (dS(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        ek(t, () => {
            f() && s("trace");
        }));
    let m = i.useCallback(() => {
            (0, uq.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: u7.A.getStatus(t),
                        last_turn_usage: u7.A.getLastTurnUsage(t),
                        last_compaction: u7.A.getLastCompaction(t),
                        last_compaction_decline: u7.A.getLastCompactionDecline(t),
                        timing_traces: u7.A.getTimingTraces(t),
                        logs: cX.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eh.P0)({ text: ev.intl.string(ex.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = ev.intl.string(ex.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: f_.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(tE.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tE.Ay.Icon, {
                            icon: uL.CopyIcon,
                            tooltip: ev.intl.string(ex.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, a.jsx)(tE.Ay.Icon, {
                            icon: e8.XSmallIcon,
                            tooltip: ev.intl.string(ev.t.cpT0Cq),
                            onClick: n,
                        }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tE.Ay.ChannelIcon, { icon: uD.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tE.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: f_.rf,
                children: [
                    (0, a.jsxs)(cV.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": ev.intl.string(ex.default.RvvWIh),
                        className: f_.vR,
                        children: [
                            (0, a.jsx)(cV.V.Item, { id: "logs", children: ev.intl.string(ex.default["+VRYCm"]) }),
                            (0, a.jsx)(cV.V.Item, { id: "worker", children: ev.intl.string(ex.default["50D0FZ"]) }),
                            (0, a.jsx)(cV.V.Item, { id: "agent", children: ev.intl.string(ex.default.UkbTK1) }),
                            l ? (0, a.jsx)(cV.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fy, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fE, { status: o, fetchState: u, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(dI, { projectId: t })
                            : (0, a.jsx)(ff, { projectId: t, status: o, fetchState: u, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fR = n(365912),
    fP = n(873715);
function fT(e) {
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
let fL = Object.freeze({ x: -1, y: -1 });
function f$(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fT(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fD = n(192888);
function fq(e, t) {
    return (0, fD.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(f$, () => ({ status: "failed" }));
}
var fF = n(108308);
let fO = { x: 25, y: 21 };
function fz(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fG(e, t, n, l) {
    let r = fz(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fU(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fB(e) {
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
function fK(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: f } = z(o),
        m = (0, eS.Zv)(o),
        h = (0, eE.Rv)(),
        g = (0, c.bG)([n6.default], () => n6.default.getCurrentUser()),
        x = g?.id ?? null,
        [v, b] = i.useState(null),
        [j, y] = i.useState(!1),
        [E, _] = i.useState(!1),
        [M, R] = i.useState(null),
        [L, $] = i.useState(!1),
        O = i.useRef(null),
        G = i.useRef(null),
        U = i.useRef(null),
        [B, K] = i.useState(null),
        [H, W] = i.useState(!1),
        [V, X] = i.useState(null),
        [Y, Q] = i.useState(null),
        Z = i.useRef(!1),
        [J, ee] = i.useState(!1),
        [et, en] = i.useState(null),
        er = u && !m && !h;
    null == V || (er && V.projectId === o) || X(null);
    let ea = V?.projectId ?? null;
    i.useEffect(() => {
        if (null != ea) return () => (0, nY.xJ)(ea, "design");
    }, [ea]);
    let ei = tG(r, er);
    i.useEffect(() => {
        if (!er || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void _(!0);
        (y(!0), _(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fP.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fB(t.response) : null;
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
    let eo = i.useRef(null);
    (i.useEffect(() => {
        if (!er || null == ei || null == o) return;
        if (null == v) {
            eo.current = ei;
            return;
        }
        if (tz(eo.current, ei)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            eo.current = ei;
            let t = [];
            for (let e = 0; e < f.length; e += 24) t.push(f.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fP.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ef.current) return;
                        let l = fB(e.response);
                        null != l && (b(l), q(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fT(e.element);
                            null != a && r.set(l.id, a);
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
    }, [er, ei, v, f, o, r]),
        i.useEffect(() => {
            if (!er)
                return () => {
                    (R(null), X(null), en(null), b(null));
                };
        }, [er]));
    let eu = i.useRef(null),
        ec = i.useRef(null),
        ed = i.useRef(!1),
        ef = i.useRef(!1);
    i.useEffect(() => {
        ((ef.current = er), er || ((eu.current = null), (ec.current = null), (U.current = null), $(!1)));
    }, [er]);
    let em = i.useCallback(
            function e() {
                if (ed.current) return;
                let t = eu.current;
                if (null == t) return;
                eu.current = null;
                let n = r();
                null != n &&
                    ((ed.current = !0),
                    fq(n, t).then((t) => {
                        if (((ed.current = !1), ef.current)) {
                            if ("picked" !== t.status || fQ(t.target, ey.current.rect, ey.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? R(null)
                                    : "unsupported" === t.status && W(!0);
                            else {
                                let e = A(t.target);
                                (K((t) => (fY(t, e) ? t : e)),
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
        eh = i.useCallback(() => {
            if (null == V) return;
            let e = !Z.current;
            (Q({ at: V.at, label: V.label, draft: V.draft, instant: e }), ee(e), X(null));
        }, [V]);
    (i.useEffect(() => {
        if (!J) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [J]),
        i.useEffect(() => {
            if (null == Y) return;
            let e = setTimeout(() => Q(null), fV);
            return () => clearTimeout(e);
        }, [Y]));
    let eg = null == v || null == ei || v.viewport.width < 1 ? 1 : ei.width / v.viewport.width,
        ep = null != v || E,
        ej = i.useMemo(() => v?.elements ?? [], [v]),
        ey = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ey.current = { rect: ei, scale: eg };
    }, [ei, eg]);
    let ek = i.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, nY.xJ)(o, "design"),
                    en(null),
                    (Z.current = !1),
                    X({ projectId: o, target: e, anchor: t, draft: "", at: n, label: A(e) }));
            },
            [o],
        ),
        ew = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / eg, y: (e.clientY - t.top) / eg }), [eg]),
        eA = i.useCallback(() => {
            let e = U.current;
            if (null == e) return;
            let t = O.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = G.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eA);
    let eC = i.useCallback(
            (e) => {
                if (null == ei || null != et) return;
                if (((U.current = { x: e.clientX, y: e.clientY }), eA(), $(!0), null != V)) {
                    (Math.abs(e.clientX - V.at.x) > fX || Math.abs(e.clientY - V.at.y) > fX) && (Z.current = !0);
                    return;
                }
                if (!ep) return void R(null);
                let t = ew(e, ei);
                if (H) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let a of e) {
                                let { x: e, y: i, width: s, height: o } = a.rect;
                                if (s < 1 || o < 1 || t < e || n < i || t > e + s || n > i + o) continue;
                                let u = s * o;
                                u < r && ((l = a), (r = u));
                            }
                            return l;
                        })(ej, t.x, t.y),
                        n = null != e && fQ(e, ei, eg) ? null : e;
                    if (null != n) {
                        let e = A(n);
                        K((t) => (fY(t, e) ? t : e));
                    }
                    R((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ec.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ec.current = n), (eu.current = n), em());
            },
            [ei, eg, ep, ew, H, ej, V, et, eA, em],
        ),
        eN = null == et ? null : f.find((e) => e.id === et.id),
        eI = er && (L || V?.target.marker != null || eN?.target.marker != null);
    i.useEffect(() => {
        if (eI)
            return () => {
                let e = r();
                null != e && fq(e, fL);
            };
    }, [eI, r]);
    let e_ = i.useCallback(() => {
        ($(!1), R(null), (ec.current = null), (eu.current = null));
    }, []);
    i.useEffect(() => {
        if (!er || !L || !ep || H || null != V || null != et) return;
        let e = U.current,
            { rect: t, scale: n } = ey.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ec.current = l), (eu.current = l), em());
    }, [er, L, ep, H, V, et, em]);
    let eM = i.useCallback(
            (e) => {
                if (null != V || null != et) {
                    (eh(), en(null));
                    return;
                }
                if (null == M || null == ei) return;
                let t = ew(e, ei);
                ek(
                    M,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? k
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(M, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [M, ei, ew, V, et, ek, eh],
        ),
        eR = i.useCallback(() => {
            null != o && (R(null), el(o)?.active === !0 ? es(o) : D(o));
        }, [o]),
        eP = i.useCallback(() => {
            null != o &&
                (null != V
                    ? eh()
                    : et?.confirmingRemove === !0
                      ? en({ ...et, confirmingRemove: !1 })
                      : null != et
                        ? en(null)
                        : eR());
        }, [o, V, et, eh, eR]),
        eT = i.useRef(eP),
        eL = i.useRef(o),
        e$ = i.useRef(eR);
    i.useLayoutEffect(() => {
        ((eT.current = eP), (eL.current = o), (e$.current = eR));
    });
    let eD = i.useRef(null);
    i.useEffect(() => {
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
                        return ((0, fR.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eL.current || el(eL.current)?.active !== !0) && e$.current());
        }
    }, [er, s]);
    let eq = i.useCallback(
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
                    ek(M, k, { x: (ei?.left ?? 0) + M.rect.x * eg, y: (ei?.top ?? 0) + M.rect.y * eg }));
            },
            [o, V, et, ej, M, ek, eP, ei, eg],
        ),
        eF = i.useCallback(
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
        eO = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, tT.vX)(o, e)), [o]),
        ez = i.useCallback(() => {
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
        eG = i.useCallback(() => {
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
        eB = er && null != ei,
        eK = L && null == et,
        eH = V?.target ?? eN?.target ?? null,
        eW = V ?? Y,
        eV = V ?? (Y?.instant === !0 ? null : Y),
        eX =
            null != eN && null != ei
                ? (function (e, t) {
                      let { left: n, top: l } = fU(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fG(eN.target, eN.anchor, ei, eg), ei)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eN?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eN;
            fq(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eN, r]),
        (0, tM.createPortal)(
            (0, a.jsxs)("div", {
                ref: eD,
                className: fF.Li,
                children: [
                    (0, a.jsx)(nI.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eU,
                    }),
                    eB
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: fF.MT,
                                      style: { left: ei.left, top: ei.top, width: ei.width, height: ei.height },
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
                                      ? (0, a.jsx)(fZ, { box: fz(M, ei, eg) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: O,
                                      className: fF.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fF.xz,
                                          "data-shown": null != M && null == et && null == V ? "" : void 0,
                                          "data-instant": J ? "" : void 0,
                                          children: (0, a.jsxs)(p.E, {
                                              variant: "body-xs/medium",
                                              className: fF.Ux,
                                              children: [
                                                  null == B
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fF.Tl, children: B.kind }),
                                                  null == B || "" === B.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fF.kh,
                                                            children: [" ", B.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: G,
                                      className: fF.Y,
                                      children: eK ? (0, a.jsx)("div", { className: fF.u }) : null,
                                  }),
                                  null == eV
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fF.aZ,
                                            style: {
                                                transform: `translate3d(${eV.at.x + 20}px, ${eV.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fF.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == V ? "" : void 0,
                                                children: (0, a.jsxs)(p.E, {
                                                    variant: "body-xs/medium",
                                                    className: fF.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fF.Tl,
                                                            children: eV.label.kind,
                                                        }),
                                                        "" === eV.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fF.kh,
                                                                  children: [" ", eV.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eH && null == eH.marker
                                      ? (0, a.jsx)("div", {
                                            className: fF.D0,
                                            style: fz(eH, ei, eg),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  f.map((e, t) => {
                                      let n = fG(e.target, e.anchor, ei, eg),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fF.xL,
                                              style: { ...fU(n, ei), width: 24, height: 24 },
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
                                              children: (0, a.jsx)(fH, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eW || null == o
                                      ? null
                                      : (0, a.jsx)(tF, {
                                            projectId: o,
                                            at: { x: eW.at.x + 20, y: eW.at.y + 20 },
                                            bounds: ei,
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
                                      ? (0, a.jsxs)(fW, {
                                            point: eX,
                                            frame: ei,
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
                                                    ? (0, a.jsx)(n1.f, {
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
                                                                  (e.preventDefault(), ez());
                                                          },
                                                      })
                                                    : (0, a.jsx)(p.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: fF.aC,
                                                          children: eN.comment,
                                                      }),
                                                F(eN, x)
                                                    ? (0, a.jsx)("div", {
                                                          className: fF.eB,
                                                          children: et.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(p.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fF.nv,
                                                                            children: ev.intl.string(ex.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: ev.intl.string(ex.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                en({ ...et, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: ev.intl.string(ex.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eG,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(d.$, {
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
                                                                            ? (0, a.jsx)(d.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !w(et.draft),
                                                                                  text: ev.intl.string(
                                                                                      ex.default.iicRP9,
                                                                                  ),
                                                                                  onClick: ez,
                                                                              })
                                                                            : (0, a.jsx)(d.$, {
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
function fH(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([n6.default], () => n6.default.getUser(t), [t]);
    return (0, a.jsx)(ia.eu, {
        src: null == n ? null : is.Ay.getUserAvatarURL(n),
        size: ii._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fW(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: x } = e,
        v = i.useRef(null),
        b = i.useRef(null),
        [j, y] = i.useState(fO);
    i.useLayoutEffect(() => {
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
    return (0, a.jsxs)("div", {
        ref: v,
        className: fF.Nr,
        style: C,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fF.MY,
                children: [
                    (0, a.jsx)("span", { ref: b, className: fF.ip, children: (0, a.jsx)(fH, { authorId: d }) }),
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: fF.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fF.zI, children: x }),
        ],
    });
}
let fV = 300,
    fX = 2;
function fY(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fQ(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fZ(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fF.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fJ = n(318774),
    f0 = n(91242),
    f1 = n(697744),
    f2 = n(130324);
function f3(e) {
    let t = (0, f1.c)(),
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
    let r = (0, nj.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function f4(e) {
    let { className: t } = e,
        { Component: n, events: l } = f3(3e4);
    return (0, a.jsxs)("div", {
        className: u()(t, f2.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(p.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: f2.ol,
                children: ev.intl.string(ex.default.AyiQEp),
            }),
        ],
    });
}
var f5 = n(251363),
    f7 = n(944142),
    f8 = n(532247),
    f6 = n(501628);
function f9(e) {
    let { progress: t } = e,
        { Component: n } = f3(1500),
        l = ew.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(p.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: f6.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: f6.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(p.E, { variant: "body-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function me(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([f7.A], () => (s ? f7.A.getLiveReload(t) : null), [s, t]),
        u = (0, tu.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        f = o?.background === !0,
        m = (function (e, t, n) {
            let l = (0, f8.dv)(e),
                [r, a] = i.useState(null),
                [s, o] = i.useState(l),
                [u, d] = i.useState(t);
            s !== l && (o(l), d(t), a(null != l || u ? null : (0, f8.QP)(e, s)));
            let f = (0, c.bG)(
                    [f0.A],
                    () => {
                        let e = f0.A.getFrame(n);
                        return (0, tf.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                m = i.useRef(f),
                h = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((m.current = f), f && (h.current = !0));
                }, [f]),
                i.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return a(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, f5.ow)(null, n) && e();
                    }
                    ((h.current = m.current), document.addEventListener("load", t, !0));
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
        })(d, f, u),
        h = f ? null : (0, f8.h_)(d, o?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nI.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: f6.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(f9, { progress: h }),
                  })
                : null,
        ],
    });
}
let mt = 0;
var mn = n(782134),
    ml = n(357858),
    mr = n(343030),
    ma = n(11411),
    mi = n(111518),
    ms = n(240666);
let mo = { width: 1 / 0, height: 1 / 0 };
function mu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mo;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mc = n(702083);
function md(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
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
        f = n ? mu(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: u()(mc.dw, { [mc.PQ]: null != f }),
        children: (0, a.jsx)("div", { className: u()(mc.R9, { [mc.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var mf = n(347927);
function mm(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: u()(mf.Bf, l && mf.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: mf.Ux,
                children: [
                    (0, a.jsx)(g.D, { variant: "heading-sm/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(p.E, { variant: "body-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var mh = n(957272);
function mg(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, mi.A)({ applicationId: t, surface: n, launch: l });
    if (((0, ms.A)(t, n), s === mi.n.Launched)) {
        let e = (0, a.jsx)(ma.A, { frameId: i.id, level: mr.A.WithinAppContent, className: mh.Z7, overlay: r });
        return (0, td.Q5)(n) ? (0, a.jsx)(md, { children: e }) : e;
    }
    return (0, a.jsx)(mp, { state: s });
}
function mp(e) {
    let { state: t } = e;
    switch (t) {
        case mi.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: mh.qs,
                children: (0, a.jsx)(mm, {
                    title: ev.intl.string(ex.default["9kpdo7"]),
                    body: ev.intl.string(ex.default.iIA8Nj),
                }),
            });
        case mi.n.NoApplication:
            return (0, a.jsx)(f4, { className: mh.qs });
        case mi.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: mh.qs,
                children: (0, a.jsx)(mm, {
                    title: ev.intl.string(ex.default["7k4GyN"]),
                    body: ev.intl.string(ex.default.zdIy3R),
                }),
            });
        case mi.n.Error:
            return (0, a.jsxs)("div", {
                className: mh.qs,
                children: [
                    (0, a.jsx)(g.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: ev.intl.string(ex.default.lTPbnG),
                    }),
                    (0, a.jsx)(p.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: mh.tj,
                        children: ev.intl.string(ex.default.e6GiAZ),
                    }),
                ],
            });
        case mi.n.AwaitingLaunch:
        case mi.n.Loading:
            return (0, a.jsx)("div", { className: mh.qs, children: (0, a.jsx)(x.y, {}) });
    }
}
var mx = n(308528),
    mv = n(334738),
    mb = n(5206),
    mj = n(365971),
    my = n(703462);
function mk(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: my.f,
        children: [
            (0, a.jsx)(eJ.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mw() {
    return (0, a.jsx)("div", { className: my.f, children: (0, a.jsx)(x.y, {}) });
}
function mA(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, o] = i.useState(null),
        u = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([n7.A], () => (null != u ? n7.A.getChannel(u) : null), [u]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && mx.A.preload(lt.ME, t);
        }, [t]),
        (n = (0, c.bG)([uI.A], () => uI.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mj.Xg)();
            return (
                (0, mv.yl)(t, e),
                () => {
                    (0, mv.dm)(t, e);
                }
            );
        }, [t, n]));
    let [f, m] = i.useState(null),
        h = f === r;
    return (i.useEffect(() => {
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
        ? (0, a.jsx)(mk, { message: ev.intl.string(ex.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(mw, {})
          : (0, a.jsx)("div", {
                className: my.g,
                children: (0, a.jsx)(mb.A, { channel: d, guild: null, chatInputType: on.oU.SIDEBAR }, d.id),
            });
}
var mS = n(765671),
    mC = n(596977),
    mN = n(921853),
    mI = n(582063);
function mE(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, eD.vX)(t, n?.id ?? null);
    }
    let o = ev.intl.string(ex.default.Gl3XtE),
        u = ev.intl.string(ex.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: mI.aF,
        children: [
            (0, a.jsx)(e7.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(tB.K, {
                    icon: mN.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: mI.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(p.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: ev.intl.formatToPlainString(ex.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(p.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: ev.intl.string(ex.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(e7.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tB.K, {
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
var m_ = n(666476);
let mM = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mR() {
    (0, eh.P0)({ text: ev.intl.string(ex.default.jj3abP), variant: "critical" });
}
function mP(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = ev.intl.string(ex.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tb.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(mT, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: mI.m2,
                        children: (0, a.jsx)(e7.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tB.K, {
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
            (0, a.jsx)("input", {
                ref: l,
                type: "file",
                accept: mM.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mM.includes(n.type)
                                ? n.size > m_.aI
                                    ? (0, eh.P0)({ text: ev.intl.string(ex.default.T8Spiu), variant: "critical" })
                                    : (0, ay.M$)(t, n).catch(mR)
                                : (0, eh.P0)({ text: ev.intl.string(ex.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mT(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([aj.A], () => aj.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(u6.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": ev.intl.string(ex.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(u9.rX, {
                children: [
                    (0, a.jsx)(u9.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: ev.intl.string(ex.default.uQpDky),
                        icon: l1.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(u9.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: ev.intl.string(ex.default.AiAz8J),
                        icon: d5.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, ay.Og)(t).catch(mR));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(u9.rX, {
                children: (0, a.jsx)(u9.fP, {
                    id: "conjure-overlay-background-blur",
                    label: ev.intl.string(ex.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, ay.Y1)(t, !i) || mR();
                    },
                }),
            }),
        ],
    });
}
function mL(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: o, height: u } = (0, mS.Ay)(),
        { captures: c, selected: d } = ab(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: eG({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                o = eG({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: o * s };
        })({ width: o, height: u }, d, l);
    return (
        i.useEffect(() => (0, mC.L0)(), []),
        (0, a.jsxs)("div", {
            className: mI.JH,
            children: [
                (0, a.jsx)(aw, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: mI.dw,
                    children: (0, a.jsx)("div", {
                        className: mI.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, a.jsx)(mg, { applicationId: t, surface: td.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(mP, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(mE, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function m$(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(mm, {
        title: ev.intl.string(ex.default.xlEjZ8),
        body: ev.intl.string(ex.default["4ByPbd"]),
        children: (0, a.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: ev.intl.string(ex.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var mD = n(409478),
    mq = n(652227);
function mF(e) {
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
            overlayWidgetSize: f = eO,
            projectId: m,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        v = (0, c.bG)([rp.A], () => null != m && null != rp.A.getSetupStartedAt(m), [m]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: mq.qs, children: (0, a.jsx)(x.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: mq.qs,
                children: (0, a.jsx)(m$, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mq.RG,
                      children: [
                          (0, eK.yf)(o, u)
                              ? g
                                  ? (0, a.jsx)(mO, { projectId: m, onResume: p })
                                  : (0, a.jsx)(mg, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === u && null != d
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mq.qs,
                                        children: (0, a.jsx)(mm, {
                                            wide: !0,
                                            title: ev.intl.string(ex.default["08U+YO"]),
                                            body: ev.intl.string(ex.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(mD.A, { applicationId: d })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(mL, { applicationId: t, projectId: m, size: f, frameOverlay: h?.(tf.ZN) })
                              : null,
                          "bot" === u && null != n && null != m
                              ? (0, a.jsx)(mA, { projectId: m, previewApplicationId: n })
                              : null,
                      ],
                  })
            : v
              ? (0, a.jsx)("div", { className: mq.qs, children: (0, a.jsx)(x.y, {}) })
              : (0, a.jsx)(f4, { className: mq.qs });
}
function mO(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, ml.Pu)(t),
        (0, a.jsx)("div", {
            className: mq.qs,
            children: (0, a.jsx)(mm, {
                wide: !0,
                title: ev.intl.string(ex.default.MMWEH2),
                body: ev.intl.string(ex.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mn.PlayIcon,
                              text: ev.intl.string(ex.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mz = n(175841),
    mG = n(156548),
    mU = n(750506),
    mB = n(867193),
    mK = n(539197),
    mH = n(977020);
function mW(e) {
    let { projectId: t } = e,
        n = (0, mK.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mK.Ie)(e);
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
    return (0, a.jsxs)("div", {
        className: mH.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [mK.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: u()(mH.hN, mH.vW), style: f(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: u()(mH.hN, mH.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: u()(mH.UE, { [mH.SP]: n.shown, [mH.Vq]: n.pressed, [mH.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mV = n(417760);
function mX(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([rE.A], () => null != e && rE.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, eb.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        o = (0, eS.CU)(n),
        f = "controlling" === t,
        m = ev.intl.string(f ? (o ? ex.default["VJW/5P"] : ex.default["+hD2Iz"]) : ex.default["h+i1r9"]),
        h =
            null != r
                ? (0, a.jsx)(d.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: ev.intl.string(ex.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: u()(mV.M0, mV.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  f
                      ? (0, a.jsx)(cy.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(mz.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(p.E, { variant: "body-sm/semibold", color: "none", className: mV.ID, children: m }),
                  f ? (0, a.jsx)(nI.A, { children: ev.intl.string(ex.default.fg1sor) }) : null,
                  f ? (0, a.jsx)("div", { className: mV.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: mV.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: mV.sp,
                      children: [
                          (0, a.jsx)(mz.SparklesIcon, { size: "sm", color: "currentColor" }),
                          f ? (0, a.jsx)(cy.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: mV.f4,
                              children: [
                                  (0, a.jsx)(p.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: mV.w9,
                                      children: m,
                                  }),
                                  f
                                      ? (0, a.jsx)(p.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: mV.Rb,
                                            children: ev.intl.string(ex.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  f ? (0, a.jsx)("div", { className: mV.lC, children: h }) : null,
              ],
          });
}
function mY(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, eS.Zv)(null != n && n === l ? t : null),
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
        c = (0, eE.Rv)(),
        d = (0, mG.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, mG.BL)(s);
    }, [o, d, s]);
    let [f, m] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tO(r());
            m((t) => (tz(t, e) ? t : e));
            let t = null == h ? null : tO(h);
            (x((e) => (tz(e, t) ? e : t)), null != h && (0, mB.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mB.C)(0));
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
            let [e] = i.useContext(mU.uY),
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
            b
                ? (0, a.jsx)("div", {
                      ref: g,
                      className: mV.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: mV.QF,
                          children: (0, a.jsx)(mX, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, tM.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(nI.A, {
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
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: mV.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: mV.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(mW, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var mQ = n(399503),
    mZ = n(853555),
    mJ = n(944100),
    m0 = n(327152),
    m1 = n(187645);
let m2 = { width: 1280, height: 720 },
    m3 = new Map(),
    m4 = !1;
function m5() {
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
    for (let [l, r] of [...m3]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            m3.delete(t),
            n.unregisterLookup(),
            mJ.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, m0.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        m3.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = m1.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    m7(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (m3.set(e, l),
                    (l.unregisterLookup = (0, mZ.Ng)(e, () => (0, f5.n5)(n, t))),
                    mJ.A.registerFrameTarget(t, n, mr.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of m3) m7(t.element, e, t.frameId);
}
function m7(e, t, n) {
    if (f0.A.getFrame(n)?.surface.type === eH.U.OVERLAY) {
        let l = eU(ts.Ay.getProject(t));
        (e.classList.remove(m1.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, m0.Pn)(n, l));
        return;
    }
    let l = tc.A.isBuilderPreviewMobile();
    e.classList.toggle(m1.L, !l);
    let r = l ? mu(tc.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, m0.Pn)(n, r ?? m2));
}
var m8 = n(873727),
    m6 = n(47671),
    m9 = n(418842),
    he = n(413599);
let ht = 0;
var hn = n(487887);
let hl = null;
var hr = n(780338),
    ha = n(782603),
    hi = n(189714);
function hs(e) {
    let { projectId: t } = e,
        n = (0, hi.iI)(t),
        l = i.useRef(null),
        r = ev.intl.string(ev.t.h850Ss);
    return (0, a.jsx)(tb.Y, {
        targetElementRef: l,
        animation: tb.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(u6.W, {
                "data-menu-migrated": !0,
                navId: `conjure-project-notifications-${t}`,
                "aria-label": r,
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(u9.rX, {
                    children: (0, a.jsx)(u9.Dr, {
                        id: n ? "unmute" : "mute",
                        label: ev.intl.string(n ? ex.default.s9rCuH : ex.default["a+i/As"]),
                        action: () => (0, hi.$L)(t, !n),
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: i } = e,
                { isShown: s } = t;
            return (0, a.jsx)(tE.Ay.Icon, {
                ref: l,
                onClick: i,
                tooltip: s ? null : r,
                icon: n ? hr.BellSlashIcon : ha.BellIcon,
                "aria-label": r,
                "aria-haspopup": "menu",
                "aria-expanded": s,
                selected: s,
            });
        },
    });
}
var ho = n(541940);
function hu(e) {
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
        [b, j] = i.useState(null),
        y = (0, tu.A)(l, s),
        k = y?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([he.A], () => (0, m8.x4)(he.A.theme)),
            l = (0, c.bG)([m6.A], () => m6.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([il.Ay], () => ({
                reducedMotion: il.Ay.useReducedMotion,
                fontScale: (0, m8.U0)(),
                highContrast: il.Ay.isHighContrastModeEnabled,
                forcedColors: il.Ay.useForcedColors,
                underlineLinks: il.Ay.alwaysShowLinkDecorations,
            })),
            d = ew.hH.useSetting(),
            f = (0, c.bG)([s7.A], () => s7.A.hidePersonalInformation),
            m = (0, m9.C)(),
            h = (0, c.bG)(
                [f0.A, tc.A],
                () =>
                    tc.A.isBuilderPreviewMobile() &&
                    f0.A.getFrame(t)?.applicationId === tc.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = i.useRef(!1),
            p = i.useRef(!1),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, f5.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++ht,
                    baseTheme: n,
                    customTheme: (0, m8.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                    formFactor: h,
                    hidePersonalInformation: f,
                };
                (0, fD.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, a, h, t, f, s, d, e, r, m, u]),
            b = i.useRef(v);
        i.useLayoutEffect(() => {
            b.current = v;
        });
        let j = i.useCallback(() => {
            g.current ||
                ((g.current = !0),
                queueMicrotask(() => {
                    ((g.current = !1), p.current || b.current());
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
                j();
            }, [l, j]),
            i.useLayoutEffect(() => {
                (v(), j());
            }, [j, v]),
            i.useLayoutEffect(() => {
                let n = (0, f5.n5)(e, t);
                null != n && n !== x.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, f5.n5)(e, t) && ((x.current = null), j());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, j]),
            i.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(b, k),
        i.useEffect(() => {
            if (null != t) return (0, mZ.Ng)(t, () => (0, f5.n5)(b, k));
        }, [t, b, k]));
    let w = i.useCallback(() => (0, f5.ow)(b, k), [b, k]),
        A = i.useCallback(() => (x ? (0, f5.ow)(b, k) : b), [x, b, k]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: u()(ho.Mh, o),
                children: [
                    d,
                    f,
                    v
                        ? null
                        : (0, a.jsx)(mY, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: A,
                              frameId: k,
                          }),
                    (0, a.jsx)("div", {
                        ref: j,
                        id: m,
                        role: null == m ? void 0 : "tabpanel",
                        "aria-labelledby": h,
                        className: ho.fm,
                        children: g,
                    }),
                ],
            }),
            p,
            v
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fK, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: w,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(nh, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: w }),
                      ],
                  }),
        ],
    });
}
function hc(e) {
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
    (0, mQ.k)(n, N);
    let M = o.type === eH.U.MAIN || (0, td.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hn.aX.LANDSCAPE : hn.aX.PORTRAIT), (hl = e));
                else {
                    if (hl !== e) return;
                    ((l = hn.aX.UNHANDLED), (hl = null));
                }
                um.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let R = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, np.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, np.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            M && ((t.current = ++mt), (0, eD.HV)(r));
        }, [r, M]),
        i.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === mt && (0, eD.HV)(null);
            };
        }, [r, M]),
        i.useEffect(() => {
            null != n &&
                ((0, eb.ensureConnection)(n),
                m4 ||
                    ((m4 = !0),
                    rE.A.addChangeListener(m5),
                    ts.Ay.addChangeListener(m5),
                    f0.A.addChangeListener(m5),
                    tc.A.addChangeListener(m5),
                    eq.A.addChangeListener(m5),
                    (0, eS.W3)(m5),
                    m5()));
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
    let L = Math.max(450, P - 320),
        $ = (0, t_.P)({ maxWidth: L, minWidth: 450 }),
        D = p || M;
    return (0, a.jsx)("div", {
        className: ho.cL,
        children: (0, a.jsx)("div", {
            ref: R,
            className: ho.LB,
            children: (0, a.jsx)(hu, {
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
                mainClassName: null == f ? void 0 : u()(ho.ez, { [ho.zt]: p }),
                content: (0, a.jsx)(mF, {
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
                        (0, a.jsx)(me, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                }),
                sidebar:
                    null != n && D
                        ? (0, a.jsx)("div", {
                              className: p ? u()(ho.v7, { [ho.z4]: $, [ho.iu]: $ && null != m }) : ho.LL,
                              children: (0, a.jsx)(tI.A, {
                                  sidebarType: tI.X.CallChatSidebar,
                                  maxWidth: L,
                                  capturePointer: !0,
                                  children: (0, a.jsx)("div", {
                                      className: ho.cO,
                                      children: j
                                          ? (0, a.jsx)(fM, { projectId: n, onClose: y ?? (() => {}) }, n)
                                          : (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(fJ.Ay, { projectId: n }),
                                                    (0, a.jsx)(hd, { projectId: n, onClose: x }),
                                                    (0, a.jsx)("div", {
                                                        className: ho.cb,
                                                        children: (0, a.jsx)(
                                                            cW,
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
function hd(e) {
    let { projectId: t, onClose: n } = e,
        l = ev.intl.string(ex.default.vLoFRs),
        r = ev.intl.string(ex.default.JD6Oit);
    return (0, a.jsx)(tE.Ay, {
        "aria-label": l,
        toolbar: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(hs, { projectId: t }),
                (0, a.jsx)(tE.Ay.Icon, { icon: tN.PanelClosedIcon, tooltip: r, "aria-label": r, onClick: n }),
            ],
        }),
        children: (0, a.jsx)(tE.Ay.Title, { children: l }),
    });
}
var hf = n(473935),
    hm = n(785389),
    hh = n(889558),
    hg = n(860402);
let hp = new Set();
var hx = n(733791),
    hv = n(127139),
    hb = n(256616),
    hj = n(842615);
function hy(e) {
    (0, eh.P0)({ text: e, variant: "critical" });
}
function hk(e) {
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
        h = (0, hj.A)(t, n),
        g = (0, hx.CU)(t),
        { pending: p, connect: x } = (function (e, t) {
            let [n, l] = i.useState(hp),
                r = i.useRef(hp),
                a = i.useCallback((e) => {
                    ((r.current = (0, hm.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, hm.K9)(r.current, n.type);
                        null != i &&
                            ((r.current = i),
                            l(i),
                            (async function () {
                                let l = await (0, hg.JI)(e, n.type);
                                (a(n.type), "url" === l.type)
                                    ? (0, hh.h)({ href: l.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, hm.rq)(l.error)
                                              ? ev.intl.string(ex.default["jCQ/1B"])
                                              : ev.intl.string(ex.default.POxkSh),
                                      );
                            })().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(t, hy),
        v = (0, c.bG)([rI.A], () => rI.A.getDeclaredConnections(t), [t]),
        b = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: ev.intl.string(ex.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
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
            return a;
        })({ canRefresh: !1, refreshPending: !1, offers: i.useMemo(() => (0, hm.Xl)(v), [v]), connectPending: p }),
        j = i.useMemo(() => new Map(v.map((e) => [e.type, e])), [v]);
    return (0, a.jsxs)(u6.W, {
        "data-menu-migrated": !0,
        navId: `conjure-editor-actions-${t}`,
        "aria-label": ev.intl.string(ev.t.ogxXGq),
        onClose: m,
        onSelect: m,
        children: [
            (0, a.jsxs)(u9.rX, {
                children: [
                    (0, a.jsx)(u9.Dr, { id: "export", label: ev.intl.string(ex.default.WsEEP7), action: s }),
                    (0, a.jsx)(u9.Dr, { id: "history", label: ev.intl.string(ex.default["3hIVou"]), action: o }),
                ],
            }),
            uq.p5 || null != d
                ? (0, a.jsxs)(u9.rX, {
                      children: [
                          uq.p5
                              ? (0, a.jsx)(u9.Dr, {
                                    id: "copy-link",
                                    label: ev.intl.string(ev.t.WqhZss),
                                    icon: l2.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: l2.LinkIcon },
                                    action: () => (0, hv.V)(l, t),
                                })
                              : null,
                          uq.p5
                              ? (0, a.jsx)(u9.Dr, {
                                    id: "copy-project-id",
                                    label: ev.intl.string(ex.default["nm/zuU"]),
                                    icon: hf.IdIcon,
                                    leadingAccessory: { type: "icon", icon: hf.IdIcon },
                                    action: () => (0, hv.o)(t),
                                })
                              : null,
                          null != d
                              ? (0, a.jsx)(u9.sL, {
                                    id: "debug",
                                    label: ev.intl.string(ex.default.Mt5k9d),
                                    leftIcon: uD.BugIcon,
                                    leadingAccessory: { type: "icon", icon: uD.BugIcon },
                                    checked: f,
                                    action: d,
                                })
                              : null,
                      ],
                  })
                : null,
            null != u || b.length > 0
                ? (0, a.jsxs)(u9.rX, {
                      children: [
                          null != u
                              ? (0, a.jsx)(u9.Dr, {
                                    id: "connect-tool",
                                    label: ev.intl.string(ex.default.yOIql5),
                                    action: u,
                                })
                              : null,
                          b.map((e) =>
                              (0, a.jsx)(
                                  u9.Dr,
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
                ? (0, a.jsxs)(u9.rX, {
                      children: [
                          g
                              ? (0, a.jsx)(u9.Dr, {
                                    id: "unpublish",
                                    label: ev.intl.string(ex.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let e = ts.Ay.getProject(t);
                                        null != e && (0, hb.A)({ project: e });
                                    },
                                })
                              : null,
                          (0, a.jsx)(u9.Dr, {
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
function hw(e) {
    let t = i.useRef(null),
        n = ev.intl.string(ev.t["UKOtz+"]);
    return (0, a.jsx)(tb.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tb.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, a.jsx)(hk, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: i } = l;
            return (0, a.jsx)(b.A.Icon, {
                ref: t,
                icon: iN.MoreHorizontalIcon,
                tooltip: i ? null : n,
                "aria-label": n,
                "aria-haspopup": "menu",
                "aria-expanded": i,
                selected: i,
                onClick: r,
            });
        },
    });
}
var hA = n(663417),
    hS = n(646270),
    hC = n(31300),
    hN = n(831453),
    hI = n(872344),
    hE = n(64656),
    h_ = n(766367),
    hM = n(113494),
    hR = n(86147),
    hP = n(729475),
    hT = n(12470),
    hL = n(811893),
    h$ = n(715482),
    hD = n(869146),
    hq = n(475815);
function hF(e) {
    let {
            projectId: t,
            previewPaused: n,
            pauseDisabled: l,
            onTogglePreviewPaused: r,
            drawing: i,
            fullscreenFrame: s,
            onTogglePopout: o,
            poppedOut: u,
            onCloseMenu: d,
        } = e,
        f = (function (e, t) {
            let n = (0, mG.cR)(e?.id ?? null),
                l = (0, eS.Zv)(t),
                r = (0, c.bG)(
                    [hD.A, f0.A],
                    () => null != e && hD.A.getWindowOpen(lt.MLl.ACTIVITY_POPOUT) && f0.A.getMainFrame()?.id === e.id,
                    [e],
                );
            if (!(0, tf.x1)(e) || r || l) return null;
            let a = (0, mG.fl)(e.id);
            return null != a && (0, hq.Ub)(a) ? { active: n, toggle: () => (0, mG.U8)(e.id) } : null;
        })(s, t),
        m = n ? mn.PlayIcon : hM.PauseIcon,
        h = f?.active === !0 ? hR.FullscreenExitIcon : hP.FullscreenEnterIcon,
        g = u ? hT.WindowReturnIcon : hL.WindowLaunchIcon,
        p = ev.intl.string(ex.default.WjdaFw);
    return (0, a.jsx)(u6.W, {
        "data-menu-migrated": !0,
        navId: `conjure-frame-actions-${t}`,
        "aria-label": ev.intl.string(ev.t.ogxXGq),
        onClose: d,
        onSelect: d,
        children: (0, a.jsxs)(u9.rX, {
            children: [
                (0, a.jsx)(u9.Dr, {
                    id: "toggle-pause",
                    icon: m,
                    leadingAccessory: { type: "icon", icon: m },
                    label: ev.intl.string(n ? ex.default.ZKd2Cw : ex.default.VHxerm),
                    subtext: i ? p : void 0,
                    disabled: l || i,
                    action: r,
                }),
                null != f
                    ? (0, a.jsx)(u9.Dr, {
                          id: "toggle-fullscreen",
                          icon: h,
                          leadingAccessory: { type: "icon", icon: h },
                          label: ev.intl.string(f.active ? ev.t.Z7MyNB : ev.t.OIDkcp),
                          action: f.toggle,
                      })
                    : null,
                null != o
                    ? (0, a.jsx)(u9.Dr, {
                          id: "toggle-popout",
                          icon: g,
                          leadingAccessory: { type: "icon", icon: g },
                          label: ev.intl.string(u ? ev.t["NKV/MO"] : ev.t["3Zypbv"]),
                          subtext: i && !u ? p : void 0,
                          disabled: i && !u,
                          action: o,
                      })
                    : null,
            ],
        }),
    });
}
function hO(e) {
    let t = i.useRef(null),
        n = ev.intl.string(ev.t["UKOtz+"]);
    return (0, a.jsx)(tb.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: tb.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, a.jsx)(hF, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: i } = l;
            return (0, a.jsx)(tE.Ay.Icon, {
                ref: t,
                icon: h$.ChevronLargeDownIcon,
                tooltip: i ? null : n,
                "aria-label": n,
                "aria-haspopup": "menu",
                "aria-expanded": i,
                selected: i,
                onClick: r,
            });
        },
    });
}
var hz = n(705609);
function hG(e) {
    let {
            projectId: t,
            projectName: n,
            toolbar: l,
            activeMode: r,
            activeTarget: i,
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
        M = (0, hE.A)(y?.id),
        { pending: R, refresh: P } = (0, hI.A)(u),
        T = ef(t) && !c,
        L = null;
    if ("widget" === r) {
        if (null != u) {
            let e = ev.intl.string(ex.default["/nOi5n"]);
            L = (0, a.jsx)(tE.Ay.Icon, { icon: hA.RefreshIcon, tooltip: e, "aria-label": e, disabled: R, onClick: P });
        }
    } else if ((0, tf.x1)(k)) {
        let e = ev.intl.string(ex.default.FZIHQN);
        L = (0, a.jsx)(tE.Ay.Icon, { icon: hA.RefreshIcon, tooltip: e, "aria-label": e, disabled: w, onClick: A });
    }
    let $ = p(C),
        D = p(E),
        q = S ? hS.MobilePhoneIcon : hC.ScreenIcon;
    return (0, a.jsxs)("div", {
        className: hz.M,
        children: [
            (0, a.jsx)(tn, {
                targets: b,
                activeTarget: i,
                projectName: n,
                onSelect: j,
                closableTarget: M ? s : null,
                onClose: o,
                panelId: x,
            }),
            (0, a.jsxs)("div", {
                className: hz.o,
                children: [
                    v,
                    L,
                    "frame" === r
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(h_.A, { frame: y }),
                                  S
                                      ? (0, a.jsx)(tE.Ay.Icon, {
                                            icon: hN.RotateIcon,
                                            tooltip: D,
                                            "aria-label": D,
                                            selected: I,
                                            disabled: g,
                                            onClick: _,
                                        })
                                      : null,
                                  (0, a.jsx)(tE.Ay.Icon, {
                                      icon: q,
                                      tooltip: $,
                                      "aria-label": $,
                                      disabled: g,
                                      onClick: N,
                                  }),
                                  (0, a.jsx)(hO, {
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
var hU = n(705427),
    hB = n(606128),
    hK = n(323140);
function hH(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: x, guildId: y } = e,
        k = i.useContext(eT.A),
        [w] = i.useState(() => (null != k ? e$.A.getProjectView(k) : null)),
        [A, S] = i.useState(w?.chatOpen ?? !0),
        [C, N] = i.useState(w?.debugOpen ?? !1);
    i.useEffect(() => {
        null != k && (0, eL.g7)(k, { chatOpen: A, debugOpen: C });
    }, [k, A, C]);
    let I = i.useCallback(
            (e) => {
                null != k && (0, eL.g7)(k, { previewSelection: e });
            },
            [k],
        ),
        E = eA(),
        _ = (0, eC.f)("ConjureSelectedProjectScreen"),
        M = i.useCallback(() => S(!0), []),
        R = i.useCallback(() => {
            (N(!1), S(!0));
        }, []),
        { restoreState: P, handleRestoreVersion: T } = (function (e, t) {
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
                                (0, eM.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
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
            isPreviewApplicationLoading: G,
            checkingIntegration: U,
            previewReady: B,
            hasFrame: K,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [ts.Ay, ti.A],
                    () => (null == l ? null : (ts.Ay.getIntegrationStatus(l) ?? ti.A.getIntegrationStatus(l))),
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
            i.useEffect(() => {
                g &&
                    !d &&
                    null != o &&
                    (async function (e) {
                        try {
                            await (0, tr.TA)(e);
                        } catch {}
                    })(o);
            }, [h, d, g, o]);
            let p = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, ta.CG)(l)?.catch(() => (0, ta.U1)(l, e.signal)) ?? (0, ta.U1)(l, e.signal));
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
            appChannel: ea,
            setAppChannel: ei,
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
                    frameSurfaceOptions: a,
                    previewAppChannels: s,
                    setMode: o,
                    setFrameSurface: u,
                    setAppChannel: d,
                } = e,
                f = i.useMemo(
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
                        })(n, a, s),
                    [n, a, s],
                ),
                m = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (u(e.surface), null != e.appChannel && d?.(e.appChannel)), o(e.mode));
                    },
                    [d, u, o],
                ),
                h = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewMobile()),
                g = ev.intl.string(h ? ex.default.tKGF0Q : ex.default.peqEOY),
                p = i.useCallback(() => (0, eD.GG)(!h), [h]),
                x = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewLandscape()),
                v = ev.intl.string(x ? ex.default.tunI2l : ex.default.DoNdjA),
                b = i.useCallback(() => (0, eD.Lw)(!x), [x]),
                j = (0, td.jS)(t),
                y = i.useMemo(() => (0, td.Op)(j, r), [j, r]),
                k = (0, tu.A)(t?.preview_application_id ?? null, y),
                w = (0, tu.A)(t?.preview_application_id ?? null, tf.ZN),
                A = "overlay" === l ? w : k,
                S = (0, tf.x1)(A) && A.data.proxyTicketRefreshing,
                C = i.useCallback(() => {
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
            setAppChannel: ei,
        }),
        { previewSurface: ez, previewFrame: eG } = eO,
        eW = (0, v.A)(eG),
        eV = ey && !ew,
        eX = ef($),
        eY = eW.isPoppedOut ? ex.default.pmkK8i : ew ? ex.default.Yet11p : null,
        eZ = null != eY;
    function eJ(e) {
        return null == eY ? e : ev.intl.formatToPlainString(eY, { label: e });
    }
    let e0 = i.useCallback(() => S(!1), []),
        {
            designFeedbackActive: e1,
            designFeedbackToggleRef: e2,
            agentDrivingPreview: e3,
            designFeedbackLabel: e4,
            handleToggleDesignFeedback: e5,
        } = (function (e, t, n) {
            let { active: l } = z(e);
            i.useEffect(() => {
                null != e && l && !t && D(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, eS.Zv)(e),
                s = ev.intl.string(a ? ex.default.Sme0T0 : l ? ex.default.vn5Rzu : ex.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void D(e);
                        (n(), L(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })($, eV && (!eW.isPoppedOut || eX), R),
        [e7] = i.useState(() => j.isPlatformEmbedded && (0, tl.qM)());
    i.useEffect(() => {
        null != $ && eX && !eV && eo($);
    }, [$, eX, eV]);
    let e8 = i.useCallback(() => {
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
        e6 = i.useCallback(() => {
            null != $ && es($);
        }, [$]),
        te =
            eZ && !eX
                ? eJ(ev.intl.string(ex.default["XWU+XF"]))
                : ev.intl.string(eX ? ex.default.tuQ5f3 : e3 ? ex.default.agwlrD : ex.default["XWU+XF"]),
        tt = eZ ? eJ(ev.intl.string(ex.default["cl/Jyl"])) : e4,
        tn = i.useCallback(() => {
            N((e) => !e && (S(!0), !0));
        }, []),
        tb = i.useCallback(() => N(!1), []),
        tj = i.useCallback(() => {
            null != $ && (0, eD._j)($);
        }, [$]),
        ty = i.useCallback(() => {
            null != $ && (ew ? (0, eD._j)($) : (0, eD.di)($, eG?.id));
        }, [$, ew, eG?.id]),
        tk = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eG?.id), (0, eb.Bn)(e), (0, tm.r)(t)), x());
        }, [s, eG?.id, x]),
        tw =
            ((t = (0, ep.z)(s)),
            (l = i.useCallback(
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
        tA = i.useCallback(async () => {
            null != $ && (await (0, tp.vL)($, y));
        }, [y, $]),
        tN = (0, eK.aN)(Y, {
            installScope: s?.install_scope ?? null,
            previewReady: B,
            integrationInstalled: O?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tA, loading: G }
            : U && null == O
              ? { type: "checking" }
              : void 0,
        tI = (0, c.bG)([ts.Ay], () => null != $ && ts.Ay.isProjectDeleting($), [$]);
    i.useEffect(() => {
        ((null == s && o) || tI) && x();
    }, [s, o, tI, x]);
    let {
            publishOptions: tE,
            publish: t_,
            publishing: tM,
            variant: tR,
            text: tP,
            pendingChanges: tT,
        } = (0, tv.A)($, y, U || G),
        tL = (0, tx.A)($, t_, tE),
        t$ = "frame" === Y && !ew && (0, tf.x1)(eG) && (eW.isPoppedOut || eW.canPopout),
        tD = i.useCallback(() => {
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
                        return (n) => (0, a.jsx)(t, { ...n, ...e });
                    }));
            }
        }, [s, P?.status, T]);
    (0, eI.z)($, tD);
    let tq = null == s ? void 0 : () => (0, tC.A)(s.id, { guildId: y, isPreview: !0, publishOptions: tE }),
        tF = X.modes.includes("widget") && "unavailable-authorization-revoked" !== X.profileState ? ed : null,
        tO =
            null != t_ && null != s && ("primary" === tR || tM)
                ? (0, a.jsx)("div", {
                      className: hK.As,
                      onMouseDown:
                          null == $ || t_.disabled || tM
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tg.dx)($);
                                },
                      children: (0, a.jsx)(d.$, {
                          size: "sm",
                          variant: "primary",
                          icon: tM ? hW : void 0,
                          text: tP,
                          onClick: () => tL("header"),
                      }),
                  })
                : null,
        tz = ev.intl.string(ex.default.FzfmQ8),
        tG = ev.intl.string(ex.default.xjJAQm),
        tU = (0, a.jsx)(hU.A, {
            title: s?.name ?? ev.intl.string(ex.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tq,
            draft: tT,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: hK.FO,
                          children: [
                              (0, a.jsx)(b.A.Icon, {
                                  icon: f.SettingsIcon,
                                  tooltip: tz,
                                  "aria-label": tz,
                                  onClick: tq,
                              }),
                              (0, a.jsx)(hw, {
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
                              (0, a.jsxs)("div", {
                                  className: hK.Cl,
                                  children: [(0, a.jsx)(tS, { project: s, guildId: y }), tO],
                              }),
                              A
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("div", { className: hK.YJ, "aria-hidden": !0 }),
                                            (0, a.jsx)(b.A.Icon, {
                                                icon: m.PanelOpenIcon,
                                                tooltip: tG,
                                                "aria-label": tG,
                                                onClick: M,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        }),
        tB = i.useId(),
        tK = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null == e
                ? null
                : "frame" !== e
                  ? { mode: e }
                  : null == n
                    ? { mode: e, surface: t }
                    : { mode: e, surface: t, appChannel: n };
        })(Y, Z, ea),
        tH = ey
            ? e7
                ? (0, a.jsx)(b.A.Icon, {
                      icon: h.ExperimentalDirectSelectIcon,
                      iconClassName: hK.D8,
                      tooltip: te,
                      "aria-label": te,
                      selected: eX,
                      disabled: (eZ || e3) && !eX,
                      onClick: eX ? e6 : e8,
                  })
                : (0, a.jsx)(b.A.Icon, {
                      ref: e2,
                      icon: h.ExperimentalDirectSelectIcon,
                      iconClassName: hK.D8,
                      tooltip: tt,
                      "aria-label": tt,
                      selected: e1,
                      disabled: eZ || e3,
                      onClick: e5,
                  })
            : null,
        tW =
            null != s && (null == W ? V : "nothing_built" !== W)
                ? (0, a.jsx)(hG, {
                      editToggle: tH,
                      projectId: s.id,
                      projectName: s.name,
                      toolbar: eO,
                      activeMode: Y,
                      activeTarget: tK,
                      frameTarget: { mode: "frame", surface: Z, ...(null == ea ? {} : { appChannel: ea }) },
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
    return (0, a.jsxs)("div", {
        className: u()(hK.nj, hB.T),
        children: [
            tw.importInput,
            (0, a.jsx)("main", {
                className: hK.JX,
                children: F
                    ? (0, a.jsx)("div", {
                          className: hK.j5,
                          children: (0, a.jsx)("div", {
                              className: hK.sD,
                              children: (0, a.jsx)(g.D, {
                                  variant: "heading-lg/semibold",
                                  children: ev.intl.string(ex.default.i7PaZ5),
                              }),
                          }),
                      })
                    : null == s
                      ? (0, a.jsxs)("div", {
                            className: hK.j5,
                            children: [
                                tU,
                                (0, a.jsxs)("div", {
                                    className: hK.sD,
                                    children: [
                                        (0, a.jsx)(g.D, {
                                            variant: "heading-lg/semibold",
                                            children: ev.intl.string(ex.default.G1WwgK),
                                        }),
                                        (0, a.jsx)(p.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: ev.intl.string(ex.default.fINulo),
                                        }),
                                        (0, a.jsx)(d.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: ev.intl.string(ex.default["WFJ/vb"]),
                                            onClick: () => (0, ta.listProjects)(y),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : (0, a.jsx)(tp.bI.Provider, {
                            value: tE,
                            children: (0, a.jsx)(
                                hc,
                                {
                                    projectId: s.id,
                                    designFeedbackToggleRef: e2,
                                    applicationId: s.preview_application_id,
                                    previewApplicationId: s.preview_application_id,
                                    surface: ez,
                                    frameLaunchParams: ec,
                                    header: tU,
                                    controlBar: tW,
                                    previewPanelId: null == tW ? void 0 : tB,
                                    previewPanelLabelledBy: null == tW || null == tK ? void 0 : e9(tB, tK),
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
function hW() {
    return (0, a.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE, className: hK.Hv, itemClassName: hK.C5 });
}
