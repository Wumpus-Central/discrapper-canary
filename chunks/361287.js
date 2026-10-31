(n.r(t), n.d(t, { default: () => hS }));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    u = n(806163),
    o = n(834730),
    c = n(289873),
    d = n(976860),
    f = n(17928),
    m = n(260498),
    h = n(385081),
    g = n(503698),
    p = n.n(g),
    x = n(821609),
    v = n(478016),
    j = n(604525),
    b = n(663417),
    y = n(70688),
    k = n(297264),
    w = n(534890),
    S = n(646270),
    N = n(31300),
    A = n(831453),
    C = n(646973),
    I = n(742589),
    E = n(723702),
    M = n(839214);
n(321073);
let _ = Object.freeze({ x: 0.5, y: 0.5 });
function T(e) {
    return "" !== e.trim();
}
function P(e) {
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
function R(e) {
    let { kind: t, name: n } = P(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function L(e) {
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
let $ = "[conjure:selected] ",
    q = " \u2014 ";
function D(e) {
    if (!e.startsWith($)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice($.length),
        a = r.indexOf(q),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let F = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    O = new Map(),
    z = new Set();
function G(e) {
    return O.get(e) ?? F;
}
function U(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? O.set(e, t) : O.delete(e), [...z]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function B(e) {
    let t = G(e);
    t.active || U(e, { ...t, active: !0 });
}
function K(e) {
    let t = G(e);
    t.active && U(e, { ...t, active: !1 });
}
function H(e) {
    O.has(e) && U(e, F);
}
function V(e, t) {
    let n = G(e);
    n.active && U(e, { ...n, context: t });
}
function W(e, t) {
    return null != t && e.authorId === t;
}
function X(e) {
    return (
        z.add(e),
        () => {
            z.delete(e);
        }
    );
}
function Z(e) {
    let t = i.useCallback(() => (null == e ? F : G(e)), [e]);
    return i.useSyncExternalStore(X, t, t);
}
(n(134528), n(947204));
let Y = { past: [], present: [], future: [] };
function Q(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function J(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function ee(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => J(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: J(e.from, t, n), to: J(e.to, t, n) };
        case "text":
            return { ...e, at: J(e.at, t, n) };
    }
}
function et(e) {
    return e.some((e) => "erase" !== e.kind);
}
function en(e, t) {
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
function el(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function er(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function ea(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => er(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = er(e.from, t),
                l = er(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = er(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function ei(e) {
    return et(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let es = [3, 6, 12],
    eu = [10, 20, 40],
    eo = (0, M.D)(() => ({ byProject: {} })),
    ec = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: Y,
        sketchDismissedFor: null,
    };
function ed(e) {
    return eo.getState().byProject[e] ?? null;
}
function ef(e, t) {
    let n = ed(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = eo.getState();
    eo.setState({ byProject: { ...r, [e]: l } });
}
function em(e) {
    if (null == ed(e)) return;
    let { [e]: t, ...n } = eo.getState().byProject;
    (eo.setState({ byProject: n }), H(e));
}
function eh(e, t) {
    null != ed(e) &&
        (ef(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? B(e) : K(e));
}
function eg(e, t) {
    ef(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return Q(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return Q(
                        e,
                        e.present.map((e) => (e.id === t.id ? ee(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : Q(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : Q(e, []);
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
function ep(e) {
    return eo.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var ex = n(39416);
function ev(e) {
    let { enabled: t, onLongPress: n, children: l } = e,
        [r] = i.useState(() =>
            (function () {
                let e = null,
                    t = !1;
                function n() {
                    (null != e && clearTimeout(e), (e = null));
                }
                function l() {
                    (n(), (t = !1));
                }
                return {
                    press: (n) => {
                        (l(),
                            (e = setTimeout(() => {
                                ((e = null), (t = !0), n());
                            }, 500)));
                    },
                    release: () => {
                        (n(), t && (e = setTimeout(l, 0)));
                    },
                    cancel: l,
                    takeClick: () => {
                        let e = !t;
                        return ((t = !1), e);
                    },
                };
            })(),
        );
    return (
        i.useEffect(() => r.cancel, [r]),
        (0, a.jsx)("span", {
            className: ex.i5,
            onPointerDown: (e) => {
                t && 0 === e.button ? r.press(n) : r.cancel();
            },
            onPointerUp: r.release,
            onPointerLeave: (e) => {
                0 !== e.buttons && r.cancel();
            },
            onPointerCancel: r.cancel,
            onClickCapture: (e) => {
                r.takeClick() || (e.preventDefault(), e.stopPropagation());
            },
            children: l,
        })
    );
}
var ej = n(314116),
    eb = n(858899),
    ey = n(949757),
    ek = n(800202),
    ew = n(809526),
    eS = n(105292),
    eN = n(766367);
let eA = new Set(),
    eC = null;
function eI(e, t) {
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
                eA.add(t),
                () => {
                    eA.delete(t);
                }
            );
        }, [e]));
}
var eE = n(253932);
function eM() {
    return eE.Q_.useSetting() || !1;
}
var e_ = n(573083);
let eT = (0, n(945810).mj)({
    name: "2026-10-conjure-mcp-ui",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
});
var eP = n(192308),
    eR = n(128761),
    eL = n(12177),
    e$ = n(967008);
let eq = i.createContext(null);
var eD = n(398773),
    eF = n(735769),
    eO = n(513845),
    ez = n(802905),
    eG = n(951178);
let eU = { width: 320, height: 240 };
function eB(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eU;
}
function eK(e) {
    return eB(e?.preview_overlay_widget ?? null);
}
var eH = n(855859),
    eV = n(238490),
    eW = n(991690),
    eX = n(696645);
function eZ(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function eY(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, eX.X)(e.surface)
                : eS.intl.formatToPlainString(ew.default["6xVl+N"], {
                      surface: (0, eX.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return eS.intl.string(ew.default.y5GiL1);
        case "overlay":
            return eS.intl.string(ew.default["2940LX"]);
        case "bot":
            return eS.intl.string(ew.default.tjpaGN);
    }
}
var eQ = n(939398),
    eJ = n(86147),
    e0 = n(729475),
    e1 = n(91242),
    e2 = n(156548),
    e3 = n(869146),
    e4 = n(475815),
    e7 = n(652215),
    e5 = n(165610);
function e6(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, e2.cR)(t?.id ?? null),
        r = (0, e_.Zv)(n),
        i = (0, f.bG)(
            [e3.A, e1.A],
            () => null != t && e3.A.getWindowOpen(e7.MLl.ACTIVITY_POPOUT) && e1.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, e5.x1)(t) || i || r) return null;
    let s = (0, e2.fl)(t.id);
    if (null == s || !(0, e4.Ub)(s)) return null;
    let u = eS.intl.string(l ? eS.t.Z7MyNB : eS.t.OIDkcp);
    return (0, a.jsx)(I.A.Icon, {
        tooltip: u,
        icon: l ? eJ.z : e0.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, e2.U8)(t.id),
    });
}
var e8 = n(265872),
    e9 = n(980707),
    te = n(477782),
    tt = n(559106),
    tn = n(847374),
    tl = n(704745);
function tr(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let c = i.useCallback(() => s(!1), []),
        d = i.useCallback(() => s((e) => !e), []),
        f = i.useRef(null);
    if (!u) return null;
    let m = eS.intl.string(ew.default.I2ucou);
    return (0, a.jsx)(e8.Y, {
        targetElementRef: f,
        shouldShow: r,
        onRequestClose: c,
        position: "bottom",
        align: "right",
        animation: e8.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(e9.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(te.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = eZ(e);
                        return (0, a.jsx)(
                            te.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: eY(e),
                                checked: t === eZ(n),
                                action: () => {
                                    (l(e), c());
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
            return (0, a.jsx)(tt.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: f,
                    type: "button",
                    className: tl.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: d,
                    children: [
                        (0, a.jsx)(o.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eS.intl.string(ew.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(o.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: eY(n),
                        }),
                        (0, a.jsx)(tn.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var ta = n(324641),
    ti = n(627363),
    ts = n(371169),
    tu = n(153207),
    to = n(625180),
    tc = n(672929),
    td = n(111534),
    tf = n(754027),
    tm = n(193072),
    th = n(457827),
    tg = n(322227),
    tp = n(722701),
    tx = n(962998),
    tv = n(79733);
function tj(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
function tb(e, t) {
    return null != t
        ? t
        : null == e
          ? eS.intl.string(ew.default["120EFN"])
          : tj(e) && !e.publishing
            ? eS.intl.string(ew.default.kAfbEN)
            : e.label;
}
var ty = n(373540),
    tk = n(189213),
    tw = n(144228);
function tS(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, u] = i.useState(t.selected_destination_id),
        o = eS.intl.string(ew.default.lJrOGW);
    return (0, a.jsx)(tk.a, {
        transitionState: l,
        onClose: r,
        title: o,
        size: "sm",
        actions: [
            { text: eS.intl.string(ew.default.y83r6D), variant: "secondary", onClick: r },
            {
                text: eS.intl.string(ew.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(s), r());
                },
            },
        ],
        children: (0, a.jsx)(tw.z, {
            label: o,
            options: t.destinations.map((e) => {
                let { id: t, label: n } = e;
                return { name: n, value: t };
            }),
            value: s,
            onChange: u,
        }),
    });
}
let tN = {
    showPublishBlocked: ty.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, eP.openModal)(
                (t) =>
                    (0, a.jsx)(tS, {
                        ...t,
                        options: e,
                        onDone: (e) => {
                            n = e;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        });
    },
    showError: (e) => (0, eb.P0)({ text: e, variant: "critical" }),
};
var tA = n(811587);
let tC = "conjure-publish";
function tI(e) {
    let t = (0, eP.getInteractingModalContext)(),
        l = { current: !1 };
    (0, eP.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("880475"), n.e("801342"), n.e("924150")]).then(
                n.bind(n, 372501),
            );
            return (n) => (0, a.jsx)(t, { ...n, ...e, savingRef: l });
        },
        {
            modalKey: tC,
            contextKey: t,
            onCloseRequest: () => {
                l.current || (0, eP.closeModal)(tC, t);
            },
        },
    );
}
function tE(e, t, n) {
    let l, r;
    return (
        (l = i.useContext(tv.bI)),
        (r = n ?? l),
        i.useCallback(
            (n) => {
                if (null == e || null == t || null == r || t.disabled) return;
                let l = t.status?.publishState;
                t.awaitingApproval || (null != l && (0, tA.lE)(l))
                    ? t.run(n)
                    : tI({ projectId: e, publishOptions: r, entryPoint: n });
            },
            [e, t, r, tI],
        )
    );
}
var tM = n(95264),
    t_ = n(616334),
    tT = n(789645),
    tP = n(812771),
    tR = n(58736);
n(743898);
var tL = n(333007),
    t$ = n(621466),
    tq = n(775121),
    tD = n(989145),
    tF = n(866665),
    tO = n(81369),
    tz = n(826745),
    tG = n(34595),
    tU = n(470779);
function tB(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
            onSubmit: o,
            onDismiss: c,
            canSubmit: d,
            closing: f,
            onUploadFile: m,
            anchor: h = "chip",
            allowAttachments: g = !0,
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
        } = (0, tG.FM)({ projectId: t, surface: "design", onUploadFile: m }),
        N = i.useRef(null),
        A = (d || j.length > 0) && w && !f,
        C = i.useCallback(() => {
            if (!A) return;
            let e = S();
            o(e.length > 0 ? e : void 0);
        }, [A, S, o]),
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
    let M = i.useRef(null),
        [_, T] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = M.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => T({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let P = _?.height ?? 44,
        R = l.left + 8,
        L = l.top + 8,
        $ = Math.max(n.x, R),
        q = Math.min(Math.max("point" === h ? n.y : n.y + 32 + 4, L), Math.max(L, l.top + l.height - P - 8));
    return (0, a.jsxs)("div", {
        ref: M,
        className: p()(tU.M0, { [tU.ho]: I && !f, [tU.ET]: f }),
        style: { left: $, top: q },
        "data-testid": "conjure-design-compose-bar",
        children: [
            g
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: N,
                              type: "file",
                              multiple: !0,
                              className: tU.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(tF.m, {
                              position: "bottom",
                              text: eS.intl.string(ew.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: tU.tY,
                                  onClick: () => N.current?.click(),
                                  "aria-label": eS.intl.string(ew.default.lgvqSB),
                                  children: (0, a.jsx)(tO.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tU.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(tz.y, {
                autoFocus: !0,
                rows: 1,
                className: tU.hF,
                value: s,
                placeholder: x ?? ("" === r ? eS.intl.string(ew.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? eS.intl.string(ew.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: f || !g ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), C());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: tU.ZO,
                      children: j.map((e) => (0, a.jsx)(tG.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function tK(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tH(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tV(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? tK(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tK(e());
                l((e) => (tH(e, t) ? e : t));
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
var tW = n(876798),
    tX = n(408278),
    tZ = n(48507),
    tY = n(193885),
    tQ = n(744898),
    tJ = n(803656),
    t0 = n(241326),
    t1 = n(972213),
    t2 = n(661531);
function t3(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function t4(e, t, n) {
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
let t7 = t4("red", t3(t2.A.unsafe_rawColors.RED_400), () => eS.intl.string(ew.default.tvXfjt)),
    t5 = [
        t7,
        t4("yellow", t3(t2.A.unsafe_rawColors.YELLOW_300), () => eS.intl.string(ew.default.FYuaJ1)),
        t4("green", t3(t2.A.unsafe_rawColors.GREEN_360), () => eS.intl.string(ew.default["Vv+paS"])),
        t4("blue", t3(t2.A.unsafe_rawColors.BLUE_345), () => eS.intl.string(ew.default.k9b1QJ)),
        t4("white", t3(t2.A.unsafe_rawColors.WHITE), () => eS.intl.string(ew.default["1sOXwH"])),
    ];
function t6(e) {
    return t5.find((t) => t.id === e) ?? t7;
}
function t8(e) {
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
function t9(e) {
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
function ne(e) {
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
function nt(e) {
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
let nn = es.map((e) => nt(Math.min(16, e + 3))),
    nl = eu.map((e) => nt(Math.min(16, e / 2.5))),
    nr = [ew.default.jZtZUr, ew.default.cTQdD0, ew.default.J3ucEg],
    na = {
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
            label: () => eS.intl.string(ew.default.oIZQbm),
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
            label: () => eS.intl.string(ew.default.ARNVr7),
        },
    };
function ni(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(tF.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: ex.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tW.k, {
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
function ns(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(tF.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tX.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function nu(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, u] = i.useState(!1),
        o = i.useCallback(() => u(!1), []),
        c = i.useCallback(() => u((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: ex.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: ex.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(o),
                  })
                : null,
        ],
    });
}
function no(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: f } = n,
        m = t6(n.colorId),
        h = na[o],
        g = eS.intl.string(ew.default.hUm825),
        p = eS.intl.string(ew.default.n5IA3a),
        x = eS.intl.string(ew.default.r5dX6t),
        v = eS.intl.string(ew.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: ex.t$,
        children: [
            (0, a.jsx)("div", {
                className: ex.NT,
                children: (0, a.jsx)(ni, {
                    icon: t9,
                    label: eS.intl.string(ew.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => eh(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ex.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": eS.intl.string(ew.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(ni, {
                        icon: t8,
                        label: eS.intl.string(ew.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => eh(t, "move"),
                    }),
                    (0, a.jsx)(ni, {
                        icon: tZ.x,
                        label: eS.intl.string(ew.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => eh(t, "text"),
                    }),
                    (0, a.jsx)(nu, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(ni, {
                                icon: tY.V,
                                label: g,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (eh(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            nn.map((n, l) =>
                                (0, a.jsx)(
                                    ni,
                                    {
                                        icon: n,
                                        label: eS.intl.string(nr[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            (ef(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), K(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(nu, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(ni, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (eh(t, o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(na).map((n) =>
                                (0, a.jsx)(
                                    ni,
                                    {
                                        icon: na[n].icon,
                                        label: na[n].label(),
                                        pressed: u === n,
                                        onClick: () => {
                                            (eh(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(nu, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(ni, {
                                icon: ne,
                                label: p,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (eh(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            nl.map((n, l) =>
                                (0, a.jsx)(
                                    ni,
                                    {
                                        icon: n,
                                        label: eS.intl.string(nr[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            (ef(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), K(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(nu, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(ns, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            t5.map((n) =>
                                (0, a.jsx)(
                                    ni,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === m.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                ef(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: ex.Gz, role: "separator" }),
                    (0, a.jsx)(ns, {
                        icon: tQ.e,
                        label: eS.intl.string((0, E.isMac)() ? ew.default["j/XmBQ"] : ew.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(ns, {
                        icon: tJ.U,
                        label: eS.intl.string((0, E.isMac)() ? ew.default.C7jhpn : ew.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(ns, {
                        icon: t0.TrashIcon,
                        label: eS.intl.string(ew.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: ex.Gz, role: "separator" }),
                    (0, a.jsx)(ns, { icon: t1.XLargeIcon, label: eS.intl.string(ew.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
(n(323874), n(14289), n(35956));
let nc = t2.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
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
async function nm(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = nf(e),
            r = nf(e);
        if (null == l || null == r) return null;
        return (nd(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let nh = new Map(),
    ng = new Map(),
    np = (0, M.D)(() => ({ byMessageKey: {} }));
function nx(e, t) {
    let { [e]: n, ...l } = np.getState().byMessageKey;
    np.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function nv(e, t) {
    null == t ? nh.delete(e) : nh.set(e, t);
}
function nj(e) {
    return nh.get(e)?.() ?? Promise.resolve(null);
}
let nb = { dx: 0, dy: 0 },
    ny = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    nk = 1;
function nw(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        u = ep(s),
        { active: o } = Z(s),
        c = (0, eP.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => em(s);
    }, [s]);
    let d = u?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !o && B(s);
    }, [s, d, o]),
    null == s || null == u || c)
        ? null
        : (0, a.jsx)(nS, { projectId: s, state: u, resolveIframe: r });
}
function nS(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = tV(l),
        [s, u] = i.useState(null),
        [o, c] = i.useState(!1),
        [d, f] = i.useState(0),
        [m, h] = i.useState(null),
        [g, p] = i.useState(nb),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        S = i.useRef(0),
        { tool: N, history: A } = n,
        C = t6(n.colorId),
        I = "pick" !== N,
        E = "marker" === n.tool ? es[n.markerSize] : "eraser" === n.tool ? eu[n.eraserSize] : null,
        M = "move" === N ? (A.present.find((e) => e.id === m) ?? null) : null,
        _ = null != r;
    (i.useLayoutEffect(() => {
        f(v.current?.offsetWidth ?? 0);
    }, [_]),
        i.useLayoutEffect(() => {
            y.current = s;
        }, [s]));
    let T = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, ta.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, tL.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, ta.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (nv(t, T), () => nv(t, null)), [t, T]);
    let P = i.useCallback(
        (e) => {
            ((w.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === S.current &&
                    (S.current = requestAnimationFrame(() => {
                        S.current = 0;
                        let e = k.current,
                            t = w.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(S.current), []);
    let R = i.useCallback(() => {
        let e = x.current;
        if (null == e || null == r) return;
        let t = window.devicePixelRatio,
            n = Math.round(r.width * t),
            l = Math.round(r.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let a = e.getContext("2d");
        if (null == a) return;
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, l), a.setTransform(t, 0, 0, t, 0, 0));
        let i = b.current,
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? ee(e, g.dx, g.dy) : e)),
            u = j.current;
        nd(a, null == u ? s : [...s, u], { width: r.width, height: r.height });
    }, [r, A.present, g]);
    i.useLayoutEffect(R, [R]);
    let L = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        $ = i.useCallback(() => {
            let e = y.current;
            if (null == e || null == r) return;
            y.current = null;
            let n = {
                id: `mark-${nk++}`,
                kind: "text",
                color: C.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (en(n, r) && eg(t, { type: "commit", shape: n }), u(null));
        }, [t, C, r]),
        q = i.useCallback(() => {
            ((y.current = null), u(null));
        }, []),
        D = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void $();
                let t = L(e);
                switch (N) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == M ? null : ea(M, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? M
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = er(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => er(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (el(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = er(e.from, n),
                                                                  r = er(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => el(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = er(e.from, n),
                                                                  r = er(e.to, n),
                                                                  a = Math.abs(r.x - t.x) / 2,
                                                                  i = Math.abs(r.y - t.y) / 2;
                                                              if (0 === a || 0 === i) return !1;
                                                              let s = (t.x + r.x) / 2,
                                                                  u = (t.y + r.y) / 2;
                                                              return (
                                                                  Math.abs(
                                                                      Math.hypot((l.x - s) / a, (l.y - u) / i) - 1,
                                                                  ) <=
                                                                  (6 + (e.width * n.width) / 2) / Math.min(a, i)
                                                              );
                                                          }
                                                          case "text": {
                                                              let t = ea(e, n);
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
                                      })(A.present, t, r);
                        if ((h(a?.id ?? null), null == a)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (b.current = { id: a.id, origin: t }));
                        return;
                    }
                    case "text":
                        u({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!et(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nk++}`,
                                kind: "erase",
                                width: eu[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nk++}`,
                                kind: "marker",
                                color: C.value,
                                width: es[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nk++}`,
                                kind: N,
                                color: C.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                R();
            },
            [r, N, C, M, A.present, n.markerSize, n.eraserSize, L, $, R],
        ),
        F = i.useCallback(
            (e) => {
                P(e);
                let t = L(e),
                    n = b.current;
                if (null != n) return void p({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = j.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (j.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (j.current = { ...l, to: t }),
                    R());
            },
            [L, P, R],
        ),
        O = i.useCallback(() => {
            x.current?.removeAttribute("data-dragging");
            let e = b.current;
            if (null != e) {
                ((b.current = null), p(nb), eg(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && en(n, r) ? eg(t, { type: "commit", shape: n }) : R());
        }, [t, r, g, R]),
        z = i.useCallback(() => em(t), [t]),
        G = i.useCallback(() => eg(t, { type: "undo" }), [t]),
        U = i.useCallback(() => eg(t, { type: "redo" }), [t]),
        B = i.useCallback(() => eg(t, { type: "clear" }), [t]),
        K = i.useRef({ tool: N, selected: M, exit: z, undo: G, redo: U });
    if (
        (i.useLayoutEffect(() => {
            K.current = { tool: N, selected: M, exit: z, undo: G, redo: U };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, t$.Cw)((0, t$.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != y.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = K.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? i() : a());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? h(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), eg(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = ny[s];
                null != u && (e.preventDefault(), eh(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (I) return (tq.A.disable(), () => tq.A.enable());
        }, [I]),
        null == r)
    )
        return null;
    let H = Math.max(8, r.left - d - 8),
        V = null == M ? null : ea(null == b.current ? M : ee(M, g.dx, g.dy), r);
    return (0, tL.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: ex.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: ex.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: ex.Ji,
                            "data-tool": N,
                            "data-interactive": I && !o ? "" : void 0,
                            "aria-label": eS.intl.string(ew.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: D,
                            onPointerEnter: P,
                            onPointerLeave: () => P(null),
                            onPointerMove: F,
                            onPointerUp: O,
                            onPointerCancel: O,
                        }),
                        null == E || o
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: k,
                                  className: ex.V$,
                                  "data-tool": N,
                                  "data-color": C.id,
                                  style: { width: E, height: E },
                                  "aria-hidden": !0,
                              }),
                        null == V
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: ex.r1,
                                  style: { left: V.x, top: V.y, width: V.width, height: V.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: ex.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: ex.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: ex.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: ex.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(tB, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: eS.intl.string(ew.default["8gX1lw"]),
                          label: eS.intl.string(ew.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: $,
                          onUploadFile: (e) => (0, tD.vX)(t, e),
                          onDismiss: q,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: ex.ej,
                    style: { left: H, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(no, { projectId: t, state: n, onExit: z, onUndo: G, onRedo: U, onClear: B }),
                }),
            ],
        }),
        document.body,
    );
}
var nN = n(308081),
    nA = n(689175),
    nC = n(683071),
    nI = n(65593),
    nE = n(218394),
    nM = n(115982),
    n_ = n(886540);
function nT(e) {
    return !(0, n_.BL)(e) && !0 !== e.stopRequested;
}
var nP = n(104317),
    nR = n(939249),
    nL = n(643278),
    n$ = n(566424),
    nq = n(683063),
    nD = n(140735),
    nF = n(320448),
    nO = n(138212);
function nz(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: p()(nO.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: p()(nO.wx, null != n && nO.o5, i),
                children: [
                    (0, a.jsx)(o.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nG = n(148590);
function nU(e) {
    let { children: t } = e;
    return (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nB(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: u,
            beforeBody: o,
            children: c,
            ...d
        } = e,
        f = i.useId(),
        [m, h] = i.useState(!l),
        [g, x] = i.useState(l);
    g !== l && (x(l), h(!l));
    let v = i.useCallback(() => h((e) => !e), []),
        j = m ? tn.a : nF._,
        b = null != n || l;
    return (0, a.jsxs)(nz, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: nG.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(nR.D, {
                                className: nG.L$,
                                onClick: v,
                                "aria-expanded": m,
                                "aria-controls": f,
                                "aria-label": m ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: m ? void 0 : nG.RG,
        "data-superseded": l ? "true" : void 0,
        children: [o, (0, a.jsx)("div", { id: f, className: p()(nG.rf, u), hidden: !m, children: c })],
    });
}
var nK = n(883646);
let nH = [];
function nV(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: p()(nK.xL, {
            [nK.Vb]: "in_progress" === t,
            [nK.cT]: "completed" === t,
            [nK.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return eS.intl.string(ew.default.KvBdun);
                case "in_progress":
                    return eS.intl.string(ew.default["m5G9+S"]);
                case "unfinished":
                    return eS.intl.string(ew.default.lRpwhD);
                default:
                    return eS.intl.string(ew.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(c.y, {
                type: c.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nK.Qd,
                itemClassName: nK.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: nK.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: nK.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nW(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : nH), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, c] = i.useState(l),
        [d, f] = i.useState(s),
        [m, h] = i.useState(!1);
    d !== s && (f(s), c([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && h(!1));
    let g = u.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => c(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [g, l, n]),
        i.useEffect(() => {
            if (!n || 0 === u.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => h(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, u.length]),
        0 === u.length)
    )
        return null;
    let p = u.slice(0, 3),
        x = u.length - p.length;
    return (0, a.jsxs)("span", {
        className: nK.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    nq.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: nK.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, a.jsx)(o.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: nK.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function nX(e) {
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
            ((t = (r ?? nH).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nH),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: nK.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: p()(nK.AS, { [nK.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nV, { status: n }),
                            (0, a.jsx)(o.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nK.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: nK.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(nW, { agents: c.get(e.id) ?? nH, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: nK.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(nV, { status: "pending" }),
                          (0, a.jsx)(o.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nK.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: nK.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nZ(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = eS.intl.formatToPlainString(ew.default["P/I+JW"], { completed: u, total: o }),
        d = eS.intl.formatToPlainString(ew.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(nB, {
        title: eS.intl.string(ew.default.RtzECX),
        meta: (0, a.jsx)(nU, { children: c }),
        superseded: s,
        showLabel: eS.intl.string(ew.default.RKyN9q),
        hideLabel: eS.intl.string(ew.default.xydHoj),
        className: nK.Nr,
        bodyClassName: nK.rf,
        beforeBody: r && !s ? (0, a.jsx)(nD.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nX, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nY = n(308665),
    nQ = n(59678),
    nJ = n(903847);
function n0(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: o } = e,
        c = null != n,
        [d, f] = i.useState(n ?? "top"),
        [m, h] = i.useState(c),
        [g, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (f(n), h(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (c || !m) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [c, m]),
        i.useEffect(() => {
            if (!m || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [m, c]));
    let [k, w] = i.useState(!1),
        [S, N] = i.useState(!1),
        [A, C] = i.useState(v);
    (A !== v && (C(v), v ? w(!0) : N(!1)),
        i.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        i.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let I = null != l && l.length > 0,
        E = i.useCallback(() => j((e) => !e), []);
    return m
        ? (0, a.jsxs)("div", {
              className: nJ.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: p()(nJ.vK, { [nJ.ho]: g && c, [nJ.ET]: !c }),
                      children: [
                          null == o
                              ? (0, a.jsx)("ol", {
                                    className: p()(nJ.Rk, nQ.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(n$.A, {
                                        glyph: (0, a.jsx)(nY.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(nR.D, {
                                    className: nJ.pZ,
                                    onClick: o,
                                    "aria-label": eS.intl.string(ew.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: p()(nJ.Rk, nQ.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(n$.A, {
                                            glyph: (0, a.jsx)(nY.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(tF.m, {
                                    text: eS.intl.string(ew.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(nR.D, {
                                        className: nJ.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": eS.intl.string(ew.default.RtzECX),
                                        children: (0, a.jsx)(nL.ClipboardListIcon, {
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
                            className: p()(nJ.vB, { [nJ.pg]: v && S, [nJ.ui]: !v }),
                            children: (0, a.jsx)(nZ, {
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
var n1 = n(195880),
    n2 = n(287111),
    n3 = n(16619);
function n4(e) {
    let t = (0, n3.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var n7 = n(736553),
    n5 = n(642785);
async function n6(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, n5.dv)(e),
        i = new n7.u();
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
                    onClose: () => s(Error("Connection closed before the message was stored")),
                }));
        });
    } finally {
        (clearTimeout(l), i.close());
    }
}
var n8 = n(890497),
    n9 = n(103557),
    le = n(29073),
    lt = n(590077);
function ln(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let a = n4(e),
                [s, u] = i.useState(null),
                [o, c] = i.useState([]),
                [d, f] = i.useState(t.prompt),
                [h, g] = i.useState(!1),
                [p, x] = i.useState(!1),
                v = i.useRef(new Map()),
                j = i.useRef(!1),
                b = i.useRef(!1),
                y = i.useMemo(() => a.filter((e) => !o.some((t) => t.target.projectId === e.projectId)), [a, o]),
                k = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                w = i.useMemo(() => {
                    let e = s ?? k;
                    return y.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, k, y]),
                S = i.useMemo(() => y.filter((e) => w.includes(e.projectId)), [y, w]),
                N = i.useCallback((e) => {
                    u(e.slice(0, 10));
                }, []),
                A = d.trim(),
                C = n && !h && (S.length > 0 ? "" !== A : o.length > 0),
                I = i.useCallback(
                    (t) => {
                        b.current ||
                            ((b.current = !0),
                            g(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, n2.RQ)(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          eS.intl.formatToPlainString(ew.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = eS.intl.formatToPlainString(ew.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                E = i.useCallback(() => {
                    let t, n;
                    if (!C) return;
                    if (0 === S.length) return void I(o);
                    (g(!0), x(!1));
                    let l =
                        ((t = m.Ay.getProject(e)?.name ?? e),
                        (n = eS.intl.formatToPlainString(ew.default.ScoZLp, { name: t, projectId: e })),
                        `${A}

${n}`);
                    Promise.allSettled(
                        S.map((e) => {
                            let t = v.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, n1.m)() }), v.current.set(e.projectId, t)),
                                n6(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = S.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: A }))];
                        if (t.length === S.length || j.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), u(S.filter((e) => !t.includes(e)).map((e) => e.projectId)), g(!1), x(!0));
                    });
                }, [C, I, o, e, S, A]),
                M = i.useCallback(() => {
                    ((j.current = !0), o.length > 0 && !h && I(o), l());
                }, [I, o, l, h]);
            return {
                projects: y,
                targetIds: w,
                setTargetIds: N,
                prompt: d,
                setPrompt: f,
                sending: h,
                failed: p,
                canSubmit: C,
                submit: E,
                dismiss: M,
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
        className: p()(le.nd, le.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: le.wx,
                children: [
                    (0, a.jsx)(o.E, {
                        tag: "span",
                        id: d,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: le.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tX.K, {
                        icon: tT.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": eS.intl.string(ew.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: lt.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eS.intl.string(ew.default.TbbzW5),
                          })
                        : (0, a.jsx)(n8.Z, {
                              label: eS.intl.string(ew.default["29gr8j"]),
                              placeholder: eS.intl.string(ew.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...u.targetIds],
                              onSelectionChange: u.setTargetIds,
                              disabled: u.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(n9.f, {
                        label: eS.intl.string(ew.default.XZNsDA),
                        value: u.prompt,
                        onChange: u.setPrompt,
                        maxLength: 4e3,
                        disabled: u.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: u.failed ? eS.intl.string(ew.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: le.qr,
                children: (0, a.jsx)("div", {
                    className: le.zt,
                    children: (0, a.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        text: eS.intl.string(ew.default.gG4j6o),
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
    la = n(994500),
    li = n(287809),
    ls = n(360047);
function lu(e) {
    return 0 === e.options.length && null == e.input;
}
let lo = {
    [e7.rbe.GUILD_TEXT]: "text",
    [e7.rbe.GUILD_VOICE]: "voice",
    [e7.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [e7.rbe.GUILD_STAGE_VOICE]: "stage",
    [e7.rbe.GUILD_FORUM]: "forum",
    [e7.rbe.GUILD_MEDIA]: "media",
};
function lc(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = lr.A.getChannel(t)?.type) ? void 0 : lo[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = li.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let ld = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lf = {
        channel: [ew.default["9+dfPT"], ew.default.pGSJqE],
        role: [ew.default["2VkCoD"], ew.default.c8YlX8],
        user: [ew.default.GZIAxl, ew.default["4bptbQ"]],
        project: [ew.default.twlOb6, ew.default.twlOb6],
        server: [ew.default.ZWXDeI, ew.default.ZWXDeI],
    };
function lm(e, t) {
    return eS.intl.string(lf[e][+!!t]);
}
var lh = n(658675),
    lg = n(22231),
    lp = n(900797),
    lx = n(123292),
    lv = n(691885);
function lj(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = i.useMemo(() => ls.Hi.map((e) => ({ id: e, value: e, label: (0, ls.hU)(e) })), []);
    return (0, a.jsx)(lv.l, {
        label: t,
        hideLabel: n,
        autoFocus: l,
        options: o,
        value: r,
        selectionMode: "single",
        fullWidth: !0,
        disabled: s,
        onSelectionChange: u,
    });
}
var lb = n(344587),
    ly = n(155078);
function lk(e) {
    return e.options.some((e) => null != e.image);
}
let lw = [];
function lS(e, t) {
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
var lN = n(548118),
    lA = n(300344),
    lC = n(614733),
    lI = n(904363),
    lE = n(950902),
    lM = n(136722),
    l_ = n(66834),
    lT = n(808728),
    lP = n(696451),
    lR = n(71393),
    lL = n(488926),
    l$ = n(426035),
    lq = n(246338);
let lD = lM.kg(e7.xBc.VIEW_CHANNEL, e7.xBc.SEND_MESSAGES);
var lF = n(384017);
function lO(e) {
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
            matchSorterOptions: f,
        } = e,
        m = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function g(e) {
        return lc(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
    return (0, a.jsx)("div", {
        className: lF.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(n8.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(n8.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lz(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lA.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: o } = e,
            c =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, f.bG)(
                    [m.Ay],
                    () => {
                        let e = t ? m.Ay.getProject(l) : null;
                        return null == e ? null : (0, l$.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || lP.Ay.isMember(r, n) || l_.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, f.bG)(
                    [lT.Ay, lP.Ay, lR.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lR.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lT.Ay.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, lq.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && lP.Ay.isMember(r, n))
                            return lL.$3({ permission: lD, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? lM.BY;
                        return lM.X8(s, lD) ? null : i;
                    },
                    [r, n, t, a.channel_filter],
                )),
            d = i.useRef(null),
            h = i.useRef(!1);
        i.useEffect(() => {
            if (!h.current && !u && null != r) {
                if (null == d.current) {
                    if (s.length > 0) h.current = !0;
                    else if (null != c) {
                        var e;
                        ((d.current = c.id),
                            o(((e = []), lc("channel", [c.id], () => (0, ll.m1)(c, li.default, la.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== d.current ? (h.current = !0) : null == c && ((h.current = !0), o([], r));
            }
        }, [c, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lO, { ...r, guildId: n, options: s, placeholder: lm("channel", !0 === r.question.multi_select) });
}
function lG(e) {
    let { guildId: t, ...n } = e,
        l = (0, lI.A)(t);
    return (0, a.jsx)(lO, { ...n, guildId: t, options: l, placeholder: lm("role", !0 === n.question.multi_select) });
}
function lU(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lC.A)(t);
    return (0, a.jsx)(lO, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lm("user", !0 === n.question.multi_select),
    });
}
function lB(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = n4(t),
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
    return 0 === s.length ? n : (0, a.jsx)(lO, { ...l, options: s, placeholder: lm("project", !1) });
}
function lK(e) {
    let t = e.target;
    (0, t$.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lH(e) {
    let { fallback: t, ...n } = e,
        l = (0, n3.z9)("ConjureClarificationEntityPicker"),
        r = i.useMemo(
            () =>
                l.map((e) => ({
                    id: `conjure-target-${e.id}`,
                    value: e.id,
                    label: e.name,
                    leading: (0, a.jsx)(lN.Ay, { guild: e, size: lN.Ay.Sizes.MINI, active: !0 }),
                })),
            [l],
        );
    return 0 === r.length
        ? t
        : (0, a.jsx)("div", {
              onFocus: lK,
              onMouseUp: lK,
              children: (0, a.jsx)(lO, { ...n, options: r, placeholder: lm("server", !1) }),
          });
}
function lV(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lE.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lB, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lH, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lz, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lG, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lU, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lW = n(87221),
    lX = n(26430),
    lZ = n(750943),
    lY = n(173936),
    lQ = n(95477),
    lJ = n(256905),
    l0 = n(490707),
    l1 = n(907702);
function l2(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, l0._)(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return u
        ? (0, a.jsxs)("span", {
              className: p()(l1.Gt, l1.b6),
              children: [
                  (0, a.jsx)(lW.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(o.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eS.intl.string(ew.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: p()(l1.Gt, { [l1.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l1.Sl,
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
function l3(e) {
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
            onPick: f,
            onView: m,
            onArrow: h,
            onMeasured: g,
            onRemove: x,
        } = e,
        v = eS.intl.formatToPlainString(ew.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: p()(l1.Vs, { [l1.Q9]: s, [l1.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(nR.D, {
                className: p()(l1.Up, { [l1.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => m(r) : void 0) : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eS.intl.formatToPlainString(ew.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: l1.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(l2, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: l1.Gt }),
                            (0, a.jsx)("span", {
                                className: l1.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(lh.P, { checked: s, disabled: u })
                                    : (0, a.jsx)(tw.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(o.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: l1.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, ly.E)(t) : "")
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
                      className: l1.B4,
                      children: (0, a.jsx)(tF.m, {
                          text: eS.intl.string(ew.default.HQEXJM),
                          children: (0, a.jsx)(tX.K, {
                              icon: t0.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: u,
                              "aria-label": eS.intl.string(ew.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: l1.B4,
                        children: (0, a.jsx)(tF.m, {
                            text: eS.intl.string(ew.default["4/eeDD"]),
                            children: (0, a.jsx)(tX.K, {
                                icon: lX._,
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
function l4(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: o } = e,
        c = !0 === n.multi_select,
        { options: d } = n,
        f = d.length > 4 ? "gallery" : "row",
        m = i.useRef(null),
        h = i.useRef(new Map()),
        [g, x] = i.useState(null),
        v = null != g && d.some((e) => e.id === g) ? g : (d.find((e) => l.includes(e.id)) ?? d[0])?.id,
        j = i.useMemo(() => {
            var e;
            return null == o.image
                ? null
                : ((e = o.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: eS.intl.string(ew.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [o.image]),
        b = i.useCallback(
            (e) => {
                let n = (null == j ? d : [...d, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, tD.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, lJ.R)({
                                items: e.map((e, t) => {
                                    let l,
                                        r = h.current.get(n[t].id);
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
            [d, j, t],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (d.findIndex((t) => t.id === e.id) + t + d.length) % d.length,
                    l = d[n];
                (x(l.id), m.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), c || r || u(l));
            },
            [r, c, u, d],
        );
    return (0, a.jsxs)("div", {
        className: l1.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: m,
                className: p()(l1.fF, "gallery" === f ? l1.nV : l1.nM, { [l1.m3]: c }),
                role: c ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": f,
                "data-count": d.length,
                children: [
                    d.map((e) =>
                        (0, a.jsx)(
                            l3,
                            {
                                projectId: t,
                                option: e,
                                multi: c,
                                selected: l.includes(e.id),
                                disabled: r,
                                reachable: s,
                                tabbable: c || e.id === v,
                                onPick: (e) => {
                                    (x(e.id), u(e));
                                },
                                onView: b,
                                onArrow: y,
                                onMeasured: (t) => h.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != j
                        ? (0, a.jsx)(
                              l3,
                              {
                                  projectId: t,
                                  option: j,
                                  multi: c,
                                  selected: o.selected,
                                  disabled: r,
                                  reachable: s,
                                  tabbable: !0,
                                  onPick: o.onPick,
                                  onView: b,
                                  onArrow: () => void 0,
                                  onMeasured: (e) => h.current.set(j.id, e),
                                  onRemove: o.onRemove,
                              },
                              j.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(l7, {
                projectId: t,
                own: o,
                disabled: r,
                reachable: s,
                uploadText: eS.intl.string(/\bicons?\b/i.test(n.question) ? ew.default.qU4WN6 : ew.default.cbMDDB),
            }),
        ],
    });
}
function l7(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = i.useRef(null),
        [c, d] = i.useState(!1),
        [f, m] = i.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
        "" !== f.trim() &&
            null == g &&
            n.onLink(f.trim()).then(
                (e) => {
                    e && (d(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: l1.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: l1.QJ,
                children: [
                    (0, a.jsx)(x.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lZ.X,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    c
                        ? null
                        : (0, a.jsx)(x.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: lY.LinkIcon,
                              text: eS.intl.string(ew.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => d(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: l1.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, n2.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            c
                ? (0, a.jsxs)("div", {
                      className: l1.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: l1.Hs,
                              children: (0, a.jsx)(lQ.k, {
                                  label: eS.intl.string(ew.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eS.intl.string(ew.default.AVhvn8),
                                  value: f,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
                                          : "Escape" === e.key && (e.stopPropagation(), d(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == g && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: l1.gd,
                              children: [
                                  (0, a.jsx)(x.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eS.intl.string(ew.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === f.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lx.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eS.intl.string(ew.default.eXZL4X),
                                      onClick: () => d(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(o.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: n.error.text,
                  })
                : null,
        ],
    });
}
function l5(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(nR.D, {
        className: p()(lF.uK, { [lF.ue]: l, [lF.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": eS.intl.formatToPlainString(d ? ew.default["2p6UFz"] : ew.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: lF.dy, children: (0, a.jsx)(lh.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: lF.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lF.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lF.l8,
                        children: (0, a.jsx)(o.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lF.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, a.jsx)(o.E, {
                              tag: "span",
                              id: c,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, a.jsx)(o.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: lF.rM,
                      children: eS.intl.string(ew.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l6(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return lk(n)
        ? (0, a.jsx)(l4, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      l5,
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
let l8 = [],
    l9 = [];
function re(e) {
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
        f = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: p()(lF.Ge, lF.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            f
                ? (0, a.jsx)(o.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lF.aK,
                      children: eS.intl.string(ew.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(l6, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lS(u, c),
            }),
            lk(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: lF.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lF.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lg.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: p()(lF.Pu, lF.es), children: d }),
                      ],
                  }),
        ],
    });
}
function rt(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: u,
            onBack: c,
            backText: d,
            hideSubmit: f = !1,
            headingLines: m = 5,
        } = e,
        [h, g] = i.useState({}),
        [v, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [S, N] = i.useState({}),
        [A, C] = i.useState({}),
        [I, E] = i.useState(!1),
        [M, _] = i.useState(0),
        [T, P] = i.useState(null),
        [R, L] = i.useState(null),
        [$, q] = i.useState(null),
        [D, F] = i.useState(!1),
        O = i.useRef(null),
        [z, G] = i.useState(null),
        U = i.useRef(null),
        B = i.useRef(0),
        K = null == r,
        H = l.questions.length,
        V = Math.min(M, H - 1),
        W = l.questions[V],
        [X, Z] = i.useState({ id: W.id, expanded: !1 }),
        Y = X.id === W.id && X.expanded,
        [Q, J] = i.useState(null),
        ee = v[W.id] ?? "",
        et = !0 === W.multi_select,
        en = lk(W),
        el = et ? (b[W.id] ?? l8) : ((t = h[W.id]), t?.kind === "option" ? [t.optionId] : lw),
        er = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = eS.intl.string(ew.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                f = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : t[e.id]?.kind === "image"),
                    [t, l, u],
                ),
                m = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === u[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, u],
                ),
                h = i.useCallback(
                    (i, u) => {
                        let d = i.id,
                            m = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (u) return lS(h, f(i));
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
                                    null != l && (0, tD.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
                                m ? o((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: p(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? o((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: p(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, tD.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (e[d]?.kind !== "image") return e;
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
                                                error: { source: "upload", text: eS.intl.string(ew.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, tD.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        g({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : eS.intl.string(ew.default.l79PMc),
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
        })(n, h, g),
        ea = er.imageFor(W.id),
        ei = er.selectedFor(W),
        { text: es, phase: eu } = (0, lb.Q)(W.question),
        eo = es === W.question,
        ec = eo && Q?.id === W.id && Q.truncated;
    i.useLayoutEffect(() => {
        if (null == z || Y || !eo) return;
        function e() {
            if (null == z) return;
            let e = z.scrollHeight > z.clientHeight + 1;
            J((t) => (t?.id === W.id && t.truncated === e ? t : { id: W.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(z), () => t.disconnect());
    }, [eo, z, W.id, Y]);
    let ed = eS.intl.string(Y ? eS.t.iTcuma : eS.t.dcl9MQ),
        ef = i.useCallback(
            (e) => {
                null != r &&
                    (function (e, t, n, l, r) {
                        var a;
                        let i = t.questions
                            .map((e, t) => ({ question: e, index: t, answer: n[e.id] }))
                            .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                            .map((e) => {
                                let { question: t, index: n, answer: l } = e;
                                return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                            })
                            .join("\n");
                        if ("" !== i) {
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
                                (s = t.questions.flatMap((e) => {
                                    let t = n[e.id];
                                    return !0 === e.link && t?.kind === "entities"
                                        ? t.entities.map((t) => ({ target: t.id, build: l[e.id] }))
                                        : [];
                                })).length
                                    ? a()
                                    : Promise.allSettled(
                                          s.map((t) => {
                                              let { target: n, build: l } = t;
                                              return (0, ls.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, A, r);
            },
            [l, A, r, n],
        ),
        em = i.useCallback(
            (e, t) => {
                B.current += 1;
                let n = B.current;
                (P({ direction: t, moves: n }),
                    L({ question: W, draft: ee, selected: el, ownImage: ea, ownSelected: ei, direction: t, moves: n }),
                    F(!0),
                    _(e));
            },
            [ee, ea, ei, W, el],
        ),
        eh = i.useCallback(() => {
            let e = O.current,
                t = U.current;
            null != e && null != t && q({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = O.current,
            t = U.current;
        if (null == e || null == t) return;
        eh();
        let n = new ResizeObserver(eh);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [eh]);
    let eg = T?.moves;
    i.useEffect(() => {
        if (null == eg) return;
        let e = setTimeout(() => L(null), 400),
            t = setTimeout(() => F(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eg]);
    let ep = i.useCallback(
            (e) => {
                if (K) return;
                let t = { ...h, [W.id]: e };
                g(t);
                let n =
                    V < l.questions.length - 1
                        ? V + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, V);
                null == n ? ef(t) : em(n, n < V ? "back" : "forward");
            },
            [h, l, K, V, W.id, ef, em],
        ),
        ex = i.useCallback(() => {
            K || 0 === V || em(V - 1, "back");
        }, [K, V, em]),
        ev = 0 !== V || K ? void 0 : c,
        ej = (V > 0 && !K) || null != ev,
        eb = i.useCallback(
            (e) => {
                j((e) => ({ ...e, [W.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                en ? K || g((e) => ({ ...e, [W.id]: t })) : ep(t);
            },
            [K, en, W.id, ep],
        ),
        { multiPartFor: ey } = er,
        ek = i.useMemo(() => {
            var e;
            let t, n;
            return et
                ? ((e = ey(W)),
                  (t = ee.trim()),
                  (n = W.options.filter((e) => el.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: el,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [ee, et, ey, W, el]),
        eN = k[W.id] ?? l9,
        eA = i.useMemo(() => {
            var e, t;
            let n;
            return null != W.input
                ? ((e = W.input),
                  (t = S[W.id]),
                  (n = ee.trim()),
                  {
                      kind: "entities",
                      entities: eN,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eN.map((t) => (t.name.startsWith(ld[e]) ? t.name : `${ld[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ee, S, eN, W.id, W.input]),
        eC = i.useCallback(
            (e, t) => {
                (w((t) => ({ ...t, [W.id]: e })), N((e) => ({ ...e, [W.id]: t })));
            },
            [W.id],
        ),
        eI = i.useCallback(() => E(!0), []),
        eE = i.useCallback(() => E(!1), []),
        eM = er.controlsFor(W, K),
        e_ = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eA, ek, ee),
            [ee, ek, eA],
        ),
        eT = i.useCallback(() => {
            null != e_ && ep(e_);
        }, [e_, ep]),
        [eP, eR] = i.useState(!1),
        [eL, e$] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eR(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eq = i.useCallback(() => {
            null != s && (e$(!0), setTimeout(s, 150));
        }, [s]),
        eD = e_ ?? (null == eA && null == ek ? (h[W.id] ?? null) : null),
        eF = null != eD && !K,
        eO = V === H - 1,
        ez = i.useCallback(() => {
            null == eD || K || ep(eD);
        }, [K, eD, ep]),
        eG = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, t$.vq)(e.target, HTMLTextAreaElement) ||
                    (0, t$.vq)(e.target, HTMLInputElement) ||
                    ((!(0, t$.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ej
                            ? (e.preventDefault(), (ev ?? ex)())
                            : "ArrowRight" === e.key && eF && (e.preventDefault(), ez())));
            },
            [ev, ej, eF, ex, ez],
        ),
        eU = en
            ? null
            : (0, a.jsxs)("div", {
                  className: lF.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: lF.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lg.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(tz.y, {
                          value: ee,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              j((e) => ({ ...e, [W.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eT());
                          },
                          placeholder: eS.intl.string(lu(W) ? ew.default.yLN1x6 : ew.default["tOC+tn"]),
                          "aria-label": eS.intl.formatToPlainString(ew.default["4JeYPB"], { question: W.question }),
                          disabled: K,
                          rows: 1,
                          className: lF.Pu,
                          "data-conjure-clarification-other": W.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: p()(lF.$O, { [lF.fI]: eP && !eL, [lF.Oh]: eL }),
        role: "dialog",
        "aria-label": W.question,
        "data-conjure-clarification": l.id,
        "data-state": K ? "inert" : "open",
        "data-question-expanded": Y ? "true" : void 0,
        "data-picker-open": I && !D ? "true" : void 0,
        "data-step": V,
        tabIndex: -1,
        onKeyDown: eG,
        children: [
            (0, a.jsxs)("div", {
                className: lF.rf,
                style: null == $ ? void 0 : { height: $.heading + $.rows },
                "data-moving": D ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: O,
                        className: lF.wx,
                        children: [
                            (0, a.jsx)(o.E, {
                                ref: G,
                                tag: "span",
                                id: `${W.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Y ? void 0 : m,
                                className: p()(le.TK, lF.R_, { [lF.TB]: "exit" === eu, [lF.JU]: "enter" === eu }),
                                children: es,
                            }),
                            ec || Y
                                ? (0, a.jsx)("div", {
                                      className: le.Q7,
                                      children: (0, a.jsx)(tF.m, {
                                          text: ed,
                                          children: (0, a.jsx)(tX.K, {
                                              icon: Y ? lp.t : tn.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Z({ id: W.id, expanded: !Y }),
                                              "aria-label": ed,
                                              "aria-controls": `${W.id}-label`,
                                              "aria-expanded": Y,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(nR.D, {
                                      className: p()(le.gb, le.Q7),
                                      onClick: eq,
                                      "aria-label": eS.intl.string(ew.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(tT.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: lF.Cg,
                        style: null == $ ? void 0 : { insetBlockStart: $.heading },
                        children: (0, a.jsxs)("div", {
                            className: lF.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: U,
                                    className: lF.Ge,
                                    role: "group",
                                    "aria-labelledby": `${W.id}-label`,
                                    "data-direction": T?.direction,
                                    "data-parity": null == T ? void 0 : T.moves % 2,
                                    children: [
                                        et
                                            ? (0, a.jsx)(o.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lF.aK,
                                                  children: eS.intl.string(ew.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(l6, {
                                            projectId: n,
                                            question: W,
                                            selected: el,
                                            disabled: K,
                                            onPick: (e) =>
                                                et
                                                    ? y((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [W.id]:
                                                                  ((n = t[W.id] ?? l8),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  W.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : eb(e),
                                            own: eM,
                                        }),
                                        null != W.input
                                            ? (0, a.jsx)(lV, {
                                                  projectId: n,
                                                  question: W,
                                                  value: eN,
                                                  disabled: K,
                                                  onChange: eC,
                                                  onFocus: eI,
                                                  onBlur: eE,
                                                  fallback: !1 === W.allow_custom ? eU : null,
                                              })
                                            : null,
                                        !0 === W.link && eN.length > 0 && null == A[W.id]
                                            ? (0, a.jsx)("div", {
                                                  className: lF.X_,
                                                  children: (0, a.jsx)(lx.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: eS.intl.string(ew.default.eCzCxC),
                                                      disabled: K,
                                                      onClick: () => C((e) => ({ ...e, [W.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === W.link && eN.length > 0 && null != A[W.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: lF.$y,
                                                  onFocus: eI,
                                                  onBlur: eE,
                                                  children: [
                                                      (0, a.jsx)(o.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: eS.intl.string(ew.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(lj, {
                                                          label: eS.intl.string(ew.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: A[W.id] ?? "auto",
                                                          disabled: K,
                                                          onChange: (e) => C((t) => ({ ...t, [W.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != W.note
                                            ? (0, a.jsx)(o.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lF.aK,
                                                  children: W.note,
                                              })
                                            : null,
                                        !1 === W.allow_custom ? null : eU,
                                    ],
                                }),
                                null == R
                                    ? null
                                    : (0, a.jsx)(
                                          re,
                                          {
                                              projectId: n,
                                              question: R.question,
                                              draft: R.draft,
                                              selected: R.selected,
                                              ownImage: R.ownImage,
                                              ownSelected: R.ownSelected,
                                              direction: R.direction,
                                              disabled: K,
                                          },
                                          R.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            H > 1 || et || en || null != W.input || null != c || lu(W)
                ? (0, a.jsxs)("div", {
                      className: le.qr,
                      children: [
                          (0, a.jsx)(o.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  H > 1
                                      ? eS.intl.formatToPlainString(ew.default.yzYUjq, { index: V + 1, total: H })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: le.zt,
                              children: [
                                  ej
                                      ? (0, a.jsx)(lx.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: d ?? eS.intl.string(ew.default.Pk5lfA),
                                            onClick: ev ?? ex,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  f
                                      ? null
                                      : (0, a.jsx)(x.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eO
                                                ? (u ?? eS.intl.string(eS.t.geKm7t))
                                                : eS.intl.string(ew.default.w1nRmT),
                                            disabled: !eF,
                                            onClick: ez,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eO ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var rn = n(557744),
    rl = n(223347),
    rr = n(894443),
    ra = n(525530),
    ri = n(245179),
    rs = n(708679);
function ru(e) {
    return (0, f.bG)([m.Ay], () => m.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let ro = "scope-setup:q0",
    rc = `${ro}:0`,
    rd = `${ro}:1`;
var rf = n(715924);
let rm = [];
function rh() {}
function rg(e) {
    let { projectId: t, card: n } = e,
        l = i.useId(),
        [r] = n.clarification.questions,
        [s, u] = i.useState(r.default_entities ?? rm),
        { onPickServer: c, onBack: d } = n,
        f = s[0]?.id;
    return (0, a.jsxs)("section", {
        className: p()(le.nd, le.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, a.jsxs)("div", {
                className: rf.wx,
                children: [
                    (0, a.jsx)(o.E, {
                        tag: "span",
                        id: l,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: eS.intl.string(ew.default.ickKBI),
                    }),
                    (0, a.jsx)(o.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: eS.intl.string(ew.default.OyM4SV),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: rf.Qs,
                children: [
                    (0, a.jsx)(lV, {
                        projectId: t,
                        question: r,
                        value: s,
                        disabled: null == c,
                        onChange: u,
                        onFocus: rh,
                        onBlur: rh,
                    }),
                    null != r.note
                        ? (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: rf.qr,
                children: [
                    (0, a.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        text: eS.intl.string(ew.default.PTIP7V),
                        disabled: null == f || null == c,
                        onClick: () => {
                            null != f && c?.(f);
                        },
                    }),
                    null != d
                        ? (0, a.jsx)(lx.Q, {
                              variant: "secondary",
                              textVariant: "text-sm/medium",
                              text: eS.intl.string(eS.t["ETE/oC"]),
                              onClick: d,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function rp(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, f.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                n = (0, n3.z9)("ConjureScopeSetupCard"),
                [l, r] = i.useState(null),
                [a, s] = i.useState(!1),
                [u, o] = i.useState(null),
                c = t?.install_scope_setup,
                d = "server" === l || (null == l && "choose_server" === c),
                h = t?.guild_id,
                g = i.useMemo(() => {
                    var t;
                    return d
                        ? ((t = h ?? (0, rs.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: eS.intl.string(n.length > 0 ? ew.default.ZWXDeI : ew.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options:
                                          n.length > 0 ? [] : [{ id: rc, label: eS.intl.string(ew.default.qLYOpH) }],
                                      ...(0, rs.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: ro,
                                      question: eS.intl.string(ew.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: rc,
                                              label: eS.intl.string(ew.default.qLYOpH),
                                              detail: eS.intl.string(ew.default.QSKvUE),
                                          },
                                          {
                                              id: rd,
                                              label: eS.intl.string(ew.default.QV5C7b),
                                              detail: eS.intl.string(ew.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [d, n, h, e]);
            if (null == c) return null;
            if (null == t || !(0, m.PV)(t))
                return { clarification: (0, rs.YI)(g), readOnly: !0, hideSubmit: !0, failure: null };
            async function p(t, n) {
                (s(!0), o(null));
                try {
                    await (0, rs.JN)(e, t, n);
                } catch (e) {
                    (s(!1), o(null != n && 403 === e.status ? "server" : "failed"));
                }
            }
            return {
                clarification: g,
                readOnly: !1,
                onSubmit: a
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0];
                          null != n && (n.option_ids.includes(rd) ? r("server") : p("user", null));
                      },
                submitText: eS.intl.string(eS.t["cY+Oob"]),
                onBack: d && !a ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: d && n.length > 0,
                onPickServer: a ? void 0 : (e) => p("guild", e),
                failure: null == u ? null : eS.intl.string("server" === u ? ew.default["XXKd+7"] : ew.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, a.jsx)(rt, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, a.jsxs)("div", {
                children: [
                    !0 === n.serverStep
                        ? (0, a.jsx)(rg, { projectId: t, card: n }, n.clarification.id)
                        : (0, a.jsx)(
                              rt,
                              {
                                  projectId: t,
                                  clarification: n.clarification,
                                  onSubmit: n.onSubmit,
                                  submitText: n.submitText,
                                  onBack: n.onBack,
                              },
                              n.clarification.id,
                          ),
                    null != n.failure
                        ? (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: n.failure,
                          })
                        : null,
                ],
            });
}
function rx(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: a, feature: s } = l,
                u = (0, f.bG)([m.Ay], () => m.Ay.getProject(t), [t]),
                o = (0, n3.z9)("ConjureScopeSwitchCard"),
                [c, d] = i.useState(!1),
                [h, g] = i.useState(null),
                p = u?.guild_id,
                x = i.useMemo(() => {
                    let [e] = n.questions,
                        t = eS.intl.formatToPlainString("guild" === a ? ew.default["jh/iy+"] : ew.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === a
                                ? { ...e, question: t, allow_custom: !1, ...(0, rs.XU)(o, p) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: eS.intl.string(ew.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, o, p, a]);
            if (null == u || !(0, m.PV)(u))
                return { clarification: (0, rs.YI)(x), readOnly: !0, hideSubmit: !0, failure: null };
            async function v(e) {
                (d(!0), g(null));
                try {
                    await (0, rs.yN)(t, n.id, a, e);
                } catch (e) {
                    (d(!1), g(409 === e.status ? "locked" : "failed"));
                }
            }
            return {
                clarification: x,
                readOnly: !1,
                onSubmit: c
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0]?.entities?.[0];
                          "user" === a ? v(null) : null != n && v(n.id);
                      },
                submitText: eS.intl.string("guild" === a ? ew.default.Ua7yKM : ew.default.TVRkVh),
                onBack: c
                    ? void 0
                    : function () {
                          (g(null), (0, rs.RW)(t) ? r() : g("failed"));
                      },
                backText: eS.intl.string("guild" === a ? ew.default["4WnIqd"] : ew.default["am+p7p"]),
                hideSubmit: "user" === a,
                failure: null == h ? null : eS.intl.string("locked" === h ? ew.default.irUT0N : ew.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, a.jsx)(
              rt,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(
                      rt,
                      {
                          projectId: t,
                          clarification: n.clarification,
                          headingLines: 1,
                          onSubmit: n.onSubmit,
                          submitText: n.submitText,
                          onBack: n.onBack,
                          hideSubmit: n.hideSubmit,
                          backText: n.backText,
                      },
                      n.clarification.id,
                  ),
                  null != n.failure
                      ? (0, a.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: n.failure,
                        })
                      : null,
              ],
          });
}
var rv = n(442331),
    rj = n(564963);
let rb = new Set(["select", "channel", "role", "user"]);
function ry(e, t) {
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
function rk(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let rw = new Set(),
    rS = new Set();
function rN(e) {
    return (
        rS.add(e),
        () => {
            rS.delete(e);
        }
    );
}
function rA() {
    return i.useSyncExternalStore(rN, () => rw);
}
function rC(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, n_.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rI(e, t, n) {
    if (!n || null == t) return !1;
    let l = rk(e, t);
    return l.length > 0 && !ry({ keys: l }, t);
}
var rE = n(628284),
    rM = n(782973),
    r_ = n(1665),
    rT = n(11120),
    rP = n(411236);
function rR(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: c,
            summary: d,
            markSaved: m,
        } = (function (e, t, n) {
            let l = rA(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!rw.has(n)) for (let e of ((rw = new Set([...rw, n])), rS)) e();
                    } else a(!0);
                }, [n]),
                o = (0, f.bG)([rv.A], () => rI(t, rv.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, f.bG)([ri.A], () => null != n && rC(ri.A.getMessages(e)).has(n), [e, n]),
                summary: (0, f.yK)(
                    [rv.A, lr.A],
                    () => {
                        var n;
                        let l = rv.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => lr.A.getChannel(e)?.name ?? null),
                              rk(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: eS.intl.formatToPlainString(ew.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return eS.intl.string(ew.default.CJq1rY);
                                                      case "checkbox":
                                                          return eS.intl.string(
                                                              !0 === t ? ew.default.nXtpn3 : ew.default["0vfaMW"],
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
                                                                      : eS.intl.string(ew.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? eS.intl.string(ew.default.nEv677)
                                                              : eS.intl.string(ew.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return eS.intl.string(ew.default.Fw9G9A);
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
        h = null == r && u;
    if (c && !h)
        return (0, a.jsx)("article", {
            className: rP.Mk,
            children: (0, a.jsx)(o.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: eS.intl.string(ew.default["+uXDk+"]),
            }),
        });
    if (h)
        return (0, a.jsxs)("article", {
            className: rP.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rP.Ol,
                    children: [
                        (0, a.jsx)(rE.y, { size: "xs", color: t2.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(o.E, {
                            variant: "text-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: eS.intl.string(ew.default.AxBLLy),
                        }),
                    ],
                }),
                d.length > 0
                    ? (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: d.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let g = n.keys?.length === 1 && n.keys[0] === rM.B,
        v = null != n.note && "" !== n.note ? n.note : g ? null : eS.intl.string(ew.default.XuOf5s);
    return (0, a.jsx)(rT.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: m,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: i } = e;
            async function s(e) {
                (e.preventDefault(), await i());
            }
            let u = (0, a.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: eS.intl.string(ew.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rP.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(o.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eS.intl.string(ew.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, a.jsx)(r_.A, { text: v, variant: "text-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rP.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: p()(le.nd, le.jx),
                      "aria-label": eS.intl.string(ew.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: le.wx,
                              children: [
                                  (0, a.jsx)(o.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: le.TK,
                                      children: eS.intl.string(ew.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(nR.D, {
                                      className: p()(le.gb, le.Q7),
                                      onClick: r,
                                      "aria-label": eS.intl.string(ew.default["iq+Pte"]),
                                      children: (0, a.jsx)(tT.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rP.DQ,
                              children: [
                                  null != v
                                      ? (0, a.jsx)(r_.A, { text: v, variant: "text-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: le.qr,
                              children: [
                                  (0, a.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: rP.xE,
                                      children: eS.intl.string(ew.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: le.zt,
                                      children: [
                                          (0, a.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: eS.intl.string(ew.default["9J3OG8"]),
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
var rL = n(975571),
    r$ = n(427123);
let rq = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rD = n(874421),
    rF = n(932111),
    rO = n(940874),
    rz = n(404373),
    rG = n(89222);
function rU(e) {
    return "" !== rG.A.getDraft(e).trim();
}
var rB = n(29080);
function rK(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, nM.B4)(r),
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
        f = o.filter((e) => e !== d),
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
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, nM.Lf)(r) }),
    };
}
var rH = n(62617),
    rV = n(780171);
let rW = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rX = {
        snail: () => ew.default.ABeVsS,
        goat: () => ew.default.dhXay8,
        frog: () => ew.default.SHeweG,
        bunny: () => ew.default.FytFE1,
        cat: () => ew.default["5c+sHs"],
        caterpillar: () => ew.default["/FYcne"],
        butterfly: () => ew.default["Ib/AxK"],
        dog: () => ew.default.zDjBR1,
        spider: () => ew.default["6sxyrN"],
        bee: () => ew.default.cVtefg,
        bot: () => ew.default.MjCw0v,
    },
    rZ = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rH.Z)(),
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
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rH.Z)(),
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
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rH.Z)(),
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
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rH.Z)(),
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
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rH.Z)(),
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
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rH.Z)(),
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
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rH.Z)(),
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
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rH.Z)(),
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
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rH.Z)(),
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
                        () => (0, rH.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rH.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rV.u, tint: "var(--illo-purple-40)" },
    };
function rY(e) {
    return { ...rZ[e], name: eS.intl.string(rX[e]()) };
}
function rQ(e) {
    return rW.includes(e) ? rY(e) : void 0;
}
function rJ(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rW.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rW[(t + n) % rW.length]);
            }),
            l
        );
    })(e))
        t.set(n, rY(l));
    return t;
}
var r0 = n(615839);
function r1(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eS.intl.string(ew.default.KcFvbo);
}
var r2 = n(60160),
    r3 = n(16634);
function r4(e) {
    let t = (0, nM.SY)(e.steps);
    return null != t ? (0, nM.WQ)(t) : r1(e.task);
}
function r7(e) {
    let t = rJ(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rQ(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: r1(e.task),
                      todoId: e.task.todoId,
                      line: r4(e),
                  },
              ];
    });
}
function r5(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, nM.SY)(n.steps),
        d = o
            ? r4(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(r1(e));
                  switch (e.status) {
                      case "failed":
                          return eS.intl.formatToPlainString(ew.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eS.intl.formatToPlainString(ew.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return eS.intl.formatToPlainString(ew.default["++9woZ"], {
                                  task: t,
                                  duration: (0, r0.MB)(e.durationMs),
                              });
                          return eS.intl.formatToPlainString(ew.default.nmI9Uh, { task: t });
                      default:
                          return eS.intl.formatToPlainString(ew.default.nmI9Uh, { task: t });
                  }
              })(u),
        f = o ? c : void 0,
        m =
            u.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: nQ.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            r3.A,
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
                                      className: nQ.iq,
                                      children: (0, a.jsx)(r2.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(n$.A, {
        glyph: (0, a.jsx)(nq.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: r1(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nQ.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
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
var r6 = n(998445),
    r8 = n(643210),
    r9 = n(648127),
    ae = n(372795),
    at = n(163897);
let an = "conjure-browser-viewer";
function al(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, f.yK)(
            [r8.A],
            () =>
                n.flatMap((e) => {
                    let n = r8.A.getTab(t, e);
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
        className: at.kR,
        "aria-label": eS.intl.string(ew.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(ar, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function ar(e) {
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
        c = (0, eP.useHasModalOpen)(an),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, r9.i)(l.session);
    return (0, a.jsxs)(nR.D, {
        innerRef: s,
        className: p()(at.Nr, h && at.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, eP.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: an },
                )
            );
        },
        "aria-label": eS.intl.formatToPlainString(ew.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: at.Gt,
                children: [
                    (0, a.jsx)(ae.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: at.Ji,
                        "aria-label": eS.intl.formatToPlainString(ew.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: at.qf,
                              children: (0, a.jsx)(r6.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: at.HS,
                              children: (0, a.jsx)(o.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: eS.intl.string(ew.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: at.pG,
                children: [
                    (0, a.jsx)("span", { className: p()(at.W9, h && at.oM) }),
                    (0, a.jsx)(o.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: g,
                    }),
                ],
            }),
        ],
    });
}
var aa = n(268409);
let ai = new WeakMap(),
    as = new WeakMap();
function au(e) {
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
        u = (0, f.yK)(
            [ri.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = ai.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = as.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), as.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ai.set(e, n), n);
                })(ri.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: aa.h, children: (0, a.jsx)(al, { projectId: t, sessionIds: u }) });
}
var ao = n(469393);
function ac(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, eR.lG)(t.authored_at);
    return (0, a.jsx)(nz, {
        title: eS.intl.string(ew.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: ao.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ao.z,
                    children: [
                        (0, a.jsx)(o.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(x.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eS.intl.string(ew.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var ad = n(714917),
    af = n(463660),
    am = n(970211);
function ah(e) {
    let { projectId: t } = e,
        {
            src: n,
            blurred: l,
            handleError: r,
        } = (function (e, t) {
            let n = (0, f.bG)([ad.A], () => (null != e ? ad.A.getBackground(e) : null)),
                l = n?.imageEtag ?? null,
                [r, a] = i.useState(null),
                [s, u] = i.useState(null),
                [o, c] = i.useState(!1);
            (i.useEffect(() => {
                if (null != n) return;
                let e = setTimeout(() => c(!0), 2e3);
                return () => clearTimeout(e);
            }, [n]),
                i.useEffect(() => {
                    if (null == e || null == l) return;
                    let n = !1;
                    return (
                        (async function (e, l) {
                            let r;
                            try {
                                r = await (0, af.Mg)(e, l);
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
            let d = null != l ? r : null,
                m = null == l || (null != d && d === s) ? t : d,
                h = i.useCallback(() => {
                    m === d && u(d);
                }, [m, d]);
            return { src: null == e || null != n || o ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp");
    return null == n
        ? null
        : (0, a.jsx)("img", { className: p()(am.L, { [am.T]: l }), src: n, alt: "", "aria-hidden": !0, onError: r });
}
var ag = n(155718);
function ap(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let ax = ["command", "user_command", "message_command", "message"],
    av = new Set([ag.kc.CHAT, ag.kc.USER, ag.kc.MESSAGE]);
function aj(e) {
    return e.type ?? ag.kc.CHAT;
}
function ab(e) {
    return av.has(aj(e));
}
function ay(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function ak(e, t) {
    let n = ax.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !ay(e)), ...n.filter(ay)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || ay(r) || l.push(r);
    }
    return ax.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function aw(e, t, n) {
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
    let s = e.commands.filter(ab).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (aj(e)) {
                    case ag.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case ag.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(ay),
        o = a.length > 0 ? ak([...a, ...u], !0) : ak("both" === t ? [...s, i] : s, !1);
    return o.length > 0 ? o : [r];
}
var aS = n(377941),
    aN = n.n(aS);
function aA(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function aC(e) {
    return e.type === ag.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === ag.kc.USER || e.type === ag.kc.MESSAGE
          ? ""
          : "/";
}
let aI = {
        [eG.q7.APP_CHANNEL]: ew.default["3/aHX6"],
        [eG.q7.VOICE_CHANNEL]: ew.default["3/aHX6"],
        [eG.q7.ACTIVITY]: ew.default["3/aHX6"],
        [eG.q7.OVERLAY]: ew.default["rPpf5/"],
        [eG.q7.PROFILE_WIDGET]: null,
        [eG.q7.AUTOMOD]: null,
        [eG.q7.BOT]: null,
        [eG.q7.APPLICATION_COMMANDS]: null,
    },
    aE = [eG.q7.ACTIVITY, eG.q7.APP_CHANNEL, eG.q7.VOICE_CHANNEL, eG.q7.OVERLAY];
function aM(e) {
    return aE.find((t) => ap(e, t)) ?? null;
}
let a_ = 1920 / 1018;
function aT(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let aP = aT(24, 1018),
    aR = aT(24, 1920);
function aL(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var a$ = n(176999),
    aq = (((l = {}).IMAGE = "image"), l),
    aD = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aF = n(598748),
    aO = n(773669);
let az = [],
    aG = {},
    aU = {};
function aB(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aK(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aq.IMAGE,
        visibility: aD.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aH = n(127258),
    aV = n(803306),
    aW = n(587895),
    aX = n(320095),
    aZ = n(963852),
    aY = n(95701),
    aQ = n(889227),
    aJ = n(427262);
let a0 = new aY.nA({ id: "1337", guild_id: "1337", type: e7.rbe.GUILD_TEXT, name: "preview" });
function a1(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, f.bG)([li.default], () => li.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, aV.nj)(new aQ.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let a2 = /^@\S+/;
var a3 = n(775602);
let a4 = [ew.default["3eTjcV"], ew.default.l3j5nS];
var a7 = n(97808),
    a5 = n(778712),
    a6 = n(486020),
    a8 = n(46054),
    a9 = n(200700);
let ie = {
        alert: { label: () => eS.intl.string(ew.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eS.intl.string(ew.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eS.intl.string(ew.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eS.intl.string(ew.default.RGzFNK), blockedStyle: !1 },
    },
    it = {
        blocked: { label: () => eS.intl.string(ew.default.YdnZ8q), tone: "red" },
        alert: { label: () => eS.intl.string(ew.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eS.intl.string(ew.default.RGzFNK), tone: "green" },
    },
    il = ["blocked", "alert", "allowed"],
    ir = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function ia(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : eS.intl.formatToPlainString(eS.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, a9.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? eS.intl.formatToPlainString(eS.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? eS.intl.formatToPlainString(eS.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? eS.intl.formatToPlainString(eS.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? eS.intl.formatToPlainString(eS.t.opVZ9q, { mins: n / 60 })
                                      : eS.intl.formatToPlainString(eS.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var ii = n(984097),
    is = n(13673);
let iu = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function io(e) {
    let { example: t } = e,
        n = ia(t);
    return null == n
        ? null
        : (0, a.jsx)(o.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let ic = ["glazedgamer", "sprinkles", "donutking"];
function id(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = ie[n.outcome];
    return (0, a.jsxs)("li", {
        className: p()(ii.nM, { [p()(ii.HV, is.DX)]: s }),
        children: [
            (0, a.jsx)(nD.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: ii.my,
                children: (0, a.jsx)(a7.eu, {
                    src: (0, a6.AE)(void 0, void 0),
                    size: a5._3.SIZE_24,
                    "aria-label": eS.intl.string(ew.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ii.fw,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), a8.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(io, { example: n }) : null,
                ],
            }),
        ],
    });
}
function im(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = it[t.section],
        s = new Set(t.examples.map(ia)),
        u = 1 === s.size ? t.examples.map(ia)[0] : null;
    return (0, a.jsxs)("div", {
        className: ii.UO,
        children: [
            (0, a.jsxs)("div", {
                className: ii.RZ,
                children: [
                    (0, a.jsx)(o.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: iu[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(o.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: ii.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(o.E, {
                                      variant: "text-xs/semibold",
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
                className: ii.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(id, { example: e, username: ic[(n + t) % ic.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function ih(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            il
                .map((e) => ({ section: e, examples: t.filter((t) => ir[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: ii.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: ii.hk,
                      children: (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    im,
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
var ig = n(276293),
    ip = n(460905),
    ix = n(110384),
    iv = n(365199),
    ij = n(633018),
    ib = n(763754),
    iy = n(217424),
    ik = n(194085),
    iw = n(20851),
    iS = n(692508),
    iN = n(798819);
function iA(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: p()(iN.item, iN.labelContainer, iN.colorDefault, {
            [iN.focused]: !0 === t.highlighted,
            [iN.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: iN.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: iN.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: p()(iN.label, iS.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: iN.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: iN.icon }),
                  })
                : null,
        ],
    });
}
function iC(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: p()(t, iS.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: eS.intl.string(eS.t["5IEsGx"]), icon: ix.W, muted: !0 }
                : { label: eS.intl.string(eS.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: p()(iN.menu, iS.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: iN.scroller,
            children: [
                (0, a.jsx)(iA, { item: s }),
                (0, a.jsx)("div", { className: iN.separator }),
                (0, a.jsx)(iA, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var iI = n(381941);
function iE() {}
function iM(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        c,
        d,
        h,
        g,
        x,
        { projectId: v, exchanges: j } = e,
        {
            items: b,
            botIcon: y,
            appIconSrc: k,
        } = ((t = (0, f.bG)([li.default], () => li.default.getCurrentUser())),
        (n = (0, f.bG)([m.Ay], () => m.Ay.getProject(v))),
        (l = n?.application_id),
        (r = (0, f.bG)([aW.A], () => aW.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? eS.intl.string(ew.default.JEYq8M)),
        (u = (0, f.bG)([li.default], () => (null != l ? li.default.getUser(l) : void 0), [l])),
        (d = a1("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (h = c ? u : d),
        (g = a1("31338", eS.intl.string(ew.default["9iAOsw"]), { discriminator: "0003" })),
        (x = a1("31339", (0, aJ.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == x || null == h || null == g
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
                                      i = (0, aX.rh)({
                                          ...(0, aZ.Ay)({
                                              channelId: a0.id,
                                              content: e,
                                              author: t,
                                              type: l ?? e7.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: e7.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: aH.G.APPLICATION_COMMAND,
                                                        user: (0, aZ.Vi)(s),
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
                                              messageType: e7.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: e7.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(a2, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${o.username}`).join(`<@${o.id}>`)), i);
                                  }
                              return c;
                          })(
                              j,
                              { bot: h, currentUser: t, viewer: x, member: g },
                              {
                                  targetMessage: eS.intl.string(ew.default["y+QYes"]),
                                  memberMessage: eS.intl.string(ew.default.BUTRDc),
                              },
                          ),
                [j, h, t, x, g],
            ),
            botIcon: r,
            appIconSrc: r ?? h?.getAvatarURL(void 0, 80),
        });
    if (0 === b.length) return null;
    let w = a0.name;
    return (0, a.jsxs)("div", {
        className: iS.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: iS.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ig.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: w }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: p()(iS.TE, `group-spacing-${iI.ES}`),
                children: b.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? iS.Rz : void 0,
                            children: [
                                (0, a.jsx)(iw.A, {
                                    message: n,
                                    channel: a0,
                                    author: (0, ib.FT)(n.author, a0),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (y ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(iy.A, { message: n, channel: a0 }) : void 0,
                                    usernameClassName: r?.target === "user" ? iS.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: iS.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(ik.Ay, {
                                              children: [
                                                  (0, a.jsx)(ik.qv, {
                                                      label: eS.intl.string(eS.t.lfIHs4),
                                                      icon: ip.n,
                                                      onClick: iE,
                                                  }),
                                                  (0, a.jsx)(ik.qv, {
                                                      label: eS.intl.string(eS.t["5IEsGx"]),
                                                      icon: ix.W,
                                                      onClick: iE,
                                                  }),
                                                  (0, a.jsx)(ik.qv, {
                                                      label: eS.intl.string(eS.t["UKOtz+"]),
                                                      icon: iv.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: iE,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? iS.ET : iS.je,
                                          inert: !0,
                                          children: (0, a.jsx)(iC, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: k,
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
                className: iS.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ij.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: eS.intl.formatToPlainString(eS.t["8lzR/R"], { channel: `#${w}` }),
                    }),
                ],
            }),
        ],
    });
}
var i_ = n(332173);
function iT(e) {
    let { name: t } = e;
    return (0, a.jsxs)(i_.A, { children: ["/", t] });
}
function iP(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(aN());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(iT, { name: e.name }, e.start) : e.text));
}
n(827669);
var iR = n(687966),
    iL = n(757789),
    i$ = n(26137),
    iq = n(430392),
    iD = n(231483),
    iF = n(323384);
let iO = {
    frame: ew.default.Z2bt4u,
    overlay_widget: ew.default["0mGHfU"],
    user_widget: ew.default.Jipr29,
    bot: ew.default.EbvC13,
    commands: ew.default.EbvC13,
    automod: ew.default.tiMvei,
};
var iz = n(573634);
let iG = {
    frame: iR.GameControllerIcon,
    overlay_widget: iL.V,
    user_widget: i$.r,
    bot: iq.RobotIcon,
    commands: iq.RobotIcon,
    automod: iD.ShieldIcon,
};
function iU(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: p()(iz.e7, l),
        children: [(0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function iB(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iz.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iz.jw,
                    children: (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
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
function iK(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iz.lj,
        children: [
            (0, a.jsx)("span", {
                className: p()(iz.Vo, iz.G),
                children: (0, a.jsx)(iF.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iz.aV,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iH(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iz.wZ,
        children: t.map((e, t) => {
            let n = aC(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(iT, { name: e.name })
                                : (0, a.jsx)(i_.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function iV(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iz.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iz.Aw,
                    children: (0, a.jsx)(o.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(iP, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function iW(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? iF.k : iG[t.kind],
        c = eS.intl.string(s ? ew.default.BM4Ymz : iO[t.kind]);
    return (0, a.jsxs)("section", {
        className: iz.s9,
        "aria-label": c,
        children: [
            (0, a.jsxs)("div", {
                className: iz.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iz.Vo,
                        children: (0, a.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(o.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: c }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: iz.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(o.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(iP, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(iV, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: iz.PG, children: r }) : null,
        ],
    });
}
function iX(e) {
    var t;
    let n,
        l,
        r,
        { appName: s, intro: u, proposal: o, renderPreview: c, commandNames: d } = e,
        f =
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
                                let n = t.map(aN()).join("|");
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
        m =
            ((r =
                f.find((e) => {
                    let { experience: t } = e;
                    return "bot" === t.kind || "commands" === t.kind;
                }) ?? f[0]),
            r?.experience.id);
    return (0, a.jsxs)("div", {
        className: iz.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iz.Lv,
                children: [(0, a.jsx)(k.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iz.yF, role: "separator" }),
                            (0, a.jsx)(iW, {
                                experience: t,
                                bullets: n,
                                preview: c(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
                                              {
                                                  key: "permissions",
                                                  caption: ew.default["2UbW6r"],
                                                  names: e.bot_permissions,
                                              },
                                              {
                                                  key: "intents",
                                                  caption: ew.default["7TKfpj"],
                                                  names: e.privileged_intents,
                                              },
                                          ]
                                              .flatMap((e) => {
                                                  let { key: t, caption: n, names: l } = e;
                                                  return null != l && l.length > 0
                                                      ? [{ key: t, caption: eS.intl.string(n), labels: l.map(aA) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      iU,
                                                      { caption: n, children: (0, a.jsx)(iB, { labels: l }) },
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
                                                        let n = eS.intl.string(ew.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(eG.q7.APP_CHANNEL)) {
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
                                                            launchableAnywhere: t.surfaces.includes(eG.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(eG.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, a.jsx)(
                                                                iU,
                                                                {
                                                                    className: iz.Iw,
                                                                    caption: eS.intl.formatToPlainString(
                                                                        ew.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iz.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                iK,
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
                                                            ? [eS.intl.string(ew.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [eS.intl.string(ew.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    iU,
                                                                    {
                                                                        caption: eS.intl.string(ew.default.MY6UGJ),
                                                                        children: (0, a.jsx)(iB, { labels: r }),
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
                                                              iU,
                                                              {
                                                                  caption: eS.intl.string(eS.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iH, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...l,
                                            ];
                                        default:
                                            return l;
                                    }
                                })(o, t, t.id === m),
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
var iZ = n(633075),
    iY = n(946356),
    iQ = n(58216),
    iJ = n(27399);
function i0(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, f.bG)([li.default], () => li.default.getCurrentUser()),
        r = i.useMemo(() => new iZ.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iJ.H,
              children: (0, a.jsx)(iY.A.Overlay, {
                  className: iJ.w,
                  children: (0, a.jsx)(iQ.A, {
                      user: l,
                      widget: r,
                      allowEditing: !1,
                      disableInteraction: !0,
                      interactiveLinks: !0,
                      disableCTA: !0,
                      rendererProps: n,
                  }),
              }),
          });
}
var i1 = n(443863);
function i2(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: aT(i.width * t, 1920), height: aT(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ah, { projectId: n }),
            (0, a.jsx)("div", {
                className: i1.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": aP,
                    "--custom-conjure-plan-overlay-widget-end": aR,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: i1.M7, onError: s }),
            }),
        ],
    });
}
function i3(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, tD.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, lJ.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function i4(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, l0._)(t, r);
    return s
        ? null
        : (0, a.jsx)(nR.D, {
              className: i1.xX,
              onClick: () => i3(t, [{ id: r, alt: l }], 0),
              "aria-label": eS.intl.string(ew.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: i1.sN, onError: u }),
          });
}
function i7(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: c } = (0, l0._)(t, r),
        [d, m] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: x,
            labels: v,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, f.bG)([a3.Ay], () => a3.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                o = t && !l && !n && !s,
                c = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => a((e) => (e + 1) % a4.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let d = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                m = i.useCallback(() => d(c), [d, c]);
            return { slide: c, labels: a4.map((e) => eS.intl.string(e)), pick: d, hold: m };
        })({ ready: null != s, paused: d || h });
    if (u) return null;
    let b = eS.intl.string(ew.default.mjryK4),
        y = eS.intl.string(ew.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: i1.RM,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(nR.D, {
                className: p()(i1.xX, i1.nj, { [i1.qQ]: 0 === x }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(a_) },
                onClick: () => i3(t, [{ id: r, alt: b }], 0),
                "aria-label": eS.intl.string(ew.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === x
                          ? (0, a.jsx)("img", { src: s, alt: b, className: i1.Ac, onError: c })
                          : (0, a.jsx)(i2, { projectId: t, src: s, alt: y, size: l, onError: c }),
            }),
            (0, a.jsx)("div", {
                className: i1._4,
                role: "group",
                "aria-label": eS.intl.string(ew.default.EH36X6),
                children: v.map((e, t) =>
                    (0, a.jsx)(
                        nR.D,
                        {
                            className: p()(i1.c, { [i1.Cw]: x === t }),
                            "aria-pressed": x === t,
                            onClick: () => j(t),
                            children: (0, a.jsx)(o.E, {
                                variant: "text-xs/medium",
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
function i5(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: u } = (0, l0._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(nR.D, {
                  className: i1.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: i1.rA, onError: u }),
              }),
          });
}
function i6(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: eS.intl.formatToPlainString(ew.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: i1.Op,
              children: (0, a.jsxs)("div", {
                  className: i1.uW,
                  children: [
                      (0, a.jsx)(o.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: eS.intl.string(ew.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: i1.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(i5, { projectId: t, id: r, alt: i, onOpen: () => i3(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function i8(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        c,
        d,
        h,
        g,
        p,
        { projectId: v, proposal: j, version: b, onApprove: y } = e,
        { botExchanges: k } =
            ((n = ap(j, eG.q7.APPLICATION_COMMANDS)),
            (l =
                ap(j, eG.q7.BOT) || n
                    ? null != j.bot
                        ? j.bot.interaction
                        : n && j.commands.some(ab)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : aw(j, l, {
                              message: eS.intl.string(ew.default.J7qggf),
                              reply: eS.intl.string(ew.default.nqYtiy),
                              event: eS.intl.string(ew.default["05lU9W"]),
                          }),
                [j, l],
            )),
            { botInteraction: l, botExchanges: r }),
        w = (function (e, t) {
            let { widget_config: n, widget_preview: l = aU } = t,
                r = (0, f.bG)([aO.default], () => aO.default.locale),
                a = (0, f.bG)([m.Ay], () => {
                    let t = m.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aG);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, tD.PK)(e, l.id).then(
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
                                                          ...aB(n),
                                                          ...(null != n.fallback ? { fallback: aB(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = a$.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[aF.m.WIDGET_TOP] || null == i[aF.m.WIDGET_BOTTOM]
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
                                                                    type: a$.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: a$.oG.NUMBER, value: a })
                                                                : (r[e] = { type: a$.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aK),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: az,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(v, j),
        S = b?.superseded === !0,
        N = j.what_changed?.trim() ?? "",
        A =
            ((t = j.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === aC(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        C =
            ((u =
                null == (s = aM(j))
                    ? null
                    : (j.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (c = j.design_image) && c.id !== aL(j)?.id ? c : null),
            (h = aL(j)),
            (g =
                j.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? u),
            (p =
                j.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? u),
            {
                ui: null != d && null != g ? { experienceId: g, design: d } : null,
                overlay:
                    null != h && null != p ? { experienceId: p, design: h, size: eB(j.overlay_widget ?? null) } : null,
            }),
        I = i.useMemo(
            () =>
                j.commands.some(ab)
                    ? aw({ ...j, bot: void 0 }, "commands", {
                          message: eS.intl.string(ew.default.J7qggf),
                          reply: eS.intl.string(ew.default.nqYtiy),
                          event: eS.intl.string(ew.default["05lU9W"]),
                      })
                    : [],
            [j],
        ),
        E = (0, f.bG)([m.Ay], () => m.Ay.getProject(v)?.name, [v]),
        M =
            S && null != b
                ? eS.intl.formatToPlainString(ew.default.YZ3qJs, { version: b.version })
                : eS.intl.string(ew.default["3b6e7o"]),
        _ = S ? (0, a.jsx)(nU, { children: eS.intl.string(ew.default.hF2c41) }) : null;
    return (0, a.jsxs)(nB, {
        title: M,
        meta: _,
        superseded: S,
        showLabel: eS.intl.string(ew.default.yD8EJS),
        hideLabel: eS.intl.string(ew.default.nSPGNb),
        bodyClassName: i1.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: i1.Qs,
                children: (0, a.jsx)(iX, {
                    appName: E ?? j.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(o.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(iP, { text: j.summary, commandNames: A }),
                            }),
                            (0, a.jsx)(i6, { projectId: v, proposal: j }),
                            "" !== N
                                ? (0, a.jsxs)("section", {
                                      className: i1.uW,
                                      children: [
                                          (0, a.jsx)(o.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: eS.intl.string(ew.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(o.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(iP, { text: N, commandNames: A }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: j,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget": {
                                let t,
                                    n =
                                        e.id === C.ui?.experienceId
                                            ? (0, a.jsx)(i4, {
                                                  projectId: v,
                                                  design: C.ui.design,
                                                  alt: eS.intl.string(
                                                      null == (t = aM(j)) ? ew.default["3/aHX6"] : aI[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, a.jsx)(i7, {
                                                  projectId: v,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != w ? (0, a.jsx)(i0, { ...w }) : null;
                            case "automod":
                                return null != j.automod && j.automod.examples.length > 0
                                    ? (0, a.jsx)(ih, { automod: j.automod })
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
                                        (r = l.some((e) => "command" === e.kind || ay(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, k, I);
                                return t.length > 0 ? (0, a.jsx)(iM, { projectId: v, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
                }),
            }),
            null == y || S
                ? null
                : (0, a.jsxs)("div", {
                      className: i1.qr,
                      children: [
                          (0, a.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: eS.intl.string(ew.default["6S+wRM"]),
                              onClick: y,
                          }),
                          (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: eS.intl.string(ew.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var i9 = n(331322),
    se = n(289565);
function st(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: se.m, children: n })
        : (0, a.jsxs)("div", {
              className: se.Z,
              children: [
                  n,
                  (0, a.jsx)(tF.m, {
                      text: eS.intl.string(eS.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tX.K, {
                          "aria-label": eS.intl.string(eS.t.WAI6xu),
                          icon: tT.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function sn(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function sl(e, t) {
    return null != e && sn(t, e.status);
}
let sr = new WeakMap();
var sa = n(175841),
    si = n(27232),
    ss = n(505930),
    su = n(506774);
let so = "conjurePublishRatings",
    sc = [1, 2, 3, 4, 5],
    sd = {
        1: ew.default.GhbsGA,
        2: ew.default.cm0nwU,
        3: ew.default.kGvlh2,
        4: ew.default.dVBSUg,
        5: ew.default.DKlgF7,
    };
function sf(e) {
    return eS.intl.string(sd[e]);
}
let sm = new Set(),
    sh = 0;
function sg() {
    return su.w.get(so) ?? {};
}
function sp(e, t) {
    return sg()[e]?.[t] ?? null;
}
function sx(e) {
    return (sm.add(e), () => sm.delete(e));
}
function sv(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, h.Fz)(e, n);
                },
            };
        })(t),
        o = eS.intl.string(ew.default.IqkF07);
    return (0, a.jsx)(tk.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: eS.intl.string(ew.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(n9.f, {
            label: o,
            hideLabel: !0,
            placeholder: eS.intl.string(ew.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var sj = n(54100);
function sb(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: sj.mo,
        role: "status",
        children: [
            (0, a.jsx)(sa.SparklesIcon, { size: "xs", color: "currentColor", className: sj.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(o.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? eS.intl.string(ew.default["nIc9/M"])
                        : 3 === t
                          ? eS.intl.string(ew.default.ausj8U)
                          : eS.intl.string(ew.default.HilSjw),
            }),
        ],
    });
}
function sy(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: u } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(sx, () => sh),
                {
                    rating: sp(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != sp(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, h.gw)(i);
                            let s = sg();
                            return (su.w.set(so, { ...s, [t]: { ...s[t], [n]: l } }), sh++, sm.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [c, d] = i.useState(null),
        [f, m] = i.useState(null),
        [g, x] = i.useState(!1),
        v = i.useId(),
        j = i.useId(),
        b = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => x(!1), 420);
            return () => clearTimeout(e);
        }, [g]),
        null != s && !g)
    )
        return (0, a.jsx)(sb, { rating: s });
    let y = null != s,
        k = y ? s : (f ?? c),
        w = y || (null == f && null != c);
    function S(e) {
        if (y) return;
        (d(e), m(null), x(!0));
        let t = u(e);
        null != t && (0, eP.openModal)((e) => (0, a.jsx)(sv, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: sj.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: sj.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(o.E, {
                        id: j,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: p()(sj.Pf, { [sj.KH]: null == k }),
                        children: eS.intl.string(ew.default.mTV326),
                    }),
                    sc.map((e) =>
                        (0, a.jsx)(
                            o.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: p()(sj.Pf, { [sj.KH]: k === e }),
                                children: sf(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": j,
                className: sj.uf,
                children: sc.map((e) => {
                    let t = null != k && e <= k,
                        n = t ? si.StarIcon : ss.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: sj.uK,
                            onMouseEnter: () => {
                                y || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: v,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        b.current ? d(e) : S(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((b.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), S(e)));
                                    },
                                    onKeyUp: () => {
                                        b.current = !1;
                                    },
                                    className: sj.hF,
                                    "aria-label": eS.intl.formatToPlainString(ew.default.NU7Dex, {
                                        rating: e,
                                        label: sf(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: p()(sj.d4, { [sj.cO]: t, [sj.Ng]: t && w }),
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
function sk(e) {
    let { projectId: t, publish: n } = e,
        l = tE(t, n);
    return (0, a.jsx)(x.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sw(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tv.Ay)(t);
    return null != r && sl(r, l)
        ? (0, a.jsx)(st, {
              children: (0, a.jsxs)(i9.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(sk, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n ? (0, a.jsx)(sy, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var sS = n(303345),
    sN = n(44255),
    sA = n(416473),
    sC = n(289830);
function sI(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, f.bG)(
                    [m.Ay],
                    () => {
                        let t = m.Ay.getProject(e);
                        return null != t && (0, m.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                o = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, sA.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof sS.A ? e.message : eS.intl.string(ew.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [c] = i.useState(() => Date.now()),
                d =
                    t.next_run_at > c
                        ? eS.intl.formatToPlainString(ew.default.orZDqY, { time: (0, sN.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, sN.lD)(t.trigger),
                firstPublish: d,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(nz, {
        title: eS.intl.string(ew.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: sC.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sC.z,
                    children: [
                        (0, a.jsx)(o.E, { variant: "text-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eS.intl.string(ew.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: eS.intl.string(ew.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(x.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eS.intl.string(ew.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var sE = n(989271);
function sM(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(nR.D, {
        className: p()(sE.nM, { [sE.f1]: s, [sE.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": eS.intl.formatToPlainString(ew.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sE.jo,
                children: [
                    n
                        ? (0, a.jsx)(v.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sE.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(o.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: sE.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(o.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function s_(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nz, {
        title: eS.intl.string(ew.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                sM,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var sT = n(530557),
    sP = n(872162),
    sR = n(202723);
function sL(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, eP.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        d = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: sT.R })), [r.fields]),
        f = (0, rj.bB)(l, s),
        m = p()(sR.Lo, { [sR.jY]: f });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(o.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: eS.intl.string(ew.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, a.jsxs)(
                "article",
                {
                    className: m,
                    children: [
                        (0, a.jsx)(o.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: eS.intl.string(ew.default.HCQvpO),
                        }),
                        (0, a.jsx)(sP.C, { label: eS.intl.string(ew.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: sR.Lo,
                      children: (0, a.jsx)(sP.C, { label: eS.intl.string(ew.default.HCQvpO), size: "xs", items: d }),
                  },
                  s,
              )
            : "received" === s
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: m,
                        children: [
                            (0, a.jsxs)("div", {
                                className: sR.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: sR.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(rE.y, {
                                            size: "xs",
                                            color: t2.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(o.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eS.intl.string(ew.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                selectable: !0,
                                children: r.fields
                                    .map((e) => e.label)
                                    .map((e) =>
                                        eS.intl.formatToPlainString(ew.default["Z+FC3j"], {
                                            label: e,
                                            value: eS.intl.string(ew.default.CJq1rY),
                                        }),
                                    )
                                    .join(" \xb7 "),
                            }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: sR.Lo,
                    children: [
                        (0, a.jsx)(o.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: eS.intl.string(null != u ? ew.default.O0QIqj : ew.default.HCQvpO),
                        }),
                        (0, a.jsx)(r_.A, {
                            text: null != r.note && "" !== r.note ? r.note : eS.intl.string(ew.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(sP.C, { label: eS.intl.string(ew.default.HCQvpO), size: "xs", items: d }),
                        (0, a.jsx)("div", {
                            className: sR.sq,
                            children: (0, a.jsx)(x.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: eS.intl.string(ew.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var s$ = n(919790),
    sq = n(908492),
    sD = n(971824),
    sF = n(162052),
    sO = n(165648);
function sz(e) {
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
        x = i.useMemo(() => (0, nM.Jf)(n, l), [n, l]),
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
    if (o)
        return (0, a.jsx)("ol", {
            className: nQ.pj,
            "data-live": !1,
            children: (0, a.jsx)(n$.A, {
                glyph: (0, a.jsx)(rB.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eS.intl.string(ew.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, nM.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rJ(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        N = r7(k);
    return (0, a.jsxs)("ol", {
        className: nQ.pj,
        "data-live": S,
        children: [
            (0, a.jsx)(nP.Ay, {
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
                let l = null != e.task.helperMark ? rQ(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          r5,
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
            (0, a.jsx)(au, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: nQ.YO,
                      children: (0, a.jsx)(nZ, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sG(e) {
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
            settingsAskId: x,
            publishCta: v,
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: S,
            hoistedProse: N = !1,
            hoistedAttachmentsHost: A,
            restoreProposal: C,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: M = !1,
        } = e,
        _ = i.useMemo(
            () => rK({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: P, showsClosingMessage: R, closingContent: L } = _,
        $ = (N ? A : void 0) ?? _.attachmentsHost,
        q = R && !N,
        D = null == c ? null : (0, a.jsx)(s$.A, { projectId: t, attachments: c }),
        F = null == D ? null : (0, a.jsx)("div", { className: nQ.MT, children: D }),
        O = w
            ? (0, a.jsx)(o.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return eS.intl.string(ew.default.Mv5OmK);
                          case "queued":
                              return eS.intl.string(ew.default["Po/2mi"]);
                          case "restarting":
                              return eS.intl.string(ew.default.Vj0woh);
                          default:
                              return eS.intl.string(ew.default.gY3L8p);
                      }
                  })(S),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nQ.ue,
        children: [
            T.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: nQ.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nQ.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sO.PT,
                                          children: (0, sq.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === $ && e === P ? F : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(i8, { projectId: t, proposal: r, version: s, onApprove: k })
                : q
                  ? (0, a.jsxs)("div", {
                        className: p()(nQ.ky, sF.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: p()(sO.PT, nQ.cW),
                                children: (0, sq.U)(L, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === $ ? F : null,
                            O,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: p()(nQ.ky, sF.XR, { [sD.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(sL, {
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
                      className: p()(nQ.ky, sF.XR),
                      children: (0, a.jsx)(rR, { projectId: t, request: g, askId: x }),
                  })
                : null,
            "standalone" !== $ && ("closing" !== $ || q) ? null : D,
            null != v ? (0, a.jsx)(sw, { projectId: t, turnId: j ?? null, cta: v }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(s_, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != C ? (0, a.jsx)(ac, { proposal: C, onRestore: I }) : null,
            null != E ? (0, a.jsx)(sI, { projectId: t, proposal: E, current: M }) : null,
            q ? null : O,
        ],
    });
}
var sU = n(864970),
    sB = n(146806),
    sK = n(475358),
    sH = n(783977),
    sV = n(559647),
    sW = n(655098),
    sX = n(234320),
    sZ = n(191023),
    sY = n(285796),
    sQ = n(922329),
    sJ = n(153171);
function s0(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(sQ.p, {
        name: eS.intl.string(ew.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: ex.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sZ.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: ex.OY,
                    children: (0, a.jsx)(lg.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(o.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: eS.intl.string(ew.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: sJ.o1,
            onClick: () => {
                ef(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": eS.intl.string(ew.default.N852dj),
            children: (0, a.jsx)(sY.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function s1(e) {
    let { send: t } = e;
    return (0, a.jsxs)(sQ.p, {
        compact: !0,
        name: eS.intl.string(ew.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(o.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: eS.intl.string(ew.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: sJ.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(lx.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: eS.intl.string(ew.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var s2 = n(587157),
    s3 = n(347111),
    s4 = n(120234),
    s7 = n(901173),
    s5 = n(161431),
    s6 = n(280450),
    s8 = n(503275),
    s9 = n(957071),
    ue = n(659280),
    ut = n(351906),
    un = n(407653),
    ul = n(322915);
function ur(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, f.bG)([ut.A], () => ut.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        c = `${t}-files`;
    if (0 === l.length) return null;
    let d = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      ue.Ay.User,
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
                      ue.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(un.A, { projectId: n, file: e.file, className: ul.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        m = l.findIndex((e) => "file" === e.kind),
        h = -1 === m ? d : d.slice(0, m),
        g = -1 === m ? [] : d.slice(m);
    return (0, a.jsx)(ue.Ay, {
        id: t,
        className: ul.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": eS.intl.string(ew.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(ua, { titleId: o, title: eS.intl.string(ew.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(ua, { titleId: c, title: eS.intl.string(ew.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function ua(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(o.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: ul.Gf, children: n }),
            l,
        ],
    });
}
var ui = n(719442),
    us = n(355622),
    uu = n(408018),
    uo = n(186306),
    uc = n(323350),
    ud = n(35277),
    uf = n(820066),
    um = n(683167),
    uh = n(267102),
    ug = n(259691);
let up = (0, aY.createChannelRecord)({ id: "1", type: e7.rbe.DM });
function ux(e) {
    let t = uf.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uv(e) {
    return (0, uc.WO)(uf.VW.richValue(e), { mode: "raw" });
}
function uj(e, t) {
    ((e.children = (0, uu.x7)(t)), (e.selection = ux(e)), e.onChange());
}
function ub(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rF.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(ug.A, { attachmentId: r }), n] });
}
var uy = n(497437),
    uk = n(465410);
let uw = "text-md/normal",
    uS = null;
function uN(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, h] = i.useState(0),
        [g, x] = i.useState(0),
        [v, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = d.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = c.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (x(i + a), h(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === d ? 1 : s / d,
                m = 0 === d ? 1 : o / d;
            j({
                frontFrom: 1e3 * (0, sB._R)(f),
                frontTo: 1e3 * (0, sB._R)(m),
                backFrom: 1e3 * (0, sB.T)(f),
                backTo: 1e3 * (0, sB.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [k, w] = i.useState(null),
        S = i.useRef(!1),
        N = i.useCallback(() => {
            (w(S.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        S.current = n;
    }, [n, t]);
    let A = "in" === k ? v.backFrom : v.frontFrom,
        C = "out" === k ? v.frontTo : v.backTo,
        I = (0, f.bG)([a3.Ay], () => a3.Ay.useReducedMotion),
        E = t === eS.intl.string(ew.default.Zc7gML),
        M = r === t && E;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: p()(uy.VT, { [uy.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(sK.e, { shortcut: "tab", className: uy.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sU.o, {
                text: t,
                variant: uw,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: p()(uy.xM, { [uy.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(uy.IS, n || (!I && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: uy.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(o.E, { variant: uw, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: uy.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(o.E, { variant: uw, tag: "span", className: uy.xM, children: t }),
                          _(uy.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uA = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                aiPaused: r = !1,
                running: s,
                restoring: u = !1,
                onSend: o,
                onInterrupt: c,
                escapeScopeRef: d,
                onUploadFile: h,
                onApprove: g,
                onImport: x,
                onSendToOtherProjects: v,
                suggestion: j,
                questionOpen: b = !1,
                hasPendingContext: y = !1,
                onDraftHasTextChange: k,
                modelSettings: w,
                onModelSettingsChange: S,
            } = e,
            N = n && !l && !r,
            A = (function (e) {
                let t = i.useContext(uh.Ay),
                    [n] = i.useState(() => {
                        let n = (0, ui.ie)();
                        return (
                            (n.children = (0, uu.x7)(e)),
                            (n.selection = ux(n)),
                            (0, um.a)({
                                editor: n,
                                chatInputType: us.oU.GENERIC_RICH_TEXTAREA,
                                channel: up,
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
                                    for (let [t, l] of uf.VW.nodes(e, { at: [], match: uf.l5.isText }))
                                        for (let e of t.text.matchAll(rF.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        uo.o.withMergedEntry(e, () =>
                                            uf.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    ud.b.textToVoid(
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
            })(rG.A.getDraft(t)),
            [C, I] = i.useState(() => uv(A));
        (0, s4.N$)(C);
        let E = i.useRef(C),
            [M, _] = i.useState(null),
            T = i.useCallback(() => {
                let e = uv(A);
                (e !== E.current && ((E.current = e), (0, s3.I)(t, e), I(e)),
                    _(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !uf.ZF.isCollapsed(t)) return null;
                            let [n] = uf.VW.node(e, t.anchor.path);
                            return uf.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(A),
                    ));
            }, [A, t]),
            P = i.useCallback((e) => uj(A, e), [A]),
            R = "" !== C.trim();
        i.useEffect(() => k?.(R), [R, k]);
        let L = i.useRef(t);
        i.useLayoutEffect(() => {
            L.current !== t && ((L.current = t), uj(A, rG.A.getDraft(t)));
        }, [A, t]);
        let $ = (0, f.bG)([a3.Ay], () => a3.Ay.isSubmitButtonEnabled),
            [q, D] = i.useState(!1);
        i.useEffect(() => {
            s || D(!1);
        }, [s]);
        let {
                drafts: F,
                addFiles: O,
                pasteFiles: z,
                removeDraft: U,
                settled: B,
                takeRefs: K,
            } = (0, tG.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            H = eo.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && ei(n);
            }),
            V = "" !== C.trim() || F.length > 0 || y || H,
            W = N && V && B,
            [X, Z] = i.useState(null);
        i.useEffect(() => {
            if (null == X) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => Z(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [X]);
        let Q = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: o } =
                        ((t = (0, f.bG)([m.Ay], () => m.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, f.yK)(
                            [ri.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              ri.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, s8.Y_)(l), r.forEach(s8.Y_));
                        }, [l, r]),
                        (a = (0, f.bG)([li.default], () => (null == l ? null : li.default.getUser(l)), [l])),
                        (s = (0, f.yK)(
                            [li.default],
                            () => r.map((e) => li.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    c = (0, f.bG)([s6.default], () => s6.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...o].filter((e) => e.id !== c && !e.bot),
                    [u, o, c],
                );
            })(t),
            J = (0, s5.rU)(t),
            [ee, et] = i.useState(null),
            [en, el] = i.useState(0),
            er = i.useMemo(() => (null != M && N ? (0, s7.OG)(M, M.length) : null), [M, N]),
            ea = er?.start ?? null;
        i.useEffect(() => {
            null == ea ? et(null) : (0, s5.IP)(t);
        }, [ea, t]);
        let es = ea === ee ? null : er,
            eu = i.useMemo(() => (null == es ? [] : (0, s7.l$)(Q, J, es.text)), [es, Q, J]),
            ec = es?.text;
        i.useEffect(() => el(0), [ec]);
        let em = eu.length > 0,
            eh = Math.min(en, Math.max(0, eu.length - 1)),
            eg = i.useId(),
            ep = i.useCallback(
                (e) => {
                    let t = eu[e];
                    null != es &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (ud.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                ud.b.insertText(e, `${n} `));
                        })(A, es.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [eu, es, A],
            ),
            ex = i.useCallback(() => {
                if (!W) return;
                let e = K(),
                    n = H
                        ? (function (e) {
                              let t = ed(e);
                              if (null == t || !ei(t)) return null;
                              let n = t.history.present,
                                  l = nj(e);
                              return (
                                  ef(e, (e) => ({ ...e, history: Y, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, tg.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (ng.set(i, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  a = !1,
                                                  i = !1,
                                                  s = !1;
                                              async function u() {
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
                                              }
                                              function o() {
                                                  u().catch(() => {});
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
                                              capture: (t) => (0 === t ? l : nj(e)),
                                              composite: (e) => nm(e, n),
                                              upload: (t) =>
                                                  (0, tD.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, tD.n6)(e, t.id),
                                              send: (n) => (0, tg.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      nx(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (ng.delete(i),
                                                          window.setTimeout(() => {
                                                              (nx(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                o(C, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == uS && (uS = document.createElement("canvas").getContext("2d"));
                    let i = uS;
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
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(uI(eN.current), eR.current, (0, s7.Lj)(C));
                ("" !== l && Z(l), P(""), et(null));
            }, [W, H, t, C, o, K, P]),
            ev = i.useCallback(
                (e) => {
                    (e.preventDefault(), ex());
                },
                [ex],
            ),
            ej = i.useCallback(() => {
                null == c || q || (D(!0), c());
            }, [c, q]);
        !(function (e) {
            let { active: t, projectId: n, scopeRef: l, onEscape: r } = e,
                a = i.useRef(r);
            (i.useEffect(() => {
                a.current = r;
            }),
                i.useEffect(() => {
                    if (t)
                        return (
                            window.addEventListener("keydown", e, !0),
                            () => window.removeEventListener("keydown", e, !0)
                        );
                    function e(e) {
                        var t, r;
                        "Escape" === e.key &&
                            !e.isComposing &&
                            null == ed(n) &&
                            !G(n).active &&
                            ((t = e.target),
                            (r = l?.current),
                            (!(0, t$.vq)(t) ||
                                t === document.body ||
                                t === document.documentElement ||
                                (null != r &&
                                    r.contains(t) &&
                                    null == t.closest('input, textarea, [contenteditable="true"]'))) &&
                                (e.preventDefault(), e.stopPropagation(), a.current()));
                    }
                }, [t, n, l]));
        })({ active: s && null != c, projectId: t, scopeRef: d, onEscape: ej });
        let eb = null == j || "" !== C || !N || u || y ? null : j,
            ey = i.useCallback(
                (e) => {
                    if (em && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = eu.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), el((eh + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), ep(eh));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), et(es?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && s && null != c) {
                        (e.preventDefault(), e.stopPropagation(), ej());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eb) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), P(eb));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ex());
                },
                [ex, g, s, c, ej, eb, P, em, eu.length, eh, ep, es],
            ),
            ek = i.useCallback(
                (e) => {
                    N && z(e);
                },
                [N, z],
            );
        (0, sX.Vo)({
            event: e7.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ek(t);
            },
        });
        let eN = i.useRef(null),
            eA = i.useCallback(() => {
                let e = E.current;
                v?.((0, s7.Lj)(e), () => {
                    E.current === e && P("");
                });
            }, [v, P]),
            [eC, eI] = i.useState(0),
            [eE, eM] = i.useState(!1);
        i.useEffect(() => {
            if (0 === C.length) return void eM(!1);
            let e = uI(eN.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eI(t);
            }
            eM(!0);
            let t = setTimeout(() => eM(!1), uC);
            return () => clearTimeout(t);
        }, [C]);
        let e_ = i.useMemo(() => ({ "--custom-glow-x": `${eC}px` }), [eC]),
            eT = eE ? ` ${uy.EB}` : "",
            eP = u
                ? eS.intl.string(ew.default.qqlUiW)
                : r
                  ? eS.intl.string(ew.default.Z0hyNL)
                  : l
                    ? eS.intl.string(ew.default.GcFRaY)
                    : N
                      ? y
                          ? eS.intl.string(ew.default.knUjL3)
                          : b
                            ? eS.intl.string(ew.default.IevBEw)
                            : eS.intl.string(s ? ew.default["0BJa/0"] : ew.default.TEeU7z)
                      : eS.intl.string(ew.default.zZ9NgM),
            eR = i.useRef(0),
            eL = i.useRef(null),
            e$ = i.useCallback((e) => {
                if ((eL.current?.disconnect(), null == e)) return;
                eR.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eR.current = e.clientWidth;
                });
                (t.observe(e), (eL.current = t));
            }, []),
            eq = i.useId(),
            eD = i.useId(),
            eF = null != eb,
            eO = X ?? eb ?? eP,
            ez = "" === C && "" !== eO;
        return (0, a.jsxs)("form", {
            onSubmit: ev,
            className: uy.DA,
            children: [
                em
                    ? (0, a.jsx)(ur, {
                          id: eg,
                          projectId: t,
                          suggestions: eu,
                          selectedIndex: eh,
                          onHover: el,
                          onSelect: ep,
                      })
                    : null,
                F.length > 0 || H
                    ? (0, a.jsxs)("div", {
                          className: uy.lN,
                          children: [
                              F.map((e) => (0, a.jsx)(tG.Nl, { draft: e, onRemove: U }, e.localId)),
                              H ? (0, a.jsx)(s0, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${uy.wg} ${uy.LP}${eT}`, style: e_, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${uy.wg} ${uy.L3}${eT}`, style: e_, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: uy.VA,
                    ref: eN,
                    children: [
                        (0, a.jsx)(s9.A, {
                            navId: "conjure-composer-attach",
                            disabled: !N,
                            buttonClassName: `${uy.Y0} ${uy.nu}`,
                            iconClassName: uy.Qu,
                            onAddFiles: O,
                            onImport: x,
                            onSendToOtherProjects: null != v ? eA : void 0,
                        }),
                        ez
                            ? (0, a.jsx)("div", {
                                  ref: e$,
                                  className: uy.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uN, { text: eO, offering: eF && null == X, typed: null != X }),
                              })
                            : null,
                        (0, a.jsx)(nD.A, { id: eD, children: eS.intl.string(ew.default.ldNl9x) }),
                        (0, a.jsx)(rF.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sW.A, {
                                editor: A,
                                containerClassName: p()(uy.sq, uk.dv),
                                className: uy.jp,
                                readOnly: !N,
                                canFocus: N,
                                onChange: T,
                                onBlur: () => _(null),
                                onKeyDown: ey,
                                onPaste: ek,
                                renderExtraElement: ub,
                                "aria-labelledby": eD,
                                "aria-describedby": ez ? eq : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": em,
                                "aria-controls": em ? eg : void 0,
                                "aria-activedescendant": em ? ((0, ue.aI)(eh) ?? void 0) : void 0,
                            }),
                        }),
                        ez ? (0, a.jsx)(nD.A, { id: eq, children: eP }) : null,
                        (0, a.jsx)("div", {
                            className: uy.Sz,
                            children:
                                s && null != c
                                    ? (0, a.jsx)(tF.m, {
                                          text: eS.intl.string(ew.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${uy.Y0} ${uy.$E}`,
                                              disabled: q,
                                              onClick: ej,
                                              "aria-label": eS.intl.string(ew.default.wiguT0),
                                              children: (0, a.jsx)(rB.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : w?.tierSettings != null && null != S
                                      ? (0, a.jsx)(s2.A, {
                                            settings: w.tierSettings,
                                            tiers: w.tiers,
                                            choices: w.choices,
                                            disabled: !N,
                                            onChange: S,
                                            className: `${uy.Y0} ${uy.$E}`,
                                            icon: (0, a.jsx)(sH.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        $
                            ? (0, a.jsxs)("div", {
                                  className: uy.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: uy.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: uy.rt,
                                          disabled: !W,
                                          "aria-label": eS.intl.string(ew.default.rxW2cl),
                                          children: (0, a.jsx)(sV.SendMessageIcon, {
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
    uC = 1500;
function uI(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uE = n(709753),
    uM = n(540338);
function u_(e) {
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
var uT = n(986109);
let uP = i.createContext(null);
function uR(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: o,
        } = e,
        c = i.useContext(uP),
        [d, f] = i.useState(() => a3.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
        m = i.useCallback((e) => {
            e.target === e.currentTarget && f(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: o,
        onAnimationEnd: d ? void 0 : m,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: p()(uT.xk, { [uT.g5]: d, [uT.Qo]: s, [uT.q3]: u }),
        children: n,
    });
}
let uL = new Map();
function u$(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let uq = "live_behind",
    uD = "conjureTipDismissals",
    uF = new Set(),
    uO = new Set(),
    uz = 0;
function uG() {
    let e = su.w.get(uD);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uU(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return uF.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uG().anchor[t]?.[e.id] === n;
        case "app":
            return uG().app[t]?.includes(e.id) === !0;
        case "forever":
            return uG().forever.includes(e.id);
    }
}
function uB(e) {
    return (uO.add(e), () => uO.delete(e));
}
function uK(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, f.bG)([rv.A], () => null != n && n.length > 0 && ry({ keys: n }, rv.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: eS.intl.string(ew.default.F2yVHg) }
        : null;
}
function uH(e) {
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
let uV = [12e4];
var uW = n(292771);
function uX(e) {
    let { presentation: t, render: n } = e,
        l = (0, f.bG)([a3.Ay], () => a3.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let o = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = o.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = c.current,
            s = d.current,
            f = r?.offsetHeight ?? 0,
            h =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((c.current = h), (d.current = f));
        let g = m.current !== u;
        if (((m.current = u), !g || l || null == s || null == i || null == a || null == h)) return;
        let p = i.width / Math.max(1, h.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - h.left}px, ${i.top - h.top}px) scale(${p})`,
                    transformOrigin: "top left",
                },
                { transform: "none", transformOrigin: "top left" },
            ],
            { duration: 260, easing: "cubic-bezier(0.2, 0, 0, 1)" },
        ),
            n.animate([{ height: `${s}px` }, { height: `${f}px` }], {
                duration: 260,
                easing: "cubic-bezier(0.2, 0, 0, 1)",
            }));
    });
    let h = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [h, r]),
        (0, a.jsx)("div", {
            ref: o,
            className: uW.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: p()(uW.qd, e.leaving ? uW.dv : uW.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function uZ(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uY = n(247171);
function uQ(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: p()(uY.row, r),
        children: [
            (0, a.jsx)(o.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: p()(uY.gutter, uY[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uY.content, children: i }),
        ],
    });
}
var uJ = n(830205);
function u0(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uQ, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: uJ.aK,
        children: (0, a.jsxs)("div", {
            className: uJ.n8,
            children: [
                (0, a.jsx)(o.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: uJ.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uJ.X8,
                          children: (0, a.jsx)(tF.m, {
                              text: eS.intl.string(eS.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tX.K, {
                                  "aria-label": eS.intl.string(eS.t.WAI6xu),
                                  icon: tT.P,
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
function u1(e) {
    let { projectId: t } = e,
        n = i.useContext(tv.bI);
    return (0, a.jsx)(u0, {
        icon: iD.ShieldIcon,
        children: eS.intl.format(ew.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tv.vL)(t, n.guildId));
            },
        }),
    });
}
var u2 = n(443865),
    u3 = n(716502);
function u4(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uQ, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: u3.Nr,
        children: (0, a.jsxs)("section", {
            className: u3.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: u3.X8,
                          children: (0, a.jsx)(tF.m, {
                              text: eS.intl.string(eS.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tX.K, {
                                  "aria-label": eS.intl.string(eS.t.WAI6xu),
                                  icon: tT.P,
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
function u7(e) {
    let { children: t } = e;
    return (0, a.jsx)(o.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: u3.DD,
        children: t,
    });
}
function u5(e) {
    let { children: t } = e;
    return (0, a.jsx)(o.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: u3.rf,
        children: t,
    });
}
function u6(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: u3.o1, children: t });
}
var u8 = n(95635);
function u9(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = tE(t, n);
    return (0, a.jsx)(u0, {
        icon: u8.UploadIcon,
        onDismiss: l,
        children: eS.intl.format(ew.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let oe = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && uZ(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(u1, { projectId: n });
        },
    },
    {
        id: uq,
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
                (null != n.publishCta && sl(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(uq)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(u9, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || uZ(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(u4, {
                icon: u2.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(u7, { children: eS.intl.string(ew.default.OJlbhX) }),
                    (0, a.jsx)(u5, { children: eS.intl.string(ew.default["3vJBni"]) }),
                    (0, a.jsx)(u6, {
                        children: (0, a.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: eS.intl.string(ew.default["U/bLzU"]),
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
var ot = n(817921);
function on(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, tv.Ay)(e),
                    u = (0, f.bG)([li.default], () => li.default.getCurrentUser()?.id),
                    o = t.at(-1),
                    c = null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    d = (function (e, t) {
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
                    })(c, r),
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
                    h = null == m || uH(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === u$(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = uK(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, f.bG)([rv.A], () => b > 0 && null == rv.A.getSettings(e), [b, e]),
                    k = (0, uE.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, n_.Ji)(t)) || !!(0, n_.B0)(t, t.lastIndexOf(a))) &&
                        (null == m || !uH(m)) &&
                        null == u_(t) &&
                        null == j &&
                        !y &&
                        0 === k.length,
                    idleMs: null != c ? Math.max(0, d - c) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = uL.get(`${e}:${n}`);
                        return null != l ? u$(t, l, u) : null;
                    },
                    isDismissed: (t) => uU(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, uV);
            i.useSyncExternalStore(uB, () => uz);
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
                                uL.set(`${e}:${t}`, n);
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
                                          if (null == e.dismissal || uU(e, t, n)) return;
                                          let l = uG();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  uF.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  su.w.set(uD, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  su.w.set(uD, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  su.w.set(uD, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uz++, uO.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(oe, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uR, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: ot.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uX, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var ol = n(52133),
    or = n(732159),
    oa = n(888366),
    oi = n(862026),
    os = n(291192);
function ou(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, oi.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: os.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: os.Sp,
                children: [
                    (0, a.jsx)("span", { className: os.q3 }),
                    (0, a.jsxs)("span", {
                        className: os.g8,
                        children: [
                            (0, a.jsx)(oa.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(o.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: os.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: os.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(lx.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, eP.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(or.u, {
                                                                    ...t,
                                                                    title: eS.intl.string(ew.default["i+xjZM"]),
                                                                    subtitle: eS.intl.string(ew.default.fMBZmD),
                                                                    confirmText: eS.intl.string(ew.default.i5f3Uo),
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
                        ? (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var oo = n(345942),
    oc = n(468689),
    od = n(576705);
function of(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            eS.intl.format(n ? ew.default.esEGL5 : ew.default["XrN+Bg"], {
                onOpen: () => oc.A.open(t, e7.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
function om(e) {
    return (0, f.bG)([m.Ay, aW.A], () => {
        let t = m.Ay.getProject(e);
        return null == t ? "" : (aW.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var oh = n(951465),
    og = n(369455);
function op(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: u } = e,
        c = om(s),
        d =
            null ==
            (i = (0, f.bG)([m.Ay, lR.A], () => {
                let e = m.Ay.getProject(s);
                return null == e || "user" === e.install_scope || null == e.guild_id
                    ? null
                    : (lR.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        h = (0, f.cf)([m.Ay, tp.A, lR.A, od.A], () => {
            let e = m.Ay.getProject(s);
            if (null == e || "user" === e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eG.q7.AUTOMOD) === !0 ||
                    tp.A.getPublishStatus(s)?.surface === "automod",
                n = lR.A.getGuild(e.guild_id),
                l = null != n && od.A.can(e7.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(o.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            eS.intl.format(
                ((t = u),
                (n = d?.name ?? null),
                (l = h.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? ew.default.ESu5eZ
                        : ew.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? ew.default.ZnQW4S
                          : ew.default.ev23Cw
                      : t.update
                        ? r
                            ? ew.default["LuS8a/"]
                            : ew.default.gQzuLC
                        : l
                          ? ew.default.KORRGl
                          : r
                            ? ew.default["/npn7F"]
                            : ew.default.MOrR29),
                {
                    name: c,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, oo.u)(d.guildId);
                    },
                },
            ),
            null != h.guildId
                ? (0, a.jsx)(of, { guildId: h.guildId, update: u.update })
                : !h.automod && u.update && null != u.published_revision
                  ? (0, a.jsx)(ox, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function ox(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tv.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, f.cf)(
                    [tp.A, m.Ay],
                    () => {
                        let r = tp.A.getPublishStatus(e),
                            a = m.Ay.getProject(e);
                        return {
                            sent:
                                null == l ? null : (r?.patchNotesSent?.find((e) => e.publishedRevision === l) ?? null),
                            canOffer:
                                null != l &&
                                t.update &&
                                l === r?.publishedRevision &&
                                null != n &&
                                null != a &&
                                "user" !== a.install_scope &&
                                (0, m.jf)(a),
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
                      ? eS.intl.format(ew.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    nR.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: og.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, d.pX)(e7.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : eS.intl.format(ew.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = m.Ay.getProject(e),
                                        a = null == r ? null : (0, tv.KL)(r, l);
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
                                null != e && (0, oh.A)(e);
                            },
                        }),
              ],
          });
}
var ov = n(73153),
    oj = n(505527),
    ob = n(930390),
    oy = n(521981),
    ok = n(491182),
    ow = n(438729),
    oS = n(895597),
    oN = n(448368),
    oA = n(837528),
    oC = n(941308),
    oI = n(715628),
    oE = n(752636),
    oM = n(9842),
    o_ = n(589022),
    oT = n(967198),
    oP = n(531685),
    oR = n(417461);
let oL = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function o$(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function oq(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function oD(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = oq(e, t),
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
    if (o$(r) && o$(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && o$(oq(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oF(e, t) {
    let { streaming: n } = t,
        l = (0, f.bG)([a3.Ay], () => a3.Ay.useReducedMotion),
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
                      for (; a > 0 && oD(t, a);) a--;
                      return a;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== a && s(u));
    let o = r && u.length < e.length,
        c = i.useRef(u);
    i.useLayoutEffect(() => {
        c.current = u;
    });
    let d = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (o)
            return (
                (m.current = 0),
                (d.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
                        let e = c.current,
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
                                    for (; l > t + 1 && n - l < 12 && oL.has(e.charAt(l - 1));) l--;
                                    return oL.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && oD(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    d.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(d.current)
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
                let { target: e } = c.current;
                s({ target: e, length: e.length });
            }
        }, [o]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var oO = n(624479),
    oz = n(890377),
    oG = n(92446),
    oU = n(957565),
    oB = n(180227);
function oK(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: p()(oB.QE, { [oB.Rn]: t }),
              children: (0, a.jsx)(ik.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          ik.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function oH(e) {
    return oU.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eS.intl.string(eS.t.JrGD7E), icon: oO.CopyIcon, onClick: () => (0, oU.C)(e) }]
        : [];
}
function oV(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: eS.intl.string(ew.default.CXtLD2),
                          tooltip: eS.intl.string(ew.default.DOb1HM),
                          icon: oz.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eS.intl.string(ew.default.urZwpN),
                          icon: tT.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(oK, { groupStart: n, actions: [...r, ...oH(t)] });
}
function oW(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: eS.intl.string(ew.default.H8Jfhu), icon: tQ.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oG.BugIcon, onClick: r }];
    return (0, a.jsx)(oK, { groupStart: n, actions: [...i, ...oH(t), ...s] });
}
let oX = (0, aY.createChannelRecord)({ id: "conjure-builder", type: e7.rbe.DM }),
    oZ = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oY(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: p()(oB.Yq, { [oB.x1]: t }), children: e });
}
function oQ(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let oJ = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function o0(e, t, n) {
    let { content: l } = (0, oC.A)(e, oJ),
        r = i.useMemo(() => ((0, rF.aW)(e.content) ? (0, oy.z2)(sq.U, e, oJ).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: oX, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(ow.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, oI.A)(s, r);
}
function o1(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oA.m)(e, oX, t.usernameProfile, l),
        u = (0, oA.Jo)(t.avatarProfile, l),
        o = (0, f.bG)([oT.A], () => oT.A.getGuildId()),
        c = (0, f.bG)([li.default], () => li.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = li.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, a.jsx)(o_.A, { ...t, user: n, currentUser: c, guildId: o ?? void 0 });
            },
            [c, o, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: d,
        guildId: o ?? void 0,
    };
}
function o2(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, rF.aW)(n.content)
                          ? (0, oy.z2)(sq.U, n, e).content
                          : (0, oy.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: oB.GV,
                              children: [
                                  (0, a.jsx)(j.x, {
                                      className: oB.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          t,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, f.cf)(
            [la.A],
            () => ({
                isReplyAuthorBlocked: la.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: la.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, ib.X4)(n),
        d = (0, ib.X4)(t),
        m = o1(n);
    return (0, a.jsx)(oN.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: oX,
        referencedMessage: { state: oM.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: m.renderPopout,
        showAvatarPopout: m.showAvatarPopout,
        showUsernamePopout: m.showUsernamePopout,
        onClickAvatar: m.onClickAvatar,
        onClickUsername: m.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: m.onPopoutRequestClose,
    });
}
function o3(e) {
    let { message: t, author: n } = e,
        l = o1(t);
    return (0, a.jsx)(oS.Ay, {
        message: t,
        channel: oX,
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
function o4(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, s8.vm)(l),
        c = i.useMemo(() => (0, ib.FT)(o, null), [o]),
        d = i.useMemo(() => D(t), [t]),
        f = d?.body ?? t,
        m = (0, s7.Qu)(f),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, aZ.Ay)({ channelId: oX.id, content: f, author: o });
            return (0, aX.rh)({ ...e, timestamp: oQ(n, e.timestamp), state: e7.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              o7,
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
function o7(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = o0(t, l);
    return (0, a.jsx)(ok.A, {
        className: oB.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(o3, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? (0, oR.b)(l)
                    ? (0, a.jsx)("div", { className: oB.dg, children: o })
                    : o
                : (0, a.jsxs)("div", {
                      className: oB.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: oB.GV,
                              children: [
                                  (0, a.jsx)(j.x, {
                                      className: oB.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: oB.WO, children: o }),
                      ],
                  }),
        childrenAccessories: oY(i, "" !== l),
        childrenButtons: (0, a.jsx)(oV, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function o5(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: o = !1,
            buttons: c,
        } = e,
        { text: d, revealing: m } = oF(t, { streaming: (0, f.bG)([oP.A], () => o && oP.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, ib.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, s8.vm)(p),
        v = i.useMemo(() => (null == r ? null : D(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aZ.Ay)({ channelId: oX.id, content: v?.body ?? r.content, author: x });
            return (0, aX.rh)({ ...e, id: r.id, timestamp: oQ(r.createdAt, e.timestamp), state: e7.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: oX.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aZ.Ay)({ channelId: oX.id, content: "", author: oZ })),
        k = i.useMemo(
            () =>
                (0, aX.rh)({
                    ...y,
                    timestamp: oQ(n, y.timestamp),
                    state: e7.cmJ.SENT,
                    ...(null != b ? { type: e7.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        S = i.useMemo(
            () => (0, oE.A)({ message: k, channel: oX, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        N = o0(w, d, oB.OS);
    return (0, a.jsxs)("div", {
        className: oB.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(ok.A, {
                className: oB.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(o2, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: S,
                childrenMessageContent: N,
                childrenAccessories: oY(l, "" !== d),
                disableInteraction: !0,
            }),
            c,
            u ? (0, a.jsx)("img", { className: oB.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var o6 = n(981879);
function o8(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, aX.rh)(
                    { ...(0, aZ.Ay)({ channelId: oX.id, content: "" }), id: `conjure:${t}`, state: e7.cmJ.SENT },
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
                (ov.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: oX.id,
                    messageId: l.id,
                    users: [oZ],
                    emoji: e,
                    reactionType: oj.v.NORMAL,
                }),
                    ov.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: oX.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: oj.v.NORMAL,
                    }));
            }
            return (
                t(),
                ov.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    ov.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: o6.H,
            children: (0, a.jsx)(ob.A, {
                message: l,
                channel: oX,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var o9 = n(442433);
n(775443);
var ce = n(616e3),
    ct = n(155899);
function cn(e) {
    let { onSelect: t, onClose: n = o9.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(e9.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": eS.intl.string(eS.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(te.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(te.Dr, {
                          id: "restore-version",
                          label: eS.intl.string(ew.default.H8Jfhu),
                          icon: tQ.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(te.Dr, { id: "view-trace", label: "View Trace", icon: oG.BugIcon, action: r })
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
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: u,
            secretRequestAwaiting: o,
            secretRequestStatus: c,
            settingsFloating: d = !1,
            isNewest: m = !1,
            onPickIdea: h,
            onApprovePlan: g,
            onRestoreVersion: p,
        } = e,
        x = n.message,
        v =
            null != p
                ? "assistant" !== x.role || null == x.sourceSha
                    ? null
                    : {
                          sha: x.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(x.created_at).toISOString(),
                          subject: x.content,
                      }
                : null,
        j = null != v && null != p ? () => cr(v, p) : void 0,
        b =
            ((t =
                eM() && "assistant" === x.role && (0, n_.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, f.bG)(
                [ce.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : ce.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        y =
            null != b
                ? () =>
                      (function (e, t) {
                          for (let n of ((eC = { projectId: e, traceId: t }), [...eA])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(uR, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != j || null != y
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = j),
                          (l = y),
                          void (0, o9.jA)(t, (e) => (0, a.jsx)(cn, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(o5, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(oW, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(sG, {
                projectId: l,
                steps: x.steps,
                content: "",
                proposal: x.proposal,
                planVersion: s,
                interrupted: !0 === x.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: x.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : x.ideas,
                pickedIdeaIds: null == x.ideas ? void 0 : u,
                attachments: x.attachments,
                secretRequest: n.active ? void 0 : x.secretRequest,
                secretRequestId: x.render_id,
                secretRequestAwaiting: o,
                secretRequestStatus: c,
                settingsRequest: n.active || d ? void 0 : x.settingsRequest,
                settingsAskId: x.id,
                publishCta: n.active ? null : x.publishCta,
                turnId: (0, n_.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: m,
                onRestoreProposal:
                    null != w && null != p && m
                        ? () =>
                              cr(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  p,
                              )
                        : void 0,
            }),
        }),
    });
}
function cr(e, t) {
    (0, ct.F)({ onConfirm: () => t(e) });
}
var ca = n(288539),
    ci = n(677683),
    cs = n(677690),
    cu = n(159711);
function co(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, f.bG)([ci.A], () => ci.A.getOutcome(l))),
            (n = (0, f.bG)(
                [lr.A, li.default, la.A],
                () => {
                    let e = t?.status === "pinned" ? lr.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, ll.m1)(e, li.default, la.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = eS.intl.string(ew.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(nz, {
              title: s,
              children: (0, a.jsx)(o.E, {
                  className: cu.r,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? eS.intl.formatToPlainString(ew.default.gKe6Lw, { channelName: i ?? "" })
                          : eS.intl.string(ew.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(nz, { title: s, children: (0, a.jsx)(cc, { projectId: l }) });
}
function cc(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: u,
            failed: c,
            pin: d,
            skip: h,
        } = (function (e) {
            var t;
            let n = (0, f.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, f.yK)(
                        [lT.Ay, od.A],
                        () =>
                            null == t
                                ? []
                                : lT.Ay.getChannels(t)
                                      [lT.vM].map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === e7.rbe.GUILD_VOICE && od.A.can(e7.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, a] = i.useState(null),
                [s, u] = i.useState(!1),
                [o, c] = i.useState(!1),
                d = l.find((e) => e.id === r) ?? null,
                h = n?.application_id,
                g = i.useCallback(async () => {
                    if (null == d || null == h) return;
                    (u(!0), c(!1));
                    let t = await (0, cs.pk)(d.id, h);
                    (u(!1), t ? (0, cs.tg)(e, { status: "pinned", channelId: d.id }) : c(!0));
                }, [h, e, d]),
                p = i.useCallback(() => (0, cs.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: d,
                setPicked: a,
                pinning: s,
                failed: o,
                pin: g,
                skip: p,
            };
        })(t),
        g = (0, lA.A)(n, "voice"),
        p = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (g ?? []).filter((t) => e.has(t.value));
        }, [l, g]);
    return (0, a.jsx)("div", {
        className: cu.r,
        children: (0, a.jsxs)(i9.B, {
            gap: 12,
            children: [
                (0, a.jsx)(o.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eS.intl.string(ew.default["1vVBAw"]),
                }),
                p.length > 0
                    ? (0, a.jsx)(n8.Z, {
                          selectionMode: "single",
                          label: eS.intl.string(ew.default.peOi1H),
                          placeholder: eS.intl.string(ew.default["9+dfPT"]),
                          options: p,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: c ? eS.intl.string(ew.default.d7EeAm) : void 0,
                          disabled: u,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eS.intl.string(ew.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: cu.o,
                    children: [
                        (0, a.jsx)(x.$, {
                            variant: "secondary",
                            size: "sm",
                            text: eS.intl.string(ew.default.Iw0l8o),
                            disabled: u,
                            onClick: h,
                        }),
                        p.length > 0
                            ? (0, a.jsx)(x.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: eS.intl.string(ew.default.FYI3qr),
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
function cd(e, t, n) {
    return (0, a.jsx)(ca.A, { userId: e, content: `@${t}` }, n);
}
function cf(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, s8.Y_)(l);
            }, [l]);
            let r = (0, f.bG)([li.default], () => (null == l ? null : li.default.getUser(l)), [l]),
                a = (0, aJ.tx)(r),
                s = om(e),
                u =
                    (0, f.bG)([lR.A], () => (null == t.guild_id ? null : lR.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? eS.intl.string(ew.default.R1tPlP),
                o = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? eS.intl.format(ew.default.Lwsrhg, { app: s, server: u })
                        : eS.intl.format(ew.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? eS.intl.format(ew.default.mT7EQG, { app: s, server: u })
                        : eS.intl.format(ew.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? eS.intl.format(ew.default["4LVIeo"], { app: s, server: u })
                        : eS.intl.format(ew.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? eS.intl.format(ew.default["4VQfid"], { channel: e, server: u })
                        : eS.intl.format(ew.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return eS.intl.format(ew.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return eS.intl.string(ew.default.UGAfl9);
            }
        })(t, n, cd),
        r = uK(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(co, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(o.E, { variant: "text-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rR, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let cm = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    np.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rF.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(uR, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o4, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(s$.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, a.jsx)(s1, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, a.jsx)(o8, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, rO.tp)(e, t.id, n);
                            })(l, u, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uR, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o5, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, a.jsx)(s$.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(uR, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sz, {
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
                    return (0, a.jsx)(uR, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o5, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(op, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uR, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o5, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cf, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uR, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, a.jsx)(ou, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uR, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sz, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uR, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sz, {
                            projectId: l,
                            steps: ch,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cl, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, ol.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, ol.A)(e.row, t.row, ["message"]) &&
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
                (0, ol.A)(e.replyTo, t.replyTo) &&
                (0, ol.A)(e.planVersion, t.planVersion) &&
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
let cj = ["wheel", "touchstart", "pointerdown", "keydown"];
function cb(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cy = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: d,
            floatingSettingsMessageId: m,
            liveClarificationId: h,
            onRestoreVersion: g,
            scrollerRef: x,
            stickToBottomRef: v,
            pinned: j,
            onUnpin: b,
            handleRef: y,
            onShowsLatestChange: k,
        } = e,
        w = i.useRef(null),
        [S, N] = i.useState(null),
        A = i.useCallback((e) => {
            ((w.current = e), N(e));
        }, []),
        [C, I] = i.useState(null),
        E = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(E.current), []);
    let M = i.useCallback((e) => {
            (I(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        _ = (0, f.bG)([tp.A], () => tp.A.getPublishStatus(t)),
        T = (0, f.bG)([li.default], () => li.default.getCurrentUser()?.id),
        P = i.useMemo(() => {
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
                                        let t = (0, nM.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = cp.get(r);
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
                        let a = !(0, n_.BL)(e),
                            i = rK({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            u = (0, nM.C6)(e.steps, { turnActive: a }),
                            { lastWork: o, open: c } = (0, nM.CT)(u, { turnActive: a }),
                            d = u.at(-1)?.index,
                            f = !1;
                        for (let n of u) {
                            if (null != n.prose && cg.test(n.prose.content)) f = !0;
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
                                        turnActive: nT(e),
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
                            (i.showsClosingMessage && !m) ||
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
                    (cp.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return sn(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, _)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = sr.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), sr.set(t, n)), n);
                      })),
                h,
            );
        }, [n, _, h]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return cx(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cv(e, t.endKey, t.end - 1) + 1,
                a = cv(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cx(e, a, r));
        })(R, L, j),
        D = i.useRef(q),
        F = i.useRef(R),
        O = i.useRef(P),
        z = i.useRef(null),
        G = i.useRef(null),
        U = i.useRef(new Set()),
        B = i.useRef(null),
        K = i.useRef(!1),
        H = i.useCallback(() => {
            let e = x.current?.getScrollerNode(),
                t = K.current ? cb(w.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [x]);
    i.useLayoutEffect(() => {
        let e = x.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            K.current = !1;
        };
        for (let n of cj) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cj) e.removeEventListener(n, t);
        };
    }, [x]);
    let V = i.useCallback(() => {
            let e = x.current?.getScrollerNode(),
                t = w.current;
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
            z.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [x]),
        W = i.useCallback(() => {
            let e = x.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cx(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cx(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cx(e, i, t.end) : null;
            })(F.current, D.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: v.current,
            });
            "older" === n ? (0, tg.loadOlderHistory)(t) : null != n && $(n);
        }, [x, v, t]);
    i.useImperativeHandle(
        y,
        () => ({
            handleScroll() {
                (V(),
                    $((e) => {
                        let t = D.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    W());
            },
            recordAnchor: V,
            showLatest(e) {
                ((K.current = !1), (G.current = e ?? null), $(null));
            },
            snapshot() {
                let e = z.current;
                return null == e ? null : { window: D.current, anchor: e };
            },
            restore(e) {
                let { window: t, anchor: n } = e;
                if (!F.current.includes(n.key)) return !1;
                (b(), (z.current = n));
                let l = D.current;
                if (l.startKey === t.startKey && l.endKey === t.endKey) {
                    let e = x.current?.getScrollerNode(),
                        t = w.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else $(t);
                return !0;
            },
        }),
        [V, W, b, x],
    );
    let X = i.useRef(null),
        Z = i.useCallback(
            (e) => {
                var n;
                let l;
                ((X.current = null), (K.current = !1));
                let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (b(), $(D.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = O.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, tg.loadOlderHistory)(t) && (X.current = e);
                    return;
                }
                (b(),
                    (G.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = F.current), cx(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, b, t],
        );
    (i.useEffect(() => {
        let e = X.current;
        null != e && Z(e);
    }, [P, Z]),
        i.useLayoutEffect(() => {
            if (null == S) return;
            let e = S.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), v.current)) return void x.current?.scrollToBottom();
                        (H(), V());
                    }
                });
            return (t.observe(S), () => t.disconnect());
        }, [S, H, V, x, v]));
    let Y = null == q.endKey;
    (i.useEffect(() => k?.(Y), [Y, k]),
        i.useLayoutEffect(() => {
            ((D.current = q), (F.current = R), (O.current = P));
        }),
        i.useLayoutEffect(() => {
            let e = x.current?.getScrollerNode(),
                l = w.current,
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
                    })(B, t, n);
            if (null != e && null != l) {
                let t = z.current;
                if (r && v.current && null != cb(l)) (b(), $(D.current), (K.current = !0), H());
                else if (v.current) x.current?.scrollToBottom();
                else if (K.current) H();
                else if (null != t) {
                    let n = Array.from(l.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === t.key,
                        ),
                        r = null == n ? 0 : n.getBoundingClientRect().top - e.getBoundingClientRect().top - t.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let n = G.current;
                ((G.current = null), n?.(), V(), W());
            }
            U.current = new Set(R);
        }, [t, n, P, R, q.start, q.end, x, v, b, H, V, W]));
    let Q = i.useMemo(() => u_(n), [n]),
        J = i.useMemo(
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
        ee = i.useMemo(
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
        et = i.useMemo(
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
        en = n.at(-1),
        el =
            (en?.role !== "assistant" || null == en.awaitingUser || null == en.secretRequest
                ? null
                : (0, n_.BL)(en)
                  ? en.awaitingUser
                  : null) ?? void 0,
        er = (0, f.bG)([rv.A], () => rv.A.getSettings(t)?.secrets, [t]),
        ea = (0, uE.WT)(t),
        ei = i.useMemo(() => (0, rj.Mv)(n, er), [n, er]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: p()(uT.x7, uT.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uT.Ub, children: (0, a.jsx)(c.y, {}) }),
            });
        let e = "unavailable" === l ? ew.default.Td4Sf4 : ew.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uT.x7,
            children: (0, a.jsx)(uR, { role: "assistant", children: (0, a.jsx)(o5, { content: eS.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uP.Provider, {
        value: U,
        children: (0, a.jsxs)("ol", {
            ref: A,
            className: uT.x7,
            children: [
                P.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cm,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && C === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === en;
                    return (0, a.jsx)(
                        cm,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? et.get(n.in_reply_to) : void 0,
                            onJumpTo: Z,
                            planVersion: J.get(n.render_id),
                            pickedIdeaIds: ee.get(n.render_id),
                            secretRequestAwaiting: l ? el : void 0,
                            secretRequestStatus: ei.get(n.render_id),
                            settingsFloating: n.id === m,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === Q ? d : void 0,
                            onRestoreVersion: g,
                        },
                        e.key,
                    );
                }),
                Y
                    ? ea.map((e) =>
                          (0, a.jsx)(
                              uR,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(o5, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uM.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != el && Y
                    ? (0, a.jsx)(uR, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(o5, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eS.intl.string(ew.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                Y ? (0, a.jsx)(on, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var ck = n(731084),
    cw = n(823376),
    cS = n(187447);
function cN(e) {
    let { activity: t, id: n } = e,
        l = (0, nE.j)(),
        { text: r, revealing: s } = oF(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cS.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nA.Ch, {
                ref: u,
                className: cS.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: p()(sO.PT, cS.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: a8.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cA = n(53659);
function cC(e) {
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
        g = i.useRef(null),
        x = i.useId(),
        [v, j] = i.useState(null),
        b = (0, ck.xu)({
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
        y = eS.intl.string(b),
        k = b === ck.kx["0"],
        [w, S] = i.useState(m ?? y),
        N = (0, nE.j)();
    (l || (0, ck.E4)(y, w) || (!N && !k)) && w !== y && S(y);
    let A = i.useRef(y);
    (i.useEffect(() => {
        A.current = y;
    }, [y]),
        i.useEffect(() => {
            h?.(w);
        }, [w, h]));
    let C = i.useRef(null),
        I = i.useRef(w);
    i.useEffect(() => {
        I.current = w;
    }, [w]);
    let E = i.useRef(k),
        M = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = k), !k && (0, ck.E8)(I.current) && S(A.current));
    }, [k]),
        i.useEffect(() => {
            if (!N) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((M.current = (0, ck.E8)(I.current) ? M.current + 1 : 0), S((0, ck.Ov)(M.current)))
                    : A.current !== I.current
                      ? S(A.current)
                      : C.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, ck.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [N]));
    let _ = null != t && "" !== t.text,
        T = t?.session ?? null,
        P = _ && null != T && v === T,
        R = i.useCallback(() => {
            _ && null != T && j((e) => (e === T ? null : T));
        }, [_, T]),
        L = i.useCallback(() => j(null), []);
    return (0, a.jsx)(e8.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(cN, { id: x, activity: t }),
        children: () =>
            (0, a.jsxs)(nR.D, {
                innerRef: g,
                className: p()(cA.hF, _ && cA.Xd),
                "aria-label": eS.intl.string(
                    r
                        ? ew.default.qqlUiW
                        : b === ew.default.j8tmjK
                          ? ew.default.j8tmjK
                          : k
                            ? ck.kx["0"]
                            : ew.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? x : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eS.intl.string(b),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: cA.bl,
                        children: (0, a.jsx)(cw.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cA.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: N
                            ? (0, a.jsx)(sU.o, {
                                  ref: C,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: ck.vg,
                                  delay: null,
                                  className: cA.yE,
                              })
                            : (0, a.jsx)(o.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: cA.yE,
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
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cI[t];
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
var cM = n(719374);
function c_(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = cE(t);
    return (0, a.jsx)(o.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cM.$,
        "data-conjure-turn-timer": !0,
        children: (0, r0.C7)(l),
    });
}
function cT(e) {
    let { startedAt: t } = e,
        n = cE(t, "minute");
    return (0, a.jsx)(nD.A, { role: "timer", children: (0, r0.Us)(n) });
}
var cP = n(885574),
    cR = n(242779),
    cL = n(436804);
function c$(e) {
    return e.toLocaleString();
}
function cq(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cL.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cL.mf,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [c$((0, cR.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(o.E, {
                tag: "div",
                variant: "text-xs/normal",
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
function cD(e) {
    let { project: t } = e,
        n = (0, cR.wU)(t.compaction),
        l = (0, cR.wU)(t.classifier),
        r = (0, cR.wU)(t.image),
        i = (0, cR.wV)(t.orchestrator, t.codegen),
        s = (0, cR.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cL.si,
        role: "dialog",
        "aria-label": eS.intl.string(ew.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cL.Q$,
                children: (0, a.jsxs)("div", {
                    className: cL.mf,
                    children: [
                        (0, a.jsxs)(o.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [c$((0, cR.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(o.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cq, { label: eS.intl.string(ew.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cq, { label: eS.intl.string(ew.default.ANCEo3), usage: n }),
            (0, a.jsx)(cq, { label: eS.intl.string(ew.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cq, { label: eS.intl.string(ew.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cL.mf,
                children: [
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eS.intl.string(ew.default["8OUg09"]),
                    }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cR.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cR.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cF(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(e8.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cD, { project: t }),
        children: (e) =>
            (0, a.jsx)(nR.D, {
                innerRef: n,
                className: cL.Y$,
                "aria-label": eS.intl.string(ew.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cP.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cO = n(990250);
function cz(e) {
    let { queued: t } = e,
        n = eS.intl.string(ew.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cO.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cO.wx,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(nA.Ch, {
                className: cO.XG,
                children: (0, a.jsx)("ul", {
                    className: cO.p_,
                    children: t.map((e) => (0, a.jsx)(cG, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cG(e) {
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
              className: cO.AS,
              children: (0, a.jsx)(o.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: eS.intl.string(ew.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cO.AS,
              children: [
                  (0, a.jsx)(o.E, {
                      ref: n,
                      variant: "text-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cO.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(lx.Q, {
                            variant: "secondary",
                            textVariant: "text-xs/medium",
                            text: eS.intl.string(l ? ew.default.nEMoeN : ew.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cU(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(e8.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cz, { queued: t }),
        children: (e) =>
            (0, a.jsx)(nR.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(o.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: eS.intl.formatToPlainString(ew.default.REnNUn, { count: t.length }),
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
            recalling: u = !1,
            thinkingActivity: c,
            compacting: d,
            saving: m,
            projectUsage: h,
            connState: g,
            queued: x,
        } = e,
        v = (0, e_.Zv)(t),
        j = (0, f.bG)([tp.A], () => tp.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, ck.E8)(e) || e === eS.intl.string(ew.default.mKK6wB) || e === eS.intl.string(ew.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, ck.uc)(h),
        S = null != s,
        N = s ?? (n ? l : void 0),
        A = n || r || S || !0 === m;
    return (0, a.jsxs)("div", {
        className: cB.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cB.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    A || u || v || j
                        ? (0, a.jsx)(cC, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: S,
                              recalling: u,
                              controlling: v,
                              publishPending: j && A,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != N ? (0, a.jsx)(c_, { startedAt: N }) : null,
                ],
            }),
            null != N ? (0, a.jsx)(cT, { startedAt: N }) : null,
            0 === x.length ? null : (0, a.jsx)(cU, { queued: x, className: p()(cB.BP, cB.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cB.BP,
                      children: [
                          (0, a.jsx)(o.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(cF, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(o.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eS.intl.formatToPlainString(ew.default["tCo+ZM"], { status: (0, ck.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cB.XF,
                      children: (0, ck.Db)(g),
                  }),
        ],
    });
}
var cH = n(698638),
    cV = n(608711);
let cW = [eS.intl.string(ew.default["9w+Chc"]), eS.intl.string(ew.default.WAvmdq), eS.intl.string(ew.default.SKsrzl)];
function cX(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        c,
        { projectId: d, restoreState: h, onRestoreVersion: g, onImportProject: p, escapeScopeRef: v } = e,
        j = (0, f.bG)([ri.A], () => ri.A.getMessages(d), [d]),
        b = (0, f.bG)([tg.default], () => tg.default.getConnState(d), [d]),
        y = (0, f.bG)([ri.A], () => ri.A.getProjectUsage(d), [d]),
        k = (0, f.bG)([ri.A], () => ri.A.getThinkingActivity(d), [d]),
        w = (0, f.bG)([ri.A], () => ri.A.isCompacting(d), [d]),
        S = (0, f.bG)([ri.A], () => ri.A.isSaving(d), [d]),
        N = ru(d),
        A = (0, f.bG)([rn.A], () => rn.A.getModelSettings(d), [d]),
        C = i.useRef(null),
        I = i.useRef(null),
        E = i.useRef(null),
        M = i.useRef(null),
        {
            stickToBottomRef: _,
            pinned: P,
            atBottom: R,
            unpin: $,
            releasePinHold: q,
            showsLatest: D,
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
                f = i.useRef(!0),
                m = i.useCallback((e) => {
                    ((f.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of cj) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of cj) t.removeEventListener(e, o);
                    };
                }
            }, [e, o]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && f.current;
                t.current = i;
                let u = r > 1 || !f.current;
                (a((e) => (!u === e ? e : !u)), l((e) => (e === i ? e : i)));
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
        })(I),
        G = i.useCallback(() => {
            function e() {
                let e = C.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (q(), F.current ? e() : E.current?.showLatest(e));
        }, [q, F]),
        U = i.useCallback(() => {
            (z(), E.current?.handleScroll());
            let e = M.current;
            null != e && (e.position = _.current ? null : (E.current?.snapshot() ?? null));
        }, [z, _]),
        B = i.useContext(eq) === d;
    i.useLayoutEffect(() => {
        if (!B) return;
        let e = { position: eF.A.getProjectView(d).chatScroll };
        return ((M.current = e), () => (0, eD.g7)(d, { chatScroll: e.position }));
    }, [B, d]);
    let K = i.useRef(!B);
    (i.useLayoutEffect(() => {
        if (K.current || 0 === j.length) return;
        K.current = !0;
        let e = eF.A.getProjectView(d).chatScroll;
        null != e && E.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [j, d]),
        i.useLayoutEffect(() => {
            let e = C.current;
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
                    r && (_.current ? I.current?.scrollToBottom() : E.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [_]),
        i.useEffect(() => {
            (0, tg.ensureConnection)(d);
        }, [d]),
        (0, rz.E1)(d, (0, nE.j)()));
    let V = Z(d),
        W = (function (e) {
            let t = (0, tv.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, f.bG)([lR.A], () => (null == n ? null : (lR.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: eS.intl.format("channel" === s ? ew.default["1cm4fj"] : ew.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(d),
        X = (function (e) {
            let t = (0, f.bG)([r$.A], () => r$.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rq.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rL.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? eS.intl.format(ew.default["bw/n4C"], { helpdeskURL: e })
                            : eS.intl.format(ew.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: eS.intl.formatToPlainString(ew.default.GHgG2B, { percent: l, limit: n }) };
        })(d),
        Y =
            ((l = (0, f.bG)([rr.A], () => rr.A.getFailure(d))),
            (r = i.useCallback(() => (0, ra.CM)(d), [d])),
            null == l
                ? null
                : {
                      message: eS.intl.format(ew.default.Up6Ssw, { reason: l }),
                      retry: { text: eS.intl.string(ew.default["ywA+ET"]), onClick: r },
                  }),
        Q = (0, f.bG)([rr.A], () => rr.A.getSetupStartedAt(d), [d]),
        J = i.useCallback(
            (e, t) => {
                (0, tg.sendUserMessage)(d, e, t);
            },
            [d],
        ),
        ee = i.useCallback(
            (e, t, n) => {
                let l = n ?? J;
                0 === V.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => T(e.comment)),
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
                                      a.push(`${t + 1}. ${L(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: V.annotations, metaComment: e, context: V.context }),
                          t,
                      ),
                      H(d));
            },
            [V, J, d],
        ),
        et = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of ng)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, tg.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = ng.get(e);
                            (ng.delete(e), nx(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(d) ||
                ri.A.isThinking(d)) &&
                (0, tg.interruptTurn)(d);
        }, [d]),
        en = i.useCallback((e) => (0, n2.RQ)(d, e.implementation_prompt), [d]),
        [el, er] = (function (e) {
            let [t, n] = i.useState(() => rU(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rU(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(d),
        ea = i.useCallback(() => J(eS.intl.string(ew.default["t5CN3+"])), [J]),
        ei = i.useCallback((e, t, n) => (0, n2.RQ)(d, e, { clarificationAnswers: t, attachments: n }), [d]),
        es = i.useCallback((e) => (0, rl.X)(d, e), [d]),
        eu = i.useCallback((e) => (0, tD.vX)(d, e), [d]),
        eo = i.useCallback((e) => (0, tG.gn)(d, "chat", Array.from(e), eu), [d, eu]),
        ec = i.useCallback(() => (0, n2.RQ)(d, eS.intl.string(ew.default.Zc7gML)), [d]),
        ed = h?.status === "restoring",
        ef = "open" === b && !ed,
        em = j[j.length - 1],
        eh = null != em && "assistant" === em.role && null != em.proposal,
        [eg, ep] = i.useState(null),
        ex = i.useMemo(
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
        ev = null != ex && ex.id !== eg ? ex : null,
        ej = i.useCallback(() => {
            null != ev && ep(ev.id);
        }, [ev]),
        [ey, ek] = i.useState(null),
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
                                summary: eS.intl.string(ew.default["o2++BO"]),
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
        })(d),
        eA = em?.appBuildRequest != null && (0, n_.BL)(em) && em.appBuildRequest.id !== ey ? em.appBuildRequest : null,
        eC = eN.request ?? (null == ev ? eA : null),
        eI = null == eN.request ? ev : null,
        eE = null != eC && eC === eN.request,
        { close: eM, sent: e_ } = eN,
        eT = eN.request?.id,
        eP = i.useCallback(() => {
            eE ? eM() : null != eC && ek(eC.id);
        }, [eC, eE, eM]),
        eR = i.useCallback(
            (e) => {
                (null != eT && e_(eT),
                    (0, eb.P0)({
                        text: eS.intl.formatToPlainString(ew.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [eT, e_],
        ),
        eL = (0, f.bG)([rv.A], () => rv.A.getSettings(d), [d]),
        [e$, eO] = i.useState(null),
        ez = rA(),
        eG =
            null != em &&
            ((t = em.id),
            (s = (0, rj.Mv)(j, eL?.secrets)),
            (u = rC(j)),
            j.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, n_.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !rI(e.settingsRequest, eL, ez.has(e.id)))),
            )),
        eU =
            null != em &&
            "assistant" === em.role &&
            null != em.settingsRequest &&
            null == em.secretRequest &&
            (0, n_.BL)(em) &&
            em.id !== e$ &&
            ((n = em.settingsRequest),
            (c = n.keys ?? []),
            null != eL &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eL.schema.find((t) => t.key === e);
                    return null != t && rb.has(t.type);
                })) &&
            ry(em.settingsRequest, eL) &&
            !eG
                ? em
                : null,
        eB = null == eN.request ? eU : null,
        eK = eB?.settingsRequest ?? null,
        eH = i.useCallback(() => {
            null != eU && eO(eU.id);
        }, [eU]),
        eV = null != eK,
        [eW, eX] = i.useState(null),
        eZ = eI?.id ?? eC?.id ?? eB?.id ?? (N ? "scope-setup" : void 0),
        eY = null != ev || null != eC || null != eU || N;
    i.useLayoutEffect(() => {
        let e = I.current?.getScrollerNode(),
            t = eW?.firstElementChild;
        if (null == eW || null == e || !(0, t$.vq)(t, HTMLElement) || null == eZ) return;
        function n() {
            _.current && I.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eW.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eW, eZ, I, _]);
    let eQ = (0, f.bG)([ri.A], () => ri.A.hasLoadedHistory(d), [d]),
        eJ = (function (e) {
            let t = ru(e),
                n = (0, f.bG)([m.Ay], () => null != m.Ay.getProject(e), [e]),
                l = (0, f.bG)([ri.A], () => ri.A.hasLoadedHistory(e), [e]),
                r = (0, f.bG)([ri.A], () => ri.A.getMessages(e), [e]),
                a = (0, f.bG)([tg.default], () => tg.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    (0, rs.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(d),
        e0 = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: eQ,
            historyUnavailable: (0, f.bG)([ri.A], () => ri.A.isHistoryUnavailable(d), [d]),
            connState: b,
        }),
        e1 = "loading" === e0 && 0 === j.length,
        e2 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < d.length; t++) e = (31 * e + d.charCodeAt(t)) % 0x7fffffff;
            return cW[e % cW.length];
        }, [d]),
        e3 = eh ? eS.intl.string(ew.default.Zc7gML) : "greeting" === e0 && 0 === j.length ? e2 : null,
        e4 = i.useMemo(() => {
            for (let e = j.length - 1; e >= 0; e--) {
                let t = j[e];
                if ("assistant" === t.role && !(0, n_.BL)(t)) return t;
            }
        }, [j]),
        e7 = null != e4,
        e5 = i.useMemo(() => j.filter((e) => "user" === e.role && "queued" === e.disposition), [j]),
        e6 = null != e4 ? (0, rD.S)(e4) : void 0,
        e8 = eh && ef ? ec : void 0,
        e9 = i.useCallback(() => (0, n2.RQ)(d, eS.intl.string(ew.default.EMgIuY)), [d]),
        [te, tt] = i.useState(null),
        [tn, tl] = i.useState(e7);
    (tn !== e7 && (tl(e7), e7 || tt(null)),
        i.useEffect(() => {
            if (!e7) return;
            let e = I.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? tt(null)
                        : tt(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e7, e4?.steps, D]));
    let tr = D ? te : "bottom",
        ta = i.useMemo(() => (null != e4 ? (0, nP.b9)(e4.steps) : ""), [e4]),
        ti = i.useMemo(() => (null != e4 ? ((0, nM.lt)(e4.steps) ?? e4.todos) : void 0), [e4]),
        ts = e4?.provisionalTodo,
        tu = null != e4 && nT(e4),
        to = i.useMemo(() => {
            var e;
            return null != e4 ? ((e = e4.steps), r7((0, nM.Jf)(e, !0).tasks)) : void 0;
        }, [e4]);
    return (0, a.jsxs)("section", {
        ref: C,
        "data-conjure-chat": !0,
        className: cV.TE,
        children: [
            ef
                ? (0, a.jsx)(nI.A, {
                      title: eS.intl.string(ew.default.gy7byi),
                      description: eS.intl.string(ew.default["dkv/WO"]),
                      icons: cH.ir,
                      onDrop: eo,
                  })
                : null,
            (0, a.jsx)(n0, {
                onJumpToActivity: G,
                line: ta,
                placement: e7 && "top" === tr ? "top" : null,
                todos: ti,
                todosLive: tu,
                provisionalTodo: ts,
                agents: to,
            }),
            (0, a.jsxs)("div", {
                className: cV.JX,
                children: [
                    (0, a.jsx)(nA.Ch, {
                        ref: I,
                        onScroll: U,
                        scrollbarGutter: e1 ? "both-edges" : "stable",
                        className: [cV.N$, R ? null : cV.hB, eV ? cV.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rF.Fu.Provider, {
                            value: d,
                            children: (0, a.jsx)(cy, {
                                projectId: d,
                                messages: j,
                                emptyState: e0,
                                floatingSettingsMessageId: eU?.id,
                                liveClarificationId: eI?.id,
                                onPickIdea: ef ? en : void 0,
                                onAskForIdeas: ef ? ea : void 0,
                                draftHasText: el,
                                onApprovePlan: ef ? e9 : void 0,
                                onRestoreVersion: ed || e7 ? void 0 : g,
                                scrollerRef: I,
                                stickToBottomRef: _,
                                pinned: P,
                                onUnpin: $,
                                handleRef: E,
                                onShowsLatestChange: O,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cV.NJ,
                        children: (0, a.jsx)(cK, {
                            projectId: d,
                            thinking: e7,
                            turnStartedAt: e6,
                            restoring: ed,
                            remixStartedAt: Q,
                            recalling: e1,
                            thinkingActivity: k,
                            compacting: w,
                            saving: S,
                            projectUsage: y,
                            connState: b,
                            queued: e5,
                        }),
                    }),
                    N
                        ? (0, a.jsx)("div", { ref: eX, className: cV.B5, children: (0, a.jsx)(rp, { projectId: d }) })
                        : null,
                    null == eI
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eX,
                              className: eV ? `${cV.B5} ${cV.J9}` : cV.B5,
                              children:
                                  null != eI.install_scope_switch
                                      ? (0, a.jsx)(
                                            rx,
                                            {
                                                projectId: d,
                                                clarification: eI,
                                                offer: eI.install_scope_switch,
                                                onKept: ej,
                                            },
                                            eI.id,
                                        )
                                      : (0, a.jsx)(
                                            rt,
                                            {
                                                projectId: d,
                                                clarification: eI,
                                                onSubmit: ef ? ei : void 0,
                                                onDismiss: ej,
                                            },
                                            eI.id,
                                        ),
                          }),
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eX,
                              className: cV.B5,
                              children: (0, a.jsx)(
                                  ln,
                                  { projectId: d, request: eC, canSend: ef, onDismiss: eP, onSent: eE ? eR : void 0 },
                                  eC.id,
                              ),
                          }),
                    null == eK
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eI && null == eC ? eX : void 0,
                              className: cV.B5,
                              children: (0, a.jsx)(
                                  rR,
                                  { askId: eB?.id, projectId: d, request: eK, onDismiss: eH },
                                  eB?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cV.Jx,
                children: [
                    (0, a.jsx)(n0, {
                        onJumpToActivity: G,
                        line: ta,
                        placement: e7 && "bottom" === tr ? "bottom" : null,
                        todos: ti,
                        todosLive: tu,
                        provisionalTodo: ts,
                        agents: to,
                    }),
                    0 === V.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cV.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(o.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eS.intl.formatToPlainString(ew.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(o.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eS.intl.string(ew.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(x.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eS.intl.string(ew.default["/zOv9+"]),
                                      onClick: () => H(d),
                                  }),
                              ],
                          }),
                    null == Y
                        ? null
                        : (0, a.jsx)("div", {
                              className: cV.qB,
                              children: (0, a.jsx)(nC.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: Y.message,
                                  action: Y.retry,
                              }),
                          }),
                    null == W
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cV.Db,
                              children: [
                                  (0, a.jsx)(nC.w, { type: "warning", role: "status", message: W.message }),
                                  (0, a.jsx)("div", {
                                      className: cV.jU,
                                      children: (0, a.jsx)(tF.m, {
                                          text: eS.intl.string(eS.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tX.K, {
                                              "aria-label": eS.intl.string(eS.t.WAI6xu),
                                              icon: tT.P,
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
                              className: cV.qB,
                              children: (0, a.jsx)(nC.w, {
                                  type: X.blocked ? "critical" : "warning",
                                  role: X.blocked ? "alert" : "status",
                                  message: X.message,
                              }),
                          }),
                    (0, a.jsx)(
                        uA,
                        {
                            projectId: d,
                            escapeScopeRef: v,
                            canSend: ef,
                            running: e7,
                            restoring: ed,
                            onSend: ee,
                            hasPendingContext: V.annotations.length > 0,
                            onInterrupt: ef ? et : void 0,
                            onUploadFile: eu,
                            onImport: p,
                            onSendToOtherProjects: eY ? void 0 : eN.open,
                            onApprove: e8,
                            suggestion: e3,
                            questionOpen: eY,
                            modelSettings: A,
                            onModelSettingsChange: es,
                            onDraftHasTextChange: er,
                            inputLocked: N,
                            aiPaused: X?.blocked === !0,
                        },
                        eJ,
                    ),
                ],
            }),
        ],
    });
}
var cZ = n(761508),
    cY = n(933294),
    cQ = n(207438),
    cJ = n(683438),
    c0 = n(721507);
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
    c7 = { running: "Running", ok: "Done", error: "Failed" };
function c5(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function c6(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function c8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function c9(e) {
    return c6(e.count > 1 ? e.totalMs : e.end - e.start);
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
    return [c2(new Date(e.started_at).toISOString()) ?? "", c8(e.spans.length), (0, c3.Sj)((0, c3.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function da(e) {
    let t = (0, c3.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, c3.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += di(r, "in")),
                (l.output += di(r, "out")),
                (l.cacheRead += di(r, "cache_read")),
                (l.cacheWrite += di(r, "cache_write")),
                (l.costUsd += di(r, "cost_usd"))));
    }
    let r = c3.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function di(e, t) {
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
                      c8(t.calls, "model call"),
                      `${c5(t.input)} in`,
                      `${c5(t.output)} out`,
                      `${c5(t.cacheRead)} cache read`,
                      `${c5(t.cacheWrite)} cache write`,
                      dn(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dh.M1,
        children: [
            (0, a.jsx)("div", {
                className: dh.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dh.DJ} ${dg[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dh.o1,
                children: c3.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${c6(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dh.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dh.nf} ${dg[e]}` }),
                                (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: c4[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(o.E, {
                                          variant: "text-xs/normal",
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
                : (0, a.jsx)(o.E, {
                      variant: "text-sm/normal",
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
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dh.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(o.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dh.p0} ${s + u > 85 ? dh.EU : dh.jh}`,
                children: i,
            }),
        ],
    });
}
function dj(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: c } = e,
        d = t.children.length > 0,
        f = l ? nF._ : tn.a,
        m = i.useCallback(
            (e) => {
                (e.shiftKey && c(t.key), s(t.key));
            },
            [t.key, c, s],
        ),
        h = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? c(t.key) : u(t.key));
            },
            [t.key, c, u],
        );
    return (0, a.jsxs)(nR.D, {
        tag: "div",
        role: "treeitem",
        id: dx(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": d ? !l : void 0,
        "aria-selected": r,
        className: `${dh.$y} ${r ? dh.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: dh.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    d
                        ? (0, a.jsx)(nR.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dh.ai,
                              onClick: h,
                              children: (0, a.jsx)(f, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dh.YJ }),
                    (0, a.jsx)(o.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dh.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dh.nf} ${dg[t.category]}` }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dh.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dh.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(o.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dh.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(ds.WarningIcon, { size: "xs", color: "currentColor", className: dh.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dv, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dh.M0} ${dh.Nh}`
                    : t.running
                      ? `${dh.M0} ${dh.rF}`
                      : `${dh.M0} ${dg[t.category]}`,
                duration: c9(t),
            }),
        ],
    });
}
function db(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(nR.D, {
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
            (0, a.jsxs)("div", {
                className: dh.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dh.ai,
                        children: (0, a.jsx)(nF._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dh.U9 }),
                    (0, a.jsx)("span", { className: `${dh.nf} ${dh.dL}` }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dh.MQ,
                        children: c8(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dv, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dh.M0} ${dh.ab} ${dh.dL}`,
                duration: c6(t.totalMs),
            }),
        ],
    });
}
function dy(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(o.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dh._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dh.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dh.nf} ${dg[t.category]}` }),
                          (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [dt("Start", `+${c6(e.start)}`), dt("Duration", c9(e))];
                      e.count > 1
                          ? t.push(
                                dt("Calls", String(e.count)),
                                dt("Longest call", c6(e.maxMs)),
                                dt("Spread over", c6(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(dt("Self time", c6(e.selfMs)));
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
                      return (0, a.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  null == t
                                      ? null
                                      : (0, a.jsx)(o.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: dh.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(o.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(o.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: dh.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(o.E, {
                                                            variant: "text-xs/normal",
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
        n = i.useMemo(() => da(t), [t]);
    return (0, a.jsx)(dp, { stats: n });
}
function dw(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, c3.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dm : (0, c3.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, c3.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, c3.x7)(t)), l((n) => (0, c3._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, c3.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c3.IE)(t, e);
                        null != n && l((e) => (0, c3.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, c3.IE)(t, e);
                        null != n && l((e) => (0, c3.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, c3.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, c3.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, c3.hB)(t));
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
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: c, toggle: d, reveal: f, expandSubtree: m } = n,
        h = (0, c3.dj)(t),
        g = i.useMemo(() => (0, c3.nF)(h), [h]),
        p = g.length > 1 ? ((g[1] - g[0]) / h) * 100 : 100,
        v = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === u),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) f(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) m(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) d(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    d(a.key);
                }
                (e.preventDefault(),
                    null != t && (c(t.key), document.getElementById(dx(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, c, u, d],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(du.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dh.z,
                        children: [
                            (0, a.jsx)(o.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dl(t),
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dr(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(o.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(o.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${c8(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dk, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dh.KE,
                        children: [
                            (0, a.jsx)(x.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == u ? void 0 : dx(u),
                        className: dh.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: v,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dh.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dh.So,
                                        children: (0, a.jsx)(o.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dh.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                o.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dh.io} ${(e / h) * 100 > 85 ? dh.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : c6(e),
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
                                          dj,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === u,
                                              onSelect: c,
                                              onToggle: d,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(db, { row: e, extent: h, selected: e.key === u, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(dc.j, { children: (0, a.jsx)(dy, { node: s }) }),
        ],
    });
}
function dS(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, f.bG)([ce.A], () => ce.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dd.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(df.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(du.c, {
                      children: (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dw, { trace: i }),
        ],
    });
}
let dN = { running: dh.Vf, ok: dh.mo, error: dh.Sr };
function dA(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dh.Om} ${dN[t]}`, role: "img", "aria-label": c7[t] });
}
function dC(e, t) {
    (0, eP.openModal)((n) => (0, a.jsx)(dS, { ...n, projectId: e, traceId: t }));
}
function dI(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dC(t, n.id), [t, n.id]);
    return (0, a.jsxs)(nR.D, {
        className: dh.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dh.sU,
                children: [
                    (0, a.jsx)(dA, { status: (0, c3.lQ)(n) }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dh._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(o.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dl(n),
                    }),
                ],
            }),
            (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: dr(n) }),
            null == l
                ? null
                : (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dE(e) {
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
            (0, c0.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(e8.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: e8.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(e9.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(te.rX, {
                    children: (0, a.jsx)(te.Dr, {
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
            return (0, a.jsx)(tX.K, {
                ...e,
                buttonRef: l,
                icon: iv.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dM(e) {
    let { projectId: t } = e,
        n = (0, f.yK)([ce.A], () => ce.A.getTimingTraces(t), [t]),
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
        c = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(da);
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
        ? (0, a.jsxs)("div", {
              className: dh.Ie,
              children: [
                  (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(o.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dh.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dh.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dh.fH,
                              children: (0, a.jsx)(cJ.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dE, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nA.Ch, {
                      className: dh.XG,
                      children: [
                          (0, a.jsx)(dp, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(o.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dh.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dI, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function d_(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dT(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dP(e) {
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
function dL(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function d$(e) {
    return eS.intl.string("preview" === e ? ew.default["2yLYlG"] : ew.default.eiAi57);
}
let dq = ["all", "preview", "stable", "web"];
function dD(e) {
    switch (e.reason) {
        case "local":
            return eS.intl.string(ew.default.mUeKML);
        case "unconfigured":
            return eS.intl.string(ew.default.bGefb5);
        case "unauthorized":
            return eS.intl.string(ew.default.KLx6Bb);
        default:
            return null != e.detail
                ? eS.intl.formatToPlainString(ew.default.t09Q6q, { detail: e.detail })
                : eS.intl.string(ew.default["t+tG59"]);
    }
}
function dF(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eS.intl.formatToPlainString(ew.default["XO/bN4"], {
              p50: d_(e.memory_p50_bytes ?? 0),
              p999: d_(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dO = {
    db: () => ew.default["7l+DFG"],
    db_preview: () => ew.default.FAuffi,
    runtime: () => ew.default["Gkl+ab"],
    runtime_preview: () => ew.default.ynpJzv,
    bot: () => ew.default["5/i0cj"],
    bot_preview: () => ew.default.m2jsnw,
};
var dz = n(911608),
    dG = n(177427);
function dU(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dG.KE,
        children: [
            (0, a.jsx)("div", {
                className: dG.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(c.y, { type: c.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eS.intl.string(ew.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eS.intl.formatToPlainString(ew.default.INVO50, { time: dR(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(x.$, { variant: "secondary", size: "sm", text: eS.intl.string(ew.default.oKEgiu), onClick: l }),
        ],
    });
}
function dB(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dG.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(o.E, { variant: "text-xs/semibold", color: "text-muted", className: dG.Gf, children: t }),
            n,
        ],
    });
}
function dK(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dG.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dG.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dG.kS,
                        children: [i, (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dG.kS,
                        children: [
                            s,
                            (0, a.jsx)(o.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dH(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dG.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dG.x7,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dz.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dG.dh : void 0,
            }),
        ],
    });
}
function dV(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dK, {
            label: eS.intl.string(ew.default.SXP7pD),
            value: eS.intl.string(ew.default.E5hKVi),
            hint: dD(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dK, {
            label: eS.intl.string(ew.default.SXP7pD),
            value: "\u2014",
            hint: eS.intl.string(ew.default.AGvoMJ),
        });
    let l = dF(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dK, { label: eS.intl.string(ew.default["H/X+FI"]), value: dT(n.cpu_ms) }),
            null != l && (0, a.jsx)(dK, { label: eS.intl.string(ew.default.lmFmMO), value: l }),
        ],
    });
}
function dW(e) {
    let { analytics: t } = e,
        n = eS.intl.string(ew.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dB, {
            title: n,
            children: (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: dD(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dO[t] : null) ? eS.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dB, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(o.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eS.intl.string(ew.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dK,
                          {
                              label: n,
                              value: eS.intl.formatToPlainString(ew.default["w/2voO"], { cpu: dT(t.cpu_ms) }),
                              hint: dF(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dX = n(678708),
    dZ = n(414499),
    dY = n(714800),
    dQ = n(81466),
    dJ = n(424383),
    d0 = n(664121),
    d1 = n(816943),
    d2 = n(268791),
    d3 = n(514042),
    d4 = n(872351),
    d7 = n(708988),
    d5 = n(150934),
    d6 = n(417270);
let d8 = "Restart Agent",
    d9 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fe(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function ft(e, t) {
    return { label: e, value: null != t && "" !== t ? dR(t) : "Unknown", icon: "calendar" };
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
    let [r, a] = d9[n.status];
    return { label: e, value: `${fn(n.bytes)} of ${fn(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fr(e) {
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
let fa = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fi(e) {
    let t = `container ${fe(e.local)} \xb7 remote ${fe(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fa[e.ref], icon: "remote", hint: t };
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
var fu = n(400154);
let fo = {
        checkout: dX.FolderIcon,
        edit: lg.PencilIcon,
        remote: dZ.h,
        commits: dY.e,
        calendar: dQ.CalendarIcon,
        save: dJ.L,
        objects: d0.R,
        download: d1.$,
        size: d2.$,
        file: d3.FileIcon,
    },
    fc = {
        ok: [rE.y, t2.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [ds.WarningIcon, t2.A.colors.ICON_FEEDBACK_WARNING],
        error: [sY.a, t2.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [d4.z, t2.A.colors.ICON_MUTED],
        behind: [d7.M, t2.A.colors.ICON_MUTED],
    };
function fd(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, f.bG)([ce.A], () => ce.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cQ.DK)(t), [t]),
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
    return (0, a.jsxs)(dB, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fu.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(o.E, {
                        variant: "text-xs/normal",
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
                        ? l.push(...r.map(fi))
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
                                    value: `${dP(t.loose)} loose (${d_(t.looseBytes)}) \xb7 ${dP(t.packed)} packed in ${n} (${d_(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dP(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dP(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
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
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fo[r],
                        [u, o] = null != i ? fc[i] : [null, void 0];
                    return (0, a.jsx)(
                        dK,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: t2.A.colors.ICON_MUTED }),
                            state: null != u ? (0, a.jsx)(u, { size: "xs", color: o }) : void 0,
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
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, f.bG)([ce.A], () => ce.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cQ.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = ce.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cQ.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                ov.h.dispatch({
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
            let u = i.useCallback(() => (0, cQ.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: d8,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, ej.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: fu.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fu.nM,
                children: [
                    (0, a.jsx)(d5.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(x.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: d6.RetryIcon,
                        text: d8,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(o.E, {
                variant: "text-xs/normal",
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
function fm(e, t) {
    return (0, a.jsx)(dK, {
        label: e,
        value: eS.intl.formatToPlainString(ew.default.yHJxuP, { count: dP((0, cR.aM)(t)) }),
        hint: `${dP(t.input_tokens)} in \xb7 ${dP(t.output_tokens)} out \xb7 ${dP(t.cache_read_input_tokens)} cache read`,
    });
}
function fh(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        c,
        d,
        m,
        h,
        { projectId: g, status: p, fetchState: v, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: S,
            turnRunning: N,
            handleForceCompaction: A,
            handleForceCompactionOverride: C,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: M,
            session: _,
            contextCeiling: T,
        } = ((t = (0, f.bG)([ce.A], () => ce.A.getLastTurnUsage(g), [g])),
        (n = (0, f.bG)([ce.A], () => ce.A.getLastCompaction(g), [g])),
        (l = (0, f.bG)([ce.A], () => ce.A.getLastCompactionDecline(g), [g])),
        (r = (0, f.bG)([ce.A], () => ce.A.getForceCompactionState(g), [g])),
        (s = (0, f.bG)([ce.A], () => ce.A.getSandboxRestartState(g), [g])),
        (u = (0, f.bG)([ri.A], () => ri.A.isThinking(g), [g])),
        (c = i.useCallback(() => (0, cQ.Lj)(g), [g])),
        (d = i.useCallback(() => (0, cQ.Lj)(g, !0), [g])),
        (m = i.useCallback(() => (0, cQ.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: u,
            handleForceCompaction: c,
            handleForceCompactionOverride: d,
            handleRestartWorkspace: m,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: fu.Mf,
        children: [
            (0, a.jsx)(dU, { generatedAt: p?.generated_at ?? null, fetchState: v, onRefresh: j }),
            (0, a.jsx)(dB, {
                title: eS.intl.string(ew.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eS.intl.string(ew.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dK, {
                                      label: eS.intl.string(ew.default["9nqym2"]),
                                      value: dP((0, cR.a7)(E.cost_usd)),
                                      hint: eS.intl.formatToPlainString(ew.default.NCdUIh, { count: dP(E.turns) }),
                                  }),
                                  fm(eS.intl.string(ew.default.xtxP0e), E.orchestrator),
                                  fm(eS.intl.string(ew.default["9Sj3SX"]), E.codegen),
                                  fm(eS.intl.string(ew.default.ANCEo3), (0, cR.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dK, {
                                          label: eS.intl.string(ew.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
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
            (0, a.jsx)(dB, {
                title: eS.intl.string(ew.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eS.intl.string(ew.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fm(eS.intl.string(ew.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dK, {
                                      label: eS.intl.string(ew.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cR.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dB, {
                title: eS.intl.string(ew.default.NbRk9a),
                children: [
                    null != y && null != T
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dH, {
                                      label: eS.intl.string(ew.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: T,
                                      formatValue: dP,
                                  }),
                                  (0, a.jsx)(dK, {
                                      label: eS.intl.string(ew.default.mRbSns),
                                      value: `${dP(y.tokensBefore)} \u{2192} ${dP(y.tokensAfter)}`,
                                      hint: eS.intl.formatToPlainString(ew.default.Vq3skS, {
                                          count: dP(y.retainedMessages),
                                          time: dR(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != T
                                      ? eS.intl.formatToPlainString(ew.default.GMLCNv, { ceiling: dP(T) })
                                      : eS.intl.string(ew.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dK, {
                            label: eS.intl.string(ew.default["4BX5KK"]),
                            value: `${dP(k.projected)} / ${dP(k.threshold)}`,
                            critical: !0,
                            hint: eS.intl.formatToPlainString(ew.default["6ngCax"], { time: dR(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fu.Lj,
                        children: [
                            (0, a.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eS.intl.string(ew.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: A,
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eS.intl.string(ew.default.wox6Ev);
                                    if ("pending" === e) return eS.intl.string(ew.default.OcPHQ1);
                                    let t = dR(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eS.intl.formatToPlainString(ew.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? ew.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ew.default.YZb4hK
                                              : ew.default.ZoUSVK;
                                    return eS.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(x.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eS.intl.string(ew.default.ZxG2AI),
                                            onClick: C,
                                        }),
                                        (0, a.jsx)(o.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: eS.intl.string(ew.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: fu.Lj,
                        children: [
                            (0, a.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eS.intl.string(ew.default["5qCjBu"]),
                                loading: "pending" === S,
                                disabled: "pending" === S || N,
                                onClick: I,
                            }),
                            (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof S && "restarted" !== S.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eS.intl.string(ew.default.mlok8D);
                                    if ("pending" === e) return eS.intl.string(ew.default["1ugSyK"]);
                                    let t = dR(e.observedAt);
                                    return eS.intl.formatToPlainString(
                                        "restarted" === e.outcome ? ew.default["76mfqO"] : ew.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(S),
                            }),
                        ],
                    }),
                    (0, a.jsx)(ff, { projectId: g }),
                ],
            }),
            (0, a.jsx)(fd, { projectId: g }),
            (null != _ || p?.analytics != null) &&
                (0, a.jsxs)(dB, {
                    title: eS.intl.string(ew.default.EsSzCS),
                    children: [
                        null != _ &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dK, {
                                        label: eS.intl.string(ew.default.CLXHAs),
                                        value: dR(_.instance_since),
                                        hint: eS.intl.string(ew.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dK, {
                                        label: eS.intl.string(ew.default["8V8e1Z"]),
                                        value: dP(_.sockets),
                                    }),
                                    (0, a.jsx)(dK, {
                                        label: eS.intl.string(ew.default["4pBzYW"]),
                                        value: _.turn_inflight
                                            ? eS.intl.string(ew.default.Wv025I)
                                            : eS.intl.string(ew.default["7/lsFY"]),
                                    }),
                                    _.queued_messages > 0 &&
                                        (0, a.jsx)(dK, {
                                            label: eS.intl.string(ew.default["3oUYnv"]),
                                            value: dP(_.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(dV, { analytics: p.analytics }),
                    ],
                }),
            null != M &&
                (0, a.jsxs)(dB, {
                    title: eS.intl.string(ew.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dK, {
                            label: eS.intl.string(ew.default.IlDBN3),
                            value: dP(M.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dK, {
                            label: eS.intl.string(ew.default["ZdzKR+"]),
                            value: eS.intl.formatToPlainString(ew.default.yHJxuP, {
                                count: dP(M.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(dK, {
                            label: eS.intl.string(ew.default.cIhN2W),
                            value: eS.intl.formatToPlainString(ew.default.yHJxuP, {
                                count: dP(M.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dK, {
                            label: eS.intl.string(ew.default["+fOn/q"]),
                            value: dP(M.max_user_message_chars),
                        }),
                        (0, a.jsx)(dK, { label: eS.intl.string(ew.default.kIHga0), value: dP(M.max_build_attempts) }),
                        (0, a.jsx)(dK, { label: eS.intl.string(ew.default.Iw03yW), value: dP(M.max_session_attempts) }),
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
        : (0, a.jsx)("div", {
              className: fx.ut,
              children: (0, a.jsx)(o.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eS.intl.string(ew.default.h1SE6R),
              }),
          });
}
function fj(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fx.qf,
              children: [
                  (0, a.jsx)(o.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eS.intl.string(ew.default.h1SE6R),
                  }),
                  (0, a.jsx)(o.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eS.intl.string(ew.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fx.qf,
              children: [
                  (0, a.jsx)(o.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fb(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fx.ps,
              children: (0, a.jsx)(o.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eS.intl.string(ew.default.V7Ri8H),
              }),
          })
        : null;
}
var fy = n(109079);
let fk = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        u = i.useId(),
        c = i.useMemo(
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
        d = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: fy.vK,
        children: [
            (0, a.jsx)(o.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fy.Mt,
                selectable: !0,
                children: c2(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(o.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fy.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fy.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fy.Cq, children: (0, a.jsx)(fg.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fy.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fg.v, {
                                text: eS.intl.string(ew.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != c
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== c.prefix &&
                                      (0, a.jsxs)(o.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [c.prefix, " "],
                                      }),
                                  (0, a.jsxs)(nR.D, {
                                      className: fy.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": eS.intl.string(ew.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(tn.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nF._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(o.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  c.marker,
                                                  " ",
                                                  eS.intl.formatToPlainString(
                                                      "[\u2026]" === c.marker
                                                          ? ew.default.kUhyUv
                                                          : ew.default["N+fphl"],
                                                      { count: c.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(o.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: fy.dF,
                                          selectable: !0,
                                          id: u,
                                          children: c.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(o.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: d,
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
        n = (0, f.bG)([cY.A], () => cY.A.getLogs(t), [t]),
        l = (0, f.bG)([cY.A], () => cY.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [u, c] = i.useState(""),
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
        h = i.useRef(!0);
    i.useEffect(() => {
        h.current && m.current?.scrollToBottom();
    }, [d]);
    let g = i.useCallback(() => {
            let e = m.current;
            null != e && (h.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = i.useMemo(
            () =>
                dq.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return d$(e);
                            case "web":
                                return eS.intl.string(ew.default.IVzfVV);
                            default:
                                return eS.intl.string(ew.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: fy.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fy.y4,
                children: [
                    (0, a.jsx)(fp.I, {
                        look: "pill",
                        "aria-label": eS.intl.string(ew.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fy.KT,
                        children: (0, a.jsx)(cJ.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: eS.intl.string(ew.default["m2+37Y"]),
                            "aria-label": eS.intl.string(ew.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(fv, { state: l }),
            (0, a.jsxs)(nA.Ch, {
                ref: m,
                onScroll: g,
                overflow: "auto",
                className: fy.sx,
                children: [
                    (0, a.jsx)(fb, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fj, {
                              state: l,
                              emptyTitle: eS.intl.string(ew.default.S7qlPG),
                              emptyBody: eS.intl.string(ew.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eS.intl.string(ew.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(fk, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fS(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dB, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eS.intl.string(ew.default.umcjif),
                      }),
        })
    );
}
function fN(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dK, {
                      label: eS.intl.formatToPlainString(ew.default["01ZMS4"], { env: d$(n) }),
                      value: ((t = l.connected), eS.intl.string(t ? ew.default.Wv025I : ew.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dK, {
                      label: eS.intl.string(ew.default["z1dh+F"]),
                      value: dP(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dR(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dK, { label: eS.intl.string(ew.default.Iz5GnJ), value: dP(l.guild_count) }),
                  (0, a.jsx)(dK, {
                      label: eS.intl.string(ew.default["7UqtNv"]),
                      value: dP(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? eS.intl.formatToPlainString(ew.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dR(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dK, {
                          label: eS.intl.string(ew.default["x3+JXJ"]),
                          value: dP(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dK, { label: d$(n), value: eS.intl.string(ew.default.lTHQss) });
}
function fA(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dK, {
        label: d$(t),
        value: eS.intl.formatToPlainString(ew.default["Xq+wHT"], {
            requests: dP(n.requests),
            failures: dP(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? eS.intl.formatToPlainString(ew.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dR(n.last_failure.at),
                  })
                : eS.intl.formatToPlainString(ew.default["7KlGT6"], { time: dR(n.since) }),
    });
}
function fC(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dK, {
                label: eS.intl.formatToPlainString(ew.default["92gVTm"], { env: d$(t) }),
                value: dP(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dK,
                    {
                        label: eS.intl.formatToPlainString(ew.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? eS.intl.formatToPlainString(ew.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? eS.intl.formatToPlainString(ew.default.wxAWNv, { time: dR(e.next_run_at) })
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
    return (0, a.jsx)(dK, {
        label: d$(t),
        value: eS.intl.formatToPlainString(ew.default.suAOj9, { calls: dP(n.calls), errors: dP(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fE(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dB, {
            title: t,
            children: (0, a.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eS.intl.string(ew.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dB, {
        title: t,
        children: [
            (0, a.jsx)(dK, {
                label: eS.intl.string(ew.default.xtD4Zp),
                value: dP(n.requests),
                hint: eS.intl.formatToPlainString(ew.default["7KlGT6"], { time: dR(n.since) }),
            }),
            (0, a.jsx)(dK, { label: eS.intl.string(ew.default.gfRhR3), value: dP(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dH, {
                              label: eS.intl.string(ew.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dT,
                          }),
                          (0, a.jsx)(dK, {
                              label: eS.intl.string(ew.default.mSKImM),
                              value: dT(r),
                              hint: eS.intl.formatToPlainString(ew.default.JqMU05, {
                                  total: dT(n.cpu_ms_total),
                                  wall: dT(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dK, {
                      label: eS.intl.string(ew.default.LEJ5r3),
                      value: eS.intl.string(ew.default["2Ekb2b"]),
                      hint: eS.intl.string(ew.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dK, { label: eS.intl.string(ew.default.xvmL1D), value: dT(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dK, {
                    label: eS.intl.string(ew.default["4sQYwH"]),
                    value: dP(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(dK, {
                label: eS.intl.string(ew.default.bQenOy),
                value: dP(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: eS.intl.formatToPlainString(ew.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dK, { label: eS.intl.string(ew.default.xgpn4Y), value: dL(n.build) }),
        ],
    });
}
function fM(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: eS.intl.string(ew.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: eS.intl.string(ew.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: eS.intl.string(ew.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dB, {
        title: eS.intl.string(ew.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dK, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dK, {
                                  label: eS.intl.formatToPlainString(ew.default.u7kJJ4, { env: n }),
                                  value: d_(l.r2_bytes),
                                  hint: eS.intl.formatToPlainString(
                                      l.r2_truncated ? ew.default.lH0oQw : ew.default.m9h02S,
                                      { count: dP(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dH, {
                                      label: eS.intl.formatToPlainString(ew.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: d_,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function f_(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fu.Mf,
        children: [
            (0, a.jsx)(dU, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fE, {
                            title: eS.intl.string(ew.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fE, {
                            title: eS.intl.string(ew.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fM, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fS, {
                                title: eS.intl.string(ew.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fN, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fS, {
                                title: eS.intl.string(ew.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fA, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fS, {
                                title: eS.intl.string(ew.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fC, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fS, {
                                title: eS.intl.string(ew.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fI, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dW, { analytics: t.analytics }),
                        (0, a.jsxs)(dB, {
                            title: eS.intl.string(ew.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dK, {
                                    label: eS.intl.string(ew.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dL(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dK, {
                                    label: eS.intl.string(ew.default.eiAi57),
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
var fT = n(592465);
function fP(e) {
    let { projectId: t, onClose: n } = e,
        l = eM(),
        [r, s] = i.useState(() => (l && eC?.projectId === t ? "trace" : "logs")),
        u = (0, f.bG)([ce.A], () => ce.A.getStatus(t), [t]),
        o = (0, f.bG)([ce.A], () => ce.A.getFetchState(t), [t]),
        c = i.useCallback(() => {
            ((0, cQ.R7)(t), (0, cQ.DK)(t));
        }, [t]);
    (i.useEffect(() => c(), [c]), i.useEffect(() => (0, tg.subscribeDebugBacklog)(t), [t]));
    let d = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == eC || eC.projectId !== e) return null;
            let { traceId: t } = eC;
            return ((eC = null), t);
        })(t);
        return null != e && (dC(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        d();
    }, [d]),
        eI(t, () => {
            d() && s("trace");
        }));
    let m = i.useCallback(() => {
            (0, oU.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: ce.A.getStatus(t),
                        last_turn_usage: ce.A.getLastTurnUsage(t),
                        last_compaction: ce.A.getLastCompaction(t),
                        last_compaction_decline: ce.A.getLastCompactionDecline(t),
                        timing_traces: ce.A.getTimingTraces(t),
                        logs: cY.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, eb.P0)({ text: eS.intl.string(ew.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = eS.intl.string(ew.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fT.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(tR.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tR.Ay.Icon, {
                            icon: oO.CopyIcon,
                            tooltip: eS.intl.string(ew.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, a.jsx)(tR.Ay.Icon, { icon: tT.P, tooltip: eS.intl.string(eS.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tR.Ay.ChannelIcon, { icon: oG.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tR.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fT.rf,
                children: [
                    (0, a.jsxs)(cZ.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": eS.intl.string(ew.default.RvvWIh),
                        className: fT.vR,
                        children: [
                            (0, a.jsx)(cZ.V.Item, { id: "logs", children: eS.intl.string(ew.default["+VRYCm"]) }),
                            (0, a.jsx)(cZ.V.Item, { id: "worker", children: eS.intl.string(ew.default["50D0FZ"]) }),
                            (0, a.jsx)(cZ.V.Item, { id: "agent", children: eS.intl.string(ew.default.UkbTK1) }),
                            l ? (0, a.jsx)(cZ.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fw, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(f_, { status: u, fetchState: o, onRefresh: c })
                          : "trace" === r && l
                            ? (0, a.jsx)(dM, { projectId: t })
                            : (0, a.jsx)(fh, { projectId: t, status: u, fetchState: o, onRefresh: c }),
                ],
            }),
        ],
    });
}
var fR = n(365912),
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
let fq = Object.freeze({ x: -1, y: -1 });
function fD(e) {
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
    ).then(fD, () => ({ status: "failed" }));
}
var fz = n(108308);
let fG = { x: 25, y: 21 };
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
function fV(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = Z(u),
        m = (0, e_.Zv)(u),
        h = (0, eP.useHasAnyModalOpen)(),
        g = (0, f.bG)([li.default], () => li.default.getCurrentUser()),
        p = g?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [S, N] = i.useState(null),
        [A, C] = i.useState(!1),
        I = i.useRef(null),
        E = i.useRef(null),
        M = i.useRef(null),
        [D, F] = i.useState(null),
        [O, z] = i.useState(!1),
        [B, K] = i.useState(null),
        [X, Y] = i.useState(null),
        Q = i.useRef(!1),
        [J, ee] = i.useState(!1),
        [et, en] = i.useState(null),
        el = c && !m && !h;
    null == B || (el && B.projectId === u) || K(null);
    let er = B?.projectId ?? null;
    i.useEffect(() => {
        if (null != er) return () => (0, n2.xJ)(er, "design");
    }, [er]);
    let ea = tV(r, el);
    i.useEffect(() => {
        if (!el || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fL.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fH(t.response) : null;
                    null == n ? w(!0) : (j(n), V(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [el, r, u]);
    let ei = i.useRef(null);
    (i.useEffect(() => {
        if (!el || null == ea || null == u) return;
        if (null == v) {
            ei.current = ea;
            return;
        }
        if (tH(ei.current, ea)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            ei.current = ea;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
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
                        if ("completed" !== e.status || !ec.current) return;
                        let l = fH(e.response);
                        null != l && (j(l), V(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = f$(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = G(u)).active &&
                                0 !== r.size &&
                                U(u, {
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
    }, [el, ea, v, d, u, r]),
        i.useEffect(() => {
            if (!el)
                return () => {
                    (N(null), K(null), en(null), j(null));
                };
        }, [el]));
    let es = i.useRef(null),
        eu = i.useRef(null),
        eo = i.useRef(!1),
        ec = i.useRef(!1);
    i.useEffect(() => {
        ((ec.current = el), el || ((es.current = null), (eu.current = null), (M.current = null), C(!1)));
    }, [el]);
    let ef = i.useCallback(
            function e() {
                if (eo.current) return;
                let t = es.current;
                if (null == t) return;
                es.current = null;
                let n = r();
                null != n &&
                    ((eo.current = !0),
                    fO(n, t).then((t) => {
                        if (((eo.current = !1), ec.current)) {
                            if ("picked" !== t.status || fJ(t.target, ev.current.rect, ev.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && z(!0);
                            else {
                                let e = P(t.target);
                                (F((t) => (fQ(t, e) ? t : e)),
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
        eh = i.useCallback(() => {
            if (null == B) return;
            let e = !Q.current;
            (Y({ at: B.at, label: B.label, draft: B.draft, instant: e }), ee(e), K(null));
        }, [B]);
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
            if (null == X) return;
            let e = setTimeout(() => Y(null), fZ);
            return () => clearTimeout(e);
        }, [X]));
    let eg = null == v || null == ea || v.viewport.width < 1 ? 1 : ea.width / v.viewport.width,
        ep = null != v || k,
        ex = i.useMemo(() => v?.elements ?? [], [v]),
        ev = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ev.current = { rect: ea, scale: eg };
    }, [ea, eg]);
    let ej = i.useCallback(
            (e, t, n) => {
                null != u &&
                    ((0, n2.xJ)(u, "design"),
                    en(null),
                    (Q.current = !1),
                    K({ projectId: u, target: e, anchor: t, draft: "", at: n, label: P(e) }));
            },
            [u],
        ),
        eb = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / eg, y: (e.clientY - t.top) / eg }), [eg]),
        ey = i.useCallback(() => {
            let e = M.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = E.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ey);
    let ek = i.useCallback(
            (e) => {
                if (null == ea || null != et) return;
                if (((M.current = { x: e.clientX, y: e.clientY }), ey(), C(!0), null != B)) {
                    (Math.abs(e.clientX - B.at.x) > fY || Math.abs(e.clientY - B.at.y) > fY) && (Q.current = !0);
                    return;
                }
                if (!ep) return void N(null);
                let t = eb(e, ea);
                if (O) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let a of e) {
                                let { x: e, y: i, width: s, height: u } = a.rect;
                                if (s < 1 || u < 1 || t < e || n < i || t > e + s || n > i + u) continue;
                                let o = s * u;
                                o < r && ((l = a), (r = o));
                            }
                            return l;
                        })(ex, t.x, t.y),
                        n = null != e && fJ(e, ea, eg) ? null : e;
                    if (null != n) {
                        let e = P(n);
                        F((t) => (fQ(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = eu.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((eu.current = n), (es.current = n), ef());
            },
            [ea, eg, ep, eb, O, ex, B, et, ey, ef],
        ),
        eN = null == et ? null : d.find((e) => e.id === et.id),
        eA = el && (A || B?.target.marker != null || eN?.target.marker != null);
    i.useEffect(() => {
        if (eA)
            return () => {
                let e = r();
                null != e && fO(e, fq);
            };
    }, [eA, r]);
    let eC = i.useCallback(() => {
        (C(!1), N(null), (eu.current = null), (es.current = null));
    }, []);
    i.useEffect(() => {
        if (!el || !A || !ep || O || null != B || null != et) return;
        let e = M.current,
            { rect: t, scale: n } = ev.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((eu.current = l), (es.current = l), ef());
    }, [el, A, ep, O, B, et, ef]);
    let eI = i.useCallback(
            (e) => {
                if (null != B || null != et) {
                    (eh(), en(null));
                    return;
                }
                if (null == S || null == ea) return;
                let t = eb(e, ea);
                ej(
                    S,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? _
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(S, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [S, ea, eb, B, et, ej, eh],
        ),
        eE = i.useCallback(() => {
            null != u && (N(null), null != ed(u) ? em(u) : H(u));
        }, [u]),
        eM = i.useCallback(() => {
            null != u &&
                (null != B
                    ? eh()
                    : et?.confirmingRemove === !0
                      ? en({ ...et, confirmingRemove: !1 })
                      : null != et
                        ? en(null)
                        : eE());
        }, [u, B, et, eh, eE]),
        eT = i.useRef(eM),
        eR = i.useRef(u),
        eL = i.useRef(eE);
    i.useLayoutEffect(() => {
        ((eT.current = eM), (eR.current = u), (eL.current = eE));
    });
    let e$ = i.useRef(null);
    i.useEffect(() => {
        if (el)
            return (
                tq.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        tq.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eT.current());
        }
        function t(e) {
            let t = e.target;
            !(0, t$.vq)(t) ||
                e$.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fR.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eR.current || null == ed(eR.current)) && eL.current());
        }
    }, [el, s]);
    let eq = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eM());
                    return;
                }
                if (null != B || null != et || 0 === ex.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == S ? -1 : ex.findIndex((e) => e.ref === S.ref);
                    N(ex[(n + (t ? 1 : -1) + ex.length) % ex.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    ej(S, _, { x: (ea?.left ?? 0) + S.rect.x * eg, y: (ea?.top ?? 0) + S.rect.y * eg }));
            },
            [u, B, et, ex, S, ej, eM, ea, eg],
        ),
        eD = i.useCallback(
            (e) => {
                null == u ||
                    null == B ||
                    ((T(B.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, tg.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = P(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${$}${r}${q}${L(e)}
${t.trim()}`;
                            })(B.target, B.draft),
                            e,
                        ),
                        eh(),
                        N(null)));
            },
            [u, B, eh],
        ),
        eF = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, tD.vX)(u, e)), [u]),
        eO = i.useCallback(() => {
            if (null != u && null != et && null != p && T(et.draft)) {
                var e, t;
                let n, l;
                ((e = et.id),
                    (t = et.draft.trim()),
                    null != (l = (n = G(u)).annotations.find((t) => t.id === e)) &&
                        W(l, p) &&
                        U(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    en({ ...et, editing: !1 }));
            }
        }, [u, et, p]),
        ez = i.useCallback(() => {
            if (null != u && null != et && null != p) {
                var e;
                let t, n;
                ((e = et.id),
                    null != (n = (t = G(u)).annotations.find((t) => t.id === e)) &&
                        W(n, p) &&
                        U(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    en(null));
            }
        }, [u, et, p]),
        eG = c
            ? b
                ? eS.intl.string(ew.default["Eb/YV9"])
                : k
                  ? eS.intl.string(ew.default.FD30bh)
                  : eS.intl.formatToPlainString(ew.default.dTSqLF, { count: d.length })
            : "",
        eU = el && null != ea,
        eB = A && null == et,
        eK = B?.target ?? eN?.target ?? null,
        eH = B ?? X,
        eV = B ?? (X?.instant === !0 ? null : X),
        eW =
            null != eN && null != ea
                ? (function (e, t) {
                      let { left: n, top: l } = fK(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fB(eN.target, eN.anchor, ea, eg), ea)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eN?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eN;
            fO(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eN, r]),
        (0, tL.createPortal)(
            (0, a.jsxs)("div", {
                ref: e$,
                className: fz.Li,
                children: [
                    (0, a.jsx)(nD.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eG,
                    }),
                    eU
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: fz.MT,
                                      style: { left: ea.left, top: ea.top, width: ea.width, height: ea.height },
                                      "data-plain-cursor": eB ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eS.intl.string(ew.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ek,
                                      onMouseLeave: eC,
                                      onClick: eI,
                                      onKeyDown: eq,
                                  }),
                                  null != S && null == S.marker && null == B && null == et
                                      ? (0, a.jsx)(f0, { box: fU(S, ea, eg) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: fz.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fz.xz,
                                          "data-shown": null != S && null == et && null == B ? "" : void 0,
                                          "data-instant": J ? "" : void 0,
                                          children: (0, a.jsxs)(o.E, {
                                              variant: "text-xs/medium",
                                              className: fz.Ux,
                                              children: [
                                                  null == D
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fz.Tl, children: D.kind }),
                                                  null == D || "" === D.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fz.kh,
                                                            children: [" ", D.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: E,
                                      className: fz.Y,
                                      children: eB ? (0, a.jsx)("div", { className: fz.u }) : null,
                                  }),
                                  null == eV
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fz.aZ,
                                            style: {
                                                transform: `translate3d(${eV.at.x + 20}px, ${eV.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fz.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == B ? "" : void 0,
                                                children: (0, a.jsxs)(o.E, {
                                                    variant: "text-xs/medium",
                                                    className: fz.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fz.Tl,
                                                            children: eV.label.kind,
                                                        }),
                                                        "" === eV.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fz.kh,
                                                                  children: [" ", eV.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eK && null == eK.marker
                                      ? (0, a.jsx)("div", {
                                            className: fz.D0,
                                            style: fU(eK, ea, eg),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fB(e.target, e.anchor, ea, eg),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fz.xL,
                                              style: { ...fK(n, ea), width: 24, height: 24 },
                                              "aria-label": eS.intl.formatToPlainString(ew.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: R(e.target),
                                              }),
                                              "aria-expanded": et?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == B && en(l);
                                              },
                                              onFocus: () => {
                                                  null == B && en(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), eh(), en(l));
                                              },
                                              children: (0, a.jsx)(fW, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eH || null == u
                                      ? null
                                      : (0, a.jsx)(tB, {
                                            projectId: u,
                                            at: { x: eH.at.x + 20, y: eH.at.y + 20 },
                                            bounds: ea,
                                            kind: eH.label.kind,
                                            value: eH.draft,
                                            canSubmit: null != B && T(eH.draft),
                                            onChange: (e) => {
                                                null != B && K({ ...B, draft: e });
                                            },
                                            onSubmit: eD,
                                            onDismiss: eh,
                                            onUploadFile: eF,
                                            closing: null == B,
                                        }),
                                  null != eN && null != et && null != eW
                                      ? (0, a.jsxs)(fX, {
                                            point: eW,
                                            frame: ea,
                                            authorId: eN.authorId,
                                            title: R(eN.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                et.confirmingRemove ? en({ ...et, confirmingRemove: !1 }) : en(null);
                                            },
                                            onMouseLeave: () => {
                                                et.editing || et.confirmingRemove || en(null);
                                            },
                                            children: [
                                                et.editing
                                                    ? (0, a.jsx)(n9.f, {
                                                          autoFocus: !0,
                                                          label: eS.intl.string(ew.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: et.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => en({ ...et, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eO());
                                                          },
                                                      })
                                                    : (0, a.jsx)(o.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fz.aC,
                                                          children: eN.comment,
                                                      }),
                                                W(eN, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fz.eB,
                                                          children: et.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(o.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fz.nv,
                                                                            children: eS.intl.string(ew.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(x.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eS.intl.string(ew.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                en({ ...et, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(x.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eS.intl.string(ew.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: ez,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(x.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: eS.intl.string(ew.default.friIzR),
                                                                            onClick: () =>
                                                                                en({
                                                                                    ...et,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        et.editing
                                                                            ? (0, a.jsx)(x.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !T(et.draft),
                                                                                  text: eS.intl.string(
                                                                                      ew.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eO,
                                                                              })
                                                                            : (0, a.jsx)(x.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eS.intl.string(
                                                                                      ew.default["6eW9lg"],
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
function fW(e) {
    let { authorId: t } = e,
        n = (0, f.bG)([li.default], () => li.default.getUser(t), [t]);
    return (0, a.jsx)(a7.eu, {
        src: null == n ? null : a6.Ay.getUserAvatarURL(n),
        size: a5._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fX(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: c, frame: d, authorId: f, title: m, testId: h, onDismiss: g, onMouseLeave: p, children: x } = e,
        v = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fG);
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
            originX: S,
            originY: N,
        } = ((n = Math.max((t = d.left + 8), d.left + d.width - 300 - 8)),
        (r = Math.max((l = d.top + 8), d.top + d.height - 160 - 8)),
        (s = Math.min(Math.max(c.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(c.y - b.y, l), r)), originX: c.x - s, originY: c.y - u }),
        A = { left: k, top: w, "--custom-conjure-card-origin-x": `${S}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: v,
        className: fz.Nr,
        style: A,
        "data-testid": h,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), g());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fz.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fz.ip, children: (0, a.jsx)(fW, { authorId: f }) }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fz.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fz.zI, children: x }),
        ],
    });
}
let fZ = 300,
    fY = 2;
function fQ(e, t) {
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
    return (0, a.jsx)("div", { className: fz.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var f1 = n(659723),
    f2 = n(697744),
    f3 = n(130324);
function f4(e) {
    let t = (0, f2.c)(),
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
    let r = (0, nE.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function f7(e) {
    let { className: t } = e,
        { Component: n, events: l } = f4(3e4);
    return (0, a.jsxs)("div", {
        className: p()(t, f3.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: f3.ol,
                children: eS.intl.string(ew.default.AyiQEp),
            }),
        ],
    });
}
var f5 = n(251363),
    f6 = n(944142),
    f8 = n(532247),
    f9 = n(501628);
function me(e) {
    let { progress: t } = e,
        { Component: n } = f4(1500),
        l = eE.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: f9.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: f9.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mt(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, f.bG)([f6.A], () => (s ? f6.A.getLiveReload(t) : null), [s, t]),
        o = (0, tc.A)(n, r)?.id ?? null,
        c = u?.phase ?? null,
        d = u?.background === !0,
        m = (function (e, t, n) {
            let l = (0, f8.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, c] = i.useState(t);
            s !== l && (u(l), c(t), a(null != l || o ? null : (0, f8.QP)(e, s)));
            let d = (0, f.bG)(
                    [e1.A],
                    () => {
                        let e = e1.A.getFrame(n);
                        return (0, e5.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                m = i.useRef(d),
                h = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((m.current = d), d && (h.current = !0));
                }, [d]),
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
        })(c, d, o),
        h = d ? null : (0, f8.h_)(c, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nD.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: f9.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(me, { progress: h }),
                  })
                : null,
        ],
    });
}
var mn = n(782134),
    ml = n(357858),
    mr = n(343030),
    ma = n(317608),
    mi = n(35367),
    ms = n(228946);
let mu = { width: 1 / 0, height: 1 / 0 };
function mo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mu;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mc = n(702083);
function md(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, f.cf)([td.A], () => ({
            mobile: td.A.isBuilderPreviewMobile(),
            landscape: td.A.isBuilderPreviewLandscape(),
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
    let o = null != s && s.width > 0 ? s : null,
        c = n ? mo(l, o ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: p()(mc.dw, { [mc.PQ]: null != c }),
        children: (0, a.jsx)("div", { className: p()(mc.R9, { [mc.Vg]: null != c }), style: c ?? void 0, children: t }),
    });
}
var mf = n(347927);
function mm(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: p()(mf.Bf, l && mf.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: mf.Ux,
                children: [
                    (0, a.jsx)(k.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(o.E, { variant: "text-md/medium", color: "text-subtle", children: n })
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
        return (0, tf.Q5)(n) ? (0, a.jsx)(md, { children: e }) : e;
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
                    title: eS.intl.string(ew.default["9kpdo7"]),
                    body: eS.intl.string(ew.default.iIA8Nj),
                }),
            });
        case mi.n.NoApplication:
            return (0, a.jsx)(f7, { className: mh.qs });
        case mi.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: mh.qs,
                children: (0, a.jsx)(mm, {
                    title: eS.intl.string(ew.default["7k4GyN"]),
                    body: eS.intl.string(ew.default.zdIy3R),
                }),
            });
        case mi.n.Error:
            return (0, a.jsxs)("div", {
                className: mh.qs,
                children: [
                    (0, a.jsx)(k.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eS.intl.string(ew.default.lTPbnG),
                    }),
                    (0, a.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: mh.tj,
                        children: eS.intl.string(ew.default.e6GiAZ),
                    }),
                ],
            });
        case mi.n.AwaitingLaunch:
        case mi.n.Loading:
            return (0, a.jsx)("div", { className: mh.qs, children: (0, a.jsx)(c.y, {}) });
    }
}
var mx = n(308528),
    mv = n(334738),
    mj = n(688606),
    mb = n(365971),
    my = n(703462);
function mk(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: my.f,
        children: [
            (0, a.jsx)(iF.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mw() {
    return (0, a.jsx)("div", { className: my.f, children: (0, a.jsx)(c.y, {}) });
}
function mS(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        c = (0, f.bG)([lr.A], () => (null != o ? lr.A.getChannel(o) : null), [o]);
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && mx.A.preload(e7.ME, t);
        }, [t]),
        (n = (0, f.bG)([oP.A], () => oP.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mb.Xg)();
            return (
                (0, mv.yl)(t, e),
                () => {
                    (0, mv.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        h = d === r;
    return (i.useEffect(() => {
        if (null != c || h) return;
        let e = !1;
        return (
            (0, eO.CN)(l).then(
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
    }, [l, r, c, h]),
    h)
        ? (0, a.jsx)(mk, { message: eS.intl.string(ew.default["VP/O8s"]) })
        : null == c
          ? (0, a.jsx)(mw, {})
          : (0, a.jsx)("div", {
                className: my.g,
                children: (0, a.jsx)(mj.A, { channel: c, guild: null, chatInputType: us.oU.SIDEBAR }, c.id),
            });
}
var mN = n(765671),
    mA = n(625903),
    mC = n(666476),
    mI = n(582063);
let mE = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mM() {
    (0, eb.P0)({ text: eS.intl.string(ew.default.jj3abP), variant: "critical" });
}
function m_(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = eS.intl.string(ew.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(e8.Y, {
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
                        children: (0, a.jsx)(tF.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tX.K, {
                                "aria-label": r,
                                icon: mA.SettingsIcon,
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
                accept: mE.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mE.includes(n.type)
                                ? n.size > mC.aI
                                    ? (0, eb.P0)({ text: eS.intl.string(ew.default.T8Spiu), variant: "critical" })
                                    : (0, af.M$)(t, n).catch(mM)
                                : (0, eb.P0)({ text: eS.intl.string(ew.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mT(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, f.bG)([ad.A], () => ad.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(e9.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": eS.intl.string(ew.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(te.rX, {
                children: [
                    (0, a.jsx)(te.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: eS.intl.string(ew.default.uQpDky),
                        icon: lZ.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(te.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: eS.intl.string(ew.default.AiAz8J),
                        icon: d6.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, af.Og)(t).catch(mM));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(te.rX, {
                children: (0, a.jsx)(te.fP, {
                    id: "conjure-overlay-background-blur",
                    label: eS.intl.string(ew.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, af.Y1)(t, !i) || mM();
                    },
                }),
            }),
        ],
    });
}
function mP(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: i, width: s, height: u } = (0, mN.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: s, height: u }, l);
    return (0, a.jsxs)("div", {
        className: mI.JH,
        children: [
            (0, a.jsx)(ah, { projectId: n }),
            (0, a.jsx)("div", {
                ref: i,
                className: mI.dw,
                children: (0, a.jsx)("div", {
                    className: mI.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(mg, { applicationId: t, surface: e5.ZN, frameOverlay: r }),
                }),
            }),
            null != n ? (0, a.jsx)(m_, { projectId: n }) : null,
        ],
    });
}
function mR(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(mm, {
        title: eS.intl.string(ew.default.xlEjZ8),
        body: eS.intl.string(ew.default["4ByPbd"]),
        children: (0, a.jsx)(x.$, {
            size: "sm",
            variant: "primary",
            text: eS.intl.string(ew.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var mL = n(409478),
    m$ = n(652227);
function mq(e) {
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
            overlayWidgetSize: m = eU,
            projectId: h,
            renderFrameOverlay: g,
            paused: p = !1,
            onResume: x,
        } = e,
        v = (0, f.bG)([rr.A], () => null != h && null != rr.A.getSetupStartedAt(h), [h]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: m$.qs, children: (0, a.jsx)(c.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: m$.qs,
                children: (0, a.jsx)(mR, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: m$.RG,
                      children: [
                          (0, eV.yf)(u, o)
                              ? p
                                  ? (0, a.jsx)(mD, { projectId: h, onResume: x })
                                  : (0, a.jsx)(mg, { applicationId: t, surface: l, launch: r, frameOverlay: g?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: m$.qs,
                                        children: (0, a.jsx)(mm, {
                                            wide: !0,
                                            title: eS.intl.string(ew.default["08U+YO"]),
                                            body: eS.intl.string(ew.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(mL.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, a.jsx)(mP, { applicationId: t, projectId: h, size: m, frameOverlay: g?.(e5.ZN) })
                              : null,
                          "bot" === o && null != n && null != h
                              ? (0, a.jsx)(mS, { projectId: h, previewApplicationId: n })
                              : null,
                      ],
                  })
            : v
              ? (0, a.jsx)("div", { className: m$.qs, children: (0, a.jsx)(c.y, {}) })
              : (0, a.jsx)(f7, { className: m$.qs });
}
function mD(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, ml.Pu)(t),
        (0, a.jsx)("div", {
            className: m$.qs,
            children: (0, a.jsx)(mm, {
                wide: !0,
                title: eS.intl.string(ew.default.MMWEH2),
                body: eS.intl.string(ew.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(x.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mn.PlayIcon,
                              text: eS.intl.string(ew.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mF = n(750506),
    mO = n(867193),
    mz = n(539197),
    mG = n(977020);
function mU(e) {
    let { projectId: t } = e,
        n = (0, mz.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mz.Ie)(e);
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
    let { left: r, top: s, width: u, height: o, scale: c } = l;
    function d(e, t) {
        return { "--custom-conjure-cursor-x": `${e * c}px`, "--custom-conjure-cursor-y": `${t * c}px` };
    }
    return (0, a.jsxs)("div", {
        className: mG.$Q,
        style: { left: r, top: s, width: u, height: o, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [mz.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: p()(mG.hN, mG.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: p()(mG.hN, mG.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: p()(mG.UE, { [mG.SP]: n.shown, [mG.Vq]: n.pressed, [mG.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mB = n(417760);
function mK(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, f.bG)([ri.A], () => null != e && ri.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, tg.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, e_.CU)(n),
        c = "controlling" === t,
        d = eS.intl.string(c ? (u ? ew.default["VJW/5P"] : ew.default["+hD2Iz"]) : ew.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(x.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eS.intl.string(ew.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: p()(mB.M0, mB.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(cw.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(sa.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(o.E, { variant: "text-sm/semibold", color: "none", className: mB.ID, children: d }),
                  c ? (0, a.jsx)(nD.A, { children: eS.intl.string(ew.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: mB.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: mB.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: mB.sp,
                      children: [
                          (0, a.jsx)(sa.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(cw.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: mB.f4,
                              children: [
                                  (0, a.jsx)(o.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: mB.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(o.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: mB.Rb,
                                            children: eS.intl.string(ew.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: mB.lC, children: m }) : null,
              ],
          });
}
function mH(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, e_.Zv)(null != n && n === l ? t : null),
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
        c = (0, eP.useHasAnyModalOpen)(),
        d = (0, e2.cR)(s);
    i.useEffect(() => {
        u && d && null != s && (0, e2.BL)(s);
    }, [u, d, s]);
    let [f, m] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== o;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = tK(r());
            m((t) => (tH(t, e) ? t : e));
            let t = null == h ? null : tK(h);
            (x((e) => (tH(e, t) ? e : t)), null != h && (0, mO.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mO.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== o && null != f,
        b = j && "controlling" === o && !c,
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
        S = (function () {
            let [e] = i.useContext(mF.uY),
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
                      className: mB.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: mB.QF,
                          children: (0, a.jsx)(mK, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, tL.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(nD.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === o
                                ? eS.intl.string(ew.default.oWcemF)
                                : "handoff" === o
                                  ? eS.intl.string(ew.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, tL.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: mB.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: mB.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(mU, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var mV = n(399503),
    mW = n(853555),
    mX = n(271982),
    mZ = n(327152),
    mY = n(187645);
let mQ = { width: 1280, height: 720 },
    mJ = new Map(),
    m0 = !1;
function m1() {
    let e = new Map();
    for (let t of new Set([...ri.A.getActivityOrderedProjectIds(), ...(0, e_.T7)()])) {
        if (!(ri.A.isThinking(t) || (0, e_.wK)(t)) || ez.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = m.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, tf.Rc)(t), (0, tf.Th)(t)].find(e5.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...mJ]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            mJ.delete(t),
            n.unregisterLookup(),
            mX.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, mZ.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        mJ.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = mY.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    m2(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mJ.set(e, l),
                    (l.unregisterLookup = (0, mW.Ng)(e, () => (0, f5.n5)(n, t))),
                    mX.A.registerFrameTarget(t, n, mr.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of mJ) m2(t.element, e, t.frameId);
}
function m2(e, t, n) {
    if (e1.A.getFrame(n)?.surface.type === eW.U.OVERLAY) {
        let l = eK(m.Ay.getProject(t));
        (e.classList.remove(mY.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, mZ.Pn)(n, l));
        return;
    }
    let l = td.A.isBuilderPreviewMobile();
    e.classList.toggle(mY.L, !l);
    let r = l ? mo(td.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, mZ.Pn)(n, r ?? mQ));
}
var m3 = n(873727),
    m4 = n(147248),
    m7 = n(418842),
    m5 = n(363195);
let m6 = 0;
var m8 = n(818023);
let m9 = null;
var he = n(949621);
function ht(e) {
    let { projectId: t } = e,
        n = (0, f.bG)(
            [m.Ay],
            () => {
                let e = m.Ay.getProject(t);
                return null == e || null != e.install_scope_setup ? null : e.install_scope;
            },
            [t],
        );
    if (null == n) return null;
    let l = "guild" === n,
        r = eS.intl.string(l ? ew.default.cAExE8 : ew.default["15Y/Yz"]);
    return (0, a.jsx)(nq.u, {
        title: r,
        body: eS.intl.string(l ? ew.default.r8rVq1 : ew.default.IZMyda),
        position: "bottom",
        children: (0, a.jsx)("span", { className: he.I, tabIndex: 0, children: (0, a.jsx)(fg.v, { text: r }) }),
    });
}
var hn = n(541940);
function hl(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: o,
            content: c,
            sidebar: d,
            showsFrame: m,
            paused: h,
        } = e,
        [g, x] = i.useState(null),
        v = (0, tc.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, f.bG)([m5.A], () => (0, m3.x4)(m5.A.theme)),
            l = (0, f.bG)([m4.A], () => m4.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, f.cf)([a3.Ay], () => ({
                reducedMotion: a3.Ay.useReducedMotion,
                fontScale: (0, m3.U0)(),
                highContrast: a3.Ay.isHighContrastModeEnabled,
                forcedColors: a3.Ay.useForcedColors,
                underlineLinks: a3.Ay.alwaysShowLinkDecorations,
            })),
            c = eE.hH.useSetting(),
            d = (0, m7.C)(),
            m = (0, f.bG)(
                [e1.A, td.A],
                () =>
                    td.A.isBuilderPreviewMobile() &&
                    e1.A.getFrame(t)?.applicationId === td.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            g = i.useRef(!1),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, f5.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++m6,
                    baseTheme: n,
                    customTheme: (0, m3.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: m,
                };
                (0, fF.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, m, t, s, c, e, r, d, o]),
            v = i.useRef(x);
        i.useLayoutEffect(() => {
            v.current = x;
        });
        let j = i.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    ((h.current = !1), g.current || v.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (g.current = !1),
                () => {
                    g.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                j();
            }, [l, j]),
            i.useLayoutEffect(() => {
                (x(), j());
            }, [j, x]),
            i.useLayoutEffect(() => {
                let n = (0, f5.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, f5.n5)(e, t) && ((p.current = null), j());
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
    })(g, j),
        i.useEffect(() => {
            if (null != t) return (0, mW.Ng)(t, () => (0, f5.n5)(g, j));
        }, [t, g, j]));
    let b = i.useCallback(() => (0, f5.ow)(g, j), [g, j]),
        y = i.useCallback(() => (m ? (0, f5.ow)(g, j) : g), [m, g, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: p()(hn.Mh, o),
                children: [
                    u,
                    h
                        ? null
                        : (0, a.jsx)(mH, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: hn.fm, children: c }),
                ],
            }),
            d,
            h
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fV, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(nw, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function hr(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: s,
        frameLaunchParams: u,
        header: o,
        chatOpen: c,
        onCloseChat: d,
        chatHeaderAction: h,
        onRestoreVersion: g,
        onImportProject: x,
        debugOpen: v = !1,
        onCloseDebug: j,
        restoreState: b,
        previewReady: y,
        previewGate: k,
        availability: w,
        activeMode: S,
        widgetApplicationId: N,
        overlayWidgetSize: A,
        previewPaused: C = !1,
        onResumePreview: I,
    } = e;
    (0, mV.k)(t, N);
    let E = s.type === eW.U.MAIN || (0, tf.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, f.cf)([td.A], () => ({
            mobile: td.A.isBuilderPreviewMobile(),
            landscape: td.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? m8.aX.LANDSCAPE : m8.aX.PORTRAIT), (m9 = e));
                else {
                    if (m9 !== e) return;
                    ((l = m8.aX.UNHANDLED), (m9 = null));
                }
                ov.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? l : null);
    let M = i.useRef(null),
        [_, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, nN.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, nN.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (E) return ((0, eO.HV)(l), () => (0, eO.HV)(null));
        }, [l, E]),
        i.useEffect(() => {
            null != t &&
                ((0, tg.ensureConnection)(t),
                m0 ||
                    ((m0 = !0),
                    ri.A.addChangeListener(m1),
                    m.Ay.addChangeListener(m1),
                    e1.A.addChangeListener(m1),
                    td.A.addChangeListener(m1),
                    ez.A.addChangeListener(m1),
                    (0, e_.W3)(m1),
                    m1()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = M.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let P = Math.max(450, _ - 320),
        R = c || E;
    return (0, a.jsx)("div", {
        ref: M,
        className: hn.LB,
        children: (0, a.jsx)(hl, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: o,
            showsFrame: (0, eV.yf)(w, S),
            paused: C,
            mainClassName: null == o ? void 0 : p()(hn.ez, { [hn.zt]: c }),
            content: (0, a.jsx)(mq, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: y,
                previewGate: k,
                availability: w,
                activeMode: S,
                widgetApplicationId: N,
                overlayWidgetSize: A,
                projectId: t,
                paused: C,
                onResume: I,
                renderFrameOverlay: (e) =>
                    (0, a.jsx)(mt, { projectId: t, applicationId: l, previewApplicationId: r, surface: e }),
            }),
            sidebar:
                null != t && R
                    ? (0, a.jsx)("div", {
                          className: c ? hn.v7 : hn.LL,
                          children: (0, a.jsx)(tP.A, {
                              sidebarType: tP.X.CallChatSidebar,
                              maxWidth: P,
                              capturePointer: !0,
                              children: (0, a.jsx)("div", {
                                  className: hn.cO,
                                  children: v
                                      ? (0, a.jsx)(fP, { projectId: t, onClose: j ?? (() => {}) }, t)
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(f1.Ay, { projectId: t }),
                                                (0, a.jsxs)(tR.Ay, {
                                                    "aria-label": eS.intl.string(eS.t["/VQax8"]),
                                                    toolbar: (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            h,
                                                            null == d
                                                                ? null
                                                                : (0, a.jsx)(tR.Ay.Icon, {
                                                                      icon: tT.P,
                                                                      tooltip: eS.intl.string(ew.default.JD6Oit),
                                                                      onClick: d,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: [
                                                        (0, a.jsx)(tR.Ay.Title, {
                                                            children: eS.intl.string(eS.t["/VQax8"]),
                                                        }),
                                                        (0, a.jsx)(ht, { projectId: t }),
                                                    ],
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: hn.cb,
                                                    children: (0, a.jsx)(
                                                        cX,
                                                        {
                                                            projectId: t,
                                                            restoreState: b,
                                                            onRestoreVersion: g,
                                                            onImportProject: x,
                                                            escapeScopeRef: M,
                                                        },
                                                        t,
                                                    ),
                                                }),
                                            ],
                                        }),
                              }),
                          }),
                      })
                    : null,
        }),
    });
}
var ha = n(705427),
    hi = n(606128),
    hs = n(323140);
function hu(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: c, guildId: d } = e,
        h = i.useContext(eq),
        [g] = i.useState(() => (null != h ? eF.A.getProjectView(h) : null)),
        [w, S] = i.useState(g?.chatOpen ?? !0),
        [N, A] = i.useState(g?.debugOpen ?? !1);
    i.useEffect(() => {
        null != h && (0, eD.g7)(h, { chatOpen: w, debugOpen: N });
    }, [h, w, N]);
    let M = i.useCallback(
            (e) => {
                null != h && (0, eD.g7)(h, { previewSelection: e });
            },
            [h],
        ),
        _ = eM(),
        T = eT.useConfig({ location: "ConjureSelectedProjectScreen" }).enabled,
        P = i.useCallback(() => S(!0), []),
        R = i.useCallback(() => {
            (A(!1), S(!0));
        }, []),
        { restoreState: L, handleRestoreVersion: $ } = (function (e, t) {
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
                                (0, eL.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, eb.P0)({
                                                        text: eS.intl.formatToPlainString(ew.default.Z4n6LX, {
                                                            title: (0, eR.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, e$.c)(o, r);
                                                null != e && (0, eb.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, eb.P0)({
                                                    text: eS.intl.string(ew.default["PSdo+w"]),
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
        })(s, R),
        q = s?.id ?? null,
        {
            integrationStatus: D,
            isPreviewApplicationLoading: F,
            checkingIntegration: O,
            previewReady: z,
            hasFrame: G,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, f.bG)(
                    [m.Ay, tu.A],
                    () => (null == l ? null : (m.Ay.getIntegrationStatus(l) ?? tu.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, ti.YY)(u ?? void 0),
                c = null != l && t !== l,
                d = s?.preview_ready === !0,
                h = s?.has_activity === !0,
                g = s?.bot_permissions_changed === !0,
                p = (0, eV.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: d,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: g,
                });
            i.useEffect(() => {
                p && !c && null != u && e(u);
                async function e(e) {
                    try {
                        await (0, ti.TA)(e);
                    } catch {}
                }
            }, [g, c, p, u]);
            let x = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, ts.CG)(l)?.catch(() => (0, ts.U1)(l, e.signal)) ?? (0, ts.U1)(l, e.signal));
                } catch {
                } finally {
                    e.signal.aborted || a.current !== e || r.current !== l || n(l);
                }
            }, [l]);
            return (
                i.useEffect(
                    () => (
                        x(),
                        () => {
                            (a.current?.abort(), (a.current = null));
                        }
                    ),
                    [x],
                ),
                {
                    integrationStatus: s,
                    isPreviewApplicationLoading: o,
                    checkingIntegration: c,
                    previewReady: d,
                    hasFrame: h,
                }
            );
        })(s),
        U =
            (0, f.bG)([tp.A], () => (null == q ? void 0 : tp.A.getPublishStatus(q)?.previewAppChannels), [q]) ??
            D?.preview_app_channels,
        {
            availability: K,
            activeMode: V,
            setMode: W,
            frameSurface: X,
            frameSurfaceOptions: Y,
            setFrameSurface: Q,
            appChannel: J,
            setAppChannel: ee,
            frameLaunchParams: et,
            widgetApplicationId: en,
        } = (0, eQ.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: G,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eG.q7.OVERLAY) === !0,
            previewAppChannels: U,
            initialSelection: g?.previewSelection,
            onSelectionChange: M,
        }),
        el = eK(s);
    ((0, eH.x)(q, (e) => {
        K.modes.includes(e) && W(e);
    }),
        eI(q, () => {
            (S(!0), A(!0));
        }));
    let er = K.modes.includes("frame"),
        ea = (0, f.bG)([ez.A], () => ez.A.isPaused(q), [q]),
        ei = er && !ea,
        {
            previewTargetOptions: es,
            handleSelectPreviewTarget: eu,
            mobilePreview: ef,
            mobilePreviewLabel: eh,
            handleToggleMobilePreview: eg,
            landscapePreview: ex,
            rotatePreviewLabel: eA,
            handleRotatePreview: eC,
            previewSurface: eE,
            previewFrame: eU,
            refreshFrame: eB,
            isRefreshing: eX,
            handleRefresh: eZ,
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
                    setAppChannel: c,
                } = e,
                d = i.useMemo(
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
                        })(n, a, s),
                    [n, a, s],
                ),
                m = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (o(e.surface), null != e.appChannel && c?.(e.appChannel)), u(e.mode));
                    },
                    [c, o, u],
                ),
                h = (0, f.bG)([td.A], () => td.A.isBuilderPreviewMobile()),
                g = eS.intl.string(h ? ew.default.tKGF0Q : ew.default.peqEOY),
                p = i.useCallback(() => (0, eO.GG)(!h), [h]),
                x = (0, f.bG)([td.A], () => td.A.isBuilderPreviewLandscape()),
                v = eS.intl.string(x ? ew.default.tunI2l : ew.default.DoNdjA),
                j = i.useCallback(() => (0, eO.Lw)(!x), [x]),
                b = (0, tf.jS)(t),
                y = i.useMemo(() => (0, tf.Op)(b, r), [b, r]),
                k = (0, tc.A)(t?.preview_application_id ?? null, y),
                w = (0, tc.A)(t?.preview_application_id ?? null, e5.ZN),
                S = "overlay" === l ? w : k,
                N = (0, e5.x1)(S) && S.data.proxyTicketRefreshing,
                A = i.useCallback(() => {
                    null == S || N || to.A.refreshProxyTicket(S.id);
                }, [S, N]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: m,
                mobilePreview: h,
                mobilePreviewLabel: g,
                handleToggleMobilePreview: p,
                landscapePreview: x,
                rotatePreviewLabel: v,
                handleRotatePreview: j,
                previewSurface: y,
                previewFrame: k,
                refreshFrame: S,
                isRefreshing: N,
                handleRefresh: A,
            };
        })({
            project: s,
            modes: K.modes,
            activeMode: V,
            frameSurface: X,
            frameSurfaceOptions: Y,
            previewAppChannels: U,
            setMode: W,
            setFrameSurface: Q,
            setAppChannel: ee,
        }),
        eY = w && !N,
        eJ = eS.intl.string(eY ? ew.default.JD6Oit : ew.default.xjJAQm),
        e0 = i.useCallback(() => {
            if (N) {
                (A(!1), S(!0));
                return;
            }
            S((e) => !e);
        }, [N]),
        e1 = i.useCallback(() => S(!1), []),
        {
            designFeedbackActive: e2,
            designFeedbackToggleRef: e3,
            agentDrivingPreview: e4,
            designFeedbackLabel: e7,
            handleToggleDesignFeedback: e8,
        } = (function (e, t, n) {
            let { active: l } = Z(e);
            i.useEffect(() => {
                null != e && l && !t && H(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, e_.Zv)(e),
                s = eS.intl.string(a ? ew.default.Sme0T0 : l ? ew.default.vn5Rzu : ew.default["cl/Jyl"]),
                u = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void H(e);
                        (n(), B(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })(q, ei, R),
        [e9] = i.useState(() => E.isPlatformEmbedded && (0, ta.qM)()),
        te = null != ep(q);
    i.useEffect(() => {
        null != q && te && !ei && em(q);
    }, [q, te, ei]);
    let tt = i.useCallback(() => {
            null != q &&
                (R(),
                (function (e) {
                    if (null != ed(e)) return;
                    let { byProject: t } = eo.getState();
                    eo.setState({ byProject: { ...t, [e]: ec } });
                })(q));
        }, [q, R]),
        tn = i.useCallback(() => {
            null != q && em(q);
        }, [q]),
        tl = te ? eS.intl.string(ew.default.tuQ5f3) : e7,
        ty = i.useCallback(() => {
            A((e) => !e && (S(!0), !0));
        }, []),
        tk = i.useCallback(() => A(!1), []),
        tw = i.useCallback(() => {
            null != q && (0, eO._j)(q);
        }, [q]),
        tS = i.useCallback(() => {
            null != q && (ea ? (0, eO._j)(q) : (0, eO.di)(q, eU?.id));
        }, [q, ea, eU?.id]),
        tA = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eU?.id), (0, tg.closeConnection)(e), (0, th.r)(t)), c());
        }, [s, eU?.id, c]),
        tC =
            ((t = (0, ek.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, ey.vt)(e);
                    null != n
                        ? (0, eb.P0)({ text: n, variant: "critical" })
                        : (0, ej.A)({
                              title: eS.intl.formatToPlainString(ew.default["Gm+u1+"], { name: s.name }),
                              subtitle: eS.intl.string(ew.default.M7H3sJ),
                              confirmText: eS.intl.string(ew.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  P();
                                  try {
                                      await (0, ey.Hj)(t, e, eS.intl.string(ew.default.Owerd3));
                                  } catch {
                                      (0, eb.P0)({ text: eS.intl.string(ew.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, P],
            )),
            { onExport: t, onImport: (r = (0, ey.yN)(l)).open, importInput: r.input }),
        tI = i.useCallback(() => {
            null != s && (0, tM.A)(s, d);
        }, [s, d]),
        tT = i.useCallback(async () => {
            null != q && (await (0, tv.vL)(q, d));
        }, [d, q]),
        tP = (0, eV.aN)(V, {
            installScope: s?.install_scope ?? null,
            previewReady: z,
            integrationInstalled: D?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tT, loading: F }
            : O && null == D
              ? { type: "checking" }
              : void 0,
        tR = (0, f.bG)([m.Ay], () => null != q && m.Ay.isProjectDeleting(q), [q]);
    i.useEffect(() => {
        ((null == s && u) || tR) && c();
    }, [s, u, tR, c]);
    let {
            publishOptions: tL,
            publish: t$,
            publishing: tq,
            confirmation: tD,
            variant: tF,
            text: tO,
        } = (function (e, t, n, l) {
            let [r, a] = i.useState(null),
                s = i.useRef(null),
                u = i.useCallback(() => {
                    (null != s.current && clearTimeout(s.current), (s.current = null));
                }, []);
            i.useEffect(() => u, [u]);
            let o = i.useMemo(
                    () => ({
                        ...l,
                        showConfirmation: (e) => {
                            (u(),
                                a(e),
                                (s.current = setTimeout(() => {
                                    ((s.current = null), a(null));
                                }, 1500)));
                        },
                    }),
                    [l, u],
                ),
                c = i.useMemo(() => ({ guildId: t, platform: o, busy: n }), [t, o, n]),
                d = (0, tv.Ay)(e, c),
                f = d?.publishing === !0;
            i.useEffect(() => {
                f && (u(), a(null));
            }, [f, u]);
            let m = f ? null : r;
            return {
                publishOptions: c,
                publish: d,
                publishing: f,
                confirmation: m,
                variant: tj(d) ? "secondary" : "primary",
                text: tb(d, m),
                label: tb(d, null),
                indicator: null == d ? null : d.publishing ? "publishing" : tj(d) ? null : "unpublished",
            };
        })(q, d, O || F, tN),
        tz = tE(q, t$, tL),
        tG = (0, C.A)(eU),
        tU = "frame" === V && !ea && (0, e5.x1)(eU) && (tG.isPoppedOut || tG.canPopout),
        tB = null == s ? void 0 : () => (0, t_.A)(s.id, { guildId: d, isPreview: !0, publishOptions: tL }),
        tK =
            null == s
                ? null
                : (0, a.jsx)(tm.A, {
                      projectId: s.id,
                      projectName: s.name,
                      guildId: d,
                      projectGuildId: s.guild_id,
                      isOwner: (0, m.PV)(s),
                      canRemix: (0, m.H_)(s),
                      onOpenProjectSettings: tB,
                      onTogglePreviewPaused: "frame" === V ? tS : void 0,
                      previewPaused: ea,
                      previewPauseDisabled: !ea && e4,
                      onTogglePopout: tU ? (tG.isPoppedOut ? tG.popIn : tG.popOut) : void 0,
                      poppedOut: tG.isPoppedOut,
                      onToggleDebug: _ ? ty : void 0,
                      debugOpen: N,
                      onExport: tC.onExport,
                      onImport: tC.onImport,
                      onRemix: tI,
                      onConnectTool: T
                          ? () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void (0, eP.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([n.e("834460"), n.e("960521")]).then(
                                            n.bind(n, 699760),
                                        );
                                        return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                    })
                                );
                            }
                          : void 0,
                      onHistory: () => {
                          var e;
                          return (
                              (e = {
                                  projectId: s.id,
                                  installScope: s.install_scope,
                                  restoreDisabled: L?.status === "restoring",
                                  onRestoreVersion: (e, t) => $(e, t, !0),
                              }),
                              void (0, eP.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("323079"),
                                      n.e("437655"),
                                      n.e("420238"),
                                      n.e("334179"),
                                      n.e("231782"),
                                      n.e("526192"),
                                      n.e("437578"),
                                  ]).then(n.bind(n, 209233));
                                  return (n) => (0, a.jsx)(t, { ...n, ...e });
                              })
                          );
                      },
                      refreshApplicationId:
                          K.modes.includes("widget") && "unavailable-authorization-revoked" !== K.profileState
                              ? en
                              : null,
                      previewProjectId: s.id,
                  }),
        tH =
            null == t$ || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: hs.As,
                      onMouseDown:
                          null == q || t$.disabled || tq
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tx.dx)(q);
                                },
                      children: (0, a.jsx)(x.$, {
                          size: "sm",
                          variant: tF,
                          icon: tq ? ho : null != tD ? v.U : void 0,
                          text: tO,
                          onClick: () => tz("header"),
                      }),
                  }),
        tV = (0, a.jsx)(ha.A, {
            title: s?.name ?? eS.intl.string(ew.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tB,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: hs.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: hs.QQ,
                                  children: [
                                      (0, a.jsx)(tr, {
                                          targets: es,
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
                                          })(V, X, J),
                                          onChange: eu,
                                      }),
                                      er
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === V
                                                        ? (0, a.jsx)(I.A.Icon, {
                                                              icon: ef ? hf : hd,
                                                              tooltip: eh,
                                                              "aria-label": eh,
                                                              selected: ef,
                                                              onClick: eg,
                                                          })
                                                        : null,
                                                    ef && "frame" === V
                                                        ? (0, a.jsx)(I.A.Icon, {
                                                              icon: hm,
                                                              tooltip: eA,
                                                              "aria-label": eA,
                                                              selected: ex,
                                                              onClick: eC,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(ev, {
                                                        enabled: e9 && !te && !e4 && !ea,
                                                        onLongPress: tt,
                                                        children: (0, a.jsx)(I.A.Icon, {
                                                            ref: e3,
                                                            icon: j.x,
                                                            iconClassName: hs.D8,
                                                            tooltip: tl,
                                                            "aria-label": tl,
                                                            selected: te || e2,
                                                            disabled: ea || (e4 && !te),
                                                            onClick: te ? tn : e8,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== V || ea
                                          ? null
                                          : (0, a.jsx)(e6, { frame: eU, controlProjectId: s.id }),
                                      (0, e5.x1)(eB)
                                          ? (0, a.jsx)(I.A.Icon, {
                                                icon: b.RefreshIcon,
                                                tooltip: eS.intl.string(ew.default.FZIHQN),
                                                "aria-label": eS.intl.string(ew.default.FZIHQN),
                                                disabled: eX,
                                                onClick: eZ,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, a.jsx)("div", { className: hs.YJ }),
                              (0, a.jsx)(eN.A, { frame: eU }),
                              (0, a.jsx)(I.A.Icon, {
                                  icon: y.DoorExitIcon,
                                  tooltip: eS.intl.string(ew.default["/TlGcK"]),
                                  "aria-label": eS.intl.string(ew.default["/TlGcK"]),
                                  onClick: tA,
                              }),
                              (0, a.jsx)(I.A.Icon, {
                                  icon: hc,
                                  tooltip: eJ,
                                  "aria-label": eJ,
                                  selected: eY,
                                  onClick: e0,
                              }),
                              tK,
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: p()(hs.nj, hi.T),
        children: [
            tC.importInput,
            (0, a.jsx)("main", {
                className: hs.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: hs.j5,
                              children: [
                                  tV,
                                  (0, a.jsxs)("div", {
                                      className: hs.sD,
                                      children: [
                                          (0, a.jsx)(k.D, {
                                              variant: "heading-lg/semibold",
                                              children: eS.intl.string(ew.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(o.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eS.intl.string(ew.default.fINulo),
                                          }),
                                          (0, a.jsx)(x.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eS.intl.string(ew.default["WFJ/vb"]),
                                              onClick: () => (0, ts.listProjects)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tv.bI.Provider, {
                              value: tL,
                              children: (0, a.jsx)(
                                  hr,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: e3,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eE,
                                      frameLaunchParams: et,
                                      header: tV,
                                      chatOpen: w,
                                      onCloseChat: e1,
                                      chatHeaderAction: tH,
                                      debugOpen: _ && N,
                                      onCloseDebug: tk,
                                      onRestoreVersion: $,
                                      onImportProject: (0, m.PV)(s) ? tC.onImport : void 0,
                                      restoreState: L,
                                      previewReady: z,
                                      previewGate: tP,
                                      availability: K,
                                      activeMode: V,
                                      widgetApplicationId: en,
                                      overlayWidgetSize: el,
                                      previewPaused: ea,
                                      onResumePreview: tw,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function ho() {
    return (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: hs.Hv, itemClassName: hs.C5 });
}
function hc(e) {
    return (0, a.jsx)(w.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hd(e) {
    return (0, a.jsx)(S.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hf(e) {
    return (0, a.jsx)(N.k, { ...e, size: "custom", width: 20, height: 20 });
}
function hm(e) {
    return (0, a.jsx)(A.H, { ...e, size: "custom", width: 20, height: 20 });
}
var hh = n(97005),
    hg = n(46746),
    hp = n(434279),
    hx = n(751841),
    hv = n(159308);
let hj = "ConjurePage";
function hb() {
    return (0, a.jsx)("div", {
        className: hv.l,
        children: (0, a.jsx)(o.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: eS.intl.string(ew.default.BGh3xB),
        }),
    });
}
function hy() {
    (0, d.bG)((0, hx.hU)(null));
}
function hk(e) {
    let { projectId: t, workspaceGuildId: n } = e,
        { project: l, settled: r } = (function (e) {
            let { project: t, unavailable: n } = (0, f.cf)(
                    [m.Ay],
                    () => ({ project: m.Ay.getProject(e), unavailable: (0, ts.su)(e) }),
                    [e],
                ),
                l = null == t;
            return (
                i.useEffect(() => {
                    l && (0, ts.tF)([e]);
                }, [l, e]),
                { project: t, settled: null != t || n }
            );
        })(t);
    (0, rz.wB)(t);
    let s = (null != l ? (0, hp.wu)(l) : null) ?? n;
    return (!(function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "unknown",
            n = (0, f.bG)([m.Ay], () => null != e && null != m.Ay.getProject(e), [e]),
            l = i.useRef(null);
        i.useEffect(() => {
            null != e && n && l.current !== e && ((l.current = e), (0, h.wQ)(e, t));
        }, [e, t, n]);
    })(t, (0, u.zy)().state?.conjureEntryPoint),
    null != l || r)
        ? null == s
            ? (0, a.jsx)(hb, {})
            : (0, a.jsx)(eq.Provider, {
                  value: t,
                  children: (0, a.jsx)(hu, { project: l, projectsLoaded: r, onBack: hy, guildId: s }),
              })
        : (0, a.jsx)("div", { className: hv.l, children: (0, a.jsx)(c.y, {}) });
}
function hw(e) {
    let { projectId: t } = e,
        n = (0, n3.rX)(hj);
    return (i.useEffect(() => {
        m.Ay.hasFetchedOwnedProjects() || (0, ts.listProjects)();
    }, []),
    i.useEffect(() => {
        (0, eD.jQ)(t);
    }, [t]),
    i.useEffect(() => eD.mE, []),
    null == t)
        ? (0, a.jsx)("div", {
              className: hv.i,
              children: null == n ? (0, a.jsx)(hb, {}) : (0, a.jsx)(hg.A, { guildId: n, onConjurePage: !0 }),
          })
        : (0, a.jsx)(hk, { projectId: t, workspaceGuildId: n }, t);
}
function hS(e) {
    let { projectId: t } = e;
    return (0, hh.TW)(hj) ? (0, a.jsx)(hw, { projectId: t }) : null;
}
