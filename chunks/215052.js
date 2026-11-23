n.d(t, { A: () => gd });
var l,
    r,
    i = n(477900),
    a = n(582128),
    s = n.t(a, 2),
    o = n(503698),
    u = n.n(o),
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
    y = n(723702),
    k = n(839214);
n(321073);
let w = Object.freeze({ x: 0.5, y: 0.5 });
function A(e) {
    return "" !== e.trim();
}
function S(e) {
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
function C(e) {
    let { kind: t, name: n } = S(e);
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
let I = "[conjure:selected] ",
    E = " \u2014 ";
function _(e) {
    if (!e.startsWith(I)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(I.length),
        i = r.indexOf(E),
        a = (-1 === i ? r : r.slice(0, i)).trim();
    return "" === a ? null : { label: a, body: l };
}
let M = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    R = new Map(),
    P = new Set();
function T(e) {
    return R.get(e) ?? M;
}
function L(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? R.set(e, t) : R.delete(e), [...P]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function $(e) {
    let t = T(e);
    t.active || L(e, { ...t, active: !0 });
}
function D(e) {
    let t = T(e);
    t.active && L(e, { ...t, active: !1 });
}
function q(e) {
    R.has(e) && L(e, M);
}
function O(e, t) {
    let n = T(e);
    n.active && L(e, { ...n, context: t });
}
function F(e, t) {
    return null != t && e.authorId === t;
}
function z(e) {
    return (
        P.add(e),
        () => {
            P.delete(e);
        }
    );
}
function G(e) {
    let t = a.useCallback(() => (null == e ? M : T(e)), [e]);
    return a.useSyncExternalStore(z, t, t);
}
(n(134528), n(947204));
let U = { past: [], present: [], future: [] };
function B(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function K(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function H(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => K(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: K(e.from, t, n), to: K(e.to, t, n) };
        case "text":
            return { ...e, at: K(e.at, t, n) };
    }
}
function W(e) {
    return e.some((e) => "erase" !== e.kind);
}
function V(e, t) {
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
function X(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        i = l * l + r * r,
        a = 0 === i ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / i));
    return Math.hypot(e.x - (t.x + a * l), e.y - (t.y + a * r));
}
function Y(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function Z(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => Y(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                i = n.map((e) => e.y),
                a = Math.min(...r) - l,
                s = Math.min(...i) - l;
            return { x: a, y: s, width: Math.max(...r) + l - a, height: Math.max(...i) + l - s };
        }
        case "circle":
        case "square": {
            let n = Y(e.from, t),
                l = Y(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = Y(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function Q(e) {
    return W(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let J = [3, 6, 12],
    ee = [10, 20, 40],
    et = new Map(),
    en = (0, k.D)(() => ({ byProject: {} })),
    el = {
        active: !0,
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: U,
        sketchDismissedFor: null,
        chatFocusRequest: 0,
        keptStill: null,
    };
function er(e) {
    return en.getState().byProject[e] ?? null;
}
function ei(e, t) {
    let n = er(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = en.getState();
    en.setState({ byProject: { ...r, [e]: l } });
}
function ea(e, t) {
    null == t ? et.delete(e) : et.set(e, t);
}
function es(e) {
    return et.get(e)?.() ?? Promise.resolve(null);
}
function eo(e) {
    let t = er(e);
    if (null != t) {
        if (!Q(t)) return void eu(e);
        (t.active && ei(e, (t) => ({ ...t, active: !1, keptStill: es(e) })), q(e));
    }
}
function eu(e) {
    if (null == er(e)) return;
    let { [e]: t, ...n } = en.getState().byProject;
    (en.setState({ byProject: n }), q(e));
}
function ec(e, t) {
    null != er(e) &&
        (ei(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? $(e) : D(e));
}
function ed(e, t) {
    ei(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return B(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return B(
                        e,
                        e.present.map((e) => (e.id === t.id ? H(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : B(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : B(e, []);
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
function ef(e) {
    ei(e, (e) => ({ ...e, chatFocusRequest: e.chatFocusRequest + 1 }));
}
function em(e) {
    return en.useState((t) => null != e && t.byProject[e]?.active === !0);
}
var eh = n(314116),
    eg = n(858899),
    ep = n(949757),
    ex = n(800202),
    ev = n(191850),
    eb = n(792996),
    ej = n(540665);
let ey = new Set(),
    ek = null;
function ew(e, t) {
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
                ey.add(t),
                () => {
                    ey.delete(t);
                }
            );
        }, [e]));
}
var eA = n(253932);
function eS() {
    return eA.Q_.useSetting() || !1;
}
var eC = n(573083),
    eN = n(971079),
    eI = n(61577),
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
let ez = { width: 320, height: 240 };
function eG(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : ez;
}
function eU(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function eB(e) {
    return eG(e?.preview_overlay_widget ?? null);
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
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function eZ(e, t) {
    if ("bot" === e.mode) return eb.intl.string(ev.default.gThNz6);
    if ("frame" === e.mode && e.surface === eW.U.APP_CHANNEL) {
        let n = e.appChannel ?? eV(t);
        if ("" !== n) return `#${n}`;
    }
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, eX.X)(e.surface)
                : eb.intl.formatToPlainString(ev.default["6xVl+N"], {
                      surface: (0, eX.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return eb.intl.string(ev.default.y5GiL1);
        case "overlay":
            return eb.intl.string(ev.default["2940LX"]);
        case "bot":
            return eb.intl.string(ev.default.tjpaGN);
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
    e9 = n(388155);
function e6(e, t) {
    return `${e}-tab-${eY(t).replace(/\s+/g, "-")}`;
}
function te(e, t) {
    let n = e.getBoundingClientRect(),
        l = t.getBoundingClientRect();
    l.left < n.left ? (e.scrollLeft -= n.left - l.left) : l.right > n.right && (e.scrollLeft += l.right - n.right);
}
let tt = { [eW.U.APP_CHANNEL]: e0.AppsIcon, [eW.U.VOICE_CHANNEL]: e1.VoiceNormalIcon, [eW.U.MAIN]: e2.ActivitiesIcon };
function tn(e) {
    let { targets: t, activeTarget: n, projectName: l, onSelect: r, closableTarget: s, onClose: o, panelId: c } = e,
        f = null == n ? null : eY(n),
        m = null == s ? null : eY(s),
        h = t.findIndex((e) => eY(e) === m),
        g = t.some((e) => eY(e) === f) ? f : t.length > 0 ? eY(t[0]) : null,
        p = eb.intl.string(ev.default["/TlGcK"]),
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
    })(v, t);
    async function k(e) {
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
    function w(e) {
        let t = v.current,
            n = e.currentTarget.closest(`.${e9.Mf}`);
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
        className: u()(e9.vR, { [e9.e$]: y.left, [e9.Rh]: y.right }),
        children: [
            (0, i.jsx)("div", {
                ref: b,
                className: e9.gj,
                role: "tablist",
                "aria-label": eb.intl.string(ev.default.I2ucou),
                children: t.map((e, t) => {
                    let n = eY(e),
                        a = n === f,
                        s = eZ(e, l),
                        o = (function (e) {
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
                            className: u()(e9.Mf, { [e9.yR]: a, [e9.P5]: t === h, [e9.h5]: h >= 0 && t > h }),
                            children: (0, i.jsxs)(e7.D, {
                                id: e6(c, e),
                                className: e9.eg,
                                role: "tab",
                                "aria-selected": a,
                                "aria-controls": a ? c : void 0,
                                tabIndex: n === g ? 0 : -1,
                                onClick: () => r(e),
                                onKeyDown: k,
                                onFocus: w,
                                children: [
                                    (0, i.jsx)(o, { size: "sm", color: "currentColor", className: e9.Ll }),
                                    (0, i.jsx)(x.E, {
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
            null != A
                ? (0, i.jsx)(d.m, {
                      position: "bottom",
                      text: p,
                      ariaHidden: !0,
                      children: (0, i.jsx)(e7.D, {
                          className: e9.b,
                          onClick: o,
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
    to = n(625180),
    tu = n(672929),
    tc = n(111534),
    td = n(754027),
    tf = n(165610),
    tm = n(738604),
    th = n(485104),
    tg = n(141299),
    tp = n(457827),
    tx = n(722701),
    tv = n(962998),
    tb = n(585412),
    tj = n(719593),
    ty = n(265872),
    tk = n(405433),
    tw = n(42473),
    tA = n(811587),
    tS = n(95264),
    tC = n(412073);
function tN(e) {
    var t;
    let l,
        r,
        { project: s, guildId: o } = e,
        d =
            ((l = s?.id),
            (null !=
            (r = (0, c.bG)([tx.A], () => (null == l ? null : (tx.A.getPublishStatus(l)?.publishState ?? null)), [l]))
                ? (0, tA.l)(r)
                : (s?.supported_surfaces?.length ?? 0) > 0) && (0, ts.H_)(s)),
        { canShare: f } =
            ((t = s.id),
            (0, c.cf)(
                [ts.Ay, tx.A],
                () => {
                    let e = ts.Ay.getProject(t),
                        n = tx.A.getPublishStatus(t)?.publishState,
                        l = null != e && (0, ts.PV)(e);
                    return { canShare: null != e && null != n && (l ? "nothing_built" !== n : (0, tA.l)(n)) };
                },
                [t],
            )),
        m = a.useCallback(() => {
            null != s && (0, tS.A)(s, o);
        }, [s, o]),
        h = a.useRef(null);
    if (!d && !f) return null;
    let g = eb.intl.string(ev.default.XWgAfc),
        p = eb.intl.string(eb.t.RDE0Sc);
    return (0, i.jsx)(ty.Q, {
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
                className: u()(tC.Os, { [tC.q6]: l }),
                children: [
                    d
                        ? (0, i.jsx)(tw.A, {
                              className: u()(tC.MX, tC.mz, { [tC.JA]: f }),
                              icon: (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "none", children: g }),
                              "aria-label": g,
                              tooltipText: null,
                              onClick: m,
                          })
                        : null,
                    f
                        ? (0, i.jsx)(tw.A, {
                              className: u()(tC.MX, tC.uM, { [tC.w9]: d }),
                              icon: tk.ShareIcon,
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
var tI = n(616334),
    tE = n(450030),
    t_ = n(812771),
    tM = n(58736),
    tR = n(743898),
    tP = n(333007),
    tT = n(621466),
    tL = n(775121),
    t$ = n(989145),
    tD = n(81369),
    tq = n(826745),
    tO = n(34595),
    tF = n(470779);
function tz(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
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
            pasteFiles: k,
            removeDraft: w,
            settled: A,
            takeRefs: S,
        } = (0, tO.FM)({ projectId: t, surface: "design", onUploadFile: g }),
        C = a.useRef(null),
        N = (m || j.length > 0) && A && !h,
        I = a.useCallback(() => {
            if (!N) return;
            let e = S();
            c(e.length > 0 ? e : void 0);
        }, [N, S, c]),
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
        className: u()(tF.M0, { [tF.ho]: E && !h, [tF.ET]: h }),
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
                              className: tF.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (y(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, i.jsx)(d.m, {
                              position: "bottom",
                              text: eb.intl.string(ev.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, i.jsx)("button", {
                                  type: "button",
                                  className: tF.tY,
                                  onClick: () => C.current?.click(),
                                  "aria-label": eb.intl.string(ev.default.lgvqSB),
                                  children: (0, i.jsx)(tD.FileUpIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tF.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, i.jsx)(tq.y, {
                autoFocus: !0,
                rows: 1,
                className: tF.hF,
                value: s,
                placeholder: v ?? ("" === r ? eb.intl.string(ev.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": b ?? eb.intl.string(ev.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: h || !x ? void 0 : k,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), f());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), I());
                },
            }),
            j.length > 0
                ? (0, i.jsx)("div", {
                      className: tF.ZO,
                      children: j.map((e) => (0, i.jsx)(tO.Nl, { draft: e, onRemove: w }, e.localId)),
                  })
                : null,
        ],
    });
}
function tG(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tU(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tB(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = a.useState(() => (t ? tG(e()) : null));
    return (
        a.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tG(e());
                l((e) => (tU(e, t) ? e : t));
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
var tK = n(876798),
    tH = n(408278),
    tW = n(48507),
    tV = n(193885),
    tX = n(744898),
    tY = n(803656),
    tZ = n(241326),
    tQ = n(972213),
    tJ = n(646514);
function t0(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function t1(e, t, n) {
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
let t2 = t1("red", t0(tJ.A.unsafe_rawColors.RED_400), () => eb.intl.string(ev.default.tvXfjt)),
    t3 = [
        t2,
        t1("yellow", t0(tJ.A.unsafe_rawColors.YELLOW_300), () => eb.intl.string(ev.default.FYuaJ1)),
        t1("green", t0(tJ.A.unsafe_rawColors.GREEN_360), () => eb.intl.string(ev.default["Vv+paS"])),
        t1("blue", t0(tJ.A.unsafe_rawColors.BLUE_345), () => eb.intl.string(ev.default.k9b1QJ)),
        t1("white", t0(tJ.A.unsafe_rawColors.WHITE), () => eb.intl.string(ev.default["1sOXwH"])),
    ];
function t4(e) {
    return t3.find((t) => t.id === e) ?? t2;
}
var t5 = n(39416);
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
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function t8(e) {
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
function t9(e) {
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
function t6(e) {
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
let ne = J.map((e) => t6(Math.min(16, e + 3))),
    nt = ee.map((e) => t6(Math.min(16, e / 2.5))),
    nn = [ev.default.jZtZUr, ev.default.cTQdD0, ev.default.J3ucEg],
    nl = {
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
            label: () => eb.intl.string(ev.default.oIZQbm),
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
            label: () => eb.intl.string(ev.default.ARNVr7),
        },
    };
function nr(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, i.jsx)(d.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)("span", {
            className: t5.z6,
            "data-active": l ? "" : void 0,
            children: (0, i.jsx)(tK.k, {
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
function ni(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, i.jsx)(d.m, {
        text: n,
        position: "left",
        children: (0, i.jsx)(tH.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function na(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = a.useState(!1),
        u = a.useCallback(() => o(!1), []),
        c = a.useCallback(() => o((e) => !e), []);
    return (0, i.jsxs)("div", {
        className: t5.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, i.jsx)("div", {
                      className: t5.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function ns(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: a, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: f } = n,
        m = t4(n.colorId),
        h = nl[u],
        g = eb.intl.string(ev.default.hUm825),
        p = eb.intl.string(ev.default.n5IA3a),
        x = eb.intl.string(ev.default.r5dX6t),
        v = eb.intl.string(ev.default.VfYqDq);
    return (0, i.jsxs)("div", {
        className: t5.t$,
        children: [
            (0, i.jsx)("div", {
                className: t5.NT,
                children: (0, i.jsx)(nr, {
                    icon: t8,
                    label: eb.intl.string(ev.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => ec(t, "pick"),
                }),
            }),
            (0, i.jsxs)("div", {
                className: t5.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": eb.intl.string(ev.default["0IAEFf"]),
                children: [
                    (0, i.jsx)(nr, {
                        icon: t7,
                        label: eb.intl.string(ev.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => ec(t, "move"),
                    }),
                    (0, i.jsx)(nr, {
                        icon: tW.LettersIcon,
                        label: eb.intl.string(ev.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => ec(t, "text"),
                    }),
                    (0, i.jsx)(na, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(nr, {
                                icon: tV.PaintbrushThinIcon,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (ec(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            ne.map((n, l) =>
                                (0, i.jsx)(
                                    nr,
                                    {
                                        icon: n,
                                        label: eb.intl.string(nn[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (ei(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), D(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(na, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, i.jsx)(nr, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (ec(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(nl).map((n) =>
                                (0, i.jsx)(
                                    nr,
                                    {
                                        icon: nl[n].icon,
                                        label: nl[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (ec(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, i.jsx)(na, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, i.jsx)(nr, {
                                icon: t9,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (ec(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            nt.map((n, l) =>
                                (0, i.jsx)(
                                    nr,
                                    {
                                        icon: n,
                                        label: eb.intl.string(nn[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (ei(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), D(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, i.jsx)(na, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, i.jsx)(ni, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            t3.map((n) =>
                                (0, i.jsx)(
                                    nr,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                ei(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, i.jsx)("div", { className: t5.Gz, role: "separator" }),
                    (0, i.jsx)(ni, {
                        icon: tX.UndoIcon,
                        label: eb.intl.string((0, y.cX)() ? ev.default["j/XmBQ"] : ev.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, i.jsx)(ni, {
                        icon: tY.RedoIcon,
                        label: eb.intl.string((0, y.cX)() ? ev.default.C7jhpn : ev.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: a,
                    }),
                    (0, i.jsx)(ni, {
                        icon: tZ.TrashIcon,
                        label: eb.intl.string(ev.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, i.jsx)("div", { className: t5.Gz, role: "separator" }),
                    (0, i.jsx)(ni, { icon: tQ.XLargeIcon, label: eb.intl.string(ev.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let no = tJ.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex(),
    nu = tJ.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex(),
    nc = tJ.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function nd(e, t, n) {
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
                    (e.strokeStyle = nc),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function nf(e) {
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
let nm = { dx: 0, dy: 0 },
    nh = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    ng = 1;
function np(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = en.useState((e) => (null == s ? null : (e.byProject[s] ?? null))),
        { active: u } = G(s),
        c = (0, e_.Rv)(),
        [d, f] = a.useState(!1);
    a.useEffect(() => {
        if (null != s)
            return () => {
                er(s)?.active === !0 && eu(s);
            };
    }, [s]);
    let m = o?.active === !0 && "pick" === o.tool;
    a.useEffect(() => {
        null != s && m && !u && $(s);
    }, [s, m, u]);
    let h = a.useCallback(async () => {
        let e = r();
        if (null == e) return null;
        let t = await (0, tl.wn)(e);
        if (null != t) return t;
        function n() {
            f(!1);
        }
        (0, tP.flushSync)(() => f(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, tl.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [r]);
    return (a.useEffect(() => {
        if (null != s) return (ea(s, h), () => ea(s, null));
    }, [s, h]),
    null == s || null == o || !o.active || c)
        ? null
        : (0, i.jsx)(nx, { projectId: s, state: o, capturing: d, resolveIframe: r });
}
function nx(e) {
    let { projectId: t, state: n, capturing: l, resolveIframe: r } = e,
        s = tB(r),
        [o, u] = a.useState(null),
        [c, d] = a.useState(0),
        [f, m] = a.useState(null),
        [h, g] = a.useState(nm),
        p = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        b = a.useRef(null),
        j = a.useRef(null),
        { tool: y, history: k } = n,
        w = t4(n.colorId),
        A = "pick" !== y,
        S = "marker" === n.tool ? J[n.markerSize] : "eraser" === n.tool ? ee[n.eraserSize] : null,
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
                                  i(n, `fill="none" stroke="${nu}" stroke-width="4"`),
                                  i(n, `fill="none" stroke="${no}" stroke-width="2"`),
                                  i(3, `fill="${t ?? no}" stroke="${nu}" stroke-width="1"`),
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
            a = null == i ? k.present : k.present.map((e) => (e.id === i.id ? H(e, h.dx, h.dy) : e)),
            o = v.current;
        nd(r, null == o ? a : [...a, o], { width: s.width, height: s.height });
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
                id: `mark-${ng++}`,
                kind: "text",
                color: w.value,
                size: 20 / s.width,
                at: e.at,
                text: e.value.trim(),
            };
            (V(n, s) && ed(t, { type: "commit", shape: n }), u(null), ef(t));
        }, [t, w, s]),
        P = a.useCallback(() => {
            ((j.current = null), u(null), ef(t));
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
                            l = null == I ? null : Z(I, s),
                            r =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? I
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = Y(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => Y(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (X(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = Y(e.from, n),
                                                                  r = Y(e.to, n),
                                                                  i = 6 + (e.width * n.width) / 2,
                                                                  a = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return a.some((e, t) => X(l, e, a[(t + 1) % 4]) <= i);
                                                          }
                                                          case "circle": {
                                                              let t = Y(e.from, n),
                                                                  r = Y(e.to, n),
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
                                                              let t = Z(e, n);
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
                        if (!W(k.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${ng++}`,
                                kind: "erase",
                                width: ee[n.eraserSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${ng++}`,
                                kind: "marker",
                                color: w.value,
                                width: J[n.markerSize] / s.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (v.current = {
                                id: `mark-${ng++}`,
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
                ((b.current = null), g(nm), ed(t, { type: "move", id: e.id, dx: h.dx, dy: h.dy }));
                return;
            }
            let n = v.current;
            ((v.current = null),
                null != n && null != s && V(n, s) ? (ed(t, { type: "commit", shape: n }), ef(t)) : _());
        }, [t, s, h, _]),
        D = a.useCallback(() => eo(t), [t]),
        q = a.useCallback(() => ed(t, { type: "undo" }), [t]),
        O = a.useCallback(() => ed(t, { type: "redo" }), [t]),
        F = a.useCallback(() => ed(t, { type: "clear" }), [t]),
        z = a.useRef({ tool: y, selected: I, exit: D, undo: q, redo: O });
    if (
        (a.useLayoutEffect(() => {
            z.current = { tool: y, selected: I, exit: D, undo: q, redo: O };
        }),
        a.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, tT.Cw)((0, tT.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != j.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: i, redo: a } = z.current,
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
                    (e.preventDefault(), ed(t, { type: "remove", id: l.id }), m(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = nh[s];
                null != o && (e.preventDefault(), ec(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        a.useEffect(() => {
            if (A) return (tL.A.disable(), () => tL.A.enable());
        }, [A]),
        null == s)
    )
        return null;
    let G = Math.max(8, s.left - c - 8),
        U = null == I ? null : Z(null == b.current ? I : H(I, h.dx, h.dy), s);
    return (0, tP.createPortal)(
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: t5.qe,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "aria-hidden": !0,
                }),
                (0, i.jsxs)("div", {
                    className: t5.Pw,
                    style: { left: s.left, top: s.top, width: s.width, height: s.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, i.jsx)("canvas", {
                            ref: p,
                            className: t5.Ji,
                            "data-tool": y,
                            "data-interactive": A && !l ? "" : void 0,
                            "aria-label": eb.intl.string(ev.default["qlgN+X"]),
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
                                  className: t5.r1,
                                  style: { left: U.x, top: U.y, width: U.width, height: U.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, i.jsx)("span", { className: t5.p$, "data-corner": "nw" }),
                                      (0, i.jsx)("span", { className: t5.p$, "data-corner": "ne" }),
                                      (0, i.jsx)("span", { className: t5.p$, "data-corner": "sw" }),
                                      (0, i.jsx)("span", { className: t5.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == o
                    ? null
                    : (0, i.jsx)(tz, {
                          projectId: t,
                          anchor: "point",
                          at: { x: s.left + o.at.x * s.width, y: s.top + o.at.y * s.height },
                          bounds: s,
                          kind: "",
                          placeholder: eb.intl.string(ev.default["8gX1lw"]),
                          label: eb.intl.string(ev.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: o.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: R,
                          onUploadFile: (e) => (0, t$.vX)(t, e),
                          onDismiss: P,
                          canSubmit: "" !== o.value.trim(),
                          closing: !1,
                      }),
                (0, i.jsx)("div", {
                    ref: x,
                    className: t5.ej,
                    style: { left: G, top: s.top },
                    "data-conjure-edit-rail": "",
                    children: (0, i.jsx)(ns, { projectId: t, state: n, onExit: D, onUndo: q, onRedo: O, onClear: F }),
                }),
            ],
        }),
        document.body,
    );
}
var nv = n(308081),
    nb = n(516521),
    nj = n(683071),
    ny = n(65593),
    nk = n(218394),
    nw = n(115982),
    nA = n(886540);
function nS(e) {
    return !(0, nA.BL)(e) && !0 !== e.stopRequested;
}
var nC = n(104317),
    nN = n(643278),
    nI = n(566424),
    nE = n(683063),
    n_ = n(140735),
    nM = n(847374),
    nR = n(320448),
    nP = n(138212);
function nT(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: a, ...s } = e;
    return (0, i.jsxs)("section", {
        className: u()(nP.Nr, r),
        ...s,
        children: [
            (0, i.jsxs)("header", {
                className: u()(nP.wx, null != n && nP.o5, a),
                children: [
                    (0, i.jsx)(x.E, { tag: "span", variant: "body-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nL = n(148590);
function n$(e) {
    let { children: t } = e;
    return (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nD(e) {
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
        b = h ? nM.ChevronSmallDownIcon : nR.ChevronSmallRightIcon,
        j = null != n || l;
    return (0, i.jsxs)(nT, {
        ...f,
        title: t,
        trailing: j
            ? (0, i.jsxs)("span", {
                  className: nL.ZY,
                  children: [
                      n,
                      l
                          ? (0, i.jsx)(e7.D, {
                                className: nL.L$,
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
        headerClassName: h ? void 0 : nL.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, i.jsx)("div", { id: m, className: u()(nL.rf, o), hidden: !h, children: d })],
    });
}
var nq = n(883646);
let nO = [];
function nF(e) {
    let { status: t } = e;
    return (0, i.jsxs)("span", {
        className: u()(nq.xL, {
            [nq.Vb]: "in_progress" === t,
            [nq.cT]: "completed" === t,
            [nq.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return eb.intl.string(ev.default.KvBdun);
                case "in_progress":
                    return eb.intl.string(ev.default["m5G9+S"]);
                case "unfinished":
                    return eb.intl.string(ev.default.lRpwhD);
                default:
                    return eb.intl.string(ev.default.sPGeWi);
            }
        })(t),
        children: [
            (0, i.jsx)(v.y, {
                type: v.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nq.Qd,
                itemClassName: nq.xB,
                "aria-hidden": !0,
            }),
            (0, i.jsx)("svg", {
                className: nq.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, i.jsx)("path", { className: nq.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nz(e) {
    let { agents: t, active: n } = e,
        l = a.useMemo(() => (n ? t : nO), [n, t]),
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
        p = o.length - g.length;
    return (0, i.jsxs)("span", {
        className: nq.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: a } = e,
                    { Illocon: s } = n;
                return (0, i.jsx)(
                    nE.u,
                    {
                        asset: (0, i.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: a,
                        position: "top",
                        children: (0, i.jsx)("span", {
                            className: nq.MA,
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
                      className: nq.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function nG(e) {
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
            ((t = (r ?? nO).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nO),
                [t],
            ));
    return (0, i.jsxs)("ul", {
        className: nq.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, i.jsxs)(
                    "li",
                    {
                        className: u()(nq.AS, { [nq.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, i.jsx)(nF, { status: n }),
                            (0, i.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nq.iV,
                                selectable: !0,
                                children: (0, i.jsx)("span", {
                                    className: nq.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, i.jsx)(nz, { agents: c.get(e.id) ?? nO, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, i.jsxs)("li", {
                      className: nq.AS,
                      "data-provisional": !0,
                      children: [
                          (0, i.jsx)(nF, { status: "pending" }),
                          (0, i.jsx)(x.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nq.iV,
                              selectable: !0,
                              children: (0, i.jsx)("span", { className: nq.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nU(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: a = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = eb.intl.formatToPlainString(ev.default["P/I+JW"], { completed: o, total: u }),
        d = eb.intl.formatToPlainString(ev.default["7tzwKB"], { completed: o, total: u });
    return (0, i.jsx)(nD, {
        title: eb.intl.string(ev.default.RtzECX),
        meta: (0, i.jsx)(n$, { children: c }),
        superseded: s,
        showLabel: eb.intl.string(ev.default.RKyN9q),
        hideLabel: eb.intl.string(ev.default.xydHoj),
        className: nq.Nr,
        bodyClassName: nq.rf,
        beforeBody: r && !s ? (0, i.jsx)(n_.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, i.jsx)(nG, { todos: t, provisional: n, agents: l, live: a }),
    });
}
var nB = n(308665),
    nK = n(59678),
    nH = n(903847);
function nW(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: c } = e,
        f = null != n,
        [m, h] = a.useState(n ?? "top"),
        [g, p] = a.useState(f),
        [x, v] = a.useState(!1),
        [b, j] = a.useState(!1),
        [y, k] = a.useState(f);
    (y !== f && (k(f), null != n ? (h(n), p(!0)) : (v(!1), j(!1))),
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
    let [w, A] = a.useState(!1),
        [S, C] = a.useState(!1),
        [N, I] = a.useState(b);
    (N !== b && (I(b), b ? A(!0) : C(!1)),
        a.useEffect(() => {
            if (b || !w) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [b, w]),
        a.useEffect(() => {
            if (!w || !b) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [w, b]));
    let E = null != l && l.length > 0,
        _ = a.useCallback(() => j((e) => !e), []);
    return g
        ? (0, i.jsxs)("div", {
              className: nH.qd,
              "data-placement": m,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, i.jsxs)("div", {
                      className: u()(nH.vK, { [nH.ho]: x && f, [nH.ET]: !f }),
                      children: [
                          null == c
                              ? (0, i.jsx)("ol", {
                                    className: u()(nH.Rk, nK.pj),
                                    "data-live": "true",
                                    children: (0, i.jsx)(nI.A, {
                                        glyph: (0, i.jsx)(nB.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, i.jsx)(e7.D, {
                                    className: nH.pZ,
                                    onClick: c,
                                    "aria-label": eb.intl.string(ev.default.hEK6qu),
                                    children: (0, i.jsx)("ol", {
                                        className: u()(nH.Rk, nK.pj),
                                        "data-live": "true",
                                        children: (0, i.jsx)(nI.A, {
                                            glyph: (0, i.jsx)(nB.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          E
                              ? (0, i.jsx)(d.m, {
                                    text: eb.intl.string(ev.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, i.jsx)(e7.D, {
                                        className: nH.BO,
                                        onClick: _,
                                        "aria-expanded": b,
                                        "aria-label": eb.intl.string(ev.default.RtzECX),
                                        children: (0, i.jsx)(nN.ClipboardListIcon, {
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
                  w && E
                      ? (0, i.jsx)("div", {
                            className: u()(nH.vB, { [nH.pg]: b && S, [nH.ui]: !b }),
                            children: (0, i.jsx)(nU, {
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
let nV = new Map(),
    nX = (0, k.D)(() => ({ byMessageKey: {} }));
function nY(e, t) {
    let { [e]: n, ...l } = nX.getState().byMessageKey;
    nX.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
var nZ = n(195880),
    nQ = n(287111),
    nJ = n(16619);
function n0(e) {
    let t = (0, nJ.qh)("ConjureClarificationProjectPicker");
    return a.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var n1 = n(337232),
    n2 = n(890497),
    n3 = n(103557),
    n4 = n(29073),
    n5 = n(590077);
function n7(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let i = n0(e),
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
                                : (0, nQ.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          eb.intl.formatToPlainString(ev.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = eb.intl.formatToPlainString(ev.default.jZlNst, { targets: l });
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
                        (n = eb.intl.formatToPlainString(ev.default.ScoZLp, { name: t, projectId: e })),
                        `${S}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nZ.m)() }), x.current.set(e.projectId, t)),
                                (0, n1.s)(e.projectId, l, t.nonce)
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
        d = `${n.id}-heading`;
    return (0, i.jsxs)("section", {
        className: u()(n4.nd, n4.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, i.jsxs)("div", {
                className: n4.wx,
                children: [
                    (0, i.jsx)(x.E, {
                        tag: "span",
                        id: d,
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        className: n4.TK,
                        children: n.summary,
                    }),
                    (0, i.jsx)(tH.K, {
                        icon: e8.XSmallIcon,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": eb.intl.string(ev.default.KQUuAZ),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: n5.r,
                children: [
                    0 === c.length
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: eb.intl.string(ev.default.TbbzW5),
                          })
                        : (0, i.jsx)(n2.Z, {
                              label: eb.intl.string(ev.default["29gr8j"]),
                              placeholder: eb.intl.string(ev.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, i.jsx)(n3.f, {
                        label: eb.intl.string(ev.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? eb.intl.string(ev.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: n4.qr,
                children: (0, i.jsx)("div", {
                    className: n4.zt,
                    children: (0, i.jsx)(f.$, {
                        variant: "primary",
                        size: "sm",
                        text: eb.intl.string(ev.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var n8 = n(47167),
    n9 = n(734057),
    n6 = n(994500),
    le = n(287809),
    lt = n(360047);
function ln(e, t, n) {
    let l = n[0]?.id;
    return null == l
        ? null
        : !0 === t.link
          ? { target: l, caller: e, key: `${l}:${e}` }
          : "incoming" === t.link
            ? { target: e, caller: l, key: `${e}:${l}` }
            : null;
}
var ll = n(652215);
function lr(e) {
    return 0 === e.options.length && null == e.input;
}
function li(e) {
    return !1 !== e.allow_custom && !0 !== e.link && "incoming" !== e.link;
}
function la(e, t, n) {
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
function ls(e, t) {
    return e.questions
        .map((e, n) => ({ question: e, index: n, answer: t[e.id] }))
        .filter((e) => null != e.answer && "" !== e.answer.text.trim())
        .map((e) => {
            let { question: t, index: n, answer: l } = e;
            return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
        })
        .join("\n");
}
function lo(e, t, n, l) {
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
let lu = {
    [ll.rbe.GUILD_TEXT]: "text",
    [ll.rbe.GUILD_VOICE]: "voice",
    [ll.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [ll.rbe.GUILD_STAGE_VOICE]: "stage",
    [ll.rbe.GUILD_FORUM]: "forum",
    [ll.rbe.GUILD_MEDIA]: "media",
};
function lc(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = n9.A.getChannel(t)?.type) ? void 0 : lu[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = le.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let ld = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lf = {
        channel: [ev.default["9+dfPT"], ev.default.pGSJqE],
        role: [ev.default["2VkCoD"], ev.default.c8YlX8],
        user: [ev.default.GZIAxl, ev.default["4bptbQ"]],
        project: [ev.default.twlOb6, ev.default.twlOb6],
        server: [ev.default.ZWXDeI, ev.default.ZWXDeI],
    };
function lm(e, t) {
    return eb.intl.string(lf[e][+!!t]);
}
var lh = n(658675),
    lg = n(22231),
    lp = n(123292),
    lx = n(900797),
    lv = n(331322),
    lb = n(771871),
    lj = n(700915),
    ly = n(985965),
    lk = n(831819);
function lw(e) {
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
            className: lk.Nz,
            children: (0, i.jsxs)(lv.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(lj.A, {
                        caller: t.sides.caller,
                        target: t.sides.target,
                        callerProject: t.callerProject,
                        targetProject: t.targetProject,
                        flow: t.flow,
                    }),
                    null != t.purpose ? (0, i.jsx)(ly.A, { purpose: t.purpose }) : null,
                    null != u
                        ? (0, i.jsxs)("div", {
                              className: lk.em,
                              children: [
                                  (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: u }),
                                  d && !r
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(x.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    "aria-hidden": !0,
                                                    children: "\xb7",
                                                }),
                                                (0, i.jsx)(lp.Q, {
                                                    text: eb.intl.string(ev.default.I5F6YX),
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
                              className: lk.zM,
                              children: [
                                  (0, i.jsx)("span", { id: l, hidden: !0, children: t.aria }),
                                  (0, i.jsx)(lb.z, {
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
var lA = n(344587),
    lS = n(155078);
function lC(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let lN = [];
function lI(e) {
    return !0 !== e.upload
        ? null
        : 0 === e.options.length
          ? eb.intl.string(ev.default.ZZ641e)
          : eb.intl.string(1 === e.options.length ? ev.default["2g3gk9"] : ev.default.dkzChE);
}
var lE = n(762026);
function l_(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function lM(e, t) {
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
var lR = n(682163),
    lP = n(300344),
    lT = n(614733),
    lL = n(904363),
    l$ = n(950902),
    lD = n(136722),
    lq = n(778858),
    lO = n(808728),
    lF = n(696451),
    lz = n(71393),
    lG = n(488926),
    lU = n(426035),
    lB = n(246338);
let lK = lD.kg(ll.xBc.VIEW_CHANNEL, ll.xBc.SEND_MESSAGES);
var lH = n(384017);
function lW(e) {
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
        return lc(n.input ?? "channel", e, (e) => u.find((t) => t.value === e)?.label, l);
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
        className: lH.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, i.jsx)(n2.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => a(g(e), t),
              })
            : (0, i.jsx)(n2.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => a(null == e ? [] : g([e]), t),
              }),
    });
}
function lV(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lP.A)(n, r.question.channel_filter);
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
                        return null == e ? null : (0, lU.ug)(e);
                    },
                    [l, t],
                )),
                a.useEffect(() => {
                    null == r || null == n || lF.Ay.isMember(r, n) || lq.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [lO.A, lF.Ay, lz.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lz.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lO.A.getChannels(r);
                        if (null == e || null == l) return null;
                        let a = (0, lB.Lp)(l, i.channel_filter).find((t) => t.id === e);
                        if (null == a) return null;
                        if (null != n && lF.Ay.isMember(r, n))
                            return lG.$3({ permission: lK, user: n, context: a }) ? a : null;
                        let s = a.permissionOverwrites[r]?.deny ?? lD.BY;
                        return lD.X8(s, lK) ? null : a;
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
                            u(((e = []), lc("channel", [d.id], () => (0, n8.m1)(d, le.default, n6.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), u([], r));
            }
        }, [d, o, r, u, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, i.jsx)(lW, { ...r, guildId: n, options: s, placeholder: lm("channel", !0 === r.question.multi_select) });
}
function lX(e) {
    let { guildId: t, ...n } = e,
        l = (0, lL.A)(t);
    return (0, i.jsx)(lW, { ...n, guildId: t, options: l, placeholder: lm("role", !0 === n.question.multi_select) });
}
function lY(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: a } = (0, lT.A)(t);
    return (0, i.jsx)(lW, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: a,
        placeholder: lm("user", !0 === n.question.multi_select),
    });
}
function lZ(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = n0(t),
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
    return 0 === s.length ? n : (0, i.jsx)(lW, { ...l, options: s, placeholder: lm("project", !1) });
}
function lQ(e) {
    let t = e.target;
    (0, tT.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lJ(e) {
    let { fallback: t, ...n } = e,
        l = (0, nJ.z9)("ConjureClarificationEntityPicker"),
        r = a.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, i.jsx)(lR.Ay, { guild: e, size: lR.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, i.jsx)("div", {
              onFocus: lQ,
              onMouseUp: lQ,
              children: (0, i.jsx)(lW, { ...n, options: r, placeholder: lm("server", !1) }),
          });
}
function l0(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, l$.Tj)(t, !0);
    if ("project" === l.question.input) return (0, i.jsx)(lZ, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, i.jsx)(lJ, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, i.jsx)(lV, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, i.jsx)(lX, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, i.jsx)(lY, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var l1 = n(87221),
    l2 = n(26430),
    l3 = n(750943),
    l4 = n(173936),
    l5 = n(95477),
    l7 = n(256905),
    l8 = n(490707),
    l9 = n(907702);
function l6(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, l8._)(t, n),
        [d, f] = a.useState(null),
        m = null != s && d === s;
    return o
        ? (0, i.jsxs)("span", {
              className: u()(l9.Gt, l9.b6),
              children: [
                  (0, i.jsx)(l1.ImageWarningIcon, { size: "md", color: "currentColor" }),
                  (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "text-muted",
                      children: eb.intl.string(ev.default.lhgD88),
                  }),
              ],
          })
        : (0, i.jsx)("span", {
              className: u()(l9.Gt, { [l9.iP]: !m }),
              children:
                  null != s
                      ? (0, i.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l9.Sl,
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
function re(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: a,
            selected: s,
            disabled: o,
            reachable: c,
            tabbable: f,
            onPick: m,
            onView: h,
            onArrow: g,
            onMeasured: p,
            onRemove: v,
        } = e,
        b = eb.intl.formatToPlainString(ev.default.JGjZMs, { answer: r.label });
    return (0, i.jsxs)("div", {
        className: u()(l9.Vs, { [l9.Q9]: s, [l9.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, i.jsxs)(e7.D, {
                className: u()(l9.Up, { [l9.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => h(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), g(r, t));
                },
                role: a ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eb.intl.formatToPlainString(ev.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: c && f ? 0 : -1,
                children: [
                    (0, i.jsxs)("span", {
                        className: l9.$_,
                        children: [
                            null != r.image
                                ? (0, i.jsx)(l6, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, i.jsx)("span", { className: l9.Gt }),
                            (0, i.jsx)("span", {
                                className: l9.q3,
                                "aria-hidden": !0,
                                children: a
                                    ? (0, i.jsx)(lh.P, { checked: s, disabled: o })
                                    : (0, i.jsx)(lb.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.E, {
                        tag: "span",
                        variant: "body-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: l9.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lS.E)(t) : "")
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
                      className: l9.B4,
                      children: (0, i.jsx)(d.m, {
                          text: eb.intl.string(ev.default.HQEXJM),
                          children: (0, i.jsx)(tH.K, {
                              icon: tZ.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: v,
                              disabled: o,
                              "aria-label": eb.intl.string(ev.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, i.jsx)("span", {
                        className: l9.B4,
                        children: (0, i.jsx)(d.m, {
                            text: eb.intl.string(ev.default["4/eeDD"]),
                            children: (0, i.jsx)(tH.K, {
                                icon: l2.MaximizeIcon,
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
function rt(e) {
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
                      label: eb.intl.string(ev.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        j = a.useCallback(
            (e) => {
                let n = (null == b ? f : [...f, b]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, t$.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, l7.R)({
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
        className: l9.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == b
                ? null
                : (0, i.jsxs)("div", {
                      ref: h,
                      className: u()(l9.fF, "gallery" === m ? l9.nV : l9.nM, { [l9.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, i.jsx)(
                                  re,
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
                                    re,
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
            (0, i.jsx)(rn, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: eb.intl.string(/\bicons?\b/i.test(n.question) ? ev.default.qU4WN6 : ev.default.cbMDDB),
            }),
        ],
    });
}
function rn(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = a.useRef(null),
        [u, c] = a.useState(!1),
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
        className: l9.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, i.jsxs)("div", {
                className: l9.QJ,
                children: [
                    (0, i.jsx)(f.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: l3.ImagePlusIcon,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => o.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, i.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: l4.LinkIcon,
                              text: eb.intl.string(ev.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, i.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: l9.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, nQ.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            u
                ? (0, i.jsxs)("div", {
                      className: l9.vG,
                      children: [
                          (0, i.jsx)("div", {
                              className: l9.Hs,
                              children: (0, i.jsx)(l5.k, {
                                  label: eb.intl.string(ev.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eb.intl.string(ev.default.AVhvn8),
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
                              className: l9.gd,
                              children: [
                                  (0, i.jsx)(f.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eb.intl.string(ev.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, i.jsx)(lp.Q, {
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      text: eb.intl.string(ev.default.eXZL4X),
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
function rl(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = a.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, i.jsxs)(e7.D, {
        className: u()(lH.uK, { [lH.ue]: l, [lH.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": eb.intl.formatToPlainString(d ? ev.default["2p6UFz"] : ev.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, i.jsx)("span", { className: lH.dy, children: (0, i.jsx)(lh.P, { checked: o, disabled: l }) })
                : (0, i.jsx)("span", { className: lH.Gy, "aria-hidden": !0, children: n }),
            (0, i.jsxs)("span", {
                className: lH.qO,
                children: [
                    (0, i.jsx)("span", {
                        className: lH.l8,
                        children: (0, i.jsx)(x.E, {
                            tag: "span",
                            variant: "body-md/medium",
                            color: "none",
                            className: lH.ed,
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
                      className: lH.rM,
                      children: eb.intl.string(ev.default.zku6r1),
                  })
                : null,
        ],
    });
}
function rr(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: a = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lC(n)
        ? (0, i.jsx)(rt, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: a, onPick: s, own: o })
        : (0, i.jsx)(i.Fragment, {
              children: n.options.map((e, t) =>
                  (0, i.jsx)(
                      rl,
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
let ri = [],
    ra = [];
function rs(e) {
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
        f = !0 === n.multi_select ? eb.intl.string(ev.default.tE8qbz) : lI(n);
    return (0, i.jsxs)("div", {
        className: u()(lH.Ge, lH.x1),
        "data-direction": a,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, i.jsx)(x.E, {
                      tag: "div",
                      variant: "body-xs/normal",
                      color: "text-muted",
                      className: lH.aK,
                      children: f,
                  }),
            (0, i.jsx)(rr, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lM(o, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && lC(n))
                ? null
                : (0, i.jsxs)("div", {
                      className: lH.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lH.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(lg.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, i.jsx)("span", { className: u()(lH.Pu, lH.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, i.jsx)("div", {
                      className: lH.$0,
                      children: (0, i.jsx)(lp.Q, {
                          variant: "secondary",
                          textVariant: "body-sm/medium",
                          text: eb.intl.string(ev.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function ro(e) {
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
        [v, b] = a.useState({}),
        [j, y] = a.useState({}),
        [k, w] = a.useState({}),
        [A, S] = a.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [C, N] = a.useState({}),
        { builds: I, linkFor: E } = (function (e, t, n) {
            let l = a.useMemo(
                    () =>
                        Object.fromEntries(
                            t.questions.flatMap((t) => {
                                let l = ln(e, t, n[t.id] ?? []);
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
                                let l = await (0, lt.LW)(e, t);
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
                            purpose: (0, lE.xP)(x?.link_purpose ?? u.purpose),
                            data: (0, lE.Bw)(g, p),
                            value: p,
                            aria: (0, lE.sr)(g),
                            onChange: (e) => o((t) => ({ ...t, [a.key]: e })),
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
        [F, z] = a.useState(!1),
        G = a.useRef(null),
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
        er = lC(Y),
        ei = el ? eb.intl.string(ev.default.tE8qbz) : lI(Y),
        ea = el
            ? (k[Y.id] ?? ri)
            : ((t = v[Y.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : lN),
        es = (function (e, t, n) {
            let [l, r] = a.useState({}),
                [i, s] = a.useState({}),
                [o, u] = a.useState({}),
                c = eb.intl.string(ev.default.wTsP5l),
                d = a.useCallback((e) => l[e] ?? null, [l]),
                f = a.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : l_(t[e.id])),
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
                        if (o) return lM(h, f(a));
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
                                    null != l && (0, t$.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
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
                                    ((0, t$.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !l_(e[d])) return e;
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
                                                error: { source: "upload", text: eb.intl.string(ev.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, t$.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : eb.intl.string(ev.default.l79PMc),
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
        eo = es.imageFor(Y.id),
        eu = es.selectedFor(Y),
        { text: ec, phase: ed } = (0, lA.Q)(Y.question),
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
    let eh = eb.intl.string(J ? eb.t.iTcuma : eb.t.dcl9MQ),
        eg = a.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        let i = ls(t, n);
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
                                              let r = ln(e, t, [n]);
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
                                              return (0, lt.Ol)(t, n, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, I, r);
            },
            [l, I, r, n],
        ),
        ep = a.useCallback(
            (e, t) => {
                H.current += 1;
                let n = H.current;
                (L({ direction: t, moves: n }),
                    D({ question: Y, draft: en, selected: ea, ownImage: eo, ownSelected: eu, direction: t, moves: n }),
                    z(!0),
                    P(e));
            },
            [en, eo, eu, Y, ea],
        ),
        ex = a.useCallback(() => {
            let e = G.current,
                t = K.current;
            null != e && null != t && O({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    a.useLayoutEffect(() => {
        let e = G.current,
            t = K.current;
        if (null == e || null == t) return;
        ex();
        let n = new ResizeObserver(ex);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ex]);
    let ej = T?.moves;
    a.useEffect(() => {
        if (null == ej) return;
        let e = setTimeout(() => D(null), 400),
            t = setTimeout(() => z(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ej]);
    let ey = a.useCallback(
            (e) => {
                let t = la(l, e, X);
                null == t ? eg(e) : ep(t, t < X ? "back" : "forward");
            },
            [l, X, eg, ep],
        ),
        ek = a.useCallback(
            (e) => {
                if (W) return;
                let t = { ...v, [Y.id]: e };
                (b(t), ey(t));
            },
            [ey, v, W, Y.id],
        ),
        ew = a.useCallback(() => {
            W || 0 === X || ep(X - 1, "back");
        }, [W, X, ep]),
        eA = 0 !== X || W ? void 0 : m,
        eS = (X > 0 && !W) || null != eA,
        eC = a.useCallback(
            (e) => {
                y((e) => ({ ...e, [Y.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                er ? W || b((e) => ({ ...e, [Y.id]: t })) : ek(t);
            },
            [W, er, Y.id, ek],
        ),
        eN = a.useCallback(() => {
            (y((e) => ({ ...e, [Y.id]: "" })), ek({ kind: "custom", text: eb.intl.string(ev.default.zxSq2q) }));
        }, [Y.id, ek]),
        { multiPartFor: eI } = es,
        eE = a.useMemo(() => (el ? lo(Y, ea, en, eI(Y)) : null), [en, el, eI, Y, ea]),
        e_ = A[Y.id] ?? ra,
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
                          ...e_.map((t) => (t.name.startsWith(ld[e]) ? t.name : `${ld[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [en, C, e_, Y.id, Y.input]),
        eP = a.useCallback(
            (e, t) => {
                (S((t) => ({ ...t, [Y.id]: e })), N((e) => ({ ...e, [Y.id]: t })));
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
                        return { kind: "image", attachment: t.attachment, text: eb.intl.string(ev.default.wTsP5l) };
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
                        ? lo(Y, [t.optionId], en)
                        : lo(Y, [], en, t)
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
            null != eq && ek(eq);
        }, [eq, ek]),
        [ez, eG] = a.useState(!1),
        [eU, eB] = a.useState(!1);
    a.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eG(!0));
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
                          return null == la(e, r, n) && "" === ls(e, r) ? null : r;
                      })(l, v, X)
                    : null,
            [v, l, X, eH],
        ),
        eV = null != eW,
        eX = (null != eH || eV) && !W,
        eY = X === V - 1,
        eZ = a.useCallback(() => {
            W || (null != eH ? ek(eH) : null != eW && (b(eW), ey(eW)));
        }, [ey, W, eH, ek, eW]),
        eQ = a.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tT.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tT.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tT.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eS
                            ? (e.preventDefault(), (eA ?? ew)())
                            : "ArrowRight" === e.key && eX && (e.preventDefault(), eZ())));
            },
            [eA, eS, eX, ew, eZ],
        ),
        eJ =
            er && !0 !== Y.upload
                ? null
                : (0, i.jsxs)("div", {
                      className: lH.Xy,
                      children: [
                          (0, i.jsx)("span", {
                              className: lH.Gy,
                              "aria-hidden": !0,
                              children: (0, i.jsx)(lg.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, i.jsx)(tq.y, {
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
                              placeholder: eb.intl.string(lr(Y) ? ev.default.yLN1x6 : ev.default["tOC+tn"]),
                              "aria-label": eb.intl.formatToPlainString(ev.default["4JeYPB"], { question: Y.question }),
                              disabled: W,
                              rows: 1,
                              className: lH.Pu,
                              "data-conjure-clarification-other": Y.id,
                          }),
                      ],
                  });
    return (0, i.jsxs)("section", {
        className: u()(lH.$O, { [lH.fI]: ez && !eU, [lH.Oh]: eU }),
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
                className: lH.rf,
                style: null == q ? void 0 : { height: q.heading + q.rows },
                "data-moving": F ? "" : void 0,
                children: [
                    (0, i.jsxs)("div", {
                        ref: G,
                        className: lH.wx,
                        children: [
                            (0, i.jsx)(x.E, {
                                ref: B,
                                tag: "span",
                                id: `${Y.id}-label`,
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: J ? void 0 : p,
                                className: u()(n4.TK, lH.R_, { [lH.TB]: "exit" === ed, [lH.JU]: "enter" === ed }),
                                children: ec,
                            }),
                            em || J
                                ? (0, i.jsx)("div", {
                                      className: n4.Q7,
                                      children: (0, i.jsx)(d.m, {
                                          text: eh,
                                          children: (0, i.jsx)(tH.K, {
                                              icon: J ? lx.ChevronSmallUpIcon : nM.ChevronSmallDownIcon,
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
                                      className: u()(n4.gb, n4.Q7),
                                      onClick: eK,
                                      "aria-label": eb.intl.string(ev.default.qVXlk0),
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
                        className: lH.Cg,
                        style: null == q ? void 0 : { insetBlockStart: q.heading },
                        children: (0, i.jsxs)("div", {
                            className: lH.I,
                            children: [
                                (0, i.jsxs)("div", {
                                    ref: K,
                                    className: lH.Ge,
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
                                                  className: lH.aK,
                                                  children: ei,
                                              }),
                                        (0, i.jsx)(rr, {
                                            projectId: n,
                                            question: Y,
                                            selected: ea,
                                            disabled: W,
                                            onPick: (e) =>
                                                el
                                                    ? w((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [Y.id]:
                                                                  ((n = t[Y.id] ?? ri),
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
                                            ? (0, i.jsx)(l0, {
                                                  projectId: n,
                                                  question: Y,
                                                  value: e_,
                                                  disabled: W,
                                                  onChange: eP,
                                                  onFocus: eT,
                                                  onBlur: eL,
                                                  fallback: li(Y) ? null : eJ,
                                              })
                                            : null,
                                        null != eM ? (0, i.jsx)(lw, { link: eM, disabled: W }) : null,
                                        null != Y.note
                                            ? (0, i.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "body-xs/normal",
                                                  color: "text-muted",
                                                  className: lH.aK,
                                                  children: Y.note,
                                              })
                                            : null,
                                        li(Y) ? eJ : null,
                                        !0 === Y.upload
                                            ? (0, i.jsx)("div", {
                                                  className: lH.$0,
                                                  children: (0, i.jsx)(lp.Q, {
                                                      variant: "secondary",
                                                      textVariant: "body-sm/medium",
                                                      text: eb.intl.string(ev.default.zxSq2q),
                                                      disabled: W,
                                                      onClick: eN,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == $
                                    ? null
                                    : (0, i.jsx)(
                                          rs,
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
            V > 1 || el || er || null != Y.input || null != m || !0 === Y.optional || lr(Y)
                ? (0, i.jsxs)("div", {
                      className: n4.qr,
                      children: [
                          (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  V > 1
                                      ? eb.intl.formatToPlainString(ev.default.yzYUjq, { index: X + 1, total: V })
                                      : null,
                          }),
                          (0, i.jsxs)("div", {
                              className: n4.zt,
                              children: [
                                  eS
                                      ? (0, i.jsx)(lp.Q, {
                                            variant: "secondary",
                                            textVariant: "body-sm/medium",
                                            text: h ?? eb.intl.string(ev.default.Pk5lfA),
                                            onClick: eA ?? ew,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  g
                                      ? null
                                      : (0, i.jsx)(f.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eY
                                                ? (o ?? eb.intl.string(eb.t.geKm7t))
                                                : eb.intl.string(eV ? ev.default.ZcrbKz : ev.default.w1nRmT),
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
var ru = n(557744),
    rc = n(223347),
    rd = n(890698),
    rf = n(27232),
    rm = n(505930);
let rh = [1, 2, 3, 4, 5];
n(786986);
var rg = n(693654);
function rp(e) {
    let { dimension: t, value: n, disabled: l, onChange: r } = e,
        s = a.useId(),
        o = a.useId();
    return (0, i.jsxs)("div", {
        className: rg.zm,
        children: [
            (0, i.jsx)(x.E, { id: s, variant: "body-sm/medium", color: "text-default", children: (0, rd.wy)(t) }),
            (0, i.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": s,
                "aria-required": !0,
                className: rg.uf,
                children: rh.map((e) => {
                    let a = null != n && e <= n,
                        s = a ? rf.StarIcon : rm.StarOutlineIcon;
                    return (0, i.jsxs)(
                        "label",
                        {
                            className: rg.uK,
                            children: [
                                (0, i.jsx)("input", {
                                    type: "radio",
                                    name: o,
                                    value: e,
                                    checked: n === e,
                                    disabled: l,
                                    onChange: () => r(e),
                                    className: rg.hF,
                                    "aria-label": (0, rd.MF)(t, e),
                                }),
                                (0, i.jsx)("span", {
                                    className: u()(rg.d4, { [rg.cO]: a }),
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
function rx(e) {
    let { pending: t } = e,
        n = (0, rd.PM)(t),
        l = a.useId();
    return (0, i.jsx)("section", {
        className: rg.Nr,
        "aria-labelledby": l,
        children: (0, i.jsxs)(lv.B, {
            gap: 12,
            children: [
                (0, i.jsxs)(lv.B, {
                    gap: 4,
                    children: [
                        (0, i.jsx)(p.D, {
                            id: l,
                            variant: "heading-md/semibold",
                            children: eb.intl.string(ev.default.GVLtfq),
                        }),
                        (0, i.jsx)(x.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: eb.intl.string(ev.default["Zj4E+A"]),
                        }),
                    ],
                }),
                (0, i.jsxs)(lv.B, {
                    gap: 4,
                    children: [
                        n.dimensions.map((e) =>
                            (0, i.jsx)(
                                rp,
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
                            children: eb.intl.string(ev.default.BvaFUc),
                        }),
                    ],
                }),
                (0, i.jsx)(n3.f, {
                    label: eb.intl.string(ev.default.d28g0o),
                    placeholder: eb.intl.string(ev.default.EBB7lL),
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
                (0, i.jsx)(lv.B, {
                    direction: "horizontal",
                    justify: "end",
                    children: (0, i.jsx)(f.$, {
                        variant: "primary",
                        size: "sm",
                        text: eb.intl.string(ev.default.CYQood),
                        disabled: !n.canSubmit,
                        loading: n.submitting,
                        onClick: n.submit,
                    }),
                }),
            ],
        }),
    });
}
var rv = n(894443),
    rb = n(525530),
    rj = n(564963),
    ry = n(530557),
    rk = n(431527),
    rw = n(628284);
let rA = new Set(["select", "channel", "role", "user"]);
function rS(e, t) {
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
function rC(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
var rN = n(914250),
    rI = n(202723);
function rE(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o, onDismiss: c } = e,
        d = a.useCallback(() => {
            (0, e_.mM)(async () => {
                let { default: e } = await Promise.all([n.e(291953), n.e(197826)]).then(n.bind(n, 644441));
                return (n) => (0, i.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        m = a.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: ry.KeyIcon })), [r.fields]),
        h = (0, rj.bB)(l, s),
        g = u()(rI.Lo, { [rI.jY]: h });
    if ("superseded" === s)
        return (0, i.jsx)(
            "article",
            {
                className: g,
                children: (0, i.jsx)(x.E, {
                    variant: "body-xs/semibold",
                    color: "text-muted",
                    tag: "span",
                    children: eb.intl.string(ev.default.CTxtdV),
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
                        children: eb.intl.string(ev.default.HCQvpO),
                    }),
                    (0, i.jsx)(rk.C, { label: eb.intl.string(ev.default.HCQvpO), size: "xs", items: m }),
                ],
            },
            s,
        );
    if ("pending" === s)
        return (0, i.jsx)(
            "article",
            {
                className: rI.Lo,
                children: (0, i.jsx)(rk.C, { label: eb.intl.string(ev.default.HCQvpO), size: "xs", items: m }),
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
                        className: rI.$h,
                        children: [
                            (0, i.jsx)("span", {
                                className: rI.c9,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(rw.CircleCheckIcon, {
                                    size: "xs",
                                    color: tJ.A.colors.ICON_FEEDBACK_POSITIVE,
                                }),
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/semibold",
                                color: "text-feedback-positive",
                                tag: "span",
                                children: eb.intl.string(ev.default.sfp7Up),
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
                                eb.intl.formatToPlainString(ev.default["Z+FC3j"], {
                                    label: e,
                                    value: eb.intl.string(ev.default.CJq1rY),
                                }),
                            )
                            .join(" \xb7 "),
                    }),
                ],
            },
            s,
        );
    let p = null != r.note && "" !== r.note ? r.note : eb.intl.string(ev.default.MPGSHL),
        v = (0, i.jsx)(f.$, { variant: "primary", size: "sm", onClick: d, text: eb.intl.string(ev.default.EK8tKY) });
    return null != c
        ? (0, i.jsxs)("section", {
              className: u()(n4.nd, rI.fw),
              "aria-label": eb.intl.string(ev.default.O0QIqj),
              children: [
                  (0, i.jsxs)("div", {
                      className: n4.wx,
                      children: [
                          (0, i.jsx)(ry.KeyIcon, { size: "xs", color: tJ.A.colors.TEXT_BRAND, "aria-hidden": !0 }),
                          (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/semibold",
                              color: "text-brand",
                              className: n4.TK,
                              children: eb.intl.string(ev.default.O0QIqj),
                          }),
                          (0, i.jsx)(e7.D, {
                              className: u()(n4.gb, n4.Q7),
                              onClick: c,
                              "aria-label": eb.intl.string(ev.default.Hl7rif),
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
                      className: rI.DQ,
                      children: [
                          (0, i.jsx)(rN.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                          (0, i.jsx)(rk.C, { label: eb.intl.string(ev.default.HCQvpO), size: "xs", items: m }),
                      ],
                  }),
                  (0, i.jsxs)("div", {
                      className: n4.qr,
                      children: [
                          (0, i.jsx)(x.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              className: rI.xE,
                              children: eb.intl.string(ev.default["2OdXdn"]),
                          }),
                          (0, i.jsx)("div", { className: n4.zt, children: v }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("article", {
              className: rI.Lo,
              children: [
                  (0, i.jsx)(x.E, {
                      variant: "body-xs/semibold",
                      color: null != o ? "text-brand" : "text-muted",
                      tag: "span",
                      children: eb.intl.string(null != o ? ev.default.O0QIqj : ev.default.HCQvpO),
                  }),
                  (0, i.jsx)(rN.A, { text: p, variant: "body-sm/normal", color: "text-default" }),
                  (0, i.jsx)(rk.C, { label: eb.intl.string(ev.default.HCQvpO), size: "xs", items: m }),
                  (0, i.jsx)("div", { className: rI.sq, children: v }),
              ],
          });
}
var r_ = n(442331),
    rM = n(513425);
let rR = new Set(),
    rP = new Set();
function rT(e) {
    return (
        rP.add(e),
        () => {
            rP.delete(e);
        }
    );
}
function rL() {
    return a.useSyncExternalStore(rT, () => rR);
}
function r$(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let i = e.length - 1; i >= 0; i--) {
        let a = e[i];
        if (null == a || "assistant" !== a.role || null == a.settingsRequest || !(0, nA.BL)(a)) continue;
        let s = a.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(a.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rD(e, t, n) {
    if (!n || null == t) return !1;
    let l = rC(e, t);
    return l.length > 0 && !rS({ keys: l }, t);
}
var rq = n(782973),
    rO = n(290713),
    rF = n(411236);
function rz(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: o,
            superseded: d,
            summary: m,
            markSaved: h,
        } = (function (e, t, n) {
            let l = rL(),
                [r, i] = a.useState(!1),
                s = null != n ? l.has(n) : r,
                o = a.useCallback(() => {
                    if (null != n) {
                        if (!rR.has(n)) for (let e of ((rR = new Set([...rR, n])), rP)) e();
                    } else i(!0);
                }, [n]),
                u = (0, c.bG)([r_.A], () => rD(t, r_.A.getSettings(e), s), [e, t, s]);
            return {
                done: u,
                superseded: (0, c.bG)([rM.A], () => null != n && r$(rM.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [r_.A, n9.A],
                    () => {
                        var n;
                        let l = r_.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => n9.A.getChannel(e)?.name ?? null),
                              rC(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: eb.intl.formatToPlainString(ev.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return eb.intl.string(ev.default.CJq1rY);
                                                      case "checkbox":
                                                          return eb.intl.string(
                                                              !0 === t ? ev.default.nXtpn3 : ev.default["0vfaMW"],
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
                                                                      : eb.intl.string(ev.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? eb.intl.string(ev.default.nEv677)
                                                              : eb.intl.string(ev.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return eb.intl.string(ev.default.Fw9G9A);
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
        return (0, i.jsx)("article", {
            className: rF.Mk,
            children: (0, i.jsx)(x.E, {
                variant: "body-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: eb.intl.string(ev.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, i.jsxs)("article", {
            className: rF.Mk,
            children: [
                (0, i.jsxs)("div", {
                    className: rF.Ol,
                    children: [
                        (0, i.jsx)(rw.CircleCheckIcon, {
                            size: "xs",
                            color: tJ.A.colors.ICON_FEEDBACK_POSITIVE,
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(x.E, {
                            variant: "body-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: eb.intl.string(ev.default.AxBLLy),
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
    let p = n.keys?.length === 1 && n.keys[0] === rq.B,
        v = null != n.note && "" !== n.note ? n.note : p ? null : eb.intl.string(ev.default.XuOf5s);
    return (0, i.jsx)(rO.A, {
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
            let o = (0, i.jsx)(f.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: eb.intl.string(ev.default.A7dQd9),
            });
            return null == r
                ? (0, i.jsxs)("form", {
                      className: rF.Mk,
                      onSubmit: s,
                      children: [
                          (0, i.jsx)(x.E, {
                              variant: "body-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eb.intl.string(ev.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, i.jsx)(rN.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, i.jsx)("div", { className: rF.p0, children: o }),
                      ],
                  })
                : (0, i.jsxs)("form", {
                      className: u()(n4.nd, n4.jx),
                      "aria-label": eb.intl.string(ev.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, i.jsxs)("div", {
                              className: n4.wx,
                              children: [
                                  (0, i.jsx)(x.E, {
                                      tag: "span",
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      className: n4.TK,
                                      children: eb.intl.string(ev.default["jZjP+I"]),
                                  }),
                                  (0, i.jsx)(e7.D, {
                                      className: u()(n4.gb, n4.Q7),
                                      onClick: r,
                                      "aria-label": eb.intl.string(ev.default["iq+Pte"]),
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
                              className: rF.DQ,
                              children: [
                                  null != v
                                      ? (0, i.jsx)(rN.A, { text: v, variant: "body-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: n4.qr,
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      className: rF.xE,
                                      children: eb.intl.string(ev.default["1w0jMk"]),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: n4.zt,
                                      children: [
                                          (0, i.jsx)(f.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: eb.intl.string(ev.default["9J3OG8"]),
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
var rG = n(975571),
    rU = n(427123);
let rB = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rK = n(874421),
    rH = n(932111),
    rW = n(940874),
    rV = n(404373),
    rX = n(89222);
function rY(e) {
    return "" !== rX.A.getDraft(e).trim();
}
var rZ = n(29080);
function rQ(e) {
    var t;
    let n,
        l,
        { steps: r, content: i, hasProposal: a, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, nw.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, nw.Lf)(r) }),
    };
}
var rJ = n(62617),
    r0 = n(182368);
let r1 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    r2 = {
        snail: () => ev.default.ABeVsS,
        goat: () => ev.default.dhXay8,
        frog: () => ev.default.SHeweG,
        bunny: () => ev.default.FytFE1,
        cat: () => ev.default["5c+sHs"],
        caterpillar: () => ev.default["/FYcne"],
        butterfly: () => ev.default["Ib/AxK"],
        dog: () => ev.default.zDjBR1,
        spider: () => ev.default["6sxyrN"],
        bee: () => ev.default.cVtefg,
        bot: () => ev.default.MjCw0v,
    },
    r3 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = a.useMemo(
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rJ.Z)(),
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
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rJ.Z)(),
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
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rJ.Z)(),
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
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rJ.Z)(),
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
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rJ.Z)(),
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
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rJ.Z)(),
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
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rJ.Z)(),
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
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rJ.Z)(),
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
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rJ.Z)(),
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
                        () => (0, rJ.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, i.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rJ.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: r0.u, tint: "var(--illo-purple-40)" },
    };
function r4(e) {
    return { ...r3[e], name: eb.intl.string(r2[e]()) };
}
function r5(e) {
    return r1.includes(e) ? r4(e) : void 0;
}
function r7(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % r1.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, r1[(t + n) % r1.length]);
            }),
            l
        );
    })(e))
        t.set(n, r4(l));
    return t;
}
var r8 = n(615839);
function r9(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eb.intl.string(ev.default.KcFvbo);
}
var r6 = n(60160),
    ie = n(101147);
function it(e) {
    let t = (0, nw.SY)(e.steps);
    return null != t ? (0, nw.WQ)(t) : r9(e.task);
}
function il(e) {
    let t = r7(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? r5(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: r9(e.task),
                      todoId: e.task.todoId,
                      line: it(e),
                  },
              ];
    });
}
function ir(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: a, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, nw.SY)(n.steps),
        d = u
            ? it(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(r9(e));
                  switch (e.status) {
                      case "failed":
                          return eb.intl.formatToPlainString(ev.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eb.intl.formatToPlainString(ev.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return eb.intl.formatToPlainString(ev.default["++9woZ"], {
                                  task: t,
                                  duration: (0, r8.MB)(e.durationMs),
                              });
                          return eb.intl.formatToPlainString(ev.default.nmI9Uh, { task: t });
                      default:
                          return eb.intl.formatToPlainString(ev.default.nmI9Uh, { task: t });
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
                                    className: nK.dO,
                                    children: n.steps.map((e) =>
                                        (0, i.jsx)(
                                            ie.A,
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
                                      className: nK.iq,
                                      children: (0, i.jsx)(r6.A, { text: e, variant: "body-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, i.jsx)(nI.A, {
        glyph: (0, i.jsx)(nE.u, {
            asset: (0, i.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: a,
            body: r9(o),
            position: "left",
            children: (0, i.jsx)("span", {
                className: nK.nC,
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
var ii = n(998445),
    ia = n(643210),
    is = n(648127),
    io = n(372795),
    iu = n(163897);
let ic = "conjure-browser-viewer";
function id(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [ia.A],
            () =>
                n.flatMap((e) => {
                    let n = ia.A.getTab(t, e);
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
        className: iu.kR,
        "aria-label": eb.intl.string(ev.default.Uvkr1G),
        children: l.map((e) =>
            (0, i.jsx)("li", { children: (0, i.jsx)(im, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function im(e) {
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
        c = (0, e_.Ry)(ic),
        [d, f] = a.useState(!1),
        m = a.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, is.i)(l.session);
    return (0, i.jsxs)(e7.D, {
        innerRef: s,
        className: u()(iu.Nr, h && iu.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, e_.mM)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e(409495),
                            n.e(513843),
                            n.e(501962),
                            n.e(531527),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, i.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: ic },
                )
            );
        },
        "aria-label": eb.intl.formatToPlainString(ev.default.G3a822, { title: g }),
        children: [
            (0, i.jsxs)("div", {
                className: iu.Gt,
                children: [
                    (0, i.jsx)(io.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || h,
                        className: iu.Ji,
                        "aria-label": eb.intl.formatToPlainString(ev.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, i.jsx)("div", {
                              className: iu.qf,
                              children: (0, i.jsx)(ii.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, i.jsx)("div", {
                              className: iu.HS,
                              children: (0, i.jsx)(x.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: eb.intl.string(ev.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("span", {
                className: iu.pG,
                children: [
                    (0, i.jsx)("span", { className: u()(iu.W9, h && iu.oM) }),
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
var ih = n(268409);
let ig = new WeakMap(),
    ip = new WeakMap();
function ix(e) {
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
            [rM.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = ig.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = ip.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), ip.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ig.set(e, n), n);
                })(rM.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === o.length
        ? null
        : (0, i.jsx)("li", { className: ih.h, children: (0, i.jsx)(id, { projectId: t, sessionIds: o }) });
}
var iv = n(469393);
function ib(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, eM.lG)(t.authored_at);
    return (0, i.jsx)(nT, {
        title: eb.intl.string(ev.default["t+b0rz"]),
        children: (0, i.jsxs)("div", {
            className: iv.r,
            children: [
                (0, i.jsxs)("div", {
                    className: iv.z,
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
                          text: eb.intl.string(ev.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var ij = n(288610),
    iy = n(493490),
    ik = n(17742);
let iw = [];
function iA(e) {
    let t = (0, c.bG)([iy.A], () => (null != e ? iy.A.getCaptures(e) : iw)),
        n = (0, c.bG)([iy.A], () => (null != e ? iy.A.getSelectedCapture(e) : null)),
        [l, r] = a.useState(null),
        i = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        a.useEffect(() => {
            if (null == e || null == n || null == i) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, ik._F)(e, n);
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
var iS = n(714917),
    iC = n(463660),
    iN = n(970211);
function iI(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([iS.A], () => (null != e ? iS.A.getBackground(e) : null)),
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
                                r = await (0, iC.Mg)(e, l);
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
        o = iA(n ? t : null);
    return null != o.selected
        ? null != o.src
            ? (0, i.jsx)("img", { className: iN.F1, src: o.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, i.jsx)("img", {
                className: u()(iN.LO, { [iN.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var iE = n(155718);
function i_(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let iM = ["command", "user_command", "message_command", "message"],
    iR = new Set([iE.kc.CHAT, iE.kc.USER, iE.kc.MESSAGE]);
function iP(e) {
    return e.type ?? iE.kc.CHAT;
}
function iT(e) {
    return iR.has(iP(e));
}
function iL(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function i$(e, t) {
    let n = iM.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !iL(e)), ...n.filter(iL)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || iL(r) || l.push(r);
    }
    return iM.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function iD(e, t, n) {
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
    let s = e.commands.filter(iT).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (iP(e)) {
                    case iE.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case iE.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(iL),
        u = i.length > 0 ? i$([...i, ...o], !0) : i$("both" === t ? [...s, a] : s, !1);
    return u.length > 0 ? u : [r];
}
var iq = n(377941),
    iO = n.n(iq);
function iF(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
n(205816);
let iz = { READ_MESSAGES: "VIEW_CHANNEL", VIEW_GUILD_INSIGHTS: "VIEW_GUILD_ANALYTICS" };
function iG(e) {
    return e.type === iE.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === iE.kc.USER || e.type === iE.kc.MESSAGE
          ? ""
          : "/";
}
let iU = {
        [eF.q7.APP_CHANNEL]: ev.default["3/aHX6"],
        [eF.q7.VOICE_CHANNEL]: ev.default["3/aHX6"],
        [eF.q7.ACTIVITY]: ev.default["3/aHX6"],
        [eF.q7.OVERLAY]: ev.default["rPpf5/"],
        [eF.q7.PROFILE_WIDGET]: null,
        [eF.q7.AUTOMOD]: null,
        [eF.q7.BOT]: null,
        [eF.q7.APPLICATION_COMMANDS]: null,
    },
    iB = [eF.q7.ACTIVITY, eF.q7.APP_CHANNEL, eF.q7.VOICE_CHANNEL, eF.q7.OVERLAY];
function iK(e) {
    return iB.find((t) => i_(e, t)) ?? null;
}
let iH = 1920 / 1018;
function iW(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let iV = iW(24, 1018),
    iX = iW(24, 1920);
function iY(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var iZ = n(90947),
    iQ = (((l = {}).IMAGE = "image"), l),
    iJ = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    i0 = n(598748),
    i1 = n(773669);
let i2 = [],
    i3 = {},
    i4 = {};
function i5(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function i7(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: iQ.IMAGE,
        visibility: iJ.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var i8 = n(127258),
    i9 = n(803306),
    i6 = n(587895),
    ae = n(432005),
    at = n(963852),
    an = n(95701),
    al = n(619019),
    ar = n(427262);
let ai = new an.nA({ id: "1337", guild_id: "1337", type: ll.rbe.GUILD_TEXT, name: "preview" });
function aa(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = (0, c.bG)([le.default], () => le.default.getUser(e), [e]);
    return (
        a.useEffect(() => {
            r && i?.username !== t && (0, i9.nj)(new al.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, i, e, t, l, n]),
        i
    );
}
let as = /^@\S+/;
var ao = n(775602);
let au = [ev.default["3eTjcV"], ev.default.l3j5nS];
var ac = n(97808),
    ad = n(778712),
    af = n(486020),
    am = n(46054),
    ah = n(200700);
let ag = {
        alert: { label: () => eb.intl.string(ev.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eb.intl.string(ev.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eb.intl.string(ev.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eb.intl.string(ev.default.RGzFNK), blockedStyle: !1 },
    },
    ap = {
        blocked: { label: () => eb.intl.string(ev.default.YdnZ8q), tone: "red" },
        alert: { label: () => eb.intl.string(ev.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eb.intl.string(ev.default.RGzFNK), tone: "green" },
    },
    ax = ["blocked", "alert", "allowed"],
    av = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function ab(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : eb.intl.formatToPlainString(eb.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, ah.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? eb.intl.formatToPlainString(eb.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? eb.intl.formatToPlainString(eb.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? eb.intl.formatToPlainString(eb.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? eb.intl.formatToPlainString(eb.t.opVZ9q, { mins: n / 60 })
                                      : eb.intl.formatToPlainString(eb.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var aj = n(984097),
    ay = n(13673);
let ak = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function aw(e) {
    let { example: t } = e,
        n = ab(t);
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
let aA = ["glazedgamer", "sprinkles", "donutking"];
function aS(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: a, blockedStyle: s } = ag[n.outcome];
    return (0, i.jsxs)("li", {
        className: u()(aj.nM, { [u()(aj.HV, ay.DX)]: s }),
        children: [
            (0, i.jsx)(n_.A, { children: `${a()}: ` }),
            (0, i.jsx)("span", {
                className: aj.my,
                children: (0, i.jsx)(ac.eu, {
                    src: (0, af.AE)(void 0, void 0),
                    size: ad._3.SIZE_24,
                    "aria-label": eb.intl.string(ev.default["1yI0xV"]),
                }),
            }),
            (0, i.jsxs)("div", {
                className: aj.fw,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", children: l }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), am.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, i.jsx)(aw, { example: n }) : null,
                ],
            }),
        ],
    });
}
function aC(e) {
    let { group: t, firstIndex: n } = e,
        l = a.useId(),
        r = ap[t.section],
        s = new Set(t.examples.map(ab)),
        o = 1 === s.size ? t.examples.map(ab)[0] : null;
    return (0, i.jsxs)("div", {
        className: aj.UO,
        children: [
            (0, i.jsxs)("div", {
                className: aj.RZ,
                children: [
                    (0, i.jsx)(x.E, {
                        id: l,
                        variant: "body-xs/semibold",
                        color: ak[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: aj.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, i.jsx)(x.E, {
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
                className: aj.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, i.jsx)(aS, { example: e, username: aA[(n + t) % aA.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function aN(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            ax
                .map((e) => ({ section: e, examples: t.filter((t) => av[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, i.jsxs)("div", {
        className: aj.Nr,
        children: [
            "" !== r
                ? (0, i.jsx)("div", {
                      className: aj.hk,
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
                    aC,
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
var aI = n(276293),
    aE = n(460905),
    a_ = n(110384),
    aM = n(365199),
    aR = n(633018),
    aP = n(763754),
    aT = n(267508),
    aL = n(194085),
    a$ = n(20851),
    aD = n(692508),
    aq = n(798819);
function aO(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, i.jsxs)("div", {
        className: u()(aq.item, aq.labelContainer, aq.colorDefault, {
            [aq.focused]: !0 === t.highlighted,
            [aq.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, i.jsx)("div", {
                      className: aq.iconContainerLeft,
                      children: (0, i.jsx)(n, { color: "currentColor", className: aq.icon }),
                  })
                : null,
            (0, i.jsx)("div", { className: u()(aq.label, aD.Gy), children: t.label }),
            null != l
                ? (0, i.jsx)("div", {
                      className: aq.iconContainer,
                      children: (0, i.jsx)(l, { color: "currentColor", className: aq.icon }),
                  })
                : null,
        ],
    });
}
function aF(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = a.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, i.jsx)("img", { src: l, alt: "", className: u()(t, aD.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: eb.intl.string(eb.t["5IEsGx"]), icon: a_.ArrowAngleLeftUpIcon, muted: !0 }
                : { label: eb.intl.string(eb.t.LYju5J), muted: !0 };
    return (0, i.jsx)("div", {
        className: u()(aq.menu, aD.MK),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: aq.scroller,
            children: [
                (0, i.jsx)(aO, { item: s }),
                (0, i.jsx)("div", { className: aq.separator }),
                (0, i.jsx)(aO, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
function az() {}
function aG(e) {
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
        { projectId: p, exchanges: v } = e,
        {
            items: b,
            botIcon: j,
            appIconSrc: y,
        } = ((t = (0, c.bG)([le.default], () => le.default.getCurrentUser())),
        (n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p))),
        (l = n?.preview_application_id ?? n?.application_id),
        (r = (0, c.bG)([i6.A], () => i6.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? eb.intl.string(ev.default.JEYq8M)),
        (o = (0, c.bG)([le.default], () => (null != l ? le.default.getUser(l) : void 0), [l])),
        (f = aa("31337", s, { bot: !0, enabled: !(d = o?.bot === !0) })),
        (m = d ? o : f),
        (h = aa("31338", eb.intl.string(ev.default["9iAOsw"]), { discriminator: "0003" })),
        (g = aa("31339", (0, ar.mG)(t) ?? "", { enabled: null != t })),
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
                                      a = (0, ae.rh)({
                                          ...(0, at.Ay)({
                                              channelId: ai.id,
                                              content: e,
                                              author: t,
                                              type: l ?? ll.lAJ.DEFAULT,
                                          }),
                                          id: i,
                                          state: ll.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: i,
                                                        name: n,
                                                        type: i8.G.APPLICATION_COMMAND,
                                                        user: (0, at.Vi)(s),
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
                                              messageType: ll.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: ll.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(as, `<@${a.id}>`)), s),
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
                                  targetMessage: eb.intl.string(ev.default["y+QYes"]),
                                  memberMessage: eb.intl.string(ev.default.BUTRDc),
                              },
                          ),
                [v, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === b.length) return null;
    let k = ai.name;
    return (0, i.jsxs)("div", {
        className: aD.Ix,
        children: [
            (0, i.jsxs)("div", {
                className: aD.ZO,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aI.TextIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, i.jsx)("ol", {
                className: u()(aD.TE, "group-spacing-16"),
                children: b.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, i.jsxs)(
                        "li",
                        {
                            className: null != r ? aD.Rz : void 0,
                            children: [
                                (0, i.jsx)(a$.A, {
                                    message: n,
                                    channel: ai,
                                    author: (0, aP.FT)(n.author, ai),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (j ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, i.jsx)(aT.A, { message: n, channel: ai }) : void 0,
                                    usernameClassName: r?.target === "user" ? aD.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, i.jsx)("div", {
                                          className: aD.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, i.jsxs)(aL.Ay, {
                                              children: [
                                                  (0, i.jsx)(aL.qv, {
                                                      label: eb.intl.string(eb.t.lfIHs4),
                                                      icon: aE.ReactionIcon,
                                                      onClick: az,
                                                  }),
                                                  (0, i.jsx)(aL.qv, {
                                                      label: eb.intl.string(eb.t["5IEsGx"]),
                                                      icon: a_.ArrowAngleLeftUpIcon,
                                                      onClick: az,
                                                  }),
                                                  (0, i.jsx)(aL.qv, {
                                                      label: eb.intl.string(eb.t["UKOtz+"]),
                                                      icon: aM.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: az,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, i.jsx)("div", {
                                          className: "user" === r.target ? aD.ET : aD.je,
                                          inert: !0,
                                          children: (0, i.jsx)(aF, {
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
                className: aD.DA,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(aR.SlashBoxIcon, { size: "sm", color: "currentColor" }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: eb.intl.formatToPlainString(eb.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
n(381941);
var aU = n(332173);
function aB(e) {
    let { name: t } = e;
    return (0, i.jsxs)(aU.A, { children: ["/", t] });
}
function aK(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(iO());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, i.jsx)(aB, { name: e.name }, e.start) : e.text));
}
n(827669);
var aH = n(757789),
    aW = n(26137),
    aV = n(231483),
    aX = n(558393);
let aY = { frame: ev.default.Z2bt4u, bot: ev.default.EbvC13, commands: ev.default.EbvC13, automod: ev.default.tiMvei },
    aZ = {
        user_widget: { server: ev.default.VlI3et, personal: ev.default.njJ4YL },
        overlay_widget: { server: ev.default.nUcjJ1, personal: ev.default.RDpKqP },
    };
function aQ(e) {
    return "frame" === e.kind && !0 !== e.game;
}
var aJ = n(573634);
let a0 = {
    frame: e4.GameControllerIcon,
    overlay_widget: aH.WindowTopIcon,
    user_widget: aW.UserCircleIcon,
    bot: e5.RobotIcon,
    commands: e5.RobotIcon,
    automod: aV.ShieldIcon,
};
function a1(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, i.jsxs)("div", {
        className: u()(aJ.e7, l),
        children: [(0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }), n],
    });
}
function a2(e) {
    let { labels: t } = e;
    return (0, i.jsx)("ul", {
        className: aJ.Ip,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    className: aJ.jw,
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
function a3(e) {
    let { name: t, description: n } = e;
    return (0, i.jsxs)("li", {
        className: aJ.lj,
        children: [
            (0, i.jsx)("span", {
                className: u()(aJ.Vo, aJ.G),
                children: (0, i.jsx)(e0.AppsIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, i.jsxs)("div", {
                className: aJ.aV,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function a4(e) {
    let { commands: t } = e;
    return (0, i.jsx)("ul", {
        className: aJ.wZ,
        children: t.map((e, t) => {
            let n = iG(e),
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
                                ? (0, i.jsx)(aB, { name: e.name })
                                : (0, i.jsx)(aU.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function a5(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, i.jsx)("ul", {
        className: aJ.p_,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    className: aJ.Aw,
                    children: (0, i.jsx)(x.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, i.jsx)(aK, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function a7(e) {
    let { experience: t, inServer: n, bullets: l, preview: r, blocks: a, commandNames: s } = e,
        o = aQ(t) ? e0.AppsIcon : a0[t.kind],
        u = (function (e, t) {
            if (aQ(e)) return eb.intl.string(ev.default.BM4Ymz);
            if ("user_widget" === e.kind || "overlay_widget" === e.kind) {
                let n = aZ[e.kind];
                return eb.intl.string(t ? n.server : n.personal);
            }
            return eb.intl.string(aY[e.kind]);
        })(t, n),
        c = n && t.kind in aZ ? eb.intl.string(ev.default.UXJCSG) : null;
    return (0, i.jsxs)("section", {
        className: aJ.s9,
        "aria-label": u,
        children: [
            (0, i.jsxs)("div", {
                className: aJ.JQ,
                children: [
                    (0, i.jsx)("span", {
                        className: aJ.Vo,
                        children: (0, i.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, i.jsx)(x.E, { variant: "body-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != c ? (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: c }) : null,
            null != r ? (0, i.jsx)("div", { className: aJ.VH, children: r }) : null,
            "automod" === t.kind && 1 === l.length
                ? (0, i.jsx)(x.E, {
                      variant: "body-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, i.jsx)(aK, { text: l[0], commandNames: s }),
                  })
                : l.length > 0
                  ? (0, i.jsx)(a5, { bullets: l, commandNames: s })
                  : null,
            a.length > 0 ? (0, i.jsx)("div", { className: aJ.PG, children: a }) : null,
        ],
    });
}
function a8(e) {
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
                                let n = t.map(iO()).join("|");
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
        className: aJ.aN,
        children: [
            (0, i.jsxs)("div", {
                className: aJ.Lv,
                children: [(0, i.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), c],
            }),
            h.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, i.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, i.jsx)("div", { className: aJ.yF, role: "separator" }),
                            (0, i.jsx)(a7, {
                                experience: t,
                                inServer: o,
                                bullets: n,
                                preview: f(t),
                                blocks: (function (e, t, n, l) {
                                    let r,
                                        a = n
                                            ? ((r = null != l ? aX.A.getGuildPermissionSpecMap(l) : null),
                                              [
                                                  {
                                                      key: "permissions",
                                                      caption: ev.default["2UbW6r"],
                                                      names: e.bot_permissions,
                                                      label: (e) => {
                                                          let t, n;
                                                          return (
                                                              (t = Object.hasOwn(iz, e) ? iz[e] : e),
                                                              (null != (n = Object.hasOwn(ll.xBc, t) ? ll.xBc[t] : null)
                                                                  ? r?.[n.toString()]?.title
                                                                  : null) ?? iF(e)
                                                          );
                                                      },
                                                  },
                                                  {
                                                      key: "intents",
                                                      caption: ev.default["7TKfpj"],
                                                      names: e.privileged_intents,
                                                      label: iF,
                                                  },
                                              ].flatMap((e) => {
                                                  let { key: t, caption: n, names: l, label: r } = e;
                                                  return null != l && l.length > 0
                                                      ? [
                                                            {
                                                                key: t,
                                                                caption: eb.intl.string(n),
                                                                labels: [...new Set(l.map(r))],
                                                            },
                                                        ]
                                                      : [];
                                              })).map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, i.jsx)(
                                                      a1,
                                                      { caption: n, children: (0, i.jsx)(a2, { labels: l }) },
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
                                                        let n = eb.intl.string(ev.default["6/3tGY"]),
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
                                                                a1,
                                                                {
                                                                    className: aJ.Iw,
                                                                    caption: eb.intl.formatToPlainString(
                                                                        ev.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, i.jsx)("ul", {
                                                                        className: aJ.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, i.jsx)(
                                                                                a3,
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
                                                            ? [eb.intl.string(ev.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [eb.intl.string(ev.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, i.jsx)(
                                                                    a1,
                                                                    {
                                                                        caption: eb.intl.string(ev.default.MY6UGJ),
                                                                        children: (0, i.jsx)(a2, { labels: r }),
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
                                                              a1,
                                                              {
                                                                  caption: eb.intl.string(eb.t["0hKkS+"]),
                                                                  children: (0, i.jsx)(a4, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...a,
                                            ];
                                        default:
                                            return a;
                                    }
                                })(d, t, t.id === g, u),
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
var a9 = n(633075),
    a6 = n(591410),
    se = n(27399);
function st(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([le.default], () => le.default.getCurrentUser()),
        r = a.useMemo(() => new a9.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, i.jsx)("div", {
              className: se.H,
              children: (0, i.jsx)(a6.A, {
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
var sn = n(443863);
function sl(e) {
    let t,
        { projectId: n, src: l, alt: r, size: a, onError: s } = e,
        o =
            ((t = Math.min(1, 1872 / a.width, 970 / a.height)),
            { width: iW(a.width * t, 1920), height: iW(a.height * t, 1018) });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(iI, { projectId: n }),
            (0, i.jsx)("div", {
                className: sn.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": iV,
                    "--custom-conjure-plan-overlay-widget-end": iX,
                    "--custom-conjure-plan-overlay-widget-width": o.width,
                    "--custom-conjure-plan-overlay-widget-height": o.height,
                },
                children: (0, i.jsx)("img", { src: l, alt: r, className: sn.M7, onError: s }),
            }),
        ],
    });
}
function sr(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, t$.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, l7.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function si(e) {
    return new Promise((t) => setTimeout(t, e));
}
function sa(e) {
    let { projectId: t, src: n, alt: l, size: r, generateImageRef: s } = e,
        o = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = !1,
                n = [];
            return (
                !(async function (e) {
                    (await (async function (e) {
                        let t = Date.now() + 3e3;
                        for (; e.querySelectorAll("img").length < 2 && Date.now() < t;) await si(50);
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
            ref: o,
            className: u()(sn.nj, sn.d9),
            style: { "--custom-conjure-plan-overlay-scene-aspect": String(iH) },
            children: (0, i.jsx)(sl, { projectId: t, src: n, alt: l, size: r, onError: () => {} }),
        })
    );
}
function ss(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: a, gone: s, handleError: o } = (0, l8._)(t, r);
    return s
        ? null
        : (0, i.jsx)(e7.D, {
              className: sn.xX,
              onClick: () => sr(t, [{ id: r, alt: l }], 0),
              "aria-label": eb.intl.string(ev.default.TvAPIm),
              children: null == a ? null : (0, i.jsx)("img", { src: a, alt: l, className: sn.sN, onError: o }),
          });
}
function so(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: d } = (0, l8._)(t, r),
        [f, m] = a.useState(!1),
        [h, g] = a.useState(!1),
        {
            slide: p,
            labels: v,
            pick: b,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([ao.Ay], () => ao.Ay.useReducedMotion),
                [r, i] = a.useState(0),
                [s, o] = a.useState(!1),
                u = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            a.useEffect(() => {
                if (!u) return;
                let e = setInterval(() => i((e) => (e + 1) % au.length), 4e3);
                return () => clearInterval(e);
            }, [u]);
            let f = a.useCallback((e) => {
                    (o(!0), i(e));
                }, []),
                m = a.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: au.map((e) => eb.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h }),
        j = eb.intl.string(ev.default.mjryK4),
        y = eb.intl.string(ev.default["rPpf5/"]),
        { generateImage: k } = (0, ij.R)({
            renderComponent: (e) =>
                null == s ? null : (0, i.jsx)(sa, { ...e, projectId: t, src: s, alt: y, size: l }),
            imageOptions: { width: 1920 },
        });
    return o
        ? null
        : (0, i.jsxs)("div", {
              className: sn.RM,
              onMouseEnter: () => m(!0),
              onMouseLeave: () => m(!1),
              onFocus: () => g(!0),
              onBlur: (e) => {
                  e.currentTarget.contains(e.relatedTarget) || g(!1);
              },
              children: [
                  (0, i.jsx)(e7.D, {
                      className: u()(sn.xX, sn.nj, { [sn.qQ]: 0 === p }),
                      style: { "--custom-conjure-plan-overlay-scene-aspect": String(iH) },
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
                                  t = await (0, t$.PK)(n, l);
                              } catch {
                                  return;
                              }
                              let o = null;
                              if (null != s)
                                  try {
                                      let e = await Promise.race([s(), si(8e3)]);
                                      null != e && (o = URL.createObjectURL(e));
                                  } catch {}
                              let u = o;
                              (0, l7.R)({
                                  items: [
                                      { type: "IMAGE", url: t, alt: r },
                                      ...(null == u ? [] : [{ type: "IMAGE", url: u, alt: i }]),
                                  ],
                                  startingIndex: null == u ? 0 : a,
                                  shouldHideMediaOptions: !0,
                                  location: "ConjureChat",
                                  onClose: null == u ? void 0 : () => URL.revokeObjectURL(u),
                              });
                          })({
                              projectId: t,
                              id: r,
                              widgetAlt: j,
                              sceneAlt: y,
                              startingIndex: p,
                              captureScene: null == s ? null : k,
                          }),
                      "aria-label": eb.intl.string(ev.default.TvAPIm),
                      children:
                          null == s
                              ? null
                              : 0 === p
                                ? (0, i.jsx)("img", { src: s, alt: j, className: sn.Ac, onError: d })
                                : (0, i.jsx)(sl, { projectId: t, src: s, alt: y, size: l, onError: d }),
                  }),
                  (0, i.jsx)("div", {
                      className: sn._4,
                      role: "group",
                      "aria-label": eb.intl.string(ev.default.EH36X6),
                      children: v.map((e, t) =>
                          (0, i.jsx)(
                              e7.D,
                              {
                                  className: u()(sn.c, { [sn.Cw]: p === t }),
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
function su(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: a, gone: s, handleError: o } = (0, l8._)(t, n);
    return s
        ? null
        : (0, i.jsx)("li", {
              children: (0, i.jsx)(e7.D, {
                  className: sn.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == a ? null : (0, i.jsx)("img", { src: a, alt: "", className: sn.rA, onError: o }),
              }),
          });
}
function sc(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: eb.intl.formatToPlainString(ev.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, i.jsx)("section", {
              className: sn.Op,
              children: (0, i.jsxs)("div", {
                  className: sn.uW,
                  children: [
                      (0, i.jsx)(x.E, {
                          variant: "body-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: eb.intl.string(ev.default.ubBJcy),
                      }),
                      (0, i.jsx)("ul", {
                          className: sn.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: a } = e;
                              return (0, i.jsx)(su, { projectId: t, id: r, alt: a, onOpen: () => sr(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function sd(e) {
    var t;
    let n,
        l,
        r,
        s,
        o,
        u,
        d,
        m,
        h,
        g,
        { projectId: p, proposal: v, version: b, onApprove: j } = e,
        { botExchanges: y } =
            ((n = i_(v, eF.q7.APPLICATION_COMMANDS)),
            (l =
                i_(v, eF.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(iT)
                          ? "commands"
                          : null
                    : null),
            (r = a.useMemo(
                () =>
                    null == l
                        ? []
                        : iD(v, l, {
                              message: eb.intl.string(ev.default.J7qggf),
                              reply: eb.intl.string(ev.default.nqYtiy),
                              event: eb.intl.string(ev.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = i4 } = t,
                r = (0, c.bG)([i1.default], () => i1.default.locale),
                i = (0, c.bG)([ts.Ay], () => {
                    let t = ts.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = a.useState(i3);
                    return (
                        a.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, t$.PK)(e, l.id).then(
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
                                                          ...i5(n),
                                                          ...(null != n.fallback ? { fallback: i5(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let i = iZ.uW.safeParse(r);
                                  if (!i.success) return null;
                                  let a = i.data;
                                  return null == a[i0.m.WIDGET_TOP] || null == a[i0.m.WIDGET_BOTTOM]
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
                                                                    type: iZ.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof i
                                                                ? (r[e] = { type: iZ.oG.NUMBER, value: i })
                                                                : (r[e] = { type: iZ.oG.STRING, value: i });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(i7),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: i2,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return a.useMemo(() => (null == i || null == o ? null : { applicationId: i, rendererProps: o }), [i, o]);
        })(p, v),
        w = b?.superseded === !0,
        A = v.what_changed?.trim() ?? "",
        S =
            ((t = v.commands),
            a.useMemo(
                () =>
                    t
                        .filter((e) => "/" === iG(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((o =
                null == (s = iK(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (u = v.design_image) && u.id !== iY(v)?.id ? u : null),
            (m = iY(v)),
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
                ui: null != d && null != h ? { experienceId: h, design: d } : null,
                overlay:
                    null != m && null != g ? { experienceId: g, design: m, size: eG(v.overlay_widget ?? null) } : null,
            }),
        N = a.useMemo(
            () =>
                v.commands.some(iT)
                    ? iD({ ...v, bot: void 0 }, "commands", {
                          message: eb.intl.string(ev.default.J7qggf),
                          reply: eb.intl.string(ev.default.nqYtiy),
                          event: eb.intl.string(ev.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        I = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p)?.name, [p]),
        E = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(p)?.install_scope === "guild", [p]),
        _ = (0, c.bG)(
            [ts.Ay, lz.A],
            () => {
                let e = ts.Ay.getProject(p)?.guild_id;
                return null != e ? (lz.A.getGuild(e) ?? null) : null;
            },
            [p],
        ),
        M =
            w && null != b
                ? eb.intl.formatToPlainString(ev.default.YZ3qJs, { version: b.version })
                : eb.intl.string(ev.default["3b6e7o"]),
        R = w ? (0, i.jsx)(n$, { children: eb.intl.string(ev.default.hF2c41) }) : null;
    return (0, i.jsxs)(nD, {
        title: M,
        meta: R,
        superseded: w,
        showLabel: eb.intl.string(ev.default.yD8EJS),
        hideLabel: eb.intl.string(ev.default.nSPGNb),
        bodyClassName: sn.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, i.jsx)("div", {
                className: sn.Qs,
                children: (0, i.jsx)(a8, {
                    appName: I ?? v.experiences?.[0]?.name ?? "",
                    inServer: E,
                    guild: _,
                    intro: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "body-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, i.jsx)(aK, { text: v.summary, commandNames: S }),
                            }),
                            (0, i.jsx)(sc, { projectId: p, proposal: v }),
                            "" !== A
                                ? (0, i.jsxs)("section", {
                                      className: sn.uW,
                                      children: [
                                          (0, i.jsx)(x.E, {
                                              variant: "body-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: eb.intl.string(ev.default.iNS4dl),
                                          }),
                                          (0, i.jsx)(x.E, {
                                              variant: "body-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, i.jsx)(aK, { text: A, commandNames: S }),
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
                                            ? (0, i.jsx)(ss, {
                                                  projectId: p,
                                                  design: C.ui.design,
                                                  alt: eb.intl.string(
                                                      null == (t = iK(v)) ? ev.default["3/aHX6"] : iU[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, i.jsx)(so, {
                                                  projectId: p,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, i.jsxs)(i.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, i.jsx)(st, { ...k }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, i.jsx)(aN, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || iL(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, N);
                                return t.length > 0 ? (0, i.jsx)(aG, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: S,
                }),
            }),
            null == j || w
                ? null
                : (0, i.jsxs)("div", {
                      className: sn.qr,
                      children: [
                          (0, i.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              text: eb.intl.string(ev.default["6S+wRM"]),
                              onClick: j,
                          }),
                          (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: eb.intl.string(ev.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var sf = n(289565);
function sm(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, i.jsx)("div", { className: sf.m, children: n })
        : (0, i.jsxs)("div", {
              className: sf.Z,
              children: [
                  n,
                  (0, i.jsx)(d.m, {
                      text: eb.intl.string(eb.t.WAI6xu),
                      asContainer: !0,
                      children: (0, i.jsx)(tH.K, {
                          "aria-label": eb.intl.string(eb.t.WAI6xu),
                          icon: e8.XSmallIcon,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function sh(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function sg(e, t) {
    return (e?.state === "action_needed" || e?.state === "publishing") && sh(t, e.status);
}
let sp = new WeakMap();
function sx(e) {
    let { projectId: t, publish: n } = e,
        l = (0, tb.A)(t, n);
    return (0, i.jsx)(f.$, {
        variant: "primary",
        size: "sm",
        loading: "publishing" === n.state && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sv(e) {
    let { projectId: t, cta: n } = e,
        l = (0, tm.Ay)(t);
    return null != l && sg(l, n)
        ? (0, i.jsx)(sm, {
              children: (0, i.jsxs)(lv.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, i.jsx)(sx, { projectId: t, publish: l }),
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
var sb = n(303345),
    sj = n(44255),
    sy = n(416473),
    sk = n(289830);
function sw(e) {
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
                        (await (0, sy.Du)(e, t.trigger), i("on"));
                    } catch (e) {
                        (o(e instanceof sb.A ? e.message : eb.intl.string(ev.default.EXceox)), i("error"));
                    }
                }, [e, t.trigger]),
                [d] = a.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? eb.intl.formatToPlainString(ev.default.orZDqY, { time: (0, sj.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sj.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? u : void 0,
            };
        })(t, n, l);
    return (0, i.jsx)(nT, {
        title: eb.intl.string(ev.default.ZtfX9V),
        children: (0, i.jsxs)("div", {
            className: sk.r,
            children: [
                (0, i.jsxs)("div", {
                    className: sk.z,
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
                            children: eb.intl.string(ev.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-sm/normal",
                                  role: "status",
                                  children: eb.intl.string(ev.default.k4IRsm),
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
                          text: eb.intl.string(ev.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sA = n(478016),
    sS = n(989271);
function sC(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = a.useId(),
        s = null == l;
    return (0, i.jsxs)(e7.D, {
        className: u()(sS.nM, { [sS.f1]: s, [sS.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": eb.intl.formatToPlainString(ev.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, i.jsxs)("div", {
                className: sS.jo,
                children: [
                    n
                        ? (0, i.jsx)(sA.CheckmarkSmallIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sS.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(x.E, {
                        tag: "div",
                        variant: "body-md/medium",
                        color: "none",
                        className: sS.G9,
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
function sN(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = a.useState(() => new Set()),
        o = a.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, i.jsx)(nT, {
        title: eb.intl.string(ev.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, i.jsx)(
                sC,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var sI = n(313537),
    sE = n(125372);
let s_ = {
        add_to_server: ev.default["7SD3ul"],
        remove_from_server: ev.default.ErhKil,
        change_server: ev.default["1E5/ay"],
    },
    sM = {
        add_to_server: ev.default["Wy+mGW"],
        remove_from_server: ev.default.vUWHZe,
        change_server: ev.default.MfnSEe,
    };
var sR = n(831913),
    sP = n(618785);
function sT(e) {
    var t;
    let n,
        l,
        r,
        a,
        s,
        o,
        u,
        d,
        m,
        h,
        g,
        p,
        { projectId: v, change: b, current: j, onReply: y } = e,
        {
            project: k,
            action: w,
            done: A,
            note: S,
        } = ((n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(v), [v])),
        (l = (0, sI.fL)(n)),
        (r = n?.install_scope === "guild"),
        (t = "remove_from_server" === b.action ? b.guild_id : l),
        (a = (0, c.bG)([lz.A], () => lz.A.getGuild(t)?.name, [t]) ?? eb.intl.string(ev.default["6bhivN"])),
        (s = (0, sE.Y)(v).length > 0),
        (o =
            (0, c.bG)(
                [rM.A],
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
                    })(rM.A.getMessages(v), b, l),
                [v, b, l],
            ) &&
            null != n &&
            ("remove_from_server" === b.action ? !r : r)),
        (u = "change_server" !== b.action || null == b.guild_id || l === b.guild_id),
        (d = null != n && ("add_to_server" === b.action ? !r : r) && u && !o),
        (m = null != n && (0, ts.PV)(n)),
        (h = "remove_from_server" !== b.action),
        (g = d && m ? { kind: b.action, label: eb.intl.string(s_[b.action]), disabled: h && !s } : null),
        (p = null),
        d && !m
            ? (p = eb.intl.string(ev.default.Kt9exT))
            : g?.disabled === !0 && (p = eb.intl.string(ev.default.NXvmoQ)),
        { project: n, action: g, done: o ? eb.intl.formatToPlainString(sM[b.action], { server: a }) : null, note: p }),
        C = b.keep_label,
        N = j && null != w,
        I = N && null != C && null != y,
        E = A ?? (j ? S : null);
    return null != E || N
        ? (0, i.jsxs)(lv.B, {
              gap: 8,
              children: [
                  N
                      ? (0, i.jsxs)(lv.B, {
                            direction: "horizontal",
                            gap: 8,
                            wrap: !0,
                            children: [
                                (0, i.jsx)(f.$, {
                                    variant: "remove_from_server" === w.kind ? "critical-secondary" : "primary",
                                    size: "sm",
                                    text: w.label,
                                    disabled: w.disabled,
                                    onClick: () => {
                                        null != k &&
                                            (w?.kind === "remove_from_server"
                                                ? (0, sR.A)({ project: k })
                                                : (0, sP.A)({ projectId: v }));
                                    },
                                }),
                                I
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
var sL = n(919790),
    s$ = n(908492),
    sD = n(971824),
    sq = n(162052),
    sO = n(165648);
function sF(e) {
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
        x = a.useMemo(() => (0, nw.Jf)(n, l), [n, l]),
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
            className: nK.pj,
            "data-live": !1,
            children: (0, i.jsx)(nI.A, {
                glyph: (0, i.jsx)(rZ.StopIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eb.intl.string(ev.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let b = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        j = m ? ((0, nw.lt)(n) ?? c ?? null) : null,
        y = null != j && j.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = r7(k.map((e) => e.taskId)),
        A = !g && (l || k.some((e) => "running" === e.task.status)),
        S = il(k);
    return (0, i.jsxs)("ol", {
        className: nK.pj,
        "data-live": A,
        children: [
            (0, i.jsx)(nC.Ay, {
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
                let l = null != e.task.helperMark ? r5(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          ir,
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
            (0, i.jsx)(ix, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, i.jsx)("li", {
                      className: nK.YO,
                      children: (0, i.jsx)(nU, { todos: j, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sz(e) {
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
            settingsAskId: p,
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
            () => rQ({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: L, showsClosingMessage: $, closingContent: D } = P,
        q = (A ? S : void 0) ?? P.attachmentsHost,
        O = $ && !A,
        F = null == c ? null : (0, i.jsx)(sL.A, { projectId: t, attachments: c }),
        z = null == F ? null : (0, i.jsx)("div", { className: nK.MT, children: F }),
        G = k
            ? (0, i.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return eb.intl.string(ev.default.Mv5OmK);
                          case "queued":
                              return eb.intl.string(ev.default["Po/2mi"]);
                          case "restarting":
                              return eb.intl.string(ev.default.Vj0woh);
                          default:
                              return eb.intl.string(ev.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, i.jsxs)("div", {
        className: nK.ue,
        children: [
            T.length > 0 && !A
                ? (0, i.jsx)("ol", {
                      className: nK.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, i.jsxs)(
                              "li",
                              {
                                  className: nK.DV,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: sO.PT,
                                          children: (0, s$.U)(e.content, !0, {
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
                ? (0, i.jsx)(sd, { projectId: t, proposal: r, version: s, onApprove: y })
                : O
                  ? (0, i.jsxs)("div", {
                        className: u()(nK.ky, sq.XR),
                        children: [
                            (0, i.jsx)("div", {
                                className: u()(sO.PT, nK.cW),
                                children: (0, s$.U)(D, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === q ? z : null,
                            G,
                        ],
                    })
                  : null,
            null != d
                ? (0, i.jsx)("div", {
                      className: u()(nK.ky, nK.k1, sq.XR, { [sD.O]: null != m && "open" === h }),
                      children: (0, i.jsx)(rE, {
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
                      className: u()(nK.ky, nK.k1, sq.XR),
                      children: (0, i.jsx)(rz, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== q && ("closing" !== q || O) ? null : F,
            null != v ? (0, i.jsx)(sv, { projectId: t, cta: v }) : null,
            null != o && o.length > 0 ? (0, i.jsx)(sN, { ideas: o, pickedIdeaIds: j, onPick: b }) : null,
            null != C ? (0, i.jsx)(ib, { proposal: C, onRestore: N }) : null,
            null != _ ? (0, i.jsx)(sT, { projectId: t, change: _, current: M, onReply: R }) : null,
            null != I ? (0, i.jsx)(sw, { projectId: t, proposal: I, current: E }) : null,
            O ? null : G,
        ],
    });
}
var sG = n(286251),
    sU = n(146806),
    sB = n(475358),
    sK = n(783977),
    sH = n(559647),
    sW = n(787564),
    sV = n(339200),
    sX = n(234320),
    sY = n(191023),
    sZ = n(285796),
    sQ = n(922329),
    sJ = n(153171);
function s0(e) {
    let { projectId: t } = e;
    return (0, i.jsx)(sQ.p, {
        name: eb.intl.string(ev.default.xhFsEP),
        thumb: (0, i.jsxs)("span", {
            className: t5.PA,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)(sY.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, i.jsx)("span", {
                    className: t5.OY,
                    children: (0, i.jsx)(lg.PencilIcon, {
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
            children: eb.intl.string(ev.default["9y+Dae"]),
        }),
        children: (0, i.jsx)("button", {
            type: "button",
            className: sJ.o1,
            onClick: () => {
                er(t)?.active === !1 ? eu(t) : ei(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": eb.intl.string(ev.default.N852dj),
            children: (0, i.jsx)(sZ.CircleXIcon, { size: "xs", color: "currentColor" }),
        }),
    });
}
function s1(e) {
    let { send: t } = e;
    return (0, i.jsxs)(sQ.p, {
        compact: !0,
        name: eb.intl.string(ev.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, i.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      children: eb.intl.string(ev.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, i.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: sJ.Rk }) : null,
            "failed" === t.status
                ? (0, i.jsx)(lp.Q, {
                      variant: "secondary",
                      textVariant: "body-sm/medium",
                      text: eb.intl.string(ev.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var s2 = n(587157),
    s3 = n(347111),
    s4 = n(120234),
    s5 = n(901173),
    s7 = n(161431),
    s8 = n(46653),
    s9 = n(695184),
    s6 = n(661191),
    oe = n(502472),
    ot = n(957071),
    on = n(927659),
    ol = n(351906),
    or = n(407653),
    oi = n(322915);
function oa(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: a, onSelect: s } = e,
        o = (0, c.bG)([ol.A], () => ol.A.hidePersonalInformation ?? !1),
        u = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, i.jsx)(
                      on.Ay.User,
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
                      on.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, i.jsx)(or.A, { projectId: n, file: e.file, className: oi.Vk }),
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
    return (0, i.jsx)(on.Ay, {
        id: t,
        className: oi.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": eb.intl.string(ev.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, i.jsx)(os, { titleId: u, title: eb.intl.string(ev.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, i.jsx)(os, { titleId: d, title: eb.intl.string(ev.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function os(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, i.jsx)(x.E, { id: t, variant: "body-xs/semibold", color: "text-muted", className: oi.Gf, children: n }),
            l,
        ],
    });
}
var oo = n(719442),
    ou = n(355622),
    oc = n(408018),
    od = n(186306),
    of = n(323350),
    om = n(35277),
    oh = n(68059),
    og = n(267102),
    op = n(259691);
let ox = (0, an.createChannelRecord)({ id: "1", type: ll.rbe.DM });
function ov(e) {
    let t = sV.VW.end(e, []);
    return { anchor: t, focus: t };
}
function ob(e) {
    return (0, of.WO)(sV.VW.richValue(e), { mode: "raw" });
}
function oj(e, t) {
    ((e.children = (0, oc.x7)(t)), (e.selection = ov(e)), e.onChange());
}
function oy(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rH.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, i.jsxs)("span", { ...t, contentEditable: !1, children: [(0, i.jsx)(op.A, { attachmentId: r }), n] });
}
var ok = n(366811);
function ow(e, t) {
    return e.split("/").some((e, n, l) => e === t && "conjure" === l[n - 1]);
}
function oA(e) {
    let t = ok.A.getState().path;
    return ow(window.location.pathname, e) && (null == t || ow(t, e));
}
function oS(e, t) {
    return null != t && (0, tT.vq)(e) && t.contains(e);
}
var oC = n(497437),
    oN = n(465410);
let oI = "body-md/normal",
    oE = null;
function o_(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = a.useState(t),
        o = a.useRef(null),
        d = a.useRef(null),
        f = a.useRef(0),
        [m, h] = a.useState(0),
        [g, p] = a.useState(0),
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
            (p(a + i), h(s));
            let u = s + a,
                c = Math.max(n, l.offsetWidth) + i + a,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : u / c;
            b({
                frontFrom: 1e3 * (0, sU._R)(f),
                frontTo: 1e3 * (0, sU._R)(m),
                backFrom: 1e3 * (0, sU.T)(f),
                backTo: 1e3 * (0, sU.T)(m),
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
        I = (0, c.bG)([ao.Ay], () => ao.Ay.useReducedMotion),
        E = t === eb.intl.string(ev.default.Zc7gML),
        _ = r === t && E;
    function M(e, t, n) {
        let l = null != n;
        return (0, i.jsx)("span", {
            ref: n,
            className: u()(oC.VT, { [oC.qk]: l }),
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
            children: (0, i.jsx)(sB.e, { shortcut: "tab", className: oC.xT, keyClassName: e }),
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(sG.o, {
                text: t,
                variant: oI,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: u()(oC.xM, { [oC.s2]: l }),
                onStart: S,
                onComplete: () => s(t),
            }),
            M(oC.IS, n || (!I && "out" === k), o),
            (0, i.jsx)("span", {
                ref: d,
                className: oC.QI,
                "aria-hidden": !0,
                children: (0, i.jsx)(x.E, { variant: oI, tag: "span", children: t }),
            }),
            _
                ? (0, i.jsxs)("span", {
                      className: oC.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, i.jsx)(x.E, { variant: oI, tag: "span", className: oC.xM, children: t }),
                          M(oC.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let oM = a.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                aiPaused: l = !1,
                running: r,
                restoring: s = !1,
                onSend: o,
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
                onDraftHasTextChange: k,
                modelSettings: w,
                onModelSettingsChange: A,
                visible: S = !0,
            } = e,
            C = n && !l,
            N = (function (e) {
                let t = a.useContext(og.Ay),
                    [n] = a.useState(() => {
                        let n = (0, oo.ie)();
                        return (
                            (n.children = (0, oc.x7)(e)),
                            (n.selection = ov(n)),
                            (0, oh.a)({
                                editor: n,
                                chatInputType: ou.oU.GENERIC_RICH_TEXTAREA,
                                channel: ox,
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
                                    for (let [t, l] of sV.VW.nodes(e, { at: [], match: sV.l5.isText }))
                                        for (let e of t.text.matchAll(rH.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        od.o.withMergedEntry(e, () =>
                                            sV.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: i } of n.reverse())
                                                    om.b.textToVoid(
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
            })(rX.A.getDraft(t)),
            [I, E] = a.useState(() => ob(N));
        (0, s4.N$)(I);
        let _ = a.useRef(I),
            [M, R] = a.useState(null),
            P = a.useCallback(() => {
                let e = ob(N);
                (e !== _.current && ((_.current = e), (0, s3.I)(t, e), E(e)),
                    R(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !sV.ZF.isCollapsed(t)) return null;
                            let [n] = sV.VW.node(e, t.anchor.path);
                            return sV.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(N),
                    ));
            }, [N, t]),
            L = a.useCallback((e) => oj(N, e), [N]),
            $ = "" !== I.trim();
        a.useEffect(() => k?.($), [$, k]);
        let D = a.useRef(t);
        a.useLayoutEffect(() => {
            D.current !== t && ((D.current = t), oj(N, rX.A.getDraft(t)));
        }, [N, t]);
        let q = (0, c.bG)([ao.Ay], () => ao.Ay.isSubmitButtonEnabled),
            [O, F] = a.useState(!1),
            [z, G] = a.useState(!1);
        (a.useEffect(() => {
            r ? G(!1) : (O && G(!0), F(!1));
        }, [r, O]),
            a.useEffect(() => {
                if (!z) return;
                let e = setTimeout(() => G(!1), oP);
                return () => clearTimeout(e);
            }, [z]));
        let {
                drafts: B,
                addFiles: K,
                pasteFiles: H,
                removeDraft: W,
                settled: V,
                takeRefs: X,
            } = (0, tO.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            Y = en.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && Q(n);
            }),
            Z = en.useState((e) => (null == t ? null : (e.byProject[t]?.chatFocusRequest ?? null))),
            J = a.useRef(Z);
        a.useEffect(() => {
            let e = J.current;
            ((J.current = Z), C && null != e && null != Z && Z !== e && sV.VW.focus(N));
        }, [Z, C, N]);
        let ee = "" !== I.trim() || B.length > 0 || y || Y,
            et = C && ee && V,
            [el, ea] = a.useState(null);
        a.useEffect(() => {
            if (null == el) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => ea(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [el]);
        let ec = (0, s7.rU)(t),
            [ed, ef] = a.useState(null),
            [em, eh] = a.useState(0),
            eg = a.useMemo(() => (null != M && C ? (0, s5.OG)(M, M.length) : null), [M, C]),
            ep = eg?.start ?? null;
        a.useEffect(() => {
            null == ep ? ef(null) : (0, s7.IP)(t);
        }, [ep, t]);
        let ex = ep === ed ? null : eg,
            ey = (function (e, t) {
                let n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
                    { creator: l, collaborators: r } = (0, oe.yv)(n),
                    i = (0, c.bG)([s8.default], () => s8.default.getId()),
                    s = null != n && (0, eF.pL)(n) ? n.guild_id : void 0,
                    o = t?.toLowerCase() ?? null;
                return (
                    a.useEffect(() => {
                        null != s && null != o && s9.A.requestMembers(s, o, 100);
                    }, [s, o]),
                    (0, c.yK)(
                        [lF.Ay, lz.A, le.default],
                        () => {
                            if (null == o) return [];
                            let e = null != s ? lz.A.getGuild(s) : null,
                                t = (t) => (0, s5.mO)(t, o, null != e ? lF.Ay.getNick(e.id, t.id) : null),
                                a = new Set(n?.collaborator_role_ids ?? []),
                                u = null != e && a.has(s6.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                c =
                                    null == e
                                        ? []
                                        : lF.Ay.getMemberIds(e.id)
                                              .map((e) => le.default.getUser(e))
                                              .filter(
                                                  (n) =>
                                                      null != n &&
                                                      t(n) &&
                                                      (u ||
                                                          (lF.Ay.getMember(e.id, n.id)?.roles ?? []).some((e) =>
                                                              a.has(e),
                                                          ) ||
                                                          lG.$3({
                                                              permission: ll.xBc.MANAGE_GUILD,
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
            })(t, ex?.text ?? null),
            ek = a.useMemo(() => (null == ex ? [] : (0, s5.l$)(ey, ec, ex.text)), [ex, ey, ec]),
            ew = ex?.text;
        a.useEffect(() => eh(0), [ew]);
        let eA = ek.length > 0,
            eS = Math.min(em, Math.max(0, ek.length - 1)),
            eC = a.useId(),
            eN = a.useCallback(
                (e) => {
                    let t = ek[e];
                    null != ex &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: i } = l.anchor;
                            (om.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: i } }),
                                om.b.insertText(e, `${n} `));
                        })(N, ex.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ek, ex, N],
            ),
            eI = a.useCallback(() => {
                if (!et) return;
                let e = X(),
                    n = Y
                        ? (function (e) {
                              let t = er(e);
                              if (null == t || !Q(t)) return null;
                              let n = t.history.present,
                                  l = t.keptStill ?? es(e);
                              return (
                                  er(e)?.active === !1
                                      ? eu(e)
                                      : ei(e, (e) => ({ ...e, history: U, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: i, messageKey: a } = (0, ej.Wx)(e, t, r),
                                          s = { projectId: e, nonce: i, job: null, thumbUrl: null };
                                      (nV.set(a, s),
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
                                              capture: (t) => (0 === t ? l : es(e)),
                                              composite: (e) =>
                                                  (async function (e, t) {
                                                      let n = await createImageBitmap(e);
                                                      try {
                                                          let e = { width: n.width, height: n.height },
                                                              l = nf(e),
                                                              r = nf(e);
                                                          if (null == l || null == r) return null;
                                                          return (
                                                              nd(r.ctx, t, e),
                                                              l.ctx.drawImage(n, 0, 0),
                                                              l.ctx.drawImage(r.canvas, 0, 0),
                                                              await l.toBlob()
                                                          );
                                                      } finally {
                                                          n.close();
                                                      }
                                                  })(e, n),
                                              upload: (t) =>
                                                  (0, t$.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, t$.n6)(e, t.id),
                                              send: (n) => (0, ej.dv)(e, t, [...r, n], { nonce: i }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nY(a, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nV.delete(a),
                                                          window.setTimeout(() => {
                                                              (nY(a, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                o(I, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        i = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === i) return i;
                    null == oE && (oE = document.createElement("canvas").getContext("2d"));
                    let a = oE;
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
                })(oL(eL.current), eK.current, (0, s5.Lj)(I));
                ("" !== l && ea(l), L(""), ef(null));
            }, [et, Y, t, I, o, X, L]),
            eE = a.useCallback(
                (e) => {
                    (e.preventDefault(), eI());
                },
                [eI],
            ),
            e_ = a.useCallback(() => {
                null != f && !O && (F(!0), f(), C && sV.VW.focus(N));
            }, [f, O, C, N]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                i = a.useRef(r);
            (a.useEffect(() => {
                i.current = r;
            }),
                a.useEffect(() => {
                    if (!t) return;
                    let e = oS(document.activeElement, l?.current);
                    function r(t) {
                        e = oS(t.target, l?.current);
                    }
                    function a(t) {
                        var r, a, s;
                        "Escape" === t.key &&
                            !t.isComposing &&
                            oA(n) &&
                            er(n)?.active !== !0 &&
                            !T(n).active &&
                            ((r = t.target),
                            (a = l?.current),
                            (s = e),
                            ((0, tT.vq)(r) && r !== document.body && r !== document.documentElement
                                ? !!oS(r, a) && null == r.closest('input, textarea, [contenteditable="true"]')
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
        })({ active: r && null != f && S, projectId: t, scopeRef: m, onEscape: e_ });
        let eM = (r && null != f) || z,
            eR = null == v || "" !== I || !C || s || y ? null : v,
            eP = a.useCallback(
                (e) => {
                    if (eA && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ek.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), eh((eS + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eN(eS));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), ef(ex?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && er(t)?.active === !0) {
                        (e.preventDefault(), e.stopPropagation(), eo(t));
                        return;
                    }
                    if ("Escape" === e.key && r && null != f && oA(t)) {
                        (e.preventDefault(), e.stopPropagation(), e_());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eR) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), L(eR));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eI());
                },
                [eI, g, r, f, e_, eR, L, eA, ek.length, eS, eN, ex, t],
            ),
            eT = a.useCallback(
                (e) => {
                    C && H(e);
                },
                [C, H],
            );
        (0, sX.Vo)({
            event: ll.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return eT(t);
            },
        });
        let eL = a.useRef(null),
            e$ = a.useCallback(() => {
                let e = _.current;
                x?.((0, s5.Lj)(e), () => {
                    _.current === e && L("");
                });
            }, [x, L]),
            [eD, eq] = a.useState(0),
            [eO, ez] = a.useState(!1);
        a.useEffect(() => {
            if (0 === I.length) return void ez(!1);
            let e = oL(eL.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eq(t);
            }
            ez(!0);
            let t = setTimeout(() => ez(!1), oR);
            return () => clearTimeout(t);
        }, [I]);
        let eG = a.useMemo(() => ({ "--custom-glow-x": `${eD}px` }), [eD]),
            eU = eO ? ` ${oC.EB}` : "",
            eB = s
                ? eb.intl.string(ev.default.qqlUiW)
                : l
                  ? eb.intl.string(ev.default.Z0hyNL)
                  : C
                    ? y
                        ? eb.intl.string(ev.default.knUjL3)
                        : Y
                          ? eb.intl.string(ev.default["6rXxwa"])
                          : j
                            ? eb.intl.string(ev.default.VxH5vv)
                            : b
                              ? eb.intl.string(ev.default.IevBEw)
                              : eb.intl.string(r ? ev.default["0BJa/0"] : ev.default.TEeU7z)
                    : eb.intl.string(ev.default.zZ9NgM),
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
            eY = null != eR,
            eZ = el ?? eR ?? eB,
            eQ = "" === I && "" !== eZ;
        return (0, i.jsxs)("form", {
            onSubmit: eE,
            className: oC.DA,
            children: [
                eA
                    ? (0, i.jsx)(oa, {
                          id: eC,
                          projectId: t,
                          suggestions: ek,
                          selectedIndex: eS,
                          onHover: eh,
                          onSelect: eN,
                      })
                    : null,
                B.length > 0 || Y
                    ? (0, i.jsxs)("div", {
                          className: oC.lN,
                          children: [
                              B.map((e) => (0, i.jsx)(tO.Nl, { draft: e, onRemove: W }, e.localId)),
                              Y ? (0, i.jsx)(s0, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, i.jsx)("span", { className: `${oC.wg} ${oC.LP}${eU}`, style: eG, "aria-hidden": !0 }),
                (0, i.jsx)("span", { className: `${oC.wg} ${oC.L3}${eU}`, style: eG, "aria-hidden": !0 }),
                (0, i.jsxs)("div", {
                    className: oC.VA,
                    ref: eL,
                    children: [
                        (0, i.jsx)(ot.A, {
                            navId: "conjure-composer-attach",
                            disabled: !C,
                            buttonClassName: `${oC.Y0} ${oC.nu}`,
                            iconClassName: oC.Qu,
                            onAddFiles: K,
                            onImport: p,
                            onSendToOtherProjects: null != x ? e$ : void 0,
                        }),
                        eQ
                            ? (0, i.jsx)("div", {
                                  ref: eW,
                                  className: oC.ar,
                                  "aria-hidden": "true",
                                  children: (0, i.jsx)(
                                      o_,
                                      { text: eZ, offering: eY && null == el, typed: null != el },
                                      S ? "visible" : "hidden",
                                  ),
                              })
                            : null,
                        (0, i.jsx)(n_.A, { id: eX, children: eb.intl.string(ev.default.ldNl9x) }),
                        (0, i.jsx)(rH.Fu.Provider, {
                            value: t,
                            children: (0, i.jsx)(sW.A, {
                                editor: N,
                                containerClassName: u()(oC.sq, oN.dv),
                                className: oC.jp,
                                readOnly: !C,
                                canFocus: C,
                                onChange: P,
                                onBlur: () => R(null),
                                onKeyDown: eP,
                                onPaste: eT,
                                renderExtraElement: oy,
                                "aria-labelledby": eX,
                                "aria-describedby": eQ ? eV : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eA,
                                "aria-controls": eA ? eC : void 0,
                                "aria-activedescendant": eA ? ((0, on.aI)(eS) ?? void 0) : void 0,
                            }),
                        }),
                        eQ ? (0, i.jsx)(n_.A, { id: eV, children: eB }) : null,
                        (0, i.jsx)("div", {
                            className: oC.Sz,
                            onMouseDown: eM ? oT : void 0,
                            children: eM
                                ? (0, i.jsx)(d.m, {
                                      text: eb.intl.string(ev.default.wiguT0),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)("button", {
                                          type: "button",
                                          className: `${oC.Y0} ${oC.$E} ${oC.PG}`,
                                          disabled: O || !r,
                                          onClick: e_,
                                          "aria-label": eb.intl.string(ev.default.wiguT0),
                                          children: (0, i.jsx)(rZ.StopIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : w?.tierSettings != null && null != A
                                  ? (0, i.jsx)(s2.A, {
                                        settings: w.tierSettings,
                                        tiers: w.tiers,
                                        choices: w.choices,
                                        disabled: !C,
                                        onChange: A,
                                        className: `${oC.Y0} ${oC.$E}`,
                                        icon: (0, i.jsx)(sK.FiltersHorizontalIcon, {
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
                                  className: oC.fF,
                                  children: [
                                      (0, i.jsx)("div", { className: oC.MT }),
                                      (0, i.jsx)("button", {
                                          type: "submit",
                                          className: oC.rt,
                                          disabled: !et,
                                          "aria-label": eb.intl.string(ev.default.rxW2cl),
                                          children: (0, i.jsx)(sH.SendMessageIcon, {
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
    oR = 1500,
    oP = 1e3;
function oT(e) {
    e.preventDefault();
}
function oL(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var o$ = n(709753),
    oD = n(540338);
function oq(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, nA.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var oO = n(986109);
let oF = a.createContext(null);
function oz(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: c,
        } = e,
        d = a.useContext(oF),
        [f, m] = a.useState(() => ao.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: u()(oO.xk, { [oO.g5]: f, [oO.Qo]: s, [oO.q3]: o }),
        children: n,
    });
}
let oG = new Map();
function oU(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let oB = "live_behind";
var oK = n(165963);
function oH(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([r_.A], () => null != n && n.length > 0 && rS({ keys: n }, r_.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: eb.intl.string(ev.default.F2yVHg) }
        : null;
}
function oW(e) {
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
let oV = [12e4];
var oX = n(292771);
function oY(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([ao.Ay], () => ao.Ay.useReducedMotion),
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
            className: oX.wg,
            children: r.map((e) =>
                (0, i.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: u()(oX.qd, e.leaving ? oX.dv : oX.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function oZ(e) {
    return e?.state === "action_needed" && "review_permissions" === e.action;
}
var oQ = n(247171);
function oJ(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: a } = e;
    return (0, i.jsxs)("div", {
        className: u()(oQ.row, r),
        children: [
            (0, i.jsx)(x.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: u()(oQ.gutter, oQ[n]),
                "aria-hidden": !0,
                children: (0, i.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, i.jsx)("div", { className: oQ.content, children: a }),
        ],
    });
}
var o0 = n(830205);
function o1(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(oJ, {
        icon: t,
        tone: "muted",
        firstLine: "body-sm/normal",
        className: o0.aK,
        children: (0, i.jsxs)("div", {
            className: o0.n8,
            children: [
                (0, i.jsx)(x.E, {
                    tag: "div",
                    variant: "body-sm/normal",
                    color: "text-muted",
                    className: o0.Qq,
                    children: l,
                }),
                null != n
                    ? (0, i.jsx)("div", {
                          className: o0.X8,
                          children: (0, i.jsx)(d.m, {
                              text: eb.intl.string(eb.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tH.K, {
                                  "aria-label": eb.intl.string(eb.t.WAI6xu),
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
function o2(e) {
    let { projectId: t } = e,
        n = a.useContext(tm.bI);
    return (0, i.jsx)(o1, {
        icon: aV.ShieldIcon,
        children: eb.intl.format(ev.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tm.vL)(t, n.guildId));
            },
        }),
    });
}
var o3 = n(443865),
    o4 = n(716502);
function o5(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, i.jsx)(oJ, {
        icon: t,
        tone: "brand",
        firstLine: "body-md/semibold",
        className: o4.Nr,
        children: (0, i.jsxs)("section", {
            className: o4.Qs,
            children: [
                l,
                null != n
                    ? (0, i.jsx)("div", {
                          className: o4.X8,
                          children: (0, i.jsx)(d.m, {
                              text: eb.intl.string(eb.t.WAI6xu),
                              asContainer: !0,
                              children: (0, i.jsx)(tH.K, {
                                  "aria-label": eb.intl.string(eb.t.WAI6xu),
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
function o7(e) {
    let { children: t } = e;
    return (0, i.jsx)(x.E, {
        tag: "div",
        variant: "body-md/semibold",
        color: "text-strong",
        className: o4.DD,
        children: t,
    });
}
function o8(e) {
    let { children: t } = e;
    return (0, i.jsx)(x.E, {
        tag: "div",
        variant: "body-sm/normal",
        color: "text-muted",
        className: o4.rf,
        children: t,
    });
}
function o9(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", { className: o4.o1, children: t });
}
var o6 = n(95635);
function ue(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = (0, tb.A)(t, n);
    return (0, i.jsx)(o1, {
        icon: o6.UploadIcon,
        onDismiss: l,
        children: eb.intl.format(ev.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let ut = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && oZ(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, i.jsx)(o2, { projectId: n });
        },
    },
    {
        id: oB,
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
                (null != n.publishCta && sg(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(oB)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, i.jsx)(ue, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: i, ideasIntroAnchorId: a } = e;
            return !n || null == a || oZ(l) ? null : null != t || r || i ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, i.jsxs)(o5, {
                icon: o3.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, i.jsx)(o7, { children: eb.intl.string(ev.default.OJlbhX) }),
                    (0, i.jsx)(o8, { children: eb.intl.string(ev.default["3vJBni"]) }),
                    (0, i.jsx)(o9, {
                        children: (0, i.jsx)(f.$, {
                            variant: "primary",
                            size: "sm",
                            text: eb.intl.string(ev.default["U/bLzU"]),
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
var un = n(817921);
function ul(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let i = (function (e, t, n, l, r) {
                let i,
                    s = (0, tm.Ay)(e),
                    o = (0, c.bG)([le.default], () => le.default.getCurrentUser()?.id),
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
                                if ((0, nA.BL)(n)) return n;
                                if (!(0, nA.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || oW(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === oU(t, g.created_at, o) ? g.id : null,
                    x = u?.projectEvent?.type === "remixed" ? u.projectEvent : null,
                    v = x?.id ?? p,
                    b = oH(e, x),
                    j = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([r_.A], () => j > 0 && null == r_.A.getSettings(e), [j, e]),
                    k = (0, o$.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (i = (0, nA.Ji)(t)) || !!(0, nA.B0)(t, t.lastIndexOf(i))) &&
                        (null == m || !oW(m)) &&
                        null == oq(t) &&
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
                        let l = oG.get(`${e}:${n}`);
                        return null != l ? oU(t, l, o) : null;
                    },
                    isDismissed: (t) => (0, oK.VS)(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, oV);
            (0, oK.$p)();
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
                                oG.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                u.map((e) => ({
                    ...e,
                    options: {
                        context: i,
                        dismiss: null != e.tip.dismissal ? () => (0, oK.qv)(e.tip, t, i.ideasIntroAnchorId) : void 0,
                    },
                }))
            );
        })(ut, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, i.jsx)(oz, {
              role: "assistant",
              continuation: !0,
              children: (0, i.jsx)("div", {
                  className: un.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, i.jsx)(oY, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var ur = n(52133),
    ui = n(732159),
    ua = n(888366),
    us = n(862026),
    uo = n(291192);
function uu(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = a.useId(),
        r = (0, us.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, i.jsxs)("div", {
        className: uo.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, i.jsxs)("div", {
                className: uo.Sp,
                children: [
                    (0, i.jsx)("span", { className: uo.q3 }),
                    (0, i.jsxs)("span", {
                        className: uo.g8,
                        children: [
                            (0, i.jsx)(ua.ChatPlusIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, i.jsx)(x.E, {
                                id: l,
                                tag: "span",
                                variant: "body-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, i.jsx)("span", { className: uo.q3 }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: uo.nM,
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
                                          (0, i.jsx)(lp.Q, {
                                              text: s.text,
                                              textVariant: "body-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, e_.mM)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, i.jsx)(ui.u, {
                                                                    ...t,
                                                                    title: eb.intl.string(ev.default["i+xjZM"]),
                                                                    subtitle: eb.intl.string(ev.default.fMBZmD),
                                                                    confirmText: eb.intl.string(ev.default.i5f3Uo),
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
var uc = n(345942),
    ud = n(727419),
    uf = n(576705);
function um(e) {
    let { guildId: t, update: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            " ",
            eb.intl.format(n ? ev.default.esEGL5 : ev.default["XrN+Bg"], {
                onOpen: () => ud.A.open(t, ll.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var uh = n(976860);
function ug(e) {
    return (0, c.bG)([ts.Ay, i6.A], () => {
        let t = ts.Ay.getProject(e);
        return null == t ? "" : (i6.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var up = n(951465),
    ux = n(369455);
function uv(e) {
    var t, n, l;
    let r,
        a,
        { projectId: s, notice: o } = e,
        u = ug(s),
        d =
            null ==
            (a = (0, c.bG)([ts.Ay, lz.A], () => {
                let e = ts.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lz.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: a.id, name: a.name },
        f = (0, c.cf)([ts.Ay, tx.A, lz.A, uf.A], () => {
            let e = ts.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eF.q7.AUTOMOD) === !0 ||
                    tx.A.getPublishStatus(s)?.surface === "automod",
                n = lz.A.getGuild(e.guild_id),
                l = null != n && uf.A.can(ll.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, i.jsxs)(x.E, {
        variant: "body-md/normal",
        color: "text-default",
        children: [
            eb.intl.format(
                ((t = o),
                (n = d?.name ?? null),
                (l = f.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? ev.default.ESu5eZ
                        : ev.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? ev.default.ZnQW4S
                          : ev.default.ev23Cw
                      : t.update
                        ? r
                            ? ev.default["LuS8a/"]
                            : ev.default.gQzuLC
                        : l
                          ? ev.default.KORRGl
                          : r
                            ? ev.default["/npn7F"]
                            : ev.default.MOrR29),
                {
                    name: u,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, uc.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, i.jsx)(um, { guildId: f.guildId, update: o.update })
                : !f.automod && o.update && null != o.published_revision
                  ? (0, i.jsx)(ub, { projectId: s, notice: o })
                  : null,
        ],
    });
}
function ub(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tm.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: i } = (0, c.cf)(
                    [tx.A, ts.Ay],
                    () => {
                        let r = tx.A.getPublishStatus(e),
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
                      ? eb.intl.format(ev.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, i.jsx)(
                                    e7.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: ux.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, uh.pX)(ll.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : eb.intl.format(ev.default["6/zJpD"], {
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
                                null != e && (0, up.A)(e);
                            },
                        }),
              ],
          });
}
var uj = n(73153),
    uy = n(505527),
    uk = n(367790),
    uw = n(354777),
    uA = n(491182),
    uS = n(74096),
    uC = n(549587),
    uN = n(448368),
    uI = n(21299),
    uE = n(538355),
    u_ = n(715628),
    uM = n(752636),
    uR = n(9842),
    uP = n(589022),
    uT = n(967198),
    uL = n(531685),
    u$ = n(503275);
let uD = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function uq(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function uO(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function uF(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = uO(e, t),
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
    if (uq(r) && uq(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && uq(uO(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function uz(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([ao.Ay], () => ao.Ay.useReducedMotion),
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
                      for (; i > 0 && uF(t, i);) i--;
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
                                    for (; l > t + 1 && n - l < 12 && uD.has(e.charAt(l - 1));) l--;
                                    return uD.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + a));
                                let o = s;
                                for (; o < t.length && o - s < 32 && uF(t, o);) o++;
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
var uG = n(624479),
    uU = n(890377),
    uB = n(92446),
    uK = n(957565),
    uH = n(180227);
function uW(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, i.jsx)("div", {
              className: u()(uH.QE, { [uH.Rn]: t }),
              children: (0, i.jsx)(aL.Ay, {
                  children: n.map((e) =>
                      (0, i.jsx)(
                          aL.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function uV(e) {
    return uK.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eb.intl.string(eb.t.JrGD7E), icon: uG.CopyIcon, onClick: () => (0, uK.C)(e) }]
        : [];
}
function uX(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: eb.intl.string(ev.default.CXtLD2),
                          tooltip: eb.intl.string(ev.default.DOb1HM),
                          icon: uU.DoubleChevronSmallRightIcon,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eb.intl.string(ev.default.urZwpN),
                          icon: e8.XSmallIcon,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, i.jsx)(uW, { groupStart: n, actions: [...r, ...uV(t)] });
}
function uY(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        a =
            null == l
                ? []
                : [{ id: "restore-version", label: eb.intl.string(ev.default.H8Jfhu), icon: tX.UndoIcon, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: uB.BugIcon, onClick: r }];
    return (0, i.jsx)(uW, { groupStart: n, actions: [...a, ...uV(t), ...s] });
}
let uZ = (0, an.createChannelRecord)({ id: "conjure-builder", type: ll.rbe.DM }),
    uQ = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function uJ(e, t) {
    return null == e ? e : (0, i.jsx)("div", { className: u()(uH.Yq, { [uH.x1]: t }), children: e });
}
function u0(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let u1 = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function u2(e, t, n) {
    let { content: l } = (0, uE.A)(e, u1),
        r = a.useMemo(() => ((0, rH.aW)(e.content) ? (0, uw.z2)(s$.U, e, u1).content : null), [e]) ?? l,
        s = a.useMemo(() => ({ message: e, channel: uZ, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, i.jsx)(uS.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, u_.A)(s, r);
}
function u3(e) {
    let [t, n] = a.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = a.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = a.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, uI.m)(e, uZ, t.usernameProfile, l),
        o = (0, uI.Jo)(t.avatarProfile, l),
        u = (0, c.bG)([uT.A], () => uT.A.getGuildId()),
        d = (0, c.bG)([le.default], () => le.default.getCurrentUser()),
        f = a.useCallback(
            (t) => {
                let n = le.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, i.jsx)(uP.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
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
let u4 = { formatInline: !0, allowGameMentions: !0 };
function u5(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        { content: s } = (0, uE.A)(n, u4),
        o = a.useMemo(() => {
            let e = "" === n.content ? null : (0, rH.aW)(n.content) ? (0, uw.z2)(s$.U, n, u4).content : s;
            return null == l
                ? e
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)("span", {
                              className: uH.GV,
                              children: [
                                  (0, i.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: uH.Rj,
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
            [n6.A],
            () => ({
                isReplyAuthorBlocked: n6.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: n6.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        f = (0, aP.X4)(n),
        m = (0, aP.X4)(t),
        h = u3(n);
    return (0, i.jsx)(uN.A, {
        repliedAuthor: f,
        baseAuthor: m,
        baseMessage: t,
        channel: uZ,
        referencedMessage: { state: uR.a.LOADED, message: n },
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
function u7(e) {
    let { message: t, author: n } = e,
        l = u3(t);
    return (0, i.jsx)(uC.Ay, {
        message: t,
        channel: uZ,
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
function u8(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, u$.vm)(l),
        c = a.useMemo(() => (0, aP.FT)(u, null), [u]),
        d = a.useMemo(() => _(t), [t]),
        f = d?.body ?? t,
        m = (0, s5.Qu)(f),
        h = a.useMemo(() => {
            if (null == u) return null;
            let e = (0, at.Ay)({ channelId: uZ.id, content: f, author: u });
            return (0, ae.rh)({ ...e, timestamp: u0(n, e.timestamp), state: ll.cmJ.SENT });
        }, [f, u, n]);
    return null == h
        ? null
        : (0, i.jsx)(
              u9,
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
function u9(e) {
    let { message: t, author: n, content: l, selected: r, accessories: a, groupStart: s = !0, onQueuedAction: o } = e,
        u = u2(t, l);
    return (0, i.jsx)(uA.A, {
        className: uH.yE,
        author: n,
        childrenHeader: s ? (0, i.jsx)(u7, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, i.jsxs)("div", {
                      className: uH.zq,
                      children: [
                          (0, i.jsxs)("span", {
                              className: uH.GV,
                              children: [
                                  (0, i.jsx)(g.ExperimentalDirectSelectIcon, {
                                      className: uH.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, i.jsx)("span", { className: uH.WO, children: u }),
                      ],
                  }),
        childrenAccessories: uJ(a, "" !== l),
        childrenButtons: (0, i.jsx)(uX, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function u6(e) {
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
        { text: f, revealing: m } = uz(t, { streaming: (0, c.bG)([uL.A], () => u && uL.A.isFocused(), [u]) }),
        h = a.useMemo(() => (0, aP.FT)(null, null), []),
        g = a.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, u$.vm)(p),
        v = a.useMemo(() => (null == r ? null : _(r.content)), [r]),
        b = a.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, at.Ay)({ channelId: uZ.id, content: v?.body ?? r.content, author: x });
            return (0, ae.rh)({ ...e, id: r.id, timestamp: u0(r.createdAt, e.timestamp), state: ll.cmJ.SENT });
        }, [r, v, x]),
        j = a.useMemo(() => (null == r ? void 0 : { channel_id: uZ.id, message_id: r.id }), [r]),
        [y] = a.useState(() => (0, at.Ay)({ channelId: uZ.id, content: "", author: uQ })),
        k = a.useMemo(
            () =>
                (0, ae.rh)({
                    ...y,
                    timestamp: u0(n, y.timestamp),
                    state: ll.cmJ.SENT,
                    ...(null != j ? { type: ll.lAJ.REPLY, message_reference: j } : {}),
                }),
            [y, n, j],
        ),
        w = a.useMemo(() => k.set("content", f), [k, f]),
        A = a.useMemo(
            () => (0, uM.A)({ message: k, channel: uZ, author: g, guildId: void 0, isGroupStart: o }),
            [k, g, o],
        ),
        S = u2(w, f, uH.OS);
    return (0, i.jsxs)("div", {
        className: uH.$4,
        "data-replying": null != b ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, i.jsx)(uA.A, {
                className: uH.yE,
                author: g,
                childrenRepliedMessage:
                    null == b
                        ? null
                        : (0, i.jsx)(u5, { baseMessage: k, referenced: b, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: A,
                childrenMessageContent: S,
                childrenAccessories: uJ(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            o ? (0, i.jsx)("img", { className: uH.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var ce = n(981879);
function ct(e) {
    let { messageId: t, reaction: n } = e,
        l = a.useMemo(
            () =>
                (0, ae.rh)(
                    { ...(0, at.Ay)({ channelId: uZ.id, content: "" }), id: `conjure:${t}`, state: ll.cmJ.SENT },
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
                (uj.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: uZ.id,
                    messageId: l.id,
                    users: [uQ],
                    emoji: e,
                    reactionType: uy.v6.NORMAL,
                }),
                    uj.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: uZ.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: uy.v6.NORMAL,
                    }));
            }
            return (
                t(),
                uj.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    uj.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, i.jsx)("div", {
            className: ce.H,
            children: (0, i.jsx)(uk.A, {
                message: l,
                channel: uZ,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var cn = n(442433);
n(775443);
var cl = n(990779),
    cr = n(155899),
    ci = n(165862),
    ca = n(477782);
function cs(e) {
    let { onSelect: t, onClose: n = cn.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, i.jsx)(ci.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": eb.intl.string(eb.t.ogxXGq),
        onSelect: t,
        children: (0, i.jsxs)(ca.rX, {
            children: [
                null != l
                    ? (0, i.jsx)(ca.Dr, {
                          id: "restore-version",
                          label: eb.intl.string(ev.default.H8Jfhu),
                          icon: tX.UndoIcon,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, i.jsx)(ca.Dr, { id: "view-trace", label: "View Trace", icon: uB.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function co(e) {
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
        y = null != j && null != x ? () => cu(j, x) : void 0,
        k =
            ((t =
                eS() && "assistant" === b.role && (0, nA.BL)(b)
                    ? (b.turn_id ?? b.steps.find((e) => null != e.turn_id)?.turn_id ?? b.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [cl.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : cl.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((ek = { projectId: e, traceId: t }), [...ey])) n(e);
                      })(l, k)
                : void 0,
        A = b.in_reply_to,
        S = b.restoreProposal;
    return (0, i.jsx)(oz, {
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
                          void (0, cn.jA)(t, (e) => (0, i.jsx)(cs, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, i.jsx)(u6, {
            groupStart: n.groupStart,
            buttons: (0, i.jsx)(uY, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: y,
                onViewTrace: w,
            }),
            content: n.content,
            createdAt: b.created_at,
            replyTo: r,
            onJumpToReplied: null != A && null != a ? () => a(A) : void 0,
            accessories: (0, i.jsx)(sz, {
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
                              cu(
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
function cu(e, t) {
    (0, cr.F)({ onConfirm: () => t(e) });
}
var cc = n(288539),
    cd = n(677683),
    cf = n(677690),
    cm = n(159711);
function ch(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: a } =
            ((t = (0, c.bG)([cd.A], () => cd.A.getOutcome(l))),
            (n = (0, c.bG)(
                [n9.A, le.default, n6.A],
                () => {
                    let e = t?.status === "pinned" ? n9.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, n8.m1)(e, le.default, n6.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = eb.intl.string(ev.default.UGAfl9);
    return null != r
        ? (0, i.jsx)(nT, {
              title: s,
              children: (0, i.jsx)(x.E, {
                  className: cm.r,
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? eb.intl.formatToPlainString(ev.default.gKe6Lw, { channelName: a ?? "" })
                          : eb.intl.string(ev.default["+kpQ3v"]),
              }),
          })
        : (0, i.jsx)(nT, { title: s, children: (0, i.jsx)(cg, { projectId: l }) });
}
function cg(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: o,
            failed: u,
            pin: d,
            skip: m,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([ts.Ay], () => ts.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [lO.A, uf.A],
                        () =>
                            null == t
                                ? []
                                : lO.A.getChannels(t)
                                      .VOCAL.map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === ll.rbe.GUILD_VOICE && uf.A.can(ll.xBc.MANAGE_CHANNELS, e),
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
                    let t = await (0, cf.pk)(f.id, m);
                    (o(!1), t ? (0, cf.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = a.useCallback(() => (0, cf.tg)(e, { status: "skipped" }), [e]);
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
        h = (0, lP.A)(n, "voice"),
        g = a.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, i.jsx)("div", {
        className: cm.r,
        children: (0, i.jsxs)(lv.B, {
            gap: 12,
            children: [
                (0, i.jsx)(x.E, {
                    variant: "body-md/normal",
                    color: "text-default",
                    children: eb.intl.string(ev.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, i.jsx)(n2.Z, {
                          selectionMode: "single",
                          label: eb.intl.string(ev.default.peOi1H),
                          placeholder: eb.intl.string(ev.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: u ? eb.intl.string(ev.default.d7EeAm) : void 0,
                          disabled: o,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: eb.intl.string(ev.default.JVUsIY),
                      }),
                (0, i.jsxs)("div", {
                    className: cm.o,
                    children: [
                        (0, i.jsx)(f.$, {
                            variant: "secondary",
                            size: "sm",
                            text: eb.intl.string(ev.default.Iw0l8o),
                            disabled: o,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, i.jsx)(f.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: eb.intl.string(ev.default.FYI3qr),
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
function cp(e, t, n) {
    return (0, i.jsx)(cc.A, { userId: e, content: `@${t}` }, n);
}
function cx(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            a.useEffect(() => {
                (0, u$.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([le.default], () => (null == l ? null : le.default.getUser(l)), [l]),
                i = (0, ar.tx)(r),
                s = ug(e),
                o =
                    (0, c.bG)([lz.A], () => (null == t.guild_id ? null : lz.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ??
                    ("app_removed" === t.type ? t.guild_name : null) ??
                    eb.intl.string(ev.default.R1tPlP),
                u = "app_removed" === t.type ? t.moved_to_guild_id : void 0,
                d = (0, c.bG)([lz.A], () => (null == u ? null : lz.A.getGuild(u)?.name), [u]),
                f = null == r || null == i ? null : { user: i, userHook: (e, t) => n(r.id, i, t) };
            switch (t.type) {
                case "app_removed":
                    if (null != u) {
                        let e = d ?? t.moved_to_guild_name ?? eb.intl.string(ev.default.R1tPlP);
                        return null == f
                            ? eb.intl.format(ev.default.NVM0sD, { app: s, server: o, newServer: e })
                            : eb.intl.format(ev.default["/hlliy"], { app: s, server: o, newServer: e, ...f });
                    }
                    return null == f
                        ? eb.intl.format(ev.default.Lwsrhg, { app: s, server: o })
                        : eb.intl.format(ev.default.qqePfT, { app: s, server: o, ...f });
                case "bot_removed":
                    return null == f
                        ? eb.intl.format(ev.default.mT7EQG, { app: s, server: o })
                        : eb.intl.format(ev.default["lA/crI"], { app: s, server: o, ...f });
                case "preview_bot_removed":
                    return null == f
                        ? eb.intl.format(ev.default["4LVIeo"], { app: s, server: o })
                        : eb.intl.format(ev.default.YJOV6D, { app: s, server: o, ...f });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == f
                        ? eb.intl.format(ev.default["4VQfid"], { channel: e, server: o })
                        : eb.intl.format(ev.default.RlMIJN, { channel: e, server: o, ...f });
                }
                case "remixed":
                    return eb.intl.format(ev.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return eb.intl.string(ev.default.UGAfl9);
                case "staff_notice":
                    return t.message;
            }
        })(t, n, cp),
        r = oH(t, n);
    return "voice_channel_pin" === n.type
        ? (0, i.jsx)(ch, { projectId: t })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x.E, { variant: "body-md/normal", color: "text-default", children: l }),
                  null != r ? (0, i.jsx)(rz, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let cv = a.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: a, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    nX.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rH.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, i.jsx)(oz, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(u8, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              null != t ? (0, i.jsx)(sL.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, i.jsx)(s1, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, i.jsx)(ct, { messageId: o.id, reaction: o.agentReaction })
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
                                    return (n) => (0, rW.tp)(e, t.id, n);
                            })(l, o, a),
                        }),
                    });
                }
                case "prose":
                    return (0, i.jsx)(oz, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(u6, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, i.jsx)(sL.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, i.jsx)(oz, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sF, {
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
                    return (0, i.jsx)(oz, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(u6, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, i.jsx)(uv, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, i.jsx)(oz, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, i.jsx)(u6, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, i.jsx)(cx, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, i.jsx)(oz, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, i.jsx)(uu, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, i.jsx)(oz, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sF, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, i.jsx)(oz, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, i.jsx)(sF, {
                            projectId: l,
                            steps: cb,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, i.jsx)(co, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, ur.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, ur.A)(e.row, t.row, ["message"]) &&
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
                (0, ur.A)(e.replyTo, t.replyTo) &&
                (0, ur.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cb = [],
    cj = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cy = new WeakMap();
function ck(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cw(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cA = ["wheel", "touchstart", "pointerdown", "keydown"];
function cS(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cC = a.memo(function (e) {
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
            onCardReply: p,
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
        P = (0, c.bG)([tx.A], () => tx.A.getPublishStatus(t)),
        T = (0, c.bG)([le.default], () => le.default.getCurrentUser()?.id),
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
                                        let t = (0, nw.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        i = null != r.clarification && r.clarification.id === t,
                        a = cy.get(r);
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
                                (0, nA.ST)(e) ||
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
                        let i = !(0, nA.BL)(e),
                            a = rQ({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = a.lastStreamedMessage?.key,
                            o = (0, nw.C6)(e.steps, { turnActive: i }),
                            { lastWork: u, open: c } = (0, nw.CT)(o, { turnActive: i }),
                            d = o.at(-1)?.index,
                            f = !1;
                        for (let n of o) {
                            if (null != n.prose && cj.test(n.prose.content)) f = !0;
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
                                        turnActive: nS(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = cj.test(e.content ?? "");
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
                    (cy.set(r, { superseded: e, liveCard: i, planned: s }), n.push(...s));
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
                        if (null != l) return sh(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, P)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = sp.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), sp.set(t, n)), n);
                      })),
                h,
            );
        }, [n, P, h]),
        $ = a.useMemo(() => L.map((e) => e.key), [L]),
        [D, q] = a.useState(null),
        O = (function (e, t, n) {
            if (null == t) return ck(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cw(e, t.endKey, t.end - 1) + 1,
                i = cw(e, t.startKey, t.start);
            return (l && n && r - i > 120 && (i = r - 60), ck(e, i, r));
        })($, D, y),
        F = a.useRef(O),
        z = a.useRef($),
        G = a.useRef(L),
        U = a.useRef(null),
        B = a.useRef(null),
        K = a.useRef(new Set()),
        H = a.useRef(null),
        W = a.useRef(!1),
        V = a.useCallback(() => {
            let e = b.current?.getScrollerNode(),
                t = W.current ? cS(S.current) : null;
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
        for (let n of cA) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cA) e.removeEventListener(n, t);
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
                    return ((n = Math.min(e.length, t.end + 30)), ck(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!i && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), ck(e, n, l));
                }
                let a = Math.max(t.start - 30, t.end - 120);
                return a < t.start ? ck(e, a, t.end) : null;
            })(z.current, F.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: j.current,
            });
            "older" === n ? (0, ej.P6)(t) : null != n && q(n);
        }, [b, j, t]);
    a.useImperativeHandle(
        w,
        () => ({
            handleScroll() {
                (X(),
                    q((e) => {
                        let t = F.current;
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
                return null == e ? null : { window: F.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!z.current.includes(n.key)) return !1;
                (k(), (U.current = n));
                let l = F.current;
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
    let Z = a.useRef(null),
        Q = a.useCallback(
            (e) => {
                var n;
                let l;
                ((Z.current = null), (W.current = !1));
                let r = S.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (k(), q(F.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), R(e));
                    return;
                }
                let i = G.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === i) {
                    (0, ej.P6)(t) && (Z.current = e);
                    return;
                }
                (k(),
                    (B.current = () => {
                        (S.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            R(e));
                    }),
                    q(((n = z.current), ck(n, (l = Math.max(0, i - 30)), l + 60))));
            },
            [R, k, t],
        );
    (a.useEffect(() => {
        let e = Z.current;
        null != e && Q(e);
    }, [L, Q]),
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
    let J = null == O.endKey;
    (a.useEffect(() => A?.(J), [J, A]),
        a.useLayoutEffect(() => {
            ((F.current = O), (z.current = $), (G.current = L));
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
                if (r && j.current && null != cS(l)) (k(), q(F.current), (W.current = !0), V());
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
        }, [t, n, L, $, O.start, O.end, b, j, k, V, X, Y]));
    let ee = a.useMemo(() => oq(n), [n]),
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
                : (0, nA.BL)(er)
                  ? er.awaitingUser
                  : null) ?? void 0,
        ea = (0, c.bG)([r_.A], () => r_.A.getSettings(t)?.secrets, [t]),
        es = (0, o$.WT)(t),
        eo = a.useMemo(() => (0, rj.Mv)(n, ea), [n, ea]);
    if (!(0, nA.i_)(n)) {
        if ("loading" === l)
            return (0, i.jsx)("ol", {
                className: u()(oO.x7, oO.jH),
                "aria-busy": !0,
                children: (0, i.jsx)("li", { className: oO.Ub, children: (0, i.jsx)(v.y, {}) }),
            });
        let e = "unavailable" === l ? ev.default.Td4Sf4 : ev.default.V1QiNz;
        return (0, i.jsx)("ol", {
            className: oO.x7,
            children: (0, i.jsx)(oz, { role: "assistant", children: (0, i.jsx)(u6, { content: eb.intl.string(e) }) }),
        });
    }
    return (0, i.jsx)(oF.Provider, {
        value: K,
        children: (0, i.jsxs)("ol", {
            ref: I,
            className: oO.x7,
            children: [
                L.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, i.jsx)(
                            cv,
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
                        cv,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? el.get(n.in_reply_to) : void 0,
                            onJumpTo: Q,
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
                            onCardReply: p,
                        },
                        e.key,
                    );
                }),
                J
                    ? es.map((e) =>
                          (0, i.jsx)(
                              oz,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, i.jsx)(u6, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, i.jsx)(oD.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != ei && J
                    ? (0, i.jsx)(oz, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, i.jsx)(u6, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, i.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: eb.intl.string(ev.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                J ? (0, i.jsx)(ul, { projectId: t, messages: n, draftHasText: !0 === o, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cN = n(731084),
    cI = n(336288),
    cE = n(187447);
function c_(e) {
    let { activity: t, id: n } = e,
        l = (0, nk.j)(),
        { text: r, revealing: s } = uz(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
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
            className: cE.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, i.jsx)(nb.Ch, {
                ref: o,
                onScroll: f,
                className: cE.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, i.jsx)("div", {
                    className: u()(sO.PT, cE.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: am.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cM = n(53659);
function cR(e) {
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
        p = a.useId(),
        [v, b] = a.useState(null),
        j = (0, cN.xu)({
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
        y = eb.intl.string(j),
        k = j === cN.kx["0"],
        [w, A] = a.useState(m ?? y),
        S = (0, nk.j)();
    (l || (0, cN.E4)(y, w) || (!S && !k)) && w !== y && A(y);
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
        ((E.current = k), !k && (0, cN.E8)(I.current) && A(C.current));
    }, [k]),
        a.useEffect(() => {
            if (!S) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((_.current = (0, cN.E8)(I.current) ? _.current + 1 : 0), A((0, cN.Ov)(_.current)))
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
    return (0, i.jsx)(ty.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, i.jsx)(c_, { id: p, activity: t }),
        children: () =>
            (0, i.jsxs)(e7.D, {
                innerRef: g,
                className: u()(cM.hF, M && cM.Xd),
                "aria-label": eb.intl.string(
                    r
                        ? ev.default.qqlUiW
                        : j === ev.default.j8tmjK
                          ? ev.default.j8tmjK
                          : k
                            ? cN.kx["0"]
                            : ev.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eb.intl.string(j),
                onClick: T,
                children: [
                    (0, i.jsx)("span", {
                        className: cM.bl,
                        children: (0, i.jsx)(cI.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", {
                        className: cM.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: S
                            ? (0, i.jsx)(sG.o, {
                                  ref: N,
                                  text: w,
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  duration: 1e3,
                                  delay: null,
                                  className: cM.yE,
                              })
                            : (0, i.jsx)(x.E, {
                                  tag: "span",
                                  variant: "body-xs/medium",
                                  color: "text-subtle",
                                  className: cM.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cP = { second: 1e3, minute: 6e4 };
function cT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = a.useState(() => Date.now());
    return (
        a.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cP[t];
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
var cL = n(719374);
function c$(e) {
    let { startedAt: t, variant: n = "body-xs/medium" } = e,
        l = cT(t);
    return (0, i.jsx)(x.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cL.$,
        "data-conjure-turn-timer": !0,
        children: (0, r8.C7)(l),
    });
}
function cD(e) {
    let { startedAt: t } = e,
        n = cT(t, "minute");
    return (0, i.jsx)(n_.A, { role: "timer", children: (0, r8.Us)(n) });
}
var cq = n(885574),
    cO = n(242779),
    cF = n(436804);
function cz(e) {
    return e.toLocaleString();
}
function cG(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, i.jsxs)("div", {
        className: cF.Q$,
        children: [
            (0, i.jsxs)("div", {
                className: cF.mf,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                    (0, i.jsxs)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-muted",
                        children: [cz((0, cO.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, i.jsxs)(x.E, {
                tag: "div",
                variant: "body-xs/normal",
                color: "text-muted",
                children: [
                    cz(n.input_tokens),
                    " in \xb7 ",
                    cz(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cz(n.cache_creation_input_tokens)} cache write \xb7 ${cz(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cU(e) {
    let { project: t } = e,
        n = (0, cO.wU)(t.compaction),
        l = (0, cO.wU)(t.classifier),
        r = (0, cO.wU)(t.image),
        a = (0, cO.wV)(t.orchestrator, t.codegen),
        s = (0, cO.wV)(a, n);
    return (0, i.jsxs)("div", {
        className: cF.si,
        role: "dialog",
        "aria-label": eb.intl.string(ev.default.p5EGzq),
        children: [
            (0, i.jsx)("div", {
                className: cF.Q$,
                children: (0, i.jsxs)("div", {
                    className: cF.mf,
                    children: [
                        (0, i.jsxs)(x.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: [cz((0, cO.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, i.jsxs)(x.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(cG, { label: eb.intl.string(ev.default["9Sj3SX"]), usage: a }),
            (0, i.jsx)(cG, { label: eb.intl.string(ev.default.ANCEo3), usage: n }),
            (0, i.jsx)(cG, { label: eb.intl.string(ev.default.ugL6D4), usage: l, cached: !1 }),
            (0, i.jsx)(cG, { label: eb.intl.string(ev.default.DHr5On), usage: r, cached: !1 }),
            (0, i.jsxs)("div", {
                className: cF.mf,
                children: [
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: eb.intl.string(ev.default["8OUg09"]),
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cO.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cO.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cB(e) {
    let { project: t } = e,
        n = a.useRef(null);
    return (0, i.jsx)(ty.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cU, { project: t }),
        children: (e) =>
            (0, i.jsx)(e7.D, {
                innerRef: n,
                className: cF.Y$,
                "aria-label": eb.intl.string(ev.default.Z96gxQ),
                ...e,
                children: (0, i.jsx)(cq.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cK = n(990250);
function cH(e) {
    let { queued: t } = e,
        n = eb.intl.string(ev.default.hzgPbZ);
    return (0, i.jsxs)("div", {
        className: cK.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, i.jsxs)("div", {
                className: cK.wx,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-md/semibold", color: "text-default", children: n }),
                    (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, i.jsx)(nb.Ch, {
                className: cK.XG,
                children: (0, i.jsx)("ul", {
                    className: cK.p_,
                    children: t.map((e) => (0, i.jsx)(cW, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cW(e) {
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
              className: cK.AS,
              children: (0, i.jsx)(x.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: eb.intl.string(ev.default["07XimM"]),
              }),
          })
        : (0, i.jsxs)("li", {
              className: cK.AS,
              children: [
                  (0, i.jsx)(x.E, {
                      ref: n,
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cK.Qs,
                      children: t,
                  }),
                  s
                      ? (0, i.jsx)(lp.Q, {
                            variant: "secondary",
                            textVariant: "body-xs/medium",
                            text: eb.intl.string(l ? ev.default.nEMoeN : ev.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cV(e) {
    let { queued: t, className: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)(ty.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, i.jsx)(cH, { queued: t }),
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
                    children: eb.intl.formatToPlainString(ev.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cX = n(997421);
function cY(e) {
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
            queued: p,
        } = e,
        v = (0, eC.Zv)(t),
        b = (0, c.bG)([tx.A], () => tx.A.getPublishStatus(t)?.publishing === !0, [t]),
        [j, y] = a.useState(null),
        k = a.useCallback(
            (e) =>
                y(
                    (0, cN.E8)(e) || e === eb.intl.string(ev.default.mKK6wB) || e === eb.intl.string(ev.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, cN.uc)(h),
        A = null != s,
        S = s ?? (n ? l : void 0),
        C = n || r || A || !0 === m;
    return (0, i.jsxs)("div", {
        className: cX.jf,
        children: [
            (0, i.jsxs)("div", {
                className: cX.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    C || o || v || b
                        ? (0, i.jsx)(cR, {
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
                    null != S ? (0, i.jsx)(c$, { startedAt: S }) : null,
                ],
            }),
            null != S ? (0, i.jsx)(cD, { startedAt: S }) : null,
            0 === p.length ? null : (0, i.jsx)(cV, { queued: p, className: u()(cX.BP, cX.A1) }),
            null == h || null == w
                ? null
                : (0, i.jsxs)("span", {
                      className: cX.BP,
                      children: [
                          (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, i.jsx)(cB, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, i.jsx)(x.E, {
                      tag: "span",
                      variant: "body-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eb.intl.formatToPlainString(ev.default["tCo+ZM"], { status: (0, cN.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cX.XF,
                      children: (0, cN.Db)(g),
                  }),
        ],
    });
}
var cZ = n(698638),
    cQ = n(608711);
let cJ = [eb.intl.string(ev.default["9w+Chc"]), eb.intl.string(ev.default.WAvmdq), eb.intl.string(ev.default.SKsrzl)];
function c0(e) {
    var t, n;
    let l,
        r,
        s,
        o,
        u,
        {
            projectId: m,
            restoreState: h,
            onRestoreVersion: g,
            onImportProject: p,
            escapeScopeRef: v,
            visible: b = !0,
        } = e,
        j = (0, c.bG)([rM.A], () => rM.A.getMessages(m), [m]),
        y = (0, c.bG)([ej.Ay], () => ej.Ay.getConnState(m), [m]),
        k = (0, c.bG)([rM.A], () => rM.A.getProjectUsage(m), [m]),
        w = (0, c.bG)([rM.A], () => rM.A.getThinkingActivity(m), [m]),
        S = (0, c.bG)([rM.A], () => rM.A.isCompacting(m), [m]),
        C = (0, c.bG)([rM.A], () => rM.A.isSaving(m), [m]),
        I = (0, c.bG)([ru.A], () => ru.A.getModelSettings(m), [m]),
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
            showsLatest: O,
            showsLatestRef: F,
            handleShowsLatestChange: z,
            updatePin: U,
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
                    for (let e of cA) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of cA) t.removeEventListener(e, u);
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
            (U(), M.current?.handleScroll());
            let e = R.current;
            null != e && (e.position = P.current ? null : (M.current?.snapshot() ?? null));
        }, [U, P]),
        H = a.useContext(eL.A) === m;
    a.useLayoutEffect(() => {
        if (!H) return;
        let e = { position: eD.A.getProjectView(m).chatScroll };
        return ((R.current = e), () => (0, e$.g7)(m, { chatScroll: e.position }));
    }, [H, m]);
    let W = a.useRef(!H);
    (a.useLayoutEffect(() => {
        if (W.current || !(0, nA.i_)(j)) return;
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
            (0, ej.ensureConnection)(m);
        }, [m]),
        (0, rV.E1)(m, (0, nk.j)()));
    let V = G(m),
        X = (function (e) {
            let t = (0, tm.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lz.A], () => (null == n ? null : (lz.A.getGuild(n)?.name ?? null))),
                [r, i] = a.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: eb.intl.format("channel" === s ? ev.default["1cm4fj"] : ev.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => i(e),
                  };
        })(m),
        Y = (function (e) {
            let t = (0, c.bG)([rU.A], () => rU.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rB.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rG.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? eb.intl.format(ev.default["bw/n4C"], { helpdeskURL: e })
                            : eb.intl.format(ev.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: eb.intl.formatToPlainString(ev.default.GHgG2B, { percent: l, limit: n }) };
        })(m),
        Z =
            ((l = (0, c.bG)([rv.A], () => rv.A.getFailure(m))),
            (r = a.useCallback(() => (0, rb.CM)(m), [m])),
            null == l
                ? null
                : {
                      message: eb.intl.format(ev.default.Up6Ssw, { reason: l }),
                      retry: { text: eb.intl.string(ev.default["ywA+ET"]), onClick: r },
                  }),
        Q = (0, rd.E8)(m),
        J = (0, c.bG)([rv.A], () => rv.A.getSetupStartedAt(m), [m]),
        ee = a.useCallback(
            (e, t) => {
                (0, ej.dv)(m, e, t);
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
                                  r = t.filter((e) => A(e.comment)),
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
                      q(m));
            },
            [V, ee, m],
        ),
        en = a.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nV)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, ej.re)(e, l.nonce),
                        (function (e) {
                            let t = nV.get(e);
                            (nV.delete(e), nY(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(m) ||
                rM.A.isThinking(m)) &&
                (0, ej.fu)(m);
        }, [m]),
        el = a.useCallback((e) => (0, nQ.RQ)(m, e.implementation_prompt), [m]),
        er = a.useCallback((e) => (0, nQ.RQ)(m, e), [m]),
        [ei, ea] = (function (e) {
            let [t, n] = a.useState(() => rY(e)),
                [l, r] = a.useState(e),
                i = l !== e,
                s = i ? rY(e) : t;
            return (i && (r(e), n(s)), [s, n]);
        })(m),
        es = a.useCallback(() => ee(eb.intl.string(ev.default["t5CN3+"])), [ee]),
        eo = a.useCallback((e, t, n) => (0, nQ.RQ)(m, e, { clarificationAnswers: t, attachments: n }), [m]),
        eu = a.useCallback((e) => (0, rc.X)(m, e), [m]),
        ec = a.useCallback((e) => (0, t$.vX)(m, e), [m]),
        ed = a.useCallback((e) => (0, tO.gn)(m, "chat", Array.from(e), ec), [m, ec]),
        ef = a.useCallback(() => (0, nQ.RQ)(m, eb.intl.string(ev.default.Zc7gML)), [m]),
        em = h?.status === "restoring",
        eh = "open" === y && !em,
        ep = j[j.length - 1],
        ex = null != ep && "assistant" === ep.role && null != ep.proposal,
        [ey, ek] = a.useState(null),
        ew = a.useMemo(
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
        eS = a.useCallback(() => {
            null != eA && ek(eA.id);
        }, [eA]),
        [eC, eN] = a.useState(null),
        eI = (function (e) {
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
                                summary: eb.intl.string(ev.default["o2++BO"]),
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
        })(m),
        eE = ep?.appBuildRequest != null && (0, nA.BL)(ep) && ep.appBuildRequest.id !== eC ? ep.appBuildRequest : null,
        e_ = eI.request ?? (null == eA ? eE : null),
        eM = null == eI.request ? eA : null,
        eR = null != e_ && e_ === eI.request,
        { close: eP, sent: eT } = eI,
        eq = eI.request?.id,
        eO = a.useCallback(() => {
            eR ? eP() : null != e_ && eN(e_.id);
        }, [e_, eR, eP]),
        eF = a.useCallback(
            (e) => {
                (null != eq && eT(eq),
                    (0, eg.P0)({
                        text: eb.intl.formatToPlainString(ev.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [eq, eT],
        ),
        ez = (0, c.bG)([r_.A], () => r_.A.getSettings(m), [m]),
        [eG, eU] = a.useState(null),
        eB = rL(),
        eK =
            null != ep &&
            ((t = ep.id),
            (s = (0, rj.Mv)(j, ez?.secrets)),
            (o = r$(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, nA.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !rD(e.settingsRequest, ez, eB.has(e.id)))),
            )),
        eH =
            null != ep &&
            "assistant" === ep.role &&
            null != ep.settingsRequest &&
            null == ep.secretRequest &&
            (0, nA.BL)(ep) &&
            ep.id !== eG &&
            ((n = ep.settingsRequest),
            (u = n.keys ?? []),
            null != ez &&
                0 !== u.length &&
                u.every((e) => {
                    let t = ez.schema.find((t) => t.key === e);
                    return null != t && rA.has(t.type);
                })) &&
            rS(ep.settingsRequest, ez) &&
            !eK
                ? ep
                : null,
        eW = null == eI.request ? eH : null,
        eV = eW?.settingsRequest ?? null,
        eX = a.useCallback(() => {
            null != eH && eU(eH.id);
        }, [eH]),
        eY = null != eV,
        [eZ, eQ] = a.useState(null),
        eJ = ez?.secrets,
        e0 = a.useMemo(() => (0, rj.Qr)(j, (0, rj.Mv)(j, eJ)), [j, eJ]),
        e1 = null != e0 && e0.render_id !== eZ ? e0 : null,
        e2 = null == eM && null == e_ ? e1 : null,
        e3 = a.useCallback(() => {
            null != e1 && eQ(e1.render_id);
        }, [e1]),
        [e4, e5] = a.useState(null),
        e7 = eM?.id ?? e_?.id ?? e2?.render_id ?? eW?.id,
        e9 = null != eA || null != e_ || null != e1 || null != eH;
    a.useLayoutEffect(() => {
        let e = _.current?.getScrollerNode(),
            t = e4?.firstElementChild;
        if (null == e4 || null == e || !(0, tT.vq)(t, HTMLElement) || null == e7) return;
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
    let e6 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, c.bG)([rM.A], () => rM.A.hasLoadedHistory(m), [m]),
            historyUnavailable: (0, c.bG)([rM.A], () => rM.A.isHistoryUnavailable(m), [m]),
            connState: y,
        }),
        te = !(0, nA.i_)(j),
        tt = "loading" === e6 && te,
        tn = a.useMemo(() => {
            let e = 0;
            for (let t = 0; t < m.length; t++) e = (31 * e + m.charCodeAt(t)) % 0x7fffffff;
            return cJ[e % cJ.length];
        }, [m]),
        tl = ex ? eb.intl.string(ev.default.Zc7gML) : "greeting" === e6 && te ? tn : null,
        tr = a.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, nA.BL)(t)) return t;
            }
        }, [j]),
        ti = null != tr,
        ta = a.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        ts = null != tr ? (0, rK.S)(tr) : void 0,
        to = ex && eh ? ef : void 0,
        tu = a.useCallback(() => (0, nQ.RQ)(m, eb.intl.string(ev.default.EMgIuY)), [m]),
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
        }, [ti, tr?.steps, O]));
    let tg = O ? tc : "bottom",
        tp = a.useMemo(() => (null != tr ? (0, nC.b9)(tr.steps) : ""), [tr]),
        tx = a.useMemo(() => (null != tr ? ((0, nw.lt)(tr.steps) ?? tr.todos) : void 0), [tr]),
        tv = tr?.provisionalTodo,
        tb = null != tr && nS(tr),
        tj = a.useMemo(() => {
            var e;
            return null != tr ? ((e = tr.steps), il((0, nw.Jf)(e, !0).tasks)) : void 0;
        }, [tr]);
    return (0, i.jsxs)("section", {
        ref: E,
        "data-conjure-chat": !0,
        className: cQ.TE,
        children: [
            eh
                ? (0, i.jsx)(ny.A, {
                      title: eb.intl.string(ev.default.gy7byi),
                      description: eb.intl.string(ev.default["dkv/WO"]),
                      icons: cZ.ir,
                      onDrop: ed,
                  })
                : null,
            (0, i.jsx)(nW, {
                onJumpToActivity: B,
                line: tp,
                placement: ti && "top" === tg ? "top" : null,
                todos: tx,
                todosLive: tb,
                provisionalTodo: tv,
                agents: tj,
            }),
            (0, i.jsxs)("div", {
                className: cQ.JX,
                children: [
                    (0, i.jsx)(nb.Ch, {
                        ref: _,
                        onScroll: K,
                        scrollbarGutter: tt ? "both-edges" : "stable",
                        className: [cQ.N$, L ? null : cQ.hB, eY ? cQ.J9 : null].filter(Boolean).join(" "),
                        children: (0, i.jsx)(rH.Fu.Provider, {
                            value: m,
                            children: (0, i.jsx)(cC, {
                                projectId: m,
                                messages: j,
                                emptyState: e6,
                                floatingSettingsMessageId: eH?.id,
                                floatingSecretRenderId: e2?.render_id,
                                liveClarificationId: eM?.id,
                                onPickIdea: eh ? el : void 0,
                                onAskForIdeas: eh ? es : void 0,
                                draftHasText: ei,
                                onApprovePlan: eh ? tu : void 0,
                                onRestoreVersion: em || ti ? void 0 : g,
                                onCardReply: eh ? er : void 0,
                                scrollerRef: _,
                                stickToBottomRef: P,
                                pinned: T,
                                onUnpin: $,
                                handleRef: M,
                                onShowsLatestChange: z,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: cQ.NJ,
                        children: (0, i.jsx)(cY, {
                            projectId: m,
                            thinking: ti,
                            turnStartedAt: ts,
                            restoring: em,
                            remixStartedAt: J,
                            recalling: tt,
                            thinkingActivity: w,
                            compacting: S,
                            saving: C,
                            projectUsage: k,
                            connState: y,
                            queued: ta,
                        }),
                    }),
                    null == eM
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e5,
                              className: eY ? `${cQ.B5} ${cQ.J9}` : cQ.B5,
                              children: (0, i.jsx)(
                                  ro,
                                  { projectId: m, clarification: eM, onSubmit: eh ? eo : void 0, onDismiss: eS },
                                  eM.id,
                              ),
                          }),
                    null == e_
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e5,
                              className: cQ.B5,
                              children: (0, i.jsx)(
                                  n7,
                                  { projectId: m, request: e_, canSend: eh, onDismiss: eO, onSent: eR ? eF : void 0 },
                                  e_.id,
                              ),
                          }),
                    e2?.secretRequest == null
                        ? null
                        : (0, i.jsx)("div", {
                              ref: e5,
                              className: cQ.B5,
                              children: (0, i.jsx)(
                                  rE,
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
                              className: cQ.B5,
                              children: (0, i.jsx)(
                                  rz,
                                  { askId: eW?.id, projectId: m, request: eV, onDismiss: eX },
                                  eW?.id,
                              ),
                          }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: cQ.Jx,
                children: [
                    (0, i.jsx)(nW, {
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
                              className: cQ.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: eb.intl.formatToPlainString(ev.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: eb.intl.string(ev.default["5zG+CR"]),
                                  }),
                                  (0, i.jsx)(f.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eb.intl.string(ev.default["/zOv9+"]),
                                      onClick: () => q(m),
                                  }),
                              ],
                          }),
                    null == Q ? null : (0, i.jsx)(rx, { pending: Q }, Q.publishTurnId),
                    null == Z
                        ? null
                        : (0, i.jsx)("div", {
                              className: cQ.qB,
                              children: (0, i.jsx)(nj.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: Z.message,
                                  action: Z.retry,
                              }),
                          }),
                    null == X
                        ? null
                        : (0, i.jsxs)("div", {
                              className: cQ.Db,
                              children: [
                                  (0, i.jsx)(nj.w, { type: "warning", role: "status", message: X.message }),
                                  (0, i.jsx)("div", {
                                      className: cQ.jU,
                                      children: (0, i.jsx)(d.m, {
                                          text: eb.intl.string(eb.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, i.jsx)(tH.K, {
                                              "aria-label": eb.intl.string(eb.t.WAI6xu),
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
                              className: cQ.qB,
                              children: (0, i.jsx)(nj.w, {
                                  type: Y.blocked ? "critical" : "warning",
                                  role: Y.blocked ? "alert" : "status",
                                  message: Y.message,
                              }),
                          }),
                    (0, i.jsx)(oM, {
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
                        onSendToOtherProjects: e9 ? void 0 : eI.open,
                        onApprove: to,
                        suggestion: tl,
                        questionOpen: e9,
                        secretPending: null != e2,
                        modelSettings: I,
                        onModelSettingsChange: eu,
                        onDraftHasTextChange: ea,
                        aiPaused: Y?.blocked === !0,
                        visible: b,
                    }),
                ],
            }),
        ],
    });
}
var c1 = n(761508),
    c2 = n(209695),
    c3 = n(207438),
    c4 = n(683438),
    c5 = n(564218);
function c7(e, t) {
    return String(e).padStart(t, "0");
}
function c8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${c7(l.getHours(), 2)}:${c7(l.getMinutes(), 2)}:${c7(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${c7(l.getMilliseconds(), 3)}` : r;
}
var c9 = n(667931);
let c6 = {
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
    de = { running: "Running", ok: "Done", error: "Failed" };
function dt(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function dn(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function dl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function dr(e) {
    return dn(e.count > 1 ? e.totalMs : e.end - e.start);
}
let di = ["Arguments", "Result", "Usage", "Details"];
function da(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function ds(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function du(e) {
    let t = (0, c9.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, c9.lp)(e) ? "interrupted" : "still running";
}
function dc(e) {
    return [c8(new Date(e.started_at).toISOString()) ?? "", dl(e.spans.length), (0, c9.Sj)((0, c9.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function dd(e) {
    let t = (0, c9.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: i } = (0, c9.N5)(r);
        (n.set(i, (n.get(i) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += df(r, "in")),
                (l.output += df(r, "out")),
                (l.cacheRead += df(r, "cache_read")),
                (l.cacheWrite += df(r, "cache_write")),
                (l.costUsd += df(r, "cost_usd"))));
    }
    let r = c9.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function df(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var dm = n(738188),
    dh = n(430993),
    dg = n(364840),
    dp = n(224640),
    dx = n(20742);
let dv = { collapsed: new Set(), revealed: new Set() };
var db = n(872892);
let dj = {
    op: db.Q,
    model: db.i3,
    tool: db.dH,
    setup: db.kc,
    worktree: db.Qx,
    sandbox: db.QH,
    build: db.F1,
    platform: db.Op,
    other: db.fv,
};
function dy(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      dl(t.calls, "model call"),
                      `${dt(t.input)} in`,
                      `${dt(t.output)} out`,
                      `${dt(t.cacheRead)} cache read`,
                      `${dt(t.cacheWrite)} cache write`,
                      ds(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, i.jsxs)("div", {
        className: db.M1,
        children: [
            (0, i.jsx)("div", {
                className: db.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, i.jsx)(
                              "div",
                              {
                                  className: `${db.DJ} ${dj[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, i.jsx)("div", {
                className: db.o1,
                children: c9.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${dn(n)}`;
                    return (0, i.jsxs)(
                        "span",
                        {
                            className: db.fI,
                            children: [
                                (0, i.jsx)("span", { className: `${db.nf} ${dj[e]}` }),
                                (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: c6[e] }),
                                null == l
                                    ? null
                                    : (0, i.jsx)(x.E, {
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
                : (0, i.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dk(e) {
    return `conjure-perf-trace-${e}`;
}
function dw(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: a } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, i.jsxs)("div", {
        className: db.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, i.jsx)("div", { className: r }),
            (0, i.jsx)(x.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${db.p0} ${s + o > 85 ? db.EU : db.jh}`,
                children: a,
            }),
        ],
    });
}
function dA(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? nR.ChevronSmallRightIcon : nM.ChevronSmallDownIcon,
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
    return (0, i.jsxs)(e7.D, {
        tag: "div",
        role: "treeitem",
        id: dk(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${db.$y} ${r ? db.wQ : ""}`,
        onClick: f,
        children: [
            (0, i.jsxs)("div", {
                className: db.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, i.jsx)(e7.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: db.ai,
                              onClick: m,
                              children: (0, i.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, i.jsx)("span", { className: db.YJ }),
                    (0, i.jsx)(x.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: db.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, i.jsx)("span", { className: `${db.nf} ${dj[t.category]}` }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: db.eu,
                        children: t.service,
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: db.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, i.jsx)(x.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: db.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, i.jsx)(dm.WarningIcon, { size: "xs", color: "currentColor", className: db.ik })
                        : null,
                ],
            }),
            (0, i.jsx)(dw, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${db.M0} ${db.Nh}`
                    : t.running
                      ? `${db.M0} ${db.rF}`
                      : `${db.M0} ${dj[t.category]}`,
                duration: dr(t),
            }),
        ],
    });
}
function dS(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, i.jsxs)(e7.D, {
        tag: "div",
        role: "treeitem",
        id: dk(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${db.$y} ${l ? db.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, i.jsxs)("div", {
                className: db.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, i.jsx)("span", {
                        className: db.ai,
                        children: (0, i.jsx)(nR.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, i.jsx)("span", { className: db.U9 }),
                    (0, i.jsx)("span", { className: `${db.nf} ${db.dL}` }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: db.MQ,
                        children: dl(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, i.jsx)(dw, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${db.M0} ${db.ab} ${db.dL}`,
                duration: dn(t.totalMs),
            }),
        ],
    });
}
function dC(e) {
    let { node: t } = e;
    return null == t
        ? (0, i.jsx)(x.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, i.jsxs)("div", {
              className: db._0,
              children: [
                  (0, i.jsxs)("div", {
                      className: db.TQ,
                      children: [
                          (0, i.jsx)("span", { className: `${db.nf} ${dj[t.category]}` }),
                          (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-strong", children: t.service }),
                          (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [da("Start", `+${dn(e.start)}`), da("Duration", dr(e))];
                      e.count > 1
                          ? t.push(
                                da("Calls", String(e.count)),
                                da("Longest call", dn(e.maxMs)),
                                da("Spread over", dn(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(da("Self time", dn(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(da("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(da("Notes", l.join(", "))),
                          null != e.span.error && t.push(da("Error", e.span.error)));
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
                              s = "cost_usd" === t ? ds(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), da(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...di.flatMap((e) => {
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
                                      : (0, i.jsx)(x.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: db.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, i.jsxs)(
                                          a.Fragment,
                                          {
                                              children: [
                                                  (0, i.jsx)(x.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, i.jsx)(x.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: db.vl,
                                                            children: n,
                                                        })
                                                      : (0, i.jsx)(x.E, {
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
function dN(e) {
    let { trace: t } = e,
        n = a.useMemo(() => dd(t), [t]);
    return (0, i.jsx)(dy, { stats: n });
}
function dI(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = a.useMemo(() => (null == e ? null : (0, c9.TK)(e)), [e]),
                [n, l] = a.useState(() => (null == t ? dv : (0, c9.hB)(t))),
                [r, i] = a.useState(null),
                s = a.useRef(null == t ? new Set() : (0, c9.x7)(t));
            a.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, c9.x7)(t)), l((n) => (0, c9._0)(n, t, e)));
            }, [t]);
            let o = a.useMemo(() => (null == t ? [] : (0, c9.wu)(t, n)), [t, n]),
                u = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c9.IE)(t, e);
                        null != n && l((e) => (0, c9.TN)(e, n));
                    },
                    [t],
                ),
                c = a.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = a.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c9.IE)(t, e);
                        null != n && l((e) => (0, c9.H$)(e, n));
                    },
                    [t],
                ),
                f = a.useCallback(() => {
                    null != t && l((0, c9.vH)(t));
                }, [t]),
                m = a.useCallback(() => {
                    null != t && l((0, c9.rQ)(t));
                }, [t]),
                h = a.useCallback(() => {
                    null != t && l((0, c9.hB)(t));
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
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: m } = n,
        h = (0, c9.dj)(t),
        g = a.useMemo(() => (0, c9.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        v = a.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
                    i = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == i) return;
                else if ("smaller" === i.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(i.parentKey);
                else if ("node" === i.kind && "ArrowRight" === e.key && e.shiftKey) m(i.key);
                else if ("node" === i.kind && "ArrowRight" === e.key && r.has(i.key)) c(i.key);
                else {
                    if ("node" !== i.kind || "ArrowLeft" !== e.key || !(i.node.children.length > 0) || r.has(i.key))
                        return;
                    c(i.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(dk(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(dh.c, {
                children: [
                    (0, i.jsxs)("div", {
                        className: db.z,
                        children: [
                            (0, i.jsx)(x.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: du(t),
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dc(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, i.jsx)(x.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, i.jsx)(x.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${dl(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, i.jsx)(dN, { trace: t }),
                    (0, i.jsxs)("div", {
                        className: db.KE,
                        children: [
                            (0, i.jsx)(f.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, i.jsx)(f.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, i.jsx)(f.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, i.jsx)(x.E, {
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
                        "aria-activedescendant": null == o ? void 0 : dk(o),
                        className: db.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: v,
                        children: [
                            (0, i.jsxs)("div", {
                                className: db.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: db.So,
                                        children: (0, i.jsx)(x.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: db.c1,
                                        children: g.map((e) =>
                                            (0, i.jsx)(
                                                x.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${db.io} ${(e / h) * 100 > 85 ? db.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : dn(e),
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
                                          dA,
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
                                    : (0, i.jsx)(dS, { row: e, extent: h, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(dg.j, { children: (0, i.jsx)(dC, { node: s }) }),
        ],
    });
}
function dE(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        a = (0, c.bG)([cl.A], () => cl.A.getTimingTrace(l, r), [l, r]),
        s = a?.name ?? "Perf Trace";
    return (0, i.jsxs)(dp.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, i.jsx)(dx.rQ, { title: s }),
            null == a
                ? (0, i.jsx)(dh.c, {
                      children: (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, i.jsx)(dI, { trace: a }),
        ],
    });
}
let d_ = { running: db.Vf, ok: db.mo, error: db.Sr };
function dM(e) {
    let { status: t } = e;
    return (0, i.jsx)("span", { className: `${db.Om} ${d_[t]}`, role: "img", "aria-label": de[t] });
}
function dR(e, t) {
    (0, e_.qf)((n) => (0, i.jsx)(dE, { ...n, projectId: e, traceId: t }));
}
function dP(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = a.useCallback(() => dR(t, n.id), [t, n.id]);
    return (0, i.jsxs)(e7.D, {
        className: db.nM,
        onClick: r,
        children: [
            (0, i.jsxs)("div", {
                className: db.sU,
                children: [
                    (0, i.jsx)(dM, { status: (0, c9.lQ)(n) }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/semibold",
                        color: "text-default",
                        className: db._k,
                        children: n.name,
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: du(n),
                    }),
                ],
            }),
            (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", tabularNumbers: !0, children: dc(n) }),
            null == l
                ? null
                : (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dT(e) {
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
            (0, c5.H)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, i.jsx)(ty.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ty.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(ci.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(ca.rX, {
                    children: (0, i.jsx)(ca.Dr, {
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
            return (0, i.jsx)(tH.K, {
                ...e,
                buttonRef: l,
                icon: aM.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dL(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([cl.A], () => cl.A.getTimingTraces(t), [t]),
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
                    let t = e.map(dd);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: c9.BF.map((e) => ({
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
              className: db.Ie,
              children: [
                  (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, i.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: db.nd,
              children: [
                  (0, i.jsxs)("div", {
                      className: db.Ko,
                      children: [
                          (0, i.jsx)("div", {
                              className: db.fH,
                              children: (0, i.jsx)(c4.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, i.jsx)(dT, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, i.jsxs)(nb.Ch, {
                      className: db.XG,
                      children: [
                          (0, i.jsx)(dy, { stats: u }),
                          0 === o.length
                              ? (0, i.jsx)(x.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, i.jsx)("ul", {
                                    className: db.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(dP, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function d$(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dD(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dq(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dO(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dF(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dz(e) {
    return eb.intl.string("preview" === e ? ev.default["2yLYlG"] : ev.default.eiAi57);
}
let dG = ["all", "preview", "stable", "web"];
function dU(e) {
    switch (e.reason) {
        case "local":
            return eb.intl.string(ev.default.mUeKML);
        case "unconfigured":
            return eb.intl.string(ev.default.bGefb5);
        case "unauthorized":
            return eb.intl.string(ev.default.KLx6Bb);
        default:
            return null != e.detail
                ? eb.intl.formatToPlainString(ev.default.t09Q6q, { detail: e.detail })
                : eb.intl.string(ev.default["t+tG59"]);
    }
}
function dB(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eb.intl.formatToPlainString(ev.default["XO/bN4"], {
              p50: d$(e.memory_p50_bytes ?? 0),
              p999: d$(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dK = {
    db: () => ev.default["7l+DFG"],
    db_preview: () => ev.default.FAuffi,
    runtime: () => ev.default["Gkl+ab"],
    runtime_preview: () => ev.default.ynpJzv,
    bot: () => ev.default["5/i0cj"],
    bot_preview: () => ev.default.m2jsnw,
};
var dH = n(911608),
    dW = n(177427);
function dV(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: dW.KE,
        children: [
            (0, i.jsx)("div", {
                className: dW.IQ,
                children:
                    "loading" === n
                        ? (0, i.jsx)(v.y, { type: v.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eb.intl.string(ev.default.ZVByPX),
                            })
                          : null != t
                            ? (0, i.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-muted",
                                  children: eb.intl.formatToPlainString(ev.default.INVO50, { time: dO(t) }),
                              })
                            : null,
            }),
            (0, i.jsx)(f.$, { variant: "secondary", size: "sm", text: eb.intl.string(ev.default.oKEgiu), onClick: l }),
        ],
    });
}
function dX(e) {
    let { title: t, children: n } = e;
    return (0, i.jsxs)("section", {
        className: dW.uW,
        "aria-label": t,
        children: [
            (0, i.jsx)(x.E, { variant: "body-xs/semibold", color: "text-muted", className: dW.Gf, children: t }),
            n,
        ],
    });
}
function dY(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: a, state: s } = e;
    return (0, i.jsxs)("div", {
        className: dW.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dW.x7,
                children: [
                    (0, i.jsxs)("span", {
                        className: dW.kS,
                        children: [a, (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, i.jsxs)("span", {
                        className: dW.kS,
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
function dZ(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        a = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = a >= 0.9;
    return (0, i.jsxs)("div", {
        className: dW.N8,
        children: [
            (0, i.jsxs)("div", {
                className: dW.x7,
                children: [
                    (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, i.jsx)(dH.z, {
                value: 100 * a,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dW.dh : void 0,
            }),
        ],
    });
}
function dQ(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, i.jsx)(dY, {
            label: eb.intl.string(ev.default.SXP7pD),
            value: eb.intl.string(ev.default.E5hKVi),
            hint: dU(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, i.jsx)(dY, {
            label: eb.intl.string(ev.default.SXP7pD),
            value: "\u2014",
            hint: eb.intl.string(ev.default.AGvoMJ),
        });
    let l = dB(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dY, { label: eb.intl.string(ev.default["H/X+FI"]), value: dD(n.cpu_ms) }),
            null != l && (0, i.jsx)(dY, { label: eb.intl.string(ev.default.lmFmMO), value: l }),
        ],
    });
}
function dJ(e) {
    let { analytics: t } = e,
        n = eb.intl.string(ev.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, i.jsx)(dX, {
            title: n,
            children: (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: dU(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dK[t] : null) ? eb.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, i.jsx)(dX, {
        title: n,
        children:
            0 === l.length
                ? (0, i.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: eb.intl.string(ev.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, i.jsx)(
                          dY,
                          {
                              label: n,
                              value: eb.intl.formatToPlainString(ev.default["w/2voO"], { cpu: dD(t.cpu_ms) }),
                              hint: dB(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var d0 = n(678708),
    d1 = n(414499),
    d2 = n(714800),
    d3 = n(81466),
    d4 = n(424383),
    d5 = n(664121),
    d7 = n(816943),
    d8 = n(268791),
    d9 = n(514042),
    d6 = n(872351),
    fe = n(708988),
    ft = n(150934),
    fn = n(417270);
let fl = "Restart Agent",
    fr = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fi(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fa(e, t) {
    return { label: e, value: null != t && "" !== t ? dO(t) : "Unknown", icon: "calendar" };
}
function fs(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function fo(e, t, n, l) {
    let [r, i] = fr[n.status];
    return { label: e, value: `${fs(n.bytes)} of ${fs(n.max)} \xb7 ${r}`, hint: l, icon: t, state: i };
}
function fu(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dO(e.at);
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
let fc = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fd(e) {
    let t = `container ${fi(e.local)} \xb7 remote ${fi(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fc[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dq(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dq(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dq(n)} Ahead, ${dq(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let ff = ["main", "wip"];
var fm = n(400154);
let fh = {
        checkout: d0.FolderIcon,
        edit: lg.PencilIcon,
        remote: d1.CloudIcon,
        commits: d2.ListNumberedIcon,
        calendar: d3.CalendarIcon,
        save: d4.SaveIcon,
        objects: d5.ServerIcon,
        download: d7.CloudDownloadIcon,
        size: d8.SpeedometerIcon,
        file: d9.FileIcon,
    },
    fg = {
        ok: [rw.CircleCheckIcon, tJ.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dm.WarningIcon, tJ.A.colors.ICON_FEEDBACK_WARNING],
        error: [sZ.CircleXIcon, tJ.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [d6.ArrowSmallUpIcon, tJ.A.colors.ICON_MUTED],
        behind: [fe.ArrowSmallDownIcon, tJ.A.colors.ICON_MUTED],
    };
function fp(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([cl.A], () => cl.A.getGitInfoState(t), [t]),
            load: a.useCallback(() => (0, c3.DK)(t), [t]),
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
                    `Updated ${dO(r)}`,
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
    return (0, i.jsxs)(dX, {
        title: "Git",
        children: [
            (0, i.jsx)("div", {
                className: fm.Lj,
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
                    if (!e.running || null != e.localError) return [fu(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fu(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dq(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = ff.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fd))
                        : l.push(
                              { label: "Main", value: fi(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fi(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dq(e.commits) : "Unknown", icon: "commits" },
                            fa("Oldest Commit", e.oldest),
                            fa("Newest Commit", e.newest),
                            fu(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dq(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dq(t.loose)} loose (${d$(t.looseBytes)}) \xb7 ${dq(t.packed)} packed in ${n} (${d$(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dq(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dq(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != i && l.push(i),
                        null != e.localBytes &&
                            l.push(
                                fo(
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
                                  fo("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: a } = e,
                        s = fh[r],
                        [o, u] = null != a ? fg[a] : [null, void 0];
                    return (0, i.jsx)(
                        dY,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === a,
                            icon: (0, i.jsx)(s, { size: "xs", color: tJ.A.colors.ICON_MUTED }),
                            state: null != o ? (0, i.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function fx(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: u,
        } = (function (e) {
            let t = (0, c.bG)([cl.A], () => cl.A.getRestartAgentState(e), [e]),
                [n, l] = a.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                i = "restarted" === t.phase ? t.instanceSince : null,
                s = a.useRef(i);
            (a.useEffect(() => {
                null != i && i !== s.current && ((s.current = i), (0, c3.DK)(e));
            }, [e, i]),
                a.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = cl.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, c3.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                uj.h.dispatch({
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
            let o = a.useCallback(() => (0, c3.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fl,
                },
                restart: o,
            };
        })(t),
        d = a.useCallback(() => {
            (0, eh.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: u });
        }, [o, u]);
    return (0, i.jsxs)("div", {
        className: fm.Lj,
        children: [
            (0, i.jsxs)("div", {
                className: fm.nM,
                children: [
                    (0, i.jsx)(ft.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, i.jsx)(f.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fn.RetryIcon,
                        text: fl,
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
                            return `Restarted \xb7 new instance since ${dO(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dO(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fv(e, t) {
    return (0, i.jsx)(dY, {
        label: e,
        value: eb.intl.formatToPlainString(ev.default.yHJxuP, { count: dq((0, cO.aM)(t)) }),
        hint: `${dq(t.input_tokens)} in \xb7 ${dq(t.output_tokens)} out \xb7 ${dq(t.cache_read_input_tokens)} cache read`,
    });
}
function fb(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        u,
        d,
        m,
        h,
        { projectId: g, status: p, fetchState: v, onRefresh: b } = e,
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
        } = ((t = (0, c.bG)([cl.A], () => cl.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([cl.A], () => cl.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([cl.A], () => cl.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([cl.A], () => cl.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([cl.A], () => cl.A.getSandboxRestartState(g), [g])),
        (o = (0, c.bG)([rM.A], () => rM.A.isThinking(g), [g])),
        (u = a.useCallback(() => (0, c3.Lj)(g), [g])),
        (d = a.useCallback(() => (0, c3.Lj)(g, !0), [g])),
        (m = a.useCallback(() => (0, c3.bq)(g), [g])),
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
            handleRestartWorkspace: m,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, i.jsxs)("div", {
        className: fm.Mf,
        children: [
            (0, i.jsx)(dV, { generatedAt: p?.generated_at ?? null, fetchState: v, onRefresh: b }),
            (0, i.jsx)(dX, {
                title: eb.intl.string(ev.default.JghNal),
                children:
                    null == E
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: eb.intl.string(ev.default.s0U5Fv),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dY, {
                                      label: eb.intl.string(ev.default["9nqym2"]),
                                      value: dq((0, cO.a7)(E.cost_usd)),
                                      hint: eb.intl.formatToPlainString(ev.default.NCdUIh, { count: dq(E.turns) }),
                                  }),
                                  fv(eb.intl.string(ev.default.xtxP0e), E.orchestrator),
                                  fv(eb.intl.string(ev.default["9Sj3SX"]), E.codegen),
                                  fv(eb.intl.string(ev.default.ANCEo3), (0, cO.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, i.jsx)(dY, {
                                          label: eb.intl.string(ev.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dq(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, i.jsx)(dX, {
                title: eb.intl.string(ev.default.dZHPE5),
                children:
                    null == j
                        ? (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: eb.intl.string(ev.default.DfVjal),
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  fv(eb.intl.string(ev.default["7X3i9d"]), j.total),
                                  (0, i.jsx)(dY, {
                                      label: eb.intl.string(ev.default["8OUg09"]),
                                      value: `${Math.round((j.cache_hit_rate ?? (0, cO.CA)(j.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, i.jsxs)(dX, {
                title: eb.intl.string(ev.default.NbRk9a),
                children: [
                    null != y && null != R
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(dZ, {
                                      label: eb.intl.string(ev.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: R,
                                      formatValue: dq,
                                  }),
                                  (0, i.jsx)(dY, {
                                      label: eb.intl.string(ev.default.mRbSns),
                                      value: `${dq(y.tokensBefore)} \u{2192} ${dq(y.tokensAfter)}`,
                                      hint: eb.intl.formatToPlainString(ev.default.Vq3skS, {
                                          count: dq(y.retainedMessages),
                                          time: dO(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(x.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  null != R
                                      ? eb.intl.formatToPlainString(ev.default.GMLCNv, { ceiling: dq(R) })
                                      : eb.intl.string(ev.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, i.jsx)(dY, {
                            label: eb.intl.string(ev.default["4BX5KK"]),
                            value: `${dq(k.projected)} / ${dq(k.threshold)}`,
                            critical: !0,
                            hint: eb.intl.formatToPlainString(ev.default["6ngCax"], { time: dO(k.observedAt) }),
                        }),
                    (0, i.jsxs)("div", {
                        className: fm.Lj,
                        children: [
                            (0, i.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eb.intl.string(ev.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eb.intl.string(ev.default.wox6Ev);
                                    if ("pending" === e) return eb.intl.string(ev.default.OcPHQ1);
                                    let t = dO(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eb.intl.formatToPlainString(ev.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? ev.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ev.default.YZb4hK
                                              : ev.default.ZoUSVK;
                                    return eb.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(f.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eb.intl.string(ev.default.ZxG2AI),
                                            onClick: N,
                                        }),
                                        (0, i.jsx)(x.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: eb.intl.string(ev.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: fm.Lj,
                        children: [
                            (0, i.jsx)(f.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eb.intl.string(ev.default["5qCjBu"]),
                                loading: "pending" === A,
                                disabled: "pending" === A || S,
                                onClick: I,
                            }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof A && "restarted" !== A.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eb.intl.string(ev.default.mlok8D);
                                    if ("pending" === e) return eb.intl.string(ev.default["1ugSyK"]);
                                    let t = dO(e.observedAt);
                                    return eb.intl.formatToPlainString(
                                        "restarted" === e.outcome ? ev.default["76mfqO"] : ev.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(A),
                            }),
                        ],
                    }),
                    (0, i.jsx)(fx, { projectId: g }),
                ],
            }),
            (0, i.jsx)(fp, { projectId: g }),
            (null != M || p?.analytics != null) &&
                (0, i.jsxs)(dX, {
                    title: eb.intl.string(ev.default.EsSzCS),
                    children: [
                        null != M &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(dY, {
                                        label: eb.intl.string(ev.default.CLXHAs),
                                        value: dO(M.instance_since),
                                        hint: eb.intl.string(ev.default.UCwUEX),
                                    }),
                                    (0, i.jsx)(dY, {
                                        label: eb.intl.string(ev.default["8V8e1Z"]),
                                        value: dq(M.sockets),
                                    }),
                                    (0, i.jsx)(dY, {
                                        label: eb.intl.string(ev.default["4pBzYW"]),
                                        value: M.turn_inflight
                                            ? eb.intl.string(ev.default.Wv025I)
                                            : eb.intl.string(ev.default["7/lsFY"]),
                                    }),
                                    M.queued_messages > 0 &&
                                        (0, i.jsx)(dY, {
                                            label: eb.intl.string(ev.default["3oUYnv"]),
                                            value: dq(M.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, i.jsx)(dQ, { analytics: p.analytics }),
                    ],
                }),
            null != _ &&
                (0, i.jsxs)(dX, {
                    title: eb.intl.string(ev.default["LEIhp/"]),
                    children: [
                        (0, i.jsx)(dY, {
                            label: eb.intl.string(ev.default.IlDBN3),
                            value: dq(_.max_subagent_iterations),
                        }),
                        (0, i.jsx)(dY, {
                            label: eb.intl.string(ev.default["ZdzKR+"]),
                            value: eb.intl.formatToPlainString(ev.default.yHJxuP, {
                                count: dq(_.context_window_tokens),
                            }),
                        }),
                        (0, i.jsx)(dY, {
                            label: eb.intl.string(ev.default.cIhN2W),
                            value: eb.intl.formatToPlainString(ev.default.yHJxuP, {
                                count: dq(_.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, i.jsx)(dY, {
                            label: eb.intl.string(ev.default["+fOn/q"]),
                            value: dq(_.max_user_message_chars),
                        }),
                        (0, i.jsx)(dY, { label: eb.intl.string(ev.default.kIHga0), value: dq(_.max_build_attempts) }),
                        (0, i.jsx)(dY, { label: eb.intl.string(ev.default.Iw03yW), value: dq(_.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fj = n(237528),
    fy = n(629584),
    fk = n(531893);
function fw(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, i.jsx)("div", {
              className: fk.ut,
              children: (0, i.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  children: eb.intl.string(ev.default.h1SE6R),
              }),
          });
}
function fA(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, i.jsxs)("div", {
              className: fk.qf,
              children: [
                  (0, i.jsx)(x.E, {
                      variant: "body-sm/medium",
                      color: "text-default",
                      children: eb.intl.string(ev.default.h1SE6R),
                  }),
                  (0, i.jsx)(x.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: eb.intl.string(ev.default["8SErdg"]),
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: fk.qf,
              children: [
                  (0, i.jsx)(x.E, { variant: "body-sm/medium", color: "text-default", children: n }),
                  (0, i.jsx)(x.E, { variant: "body-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fS(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, i.jsx)("div", {
              className: fk.ps,
              children: (0, i.jsx)(x.E, {
                  variant: "body-xs/normal",
                  color: "text-muted",
                  children: eb.intl.string(ev.default.V7Ri8H),
              }),
          })
        : null;
}
var fC = n(109079);
let fN = a.memo(function (e) {
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
        className: fC.vK,
        children: [
            (0, i.jsx)(x.E, {
                tag: "span",
                variant: "body-xs/normal",
                color: "text-subtle",
                className: fC.Mt,
                selectable: !0,
                children: c8(n.ts) ?? n.ts,
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
                className: fC.dm,
                children: n.level,
            }),
            (0, i.jsxs)("div", {
                className: fC.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, i.jsx)("span", { className: fC.Cq, children: (0, i.jsx)(fj.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, i.jsx)("span", {
                            className: fC.Cq,
                            title: n.build ?? void 0,
                            children: (0, i.jsx)(fj.v, {
                                text: eb.intl.string(ev.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != u
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, i.jsxs)(x.E, {
                                          tag: "span",
                                          variant: "body-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, i.jsxs)(e7.D, {
                                      className: fC.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": eb.intl.string(ev.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, i.jsx)(nM.ChevronSmallDownIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, i.jsx)(nR.ChevronSmallRightIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, i.jsxs)(x.E, {
                                              tag: "span",
                                              variant: "body-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  eb.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker
                                                          ? ev.default.kUhyUv
                                                          : ev.default["N+fphl"],
                                                      { count: u.size },
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
                                          className: fC.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
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
function fI(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([c2.A], () => c2.A.getLogs(t), [t]),
        l = (0, c.bG)([c2.A], () => c2.A.getHistoryState(t, "logs")),
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
                dG.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dz(e);
                            case "web":
                                return eb.intl.string(ev.default.IVzfVV);
                            default:
                                return eb.intl.string(ev.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, i.jsxs)("div", {
        className: fC.$F,
        children: [
            (0, i.jsxs)("div", {
                className: fC.y4,
                children: [
                    (0, i.jsx)(fy.I, {
                        look: "pill",
                        "aria-label": eb.intl.string(ev.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, i.jsx)("div", {
                        className: fC.KT,
                        children: (0, i.jsx)(c4.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: eb.intl.string(ev.default["m2+37Y"]),
                            "aria-label": eb.intl.string(ev.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, i.jsx)(fw, { state: l }),
            (0, i.jsxs)(nb.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: fC.sx,
                children: [
                    (0, i.jsx)(fS, { state: l }),
                    0 === n.length
                        ? (0, i.jsx)(fA, {
                              state: l,
                              emptyTitle: eb.intl.string(ev.default.S7qlPG),
                              emptyBody: eb.intl.string(ev.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, i.jsx)(x.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: eb.intl.string(ev.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, i.jsx)(fN, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fE(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, i.jsx)(a.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, i.jsx)(a.Fragment, { children: r("stable", l) }, "stable")),
        (0, i.jsx)(dX, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, i.jsx)(x.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: eb.intl.string(ev.default.umcjif),
                      }),
        })
    );
}
function f_(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(dY, {
                      label: eb.intl.formatToPlainString(ev.default["01ZMS4"], { env: dz(n) }),
                      value: ((t = l.connected), eb.intl.string(t ? ev.default.Wv025I : ev.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, i.jsx)(dY, {
                      label: eb.intl.string(ev.default["z1dh+F"]),
                      value: dq(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dO(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, i.jsx)(dY, { label: eb.intl.string(ev.default.Iz5GnJ), value: dq(l.guild_count) }),
                  (0, i.jsx)(dY, {
                      label: eb.intl.string(ev.default["7UqtNv"]),
                      value: dq(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? eb.intl.formatToPlainString(ev.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dO(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, i.jsx)(dY, {
                          label: eb.intl.string(ev.default["x3+JXJ"]),
                          value: dq(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, i.jsx)(dY, { label: dz(n), value: eb.intl.string(ev.default.lTHQss) });
}
function fM(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, i.jsx)(dY, {
        label: dz(t),
        value: eb.intl.formatToPlainString(ev.default["Xq+wHT"], {
            requests: dq(n.requests),
            failures: dq(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? eb.intl.formatToPlainString(ev.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dO(n.last_failure.at),
                  })
                : eb.intl.formatToPlainString(ev.default["7KlGT6"], { time: dO(n.since) }),
    });
}
function fR(e) {
    let { env: t, runtime: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(dY, {
                label: eb.intl.formatToPlainString(ev.default["92gVTm"], { env: dz(t) }),
                value: dq(n.connections),
            }),
            n.schedules.map((e) =>
                (0, i.jsx)(
                    dY,
                    {
                        label: eb.intl.formatToPlainString(ev.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? eb.intl.formatToPlainString(ev.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? eb.intl.formatToPlainString(ev.default.wxAWNv, { time: dO(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fP(e) {
    let { env: t, metrics: n } = e;
    return (0, i.jsx)(dY, {
        label: dz(t),
        value: eb.intl.formatToPlainString(ev.default.suAOj9, { calls: dq(n.calls), errors: dq(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fT(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, i.jsx)(dX, {
            title: t,
            children: (0, i.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: eb.intl.string(ev.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        a = n.cpu_ms_total > 0;
    return (0, i.jsxs)(dX, {
        title: t,
        children: [
            (0, i.jsx)(dY, {
                label: eb.intl.string(ev.default.xtD4Zp),
                value: dq(n.requests),
                hint: eb.intl.formatToPlainString(ev.default["7KlGT6"], { time: dO(n.since) }),
            }),
            (0, i.jsx)(dY, { label: eb.intl.string(ev.default.gfRhR3), value: dq(n.errors), critical: n.errors > 0 }),
            a
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(dZ, {
                              label: eb.intl.string(ev.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dD,
                          }),
                          (0, i.jsx)(dY, {
                              label: eb.intl.string(ev.default.mSKImM),
                              value: dD(r),
                              hint: eb.intl.formatToPlainString(ev.default.JqMU05, {
                                  total: dD(n.cpu_ms_total),
                                  wall: dD(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, i.jsx)(dY, {
                      label: eb.intl.string(ev.default.LEJ5r3),
                      value: eb.intl.string(ev.default["2Ekb2b"]),
                      hint: eb.intl.string(ev.default.G0aq7i),
                  }),
            !a &&
                n.wall_ms_total > 0 &&
                (0, i.jsx)(dY, { label: eb.intl.string(ev.default.xvmL1D), value: dD(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, i.jsx)(dY, {
                    label: eb.intl.string(ev.default["4sQYwH"]),
                    value: dq(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, i.jsx)(dY, {
                label: eb.intl.string(ev.default.bQenOy),
                value: dq(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: eb.intl.formatToPlainString(ev.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, i.jsx)(dY, { label: eb.intl.string(ev.default.xgpn4Y), value: dF(n.build) }),
        ],
    });
}
function fL(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: eb.intl.string(ev.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: eb.intl.string(ev.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: eb.intl.string(ev.default.eiAi57), metrics: n },
              ];
    return (0, i.jsx)(dX, {
        title: eb.intl.string(ev.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, i.jsx)(dY, { label: n, value: "\u2014" }, t)
                : (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)(dY, {
                                  label: eb.intl.formatToPlainString(ev.default.u7kJJ4, { env: n }),
                                  value: d$(l.r2_bytes),
                                  hint: eb.intl.formatToPlainString(
                                      l.r2_truncated ? ev.default.lH0oQw : ev.default.m9h02S,
                                      { count: dq(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, i.jsx)(dZ, {
                                      label: eb.intl.formatToPlainString(ev.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: d$,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function f$(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, i.jsxs)("div", {
        className: fm.Mf,
        children: [
            (0, i.jsx)(dV, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(fT, {
                            title: eb.intl.string(ev.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(fT, {
                            title: eb.intl.string(ev.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, i.jsx)(fL, { status: t }),
                        null != t.bot &&
                            (0, i.jsx)(fE, {
                                title: eb.intl.string(ev.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, i.jsx)(f_, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, i.jsx)(fE, {
                                title: eb.intl.string(ev.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fM, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, i.jsx)(fE, {
                                title: eb.intl.string(ev.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fR, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, i.jsx)(fE, {
                                title: eb.intl.string(ev.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, i.jsx)(fP, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, i.jsx)(dJ, { analytics: t.analytics }),
                        (0, i.jsxs)(dX, {
                            title: eb.intl.string(ev.default.fQMpFp),
                            children: [
                                (0, i.jsx)(dY, {
                                    label: eb.intl.string(ev.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dF(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, i.jsx)(dY, {
                                    label: eb.intl.string(ev.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dF(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fD = n(592465);
function fq(e) {
    let { projectId: t, onClose: n } = e,
        l = eS(),
        [r, s] = a.useState(() => (l && ek?.projectId === t ? "trace" : "logs")),
        o = (0, c.bG)([cl.A], () => cl.A.getStatus(t), [t]),
        u = (0, c.bG)([cl.A], () => cl.A.getFetchState(t), [t]),
        d = a.useCallback(() => {
            ((0, c3.R7)(t), (0, c3.DK)(t));
        }, [t]);
    (a.useEffect(() => d(), [d]), a.useEffect(() => (0, ej.Rw)(t), [t]));
    let f = a.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ek || ek.projectId !== e) return null;
            let { traceId: t } = ek;
            return ((ek = null), t);
        })(t);
        return null != e && (dR(t, e), !0);
    }, [t, l]);
    (a.useEffect(() => {
        f();
    }, [f]),
        ew(t, () => {
            f() && s("trace");
        }));
    let m = a.useCallback(() => {
            (0, uK.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: cl.A.getStatus(t),
                        last_turn_usage: cl.A.getLastTurnUsage(t),
                        last_compaction: cl.A.getLastCompaction(t),
                        last_compaction_decline: cl.A.getLastCompactionDecline(t),
                        timing_traces: cl.A.getTimingTraces(t),
                        logs: c2.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eg.P0)({ text: eb.intl.string(ev.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = eb.intl.string(ev.default["Q4FN+H"]);
    return (0, i.jsxs)("section", {
        className: fD.nd,
        "aria-label": h,
        children: [
            (0, i.jsxs)(tM.Ay, {
                "aria-label": h,
                toolbar: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tM.Ay.Icon, {
                            icon: uG.CopyIcon,
                            tooltip: eb.intl.string(ev.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, i.jsx)(tM.Ay.Icon, {
                            icon: e8.XSmallIcon,
                            tooltip: eb.intl.string(eb.t.cpT0Cq),
                            onClick: n,
                        }),
                    ],
                }),
                children: [
                    (0, i.jsx)(tM.Ay.ChannelIcon, { icon: uB.BugIcon, "aria-hidden": !0 }),
                    (0, i.jsx)(tM.Ay.Title, { children: h }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: fD.rf,
                children: [
                    (0, i.jsxs)(c1.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": eb.intl.string(ev.default.RvvWIh),
                        className: fD.vR,
                        children: [
                            (0, i.jsx)(c1.V.Item, { id: "logs", children: eb.intl.string(ev.default["+VRYCm"]) }),
                            (0, i.jsx)(c1.V.Item, { id: "worker", children: eb.intl.string(ev.default["50D0FZ"]) }),
                            (0, i.jsx)(c1.V.Item, { id: "agent", children: eb.intl.string(ev.default.UkbTK1) }),
                            l ? (0, i.jsx)(c1.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, i.jsx)(fI, { projectId: t })
                        : "worker" === r
                          ? (0, i.jsx)(f$, { status: o, fetchState: u, onRefresh: d })
                          : "trace" === r && l
                            ? (0, i.jsx)(dL, { projectId: t })
                            : (0, i.jsx)(fb, { projectId: t, status: o, fetchState: u, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fO = n(365912),
    fF = n(873715);
function fz(e) {
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
let fG = Object.freeze({ x: -1, y: -1 });
function fU(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fz(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fB = n(192888);
function fK(e, t) {
    return (0, fB.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fU, () => ({ status: "failed" }));
}
var fH = n(108308);
let fW = { x: 25, y: 21 };
function fV(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fX(e, t, n, l) {
    let r = fV(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fY(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fZ(e) {
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
function fQ(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: u, annotations: d } = G(o),
        m = (0, eC.Zv)(o),
        h = (0, e_.Rv)(),
        g = (0, c.bG)([le.default], () => le.default.getCurrentUser()),
        p = g?.id ?? null,
        [v, b] = a.useState(null),
        [j, y] = a.useState(!1),
        [k, _] = a.useState(!1),
        [M, R] = a.useState(null),
        [P, $] = a.useState(!1),
        D = a.useRef(null),
        z = a.useRef(null),
        U = a.useRef(null),
        [B, K] = a.useState(null),
        [H, W] = a.useState(!1),
        [V, X] = a.useState(null),
        [Y, Z] = a.useState(null),
        Q = a.useRef(!1),
        [J, ee] = a.useState(!1),
        [et, en] = a.useState(null),
        el = u && !m && !h;
    null == V || (el && V.projectId === o) || X(null);
    let ei = V?.projectId ?? null;
    a.useEffect(() => {
        if (null != ei) return () => (0, nQ.xJ)(ei, "design");
    }, [ei]);
    let ea = tB(r, el);
    a.useEffect(() => {
        if (!el || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void _(!0);
        (y(!0), _(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fF.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fZ(t.response) : null;
                    null == n ? _(!0) : (b(n), O(o, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), _(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [el, r, o]);
    let es = a.useRef(null);
    (a.useEffect(() => {
        if (!el || null == ea || null == o) return;
        if (null == v) {
            es.current = ea;
            return;
        }
        if (tU(es.current, ea)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            es.current = ea;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fF.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ef.current) return;
                        let l = fZ(e.response);
                        null != l && (b(l), O(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let i = fz(e.element);
                            null != i && r.set(l.id, i);
                        }),
                            (n = T(o)).active &&
                                0 !== r.size &&
                                L(o, {
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
    }, [el, ea, v, d, o, r]),
        a.useEffect(() => {
            if (!el)
                return () => {
                    (R(null), X(null), en(null), b(null));
                };
        }, [el]));
    let eu = a.useRef(null),
        ec = a.useRef(null),
        ed = a.useRef(!1),
        ef = a.useRef(!1);
    a.useEffect(() => {
        ((ef.current = el), el || ((eu.current = null), (ec.current = null), (U.current = null), $(!1)));
    }, [el]);
    let em = a.useCallback(
            function e() {
                if (ed.current) return;
                let t = eu.current;
                if (null == t) return;
                eu.current = null;
                let n = r();
                null != n &&
                    ((ed.current = !0),
                    fK(n, t).then((t) => {
                        if (((ed.current = !1), ef.current)) {
                            if ("picked" !== t.status || f4(t.target, ey.current.rect, ey.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? R(null)
                                    : "unsupported" === t.status && W(!0);
                            else {
                                let e = S(t.target);
                                (K((t) => (f3(t, e) ? t : e)),
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
            let e = !Q.current;
            (Z({ at: V.at, label: V.label, draft: V.draft, instant: e }), ee(e), X(null));
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
            let e = setTimeout(() => Z(null), f1);
            return () => clearTimeout(e);
        }, [Y]));
    let eg = null == v || null == ea || v.viewport.width < 1 ? 1 : ea.width / v.viewport.width,
        ep = null != v || k,
        ex = a.useMemo(() => v?.elements ?? [], [v]),
        ey = a.useRef({ rect: null, scale: 1 });
    a.useLayoutEffect(() => {
        ey.current = { rect: ea, scale: eg };
    }, [ea, eg]);
    let ek = a.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, nQ.xJ)(o, "design"),
                    en(null),
                    (Q.current = !1),
                    X({ projectId: o, target: e, anchor: t, draft: "", at: n, label: S(e) }));
            },
            [o],
        ),
        ew = a.useCallback((e, t) => ({ x: (e.clientX - t.left) / eg, y: (e.clientY - t.top) / eg }), [eg]),
        eA = a.useCallback(() => {
            let e = U.current;
            if (null == e) return;
            let t = D.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = z.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    a.useLayoutEffect(eA);
    let eS = a.useCallback(
            (e) => {
                if (null == ea || null != et) return;
                if (((U.current = { x: e.clientX, y: e.clientY }), eA(), $(!0), null != V)) {
                    (Math.abs(e.clientX - V.at.x) > f2 || Math.abs(e.clientY - V.at.y) > f2) && (Q.current = !0);
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
                        })(ex, t.x, t.y),
                        n = null != e && f4(e, ea, eg) ? null : e;
                    if (null != n) {
                        let e = S(n);
                        K((t) => (f3(t, e) ? t : e));
                    }
                    R((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ec.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ec.current = n), (eu.current = n), em());
            },
            [ea, eg, ep, ew, H, ex, V, et, eA, em],
        ),
        eN = null == et ? null : d.find((e) => e.id === et.id),
        eI = el && (P || V?.target.marker != null || eN?.target.marker != null);
    a.useEffect(() => {
        if (eI)
            return () => {
                let e = r();
                null != e && fK(e, fG);
            };
    }, [eI, r]);
    let eE = a.useCallback(() => {
        ($(!1), R(null), (ec.current = null), (eu.current = null));
    }, []);
    a.useEffect(() => {
        if (!el || !P || !ep || H || null != V || null != et) return;
        let e = U.current,
            { rect: t, scale: n } = ey.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ec.current = l), (eu.current = l), em());
    }, [el, P, ep, H, V, et, em]);
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
                            ? w
                            : { x: Math.min(1, Math.max(0, (t - l) / i)), y: Math.min(1, Math.max(0, (n - r) / a)) };
                    })(M, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [M, ea, ew, V, et, ek, eh],
        ),
        eR = a.useCallback(() => {
            null != o && (R(null), er(o)?.active === !0 ? eo(o) : q(o));
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
        if (el)
            return (
                tL.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        tL.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eT.current());
        }
        function t(e) {
            let t = e.target;
            !(0, tT.vq)(t) ||
                eD.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fO.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eL.current || er(eL.current)?.active !== !0) && e$.current());
        }
    }, [el, s]);
    let eq = a.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eP());
                    return;
                }
                if (null != V || null != et || 0 === ex.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == M ? -1 : ex.findIndex((e) => e.ref === M.ref);
                    R(ex[(n + (t ? 1 : -1) + ex.length) % ex.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != M &&
                    (e.preventDefault(),
                    ek(M, w, { x: (ea?.left ?? 0) + M.rect.x * eg, y: (ea?.top ?? 0) + M.rect.y * eg }));
            },
            [o, V, et, ex, M, ek, eP, ea, eg],
        ),
        eO = a.useCallback(
            (e) => {
                null == o ||
                    null == V ||
                    ((A(V.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ej.dv)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = S(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${I}${r}${E}${N(e)}
${t.trim()}`;
                            })(V.target, V.draft),
                            e,
                        ),
                        eh(),
                        R(null)));
            },
            [o, V, eh],
        ),
        eF = a.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, t$.vX)(o, e)), [o]),
        ez = a.useCallback(() => {
            if (null != o && null != et && null != p && A(et.draft)) {
                var e, t;
                let n, l;
                ((e = et.id),
                    (t = et.draft.trim()),
                    null != (l = (n = T(o)).annotations.find((t) => t.id === e)) &&
                        F(l, p) &&
                        L(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    en({ ...et, editing: !1 }));
            }
        }, [o, et, p]),
        eG = a.useCallback(() => {
            if (null != o && null != et && null != p) {
                var e;
                let t, n;
                ((e = et.id),
                    null != (n = (t = T(o)).annotations.find((t) => t.id === e)) &&
                        F(n, p) &&
                        L(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    en(null));
            }
        }, [o, et, p]),
        eU = u
            ? j
                ? eb.intl.string(ev.default["Eb/YV9"])
                : k
                  ? eb.intl.string(ev.default.FD30bh)
                  : eb.intl.formatToPlainString(ev.default.dTSqLF, { count: d.length })
            : "",
        eB = el && null != ea,
        eK = P && null == et,
        eH = V?.target ?? eN?.target ?? null,
        eW = V ?? Y,
        eV = V ?? (Y?.instant === !0 ? null : Y),
        eX =
            null != eN && null != ea
                ? (function (e, t) {
                      let { left: n, top: l } = fY(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fX(eN.target, eN.anchor, ea, eg), ea)
                : null;
    return (
        a.useEffect(() => {
            let e = r();
            if (eN?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eN;
            fK(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eN, r]),
        (0, tP.createPortal)(
            (0, i.jsxs)("div", {
                ref: eD,
                className: fH.Li,
                children: [
                    (0, i.jsx)(n_.A, {
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
                                      className: fH.MT,
                                      style: { left: ea.left, top: ea.top, width: ea.width, height: ea.height },
                                      "data-plain-cursor": eK ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eb.intl.string(ev.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: eS,
                                      onMouseLeave: eE,
                                      onClick: eM,
                                      onKeyDown: eq,
                                  }),
                                  null != M && null == M.marker && null == V && null == et
                                      ? (0, i.jsx)(f5, { box: fV(M, ea, eg) })
                                      : null,
                                  (0, i.jsx)("div", {
                                      ref: D,
                                      className: fH.aZ,
                                      children: (0, i.jsx)("div", {
                                          className: fH.xz,
                                          "data-shown": null != M && null == et && null == V ? "" : void 0,
                                          "data-instant": J ? "" : void 0,
                                          children: (0, i.jsxs)(x.E, {
                                              variant: "body-xs/medium",
                                              className: fH.Ux,
                                              children: [
                                                  null == B
                                                      ? null
                                                      : (0, i.jsx)("span", { className: fH.Tl, children: B.kind }),
                                                  null == B || "" === B.name
                                                      ? null
                                                      : (0, i.jsxs)("span", {
                                                            className: fH.kh,
                                                            children: [" ", B.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: z,
                                      className: fH.Y,
                                      children: eK ? (0, i.jsx)("div", { className: fH.u }) : null,
                                  }),
                                  null == eV
                                      ? null
                                      : (0, i.jsx)("div", {
                                            className: fH.aZ,
                                            style: {
                                                transform: `translate3d(${eV.at.x + 20}px, ${eV.at.y + 20}px, 0)`,
                                            },
                                            children: (0, i.jsx)("div", {
                                                className: fH.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == V ? "" : void 0,
                                                children: (0, i.jsxs)(x.E, {
                                                    variant: "body-xs/medium",
                                                    className: fH.Ux,
                                                    children: [
                                                        (0, i.jsx)("span", {
                                                            className: fH.Tl,
                                                            children: eV.label.kind,
                                                        }),
                                                        "" === eV.label.name
                                                            ? null
                                                            : (0, i.jsxs)("span", {
                                                                  className: fH.kh,
                                                                  children: [" ", eV.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eH && null == eH.marker
                                      ? (0, i.jsx)("div", {
                                            className: fH.D0,
                                            style: fV(eH, ea, eg),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fX(e.target, e.anchor, ea, eg),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, i.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fH.xL,
                                              style: { ...fY(n, ea), width: 24, height: 24 },
                                              "aria-label": eb.intl.formatToPlainString(ev.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: C(e.target),
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
                                              children: (0, i.jsx)(fJ, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eW || null == o
                                      ? null
                                      : (0, i.jsx)(tz, {
                                            projectId: o,
                                            at: { x: eW.at.x + 20, y: eW.at.y + 20 },
                                            bounds: ea,
                                            kind: eW.label.kind,
                                            value: eW.draft,
                                            canSubmit: null != V && A(eW.draft),
                                            onChange: (e) => {
                                                null != V && X({ ...V, draft: e });
                                            },
                                            onSubmit: eO,
                                            onDismiss: eh,
                                            onUploadFile: eF,
                                            closing: null == V,
                                        }),
                                  null != eN && null != et && null != eX
                                      ? (0, i.jsxs)(f0, {
                                            point: eX,
                                            frame: ea,
                                            authorId: eN.authorId,
                                            title: C(eN.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                et.confirmingRemove ? en({ ...et, confirmingRemove: !1 }) : en(null);
                                            },
                                            onMouseLeave: () => {
                                                et.editing || et.confirmingRemove || en(null);
                                            },
                                            children: [
                                                et.editing
                                                    ? (0, i.jsx)(n3.f, {
                                                          autoFocus: !0,
                                                          label: eb.intl.string(ev.default.KCYqWL),
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
                                                    : (0, i.jsx)(x.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-default",
                                                          className: fH.aC,
                                                          children: eN.comment,
                                                      }),
                                                F(eN, p)
                                                    ? (0, i.jsx)("div", {
                                                          className: fH.eB,
                                                          children: et.confirmingRemove
                                                              ? (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(x.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fH.nv,
                                                                            children: eb.intl.string(ev.default.wOHvts),
                                                                        }),
                                                                        (0, i.jsx)(f.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eb.intl.string(ev.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                en({ ...et, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, i.jsx)(f.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eb.intl.string(ev.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eG,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, i.jsxs)(i.Fragment, {
                                                                    children: [
                                                                        (0, i.jsx)(f.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: eb.intl.string(ev.default.friIzR),
                                                                            onClick: () =>
                                                                                en({
                                                                                    ...et,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        et.editing
                                                                            ? (0, i.jsx)(f.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !A(et.draft),
                                                                                  text: eb.intl.string(
                                                                                      ev.default.iicRP9,
                                                                                  ),
                                                                                  onClick: ez,
                                                                              })
                                                                            : (0, i.jsx)(f.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eb.intl.string(
                                                                                      ev.default["6eW9lg"],
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
function fJ(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([le.default], () => le.default.getUser(t), [t]);
    return (0, i.jsx)(ac.eu, {
        src: null == n ? null : af.Ay.getUserAvatarURL(n),
        size: ad._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function f0(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        v = a.useRef(null),
        b = a.useRef(null),
        [j, y] = a.useState(fW);
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
        className: fH.Nr,
        style: C,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, i.jsxs)("div", {
                className: fH.MY,
                children: [
                    (0, i.jsx)("span", { ref: b, className: fH.ip, children: (0, i.jsx)(fJ, { authorId: d }) }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        className: fH.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: fH.zI, children: p }),
        ],
    });
}
let f1 = 300,
    f2 = 2;
function f3(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function f4(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function f5(e) {
    let { box: t } = e;
    return (0, i.jsx)("div", { className: fH.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var f7 = n(318774),
    f8 = n(91242),
    f9 = n(697744),
    f6 = n(130324);
function me(e) {
    let t = (0, f9.c)(),
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
    let r = (0, nk.j)();
    return (
        a.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mt(e) {
    let { className: t } = e,
        { Component: n, events: l } = me(3e4);
    return (0, i.jsxs)("div", {
        className: u()(t, f6.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, i.jsx)(x.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                className: f6.ol,
                children: eb.intl.string(ev.default.AyiQEp),
            }),
        ],
    });
}
var mn = n(251363),
    ml = n(944142),
    mr = n(532247),
    mi = n(501628);
function ma(e) {
    let { progress: t } = e,
        { Component: n } = me(1500),
        l = eA.Q_.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, i.jsx)("div", {
                className: mi.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, i.jsx)(
                        "span",
                        {
                            className: mi.PM,
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
function ms(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        o = (0, c.bG)([ml.A], () => (s ? ml.A.getLiveReload(t) : null), [s, t]),
        u = (0, tu.A)(n, r)?.id ?? null,
        d = o?.phase ?? null,
        f = o?.background === !0,
        m = (function (e, t, n) {
            let l = (0, mr.dv)(e),
                [r, i] = a.useState(null),
                [s, o] = a.useState(l),
                [u, d] = a.useState(t);
            s !== l && (o(l), d(t), i(null != l || u ? null : (0, mr.QP)(e, s)));
            let f = (0, c.bG)(
                    [f8.A],
                    () => {
                        let e = f8.A.getFrame(n);
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
                        null != t.target && t.target === (0, mn.ow)(null, n) && e();
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
        h = f ? null : (0, mr.h_)(d, o?.step ?? null, m);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(n_.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, i.jsx)("div", {
                      className: mi.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, i.jsx)(ma, { progress: h }),
                  })
                : null,
        ],
    });
}
let mo = 0;
var mu = n(782134),
    mc = n(357858),
    md = n(343030),
    mf = n(11411),
    mm = n(111518),
    mh = n(240666);
let mg = { width: 1 / 0, height: 1 / 0 };
function mp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mg;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mx = n(702083);
function mv(e) {
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
        f = n ? mp(l, d ?? void 0) : null;
    return (0, i.jsx)("div", {
        ref: r,
        className: u()(mx.dw, { [mx.PQ]: null != f }),
        children: (0, i.jsx)("div", { className: u()(mx.R9, { [mx.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var mb = n(347927);
function mj(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, i.jsxs)("div", {
        className: u()(mb.Bf, l && mb.Qx),
        children: [
            (0, i.jsxs)("div", {
                className: mb.Ux,
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
var my = n(957272);
function mk(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: a, state: s } = (0, mm.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mh.A)(t, n), s === mm.n.Launched)) {
        let e = (0, i.jsx)(mf.A, { frameId: a.id, level: md.A.WithinAppContent, className: my.Z7, overlay: r });
        return (0, td.Q5)(n) ? (0, i.jsx)(mv, { children: e }) : e;
    }
    return (0, i.jsx)(mw, { state: s });
}
function mw(e) {
    let { state: t } = e;
    switch (t) {
        case mm.n.RenderingElsewhere:
            return (0, i.jsx)("div", {
                className: my.qs,
                children: (0, i.jsx)(mj, {
                    title: eb.intl.string(ev.default["9kpdo7"]),
                    body: eb.intl.string(ev.default.iIA8Nj),
                }),
            });
        case mm.n.NoApplication:
            return (0, i.jsx)(mt, { className: my.qs });
        case mm.n.DoesNotSupportSurface:
            return (0, i.jsx)("div", {
                className: my.qs,
                children: (0, i.jsx)(mj, {
                    title: eb.intl.string(ev.default["7k4GyN"]),
                    body: eb.intl.string(ev.default.zdIy3R),
                }),
            });
        case mm.n.Error:
            return (0, i.jsxs)("div", {
                className: my.qs,
                children: [
                    (0, i.jsx)(p.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: eb.intl.string(ev.default.lTPbnG),
                    }),
                    (0, i.jsx)(x.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        className: my.tj,
                        children: eb.intl.string(ev.default.e6GiAZ),
                    }),
                ],
            });
        case mm.n.AwaitingLaunch:
        case mm.n.Loading:
            return (0, i.jsx)("div", { className: my.qs, children: (0, i.jsx)(v.y, {}) });
    }
}
var mA = n(308528),
    mS = n(334738),
    mC = n(5206),
    mN = n(365971),
    mI = n(703462);
function mE(e) {
    let { message: t } = e;
    return (0, i.jsxs)("div", {
        className: mI.f,
        children: [
            (0, i.jsx)(e0.AppsIcon, { size: "lg", color: "var(--icon-muted)" }),
            (0, i.jsx)(x.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function m_() {
    return (0, i.jsx)("div", { className: mI.f, children: (0, i.jsx)(v.y, {}) });
}
function mM(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, o] = a.useState(null),
        u = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([n9.A], () => (null != u ? n9.A.getChannel(u) : null), [u]);
    ((t = d?.id ?? null),
        a.useEffect(() => {
            null != t && mA.A.preload(ll.ME, t);
        }, [t]),
        (n = (0, c.bG)([uL.A], () => uL.A.isFocused())),
        a.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mN.Xg)();
            return (
                (0, mS.yl)(t, e),
                () => {
                    (0, mS.dm)(t, e);
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
        ? (0, i.jsx)(mE, { message: eb.intl.string(ev.default["VP/O8s"]) })
        : null == d
          ? (0, i.jsx)(m_, {})
          : (0, i.jsx)("div", {
                className: mI.g,
                children: (0, i.jsx)(mC.A, { channel: d, guild: null, chatInputType: ou.oU.SIDEBAR }, d.id),
            });
}
var mR = n(765671),
    mP = n(596977),
    mT = n(921853),
    mL = n(582063);
function m$(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        a = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(a + e + r.length) % r.length];
        (0, eq.vX)(t, n?.id ?? null);
    }
    let o = eb.intl.string(ev.default.Gl3XtE),
        u = eb.intl.string(ev.default["3FvcrY"]);
    return (0, i.jsxs)("div", {
        className: mL.aF,
        children: [
            (0, i.jsx)(d.m, {
                text: o,
                position: "top",
                children: (0, i.jsx)(tH.K, {
                    icon: mT.ChevronSmallLeftIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(-1),
                }),
            }),
            (0, i.jsx)("div", {
                className: mL.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: eb.intl.formatToPlainString(ev.default["140n5k"], {
                                  name: l.name,
                                  index: a + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, i.jsx)(x.E, {
                              tag: "span",
                              variant: "body-sm/medium",
                              color: "text-strong",
                              children: eb.intl.string(ev.default.wVJL0P),
                          }),
            }),
            (0, i.jsx)(d.m, {
                text: u,
                position: "top",
                children: (0, i.jsx)(tH.K, {
                    icon: nR.ChevronSmallRightIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var mD = n(666476);
let mq = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mO() {
    (0, eg.P0)({ text: eb.intl.string(ev.default.jj3abP), variant: "critical" });
}
function mF(e) {
    let { projectId: t } = e,
        n = a.useRef(null),
        l = a.useRef(null),
        r = eb.intl.string(ev.default["xd/1IW"]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ty.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(mz, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, i.jsx)("div", {
                        ref: n,
                        className: mL.m2,
                        children: (0, i.jsx)(d.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, i.jsx)(tH.K, {
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
                accept: mq.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mq.includes(n.type)
                                ? n.size > mD.aI
                                    ? (0, eg.P0)({ text: eb.intl.string(ev.default.T8Spiu), variant: "critical" })
                                    : (0, iC.M$)(t, n).catch(mO)
                                : (0, eg.P0)({ text: eb.intl.string(ev.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mz(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([iS.A], () => iS.A.getBackground(t)),
        a = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, i.jsxs)(ci.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": eb.intl.string(ev.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, i.jsxs)(ca.rX, {
                children: [
                    (0, i.jsx)(ca.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: eb.intl.string(ev.default.uQpDky),
                        icon: l3.ImagePlusIcon,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, i.jsx)(ca.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: eb.intl.string(ev.default.AiAz8J),
                        icon: fn.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, iC.Og)(t).catch(mO));
                        },
                    }),
                ],
            }),
            (0, i.jsx)(ca.rX, {
                children: (0, i.jsx)(ca.fP, {
                    id: "conjure-overlay-background-blur",
                    label: eb.intl.string(ev.default["hyN+kc"]),
                    checked: a,
                    action: () => {
                        (0, iC.Y1)(t, !a) || mO();
                    },
                }),
            }),
        ],
    });
}
function mG(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: o, height: u } = (0, mR.Ay)(),
        { captures: c, selected: d } = iA(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: eU({ width: l - 48, height: r - 48 }, n) };
            let i = t.width / t.height,
                a = Math.min(l, r * i),
                s = a / 1920,
                o = eU({ width: 1872, height: 1920 / i - 48 }, n);
            return { top: (r - a / i) / 2 + 24 * s, end: (l - a) / 2 + 24 * s, scale: o * s };
        })({ width: o, height: u }, d, l);
    return (
        a.useEffect(() => (0, mP.L0)(), []),
        (0, i.jsxs)("div", {
            className: mL.JH,
            children: [
                (0, i.jsx)(iI, { projectId: n, gameCaptures: !0 }),
                (0, i.jsx)("div", {
                    ref: s,
                    className: mL.dw,
                    children: (0, i.jsx)("div", {
                        className: mL.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, i.jsx)(mk, { applicationId: t, surface: td.p$, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, i.jsx)(mF, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, i.jsx)(m$, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
var mU = n(825484);
function mB(e) {
    let { onAddBot: t, loading: n = !1, agentPrompt: l } = e,
        r = (0, i.jsx)(f.$, {
            size: "sm",
            variant: "primary",
            text: eb.intl.string(ev.default.RGeB11),
            onClick: t,
            loading: n,
        });
    return null == l
        ? (0, i.jsx)(mj, {
              title: eb.intl.string(ev.default.xlEjZ8),
              body: eb.intl.string(ev.default["4ByPbd"]),
              children: r,
          })
        : (0, i.jsx)(mj, {
              title: eb.intl.string(ev.default.sRzJdk),
              body: eb.intl.formatToPlainString(ev.default.cbU1iq, { reason: l.reason }),
              children: (0, i.jsxs)(mU.e, {
                  size: "sm",
                  children: [
                      r,
                      (0, i.jsx)(f.$, {
                          size: "sm",
                          variant: "secondary",
                          text: eb.intl.string(ev.default.Vmb0K4),
                          onClick: l.onSkip,
                          disabled: n,
                      }),
                  ],
              }),
          });
}
var mK = n(346055),
    mH = n(284460),
    mW = n(531913),
    mV = n(429913),
    mX = n(527212),
    mY = n(718019),
    mZ = n(571259),
    mQ = n(915614),
    mJ = n(743987),
    m0 = n(946356),
    m1 = n(465829),
    m2 = n(224316),
    m3 = n(83013),
    m4 = n(766529),
    m5 = n(139730),
    m7 = n(562153),
    m8 = n(851767),
    m9 = n(917445),
    m6 = n(996988),
    he = n(474082);
function ht(e) {
    let { projectId: t, applicationId: n } = e,
        l = (0, c.bG)([le.default], () => le.default.getCurrentUser());
    return null == l ? null : (0, i.jsx)(hn, { user: l, projectId: t, applicationId: n });
}
function hn(e) {
    var t;
    let n,
        l,
        { user: r, projectId: s, applicationId: o } = e,
        u = (0, mX.Ay)(r.id),
        d = m7.Ay.useName(null, null, r),
        f =
            ((t = r.id),
            a.useEffect(() => {
                (0, m9.A)(t);
            }, [t]),
            (n = (0, c.yK)([m8.A], () => m8.A.getUserProfile(t)?.widgets ?? [], [t])),
            (l = (0, c.bG)([ts.Ay], () => (null == s ? null : (ts.Ay.getProject(s)?.application_id ?? null)), [s])),
            a.useMemo(
                () => [
                    new a9.R({ applicationId: o }),
                    ...n.filter((e) => !(e instanceof a9.R && (e.applicationId === o || e.applicationId === l))),
                ],
                [n, o, l],
            )),
        m = a.useMemo(() => f.flatMap((e) => (e instanceof a9.R ? [e.applicationId] : [])), [f]);
    (0, mV.A)(m);
    let h = (0, c.bG)([i6.A], () => i6.A.getApplication(o)),
        g = (0, mW.A)(r.id, o);
    return (0, i.jsx)("section", {
        className: he.dT,
        "aria-label": eb.intl.string(eb.t.Vs0dLi),
        children: (0, i.jsxs)(mK.M, {
            className: he.VH,
            children: [
                (0, i.jsx)(m0.A, {
                    className: he.ME,
                    user: r,
                    displayProfile: u,
                    themeType: m6.d.MODAL_V2,
                    children: (0, i.jsxs)("div", {
                        className: he.YB,
                        children: [
                            (0, i.jsxs)("div", {
                                className: he.Nr,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: he.wx,
                                        children: [
                                            (0, i.jsx)(mQ.A, { user: r, displayProfile: u, themeType: m6.d.MODAL_V2 }),
                                            (0, i.jsx)(mY.A, {
                                                user: r,
                                                displayProfile: u,
                                                avatarSize: ad._3.SIZE_120,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: he.zI,
                                        children: [
                                            (0, i.jsx)(m1.Ay, {
                                                user: r,
                                                displayName: d,
                                                displayNameSize: "lg",
                                                pronouns: u?.pronouns,
                                                trailing: (0, i.jsx)(mZ.A, {
                                                    displayProfile: u,
                                                    themeType: m6.d.MODAL_V2,
                                                }),
                                            }),
                                            (0, i.jsx)(m2.A, { currentUser: r, displayProfile: u, canEditInPlace: !1 }),
                                            (0, i.jsx)(m3.A, {
                                                heading: eb.intl.string(eb.t.a6XYD9),
                                                children: (0, i.jsx)(mJ.A, { userId: r.id }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsxs)("div", {
                                className: he.no,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: he.vR,
                                        children: [
                                            (0, i.jsx)(x.E, {
                                                variant: "body-md/semibold",
                                                color: "text-strong",
                                                className: he.xR,
                                                children: eb.intl.string(eb.t.laViwx),
                                            }),
                                            (0, i.jsx)(x.E, {
                                                variant: "body-md/medium",
                                                color: "text-subtle",
                                                children: eb.intl.string(eb.t.chq59f),
                                            }),
                                            (0, i.jsx)(x.E, {
                                                variant: "body-md/medium",
                                                color: "text-subtle",
                                                children: eb.intl.string(eb.t["7lZ31J"]),
                                            }),
                                        ],
                                    }),
                                    f.map((e) =>
                                        e instanceof a9.R
                                            ? (0, i.jsx)(
                                                  a6.A,
                                                  {
                                                      widget: e,
                                                      user: r,
                                                      allowEditing: !1,
                                                      disableInteraction: !0,
                                                      interactiveLinks: !0,
                                                  },
                                                  e.getUniqueKey(),
                                              )
                                            : (0, i.jsx)(
                                                  m4.u,
                                                  { widget: e, user: r, allowEditing: !1, disableInteraction: !0 },
                                                  e.getUniqueKey(),
                                              ),
                                    ),
                                ],
                            }),
                        ],
                    }),
                }),
                null != h && null != g.surfaceConfigs[i0.m.MINI_PROFILE]
                    ? (0, i.jsx)(m0.A, {
                          className: he.xL,
                          user: r,
                          displayProfile: u,
                          themeType: m6.d.POPOUT,
                          children: (0, i.jsx)("div", {
                              className: he.RJ,
                              children: (0, i.jsx)(m5.A, { application: h, rendererProps: g, renderText: mH.hO }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
var hl = n(652227);
function hr(e) {
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
            overlayWidgetSize: f = ez,
            projectId: m,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([rv.A], () => null != m && null != rv.A.getSetupStartedAt(m), [m]);
    return s?.type === "checking"
        ? (0, i.jsx)("div", { className: hl.qs, children: (0, i.jsx)(v.y, {}) })
        : s?.type === "bot_install"
          ? (0, i.jsx)("div", {
                className: hl.qs,
                children: (0, i.jsx)(mB, { onAddBot: s.onAddBot, loading: s.loading, agentPrompt: s.agentPrompt }),
            })
          : a
            ? null == t
                ? null
                : (0, i.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: hl.RG,
                      children: [
                          (0, eH.yf)(o, u)
                              ? g
                                  ? (0, i.jsx)(hi, { projectId: m, onResume: p })
                                  : (0, i.jsx)(mk, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === u && null != d
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, i.jsx)("div", {
                                        className: hl.qs,
                                        children: (0, i.jsx)(mj, {
                                            wide: !0,
                                            title: eb.intl.string(ev.default["08U+YO"]),
                                            body: eb.intl.string(ev.default.pKBfrc),
                                        }),
                                    })
                                  : (0, i.jsx)(ht, { projectId: m, applicationId: d })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, i.jsx)(mG, { applicationId: t, projectId: m, size: f, frameOverlay: h?.(tf.ZN) })
                              : null,
                          "bot" === u && null != n && null != m
                              ? (0, i.jsx)(mM, { projectId: m, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, i.jsx)("div", { className: hl.qs, children: (0, i.jsx)(v.y, {}) })
              : (0, i.jsx)(mt, { className: hl.qs });
}
function hi(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mc.Pu)(t),
        (0, i.jsx)("div", {
            className: hl.qs,
            children: (0, i.jsx)(mj, {
                wide: !0,
                title: eb.intl.string(ev.default.MMWEH2),
                body: eb.intl.string(ev.default.iKSu55),
                children:
                    null != n
                        ? (0, i.jsx)(f.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mu.PlayIcon,
                              text: eb.intl.string(ev.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var ha = n(175841),
    hs = n(156548),
    ho = n(750506),
    hu = n(867193),
    hc = n(539197),
    hd = n(977020);
function hf(e) {
    let { projectId: t } = e,
        n = (0, hc.X2)(t),
        l = (function (e) {
            let [t, n] = a.useState(null);
            return (
                a.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, hc.Ie)(e);
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
        className: hd.$Q,
        style: { left: r, top: s, width: o, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [hc.t$]: "",
        children: [
            n.presses > 0
                ? (0, i.jsxs)(
                      a.Fragment,
                      {
                          children: [
                              (0, i.jsx)("div", { className: u()(hd.hN, hd.vW), style: f(n.pressX, n.pressY) }),
                              (0, i.jsx)("div", { className: u()(hd.hN, hd.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, i.jsx)("svg", {
                className: u()(hd.UE, { [hd.SP]: n.shown, [hd.Vq]: n.pressed, [hd.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, i.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var hm = n(417760);
function hh(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([rM.A], () => null != e && rM.A.isThinking(e)),
                [n, l] = a.useState(!1),
                [r, i] = a.useState(t);
            (t !== r && (i(t), t || l(!1)),
                a.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = a.useCallback(() => {
                null != e && (l(!0), (0, ej.fu)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        o = (0, eC.CU)(n),
        d = "controlling" === t,
        m = eb.intl.string(d ? (o ? ev.default["VJW/5P"] : ev.default["+hD2Iz"]) : ev.default["h+i1r9"]),
        h =
            null != r
                ? (0, i.jsx)(f.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eb.intl.string(ev.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, i.jsxs)("div", {
              className: u()(hm.M0, hm.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  d
                      ? (0, i.jsx)(cI.i, { size: 12, color: "currentColor" })
                      : (0, i.jsx)(ha.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, i.jsx)(x.E, { variant: "body-sm/semibold", color: "none", className: hm.ID, children: m }),
                  d ? (0, i.jsx)(n_.A, { children: eb.intl.string(ev.default.fg1sor) }) : null,
                  d ? (0, i.jsx)("div", { className: hm.lC, children: h }) : null,
              ],
          })
        : (0, i.jsxs)("div", {
              className: hm.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, i.jsxs)("div", {
                      className: hm.sp,
                      children: [
                          (0, i.jsx)(ha.SparklesIcon, { size: "sm", color: "currentColor" }),
                          d ? (0, i.jsx)(cI.i, { size: 12, color: "currentColor" }) : null,
                          (0, i.jsxs)("div", {
                              className: hm.f4,
                              children: [
                                  (0, i.jsx)(x.E, {
                                      variant: "body-sm/semibold",
                                      color: "none",
                                      className: hm.w9,
                                      children: m,
                                  }),
                                  d
                                      ? (0, i.jsx)(x.E, {
                                            variant: "body-xs/medium",
                                            color: "none",
                                            className: hm.Rb,
                                            children: eb.intl.string(ev.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  d ? (0, i.jsx)("div", { className: hm.lC, children: h }) : null,
              ],
          });
}
function hg(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, eC.Zv)(null != n && n === l ? t : null),
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
        c = (0, e_.Rv)(),
        d = (0, hs.cR)(s);
    a.useEffect(() => {
        o && d && null != s && (0, hs.BL)(s);
    }, [o, d, s]);
    let [f, m] = a.useState(null),
        [h, g] = a.useState(null),
        [p, x] = a.useState(null),
        v = "idle" !== u;
    a.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tG(r());
            m((t) => (tU(t, e) ? t : e));
            let t = null == h ? null : tG(h);
            (x((e) => (tU(e, t) ? e : t)), null != h && (0, hu.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, hu.C)(0));
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
            let [e] = a.useContext(ho.uY),
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
                      className: hm.D,
                      "data-phase": u,
                      children: (0, i.jsx)("div", {
                          className: hm.QF,
                          children: (0, i.jsx)(hh, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, tP.createPortal)(
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(n_.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? eb.intl.string(ev.default.oWcemF)
                                : "handoff" === u
                                  ? eb.intl.string(ev.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            j
                ? (0, tP.createPortal)(
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: hm.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", {
                                  className: hm.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)(hf, { projectId: t }),
                          ],
                      }),
                      A,
                  )
                : null,
        ],
    });
}
var hp = n(739890),
    hx = n(853555),
    hv = n(944100),
    hb = n(327152),
    hj = n(187645);
let hy = { width: 1280, height: 720 },
    hk = new Map(),
    hw = !1;
function hA() {
    let e = new Map();
    for (let t of new Set([...rM.A.getActivityOrderedProjectIds(), ...(0, eC.T7)()])) {
        if (!(rM.A.isThinking(t) || (0, eC.wK)(t)) || eO.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ts.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, td.Rc)(t), (0, td.Th)(t)].find(tf.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...hk]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            hk.delete(t),
            n.unregisterLookup(),
            hv.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, hb.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        hk.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = hj.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hS(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (hk.set(e, l),
                    (l.unregisterLookup = (0, hx.Ng)(e, () => (0, mn.n5)(n, t))),
                    hv.A.registerFrameTarget(t, n, md.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of hk) hS(t.element, e, t.frameId);
}
function hS(e, t, n) {
    if (f8.A.getFrame(n)?.surface.type === eW.U.OVERLAY) {
        let l = eB(ts.Ay.getProject(t));
        (e.classList.remove(hj.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, hb.Pn)(n, l));
        return;
    }
    let l = tc.A.isBuilderPreviewMobile();
    e.classList.toggle(hj.L, !l);
    let r = l ? mp(tc.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, hb.Pn)(n, r ?? hy));
}
var hC = n(873727),
    hN = n(47671),
    hI = n(418842),
    hE = n(413599);
let h_ = 0;
var hM = n(487887);
let hR = null;
var hP = n(780338),
    hT = n(782603),
    hL = n(189714);
function h$(e) {
    let { projectId: t } = e,
        n = (0, hL.iI)(t),
        l = a.useRef(null),
        r = eb.intl.string(eb.t.h850Ss);
    return (0, i.jsx)(ty.Y, {
        targetElementRef: l,
        animation: ty.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(ci.W, {
                "data-menu-migrated": !0,
                navId: `conjure-project-notifications-${t}`,
                "aria-label": r,
                onClose: l,
                onSelect: l,
                children: (0, i.jsx)(ca.rX, {
                    children: (0, i.jsx)(ca.Dr, {
                        id: n ? "unmute" : "mute",
                        label: eb.intl.string(n ? ev.default.s9rCuH : ev.default["a+i/As"]),
                        action: () => (0, hL.$L)(t, !n),
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: a } = e,
                { isShown: s } = t;
            return (0, i.jsx)(tM.Ay.Icon, {
                ref: l,
                onClick: a,
                tooltip: s ? null : r,
                icon: n ? hP.BellSlashIcon : hT.BellIcon,
                "aria-label": r,
                "aria-haspopup": "menu",
                "aria-expanded": s,
                selected: s,
            });
        },
    });
}
var hD = n(541940);
function hq(e) {
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
        let n = (0, c.bG)([hE.A], () => (0, hC.x4)(hE.A.theme)),
            l = (0, c.bG)([hN.A], () => hN.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: i,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, c.cf)([ao.Ay], () => ({
                reducedMotion: ao.Ay.useReducedMotion,
                fontScale: (0, hC.U0)(),
                highContrast: ao.Ay.isHighContrastModeEnabled,
                forcedColors: ao.Ay.useForcedColors,
                underlineLinks: ao.Ay.alwaysShowLinkDecorations,
            })),
            d = eA.hH.useSetting(),
            f = (0, c.bG)([ol.A], () => ol.A.hidePersonalInformation),
            m = (0, hI.C)(),
            h = (0, c.bG)(
                [f8.A, tc.A],
                () =>
                    tc.A.isBuilderPreviewMobile() &&
                    f8.A.getFrame(t)?.applicationId === tc.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            g = a.useRef(!1),
            p = a.useRef(!1),
            x = a.useRef(null),
            v = a.useCallback(() => {
                let l = (0, mn.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let a = {
                    revision: ++h_,
                    baseTheme: n,
                    customTheme: (0, hC.Lq)(),
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
                (0, fB.W)(l, "set-env", a, {
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
                let n = (0, mn.n5)(e, t);
                null != n && n !== x.current && j();
            }),
            a.useEffect(() => {
                function n(n) {
                    n.target === (0, mn.n5)(e, t) && ((x.current = null), j());
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
            if (null != t) return (0, hx.Ng)(t, () => (0, mn.n5)(b, k));
        }, [t, b, k]));
    let w = a.useCallback(() => (0, mn.ow)(b, k), [b, k]),
        A = a.useCallback(() => (x ? (0, mn.ow)(b, k) : b), [x, b, k]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: u()(hD.Mh, o),
                children: [
                    d,
                    f,
                    v
                        ? null
                        : (0, i.jsx)(hg, {
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
                        className: hD.fm,
                        children: g,
                    }),
                ],
            }),
            p,
            v
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(fQ, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: w,
                              toggleRef: n,
                          }),
                          (0, i.jsx)(np, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: w }),
                      ],
                  }),
        ],
    });
}
function hO(e) {
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
    (0, hp.k)(n, N);
    let M = o.type === eW.U.MAIN || (0, td.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([tc.A], () => ({
            mobile: tc.A.isBuilderPreviewMobile(),
            landscape: tc.A.isBuilderPreviewLandscape(),
        }));
        a.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hM.aX.LANDSCAPE : hM.aX.PORTRAIT), (hR = e));
                else {
                    if (hR !== e) return;
                    ((l = hM.aX.UNHANDLED), (hR = null));
                }
                uj.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? r : null);
    let R = a.useRef(null),
        [P, T] = a.useState(0);
    (a.useEffect(() => {
        if (null == n) return;
        (0, nv.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, nv.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = a.useRef(0)),
        a.useLayoutEffect(() => {
            M && ((t.current = ++mo), (0, eq.HV)(r));
        }, [r, M]),
        a.useEffect(() => {
            if (!M) return;
            let e = t.current;
            return () => {
                e === mo && (0, eq.HV)(null);
            };
        }, [r, M]),
        a.useEffect(() => {
            null != n &&
                ((0, ej.ensureConnection)(n),
                hw ||
                    ((hw = !0),
                    rM.A.addChangeListener(hA),
                    ts.Ay.addChangeListener(hA),
                    f8.A.addChangeListener(hA),
                    tc.A.addChangeListener(hA),
                    eO.A.addChangeListener(hA),
                    (0, eC.W3)(hA),
                    hA()));
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
        $ = (0, tR.P)({ maxWidth: L, minWidth: 450 }),
        D = p || M;
    return (0, i.jsx)("div", {
        className: hD.cL,
        children: (0, i.jsx)("div", {
            ref: R,
            className: hD.LB,
            children: (0, i.jsx)(hq, {
                projectId: n,
                designFeedbackToggleRef: l,
                applicationId: r,
                previewApplicationId: s,
                surface: o,
                header: f,
                controlBar: m,
                previewPanelId: h,
                previewPanelLabelledBy: g,
                showsFrame: (0, eH.yf)(S, C),
                paused: E,
                mainClassName: null == f ? void 0 : u()(hD.ez, { [hD.zt]: p }),
                content: (0, i.jsx)(hr, {
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
                        (0, i.jsx)(ms, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
                }),
                sidebar:
                    null != n && D
                        ? (0, i.jsx)("div", {
                              className: p ? u()(hD.v7, { [hD.z4]: $, [hD.iu]: $ && null != m }) : hD.LL,
                              children: (0, i.jsx)(t_.A, {
                                  sidebarType: t_.X.CallChatSidebar,
                                  maxWidth: L,
                                  capturePointer: !0,
                                  children: (0, i.jsx)("div", {
                                      className: hD.cO,
                                      children: j
                                          ? (0, i.jsx)(fq, { projectId: n, onClose: y ?? (() => {}) }, n)
                                          : (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(f7.Ay, { projectId: n }),
                                                    (0, i.jsx)(hF, { projectId: n, onClose: x }),
                                                    (0, i.jsx)("div", {
                                                        className: hD.cb,
                                                        children: (0, i.jsx)(
                                                            c0,
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
function hF(e) {
    let { projectId: t, onClose: n } = e,
        l = eb.intl.string(ev.default.vLoFRs),
        r = eb.intl.string(ev.default.JD6Oit);
    return (0, i.jsx)(tM.Ay, {
        "aria-label": l,
        toolbar: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h$, { projectId: t }),
                (0, i.jsx)(tM.Ay.Icon, { icon: tE.PanelClosedIcon, tooltip: r, "aria-label": r, onClick: n }),
            ],
        }),
        children: (0, i.jsx)(tM.Ay.Title, { children: l }),
    });
}
var hz = n(473935),
    hG = n(785389),
    hU = n(889558),
    hB = n(860402);
let hK = new Set();
var hH = n(733791),
    hW = n(127139),
    hV = n(256616),
    hX = n(842615);
function hY(e) {
    (0, eg.P0)({ text: e, variant: "critical" });
}
function hZ(e) {
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
        h = (0, hX.A)(t, n),
        g = (0, hH.CU)(t),
        { pending: p, connect: x } = (function (e, t) {
            let [n, l] = a.useState(hK),
                r = a.useRef(hK),
                i = a.useCallback((e) => {
                    ((r.current = (0, hG.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: a.useCallback(
                    (n) => {
                        if (null == e) return;
                        let a = (0, hG.K9)(r.current, n.type);
                        null != a &&
                            ((r.current = a),
                            l(a),
                            (async function () {
                                let l = await (0, hB.JI)(e, n.type);
                                (i(n.type), "url" === l.type)
                                    ? (0, hU.h)({ href: l.url, trusted: !1 })
                                    : t(
                                          "setup" === (0, hG.rq)(l.error)
                                              ? eb.intl.string(ev.default["jCQ/1B"])
                                              : eb.intl.string(ev.default.POxkSh),
                                      );
                            })().catch(() => i(n.type)));
                    },
                    [t, e, i],
                ),
            };
        })(t, hY),
        v = (0, c.bG)([r_.A], () => r_.A.getDeclaredConnections(t), [t]),
        b = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                i = [];
            for (let { connection: e, offer: a } of (t &&
                i.push({
                    id: "preview-refresh",
                    label: eb.intl.string(ev.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                i.push(
                    "authorize" === a
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: eb.intl.formatToPlainString(ev.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: eb.intl.formatToPlainString(ev.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return i;
        })({ canRefresh: !1, refreshPending: !1, offers: a.useMemo(() => (0, hG.Xl)(v), [v]), connectPending: p }),
        j = a.useMemo(() => new Map(v.map((e) => [e.type, e])), [v]);
    return (0, i.jsxs)(ci.W, {
        "data-menu-migrated": !0,
        navId: `conjure-editor-actions-${t}`,
        "aria-label": eb.intl.string(eb.t.ogxXGq),
        onClose: m,
        onSelect: m,
        children: [
            (0, i.jsxs)(ca.rX, {
                children: [
                    (0, i.jsx)(ca.Dr, { id: "export", label: eb.intl.string(ev.default.WsEEP7), action: s }),
                    (0, i.jsx)(ca.Dr, { id: "history", label: eb.intl.string(ev.default["3hIVou"]), action: o }),
                ],
            }),
            uK.p5 || null != d
                ? (0, i.jsxs)(ca.rX, {
                      children: [
                          uK.p5
                              ? (0, i.jsx)(ca.Dr, {
                                    id: "copy-link",
                                    label: eb.intl.string(eb.t.WqhZss),
                                    icon: l4.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: l4.LinkIcon },
                                    action: () => (0, hW.V)(l, t),
                                })
                              : null,
                          uK.p5
                              ? (0, i.jsx)(ca.Dr, {
                                    id: "copy-project-id",
                                    label: eb.intl.string(ev.default["nm/zuU"]),
                                    icon: hz.IdIcon,
                                    leadingAccessory: { type: "icon", icon: hz.IdIcon },
                                    action: () => (0, hW.o)(t),
                                })
                              : null,
                          null != d
                              ? (0, i.jsx)(ca.sL, {
                                    id: "debug",
                                    label: eb.intl.string(ev.default.Mt5k9d),
                                    leftIcon: uB.BugIcon,
                                    leadingAccessory: { type: "icon", icon: uB.BugIcon },
                                    checked: f,
                                    action: d,
                                })
                              : null,
                      ],
                  })
                : null,
            null != u || b.length > 0
                ? (0, i.jsxs)(ca.rX, {
                      children: [
                          null != u
                              ? (0, i.jsx)(ca.Dr, {
                                    id: "connect-tool",
                                    label: eb.intl.string(ev.default.yOIql5),
                                    action: u,
                                })
                              : null,
                          b.map((e) =>
                              (0, i.jsx)(
                                  ca.Dr,
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
                ? (0, i.jsxs)(ca.rX, {
                      children: [
                          g
                              ? (0, i.jsx)(ca.Dr, {
                                    id: "unpublish",
                                    label: eb.intl.string(ev.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        let e = ts.Ay.getProject(t);
                                        null != e && (0, hV.A)({ project: e });
                                    },
                                })
                              : null,
                          (0, i.jsx)(ca.Dr, {
                              id: "delete",
                              label: eb.intl.string(eb.t.oyYWHE),
                              color: "danger",
                              action: h,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function hQ(e) {
    let t = a.useRef(null),
        n = eb.intl.string(eb.t["UKOtz+"]);
    return (0, i.jsx)(ty.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: ty.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)(hZ, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: a } = l;
            return (0, i.jsx)(j.A.Icon, {
                ref: t,
                icon: aM.MoreHorizontalIcon,
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
var hJ = n(663417),
    h0 = n(646270),
    h1 = n(31300),
    h2 = n(831453),
    h3 = n(872344),
    h4 = n(64656),
    h5 = n(766367),
    h7 = n(113494),
    h8 = n(86147),
    h9 = n(729475),
    h6 = n(12470),
    ge = n(811893),
    gt = n(715482),
    gn = n(869146),
    gl = n(475815);
function gr(e) {
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
            let n = (0, hs.cR)(e?.id ?? null),
                l = (0, eC.Zv)(t),
                r = (0, c.bG)(
                    [gn.A, f8.A],
                    () => null != e && gn.A.getWindowOpen(ll.MLl.ACTIVITY_POPOUT) && f8.A.getMainFrame()?.id === e.id,
                    [e],
                );
            if (!(0, tf.x1)(e) || r || l) return null;
            let i = (0, hs.fl)(e.id);
            return null != i && (0, gl.Ub)(i) ? { active: n, toggle: () => (0, hs.U8)(e.id) } : null;
        })(s, t),
        m = n ? mu.PlayIcon : h7.PauseIcon,
        h = f?.active === !0 ? h8.FullscreenExitIcon : h9.FullscreenEnterIcon,
        g = u ? h6.WindowReturnIcon : ge.WindowLaunchIcon,
        p = eb.intl.string(ev.default.WjdaFw);
    return (0, i.jsx)(ci.W, {
        "data-menu-migrated": !0,
        navId: `conjure-frame-actions-${t}`,
        "aria-label": eb.intl.string(eb.t.ogxXGq),
        onClose: d,
        onSelect: d,
        children: (0, i.jsxs)(ca.rX, {
            children: [
                (0, i.jsx)(ca.Dr, {
                    id: "toggle-pause",
                    icon: m,
                    leadingAccessory: { type: "icon", icon: m },
                    label: eb.intl.string(n ? ev.default.ZKd2Cw : ev.default.VHxerm),
                    subtext: a ? p : void 0,
                    disabled: l || a,
                    action: r,
                }),
                null != f
                    ? (0, i.jsx)(ca.Dr, {
                          id: "toggle-fullscreen",
                          icon: h,
                          leadingAccessory: { type: "icon", icon: h },
                          label: eb.intl.string(f.active ? eb.t.Z7MyNB : eb.t.OIDkcp),
                          action: f.toggle,
                      })
                    : null,
                null != o
                    ? (0, i.jsx)(ca.Dr, {
                          id: "toggle-popout",
                          icon: g,
                          leadingAccessory: { type: "icon", icon: g },
                          label: eb.intl.string(u ? eb.t["NKV/MO"] : eb.t["3Zypbv"]),
                          subtext: a && !u ? p : void 0,
                          disabled: a && !u,
                          action: o,
                      })
                    : null,
            ],
        }),
    });
}
function gi(e) {
    let t = a.useRef(null),
        n = eb.intl.string(eb.t["UKOtz+"]);
    return (0, i.jsx)(ty.Y, {
        targetElementRef: t,
        position: "bottom",
        align: "right",
        animation: ty.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)(gr, { ...e, onCloseMenu: n });
        },
        children: (e, l) => {
            let { onClick: r } = e,
                { isShown: a } = l;
            return (0, i.jsx)(tM.Ay.Icon, {
                ref: t,
                icon: gt.ChevronLargeDownIcon,
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
var ga = n(705609);
function gs(e) {
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
        M = (0, h4.A)(y?.id),
        { pending: R, refresh: P } = (0, h3.A)(u),
        T = em(t) && !c,
        L = null;
    if ("widget" === r) {
        if (null != u) {
            let e = eb.intl.string(ev.default["/nOi5n"]);
            L = (0, i.jsx)(tM.Ay.Icon, { icon: hJ.RefreshIcon, tooltip: e, "aria-label": e, disabled: R, onClick: P });
        }
    } else if ((0, tf.x1)(k)) {
        let e = eb.intl.string(ev.default.FZIHQN);
        L = (0, i.jsx)(tM.Ay.Icon, { icon: hJ.RefreshIcon, tooltip: e, "aria-label": e, disabled: w, onClick: A });
    }
    let $ = p(C),
        D = p(E),
        q = S ? h0.MobilePhoneIcon : h1.ScreenIcon;
    return (0, i.jsxs)("div", {
        className: ga.M,
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
                className: ga.o,
                children: [
                    v,
                    L,
                    "frame" === r
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(h5.A, { frame: y }),
                                  S
                                      ? (0, i.jsx)(tM.Ay.Icon, {
                                            icon: h2.RotateIcon,
                                            tooltip: D,
                                            "aria-label": D,
                                            selected: I,
                                            disabled: g,
                                            onClick: _,
                                        })
                                      : null,
                                  (0, i.jsx)(tM.Ay.Icon, {
                                      icon: q,
                                      tooltip: $,
                                      "aria-label": $,
                                      disabled: g,
                                      onClick: N,
                                  }),
                                  (0, i.jsx)(gi, {
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
var go = n(705427),
    gu = n(606128),
    gc = n(323140);
function gd(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: v, guildId: k } = e,
        w = a.useContext(eL.A),
        [A] = a.useState(() => (null != w ? eD.A.getProjectView(w) : null)),
        [S, C] = a.useState(A?.chatOpen ?? !0),
        [N, I] = a.useState(A?.debugOpen ?? !1);
    a.useEffect(() => {
        null != w && (0, e$.g7)(w, { chatOpen: S, debugOpen: N });
    }, [w, S, N]);
    let E = a.useCallback(
            (e) => {
                null != w && (0, e$.g7)(w, { previewSelection: e });
            },
            [w],
        ),
        _ = eS(),
        M = (0, eN.f)("ConjureSelectedProjectScreen"),
        R = a.useCallback(() => C(!0), []),
        P = a.useCallback(() => {
            (I(!1), C(!0));
        }, []),
        { restoreState: T, handleRestoreVersion: L } = (function (e, t) {
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
                                (0, eR.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (a &&
                                                    c() &&
                                                    (0, eg.P0)({
                                                        text: eb.intl.formatToPlainString(ev.default.Z4n6LX, {
                                                            title: (0, eM.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, eP.c)(u, r);
                                                null != e && (0, eg.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, eg.P0)({
                                                    text: eb.intl.string(ev.default["PSdo+w"]),
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
        })(s, P),
        D = s?.id ?? null,
        O = (0, eT.bP)(),
        F = O?.blocking === !0 && O.projectId === D,
        {
            integrationStatus: z,
            isPreviewApplicationLoading: U,
            checkingIntegration: B,
            previewReady: K,
            hasFrame: H,
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
                g = (0, eH.Qg)({
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
        W =
            (0, c.bG)([tx.A], () => (null == D ? void 0 : tx.A.getPublishStatus(D)?.previewAppChannels), [D]) ??
            z?.preview_app_channels,
        V = (0, c.bG)([tx.A], () => (null == D ? null : (tx.A.getPublishStatus(D)?.publishState ?? null)), [D]),
        X = (0, c.bG)(
            [ej.Ay],
            () => {
                if (null == D) return !1;
                let e = ej.Ay.getConnState(D);
                return "failed" === e || "closed" === e;
            },
            [D],
        ),
        {
            availability: Y,
            activeMode: Z,
            setMode: Q,
            frameSurface: J,
            frameSurfaceOptions: ee,
            setFrameSurface: et,
            appChannel: ea,
            setAppChannel: es,
            frameLaunchParams: ed,
            widgetApplicationId: ef,
        } = (0, eQ.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: H,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: z?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eF.q7.OVERLAY) === !0,
            previewAppChannels: W,
            initialSelection: A?.previewSelection,
            onSelectionChange: E,
        }),
        ey = eB(s);
    ((0, eK.x)(D, (e) => {
        Y.modes.includes(e) && Q(e);
    }),
        ew(D, () => {
            (C(!0), I(!0));
        }));
    let ek = Y.modes.includes("frame"),
        eA = (0, c.bG)([eO.A], () => eO.A.isPaused(D), [D]),
        ez = (function (e) {
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
                                          t === eW.U.APP_CHANNEL && n.length > 1
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
                g = eb.intl.string(h ? ev.default.tKGF0Q : ev.default.peqEOY),
                p = a.useCallback(() => (0, eq.GG)(!h), [h]),
                x = (0, c.bG)([tc.A], () => tc.A.isBuilderPreviewLandscape()),
                v = eb.intl.string(x ? ev.default.tunI2l : ev.default.DoNdjA),
                b = a.useCallback(() => (0, eq.Lw)(!x), [x]),
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
            modes: Y.modes,
            activeMode: Z,
            frameSurface: J,
            frameSurfaceOptions: ee,
            previewAppChannels: W,
            setMode: Q,
            setFrameSurface: et,
            setAppChannel: es,
        }),
        { previewSurface: eG, previewFrame: eU } = ez,
        eV = (0, b.A)(eU),
        eX = ek && !eA,
        eY = em(D),
        eZ = eV.isPoppedOut ? ev.default.pmkK8i : eA ? ev.default.Yet11p : null,
        eJ = null != eZ;
    function e0(e) {
        return null == eZ ? e : eb.intl.formatToPlainString(eZ, { label: e });
    }
    let e1 = a.useCallback(() => C(!1), []),
        {
            designFeedbackActive: e2,
            designFeedbackToggleRef: e3,
            agentDrivingPreview: e4,
            designFeedbackLabel: e5,
            handleToggleDesignFeedback: e7,
        } = (function (e, t, n) {
            let { active: l } = G(e);
            a.useEffect(() => {
                null != e && l && !t && q(e);
            }, [e, l, t]);
            let r = a.useRef(null),
                i = (0, eC.Zv)(e),
                s = eb.intl.string(i ? ev.default.Sme0T0 : l ? ev.default.vn5Rzu : ev.default["cl/Jyl"]),
                o = a.useCallback(() => {
                    if (null != e) {
                        if (l) return void q(e);
                        (n(), $(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: i,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(D, eX && (!eV.isPoppedOut || eY), P),
        [e8] = a.useState(() => y.isPlatformEmbedded && (0, tl.qM)());
    a.useEffect(() => {
        null != D && eY && !eX && eu(D);
    }, [D, eY, eX]);
    let e9 = a.useCallback(() => {
            null != D &&
                (P(),
                (function (e) {
                    let t = er(e);
                    if (null != t) {
                        t.active || ei(e, (e) => ({ ...e, active: !0, keptStill: null }));
                        return;
                    }
                    let { byProject: n } = en.getState();
                    en.setState({ byProject: { ...n, [e]: el } });
                })(D),
                ec(D, "marker"));
        }, [D, P]),
        te = a.useCallback(() => {
            null != D && eo(D);
        }, [D]),
        tt =
            eJ && !eY
                ? e0(eb.intl.string(ev.default["XWU+XF"]))
                : eb.intl.string(eY ? ev.default.tuQ5f3 : e4 ? ev.default.agwlrD : ev.default["XWU+XF"]),
        tn = eJ ? e0(eb.intl.string(ev.default["cl/Jyl"])) : e5,
        ty = a.useCallback(() => {
            I((e) => !e && (C(!0), !0));
        }, []),
        tk = a.useCallback(() => I(!1), []),
        tw = a.useCallback(() => {
            null != D && (0, eq._j)(D);
        }, [D]),
        tA = a.useCallback(() => {
            null != D && (eA ? (0, eq._j)(D) : (0, eq.di)(D, eU?.id));
        }, [D, eA, eU?.id]),
        tS = a.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eU?.id), (0, ej.Bn)(e), (0, tp.r)(t)), v());
        }, [s, eU?.id, v]),
        tC =
            ((t = (0, ex.z)(s)),
            (l = a.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, ep.vt)(e);
                    null != n
                        ? (0, eg.P0)({ text: n, variant: "critical" })
                        : (0, eh.A)({
                              title: eb.intl.formatToPlainString(ev.default["Gm+u1+"], { name: s.name }),
                              subtitle: eb.intl.string(ev.default.M7H3sJ),
                              confirmText: eb.intl.string(ev.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  R();
                                  try {
                                      await (0, ep.Hj)(t, e, eb.intl.string(ev.default.Owerd3));
                                  } catch {
                                      (0, eg.P0)({ text: eb.intl.string(ev.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, R],
            )),
            { onExport: t, onImport: (r = (0, ep.yN)(l)).open, importInput: r.input }),
        tE = a.useCallback(async () => {
            null != D && (await (0, tm.vL)(D, k));
        }, [k, D]),
        t_ = (function (e, t) {
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
                o = a.useCallback(() => {
                    null != e && null != i && (0, tg.xy)(e, i, "skipped");
                }, [i, e]);
            return a.useMemo(() => (null == n ? null : { prompt: n, adding: l, onAddBot: s, onSkip: o }), [n, l, s, o]);
        })(D, k),
        tM =
            null != t_
                ? {
                      type: "bot_install",
                      onAddBot: t_.onAddBot,
                      loading: t_.adding || U,
                      agentPrompt: { reason: t_.prompt.reason, onSkip: t_.onSkip },
                  }
                : (0, eH.aN)(Z, {
                        installScope: s?.install_scope ?? null,
                        previewReady: K,
                        integrationInstalled: z?.integration_installed ?? null,
                    })
                  ? { type: "bot_install", onAddBot: tE, loading: U }
                  : B && null == z
                    ? { type: "checking" }
                    : void 0,
        tR = (0, c.bG)([ts.Ay], () => null != D && ts.Ay.isProjectDeleting(D), [D]);
    a.useEffect(() => {
        ((null == s && o) || tR) && v();
    }, [s, o, tR, v]);
    let {
            publishOptions: tP,
            publish: tT,
            state: tL,
            variant: t$,
            text: tD,
            hint: tq,
            pendingChanges: tO,
        } = (0, tj.A)(D, k, B || U),
        tF = (0, tb.A)(D, tT, tP),
        tz = "frame" === Z && !eA && (0, tf.x1)(eU) && (eV.isPoppedOut || eV.canPopout),
        tG = a.useCallback(() => {
            if (null != s) {
                var e;
                ((e = {
                    projectId: s.id,
                    restoreDisabled: T?.status === "restoring",
                    onRestoreVersion: (e, t) => L(e, t, !0),
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
        }, [s, T?.status, L]);
    (0, eE.z)(D, tG);
    let tU = null == s ? void 0 : () => (0, tI.A)(s.id, { guildId: k, isPreview: !0, publishOptions: tP }),
        tB = Y.modes.includes("widget") && "unavailable-authorization-revoked" !== Y.profileState ? ef : null,
        tK =
            null == tT || null == s
                ? null
                : (0, i.jsx)("div", {
                      className: gc.As,
                      onMouseDown:
                          null == D || tT.disabled
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tv.dx)(D);
                                },
                      children: (0, i.jsx)(d.m, {
                          text: tq,
                          children: (0, i.jsx)(f.$, {
                              size: "sm",
                              variant: t$,
                              icon: "publishing" === tL ? gf : void 0,
                              text: tD,
                              onClick: () => tF("header"),
                          }),
                      }),
                  }),
        tH = eb.intl.string(ev.default.FzfmQ8),
        tW = eb.intl.string(ev.default.xjJAQm),
        tV = (0, i.jsx)(go.A, {
            title: s?.name ?? eb.intl.string(ev.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tU,
            draft: tO,
            actions:
                null == s
                    ? null
                    : (0, i.jsxs)("div", {
                          className: gc.FO,
                          children: [
                              (0, i.jsx)(j.A.Icon, {
                                  icon: m.SettingsIcon,
                                  tooltip: tH,
                                  "aria-label": tH,
                                  onClick: tU,
                              }),
                              (0, i.jsx)(hQ, {
                                  projectId: s.id,
                                  projectName: s.name,
                                  guildId: k,
                                  isOwner: (0, ts.PV)(s),
                                  onExport: tC.onExport,
                                  onHistory: tG,
                                  onConnectTool: M ? () => (0, eI.A)(s.id) : void 0,
                                  onToggleDebug: _ ? ty : void 0,
                                  debugOpen: N,
                              }),
                              (0, i.jsxs)("div", {
                                  className: gc.Cl,
                                  children: [(0, i.jsx)(tN, { project: s, guildId: k }), tK],
                              }),
                              S
                                  ? null
                                  : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("div", { className: gc.YJ, "aria-hidden": !0 }),
                                            (0, i.jsx)(j.A.Icon, {
                                                icon: h.PanelOpenIcon,
                                                tooltip: tW,
                                                "aria-label": tW,
                                                onClick: R,
                                            }),
                                        ],
                                    }),
                          ],
                      }),
        }),
        tX = a.useId(),
        tY = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return null == e
                ? null
                : "frame" !== e
                  ? { mode: e }
                  : null == n
                    ? { mode: e, surface: t }
                    : { mode: e, surface: t, appChannel: n };
        })(Z, J, ea),
        tZ = ek
            ? e8
                ? (0, i.jsx)(j.A.Icon, {
                      icon: g.ExperimentalDirectSelectIcon,
                      iconClassName: gc.D8,
                      tooltip: tt,
                      "aria-label": tt,
                      selected: eY,
                      disabled: (eJ || e4) && !eY,
                      onClick: eY ? te : e9,
                  })
                : (0, i.jsx)(j.A.Icon, {
                      ref: e3,
                      icon: g.ExperimentalDirectSelectIcon,
                      iconClassName: gc.D8,
                      tooltip: tn,
                      "aria-label": tn,
                      selected: e2,
                      disabled: eJ || e4,
                      onClick: e7,
                  })
            : null,
        tQ =
            null != s && (null == V ? X : "nothing_built" !== V)
                ? (0, i.jsx)(gs, {
                      editToggle: tZ,
                      projectId: s.id,
                      projectName: s.name,
                      toolbar: ez,
                      activeMode: Z,
                      activeTarget: tY,
                      frameTarget: { mode: "frame", surface: J, ...(null == ea ? {} : { appChannel: ea }) },
                      onCloseApp: tS,
                      widgetRefreshApplicationId: tB,
                      previewPaused: eA,
                      onTogglePreviewPaused: tA,
                      onTogglePopout: tz ? (eV.isPoppedOut ? eV.popIn : eV.popOut) : void 0,
                      poppedOut: eV.isPoppedOut,
                      agentDrivingPreview: e4,
                      previewControlsBlocked: eJ,
                      blockedPreviewControlLabel: e0,
                      previewPanelId: tX,
                  })
                : null;
    return (0, i.jsxs)("div", {
        className: u()(gc.nj, gu.T),
        children: [
            tC.importInput,
            (0, i.jsx)("main", {
                className: gc.JX,
                children: F
                    ? (0, i.jsx)("div", {
                          className: gc.j5,
                          children: (0, i.jsx)("div", {
                              className: gc.sD,
                              children: (0, i.jsx)(p.D, {
                                  variant: "heading-lg/semibold",
                                  children: eb.intl.string(ev.default.i7PaZ5),
                              }),
                          }),
                      })
                    : null == s
                      ? (0, i.jsxs)("div", {
                            className: gc.j5,
                            children: [
                                tV,
                                (0, i.jsxs)("div", {
                                    className: gc.sD,
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-lg/semibold",
                                            children: eb.intl.string(ev.default.G1WwgK),
                                        }),
                                        (0, i.jsx)(x.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: eb.intl.string(ev.default.fINulo),
                                        }),
                                        (0, i.jsx)(f.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: eb.intl.string(ev.default["WFJ/vb"]),
                                            onClick: () => (0, ti.listProjects)(k),
                                        }),
                                    ],
                                }),
                            ],
                        })
                      : (0, i.jsx)(tm.bI.Provider, {
                            value: tP,
                            children: (0, i.jsx)(
                                hO,
                                {
                                    projectId: s.id,
                                    designFeedbackToggleRef: e3,
                                    applicationId: s.preview_application_id,
                                    previewApplicationId: s.preview_application_id,
                                    surface: eG,
                                    frameLaunchParams: ed,
                                    header: tV,
                                    controlBar: tQ,
                                    previewPanelId: null == tQ ? void 0 : tX,
                                    previewPanelLabelledBy: null == tQ || null == tY ? void 0 : e6(tX, tY),
                                    chatOpen: S,
                                    onCloseChat: e1,
                                    debugOpen: _ && N,
                                    onCloseDebug: tk,
                                    onRestoreVersion: L,
                                    onImportProject: (0, ts.PV)(s) ? tC.onImport : void 0,
                                    restoreState: T,
                                    previewReady: K,
                                    previewGate: tM,
                                    availability: Y,
                                    activeMode: Z,
                                    widgetApplicationId: ef,
                                    overlayWidgetSize: ey,
                                    previewPaused: eA,
                                    onResumePreview: tw,
                                },
                                s.id,
                            ),
                        }),
            }),
        ],
    });
}
function gf() {
    return (0, i.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: gc.Hv, itemClassName: gc.C5 });
}
