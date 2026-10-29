n.d(t, { A: () => hp });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    u = n(834730),
    o = n(289873),
    c = n(976860),
    d = n(503698),
    f = n.n(d),
    m = n(17928),
    h = n(821609),
    g = n(478016),
    p = n(604525),
    x = n(625903),
    v = n(297264),
    j = n(534890),
    b = n(646270),
    y = n(31300),
    k = n(831453),
    w = n(646973),
    S = n(742589),
    N = n(723702),
    C = n(839214);
n(321073);
let A = Object.freeze({ x: 0.5, y: 0.5 });
function I(e) {
    return "" !== e.trim();
}
function E(e) {
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
function M(e) {
    let { kind: t, name: n } = E(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function _(e) {
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
let T = "[conjure:selected] ",
    P = " \u2014 ";
function R(e) {
    if (!e.startsWith(T)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(T.length),
        a = r.indexOf(P),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let L = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    $ = new Map(),
    q = new Set();
function D(e) {
    return $.get(e) ?? L;
}
function F(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? $.set(e, t) : $.delete(e), [...q]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function O(e) {
    let t = D(e);
    t.active || F(e, { ...t, active: !0 });
}
function z(e) {
    let t = D(e);
    t.active && F(e, { ...t, active: !1 });
}
function G(e) {
    $.has(e) && F(e, L);
}
function U(e, t) {
    let n = D(e);
    n.active && F(e, { ...n, context: t });
}
function B(e, t) {
    return null != t && e.authorId === t;
}
function K(e) {
    return (
        q.add(e),
        () => {
            q.delete(e);
        }
    );
}
function H(e) {
    let t = i.useCallback(() => (null == e ? L : D(e)), [e]);
    return i.useSyncExternalStore(K, t, t);
}
(n(134528), n(947204));
let V = { past: [], present: [], future: [] };
function W(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function X(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function Y(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => X(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: X(e.from, t, n), to: X(e.to, t, n) };
        case "text":
            return { ...e, at: X(e.at, t, n) };
    }
}
function Q(e) {
    return e.some((e) => "erase" !== e.kind);
}
function Z(e, t) {
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
function J(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function ee(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function et(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => ee(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = ee(e.from, t),
                l = ee(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = ee(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function en(e) {
    return Q(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let el = [3, 6, 12],
    er = [10, 20, 40],
    ea = (0, C.D)(() => ({ byProject: {} })),
    ei = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: V,
        sketchDismissedFor: null,
    };
function es(e) {
    return ea.getState().byProject[e] ?? null;
}
function eu(e, t) {
    let n = es(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = ea.getState();
    ea.setState({ byProject: { ...r, [e]: l } });
}
function eo(e) {
    if (null == es(e)) return;
    let { [e]: t, ...n } = ea.getState().byProject;
    (ea.setState({ byProject: n }), G(e));
}
function ec(e, t) {
    null != es(e) &&
        (eu(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? O(e) : z(e));
}
function ed(e, t) {
    eu(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return W(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return W(
                        e,
                        e.present.map((e) => (e.id === t.id ? Y(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : W(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : W(e, []);
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
    return ea.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var em = n(39416);
function eh(e) {
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
            className: em.i5,
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
var eg = n(314116),
    ep = n(858899),
    ex = n(889921),
    ev = n(949757),
    ej = n(248675),
    eb = n(105292),
    ey = n(766367);
let ek = new Set(),
    ew = null;
function eS(e, t) {
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
                ek.add(t),
                () => {
                    ek.delete(t);
                }
            );
        }, [e]));
}
var eN = n(253932);
function eC() {
    return eN.Q_.useSetting() || !1;
}
var eA = n(573083);
let eI = (0, n(945810).mj)({
    name: "2026-10-conjure-mcp-ui",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
});
var eE = n(192308),
    eM = n(128761),
    e_ = n(12177),
    eT = n(967008),
    eP = n(15564);
let eR = i.createContext(null);
var eL = n(398773),
    e$ = n(735769),
    eq = n(513845),
    eD = n(802905),
    eF = n(951178);
let eO = { width: 320, height: 240 };
function ez(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eO;
}
function eG(e) {
    return ez(e?.preview_overlay_widget ?? null);
}
var eU = n(855859),
    eB = n(238490),
    eK = n(991690),
    eH = n(696645);
function eV(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function eW(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, eH.X)(e.surface)
                : eb.intl.formatToPlainString(ej.default["6xVl+N"], {
                      surface: (0, eH.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return eb.intl.string(ej.default.y5GiL1);
        case "overlay":
            return eb.intl.string(ej.default["2940LX"]);
        case "bot":
            return eb.intl.string(ej.default.tjpaGN);
    }
}
var eX = n(939398),
    eY = n(86147),
    eQ = n(729475),
    eZ = n(91242),
    eJ = n(156548),
    e0 = n(869146),
    e1 = n(475815),
    e2 = n(652215),
    e3 = n(165610);
function e7(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, eJ.cR)(t?.id ?? null),
        r = (0, eA.Zv)(n),
        i = (0, m.bG)(
            [e0.A, eZ.A],
            () => null != t && e0.A.getWindowOpen(e2.MLl.ACTIVITY_POPOUT) && eZ.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, e3.x1)(t) || i || r) return null;
    let s = (0, eJ.fl)(t.id);
    if (null == s || !(0, e1.Ub)(s)) return null;
    let u = eb.intl.string(l ? eb.t.Z7MyNB : eb.t.OIDkcp);
    return (0, a.jsx)(S.A.Icon, {
        tooltip: u,
        icon: l ? eY.z : eQ.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, eJ.U8)(t.id),
    });
}
var e4 = n(265872),
    e5 = n(980707),
    e6 = n(477782),
    e8 = n(559106),
    e9 = n(847374),
    te = n(704745);
function tt(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let c = i.useCallback(() => s(!1), []),
        d = i.useCallback(() => s((e) => !e), []),
        f = i.useRef(null);
    if (!o) return null;
    let m = eb.intl.string(ej.default.I2ucou);
    return (0, a.jsx)(e4.Y, {
        targetElementRef: f,
        shouldShow: r,
        onRequestClose: c,
        position: "bottom",
        align: "right",
        animation: e4.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(e5.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(e6.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = eV(e);
                        return (0, a.jsx)(
                            e6.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: eW(e),
                                checked: t === eV(n),
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
            return (0, a.jsx)(e8.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: f,
                    type: "button",
                    className: te.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: d,
                    children: [
                        (0, a.jsx)(u.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eb.intl.string(ej.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(u.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: eW(n),
                        }),
                        (0, a.jsx)(e9.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var tn = n(324641),
    tl = n(627363),
    tr = n(371169),
    ta = n(153207),
    ti = n(260498),
    ts = n(803101),
    tu = n(226178),
    to = n(625180),
    tc = n(672929),
    td = n(111534),
    tf = n(754027),
    tm = n(193072),
    th = n(457827),
    tg = n(722701),
    tp = n(962998),
    tx = n(893067);
function tv(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
function tj(e, t) {
    return null != t
        ? t
        : null == e
          ? eb.intl.string(ej.default["120EFN"])
          : tv(e) && !e.publishing
            ? eb.intl.string(ej.default.kAfbEN)
            : e.label;
}
var tb = n(373540),
    ty = n(189213),
    tk = n(144228);
function tw(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, u] = i.useState(t.selected_destination_id),
        o = eb.intl.string(ej.default.lJrOGW);
    return (0, a.jsx)(ty.a, {
        transitionState: l,
        onClose: r,
        title: o,
        size: "sm",
        actions: [
            { text: eb.intl.string(ej.default.y83r6D), variant: "secondary", onClick: r },
            {
                text: eb.intl.string(ej.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(s), r());
                },
            },
        ],
        children: (0, a.jsx)(tk.z, {
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
let tS = {
    showPublishBlocked: tb.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, eE.openModal)(
                (t) =>
                    (0, a.jsx)(tw, {
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
    showError: (e) => (0, ep.P0)({ text: e, variant: "critical" }),
};
var tN = n(811587);
let tC = "conjure-publish";
function tA(e) {
    let t = (0, eE.getInteractingModalContext)(),
        l = { current: !1 };
    (0, eE.openModalLazy)(
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
                l.current || (0, eE.closeModal)(tC, t);
            },
        },
    );
}
function tI(e, t, n) {
    let l, r;
    return (
        (l = i.useContext(tx.bI)),
        (r = n ?? l),
        i.useCallback(
            (n) => {
                if (null == e || null == t || null == r || t.disabled) return;
                let l = t.status?.publishState;
                t.awaitingApproval || (null != l && (0, tN.lE)(l))
                    ? t.run(n)
                    : tA({ projectId: e, publishOptions: r, entryPoint: n });
            },
            [e, t, r, tA],
        )
    );
}
var tE = n(95264),
    tM = n(616334),
    t_ = n(259730),
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
            closing: m,
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
        } = (0, tG.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        N = i.useRef(null),
        C = (d || j.length > 0) && w && !m,
        A = i.useCallback(() => {
            if (!C) return;
            let e = S();
            o(e.length > 0 ? e : void 0);
        }, [C, S, o]),
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
        q = Math.min(Math.max("point" === g ? n.y : n.y + 32 + 4, L), Math.max(L, l.top + l.height - P - 8));
    return (0, a.jsxs)("div", {
        ref: M,
        className: f()(tU.M0, { [tU.ho]: I && !m, [tU.ET]: m }),
        style: { left: $, top: q },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
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
                              text: eb.intl.string(ej.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: tU.tY,
                                  onClick: () => N.current?.click(),
                                  "aria-label": eb.intl.string(ej.default.lgvqSB),
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
                placeholder: x ?? ("" === r ? eb.intl.string(ej.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? eb.intl.string(ej.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), A());
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
    tY = n(48507),
    tQ = n(193885),
    tZ = n(744898),
    tJ = n(803656),
    t0 = n(241326),
    t1 = n(972213),
    t2 = n(661531);
function t3(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function t7(e, t, n) {
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
let t4 = t7("red", t3(t2.A.unsafe_rawColors.RED_400), () => eb.intl.string(ej.default.tvXfjt)),
    t5 = [
        t4,
        t7("yellow", t3(t2.A.unsafe_rawColors.YELLOW_300), () => eb.intl.string(ej.default.FYuaJ1)),
        t7("green", t3(t2.A.unsafe_rawColors.GREEN_360), () => eb.intl.string(ej.default["Vv+paS"])),
        t7("blue", t3(t2.A.unsafe_rawColors.BLUE_345), () => eb.intl.string(ej.default.k9b1QJ)),
        t7("white", t3(t2.A.unsafe_rawColors.WHITE), () => eb.intl.string(ej.default["1sOXwH"])),
    ];
function t6(e) {
    return t5.find((t) => t.id === e) ?? t4;
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
let nn = el.map((e) => nt(Math.min(16, e + 3))),
    nl = er.map((e) => nt(Math.min(16, e / 2.5))),
    nr = [ej.default.jZtZUr, ej.default.cTQdD0, ej.default.J3ucEg],
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
            label: () => eb.intl.string(ej.default.oIZQbm),
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
            label: () => eb.intl.string(ej.default.ARNVr7),
        },
    };
function ni(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(tF.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: em.z6,
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
        className: em.pr,
        onMouseEnter: () => u(!0),
        onMouseLeave: o,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: em.mz,
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
        g = eb.intl.string(ej.default.hUm825),
        p = eb.intl.string(ej.default.n5IA3a),
        x = eb.intl.string(ej.default.r5dX6t),
        v = eb.intl.string(ej.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: em.t$,
        children: [
            (0, a.jsx)("div", {
                className: em.NT,
                children: (0, a.jsx)(ni, {
                    icon: t9,
                    label: eb.intl.string(ej.default.YtyKcM),
                    pressed: "pick" === u,
                    onClick: () => ec(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: em.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": eb.intl.string(ej.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(ni, {
                        icon: t8,
                        label: eb.intl.string(ej.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => ec(t, "move"),
                    }),
                    (0, a.jsx)(ni, {
                        icon: tY.x,
                        label: eb.intl.string(ej.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => ec(t, "text"),
                    }),
                    (0, a.jsx)(nu, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(ni, {
                                icon: tQ.V,
                                label: g,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (ec(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            nn.map((n, l) =>
                                (0, a.jsx)(
                                    ni,
                                    {
                                        icon: n,
                                        label: eb.intl.string(nr[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            (eu(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), z(t), e());
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
                                    (ec(t, o), e());
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
                                            (ec(t, n), e());
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
                                    (ec(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            nl.map((n, l) =>
                                (0, a.jsx)(
                                    ni,
                                    {
                                        icon: n,
                                        label: eb.intl.string(nr[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            (eu(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), z(t), e());
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
                                                eu(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: em.Gz, role: "separator" }),
                    (0, a.jsx)(ns, {
                        icon: tZ.e,
                        label: eb.intl.string((0, N.isMac)() ? ej.default["j/XmBQ"] : ej.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(ns, {
                        icon: tJ.U,
                        label: eb.intl.string((0, N.isMac)() ? ej.default.C7jhpn : ej.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(ns, {
                        icon: t0.TrashIcon,
                        label: eb.intl.string(ej.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: em.Gz, role: "separator" }),
                    (0, a.jsx)(ns, { icon: t1.XLargeIcon, label: eb.intl.string(ej.default.tuQ5f3), onClick: l }),
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
    np = (0, C.D)(() => ({ byMessageKey: {} }));
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
        u = ef(s),
        { active: o } = H(s),
        c = (0, eE.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => eo(s);
    }, [s]);
    let d = u?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !o && O(s);
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
        { tool: N, history: C } = n,
        A = t6(n.colorId),
        I = "pick" !== N,
        E = "marker" === n.tool ? el[n.markerSize] : "eraser" === n.tool ? er[n.eraserSize] : null,
        M = "move" === N ? (C.present.find((e) => e.id === m) ?? null) : null,
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
        let t = await (0, tn.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, tL.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, tn.fs)(e, n), t]);
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
            s = null == i ? C.present : C.present.map((e) => (e.id === i.id ? Y(e, g.dx, g.dy) : e)),
            u = j.current;
        nd(a, null == u ? s : [...s, u], { width: r.width, height: r.height });
    }, [r, C.present, g]);
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
                color: A.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (Z(n, r) && ed(t, { type: "commit", shape: n }), u(null));
        }, [t, A, r]),
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
                            l = null == M ? null : et(M, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? M
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = ee(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => ee(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (J(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = ee(e.from, n),
                                                                  r = ee(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => J(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = ee(e.from, n),
                                                                  r = ee(e.to, n),
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
                                                              let t = et(e, n);
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
                                      })(C.present, t, r);
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
                        if (!Q(C.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nk++}`,
                                kind: "erase",
                                width: er[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nk++}`,
                                kind: "marker",
                                color: A.value,
                                width: el[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nk++}`,
                                kind: N,
                                color: A.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                R();
            },
            [r, N, A, M, C.present, n.markerSize, n.eraserSize, L, $, R],
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
                ((b.current = null), p(nb), ed(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && Z(n, r) ? ed(t, { type: "commit", shape: n }) : R());
        }, [t, r, g, R]),
        z = i.useCallback(() => eo(t), [t]),
        G = i.useCallback(() => ed(t, { type: "undo" }), [t]),
        U = i.useCallback(() => ed(t, { type: "redo" }), [t]),
        B = i.useCallback(() => ed(t, { type: "clear" }), [t]),
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
                    (e.preventDefault(), ed(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let u = ny[s];
                null != u && (e.preventDefault(), ec(t, u));
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
        V = null == M ? null : et(null == b.current ? M : Y(M, g.dx, g.dy), r);
    return (0, tL.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: em.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: em.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: em.Ji,
                            "data-tool": N,
                            "data-interactive": I && !o ? "" : void 0,
                            "aria-label": eb.intl.string(ej.default["qlgN+X"]),
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
                                  className: em.V$,
                                  "data-tool": N,
                                  "data-color": A.id,
                                  style: { width: E, height: E },
                                  "aria-hidden": !0,
                              }),
                        null == V
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: em.r1,
                                  style: { left: V.x, top: V.y, width: V.width, height: V.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: em.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: em.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: em.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: em.p$, "data-corner": "se" }),
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
                          placeholder: eb.intl.string(ej.default["8gX1lw"]),
                          label: eb.intl.string(ej.default["5W7SSZ"]),
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
                    className: em.ej,
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
    nC = n(689175),
    nA = n(683071),
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
        className: f()(nO.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: f()(nO.wx, null != n && nO.o5, i),
                children: [
                    (0, a.jsx)(u.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
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
    return (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
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
        m = i.useId(),
        [h, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? e9.a : nF._,
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
                                "aria-expanded": h,
                                "aria-controls": m,
                                "aria-label": h ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: h ? void 0 : nG.RG,
        "data-superseded": l ? "true" : void 0,
        children: [o, (0, a.jsx)("div", { id: m, className: f()(nG.rf, u), hidden: !h, children: c })],
    });
}
var nK = n(883646);
let nH = [];
function nV(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: f()(nK.xL, {
            [nK.Vb]: "in_progress" === t,
            [nK.cT]: "completed" === t,
            [nK.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return eb.intl.string(ej.default.KvBdun);
                case "in_progress":
                    return eb.intl.string(ej.default["m5G9+S"]);
                case "unfinished":
                    return eb.intl.string(ej.default.lRpwhD);
                default:
                    return eb.intl.string(ej.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(o.y, {
                type: o.y.Type.SPINNING_CIRCLE_SIMPLE,
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
        [o, c] = i.useState(l),
        [d, f] = i.useState(s),
        [m, h] = i.useState(!1);
    d !== s && (f(s), c([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && h(!1));
    let g = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => c(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [g, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => h(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let p = o.slice(0, 3),
        x = o.length - p.length;
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
                ? (0, a.jsx)(u.E, {
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
        o = (function (e) {
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
                        className: f()(nK.AS, { [nK.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nV, { status: n }),
                            (0, a.jsx)(u.E, {
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
                          (0, a.jsx)(u.E, {
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
function nY(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = eb.intl.formatToPlainString(ej.default["P/I+JW"], { completed: u, total: o }),
        d = eb.intl.formatToPlainString(ej.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(nB, {
        title: eb.intl.string(ej.default.RtzECX),
        meta: (0, a.jsx)(nU, { children: c }),
        superseded: s,
        showLabel: eb.intl.string(ej.default.RKyN9q),
        hideLabel: eb.intl.string(ej.default.xydHoj),
        className: nK.Nr,
        bodyClassName: nK.rf,
        beforeBody: r && !s ? (0, a.jsx)(nD.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nX, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nQ = n(308665),
    nZ = n(59678),
    nJ = n(903847);
function n0(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: o } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [h, g] = i.useState(c),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (c || !h) return;
            let e = setTimeout(() => g(!1), 150);
            return () => clearTimeout(e);
        }, [c, h]),
        i.useEffect(() => {
            if (!h || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [h, c]));
    let [k, w] = i.useState(!1),
        [S, N] = i.useState(!1),
        [C, A] = i.useState(v);
    (C !== v && (A(v), v ? w(!0) : N(!1)),
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
    return h
        ? (0, a.jsxs)("div", {
              className: nJ.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: f()(nJ.vK, { [nJ.ho]: p && c, [nJ.ET]: !c }),
                      children: [
                          null == o
                              ? (0, a.jsx)("ol", {
                                    className: f()(nJ.Rk, nZ.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(n$.A, {
                                        glyph: (0, a.jsx)(nQ.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(nR.D, {
                                    className: nJ.pZ,
                                    onClick: o,
                                    "aria-label": eb.intl.string(ej.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: f()(nJ.Rk, nZ.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(n$.A, {
                                            glyph: (0, a.jsx)(nQ.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(tF.m, {
                                    text: eb.intl.string(ej.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(nR.D, {
                                        className: nJ.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": eb.intl.string(ej.default.RtzECX),
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
                            className: f()(nJ.vB, { [nJ.pg]: v && S, [nJ.ui]: !v }),
                            children: (0, a.jsx)(nY, {
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
function n7(e) {
    let t = (0, n3.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var n4 = n(736553),
    n5 = n(642785);
async function n6(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, n5.dv)(e),
        i = new n4.u();
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
        o = (function (e, t, n, l, r) {
            let a = n7(e),
                [s, u] = i.useState(null),
                [o, c] = i.useState([]),
                [d, f] = i.useState(t.prompt),
                [m, h] = i.useState(!1),
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
                N = d.trim(),
                C = n && !m && (w.length > 0 ? "" !== N : o.length > 0),
                A = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
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
                                                          eb.intl.formatToPlainString(ej.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = eb.intl.formatToPlainString(ej.default.jZlNst, { targets: l });
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
                    if (0 === w.length) return void A(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = ti.Ay.getProject(e)?.name ?? e),
                        (n = eb.intl.formatToPlainString(ej.default.ScoZLp, { name: t, projectId: e })),
                        `${N}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, n1.m)() }), x.current.set(e.projectId, t)),
                                n6(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: N }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && A(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [C, A, o, e, w, N]),
                E = i.useCallback(() => {
                    ((v.current = !0), o.length > 0 && !m && A(o), l());
                }, [A, o, l, m]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: S,
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
        d = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: f()(le.nd, le.jx),
        "aria-labelledby": d,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: le.wx,
                children: [
                    (0, a.jsx)(u.E, {
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
                        onClick: o.dismiss,
                        "aria-label": eb.intl.string(ej.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: lt.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eb.intl.string(ej.default.TbbzW5),
                          })
                        : (0, a.jsx)(n8.Z, {
                              label: eb.intl.string(ej.default["29gr8j"]),
                              placeholder: eb.intl.string(ej.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(n9.f, {
                        label: eb.intl.string(ej.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? eb.intl.string(ej.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: le.qr,
                children: (0, a.jsx)("div", {
                    className: le.zt,
                    children: (0, a.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: eb.intl.string(ej.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var ll = n(658675),
    lr = n(22231),
    la = n(900797),
    li = n(123292),
    ls = n(691885),
    lu = n(360047);
function lo(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = i.useMemo(() => lu.Hi.map((e) => ({ id: e, value: e, label: (0, lu.hU)(e) })), []);
    return (0, a.jsx)(ls.l, {
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
var lc = n(344587),
    ld = n(47167),
    lf = n(734057),
    lm = n(994500),
    lh = n(287809);
function lg(e) {
    return 0 === e.options.length && null == e.input;
}
let lp = {
    [e2.rbe.GUILD_TEXT]: "text",
    [e2.rbe.GUILD_VOICE]: "voice",
    [e2.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [e2.rbe.GUILD_STAGE_VOICE]: "stage",
    [e2.rbe.GUILD_FORUM]: "forum",
    [e2.rbe.GUILD_MEDIA]: "media",
};
function lx(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = lf.A.getChannel(t)?.type) ? void 0 : lp[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = lh.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let lv = { channel: "#", role: "@", user: "@", project: "", server: "" },
    lj = {
        channel: [ej.default["9+dfPT"], ej.default.pGSJqE],
        role: [ej.default["2VkCoD"], ej.default.c8YlX8],
        user: [ej.default.GZIAxl, ej.default["4bptbQ"]],
        project: [ej.default.twlOb6, ej.default.twlOb6],
        server: [ej.default.ZWXDeI, ej.default.ZWXDeI],
    };
function lb(e, t) {
    return eb.intl.string(lj[e][+!!t]);
}
var ly = n(155078);
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
    lC = n(300344),
    lA = n(614733),
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
let lD = lM.kg(e2.xBc.VIEW_CHANNEL, e2.xBc.SEND_MESSAGES);
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
        return lx(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
        s = (0, lC.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: o } = e,
            c =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, m.bG)(
                    [ti.Ay],
                    () => {
                        let e = t ? ti.Ay.getProject(l) : null;
                        return null == e ? null : (0, l$.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || lP.Ay.isMember(r, n) || l_.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, m.bG)(
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
            f = i.useRef(!1);
        i.useEffect(() => {
            if (!f.current && !u && null != r) {
                if (null == d.current) {
                    if (s.length > 0) f.current = !0;
                    else if (null != c) {
                        var e;
                        ((d.current = c.id),
                            o(((e = []), lx("channel", [c.id], () => (0, ld.m1)(c, lh.default, lm.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== d.current ? (f.current = !0) : null == c && ((f.current = !0), o([], r));
            }
        }, [c, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lO, { ...r, guildId: n, options: s, placeholder: lb("channel", !0 === r.question.multi_select) });
}
function lG(e) {
    let { guildId: t, ...n } = e,
        l = (0, lI.A)(t);
    return (0, a.jsx)(lO, { ...n, guildId: t, options: l, placeholder: lb("role", !0 === n.question.multi_select) });
}
function lU(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lA.A)(t);
    return (0, a.jsx)(lO, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lb("user", !0 === n.question.multi_select),
    });
}
function lB(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = n7(t),
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
    return 0 === s.length ? n : (0, a.jsx)(lO, { ...l, options: s, placeholder: lb("project", !1) });
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
              children: (0, a.jsx)(lO, { ...n, options: r, placeholder: lb("server", !1) }),
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
    lY = n(750943),
    lQ = n(173936),
    lZ = n(95477),
    lJ = n(256905),
    l0 = n(490707),
    l1 = n(907702);
function l2(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: c } = (0, l0._)(t, n),
        [d, m] = i.useState(null),
        h = null != s && d === s;
    return o
        ? (0, a.jsxs)("span", {
              className: f()(l1.Gt, l1.b6),
              children: [
                  (0, a.jsx)(lW.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(u.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eb.intl.string(ej.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: f()(l1.Gt, { [l1.iP]: !h }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l1.Sl,
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
function l3(e) {
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
            onView: h,
            onArrow: g,
            onMeasured: p,
            onRemove: x,
        } = e,
        v = eb.intl.formatToPlainString(ej.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: f()(l1.Vs, { [l1.Q9]: s, [l1.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(nR.D, {
                className: f()(l1.Up, { [l1.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: o ? (null != r.image ? () => h(r) : void 0) : () => m(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), g(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eb.intl.formatToPlainString(ej.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
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
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: l1.Gt }),
                            (0, a.jsx)("span", {
                                className: l1.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(ll.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(tk.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.E, {
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
                          text: eb.intl.string(ej.default.HQEXJM),
                          children: (0, a.jsx)(tX.K, {
                              icon: t0.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: x,
                              disabled: o,
                              "aria-label": eb.intl.string(ej.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: l1.B4,
                        children: (0, a.jsx)(tF.m, {
                            text: eb.intl.string(ej.default["4/eeDD"]),
                            children: (0, a.jsx)(tX.K, {
                                icon: lX._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => h(r),
                                "aria-label": v,
                                tabIndex: c && d ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function l7(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: o } = e,
        c = !0 === n.multi_select,
        { options: d } = n,
        m = d.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        g = i.useRef(new Map()),
        [p, x] = i.useState(null),
        v = null != p && d.some((e) => e.id === p) ? p : (d.find((e) => l.includes(e.id)) ?? d[0])?.id,
        j = i.useMemo(() => {
            var e;
            return null == o.image
                ? null
                : ((e = o.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: eb.intl.string(ej.default.SUdqCQ),
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
            [d, j, t],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (d.findIndex((t) => t.id === e.id) + t + d.length) % d.length,
                    l = d[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), c || r || u(l));
            },
            [r, c, u, d],
        );
    return (0, a.jsxs)("div", {
        className: l1.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: f()(l1.fF, "gallery" === m ? l1.nV : l1.nM, { [l1.m3]: c }),
                role: c ? "group" : "radiogroup",
                "aria-labelledby": `${n.id}-label`,
                "data-layout": m,
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
                                onMeasured: (t) => g.current.set(e.id, t),
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
                                  onMeasured: (e) => g.current.set(j.id, e),
                                  onRemove: o.onRemove,
                              },
                              j.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(l4, {
                projectId: t,
                own: o,
                disabled: r,
                reachable: s,
                uploadText: eb.intl.string(/\bicons?\b/i.test(n.question) ? ej.default.qU4WN6 : ej.default.cbMDDB),
            }),
        ],
    });
}
function l4(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [c, d] = i.useState(!1),
        [f, m] = i.useState(""),
        g = r ? 0 : -1,
        p = n.busy;
    function x() {
        "" !== f.trim() &&
            null == p &&
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
                    (0, a.jsx)(h.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lY.X,
                        text: s,
                        loading: "upload" === p,
                        disabled: l || "link" === p,
                        onClick: () => o.current?.click(),
                        tabIndex: g,
                        "data-conjure-own-image-upload": !0,
                    }),
                    c
                        ? null
                        : (0, a.jsx)(h.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: lQ.LinkIcon,
                              text: eb.intl.string(ej.default["1TgOO+"]),
                              disabled: l || "upload" === p,
                              onClick: () => d(!0),
                              tabIndex: g,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
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
                              children: (0, a.jsx)(lZ.k, {
                                  label: eb.intl.string(ej.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eb.intl.string(ej.default.AVhvn8),
                                  value: f,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), x())
                                          : "Escape" === e.key && (e.stopPropagation(), d(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == p && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: l1.gd,
                              children: [
                                  (0, a.jsx)(h.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eb.intl.string(ej.default.FbRbeM),
                                      loading: "link" === p,
                                      disabled: l || "" === f.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(li.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eb.intl.string(ej.default.eXZL4X),
                                      onClick: () => d(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(u.E, {
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
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        m = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(nR.D, {
        className: f()(lF.uK, { [lF.ue]: l, [lF.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": eb.intl.formatToPlainString(d ? ej.default["2p6UFz"] : ej.default.AQbxhf, { answer: t.label }),
        "aria-describedby": m ? c : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: lF.dy, children: (0, a.jsx)(ll.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: lF.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lF.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lF.l8,
                        children: (0, a.jsx)(u.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lF.ed,
                            children: t.label,
                        }),
                    }),
                    m
                        ? (0, a.jsx)(u.E, {
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
                ? (0, a.jsx)(u.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: lF.rM,
                      children: eb.intl.string(ej.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l6(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return lk(n)
        ? (0, a.jsx)(l7, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
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
            ownImage: o,
            ownSelected: c,
        } = e,
        d = "" === l.trim() ? null : l,
        m = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: f()(lF.Ge, lF.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            m
                ? (0, a.jsx)(u.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lF.aK,
                      children: eb.intl.string(ej.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(l6, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lS(o, c),
            }),
            lk(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: lF.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lF.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lr.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: f()(lF.Pu, lF.es), children: d }),
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
            submitText: o,
            onBack: c,
            backText: d,
            hideSubmit: m = !1,
            headingLines: g = 5,
        } = e,
        [p, x] = i.useState({}),
        [v, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [S, N] = i.useState({}),
        [C, A] = i.useState({}),
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
        [X, Y] = i.useState({ id: W.id, expanded: !1 }),
        Q = X.id === W.id && X.expanded,
        [Z, J] = i.useState(null),
        ee = v[W.id] ?? "",
        et = !0 === W.multi_select,
        en = lk(W),
        el = et ? (b[W.id] ?? l8) : ((t = p[W.id]), t?.kind === "option" ? [t.optionId] : lw),
        er = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = eb.intl.string(ej.default.wTsP5l),
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
                                                error: { source: "upload", text: eb.intl.string(ej.default["kUw/b1"]) },
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
                                                        : eb.intl.string(ej.default.l79PMc),
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
        })(n, p, x),
        ea = er.imageFor(W.id),
        ei = er.selectedFor(W),
        { text: es, phase: eu } = (0, lc.Q)(W.question),
        eo = es === W.question,
        ec = eo && Z?.id === W.id && Z.truncated;
    i.useLayoutEffect(() => {
        if (null == z || Q || !eo) return;
        function e() {
            if (null == z) return;
            let e = z.scrollHeight > z.clientHeight + 1;
            J((t) => (t?.id === W.id && t.truncated === e ? t : { id: W.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(z), () => t.disconnect());
    }, [eo, z, W.id, Q]);
    let ed = eb.intl.string(Q ? eb.t.iTcuma : eb.t.dcl9MQ),
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
                                              return (0, lu.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, C, r);
            },
            [l, C, r, n],
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
                let t = { ...p, [W.id]: e };
                x(t);
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
            [p, l, K, V, W.id, ef, em],
        ),
        ex = i.useCallback(() => {
            K || 0 === V || em(V - 1, "back");
        }, [K, V, em]),
        ev = 0 !== V || K ? void 0 : c,
        ey = (V > 0 && !K) || null != ev,
        ek = i.useCallback(
            (e) => {
                j((e) => ({ ...e, [W.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                en ? K || x((e) => ({ ...e, [W.id]: t })) : ep(t);
            },
            [K, en, W.id, ep],
        ),
        { multiPartFor: ew } = er,
        eS = i.useMemo(() => {
            var e;
            let t, n;
            return et
                ? ((e = ew(W)),
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
        }, [ee, et, ew, W, el]),
        eN = k[W.id] ?? l9,
        eC = i.useMemo(() => {
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
                          ...eN.map((t) => (t.name.startsWith(lv[e]) ? t.name : `${lv[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ee, S, eN, W.id, W.input]),
        eA = i.useCallback(
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
                })(eC, eS, ee),
            [ee, eS, eC],
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
        eD = e_ ?? (null == eC && null == eS ? (p[W.id] ?? null) : null),
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
                        ("ArrowLeft" === e.key && ey
                            ? (e.preventDefault(), (ev ?? ex)())
                            : "ArrowRight" === e.key && eF && (e.preventDefault(), ez())));
            },
            [ev, ey, eF, ex, ez],
        ),
        eU = en
            ? null
            : (0, a.jsxs)("div", {
                  className: lF.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: lF.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lr.PencilIcon, {
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
                          placeholder: eb.intl.string(lg(W) ? ej.default.yLN1x6 : ej.default["tOC+tn"]),
                          "aria-label": eb.intl.formatToPlainString(ej.default["4JeYPB"], { question: W.question }),
                          disabled: K,
                          rows: 1,
                          className: lF.Pu,
                          "data-conjure-clarification-other": W.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: f()(lF.$O, { [lF.fI]: eP && !eL, [lF.Oh]: eL }),
        role: "dialog",
        "aria-label": W.question,
        "data-conjure-clarification": l.id,
        "data-state": K ? "inert" : "open",
        "data-question-expanded": Q ? "true" : void 0,
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
                            (0, a.jsx)(u.E, {
                                ref: G,
                                tag: "span",
                                id: `${W.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Q ? void 0 : g,
                                className: f()(le.TK, lF.R_, { [lF.TB]: "exit" === eu, [lF.JU]: "enter" === eu }),
                                children: es,
                            }),
                            ec || Q
                                ? (0, a.jsx)("div", {
                                      className: le.Q7,
                                      children: (0, a.jsx)(tF.m, {
                                          text: ed,
                                          children: (0, a.jsx)(tX.K, {
                                              icon: Q ? la.t : e9.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => Y({ id: W.id, expanded: !Q }),
                                              "aria-label": ed,
                                              "aria-controls": `${W.id}-label`,
                                              "aria-expanded": Q,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(nR.D, {
                                      className: f()(le.gb, le.Q7),
                                      onClick: eq,
                                      "aria-label": eb.intl.string(ej.default.qVXlk0),
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
                                            ? (0, a.jsx)(u.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lF.aK,
                                                  children: eb.intl.string(ej.default.tE8qbz),
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
                                                    : ek(e),
                                            own: eM,
                                        }),
                                        null != W.input
                                            ? (0, a.jsx)(lV, {
                                                  projectId: n,
                                                  question: W,
                                                  value: eN,
                                                  disabled: K,
                                                  onChange: eA,
                                                  onFocus: eI,
                                                  onBlur: eE,
                                                  fallback: !1 === W.allow_custom ? eU : null,
                                              })
                                            : null,
                                        !0 === W.link && eN.length > 0 && null == C[W.id]
                                            ? (0, a.jsx)("div", {
                                                  className: lF.X_,
                                                  children: (0, a.jsx)(li.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: eb.intl.string(ej.default.eCzCxC),
                                                      disabled: K,
                                                      onClick: () => A((e) => ({ ...e, [W.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === W.link && eN.length > 0 && null != C[W.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: lF.$y,
                                                  onFocus: eI,
                                                  onBlur: eE,
                                                  children: [
                                                      (0, a.jsx)(u.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: eb.intl.string(ej.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(lo, {
                                                          label: eb.intl.string(ej.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: C[W.id] ?? "auto",
                                                          disabled: K,
                                                          onChange: (e) => A((t) => ({ ...t, [W.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != W.note
                                            ? (0, a.jsx)(u.E, {
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
            H > 1 || et || en || null != W.input || null != c || lg(W)
                ? (0, a.jsxs)("div", {
                      className: le.qr,
                      children: [
                          (0, a.jsx)(u.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  H > 1
                                      ? eb.intl.formatToPlainString(ej.default.yzYUjq, { index: V + 1, total: H })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: le.zt,
                              children: [
                                  ey
                                      ? (0, a.jsx)(li.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: d ?? eb.intl.string(ej.default.Pk5lfA),
                                            onClick: ev ?? ex,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  m
                                      ? null
                                      : (0, a.jsx)(h.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eO
                                                ? (o ?? eb.intl.string(eb.t.geKm7t))
                                                : eb.intl.string(ej.default.w1nRmT),
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
    return (0, m.bG)([ti.Ay], () => ti.Ay.getProject(e)?.install_scope_setup != null, [e]);
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
        [s, o] = i.useState(r.default_entities ?? rm),
        { onPickServer: c, onBack: d } = n,
        m = s[0]?.id;
    return (0, a.jsxs)("section", {
        className: f()(le.nd, le.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, a.jsxs)("div", {
                className: rf.wx,
                children: [
                    (0, a.jsx)(u.E, {
                        tag: "span",
                        id: l,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: eb.intl.string(ej.default.ickKBI),
                    }),
                    (0, a.jsx)(u.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: eb.intl.string(ej.default.OyM4SV),
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
                        onChange: o,
                        onFocus: rh,
                        onBlur: rh,
                    }),
                    null != r.note
                        ? (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: rf.qr,
                children: [
                    (0, a.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: eb.intl.string(ej.default.PTIP7V),
                        disabled: null == m || null == c,
                        onClick: () => {
                            null != m && c?.(m);
                        },
                    }),
                    null != d
                        ? (0, a.jsx)(li.Q, {
                              variant: "secondary",
                              textVariant: "text-sm/medium",
                              text: eb.intl.string(eb.t["ETE/oC"]),
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
            let t = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(e), [e]),
                n = (0, n3.z9)("ConjureScopeSetupCard"),
                [l, r] = i.useState(null),
                [a, s] = i.useState(!1),
                [u, o] = i.useState(null),
                c = t?.install_scope_setup,
                d = "server" === l || (null == l && "choose_server" === c),
                f = t?.guild_id,
                h = i.useMemo(() => {
                    var t;
                    return d
                        ? ((t = f ?? (0, rs.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: eb.intl.string(n.length > 0 ? ej.default.ZWXDeI : ej.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options:
                                          n.length > 0 ? [] : [{ id: rc, label: eb.intl.string(ej.default.qLYOpH) }],
                                      ...(0, rs.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: ro,
                                      question: eb.intl.string(ej.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: rc,
                                              label: eb.intl.string(ej.default.qLYOpH),
                                              detail: eb.intl.string(ej.default.QSKvUE),
                                          },
                                          {
                                              id: rd,
                                              label: eb.intl.string(ej.default.QV5C7b),
                                              detail: eb.intl.string(ej.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [d, n, f, e]);
            if (null == c) return null;
            if (null == t || !(0, ti.PV)(t))
                return { clarification: (0, rs.YI)(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), o(null));
                try {
                    await (0, rs.JN)(e, t, n);
                } catch (e) {
                    (s(!1), o(null != n && 403 === e.status ? "server" : "failed"));
                }
            }
            return {
                clarification: h,
                readOnly: !1,
                onSubmit: a
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0];
                          null != n && (n.option_ids.includes(rd) ? r("server") : g("user", null));
                      },
                submitText: eb.intl.string(eb.t["cY+Oob"]),
                onBack: d && !a ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: d && n.length > 0,
                onPickServer: a ? void 0 : (e) => g("guild", e),
                failure: null == u ? null : eb.intl.string("server" === u ? ej.default["XXKd+7"] : ej.default.jNVZ3e),
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
                        ? (0, a.jsx)(u.E, {
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
                u = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(t), [t]),
                o = (0, n3.z9)("ConjureScopeSwitchCard"),
                [c, d] = i.useState(!1),
                [f, h] = i.useState(null),
                g = u?.guild_id,
                p = i.useMemo(() => {
                    let [e] = n.questions,
                        t = eb.intl.formatToPlainString("guild" === a ? ej.default["jh/iy+"] : ej.default.d7jxeT, {
                            feature: s,
                        });
                    return {
                        id: n.id,
                        questions: [
                            "guild" === a
                                ? { ...e, question: t, allow_custom: !1, ...(0, rs.XU)(o, g) }
                                : {
                                      ...e,
                                      question: t,
                                      allow_custom: !1,
                                      options: [{ id: `${e.id}:0`, label: eb.intl.string(ej.default.TVRkVh) }],
                                  },
                        ],
                    };
                }, [n, s, o, g, a]);
            if (null == u || !(0, ti.PV)(u))
                return { clarification: (0, rs.YI)(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (d(!0), h(null));
                try {
                    await (0, rs.yN)(t, n.id, a, e);
                } catch (e) {
                    (d(!1), h(409 === e.status ? "locked" : "failed"));
                }
            }
            return {
                clarification: p,
                readOnly: !1,
                onSubmit: c
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0]?.entities?.[0];
                          "user" === a ? x(null) : null != n && x(n.id);
                      },
                submitText: eb.intl.string("guild" === a ? ej.default.Ua7yKM : ej.default.TVRkVh),
                onBack: c
                    ? void 0
                    : function () {
                          (h(null), (0, rs.RW)(t) ? r() : h("failed"));
                      },
                backText: eb.intl.string("guild" === a ? ej.default["4WnIqd"] : ej.default["am+p7p"]),
                hideSubmit: "user" === a,
                failure: null == f ? null : eb.intl.string("locked" === f ? ej.default.irUT0N : ej.default.jNVZ3e),
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
                      ? (0, a.jsx)(u.E, {
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
function rC() {
    return i.useSyncExternalStore(rN, () => rw);
}
function rA(e) {
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
            done: o,
            superseded: c,
            summary: d,
            markSaved: g,
        } = (function (e, t, n) {
            let l = rC(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!rw.has(n)) for (let e of ((rw = new Set([...rw, n])), rS)) e();
                    } else a(!0);
                }, [n]),
                o = (0, m.bG)([rv.A], () => rI(t, rv.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, m.bG)([ri.A], () => null != n && rA(ri.A.getMessages(e)).has(n), [e, n]),
                summary: (0, m.yK)(
                    [rv.A, lf.A],
                    () => {
                        var n;
                        let l = rv.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => lf.A.getChannel(e)?.name ?? null),
                              rk(t, l).flatMap((e) => {
                                  let t = l.schema.find((t) => t.key === e);
                                  if (null == t) return [];
                                  let r = "secret" === t.type || l.values[e];
                                  return [
                                      {
                                          key: e,
                                          text: eb.intl.formatToPlainString(ej.default["Z+FC3j"], {
                                              label: t.label,
                                              value: (function (e, t, n) {
                                                  let l = Array.isArray(t) ? t.map(String) : [String(t)];
                                                  switch (e.type) {
                                                      case "secret":
                                                          return eb.intl.string(ej.default.CJq1rY);
                                                      case "checkbox":
                                                          return eb.intl.string(
                                                              !0 === t ? ej.default.nXtpn3 : ej.default["0vfaMW"],
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
                                                                      : eb.intl.string(ej.default.Fw9G9A);
                                                              })
                                                              .join(", ");
                                                      case "game":
                                                          return 0 === l.length
                                                              ? eb.intl.string(ej.default.nEv677)
                                                              : eb.intl.string(ej.default.Fw9G9A);
                                                      case "role":
                                                      case "user":
                                                          return eb.intl.string(ej.default.Fw9G9A);
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
        p = null == r && o;
    if (c && !p)
        return (0, a.jsx)("article", {
            className: rP.Mk,
            children: (0, a.jsx)(u.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: eb.intl.string(ej.default["+uXDk+"]),
            }),
        });
    if (p)
        return (0, a.jsxs)("article", {
            className: rP.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rP.Ol,
                    children: [
                        (0, a.jsx)(rE.y, { size: "xs", color: t2.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(u.E, {
                            variant: "text-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: eb.intl.string(ej.default.AxBLLy),
                        }),
                    ],
                }),
                d.length > 0
                    ? (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: d.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let x = n.keys?.length === 1 && n.keys[0] === rM.B,
        v = null != n.note && "" !== n.note ? n.note : x ? null : eb.intl.string(ej.default.XuOf5s);
    return (0, a.jsx)(rT.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: s,
        onSaved: g,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: l, submit: i } = e;
            async function s(e) {
                (e.preventDefault(), await i());
            }
            let o = (0, a.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: eb.intl.string(ej.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rP.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eb.intl.string(ej.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, a.jsx)(r_.A, { text: v, variant: "text-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rP.p0, children: o }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: f()(le.nd, le.jx),
                      "aria-label": eb.intl.string(ej.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: le.wx,
                              children: [
                                  (0, a.jsx)(u.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: le.TK,
                                      children: eb.intl.string(ej.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(nR.D, {
                                      className: f()(le.gb, le.Q7),
                                      onClick: r,
                                      "aria-label": eb.intl.string(ej.default["iq+Pte"]),
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
                                  (0, a.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: rP.xE,
                                      children: eb.intl.string(ej.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: le.zt,
                                      children: [
                                          (0, a.jsx)(h.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: eb.intl.string(ej.default["9J3OG8"]),
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
var rL = n(975571),
    r$ = n(427123);
let rq = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rD = n(874421),
    rF = n(932111),
    rO = n(404373),
    rz = n(89222);
function rG(e) {
    return "" !== rz.A.getDraft(e).trim();
}
var rU = n(29080);
function rB(e) {
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
var rK = n(62617),
    rH = n(780171);
let rV = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rW = {
        snail: () => ej.default.ABeVsS,
        goat: () => ej.default.dhXay8,
        frog: () => ej.default.SHeweG,
        bunny: () => ej.default.FytFE1,
        cat: () => ej.default["5c+sHs"],
        caterpillar: () => ej.default["/FYcne"],
        butterfly: () => ej.default["Ib/AxK"],
        dog: () => ej.default.zDjBR1,
        spider: () => ej.default["6sxyrN"],
        bee: () => ej.default.cVtefg,
        bot: () => ej.default.MjCw0v,
    },
    rX = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rK.Z)(),
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
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rK.Z)(),
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
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rK.Z)(),
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
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rK.Z)(),
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
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rK.Z)(),
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
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rK.Z)(),
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
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rK.Z)(),
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
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rK.Z)(),
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
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rK.Z)(),
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
                        () => (0, rK.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rK.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rH.u, tint: "var(--illo-purple-40)" },
    };
function rY(e) {
    return { ...rX[e], name: eb.intl.string(rW[e]()) };
}
function rQ(e) {
    return rV.includes(e) ? rY(e) : void 0;
}
function rZ(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rV.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rV[(t + n) % rV.length]);
            }),
            l
        );
    })(e))
        t.set(n, rY(l));
    return t;
}
var rJ = n(615839);
function r0(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eb.intl.string(ej.default.KcFvbo);
}
var r1 = n(60160),
    r2 = n(16634);
function r3(e) {
    let t = (0, nM.SY)(e.steps);
    return null != t ? (0, nM.WQ)(t) : r0(e.task);
}
function r7(e) {
    let t = rZ(e.map((e) => e.taskId));
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
                      task: r0(e.task),
                      todoId: e.task.todoId,
                      line: r3(e),
                  },
              ];
    });
}
function r4(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, nM.SY)(n.steps),
        d = o
            ? r3(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(r0(e));
                  switch (e.status) {
                      case "failed":
                          return eb.intl.formatToPlainString(ej.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eb.intl.formatToPlainString(ej.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return eb.intl.formatToPlainString(ej.default["++9woZ"], {
                                  task: t,
                                  duration: (0, rJ.MB)(e.durationMs),
                              });
                          return eb.intl.formatToPlainString(ej.default.nmI9Uh, { task: t });
                      default:
                          return eb.intl.formatToPlainString(ej.default.nmI9Uh, { task: t });
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
                                    className: nZ.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            r2.A,
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
                                      className: nZ.iq,
                                      children: (0, a.jsx)(r1.A, { text: e, variant: "text-sm/normal" }),
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
            body: r0(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nZ.nC,
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
var r5 = n(998445),
    r6 = n(643210),
    r8 = n(648127),
    r9 = n(372795),
    ae = n(163897);
let at = "conjure-browser-viewer";
function an(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, m.yK)(
            [r6.A],
            () =>
                n.flatMap((e) => {
                    let n = r6.A.getTab(t, e);
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
        className: ae.kR,
        "aria-label": eb.intl.string(ej.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(al, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function al(e) {
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
        c = (0, eE.useHasModalOpen)(at),
        [d, m] = i.useState(!1),
        h = i.useCallback((e, t) => m(t), []),
        { ended: g } = l,
        p = (0, r8.i)(l.session);
    return (0, a.jsxs)(nR.D, {
        innerRef: s,
        className: f()(ae.Nr, g && ae.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, eE.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: at },
                )
            );
        },
        "aria-label": eb.intl.formatToPlainString(ej.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: ae.Gt,
                children: [
                    (0, a.jsx)(r9.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || c || g,
                        className: ae.Ji,
                        "aria-label": eb.intl.formatToPlainString(ej.default.rnwqXb, { name: p }),
                        onStateChange: h,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: ae.qf,
                              children: (0, a.jsx)(r5.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    g
                        ? (0, a.jsx)("div", {
                              className: ae.HS,
                              children: (0, a.jsx)(u.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: eb.intl.string(ej.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: ae.pG,
                children: [
                    (0, a.jsx)("span", { className: f()(ae.W9, g && ae.oM) }),
                    (0, a.jsx)(u.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: p,
                    }),
                ],
            }),
        ],
    });
}
var ar = n(268409);
let aa = new WeakMap(),
    ai = new WeakMap();
function as(e) {
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
        u = (0, m.yK)(
            [ri.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = aa.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = ai.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), ai.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (aa.set(e, n), n);
                })(ri.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: ar.h, children: (0, a.jsx)(an, { projectId: t, sessionIds: u }) });
}
var au = n(469393);
function ao(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, eM.lG)(t.authored_at);
    return (0, a.jsx)(nz, {
        title: eb.intl.string(ej.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: au.r,
            children: [
                (0, a.jsxs)("div", {
                    className: au.z,
                    children: [
                        (0, a.jsx)(u.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(h.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eb.intl.string(ej.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var ac = n(714917),
    ad = n(463660),
    af = n(970211);
function am(e) {
    let { projectId: t } = e,
        {
            src: n,
            blurred: l,
            handleError: r,
        } = (function (e, t) {
            let n = (0, m.bG)([ac.A], () => (null != e ? ac.A.getBackground(e) : null)),
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
                                r = await (0, ad.Mg)(e, l);
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
                f = null == l || (null != d && d === s) ? t : d,
                h = i.useCallback(() => {
                    f === d && u(d);
                }, [f, d]);
            return { src: null == e || null != n || o ? f : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp");
    return null == n
        ? null
        : (0, a.jsx)("img", { className: f()(af.L, { [af.T]: l }), src: n, alt: "", "aria-hidden": !0, onError: r });
}
var ah = n(155718);
function ag(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let ap = ["command", "user_command", "message_command", "message"],
    ax = new Set([ah.kc.CHAT, ah.kc.USER, ah.kc.MESSAGE]);
function av(e) {
    return e.type ?? ah.kc.CHAT;
}
function aj(e) {
    return ax.has(av(e));
}
function ab(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function ay(e, t) {
    let n = ap.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !ab(e)), ...n.filter(ab)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || ab(r) || l.push(r);
    }
    return ap.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function ak(e, t, n) {
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
    let s = e.commands.filter(aj).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (av(e)) {
                    case ah.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case ah.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(ab),
        o = a.length > 0 ? ay([...a, ...u], !0) : ay("both" === t ? [...s, i] : s, !1);
    return o.length > 0 ? o : [r];
}
var aw = n(377941),
    aS = n.n(aw);
function aN(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function aC(e) {
    return e.type === ah.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === ah.kc.USER || e.type === ah.kc.MESSAGE
          ? ""
          : "/";
}
let aA = {
        [eF.q7.APP_CHANNEL]: ej.default["3/aHX6"],
        [eF.q7.VOICE_CHANNEL]: ej.default["3/aHX6"],
        [eF.q7.ACTIVITY]: ej.default["3/aHX6"],
        [eF.q7.OVERLAY]: ej.default["rPpf5/"],
        [eF.q7.PROFILE_WIDGET]: null,
        [eF.q7.AUTOMOD]: null,
        [eF.q7.BOT]: null,
        [eF.q7.APPLICATION_COMMANDS]: null,
    },
    aI = [eF.q7.ACTIVITY, eF.q7.APP_CHANNEL, eF.q7.VOICE_CHANNEL, eF.q7.OVERLAY];
function aE(e) {
    return aI.find((t) => ag(e, t)) ?? null;
}
let aM = 1920 / 1018;
function a_(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let aT = a_(24, 1018),
    aP = a_(24, 1920);
function aR(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var aL = n(176999),
    a$ = (((l = {}).IMAGE = "image"), l),
    aq = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aD = n(598748),
    aF = n(773669);
let aO = [],
    az = {},
    aG = {};
function aU(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aB(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: a$.IMAGE,
        visibility: aq.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aK = n(127258),
    aH = n(803306),
    aV = n(587895),
    aW = n(320095),
    aX = n(963852),
    aY = n(95701),
    aQ = n(889227),
    aZ = n(427262);
let aJ = new aY.nA({ id: "1337", guild_id: "1337", type: e2.rbe.GUILD_TEXT, name: "preview" });
function a0(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, m.bG)([lh.default], () => lh.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, aH.nj)(new aQ.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let a1 = /^@\S+/;
var a2 = n(775602);
let a3 = [ej.default["3eTjcV"], ej.default.l3j5nS];
var a7 = n(97808),
    a4 = n(778712),
    a5 = n(486020),
    a6 = n(46054),
    a8 = n(200700);
let a9 = {
        alert: { label: () => eb.intl.string(ej.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eb.intl.string(ej.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eb.intl.string(ej.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eb.intl.string(ej.default.RGzFNK), blockedStyle: !1 },
    },
    ie = {
        blocked: { label: () => eb.intl.string(ej.default.YdnZ8q), tone: "red" },
        alert: { label: () => eb.intl.string(ej.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eb.intl.string(ej.default.RGzFNK), tone: "green" },
    },
    it = ["blocked", "alert", "allowed"],
    il = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function ir(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : eb.intl.formatToPlainString(eb.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, a8.getFriendlyDurationString)(n))
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
var ia = n(984097),
    ii = n(13673);
let is = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function iu(e) {
    let { example: t } = e,
        n = ir(t);
    return null == n
        ? null
        : (0, a.jsx)(u.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let io = ["glazedgamer", "sprinkles", "donutking"];
function ic(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = a9[n.outcome];
    return (0, a.jsxs)("li", {
        className: f()(ia.nM, { [f()(ia.HV, ii.DX)]: s }),
        children: [
            (0, a.jsx)(nD.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: ia.my,
                children: (0, a.jsx)(a7.eu, {
                    src: (0, a5.AE)(void 0, void 0),
                    size: a4._3.SIZE_24,
                    "aria-label": eb.intl.string(ej.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: ia.fw,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), a6.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(iu, { example: n }) : null,
                ],
            }),
        ],
    });
}
function id(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = ie[t.section],
        s = new Set(t.examples.map(ir)),
        o = 1 === s.size ? t.examples.map(ir)[0] : null;
    return (0, a.jsxs)("div", {
        className: ia.UO,
        children: [
            (0, a.jsxs)("div", {
                className: ia.RZ,
                children: [
                    (0, a.jsx)(u.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: is[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: ia.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-xs/semibold",
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
                className: ia.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(ic, { example: e, username: io[(n + t) % io.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function im(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            it
                .map((e) => ({ section: e, examples: t.filter((t) => il[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: ia.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: ia.hk,
                      children: (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    id,
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
var ih = n(276293),
    ig = n(460905),
    ip = n(110384),
    ix = n(365199),
    iv = n(633018),
    ij = n(763754),
    ib = n(217424),
    iy = n(194085),
    ik = n(20851),
    iw = n(692508),
    iS = n(798819);
function iN(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: f()(iS.item, iS.labelContainer, iS.colorDefault, {
            [iS.focused]: !0 === t.highlighted,
            [iS.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: iS.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: iS.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: f()(iS.label, iw.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: iS.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: iS.icon }),
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
                          return (0, a.jsx)("img", { src: l, alt: "", className: f()(t, iw.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: eb.intl.string(eb.t["5IEsGx"]), icon: ip.W, muted: !0 }
                : { label: eb.intl.string(eb.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: f()(iS.menu, iw.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: iS.scroller,
            children: [
                (0, a.jsx)(iN, { item: s }),
                (0, a.jsx)("div", { className: iS.separator }),
                (0, a.jsx)(iN, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var iA = n(381941);
function iI() {}
function iE(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        c,
        d,
        h,
        g,
        p,
        { projectId: x, exchanges: v } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, m.bG)([lh.default], () => lh.default.getCurrentUser())),
        (n = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(x))),
        (l = n?.application_id),
        (r = (0, m.bG)([aV.A], () => aV.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? eb.intl.string(ej.default.JEYq8M)),
        (o = (0, m.bG)([lh.default], () => (null != l ? lh.default.getUser(l) : void 0), [l])),
        (d = a0("31337", s, { bot: !0, enabled: !(c = o?.bot === !0) })),
        (h = c ? o : d),
        (g = a0("31338", eb.intl.string(ej.default["9iAOsw"]), { discriminator: "0003" })),
        (p = a0("31339", (0, aZ.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == p || null == h || null == g
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
                                      i = (0, aW.rh)({
                                          ...(0, aX.Ay)({
                                              channelId: aJ.id,
                                              content: e,
                                              author: t,
                                              type: l ?? e2.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: e2.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: aK.G.APPLICATION_COMMAND,
                                                        user: (0, aX.Vi)(s),
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
                                              messageType: e2.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: e2.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(a1, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${o.username}`).join(`<@${o.id}>`)), i);
                                  }
                              return c;
                          })(
                              v,
                              { bot: h, currentUser: t, viewer: p, member: g },
                              {
                                  targetMessage: eb.intl.string(ej.default["y+QYes"]),
                                  memberMessage: eb.intl.string(ej.default.BUTRDc),
                              },
                          ),
                [v, h, t, p, g],
            ),
            botIcon: r,
            appIconSrc: r ?? h?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = aJ.name;
    return (0, a.jsxs)("div", {
        className: iw.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: iw.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ih.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: f()(iw.TE, `group-spacing-${iA.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? iw.Rz : void 0,
                            children: [
                                (0, a.jsx)(ik.A, {
                                    message: n,
                                    channel: aJ,
                                    author: (0, ij.FT)(n.author, aJ),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(ib.A, { message: n, channel: aJ }) : void 0,
                                    usernameClassName: r?.target === "user" ? iw.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: iw.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(iy.Ay, {
                                              children: [
                                                  (0, a.jsx)(iy.qv, {
                                                      label: eb.intl.string(eb.t.lfIHs4),
                                                      icon: ig.n,
                                                      onClick: iI,
                                                  }),
                                                  (0, a.jsx)(iy.qv, {
                                                      label: eb.intl.string(eb.t["5IEsGx"]),
                                                      icon: ip.W,
                                                      onClick: iI,
                                                  }),
                                                  (0, a.jsx)(iy.qv, {
                                                      label: eb.intl.string(eb.t["UKOtz+"]),
                                                      icon: ix.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: iI,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? iw.ET : iw.je,
                                          inert: !0,
                                          children: (0, a.jsx)(iC, {
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
                className: iw.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(iv.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
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
var iM = n(332173);
function i_(e) {
    let { name: t } = e;
    return (0, a.jsxs)(iM.A, { children: ["/", t] });
}
function iT(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(aS());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(i_, { name: e.name }, e.start) : e.text));
}
n(827669);
var iP = n(687966),
    iR = n(757789),
    iL = n(26137),
    i$ = n(430392),
    iq = n(231483),
    iD = n(323384);
let iF = {
    frame: ej.default.Z2bt4u,
    overlay_widget: ej.default["0mGHfU"],
    user_widget: ej.default.Jipr29,
    bot: ej.default.EbvC13,
    commands: ej.default.EbvC13,
    automod: ej.default.tiMvei,
};
var iO = n(573634);
let iz = {
    frame: iP.GameControllerIcon,
    overlay_widget: iR.V,
    user_widget: iL.r,
    bot: i$.RobotIcon,
    commands: i$.RobotIcon,
    automod: iq.ShieldIcon,
};
function iG(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: f()(iO.e7, l),
        children: [(0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function iU(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iO.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iO.jw,
                    children: (0, a.jsx)(u.E, {
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
function iB(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iO.lj,
        children: [
            (0, a.jsx)("span", {
                className: f()(iO.Vo, iO.G),
                children: (0, a.jsx)(iD.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iO.aV,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iK(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iO.wZ,
        children: t.map((e, t) => {
            let n = aC(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(i_, { name: e.name })
                                : (0, a.jsx)(iM.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function iH(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iO.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iO.Aw,
                    children: (0, a.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(iT, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function iV(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? iD.k : iz[t.kind],
        c = eb.intl.string(s ? ej.default.BM4Ymz : iF[t.kind]);
    return (0, a.jsxs)("section", {
        className: iO.s9,
        "aria-label": c,
        children: [
            (0, a.jsxs)("div", {
                className: iO.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iO.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(u.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: c }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: iO.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(u.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(iT, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(iH, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: iO.PG, children: r }) : null,
        ],
    });
}
function iW(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: u, renderPreview: o, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: iO.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iO.Lv,
                children: [(0, a.jsx)(v.D, { variant: "heading-lg/semibold", color: "text-strong", children: r }), s],
            }),
            ((t = u.experiences ?? []),
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
                                let n = t.map(aS()).join("|");
                                return RegExp(`(?<![\\p{L}\\p{N}/.:])/(?:${n})(?![\\p{L}\\p{N}_-])`, "iu").test(e);
                            })(e, c),
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
            )).map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iO.yF, role: "separator" }),
                            (0, a.jsx)(iV, {
                                experience: t,
                                bullets: n,
                                preview: o(t),
                                blocks: (function (e, t) {
                                    switch (t.kind) {
                                        case "frame":
                                            let n = (function (e, t) {
                                                if ("frame" !== t.kind) return null;
                                                let n = eb.intl.string(ej.default["6/3tGY"]),
                                                    l = [];
                                                if (t.surfaces.includes(eF.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(eF.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(eF.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        iG,
                                                        {
                                                            className: iO.Iw,
                                                            caption: eb.intl.formatToPlainString(ej.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: iO.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        iB,
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
                                                ...(n.usableInVoice ? [eb.intl.string(ej.default["4oGg2h"])] : []),
                                                ...(n.launchableAnywhere ? [eb.intl.string(ej.default.BTGCfR)] : []),
                                            ];
                                            return (
                                                r.length > 0 &&
                                                    l.push(
                                                        (0, a.jsx)(
                                                            iG,
                                                            {
                                                                caption: eb.intl.string(ej.default.MY6UGJ),
                                                                children: (0, a.jsx)(iU, { labels: r }),
                                                            },
                                                            "features",
                                                        ),
                                                    ),
                                                l
                                            );
                                        case "bot":
                                        case "commands":
                                            return [
                                                ...(0 === e.commands.length
                                                    ? []
                                                    : [
                                                          (0, a.jsx)(
                                                              iG,
                                                              {
                                                                  caption: eb.intl.string(eb.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iK, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...[
                                                    {
                                                        key: "permissions",
                                                        caption: ej.default["2UbW6r"],
                                                        names: e.bot_permissions,
                                                    },
                                                    {
                                                        key: "intents",
                                                        caption: ej.default["7TKfpj"],
                                                        names: e.privileged_intents,
                                                    },
                                                ]
                                                    .flatMap((e) => {
                                                        let { key: t, caption: n, names: l } = e;
                                                        return null != l && l.length > 0
                                                            ? [
                                                                  {
                                                                      key: t,
                                                                      caption: eb.intl.string(n),
                                                                      labels: l.map(aN),
                                                                  },
                                                              ]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            iG,
                                                            { caption: n, children: (0, a.jsx)(iU, { labels: l }) },
                                                            t,
                                                        );
                                                    }),
                                            ];
                                        default:
                                            return [];
                                    }
                                })(u, t),
                                commandNames: c,
                            }),
                        ],
                    },
                    t.id,
                );
            }),
        ],
    });
}
var iX = n(633075),
    iY = n(946356),
    iQ = n(58216),
    iZ = n(27399);
function iJ(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, m.bG)([lh.default], () => lh.default.getCurrentUser()),
        r = i.useMemo(() => new iX.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iZ.H,
              children: (0, a.jsx)(iY.A.Overlay, {
                  className: iZ.w,
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
var i0 = n(443863);
function i1(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: a_(i.width * t, 1920), height: a_(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(am, { projectId: n }),
            (0, a.jsx)("div", {
                className: i0.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": aT,
                    "--custom-conjure-plan-overlay-widget-end": aP,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: i0.M7, onError: s }),
            }),
        ],
    });
}
function i2(e, t, n) {
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
function i3(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, l0._)(t, r);
    return s
        ? null
        : (0, a.jsx)(nR.D, {
              className: i0.xX,
              onClick: () => i2(t, [{ id: r, alt: l }], 0),
              "aria-label": eb.intl.string(ej.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: i0.sN, onError: u }),
          });
}
function i7(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: c } = (0, l0._)(t, r),
        [d, h] = i.useState(!1),
        [g, p] = i.useState(!1),
        {
            slide: x,
            labels: v,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, m.bG)([a2.Ay], () => a2.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                o = t && !l && !n && !s,
                c = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => a((e) => (e + 1) % a3.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let d = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                f = i.useCallback(() => d(c), [d, c]);
            return { slide: c, labels: a3.map((e) => eb.intl.string(e)), pick: d, hold: f };
        })({ ready: null != s, paused: d || g });
    if (o) return null;
    let b = eb.intl.string(ej.default.mjryK4),
        y = eb.intl.string(ej.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: i0.RM,
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        onFocus: () => p(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || p(!1);
        },
        children: [
            (0, a.jsx)(nR.D, {
                className: f()(i0.xX, i0.nj, { [i0.qQ]: 0 === x }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(aM) },
                onClick: () => i2(t, [{ id: r, alt: b }], 0),
                "aria-label": eb.intl.string(ej.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === x
                          ? (0, a.jsx)("img", { src: s, alt: b, className: i0.Ac, onError: c })
                          : (0, a.jsx)(i1, { projectId: t, src: s, alt: y, size: l, onError: c }),
            }),
            (0, a.jsx)("div", {
                className: i0._4,
                role: "group",
                "aria-label": eb.intl.string(ej.default.EH36X6),
                children: v.map((e, t) =>
                    (0, a.jsx)(
                        nR.D,
                        {
                            className: f()(i0.c, { [i0.Cw]: x === t }),
                            "aria-pressed": x === t,
                            onClick: () => j(t),
                            children: (0, a.jsx)(u.E, {
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
function i4(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: u } = (0, l0._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(nR.D, {
                  className: i0.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: i0.rA, onError: u }),
              }),
          });
}
function i5(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: eb.intl.formatToPlainString(ej.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: i0.Op,
              children: (0, a.jsxs)("div", {
                  className: i0.uW,
                  children: [
                      (0, a.jsx)(u.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: eb.intl.string(ej.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: i0.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(i4, { projectId: t, id: r, alt: i, onOpen: () => i2(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function i6(e) {
    var t;
    let n,
        l,
        r,
        s,
        o,
        c,
        d,
        f,
        g,
        p,
        { projectId: x, proposal: v, version: j, onApprove: b } = e,
        { botExchanges: y } =
            ((n = ag(v, eF.q7.APPLICATION_COMMANDS)),
            (l =
                ag(v, eF.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(aj)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : ak(v, l, {
                              message: eb.intl.string(ej.default.J7qggf),
                              reply: eb.intl.string(ej.default.nqYtiy),
                              event: eb.intl.string(ej.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = aG } = t,
                r = (0, m.bG)([aF.default], () => aF.default.locale),
                a = (0, m.bG)([ti.Ay], () => {
                    let t = ti.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(az);
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
                                                          ...aU(n),
                                                          ...(null != n.fallback ? { fallback: aU(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aL.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[aD.m.WIDGET_TOP] || null == i[aD.m.WIDGET_BOTTOM]
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
                                                                    type: aL.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aL.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aL.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aB),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aO,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(x, v),
        w = j?.superseded === !0,
        S = v.what_changed?.trim() ?? "",
        N =
            ((t = v.commands),
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
            ((o =
                null == (s = aE(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (d = null != (c = v.design_image) && c.id !== aR(v)?.id ? c : null),
            (f = aR(v)),
            (g =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "frame" === t;
                })?.id ?? o),
            (p =
                v.experiences?.find((e) => {
                    let { kind: t } = e;
                    return "overlay_widget" === t;
                })?.id ?? o),
            {
                ui: null != d && null != g ? { experienceId: g, design: d } : null,
                overlay:
                    null != f && null != p ? { experienceId: p, design: f, size: ez(v.overlay_widget ?? null) } : null,
            }),
        A = i.useMemo(
            () =>
                v.commands.some(aj)
                    ? ak({ ...v, bot: void 0 }, "commands", {
                          message: eb.intl.string(ej.default.J7qggf),
                          reply: eb.intl.string(ej.default.nqYtiy),
                          event: eb.intl.string(ej.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        I = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(x)?.name, [x]),
        E =
            w && null != j
                ? eb.intl.formatToPlainString(ej.default.YZ3qJs, { version: j.version })
                : eb.intl.string(ej.default["3b6e7o"]),
        M = w ? (0, a.jsx)(nU, { children: eb.intl.string(ej.default.hF2c41) }) : null;
    return (0, a.jsxs)(nB, {
        title: E,
        meta: M,
        superseded: w,
        showLabel: eb.intl.string(ej.default.yD8EJS),
        hideLabel: eb.intl.string(ej.default.nSPGNb),
        bodyClassName: i0.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: i0.Qs,
                children: (0, a.jsx)(iW, {
                    appName: I ?? v.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(iT, { text: v.summary, commandNames: N }),
                            }),
                            (0, a.jsx)(i5, { projectId: x, proposal: v }),
                            "" !== S
                                ? (0, a.jsxs)("section", {
                                      className: i0.uW,
                                      children: [
                                          (0, a.jsx)(u.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: eb.intl.string(ej.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(u.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(iT, { text: S, commandNames: N }),
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
                                            ? (0, a.jsx)(i3, {
                                                  projectId: x,
                                                  design: C.ui.design,
                                                  alt: eb.intl.string(
                                                      null == (t = aE(v)) ? ej.default["3/aHX6"] : aA[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === C.overlay?.experienceId
                                            ? (0, a.jsx)(i7, {
                                                  projectId: x,
                                                  design: C.overlay.design,
                                                  size: C.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(iJ, { ...k }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, a.jsx)(im, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || ab(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, A);
                                return t.length > 0 ? (0, a.jsx)(iE, { projectId: x, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: N,
                }),
            }),
            null == b || w
                ? null
                : (0, a.jsxs)("div", {
                      className: i0.qr,
                      children: [
                          (0, a.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: eb.intl.string(ej.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: eb.intl.string(ej.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var i8 = n(331322),
    i9 = n(289565);
function se(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: i9.m, children: n })
        : (0, a.jsxs)("div", {
              className: i9.Z,
              children: [
                  n,
                  (0, a.jsx)(tF.m, {
                      text: eb.intl.string(eb.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tX.K, {
                          "aria-label": eb.intl.string(eb.t.WAI6xu),
                          icon: tT.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function st(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "not_live" === t.publishState);
}
function sn(e, t) {
    return null != e && st(t, e.status);
}
let sl = new WeakMap();
var sr = n(175841),
    sa = n(27232),
    si = n(505930),
    ss = n(506774),
    su = n(385081);
let so = "conjurePublishRatings",
    sc = [1, 2, 3, 4, 5],
    sd = {
        1: ej.default.GhbsGA,
        2: ej.default.cm0nwU,
        3: ej.default.kGvlh2,
        4: ej.default.dVBSUg,
        5: ej.default.DKlgF7,
    };
function sf(e) {
    return eb.intl.string(sd[e]);
}
let sm = new Set(),
    sh = 0;
function sg() {
    return ss.w.get(so) ?? {};
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, su.Fz)(e, n);
                },
            };
        })(t),
        o = eb.intl.string(ej.default.IqkF07);
    return (0, a.jsx)(ty.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: eb.intl.string(ej.default["sr+mUC"]),
                disabled: !s,
                onClick: () => {
                    (u(), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(n9.f, {
            label: o,
            hideLabel: !0,
            placeholder: eb.intl.string(ej.default.HMGKAV),
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
            (0, a.jsx)(sr.SparklesIcon, { size: "xs", color: "currentColor", className: sj.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(u.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children:
                    t <= 2
                        ? eb.intl.string(ej.default["nIc9/M"])
                        : 3 === t
                          ? eb.intl.string(ej.default.ausj8U)
                          : eb.intl.string(ej.default.HilSjw),
            }),
        ],
    });
}
function sy(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: o } = (function (e) {
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
                            (0, su.gw)(i);
                            let s = sg();
                            return (ss.w.set(so, { ...s, [t]: { ...s[t], [n]: l } }), sh++, sm.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [c, d] = i.useState(null),
        [m, h] = i.useState(null),
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
        null != s && !g)
    )
        return (0, a.jsx)(sb, { rating: s });
    let b = null != s,
        y = b ? s : (m ?? c),
        k = b || (null == m && null != c);
    function w(e) {
        if (b) return;
        (d(e), h(null), p(!0));
        let t = o(e);
        null != t && (0, eE.openModal)((e) => (0, a.jsx)(sv, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: sj.nM,
        onMouseLeave: () => h(null),
        children: [
            (0, a.jsxs)("span", {
                className: sj.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(u.E, {
                        id: v,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: f()(sj.Pf, { [sj.KH]: null == y }),
                        children: eb.intl.string(ej.default.mTV326),
                    }),
                    sc.map((e) =>
                        (0, a.jsx)(
                            u.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: f()(sj.Pf, { [sj.KH]: y === e }),
                                children: sf(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": v,
                className: sj.uf,
                children: sc.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? sa.StarIcon : si.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: sj.uK,
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
                                        j.current ? d(e) : w(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((j.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), w(e)));
                                    },
                                    onKeyUp: () => {
                                        j.current = !1;
                                    },
                                    className: sj.hF,
                                    "aria-label": eb.intl.formatToPlainString(ej.default.NU7Dex, {
                                        rating: e,
                                        label: sf(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: f()(sj.d4, { [sj.cO]: t, [sj.Ng]: t && k }),
                                        children: (0, a.jsx)(n, {
                                            size: "xs",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    t && k ? `picked-${y}` : "idle",
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
        l = tI(t, n);
    return (0, a.jsx)(h.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sw(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tx.Ay)(t);
    return null != r && sn(r, l)
        ? (0, a.jsx)(se, {
              children: (0, a.jsxs)(i8.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(sk, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(u.E, {
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
    sC = n(416473),
    sA = n(289830);
function sI(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, m.bG)(
                    [ti.Ay],
                    () => {
                        let t = ti.Ay.getProject(e);
                        return null != t && (0, ti.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                o = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, sC.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof sS.A ? e.message : eb.intl.string(ej.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [c] = i.useState(() => Date.now()),
                d =
                    t.next_run_at > c
                        ? eb.intl.formatToPlainString(ej.default.orZDqY, { time: (0, sN.TP)(t.next_run_at) })
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
        title: eb.intl.string(ej.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: sA.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sA.z,
                    children: [
                        (0, a.jsx)(u.E, { variant: "text-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eb.intl.string(ej.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: eb.intl.string(ej.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(h.$, {
                          variant: "secondary",
                          size: "sm",
                          text: eb.intl.string(ej.default.EuhBSG),
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
        className: f()(sE.nM, { [sE.f1]: s, [sE.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": eb.intl.formatToPlainString(ej.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sE.jo,
                children: [
                    n
                        ? (0, a.jsx)(g.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sE.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(u.E, {
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
                : (0, a.jsx)(u.E, {
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
        title: eb.intl.string(ej.default["wx/o8Y"]),
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
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        c = i.useCallback(() => {
            (0, eE.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        d = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: sT.R })), [r.fields]),
        m = (0, rj.bB)(l, s),
        g = f()(sR.Lo, { [sR.jY]: m });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: g,
                  children: (0, a.jsx)(u.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: eb.intl.string(ej.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, a.jsxs)(
                "article",
                {
                    className: g,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: eb.intl.string(ej.default.HCQvpO),
                        }),
                        (0, a.jsx)(sP.C, { label: eb.intl.string(ej.default.HCQvpO), size: "xs", items: d }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: sR.Lo,
                      children: (0, a.jsx)(sP.C, { label: eb.intl.string(ej.default.HCQvpO), size: "xs", items: d }),
                  },
                  s,
              )
            : "received" === s
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: g,
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
                                    (0, a.jsx)(u.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eb.intl.string(ej.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                selectable: !0,
                                children: r.fields
                                    .map((e) => e.label)
                                    .map((e) =>
                                        eb.intl.formatToPlainString(ej.default["Z+FC3j"], {
                                            label: e,
                                            value: eb.intl.string(ej.default.CJq1rY),
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
                        (0, a.jsx)(u.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: eb.intl.string(null != o ? ej.default.O0QIqj : ej.default.HCQvpO),
                        }),
                        (0, a.jsx)(r_.A, {
                            text: null != r.note && "" !== r.note ? r.note : eb.intl.string(ej.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(sP.C, { label: eb.intl.string(ej.default.HCQvpO), size: "xs", items: d }),
                        (0, a.jsx)("div", {
                            className: sR.sq,
                            children: (0, a.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: eb.intl.string(ej.default.EK8tKY),
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
            className: nZ.pj,
            "data-live": !1,
            children: (0, a.jsx)(n$.A, {
                glyph: (0, a.jsx)(rU.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eb.intl.string(ej.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, nM.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = rZ(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        N = r7(k);
    return (0, a.jsxs)("ol", {
        className: nZ.pj,
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
                          r4,
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
            (0, a.jsx)(as, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: nZ.YO,
                      children: (0, a.jsx)(nY, { todos: b, provisional: d, agents: N, live: r, superseded: s }),
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
            ideas: o,
            attachments: c,
            secretRequest: d,
            secretRequestId: m,
            secretRequestAwaiting: h,
            secretRequestStatus: g = "open",
            settingsRequest: p,
            settingsAskId: x,
            publishCta: v,
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: S,
            hoistedProse: N = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: A,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: M = !1,
        } = e,
        _ = i.useMemo(
            () => rB({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: P, showsClosingMessage: R, closingContent: L } = _,
        $ = (N ? C : void 0) ?? _.attachmentsHost,
        q = R && !N,
        D = null == c ? null : (0, a.jsx)(s$.A, { projectId: t, attachments: c }),
        F = null == D ? null : (0, a.jsx)("div", { className: nZ.MT, children: D }),
        O = w
            ? (0, a.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return eb.intl.string(ej.default.Mv5OmK);
                          case "queued":
                              return eb.intl.string(ej.default["Po/2mi"]);
                          case "restarting":
                              return eb.intl.string(ej.default.Vj0woh);
                          default:
                              return eb.intl.string(ej.default.gY3L8p);
                      }
                  })(S),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: nZ.ue,
        children: [
            T.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: nZ.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nZ.DV,
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
                ? (0, a.jsx)(i6, { projectId: t, proposal: r, version: s, onApprove: k })
                : q
                  ? (0, a.jsxs)("div", {
                        className: f()(nZ.ky, sF.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: f()(sO.PT, nZ.cW),
                                children: (0, sq.U)(L, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === $ ? F : null,
                            O,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: f()(nZ.ky, sF.XR, { [sD.O]: null != h && "open" === g }),
                      children: (0, a.jsx)(sL, {
                          projectId: t,
                          cardId: m ?? "",
                          request: d,
                          status: g,
                          awaiting: "open" === g ? h : void 0,
                      }),
                  })
                : null,
            null != p
                ? (0, a.jsx)("div", {
                      className: f()(nZ.ky, sF.XR),
                      children: (0, a.jsx)(rR, { projectId: t, request: p, askId: x }),
                  })
                : null,
            "standalone" !== $ && ("closing" !== $ || q) ? null : D,
            null != v ? (0, a.jsx)(sw, { projectId: t, turnId: j ?? null, cta: v }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(s_, { ideas: o, pickedIdeaIds: y, onPick: b }) : null,
            null != A ? (0, a.jsx)(ao, { proposal: A, onRestore: I }) : null,
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
    sY = n(191023),
    sQ = n(285796),
    sZ = n(922329),
    sJ = n(153171);
function s0(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(sZ.p, {
        name: eb.intl.string(ej.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: em.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(sY.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: em.OY,
                    children: (0, a.jsx)(lr.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(u.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: eb.intl.string(ej.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: sJ.o1,
            onClick: () => {
                eu(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": eb.intl.string(ej.default.N852dj),
            children: (0, a.jsx)(sQ.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function s1(e) {
    let { send: t } = e;
    return (0, a.jsxs)(sZ.p, {
        compact: !0,
        name: eb.intl.string(ej.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(u.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: eb.intl.string(ej.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE, className: sJ.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(li.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: eb.intl.string(ej.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var s2 = n(587157),
    s3 = n(347111),
    s7 = n(120234),
    s4 = n(901173),
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
        u = (0, m.bG)([ut.A], () => ut.A.hidePersonalInformation ?? !1),
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
        f = l.findIndex((e) => "file" === e.kind),
        h = -1 === f ? d : d.slice(0, f),
        g = -1 === f ? [] : d.slice(f);
    return (0, a.jsx)(ue.Ay, {
        id: t,
        className: ul.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": eb.intl.string(ej.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(ua, { titleId: o, title: eb.intl.string(ej.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(ua, { titleId: c, title: eb.intl.string(ej.default.zA5KLM), children: g })
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
            (0, a.jsx)(u.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: ul.Gf, children: n }),
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
let up = (0, aY.createChannelRecord)({ id: "1", type: e2.rbe.DM });
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
        o = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [h, g] = i.useState(0),
        [p, x] = i.useState(0),
        [v, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = o.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = d.current;
        function l() {
            let e = o.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = c.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (x(i + a), g(s));
            let u = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === d ? 1 : s / d,
                m = 0 === d ? 1 : u / d;
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
    let C = "in" === k ? v.backFrom : v.frontFrom,
        A = "out" === k ? v.frontTo : v.backTo,
        I = (0, m.bG)([a2.Ay], () => a2.Ay.useReducedMotion),
        E = t === eb.intl.string(ej.default.Zc7gML),
        M = r === t && E;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: f()(uy.VT, { [uy.qk]: l }),
            style: l
                ? {
                      insetInlineStart: h,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, A - C)}ms`,
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
                trailingWidth: p,
                className: f()(uy.xM, { [uy.s2]: l }),
                onStart: N,
                onComplete: () => s(t),
            }),
            _(uy.IS, n || (!I && "out" === k), o),
            (0, a.jsx)("span", {
                ref: c,
                className: uy.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(u.E, { variant: uw, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: uy.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(u.E, { variant: uw, tag: "span", className: uy.xM, children: t }),
                          _(uy.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uC = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                aiPaused: r = !1,
                running: s,
                restoring: u = !1,
                onSend: o,
                onInterrupt: c,
                onUploadFile: d,
                onApprove: h,
                onImport: g,
                onSendToOtherProjects: p,
                suggestion: x,
                questionOpen: v = !1,
                hasPendingContext: j = !1,
                onDraftHasTextChange: b,
                modelSettings: y,
                onModelSettingsChange: k,
            } = e,
            w = n && !l && !r,
            S = (function (e) {
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
            })(rz.A.getDraft(t)),
            [N, C] = i.useState(() => uv(S));
        (0, s7.N$)(N);
        let A = i.useRef(N),
            [I, E] = i.useState(null),
            M = i.useCallback(() => {
                let e = uv(S);
                (e !== A.current && ((A.current = e), (0, s3.I)(t, e), C(e)),
                    E(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !uf.ZF.isCollapsed(t)) return null;
                            let [n] = uf.VW.node(e, t.anchor.path);
                            return uf.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(S),
                    ));
            }, [S, t]),
            _ = i.useCallback((e) => uj(S, e), [S]),
            T = "" !== N.trim();
        i.useEffect(() => b?.(T), [T, b]);
        let P = i.useRef(t);
        i.useLayoutEffect(() => {
            P.current !== t && ((P.current = t), uj(S, rz.A.getDraft(t)));
        }, [S, t]);
        let R = (0, m.bG)([a2.Ay], () => a2.Ay.isSubmitButtonEnabled),
            [L, $] = i.useState(!1);
        i.useEffect(() => {
            s || $(!1);
        }, [s]);
        let {
                drafts: q,
                addFiles: D,
                pasteFiles: F,
                removeDraft: O,
                settled: z,
                takeRefs: G,
            } = (0, tG.FM)({ projectId: t, surface: "chat", onUploadFile: d }),
            U = ea.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && en(n);
            }),
            B = "" !== N.trim() || q.length > 0 || j || U,
            K = w && B && z,
            [H, W] = i.useState(null);
        i.useEffect(() => {
            if (null == H) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => W(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [H]);
        let X = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: o } =
                        ((t = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, m.yK)(
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
                        (a = (0, m.bG)([lh.default], () => (null == l ? null : lh.default.getUser(l)), [l])),
                        (s = (0, m.yK)(
                            [lh.default],
                            () => r.map((e) => lh.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    c = (0, m.bG)([s6.default], () => s6.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...o].filter((e) => e.id !== c && !e.bot),
                    [u, o, c],
                );
            })(t),
            Y = (0, s5.rU)(t),
            [Q, Z] = i.useState(null),
            [J, ee] = i.useState(0),
            et = i.useMemo(() => (null != I && w ? (0, s4.OG)(I, I.length) : null), [I, w]),
            el = et?.start ?? null;
        i.useEffect(() => {
            null == el ? Z(null) : (0, s5.IP)(t);
        }, [el, t]);
        let er = el === Q ? null : et,
            ei = i.useMemo(() => (null == er ? [] : (0, s4.l$)(X, Y, er.text)), [er, X, Y]),
            eo = er?.text;
        i.useEffect(() => ee(0), [eo]);
        let ec = ei.length > 0,
            ed = Math.min(J, Math.max(0, ei.length - 1)),
            ef = i.useId(),
            em = i.useCallback(
                (e) => {
                    let t = ei[e];
                    null != er &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (ud.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                ud.b.insertText(e, `${n} `));
                        })(S, er.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ei, er, S],
            ),
            eh = i.useCallback(() => {
                if (!K) return;
                let e = G(),
                    n = U
                        ? (function (e) {
                              let t = es(e);
                              if (null == t || !en(t)) return null;
                              let n = t.history.present,
                                  l = nj(e);
                              return (
                                  eu(e, (e) => ({ ...e, history: V, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, ex.showUserMessage)(e, t, r),
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
                                              send: (n) => (0, ex.sendUserMessage)(e, t, [...r, n], { nonce: a }),
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
                o(N, e.length > 0 ? e : void 0, n ?? void 0);
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
                })(uI(ew.current), eT.current, (0, s4.Lj)(N));
                ("" !== l && W(l), _(""), Z(null));
            }, [K, U, t, N, o, G, _]),
            eg = i.useCallback(
                (e) => {
                    (e.preventDefault(), eh());
                },
                [eh],
            ),
            ep = i.useCallback(() => {
                null == c || L || ($(!0), c());
            }, [c, L]),
            ev = null == x || "" !== N || !w || u || j ? null : x,
            ey = i.useCallback(
                (e) => {
                    if (ec && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ei.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), ee((ed + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), em(ed));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), Z(er?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && s && null != c && !L) {
                        (e.preventDefault(), e.stopPropagation(), ep());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ev) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), _(ev));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != h && (e.preventDefault(), h());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eh());
                },
                [eh, h, s, c, L, ep, ev, _, ec, ei.length, ed, em, er],
            ),
            ek = i.useCallback(
                (e) => {
                    w && F(e);
                },
                [w, F],
            );
        (0, sX.Vo)({
            event: e2.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ek(t);
            },
        });
        let ew = i.useRef(null),
            eS = i.useCallback(() => {
                let e = A.current;
                p?.((0, s4.Lj)(e), () => {
                    A.current === e && _("");
                });
            }, [p, _]),
            [eN, eC] = i.useState(0),
            [eA, eI] = i.useState(!1);
        i.useEffect(() => {
            if (0 === N.length) return void eI(!1);
            let e = uI(ew.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eC(t);
            }
            eI(!0);
            let t = setTimeout(() => eI(!1), uA);
            return () => clearTimeout(t);
        }, [N]);
        let eE = i.useMemo(() => ({ "--custom-glow-x": `${eN}px` }), [eN]),
            eM = eA ? ` ${uy.EB}` : "",
            e_ = u
                ? eb.intl.string(ej.default.qqlUiW)
                : r
                  ? eb.intl.string(ej.default.Z0hyNL)
                  : l
                    ? eb.intl.string(ej.default.GcFRaY)
                    : w
                      ? j
                          ? eb.intl.string(ej.default.knUjL3)
                          : v
                            ? eb.intl.string(ej.default.IevBEw)
                            : eb.intl.string(s ? ej.default["0BJa/0"] : ej.default.TEeU7z)
                      : eb.intl.string(ej.default.zZ9NgM),
            eT = i.useRef(0),
            eP = i.useRef(null),
            eR = i.useCallback((e) => {
                if ((eP.current?.disconnect(), null == e)) return;
                eT.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eT.current = e.clientWidth;
                });
                (t.observe(e), (eP.current = t));
            }, []),
            eL = i.useId(),
            e$ = i.useId(),
            eq = null != ev,
            eD = H ?? ev ?? e_,
            eF = "" === N && "" !== eD;
        return (0, a.jsxs)("form", {
            onSubmit: eg,
            className: uy.DA,
            children: [
                ec
                    ? (0, a.jsx)(ur, {
                          id: ef,
                          projectId: t,
                          suggestions: ei,
                          selectedIndex: ed,
                          onHover: ee,
                          onSelect: em,
                      })
                    : null,
                q.length > 0 || U
                    ? (0, a.jsxs)("div", {
                          className: uy.lN,
                          children: [
                              q.map((e) => (0, a.jsx)(tG.Nl, { draft: e, onRemove: O }, e.localId)),
                              U ? (0, a.jsx)(s0, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${uy.wg} ${uy.LP}${eM}`, style: eE, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${uy.wg} ${uy.L3}${eM}`, style: eE, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: uy.VA,
                    ref: ew,
                    children: [
                        (0, a.jsx)(s9.A, {
                            navId: "conjure-composer-attach",
                            disabled: !w,
                            buttonClassName: `${uy.Y0} ${uy.nu}`,
                            iconClassName: uy.Qu,
                            onAddFiles: D,
                            onImport: g,
                            onSendToOtherProjects: null != p ? eS : void 0,
                        }),
                        eF
                            ? (0, a.jsx)("div", {
                                  ref: eR,
                                  className: uy.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uN, { text: eD, offering: eq && null == H, typed: null != H }),
                              })
                            : null,
                        (0, a.jsx)(nD.A, { id: e$, children: eb.intl.string(ej.default.ldNl9x) }),
                        (0, a.jsx)(rF.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(sW.A, {
                                editor: S,
                                containerClassName: f()(uy.sq, uk.dv),
                                className: uy.jp,
                                readOnly: !w,
                                canFocus: w,
                                onChange: M,
                                onBlur: () => E(null),
                                onKeyDown: ey,
                                onPaste: ek,
                                renderExtraElement: ub,
                                "aria-labelledby": e$,
                                "aria-describedby": eF ? eL : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ec,
                                "aria-controls": ec ? ef : void 0,
                                "aria-activedescendant": ec ? ((0, ue.aI)(ed) ?? void 0) : void 0,
                            }),
                        }),
                        eF ? (0, a.jsx)(nD.A, { id: eL, children: e_ }) : null,
                        (0, a.jsx)("div", {
                            className: uy.Sz,
                            children:
                                s && null != c
                                    ? (0, a.jsx)(tF.m, {
                                          text: eb.intl.string(ej.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${uy.Y0} ${uy.$E}`,
                                              disabled: L,
                                              onClick: ep,
                                              "aria-label": eb.intl.string(ej.default.wiguT0),
                                              children: (0, a.jsx)(rU.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : y?.tierSettings != null && null != k
                                      ? (0, a.jsx)(s2.A, {
                                            settings: y.tierSettings,
                                            tiers: y.tiers,
                                            choices: y.choices,
                                            disabled: !w,
                                            onChange: k,
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
                        R
                            ? (0, a.jsxs)("div", {
                                  className: uy.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: uy.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: uy.rt,
                                          disabled: !K,
                                          "aria-label": eb.intl.string(ej.default.rxW2cl),
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
    uA = 1500;
function uI(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uE = n(709753),
    uM = n(540338),
    u_ = n(986109);
let uT = i.createContext(null);
function uP(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: o,
        } = e,
        c = i.useContext(uT),
        [d, m] = i.useState(() => a2.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
        h = i.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: o,
        onAnimationEnd: d ? void 0 : h,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: f()(u_.xk, { [u_.g5]: d, [u_.Qo]: s, [u_.q3]: u }),
        children: n,
    });
}
let uR = new Map();
function uL(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let u$ = "live_behind",
    uq = "conjureTipDismissals",
    uD = new Set(),
    uF = new Set(),
    uO = 0;
function uz() {
    let e = ss.w.get(uq);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uG(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return uD.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uz().anchor[t]?.[e.id] === n;
        case "app":
            return uz().app[t]?.includes(e.id) === !0;
        case "forever":
            return uz().forever.includes(e.id);
    }
}
function uU(e) {
    return (uF.add(e), () => uF.delete(e));
}
let uB = [12e4];
var uK = n(292771);
function uH(e) {
    let { presentation: t, render: n } = e,
        l = (0, m.bG)([a2.Ay], () => a2.Ay.useReducedMotion),
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
        h = i.useRef(u);
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
            m =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((c.current = m), (d.current = f));
        let g = h.current !== u;
        if (((h.current = u), !g || l || null == s || null == i || null == a || null == m)) return;
        let p = i.width / Math.max(1, m.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - m.left}px, ${i.top - m.top}px) scale(${p})`,
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
    let g = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!g) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [g, r]),
        (0, a.jsx)("div", {
            ref: o,
            className: uK.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: f()(uK.qd, e.leaving ? uK.dv : uK.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function uV(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var uW = n(247171);
function uX(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: f()(uW.row, r),
        children: [
            (0, a.jsx)(u.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: f()(uW.gutter, uW[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uW.content, children: i }),
        ],
    });
}
var uY = n(830205);
function uQ(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uX, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: uY.aK,
        children: (0, a.jsxs)("div", {
            className: uY.n8,
            children: [
                (0, a.jsx)(u.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: uY.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uY.X8,
                          children: (0, a.jsx)(tF.m, {
                              text: eb.intl.string(eb.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tX.K, {
                                  "aria-label": eb.intl.string(eb.t.WAI6xu),
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
function uZ(e) {
    let { projectId: t } = e,
        n = i.useContext(tx.bI);
    return (0, a.jsx)(uQ, {
        icon: iq.ShieldIcon,
        children: eb.intl.format(ej.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tx.vL)(t, n.guildId));
            },
        }),
    });
}
var uJ = n(443865),
    u0 = n(716502);
function u1(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uX, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: u0.Nr,
        children: (0, a.jsxs)("section", {
            className: u0.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: u0.X8,
                          children: (0, a.jsx)(tF.m, {
                              text: eb.intl.string(eb.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tX.K, {
                                  "aria-label": eb.intl.string(eb.t.WAI6xu),
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
function u2(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: u0.DD,
        children: t,
    });
}
function u3(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: u0.rf,
        children: t,
    });
}
function u7(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: u0.o1, children: t });
}
var u4 = n(95635);
function u5(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = tI(t, n);
    return (0, a.jsx)(uQ, {
        icon: u4.UploadIcon,
        onDismiss: l,
        children: eb.intl.format(ej.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let u6 = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && uV(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(uZ, { projectId: n });
        },
    },
    {
        id: u$,
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
                (null != n.publishCta && sn(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(u$)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(u5, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, publish: n, justRemixed: l, noTurnsYet: r, ideasIntroAnchorId: a } = e;
            return null == a || uV(n) ? null : null != t || l || r ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(u1, {
                icon: uJ.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(u2, { children: eb.intl.string(ej.default.OJlbhX) }),
                    (0, a.jsx)(u3, { children: eb.intl.string(ej.default["3vJBni"]) }),
                    (0, a.jsx)(u7, {
                        children: (0, a.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: eb.intl.string(ej.default["U/bLzU"]),
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
var u8 = n(817921);
function u9(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                var a;
                let s = (0, tx.Ay)(e),
                    u = (0, m.bG)([lh.default], () => lh.default.getCurrentUser()?.id),
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
                    f = (function (e) {
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
                    h =
                        null == f ||
                        null != (a = f).awaitingUser ||
                        null != a.secretRequest ||
                        null != a.settingsRequest ||
                        (a.intake?.questions.length ?? 0) > 0
                            ? null
                            : f,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === uL(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p;
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    idleMs: null != c ? Math.max(0, d - c) : 0,
                    justRemixed: null != x,
                    noTurnsYet: t.every(
                        (e) =>
                            "publish_notice" === e.kind || "project_event" === e.kind || "context_boundary" === e.kind,
                    ),
                    ideasIntroAnchorId: v,
                    messagesSinceShown: (n) => {
                        let l = uR.get(`${e}:${n}`);
                        return null != l ? uL(t, l, u) : null;
                    },
                    isDismissed: (t) => uG(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, uB);
            i.useSyncExternalStore(uU, () => uO);
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
                                uR.set(`${e}:${t}`, n);
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
                                          if (null == e.dismissal || uG(e, t, n)) return;
                                          let l = uz();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  uD.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  ss.w.set(uq, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  ss.w.set(uq, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  ss.w.set(uq, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uO++, uF.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(u6, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uP, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: u8.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uH, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var oe = n(52133),
    ot = n(732159),
    on = n(888366),
    ol = n(862026),
    or = n(291192);
function oa(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, ol.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: or.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: or.Sp,
                children: [
                    (0, a.jsx)("span", { className: or.q3 }),
                    (0, a.jsxs)("span", {
                        className: or.g8,
                        children: [
                            (0, a.jsx)(on.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(u.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: or.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: or.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(li.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, eE.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(ot.u, {
                                                                    ...t,
                                                                    title: eb.intl.string(ej.default["i+xjZM"]),
                                                                    subtitle: eb.intl.string(ej.default.fMBZmD),
                                                                    confirmText: eb.intl.string(ej.default.i5f3Uo),
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
                        ? (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var oi = n(468689),
    os = n(576705);
function ou(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            eb.intl.format(n ? ej.default.esEGL5 : ej.default["XrN+Bg"], {
                onOpen: () => oi.A.open(t, e2.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
function oo(e) {
    return (0, m.bG)([ti.Ay, aV.A], () => {
        let t = ti.Ay.getProject(e);
        return null == t ? "" : (aV.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var oc = n(951465),
    od = n(369455);
function of(e) {
    var t, n, l;
    let { projectId: r, notice: i } = e,
        s = oo(r),
        o = (0, m.bG)([ti.Ay, lR.A], () => {
            let e = ti.Ay.getProject(r);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (lR.A.getGuild(e.guild_id)?.name ?? null);
        }),
        c = (0, m.cf)([ti.Ay, tg.A, lR.A, os.A], () => {
            let e = ti.Ay.getProject(r);
            if (null == e || "user" === e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eF.q7.AUTOMOD) === !0 ||
                    tg.A.getPublishStatus(r)?.surface === "automod",
                n = lR.A.getGuild(e.guild_id),
                l = null != n && os.A.can(e2.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(u.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            eb.intl.format(
                ((t = i),
                (n = o),
                (l = c.automod),
                !0 === t.commands_failed
                    ? ej.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? ej.default.ev23Cw
                      : t.update
                        ? ej.default.gQzuLC
                        : l
                          ? ej.default.KORRGl
                          : null == n
                            ? ej.default.MOrR29
                            : ej.default["/npn7F"]),
                { name: s, server: o ?? "" },
            ),
            null != c.guildId
                ? (0, a.jsx)(ou, { guildId: c.guildId, update: i.update })
                : !c.automod && i.update && null != i.published_revision
                  ? (0, a.jsx)(om, { projectId: r, notice: i })
                  : null,
        ],
    });
}
function om(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tx.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, m.cf)(
                    [tg.A, ti.Ay],
                    () => {
                        let r = tg.A.getPublishStatus(e),
                            a = ti.Ay.getProject(e);
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
                                (0, ti.jf)(a),
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
                      ? eb.intl.format(ej.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    nR.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: od.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, c.pX)(e2.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : eb.intl.format(ej.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = ti.Ay.getProject(e),
                                        a = null == r ? null : (0, tx.KL)(r, l);
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
                                null != e && (0, oc.A)(e);
                            },
                        }),
              ],
          });
}
var oh = n(940874),
    og = n(73153),
    op = n(505527),
    ox = n(930390),
    ov = n(521981),
    oj = n(491182),
    ob = n(438729),
    oy = n(895597),
    ok = n(448368),
    ow = n(837528),
    oS = n(186313),
    oN = n(715628),
    oC = n(752636),
    oA = n(9842),
    oI = n(589022),
    oE = n(967198),
    oM = n(531685),
    o_ = n(417461);
let oT = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oP(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function oR(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function oL(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = oR(e, t),
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
    if (oP(r) && oP(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && oP(oR(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function o$(e, t) {
    let { streaming: n } = t,
        l = (0, m.bG)([a2.Ay], () => a2.Ay.useReducedMotion),
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
                      for (; a > 0 && oL(t, a);) a--;
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
        f = i.useRef(0);
    (i.useEffect(() => {
        if (o)
            return (
                (f.current = 0),
                (d.current = requestAnimationFrame(function e(t) {
                    let n = 0 === f.current ? 32 : t - f.current;
                    if (n >= 32) {
                        f.current = t;
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
                                    for (; l > t + 1 && n - l < 12 && oT.has(e.charAt(l - 1));) l--;
                                    return oT.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && oL(t, u);) u++;
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
var oq = n(624479),
    oD = n(890377),
    oF = n(92446),
    oO = n(957565),
    oz = n(180227);
function oG(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: f()(oz.QE, { [oz.Rn]: t }),
              children: (0, a.jsx)(iy.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          iy.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function oU(e) {
    return oO.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eb.intl.string(eb.t.JrGD7E), icon: oq.CopyIcon, onClick: () => (0, oO.C)(e) }]
        : [];
}
function oB(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: eb.intl.string(ej.default.CXtLD2),
                          tooltip: eb.intl.string(ej.default.DOb1HM),
                          icon: oD.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eb.intl.string(ej.default.urZwpN),
                          icon: tT.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(oG, { groupStart: n, actions: [...r, ...oU(t)] });
}
function oK(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: eb.intl.string(ej.default.H8Jfhu), icon: tZ.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oF.BugIcon, onClick: r }];
    return (0, a.jsx)(oG, { groupStart: n, actions: [...i, ...oU(t), ...s] });
}
let oH = (0, aY.createChannelRecord)({ id: "conjure-builder", type: e2.rbe.DM }),
    oV = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oW(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: f()(oz.Yq, { [oz.x1]: t }), children: e });
}
function oX(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let oY = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function oQ(e, t, n) {
    let { content: l } = (0, oS.A)(e, oY),
        r = i.useMemo(() => ((0, rF.aW)(e.content) ? (0, ov.z2)(sq.U, e, oY).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: oH, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(ob.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, oN.A)(s, r);
}
function oZ(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, ow.m)(e, oH, t.usernameProfile, l),
        u = (0, ow.Jo)(t.avatarProfile, l),
        o = (0, m.bG)([oE.A], () => oE.A.getGuildId()),
        c = (0, m.bG)([lh.default], () => lh.default.getCurrentUser()),
        d = i.useCallback(
            (t) => {
                let n = lh.default.getUser(e.author.id) ?? e.author;
                return null == c ? null : (0, a.jsx)(oI.A, { ...t, user: n, currentUser: c, guildId: o ?? void 0 });
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
function oJ(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, rF.aW)(n.content)
                          ? (0, ov.z2)(sq.U, n, e).content
                          : (0, ov.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: oz.GV,
                              children: [
                                  (0, a.jsx)(p.x, {
                                      className: oz.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, m.cf)(
            [lm.A],
            () => ({
                isReplyAuthorBlocked: lm.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: lm.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        c = (0, ij.X4)(n),
        d = (0, ij.X4)(t),
        f = oZ(n);
    return (0, a.jsx)(ok.A, {
        repliedAuthor: c,
        baseAuthor: d,
        baseMessage: t,
        channel: oH,
        referencedMessage: { state: oA.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function o0(e) {
    let { message: t, author: n } = e,
        l = oZ(t);
    return (0, a.jsx)(oy.Ay, {
        message: t,
        channel: oH,
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
function o1(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e,
        o = (0, s8.vm)(l),
        c = i.useMemo(() => (0, ij.FT)(o, null), [o]),
        d = i.useMemo(() => R(t), [t]),
        f = d?.body ?? t,
        m = (0, s4.Qu)(f),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, aX.Ay)({ channelId: oH.id, content: f, author: o });
            return (0, aW.rh)({ ...e, timestamp: oX(n, e.timestamp), state: e2.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              o2,
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
function o2(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = oQ(t, l);
    return (0, a.jsx)(oj.A, {
        className: oz.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(o0, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? (0, o_.b)(l)
                    ? (0, a.jsx)("div", { className: oz.dg, children: o })
                    : o
                : (0, a.jsxs)("div", {
                      className: oz.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: oz.GV,
                              children: [
                                  (0, a.jsx)(p.x, {
                                      className: oz.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: oz.WO, children: o }),
                      ],
                  }),
        childrenAccessories: oW(i, "" !== l),
        childrenButtons: (0, a.jsx)(oB, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function o3(e) {
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
        { text: d, revealing: f } = o$(t, { streaming: (0, m.bG)([oM.A], () => o && oM.A.isFocused(), [o]) }),
        h = i.useMemo(() => (0, ij.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, s8.vm)(p),
        v = i.useMemo(() => (null == r ? null : R(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aX.Ay)({ channelId: oH.id, content: v?.body ?? r.content, author: x });
            return (0, aW.rh)({ ...e, id: r.id, timestamp: oX(r.createdAt, e.timestamp), state: e2.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: oH.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aX.Ay)({ channelId: oH.id, content: "", author: oV })),
        k = i.useMemo(
            () =>
                (0, aW.rh)({
                    ...y,
                    timestamp: oX(n, y.timestamp),
                    state: e2.cmJ.SENT,
                    ...(null != b ? { type: e2.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", d), [k, d]),
        S = i.useMemo(
            () => (0, oC.A)({ message: k, channel: oH, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        N = oQ(w, d, oz.OS);
    return (0, a.jsxs)("div", {
        className: oz.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(oj.A, {
                className: oz.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(oJ, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: S,
                childrenMessageContent: N,
                childrenAccessories: oW(l, "" !== d),
                disableInteraction: !0,
            }),
            c,
            u ? (0, a.jsx)("img", { className: oz.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var o7 = n(981879);
function o4(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, aW.rh)(
                    { ...(0, aX.Ay)({ channelId: oH.id, content: "" }), id: `conjure:${t}`, state: e2.cmJ.SENT },
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
                (og.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: oH.id,
                    messageId: l.id,
                    users: [oV],
                    emoji: e,
                    reactionType: op.v.NORMAL,
                }),
                    og.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: oH.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: op.v.NORMAL,
                    }));
            }
            return (
                t(),
                og.h.subscribe("CONNECTION_OPEN", t),
                () => {
                    og.h.unsubscribe("CONNECTION_OPEN", t);
                }
            );
        }, [l.id, n.emojiId, n.emoji]),
        (0, a.jsx)("div", {
            className: o7.H,
            children: (0, a.jsx)(ox.A, {
                message: l,
                channel: oH,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var o5 = n(442433);
n(775443);
var o6 = n(616e3),
    o8 = n(155899);
function o9(e) {
    let { onSelect: t, onClose: n = o5.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(e5.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": eb.intl.string(eb.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(e6.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(e6.Dr, {
                          id: "restore-version",
                          label: eb.intl.string(ej.default.H8Jfhu),
                          icon: tZ.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(e6.Dr, { id: "view-trace", label: "View Trace", icon: oF.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function ce(e) {
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
            isNewest: f = !1,
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
        j = null != v && null != p ? () => ct(v, p) : void 0,
        b =
            ((t =
                eC() && "assistant" === x.role && (0, n_.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, m.bG)(
                [o6.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : o6.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((ew = { projectId: e, traceId: t }), [...ek])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(uP, {
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
                          void (0, o5.jA)(t, (e) => (0, a.jsx)(o9, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(o3, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(oK, {
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
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != p && f
                        ? () =>
                              ct(
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
function ct(e, t) {
    (0, o8.F)({ onConfirm: () => t(e) });
}
var cn = n(288539),
    cl = n(677683),
    cr = n(677690),
    ca = n(159711);
function ci(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, m.bG)([cl.A], () => cl.A.getOutcome(l))),
            (n = (0, m.bG)(
                [lf.A, lh.default, lm.A],
                () => {
                    let e = t?.status === "pinned" ? lf.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, ld.m1)(e, lh.default, lm.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = eb.intl.string(ej.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(nz, {
              title: s,
              children: (0, a.jsx)(u.E, {
                  className: ca.r,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? eb.intl.formatToPlainString(ej.default.gKe6Lw, { channelName: i ?? "" })
                          : eb.intl.string(ej.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(nz, { title: s, children: (0, a.jsx)(cs, { projectId: l }) });
}
function cs(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: o,
            failed: c,
            pin: d,
            skip: f,
        } = (function (e) {
            var t;
            let n = (0, m.bG)([ti.Ay], () => ti.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, m.yK)(
                        [lT.Ay, os.A],
                        () =>
                            null == t
                                ? []
                                : lT.Ay.getChannels(t)
                                      [lT.vM].map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === e2.rbe.GUILD_VOICE && os.A.can(e2.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, a] = i.useState(null),
                [s, u] = i.useState(!1),
                [o, c] = i.useState(!1),
                d = l.find((e) => e.id === r) ?? null,
                f = n?.application_id,
                h = i.useCallback(async () => {
                    if (null == d || null == f) return;
                    (u(!0), c(!1));
                    let t = await (0, cr.pk)(d.id, f);
                    (u(!1), t ? (0, cr.tg)(e, { status: "pinned", channelId: d.id }) : c(!0));
                }, [f, e, d]),
                g = i.useCallback(() => (0, cr.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: d,
                setPicked: a,
                pinning: s,
                failed: o,
                pin: h,
                skip: g,
            };
        })(t),
        g = (0, lC.A)(n, "voice"),
        p = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (g ?? []).filter((t) => e.has(t.value));
        }, [l, g]);
    return (0, a.jsx)("div", {
        className: ca.r,
        children: (0, a.jsxs)(i8.B, {
            gap: 12,
            children: [
                (0, a.jsx)(u.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eb.intl.string(ej.default["1vVBAw"]),
                }),
                p.length > 0
                    ? (0, a.jsx)(n8.Z, {
                          selectionMode: "single",
                          label: eb.intl.string(ej.default.peOi1H),
                          placeholder: eb.intl.string(ej.default["9+dfPT"]),
                          options: p,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: c ? eb.intl.string(ej.default.d7EeAm) : void 0,
                          disabled: o,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eb.intl.string(ej.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: ca.o,
                    children: [
                        (0, a.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            text: eb.intl.string(ej.default.Iw0l8o),
                            disabled: o,
                            onClick: f,
                        }),
                        p.length > 0
                            ? (0, a.jsx)(h.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: eb.intl.string(ej.default.FYI3qr),
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
function cu(e, t, n) {
    return (0, a.jsx)(cn.A, { userId: e, content: `@${t}` }, n);
}
function co(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, s8.Y_)(l);
            }, [l]);
            let r = (0, m.bG)([lh.default], () => (null == l ? null : lh.default.getUser(l)), [l]),
                a = (0, aZ.tx)(r),
                s = oo(e),
                u =
                    (0, m.bG)([lR.A], () => (null == t.guild_id ? null : lR.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? eb.intl.string(ej.default.R1tPlP),
                o = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == o
                        ? eb.intl.format(ej.default.Lwsrhg, { app: s, server: u })
                        : eb.intl.format(ej.default.qqePfT, { app: s, server: u, ...o });
                case "bot_removed":
                    return null == o
                        ? eb.intl.format(ej.default.mT7EQG, { app: s, server: u })
                        : eb.intl.format(ej.default["lA/crI"], { app: s, server: u, ...o });
                case "preview_bot_removed":
                    return null == o
                        ? eb.intl.format(ej.default["4LVIeo"], { app: s, server: u })
                        : eb.intl.format(ej.default.YJOV6D, { app: s, server: u, ...o });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == o
                        ? eb.intl.format(ej.default["4VQfid"], { channel: e, server: u })
                        : eb.intl.format(ej.default.RlMIJN, { channel: e, server: u, ...o });
                }
                case "remixed":
                    return eb.intl.format(ej.default.mHCXtm, { source: t.source_name });
                case "voice_channel_pin":
                    return eb.intl.string(ej.default.UGAfl9);
            }
        })(n, l, cu),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, m.bG)([rv.A], () => null != t && t.length > 0 && ry({ keys: t }, rv.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: eb.intl.string(ej.default.F2yVHg) }
                : null);
    return "voice_channel_pin" === l.type
        ? (0, a.jsx)(ci, { projectId: n })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(u.E, { variant: "text-md/normal", color: "text-default", children: r }),
                  null != s ? (0, a.jsx)(rR, { projectId: n, request: s, notifyAgent: !1 }) : null,
              ],
          });
}
let cc = i.memo(
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
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o1, {
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
                                                  ? (0, a.jsx)(o4, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, oh.tp)(e, t.id, n);
                            })(l, u, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o3, {
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
                    return (0, a.jsx)(uP, {
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
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o3, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(of, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(o3, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(co, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, a.jsx)(oa, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sz, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uP, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sz, {
                            projectId: l,
                            steps: cd,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(ce, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, oe.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, oe.A)(e.row, t.row, ["message"]) &&
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
                (0, oe.A)(e.replyTo, t.replyTo) &&
                (0, oe.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cd = [],
    cf = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cm = new WeakMap();
function ch(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function cg(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cp = ["wheel", "touchstart", "pointerdown", "keydown"];
function cx(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cv = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: c,
            onApprovePlan: d,
            floatingSettingsMessageId: h,
            liveClarificationId: g,
            onRestoreVersion: p,
            scrollerRef: x,
            stickToBottomRef: v,
            pinned: j,
            onUnpin: b,
            handleRef: y,
            onShowsLatestChange: k,
        } = e,
        w = i.useRef(null),
        [S, N] = i.useState(null),
        C = i.useCallback((e) => {
            ((w.current = e), N(e));
        }, []),
        [A, I] = i.useState(null),
        E = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(E.current), []);
    let M = i.useCallback((e) => {
            (I(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        _ = (0, m.bG)([tg.A], () => tg.A.getPublishStatus(t)),
        T = (0, m.bG)([lh.default], () => lh.default.getCurrentUser()?.id),
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
                        i = cm.get(r);
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
                            i = rB({
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
                            if (null != n.prose && cf.test(n.prose.content)) f = !0;
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
                        let m = cf.test(e.content ?? "");
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
                    (cm.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return st(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, _)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = sl.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), sl.set(t, n)), n);
                      })),
                g,
            );
        }, [n, _, g]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return ch(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cg(e, t.endKey, t.end - 1) + 1,
                a = cg(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), ch(e, a, r));
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
                t = K.current ? cx(w.current) : null;
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
        for (let n of cp) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cp) e.removeEventListener(n, t);
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
                    return ((n = Math.min(e.length, t.end + 30)), ch(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), ch(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? ch(e, i, t.end) : null;
            })(F.current, D.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: v.current,
            });
            "older" === n ? (0, ex.loadOlderHistory)(t) : null != n && $(n);
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
        Y = i.useCallback(
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
                    (0, ex.loadOlderHistory)(t) && (X.current = e);
                    return;
                }
                (b(),
                    (G.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = F.current), ch(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, b, t],
        );
    (i.useEffect(() => {
        let e = X.current;
        null != e && Y(e);
    }, [P, Y]),
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
    let Q = null == q.endKey;
    (i.useEffect(() => k?.(Q), [Q, k]),
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
                if (r && v.current && null != cx(l)) (b(), $(D.current), (K.current = !0), H());
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
    let Z = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, n_.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
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
        er = (0, m.bG)([rv.A], () => rv.A.getSettings(t)?.secrets, [t]),
        ea = (0, uE.WT)(t),
        ei = i.useMemo(() => (0, rj.Mv)(n, er), [n, er]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: f()(u_.x7, u_.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: u_.Ub, children: (0, a.jsx)(o.y, {}) }),
            });
        let e = "unavailable" === l ? ej.default.Td4Sf4 : ej.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: u_.x7,
            children: (0, a.jsx)(uP, { role: "assistant", children: (0, a.jsx)(o3, { content: eb.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uT.Provider, {
        value: U,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: u_.x7,
            children: [
                P.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cc,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && A === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === en;
                    return (0, a.jsx)(
                        cc,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? et.get(n.in_reply_to) : void 0,
                            onJumpTo: Y,
                            planVersion: J.get(n.render_id),
                            pickedIdeaIds: ee.get(n.render_id),
                            secretRequestAwaiting: l ? el : void 0,
                            secretRequestStatus: ei.get(n.render_id),
                            settingsFloating: n.id === h,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === Z ? d : void 0,
                            onRestoreVersion: p,
                        },
                        e.key,
                    );
                }),
                Q
                    ? ea.map((e) =>
                          (0, a.jsx)(
                              uP,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(o3, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uM.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != el && Q
                    ? (0, a.jsx)(uP, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(o3, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eb.intl.string(ej.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                Q ? (0, a.jsx)(u9, { projectId: t, messages: n, draftHasText: !0 === c, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cj = n(731084),
    cb = n(823376),
    cy = n(187447);
function ck(e) {
    let { activity: t, id: n } = e,
        l = (0, nE.j)(),
        { text: r, revealing: s } = o$(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cy.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nC.Ch, {
                ref: u,
                className: cy.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: f()(sO.PT, cy.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: a6.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cw = n(53659);
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
            publishing: m = !1,
            spoken: h,
            onSpokenChange: g,
        } = e,
        p = i.useRef(null),
        x = i.useId(),
        [v, j] = i.useState(null),
        b = (0, cj.xu)({
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
        y = eb.intl.string(b),
        k = b === cj.kx["0"],
        [w, S] = i.useState(h ?? y),
        N = (0, nE.j)();
    (l || (0, cj.E4)(y, w) || (!N && !k)) && w !== y && S(y);
    let C = i.useRef(y);
    (i.useEffect(() => {
        C.current = y;
    }, [y]),
        i.useEffect(() => {
            g?.(w);
        }, [w, g]));
    let A = i.useRef(null),
        I = i.useRef(w);
    i.useEffect(() => {
        I.current = w;
    }, [w]);
    let E = i.useRef(k),
        M = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = k), !k && (0, cj.E8)(I.current) && S(C.current));
    }, [k]),
        i.useEffect(() => {
            if (!N) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((M.current = (0, cj.E8)(I.current) ? M.current + 1 : 0), S((0, cj.Ov)(M.current)))
                    : C.current !== I.current
                      ? S(C.current)
                      : A.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, cj.FZ)),
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
    return (0, a.jsx)(e4.Y, {
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(ck, { id: x, activity: t }),
        children: () =>
            (0, a.jsxs)(nR.D, {
                innerRef: p,
                className: f()(cw.hF, _ && cw.Xd),
                "aria-label": eb.intl.string(
                    r
                        ? ej.default.qqlUiW
                        : b === ej.default.j8tmjK
                          ? ej.default.j8tmjK
                          : k
                            ? cj.kx["0"]
                            : ej.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? x : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eb.intl.string(b),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: cw.bl,
                        children: (0, a.jsx)(cb.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cw.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: N
                            ? (0, a.jsx)(sU.o, {
                                  ref: A,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: cj.vg,
                                  delay: null,
                                  className: cw.yE,
                              })
                            : (0, a.jsx)(u.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: cw.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cN = { second: 1e3, minute: 6e4 };
function cC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cN[t];
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
var cA = n(719374);
function cI(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = cC(t);
    return (0, a.jsx)(u.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cA.$,
        "data-conjure-turn-timer": !0,
        children: (0, rJ.C7)(l),
    });
}
function cE(e) {
    let { startedAt: t } = e,
        n = cC(t, "minute");
    return (0, a.jsx)(nD.A, { role: "timer", children: (0, rJ.Us)(n) });
}
var cM = n(885574),
    c_ = n(242779),
    cT = n(436804);
function cP(e) {
    return e.toLocaleString();
}
function cR(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cT.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cT.mf,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [cP((0, c_.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(u.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    cP(n.input_tokens),
                    " in \xb7 ",
                    cP(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cP(n.cache_creation_input_tokens)} cache write \xb7 ${cP(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cL(e) {
    let { project: t } = e,
        n = (0, c_.wU)(t.compaction),
        l = (0, c_.wU)(t.classifier),
        r = (0, c_.wU)(t.image),
        i = (0, c_.wV)(t.orchestrator, t.codegen),
        s = (0, c_.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cT.si,
        role: "dialog",
        "aria-label": eb.intl.string(ej.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cT.Q$,
                children: (0, a.jsxs)("div", {
                    className: cT.mf,
                    children: [
                        (0, a.jsxs)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [cP((0, c_.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cR, { label: eb.intl.string(ej.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cR, { label: eb.intl.string(ej.default.ANCEo3), usage: n }),
            (0, a.jsx)(cR, { label: eb.intl.string(ej.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cR, { label: eb.intl.string(ej.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cT.mf,
                children: [
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eb.intl.string(ej.default["8OUg09"]),
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, c_.sj)(s) ? "\u2014" : `${Math.round(100 * (0, c_.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function c$(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(e4.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cL, { project: t }),
        children: (e) =>
            (0, a.jsx)(nR.D, {
                innerRef: n,
                className: cT.Y$,
                "aria-label": eb.intl.string(ej.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cM.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cq = n(997421);
function cD(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: o = !1,
            thinkingActivity: c,
            compacting: d,
            saving: f,
            projectUsage: h,
            connState: g,
        } = e,
        p = (0, eA.Zv)(t),
        x = (0, m.bG)([tg.A], () => tg.A.getPublishStatus(t)?.publishing === !0, [t]),
        [v, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, cj.E8)(e) || e === eb.intl.string(ej.default.mKK6wB) || e === eb.intl.string(ej.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == h ? null : (0, cj.uc)(h),
        k = null != s,
        w = s ?? (n ? l : void 0),
        S = n || r || k || !0 === f;
    return (0, a.jsxs)("div", {
        className: cq.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cq.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    S || o || p || x
                        ? (0, a.jsx)(cS, {
                              activity: c,
                              compacting: d,
                              saving: f,
                              restoring: r,
                              remixing: k,
                              recalling: o,
                              controlling: p,
                              publishPending: x && S,
                              publishing: x,
                              spoken: v,
                              onSpokenChange: b,
                          })
                        : null,
                    null != w ? (0, a.jsx)(cI, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(cE, { startedAt: w }) : null,
            null == h || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: cq.BP,
                      children: [
                          (0, a.jsx)(u.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(c$, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(u.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eb.intl.formatToPlainString(ej.default["tCo+ZM"], { status: (0, cj.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cq.XF,
                      children: (0, cj.Db)(g),
                  }),
        ],
    });
}
var cF = n(698638),
    cO = n(608711);
let cz = [eb.intl.string(ej.default["9w+Chc"]), eb.intl.string(ej.default.WAvmdq), eb.intl.string(ej.default.SKsrzl)];
function cG(e) {
    var t, n;
    let l,
        r,
        s,
        o,
        c,
        { projectId: d, restoreState: f, onRestoreVersion: g, onImportProject: p } = e,
        x = (0, m.bG)([ri.A], () => ri.A.getMessages(d), [d]),
        v = (0, m.bG)([ex.default], () => ex.default.getConnState(d), [d]),
        j = (0, m.bG)([ri.A], () => ri.A.getProjectUsage(d), [d]),
        b = (0, m.bG)([ri.A], () => ri.A.getThinkingActivity(d), [d]),
        y = (0, m.bG)([ri.A], () => ri.A.isCompacting(d), [d]),
        k = (0, m.bG)([ri.A], () => ri.A.isSaving(d), [d]),
        w = ru(d),
        S = (0, m.bG)([rn.A], () => rn.A.getModelSettings(d), [d]),
        N = i.useRef(null),
        C = i.useRef(null),
        A = i.useRef(null),
        E = i.useRef(null),
        {
            stickToBottomRef: M,
            pinned: T,
            atBottom: P,
            unpin: R,
            releasePinHold: L,
            showsLatest: $,
            showsLatestRef: q,
            handleShowsLatestChange: D,
            updatePin: F,
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
                    for (let e of cp) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of cp) t.removeEventListener(e, o);
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
        })(C),
        O = i.useCallback(() => {
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
            (L(), q.current ? e() : A.current?.showLatest(e));
        }, [L, q]),
        z = i.useCallback(() => {
            (F(), A.current?.handleScroll());
            let e = E.current;
            null != e && (e.position = M.current ? null : (A.current?.snapshot() ?? null));
        }, [F, M]),
        U = i.useContext(eR) === d;
    i.useLayoutEffect(() => {
        if (!U) return;
        let e = { position: e$.A.getProjectView(d).chatScroll };
        return ((E.current = e), () => (0, eL.g7)(d, { chatScroll: e.position }));
    }, [U, d]);
    let B = i.useRef(!U);
    (i.useLayoutEffect(() => {
        if (B.current || 0 === x.length) return;
        B.current = !0;
        let e = e$.A.getProjectView(d).chatScroll;
        null != e && A.current?.restore(e) !== !0 && null != E.current && (E.current.position = null);
    }, [x, d]),
        i.useLayoutEffect(() => {
            let e = N.current;
            if (null == e) return;
            let t = C.current?.getScrollerNode(),
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
                    r && (M.current ? C.current?.scrollToBottom() : A.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [M]),
        i.useEffect(() => {
            (0, ex.ensureConnection)(d);
        }, [d]),
        (0, rO.E1)(d, (0, nE.j)()));
    let K = H(d),
        V = (function (e) {
            let t = (0, tx.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, m.bG)([lR.A], () => (null == n ? null : (lR.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: eb.intl.format("channel" === s ? ej.default["1cm4fj"] : ej.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(d),
        W = (function (e) {
            let t = (0, m.bG)([r$.A], () => r$.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rq.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = rL.A.getSubmitRequestURL();
                return {
                    blocked: !0,
                    message:
                        null == n
                            ? eb.intl.format(ej.default["bw/n4C"], { helpdeskURL: e })
                            : eb.intl.format(ej.default.GYqJXH, { limit: n, helpdeskURL: e }),
                };
            }
            if (null == t.limitUsd || null == n || t.limitUsd <= 0) return null;
            let l = Math.min(99, Math.floor((t.spentUsd / t.limitUsd) * 100));
            return { blocked: !1, message: eb.intl.formatToPlainString(ej.default.GHgG2B, { percent: l, limit: n }) };
        })(d),
        X =
            ((l = (0, m.bG)([rr.A], () => rr.A.getFailure(d))),
            (r = i.useCallback(() => (0, ra.CM)(d), [d])),
            null == l
                ? null
                : {
                      message: eb.intl.format(ej.default.Up6Ssw, { reason: l }),
                      retry: { text: eb.intl.string(ej.default["ywA+ET"]), onClick: r },
                  }),
        Y = (0, m.bG)([rr.A], () => rr.A.getSetupStartedAt(d), [d]),
        Q = i.useCallback(
            (e, t) => {
                (0, ex.sendUserMessage)(d, e, t);
            },
            [d],
        ),
        Z = i.useCallback(
            (e, t, n) => {
                let l = n ?? Q;
                0 === K.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => I(e.comment)),
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
                                      a.push(`${t + 1}. ${_(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: K.annotations, metaComment: e, context: K.context }),
                          t,
                      ),
                      G(d));
            },
            [K, Q, d],
        ),
        J = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of ng)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, ex.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = ng.get(e);
                            (ng.delete(e), nx(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(d) ||
                ri.A.isThinking(d)) &&
                (0, ex.interruptTurn)(d);
        }, [d]),
        ee = i.useCallback((e) => (0, n2.RQ)(d, e.implementation_prompt), [d]),
        [et, en] = (function (e) {
            let [t, n] = i.useState(() => rG(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rG(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(d),
        el = i.useCallback(() => Q(eb.intl.string(ej.default["t5CN3+"])), [Q]),
        er = i.useCallback((e, t, n) => (0, n2.RQ)(d, e, { clarificationAnswers: t, attachments: n }), [d]),
        ea = i.useCallback((e) => (0, rl.X)(d, e), [d]),
        ei = i.useCallback((e) => (0, tD.vX)(d, e), [d]),
        es = i.useCallback((e) => (0, tG.gn)(d, "chat", Array.from(e), ei), [d, ei]),
        eu = i.useCallback(() => (0, n2.RQ)(d, eb.intl.string(ej.default.Zc7gML)), [d]),
        eo = f?.status === "restoring",
        ec = "open" === v && !eo,
        ed = x[x.length - 1],
        ef = null != ed && "assistant" === ed.role && null != ed.proposal,
        [em, eh] = i.useState(null),
        eg = ed?.clarification != null && ed.clarification.id !== em ? ed.clarification : null,
        ev = i.useCallback(() => {
            null != eg && eh(eg.id);
        }, [eg]),
        [ey, ek] = i.useState(null),
        ew = (function (e) {
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
                                summary: eb.intl.string(ej.default["o2++BO"]),
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
        eS = ed?.appBuildRequest != null && (0, n_.BL)(ed) && ed.appBuildRequest.id !== ey ? ed.appBuildRequest : null,
        eN = ew.request ?? (null == eg ? eS : null),
        eC = null == ew.request ? eg : null,
        eA = null != eN && eN === ew.request,
        { close: eI, sent: eE } = ew,
        eM = ew.request?.id,
        e_ = i.useCallback(() => {
            eA ? eI() : null != eN && ek(eN.id);
        }, [eN, eA, eI]),
        eT = i.useCallback(
            (e) => {
                (null != eM && eE(eM),
                    (0, ep.P0)({
                        text: eb.intl.formatToPlainString(ej.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [eM, eE],
        ),
        eP = (0, m.bG)([rv.A], () => rv.A.getSettings(d), [d]),
        [eq, eD] = i.useState(null),
        eF = rC(),
        eO =
            null != ed &&
            ((t = ed.id),
            (s = (0, rj.Mv)(x, eP?.secrets)),
            (o = rA(x)),
            x.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, n_.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !o.has(e.id) && !rI(e.settingsRequest, eP, eF.has(e.id)))),
            )),
        ez =
            null != ed &&
            "assistant" === ed.role &&
            null != ed.settingsRequest &&
            null == ed.secretRequest &&
            (0, n_.BL)(ed) &&
            ed.id !== eq &&
            ((n = ed.settingsRequest),
            (c = n.keys ?? []),
            null != eP &&
                0 !== c.length &&
                c.every((e) => {
                    let t = eP.schema.find((t) => t.key === e);
                    return null != t && rb.has(t.type);
                })) &&
            ry(ed.settingsRequest, eP) &&
            !eO
                ? ed
                : null,
        eG = null == ew.request ? ez : null,
        eU = eG?.settingsRequest ?? null,
        eB = i.useCallback(() => {
            null != ez && eD(ez.id);
        }, [ez]),
        eK = null != eU,
        [eH, eV] = i.useState(null),
        eW = eC?.id ?? eN?.id ?? eG?.id ?? (w ? "scope-setup" : void 0),
        eX = null != eg || null != eN || null != ez || w;
    i.useLayoutEffect(() => {
        let e = C.current?.getScrollerNode(),
            t = eH?.firstElementChild;
        if (null == eH || null == e || !(0, t$.vq)(t, HTMLElement) || null == eW) return;
        function n() {
            M.current && C.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eH.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eH, eW, C, M]);
    let eY = (0, m.bG)([ri.A], () => ri.A.hasLoadedHistory(d), [d]),
        eQ = (function (e) {
            let t = ru(e),
                n = (0, m.bG)([ti.Ay], () => null != ti.Ay.getProject(e), [e]),
                l = (0, m.bG)([ri.A], () => ri.A.hasLoadedHistory(e), [e]),
                r = (0, m.bG)([ri.A], () => ri.A.getMessages(e), [e]),
                a = (0, m.bG)([ex.default], () => ex.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    (0, rs.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(d),
        eZ = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: eY,
            historyUnavailable: (0, m.bG)([ri.A], () => ri.A.isHistoryUnavailable(d), [d]),
            connState: v,
        }),
        eJ = "loading" === eZ && 0 === x.length,
        e0 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < d.length; t++) e = (31 * e + d.charCodeAt(t)) % 0x7fffffff;
            return cz[e % cz.length];
        }, [d]),
        e1 = ef ? eb.intl.string(ej.default.Zc7gML) : "greeting" === eZ && 0 === x.length ? e0 : null,
        e2 = i.useMemo(() => {
            for (let e = x.length - 1; e >= 0; e--) {
                let t = x[e];
                if ("assistant" === t.role && !(0, n_.BL)(t)) return t;
            }
        }, [x]),
        e3 = null != e2,
        e7 = null != e2 ? (0, rD.S)(e2) : void 0,
        e4 = ef && ec ? eu : void 0,
        e5 = i.useCallback(() => (0, n2.RQ)(d, eb.intl.string(ej.default.EMgIuY)), [d]),
        [e6, e8] = i.useState(null),
        [e9, te] = i.useState(e3);
    (e9 !== e3 && (te(e3), e3 || e8(null)),
        i.useEffect(() => {
            if (!e3) return;
            let e = C.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? e8(null)
                        : e8(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e3, e2?.steps, $]));
    let tt = $ ? e6 : "bottom",
        tn = i.useMemo(() => (null != e2 ? (0, nP.b9)(e2.steps) : ""), [e2]),
        tl = i.useMemo(() => (null != e2 ? ((0, nM.lt)(e2.steps) ?? e2.todos) : void 0), [e2]),
        tr = e2?.provisionalTodo,
        ta = null != e2 && nT(e2),
        ts = i.useMemo(() => {
            var e;
            return null != e2 ? ((e = e2.steps), r7((0, nM.Jf)(e, !0).tasks)) : void 0;
        }, [e2]);
    return (0, a.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: cO.TE,
        children: [
            ec
                ? (0, a.jsx)(nI.A, {
                      title: eb.intl.string(ej.default.gy7byi),
                      description: eb.intl.string(ej.default["dkv/WO"]),
                      icons: cF.ir,
                      onDrop: es,
                  })
                : null,
            (0, a.jsx)(n0, {
                onJumpToActivity: O,
                line: tn,
                placement: e3 && "top" === tt ? "top" : null,
                todos: tl,
                todosLive: ta,
                provisionalTodo: tr,
                agents: ts,
            }),
            (0, a.jsxs)("div", {
                className: cO.JX,
                children: [
                    (0, a.jsx)(nC.Ch, {
                        ref: C,
                        onScroll: z,
                        scrollbarGutter: eJ ? "both-edges" : "stable",
                        className: [cO.N$, P ? null : cO.hB, eK ? cO.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rF.Fu.Provider, {
                            value: d,
                            children: (0, a.jsx)(cv, {
                                projectId: d,
                                messages: x,
                                emptyState: eZ,
                                floatingSettingsMessageId: ez?.id,
                                liveClarificationId: eC?.id,
                                onPickIdea: ec ? ee : void 0,
                                onAskForIdeas: ec ? el : void 0,
                                draftHasText: et,
                                onApprovePlan: ec ? e5 : void 0,
                                onRestoreVersion: eo || e3 ? void 0 : g,
                                scrollerRef: C,
                                stickToBottomRef: M,
                                pinned: T,
                                onUnpin: R,
                                handleRef: A,
                                onShowsLatestChange: D,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cO.NJ,
                        children: (0, a.jsx)(cD, {
                            projectId: d,
                            thinking: e3,
                            turnStartedAt: e7,
                            restoring: eo,
                            remixStartedAt: Y,
                            recalling: eJ,
                            thinkingActivity: b,
                            compacting: y,
                            saving: k,
                            projectUsage: j,
                            connState: v,
                        }),
                    }),
                    w
                        ? (0, a.jsx)("div", { ref: eV, className: cO.B5, children: (0, a.jsx)(rp, { projectId: d }) })
                        : null,
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eV,
                              className: eK ? `${cO.B5} ${cO.J9}` : cO.B5,
                              children:
                                  null != eC.install_scope_switch
                                      ? (0, a.jsx)(
                                            rx,
                                            {
                                                projectId: d,
                                                clarification: eC,
                                                offer: eC.install_scope_switch,
                                                onKept: ev,
                                            },
                                            eC.id,
                                        )
                                      : (0, a.jsx)(
                                            rt,
                                            {
                                                projectId: d,
                                                clarification: eC,
                                                onSubmit: ec ? er : void 0,
                                                onDismiss: ev,
                                            },
                                            eC.id,
                                        ),
                          }),
                    null == eN
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eV,
                              className: cO.B5,
                              children: (0, a.jsx)(
                                  ln,
                                  { projectId: d, request: eN, canSend: ec, onDismiss: e_, onSent: eA ? eT : void 0 },
                                  eN.id,
                              ),
                          }),
                    null == eU
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eC && null == eN ? eV : void 0,
                              className: cO.B5,
                              children: (0, a.jsx)(
                                  rR,
                                  { askId: eG?.id, projectId: d, request: eU, onDismiss: eB },
                                  eG?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cO.Jx,
                children: [
                    (0, a.jsx)(n0, {
                        onJumpToActivity: O,
                        line: tn,
                        placement: e3 && "bottom" === tt ? "bottom" : null,
                        todos: tl,
                        todosLive: ta,
                        provisionalTodo: tr,
                        agents: ts,
                    }),
                    0 === K.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cO.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eb.intl.formatToPlainString(ej.default["7b49dS"], {
                                          count: K.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eb.intl.string(ej.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(h.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eb.intl.string(ej.default["/zOv9+"]),
                                      onClick: () => G(d),
                                  }),
                              ],
                          }),
                    null == X
                        ? null
                        : (0, a.jsx)("div", {
                              className: cO.qB,
                              children: (0, a.jsx)(nA.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: X.message,
                                  action: X.retry,
                              }),
                          }),
                    null == V
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cO.Db,
                              children: [
                                  (0, a.jsx)(nA.w, { type: "warning", role: "status", message: V.message }),
                                  (0, a.jsx)("div", {
                                      className: cO.jU,
                                      children: (0, a.jsx)(tF.m, {
                                          text: eb.intl.string(eb.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tX.K, {
                                              "aria-label": eb.intl.string(eb.t.WAI6xu),
                                              icon: tT.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: V.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == W
                        ? null
                        : (0, a.jsx)("div", {
                              className: cO.qB,
                              children: (0, a.jsx)(nA.w, {
                                  type: W.blocked ? "critical" : "warning",
                                  role: W.blocked ? "alert" : "status",
                                  message: W.message,
                              }),
                          }),
                    (0, a.jsx)(
                        uC,
                        {
                            projectId: d,
                            canSend: ec,
                            running: e3,
                            restoring: eo,
                            onSend: Z,
                            hasPendingContext: K.annotations.length > 0,
                            onInterrupt: ec ? J : void 0,
                            onUploadFile: ei,
                            onImport: p,
                            onSendToOtherProjects: eX ? void 0 : ew.open,
                            onApprove: e4,
                            suggestion: e1,
                            questionOpen: eX,
                            modelSettings: S,
                            onModelSettingsChange: ea,
                            onDraftHasTextChange: en,
                            inputLocked: w,
                            aiPaused: W?.blocked === !0,
                        },
                        eQ,
                    ),
                ],
            }),
        ],
    });
}
var cU = n(761508),
    cB = n(933294),
    cK = n(207438),
    cH = n(683438),
    cV = n(721507);
function cW(e, t) {
    return String(e).padStart(t, "0");
}
function cX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${cW(l.getHours(), 2)}:${cW(l.getMinutes(), 2)}:${cW(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${cW(l.getMilliseconds(), 3)}` : r;
}
var cY = n(667931);
let cQ = {
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
    cZ = { running: "Running", ok: "Done", error: "Failed" };
function cJ(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function c0(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function c1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function c2(e) {
    return c0(e.count > 1 ? e.totalMs : e.end - e.start);
}
let c3 = ["Arguments", "Result", "Usage", "Details"];
function c7(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function c4(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function c5(e) {
    let t = (0, cY.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, cY.lp)(e) ? "interrupted" : "still running";
}
function c6(e) {
    return [cX(new Date(e.started_at).toISOString()) ?? "", c1(e.spans.length), (0, cY.Sj)((0, cY.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function c8(e) {
    let t = (0, cY.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cY.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += c9(r, "in")),
                (l.output += c9(r, "out")),
                (l.cacheRead += c9(r, "cache_read")),
                (l.cacheWrite += c9(r, "cache_write")),
                (l.costUsd += c9(r, "cost_usd"))));
    }
    let r = cY.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function c9(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var de = n(738188),
    dt = n(430993),
    dn = n(364840),
    dl = n(224640),
    dr = n(20742);
let da = { collapsed: new Set(), revealed: new Set() };
var di = n(872892);
let ds = {
    op: di.Q,
    model: di.i3,
    tool: di.dH,
    setup: di.kc,
    worktree: di.Qx,
    sandbox: di.QH,
    build: di.F1,
    platform: di.Op,
    other: di.fv,
};
function du(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      c1(t.calls, "model call"),
                      `${cJ(t.input)} in`,
                      `${cJ(t.output)} out`,
                      `${cJ(t.cacheRead)} cache read`,
                      `${cJ(t.cacheWrite)} cache write`,
                      c4(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: di.M1,
        children: [
            (0, a.jsx)("div", {
                className: di.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${di.DJ} ${ds[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: di.o1,
                children: cY.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${c0(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: di.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${di.nf} ${ds[e]}` }),
                                (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: cQ[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(u.E, {
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
                : (0, a.jsx)(u.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dc(e) {
    return `conjure-perf-trace-${e}`;
}
function dd(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: di.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(u.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${di.p0} ${s + o > 85 ? di.EU : di.jh}`,
                children: i,
            }),
        ],
    });
}
function df(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: c } = e,
        d = t.children.length > 0,
        f = l ? nF._ : e9.a,
        m = i.useCallback(
            (e) => {
                (e.shiftKey && c(t.key), s(t.key));
            },
            [t.key, c, s],
        ),
        h = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? c(t.key) : o(t.key));
            },
            [t.key, c, o],
        );
    return (0, a.jsxs)(nR.D, {
        tag: "div",
        role: "treeitem",
        id: dc(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": d ? !l : void 0,
        "aria-selected": r,
        className: `${di.$y} ${r ? di.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: di.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    d
                        ? (0, a.jsx)(nR.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: di.ai,
                              onClick: h,
                              children: (0, a.jsx)(f, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: di.YJ }),
                    (0, a.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: di.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${di.nf} ${ds[t.category]}` }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: di.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: di.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(u.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: di.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(de.WarningIcon, { size: "xs", color: "currentColor", className: di.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dd, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${di.M0} ${di.Nh}`
                    : t.running
                      ? `${di.M0} ${di.rF}`
                      : `${di.M0} ${ds[t.category]}`,
                duration: c2(t),
            }),
        ],
    });
}
function dm(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(nR.D, {
        tag: "div",
        role: "treeitem",
        id: dc(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${di.$y} ${l ? di.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: di.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: di.ai,
                        children: (0, a.jsx)(nF._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: di.U9 }),
                    (0, a.jsx)("span", { className: `${di.nf} ${di.dL}` }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: di.MQ,
                        children: c1(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dd, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${di.M0} ${di.ab} ${di.dL}`,
                duration: c0(t.totalMs),
            }),
        ],
    });
}
function dh(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(u.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: di._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: di.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${di.nf} ${ds[t.category]}` }),
                          (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [c7("Start", `+${c0(e.start)}`), c7("Duration", c2(e))];
                      e.count > 1
                          ? t.push(
                                c7("Calls", String(e.count)),
                                c7("Longest call", c0(e.maxMs)),
                                c7("Spread over", c0(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(c7("Self time", c0(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(c7("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(c7("Notes", l.join(", "))),
                          null != e.span.error && t.push(c7("Error", e.span.error)));
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
                              s = "cost_usd" === t ? c4(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), c7(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...c3.flatMap((e) => {
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
                                      : (0, a.jsx)(u.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: di.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(u.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(u.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: di.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(u.E, {
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
function dg(e) {
    let { trace: t } = e,
        n = i.useMemo(() => c8(t), [t]);
    return (0, a.jsx)(du, { stats: n });
}
function dp(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cY.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? da : (0, cY.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cY.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cY.x7)(t)), l((n) => (0, cY._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, cY.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cY.IE)(t, e);
                        null != n && l((e) => (0, cY.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cY.IE)(t, e);
                        null != n && l((e) => (0, cY.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, cY.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, cY.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cY.hB)(t));
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
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: c, toggle: d, reveal: f, expandSubtree: m } = n,
        g = (0, cY.dj)(t),
        p = i.useMemo(() => (0, cY.nF)(g), [g]),
        x = p.length > 1 ? ((p[1] - p[0]) / g) * 100 : 100,
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
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) d(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    d(a.key);
                }
                (e.preventDefault(),
                    null != t && (c(t.key), document.getElementById(dc(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, c, o, d],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(dt.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: di.z,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: c5(t),
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: c6(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${c1(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dg, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: di.KE,
                        children: [
                            (0, a.jsx)(h.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(h.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(h.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(u.E, {
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
                        "aria-activedescendant": null == o ? void 0 : dc(o),
                        className: di.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(x) },
                        onKeyDown: v,
                        children: [
                            (0, a.jsxs)("div", {
                                className: di.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: di.So,
                                        children: (0, a.jsx)(u.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: di.c1,
                                        children: p.map((e) =>
                                            (0, a.jsx)(
                                                u.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${di.io} ${(e / g) * 100 > 85 ? di.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / g) * 100),
                                                    },
                                                    children: 0 === e ? "0" : c0(e),
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
                                          df,
                                          {
                                              node: e.node,
                                              extent: g,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: c,
                                              onToggle: d,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(dm, { row: e, extent: g, selected: e.key === o, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(dn.j, { children: (0, a.jsx)(dh, { node: s }) }),
        ],
    });
}
function dx(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, m.bG)([o6.A], () => o6.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dl.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(dr.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(dt.c, {
                      children: (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dp, { trace: i }),
        ],
    });
}
let dv = { running: di.Vf, ok: di.mo, error: di.Sr };
function dj(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${di.Om} ${dv[t]}`, role: "img", "aria-label": cZ[t] });
}
function db(e, t) {
    (0, eE.openModal)((n) => (0, a.jsx)(dx, { ...n, projectId: e, traceId: t }));
}
function dy(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => db(t, n.id), [t, n.id]);
    return (0, a.jsxs)(nR.D, {
        className: di.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: di.sU,
                children: [
                    (0, a.jsx)(dj, { status: (0, cY.lQ)(n) }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: di._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: c5(n),
                    }),
                ],
            }),
            (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: c6(n) }),
            null == l
                ? null
                : (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dk(e) {
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
            (0, cV.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(e4.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: e4.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(e5.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(e6.rX, {
                    children: (0, a.jsx)(e6.Dr, {
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
                icon: ix.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dw(e) {
    let { projectId: t } = e,
        n = (0, m.yK)([o6.A], () => o6.A.getTimingTraces(t), [t]),
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
        c = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(c8);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cY.BF.map((e) => ({
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
              className: di.Ie,
              children: [
                  (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(u.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: di.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: di.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: di.fH,
                              children: (0, a.jsx)(cH.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dk, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nC.Ch, {
                      className: di.XG,
                      children: [
                          (0, a.jsx)(du, { stats: c }),
                          0 === o.length
                              ? (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: di.p_,
                                    "aria-label": "Traces",
                                    children: o.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dy, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dS(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dN(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dC(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dA(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dI(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dE(e) {
    return eb.intl.string("preview" === e ? ej.default["2yLYlG"] : ej.default.eiAi57);
}
let dM = ["all", "preview", "stable", "web"];
function d_(e) {
    switch (e.reason) {
        case "local":
            return eb.intl.string(ej.default.mUeKML);
        case "unconfigured":
            return eb.intl.string(ej.default.bGefb5);
        case "unauthorized":
            return eb.intl.string(ej.default.KLx6Bb);
        default:
            return null != e.detail
                ? eb.intl.formatToPlainString(ej.default.t09Q6q, { detail: e.detail })
                : eb.intl.string(ej.default["t+tG59"]);
    }
}
function dT(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eb.intl.formatToPlainString(ej.default["XO/bN4"], {
              p50: dS(e.memory_p50_bytes ?? 0),
              p999: dS(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dP = {
    db: () => ej.default["7l+DFG"],
    db_preview: () => ej.default.FAuffi,
    runtime: () => ej.default["Gkl+ab"],
    runtime_preview: () => ej.default.ynpJzv,
    bot: () => ej.default["5/i0cj"],
    bot_preview: () => ej.default.m2jsnw,
};
var dR = n(911608),
    dL = n(177427);
function d$(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dL.KE,
        children: [
            (0, a.jsx)("div", {
                className: dL.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(o.y, { type: o.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eb.intl.string(ej.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eb.intl.formatToPlainString(ej.default.INVO50, { time: dA(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(h.$, { variant: "secondary", size: "sm", text: eb.intl.string(ej.default.oKEgiu), onClick: l }),
        ],
    });
}
function dq(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dL.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(u.E, { variant: "text-xs/semibold", color: "text-muted", className: dL.Gf, children: t }),
            n,
        ],
    });
}
function dD(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dL.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dL.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dL.kS,
                        children: [i, (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dL.kS,
                        children: [
                            s,
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function dF(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dL.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dL.x7,
                children: [
                    (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dR.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dL.dh : void 0,
            }),
        ],
    });
}
function dO(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dD, {
            label: eb.intl.string(ej.default.SXP7pD),
            value: eb.intl.string(ej.default.E5hKVi),
            hint: d_(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dD, {
            label: eb.intl.string(ej.default.SXP7pD),
            value: "\u2014",
            hint: eb.intl.string(ej.default.AGvoMJ),
        });
    let l = dT(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dD, { label: eb.intl.string(ej.default["H/X+FI"]), value: dN(n.cpu_ms) }),
            null != l && (0, a.jsx)(dD, { label: eb.intl.string(ej.default.lmFmMO), value: l }),
        ],
    });
}
function dz(e) {
    let { analytics: t } = e,
        n = eb.intl.string(ej.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dq, {
            title: n,
            children: (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: d_(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dP[t] : null) ? eb.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dq, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(u.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eb.intl.string(ej.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dD,
                          {
                              label: n,
                              value: eb.intl.formatToPlainString(ej.default["w/2voO"], { cpu: dN(t.cpu_ms) }),
                              hint: dT(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dG = n(678708),
    dU = n(414499),
    dB = n(714800),
    dK = n(81466),
    dH = n(424383),
    dV = n(664121),
    dW = n(816943),
    dX = n(268791),
    dY = n(514042),
    dQ = n(872351),
    dZ = n(708988),
    dJ = n(150934),
    d0 = n(417270);
let d1 = "Restart Agent",
    d2 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function d3(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function d7(e, t) {
    return { label: e, value: null != t && "" !== t ? dA(t) : "Unknown", icon: "calendar" };
}
function d4(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function d5(e, t, n, l) {
    let [r, a] = d2[n.status];
    return { label: e, value: `${d4(n.bytes)} of ${d4(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function d6(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dA(e.at);
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
let d8 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d9(e) {
    let t = `container ${d3(e.local)} \xb7 remote ${d3(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: d8[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dC(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dC(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dC(n)} Ahead, ${dC(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fe = ["main", "wip"];
var ft = n(400154);
let fn = {
        checkout: dG.FolderIcon,
        edit: lr.PencilIcon,
        remote: dU.h,
        commits: dB.e,
        calendar: dK.CalendarIcon,
        save: dH.L,
        objects: dV.R,
        download: dW.$,
        size: dX.$,
        file: dY.FileIcon,
    },
    fl = {
        ok: [rE.y, t2.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [de.WarningIcon, t2.A.colors.ICON_FEEDBACK_WARNING],
        error: [sQ.a, t2.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dQ.z, t2.A.colors.ICON_MUTED],
        behind: [dZ.M, t2.A.colors.ICON_MUTED],
    };
function fr(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, m.bG)([o6.A], () => o6.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cK.DK)(t), [t]),
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
                    `Updated ${dA(r)}`,
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
    return (0, a.jsxs)(dq, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: ft.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(u.E, {
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
                    if (!e.running || null != e.localError) return [d6(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            d6(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dC(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fe.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d9))
                        : l.push(
                              { label: "Main", value: d3(e.heads.main), icon: "remote" },
                              { label: "WIP", value: d3(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dC(e.commits) : "Unknown", icon: "commits" },
                            d7("Oldest Commit", e.oldest),
                            d7("Newest Commit", e.newest),
                            d6(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dC(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dC(t.loose)} loose (${dS(t.looseBytes)}) \xb7 ${dC(t.packed)} packed in ${n} (${dS(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dC(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dC(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                d5(
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
                                  d5("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fn[r],
                        [u, o] = null != i ? fl[i] : [null, void 0];
                    return (0, a.jsx)(
                        dD,
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
function fa(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: o,
            restart: c,
        } = (function (e) {
            let t = (0, m.bG)([o6.A], () => o6.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cK.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = o6.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cK.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                og.h.dispatch({
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
            let u = i.useCallback(() => (0, cK.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: d1,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eg.A)({ title: o.title, subtitle: o.body, confirmText: o.confirm, variant: "critical", onConfirm: c });
        }, [o, c]);
    return (0, a.jsxs)("div", {
        className: ft.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: ft.nM,
                children: [
                    (0, a.jsx)(dJ.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(h.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: d0.RetryIcon,
                        text: d1,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(u.E, {
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
                            return `Restarted \xb7 new instance since ${dA(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dA(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fi(e, t) {
    return (0, a.jsx)(dD, {
        label: e,
        value: eb.intl.formatToPlainString(ej.default.yHJxuP, { count: dC((0, c_.aM)(t)) }),
        hint: `${dC(t.input_tokens)} in \xb7 ${dC(t.output_tokens)} out \xb7 ${dC(t.cache_read_input_tokens)} cache read`,
    });
}
function fs(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        c,
        d,
        f,
        g,
        { projectId: p, status: x, fetchState: v, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: S,
            turnRunning: N,
            handleForceCompaction: C,
            handleForceCompactionOverride: A,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: M,
            session: _,
            contextCeiling: T,
        } = ((t = (0, m.bG)([o6.A], () => o6.A.getLastTurnUsage(p), [p])),
        (n = (0, m.bG)([o6.A], () => o6.A.getLastCompaction(p), [p])),
        (l = (0, m.bG)([o6.A], () => o6.A.getLastCompactionDecline(p), [p])),
        (r = (0, m.bG)([o6.A], () => o6.A.getForceCompactionState(p), [p])),
        (s = (0, m.bG)([o6.A], () => o6.A.getSandboxRestartState(p), [p])),
        (o = (0, m.bG)([ri.A], () => ri.A.isThinking(p), [p])),
        (c = i.useCallback(() => (0, cK.Lj)(p), [p])),
        (d = i.useCallback(() => (0, cK.Lj)(p, !0), [p])),
        (f = i.useCallback(() => (0, cK.bq)(p), [p])),
        (g = x?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: o,
            handleForceCompaction: c,
            handleForceCompactionOverride: d,
            handleRestartWorkspace: f,
            lifetime: x?.agent?.lifetime ?? null,
            limits: g,
            session: x?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? g?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: ft.Mf,
        children: [
            (0, a.jsx)(d$, { generatedAt: x?.generated_at ?? null, fetchState: v, onRefresh: j }),
            (0, a.jsx)(dq, {
                title: eb.intl.string(ej.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eb.intl.string(ej.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dD, {
                                      label: eb.intl.string(ej.default["9nqym2"]),
                                      value: dC((0, c_.a7)(E.cost_usd)),
                                      hint: eb.intl.formatToPlainString(ej.default.NCdUIh, { count: dC(E.turns) }),
                                  }),
                                  fi(eb.intl.string(ej.default.xtxP0e), E.orchestrator),
                                  fi(eb.intl.string(ej.default["9Sj3SX"]), E.codegen),
                                  fi(eb.intl.string(ej.default.ANCEo3), (0, c_.wU)(E.compaction)),
                                  x?.agent?.outcomes != null &&
                                      Object.keys(x.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dD, {
                                          label: eb.intl.string(ej.default.SQHm7C),
                                          value: Object.entries(x.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dC(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dq, {
                title: eb.intl.string(ej.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eb.intl.string(ej.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fi(eb.intl.string(ej.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(dD, {
                                      label: eb.intl.string(ej.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, c_.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dq, {
                title: eb.intl.string(ej.default.NbRk9a),
                children: [
                    null != y && null != T
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dF, {
                                      label: eb.intl.string(ej.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: T,
                                      formatValue: dC,
                                  }),
                                  (0, a.jsx)(dD, {
                                      label: eb.intl.string(ej.default.mRbSns),
                                      value: `${dC(y.tokensBefore)} \u{2192} ${dC(y.tokensAfter)}`,
                                      hint: eb.intl.formatToPlainString(ej.default.Vq3skS, {
                                          count: dC(y.retainedMessages),
                                          time: dA(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != T
                                      ? eb.intl.formatToPlainString(ej.default.GMLCNv, { ceiling: dC(T) })
                                      : eb.intl.string(ej.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(dD, {
                            label: eb.intl.string(ej.default["4BX5KK"]),
                            value: `${dC(k.projected)} / ${dC(k.threshold)}`,
                            critical: !0,
                            hint: eb.intl.formatToPlainString(ej.default["6ngCax"], { time: dA(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: ft.Lj,
                        children: [
                            (0, a.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eb.intl.string(ej.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: C,
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eb.intl.string(ej.default.wox6Ev);
                                    if ("pending" === e) return eb.intl.string(ej.default.OcPHQ1);
                                    let t = dA(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return eb.intl.formatToPlainString(ej.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? ej.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? ej.default.YZb4hK
                                              : ej.default.ZoUSVK;
                                    return eb.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(w),
                            }),
                            "object" == typeof w &&
                                !0 === w.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(h.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eb.intl.string(ej.default.ZxG2AI),
                                            onClick: A,
                                        }),
                                        (0, a.jsx)(u.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: eb.intl.string(ej.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ft.Lj,
                        children: [
                            (0, a.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eb.intl.string(ej.default["5qCjBu"]),
                                loading: "pending" === S,
                                disabled: "pending" === S || N,
                                onClick: I,
                            }),
                            (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof S && "restarted" !== S.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eb.intl.string(ej.default.mlok8D);
                                    if ("pending" === e) return eb.intl.string(ej.default["1ugSyK"]);
                                    let t = dA(e.observedAt);
                                    return eb.intl.formatToPlainString(
                                        "restarted" === e.outcome ? ej.default["76mfqO"] : ej.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(S),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fa, { projectId: p }),
                ],
            }),
            (0, a.jsx)(fr, { projectId: p }),
            (null != _ || x?.analytics != null) &&
                (0, a.jsxs)(dq, {
                    title: eb.intl.string(ej.default.EsSzCS),
                    children: [
                        null != _ &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dD, {
                                        label: eb.intl.string(ej.default.CLXHAs),
                                        value: dA(_.instance_since),
                                        hint: eb.intl.string(ej.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dD, {
                                        label: eb.intl.string(ej.default["8V8e1Z"]),
                                        value: dC(_.sockets),
                                    }),
                                    (0, a.jsx)(dD, {
                                        label: eb.intl.string(ej.default["4pBzYW"]),
                                        value: _.turn_inflight
                                            ? eb.intl.string(ej.default.Wv025I)
                                            : eb.intl.string(ej.default["7/lsFY"]),
                                    }),
                                    _.queued_messages > 0 &&
                                        (0, a.jsx)(dD, {
                                            label: eb.intl.string(ej.default["3oUYnv"]),
                                            value: dC(_.queued_messages),
                                        }),
                                ],
                            }),
                        x?.analytics != null && (0, a.jsx)(dO, { analytics: x.analytics }),
                    ],
                }),
            null != M &&
                (0, a.jsxs)(dq, {
                    title: eb.intl.string(ej.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dD, {
                            label: eb.intl.string(ej.default.IlDBN3),
                            value: dC(M.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dD, {
                            label: eb.intl.string(ej.default["ZdzKR+"]),
                            value: eb.intl.formatToPlainString(ej.default.yHJxuP, {
                                count: dC(M.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(dD, {
                            label: eb.intl.string(ej.default.cIhN2W),
                            value: eb.intl.formatToPlainString(ej.default.yHJxuP, {
                                count: dC(M.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dD, {
                            label: eb.intl.string(ej.default["+fOn/q"]),
                            value: dC(M.max_user_message_chars),
                        }),
                        (0, a.jsx)(dD, { label: eb.intl.string(ej.default.kIHga0), value: dC(M.max_build_attempts) }),
                        (0, a.jsx)(dD, { label: eb.intl.string(ej.default.Iw03yW), value: dC(M.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fu = n(237528),
    fo = n(629584),
    fc = n(531893);
function fd(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fc.ut,
              children: (0, a.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eb.intl.string(ej.default.h1SE6R),
              }),
          });
}
function ff(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fc.qf,
              children: [
                  (0, a.jsx)(u.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eb.intl.string(ej.default.h1SE6R),
                  }),
                  (0, a.jsx)(u.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eb.intl.string(ej.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fc.qf,
              children: [
                  (0, a.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fm(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fc.ps,
              children: (0, a.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eb.intl.string(ej.default.V7Ri8H),
              }),
          })
        : null;
}
var fh = n(109079);
let fg = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        o = i.useId(),
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
        className: fh.vK,
        children: [
            (0, a.jsx)(u.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fh.Mt,
                selectable: !0,
                children: cX(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(u.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fh.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fh.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fh.Cq, children: (0, a.jsx)(fu.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fh.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fu.v, {
                                text: eb.intl.string(ej.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != c
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== c.prefix &&
                                      (0, a.jsxs)(u.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: d,
                                          selectable: !0,
                                          children: [c.prefix, " "],
                                      }),
                                  (0, a.jsxs)(nR.D, {
                                      className: fh.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": eb.intl.string(ej.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(e9.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nF._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(u.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  c.marker,
                                                  " ",
                                                  eb.intl.formatToPlainString(
                                                      "[\u2026]" === c.marker
                                                          ? ej.default.kUhyUv
                                                          : ej.default["N+fphl"],
                                                      { count: c.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(u.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: d,
                                          className: fh.dF,
                                          selectable: !0,
                                          id: o,
                                          children: c.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(u.E, {
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
function fp(e) {
    let { projectId: t } = e,
        n = (0, m.bG)([cB.A], () => cB.A.getLogs(t), [t]),
        l = (0, m.bG)([cB.A], () => cB.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [o, c] = i.useState(""),
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
        h = i.useRef(!0);
    i.useEffect(() => {
        h.current && f.current?.scrollToBottom();
    }, [d]);
    let g = i.useCallback(() => {
            let e = f.current;
            null != e && (h.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = i.useMemo(
            () =>
                dM.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dE(e);
                            case "web":
                                return eb.intl.string(ej.default.IVzfVV);
                            default:
                                return eb.intl.string(ej.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: fh.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fh.y4,
                children: [
                    (0, a.jsx)(fo.I, {
                        look: "pill",
                        "aria-label": eb.intl.string(ej.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fh.KT,
                        children: (0, a.jsx)(cH.I, {
                            query: o,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: eb.intl.string(ej.default["m2+37Y"]),
                            "aria-label": eb.intl.string(ej.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(fd, { state: l }),
            (0, a.jsxs)(nC.Ch, {
                ref: f,
                onScroll: g,
                overflow: "auto",
                className: fh.sx,
                children: [
                    (0, a.jsx)(fm, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(ff, {
                              state: l,
                              emptyTitle: eb.intl.string(ej.default.S7qlPG),
                              emptyBody: eb.intl.string(ej.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eb.intl.string(ej.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(fg, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fx(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dq, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(u.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eb.intl.string(ej.default.umcjif),
                      }),
        })
    );
}
function fv(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dD, {
                      label: eb.intl.formatToPlainString(ej.default["01ZMS4"], { env: dE(n) }),
                      value: ((t = l.connected), eb.intl.string(t ? ej.default.Wv025I : ej.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dD, {
                      label: eb.intl.string(ej.default["z1dh+F"]),
                      value: dC(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dA(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dD, { label: eb.intl.string(ej.default.Iz5GnJ), value: dC(l.guild_count) }),
                  (0, a.jsx)(dD, {
                      label: eb.intl.string(ej.default["7UqtNv"]),
                      value: dC(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? eb.intl.formatToPlainString(ej.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dA(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dD, {
                          label: eb.intl.string(ej.default["x3+JXJ"]),
                          value: dC(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dD, { label: dE(n), value: eb.intl.string(ej.default.lTHQss) });
}
function fj(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dD, {
        label: dE(t),
        value: eb.intl.formatToPlainString(ej.default["Xq+wHT"], {
            requests: dC(n.requests),
            failures: dC(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? eb.intl.formatToPlainString(ej.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dA(n.last_failure.at),
                  })
                : eb.intl.formatToPlainString(ej.default["7KlGT6"], { time: dA(n.since) }),
    });
}
function fb(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dD, {
                label: eb.intl.formatToPlainString(ej.default["92gVTm"], { env: dE(t) }),
                value: dC(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dD,
                    {
                        label: eb.intl.formatToPlainString(ej.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? eb.intl.formatToPlainString(ej.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? eb.intl.formatToPlainString(ej.default.wxAWNv, { time: dA(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fy(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dD, {
        label: dE(t),
        value: eb.intl.formatToPlainString(ej.default.suAOj9, { calls: dC(n.calls), errors: dC(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fk(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dq, {
            title: t,
            children: (0, a.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eb.intl.string(ej.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dq, {
        title: t,
        children: [
            (0, a.jsx)(dD, {
                label: eb.intl.string(ej.default.xtD4Zp),
                value: dC(n.requests),
                hint: eb.intl.formatToPlainString(ej.default["7KlGT6"], { time: dA(n.since) }),
            }),
            (0, a.jsx)(dD, { label: eb.intl.string(ej.default.gfRhR3), value: dC(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dF, {
                              label: eb.intl.string(ej.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dN,
                          }),
                          (0, a.jsx)(dD, {
                              label: eb.intl.string(ej.default.mSKImM),
                              value: dN(r),
                              hint: eb.intl.formatToPlainString(ej.default.JqMU05, {
                                  total: dN(n.cpu_ms_total),
                                  wall: dN(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dD, {
                      label: eb.intl.string(ej.default.LEJ5r3),
                      value: eb.intl.string(ej.default["2Ekb2b"]),
                      hint: eb.intl.string(ej.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dD, { label: eb.intl.string(ej.default.xvmL1D), value: dN(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dD, {
                    label: eb.intl.string(ej.default["4sQYwH"]),
                    value: dC(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(dD, {
                label: eb.intl.string(ej.default.bQenOy),
                value: dC(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: eb.intl.formatToPlainString(ej.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dD, { label: eb.intl.string(ej.default.xgpn4Y), value: dI(n.build) }),
        ],
    });
}
function fw(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: eb.intl.string(ej.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: eb.intl.string(ej.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: eb.intl.string(ej.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dq, {
        title: eb.intl.string(ej.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dD, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dD, {
                                  label: eb.intl.formatToPlainString(ej.default.u7kJJ4, { env: n }),
                                  value: dS(l.r2_bytes),
                                  hint: eb.intl.formatToPlainString(
                                      l.r2_truncated ? ej.default.lH0oQw : ej.default.m9h02S,
                                      { count: dC(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dF, {
                                      label: eb.intl.formatToPlainString(ej.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dS,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fS(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: ft.Mf,
        children: [
            (0, a.jsx)(d$, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fk, {
                            title: eb.intl.string(ej.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fk, {
                            title: eb.intl.string(ej.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fw, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fx, {
                                title: eb.intl.string(ej.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fv, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fx, {
                                title: eb.intl.string(ej.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fj, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fx, {
                                title: eb.intl.string(ej.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fb, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fx, {
                                title: eb.intl.string(ej.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fy, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dz, { analytics: t.analytics }),
                        (0, a.jsxs)(dq, {
                            title: eb.intl.string(ej.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dD, {
                                    label: eb.intl.string(ej.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dI(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dD, {
                                    label: eb.intl.string(ej.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dI(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fN = n(592465);
function fC(e) {
    let { projectId: t, onClose: n } = e,
        l = eC(),
        [r, s] = i.useState(() => (l && ew?.projectId === t ? "trace" : "logs")),
        u = (0, m.bG)([o6.A], () => o6.A.getStatus(t), [t]),
        o = (0, m.bG)([o6.A], () => o6.A.getFetchState(t), [t]),
        c = i.useCallback(() => {
            ((0, cK.R7)(t), (0, cK.DK)(t));
        }, [t]);
    (i.useEffect(() => c(), [c]), i.useEffect(() => (0, ex.subscribeDebugBacklog)(t), [t]));
    let d = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ew || ew.projectId !== e) return null;
            let { traceId: t } = ew;
            return ((ew = null), t);
        })(t);
        return null != e && (db(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        d();
    }, [d]),
        eS(t, () => {
            d() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, oO.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: o6.A.getStatus(t),
                        last_turn_usage: o6.A.getLastTurnUsage(t),
                        last_compaction: o6.A.getLastCompaction(t),
                        last_compaction_decline: o6.A.getLastCompactionDecline(t),
                        timing_traces: o6.A.getTimingTraces(t),
                        logs: cB.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ep.P0)({ text: eb.intl.string(ej.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = eb.intl.string(ej.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fN.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(tR.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tR.Ay.Icon, {
                            icon: oq.CopyIcon,
                            tooltip: eb.intl.string(ej.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(tR.Ay.Icon, { icon: tT.P, tooltip: eb.intl.string(eb.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tR.Ay.ChannelIcon, { icon: oF.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tR.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fN.rf,
                children: [
                    (0, a.jsxs)(cU.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": eb.intl.string(ej.default.RvvWIh),
                        className: fN.vR,
                        children: [
                            (0, a.jsx)(cU.V.Item, { id: "logs", children: eb.intl.string(ej.default["+VRYCm"]) }),
                            (0, a.jsx)(cU.V.Item, { id: "worker", children: eb.intl.string(ej.default["50D0FZ"]) }),
                            (0, a.jsx)(cU.V.Item, { id: "agent", children: eb.intl.string(ej.default.UkbTK1) }),
                            l ? (0, a.jsx)(cU.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fp, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fS, { status: u, fetchState: o, onRefresh: c })
                          : "trace" === r && l
                            ? (0, a.jsx)(dw, { projectId: t })
                            : (0, a.jsx)(fs, { projectId: t, status: u, fetchState: o, onRefresh: c }),
                ],
            }),
        ],
    });
}
var fA = n(365912),
    fI = n(873715);
function fE(e) {
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
let fM = Object.freeze({ x: -1, y: -1 });
function f_(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fE(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fT = n(192888);
function fP(e, t) {
    return (0, fT.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(f_, () => ({ status: "failed" }));
}
var fR = n(108308);
let fL = { x: 25, y: 21 };
function f$(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fq(e, t, n, l) {
    let r = f$(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fD(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fF(e) {
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
function fO(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        o = null != n && n === l ? t : null,
        { active: c, annotations: d } = H(o),
        f = (0, eA.Zv)(o),
        g = (0, eE.useHasAnyModalOpen)(),
        p = (0, m.bG)([lh.default], () => lh.default.getCurrentUser()),
        x = p?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [S, N] = i.useState(null),
        [C, R] = i.useState(!1),
        L = i.useRef(null),
        $ = i.useRef(null),
        q = i.useRef(null),
        [O, z] = i.useState(null),
        [K, V] = i.useState(!1),
        [W, X] = i.useState(null),
        [Y, Q] = i.useState(null),
        Z = i.useRef(!1),
        [J, ee] = i.useState(!1),
        [et, en] = i.useState(null),
        el = c && !f && !g;
    null == W || (el && W.projectId === o) || X(null);
    let er = W?.projectId ?? null;
    i.useEffect(() => {
        if (null != er) return () => (0, n2.xJ)(er, "design");
    }, [er]);
    let ea = tV(r, el);
    i.useEffect(() => {
        if (!el || null == o) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fI.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fF(t.response) : null;
                    null == n ? w(!0) : (j(n), U(o, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [el, r, o]);
    let ei = i.useRef(null);
    (i.useEffect(() => {
        if (!el || null == ea || null == o) return;
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
                    (0, fI.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ef.current) return;
                        let l = fF(e.response);
                        null != l && (j(l), U(o, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fE(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = D(o)).active &&
                                0 !== r.size &&
                                F(o, {
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
        i.useEffect(() => {
            if (!el)
                return () => {
                    (N(null), X(null), en(null), j(null));
                };
        }, [el]));
    let eu = i.useRef(null),
        ec = i.useRef(null),
        ed = i.useRef(!1),
        ef = i.useRef(!1);
    i.useEffect(() => {
        ((ef.current = el), el || ((eu.current = null), (ec.current = null), (q.current = null), R(!1)));
    }, [el]);
    let em = i.useCallback(
            function e() {
                if (ed.current) return;
                let t = eu.current;
                if (null == t) return;
                eu.current = null;
                let n = r();
                null != n &&
                    ((ed.current = !0),
                    fP(n, t).then((t) => {
                        if (((ed.current = !1), ef.current)) {
                            if ("picked" !== t.status || fH(t.target, ey.current.rect, ey.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && V(!0);
                            else {
                                let e = E(t.target);
                                (z((t) => (fK(t, e) ? t : e)),
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
            if (null == W) return;
            let e = !Z.current;
            (Q({ at: W.at, label: W.label, draft: W.draft, instant: e }), ee(e), X(null));
        }, [W]);
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
            let e = setTimeout(() => Q(null), fU);
            return () => clearTimeout(e);
        }, [Y]));
    let eg = null == v || null == ea || v.viewport.width < 1 ? 1 : ea.width / v.viewport.width,
        ep = null != v || k,
        ev = i.useMemo(() => v?.elements ?? [], [v]),
        ey = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ey.current = { rect: ea, scale: eg };
    }, [ea, eg]);
    let ek = i.useCallback(
            (e, t, n) => {
                null != o &&
                    ((0, n2.xJ)(o, "design"),
                    en(null),
                    (Z.current = !1),
                    X({ projectId: o, target: e, anchor: t, draft: "", at: n, label: E(e) }));
            },
            [o],
        ),
        ew = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / eg, y: (e.clientY - t.top) / eg }), [eg]),
        eS = i.useCallback(() => {
            let e = q.current;
            if (null == e) return;
            let t = L.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = $.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(eS);
    let eN = i.useCallback(
            (e) => {
                if (null == ea || null != et) return;
                if (((q.current = { x: e.clientX, y: e.clientY }), eS(), R(!0), null != W)) {
                    (Math.abs(e.clientX - W.at.x) > fB || Math.abs(e.clientY - W.at.y) > fB) && (Z.current = !0);
                    return;
                }
                if (!ep) return void N(null);
                let t = ew(e, ea);
                if (K) {
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
                        })(ev, t.x, t.y),
                        n = null != e && fH(e, ea, eg) ? null : e;
                    if (null != n) {
                        let e = E(n);
                        z((t) => (fK(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ec.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ec.current = n), (eu.current = n), em());
            },
            [ea, eg, ep, ew, K, ev, W, et, eS, em],
        ),
        eC = null == et ? null : d.find((e) => e.id === et.id),
        eI = el && (C || W?.target.marker != null || eC?.target.marker != null);
    i.useEffect(() => {
        if (eI)
            return () => {
                let e = r();
                null != e && fP(e, fM);
            };
    }, [eI, r]);
    let eM = i.useCallback(() => {
        (R(!1), N(null), (ec.current = null), (eu.current = null));
    }, []);
    i.useEffect(() => {
        if (!el || !C || !ep || K || null != W || null != et) return;
        let e = q.current,
            { rect: t, scale: n } = ey.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ec.current = l), (eu.current = l), em());
    }, [el, C, ep, K, W, et, em]);
    let e_ = i.useCallback(
            (e) => {
                if (null != W || null != et) {
                    (eh(), en(null));
                    return;
                }
                if (null == S || null == ea) return;
                let t = ew(e, ea);
                ek(
                    S,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? A
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(S, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [S, ea, ew, W, et, ek, eh],
        ),
        eT = i.useCallback(() => {
            null != o && (N(null), null != es(o) ? eo(o) : G(o));
        }, [o]),
        eP = i.useCallback(() => {
            null != o &&
                (null != W
                    ? eh()
                    : et?.confirmingRemove === !0
                      ? en({ ...et, confirmingRemove: !1 })
                      : null != et
                        ? en(null)
                        : eT());
        }, [o, W, et, eh, eT]),
        eR = i.useRef(eP),
        eL = i.useRef(o),
        e$ = i.useRef(eT);
    i.useLayoutEffect(() => {
        ((eR.current = eP), (eL.current = o), (e$.current = eT));
    });
    let eq = i.useRef(null);
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
            "Escape" === e.key && (e.preventDefault(), eR.current());
        }
        function t(e) {
            let t = e.target;
            !(0, t$.vq)(t) ||
                eq.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fA.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eL.current || null == es(eL.current)) && e$.current());
        }
    }, [el, s]);
    let eD = i.useCallback(
            (e) => {
                if (null == o) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eP());
                    return;
                }
                if (null != W || null != et || 0 === ev.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == S ? -1 : ev.findIndex((e) => e.ref === S.ref);
                    N(ev[(n + (t ? 1 : -1) + ev.length) % ev.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    ek(S, A, { x: (ea?.left ?? 0) + S.rect.x * eg, y: (ea?.top ?? 0) + S.rect.y * eg }));
            },
            [o, W, et, ev, S, ek, eP, ea, eg],
        ),
        eF = i.useCallback(
            (e) => {
                null == o ||
                    null == W ||
                    ((I(W.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, ex.sendUserMessage)(
                            o,
                            (function (e, t) {
                                let { kind: n, name: l } = E(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${T}${r}${P}${_(e)}
${t.trim()}`;
                            })(W.target, W.draft),
                            e,
                        ),
                        eh(),
                        N(null)));
            },
            [o, W, eh],
        ),
        eO = i.useCallback((e) => (null == o ? Promise.reject(Error("no project")) : (0, tD.vX)(o, e)), [o]),
        ez = i.useCallback(() => {
            if (null != o && null != et && null != x && I(et.draft)) {
                var e, t;
                let n, l;
                ((e = et.id),
                    (t = et.draft.trim()),
                    null != (l = (n = D(o)).annotations.find((t) => t.id === e)) &&
                        B(l, x) &&
                        F(o, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    en({ ...et, editing: !1 }));
            }
        }, [o, et, x]),
        eG = i.useCallback(() => {
            if (null != o && null != et && null != x) {
                var e;
                let t, n;
                ((e = et.id),
                    null != (n = (t = D(o)).annotations.find((t) => t.id === e)) &&
                        B(n, x) &&
                        F(o, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    en(null));
            }
        }, [o, et, x]),
        eU = c
            ? b
                ? eb.intl.string(ej.default["Eb/YV9"])
                : k
                  ? eb.intl.string(ej.default.FD30bh)
                  : eb.intl.formatToPlainString(ej.default.dTSqLF, { count: d.length })
            : "",
        eB = el && null != ea,
        eK = C && null == et,
        eH = W?.target ?? eC?.target ?? null,
        eV = W ?? Y,
        eW = W ?? (Y?.instant === !0 ? null : Y),
        eX =
            null != eC && null != ea
                ? (function (e, t) {
                      let { left: n, top: l } = fD(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fq(eC.target, eC.anchor, ea, eg), ea)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eC?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eC;
            fP(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eC, r]),
        (0, tL.createPortal)(
            (0, a.jsxs)("div", {
                ref: eq,
                className: fR.Li,
                children: [
                    (0, a.jsx)(nD.A, {
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
                                      className: fR.MT,
                                      style: { left: ea.left, top: ea.top, width: ea.width, height: ea.height },
                                      "data-plain-cursor": eK ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eb.intl.string(ej.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: eN,
                                      onMouseLeave: eM,
                                      onClick: e_,
                                      onKeyDown: eD,
                                  }),
                                  null != S && null == S.marker && null == W && null == et
                                      ? (0, a.jsx)(fV, { box: f$(S, ea, eg) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: L,
                                      className: fR.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fR.xz,
                                          "data-shown": null != S && null == et && null == W ? "" : void 0,
                                          "data-instant": J ? "" : void 0,
                                          children: (0, a.jsxs)(u.E, {
                                              variant: "text-xs/medium",
                                              className: fR.Ux,
                                              children: [
                                                  null == O
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fR.Tl, children: O.kind }),
                                                  null == O || "" === O.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fR.kh,
                                                            children: [" ", O.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: $,
                                      className: fR.Y,
                                      children: eK ? (0, a.jsx)("div", { className: fR.u }) : null,
                                  }),
                                  null == eW
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fR.aZ,
                                            style: {
                                                transform: `translate3d(${eW.at.x + 20}px, ${eW.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fR.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == W ? "" : void 0,
                                                children: (0, a.jsxs)(u.E, {
                                                    variant: "text-xs/medium",
                                                    className: fR.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fR.Tl,
                                                            children: eW.label.kind,
                                                        }),
                                                        "" === eW.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fR.kh,
                                                                  children: [" ", eW.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eH && null == eH.marker
                                      ? (0, a.jsx)("div", {
                                            className: fR.D0,
                                            style: f$(eH, ea, eg),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fq(e.target, e.anchor, ea, eg),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fR.xL,
                                              style: { ...fD(n, ea), width: 24, height: 24 },
                                              "aria-label": eb.intl.formatToPlainString(ej.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: M(e.target),
                                              }),
                                              "aria-expanded": et?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == W && en(l);
                                              },
                                              onFocus: () => {
                                                  null == W && en(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), eh(), en(l));
                                              },
                                              children: (0, a.jsx)(fz, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eV || null == o
                                      ? null
                                      : (0, a.jsx)(tB, {
                                            projectId: o,
                                            at: { x: eV.at.x + 20, y: eV.at.y + 20 },
                                            bounds: ea,
                                            kind: eV.label.kind,
                                            value: eV.draft,
                                            canSubmit: null != W && I(eV.draft),
                                            onChange: (e) => {
                                                null != W && X({ ...W, draft: e });
                                            },
                                            onSubmit: eF,
                                            onDismiss: eh,
                                            onUploadFile: eO,
                                            closing: null == W,
                                        }),
                                  null != eC && null != et && null != eX
                                      ? (0, a.jsxs)(fG, {
                                            point: eX,
                                            frame: ea,
                                            authorId: eC.authorId,
                                            title: M(eC.target),
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
                                                          label: eb.intl.string(ej.default.KCYqWL),
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
                                                    : (0, a.jsx)(u.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fR.aC,
                                                          children: eC.comment,
                                                      }),
                                                B(eC, x)
                                                    ? (0, a.jsx)("div", {
                                                          className: fR.eB,
                                                          children: et.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(u.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fR.nv,
                                                                            children: eb.intl.string(ej.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(h.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eb.intl.string(ej.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                en({ ...et, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(h.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eb.intl.string(ej.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eG,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(h.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: eb.intl.string(ej.default.friIzR),
                                                                            onClick: () =>
                                                                                en({
                                                                                    ...et,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        et.editing
                                                                            ? (0, a.jsx)(h.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !I(et.draft),
                                                                                  text: eb.intl.string(
                                                                                      ej.default.iicRP9,
                                                                                  ),
                                                                                  onClick: ez,
                                                                              })
                                                                            : (0, a.jsx)(h.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eb.intl.string(
                                                                                      ej.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      en({
                                                                                          ...et,
                                                                                          editing: !0,
                                                                                          draft: eC.comment,
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
function fz(e) {
    let { authorId: t } = e,
        n = (0, m.bG)([lh.default], () => lh.default.getUser(t), [t]);
    return (0, a.jsx)(a7.eu, {
        src: null == n ? null : a5.Ay.getUserAvatarURL(n),
        size: a4._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fG(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: c, frame: d, authorId: f, title: m, testId: h, onDismiss: g, onMouseLeave: p, children: x } = e,
        v = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fL);
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
        { left: s, top: (o = Math.min(Math.max(c.y - b.y, l), r)), originX: c.x - s, originY: c.y - o }),
        C = { left: k, top: w, "--custom-conjure-card-origin-x": `${S}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: v,
        className: fR.Nr,
        style: C,
        "data-testid": h,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), g());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fR.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fR.ip, children: (0, a.jsx)(fz, { authorId: f }) }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fR.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fR.zI, children: x }),
        ],
    });
}
let fU = 300,
    fB = 2;
function fK(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fH(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fV(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fR.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fW = n(659723),
    fX = n(697744),
    fY = n(130324);
function fQ(e) {
    let t = (0, fX.c)(),
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
function fZ(e) {
    let { className: t } = e,
        { Component: n, events: l } = fQ(3e4);
    return (0, a.jsxs)("div", {
        className: f()(t, fY.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: fY.ol,
                children: eb.intl.string(ej.default.AyiQEp),
            }),
        ],
    });
}
var fJ = n(251363),
    f0 = n(944142),
    f1 = n(532247),
    f2 = n(501628);
function f3(e) {
    let { progress: t } = e,
        { Component: n } = fQ(1500),
        l = eN.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: f2.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: f2.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(u.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function f7(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, m.bG)([f0.A], () => (s ? f0.A.getLiveReload(t) : null), [s, t]),
        o = (0, tc.A)(n, r)?.id ?? null,
        c = u?.phase ?? null,
        d = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, f1.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, c] = i.useState(t);
            s !== l && (u(l), c(t), a(null != l || o ? null : (0, f1.QP)(e, s)));
            let d = (0, m.bG)(
                    [eZ.A],
                    () => {
                        let e = eZ.A.getFrame(n);
                        return (0, e3.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                f = i.useRef(d),
                h = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((f.current = d), d && (h.current = !0));
                }, [d]),
                i.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return a(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, fJ.ow)(null, n) && e();
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
        })(c, d, o),
        h = d ? null : (0, f1.h_)(c, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nD.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: f2.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(f3, { progress: h }),
                  })
                : null,
        ],
    });
}
var f4 = n(782134),
    f5 = n(357858),
    f6 = n(317608),
    f8 = n(35367),
    f9 = n(228946),
    me = n(716455);
let mt = { width: 1 / 0, height: 1 / 0 };
function mn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mt;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var ml = n(702083);
function mr(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, m.cf)([td.A], () => ({
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
        c = n ? mn(l, o ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: f()(ml.dw, { [ml.PQ]: null != c }),
        children: (0, a.jsx)("div", { className: f()(ml.R9, { [ml.Vg]: null != c }), style: c ?? void 0, children: t }),
    });
}
var ma = n(347927);
function mi(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: f()(ma.Bf, l && ma.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: ma.Ux,
                children: [
                    (0, a.jsx)(v.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var ms = n(957272);
function mu(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: u } = (0, f8.A)({ applicationId: t, surface: n, launch: l }),
        o = i.useContext(me.A);
    if (((0, f9.A)(t, n), u === f8.n.Launched)) {
        let e = (0, a.jsx)(f6.A, { frameId: s.id, level: o, className: ms.Z7, overlay: r });
        return (0, tf.Q5)(n) ? (0, a.jsx)(mr, { children: e }) : e;
    }
    return (0, a.jsx)(mo, { state: u });
}
function mo(e) {
    let { state: t } = e;
    switch (t) {
        case f8.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: ms.qs,
                children: (0, a.jsx)(mi, {
                    title: eb.intl.string(ej.default["9kpdo7"]),
                    body: eb.intl.string(ej.default.iIA8Nj),
                }),
            });
        case f8.n.NoApplication:
            return (0, a.jsx)(fZ, { className: ms.qs });
        case f8.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: ms.qs,
                children: (0, a.jsx)(mi, {
                    title: eb.intl.string(ej.default["7k4GyN"]),
                    body: eb.intl.string(ej.default.zdIy3R),
                }),
            });
        case f8.n.Error:
            return (0, a.jsxs)("div", {
                className: ms.qs,
                children: [
                    (0, a.jsx)(v.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eb.intl.string(ej.default.lTPbnG),
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: ms.tj,
                        children: eb.intl.string(ej.default.e6GiAZ),
                    }),
                ],
            });
        case f8.n.AwaitingLaunch:
        case f8.n.Loading:
            return (0, a.jsx)("div", { className: ms.qs, children: (0, a.jsx)(o.y, {}) });
    }
}
var mc = n(308528),
    md = n(334738),
    mf = n(688606),
    mm = n(365971),
    mh = n(703462);
function mg(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: mh.f,
        children: [
            (0, a.jsx)(iD.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mp() {
    return (0, a.jsx)("div", { className: mh.f, children: (0, a.jsx)(o.y, {}) });
}
function mx(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        c = (0, m.bG)([lf.A], () => (null != o ? lf.A.getChannel(o) : null), [o]);
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && mc.A.preload(e2.ME, t);
        }, [t]),
        (n = (0, m.bG)([oM.A], () => oM.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mm.Xg)();
            return (
                (0, md.yl)(t, e),
                () => {
                    (0, md.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, f] = i.useState(null),
        h = d === r;
    return (i.useEffect(() => {
        if (null != c || h) return;
        let e = !1;
        return (
            (0, eq.CN)(l).then(
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
    }, [l, r, c, h]),
    h)
        ? (0, a.jsx)(mg, { message: eb.intl.string(ej.default["VP/O8s"]) })
        : null == c
          ? (0, a.jsx)(mp, {})
          : (0, a.jsx)("div", {
                className: mh.g,
                children: (0, a.jsx)(mf.A, { channel: c, guild: null, chatInputType: us.oU.SIDEBAR }, c.id),
            });
}
var mv = n(887909),
    mj = n(570962),
    mb = n(998475);
function my(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: r,
        body: i,
        actions: s,
        nextStep: o,
        appDetails: c,
        hasContentBackground: d,
        noPadding: m,
        obscured: g,
    } = (0, mv.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: mb.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: mb.rf,
                children: (0, a.jsx)(mj.A, {
                    obscured: !0 === g,
                    children: (0, a.jsxs)("div", {
                        className: mb.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: mb.z3,
                                      children: [
                                          (0, a.jsx)(v.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(u.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: l,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            r,
                            (0, a.jsxs)("div", {
                                className: f()(mb.Qs, d ? mb.cw : null, m ? mb.pN : null),
                                children: [i, null == o ? c : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: mb.o1,
                      children: s.map((e, t) => (0, a.jsx)(h.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var mk = n(765671),
    mw = n(666476),
    mS = n(582063);
let mN = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mC() {
    (0, ep.P0)({ text: eb.intl.string(ej.default.jj3abP), variant: "critical" });
}
function mA(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = eb.intl.string(ej.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(e4.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(mI, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: mS.m2,
                        children: (0, a.jsx)(tF.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tX.K, {
                                "aria-label": r,
                                icon: x.SettingsIcon,
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
                accept: mN.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mN.includes(n.type)
                                ? n.size > mw.aI
                                    ? (0, ep.P0)({ text: eb.intl.string(ej.default.T8Spiu), variant: "critical" })
                                    : (0, ad.M$)(t, n).catch(mC)
                                : (0, ep.P0)({ text: eb.intl.string(ej.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mI(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, m.bG)([ac.A], () => ac.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(e5.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": eb.intl.string(ej.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(e6.rX, {
                children: [
                    (0, a.jsx)(e6.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: eb.intl.string(ej.default.uQpDky),
                        icon: lY.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(e6.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: eb.intl.string(ej.default.AiAz8J),
                        icon: d0.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, ad.Og)(t).catch(mC));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(e6.rX, {
                children: (0, a.jsx)(e6.fP, {
                    id: "conjure-overlay-background-blur",
                    label: eb.intl.string(ej.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, ad.Y1)(t, !i) || mC();
                    },
                }),
            }),
        ],
    });
}
function mE(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: i, width: s, height: u } = (0, mk.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: s, height: u }, l);
    return (0, a.jsxs)("div", {
        className: mS.JH,
        children: [
            (0, a.jsx)(am, { projectId: n }),
            (0, a.jsx)("div", {
                ref: i,
                className: mS.dw,
                children: (0, a.jsx)("div", {
                    className: mS.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(mu, { applicationId: t, surface: e3.ZN, frameOverlay: r }),
                }),
            }),
            null != n ? (0, a.jsx)(mA, { projectId: n }) : null,
        ],
    });
}
var mM = n(51909),
    m_ = n(409478),
    mT = n(652227);
function mP(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: s,
            previewGate: u,
            availability: c,
            activeMode: d,
            widgetApplicationId: f,
            overlayWidgetSize: h = eO,
            projectId: g,
            renderFrameOverlay: p,
            paused: x = !1,
            onResume: v,
        } = e,
        j = i.useContext(mM.A),
        b = (0, m.bG)([rr.A], () => null != g && null != rr.A.getSetupStartedAt(g), [g]);
    return u?.type === "checking"
        ? (0, a.jsx)("div", { className: mT.qs, children: (0, a.jsx)(o.y, {}) })
        : u?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: mT.qs,
                children: null == u.authorizeProps ? (0, a.jsx)(o.y, {}) : (0, a.jsx)(my, { ...u.authorizeProps }),
            })
          : s
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: mT.RG,
                      children: [
                          (0, eB.yf)(c, d)
                              ? x
                                  ? (0, a.jsx)(mR, { projectId: g, onResume: v })
                                  : j
                                    ? (0, a.jsx)("div", { className: mT.qs })
                                    : (0, a.jsx)(mu, { applicationId: t, surface: l, launch: r, frameOverlay: p?.(l) })
                              : null,
                          "widget" === d && null != f
                              ? "unavailable-authorization-revoked" === c.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mT.qs,
                                        children: (0, a.jsx)(mi, {
                                            wide: !0,
                                            title: eb.intl.string(ej.default["08U+YO"]),
                                            body: eb.intl.string(ej.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(m_.A, { applicationId: f })
                              : null,
                          "overlay" === d && c.modes.includes("overlay")
                              ? (0, a.jsx)(mE, { applicationId: t, projectId: g, size: h, frameOverlay: p?.(e3.ZN) })
                              : null,
                          "bot" === d && null != n && null != g
                              ? (0, a.jsx)(mx, { projectId: g, previewApplicationId: n })
                              : null,
                      ],
                  })
            : b
              ? (0, a.jsx)("div", { className: mT.qs, children: (0, a.jsx)(o.y, {}) })
              : (0, a.jsx)(fZ, { className: mT.qs });
}
function mR(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, f5.Pu)(t),
        (0, a.jsx)("div", {
            className: mT.qs,
            children: (0, a.jsx)(mi, {
                wide: !0,
                title: eb.intl.string(ej.default.MMWEH2),
                body: eb.intl.string(ej.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(h.$, {
                              size: "sm",
                              variant: "primary",
                              icon: f4.PlayIcon,
                              text: eb.intl.string(ej.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mL = n(750506),
    m$ = n(867193),
    mq = n(539197),
    mD = n(977020);
function mF(e) {
    let { projectId: t } = e,
        n = (0, mq.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mq.Ie)(e);
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
        className: mD.$Q,
        style: { left: r, top: s, width: u, height: o, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [mq.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: f()(mD.hN, mD.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: f()(mD.hN, mD.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: f()(mD.UE, { [mD.SP]: n.shown, [mD.Vq]: n.pressed, [mD.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mO = n(417760);
function mz(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, m.bG)([ri.A], () => null != e && ri.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, ex.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        o = (0, eA.CU)(n),
        c = "controlling" === t,
        d = eb.intl.string(c ? (o ? ej.default["VJW/5P"] : ej.default["+hD2Iz"]) : ej.default["h+i1r9"]),
        g =
            null != r
                ? (0, a.jsx)(h.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: eb.intl.string(ej.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: f()(mO.M0, mO.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(cb.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(sr.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(u.E, { variant: "text-sm/semibold", color: "none", className: mO.ID, children: d }),
                  c ? (0, a.jsx)(nD.A, { children: eb.intl.string(ej.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: mO.lC, children: g }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: mO.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: mO.sp,
                      children: [
                          (0, a.jsx)(sr.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(cb.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: mO.f4,
                              children: [
                                  (0, a.jsx)(u.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: mO.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(u.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: mO.Rb,
                                            children: eb.intl.string(ej.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: mO.lC, children: g }) : null,
              ],
          });
}
function mG(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, eA.Zv)(null != n && n === l ? t : null),
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
        c = (0, eE.useHasAnyModalOpen)(),
        d = (0, eJ.cR)(s);
    i.useEffect(() => {
        u && d && null != s && (0, eJ.BL)(s);
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
            (x((e) => (tH(e, t) ? e : t)), null != h && (0, m$.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, m$.C)(0));
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
            let [e] = i.useContext(mL.uY),
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
                      className: mO.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: mO.QF,
                          children: (0, a.jsx)(mz, { phase: o, projectId: t, compact: y }),
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
                                ? eb.intl.string(ej.default.oWcemF)
                                : "handoff" === o
                                  ? eb.intl.string(ej.default["h+i1r9"])
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
                                  className: mO.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: mO.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(mF, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var mU = n(399503),
    mB = n(853555),
    mK = n(343030),
    mH = n(667811),
    mV = n(327152),
    mW = n(187645);
let mX = { width: 1280, height: 720 },
    mY = new Map(),
    mQ = !1;
function mZ() {
    let e = new Map();
    for (let t of new Set([...ri.A.getActivityOrderedProjectIds(), ...(0, eA.T7)()])) {
        if (!(ri.A.isThinking(t) || (0, eA.wK)(t)) || eD.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ti.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, tf.Rc)(t), (0, tf.Th)(t)].find(e3.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...mY]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            mY.delete(t),
            n.unregisterLookup(),
            mH.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, mV.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        mY.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = mW.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    mJ(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mY.set(e, l),
                    (l.unregisterLookup = (0, mB.Ng)(e, () => (0, fJ.n5)(n, t))),
                    mH.A.registerFrameTarget(t, n, mK.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of mY) mJ(t.element, e, t.frameId);
}
function mJ(e, t, n) {
    if (eZ.A.getFrame(n)?.surface.type === eK.U.OVERLAY) {
        let l = eG(ti.Ay.getProject(t));
        (e.classList.remove(mW.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, mV.Pn)(n, l));
        return;
    }
    let l = td.A.isBuilderPreviewMobile();
    e.classList.toggle(mW.L, !l);
    let r = l ? mn(td.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, mV.Pn)(n, r ?? mX));
}
var m0 = n(873727),
    m1 = n(147248),
    m2 = n(418842),
    m3 = n(363195),
    m7 = n(818023);
let m4 = null;
var m5 = n(541940);
function m6(e) {
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
            showsFrame: h,
            paused: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, tc.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, m.bG)([m3.A], () => (0, m0.x4)(m3.A.theme)),
            l = (0, m.bG)([m1.A], () => m1.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, m.cf)([a2.Ay], () => ({
                reducedMotion: a2.Ay.useReducedMotion,
                fontScale: (0, m0.U0)(),
                highContrast: a2.Ay.isHighContrastModeEnabled,
                forcedColors: a2.Ay.useForcedColors,
                underlineLinks: a2.Ay.alwaysShowLinkDecorations,
            })),
            c = eN.hH.useSetting(),
            d = (0, m2.C)(),
            f = (0, m.bG)(
                [eZ.A, td.A],
                () =>
                    td.A.isBuilderPreviewMobile() &&
                    eZ.A.getFrame(t)?.applicationId === td.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            g = i.useRef(!1),
            p = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, fJ.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, m0.Lq)(),
                    uiDensity: d,
                    messageDisplayCompact: c,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: f,
                };
                (0, fT.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, f, t, s, c, e, r, d, o]),
            j = i.useRef(v);
        i.useLayoutEffect(() => {
            j.current = v;
        });
        let b = i.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    ((h.current = !1), g.current || j.current());
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
                b();
            }, [l, b]),
            i.useLayoutEffect(() => {
                (v(), b());
            }, [b, v]),
            i.useLayoutEffect(() => {
                let n = (0, fJ.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, fJ.n5)(e, t) && ((x.current = null), b());
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
    })(p, j),
        i.useEffect(() => {
            if (null != t) return (0, mB.Ng)(t, () => (0, fJ.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, fJ.ow)(p, j), [p, j]),
        y = i.useCallback(() => (h ? (0, fJ.ow)(p, j) : p), [h, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: f()(m5.Mh, o),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(mG, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: m5.fm, children: c }),
                ],
            }),
            d,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fO, {
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
function m8(e) {
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
        onImportProject: p,
        debugOpen: x = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: S,
        overlayWidgetSize: N,
        previewPaused: C = !1,
        onResumePreview: A,
    } = e;
    (0, mU.k)(t, S);
    let I = s.type === eK.U.MAIN || (0, tf.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, m.cf)([td.A], () => ({
            mobile: td.A.isBuilderPreviewMobile(),
            landscape: td.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? m7.aX.LANDSCAPE : m7.aX.PORTRAIT), (m4 = e));
                else {
                    if (m4 !== e) return;
                    ((l = m7.aX.UNHANDLED), (m4 = null));
                }
                og.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(I ? l : null);
    let E = i.useRef(null),
        [M, _] = i.useState(0);
    i.useEffect(() => {
        if (null == t) return;
        (0, nN.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, nN.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]);
    let T = i.useContext(eP.A),
        P = (0, m.bG)([e$.A], () => e$.A.isOverlayOpen()),
        R = I && (!T || P);
    (i.useLayoutEffect(() => {
        if (R) return ((0, eq.HV)(l), () => (0, eq.HV)(null));
    }, [l, R]),
        i.useEffect(() => {
            null != t &&
                ((0, ex.ensureConnection)(t),
                mQ ||
                    ((mQ = !0),
                    ri.A.addChangeListener(mZ),
                    ti.Ay.addChangeListener(mZ),
                    eZ.A.addChangeListener(mZ),
                    td.A.addChangeListener(mZ),
                    eD.A.addChangeListener(mZ),
                    (0, eA.W3)(mZ),
                    mZ()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            function t() {
                null != e && _(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(450, M - 320),
        $ = c || I,
        q = i.useRef(null),
        D = i.useRef(null),
        F = i.useCallback(() => {
            null != D.current && q.current?.style.setProperty("--custom-conjure-chat-width", `${D.current}px`);
        }, []),
        O = i.useCallback(
            (e) => {
                ((D.current = e), F());
            },
            [F],
        );
    return (
        i.useLayoutEffect(F),
        (0, a.jsx)("div", {
            ref: E,
            className: m5.LB,
            children: (0, a.jsx)(m6, {
                projectId: t,
                designFeedbackToggleRef: n,
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                header: o,
                showsFrame: (0, eB.yf)(k, w),
                paused: C,
                mainClassName: null == o ? void 0 : f()(m5.ez, { [m5.zt]: c && !T, [m5.jX]: T }),
                content: (0, a.jsx)(mP, {
                    applicationId: l,
                    previewApplicationId: r,
                    surface: s,
                    frameLaunchParams: u,
                    previewReady: b,
                    previewGate: y,
                    availability: k,
                    activeMode: w,
                    widgetApplicationId: S,
                    overlayWidgetSize: N,
                    projectId: t,
                    paused: C,
                    onResume: A,
                    renderFrameOverlay: (e) =>
                        (0, a.jsx)(f7, { projectId: t, applicationId: l, previewApplicationId: r, surface: e }),
                }),
                sidebar:
                    null != t && $
                        ? (0, a.jsx)("div", {
                              ref: q,
                              className: f()(c ? m5.v7 : m5.LL, { [m5.ax]: T }),
                              children: (0, a.jsx)(tP.A, {
                                  sidebarType: tP.X.CallChatSidebar,
                                  maxWidth: L,
                                  onWidthChange: T ? O : void 0,
                                  capturePointer: !0,
                                  children: (0, a.jsx)("div", {
                                      className: m5.cO,
                                      children: x
                                          ? (0, a.jsx)(fC, { projectId: t, onClose: v ?? (() => {}) }, t)
                                          : (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    (0, a.jsx)(fW.Ay, { projectId: t }),
                                                    (0, a.jsx)(tR.Ay, {
                                                        "aria-label": eb.intl.string(eb.t["/VQax8"]),
                                                        toolbar: (0, a.jsxs)(a.Fragment, {
                                                            children: [
                                                                h,
                                                                null == d
                                                                    ? null
                                                                    : (0, a.jsx)(tR.Ay.Icon, {
                                                                          icon: T ? t_.E : tT.P,
                                                                          tooltip: eb.intl.string(
                                                                              T
                                                                                  ? ej.default["5LSwvg"]
                                                                                  : ej.default.JD6Oit,
                                                                          ),
                                                                          onClick: d,
                                                                      }),
                                                            ],
                                                        }),
                                                        children: (0, a.jsx)(tR.Ay.Title, {
                                                            children: eb.intl.string(eb.t["/VQax8"]),
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: m5.cb,
                                                        children: (0, a.jsx)(
                                                            cG,
                                                            {
                                                                projectId: t,
                                                                restoreState: j,
                                                                onRestoreVersion: g,
                                                                onImportProject: p,
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
        })
    );
}
var m9 = n(705427),
    he = n(606128),
    ht = n(323140);
function hn(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: o, onBack: c, guildId: d } = e,
        j = i.useContext(eR),
        b = i.useContext(eP.A),
        [y] = i.useState(() => (null != j ? e$.A.getProjectView(j) : null)),
        [k, C] = i.useState(y?.chatOpen ?? !0),
        [A, I] = i.useState(y?.debugOpen ?? !1);
    i.useEffect(() => {
        null != j && (0, eL.g7)(j, { chatOpen: k, debugOpen: A });
    }, [j, k, A]);
    let E = i.useCallback(
            (e) => {
                null != j && (0, eL.g7)(j, { previewSelection: e });
            },
            [j],
        ),
        M = eC(),
        _ = eI.useConfig({ location: "ConjureSelectedProjectScreen" }).enabled,
        T = i.useCallback(() => C(!0), []),
        P = i.useCallback(() => {
            (I(!1), C(!0));
        }, []),
        { restoreState: R, handleRestoreVersion: L } = (function (e, t) {
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
                                (0, e_.oB)(o, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, ep.P0)({
                                                        text: eb.intl.formatToPlainString(ej.default.Z4n6LX, {
                                                            title: (0, eM.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, eT.c)(o, r);
                                                null != e && (0, ep.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", o, e),
                                                (0, ep.P0)({
                                                    text: eb.intl.string(ej.default["PSdo+w"]),
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
        })(s, P),
        $ = s?.id ?? null,
        {
            integrationStatus: q,
            isPreviewApplicationLoading: D,
            checkingIntegration: F,
            previewReady: z,
            hasFrame: U,
            needsPermissionReview: B,
            installAuthorizeProps: K,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, m.bG)(
                    [ti.Ay, ta.A],
                    () => (null == r ? null : (ti.Ay.getIntegrationStatus(r) ?? ta.A.getIntegrationStatus(r))),
                    [r],
                ),
                o = e?.preview_application_id ?? null,
                { data: c, isLoading: d } = (0, tl.YY)(o ?? void 0),
                f = null != r && n !== r,
                h = u?.preview_ready === !0,
                g = u?.has_activity === !0,
                p = u?.bot_permissions_changed === !0,
                x = (0, eB.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: h,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: p,
                }),
                [v, j] = i.useState(null);
            i.useEffect(() => {
                if ((j(null), !x || f || null == o)) return;
                let e = !1;
                return (
                    (async function (t) {
                        try {
                            await (0, tl.TA)(t);
                        } catch {}
                        e || j(t);
                    })(o),
                    () => {
                        e = !0;
                    }
                );
            }, [p, f, x, o]);
            let b = i.useCallback(async () => {
                if (null == r || a.current !== r) return;
                s.current?.abort();
                let e = new AbortController();
                ((s.current = e), l(null));
                try {
                    await ((0, tr.CG)(r)?.catch(() => (0, tr.U1)(r, e.signal)) ?? (0, tr.U1)(r, e.signal));
                } catch {
                } finally {
                    e.signal.aborted || s.current !== e || a.current !== r || l(r);
                }
            }, [r]);
            i.useEffect(
                () => (
                    b(),
                    () => {
                        (s.current?.abort(), (s.current = null));
                    }
                ),
                [b],
            );
            let y = (0, ts.a)(e ?? null, u ?? null, t),
                k = i.useCallback(async () => {
                    null != e && (await (0, ts.$)(e, y));
                }, [y, e]),
                w = i.useCallback(async () => {
                    try {
                        await k();
                    } catch {}
                    await b();
                }, [b, k]),
                S = i.useMemo(
                    () =>
                        null == o || d || f || v !== o
                            ? null
                            : {
                                  ...(0, tu.i)({ applicationId: o, application: c ?? null, guildId: y }),
                                  onClose: () => {
                                      w();
                                  },
                              },
                    [f, v, w, y, d, c, o],
                );
            return {
                integrationStatus: u,
                isPreviewApplicationLoading: d,
                checkingIntegration: f,
                previewReady: h,
                hasFrame: g,
                needsPermissionReview: x,
                installAuthorizeProps: S,
            };
        })(s, d),
        V =
            (0, m.bG)([tg.A], () => (null == $ ? void 0 : tg.A.getPublishStatus($)?.previewAppChannels), [$]) ??
            q?.preview_app_channels,
        {
            availability: W,
            activeMode: X,
            setMode: Y,
            frameSurface: Q,
            frameSurfaceOptions: Z,
            setFrameSurface: J,
            appChannel: ee,
            setAppChannel: et,
            frameLaunchParams: en,
            widgetApplicationId: el,
        } = (0, eX.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: U,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: q?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eF.q7.OVERLAY) === !0,
            previewAppChannels: V,
            initialSelection: y?.previewSelection,
            onSelectionChange: E,
        }),
        er = eG(s);
    ((0, eU.x)($, (e) => {
        W.modes.includes(e) && Y(e);
    }),
        eS($, () => {
            (C(!0), I(!0));
        }));
    let eu = W.modes.includes("frame"),
        ec = (0, m.bG)([eD.A], () => eD.A.isPaused($), [$]),
        ed = eu && !ec,
        {
            previewTargetOptions: em,
            handleSelectPreviewTarget: ek,
            mobilePreview: ew,
            mobilePreviewLabel: eN,
            handleToggleMobilePreview: eO,
            landscapePreview: ez,
            rotatePreviewLabel: eH,
            handleRotatePreview: eV,
            previewSurface: eW,
            previewFrame: eY,
            refreshFrame: eQ,
            isRefreshing: eZ,
            handleRefresh: eJ,
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
                                          t === eK.U.APP_CHANNEL && n.length > 1
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
                        ("frame" === e.mode && (o(e.surface), null != e.appChannel && c?.(e.appChannel)), u(e.mode));
                    },
                    [c, o, u],
                ),
                h = (0, m.bG)([td.A], () => td.A.isBuilderPreviewMobile()),
                g = eb.intl.string(h ? ej.default.tKGF0Q : ej.default.peqEOY),
                p = i.useCallback(() => (0, eq.GG)(!h), [h]),
                x = (0, m.bG)([td.A], () => td.A.isBuilderPreviewLandscape()),
                v = eb.intl.string(x ? ej.default.tunI2l : ej.default.DoNdjA),
                j = i.useCallback(() => (0, eq.Lw)(!x), [x]),
                b = (0, tf.jS)(t),
                y = i.useMemo(() => (0, tf.Op)(b, r), [b, r]),
                k = (0, tc.A)(t?.preview_application_id ?? null, y),
                w = (0, tc.A)(t?.preview_application_id ?? null, e3.ZN),
                S = "overlay" === l ? w : k,
                N = (0, e3.x1)(S) && S.data.proxyTicketRefreshing,
                C = i.useCallback(() => {
                    null == S || N || to.A.refreshProxyTicket(S.id);
                }, [S, N]);
            return {
                previewTargetOptions: d,
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
                isRefreshing: N,
                handleRefresh: C,
            };
        })({
            project: s,
            modes: W.modes,
            activeMode: X,
            frameSurface: Q,
            frameSurfaceOptions: Z,
            previewAppChannels: V,
            setMode: Y,
            setFrameSurface: J,
            setAppChannel: et,
        }),
        e0 = k && !A,
        e1 = eb.intl.string(e0 ? ej.default.JD6Oit : ej.default.xjJAQm),
        e2 = i.useCallback(() => {
            if (A) {
                (I(!1), C(!0));
                return;
            }
            C((e) => !e);
        }, [A]),
        e4 = i.useCallback(() => C(!1), []),
        {
            designFeedbackActive: e5,
            designFeedbackToggleRef: e6,
            agentDrivingPreview: e8,
            designFeedbackLabel: e9,
            handleToggleDesignFeedback: te,
        } = (function (e, t, n) {
            let { active: l } = H(e);
            i.useEffect(() => {
                null != e && l && !t && G(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, eA.Zv)(e),
                s = eb.intl.string(a ? ej.default.Sme0T0 : l ? ej.default.vn5Rzu : ej.default["cl/Jyl"]),
                u = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void G(e);
                        (n(), O(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: u,
            };
        })($, ed, P),
        [tb] = i.useState(() => N.isPlatformEmbedded && (0, tn.qM)()),
        ty = null != ef($);
    i.useEffect(() => {
        null != $ && ty && !ed && eo($);
    }, [$, ty, ed]);
    let tk = i.useCallback(() => {
            null != $ &&
                (P(),
                (function (e) {
                    if (null != es(e)) return;
                    let { byProject: t } = ea.getState();
                    ea.setState({ byProject: { ...t, [e]: ei } });
                })($));
        }, [$, P]),
        tw = i.useCallback(() => {
            null != $ && eo($);
        }, [$]),
        tN = ty ? eb.intl.string(ej.default.tuQ5f3) : e9,
        tC = i.useCallback(() => {
            I((e) => !e && (C(!0), !0));
        }, []),
        tA = i.useCallback(() => I(!1), []),
        t_ = i.useCallback(() => {
            null != $ && (0, eq._j)($);
        }, [$]),
        tT = i.useCallback(() => {
            null != $ && (ec ? (0, eq._j)($) : (0, eq.di)($, eY?.id));
        }, [$, ec, eY?.id]),
        tP = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eY?.id), (0, ex.closeConnection)(e), (0, th.r)(t)), c());
        }, [s, eY?.id, c]),
        tR =
            ((t = i.useCallback(() => {
                null != s && (T(), (0, ex.sendUserMessage)(s.id, eb.intl.string(ej.default.oU20rd)));
            }, [s, T])),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, ev.vt)(e);
                    null != n
                        ? (0, ep.P0)({ text: n, variant: "critical" })
                        : (0, eg.A)({
                              title: eb.intl.formatToPlainString(ej.default["Gm+u1+"], { name: s.name }),
                              subtitle: eb.intl.string(ej.default.M7H3sJ),
                              confirmText: eb.intl.string(ej.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  T();
                                  try {
                                      await (0, ev.Hj)(t, e, eb.intl.string(ej.default.Owerd3));
                                  } catch {
                                      (0, ep.P0)({ text: eb.intl.string(ej.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, T],
            )),
            { onExport: t, onImport: (r = (0, ev.yN)(l)).open, importInput: r.input }),
        tL = i.useCallback(() => {
            null != s && (0, tE.A)(s, d);
        }, [s, d]),
        t$ = (0, eB.JR)(X, B, q?.bot_permissions_changed === !0)
            ? { type: "permissions", authorizeProps: K }
            : F && null == q
              ? { type: "checking" }
              : void 0,
        tq = (0, m.bG)([ti.Ay], () => null != $ && ti.Ay.isProjectDeleting($), [$]);
    i.useEffect(() => {
        ((null == s && o) || tq) && c();
    }, [s, o, tq, c]);
    let {
            publishOptions: tD,
            publish: tF,
            publishing: tO,
            confirmation: tz,
            variant: tG,
            text: tU,
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
                d = (0, tx.Ay)(e, c),
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
                variant: tv(d) ? "secondary" : "primary",
                text: tj(d, m),
                label: tj(d, null),
                indicator: null == d ? null : d.publishing ? "publishing" : tv(d) ? null : "unpublished",
            };
        })($, d, F || D, tS),
        tB = tI($, tF, tD),
        tK = (0, w.A)(eY),
        tH = "frame" === X && !ec && (0, e3.x1)(eY) && (tK.isPoppedOut || tK.canPopout),
        tV =
            null == s
                ? null
                : (0, a.jsx)(tm.A, {
                      projectId: s.id,
                      projectName: s.name,
                      guildId: d,
                      projectGuildId: s.guild_id,
                      isOwner: (0, ti.PV)(s),
                      canRemix: (0, ti.H_)(s),
                      hideProjectSettings: !0,
                      onRefresh: (0, e3.x1)(eQ) ? eJ : void 0,
                      isRefreshing: eZ,
                      onTogglePreviewPaused: "frame" === X ? tT : void 0,
                      previewPaused: ec,
                      previewPauseDisabled: !ec && e8,
                      onTogglePopout: tH ? (tK.isPoppedOut ? tK.popIn : tK.popOut) : void 0,
                      poppedOut: tK.isPoppedOut,
                      onToggleDebug: M ? tC : void 0,
                      debugOpen: A,
                      onClose: tP,
                      onExport: tR.onExport,
                      onImport: tR.onImport,
                      onRemix: tL,
                      onConnectTool: _
                          ? () => {
                                var e;
                                return (
                                    (e = s.id),
                                    void (0, eE.openModalLazy)(async () => {
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
                                  restoreDisabled: R?.status === "restoring",
                                  onRestoreVersion: (e, t) => L(e, t, !0),
                              }),
                              void (0, eE.openModalLazy)(async () => {
                                  let { default: t } = await Promise.all([
                                      n.e("323079"),
                                      n.e("437655"),
                                      n.e("420238"),
                                      n.e("586467"),
                                      n.e("231782"),
                                      n.e("526192"),
                                      n.e("437578"),
                                  ]).then(n.bind(n, 209233));
                                  return (n) => (0, a.jsx)(t, { ...n, ...e });
                              })
                          );
                      },
                      refreshApplicationId:
                          W.modes.includes("widget") && "unavailable-authorization-revoked" !== W.profileState
                              ? el
                              : null,
                      previewProjectId: s.id,
                  }),
        tW =
            null == tF || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: ht.As,
                      onMouseDown:
                          null == $ || tF.disabled || tO
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tp.dx)($);
                                },
                      children: (0, a.jsx)(h.$, {
                          size: "sm",
                          variant: tG,
                          icon: tO ? hl : null != tz ? g.U : void 0,
                          text: tU,
                          onClick: () => tB("header"),
                      }),
                  }),
        tX = null == s ? void 0 : () => (0, tM.A)(s.id, { guildId: d, isPreview: !0, publishOptions: tD }),
        tY = (0, a.jsx)(m9.A, {
            title: s?.name ?? eb.intl.string(ej.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tX,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: ht.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: ht.QQ,
                                  children: [
                                      (0, a.jsx)(tt, {
                                          targets: em,
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
                                          })(X, Q, ee),
                                          onChange: ek,
                                      }),
                                      eu
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === X
                                                        ? (0, a.jsx)(S.A.Icon, {
                                                              icon: ew ? hi : ha,
                                                              tooltip: eN,
                                                              "aria-label": eN,
                                                              selected: ew,
                                                              onClick: eO,
                                                          })
                                                        : null,
                                                    ew && "frame" === X
                                                        ? (0, a.jsx)(S.A.Icon, {
                                                              icon: hs,
                                                              tooltip: eH,
                                                              "aria-label": eH,
                                                              selected: ez,
                                                              onClick: eV,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(eh, {
                                                        enabled: tb && !ty && !e8 && !ec,
                                                        onLongPress: tk,
                                                        children: (0, a.jsx)(S.A.Icon, {
                                                            ref: e6,
                                                            icon: p.x,
                                                            iconClassName: ht.D8,
                                                            tooltip: tN,
                                                            "aria-label": tN,
                                                            selected: ty || e5,
                                                            disabled: ec || (e8 && !ty),
                                                            onClick: ty ? tw : te,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== X || ec
                                          ? null
                                          : (0, a.jsx)(e7, { frame: eY, controlProjectId: s.id }),
                                  ],
                              }),
                              (0, a.jsx)("div", { className: ht.YJ }),
                              (0, a.jsx)(ey.A, { frame: eY }),
                              (0, a.jsx)(S.A.Icon, {
                                  icon: x.SettingsIcon,
                                  tooltip: eb.intl.string(ej.default.I2XSKe),
                                  "aria-label": eb.intl.string(ej.default.I2XSKe),
                                  onClick: tX,
                              }),
                              (0, a.jsx)(S.A.Icon, {
                                  icon: hr,
                                  tooltip: e1,
                                  "aria-label": e1,
                                  selected: e0,
                                  onClick: e2,
                              }),
                              tV,
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: f()(ht.nj, he.T, { [ht.i3]: b }),
        children: [
            tR.importInput,
            (0, a.jsx)("main", {
                className: f()(ht.JX, { [ht.i3]: b && null != s }),
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: ht.j5,
                              children: [
                                  tY,
                                  (0, a.jsxs)("div", {
                                      className: ht.sD,
                                      children: [
                                          (0, a.jsx)(v.D, {
                                              variant: "heading-lg/semibold",
                                              children: eb.intl.string(ej.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(u.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eb.intl.string(ej.default.fINulo),
                                          }),
                                          (0, a.jsx)(h.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eb.intl.string(ej.default["WFJ/vb"]),
                                              onClick: () => (0, tr.hF)(d),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tx.bI.Provider, {
                              value: tD,
                              children: (0, a.jsx)(
                                  m8,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: e6,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eW,
                                      frameLaunchParams: en,
                                      header: tY,
                                      chatOpen: k,
                                      onCloseChat: e4,
                                      chatHeaderAction: tW,
                                      debugOpen: M && A,
                                      onCloseDebug: tA,
                                      onRestoreVersion: L,
                                      onImportProject: (0, ti.PV)(s) ? tR.onImport : void 0,
                                      restoreState: R,
                                      previewReady: z,
                                      previewGate: t$,
                                      availability: W,
                                      activeMode: X,
                                      widgetApplicationId: el,
                                      overlayWidgetSize: er,
                                      previewPaused: ec,
                                      onResumePreview: t_,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function hl() {
    return (0, a.jsx)(o.y, { type: o.t.SPINNING_CIRCLE_SIMPLE, className: ht.Hv, itemClassName: ht.C5 });
}
function hr(e) {
    return (0, a.jsx)(j.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ha(e) {
    return (0, a.jsx)(b.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hi(e) {
    return (0, a.jsx)(y.k, { ...e, size: "custom", width: 20, height: 20 });
}
function hs(e) {
    return (0, a.jsx)(k.H, { ...e, size: "custom", width: 20, height: 20 });
}
var hu = n(325132),
    ho = n(434279),
    hc = n(972013),
    hd = n(751841),
    hf = n(159308);
function hm(e) {
    let { className: t = hf.lm } = e;
    return (0, a.jsx)("div", {
        className: t,
        children: (0, a.jsx)(u.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: eb.intl.string(ej.default.BGh3xB),
        }),
    });
}
function hh() {
    hc.A.isPinned() ? (0, c.bG)((0, hd.hU)(null)) : (0, eL.Sd)(null);
}
function hg(e) {
    let { projectId: t, workspaceGuildId: n } = e,
        { project: l, settled: r } = (function (e) {
            let { project: t, unavailable: n } = (0, m.cf)(
                    [ti.Ay],
                    () => ({ project: ti.Ay.getProject(e), unavailable: (0, tr.su)(e) }),
                    [e],
                ),
                l = null == t;
            return (
                i.useEffect(() => {
                    l && (0, tr.tF)([e]);
                }, [l, e]),
                { project: t, settled: null != t || n }
            );
        })(t),
        s = (null != l ? (0, ho.wu)(l) : null) ?? n,
        u = i.useContext(eP.A) ? hf.Gz : hf.lm;
    return null != l || r
        ? null == s
            ? (0, a.jsx)(hm, { className: u })
            : (0, a.jsx)(eR.Provider, {
                  value: t,
                  children: (0, a.jsx)(hn, { project: l, projectsLoaded: r, onBack: hh, guildId: s }),
              })
        : (0, a.jsx)("div", { className: u, children: (0, a.jsx)(o.y, {}) });
}
function hp(e) {
    let { projectId: t } = e,
        n = (0, n3.rX)("ConjurePage"),
        l = i.useContext(eP.A);
    return (i.useEffect(() => {
        ti.Ay.hasFetchedOwnedProjects() || (0, tr.hF)();
    }, []),
    i.useEffect(() => {
        (0, eL.jQ)(t);
    }, [t]),
    i.useEffect(() => eL.mE, []),
    null == t)
        ? (0, a.jsx)("div", {
              className: l ? hf.$ : hf.iR,
              children: null == n ? (0, a.jsx)(hm, {}) : (0, a.jsx)(hu.A, { guildId: n, onConjurePage: !0 }),
          })
        : (0, a.jsx)(hg, { projectId: t, workspaceGuildId: n }, t);
}
