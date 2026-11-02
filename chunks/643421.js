n.d(t, { A: () => hy });
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    u = n(503698),
    o = n.n(u),
    c = n(17928),
    d = n(821609),
    f = n(478016),
    m = n(604525),
    h = n(663417),
    g = n(70688),
    p = n(534514),
    x = n(834730),
    v = n(289873),
    j = n(534890),
    b = n(646270),
    y = n(31300),
    k = n(831453),
    w = n(646973),
    S = n(742589),
    A = n(723702),
    N = n(839214);
n(321073);
let C = Object.freeze({ x: 0.5, y: 0.5 });
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
function Z(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function X(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => Z(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: Z(e.from, t, n), to: Z(e.to, t, n) };
        case "text":
            return { ...e, at: Z(e.at, t, n) };
    }
}
function Y(e) {
    return e.some((e) => "erase" !== e.kind);
}
function Q(e, t) {
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
    return Y(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let el = [3, 6, 12],
    er = [10, 20, 40],
    ea = (0, N.D)(() => ({ byProject: {} })),
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
                        e.present.map((e) => (e.id === t.id ? X(e, t.dx, t.dy) : e)),
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
    ex = n(949757),
    ev = n(800202),
    ej = n(809526),
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
var eA = n(253932);
function eN() {
    return eA.Q_.useSetting() || !1;
}
var eC = n(573083);
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
    eP = n(227007),
    eR = n(398773),
    eL = n(735769),
    e$ = n(513845),
    eq = n(802905),
    eD = n(951178);
let eF = { width: 320, height: 240 };
function eO(e) {
    let t = e?.default_size;
    return null != t && Number.isFinite(t.width) && Number.isFinite(t.height) && t.width > 0 && t.height > 0 ? t : eF;
}
function ez(e, t) {
    let { width: n, height: l } = e;
    return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
}
function eG(e) {
    return eO(e?.preview_overlay_widget ?? null);
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
var eZ = n(939398),
    eX = n(86147),
    eY = n(729475),
    eQ = n(91242),
    eJ = n(156548),
    e0 = n(869146),
    e1 = n(475815),
    e2 = n(652215),
    e3 = n(165610);
function e4(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, eJ.cR)(t?.id ?? null),
        r = (0, eC.Zv)(n),
        i = (0, c.bG)(
            [e0.A, eQ.A],
            () => null != t && e0.A.getWindowOpen(e2.MLl.ACTIVITY_POPOUT) && eQ.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, e3.x1)(t) || i || r) return null;
    let s = (0, eJ.fl)(t.id);
    if (null == s || !(0, e1.Ub)(s)) return null;
    let u = eb.intl.string(l ? eb.t.Z7MyNB : eb.t.OIDkcp);
    return (0, a.jsx)(S.A.Icon, {
        tooltip: u,
        icon: l ? eX.z : eY.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, eJ.U8)(t.id),
    });
}
var e7 = n(265872),
    e5 = n(980707),
    e8 = n(477782),
    e6 = n(559106),
    e9 = n(847374),
    te = n(704745);
function tt(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        u = null != n && t.length > 1;
    r && !u && s(!1);
    let o = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!u) return null;
    let f = eb.intl.string(ej.default.I2ucou);
    return (0, a.jsx)(e7.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: o,
        position: "bottom",
        align: "right",
        animation: e7.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(e5.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": f,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(e8.rX, {
                    label: f,
                    children: t.map((e) => {
                        let t = eV(e);
                        return (0, a.jsx)(
                            e8.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: eW(e),
                                checked: t === eV(n),
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
            return (0, a.jsx)(e6.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: te.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(x.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eb.intl.string(ej.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(x.E, {
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
    ts = n(625180),
    tu = n(672929),
    to = n(111534),
    tc = n(754027),
    td = n(193072),
    tf = n(457827),
    tm = n(322227),
    th = n(722701),
    tg = n(962998),
    tp = n(79733);
function tx(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
function tv(e, t) {
    return null != t
        ? t
        : null == e
          ? eb.intl.string(ej.default["120EFN"])
          : tx(e) && !e.publishing
            ? eb.intl.string(ej.default.kAfbEN)
            : e.label;
}
var tj = n(373540),
    tb = n(189213),
    ty = n(144228);
function tk(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, u] = i.useState(t.selected_destination_id),
        o = eb.intl.string(ej.default.lJrOGW);
    return (0, a.jsx)(tb.a, {
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
        children: (0, a.jsx)(ty.z, {
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
let tw = {
    showPublishBlocked: tj.A,
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, eE.openModal)(
                (t) =>
                    (0, a.jsx)(tk, {
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
var tS = n(811587);
let tA = "conjure-publish";
function tN(e) {
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
            modalKey: tA,
            contextKey: t,
            onCloseRequest: () => {
                l.current || (0, eE.closeModal)(tA, t);
            },
        },
    );
}
function tC(e, t, n) {
    let l, r;
    return (
        (l = i.useContext(tp.bI)),
        (r = n ?? l),
        i.useCallback(
            (n) => {
                if (null == e || null == t || null == r || t.disabled) return;
                let l = t.status?.publishState;
                t.awaitingApproval || (null != l && (0, tS.lE)(l))
                    ? t.run(n)
                    : tN({ projectId: e, publishOptions: r, entryPoint: n });
            },
            [e, t, r, tN],
        )
    );
}
var tI = n(95264),
    tE = n(616334),
    tM = n(789645),
    t_ = n(812771),
    tT = n(58736);
n(743898);
var tP = n(333007),
    tR = n(621466),
    tL = n(775121),
    t$ = n(989145),
    tq = n(866665),
    tD = n(81369),
    tF = n(826745),
    tO = n(34595),
    tz = n(470779);
function tG(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: u,
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
            drafts: j,
            addFiles: b,
            pasteFiles: y,
            removeDraft: k,
            settled: w,
            takeRefs: S,
        } = (0, tO.FM)({ projectId: t, surface: "design", onUploadFile: h }),
        A = i.useRef(null),
        N = (f || j.length > 0) && w && !m,
        C = i.useCallback(() => {
            if (!N) return;
            let e = S();
            c(e.length > 0 ? e : void 0);
        }, [N, S, c]),
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
        className: o()(tz.M0, { [tz.ho]: I && !m, [tz.ET]: m }),
        style: { left: $, top: q },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: tz.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(tq.m, {
                              position: "bottom",
                              text: eb.intl.string(ej.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: tz.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": eb.intl.string(ej.default.lgvqSB),
                                  children: (0, a.jsx)(tD.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: tz.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(tF.y, {
                autoFocus: !0,
                rows: 1,
                className: tz.hF,
                value: s,
                placeholder: x ?? ("" === r ? eb.intl.string(ej.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? eb.intl.string(ej.default.KCYqWL),
                onChange: (e) => u(e.target.value),
                onPaste: m || !p ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), C());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: tz.ZO,
                      children: j.map((e) => (0, a.jsx)(tO.Nl, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function tU(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function tB(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function tK(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? tU(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = tU(e());
                l((e) => (tB(e, t) ? e : t));
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
var tH = n(876798),
    tV = n(408278),
    tW = n(48507),
    tZ = n(193885),
    tX = n(744898),
    tY = n(803656),
    tQ = n(241326),
    tJ = n(972213),
    t0 = n(661531);
function t1(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function t2(e, t, n) {
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
let t3 = t2("red", t1(t0.A.unsafe_rawColors.RED_400), () => eb.intl.string(ej.default.tvXfjt)),
    t4 = [
        t3,
        t2("yellow", t1(t0.A.unsafe_rawColors.YELLOW_300), () => eb.intl.string(ej.default.FYuaJ1)),
        t2("green", t1(t0.A.unsafe_rawColors.GREEN_360), () => eb.intl.string(ej.default["Vv+paS"])),
        t2("blue", t1(t0.A.unsafe_rawColors.BLUE_345), () => eb.intl.string(ej.default.k9b1QJ)),
        t2("white", t1(t0.A.unsafe_rawColors.WHITE), () => eb.intl.string(ej.default["1sOXwH"])),
    ];
function t7(e) {
    return t4.find((t) => t.id === e) ?? t3;
}
function t5(e) {
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
function t8(e) {
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
function t6(e) {
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
function t9(e) {
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
let ne = el.map((e) => t9(Math.min(16, e + 3))),
    nt = er.map((e) => t9(Math.min(16, e / 2.5))),
    nn = [ej.default.jZtZUr, ej.default.cTQdD0, ej.default.J3ucEg],
    nl = {
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
function nr(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(tq.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: em.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(tH.k, {
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
function na(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(tq.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tV.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function ni(e) {
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
function ns(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: u, lastShape: o, markerSize: c, eraserSize: d, history: f } = n,
        m = t7(n.colorId),
        h = nl[o],
        g = eb.intl.string(ej.default.hUm825),
        p = eb.intl.string(ej.default.n5IA3a),
        x = eb.intl.string(ej.default.r5dX6t),
        v = eb.intl.string(ej.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: em.t$,
        children: [
            (0, a.jsx)("div", {
                className: em.NT,
                children: (0, a.jsx)(nr, {
                    icon: t8,
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
                    (0, a.jsx)(nr, {
                        icon: t5,
                        label: eb.intl.string(ej.default.qTOXqb),
                        pressed: "move" === u,
                        onClick: () => ec(t, "move"),
                    }),
                    (0, a.jsx)(nr, {
                        icon: tW.x,
                        label: eb.intl.string(ej.default.AGb8aK),
                        pressed: "text" === u,
                        onClick: () => ec(t, "text"),
                    }),
                    (0, a.jsx)(ni, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(nr, {
                                icon: tZ.V,
                                label: g,
                                pressed: "marker" === u,
                                onClick: () => {
                                    (ec(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            ne.map((n, l) =>
                                (0, a.jsx)(
                                    nr,
                                    {
                                        icon: n,
                                        label: eb.intl.string(nn[l]),
                                        pressed: "marker" === u && c === l,
                                        onClick: () => {
                                            (eu(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), z(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(ni, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(nr, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === u || "square" === u,
                                onClick: () => {
                                    (ec(t, o), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(nl).map((n) =>
                                (0, a.jsx)(
                                    nr,
                                    {
                                        icon: nl[n].icon,
                                        label: nl[n].label(),
                                        pressed: u === n,
                                        onClick: () => {
                                            (ec(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(ni, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(nr, {
                                icon: t6,
                                label: p,
                                pressed: "eraser" === u,
                                onClick: () => {
                                    (ec(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            nt.map((n, l) =>
                                (0, a.jsx)(
                                    nr,
                                    {
                                        icon: n,
                                        label: eb.intl.string(nn[l]),
                                        pressed: "eraser" === u && d === l,
                                        onClick: () => {
                                            (eu(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), z(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(ni, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(na, { icon: m.icon, label: v, onClick: e }),
                        children: (e) =>
                            t4.map((n) =>
                                (0, a.jsx)(
                                    nr,
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
                    (0, a.jsx)(na, {
                        icon: tX.e,
                        label: eb.intl.string((0, A.isMac)() ? ej.default["j/XmBQ"] : ej.default.AeHDE6),
                        disabled: 0 === f.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(na, {
                        icon: tY.U,
                        label: eb.intl.string((0, A.isMac)() ? ej.default.C7jhpn : ej.default.pp16iB),
                        disabled: 0 === f.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(na, {
                        icon: tQ.TrashIcon,
                        label: eb.intl.string(ej.default.wo5a0i),
                        disabled: 0 === f.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: em.Gz, role: "separator" }),
                    (0, a.jsx)(na, { icon: tJ.XLargeIcon, label: eb.intl.string(ej.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
(n(323874), n(14289), n(35956));
let nu = t0.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function no(e, t, n) {
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
                    (e.strokeStyle = nu),
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
async function nd(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = nc(e),
            r = nc(e);
        if (null == l || null == r) return null;
        return (no(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let nf = new Map(),
    nm = new Map(),
    nh = (0, N.D)(() => ({ byMessageKey: {} }));
function ng(e, t) {
    let { [e]: n, ...l } = nh.getState().byMessageKey;
    nh.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function np(e, t) {
    null == t ? nf.delete(e) : nf.set(e, t);
}
function nx(e) {
    return nf.get(e)?.() ?? Promise.resolve(null);
}
let nv = { dx: 0, dy: 0 },
    nj = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    nb = 1;
function ny(e) {
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
        : (0, a.jsx)(nk, { projectId: s, state: u, resolveIframe: r });
}
function nk(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = tK(l),
        [s, u] = i.useState(null),
        [o, c] = i.useState(!1),
        [d, f] = i.useState(0),
        [m, h] = i.useState(null),
        [g, p] = i.useState(nv),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        S = i.useRef(0),
        { tool: A, history: N } = n,
        C = t7(n.colorId),
        I = "pick" !== A,
        E = "marker" === n.tool ? el[n.markerSize] : "eraser" === n.tool ? er[n.eraserSize] : null,
        M = "move" === A ? (N.present.find((e) => e.id === m) ?? null) : null,
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
        (0, tP.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, tn.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (np(t, T), () => np(t, null)), [t, T]);
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
            s = null == i ? N.present : N.present.map((e) => (e.id === i.id ? X(e, g.dx, g.dy) : e)),
            u = j.current;
        no(a, null == u ? s : [...s, u], { width: r.width, height: r.height });
    }, [r, N.present, g]);
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
                id: `mark-${nb++}`,
                kind: "text",
                color: C.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (Q(n, r) && ed(t, { type: "commit", shape: n }), u(null));
        }, [t, C, r]),
        q = i.useCallback(() => {
            ((y.current = null), u(null));
        }, []),
        D = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void $();
                let t = L(e);
                switch (A) {
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
                                      })(N.present, t, r);
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
                        if (!Y(N.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nb++}`,
                                kind: "erase",
                                width: er[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nb++}`,
                                kind: "marker",
                                color: C.value,
                                width: el[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${nb++}`,
                                kind: A,
                                color: C.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                R();
            },
            [r, A, C, M, N.present, n.markerSize, n.eraserSize, L, $, R],
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
                ((b.current = null), p(nv), ed(t, { type: "move", id: e.id, dx: g.dx, dy: g.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && Q(n, r) ? ed(t, { type: "commit", shape: n }) : R());
        }, [t, r, g, R]),
        z = i.useCallback(() => eo(t), [t]),
        G = i.useCallback(() => ed(t, { type: "undo" }), [t]),
        U = i.useCallback(() => ed(t, { type: "redo" }), [t]),
        B = i.useCallback(() => ed(t, { type: "clear" }), [t]),
        K = i.useRef({ tool: A, selected: M, exit: z, undo: G, redo: U });
    if (
        (i.useLayoutEffect(() => {
            K.current = { tool: A, selected: M, exit: z, undo: G, redo: U };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, tR.Cw)((0, tR.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                let u = nj[s];
                null != u && (e.preventDefault(), ec(t, u));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (I) return (tL.A.disable(), () => tL.A.enable());
        }, [I]),
        null == r)
    )
        return null;
    let H = Math.max(8, r.left - d - 8),
        V = null == M ? null : et(null == b.current ? M : X(M, g.dx, g.dy), r);
    return (0, tP.createPortal)(
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
                            "data-tool": A,
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
                                  "data-tool": A,
                                  "data-color": C.id,
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
                    : (0, a.jsx)(tG, {
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
                          onUploadFile: (e) => (0, t$.vX)(t, e),
                          onDismiss: q,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: em.ej,
                    style: { left: H, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(ns, { projectId: t, state: n, onExit: z, onUndo: G, onRedo: U, onClear: B }),
                }),
            ],
        }),
        document.body,
    );
}
var nw = n(308081),
    nS = n(689175),
    nA = n(683071),
    nN = n(65593),
    nC = n(218394),
    nI = n(115982),
    nE = n(886540);
function nM(e) {
    return !(0, nE.BL)(e) && !0 !== e.stopRequested;
}
var n_ = n(104317),
    nT = n(939249),
    nP = n(643278),
    nR = n(566424),
    nL = n(683063),
    n$ = n(140735),
    nq = n(320448),
    nD = n(138212);
function nF(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: o()(nD.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: o()(nD.wx, null != n && nD.o5, i),
                children: [
                    (0, a.jsx)(x.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var nO = n(148590);
function nz(e) {
    let { children: t } = e;
    return (0, a.jsx)(x.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function nG(e) {
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
        m = i.useId(),
        [h, g] = i.useState(!l),
        [p, x] = i.useState(l);
    p !== l && (x(l), g(!l));
    let v = i.useCallback(() => g((e) => !e), []),
        j = h ? e9.a : nq._,
        b = null != n || l;
    return (0, a.jsxs)(nF, {
        ...f,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: nO.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(nT.D, {
                                className: nO.L$,
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
        headerClassName: h ? void 0 : nO.RG,
        "data-superseded": l ? "true" : void 0,
        children: [c, (0, a.jsx)("div", { id: m, className: o()(nO.rf, u), hidden: !h, children: d })],
    });
}
var nU = n(883646);
let nB = [];
function nK(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: o()(nU.xL, {
            [nU.Vb]: "in_progress" === t,
            [nU.cT]: "completed" === t,
            [nU.GZ]: "unfinished" === t,
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
            (0, a.jsx)(v.y, {
                type: v.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: nU.Qd,
                itemClassName: nU.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: nU.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: nU.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function nH(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : nB), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [u, o] = i.useState(l),
        [c, d] = i.useState(s),
        [f, m] = i.useState(!1);
    c !== s && (d(s), o([...l, ...u.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
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
    return (0, a.jsxs)("span", {
        className: nU.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    nL.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: nU.MA,
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
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: nU.qA,
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
            ((t = (r ?? nB).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? nB),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: nU.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: o()(nU.AS, { [nU.J1]: "completed" === n }),
                        "data-arriving": u.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(nK, { status: n }),
                            (0, a.jsx)(x.E, {
                                variant: "body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: nU.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: nU.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(nH, { agents: c.get(e.id) ?? nB, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: nU.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(nK, { status: "pending" }),
                          (0, a.jsx)(x.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: nU.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: nU.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function nW(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: u, total: o } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === o) return null;
    let c = eb.intl.formatToPlainString(ej.default["P/I+JW"], { completed: u, total: o }),
        d = eb.intl.formatToPlainString(ej.default["7tzwKB"], { completed: u, total: o });
    return (0, a.jsx)(nG, {
        title: eb.intl.string(ej.default.RtzECX),
        meta: (0, a.jsx)(nz, { children: c }),
        superseded: s,
        showLabel: eb.intl.string(ej.default.RKyN9q),
        hideLabel: eb.intl.string(ej.default.xydHoj),
        className: nU.Nr,
        bodyClassName: nU.rf,
        beforeBody: r && !s ? (0, a.jsx)(n$.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(nV, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var nZ = n(308665),
    nX = n(59678),
    nY = n(903847);
function nQ(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: u, onJumpToActivity: c } = e,
        d = null != n,
        [f, m] = i.useState(n ?? "top"),
        [h, g] = i.useState(d),
        [p, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(d);
    (b !== d && (y(d), null != n ? (m(n), g(!0)) : (x(!1), j(!1))),
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
        [N, C] = i.useState(v);
    (N !== v && (C(v), v ? w(!0) : A(!1)),
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
              className: nY.qd,
              "data-placement": f,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: o()(nY.vK, { [nY.ho]: p && d, [nY.ET]: !d }),
                      children: [
                          null == c
                              ? (0, a.jsx)("ol", {
                                    className: o()(nY.Rk, nX.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(nR.A, {
                                        glyph: (0, a.jsx)(nZ.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(nT.D, {
                                    className: nY.pZ,
                                    onClick: c,
                                    "aria-label": eb.intl.string(ej.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: o()(nY.Rk, nX.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(nR.A, {
                                            glyph: (0, a.jsx)(nZ.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(tq.m, {
                                    text: eb.intl.string(ej.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(nT.D, {
                                        className: nY.BO,
                                        onClick: E,
                                        "aria-expanded": v,
                                        "aria-label": eb.intl.string(ej.default.RtzECX),
                                        children: (0, a.jsx)(nP.ClipboardListIcon, {
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
                            className: o()(nY.vB, { [nY.pg]: v && S, [nY.ui]: !v }),
                            children: (0, a.jsx)(nW, {
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
var nJ = n(195880),
    n0 = n(287111),
    n1 = n(16619);
function n2(e) {
    let t = (0, n1.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var n3 = n(736553),
    n4 = n(642785);
async function n7(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, n4.dv)(e),
        i = new n3.u();
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
var n5 = n(890497),
    n8 = n(103557),
    n6 = n(29073),
    n9 = n(590077);
function le(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        u = (function (e, t, n, l, r) {
            let a = n2(e),
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
                A = d.trim(),
                N = n && !m && (w.length > 0 ? "" !== A : o.length > 0),
                C = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : (0, n0.RQ)(
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
                    if (!N) return;
                    if (0 === w.length) return void C(o);
                    (h(!0), p(!1));
                    let l =
                        ((t = ti.Ay.getProject(e)?.name ?? e),
                        (n = eb.intl.formatToPlainString(ej.default.ScoZLp, { name: t, projectId: e })),
                        `${A}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, nJ.m)() }), x.current.set(e.projectId, t)),
                                n7(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...o, ...t.map((e) => ({ target: e, prompt: A }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && C(n);
                            return;
                        }
                        (c(n), u(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), p(!0));
                    });
                }, [N, C, o, e, w, A]),
                E = i.useCallback(() => {
                    ((v.current = !0), o.length > 0 && !m && C(o), l());
                }, [C, o, l, m]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: S,
                prompt: d,
                setPrompt: f,
                sending: m,
                failed: g,
                canSubmit: N,
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
        f = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: o()(n6.nd, n6.jx),
        "aria-labelledby": f,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: n6.wx,
                children: [
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        id: f,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: n6.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tV.K, {
                        icon: tM.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: u.dismiss,
                        "aria-label": eb.intl.string(ej.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: n9.r,
                children: [
                    0 === c.length
                        ? (0, a.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eb.intl.string(ej.default.TbbzW5),
                          })
                        : (0, a.jsx)(n5.Z, {
                              label: eb.intl.string(ej.default["29gr8j"]),
                              placeholder: eb.intl.string(ej.default.twlOb6),
                              options: c,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...u.targetIds],
                              onSelectionChange: u.setTargetIds,
                              disabled: u.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(n8.f, {
                        label: eb.intl.string(ej.default.XZNsDA),
                        value: u.prompt,
                        onChange: u.setPrompt,
                        maxLength: 4e3,
                        disabled: u.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: u.failed ? eb.intl.string(ej.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: n6.qr,
                children: (0, a.jsx)("div", {
                    className: n6.zt,
                    children: (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: eb.intl.string(ej.default.gG4j6o),
                        disabled: !u.canSubmit,
                        loading: u.sending,
                        onClick: u.submit,
                    }),
                }),
            }),
        ],
    });
}
var lt = n(47167),
    ln = n(734057),
    ll = n(994500),
    lr = n(287809),
    la = n(360047);
function li(e) {
    return 0 === e.options.length && null == e.input;
}
function ls(e, t, n, l) {
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
let lu = {
    [e2.rbe.GUILD_TEXT]: "text",
    [e2.rbe.GUILD_VOICE]: "voice",
    [e2.rbe.GUILD_ANNOUNCEMENT]: "announcement",
    [e2.rbe.GUILD_STAGE_VOICE]: "stage",
    [e2.rbe.GUILD_FORUM]: "forum",
    [e2.rbe.GUILD_MEDIA]: "media",
};
function lo(e, t, n, l) {
    return t.slice(0, 10).map((t) => ({
        id: t,
        name: n(t) ?? l.find((e) => e.id === t)?.name ?? t,
        ...(function (e, t) {
            if ("channel" === e) {
                var n;
                let l = null == (n = ln.A.getChannel(t)?.type) ? void 0 : lu[n];
                return { kind: e, ...(null == l ? {} : { channel_type: l }) };
            }
            if ("user" === e) {
                let n = lr.default.getUser(t)?.username;
                return { kind: e, ...(null == n ? {} : { username: n }) };
            }
            return { kind: e };
        })(e, t),
    }));
}
let lc = { channel: "#", role: "@", user: "@", project: "", server: "" },
    ld = {
        channel: [ej.default["9+dfPT"], ej.default.pGSJqE],
        role: [ej.default["2VkCoD"], ej.default.c8YlX8],
        user: [ej.default.GZIAxl, ej.default["4bptbQ"]],
        project: [ej.default.twlOb6, ej.default.twlOb6],
        server: [ej.default.ZWXDeI, ej.default.ZWXDeI],
    };
function lf(e, t) {
    return eb.intl.string(ld[e][+!!t]);
}
var lm = n(658675),
    lh = n(22231),
    lg = n(123292),
    lp = n(900797),
    lx = n(691885);
function lv(e) {
    let { label: t, hideLabel: n, autoFocus: l, value: r, disabled: s, onChange: u } = e,
        o = i.useMemo(() => la.Hi.map((e) => ({ id: e, value: e, label: (0, la.hU)(e) })), []);
    return (0, a.jsx)(lx.l, {
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
var lj = n(344587),
    lb = n(155078);
function ly(e) {
    return !0 === e.upload || e.options.some((e) => null != e.image);
}
let lk = [];
function lw(e) {
    return !0 !== e.upload ? null : eb.intl.string(e.options.length > 0 ? ej.default.dkzChE : ej.default.ZZ641e);
}
function lS(e) {
    return e?.kind === "image" || (e?.kind === "multi" && null != e.attachment);
}
function lA(e, t) {
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
    lI = n(614733),
    lE = n(904363),
    lM = n(950902),
    l_ = n(136722),
    lT = n(66834),
    lP = n(808728),
    lR = n(696451),
    lL = n(71393),
    l$ = n(488926),
    lq = n(426035),
    lD = n(246338);
let lF = l_.kg(e2.xBc.VIEW_CHANNEL, e2.xBc.SEND_MESSAGES);
var lO = n(384017);
function lz(e) {
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
        return lo(n.input ?? "channel", e, (e) => o.find((t) => t.value === e)?.label, l);
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
        className: lO.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(n5.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(n5.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function lG(e) {
    let { projectId: t, guildId: n, fallback: l, ...r } = e,
        s = (0, lC.A)(n, r.question.channel_filter);
    return (!(function (e) {
        let t,
            n,
            { projectId: l, guildId: r, question: a, value: s, disabled: u, onChange: o } = e,
            d =
                ((t = null != r && "channel" === a.input && "safety_alerts_channel" === a.default),
                (n = (0, c.bG)(
                    [ti.Ay],
                    () => {
                        let e = t ? ti.Ay.getProject(l) : null;
                        return null == e ? null : (0, lq.ug)(e);
                    },
                    [l, t],
                )),
                i.useEffect(() => {
                    null == r || null == n || lR.Ay.isMember(r, n) || lT.A.requestMembersById(r, [n]);
                }, [r, n]),
                (0, c.bG)(
                    [lP.Ay, lR.Ay, lL.A],
                    () => {
                        if (!t || null == r) return null;
                        let e = lL.A.getGuild(r)?.safetyAlertsChannelId,
                            l = lP.Ay.getChannels(r);
                        if (null == e || null == l) return null;
                        let i = (0, lD.Lp)(l, a.channel_filter).find((t) => t.id === e);
                        if (null == i) return null;
                        if (null != n && lR.Ay.isMember(r, n))
                            return l$.$3({ permission: lF, user: n, context: i }) ? i : null;
                        let s = i.permissionOverwrites[r]?.deny ?? l_.BY;
                        return l_.X8(s, lF) ? null : i;
                    },
                    [r, n, t, a.channel_filter],
                )),
            f = i.useRef(null),
            m = i.useRef(!1);
        i.useEffect(() => {
            if (!m.current && !u && null != r) {
                if (null == f.current) {
                    if (s.length > 0) m.current = !0;
                    else if (null != d) {
                        var e;
                        ((f.current = d.id),
                            o(((e = []), lo("channel", [d.id], () => (0, lt.m1)(d, lr.default, ll.A), e)), r));
                    }
                    return;
                }
                1 !== s.length || s[0].id !== f.current ? (m.current = !0) : null == d && ((m.current = !0), o([], r));
            }
        }, [d, u, r, o, s]);
    })({ projectId: t, guildId: n, ...r }),
    null == s)
        ? l
        : (0, a.jsx)(lz, { ...r, guildId: n, options: s, placeholder: lf("channel", !0 === r.question.multi_select) });
}
function lU(e) {
    let { guildId: t, ...n } = e,
        l = (0, lE.A)(t);
    return (0, a.jsx)(lz, { ...n, guildId: t, options: l, placeholder: lf("role", !0 === n.question.multi_select) });
}
function lB(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, lI.A)(t);
    return (0, a.jsx)(lz, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lf("user", !0 === n.question.multi_select),
    });
}
function lK(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = n2(t),
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
    return 0 === s.length ? n : (0, a.jsx)(lz, { ...l, options: s, placeholder: lf("project", !1) });
}
function lH(e) {
    let t = e.target;
    (0, tR.vq)(t, HTMLInputElement) && requestAnimationFrame(() => t.select());
}
function lV(e) {
    let { fallback: t, ...n } = e,
        l = (0, n1.z9)("ConjureClarificationEntityPicker"),
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
              onFocus: lH,
              onMouseUp: lH,
              children: (0, a.jsx)(lz, { ...n, options: r, placeholder: lf("server", !1) }),
          });
}
function lW(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, lM.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(lK, { projectId: t, fallback: n, ...l }, l.question.id);
    if ("server" === l.question.input) return (0, a.jsx)(lV, { fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(lG, { projectId: t, guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(lU, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(lB, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var lZ = n(87221),
    lX = n(26430),
    lY = n(750943),
    lQ = n(173936),
    lJ = n(95477),
    l0 = n(256905),
    l1 = n(490707),
    l2 = n(907702);
function l3(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: u, handleError: c } = (0, l1._)(t, n),
        [d, f] = i.useState(null),
        m = null != s && d === s;
    return u
        ? (0, a.jsxs)("span", {
              className: o()(l2.Gt, l2.b6),
              children: [
                  (0, a.jsx)(lZ.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: eb.intl.string(ej.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: o()(l2.Gt, { [l2.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: l2.Sl,
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
function l4(e) {
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
            onRemove: p,
        } = e,
        v = eb.intl.formatToPlainString(ej.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: o()(l2.Vs, { [l2.Q9]: s, [l2.RX]: u }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(nT.D, {
                className: o()(l2.Up, { [l2.XF]: null != r.image }),
                "data-conjure-image-option-pick": !0,
                onClick: u ? (null != r.image ? () => m(r) : void 0) : () => f(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), h(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": eb.intl.formatToPlainString(ej.default.AQbxhf, { answer: r.label }),
                "aria-disabled": u,
                tabIndex: c && d ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: l2.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(l3, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: g,
                                  })
                                : (0, a.jsx)("span", { className: l2.Gt }),
                            (0, a.jsx)("span", {
                                className: l2.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(lm.P, { checked: s, disabled: u })
                                    : (0, a.jsx)(ty.T, { checked: s, disabled: u }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: l2.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lb.E)(t) : "")
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
                      className: l2.B4,
                      children: (0, a.jsx)(tq.m, {
                          text: eb.intl.string(ej.default.HQEXJM),
                          children: (0, a.jsx)(tV.K, {
                              icon: tQ.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: u,
                              "aria-label": eb.intl.string(ej.default.HQEXJM),
                              tabIndex: c ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: l2.B4,
                        children: (0, a.jsx)(tq.m, {
                            text: eb.intl.string(ej.default["4/eeDD"]),
                            children: (0, a.jsx)(tV.K, {
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
function l7(e) {
    let { projectId: t, question: n, selectedIds: l, disabled: r, reachable: s = !0, onPick: u, own: c } = e,
        d = !0 === n.multi_select,
        { options: f } = n,
        m = f.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        g = i.useRef(new Map()),
        [p, x] = i.useState(null),
        v = null != p && f.some((e) => e.id === p) ? p : (f.find((e) => l.includes(e.id)) ?? f[0])?.id,
        j = i.useMemo(() => {
            var e;
            return null == c.image
                ? null
                : ((e = c.image),
                  {
                      id: `own:${e.attachment.id}`,
                      label: eb.intl.string(ej.default.SUdqCQ),
                      image: { attachment_id: e.attachment.id },
                  });
        }, [c.image]),
        b = i.useCallback(
            (e) => {
                let n = (null == j ? f : [...f, j]).flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = n.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(n.map((e) => (0, t$.PK)(t, e.image.attachment_id))).then(
                        (e) => {
                            (0, l0.R)({
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
            [f, j, t],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (x(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || r || u(l));
            },
            [r, d, u, f],
        );
    return (0, a.jsxs)("div", {
        className: l2.Nz,
        "data-conjure-image-options": !0,
        children: [
            0 === f.length && null == j
                ? null
                : (0, a.jsxs)("div", {
                      ref: h,
                      className: o()(l2.fF, "gallery" === m ? l2.nV : l2.nM, { [l2.m3]: d }),
                      role: d ? "group" : "radiogroup",
                      "aria-labelledby": `${n.id}-label`,
                      "data-layout": m,
                      "data-count": f.length,
                      children: [
                          f.map((e) =>
                              (0, a.jsx)(
                                  l4,
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
                                    l4,
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
            (0, a.jsx)(l5, {
                projectId: t,
                own: c,
                disabled: r,
                reachable: s,
                uploadText: eb.intl.string(/\bicons?\b/i.test(n.question) ? ej.default.qU4WN6 : ej.default.cbMDDB),
            }),
        ],
    });
}
function l5(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        u = i.useRef(null),
        [o, c] = i.useState(!1),
        [f, m] = i.useState(""),
        h = r ? 0 : -1,
        g = n.busy;
    function p() {
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
        className: l2.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: l2.QJ,
                children: [
                    (0, a.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: lY.X,
                        text: s,
                        loading: "upload" === g,
                        disabled: l || "link" === g,
                        onClick: () => u.current?.click(),
                        tabIndex: h,
                        "data-conjure-own-image-upload": !0,
                    }),
                    o
                        ? null
                        : (0, a.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: lQ.LinkIcon,
                              text: eb.intl.string(ej.default["1TgOO+"]),
                              disabled: l || "upload" === g,
                              onClick: () => c(!0),
                              tabIndex: h,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: u,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: l2.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            let l = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""), null != l && n.onUpload((0, n0.rh)(t, l, l.name, l.type)));
                        },
                    }),
                ],
            }),
            o
                ? (0, a.jsxs)("div", {
                      className: l2.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: l2.Hs,
                              children: (0, a.jsx)(lJ.k, {
                                  label: eb.intl.string(ej.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: eb.intl.string(ej.default.AVhvn8),
                                  value: f,
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
                          (0, a.jsxs)("div", {
                              className: l2.gd,
                              children: [
                                  (0, a.jsx)(d.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: eb.intl.string(ej.default.FbRbeM),
                                      loading: "link" === g,
                                      disabled: l || "" === f.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lg.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: eb.intl.string(ej.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(x.E, {
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
function l8(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: u } = e,
        c = i.useId(),
        d = !0 === t.recommended,
        f = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(nT.D, {
        className: o()(lO.uK, { [lO.ue]: l, [lO.h4]: !0 === u }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": eb.intl.formatToPlainString(d ? ej.default["2p6UFz"] : ej.default.AQbxhf, { answer: t.label }),
        "aria-describedby": f ? c : void 0,
        "aria-disabled": l,
        role: null != u ? "checkbox" : void 0,
        "aria-checked": u,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            null != u
                ? (0, a.jsx)("span", { className: lO.dy, children: (0, a.jsx)(lm.P, { checked: u, disabled: l }) })
                : (0, a.jsx)("span", { className: lO.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: lO.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: lO.l8,
                        children: (0, a.jsx)(x.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: lO.ed,
                            children: t.label,
                        }),
                    }),
                    f
                        ? (0, a.jsx)(x.E, {
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
                ? (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: lO.rM,
                      children: eb.intl.string(ej.default.zku6r1),
                  })
                : null,
        ],
    });
}
function l6(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: u } = e,
        o = !0 === n.multi_select;
    return ly(n)
        ? (0, a.jsx)(l7, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: u })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      l8,
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
let l9 = [],
    re = [];
function rt(e) {
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
        f = !0 === n.multi_select ? eb.intl.string(ej.default.tE8qbz) : lw(n);
    return (0, a.jsxs)("div", {
        className: o()(lO.Ge, lO.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            null == f
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: lO.aK,
                      children: f,
                  }),
            (0, a.jsx)(l6, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: lA(u, c),
            }),
            !1 === n.allow_custom || (!0 !== n.upload && ly(n))
                ? null
                : (0, a.jsxs)("div", {
                      className: lO.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lO.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lh.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == d ? null : (0, a.jsx)("span", { className: o()(lO.Pu, lO.es), children: d }),
                      ],
                  }),
            !0 === n.upload
                ? (0, a.jsx)("div", {
                      className: lO.$0,
                      children: (0, a.jsx)(lg.Q, {
                          variant: "secondary",
                          textVariant: "text-sm/medium",
                          text: eb.intl.string(ej.default.zxSq2q),
                          disabled: s,
                          tabIndex: -1,
                      }),
                  })
                : null,
        ],
    });
}
function rn(e) {
    var t;
    let {
            projectId: n,
            clarification: l,
            onSubmit: r,
            onDismiss: s,
            submitText: u,
            onBack: c,
            backText: f,
            hideSubmit: m = !1,
            headingLines: h = 5,
        } = e,
        [g, p] = i.useState({}),
        [v, j] = i.useState({}),
        [b, y] = i.useState({}),
        [k, w] = i.useState(() =>
            Object.fromEntries(
                l.questions.flatMap((e) => (null != e.default_entities ? [[e.id, e.default_entities]] : [])),
            ),
        ),
        [S, A] = i.useState({}),
        [N, C] = i.useState({}),
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
        [Z, X] = i.useState({ id: W.id, expanded: !1 }),
        Y = Z.id === W.id && Z.expanded,
        [Q, J] = i.useState(null),
        ee = v[W.id] ?? "",
        et = !0 === W.multi_select,
        en = ly(W),
        el = et ? eb.intl.string(ej.default.tE8qbz) : lw(W),
        er = et
            ? (b[W.id] ?? l9)
            : ((t = g[W.id]), t?.kind === "option" ? [t.optionId] : t?.kind === "multi" ? t.optionIds : lk),
        ea = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [u, o] = i.useState({}),
                c = eb.intl.string(ej.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                f = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === u[e.id] : lS(t[e.id])),
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
                        if (u) return lA(h, f(i));
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
                                    ((0, t$.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    o((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (m || !lS(e[d])) return e;
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
        })(n, g, p),
        ei = ea.imageFor(W.id),
        es = ea.selectedFor(W),
        { text: eu, phase: eo } = (0, lj.Q)(W.question),
        ec = eu === W.question,
        ed = ec && Q?.id === W.id && Q.truncated;
    i.useLayoutEffect(() => {
        if (null == z || Y || !ec) return;
        function e() {
            if (null == z) return;
            let e = z.scrollHeight > z.clientHeight + 1;
            J((t) => (t?.id === W.id && t.truncated === e ? t : { id: W.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(z), () => t.disconnect());
    }, [ec, z, W.id, Y]);
    let ef = eb.intl.string(Y ? eb.t.iTcuma : eb.t.dcl9MQ),
        em = i.useCallback(
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
                                              return (0, la.Ol)(n, e, l);
                                          }),
                                      ).then(a));
                        }
                    })(n, l, e, N, r);
            },
            [l, N, r, n],
        ),
        eh = i.useCallback(
            (e, t) => {
                B.current += 1;
                let n = B.current;
                (P({ direction: t, moves: n }),
                    L({ question: W, draft: ee, selected: er, ownImage: ei, ownSelected: es, direction: t, moves: n }),
                    F(!0),
                    _(e));
            },
            [ee, ei, es, W, er],
        ),
        eg = i.useCallback(() => {
            let e = O.current,
                t = U.current;
            null != e && null != t && q({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = O.current,
            t = U.current;
        if (null == e || null == t) return;
        eg();
        let n = new ResizeObserver(eg);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [eg]);
    let ep = T?.moves;
    i.useEffect(() => {
        if (null == ep) return;
        let e = setTimeout(() => L(null), 400),
            t = setTimeout(() => F(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ep]);
    let ex = i.useCallback(
            (e) => {
                if (K) return;
                let t = { ...g, [W.id]: e };
                p(t);
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
                null == n ? em(t) : eh(n, n < V ? "back" : "forward");
            },
            [g, l, K, V, W.id, em, eh],
        ),
        ev = i.useCallback(() => {
            K || 0 === V || eh(V - 1, "back");
        }, [K, V, eh]),
        ey = 0 !== V || K ? void 0 : c,
        ek = (V > 0 && !K) || null != ey,
        ew = i.useCallback(
            (e) => {
                j((e) => ({ ...e, [W.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                en ? K || p((e) => ({ ...e, [W.id]: t })) : ex(t);
            },
            [K, en, W.id, ex],
        ),
        eS = i.useCallback(() => {
            (j((e) => ({ ...e, [W.id]: "" })), ex({ kind: "custom", text: eb.intl.string(ej.default.zxSq2q) }));
        }, [W.id, ex]),
        { multiPartFor: eA } = ea,
        eN = i.useMemo(() => (et ? ls(W, er, ee, eA(W)) : null), [ee, et, eA, W, er]),
        eC = k[W.id] ?? re,
        eI = i.useMemo(() => {
            var e, t;
            let n;
            return null != W.input
                ? ((e = W.input),
                  (t = S[W.id]),
                  (n = ee.trim()),
                  {
                      kind: "entities",
                      entities: eC,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eC.map((t) => (t.name.startsWith(lc[e]) ? t.name : `${lc[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [ee, S, eC, W.id, W.input]),
        eE = i.useCallback(
            (e, t) => {
                (w((t) => ({ ...t, [W.id]: e })), A((e) => ({ ...e, [W.id]: t })));
            },
            [W.id],
        ),
        eM = i.useCallback(() => E(!0), []),
        e_ = i.useCallback(() => E(!1), []),
        eT = ea.controlsFor(W, K),
        eP = i.useMemo(() => {
            var e;
            let t;
            return (
                (e = g[W.id]),
                null ==
                (t = (function (e, t) {
                    if (!0 !== e.upload || !0 === e.multi_select || null == t) return null;
                    if ("option" === t.kind || "image" === t.kind) return t;
                    if ("multi" !== t.kind) return null;
                    if (null != t.attachment)
                        return { kind: "image", attachment: t.attachment, text: eb.intl.string(ej.default.wTsP5l) };
                    let n = e.options.find((e) => {
                        let { id: n } = e;
                        return t.optionIds.includes(n);
                    });
                    return null != n ? { kind: "option", optionId: n.id, text: n.label } : null;
                })(W, e))
                    ? null
                    : "" === ee.trim()
                      ? e?.kind === "multi"
                          ? t
                          : null
                      : "option" === t.kind
                        ? ls(W, [t.optionId], ee)
                        : ls(W, [], ee, t)
            );
        }, [g, ee, W]),
        eR = i.useMemo(
            () =>
                (function (e, t, n) {
                    if (null != e) return "" !== e.text ? e : null;
                    if (null != t) return "" !== t.text ? t : null;
                    let l = n.trim();
                    return "" !== l ? { kind: "custom", text: l } : null;
                })(eI, eN ?? eP, ee),
            [ee, eN, eP, eI],
        ),
        eL = i.useCallback(() => {
            null != eR && ex(eR);
        }, [eR, ex]),
        [e$, eq] = i.useState(!1),
        [eD, eF] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eq(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eO = i.useCallback(() => {
            null != s && (eF(!0), setTimeout(s, 150));
        }, [s]),
        ez = eR ?? (null == eI && null == eN ? (g[W.id] ?? null) : null),
        eG = null != ez && !K,
        eU = V === H - 1,
        eB = i.useCallback(() => {
            null == ez || K || ex(ez);
        }, [K, ez, ex]),
        eK = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, tR.vq)(e.target, HTMLTextAreaElement) ||
                    (0, tR.vq)(e.target, HTMLInputElement) ||
                    ((!(0, tR.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ek
                            ? (e.preventDefault(), (ey ?? ev)())
                            : "ArrowRight" === e.key && eG && (e.preventDefault(), eB())));
            },
            [ey, ek, eG, ev, eB],
        ),
        eH =
            en && !0 !== W.upload
                ? null
                : (0, a.jsxs)("div", {
                      className: lO.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: lO.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lh.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          (0, a.jsx)(tF.y, {
                              value: ee,
                              onChange: (e) => {
                                  let { value: t } = e.currentTarget;
                                  j((e) => ({ ...e, [W.id]: t }));
                              },
                              onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), eL());
                              },
                              placeholder: eb.intl.string(li(W) ? ej.default.yLN1x6 : ej.default["tOC+tn"]),
                              "aria-label": eb.intl.formatToPlainString(ej.default["4JeYPB"], { question: W.question }),
                              disabled: K,
                              rows: 1,
                              className: lO.Pu,
                              "data-conjure-clarification-other": W.id,
                          }),
                      ],
                  });
    return (0, a.jsxs)("section", {
        className: o()(lO.$O, { [lO.fI]: e$ && !eD, [lO.Oh]: eD }),
        role: "dialog",
        "aria-label": W.question,
        "data-conjure-clarification": l.id,
        "data-state": K ? "inert" : "open",
        "data-question-expanded": Y ? "true" : void 0,
        "data-picker-open": I && !D ? "true" : void 0,
        "data-step": V,
        tabIndex: -1,
        onKeyDown: eK,
        children: [
            (0, a.jsxs)("div", {
                className: lO.rf,
                style: null == $ ? void 0 : { height: $.heading + $.rows },
                "data-moving": D ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: O,
                        className: lO.wx,
                        children: [
                            (0, a.jsx)(x.E, {
                                ref: G,
                                tag: "span",
                                id: `${W.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: Y ? void 0 : h,
                                className: o()(n6.TK, lO.R_, { [lO.TB]: "exit" === eo, [lO.JU]: "enter" === eo }),
                                children: eu,
                            }),
                            ed || Y
                                ? (0, a.jsx)("div", {
                                      className: n6.Q7,
                                      children: (0, a.jsx)(tq.m, {
                                          text: ef,
                                          children: (0, a.jsx)(tV.K, {
                                              icon: Y ? lp.t : e9.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => X({ id: W.id, expanded: !Y }),
                                              "aria-label": ef,
                                              "aria-controls": `${W.id}-label`,
                                              "aria-expanded": Y,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(nT.D, {
                                      className: o()(n6.gb, n6.Q7),
                                      onClick: eO,
                                      "aria-label": eb.intl.string(ej.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(tM.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: lO.Cg,
                        style: null == $ ? void 0 : { insetBlockStart: $.heading },
                        children: (0, a.jsxs)("div", {
                            className: lO.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: U,
                                    className: lO.Ge,
                                    role: "group",
                                    "aria-labelledby": `${W.id}-label`,
                                    "data-direction": T?.direction,
                                    "data-parity": null == T ? void 0 : T.moves % 2,
                                    children: [
                                        null == el
                                            ? null
                                            : (0, a.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lO.aK,
                                                  children: el,
                                              }),
                                        (0, a.jsx)(l6, {
                                            projectId: n,
                                            question: W,
                                            selected: er,
                                            disabled: K,
                                            onPick: (e) =>
                                                et
                                                    ? y((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [W.id]:
                                                                  ((n = t[W.id] ?? l9),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  W.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ew(e),
                                            own: eT,
                                        }),
                                        null != W.input
                                            ? (0, a.jsx)(lW, {
                                                  projectId: n,
                                                  question: W,
                                                  value: eC,
                                                  disabled: K,
                                                  onChange: eE,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  fallback: !1 === W.allow_custom ? eH : null,
                                              })
                                            : null,
                                        !0 === W.link && eC.length > 0 && null == N[W.id]
                                            ? (0, a.jsx)("div", {
                                                  className: lO.X_,
                                                  children: (0, a.jsx)(lg.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: eb.intl.string(ej.default.eCzCxC),
                                                      disabled: K,
                                                      onClick: () => C((e) => ({ ...e, [W.id]: "auto" })),
                                                  }),
                                              })
                                            : null,
                                        !0 === W.link && eC.length > 0 && null != N[W.id]
                                            ? (0, a.jsxs)("div", {
                                                  className: lO.$y,
                                                  onFocus: eM,
                                                  onBlur: e_,
                                                  children: [
                                                      (0, a.jsx)(x.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-muted",
                                                          "aria-hidden": !0,
                                                          children: eb.intl.string(ej.default.Odrcmq),
                                                      }),
                                                      (0, a.jsx)(lv, {
                                                          label: eb.intl.string(ej.default.Odrcmq),
                                                          hideLabel: !0,
                                                          autoFocus: !0,
                                                          value: N[W.id] ?? "auto",
                                                          disabled: K,
                                                          onChange: (e) => C((t) => ({ ...t, [W.id]: e })),
                                                      }),
                                                  ],
                                              })
                                            : null,
                                        null != W.note
                                            ? (0, a.jsx)(x.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: lO.aK,
                                                  children: W.note,
                                              })
                                            : null,
                                        !1 === W.allow_custom ? null : eH,
                                        !0 === W.upload
                                            ? (0, a.jsx)("div", {
                                                  className: lO.$0,
                                                  children: (0, a.jsx)(lg.Q, {
                                                      variant: "secondary",
                                                      textVariant: "text-sm/medium",
                                                      text: eb.intl.string(ej.default.zxSq2q),
                                                      disabled: K,
                                                      onClick: eS,
                                                      "data-conjure-no-image": !0,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                null == R
                                    ? null
                                    : (0, a.jsx)(
                                          rt,
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
            H > 1 || et || en || null != W.input || null != c || li(W)
                ? (0, a.jsxs)("div", {
                      className: n6.qr,
                      children: [
                          (0, a.jsx)(x.E, {
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
                              className: n6.zt,
                              children: [
                                  ek
                                      ? (0, a.jsx)(lg.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: f ?? eb.intl.string(ej.default.Pk5lfA),
                                            onClick: ey ?? ev,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  m
                                      ? null
                                      : (0, a.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: eU
                                                ? (u ?? eb.intl.string(eb.t.geKm7t))
                                                : eb.intl.string(ej.default.w1nRmT),
                                            disabled: !eG,
                                            onClick: eB,
                                            "data-conjure-clarification-next": !0,
                                            "data-submits": eU ? "true" : void 0,
                                        }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var rl = n(557744),
    rr = n(223347),
    ra = n(894443),
    ri = n(525530),
    rs = n(245179),
    ru = n(708679);
function ro(e) {
    return (0, c.bG)([ti.Ay], () => ti.Ay.getProject(e)?.install_scope_setup != null, [e]);
}
let rc = "scope-setup:q0",
    rd = `${rc}:0`,
    rf = `${rc}:1`;
var rm = n(715924);
let rh = [];
function rg() {}
function rp(e) {
    let { projectId: t, card: n } = e,
        l = i.useId(),
        [r] = n.clarification.questions,
        [s, u] = i.useState(r.default_entities ?? rh),
        { onPickServer: c, onBack: f } = n,
        m = s[0]?.id;
    return (0, a.jsxs)("section", {
        className: o()(n6.nd, n6.jx),
        "aria-labelledby": l,
        "data-conjure-scope-server-card": !0,
        children: [
            (0, a.jsxs)("div", {
                className: rm.wx,
                children: [
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        id: l,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: eb.intl.string(ej.default.ickKBI),
                    }),
                    (0, a.jsx)(x.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: eb.intl.string(ej.default.OyM4SV),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: rm.Qs,
                children: [
                    (0, a.jsx)(lW, {
                        projectId: t,
                        question: r,
                        value: s,
                        disabled: null == c,
                        onChange: u,
                        onFocus: rg,
                        onBlur: rg,
                    }),
                    null != r.note
                        ? (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
            (0, a.jsxs)("div", {
                className: rm.qr,
                children: [
                    (0, a.jsx)(d.$, {
                        variant: "primary",
                        size: "sm",
                        text: eb.intl.string(ej.default.PTIP7V),
                        disabled: null == m || null == c,
                        onClick: () => {
                            null != m && c?.(m);
                        },
                    }),
                    null != f
                        ? (0, a.jsx)(lg.Q, {
                              variant: "secondary",
                              textVariant: "text-sm/medium",
                              text: eb.intl.string(eb.t["ETE/oC"]),
                              onClick: f,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function rx(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let t = (0, c.bG)([ti.Ay], () => ti.Ay.getProject(e), [e]),
                n = (0, n1.z9)("ConjureScopeSetupCard"),
                [l, r] = i.useState(null),
                [a, s] = i.useState(!1),
                [u, o] = i.useState(null),
                d = t?.install_scope_setup,
                f = "server" === l || (null == l && "choose_server" === d),
                m = t?.guild_id,
                h = i.useMemo(() => {
                    var t;
                    return f
                        ? ((t = m ?? (0, ru.EP)(e)),
                          {
                              id: n.length > 0 ? "server-setup" : "server-setup-empty",
                              questions: [
                                  {
                                      id: "server-setup:q0",
                                      question: eb.intl.string(n.length > 0 ? ej.default.ZWXDeI : ej.default["u5+Qhu"]),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options:
                                          n.length > 0 ? [] : [{ id: rd, label: eb.intl.string(ej.default.qLYOpH) }],
                                      ...(0, ru.XU)(n, t),
                                  },
                              ],
                          })
                        : {
                              id: "scope-setup",
                              questions: [
                                  {
                                      id: rc,
                                      question: eb.intl.string(ej.default.ickKBI),
                                      recommendation_reason: "",
                                      allow_custom: !1,
                                      options: [
                                          {
                                              id: rd,
                                              label: eb.intl.string(ej.default.qLYOpH),
                                              detail: eb.intl.string(ej.default.QSKvUE),
                                          },
                                          {
                                              id: rf,
                                              label: eb.intl.string(ej.default.QV5C7b),
                                              detail: eb.intl.string(ej.default["ZzHR4/"]),
                                          },
                                      ],
                                  },
                              ],
                          };
                }, [f, n, m, e]);
            if (null == d) return null;
            if (null == t || !(0, ti.PV)(t))
                return { clarification: (0, ru.YI)(h), readOnly: !0, hideSubmit: !0, failure: null };
            async function g(t, n) {
                (s(!0), o(null));
                try {
                    await (0, ru.JN)(e, t, n);
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
                          null != n && (n.option_ids.includes(rf) ? r("server") : g("user", null));
                      },
                submitText: eb.intl.string(eb.t["cY+Oob"]),
                onBack: f && !a ? () => r("scope") : void 0,
                hideSubmit: !1,
                serverStep: f && n.length > 0,
                onPickServer: a ? void 0 : (e) => g("guild", e),
                failure: null == u ? null : eb.intl.string("server" === u ? ej.default["XXKd+7"] : ej.default.jNVZ3e),
            };
        })(t);
    return null == n
        ? null
        : n.readOnly
          ? (0, a.jsx)(rn, { projectId: t, clarification: n.clarification, hideSubmit: !0 })
          : (0, a.jsxs)("div", {
                children: [
                    !0 === n.serverStep
                        ? (0, a.jsx)(rp, { projectId: t, card: n }, n.clarification.id)
                        : (0, a.jsx)(
                              rn,
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
                        ? (0, a.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: n.failure,
                          })
                        : null,
                ],
            });
}
function rv(e) {
    let { projectId: t } = e,
        n = (function (e) {
            let { projectId: t, clarification: n, offer: l, onKept: r } = e,
                { scope: a, feature: s } = l,
                u = (0, c.bG)([ti.Ay], () => ti.Ay.getProject(t), [t]),
                o = (0, n1.z9)("ConjureScopeSwitchCard"),
                [d, f] = i.useState(!1),
                [m, h] = i.useState(null),
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
                                ? { ...e, question: t, allow_custom: !1, ...(0, ru.XU)(o, g) }
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
                return { clarification: (0, ru.YI)(p), readOnly: !0, hideSubmit: !0, failure: null };
            async function x(e) {
                (f(!0), h(null));
                try {
                    await (0, ru.yN)(t, n.id, a, e);
                } catch (e) {
                    (f(!1), h(409 === e.status ? "locked" : "failed"));
                }
            }
            return {
                clarification: p,
                readOnly: !1,
                onSubmit: d
                    ? void 0
                    : function (e, t) {
                          let n = t?.answers[0]?.entities?.[0];
                          "user" === a ? x(null) : null != n && x(n.id);
                      },
                submitText: eb.intl.string("guild" === a ? ej.default.Ua7yKM : ej.default.TVRkVh),
                onBack: d
                    ? void 0
                    : function () {
                          (h(null), (0, ru.RW)(t) ? r() : h("failed"));
                      },
                backText: eb.intl.string("guild" === a ? ej.default["4WnIqd"] : ej.default["am+p7p"]),
                hideSubmit: "user" === a,
                failure: null == m ? null : eb.intl.string("locked" === m ? ej.default.irUT0N : ej.default.jNVZ3e),
            };
        })(e);
    return n.readOnly
        ? (0, a.jsx)(
              rn,
              { projectId: t, clarification: n.clarification, headingLines: 1, hideSubmit: !0 },
              n.clarification.id,
          )
        : (0, a.jsxs)("div", {
              children: [
                  (0, a.jsx)(
                      rn,
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
                      ? (0, a.jsx)(x.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: n.failure,
                        })
                      : null,
              ],
          });
}
var rj = n(442331),
    rb = n(564963);
let ry = new Set(["select", "channel", "role", "user"]);
function rk(e, t) {
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
function rw(e, t) {
    let n = e.keys ?? [];
    return n.length > 0 ? n : t.schema.map((e) => e.key);
}
let rS = new Set(),
    rA = new Set();
function rN(e) {
    return (
        rA.add(e),
        () => {
            rA.delete(e);
        }
    );
}
function rC() {
    return i.useSyncExternalStore(rN, () => rS);
}
function rI(e) {
    let t = new Set(),
        n = new Set(),
        l = !1,
        r = !1;
    for (let a = e.length - 1; a >= 0; a--) {
        let i = e[a];
        if (null == i || "assistant" !== i.role || null == i.settingsRequest || !(0, nE.BL)(i)) continue;
        let s = i.settingsRequest.keys ?? [];
        for (let e of ((r || (0 === s.length ? l : s.some((e) => n.has(e)))) && t.add(i.id), s)) n.add(e);
        ((l = !0), (r = r || 0 === s.length));
    }
    return t;
}
function rE(e, t, n) {
    if (!n || null == t) return !1;
    let l = rw(e, t);
    return l.length > 0 && !rk({ keys: l }, t);
}
var rM = n(628284),
    r_ = n(782973),
    rT = n(1665),
    rP = n(11120),
    rR = n(411236);
function rL(e) {
    let { projectId: t, request: n, askId: l, onDismiss: r, notifyAgent: s = !0 } = e,
        {
            done: u,
            superseded: f,
            summary: m,
            markSaved: h,
        } = (function (e, t, n) {
            let l = rC(),
                [r, a] = i.useState(!1),
                s = null != n ? l.has(n) : r,
                u = i.useCallback(() => {
                    if (null != n) {
                        if (!rS.has(n)) for (let e of ((rS = new Set([...rS, n])), rA)) e();
                    } else a(!0);
                }, [n]),
                o = (0, c.bG)([rj.A], () => rE(t, rj.A.getSettings(e), s), [e, t, s]);
            return {
                done: o,
                superseded: (0, c.bG)([rs.A], () => null != n && rI(rs.A.getMessages(e)).has(n), [e, n]),
                summary: (0, c.yK)(
                    [rj.A, ln.A],
                    () => {
                        var n;
                        let l = rj.A.getSettings(e);
                        return null == l
                            ? []
                            : ((n = (e) => ln.A.getChannel(e)?.name ?? null),
                              rw(t, l).flatMap((e) => {
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
        g = null == r && u;
    if (f && !g)
        return (0, a.jsx)("article", {
            className: rR.Mk,
            children: (0, a.jsx)(x.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: eb.intl.string(ej.default["+uXDk+"]),
            }),
        });
    if (g)
        return (0, a.jsxs)("article", {
            className: rR.Mk,
            children: [
                (0, a.jsxs)("div", {
                    className: rR.Ol,
                    children: [
                        (0, a.jsx)(rM.y, { size: "xs", color: t0.A.colors.ICON_FEEDBACK_POSITIVE, "aria-hidden": !0 }),
                        (0, a.jsx)(x.E, {
                            variant: "text-xs/semibold",
                            color: "text-feedback-positive",
                            tag: "span",
                            children: eb.intl.string(ej.default.AxBLLy),
                        }),
                    ],
                }),
                m.length > 0
                    ? (0, a.jsx)(x.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          selectable: !0,
                          children: m.join(" \xb7 "),
                      })
                    : null,
            ],
        });
    let p = n.keys?.length === 1 && n.keys[0] === r_.B,
        v = null != n.note && "" !== n.note ? n.note : p ? null : eb.intl.string(ej.default.XuOf5s);
    return (0, a.jsx)(rP.A, {
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
            let u = (0, a.jsx)(d.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: l,
                disabled: !n,
                text: eb.intl.string(ej.default.A7dQd9),
            });
            return null == r
                ? (0, a.jsxs)("form", {
                      className: rR.Mk,
                      onSubmit: s,
                      children: [
                          (0, a.jsx)(x.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: eb.intl.string(ej.default["jZjP+I"]),
                          }),
                          null != v
                              ? (0, a.jsx)(rT.A, { text: v, variant: "text-sm/normal", color: "text-default" })
                              : null,
                          t,
                          (0, a.jsx)("div", { className: rR.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: o()(n6.nd, n6.jx),
                      "aria-label": eb.intl.string(ej.default["jZjP+I"]),
                      onSubmit: s,
                      children: [
                          (0, a.jsxs)("div", {
                              className: n6.wx,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: n6.TK,
                                      children: eb.intl.string(ej.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(nT.D, {
                                      className: o()(n6.gb, n6.Q7),
                                      onClick: r,
                                      "aria-label": eb.intl.string(ej.default["iq+Pte"]),
                                      children: (0, a.jsx)(tM.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rR.DQ,
                              children: [
                                  null != v
                                      ? (0, a.jsx)(rT.A, { text: v, variant: "text-sm/normal", color: "text-default" })
                                      : null,
                                  t,
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: n6.qr,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      className: rR.xE,
                                      children: eb.intl.string(ej.default["1w0jMk"]),
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: n6.zt,
                                      children: [
                                          (0, a.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              onClick: r,
                                              text: eb.intl.string(ej.default["9J3OG8"]),
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
var r$ = n(975571),
    rq = n(427123);
let rD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
var rF = n(874421),
    rO = n(932111),
    rz = n(940874),
    rG = n(404373),
    rU = n(89222);
function rB(e) {
    return "" !== rU.A.getDraft(e).trim();
}
var rK = n(29080);
function rH(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: u } = e,
        o = (0, nI.B4)(r),
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
        })({ hasAttachments: u, showsClosingMessage: h, endsOnStreamedMessage: (0, nI.Lf)(r) }),
    };
}
var rV = n(62617),
    rW = n(780171);
let rZ = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    rX = {
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
    rY = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    u = i.useMemo(
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, rV.Z)(),
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
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, rV.Z)(),
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
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, rV.Z)(),
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
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, rV.Z)(),
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
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, rV.Z)(),
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
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, rV.Z)(),
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
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, rV.Z)(),
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
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, rV.Z)(),
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
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, rV.Z)(),
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
                        () => (0, rV.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: u,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, rV.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: { Illocon: rW.u, tint: "var(--illo-purple-40)" },
    };
function rQ(e) {
    return { ...rY[e], name: eb.intl.string(rX[e]()) };
}
function rJ(e) {
    return rZ.includes(e) ? rQ(e) : void 0;
}
function r0(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % rZ.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, rZ[(t + n) % rZ.length]);
            }),
            l
        );
    })(e))
        t.set(n, rQ(l));
    return t;
}
var r1 = n(615839);
function r2(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : eb.intl.string(ej.default.KcFvbo);
}
var r3 = n(60160),
    r4 = n(16634);
function r7(e) {
    let t = (0, nI.SY)(e.steps);
    return null != t ? (0, nI.WQ)(t) : r2(e.task);
}
function r5(e) {
    let t = r0(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? rJ(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: r2(e.task),
                      todoId: e.task.todoId,
                      line: r7(e),
                  },
              ];
    });
}
function r8(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        u = n.task,
        o = "running" === u.status,
        c = (0, nI.SY)(n.steps),
        d = o
            ? r7(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(r2(e));
                  switch (e.status) {
                      case "failed":
                          return eb.intl.formatToPlainString(ej.default.YrVgOf, { task: t });
                      case "cancelled":
                          return eb.intl.formatToPlainString(ej.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.resultText && "" !== e.resultText) return e.resultText;
                          if (null != e.durationMs)
                              return eb.intl.formatToPlainString(ej.default["++9woZ"], {
                                  task: t,
                                  duration: (0, r1.MB)(e.durationMs),
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
                                    className: nX.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            r4.A,
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
                                      className: nX.iq,
                                      children: (0, a.jsx)(r3.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(nR.A, {
        glyph: (0, a.jsx)(nL.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: r2(u),
            position: "left",
            children: (0, a.jsx)("span", {
                className: nX.nC,
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
    r9 = n(643210),
    ae = n(648127),
    at = n(372795),
    an = n(163897);
let al = "conjure-browser-viewer";
function ar(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, c.yK)(
            [r9.A],
            () =>
                n.flatMap((e) => {
                    let n = r9.A.getTab(t, e);
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
        className: an.kR,
        "aria-label": eb.intl.string(ej.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(aa, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function aa(e) {
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
        c = (0, eE.useHasModalOpen)(al),
        [d, f] = i.useState(!1),
        m = i.useCallback((e, t) => f(t), []),
        { ended: h } = l,
        g = (0, ae.i)(l.session);
    return (0, a.jsxs)(nT.D, {
        innerRef: s,
        className: o()(an.Nr, h && an.Xj),
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
                    { modalKey: al },
                )
            );
        },
        "aria-label": eb.intl.formatToPlainString(ej.default.G3a822, { title: g }),
        children: [
            (0, a.jsxs)("div", {
                className: an.Gt,
                children: [
                    (0, a.jsx)(at.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !u || c || h,
                        className: an.Ji,
                        "aria-label": eb.intl.formatToPlainString(ej.default.rnwqXb, { name: g }),
                        onStateChange: m,
                    }),
                    d
                        ? null
                        : (0, a.jsx)("div", {
                              className: an.qf,
                              children: (0, a.jsx)(r6.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    h
                        ? (0, a.jsx)("div", {
                              className: an.HS,
                              children: (0, a.jsx)(x.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: eb.intl.string(ej.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: an.pG,
                children: [
                    (0, a.jsx)("span", { className: o()(an.W9, h && an.oM) }),
                    (0, a.jsx)(x.E, {
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
var ai = n(268409);
let as = new WeakMap(),
    au = new WeakMap();
function ao(e) {
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
            [rs.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = as.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = au.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), au.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (as.set(e, n), n);
                })(rs.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: ai.h, children: (0, a.jsx)(ar, { projectId: t, sessionIds: u }) });
}
var ac = n(469393);
function ad(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, eM.lG)(t.authored_at);
    return (0, a.jsx)(nF, {
        title: eb.intl.string(ej.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: ac.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ac.z,
                    children: [
                        (0, a.jsx)(x.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(x.E, {
                                  variant: "text-sm/normal",
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
                          text: eb.intl.string(ej.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var af = n(493490),
    am = n(17742);
let ah = [];
function ag(e) {
    let t = (0, c.bG)([af.A], () => (null != e ? af.A.getCaptures(e) : ah)),
        n = (0, c.bG)([af.A], () => (null != e ? af.A.getSelectedCapture(e) : null)),
        [l, r] = i.useState(null),
        a = null != n ? `${n.id}:${n.image_etag}` : null;
    return (
        i.useEffect(() => {
            if (null == e || null == n || null == a) return;
            let t = !1;
            return (
                (async () => {
                    try {
                        let l = await (0, am._F)(e, n);
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
var ap = n(714917),
    ax = n(463660),
    av = n(970211);
function aj(e) {
    let { projectId: t, gameCaptures: n = !1 } = e,
        {
            src: l,
            blurred: r,
            handleError: s,
        } = (function (e, t) {
            let n = (0, c.bG)([ap.A], () => (null != e ? ap.A.getBackground(e) : null)),
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
                        (async function (e, l) {
                            let r;
                            try {
                                r = await (0, ax.Mg)(e, l);
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
                    m === f && u(f);
                }, [m, f]);
            return { src: null == e || null != n || o ? m : null, blurred: n?.blur !== !1, handleError: h };
        })(t, "/assets/7cec34541705c795.webp"),
        u = ag(n ? t : null);
    return null != u.selected
        ? null != u.src
            ? (0, a.jsx)("img", { className: av.F1, src: u.src, alt: "", "aria-hidden": !0 })
            : null
        : null == l
          ? null
          : (0, a.jsx)("img", {
                className: o()(av.LO, { [av.Ty]: r }),
                src: l,
                alt: "",
                "aria-hidden": !0,
                onError: s,
            });
}
var ab = n(155718);
function ay(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let ak = ["command", "user_command", "message_command", "message"],
    aw = new Set([ab.kc.CHAT, ab.kc.USER, ab.kc.MESSAGE]);
function aS(e) {
    return e.type ?? ab.kc.CHAT;
}
function aA(e) {
    return aw.has(aS(e));
}
function aN(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aC(e, t) {
    let n = ak.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !aN(e)), ...n.filter(aN)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || aN(r) || l.push(r);
    }
    return ak.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function aI(e, t, n) {
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
    let s = e.commands.filter(aA).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (aS(e)) {
                    case ab.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case ab.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        u = "messages" === t ? [] : s.filter(aN),
        o = a.length > 0 ? aC([...a, ...u], !0) : aC("both" === t ? [...s, i] : s, !1);
    return o.length > 0 ? o : [r];
}
var aE = n(377941),
    aM = n.n(aE);
function a_(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function aT(e) {
    return e.type === ab.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === ab.kc.USER || e.type === ab.kc.MESSAGE
          ? ""
          : "/";
}
let aP = {
        [eD.q7.APP_CHANNEL]: ej.default["3/aHX6"],
        [eD.q7.VOICE_CHANNEL]: ej.default["3/aHX6"],
        [eD.q7.ACTIVITY]: ej.default["3/aHX6"],
        [eD.q7.OVERLAY]: ej.default["rPpf5/"],
        [eD.q7.PROFILE_WIDGET]: null,
        [eD.q7.AUTOMOD]: null,
        [eD.q7.BOT]: null,
        [eD.q7.APPLICATION_COMMANDS]: null,
    },
    aR = [eD.q7.ACTIVITY, eD.q7.APP_CHANNEL, eD.q7.VOICE_CHANNEL, eD.q7.OVERLAY];
function aL(e) {
    return aR.find((t) => ay(e, t)) ?? null;
}
let a$ = 1920 / 1018;
function aq(e, t) {
    return `${Number(((e / t) * 100).toFixed(3))}%`;
}
let aD = aq(24, 1018),
    aF = aq(24, 1920);
function aO(e) {
    return null != e.overlay_design_image
        ? e.overlay_design_image
        : e.design_image?.name === "overlay-design-v2.png"
          ? e.design_image
          : null;
}
var az = n(176999),
    aG = (((l = {}).IMAGE = "image"), l),
    aU = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aB = n(598748),
    aK = n(773669);
let aH = [],
    aV = {},
    aW = {};
function aZ(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aX(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aG.IMAGE,
        visibility: aU.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aY = n(127258),
    aQ = n(803306),
    aJ = n(587895),
    a0 = n(320095),
    a1 = n(963852),
    a2 = n(95701),
    a3 = n(889227),
    a4 = n(427262);
let a7 = new a2.nA({ id: "1337", guild_id: "1337", type: e2.rbe.GUILD_TEXT, name: "preview" });
function a5(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, c.bG)([lr.default], () => lr.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, aQ.nj)(new a3.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let a8 = /^@\S+/;
var a6 = n(775602);
let a9 = [ej.default["3eTjcV"], ej.default.l3j5nS];
var ie = n(97808),
    it = n(778712),
    il = n(486020),
    ir = n(46054),
    ia = n(200700);
let ii = {
        alert: { label: () => eb.intl.string(ej.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => eb.intl.string(ej.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => eb.intl.string(ej.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => eb.intl.string(ej.default.RGzFNK), blockedStyle: !1 },
    },
    is = {
        blocked: { label: () => eb.intl.string(ej.default.YdnZ8q), tone: "red" },
        alert: { label: () => eb.intl.string(ej.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => eb.intl.string(ej.default.RGzFNK), tone: "green" },
    },
    iu = ["blocked", "alert", "allowed"],
    io = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function ic(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : eb.intl.formatToPlainString(eb.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, ia.getFriendlyDurationString)(n))
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
var id = n(984097),
    im = n(13673);
let ih = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function ig(e) {
    let { example: t } = e,
        n = ic(t);
    return null == n
        ? null
        : (0, a.jsx)(x.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let ip = ["glazedgamer", "sprinkles", "donutking"];
function ix(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = ii[n.outcome];
    return (0, a.jsxs)("li", {
        className: o()(id.nM, { [o()(id.HV, im.DX)]: s }),
        children: [
            (0, a.jsx)(n$.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: id.my,
                children: (0, a.jsx)(ie.eu, {
                    src: (0, il.AE)(void 0, void 0),
                    size: it._3.SIZE_24,
                    "aria-label": eb.intl.string(ej.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: id.fw,
                children: [
                    (0, a.jsx)(x.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ir.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(ig, { example: n }) : null,
                ],
            }),
        ],
    });
}
function iv(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = is[t.section],
        s = new Set(t.examples.map(ic)),
        u = 1 === s.size ? t.examples.map(ic)[0] : null;
    return (0, a.jsxs)("div", {
        className: id.UO,
        children: [
            (0, a.jsxs)("div", {
                className: id.RZ,
                children: [
                    (0, a.jsx)(x.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: ih[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: id.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(x.E, {
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
                className: id.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(ix, { example: e, username: ip[(n + t) % ip.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function ij(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            iu
                .map((e) => ({ section: e, examples: t.filter((t) => io[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: id.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: id.hk,
                      children: (0, a.jsx)(x.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    iv,
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
var ib = n(276293),
    iy = n(460905),
    ik = n(110384),
    iw = n(365199),
    iS = n(633018),
    iA = n(763754),
    iN = n(217424),
    iC = n(194085),
    iI = n(20851),
    iE = n(692508),
    iM = n(798819);
function i_(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: o()(iM.item, iM.labelContainer, iM.colorDefault, {
            [iM.focused]: !0 === t.highlighted,
            [iM.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: iM.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: iM.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: o()(iM.label, iE.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: iM.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: iM.icon }),
                  })
                : null,
        ],
    });
}
function iT(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: o()(t, iE.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: eb.intl.string(eb.t["5IEsGx"]), icon: ik.W, muted: !0 }
                : { label: eb.intl.string(eb.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: o()(iM.menu, iE.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: iM.scroller,
            children: [
                (0, a.jsx)(i_, { item: s }),
                (0, a.jsx)("div", { className: iM.separator }),
                (0, a.jsx)(i_, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var iP = n(381941);
function iR() {}
function iL(e) {
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
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, c.bG)([lr.default], () => lr.default.getCurrentUser())),
        (n = (0, c.bG)([ti.Ay], () => ti.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, c.bG)([aJ.A], () => aJ.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? eb.intl.string(ej.default.JEYq8M)),
        (u = (0, c.bG)([lr.default], () => (null != l ? lr.default.getUser(l) : void 0), [l])),
        (f = a5("31337", s, { bot: !0, enabled: !(d = u?.bot === !0) })),
        (m = d ? u : f),
        (h = a5("31338", eb.intl.string(ej.default["9iAOsw"]), { discriminator: "0003" })),
        (g = a5("31339", (0, a4.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == g || null == m || null == h
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
                                      i = (0, a0.rh)({
                                          ...(0, a1.Ay)({
                                              channelId: a7.id,
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
                                                        type: aY.G.APPLICATION_COMMAND,
                                                        user: (0, a1.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(a8, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${u.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${o.username}`).join(`<@${o.id}>`)), i);
                                  }
                              return c;
                          })(
                              v,
                              { bot: m, currentUser: t, viewer: g, member: h },
                              {
                                  targetMessage: eb.intl.string(ej.default["y+QYes"]),
                                  memberMessage: eb.intl.string(ej.default.BUTRDc),
                              },
                          ),
                [v, m, t, g, h],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = a7.name;
    return (0, a.jsxs)("div", {
        className: iE.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: iE.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(ib.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(x.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: o()(iE.TE, `group-spacing-${iP.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? iE.Rz : void 0,
                            children: [
                                (0, a.jsx)(iI.A, {
                                    message: n,
                                    channel: a7,
                                    author: (0, iA.FT)(n.author, a7),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(iN.A, { message: n, channel: a7 }) : void 0,
                                    usernameClassName: r?.target === "user" ? iE.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: iE.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(iC.Ay, {
                                              children: [
                                                  (0, a.jsx)(iC.qv, {
                                                      label: eb.intl.string(eb.t.lfIHs4),
                                                      icon: iy.n,
                                                      onClick: iR,
                                                  }),
                                                  (0, a.jsx)(iC.qv, {
                                                      label: eb.intl.string(eb.t["5IEsGx"]),
                                                      icon: ik.W,
                                                      onClick: iR,
                                                  }),
                                                  (0, a.jsx)(iC.qv, {
                                                      label: eb.intl.string(eb.t["UKOtz+"]),
                                                      icon: iw.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: iR,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? iE.ET : iE.je,
                                          inert: !0,
                                          children: (0, a.jsx)(iT, {
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
                className: iE.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(iS.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(x.E, {
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
var i$ = n(332173);
function iq(e) {
    let { name: t } = e;
    return (0, a.jsxs)(i$.A, { children: ["/", t] });
}
function iD(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(aM());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(iq, { name: e.name }, e.start) : e.text));
}
n(827669);
var iF = n(687966),
    iO = n(757789),
    iz = n(26137),
    iG = n(430392),
    iU = n(231483),
    iB = n(323384);
let iK = {
    frame: ej.default.Z2bt4u,
    overlay_widget: ej.default["0mGHfU"],
    user_widget: ej.default.Jipr29,
    bot: ej.default.EbvC13,
    commands: ej.default.EbvC13,
    automod: ej.default.tiMvei,
};
var iH = n(573634);
let iV = {
    frame: iF.GameControllerIcon,
    overlay_widget: iO.V,
    user_widget: iz.r,
    bot: iG.RobotIcon,
    commands: iG.RobotIcon,
    automod: iU.ShieldIcon,
};
function iW(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: o()(iH.e7, l),
        children: [(0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function iZ(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: iH.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: iH.jw,
                    children: (0, a.jsx)(x.E, {
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
function iX(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: iH.lj,
        children: [
            (0, a.jsx)("span", {
                className: o()(iH.Vo, iH.G),
                children: (0, a.jsx)(iB.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: iH.aV,
                children: [
                    (0, a.jsx)(x.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function iY(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: iH.wZ,
        children: t.map((e, t) => {
            let n = aT(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(iq, { name: e.name })
                                : (0, a.jsx)(i$.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function iQ(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: iH.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: iH.Aw,
                    children: (0, a.jsx)(x.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(iD, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function iJ(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        u = s ? iB.k : iV[t.kind],
        o = eb.intl.string(s ? ej.default.BM4Ymz : iK[t.kind]);
    return (0, a.jsxs)("section", {
        className: iH.s9,
        "aria-label": o,
        children: [
            (0, a.jsxs)("div", {
                className: iH.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: iH.Vo,
                        children: (0, a.jsx)(u, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(x.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: o }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: iH.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(x.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(iD, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(iQ, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: iH.PG, children: r }) : null,
        ],
    });
}
function i0(e) {
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
                                let n = t.map(aM()).join("|");
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
        className: iH.aN,
        children: [
            (0, a.jsxs)("div", {
                className: iH.Lv,
                children: [(0, a.jsx)(p.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }), u],
            }),
            f.map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: iH.yF, role: "separator" }),
                            (0, a.jsx)(iJ, {
                                experience: t,
                                bullets: n,
                                preview: c(t),
                                blocks: (function (e, t, n) {
                                    let l = n
                                        ? [
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
                                                      ? [{ key: t, caption: eb.intl.string(n), labels: l.map(a_) }]
                                                      : [];
                                              })
                                              .map((e) => {
                                                  let { key: t, caption: n, labels: l } = e;
                                                  return (0, a.jsx)(
                                                      iW,
                                                      { caption: n, children: (0, a.jsx)(iZ, { labels: l }) },
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
                                                        let n = eb.intl.string(ej.default["6/3tGY"]),
                                                            l = [];
                                                        if (t.surfaces.includes(eD.q7.APP_CHANNEL)) {
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
                                                            launchableAnywhere: t.surfaces.includes(eD.q7.ACTIVITY),
                                                            usableInVoice: t.surfaces.includes(eD.q7.VOICE_CHANNEL),
                                                        };
                                                    })(e, t);
                                                    if (null == n) return [];
                                                    let l = [];
                                                    n.channels.length > 0 &&
                                                        l.push(
                                                            (0, a.jsx)(
                                                                iW,
                                                                {
                                                                    className: iH.Iw,
                                                                    caption: eb.intl.formatToPlainString(
                                                                        ej.default.w8F5sy,
                                                                        { count: n.channels.length },
                                                                    ),
                                                                    children: (0, a.jsx)("ul", {
                                                                        className: iH.wZ,
                                                                        "data-conjure-plan-channels": "",
                                                                        children: n.channels.map((e) => {
                                                                            let { name: t, description: n } = e;
                                                                            return (0, a.jsx)(
                                                                                iX,
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
                                                            ? [eb.intl.string(ej.default["4oGg2h"])]
                                                            : []),
                                                        ...(n.launchableAnywhere
                                                            ? [eb.intl.string(ej.default.BTGCfR)]
                                                            : []),
                                                    ];
                                                    return (
                                                        r.length > 0 &&
                                                            l.push(
                                                                (0, a.jsx)(
                                                                    iW,
                                                                    {
                                                                        caption: eb.intl.string(ej.default.MY6UGJ),
                                                                        children: (0, a.jsx)(iZ, { labels: r }),
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
                                                              iW,
                                                              {
                                                                  caption: eb.intl.string(eb.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(iY, { commands: e.commands }),
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
var i1 = n(633075),
    i2 = n(946356),
    i3 = n(58216),
    i4 = n(27399);
function i7(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, c.bG)([lr.default], () => lr.default.getCurrentUser()),
        r = i.useMemo(() => new i1.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: i4.H,
              children: (0, a.jsx)(i2.A.Overlay, {
                  className: i4.w,
                  children: (0, a.jsx)(i3.A, {
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
var i5 = n(443863);
function i8(e) {
    let t,
        { projectId: n, src: l, alt: r, size: i, onError: s } = e,
        u =
            ((t = Math.min(1, 1872 / i.width, 970 / i.height)),
            { width: aq(i.width * t, 1920), height: aq(i.height * t, 1018) });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(aj, { projectId: n }),
            (0, a.jsx)("div", {
                className: i5.nk,
                style: {
                    "--custom-conjure-plan-overlay-widget-top": aD,
                    "--custom-conjure-plan-overlay-widget-end": aF,
                    "--custom-conjure-plan-overlay-widget-width": u.width,
                    "--custom-conjure-plan-overlay-widget-height": u.height,
                },
                children: (0, a.jsx)("img", { src: l, alt: r, className: i5.M7, onError: s }),
            }),
        ],
    });
}
function i6(e, t, n) {
    Promise.all(
        t.map((t) => {
            let { id: n } = t;
            return (0, t$.PK)(e, n);
        }),
    ).then(
        (e) => {
            (0, l0.R)({
                items: e.map((e, n) => ({ type: "IMAGE", url: e, alt: t[n].alt })),
                startingIndex: n,
                shouldHideMediaOptions: !0,
                location: "ConjureChat",
            });
        },
        () => {},
    );
}
function i9(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: i, gone: s, handleError: u } = (0, l1._)(t, r);
    return s
        ? null
        : (0, a.jsx)(nT.D, {
              className: i5.xX,
              onClick: () => i6(t, [{ id: r, alt: l }], 0),
              "aria-label": eb.intl.string(ej.default.TvAPIm),
              children: null == i ? null : (0, a.jsx)("img", { src: i, alt: l, className: i5.sN, onError: u }),
          });
}
function se(e) {
    let { projectId: t, design: n, size: l } = e,
        { id: r } = n,
        { src: s, gone: u, handleError: d } = (0, l1._)(t, r),
        [f, m] = i.useState(!1),
        [h, g] = i.useState(!1),
        {
            slide: p,
            labels: v,
            pick: j,
        } = (function (e) {
            let { ready: t, paused: n = !1 } = e,
                l = (0, c.bG)([a6.Ay], () => a6.Ay.useReducedMotion),
                [r, a] = i.useState(0),
                [s, u] = i.useState(!1),
                o = t && !l && !n && !s,
                d = l && !s ? 0 : r;
            i.useEffect(() => {
                if (!o) return;
                let e = setInterval(() => a((e) => (e + 1) % a9.length), 4e3);
                return () => clearInterval(e);
            }, [o]);
            let f = i.useCallback((e) => {
                    (u(!0), a(e));
                }, []),
                m = i.useCallback(() => f(d), [f, d]);
            return { slide: d, labels: a9.map((e) => eb.intl.string(e)), pick: f, hold: m };
        })({ ready: null != s, paused: f || h });
    if (u) return null;
    let b = eb.intl.string(ej.default.mjryK4),
        y = eb.intl.string(ej.default["rPpf5/"]);
    return (0, a.jsxs)("div", {
        className: i5.RM,
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        onFocus: () => g(!0),
        onBlur: (e) => {
            e.currentTarget.contains(e.relatedTarget) || g(!1);
        },
        children: [
            (0, a.jsx)(nT.D, {
                className: o()(i5.xX, i5.nj, { [i5.qQ]: 0 === p }),
                style: { "--custom-conjure-plan-overlay-scene-aspect": String(a$) },
                onClick: () => i6(t, [{ id: r, alt: b }], 0),
                "aria-label": eb.intl.string(ej.default.TvAPIm),
                children:
                    null == s
                        ? null
                        : 0 === p
                          ? (0, a.jsx)("img", { src: s, alt: b, className: i5.Ac, onError: d })
                          : (0, a.jsx)(i8, { projectId: t, src: s, alt: y, size: l, onError: d }),
            }),
            (0, a.jsx)("div", {
                className: i5._4,
                role: "group",
                "aria-label": eb.intl.string(ej.default.EH36X6),
                children: v.map((e, t) =>
                    (0, a.jsx)(
                        nT.D,
                        {
                            className: o()(i5.c, { [i5.Cw]: p === t }),
                            "aria-pressed": p === t,
                            onClick: () => j(t),
                            children: (0, a.jsx)(x.E, {
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
function st(e) {
    let { projectId: t, id: n, alt: l, onOpen: r } = e,
        { src: i, gone: s, handleError: u } = (0, l1._)(t, n);
    return s
        ? null
        : (0, a.jsx)("li", {
              children: (0, a.jsx)(nT.D, {
                  className: i5.ir,
                  onClick: r,
                  "aria-label": l,
                  children: null == i ? null : (0, a.jsx)("img", { src: i, alt: "", className: i5.rA, onError: u }),
              }),
          });
}
function sn(e) {
    let { projectId: t, proposal: n } = e,
        l = (n.reference_images ?? []).map((e, t) => {
            let { id: n } = e;
            return { id: n, alt: eb.intl.formatToPlainString(ej.default.xFgQ8L, { number: t + 1 }) };
        });
    return 0 === l.length
        ? null
        : (0, a.jsx)("section", {
              className: i5.Op,
              children: (0, a.jsxs)("div", {
                  className: i5.uW,
                  children: [
                      (0, a.jsx)(x.E, {
                          variant: "text-xs/medium",
                          color: "text-muted",
                          tag: "span",
                          children: eb.intl.string(ej.default.ubBJcy),
                      }),
                      (0, a.jsx)("ul", {
                          className: i5.Ft,
                          children: l.map((e, n) => {
                              let { id: r, alt: i } = e;
                              return (0, a.jsx)(st, { projectId: t, id: r, alt: i, onOpen: () => i6(t, l, n) }, r);
                          }),
                      }),
                  ],
              }),
          });
}
function sl(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        o,
        f,
        m,
        h,
        g,
        { projectId: p, proposal: v, version: j, onApprove: b } = e,
        { botExchanges: y } =
            ((n = ay(v, eD.q7.APPLICATION_COMMANDS)),
            (l =
                ay(v, eD.q7.BOT) || n
                    ? null != v.bot
                        ? v.bot.interaction
                        : n && v.commands.some(aA)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : aI(v, l, {
                              message: eb.intl.string(ej.default.J7qggf),
                              reply: eb.intl.string(ej.default.nqYtiy),
                              event: eb.intl.string(ej.default["05lU9W"]),
                          }),
                [v, l],
            )),
            { botInteraction: l, botExchanges: r }),
        k = (function (e, t) {
            let { widget_config: n, widget_preview: l = aW } = t,
                r = (0, c.bG)([aK.default], () => aK.default.locale),
                a = (0, c.bG)([ti.Ay], () => {
                    let t = ti.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aV);
                    return (
                        i.useEffect(() => {
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
                                                          ...aZ(n),
                                                          ...(null != n.fallback ? { fallback: aZ(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = az.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[aB.m.WIDGET_TOP] || null == i[aB.m.WIDGET_BOTTOM]
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
                                                                    type: az.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: az.oG.NUMBER, value: a })
                                                                : (r[e] = { type: az.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aX),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aH,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(p, v),
        w = j?.superseded === !0,
        S = v.what_changed?.trim() ?? "",
        A =
            ((t = v.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === aT(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        N =
            ((u =
                null == (s = aL(v))
                    ? null
                    : (v.experiences?.find((e) => {
                          let { surfaces: t } = e;
                          return t.includes(s);
                      })?.id ?? null)),
            (f = null != (o = v.design_image) && o.id !== aO(v)?.id ? o : null),
            (m = aO(v)),
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
                ui: null != f && null != h ? { experienceId: h, design: f } : null,
                overlay:
                    null != m && null != g ? { experienceId: g, design: m, size: eO(v.overlay_widget ?? null) } : null,
            }),
        C = i.useMemo(
            () =>
                v.commands.some(aA)
                    ? aI({ ...v, bot: void 0 }, "commands", {
                          message: eb.intl.string(ej.default.J7qggf),
                          reply: eb.intl.string(ej.default.nqYtiy),
                          event: eb.intl.string(ej.default["05lU9W"]),
                      })
                    : [],
            [v],
        ),
        I = (0, c.bG)([ti.Ay], () => ti.Ay.getProject(p)?.name, [p]),
        E =
            w && null != j
                ? eb.intl.formatToPlainString(ej.default.YZ3qJs, { version: j.version })
                : eb.intl.string(ej.default["3b6e7o"]),
        M = w ? (0, a.jsx)(nz, { children: eb.intl.string(ej.default.hF2c41) }) : null;
    return (0, a.jsxs)(nG, {
        title: E,
        meta: M,
        superseded: w,
        showLabel: eb.intl.string(ej.default.yD8EJS),
        hideLabel: eb.intl.string(ej.default.nSPGNb),
        bodyClassName: i5.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: i5.Qs,
                children: (0, a.jsx)(i0, {
                    appName: I ?? v.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(iD, { text: v.summary, commandNames: A }),
                            }),
                            (0, a.jsx)(sn, { projectId: p, proposal: v }),
                            "" !== S
                                ? (0, a.jsxs)("section", {
                                      className: i5.uW,
                                      children: [
                                          (0, a.jsx)(x.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: eb.intl.string(ej.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(x.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(iD, { text: S, commandNames: A }),
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
                                            ? (0, a.jsx)(i9, {
                                                  projectId: p,
                                                  design: N.ui.design,
                                                  alt: eb.intl.string(
                                                      null == (t = aL(v)) ? ej.default["3/aHX6"] : aP[t],
                                                  ),
                                              })
                                            : null,
                                    l =
                                        e.id === N.overlay?.experienceId
                                            ? (0, a.jsx)(se, {
                                                  projectId: p,
                                                  design: N.overlay.design,
                                                  size: N.overlay.size,
                                              })
                                            : null;
                                return null == n && null == l ? null : (0, a.jsxs)(a.Fragment, { children: [n, l] });
                            }
                            case "user_widget":
                                return null != k ? (0, a.jsx)(i7, { ...k }) : null;
                            case "automod":
                                return null != v.automod && v.automod.examples.length > 0
                                    ? (0, a.jsx)(ij, { automod: v.automod })
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
                                        (r = l.some((e) => "command" === e.kind || aN(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, y, C);
                                return t.length > 0 ? (0, a.jsx)(iL, { projectId: p, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: A,
                }),
            }),
            null == b || w
                ? null
                : (0, a.jsxs)("div", {
                      className: i5.qr,
                      children: [
                          (0, a.jsx)(d.$, {
                              variant: "primary",
                              size: "sm",
                              text: eb.intl.string(ej.default["6S+wRM"]),
                              onClick: b,
                          }),
                          (0, a.jsx)(x.E, {
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
var sr = n(331322),
    sa = n(289565);
function si(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: sa.m, children: n })
        : (0, a.jsxs)("div", {
              className: sa.Z,
              children: [
                  n,
                  (0, a.jsx)(tq.m, {
                      text: eb.intl.string(eb.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tV.K, {
                          "aria-label": eb.intl.string(eb.t.WAI6xu),
                          icon: tM.P,
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
function su(e, t) {
    return null != e && ss(t, e.status);
}
let so = new WeakMap();
var sc = n(175841),
    sd = n(27232),
    sf = n(505930),
    sm = n(506774),
    sh = n(385081);
let sg = "conjurePublishRatings",
    sp = [1, 2, 3, 4, 5],
    sx = {
        1: ej.default.GhbsGA,
        2: ej.default.cm0nwU,
        3: ej.default.kGvlh2,
        4: ej.default.dVBSUg,
        5: ej.default.DKlgF7,
    };
function sv(e) {
    return eb.intl.string(sx[e]);
}
let sj = new Set(),
    sb = 0;
function sy() {
    return sm.w.get(sg) ?? {};
}
function sk(e, t) {
    return sy()[e]?.[t] ?? null;
}
function sw(e) {
    return (sj.add(e), () => sj.delete(e));
}
function sS(e) {
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
                    "" !== (n = t.trim().slice(0, 256)) && (0, sh.Fz)(e, n);
                },
            };
        })(t),
        o = eb.intl.string(ej.default.IqkF07);
    return (0, a.jsx)(tb.a, {
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
        children: (0, a.jsx)(n8.f, {
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
var sA = n(54100);
function sN(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: sA.mo,
        role: "status",
        children: [
            (0, a.jsx)(sc.SparklesIcon, { size: "xs", color: "currentColor", className: sA.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(x.E, {
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
function sC(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        { rating: s, rate: u } = (function (e) {
            let { projectId: t, turnId: n, cta: l, status: r } = e;
            return (
                i.useSyncExternalStore(sw, () => sb),
                {
                    rating: sk(t, n),
                    rate(e) {
                        let a = (function (e) {
                            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
                            if (null != sk(t, n)) return null;
                            let i = {
                                projectId: t,
                                turnId: n,
                                rating: l,
                                publishReason: r.reason ?? "first_publish",
                                surface: a?.surface ?? r.surface,
                            };
                            (0, sh.gw)(i);
                            let s = sy();
                            return (sm.w.set(sg, { ...s, [t]: { ...s[t], [n]: l } }), sb++, sj.forEach((e) => e()), i);
                        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
                        return null != a && e <= 2 ? a : null;
                    },
                }
            );
        })({ projectId: t, turnId: n, cta: l, status: r }),
        [c, d] = i.useState(null),
        [f, m] = i.useState(null),
        [h, g] = i.useState(!1),
        p = i.useId(),
        v = i.useId(),
        j = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => g(!1), 420);
            return () => clearTimeout(e);
        }, [h]),
        null != s && !h)
    )
        return (0, a.jsx)(sN, { rating: s });
    let b = null != s,
        y = b ? s : (f ?? c),
        k = b || (null == f && null != c);
    function w(e) {
        if (b) return;
        (d(e), m(null), g(!0));
        let t = u(e);
        null != t && (0, eE.openModal)((e) => (0, a.jsx)(sS, { ...e, rating: t }));
    }
    return (0, a.jsxs)("div", {
        className: sA.nM,
        onMouseLeave: () => m(null),
        children: [
            (0, a.jsxs)("span", {
                className: sA.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(x.E, {
                        id: v,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: o()(sA.Pf, { [sA.KH]: null == y }),
                        children: eb.intl.string(ej.default.mTV326),
                    }),
                    sp.map((e) =>
                        (0, a.jsx)(
                            x.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: o()(sA.Pf, { [sA.KH]: y === e }),
                                children: sv(e),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": v,
                className: sA.uf,
                children: sp.map((e) => {
                    let t = null != y && e <= y,
                        n = t ? sd.StarIcon : sf.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: sA.uK,
                            onMouseEnter: () => {
                                b || m(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: p,
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
                                    className: sA.hF,
                                    "aria-label": eb.intl.formatToPlainString(ej.default.NU7Dex, {
                                        rating: e,
                                        label: sv(e),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: o()(sA.d4, { [sA.cO]: t, [sA.Ng]: t && k }),
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
function sI(e) {
    let { projectId: t, publish: n } = e,
        l = tC(t, n);
    return (0, a.jsx)(d.$, {
        variant: "primary",
        size: "sm",
        loading: n.publishing && !n.showsProgress,
        text: n.label,
        onClick: () => l("card"),
    });
}
function sE(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, tp.Ay)(t);
    return null != r && su(r, l)
        ? (0, a.jsx)(si, {
              children: (0, a.jsxs)(sr.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(sI, { projectId: t, publish: r }),
                      null != r.failure
                          ? (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: r.failure,
                            })
                          : null,
                      null != n ? (0, a.jsx)(sC, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var sM = n(303345),
    s_ = n(44255),
    sT = n(416473),
    sP = n(289830);
function sR(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, c.bG)(
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
                        (await (0, sT.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof sM.A ? e.message : eb.intl.string(ej.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                f =
                    t.next_run_at > d
                        ? eb.intl.formatToPlainString(ej.default.orZDqY, { time: (0, s_.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, s_.lD)(t.trigger),
                firstPublish: f,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? o : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(nF, {
        title: eb.intl.string(ej.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: sP.r,
            children: [
                (0, a.jsxs)("div", {
                    className: sP.z,
                    children: [
                        (0, a.jsx)(x.E, { variant: "text-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(x.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(x.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: eb.intl.string(ej.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(x.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: eb.intl.string(ej.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(x.E, {
                                  variant: "text-sm/normal",
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
var sL = n(989271);
function s$(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(nT.D, {
        className: o()(sL.nM, { [sL.f1]: s, [sL.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": eb.intl.formatToPlainString(ej.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: sL.jo,
                children: [
                    n
                        ? (0, a.jsx)(f.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: sL.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(x.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: sL.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function sq(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(nF, {
        title: eb.intl.string(ej.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                s$,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : u },
                e.id,
            ),
        ),
    });
}
var sD = n(530557),
    sF = n(872162),
    sO = n(202723);
function sz(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: u } = e,
        c = i.useCallback(() => {
            (0, eE.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        f = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: sD.R })), [r.fields]),
        m = (0, rb.bB)(l, s),
        h = o()(sO.Lo, { [sO.jY]: m });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: h,
                  children: (0, a.jsx)(x.E, {
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
                    className: h,
                    children: [
                        (0, a.jsx)(x.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: eb.intl.string(ej.default.HCQvpO),
                        }),
                        (0, a.jsx)(sF.C, { label: eb.intl.string(ej.default.HCQvpO), size: "xs", items: f }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: sO.Lo,
                      children: (0, a.jsx)(sF.C, { label: eb.intl.string(ej.default.HCQvpO), size: "xs", items: f }),
                  },
                  s,
              )
            : "received" === s
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: h,
                        children: [
                            (0, a.jsxs)("div", {
                                className: sO.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: sO.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(rM.y, {
                                            size: "xs",
                                            color: t0.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(x.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: eb.intl.string(ej.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(x.E, {
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
                    className: sO.Lo,
                    children: [
                        (0, a.jsx)(x.E, {
                            variant: "text-xs/semibold",
                            color: null != u ? "text-brand" : "text-muted",
                            tag: "span",
                            children: eb.intl.string(null != u ? ej.default.O0QIqj : ej.default.HCQvpO),
                        }),
                        (0, a.jsx)(rT.A, {
                            text: null != r.note && "" !== r.note ? r.note : eb.intl.string(ej.default.MPGSHL),
                            variant: "text-sm/normal",
                            color: "text-default",
                        }),
                        (0, a.jsx)(sF.C, { label: eb.intl.string(ej.default.HCQvpO), size: "xs", items: f }),
                        (0, a.jsx)("div", {
                            className: sO.sq,
                            children: (0, a.jsx)(d.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: c,
                                text: eb.intl.string(ej.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var sG = n(919790),
    sU = n(908492),
    sB = n(971824),
    sK = n(162052),
    sH = n(165648);
function sV(e) {
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
        x = i.useMemo(() => (0, nI.Jf)(n, l), [n, l]),
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
            className: nX.pj,
            "data-live": !1,
            children: (0, a.jsx)(nR.A, {
                glyph: (0, a.jsx)(rK.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: eb.intl.string(ej.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? u) : void 0)),
        b = m ? ((0, nI.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = r0(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        A = r5(k);
    return (0, a.jsxs)("ol", {
        className: nX.pj,
        "data-live": S,
        children: [
            (0, a.jsx)(n_.Ay, {
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
                let l = null != e.task.helperMark ? rJ(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          r8,
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
            (0, a.jsx)(ao, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: nX.YO,
                      children: (0, a.jsx)(nW, { todos: b, provisional: d, agents: A, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sW(e) {
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
            turnId: j,
            onPickIdea: b,
            pickedIdeaIds: y,
            onApprovePlan: k,
            sideReply: w = !1,
            sideReplyAcknowledges: S,
            hoistedProse: A = !1,
            hoistedAttachmentsHost: N,
            restoreProposal: C,
            onRestoreProposal: I,
            publishScheduleProposal: E,
            publishScheduleProposalCurrent: M = !1,
        } = e,
        _ = i.useMemo(
            () => rH({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != c && c.length > 0 }),
            [n, l, r, c],
        ),
        { streamed: T, lastStreamedMessage: P, showsClosingMessage: R, closingContent: L } = _,
        $ = (A ? N : void 0) ?? _.attachmentsHost,
        q = R && !A,
        D = null == c ? null : (0, a.jsx)(sG.A, { projectId: t, attachments: c }),
        F = null == D ? null : (0, a.jsx)("div", { className: nX.MT, children: D }),
        O = w
            ? (0, a.jsx)(x.E, {
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
        className: nX.ue,
        children: [
            T.length > 0 && !A
                ? (0, a.jsx)("ol", {
                      className: nX.dO,
                      children: T.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: nX.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sH.PT,
                                          children: (0, sU.U)(e.content, !0, {
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
                ? (0, a.jsx)(sl, { projectId: t, proposal: r, version: s, onApprove: k })
                : q
                  ? (0, a.jsxs)("div", {
                        className: o()(nX.ky, sK.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: o()(sH.PT, nX.cW),
                                children: (0, sU.U)(L, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === $ ? F : null,
                            O,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: o()(nX.ky, nX.k1, sK.XR, { [sB.O]: null != m && "open" === h }),
                      children: (0, a.jsx)(sz, {
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
                      className: o()(nX.ky, nX.k1, sK.XR),
                      children: (0, a.jsx)(rL, { projectId: t, request: g, askId: p }),
                  })
                : null,
            "standalone" !== $ && ("closing" !== $ || q) ? null : D,
            null != v ? (0, a.jsx)(sE, { projectId: t, turnId: j ?? null, cta: v }) : null,
            null != u && u.length > 0 ? (0, a.jsx)(sq, { ideas: u, pickedIdeaIds: y, onPick: b }) : null,
            null != C ? (0, a.jsx)(ad, { proposal: C, onRestore: I }) : null,
            null != E ? (0, a.jsx)(sR, { projectId: t, proposal: E, current: M }) : null,
            q ? null : O,
        ],
    });
}
var sZ = n(864970),
    sX = n(146806),
    sY = n(475358),
    sQ = n(783977),
    sJ = n(559647),
    s0 = n(655098),
    s1 = n(234320),
    s2 = n(191023),
    s3 = n(285796),
    s4 = n(922329),
    s7 = n(153171);
function s5(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(s4.p, {
        name: eb.intl.string(ej.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: em.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(s2.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: em.OY,
                    children: (0, a.jsx)(lh.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(x.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: eb.intl.string(ej.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: s7.o1,
            onClick: () => {
                eu(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": eb.intl.string(ej.default.N852dj),
            children: (0, a.jsx)(s3.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function s8(e) {
    let { send: t } = e;
    return (0, a.jsxs)(s4.p, {
        compact: !0,
        name: eb.intl.string(ej.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: eb.intl.string(ej.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: s7.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(lg.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: eb.intl.string(ej.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var s6 = n(587157),
    s9 = n(347111),
    ue = n(120234),
    ut = n(901173),
    un = n(161431),
    ul = n(280450),
    ur = n(695184),
    ua = n(935208),
    ui = n(503275),
    us = n(957071),
    uu = n(659280),
    uo = n(351906),
    uc = n(407653),
    ud = n(322915);
function uf(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, c.bG)([uo.A], () => uo.A.hidePersonalInformation ?? !1),
        o = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let f = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      uu.Ay.User,
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
                      uu.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(uc.A, { projectId: n, file: e.file, className: ud.Vk }),
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
    return (0, a.jsx)(uu.Ay, {
        id: t,
        className: ud.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": eb.intl.string(ej.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(um, { titleId: o, title: eb.intl.string(ej.default.Vb3sUg), children: h })
                    : null,
                g.length > 0
                    ? (0, a.jsx)(um, { titleId: d, title: eb.intl.string(ej.default.zA5KLM), children: g })
                    : null,
            ],
        }),
    });
}
function um(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(x.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: ud.Gf, children: n }),
            l,
        ],
    });
}
var uh = n(719442),
    ug = n(355622),
    up = n(408018),
    ux = n(186306),
    uv = n(323350),
    uj = n(35277),
    ub = n(820066),
    uy = n(683167),
    uk = n(267102),
    uw = n(259691);
let uS = (0, a2.createChannelRecord)({ id: "1", type: e2.rbe.DM });
function uA(e) {
    let t = ub.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uN(e) {
    return (0, uv.WO)(ub.VW.richValue(e), { mode: "raw" });
}
function uC(e, t) {
    ((e.children = (0, up.x7)(t)), (e.selection = uA(e)), e.onChange());
}
function uI(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(rO.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(uw.A, { attachmentId: r }), n] });
}
var uE = n(497437),
    uM = n(465410);
let u_ = "text-md/normal",
    uT = null;
function uP(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        d = i.useRef(null),
        f = i.useRef(0),
        [m, h] = i.useState(0),
        [g, p] = i.useState(0),
        [v, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
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
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (p(i + a), h(s));
            let o = s + i,
                c = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === c ? 1 : s / c,
                m = 0 === c ? 1 : o / c;
            j({
                frontFrom: 1e3 * (0, sX._R)(f),
                frontTo: 1e3 * (0, sX._R)(m),
                backFrom: 1e3 * (0, sX.T)(f),
                backTo: 1e3 * (0, sX.T)(m),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != d.current && r.observe(d.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            f.current = d.current?.offsetWidth ?? 0;
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
    let N = "in" === k ? v.backFrom : v.frontFrom,
        C = "out" === k ? v.frontTo : v.backTo,
        I = (0, c.bG)([a6.Ay], () => a6.Ay.useReducedMotion),
        E = t === eb.intl.string(ej.default.Zc7gML),
        M = r === t && E;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: o()(uE.VT, { [uE.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${N}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - N)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(sY.e, { shortcut: "tab", className: uE.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(sZ.o, {
                text: t,
                variant: u_,
                delay: null,
                duration: 1e3,
                trailingWidth: g,
                className: o()(uE.xM, { [uE.s2]: l }),
                onStart: A,
                onComplete: () => s(t),
            }),
            _(uE.IS, n || (!I && "out" === k), u),
            (0, a.jsx)("span", {
                ref: d,
                className: uE.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(x.E, { variant: u_, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: uE.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(x.E, { variant: u_, tag: "span", className: uE.xM, children: t }),
                          _(uE.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uR = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                inputLocked: l = !1,
                aiPaused: r = !1,
                running: s,
                restoring: u = !1,
                onSend: d,
                onInterrupt: f,
                escapeScopeRef: m,
                onUploadFile: h,
                onApprove: g,
                onImport: p,
                onSendToOtherProjects: x,
                suggestion: v,
                questionOpen: j = !1,
                hasPendingContext: b = !1,
                onDraftHasTextChange: y,
                modelSettings: k,
                onModelSettingsChange: w,
            } = e,
            S = n && !l && !r,
            A = (function (e) {
                let t = i.useContext(uk.Ay),
                    [n] = i.useState(() => {
                        let n = (0, uh.ie)();
                        return (
                            (n.children = (0, up.x7)(e)),
                            (n.selection = uA(n)),
                            (0, uy.a)({
                                editor: n,
                                chatInputType: ug.oU.GENERIC_RICH_TEXTAREA,
                                channel: uS,
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
                                    for (let [t, l] of ub.VW.nodes(e, { at: [], match: ub.l5.isText }))
                                        for (let e of t.text.matchAll(rO.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        ux.o.withMergedEntry(e, () =>
                                            ub.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    uj.b.textToVoid(
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
            })(rU.A.getDraft(t)),
            [N, C] = i.useState(() => uN(A));
        (0, ue.N$)(N);
        let I = i.useRef(N),
            [E, M] = i.useState(null),
            _ = i.useCallback(() => {
                let e = uN(A);
                (e !== I.current && ((I.current = e), (0, s9.I)(t, e), C(e)),
                    M(
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !ub.ZF.isCollapsed(t)) return null;
                            let [n] = ub.VW.node(e, t.anchor.path);
                            return ub.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                        })(A),
                    ));
            }, [A, t]),
            T = i.useCallback((e) => uC(A, e), [A]),
            P = "" !== N.trim();
        i.useEffect(() => y?.(P), [P, y]);
        let R = i.useRef(t);
        i.useLayoutEffect(() => {
            R.current !== t && ((R.current = t), uC(A, rU.A.getDraft(t)));
        }, [A, t]);
        let L = (0, c.bG)([a6.Ay], () => a6.Ay.isSubmitButtonEnabled),
            [$, q] = i.useState(!1);
        i.useEffect(() => {
            s || q(!1);
        }, [s]);
        let {
                drafts: F,
                addFiles: O,
                pasteFiles: z,
                removeDraft: G,
                settled: U,
                takeRefs: B,
            } = (0, tO.FM)({ projectId: t, surface: "chat", onUploadFile: h }),
            K = ea.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && en(n);
            }),
            H = "" !== N.trim() || F.length > 0 || b || K,
            W = S && H && U,
            [Z, X] = i.useState(null);
        i.useEffect(() => {
            if (null == Z) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => X(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [Z]);
        let Y = (0, un.rU)(t),
            [Q, J] = i.useState(null),
            [ee, et] = i.useState(0),
            el = i.useMemo(() => (null != E && S ? (0, ut.OG)(E, E.length) : null), [E, S]),
            er = el?.start ?? null;
        i.useEffect(() => {
            null == er ? J(null) : (0, un.IP)(t);
        }, [er, t]);
        let ei = er === Q ? null : el,
            eo = (function (e, t) {
                let n,
                    l,
                    r,
                    a,
                    s,
                    u = (0, c.bG)([ti.Ay], () => ti.Ay.getProject(e), [e]),
                    { creator: o, collaborators: d } =
                        ((n = u?.id),
                        (l = u?.owner_user_id),
                        (r = (0, c.yK)(
                            [rs.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              rs.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, ui.Y_)(l), r.forEach(ui.Y_));
                        }, [l, r]),
                        (a = (0, c.bG)([lr.default], () => (null == l ? null : lr.default.getUser(l)), [l])),
                        (s = (0, c.yK)(
                            [lr.default],
                            () => r.map((e) => lr.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    f = (0, c.bG)([ul.default], () => ul.default.getId()),
                    m = null != u && (0, eD.pL)(u) ? u.guild_id : void 0,
                    h = t?.toLowerCase() ?? null;
                return (
                    i.useEffect(() => {
                        null != m && null != h && ur.A.requestMembers(m, h, 100);
                    }, [m, h]),
                    (0, c.yK)(
                        [lR.Ay, lL.A, lr.default],
                        () => {
                            if (null == h) return [];
                            let e = null != m ? lL.A.getGuild(m) : null,
                                t = (t) => (0, ut.mO)(t, h, null != e ? lR.Ay.getNick(e.id, t.id) : null),
                                n = new Set(u?.collaborator_role_ids ?? []),
                                l = null != e && n.has(ua.default.castGuildIdAsEveryoneGuildRoleId(e.id)),
                                r =
                                    null == e
                                        ? []
                                        : lR.Ay.getMemberIds(e.id)
                                              .map((e) => lr.default.getUser(e))
                                              .filter(
                                                  (r) =>
                                                      null != r &&
                                                      t(r) &&
                                                      (l ||
                                                          (lR.Ay.getMember(e.id, r.id)?.roles ?? []).some((e) =>
                                                              n.has(e),
                                                          ) ||
                                                          l$.$3({
                                                              permission: e2.xBc.MANAGE_GUILD,
                                                              user: r,
                                                              context: e,
                                                          })),
                                              ),
                                a = new Set();
                            return [...[...(null != o ? [o] : []), ...d].filter(t), ...r].filter(
                                (e) => !(e.id === f || e.bot || a.has(e.id)) && (a.add(e.id), !0),
                            );
                        },
                        [u, m, h, o, d, f],
                    )
                );
            })(t, ei?.text ?? null),
            ec = i.useMemo(() => (null == ei ? [] : (0, ut.l$)(eo, Y, ei.text)), [ei, eo, Y]),
            ed = ei?.text;
        i.useEffect(() => et(0), [ed]);
        let ef = ec.length > 0,
            em = Math.min(ee, Math.max(0, ec.length - 1)),
            eh = i.useId(),
            eg = i.useCallback(
                (e) => {
                    let t = ec[e];
                    null != ei &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (uj.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                uj.b.insertText(e, `${n} `));
                        })(A, ei.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [ec, ei, A],
            ),
            ep = i.useCallback(() => {
                if (!W) return;
                let e = B(),
                    n = K
                        ? (function (e) {
                              let t = es(e);
                              if (null == t || !en(t)) return null;
                              let n = t.history.present,
                                  l = nx(e);
                              return (
                                  eu(e, (e) => ({ ...e, history: V, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, tm.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (nm.set(i, s),
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
                                              capture: (t) => (0 === t ? l : nx(e)),
                                              composite: (e) => nd(e, n),
                                              upload: (t) =>
                                                  (0, t$.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, t$.n6)(e, t.id),
                                              send: (n) => (0, tm.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      ng(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (nm.delete(i),
                                                          window.setTimeout(() => {
                                                              (ng(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                d(N, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == uT && (uT = document.createElement("canvas").getContext("2d"));
                    let i = uT;
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
                })(u$(eS.current), eP.current, (0, ut.Lj)(N));
                ("" !== l && X(l), T(""), J(null));
            }, [W, K, t, N, d, B, T]),
            ex = i.useCallback(
                (e) => {
                    (e.preventDefault(), ep());
                },
                [ep],
            ),
            ev = i.useCallback(() => {
                null == f || $ || (q(!0), f());
            }, [f, $]);
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
                            null == es(n) &&
                            !D(n).active &&
                            ((t = e.target),
                            (r = l?.current),
                            (!(0, tR.vq)(t) ||
                                t === document.body ||
                                t === document.documentElement ||
                                (null != r &&
                                    r.contains(t) &&
                                    null == t.closest('input, textarea, [contenteditable="true"]'))) &&
                                (e.preventDefault(), e.stopPropagation(), a.current()));
                    }
                }, [t, n, l]));
        })({ active: s && null != f, projectId: t, scopeRef: m, onEscape: ev });
        let ey = null == v || "" !== N || !S || u || b ? null : v,
            ek = i.useCallback(
                (e) => {
                    if (ef && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = ec.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), et((em + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), eg(em));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), J(ei?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && s && null != f) {
                        (e.preventDefault(), e.stopPropagation(), ev());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != ey) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), T(ey));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != g && (e.preventDefault(), g());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ep());
                },
                [ep, g, s, f, ev, ey, T, ef, ec.length, em, eg, ei],
            ),
            ew = i.useCallback(
                (e) => {
                    S && z(e);
                },
                [S, z],
            );
        (0, s1.Vo)({
            event: e2.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ew(t);
            },
        });
        let eS = i.useRef(null),
            eA = i.useCallback(() => {
                let e = I.current;
                x?.((0, ut.Lj)(e), () => {
                    I.current === e && T("");
                });
            }, [x, T]),
            [eN, eC] = i.useState(0),
            [eI, eE] = i.useState(!1);
        i.useEffect(() => {
            if (0 === N.length) return void eE(!1);
            let e = u$(eS.current);
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
            eE(!0);
            let t = setTimeout(() => eE(!1), uL);
            return () => clearTimeout(t);
        }, [N]);
        let eM = i.useMemo(() => ({ "--custom-glow-x": `${eN}px` }), [eN]),
            e_ = eI ? ` ${uE.EB}` : "",
            eT = u
                ? eb.intl.string(ej.default.qqlUiW)
                : r
                  ? eb.intl.string(ej.default.Z0hyNL)
                  : l
                    ? eb.intl.string(ej.default.GcFRaY)
                    : S
                      ? b
                          ? eb.intl.string(ej.default.knUjL3)
                          : j
                            ? eb.intl.string(ej.default.IevBEw)
                            : eb.intl.string(s ? ej.default["0BJa/0"] : ej.default.TEeU7z)
                      : eb.intl.string(ej.default.zZ9NgM),
            eP = i.useRef(0),
            eR = i.useRef(null),
            eL = i.useCallback((e) => {
                if ((eR.current?.disconnect(), null == e)) return;
                eP.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eP.current = e.clientWidth;
                });
                (t.observe(e), (eR.current = t));
            }, []),
            e$ = i.useId(),
            eq = i.useId(),
            eF = null != ey,
            eO = Z ?? ey ?? eT,
            ez = "" === N && "" !== eO;
        return (0, a.jsxs)("form", {
            onSubmit: ex,
            className: uE.DA,
            children: [
                ef
                    ? (0, a.jsx)(uf, {
                          id: eh,
                          projectId: t,
                          suggestions: ec,
                          selectedIndex: em,
                          onHover: et,
                          onSelect: eg,
                      })
                    : null,
                F.length > 0 || K
                    ? (0, a.jsxs)("div", {
                          className: uE.lN,
                          children: [
                              F.map((e) => (0, a.jsx)(tO.Nl, { draft: e, onRemove: G }, e.localId)),
                              K ? (0, a.jsx)(s5, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${uE.wg} ${uE.LP}${e_}`, style: eM, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${uE.wg} ${uE.L3}${e_}`, style: eM, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: uE.VA,
                    ref: eS,
                    children: [
                        (0, a.jsx)(us.A, {
                            navId: "conjure-composer-attach",
                            disabled: !S,
                            buttonClassName: `${uE.Y0} ${uE.nu}`,
                            iconClassName: uE.Qu,
                            onAddFiles: O,
                            onImport: p,
                            onSendToOtherProjects: null != x ? eA : void 0,
                        }),
                        ez
                            ? (0, a.jsx)("div", {
                                  ref: eL,
                                  className: uE.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uP, { text: eO, offering: eF && null == Z, typed: null != Z }),
                              })
                            : null,
                        (0, a.jsx)(n$.A, { id: eq, children: eb.intl.string(ej.default.ldNl9x) }),
                        (0, a.jsx)(rO.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(s0.A, {
                                editor: A,
                                containerClassName: o()(uE.sq, uM.dv),
                                className: uE.jp,
                                readOnly: !S,
                                canFocus: S,
                                onChange: _,
                                onBlur: () => M(null),
                                onKeyDown: ek,
                                onPaste: ew,
                                renderExtraElement: uI,
                                "aria-labelledby": eq,
                                "aria-describedby": ez ? e$ : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ef,
                                "aria-controls": ef ? eh : void 0,
                                "aria-activedescendant": ef ? ((0, uu.aI)(em) ?? void 0) : void 0,
                            }),
                        }),
                        ez ? (0, a.jsx)(n$.A, { id: e$, children: eT }) : null,
                        (0, a.jsx)("div", {
                            className: uE.Sz,
                            children:
                                s && null != f
                                    ? (0, a.jsx)(tq.m, {
                                          text: eb.intl.string(ej.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${uE.Y0} ${uE.$E}`,
                                              disabled: $,
                                              onClick: ev,
                                              "aria-label": eb.intl.string(ej.default.wiguT0),
                                              children: (0, a.jsx)(rK.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : k?.tierSettings != null && null != w
                                      ? (0, a.jsx)(s6.A, {
                                            settings: k.tierSettings,
                                            tiers: k.tiers,
                                            choices: k.choices,
                                            disabled: !S,
                                            onChange: w,
                                            className: `${uE.Y0} ${uE.$E}`,
                                            icon: (0, a.jsx)(sQ.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        L
                            ? (0, a.jsxs)("div", {
                                  className: uE.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: uE.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: uE.rt,
                                          disabled: !W,
                                          "aria-label": eb.intl.string(ej.default.rxW2cl),
                                          children: (0, a.jsx)(sJ.SendMessageIcon, {
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
    uL = 1500;
function u$(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uq = n(709753),
    uD = n(540338);
function uF(e) {
    if (e.at(-1)?.role !== "assistant") return null;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("assistant" === n.role) {
            if (!(0, nE.BL)(n) || "plan_implemented" === n.kind) return null;
            if (null != n.proposal) return n.render_id;
        }
    }
    return null;
}
var uO = n(986109);
let uz = i.createContext(null);
function uG(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: u = !1,
            onContextMenu: c,
        } = e,
        d = i.useContext(uz),
        [f, m] = i.useState(() => a6.Ay.useReducedMotion || (null != l && d?.current.has(l) === !0)),
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
        className: o()(uO.xk, { [uO.g5]: f, [uO.Qo]: s, [uO.q3]: u }),
        children: n,
    });
}
let uU = new Map();
function uB(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
let uK = "live_behind",
    uH = "conjureTipDismissals",
    uV = new Set(),
    uW = new Set(),
    uZ = 0;
function uX() {
    let e = sm.w.get(uH);
    return { forever: e?.forever ?? [], app: e?.app ?? {}, anchor: e?.anchor ?? {} };
}
function uY(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var l;
            return uV.has(((l = e.id), `${t}:${l}`));
        case "anchor":
            return null != n && uX().anchor[t]?.[e.id] === n;
        case "app":
            return uX().app[t]?.includes(e.id) === !0;
        case "forever":
            return uX().forever.includes(e.id);
    }
}
function uQ(e) {
    return (uW.add(e), () => uW.delete(e));
}
function uJ(e, t) {
    let n = t?.type === "remixed" ? t.settings_keys : void 0;
    return (0, c.bG)([rj.A], () => null != n && n.length > 0 && rk({ keys: n }, rj.A.getSettings(e)), [n, e]) &&
        null != n
        ? { keys: n, note: eb.intl.string(ej.default.F2yVHg) }
        : null;
}
function u0(e) {
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
let u1 = [12e4];
var u2 = n(292771);
function u3(e) {
    let { presentation: t, render: n } = e,
        l = (0, c.bG)([a6.Ay], () => a6.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let d = i.useRef(null),
        f = i.useRef(null),
        m = i.useRef(null),
        h = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = d.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = f.current,
            s = m.current,
            o = r?.offsetHeight ?? 0,
            c =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((f.current = c), (m.current = o));
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
            className: u2.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: o()(u2.qd, e.leaving ? u2.dv : u2.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
function u4(e) {
    return null != e && !e.publishing && "review_permissions" === e.action;
}
var u7 = n(247171);
function u5(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: o()(u7.row, r),
        children: [
            (0, a.jsx)(x.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: o()(u7.gutter, u7[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: u7.content, children: i }),
        ],
    });
}
var u8 = n(830205);
function u6(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(u5, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: u8.aK,
        children: (0, a.jsxs)("div", {
            className: u8.n8,
            children: [
                (0, a.jsx)(x.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: u8.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: u8.X8,
                          children: (0, a.jsx)(tq.m, {
                              text: eb.intl.string(eb.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tV.K, {
                                  "aria-label": eb.intl.string(eb.t.WAI6xu),
                                  icon: tM.P,
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
function u9(e) {
    let { projectId: t } = e,
        n = i.useContext(tp.bI);
    return (0, a.jsx)(u6, {
        icon: iU.ShieldIcon,
        children: eb.intl.format(ej.default["0S9HY8"], {
            onReview: async () => {
                null != n && (await (0, tp.vL)(t, n.guildId));
            },
        }),
    });
}
var oe = n(443865),
    ot = n(716502);
function on(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(u5, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: ot.Nr,
        children: (0, a.jsxs)("section", {
            className: ot.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: ot.X8,
                          children: (0, a.jsx)(tq.m, {
                              text: eb.intl.string(eb.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tV.K, {
                                  "aria-label": eb.intl.string(eb.t.WAI6xu),
                                  icon: tM.P,
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
function ol(e) {
    let { children: t } = e;
    return (0, a.jsx)(x.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: ot.DD,
        children: t,
    });
}
function or(e) {
    let { children: t } = e;
    return (0, a.jsx)(x.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: ot.rf,
        children: t,
    });
}
function oa(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: ot.o1, children: t });
}
var oi = n(95635);
function os(e) {
    let { projectId: t, publish: n, onDismiss: l } = e,
        r = tC(t, n);
    return (0, a.jsx)(u6, {
        icon: oi.UploadIcon,
        onDismiss: l,
        children: eb.intl.format(ej.default.fWfeZ8, { onPublish: () => r("outdated_notice") }),
    });
}
let ou = [
    {
        id: "bot_permissions",
        priority: 3,
        resolve: function (e) {
            let { turn: t, publish: n } = e;
            return null != t && u4(n) ? "hint" : null;
        },
        render: (e, t) => {
            let {
                context: { projectId: n },
            } = t;
            return (0, a.jsx)(u9, { projectId: n });
        },
    },
    {
        id: uK,
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
                (null != n.publishCta && su(l, n.publishCta))
                ? null
                : null != (t = e.messagesSinceShown(uK)) && t > 0 && t < 10
                  ? null
                  : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { projectId: n, publish: l },
                dismiss: r,
            } = t;
            return null != l ? (0, a.jsx)(os, { projectId: n, publish: l, onDismiss: r }) : null;
        },
    },
    {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, agentIdle: n, publish: l, justRemixed: r, noTurnsYet: a, ideasIntroAnchorId: i } = e;
            return !n || null == i || u4(l) ? null : null != t || r || a ? "card" : null;
        },
        dismissal: "anchor",
        render: (e, t) => {
            let {
                context: { onAskForIdeas: n },
                dismiss: l,
            } = t;
            return (0, a.jsxs)(on, {
                icon: oe.LightbulbIcon,
                onDismiss: l,
                children: [
                    (0, a.jsx)(ol, { children: eb.intl.string(ej.default.OJlbhX) }),
                    (0, a.jsx)(or, { children: eb.intl.string(ej.default["3vJBni"]) }),
                    (0, a.jsx)(oa, {
                        children: (0, a.jsx)(d.$, {
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
var oo = n(817921);
function oc(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            let a = (function (e, t, n, l, r) {
                let a,
                    s = (0, tp.Ay)(e),
                    u = (0, c.bG)([lr.default], () => lr.default.getCurrentUser()?.id),
                    o = t.at(-1),
                    d = null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
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
                                if ((0, nE.BL)(n)) return n;
                                if (!(0, nE.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(t),
                    h = null == m || u0(m) ? null : m,
                    g = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if ("publish_notice" === n.kind && n.publishNotice?.commands_failed !== !0) return n;
                        }
                        return null;
                    })(t),
                    p = g?.publishNotice?.update === !1 && 0 === uB(t, g.created_at, u) ? g.id : null,
                    x = o?.projectEvent?.type === "remixed" ? o.projectEvent : null,
                    v = x?.id ?? p,
                    j = uJ(e, x),
                    b = x?.settings_keys?.length ?? 0,
                    y = (0, c.bG)([rj.A], () => b > 0 && null == rj.A.getSettings(e), [b, e]),
                    k = (0, uq.WT)(e);
                return {
                    projectId: e,
                    turn: h,
                    publish: s,
                    draftHasText: n,
                    agentIdle:
                        (null == (a = (0, nE.Ji)(t)) || !!(0, nE.B0)(t, t.lastIndexOf(a))) &&
                        (null == m || !u0(m)) &&
                        null == uF(t) &&
                        null == j &&
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
                        let l = uU.get(`${e}:${n}`);
                        return null != l ? uB(t, l, u) : null;
                    },
                    isDismissed: (t) => uY(t, e, v),
                    onAskForIdeas: l,
                };
            })(t, n, l, r, u1);
            i.useSyncExternalStore(uQ, () => uZ);
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
                                uU.set(`${e}:${t}`, n);
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
                                          if (null == e.dismissal || uY(e, t, n)) return;
                                          let l = uX();
                                          switch (e.dismissal) {
                                              case "session":
                                                  var r;
                                                  uV.add(((r = e.id), `${t}:${r}`));
                                                  break;
                                              case "anchor":
                                                  if (null == n) return;
                                                  sm.w.set(uH, {
                                                      ...l,
                                                      anchor: { ...l.anchor, [t]: { ...l.anchor[t], [e.id]: n } },
                                                  });
                                                  break;
                                              case "app":
                                                  sm.w.set(uH, {
                                                      ...l,
                                                      app: { ...l.app, [t]: [...(l.app[t] ?? []), e.id] },
                                                  });
                                                  break;
                                              case "forever":
                                                  sm.w.set(uH, { ...l, forever: [...l.forever, e.id] });
                                          }
                                          (uZ++, uW.forEach((e) => e()));
                                      })(e.tip, t, a.ideasIntroAnchorId)
                                : void 0,
                    },
                }))
            );
        })(ou, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uG, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: oo.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(u3, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var od = n(52133),
    of = n(732159),
    om = n(888366),
    oh = n(862026),
    og = n(291192);
function op(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, oh.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: og.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: og.Sp,
                children: [
                    (0, a.jsx)("span", { className: og.q3 }),
                    (0, a.jsxs)("span", {
                        className: og.g8,
                        children: [
                            (0, a.jsx)(om.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(x.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: og.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: og.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(lg.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, eE.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(of.u, {
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
                        ? (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var ox = n(345942),
    ov = n(468689),
    oj = n(576705);
function ob(e) {
    let { guildId: t, update: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            " ",
            eb.intl.format(n ? ej.default.esEGL5 : ej.default["XrN+Bg"], {
                onOpen: () => ov.A.open(t, e2.BEX.GUILD_AUTOMOD),
            }),
        ],
    });
}
var oy = n(976860);
function ok(e) {
    return (0, c.bG)([ti.Ay, aJ.A], () => {
        let t = ti.Ay.getProject(e);
        return null == t ? "" : (aJ.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var ow = n(951465),
    oS = n(369455);
function oA(e) {
    var t, n, l;
    let r,
        i,
        { projectId: s, notice: u } = e,
        o = ok(s),
        d =
            null ==
            (i = (0, c.bG)([ti.Ay, lL.A], () => {
                let e = ti.Ay.getProject(s);
                return null == e || "guild" !== e.install_scope || null == e.guild_id
                    ? null
                    : (lL.A.getGuild(e.guild_id) ?? null);
            }))
                ? null
                : { guildId: i.id, name: i.name },
        f = (0, c.cf)([ti.Ay, th.A, lL.A, oj.A], () => {
            let e = ti.Ay.getProject(s);
            if (null == e || "guild" !== e.install_scope || null == e.guild_id) return { automod: !1, guildId: null };
            let t =
                    e.supported_surfaces?.includes(eD.q7.AUTOMOD) === !0 ||
                    th.A.getPublishStatus(s)?.surface === "automod",
                n = lL.A.getGuild(e.guild_id),
                l = null != n && oj.A.can(e2.xBc.MANAGE_GUILD, n);
            return { automod: t, guildId: t && l ? e.guild_id : null };
        });
    return (0, a.jsxs)(x.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            eb.intl.format(
                ((t = u),
                (n = d?.name ?? null),
                (l = f.automod),
                (r = null != n),
                !0 === t.commands_failed
                    ? r
                        ? ej.default.ESu5eZ
                        : ej.default["PrQg+B"]
                    : !0 === t.channel_skipped
                      ? r
                          ? ej.default.ZnQW4S
                          : ej.default.ev23Cw
                      : t.update
                        ? r
                            ? ej.default["LuS8a/"]
                            : ej.default.gQzuLC
                        : l
                          ? ej.default.KORRGl
                          : r
                            ? ej.default["/npn7F"]
                            : ej.default.MOrR29),
                {
                    name: o,
                    server: d?.name ?? "",
                    onOpenServer: () => {
                        null != d && (0, ox.u)(d.guildId);
                    },
                },
            ),
            null != f.guildId
                ? (0, a.jsx)(ob, { guildId: f.guildId, update: u.update })
                : !f.automod && u.update && null != u.published_revision
                  ? (0, a.jsx)(oN, { projectId: s, notice: u })
                  : null,
        ],
    });
}
function oN(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tp.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, c.cf)(
                    [th.A, ti.Ay],
                    () => {
                        let r = th.A.getPublishStatus(e),
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
                                "guild" === a.install_scope &&
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
                                    nT.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: oS.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, oy.pX)(e2.BVt.CHANNEL(t, n, l));
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
                                null != e && (0, ow.A)(e);
                            },
                        }),
              ],
          });
}
var oC = n(73153),
    oI = n(505527),
    oE = n(930390),
    oM = n(521981),
    o_ = n(491182),
    oT = n(438729),
    oP = n(895597),
    oR = n(448368),
    oL = n(837528),
    o$ = n(941308),
    oq = n(715628),
    oD = n(752636),
    oF = n(9842),
    oO = n(589022),
    oz = n(967198),
    oG = n(531685),
    oU = n(417461);
let oB = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oK(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function oH(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function oV(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = oH(e, t),
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
    if (oK(r) && oK(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && oK(oH(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oW(e, t) {
    let { streaming: n } = t,
        l = (0, c.bG)([a6.Ay], () => a6.Ay.useReducedMotion),
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
                      for (; a > 0 && oV(t, a);) a--;
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
    let f = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
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
                                    for (; l > t + 1 && n - l < 12 && oB.has(e.charAt(l - 1));) l--;
                                    return oB.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let u = s;
                                for (; u < t.length && u - s < 32 && oV(t, u);) u++;
                                return u;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
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
var oZ = n(624479),
    oX = n(890377),
    oY = n(92446),
    oQ = n(957565),
    oJ = n(180227);
function o0(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: o()(oJ.QE, { [oJ.Rn]: t }),
              children: (0, a.jsx)(iC.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          iC.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function o1(e) {
    return oQ.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: eb.intl.string(eb.t.JrGD7E), icon: oZ.CopyIcon, onClick: () => (0, oQ.C)(e) }]
        : [];
}
function o2(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: eb.intl.string(ej.default.CXtLD2),
                          tooltip: eb.intl.string(ej.default.DOb1HM),
                          icon: oX.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: eb.intl.string(ej.default.urZwpN),
                          icon: tM.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(o0, { groupStart: n, actions: [...r, ...o1(t)] });
}
function o3(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: eb.intl.string(ej.default.H8Jfhu), icon: tX.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: oY.BugIcon, onClick: r }];
    return (0, a.jsx)(o0, { groupStart: n, actions: [...i, ...o1(t), ...s] });
}
let o4 = (0, a2.createChannelRecord)({ id: "conjure-builder", type: e2.rbe.DM }),
    o7 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function o5(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: o()(oJ.Yq, { [oJ.x1]: t }), children: e });
}
function o8(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let o6 = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function o9(e, t, n) {
    let { content: l } = (0, o$.A)(e, o6),
        r = i.useMemo(() => ((0, rO.aW)(e.content) ? (0, oM.z2)(sU.U, e, o6).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: o4, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(oT.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, oq.A)(s, r);
}
function ce(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oL.m)(e, o4, t.usernameProfile, l),
        u = (0, oL.Jo)(t.avatarProfile, l),
        o = (0, c.bG)([oz.A], () => oz.A.getGuildId()),
        d = (0, c.bG)([lr.default], () => lr.default.getCurrentUser()),
        f = i.useCallback(
            (t) => {
                let n = lr.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(oO.A, { ...t, user: n, currentUser: d, guildId: o ?? void 0 });
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
function ct(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, rO.aW)(n.content)
                          ? (0, oM.z2)(sU.U, n, e).content
                          : (0, oM.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: oJ.GV,
                              children: [
                                  (0, a.jsx)(m.x, {
                                      className: oJ.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: o } = (0, c.cf)(
            [ll.A],
            () => ({
                isReplyAuthorBlocked: ll.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: ll.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, iA.X4)(n),
        f = (0, iA.X4)(t),
        h = ce(n);
    return (0, a.jsx)(oR.A, {
        repliedAuthor: d,
        baseAuthor: f,
        baseMessage: t,
        channel: o4,
        referencedMessage: { state: oF.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: o,
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
        l = ce(t);
    return (0, a.jsx)(oP.Ay, {
        message: t,
        channel: o4,
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
        o = (0, ui.vm)(l),
        c = i.useMemo(() => (0, iA.FT)(o, null), [o]),
        d = i.useMemo(() => R(t), [t]),
        f = d?.body ?? t,
        m = (0, ut.Qu)(f),
        h = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, a1.Ay)({ channelId: o4.id, content: f, author: o });
            return (0, a0.rh)({ ...e, timestamp: o8(n, e.timestamp), state: e2.cmJ.SENT });
        }, [f, o, n]);
    return null == h
        ? null
        : (0, a.jsx)(
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
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: u } = e,
        o = o9(t, l);
    return (0, a.jsx)(o_.A, {
        className: oJ.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(cn, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? (0, oU.b)(l)
                    ? (0, a.jsx)("div", { className: oJ.dg, children: o })
                    : o
                : (0, a.jsxs)("div", {
                      className: oJ.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: oJ.GV,
                              children: [
                                  (0, a.jsx)(m.x, {
                                      className: oJ.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: oJ.WO, children: o }),
                      ],
                  }),
        childrenAccessories: o5(i, "" !== l),
        childrenButtons: (0, a.jsx)(o2, { content: l, groupStart: s, onQueuedAction: u }),
    });
}
function ca(e) {
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
        h = i.useMemo(() => (0, iA.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, ui.vm)(p),
        v = i.useMemo(() => (null == r ? null : R(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, a1.Ay)({ channelId: o4.id, content: v?.body ?? r.content, author: x });
            return (0, a0.rh)({ ...e, id: r.id, timestamp: o8(r.createdAt, e.timestamp), state: e2.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: o4.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, a1.Ay)({ channelId: o4.id, content: "", author: o7 })),
        k = i.useMemo(
            () =>
                (0, a0.rh)({
                    ...y,
                    timestamp: o8(n, y.timestamp),
                    state: e2.cmJ.SENT,
                    ...(null != b ? { type: e2.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", f), [k, f]),
        S = i.useMemo(
            () => (0, oD.A)({ message: k, channel: o4, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        A = o9(w, f, oJ.OS);
    return (0, a.jsxs)("div", {
        className: oJ.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(o_.A, {
                className: oJ.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(ct, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: S,
                childrenMessageContent: A,
                childrenAccessories: o5(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            u ? (0, a.jsx)("img", { className: oJ.st, src: "/assets/c07664a29f3ee5ed.svg", alt: "" }) : null,
        ],
    });
}
var ci = n(981879);
function cs(e) {
    let { messageId: t, reaction: n } = e,
        l = i.useMemo(
            () =>
                (0, a0.rh)(
                    { ...(0, a1.Ay)({ channelId: o4.id, content: "" }), id: `conjure:${t}`, state: e2.cmJ.SENT },
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
                (oC.h.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: o4.id,
                    messageId: l.id,
                    users: [o7],
                    emoji: e,
                    reactionType: oI.v.NORMAL,
                }),
                    oC.h.dispatch({
                        type: "MESSAGE_REACTION_SET_FETCHED",
                        channelId: o4.id,
                        messageId: l.id,
                        emoji: e,
                        reactionType: oI.v.NORMAL,
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
        (0, a.jsx)("div", {
            className: ci.H,
            children: (0, a.jsx)(oE.A, {
                message: l,
                channel: o4,
                disableReactionCreates: !0,
                disableReactionUpdates: !0,
                useChatFontScaling: !0,
                showTooltipWhenReadOnly: !0,
            }),
        })
    );
}
var cu = n(442433);
n(775443);
var co = n(616e3),
    cc = n(155899);
function cd(e) {
    let { onSelect: t, onClose: n = cu.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(e5.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": eb.intl.string(eb.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(e8.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(e8.Dr, {
                          id: "restore-version",
                          label: eb.intl.string(ej.default.H8Jfhu),
                          icon: tX.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(e8.Dr, { id: "view-trace", label: "View Trace", icon: oY.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cf(e) {
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
            settingsFloating: f = !1,
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
        j = null != v && null != p ? () => cm(v, p) : void 0,
        b =
            ((t =
                eN() && "assistant" === x.role && (0, nE.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, c.bG)(
                [co.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : co.A.getTimingTraces(l).findLast((e) => {
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
    return (0, a.jsx)(uG, {
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
                          void (0, cu.jA)(t, (e) => (0, a.jsx)(cd, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(ca, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(o3, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(sW, {
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
                secretRequestStatus: d,
                settingsRequest: n.active || f ? void 0 : x.settingsRequest,
                settingsAskId: x.id,
                publishCta: n.active ? null : x.publishCta,
                turnId: (0, nE.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: m,
                onRestoreProposal:
                    null != w && null != p && m
                        ? () =>
                              cm(
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
function cm(e, t) {
    (0, cc.F)({ onConfirm: () => t(e) });
}
var ch = n(288539),
    cg = n(677683),
    cp = n(677690),
    cx = n(159711);
function cv(e) {
    let t,
        n,
        { projectId: l } = e,
        { outcome: r, pinnedName: i } =
            ((t = (0, c.bG)([cg.A], () => cg.A.getOutcome(l))),
            (n = (0, c.bG)(
                [ln.A, lr.default, ll.A],
                () => {
                    let e = t?.status === "pinned" ? ln.A.getChannel(t.channelId) : null;
                    return null == e ? null : (0, lt.m1)(e, lr.default, ll.A);
                },
                [t],
            )),
            { outcome: t, pinnedName: n }),
        s = eb.intl.string(ej.default.UGAfl9);
    return null != r
        ? (0, a.jsx)(nF, {
              title: s,
              children: (0, a.jsx)(x.E, {
                  className: cx.r,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children:
                      "pinned" === r.status
                          ? eb.intl.formatToPlainString(ej.default.gKe6Lw, { channelName: i ?? "" })
                          : eb.intl.string(ej.default["+kpQ3v"]),
              }),
          })
        : (0, a.jsx)(nF, { title: s, children: (0, a.jsx)(cj, { projectId: l }) });
}
function cj(e) {
    let { projectId: t } = e,
        {
            guildId: n,
            channels: l,
            selected: r,
            setPicked: s,
            pinning: u,
            failed: o,
            pin: f,
            skip: m,
        } = (function (e) {
            var t;
            let n = (0, c.bG)([ti.Ay], () => ti.Ay.getProject(e), [e]),
                l =
                    ((t = n?.guild_id ?? null),
                    (0, c.yK)(
                        [lP.Ay, oj.A],
                        () =>
                            null == t
                                ? []
                                : lP.Ay.getChannels(t)
                                      [lP.vM].map((e) => {
                                          let { channel: t } = e;
                                          return t;
                                      })
                                      .filter(
                                          (e) => e.type === e2.rbe.GUILD_VOICE && oj.A.can(e2.xBc.MANAGE_CHANNELS, e),
                                      ),
                        [t],
                    )),
                [r, a] = i.useState(null),
                [s, u] = i.useState(!1),
                [o, d] = i.useState(!1),
                f = l.find((e) => e.id === r) ?? null,
                m = n?.application_id,
                h = i.useCallback(async () => {
                    if (null == f || null == m) return;
                    (u(!0), d(!1));
                    let t = await (0, cp.pk)(f.id, m);
                    (u(!1), t ? (0, cp.tg)(e, { status: "pinned", channelId: f.id }) : d(!0));
                }, [m, e, f]),
                g = i.useCallback(() => (0, cp.tg)(e, { status: "skipped" }), [e]);
            return {
                guildId: n?.guild_id ?? null,
                channels: l,
                selected: f,
                setPicked: a,
                pinning: s,
                failed: o,
                pin: h,
                skip: g,
            };
        })(t),
        h = (0, lC.A)(n, "voice"),
        g = i.useMemo(() => {
            let e = new Set(l.map((e) => e.id));
            return (h ?? []).filter((t) => e.has(t.value));
        }, [l, h]);
    return (0, a.jsx)("div", {
        className: cx.r,
        children: (0, a.jsxs)(sr.B, {
            gap: 12,
            children: [
                (0, a.jsx)(x.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: eb.intl.string(ej.default["1vVBAw"]),
                }),
                g.length > 0
                    ? (0, a.jsx)(n5.Z, {
                          selectionMode: "single",
                          label: eb.intl.string(ej.default.peOi1H),
                          placeholder: eb.intl.string(ej.default["9+dfPT"]),
                          options: g,
                          value: r?.id ?? null,
                          onSelectionChange: (e) => s(e),
                          errorMessage: o ? eb.intl.string(ej.default.d7EeAm) : void 0,
                          disabled: u,
                          maxOptionsVisible: 4,
                          fullWidth: !0,
                      })
                    : (0, a.jsx)(x.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eb.intl.string(ej.default.JVUsIY),
                      }),
                (0, a.jsxs)("div", {
                    className: cx.o,
                    children: [
                        (0, a.jsx)(d.$, {
                            variant: "secondary",
                            size: "sm",
                            text: eb.intl.string(ej.default.Iw0l8o),
                            disabled: u,
                            onClick: m,
                        }),
                        g.length > 0
                            ? (0, a.jsx)(d.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: eb.intl.string(ej.default.FYI3qr),
                                  disabled: null == r,
                                  loading: u,
                                  onClick: f,
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
function cb(e, t, n) {
    return (0, a.jsx)(ch.A, { userId: e, content: `@${t}` }, n);
}
function cy(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => {
                (0, ui.Y_)(l);
            }, [l]);
            let r = (0, c.bG)([lr.default], () => (null == l ? null : lr.default.getUser(l)), [l]),
                a = (0, a4.tx)(r),
                s = ok(e),
                u =
                    (0, c.bG)([lL.A], () => (null == t.guild_id ? null : lL.A.getGuild(t.guild_id)?.name), [
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
        })(t, n, cb),
        r = uJ(t, n);
    return "voice_channel_pin" === n.type
        ? (0, a.jsx)(cv, { projectId: t })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(x.E, { variant: "text-md/normal", color: "text-default", children: l }),
                  null != r ? (0, a.jsx)(rL, { projectId: t, request: r, notifyAgent: !1 }) : null,
              ],
          });
}
let ck = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                u = n.message,
                o =
                    ((t = "user" === n.kind ? u.id : null),
                    nh.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, rO.DW)(u.attachments, u.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: u.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cl, {
                            groupStart: n.groupStart,
                            content: u.content,
                            createdAt: u.created_at,
                            userId: u.user_id,
                            accessories:
                                null != t || null != o || null != u.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(sG.A, { projectId: l, attachments: t }) : null,
                                              null != o ? (0, a.jsx)(s8, { send: o }) : null,
                                              null != u.agentReaction
                                                  ? (0, a.jsx)(cs, { messageId: u.id, reaction: u.agentReaction })
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
                                    return (n) => (0, rz.tp)(e, t.id, n);
                            })(l, u, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ca, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: u.created_at,
                            accessories:
                                n.hostsAttachments && null != u.attachments
                                    ? (0, a.jsx)(sG.A, { projectId: l, attachments: u.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sV, {
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
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ca, {
                            groupStart: n.groupStart,
                            content: null == u.publishNotice ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(oA, { projectId: l, notice: u.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ca, {
                            groupStart: n.groupStart,
                            content: null == u.projectEvent ? u.content : "",
                            createdAt: u.created_at,
                            accessories:
                                null == u.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cy, { projectId: l, event: u.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == u.contextSwitch
                                ? null
                                : (0, a.jsx)(op, { projectId: l, contextSwitch: u.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sV, { projectId: l, interrupted: !0, steps: u.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uG, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(sV, {
                            projectId: l,
                            steps: cw,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: u.todos,
                            provisionalTodo: u.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cf, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, od.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, od.A)(e.row, t.row, ["message"]) &&
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
                (0, od.A)(e.replyTo, t.replyTo) &&
                (0, od.A)(e.planVersion, t.planVersion) &&
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
    cS = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cA = new WeakMap();
function cN(e, t, n) {
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
function cE(e) {
    let t = e?.querySelectorAll("[data-conjure-plan-card]");
    return t?.[t.length - 1]?.closest("[data-conjure-row-key]") ?? null;
}
let cM = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: d,
            floatingSettingsMessageId: f,
            liveClarificationId: m,
            onRestoreVersion: h,
            scrollerRef: g,
            stickToBottomRef: p,
            pinned: j,
            onUnpin: b,
            handleRef: y,
            onShowsLatestChange: k,
        } = e,
        w = i.useRef(null),
        [S, A] = i.useState(null),
        N = i.useCallback((e) => {
            ((w.current = e), A(e));
        }, []),
        [C, I] = i.useState(null),
        E = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(E.current), []);
    let M = i.useCallback((e) => {
            (I(e), window.clearTimeout(E.current), (E.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        _ = (0, c.bG)([th.A], () => th.A.getPublishStatus(t)),
        T = (0, c.bG)([lr.default], () => lr.default.getCurrentUser()?.id),
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
                                        let t = (0, nI.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = cA.get(r);
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
                        let a = !(0, nE.BL)(e),
                            i = rH({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            u = (0, nI.C6)(e.steps, { turnActive: a }),
                            { lastWork: o, open: c } = (0, nI.CT)(u, { turnActive: a }),
                            d = u.at(-1)?.index,
                            f = !1;
                        for (let n of u) {
                            if (null != n.prose && cS.test(n.prose.content)) f = !0;
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
                                        turnActive: nM(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = cS.test(e.content ?? "");
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
                    (cA.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                })(n, _)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = so.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), so.set(t, n)), n);
                      })),
                m,
            );
        }, [n, _, m]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        q = (function (e, t, n) {
            if (null == t) return cN(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : cC(e, t.endKey, t.end - 1) + 1,
                a = cC(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cN(e, a, r));
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
            let e = g.current?.getScrollerNode(),
                t = K.current ? cE(w.current) : null;
            if (null == e || null == t) return;
            let n = new DOMMatrixReadOnly(getComputedStyle(t).transform).m42,
                l = t.getBoundingClientRect().top - n - e.getBoundingClientRect().top - 8;
            Math.abs(l) >= 1 && (e.scrollTop += l);
        }, [g]);
    i.useLayoutEffect(() => {
        let e = g.current?.getScrollerNode();
        if (null == e) return;
        let t = () => {
            K.current = !1;
        };
        for (let n of cI) e.addEventListener(n, t, { passive: !0 });
        return () => {
            for (let n of cI) e.removeEventListener(n, t);
        };
    }, [g]);
    let V = i.useCallback(() => {
            let e = g.current?.getScrollerNode(),
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
        }, [g]),
        W = i.useCallback(() => {
            let e = g.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cN(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cN(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cN(e, i, t.end) : null;
            })(F.current, D.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, tm.loadOlderHistory)(t) : null != n && $(n);
        }, [g, p, t]);
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
                    let e = g.current?.getScrollerNode(),
                        t = w.current?.querySelector(`[data-conjure-row-key="${CSS.escape(n.key)}"]`);
                    null != e &&
                        null != t &&
                        (e.scrollTop += t.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset);
                } else $(t);
                return !0;
            },
        }),
        [V, W, b, g],
    );
    let Z = i.useRef(null),
        X = i.useCallback(
            (e) => {
                var n;
                let l;
                ((Z.current = null), (K.current = !1));
                let r = w.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (b(), $(D.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = O.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, tm.loadOlderHistory)(t) && (Z.current = e);
                    return;
                }
                (b(),
                    (G.current = () => {
                        (w.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = F.current), cN(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, b, t],
        );
    (i.useEffect(() => {
        let e = Z.current;
        null != e && X(e);
    }, [P, X]),
        i.useLayoutEffect(() => {
            if (null == S) return;
            let e = S.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    if (null != l && l !== e) {
                        if (((e = l), p.current)) return void g.current?.scrollToBottom();
                        (H(), V());
                    }
                });
            return (t.observe(S), () => t.disconnect());
        }, [S, H, V, g, p]));
    let Y = null == q.endKey;
    (i.useEffect(() => k?.(Y), [Y, k]),
        i.useLayoutEffect(() => {
            ((D.current = q), (F.current = R), (O.current = P));
        }),
        i.useLayoutEffect(() => {
            let e = g.current?.getScrollerNode(),
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
                if (r && p.current && null != cE(l)) (b(), $(D.current), (K.current = !0), H());
                else if (p.current) g.current?.scrollToBottom();
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
        }, [t, n, P, R, q.start, q.end, g, p, b, H, V, W]));
    let Q = i.useMemo(() => uF(n), [n]),
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
                : (0, nE.BL)(en)
                  ? en.awaitingUser
                  : null) ?? void 0,
        er = (0, c.bG)([rj.A], () => rj.A.getSettings(t)?.secrets, [t]),
        ea = (0, uq.WT)(t),
        ei = i.useMemo(() => (0, rb.Mv)(n, er), [n, er]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: o()(uO.x7, uO.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uO.Ub, children: (0, a.jsx)(v.y, {}) }),
            });
        let e = "unavailable" === l ? ej.default.Td4Sf4 : ej.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uO.x7,
            children: (0, a.jsx)(uG, { role: "assistant", children: (0, a.jsx)(ca, { content: eb.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uz.Provider, {
        value: U,
        children: (0, a.jsxs)("ol", {
            ref: N,
            className: uO.x7,
            children: [
                P.slice(q.start, q.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            ck,
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
                        ck,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? et.get(n.in_reply_to) : void 0,
                            onJumpTo: X,
                            planVersion: J.get(n.render_id),
                            pickedIdeaIds: ee.get(n.render_id),
                            secretRequestAwaiting: l ? el : void 0,
                            secretRequestStatus: ei.get(n.render_id),
                            settingsFloating: n.id === f,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === Q ? d : void 0,
                            onRestoreVersion: h,
                        },
                        e.key,
                    );
                }),
                Y
                    ? ea.map((e) =>
                          (0, a.jsx)(
                              uG,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(ca, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uD.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != el && Y
                    ? (0, a.jsx)(uG, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(ca, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(x.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eb.intl.string(ej.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                Y ? (0, a.jsx)(oc, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var c_ = n(731084),
    cT = n(823376),
    cP = n(187447);
function cR(e) {
    let { activity: t, id: n } = e,
        l = (0, nC.j)(),
        { text: r, revealing: s } = oW(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            u.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cP.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(nS.Ch, {
                ref: u,
                className: cP.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: o()(sH.PT, cP.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ir.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cL = n(53659);
function c$(e) {
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
        p = i.useId(),
        [v, j] = i.useState(null),
        b = (0, c_.xu)({
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
        y = eb.intl.string(b),
        k = b === c_.kx["0"],
        [w, S] = i.useState(m ?? y),
        A = (0, nC.j)();
    (l || (0, c_.E4)(y, w) || (!A && !k)) && w !== y && S(y);
    let N = i.useRef(y);
    (i.useEffect(() => {
        N.current = y;
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
        ((E.current = k), !k && (0, c_.E8)(I.current) && S(N.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((M.current = (0, c_.E8)(I.current) ? M.current + 1 : 0), S((0, c_.Ov)(M.current)))
                    : N.current !== I.current
                      ? S(N.current)
                      : C.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, c_.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [A]));
    let _ = null != t && "" !== t.text,
        T = t?.session ?? null,
        P = _ && null != T && v === T,
        R = i.useCallback(() => {
            _ && null != T && j((e) => (e === T ? null : T));
        }, [_, T]),
        L = i.useCallback(() => j(null), []);
    return (0, a.jsx)(e7.Y, {
        targetElementRef: g,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(cR, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(nT.D, {
                innerRef: g,
                className: o()(cL.hF, _ && cL.Xd),
                "aria-label": eb.intl.string(
                    r
                        ? ej.default.qqlUiW
                        : b === ej.default.j8tmjK
                          ? ej.default.j8tmjK
                          : k
                            ? c_.kx["0"]
                            : ej.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": eb.intl.string(b),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: cL.bl,
                        children: (0, a.jsx)(cT.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cL.xu,
                        "aria-hidden": !!c || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(sZ.o, {
                                  ref: C,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: c_.vg,
                                  delay: null,
                                  className: cL.yE,
                              })
                            : (0, a.jsx)(x.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: cL.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let cq = { second: 1e3, minute: 6e4 };
function cD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = cq[t];
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
var cF = n(719374);
function cO(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = cD(t);
    return (0, a.jsx)(x.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: cF.$,
        "data-conjure-turn-timer": !0,
        children: (0, r1.C7)(l),
    });
}
function cz(e) {
    let { startedAt: t } = e,
        n = cD(t, "minute");
    return (0, a.jsx)(n$.A, { role: "timer", children: (0, r1.Us)(n) });
}
var cG = n(885574),
    cU = n(242779),
    cB = n(436804);
function cK(e) {
    return e.toLocaleString();
}
function cH(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cB.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cB.mf,
                children: [
                    (0, a.jsx)(x.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [cK((0, cU.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(x.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    cK(n.input_tokens),
                    " in \xb7 ",
                    cK(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cK(n.cache_creation_input_tokens)} cache write \xb7 ${cK(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cV(e) {
    let { project: t } = e,
        n = (0, cU.wU)(t.compaction),
        l = (0, cU.wU)(t.classifier),
        r = (0, cU.wU)(t.image),
        i = (0, cU.wV)(t.orchestrator, t.codegen),
        s = (0, cU.wV)(i, n);
    return (0, a.jsxs)("div", {
        className: cB.si,
        role: "dialog",
        "aria-label": eb.intl.string(ej.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cB.Q$,
                children: (0, a.jsxs)("div", {
                    className: cB.mf,
                    children: [
                        (0, a.jsxs)(x.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [cK((0, cU.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cH, { label: eb.intl.string(ej.default["9Sj3SX"]), usage: i }),
            (0, a.jsx)(cH, { label: eb.intl.string(ej.default.ANCEo3), usage: n }),
            (0, a.jsx)(cH, { label: eb.intl.string(ej.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsx)(cH, { label: eb.intl.string(ej.default.DHr5On), usage: r, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cB.mf,
                children: [
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: eb.intl.string(ej.default["8OUg09"]),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cU.sj)(s) ? "\u2014" : `${Math.round(100 * (0, cU.CA)(s))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cW(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(e7.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cV, { project: t }),
        children: (e) =>
            (0, a.jsx)(nT.D, {
                innerRef: n,
                className: cB.Y$,
                "aria-label": eb.intl.string(ej.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cG.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cZ = n(990250);
function cX(e) {
    let { queued: t } = e,
        n = eb.intl.string(ej.default.hzgPbZ);
    return (0, a.jsxs)("div", {
        className: cZ.nd,
        role: "dialog",
        "aria-label": n,
        "data-testid": "conjure-queued-card",
        children: [
            (0, a.jsxs)("div", {
                className: cZ.wx,
                children: [
                    (0, a.jsx)(x.E, { variant: "text-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", children: t.length }),
                ],
            }),
            (0, a.jsx)(nS.Ch, {
                className: cZ.XG,
                children: (0, a.jsx)("ul", {
                    className: cZ.p_,
                    children: t.map((e) => (0, a.jsx)(cY, { content: e.content }, e.render_id)),
                }),
            }),
        ],
    });
}
function cY(e) {
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
              className: cZ.AS,
              children: (0, a.jsx)(x.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: eb.intl.string(ej.default["07XimM"]),
              }),
          })
        : (0, a.jsxs)("li", {
              className: cZ.AS,
              children: [
                  (0, a.jsx)(x.E, {
                      ref: n,
                      variant: "text-sm/normal",
                      color: "text-default",
                      lineClamp: l ? void 0 : 3,
                      className: cZ.Qs,
                      children: t,
                  }),
                  s
                      ? (0, a.jsx)(lg.Q, {
                            variant: "secondary",
                            textVariant: "text-xs/medium",
                            text: eb.intl.string(l ? ej.default.nEMoeN : ej.default["W+la29"]),
                            "aria-expanded": l,
                            onClick: () => r((e) => !e),
                        })
                      : null,
              ],
          });
}
function cQ(e) {
    let { queued: t, className: n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(e7.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cX, { queued: t }),
        children: (e) =>
            (0, a.jsx)(nT.D, {
                innerRef: l,
                className: n,
                "data-testid": "conjure-queued-pill",
                ...e,
                children: (0, a.jsx)(x.E, {
                    tag: "span",
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: eb.intl.formatToPlainString(ej.default.REnNUn, { count: t.length }),
                }),
            }),
    });
}
var cJ = n(997421);
function c0(e) {
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
        j = (0, c.bG)([th.A], () => th.A.getPublishStatus(t)?.publishing === !0, [t]),
        [b, y] = i.useState(null),
        k = i.useCallback(
            (e) =>
                y(
                    (0, c_.E8)(e) || e === eb.intl.string(ej.default.mKK6wB) || e === eb.intl.string(ej.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        w = null == h ? null : (0, c_.uc)(h),
        S = null != s,
        A = s ?? (n ? l : void 0),
        N = n || r || S || !0 === m;
    return (0, a.jsxs)("div", {
        className: cJ.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cJ.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || v || j
                        ? (0, a.jsx)(c$, {
                              activity: d,
                              compacting: f,
                              saving: m,
                              restoring: r,
                              remixing: S,
                              recalling: u,
                              controlling: v,
                              publishPending: j && N,
                              publishing: j,
                              spoken: b,
                              onSpokenChange: k,
                          })
                        : null,
                    null != A ? (0, a.jsx)(cO, { startedAt: A }) : null,
                ],
            }),
            null != A ? (0, a.jsx)(cz, { startedAt: A }) : null,
            0 === p.length ? null : (0, a.jsx)(cQ, { queued: p, className: o()(cJ.BP, cJ.A1) }),
            null == h || null == w
                ? null
                : (0, a.jsxs)("span", {
                      className: cJ.BP,
                      children: [
                          (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": w.aria,
                              children: w.text,
                          }),
                          (0, a.jsx)(cW, { project: h }),
                      ],
                  }),
            "open" === g
                ? null
                : (0, a.jsx)(x.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === g ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": eb.intl.formatToPlainString(ej.default["tCo+ZM"], { status: (0, c_.Db)(g) }),
                      "data-conjure-conn": !0,
                      "data-state": g,
                      className: cJ.XF,
                      children: (0, c_.Db)(g),
                  }),
        ],
    });
}
var c1 = n(698638),
    c2 = n(608711);
let c3 = [eb.intl.string(ej.default["9w+Chc"]), eb.intl.string(ej.default.WAvmdq), eb.intl.string(ej.default.SKsrzl)];
function c4(e) {
    var t, n;
    let l,
        r,
        s,
        u,
        o,
        { projectId: f, restoreState: m, onRestoreVersion: h, onImportProject: g, escapeScopeRef: p } = e,
        v = (0, c.bG)([rs.A], () => rs.A.getMessages(f), [f]),
        j = (0, c.bG)([tm.default], () => tm.default.getConnState(f), [f]),
        b = (0, c.bG)([rs.A], () => rs.A.getProjectUsage(f), [f]),
        y = (0, c.bG)([rs.A], () => rs.A.getThinkingActivity(f), [f]),
        k = (0, c.bG)([rs.A], () => rs.A.isCompacting(f), [f]),
        w = (0, c.bG)([rs.A], () => rs.A.isSaving(f), [f]),
        S = ro(f),
        A = (0, c.bG)([rl.A], () => rl.A.getModelSettings(f), [f]),
        N = i.useRef(null),
        C = i.useRef(null),
        E = i.useRef(null),
        M = i.useRef(null),
        {
            stickToBottomRef: T,
            pinned: P,
            atBottom: R,
            unpin: L,
            releasePinHold: $,
            showsLatest: q,
            showsLatestRef: D,
            handleShowsLatestChange: F,
            updatePin: O,
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
                    for (let e of cI) t.addEventListener(e, o, { passive: !0 });
                    return () => {
                        for (let e of cI) t.removeEventListener(e, o);
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
        z = i.useCallback(() => {
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
            ($(), D.current ? e() : E.current?.showLatest(e));
        }, [$, D]),
        U = i.useCallback(() => {
            (O(), E.current?.handleScroll());
            let e = M.current;
            null != e && (e.position = T.current ? null : (E.current?.snapshot() ?? null));
        }, [O, T]),
        B = i.useContext(eP.A) === f;
    i.useLayoutEffect(() => {
        if (!B) return;
        let e = { position: eL.A.getProjectView(f).chatScroll };
        return ((M.current = e), () => (0, eR.g7)(f, { chatScroll: e.position }));
    }, [B, f]);
    let K = i.useRef(!B);
    (i.useLayoutEffect(() => {
        if (K.current || 0 === v.length) return;
        K.current = !0;
        let e = eL.A.getProjectView(f).chatScroll;
        null != e && E.current?.restore(e) !== !0 && null != M.current && (M.current.position = null);
    }, [v, f]),
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
                    r && (T.current ? C.current?.scrollToBottom() : E.current?.recordAnchor());
                });
            return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
        }, [T]),
        i.useEffect(() => {
            (0, tm.ensureConnection)(f);
        }, [f]),
        (0, rG.E1)(f, (0, nC.j)()));
    let V = H(f),
        W = (function (e) {
            let t = (0, tp.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, c.bG)([lL.A], () => (null == n ? null : (lL.A.getGuild(n)?.name ?? null))),
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
        })(f),
        Z = (function (e) {
            let t = (0, c.bG)([rq.A], () => rq.A.getSpendLimit(e), [e]);
            if (null == t) return null;
            let n = null == t.limitUsd ? null : rD.format(t.limitUsd);
            if ("blocked" === t.state) {
                let e = r$.A.getSubmitRequestURL();
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
        })(f),
        X =
            ((l = (0, c.bG)([ra.A], () => ra.A.getFailure(f))),
            (r = i.useCallback(() => (0, ri.CM)(f), [f])),
            null == l
                ? null
                : {
                      message: eb.intl.format(ej.default.Up6Ssw, { reason: l }),
                      retry: { text: eb.intl.string(ej.default["ywA+ET"]), onClick: r },
                  }),
        Y = (0, c.bG)([ra.A], () => ra.A.getSetupStartedAt(f), [f]),
        Q = i.useCallback(
            (e, t) => {
                (0, tm.sendUserMessage)(f, e, t);
            },
            [f],
        ),
        J = i.useCallback(
            (e, t, n) => {
                let l = n ?? Q;
                0 === V.annotations.length
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
                          })({ annotations: V.annotations, metaComment: e, context: V.context }),
                          t,
                      ),
                      G(f));
            },
            [V, Q, f],
        ),
        ee = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of nm)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, tm.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = nm.get(e);
                            (nm.delete(e), ng(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(f) ||
                rs.A.isThinking(f)) &&
                (0, tm.interruptTurn)(f);
        }, [f]),
        et = i.useCallback((e) => (0, n0.RQ)(f, e.implementation_prompt), [f]),
        [en, el] = (function (e) {
            let [t, n] = i.useState(() => rB(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rB(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(f),
        er = i.useCallback(() => Q(eb.intl.string(ej.default["t5CN3+"])), [Q]),
        ea = i.useCallback((e, t, n) => (0, n0.RQ)(f, e, { clarificationAnswers: t, attachments: n }), [f]),
        ei = i.useCallback((e) => (0, rr.X)(f, e), [f]),
        es = i.useCallback((e) => (0, t$.vX)(f, e), [f]),
        eu = i.useCallback((e) => (0, tO.gn)(f, "chat", Array.from(e), es), [f, es]),
        eo = i.useCallback(() => (0, n0.RQ)(f, eb.intl.string(ej.default.Zc7gML)), [f]),
        ec = m?.status === "restoring",
        ed = "open" === j && !ec,
        ef = v[v.length - 1],
        em = null != ef && "assistant" === ef.role && null != ef.proposal,
        [eh, eg] = i.useState(null),
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
                })(v),
            [v],
        ),
        ev = null != ex && ex.id !== eh ? ex : null,
        ey = i.useCallback(() => {
            null != ev && eg(ev.id);
        }, [ev]),
        [ek, ew] = i.useState(null),
        eS = (function (e) {
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
        })(f),
        eA = ef?.appBuildRequest != null && (0, nE.BL)(ef) && ef.appBuildRequest.id !== ek ? ef.appBuildRequest : null,
        eN = eS.request ?? (null == ev ? eA : null),
        eC = null == eS.request ? ev : null,
        eI = null != eN && eN === eS.request,
        { close: eE, sent: eM } = eS,
        e_ = eS.request?.id,
        eT = i.useCallback(() => {
            eI ? eE() : null != eN && ew(eN.id);
        }, [eN, eI, eE]),
        e$ = i.useCallback(
            (e) => {
                (null != e_ && eM(e_),
                    (0, ep.P0)({
                        text: eb.intl.formatToPlainString(ej.default.RZO35O, {
                            names: e.map((e) => e.name).join(", "),
                        }),
                        variant: "success",
                    }));
            },
            [e_, eM],
        ),
        eq = (0, c.bG)([rj.A], () => rj.A.getSettings(f), [f]),
        [eD, eF] = i.useState(null),
        eO = rC(),
        ez =
            null != ef &&
            ((t = ef.id),
            (s = (0, rb.Mv)(v, eq?.secrets)),
            (u = rI(v)),
            v.some(
                (e) =>
                    "assistant" === e.role &&
                    e.id !== t &&
                    !!(0, nE.BL)(e) &&
                    ((null != e.secretRequest && "open" === s.get(e.render_id)) ||
                        (null != e.settingsRequest && !u.has(e.id) && !rE(e.settingsRequest, eq, eO.has(e.id)))),
            )),
        eG =
            null != ef &&
            "assistant" === ef.role &&
            null != ef.settingsRequest &&
            null == ef.secretRequest &&
            (0, nE.BL)(ef) &&
            ef.id !== eD &&
            ((n = ef.settingsRequest),
            (o = n.keys ?? []),
            null != eq &&
                0 !== o.length &&
                o.every((e) => {
                    let t = eq.schema.find((t) => t.key === e);
                    return null != t && ry.has(t.type);
                })) &&
            rk(ef.settingsRequest, eq) &&
            !ez
                ? ef
                : null,
        eU = null == eS.request ? eG : null,
        eB = eU?.settingsRequest ?? null,
        eK = i.useCallback(() => {
            null != eG && eF(eG.id);
        }, [eG]),
        eH = null != eB,
        [eV, eW] = i.useState(null),
        eZ = eC?.id ?? eN?.id ?? eU?.id ?? (S ? "scope-setup" : void 0),
        eX = null != ev || null != eN || null != eG || S;
    i.useLayoutEffect(() => {
        let e = C.current?.getScrollerNode(),
            t = eV?.firstElementChild;
        if (null == eV || null == e || !(0, tR.vq)(t, HTMLElement) || null == eZ) return;
        function n() {
            T.current && C.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eV.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eV, eZ, C, T]);
    let eY = (0, c.bG)([rs.A], () => rs.A.hasLoadedHistory(f), [f]),
        eQ = (function (e) {
            let t = ro(e),
                n = (0, c.bG)([ti.Ay], () => null != ti.Ay.getProject(e), [e]),
                l = (0, c.bG)([rs.A], () => rs.A.hasLoadedHistory(e), [e]),
                r = (0, c.bG)([rs.A], () => rs.A.getMessages(e), [e]),
                a = (0, c.bG)([tm.default], () => tm.default.getConnState(e), [e]),
                [s, u] = i.useState(0);
            return (
                i.useLayoutEffect(() => {
                    (0, ru.Iy)(e, () => u((e) => e + 1));
                }, [e, n, l, r, t, a]),
                s
            );
        })(f),
        eJ = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: eY,
            historyUnavailable: (0, c.bG)([rs.A], () => rs.A.isHistoryUnavailable(f), [f]),
            connState: j,
        }),
        e0 = "loading" === eJ && 0 === v.length,
        e1 = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < f.length; t++) e = (31 * e + f.charCodeAt(t)) % 0x7fffffff;
            return c3[e % c3.length];
        }, [f]),
        e2 = em ? eb.intl.string(ej.default.Zc7gML) : "greeting" === eJ && 0 === v.length ? e1 : null,
        e3 = i.useMemo(() => {
            for (let e = v.length - 1; e >= 0; e--) {
                let t = v[e];
                if ("assistant" === t.role && !(0, nE.BL)(t)) return t;
            }
        }, [v]),
        e4 = null != e3,
        e7 = i.useMemo(() => v.filter((e) => "user" === e.role && "queued" === e.disposition), [v]),
        e5 = null != e3 ? (0, rF.S)(e3) : void 0,
        e8 = em && ed ? eo : void 0,
        e6 = i.useCallback(() => (0, n0.RQ)(f, eb.intl.string(ej.default.EMgIuY)), [f]),
        [e9, te] = i.useState(null),
        [tt, tn] = i.useState(e4);
    (tt !== e4 && (tn(e4), e4 || te(null)),
        i.useEffect(() => {
            if (!e4) return;
            let e = C.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? te(null)
                        : te(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [e4, e3?.steps, q]));
    let tl = q ? e9 : "bottom",
        tr = i.useMemo(() => (null != e3 ? (0, n_.b9)(e3.steps) : ""), [e3]),
        ta = i.useMemo(() => (null != e3 ? ((0, nI.lt)(e3.steps) ?? e3.todos) : void 0), [e3]),
        ts = e3?.provisionalTodo,
        tu = null != e3 && nM(e3),
        to = i.useMemo(() => {
            var e;
            return null != e3 ? ((e = e3.steps), r5((0, nI.Jf)(e, !0).tasks)) : void 0;
        }, [e3]);
    return (0, a.jsxs)("section", {
        ref: N,
        "data-conjure-chat": !0,
        className: c2.TE,
        children: [
            ed
                ? (0, a.jsx)(nN.A, {
                      title: eb.intl.string(ej.default.gy7byi),
                      description: eb.intl.string(ej.default["dkv/WO"]),
                      icons: c1.ir,
                      onDrop: eu,
                  })
                : null,
            (0, a.jsx)(nQ, {
                onJumpToActivity: z,
                line: tr,
                placement: e4 && "top" === tl ? "top" : null,
                todos: ta,
                todosLive: tu,
                provisionalTodo: ts,
                agents: to,
            }),
            (0, a.jsxs)("div", {
                className: c2.JX,
                children: [
                    (0, a.jsx)(nS.Ch, {
                        ref: C,
                        onScroll: U,
                        scrollbarGutter: e0 ? "both-edges" : "stable",
                        className: [c2.N$, R ? null : c2.hB, eH ? c2.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(rO.Fu.Provider, {
                            value: f,
                            children: (0, a.jsx)(cM, {
                                projectId: f,
                                messages: v,
                                emptyState: eJ,
                                floatingSettingsMessageId: eG?.id,
                                liveClarificationId: eC?.id,
                                onPickIdea: ed ? et : void 0,
                                onAskForIdeas: ed ? er : void 0,
                                draftHasText: en,
                                onApprovePlan: ed ? e6 : void 0,
                                onRestoreVersion: ec || e4 ? void 0 : h,
                                scrollerRef: C,
                                stickToBottomRef: T,
                                pinned: P,
                                onUnpin: L,
                                handleRef: E,
                                onShowsLatestChange: F,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: c2.NJ,
                        children: (0, a.jsx)(c0, {
                            projectId: f,
                            thinking: e4,
                            turnStartedAt: e5,
                            restoring: ec,
                            remixStartedAt: Y,
                            recalling: e0,
                            thinkingActivity: y,
                            compacting: k,
                            saving: w,
                            projectUsage: b,
                            connState: j,
                            queued: e7,
                        }),
                    }),
                    S
                        ? (0, a.jsx)("div", { ref: eW, className: c2.B5, children: (0, a.jsx)(rx, { projectId: f }) })
                        : null,
                    null == eC
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eW,
                              className: eH ? `${c2.B5} ${c2.J9}` : c2.B5,
                              children:
                                  null != eC.install_scope_switch
                                      ? (0, a.jsx)(
                                            rv,
                                            {
                                                projectId: f,
                                                clarification: eC,
                                                offer: eC.install_scope_switch,
                                                onKept: ey,
                                            },
                                            eC.id,
                                        )
                                      : (0, a.jsx)(
                                            rn,
                                            {
                                                projectId: f,
                                                clarification: eC,
                                                onSubmit: ed ? ea : void 0,
                                                onDismiss: ey,
                                            },
                                            eC.id,
                                        ),
                          }),
                    null == eN
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eW,
                              className: c2.B5,
                              children: (0, a.jsx)(
                                  le,
                                  { projectId: f, request: eN, canSend: ed, onDismiss: eT, onSent: eI ? e$ : void 0 },
                                  eN.id,
                              ),
                          }),
                    null == eB
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eC && null == eN ? eW : void 0,
                              className: c2.B5,
                              children: (0, a.jsx)(
                                  rL,
                                  { askId: eU?.id, projectId: f, request: eB, onDismiss: eK },
                                  eU?.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: c2.Jx,
                children: [
                    (0, a.jsx)(nQ, {
                        onJumpToActivity: z,
                        line: tr,
                        placement: e4 && "bottom" === tl ? "bottom" : null,
                        todos: ta,
                        todosLive: tu,
                        provisionalTodo: ts,
                        agents: to,
                    }),
                    0 === V.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: c2.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: eb.intl.formatToPlainString(ej.default["7b49dS"], {
                                          count: V.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(x.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: eb.intl.string(ej.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(d.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: eb.intl.string(ej.default["/zOv9+"]),
                                      onClick: () => G(f),
                                  }),
                              ],
                          }),
                    null == X
                        ? null
                        : (0, a.jsx)("div", {
                              className: c2.qB,
                              children: (0, a.jsx)(nA.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: X.message,
                                  action: X.retry,
                              }),
                          }),
                    null == W
                        ? null
                        : (0, a.jsxs)("div", {
                              className: c2.Db,
                              children: [
                                  (0, a.jsx)(nA.w, { type: "warning", role: "status", message: W.message }),
                                  (0, a.jsx)("div", {
                                      className: c2.jU,
                                      children: (0, a.jsx)(tq.m, {
                                          text: eb.intl.string(eb.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tV.K, {
                                              "aria-label": eb.intl.string(eb.t.WAI6xu),
                                              icon: tM.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: W.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    null == Z
                        ? null
                        : (0, a.jsx)("div", {
                              className: c2.qB,
                              children: (0, a.jsx)(nA.w, {
                                  type: Z.blocked ? "critical" : "warning",
                                  role: Z.blocked ? "alert" : "status",
                                  message: Z.message,
                              }),
                          }),
                    (0, a.jsx)(
                        uR,
                        {
                            projectId: f,
                            escapeScopeRef: p,
                            canSend: ed,
                            running: e4,
                            restoring: ec,
                            onSend: J,
                            hasPendingContext: V.annotations.length > 0,
                            onInterrupt: ed ? ee : void 0,
                            onUploadFile: es,
                            onImport: g,
                            onSendToOtherProjects: eX ? void 0 : eS.open,
                            onApprove: e8,
                            suggestion: e2,
                            questionOpen: eX,
                            modelSettings: A,
                            onModelSettingsChange: ei,
                            onDraftHasTextChange: el,
                            inputLocked: S,
                            aiPaused: Z?.blocked === !0,
                        },
                        eQ,
                    ),
                ],
            }),
        ],
    });
}
var c7 = n(761508),
    c5 = n(933294),
    c8 = n(207438),
    c6 = n(683438),
    c9 = n(721507);
function de(e, t) {
    return String(e).padStart(t, "0");
}
function dt(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${de(l.getHours(), 2)}:${de(l.getMinutes(), 2)}:${de(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${de(l.getMilliseconds(), 3)}` : r;
}
var dn = n(667931);
let dl = {
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
    dr = { running: "Running", ok: "Done", error: "Failed" };
function da(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function di(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function ds(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function du(e) {
    return di(e.count > 1 ? e.totalMs : e.end - e.start);
}
let dc = ["Arguments", "Result", "Usage", "Details"];
function dd(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function df(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function dm(e) {
    let t = (0, dn.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, dn.lp)(e) ? "interrupted" : "still running";
}
function dh(e) {
    return [dt(new Date(e.started_at).toISOString()) ?? "", ds(e.spans.length), (0, dn.Sj)((0, dn.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function dg(e) {
    let t = (0, dn.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, dn.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += dp(r, "in")),
                (l.output += dp(r, "out")),
                (l.cacheRead += dp(r, "cache_read")),
                (l.cacheWrite += dp(r, "cache_write")),
                (l.costUsd += dp(r, "cost_usd"))));
    }
    let r = dn.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function dp(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var dx = n(738188),
    dv = n(430993),
    dj = n(364840),
    db = n(224640),
    dy = n(20742);
let dk = { collapsed: new Set(), revealed: new Set() };
var dw = n(872892);
let dS = {
    op: dw.Q,
    model: dw.i3,
    tool: dw.dH,
    setup: dw.kc,
    worktree: dw.Qx,
    sandbox: dw.QH,
    build: dw.F1,
    platform: dw.Op,
    other: dw.fv,
};
function dA(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      ds(t.calls, "model call"),
                      `${da(t.input)} in`,
                      `${da(t.output)} out`,
                      `${da(t.cacheRead)} cache read`,
                      `${da(t.cacheWrite)} cache write`,
                      df(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dw.M1,
        children: [
            (0, a.jsx)("div", {
                className: dw.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dw.DJ} ${dS[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dw.o1,
                children: dn.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${di(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dw.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dw.nf} ${dS[e]}` }),
                                (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", children: dl[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(x.E, {
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
                : (0, a.jsx)(x.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dN(e) {
    return `conjure-perf-trace-${e}`;
}
function dC(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        u = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dw.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(u) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(x.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dw.p0} ${s + u > 85 ? dw.EU : dw.jh}`,
                children: i,
            }),
        ],
    });
}
function dI(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: u, onExpandSubtree: o } = e,
        c = t.children.length > 0,
        d = l ? nq._ : e9.a,
        f = i.useCallback(
            (e) => {
                (e.shiftKey && o(t.key), s(t.key));
            },
            [t.key, o, s],
        ),
        m = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? o(t.key) : u(t.key));
            },
            [t.key, o, u],
        );
    return (0, a.jsxs)(nT.D, {
        tag: "div",
        role: "treeitem",
        id: dN(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${dw.$y} ${r ? dw.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: dw.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(nT.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dw.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dw.YJ }),
                    (0, a.jsx)(x.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dw.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dw.nf} ${dS[t.category]}` }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dw.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dw.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(x.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dw.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(dx.WarningIcon, { size: "xs", color: "currentColor", className: dw.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dC, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dw.M0} ${dw.Nh}`
                    : t.running
                      ? `${dw.M0} ${dw.rF}`
                      : `${dw.M0} ${dS[t.category]}`,
                duration: du(t),
            }),
        ],
    });
}
function dE(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(nT.D, {
        tag: "div",
        role: "treeitem",
        id: dN(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dw.$y} ${l ? dw.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dw.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dw.ai,
                        children: (0, a.jsx)(nq._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dw.U9 }),
                    (0, a.jsx)("span", { className: `${dw.nf} ${dw.dL}` }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dw.MQ,
                        children: ds(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dC, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dw.M0} ${dw.ab} ${dw.dL}`,
                duration: di(t.totalMs),
            }),
        ],
    });
}
function dM(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(x.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dw._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dw.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dw.nf} ${dS[t.category]}` }),
                          (0, a.jsx)(x.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [dd("Start", `+${di(e.start)}`), dd("Duration", du(e))];
                      e.count > 1
                          ? t.push(
                                dd("Calls", String(e.count)),
                                dd("Longest call", di(e.maxMs)),
                                dd("Spread over", di(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(dd("Self time", di(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(dd("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(dd("Notes", l.join(", "))),
                          null != e.span.error && t.push(dd("Error", e.span.error)));
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
                              s = "cost_usd" === t ? df(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), dd(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...dc.flatMap((e) => {
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
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: dw.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(x.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(x.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: dw.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(x.E, {
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
function d_(e) {
    let { trace: t } = e,
        n = i.useMemo(() => dg(t), [t]);
    return (0, a.jsx)(dA, { stats: n });
}
function dT(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, dn.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dk : (0, dn.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, dn.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, dn.x7)(t)), l((n) => (0, dn._0)(n, t, e)));
            }, [t]);
            let u = i.useMemo(() => (null == t ? [] : (0, dn.wu)(t, n)), [t, n]),
                o = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dn.IE)(t, e);
                        null != n && l((e) => (0, dn.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dn.IE)(t, e);
                        null != n && l((e) => (0, dn.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, dn.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, dn.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, dn.hB)(t));
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
        { rows: l, collapsed: r, selected: s, selectedKey: u, select: o, toggle: c, reveal: f, expandSubtree: m } = n,
        h = (0, dn.dj)(t),
        g = i.useMemo(() => (0, dn.nF)(h), [h]),
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
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (o(t.key), document.getElementById(dN(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, f, l, o, u, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(dv.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dw.z,
                        children: [
                            (0, a.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dm(t),
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dh(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${ds(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(d_, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dw.KE,
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
                        "aria-activedescendant": null == u ? void 0 : dN(u),
                        className: dw.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: v,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dw.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dw.So,
                                        children: (0, a.jsx)(x.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dw.c1,
                                        children: g.map((e) =>
                                            (0, a.jsx)(
                                                x.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dw.io} ${(e / h) * 100 > 85 ? dw.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / h) * 100),
                                                    },
                                                    children: 0 === e ? "0" : di(e),
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
                                          dI,
                                          {
                                              node: e.node,
                                              extent: h,
                                              collapsed: r.has(e.key),
                                              selected: e.key === u,
                                              onSelect: o,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(dE, { row: e, extent: h, selected: e.key === u, onReveal: f }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(dj.j, { children: (0, a.jsx)(dM, { node: s }) }),
        ],
    });
}
function dP(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, c.bG)([co.A], () => co.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(db.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(dy.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(dv.c, {
                      children: (0, a.jsx)(x.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dT, { trace: i }),
        ],
    });
}
let dR = { running: dw.Vf, ok: dw.mo, error: dw.Sr };
function dL(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dw.Om} ${dR[t]}`, role: "img", "aria-label": dr[t] });
}
function d$(e, t) {
    (0, eE.openModal)((n) => (0, a.jsx)(dP, { ...n, projectId: e, traceId: t }));
}
function dq(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => d$(t, n.id), [t, n.id]);
    return (0, a.jsxs)(nT.D, {
        className: dw.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dw.sU,
                children: [
                    (0, a.jsx)(dL, { status: (0, dn.lQ)(n) }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dw._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dm(n),
                    }),
                ],
            }),
            (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: dh(n) }),
            null == l
                ? null
                : (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dD(e) {
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
            (0, c9.o)(new Blob([e], { type: "application/json" }), `conjure-traces-${t}.json`).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(e7.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: e7.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(e5.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(e8.rX, {
                    children: (0, a.jsx)(e8.Dr, {
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
            return (0, a.jsx)(tV.K, {
                ...e,
                buttonRef: l,
                icon: iw.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dF(e) {
    let { projectId: t } = e,
        n = (0, c.yK)([co.A], () => co.A.getTimingTraces(t), [t]),
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
                    let t = e.map(dg);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: dn.BF.map((e) => ({
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
              className: dw.Ie,
              children: [
                  (0, a.jsx)(x.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(x.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dw.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dw.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dw.fH,
                              children: (0, a.jsx)(c6.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dD, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(nS.Ch, {
                      className: dw.XG,
                      children: [
                          (0, a.jsx)(dA, { stats: o }),
                          0 === u.length
                              ? (0, a.jsx)(x.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dw.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dq, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dO(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dz(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dG(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dU(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dB(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dK(e) {
    return eb.intl.string("preview" === e ? ej.default["2yLYlG"] : ej.default.eiAi57);
}
let dH = ["all", "preview", "stable", "web"];
function dV(e) {
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
function dW(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : eb.intl.formatToPlainString(ej.default["XO/bN4"], {
              p50: dO(e.memory_p50_bytes ?? 0),
              p999: dO(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dZ = {
    db: () => ej.default["7l+DFG"],
    db_preview: () => ej.default.FAuffi,
    runtime: () => ej.default["Gkl+ab"],
    runtime_preview: () => ej.default.ynpJzv,
    bot: () => ej.default["5/i0cj"],
    bot_preview: () => ej.default.m2jsnw,
};
var dX = n(911608),
    dY = n(177427);
function dQ(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dY.KE,
        children: [
            (0, a.jsx)("div", {
                className: dY.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(v.y, { type: v.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: eb.intl.string(ej.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(x.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: eb.intl.formatToPlainString(ej.default.INVO50, { time: dU(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(d.$, { variant: "secondary", size: "sm", text: eb.intl.string(ej.default.oKEgiu), onClick: l }),
        ],
    });
}
function dJ(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dY.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(x.E, { variant: "text-xs/semibold", color: "text-muted", className: dY.Gf, children: t }),
            n,
        ],
    });
}
function d0(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dY.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dY.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dY.kS,
                        children: [i, (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dY.kS,
                        children: [
                            s,
                            (0, a.jsx)(x.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function d1(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dY.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dY.x7,
                children: [
                    (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dX.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dY.dh : void 0,
            }),
        ],
    });
}
function d2(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(d0, {
            label: eb.intl.string(ej.default.SXP7pD),
            value: eb.intl.string(ej.default.E5hKVi),
            hint: dV(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(d0, {
            label: eb.intl.string(ej.default.SXP7pD),
            value: "\u2014",
            hint: eb.intl.string(ej.default.AGvoMJ),
        });
    let l = dW(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(d0, { label: eb.intl.string(ej.default["H/X+FI"]), value: dz(n.cpu_ms) }),
            null != l && (0, a.jsx)(d0, { label: eb.intl.string(ej.default.lmFmMO), value: l }),
        ],
    });
}
function d3(e) {
    let { analytics: t } = e,
        n = eb.intl.string(ej.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dJ, {
            title: n,
            children: (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: dV(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dZ[t] : null) ? eb.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dJ, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(x.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: eb.intl.string(ej.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          d0,
                          {
                              label: n,
                              value: eb.intl.formatToPlainString(ej.default["w/2voO"], { cpu: dz(t.cpu_ms) }),
                              hint: dW(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var d4 = n(678708),
    d7 = n(414499),
    d5 = n(714800),
    d8 = n(81466),
    d6 = n(424383),
    d9 = n(664121),
    fe = n(816943),
    ft = n(268791),
    fn = n(514042),
    fl = n(872351),
    fr = n(708988),
    fa = n(150934),
    fi = n(417270);
let fs = "Restart Agent",
    fu = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function fo(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function fc(e, t) {
    return { label: e, value: null != t && "" !== t ? dU(t) : "Unknown", icon: "calendar" };
}
function fd(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function ff(e, t, n, l) {
    let [r, a] = fu[n.status];
    return { label: e, value: `${fd(n.bytes)} of ${fd(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function fm(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dU(e.at);
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
let fh = { main: "Main vs Remote", wip: "WIP vs Remote" };
function fg(e) {
    let t = `container ${fo(e.local)} \xb7 remote ${fo(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: fh[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dG(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dG(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dG(n)} Ahead, ${dG(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let fp = ["main", "wip"];
var fx = n(400154);
let fv = {
        checkout: d4.FolderIcon,
        edit: lh.PencilIcon,
        remote: d7.h,
        commits: d5.e,
        calendar: d8.CalendarIcon,
        save: d6.L,
        objects: d9.R,
        download: fe.$,
        size: ft.$,
        file: fn.FileIcon,
    },
    fj = {
        ok: [rM.y, t0.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dx.WarningIcon, t0.A.colors.ICON_FEEDBACK_WARNING],
        error: [s3.a, t0.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [fl.z, t0.A.colors.ICON_MUTED],
        behind: [fr.M, t0.A.colors.ICON_MUTED],
    };
function fb(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, c.bG)([co.A], () => co.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, c8.DK)(t), [t]),
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
                    `Updated ${dU(r)}`,
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
    return (0, a.jsxs)(dJ, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: fx.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(x.E, {
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
                    if (!e.running || null != e.localError) return [fm(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            fm(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dG(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = fp.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(fg))
                        : l.push(
                              { label: "Main", value: fo(e.heads.main), icon: "remote" },
                              { label: "WIP", value: fo(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dG(e.commits) : "Unknown", icon: "commits" },
                            fc("Oldest Commit", e.oldest),
                            fc("Newest Commit", e.newest),
                            fm(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dG(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dG(t.loose)} loose (${dO(t.looseBytes)}) \xb7 ${dG(t.packed)} packed in ${n} (${dO(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dG(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dG(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                ff(
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
                                  ff("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = fv[r],
                        [u, o] = null != i ? fj[i] : [null, void 0];
                    return (0, a.jsx)(
                        d0,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: t0.A.colors.ICON_MUTED }),
                            state: null != u ? (0, a.jsx)(u, { size: "xs", color: o }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function fy(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: o,
        } = (function (e) {
            let t = (0, c.bG)([co.A], () => co.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, c8.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = co.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, c8.gX)(e);
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
            let u = i.useCallback(() => (0, c8.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: fs,
                },
                restart: u,
            };
        })(t),
        f = i.useCallback(() => {
            (0, eg.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: o });
        }, [u, o]);
    return (0, a.jsxs)("div", {
        className: fx.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: fx.nM,
                children: [
                    (0, a.jsx)(fa.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(d.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: fi.RetryIcon,
                        text: fs,
                        loading: l,
                        disabled: l,
                        onClick: f,
                    }),
                ],
            }),
            (0, a.jsx)(x.E, {
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
                            return `Restarted \xb7 new instance since ${dU(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dU(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fk(e, t) {
    return (0, a.jsx)(d0, {
        label: e,
        value: eb.intl.formatToPlainString(ej.default.yHJxuP, { count: dG((0, cU.aM)(t)) }),
        hint: `${dG(t.input_tokens)} in \xb7 ${dG(t.output_tokens)} out \xb7 ${dG(t.cache_read_input_tokens)} cache read`,
    });
}
function fw(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        o,
        f,
        m,
        h,
        { projectId: g, status: p, fetchState: v, onRefresh: j } = e,
        {
            lastTurn: b,
            lastCompaction: y,
            lastDecline: k,
            forceState: w,
            restartState: S,
            turnRunning: A,
            handleForceCompaction: N,
            handleForceCompactionOverride: C,
            handleRestartWorkspace: I,
            lifetime: E,
            limits: M,
            session: _,
            contextCeiling: T,
        } = ((t = (0, c.bG)([co.A], () => co.A.getLastTurnUsage(g), [g])),
        (n = (0, c.bG)([co.A], () => co.A.getLastCompaction(g), [g])),
        (l = (0, c.bG)([co.A], () => co.A.getLastCompactionDecline(g), [g])),
        (r = (0, c.bG)([co.A], () => co.A.getForceCompactionState(g), [g])),
        (s = (0, c.bG)([co.A], () => co.A.getSandboxRestartState(g), [g])),
        (u = (0, c.bG)([rs.A], () => rs.A.isThinking(g), [g])),
        (o = i.useCallback(() => (0, c8.Lj)(g), [g])),
        (f = i.useCallback(() => (0, c8.Lj)(g, !0), [g])),
        (m = i.useCallback(() => (0, c8.bq)(g), [g])),
        (h = p?.agent?.limits ?? null),
        {
            lastTurn: t,
            lastCompaction: n,
            lastDecline: l,
            forceState: r,
            restartState: s,
            turnRunning: u,
            handleForceCompaction: o,
            handleForceCompactionOverride: f,
            handleRestartWorkspace: m,
            lifetime: p?.agent?.lifetime ?? null,
            limits: h,
            session: p?.agent?.session ?? null,
            contextCeiling: n?.promptCeiling ?? h?.context_window_tokens ?? null,
        });
    return (0, a.jsxs)("div", {
        className: fx.Mf,
        children: [
            (0, a.jsx)(dQ, { generatedAt: p?.generated_at ?? null, fetchState: v, onRefresh: j }),
            (0, a.jsx)(dJ, {
                title: eb.intl.string(ej.default.JghNal),
                children:
                    null == E
                        ? (0, a.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eb.intl.string(ej.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(d0, {
                                      label: eb.intl.string(ej.default["9nqym2"]),
                                      value: dG((0, cU.a7)(E.cost_usd)),
                                      hint: eb.intl.formatToPlainString(ej.default.NCdUIh, { count: dG(E.turns) }),
                                  }),
                                  fk(eb.intl.string(ej.default.xtxP0e), E.orchestrator),
                                  fk(eb.intl.string(ej.default["9Sj3SX"]), E.codegen),
                                  fk(eb.intl.string(ej.default.ANCEo3), (0, cU.wU)(E.compaction)),
                                  p?.agent?.outcomes != null &&
                                      Object.keys(p.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(d0, {
                                          label: eb.intl.string(ej.default.SQHm7C),
                                          value: Object.entries(p.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dG(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dJ, {
                title: eb.intl.string(ej.default.dZHPE5),
                children:
                    null == b
                        ? (0, a.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: eb.intl.string(ej.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fk(eb.intl.string(ej.default["7X3i9d"]), b.total),
                                  (0, a.jsx)(d0, {
                                      label: eb.intl.string(ej.default["8OUg09"]),
                                      value: `${Math.round((b.cache_hit_rate ?? (0, cU.CA)(b.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dJ, {
                title: eb.intl.string(ej.default.NbRk9a),
                children: [
                    null != y && null != T
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(d1, {
                                      label: eb.intl.string(ej.default.Kw5wiQ),
                                      used: y.tokensAfter,
                                      max: T,
                                      formatValue: dG,
                                  }),
                                  (0, a.jsx)(d0, {
                                      label: eb.intl.string(ej.default.mRbSns),
                                      value: `${dG(y.tokensBefore)} \u{2192} ${dG(y.tokensAfter)}`,
                                      hint: eb.intl.formatToPlainString(ej.default.Vq3skS, {
                                          count: dG(y.retainedMessages),
                                          time: dU(y.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(x.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != T
                                      ? eb.intl.formatToPlainString(ej.default.GMLCNv, { ceiling: dG(T) })
                                      : eb.intl.string(ej.default.s0U5Fv),
                          }),
                    null != k &&
                        (0, a.jsx)(d0, {
                            label: eb.intl.string(ej.default["4BX5KK"]),
                            value: `${dG(k.projected)} / ${dG(k.threshold)}`,
                            critical: !0,
                            hint: eb.intl.formatToPlainString(ej.default["6ngCax"], { time: dU(k.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: fx.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eb.intl.string(ej.default["1EiJeb"]),
                                disabled: "pending" === w,
                                onClick: N,
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof w && "compacted" !== w.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eb.intl.string(ej.default.wox6Ev);
                                    if ("pending" === e) return eb.intl.string(ej.default.OcPHQ1);
                                    let t = dU(e.observedAt);
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
                                        (0, a.jsx)(d.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: eb.intl.string(ej.default.ZxG2AI),
                                            onClick: C,
                                        }),
                                        (0, a.jsx)(x.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: eb.intl.string(ej.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: fx.Lj,
                        children: [
                            (0, a.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                text: eb.intl.string(ej.default["5qCjBu"]),
                                loading: "pending" === S,
                                disabled: "pending" === S || A,
                                onClick: I,
                            }),
                            (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof S && "restarted" !== S.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return eb.intl.string(ej.default.mlok8D);
                                    if ("pending" === e) return eb.intl.string(ej.default["1ugSyK"]);
                                    let t = dU(e.observedAt);
                                    return eb.intl.formatToPlainString(
                                        "restarted" === e.outcome ? ej.default["76mfqO"] : ej.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(S),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fy, { projectId: g }),
                ],
            }),
            (0, a.jsx)(fb, { projectId: g }),
            (null != _ || p?.analytics != null) &&
                (0, a.jsxs)(dJ, {
                    title: eb.intl.string(ej.default.EsSzCS),
                    children: [
                        null != _ &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(d0, {
                                        label: eb.intl.string(ej.default.CLXHAs),
                                        value: dU(_.instance_since),
                                        hint: eb.intl.string(ej.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(d0, {
                                        label: eb.intl.string(ej.default["8V8e1Z"]),
                                        value: dG(_.sockets),
                                    }),
                                    (0, a.jsx)(d0, {
                                        label: eb.intl.string(ej.default["4pBzYW"]),
                                        value: _.turn_inflight
                                            ? eb.intl.string(ej.default.Wv025I)
                                            : eb.intl.string(ej.default["7/lsFY"]),
                                    }),
                                    _.queued_messages > 0 &&
                                        (0, a.jsx)(d0, {
                                            label: eb.intl.string(ej.default["3oUYnv"]),
                                            value: dG(_.queued_messages),
                                        }),
                                ],
                            }),
                        p?.analytics != null && (0, a.jsx)(d2, { analytics: p.analytics }),
                    ],
                }),
            null != M &&
                (0, a.jsxs)(dJ, {
                    title: eb.intl.string(ej.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(d0, {
                            label: eb.intl.string(ej.default.IlDBN3),
                            value: dG(M.max_subagent_iterations),
                        }),
                        (0, a.jsx)(d0, {
                            label: eb.intl.string(ej.default["ZdzKR+"]),
                            value: eb.intl.formatToPlainString(ej.default.yHJxuP, {
                                count: dG(M.context_window_tokens),
                            }),
                        }),
                        (0, a.jsx)(d0, {
                            label: eb.intl.string(ej.default.cIhN2W),
                            value: eb.intl.formatToPlainString(ej.default.yHJxuP, {
                                count: dG(M.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(d0, {
                            label: eb.intl.string(ej.default["+fOn/q"]),
                            value: dG(M.max_user_message_chars),
                        }),
                        (0, a.jsx)(d0, { label: eb.intl.string(ej.default.kIHga0), value: dG(M.max_build_attempts) }),
                        (0, a.jsx)(d0, { label: eb.intl.string(ej.default.Iw03yW), value: dG(M.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fS = n(237528),
    fA = n(629584),
    fN = n(531893);
function fC(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fN.ut,
              children: (0, a.jsx)(x.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: eb.intl.string(ej.default.h1SE6R),
              }),
          });
}
function fI(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fN.qf,
              children: [
                  (0, a.jsx)(x.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: eb.intl.string(ej.default.h1SE6R),
                  }),
                  (0, a.jsx)(x.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: eb.intl.string(ej.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fN.qf,
              children: [
                  (0, a.jsx)(x.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fE(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fN.ps,
              children: (0, a.jsx)(x.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: eb.intl.string(ej.default.V7Ri8H),
              }),
          })
        : null;
}
var fM = n(109079);
let f_ = i.memo(function (e) {
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
        className: fM.vK,
        children: [
            (0, a.jsx)(x.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fM.Mt,
                selectable: !0,
                children: dt(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(x.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fM.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fM.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fM.Cq, children: (0, a.jsx)(fS.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fM.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fS.v, {
                                text: eb.intl.string(ej.default.TrC9c8),
                                variant: "redLight",
                            }),
                        }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== o.prefix &&
                                      (0, a.jsxs)(x.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [o.prefix, " "],
                                      }),
                                  (0, a.jsxs)(nT.D, {
                                      className: fM.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": u,
                                      "aria-label": eb.intl.string(ej.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(e9.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(nq._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(x.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  o.marker,
                                                  " ",
                                                  eb.intl.formatToPlainString(
                                                      "[\u2026]" === o.marker
                                                          ? ej.default.kUhyUv
                                                          : ej.default["N+fphl"],
                                                      { count: o.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(x.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: fM.dF,
                                          selectable: !0,
                                          id: u,
                                          children: o.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: c,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function fT(e) {
    let { projectId: t } = e,
        n = (0, c.bG)([c5.A], () => c5.A.getLogs(t), [t]),
        l = (0, c.bG)([c5.A], () => c5.A.getHistoryState(t, "logs")),
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
                dH.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dK(e);
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
        className: fM.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fM.y4,
                children: [
                    (0, a.jsx)(fA.I, {
                        look: "pill",
                        "aria-label": eb.intl.string(ej.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fM.KT,
                        children: (0, a.jsx)(c6.I, {
                            query: u,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: eb.intl.string(ej.default["m2+37Y"]),
                            "aria-label": eb.intl.string(ej.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(fC, { state: l }),
            (0, a.jsxs)(nS.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: fM.sx,
                children: [
                    (0, a.jsx)(fE, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fI, {
                              state: l,
                              emptyTitle: eb.intl.string(ej.default.S7qlPG),
                              emptyBody: eb.intl.string(ej.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: eb.intl.string(ej.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(f_, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fP(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dJ, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(x.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: eb.intl.string(ej.default.umcjif),
                      }),
        })
    );
}
function fR(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(d0, {
                      label: eb.intl.formatToPlainString(ej.default["01ZMS4"], { env: dK(n) }),
                      value: ((t = l.connected), eb.intl.string(t ? ej.default.Wv025I : ej.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(d0, {
                      label: eb.intl.string(ej.default["z1dh+F"]),
                      value: dG(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dU(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(d0, { label: eb.intl.string(ej.default.Iz5GnJ), value: dG(l.guild_count) }),
                  (0, a.jsx)(d0, {
                      label: eb.intl.string(ej.default["7UqtNv"]),
                      value: dG(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? eb.intl.formatToPlainString(ej.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dU(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(d0, {
                          label: eb.intl.string(ej.default["x3+JXJ"]),
                          value: dG(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(d0, { label: dK(n), value: eb.intl.string(ej.default.lTHQss) });
}
function fL(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(d0, {
        label: dK(t),
        value: eb.intl.formatToPlainString(ej.default["Xq+wHT"], {
            requests: dG(n.requests),
            failures: dG(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? eb.intl.formatToPlainString(ej.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dU(n.last_failure.at),
                  })
                : eb.intl.formatToPlainString(ej.default["7KlGT6"], { time: dU(n.since) }),
    });
}
function f$(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(d0, {
                label: eb.intl.formatToPlainString(ej.default["92gVTm"], { env: dK(t) }),
                value: dG(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    d0,
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
                                  ? eb.intl.formatToPlainString(ej.default.wxAWNv, { time: dU(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fq(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(d0, {
        label: dK(t),
        value: eb.intl.formatToPlainString(ej.default.suAOj9, { calls: dG(n.calls), errors: dG(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fD(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dJ, {
            title: t,
            children: (0, a.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: eb.intl.string(ej.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dJ, {
        title: t,
        children: [
            (0, a.jsx)(d0, {
                label: eb.intl.string(ej.default.xtD4Zp),
                value: dG(n.requests),
                hint: eb.intl.formatToPlainString(ej.default["7KlGT6"], { time: dU(n.since) }),
            }),
            (0, a.jsx)(d0, { label: eb.intl.string(ej.default.gfRhR3), value: dG(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(d1, {
                              label: eb.intl.string(ej.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dz,
                          }),
                          (0, a.jsx)(d0, {
                              label: eb.intl.string(ej.default.mSKImM),
                              value: dz(r),
                              hint: eb.intl.formatToPlainString(ej.default.JqMU05, {
                                  total: dz(n.cpu_ms_total),
                                  wall: dz(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(d0, {
                      label: eb.intl.string(ej.default.LEJ5r3),
                      value: eb.intl.string(ej.default["2Ekb2b"]),
                      hint: eb.intl.string(ej.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(d0, { label: eb.intl.string(ej.default.xvmL1D), value: dz(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(d0, {
                    label: eb.intl.string(ej.default["4sQYwH"]),
                    value: dG(n.exceeded_cpu),
                    critical: !0,
                }),
            (0, a.jsx)(d0, {
                label: eb.intl.string(ej.default.bQenOy),
                value: dG(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: eb.intl.formatToPlainString(ej.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(d0, { label: eb.intl.string(ej.default.xgpn4Y), value: dB(n.build) }),
        ],
    });
}
function fF(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        u = r
            ? [{ key: "shared", label: eb.intl.string(ej.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: eb.intl.string(ej.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: eb.intl.string(ej.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dJ, {
        title: eb.intl.string(ej.default.mRt7MW),
        children: u.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(d0, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(d0, {
                                  label: eb.intl.formatToPlainString(ej.default.u7kJJ4, { env: n }),
                                  value: dO(l.r2_bytes),
                                  hint: eb.intl.formatToPlainString(
                                      l.r2_truncated ? ej.default.lH0oQw : ej.default.m9h02S,
                                      { count: dG(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(d1, {
                                      label: eb.intl.formatToPlainString(ej.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dO,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fO(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: fx.Mf,
        children: [
            (0, a.jsx)(dQ, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fD, {
                            title: eb.intl.string(ej.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fD, {
                            title: eb.intl.string(ej.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fF, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fP, {
                                title: eb.intl.string(ej.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fR, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fP, {
                                title: eb.intl.string(ej.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fL, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fP, {
                                title: eb.intl.string(ej.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(f$, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fP, {
                                title: eb.intl.string(ej.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fq, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(d3, { analytics: t.analytics }),
                        (0, a.jsxs)(dJ, {
                            title: eb.intl.string(ej.default.fQMpFp),
                            children: [
                                (0, a.jsx)(d0, {
                                    label: eb.intl.string(ej.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dB(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(d0, {
                                    label: eb.intl.string(ej.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dB(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fz = n(592465);
function fG(e) {
    let { projectId: t, onClose: n } = e,
        l = eN(),
        [r, s] = i.useState(() => (l && ew?.projectId === t ? "trace" : "logs")),
        u = (0, c.bG)([co.A], () => co.A.getStatus(t), [t]),
        o = (0, c.bG)([co.A], () => co.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, c8.R7)(t), (0, c8.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, tm.subscribeDebugBacklog)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ew || ew.projectId !== e) return null;
            let { traceId: t } = ew;
            return ((ew = null), t);
        })(t);
        return null != e && (d$(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        eS(t, () => {
            f() && s("trace");
        }));
    let m = i.useCallback(() => {
            (0, oQ.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: co.A.getStatus(t),
                        last_turn_usage: co.A.getLastTurnUsage(t),
                        last_compaction: co.A.getLastCompaction(t),
                        last_compaction_decline: co.A.getLastCompactionDecline(t),
                        timing_traces: co.A.getTimingTraces(t),
                        logs: c5.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ep.P0)({ text: eb.intl.string(ej.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = eb.intl.string(ej.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fz.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(tT.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(tT.Ay.Icon, {
                            icon: oZ.CopyIcon,
                            tooltip: eb.intl.string(ej.default.TkHqy2),
                            onClick: m,
                        }),
                        (0, a.jsx)(tT.Ay.Icon, { icon: tM.P, tooltip: eb.intl.string(eb.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(tT.Ay.ChannelIcon, { icon: oY.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(tT.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fz.rf,
                children: [
                    (0, a.jsxs)(c7.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": eb.intl.string(ej.default.RvvWIh),
                        className: fz.vR,
                        children: [
                            (0, a.jsx)(c7.V.Item, { id: "logs", children: eb.intl.string(ej.default["+VRYCm"]) }),
                            (0, a.jsx)(c7.V.Item, { id: "worker", children: eb.intl.string(ej.default["50D0FZ"]) }),
                            (0, a.jsx)(c7.V.Item, { id: "agent", children: eb.intl.string(ej.default.UkbTK1) }),
                            l ? (0, a.jsx)(c7.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(fT, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fO, { status: u, fetchState: o, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(dF, { projectId: t })
                            : (0, a.jsx)(fw, { projectId: t, status: u, fetchState: o, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fU = n(365912),
    fB = n(873715);
function fK(e) {
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
let fH = Object.freeze({ x: -1, y: -1 });
function fV(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fK(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fW = n(192888);
function fZ(e, t) {
    return (0, fW.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fV, () => ({ status: "failed" }));
}
var fX = n(108308);
let fY = { x: 25, y: 21 };
function fQ(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fJ(e, t, n, l) {
    let r = fQ(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function f0(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function f1(e) {
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
function f2(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: o, annotations: f } = H(u),
        m = (0, eC.Zv)(u),
        h = (0, eE.useHasAnyModalOpen)(),
        g = (0, c.bG)([lr.default], () => lr.default.getCurrentUser()),
        p = g?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [S, A] = i.useState(null),
        [N, R] = i.useState(!1),
        L = i.useRef(null),
        $ = i.useRef(null),
        q = i.useRef(null),
        [O, z] = i.useState(null),
        [K, V] = i.useState(!1),
        [W, Z] = i.useState(null),
        [X, Y] = i.useState(null),
        Q = i.useRef(!1),
        [J, ee] = i.useState(!1),
        [et, en] = i.useState(null),
        el = o && !m && !h;
    null == W || (el && W.projectId === u) || Z(null);
    let er = W?.projectId ?? null;
    i.useEffect(() => {
        if (null != er) return () => (0, n0.xJ)(er, "design");
    }, [er]);
    let ea = tK(r, el);
    i.useEffect(() => {
        if (!el || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fB.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? f1(t.response) : null;
                    null == n ? w(!0) : (j(n), U(u, { url: n.url, title: n.title, viewport: n.viewport }));
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
        if (tB(ei.current, ea)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            ei.current = ea;
            let t = [];
            for (let e = 0; e < f.length; e += 24) t.push(f.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, fB.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ef.current) return;
                        let l = f1(e.response);
                        null != l && (j(l), U(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fK(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = D(u)).active &&
                                0 !== r.size &&
                                F(u, {
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
    }, [el, ea, v, f, u, r]),
        i.useEffect(() => {
            if (!el)
                return () => {
                    (A(null), Z(null), en(null), j(null));
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
                    fZ(n, t).then((t) => {
                        if (((ed.current = !1), ef.current)) {
                            if ("picked" !== t.status || f6(t.target, ev.current.rect, ev.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? A(null)
                                    : "unsupported" === t.status && V(!0);
                            else {
                                let e = E(t.target);
                                (z((t) => (f8(t, e) ? t : e)),
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
        eh = i.useCallback(() => {
            if (null == W) return;
            let e = !Q.current;
            (Y({ at: W.at, label: W.label, draft: W.draft, instant: e }), ee(e), Z(null));
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
            if (null == X) return;
            let e = setTimeout(() => Y(null), f7);
            return () => clearTimeout(e);
        }, [X]));
    let eg = null == v || null == ea || v.viewport.width < 1 ? 1 : ea.width / v.viewport.width,
        ep = null != v || k,
        ex = i.useMemo(() => v?.elements ?? [], [v]),
        ev = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        ev.current = { rect: ea, scale: eg };
    }, [ea, eg]);
    let ey = i.useCallback(
            (e, t, n) => {
                null != u &&
                    ((0, n0.xJ)(u, "design"),
                    en(null),
                    (Q.current = !1),
                    Z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: E(e) }));
            },
            [u],
        ),
        ek = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / eg, y: (e.clientY - t.top) / eg }), [eg]),
        ew = i.useCallback(() => {
            let e = q.current;
            if (null == e) return;
            let t = L.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = $.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ew);
    let eS = i.useCallback(
            (e) => {
                if (null == ea || null != et) return;
                if (((q.current = { x: e.clientX, y: e.clientY }), ew(), R(!0), null != W)) {
                    (Math.abs(e.clientX - W.at.x) > f5 || Math.abs(e.clientY - W.at.y) > f5) && (Q.current = !0);
                    return;
                }
                if (!ep) return void A(null);
                let t = ek(e, ea);
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
                        })(ex, t.x, t.y),
                        n = null != e && f6(e, ea, eg) ? null : e;
                    if (null != n) {
                        let e = E(n);
                        z((t) => (f8(t, e) ? t : e));
                    }
                    A((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ec.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ec.current = n), (eu.current = n), em());
            },
            [ea, eg, ep, ek, K, ex, W, et, ew, em],
        ),
        eA = null == et ? null : f.find((e) => e.id === et.id),
        eN = el && (N || W?.target.marker != null || eA?.target.marker != null);
    i.useEffect(() => {
        if (eN)
            return () => {
                let e = r();
                null != e && fZ(e, fH);
            };
    }, [eN, r]);
    let eI = i.useCallback(() => {
        (R(!1), A(null), (ec.current = null), (eu.current = null));
    }, []);
    i.useEffect(() => {
        if (!el || !N || !ep || K || null != W || null != et) return;
        let e = q.current,
            { rect: t, scale: n } = ev.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ec.current = l), (eu.current = l), em());
    }, [el, N, ep, K, W, et, em]);
    let eM = i.useCallback(
            (e) => {
                if (null != W || null != et) {
                    (eh(), en(null));
                    return;
                }
                if (null == S || null == ea) return;
                let t = ek(e, ea);
                ey(
                    S,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? C
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(S, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [S, ea, ek, W, et, ey, eh],
        ),
        e_ = i.useCallback(() => {
            null != u && (A(null), null != es(u) ? eo(u) : G(u));
        }, [u]),
        eT = i.useCallback(() => {
            null != u &&
                (null != W
                    ? eh()
                    : et?.confirmingRemove === !0
                      ? en({ ...et, confirmingRemove: !1 })
                      : null != et
                        ? en(null)
                        : e_());
        }, [u, W, et, eh, e_]),
        eP = i.useRef(eT),
        eR = i.useRef(u),
        eL = i.useRef(e_);
    i.useLayoutEffect(() => {
        ((eP.current = eT), (eR.current = u), (eL.current = e_));
    });
    let e$ = i.useRef(null);
    i.useEffect(() => {
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
            "Escape" === e.key && (e.preventDefault(), eP.current());
        }
        function t(e) {
            let t = e.target;
            !(0, tR.vq)(t) ||
                e$.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fU.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eR.current || null == es(eR.current)) && eL.current());
        }
    }, [el, s]);
    let eq = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), eT());
                    return;
                }
                if (null != W || null != et || 0 === ex.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == S ? -1 : ex.findIndex((e) => e.ref === S.ref);
                    A(ex[(n + (t ? 1 : -1) + ex.length) % ex.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != S &&
                    (e.preventDefault(),
                    ey(S, C, { x: (ea?.left ?? 0) + S.rect.x * eg, y: (ea?.top ?? 0) + S.rect.y * eg }));
            },
            [u, W, et, ex, S, ey, eT, ea, eg],
        ),
        eD = i.useCallback(
            (e) => {
                null == u ||
                    null == W ||
                    ((I(W.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, tm.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = E(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${T}${r}${P}${_(e)}
${t.trim()}`;
                            })(W.target, W.draft),
                            e,
                        ),
                        eh(),
                        A(null)));
            },
            [u, W, eh],
        ),
        eF = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, t$.vX)(u, e)), [u]),
        eO = i.useCallback(() => {
            if (null != u && null != et && null != p && I(et.draft)) {
                var e, t;
                let n, l;
                ((e = et.id),
                    (t = et.draft.trim()),
                    null != (l = (n = D(u)).annotations.find((t) => t.id === e)) &&
                        B(l, p) &&
                        F(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    en({ ...et, editing: !1 }));
            }
        }, [u, et, p]),
        ez = i.useCallback(() => {
            if (null != u && null != et && null != p) {
                var e;
                let t, n;
                ((e = et.id),
                    null != (n = (t = D(u)).annotations.find((t) => t.id === e)) &&
                        B(n, p) &&
                        F(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    en(null));
            }
        }, [u, et, p]),
        eG = o
            ? b
                ? eb.intl.string(ej.default["Eb/YV9"])
                : k
                  ? eb.intl.string(ej.default.FD30bh)
                  : eb.intl.formatToPlainString(ej.default.dTSqLF, { count: f.length })
            : "",
        eU = el && null != ea,
        eB = N && null == et,
        eK = W?.target ?? eA?.target ?? null,
        eH = W ?? X,
        eV = W ?? (X?.instant === !0 ? null : X),
        eW =
            null != eA && null != ea
                ? (function (e, t) {
                      let { left: n, top: l } = f0(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fJ(eA.target, eA.anchor, ea, eg), ea)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eA?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eA;
            fZ(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eA, r]),
        (0, tP.createPortal)(
            (0, a.jsxs)("div", {
                ref: e$,
                className: fX.Li,
                children: [
                    (0, a.jsx)(n$.A, {
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
                                      className: fX.MT,
                                      style: { left: ea.left, top: ea.top, width: ea.width, height: ea.height },
                                      "data-plain-cursor": eB ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": eb.intl.string(ej.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: eS,
                                      onMouseLeave: eI,
                                      onClick: eM,
                                      onKeyDown: eq,
                                  }),
                                  null != S && null == S.marker && null == W && null == et
                                      ? (0, a.jsx)(f9, { box: fQ(S, ea, eg) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: L,
                                      className: fX.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fX.xz,
                                          "data-shown": null != S && null == et && null == W ? "" : void 0,
                                          "data-instant": J ? "" : void 0,
                                          children: (0, a.jsxs)(x.E, {
                                              variant: "text-xs/medium",
                                              className: fX.Ux,
                                              children: [
                                                  null == O
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fX.Tl, children: O.kind }),
                                                  null == O || "" === O.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fX.kh,
                                                            children: [" ", O.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: $,
                                      className: fX.Y,
                                      children: eB ? (0, a.jsx)("div", { className: fX.u }) : null,
                                  }),
                                  null == eV
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fX.aZ,
                                            style: {
                                                transform: `translate3d(${eV.at.x + 20}px, ${eV.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fX.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == W ? "" : void 0,
                                                children: (0, a.jsxs)(x.E, {
                                                    variant: "text-xs/medium",
                                                    className: fX.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fX.Tl,
                                                            children: eV.label.kind,
                                                        }),
                                                        "" === eV.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fX.kh,
                                                                  children: [" ", eV.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eK && null == eK.marker
                                      ? (0, a.jsx)("div", {
                                            className: fX.D0,
                                            style: fQ(eK, ea, eg),
                                            "aria-hidden": !0,
                                        })
                                      : null,
                                  f.map((e, t) => {
                                      let n = fJ(e.target, e.anchor, ea, eg),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fX.xL,
                                              style: { ...f0(n, ea), width: 24, height: 24 },
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
                                              children: (0, a.jsx)(f3, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eH || null == u
                                      ? null
                                      : (0, a.jsx)(tG, {
                                            projectId: u,
                                            at: { x: eH.at.x + 20, y: eH.at.y + 20 },
                                            bounds: ea,
                                            kind: eH.label.kind,
                                            value: eH.draft,
                                            canSubmit: null != W && I(eH.draft),
                                            onChange: (e) => {
                                                null != W && Z({ ...W, draft: e });
                                            },
                                            onSubmit: eD,
                                            onDismiss: eh,
                                            onUploadFile: eF,
                                            closing: null == W,
                                        }),
                                  null != eA && null != et && null != eW
                                      ? (0, a.jsxs)(f4, {
                                            point: eW,
                                            frame: ea,
                                            authorId: eA.authorId,
                                            title: M(eA.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                et.confirmingRemove ? en({ ...et, confirmingRemove: !1 }) : en(null);
                                            },
                                            onMouseLeave: () => {
                                                et.editing || et.confirmingRemove || en(null);
                                            },
                                            children: [
                                                et.editing
                                                    ? (0, a.jsx)(n8.f, {
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
                                                                  (e.preventDefault(), eO());
                                                          },
                                                      })
                                                    : (0, a.jsx)(x.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fX.aC,
                                                          children: eA.comment,
                                                      }),
                                                B(eA, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fX.eB,
                                                          children: et.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(x.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fX.nv,
                                                                            children: eb.intl.string(ej.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: eb.intl.string(ej.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                en({ ...et, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(d.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: eb.intl.string(ej.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: ez,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(d.$, {
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
                                                                            ? (0, a.jsx)(d.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !I(et.draft),
                                                                                  text: eb.intl.string(
                                                                                      ej.default.iicRP9,
                                                                                  ),
                                                                                  onClick: eO,
                                                                              })
                                                                            : (0, a.jsx)(d.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: eb.intl.string(
                                                                                      ej.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      en({
                                                                                          ...et,
                                                                                          editing: !0,
                                                                                          draft: eA.comment,
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
function f3(e) {
    let { authorId: t } = e,
        n = (0, c.bG)([lr.default], () => lr.default.getUser(t), [t]);
    return (0, a.jsx)(ie.eu, {
        src: null == n ? null : il.Ay.getUserAvatarURL(n),
        size: it._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function f4(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        { point: o, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        v = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fY);
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
            originY: A,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(o.x - b.x, t), n)),
        { left: s, top: (u = Math.min(Math.max(o.y - b.y, l), r)), originX: o.x - s, originY: o.y - u }),
        N = { left: k, top: w, "--custom-conjure-card-origin-x": `${S}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, a.jsxs)("div", {
        ref: v,
        className: fX.Nr,
        style: N,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fX.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: fX.ip, children: (0, a.jsx)(f3, { authorId: d }) }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fX.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fX.zI, children: p }),
        ],
    });
}
let f7 = 300,
    f5 = 2;
function f8(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function f6(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function f9(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fX.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var me = n(659723),
    mt = n(697744),
    mn = n(130324);
function ml(e) {
    let t = (0, mt.c)(),
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
    let r = (0, nC.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mr(e) {
    let { className: t } = e,
        { Component: n, events: l } = ml(3e4);
    return (0, a.jsxs)("div", {
        className: o()(t, mn.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(x.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: mn.ol,
                children: eb.intl.string(ej.default.AyiQEp),
            }),
        ],
    });
}
var ma = n(251363),
    mi = n(944142),
    ms = n(532247),
    mu = n(501628);
function mo(e) {
    let { progress: t } = e,
        { Component: n } = ml(1500),
        l = eA.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(x.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mu.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mu.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(x.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function mc(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, c.bG)([mi.A], () => (s ? mi.A.getLiveReload(t) : null), [s, t]),
        o = (0, tu.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        f = u?.background === !0,
        m = (function (e, t, n) {
            let l = (0, ms.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [o, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || o ? null : (0, ms.QP)(e, s)));
            let f = (0, c.bG)(
                    [eQ.A],
                    () => {
                        let e = eQ.A.getFrame(n);
                        return (0, e3.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, ma.ow)(null, n) && e();
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
        })(d, f, o),
        h = f ? null : (0, ms.h_)(d, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n$.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: mu.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mo, { progress: h }),
                  })
                : null,
        ],
    });
}
let md = 0;
var mf = n(782134),
    mm = n(357858),
    mh = n(343030),
    mg = n(317608),
    mp = n(35367),
    mx = n(228946);
let mv = { width: 1 / 0, height: 1 / 0 };
function mj(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mv;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var mb = n(702083);
function my(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, c.cf)([to.A], () => ({
            mobile: to.A.isBuilderPreviewMobile(),
            landscape: to.A.isBuilderPreviewLandscape(),
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
        f = n ? mj(l, d ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: o()(mb.dw, { [mb.PQ]: null != f }),
        children: (0, a.jsx)("div", { className: o()(mb.R9, { [mb.Vg]: null != f }), style: f ?? void 0, children: t }),
    });
}
var mk = n(347927);
function mw(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: o()(mk.Bf, l && mk.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: mk.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(x.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var mS = n(957272);
function mA(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, mp.A)({ applicationId: t, surface: n, launch: l });
    if (((0, mx.A)(t, n), s === mp.n.Launched)) {
        let e = (0, a.jsx)(mg.A, { frameId: i.id, level: mh.A.WithinAppContent, className: mS.Z7, overlay: r });
        return (0, tc.Q5)(n) ? (0, a.jsx)(my, { children: e }) : e;
    }
    return (0, a.jsx)(mN, { state: s });
}
function mN(e) {
    let { state: t } = e;
    switch (t) {
        case mp.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: mS.qs,
                children: (0, a.jsx)(mw, {
                    title: eb.intl.string(ej.default["9kpdo7"]),
                    body: eb.intl.string(ej.default.iIA8Nj),
                }),
            });
        case mp.n.NoApplication:
            return (0, a.jsx)(mr, { className: mS.qs });
        case mp.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: mS.qs,
                children: (0, a.jsx)(mw, {
                    title: eb.intl.string(ej.default["7k4GyN"]),
                    body: eb.intl.string(ej.default.zdIy3R),
                }),
            });
        case mp.n.Error:
            return (0, a.jsxs)("div", {
                className: mS.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: eb.intl.string(ej.default.lTPbnG),
                    }),
                    (0, a.jsx)(x.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: mS.tj,
                        children: eb.intl.string(ej.default.e6GiAZ),
                    }),
                ],
            });
        case mp.n.AwaitingLaunch:
        case mp.n.Loading:
            return (0, a.jsx)("div", { className: mS.qs, children: (0, a.jsx)(v.y, {}) });
    }
}
var mC = n(308528),
    mI = n(334738),
    mE = n(688606),
    mM = n(365971),
    m_ = n(703462);
function mT(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: m_.f,
        children: [
            (0, a.jsx)(iB.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mP() {
    return (0, a.jsx)("div", { className: m_.f, children: (0, a.jsx)(v.y, {}) });
}
function mR(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        o = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, c.bG)([ln.A], () => (null != o ? ln.A.getChannel(o) : null), [o]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && mC.A.preload(e2.ME, t);
        }, [t]),
        (n = (0, c.bG)([oG.A], () => oG.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, mM.Xg)();
            return (
                (0, mI.yl)(t, e),
                () => {
                    (0, mI.dm)(t, e);
                }
            );
        }, [t, n]));
    let [f, m] = i.useState(null),
        h = f === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, e$.CN)(l).then(
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
        ? (0, a.jsx)(mT, { message: eb.intl.string(ej.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(mP, {})
          : (0, a.jsx)("div", {
                className: m_.g,
                children: (0, a.jsx)(mE.A, { channel: d, guild: null, chatInputType: ug.oU.SIDEBAR }, d.id),
            });
}
var mL = n(765671),
    m$ = n(596977),
    mq = n(921853),
    mD = n(582063);
function mF(e) {
    let { projectId: t, captures: n, selected: l } = e,
        r = [...n, null],
        i = null != l ? n.indexOf(l) : n.length;
    function s(e) {
        let n = r[(i + e + r.length) % r.length];
        (0, e$.vX)(t, n?.id ?? null);
    }
    let u = eb.intl.string(ej.default.Gl3XtE),
        o = eb.intl.string(ej.default["3FvcrY"]);
    return (0, a.jsxs)("div", {
        className: mD.aF,
        children: [
            (0, a.jsx)(tq.m, {
                text: u,
                position: "top",
                children: (0, a.jsx)(tV.K, {
                    icon: mq.n,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": u,
                    onClick: () => s(-1),
                }),
            }),
            (0, a.jsx)("div", {
                className: mD.Dn,
                "aria-live": "polite",
                children:
                    null != l
                        ? (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-strong",
                              lineClamp: 1,
                              children: eb.intl.formatToPlainString(ej.default["140n5k"], {
                                  name: l.name,
                                  index: i + 1,
                                  count: n.length,
                              }),
                          })
                        : (0, a.jsx)(x.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children: eb.intl.string(ej.default.wVJL0P),
                          }),
            }),
            (0, a.jsx)(tq.m, {
                text: o,
                position: "top",
                children: (0, a.jsx)(tV.K, {
                    icon: nq._,
                    size: "sm",
                    variant: "overlay-secondary",
                    "aria-label": o,
                    onClick: () => s(1),
                }),
            }),
        ],
    });
}
var mO = n(625903),
    mz = n(666476);
let mG = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mU() {
    (0, ep.P0)({ text: eb.intl.string(ej.default.jj3abP), variant: "critical" });
}
function mB(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = eb.intl.string(ej.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(e7.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(mK, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: mD.m2,
                        children: (0, a.jsx)(tq.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tV.K, {
                                "aria-label": r,
                                icon: mO.SettingsIcon,
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
                accept: mG.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mG.includes(n.type)
                                ? n.size > mz.aI
                                    ? (0, ep.P0)({ text: eb.intl.string(ej.default.T8Spiu), variant: "critical" })
                                    : (0, ax.M$)(t, n).catch(mU)
                                : (0, ep.P0)({ text: eb.intl.string(ej.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mK(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, c.bG)([ap.A], () => ap.A.getBackground(t)),
        i = r?.blur !== !1,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(e5.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": eb.intl.string(ej.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(e8.rX, {
                children: [
                    (0, a.jsx)(e8.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: eb.intl.string(ej.default.uQpDky),
                        icon: lY.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(e8.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: eb.intl.string(ej.default.AiAz8J),
                        icon: fi.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, ax.Og)(t).catch(mU));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(e8.rX, {
                children: (0, a.jsx)(e8.fP, {
                    id: "conjure-overlay-background-blur",
                    label: eb.intl.string(ej.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, ax.Y1)(t, !i) || mU();
                    },
                }),
            }),
        ],
    });
}
function mH(e) {
    let { applicationId: t, projectId: n, size: l, frameOverlay: r } = e,
        { ref: s, width: u, height: o } = (0, mL.Ay)(),
        { captures: c, selected: d } = ag(n),
        f = (function (e, t, n) {
            let { width: l, height: r } = e;
            if (null == l || null == r || l <= 0 || r <= 0) return { top: 24, end: 24, scale: 1 };
            if (null == t || t.width <= 0 || t.height <= 0)
                return { top: 24, end: 24, scale: ez({ width: l - 48, height: r - 48 }, n) };
            let a = t.width / t.height,
                i = Math.min(l, r * a),
                s = i / 1920,
                u = ez({ width: 1872, height: 1920 / a - 48 }, n);
            return { top: (r - i / a) / 2 + 24 * s, end: (l - i) / 2 + 24 * s, scale: u * s };
        })({ width: u, height: o }, d, l);
    return (
        i.useEffect(() => (0, m$.L0)(), []),
        (0, a.jsxs)("div", {
            className: mD.JH,
            children: [
                (0, a.jsx)(aj, { projectId: n, gameCaptures: !0 }),
                (0, a.jsx)("div", {
                    ref: s,
                    className: mD.dw,
                    children: (0, a.jsx)("div", {
                        className: mD.HL,
                        style: {
                            "--custom-conjure-overlay-widget-width": `${l.width}px`,
                            "--custom-conjure-overlay-widget-height": `${l.height}px`,
                            "--custom-conjure-overlay-widget-top": `${f.top}px`,
                            "--custom-conjure-overlay-widget-end": `${f.end}px`,
                            "--custom-conjure-overlay-widget-scale": String(f.scale),
                        },
                        children: (0, a.jsx)(mA, { applicationId: t, surface: e3.ZN, frameOverlay: r }),
                    }),
                }),
                null != n ? (0, a.jsx)(mB, { projectId: n }) : null,
                null != n && c.length > 0 ? (0, a.jsx)(mF, { projectId: n, captures: c, selected: d }) : null,
            ],
        })
    );
}
function mV(e) {
    let { onAddBot: t, loading: n = !1 } = e;
    return (0, a.jsx)(mw, {
        title: eb.intl.string(ej.default.xlEjZ8),
        body: eb.intl.string(ej.default["4ByPbd"]),
        children: (0, a.jsx)(d.$, {
            size: "sm",
            variant: "primary",
            text: eb.intl.string(ej.default.RGeB11),
            onClick: t,
            loading: n,
        }),
    });
}
var mW = n(409478),
    mZ = n(652227);
function mX(e) {
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
            overlayWidgetSize: f = eF,
            projectId: m,
            renderFrameOverlay: h,
            paused: g = !1,
            onResume: p,
        } = e,
        x = (0, c.bG)([ra.A], () => null != m && null != ra.A.getSetupStartedAt(m), [m]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: mZ.qs, children: (0, a.jsx)(v.y, {}) })
        : s?.type === "bot_install"
          ? (0, a.jsx)("div", {
                className: mZ.qs,
                children: (0, a.jsx)(mV, { onAddBot: s.onAddBot, loading: s.loading }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      "data-conjure-entrance": !0,
                      className: mZ.RG,
                      children: [
                          (0, eB.yf)(u, o)
                              ? g
                                  ? (0, a.jsx)(mY, { projectId: m, onResume: p })
                                  : (0, a.jsx)(mA, { applicationId: t, surface: l, launch: r, frameOverlay: h?.(l) })
                              : null,
                          "widget" === o && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mZ.qs,
                                        children: (0, a.jsx)(mw, {
                                            wide: !0,
                                            title: eb.intl.string(ej.default["08U+YO"]),
                                            body: eb.intl.string(ej.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(mW.A, { applicationId: d })
                              : null,
                          "overlay" === o && u.modes.includes("overlay")
                              ? (0, a.jsx)(mH, { applicationId: t, projectId: m, size: f, frameOverlay: h?.(e3.ZN) })
                              : null,
                          "bot" === o && null != n && null != m
                              ? (0, a.jsx)(mR, { projectId: m, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: mZ.qs, children: (0, a.jsx)(v.y, {}) })
              : (0, a.jsx)(mr, { className: mZ.qs });
}
function mY(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, mm.Pu)(t),
        (0, a.jsx)("div", {
            className: mZ.qs,
            children: (0, a.jsx)(mw, {
                wide: !0,
                title: eb.intl.string(ej.default.MMWEH2),
                body: eb.intl.string(ej.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              icon: mf.PlayIcon,
                              text: eb.intl.string(ej.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var mQ = n(750506),
    mJ = n(867193),
    m0 = n(539197),
    m1 = n(977020);
function m2(e) {
    let { projectId: t } = e,
        n = (0, m0.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, m0.Ie)(e);
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
    return (0, a.jsxs)("div", {
        className: m1.$Q,
        style: { left: r, top: s, width: u, height: c, "--custom-conjure-cursor-scale": d },
        "aria-hidden": !0,
        [m0.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: o()(m1.hN, m1.vW), style: f(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: o()(m1.hN, m1.A7), style: f(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: o()(m1.UE, { [m1.SP]: n.shown, [m1.Vq]: n.pressed, [m1.GP]: n.dipping }),
                style: f(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var m3 = n(417760);
function m4(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, c.bG)([rs.A], () => null != e && rs.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, tm.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, eC.CU)(n),
        f = "controlling" === t,
        m = eb.intl.string(f ? (u ? ej.default["VJW/5P"] : ej.default["+hD2Iz"]) : ej.default["h+i1r9"]),
        h =
            null != r
                ? (0, a.jsx)(d.$, {
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
              className: o()(m3.M0, m3.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  f
                      ? (0, a.jsx)(cT.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(sc.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(x.E, { variant: "text-sm/semibold", color: "none", className: m3.ID, children: m }),
                  f ? (0, a.jsx)(n$.A, { children: eb.intl.string(ej.default.fg1sor) }) : null,
                  f ? (0, a.jsx)("div", { className: m3.lC, children: h }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: m3.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: m3.sp,
                      children: [
                          (0, a.jsx)(sc.SparklesIcon, { size: "sm", color: "currentColor" }),
                          f ? (0, a.jsx)(cT.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: m3.f4,
                              children: [
                                  (0, a.jsx)(x.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: m3.w9,
                                      children: m,
                                  }),
                                  f
                                      ? (0, a.jsx)(x.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: m3.Rb,
                                            children: eb.intl.string(ej.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  f ? (0, a.jsx)("div", { className: m3.lC, children: h }) : null,
              ],
          });
}
function m7(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        u = (0, eC.Zv)(null != n && n === l ? t : null),
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
            let e = tU(r());
            m((t) => (tB(t, e) ? t : e));
            let t = null == h ? null : tU(h);
            (x((e) => (tB(e, t) ? e : t)), null != h && (0, mJ.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mJ.C)(0));
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
            let [e] = i.useContext(mQ.uY),
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
                      className: m3.D,
                      "data-phase": o,
                      children: (0, a.jsx)("div", {
                          className: m3.QF,
                          children: (0, a.jsx)(m4, { phase: o, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, tP.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(n$.A, {
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
                ? (0, tP.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: m3.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: m3.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(m2, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var m5 = n(399503),
    m8 = n(853555),
    m6 = n(271982),
    m9 = n(327152),
    he = n(187645);
let ht = { width: 1280, height: 720 },
    hn = new Map(),
    hl = !1;
function hr() {
    let e = new Map();
    for (let t of new Set([...rs.A.getActivityOrderedProjectIds(), ...(0, eC.T7)()])) {
        if (!(rs.A.isThinking(t) || (0, eC.wK)(t)) || eq.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = ti.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = [(0, tc.Rc)(t), (0, tc.Th)(t)].find(e3.x1);
            return n?.id ?? null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...hn]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            hn.delete(t),
            n.unregisterLookup(),
            m6.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove(),
            (0, m9.Pn)(n.frameId, null));
    }
    for (let [t, n] of e)
        hn.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = he.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    ha(n, e, t),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (hn.set(e, l),
                    (l.unregisterLookup = (0, m8.Ng)(e, () => (0, ma.n5)(n, t))),
                    m6.A.registerFrameTarget(t, n, mh.A.Backstage, void 0));
            })(t, n);
    for (let [e, t] of hn) ha(t.element, e, t.frameId);
}
function ha(e, t, n) {
    if (eQ.A.getFrame(n)?.surface.type === eK.U.OVERLAY) {
        let l = eG(ti.Ay.getProject(t));
        (e.classList.remove(he.L),
            (e.style.width = `${l.width}px`),
            (e.style.height = `${l.height}px`),
            (0, m9.Pn)(n, l));
        return;
    }
    let l = to.A.isBuilderPreviewMobile();
    e.classList.toggle(he.L, !l);
    let r = l ? mj(to.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != r ? `${r.width}px` : ""),
        (e.style.height = null != r ? `${r.height}px` : ""),
        (0, m9.Pn)(n, r ?? ht));
}
var hi = n(873727),
    hs = n(147248),
    hu = n(418842),
    ho = n(363195);
let hc = 0;
var hd = n(818023);
let hf = null;
var hm = n(949621);
function hh(e) {
    let { projectId: t } = e,
        n = (0, c.bG)(
            [ti.Ay],
            () => {
                let e = ti.Ay.getProject(t);
                return null == e || null != e.install_scope_setup ? null : e.install_scope;
            },
            [t],
        );
    if (null == n) return null;
    let l = "guild" === n,
        r = eb.intl.string(l ? ej.default.cAExE8 : ej.default["15Y/Yz"]);
    return (0, a.jsx)(nL.u, {
        title: r,
        body: eb.intl.string(l ? ej.default.r8rVq1 : ej.default.IZMyda),
        position: "bottom",
        children: (0, a.jsx)("span", { className: hm.I, tabIndex: 0, children: (0, a.jsx)(fS.v, { text: r }) }),
    });
}
var hg = n(541940);
function hp(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: d,
            content: f,
            sidebar: m,
            showsFrame: h,
            paused: g,
        } = e,
        [p, x] = i.useState(null),
        v = (0, tu.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, c.bG)([ho.A], () => (0, hi.x4)(ho.A.theme)),
            l = (0, c.bG)([hs.A], () => hs.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: o,
            } = (0, c.cf)([a6.Ay], () => ({
                reducedMotion: a6.Ay.useReducedMotion,
                fontScale: (0, hi.U0)(),
                highContrast: a6.Ay.isHighContrastModeEnabled,
                forcedColors: a6.Ay.useForcedColors,
                underlineLinks: a6.Ay.alwaysShowLinkDecorations,
            })),
            d = eA.hH.useSetting(),
            f = (0, hu.C)(),
            m = (0, c.bG)(
                [eQ.A, to.A],
                () =>
                    to.A.isBuilderPreviewMobile() &&
                    eQ.A.getFrame(t)?.applicationId === to.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            g = i.useRef(!1),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, ma.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++hc,
                    baseTheme: n,
                    customTheme: (0, hi.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: o,
                    formFactor: m,
                };
                (0, fW.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, m, t, s, d, e, r, f, o]),
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
                let n = (0, ma.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, ma.n5)(e, t) && ((p.current = null), j());
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
    })(p, j),
        i.useEffect(() => {
            if (null != t) return (0, m8.Ng)(t, () => (0, ma.n5)(p, j));
        }, [t, p, j]));
    let b = i.useCallback(() => (0, ma.ow)(p, j), [p, j]),
        y = i.useCallback(() => (h ? (0, ma.ow)(p, j) : p), [h, p, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: o()(hg.Mh, d),
                children: [
                    u,
                    g
                        ? null
                        : (0, a.jsx)(m7, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: hg.fm, children: f }),
                ],
            }),
            m,
            g
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(f2, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(ny, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function hx(e) {
    let t,
        {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            frameLaunchParams: d,
            header: f,
            chatOpen: m,
            onCloseChat: h,
            chatHeaderAction: g,
            onRestoreVersion: p,
            onImportProject: x,
            debugOpen: v = !1,
            onCloseDebug: j,
            restoreState: b,
            previewReady: y,
            previewGate: k,
            availability: w,
            activeMode: S,
            widgetApplicationId: A,
            overlayWidgetSize: N,
            previewPaused: C = !1,
            onResumePreview: I,
        } = e;
    (0, m5.k)(n, A);
    let E = u.type === eK.U.MAIN || (0, tc.Q5)(u);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, c.cf)([to.A], () => ({
            mobile: to.A.isBuilderPreviewMobile(),
            landscape: to.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hd.aX.LANDSCAPE : hd.aX.PORTRAIT), (hf = e));
                else {
                    if (hf !== e) return;
                    ((l = hd.aX.UNHANDLED), (hf = null));
                }
                oC.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? r : null);
    let M = i.useRef(null),
        [_, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == n) return;
        (0, nw.T)(n);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, nw.T)(n);
        }, 3e3);
        return () => clearInterval(e);
    }, [n]),
        (t = i.useRef(0)),
        i.useLayoutEffect(() => {
            E && ((t.current = ++md), (0, e$.HV)(r));
        }, [r, E]),
        i.useEffect(() => {
            if (!E) return;
            let e = t.current;
            return () => {
                e === md && (0, e$.HV)(null);
            };
        }, [r, E]),
        i.useEffect(() => {
            null != n &&
                ((0, tm.ensureConnection)(n),
                hl ||
                    ((hl = !0),
                    rs.A.addChangeListener(hr),
                    ti.Ay.addChangeListener(hr),
                    eQ.A.addChangeListener(hr),
                    to.A.addChangeListener(hr),
                    eq.A.addChangeListener(hr),
                    (0, eC.W3)(hr),
                    hr()));
        }, [n]),
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
        R = m || E;
    return (0, a.jsx)("div", {
        ref: M,
        className: hg.LB,
        children: (0, a.jsx)(hp, {
            projectId: n,
            designFeedbackToggleRef: l,
            applicationId: r,
            previewApplicationId: s,
            surface: u,
            header: f,
            showsFrame: (0, eB.yf)(w, S),
            paused: C,
            mainClassName: null == f ? void 0 : o()(hg.ez, { [hg.zt]: m }),
            content: (0, a.jsx)(mX, {
                applicationId: r,
                previewApplicationId: s,
                surface: u,
                frameLaunchParams: d,
                previewReady: y,
                previewGate: k,
                availability: w,
                activeMode: S,
                widgetApplicationId: A,
                overlayWidgetSize: N,
                projectId: n,
                paused: C,
                onResume: I,
                renderFrameOverlay: (e) =>
                    (0, a.jsx)(mc, { projectId: n, applicationId: r, previewApplicationId: s, surface: e }),
            }),
            sidebar:
                null != n && R
                    ? (0, a.jsx)("div", {
                          className: m ? hg.v7 : hg.LL,
                          children: (0, a.jsx)(t_.A, {
                              sidebarType: t_.X.CallChatSidebar,
                              maxWidth: P,
                              capturePointer: !0,
                              children: (0, a.jsx)("div", {
                                  className: hg.cO,
                                  children: v
                                      ? (0, a.jsx)(fG, { projectId: n, onClose: j ?? (() => {}) }, n)
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(me.Ay, { projectId: n }),
                                                (0, a.jsxs)(tT.Ay, {
                                                    "aria-label": eb.intl.string(eb.t["/VQax8"]),
                                                    toolbar: (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                            g,
                                                            null == h
                                                                ? null
                                                                : (0, a.jsx)(tT.Ay.Icon, {
                                                                      icon: tM.P,
                                                                      tooltip: eb.intl.string(ej.default.JD6Oit),
                                                                      onClick: h,
                                                                  }),
                                                        ],
                                                    }),
                                                    children: [
                                                        (0, a.jsx)(tT.Ay.Title, {
                                                            children: eb.intl.string(eb.t["/VQax8"]),
                                                        }),
                                                        (0, a.jsx)(hh, { projectId: n }),
                                                    ],
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: hg.cb,
                                                    children: (0, a.jsx)(
                                                        c4,
                                                        {
                                                            projectId: n,
                                                            restoreState: b,
                                                            onRestoreVersion: p,
                                                            onImportProject: x,
                                                            escapeScopeRef: M,
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
    });
}
var hv = n(705427),
    hj = n(606128),
    hb = n(323140);
function hy(e) {
    let t,
        l,
        r,
        { project: s, projectsLoaded: u, onBack: v, guildId: j, onBackToServer: b } = e,
        y = i.useContext(eP.A),
        [k] = i.useState(() => (null != y ? eL.A.getProjectView(y) : null)),
        [N, C] = i.useState(k?.chatOpen ?? !0),
        [I, E] = i.useState(k?.debugOpen ?? !1);
    i.useEffect(() => {
        null != y && (0, eR.g7)(y, { chatOpen: N, debugOpen: I });
    }, [y, N, I]);
    let M = i.useCallback(
            (e) => {
                null != y && (0, eR.g7)(y, { previewSelection: e });
            },
            [y],
        ),
        _ = eN(),
        T = eI.useConfig({ location: "ConjureSelectedProjectScreen" }).enabled,
        P = i.useCallback(() => C(!0), []),
        R = i.useCallback(() => {
            (E(!1), C(!0));
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
        })(s, R),
        q = s?.id ?? null,
        {
            integrationStatus: D,
            isPreviewApplicationLoading: F,
            checkingIntegration: z,
            previewReady: U,
            hasFrame: B,
        } = (function (e) {
            let [t, n] = i.useState(null),
                l = e?.id ?? null,
                r = i.useRef(l),
                a = i.useRef(null);
            r.current = l;
            let s = (0, c.bG)(
                    [ti.Ay, ta.A],
                    () => (null == l ? null : (ti.Ay.getIntegrationStatus(l) ?? ta.A.getIntegrationStatus(l))),
                    [l],
                ),
                u = e?.preview_application_id ?? null,
                { isLoading: o } = (0, tl.YY)(u ?? void 0),
                d = null != l && t !== l,
                f = s?.preview_ready === !0,
                m = s?.has_activity === !0,
                h = s?.bot_permissions_changed === !0,
                g = (0, eB.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: s?.integration_installed ?? null,
                    botPermissionsChanged: h,
                });
            i.useEffect(() => {
                g && !d && null != u && e(u);
                async function e(e) {
                    try {
                        await (0, tl.TA)(e);
                    } catch {}
                }
            }, [h, d, g, u]);
            let p = i.useCallback(async () => {
                if (null == l || r.current !== l) return;
                a.current?.abort();
                let e = new AbortController();
                ((a.current = e), n(null));
                try {
                    await ((0, tr.CG)(l)?.catch(() => (0, tr.U1)(l, e.signal)) ?? (0, tr.U1)(l, e.signal));
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
                    previewReady: f,
                    hasFrame: m,
                }
            );
        })(s),
        K =
            (0, c.bG)([th.A], () => (null == q ? void 0 : th.A.getPublishStatus(q)?.previewAppChannels), [q]) ??
            D?.preview_app_channels,
        {
            availability: V,
            activeMode: W,
            setMode: Z,
            frameSurface: X,
            frameSurfaceOptions: Y,
            setFrameSurface: Q,
            appChannel: J,
            setAppChannel: ee,
            frameLaunchParams: et,
            widgetApplicationId: en,
        } = (0, eZ.p)({
            applicationId: s?.preview_application_id ?? null,
            previewApplicationId: s?.preview_application_id ?? null,
            declaredActivity: B,
            previewSupportedSurfaces: s?.preview_supported_surfaces,
            installScope: s?.install_scope ?? null,
            ownerAuthorizationRevoked: D?.owner_authorization_revoked === !0,
            supportsOverlay: s?.preview_supported_surfaces?.includes(eD.q7.OVERLAY) === !0,
            previewAppChannels: K,
            initialSelection: k?.previewSelection,
            onSelectionChange: M,
        }),
        el = eG(s);
    ((0, eU.x)(q, (e) => {
        V.modes.includes(e) && Z(e);
    }),
        eS(q, () => {
            (C(!0), E(!0));
        }));
    let er = V.modes.includes("frame"),
        eu = (0, c.bG)([eq.A], () => eq.A.isPaused(q), [q]),
        ec = er && !eu,
        {
            previewTargetOptions: ed,
            handleSelectPreviewTarget: em,
            mobilePreview: ek,
            mobilePreviewLabel: ew,
            handleToggleMobilePreview: eA,
            landscapePreview: eF,
            rotatePreviewLabel: eO,
            handleRotatePreview: ez,
            previewSurface: eH,
            previewFrame: eV,
            refreshFrame: eW,
            isRefreshing: eX,
            handleRefresh: eY,
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
                f = i.useMemo(
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
                m = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (o(e.surface), null != e.appChannel && d?.(e.appChannel)), u(e.mode));
                    },
                    [d, o, u],
                ),
                h = (0, c.bG)([to.A], () => to.A.isBuilderPreviewMobile()),
                g = eb.intl.string(h ? ej.default.tKGF0Q : ej.default.peqEOY),
                p = i.useCallback(() => (0, e$.GG)(!h), [h]),
                x = (0, c.bG)([to.A], () => to.A.isBuilderPreviewLandscape()),
                v = eb.intl.string(x ? ej.default.tunI2l : ej.default.DoNdjA),
                j = i.useCallback(() => (0, e$.Lw)(!x), [x]),
                b = (0, tc.jS)(t),
                y = i.useMemo(() => (0, tc.Op)(b, r), [b, r]),
                k = (0, tu.A)(t?.preview_application_id ?? null, y),
                w = (0, tu.A)(t?.preview_application_id ?? null, e3.ZN),
                S = "overlay" === l ? w : k,
                A = (0, e3.x1)(S) && S.data.proxyTicketRefreshing,
                N = i.useCallback(() => {
                    null == S || A || ts.A.refreshProxyTicket(S.id);
                }, [S, A]);
            return {
                previewTargetOptions: f,
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
                isRefreshing: A,
                handleRefresh: N,
            };
        })({
            project: s,
            modes: V.modes,
            activeMode: W,
            frameSurface: X,
            frameSurfaceOptions: Y,
            previewAppChannels: K,
            setMode: Z,
            setFrameSurface: Q,
            setAppChannel: ee,
        }),
        eQ = N && !I,
        eJ = eb.intl.string(eQ ? ej.default.JD6Oit : ej.default.xjJAQm),
        e0 = i.useCallback(() => {
            if (I) {
                (E(!1), C(!0));
                return;
            }
            C((e) => !e);
        }, [I]),
        e1 = i.useCallback(() => C(!1), []),
        {
            designFeedbackActive: e2,
            designFeedbackToggleRef: e7,
            agentDrivingPreview: e5,
            designFeedbackLabel: e8,
            handleToggleDesignFeedback: e6,
        } = (function (e, t, n) {
            let { active: l } = H(e);
            i.useEffect(() => {
                null != e && l && !t && G(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, eC.Zv)(e),
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
        })(q, ec, R),
        [e9] = i.useState(() => A.isPlatformEmbedded && (0, tn.qM)()),
        te = null != ef(q);
    i.useEffect(() => {
        null != q && te && !ec && eo(q);
    }, [q, te, ec]);
    let tj = i.useCallback(() => {
            null != q &&
                (R(),
                (function (e) {
                    if (null != es(e)) return;
                    let { byProject: t } = ea.getState();
                    ea.setState({ byProject: { ...t, [e]: ei } });
                })(q));
        }, [q, R]),
        tb = i.useCallback(() => {
            null != q && eo(q);
        }, [q]),
        ty = te ? eb.intl.string(ej.default.tuQ5f3) : e8,
        tk = i.useCallback(() => {
            E((e) => !e && (C(!0), !0));
        }, []),
        tS = i.useCallback(() => E(!1), []),
        tA = i.useCallback(() => {
            null != q && (0, e$._j)(q);
        }, [q]),
        tN = i.useCallback(() => {
            null != q && (eu ? (0, e$._j)(q) : (0, e$.di)(q, eV?.id));
        }, [q, eu, eV?.id]),
        tM = i.useCallback(() => {
            var e, t;
            (null != s && ((e = s.id), (t = eV?.id), (0, tm.closeConnection)(e), (0, tf.r)(t)), v());
        }, [s, eV?.id, v]),
        t_ =
            ((t = (0, ev.z)(s)),
            (l = i.useCallback(
                (e) => {
                    if (null == s) return;
                    let t = s.id,
                        n = (0, ex.vt)(e);
                    null != n
                        ? (0, ep.P0)({ text: n, variant: "critical" })
                        : (0, eg.A)({
                              title: eb.intl.formatToPlainString(ej.default["Gm+u1+"], { name: s.name }),
                              subtitle: eb.intl.string(ej.default.M7H3sJ),
                              confirmText: eb.intl.string(ej.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  P();
                                  try {
                                      await (0, ex.Hj)(t, e, eb.intl.string(ej.default.Owerd3));
                                  } catch {
                                      (0, ep.P0)({ text: eb.intl.string(ej.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [s, P],
            )),
            { onExport: t, onImport: (r = (0, ex.yN)(l)).open, importInput: r.input }),
        tT = i.useCallback(() => {
            null != s && (0, tI.A)(s, j);
        }, [s, j]),
        tP = i.useCallback(async () => {
            null != q && (await (0, tp.vL)(q, j));
        }, [j, q]),
        tR = (0, eB.aN)(W, {
            installScope: s?.install_scope ?? null,
            previewReady: U,
            integrationInstalled: D?.integration_installed ?? null,
        })
            ? { type: "bot_install", onAddBot: tP, loading: F }
            : z && null == D
              ? { type: "checking" }
              : void 0,
        tL = (0, c.bG)([ti.Ay], () => null != q && ti.Ay.isProjectDeleting(q), [q]);
    i.useEffect(() => {
        ((null == s && u) || tL) && v();
    }, [s, u, tL, v]);
    let {
            publishOptions: t$,
            publish: tq,
            publishing: tD,
            confirmation: tF,
            variant: tO,
            text: tz,
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
                d = (0, tp.Ay)(e, c),
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
                variant: tx(d) ? "secondary" : "primary",
                text: tv(d, m),
                label: tv(d, null),
                indicator: null == d ? null : d.publishing ? "publishing" : tx(d) ? null : "unpublished",
            };
        })(q, j, z || F, tw),
        tG = tC(q, tq, t$),
        tU = (0, w.A)(eV),
        tB = "frame" === W && !eu && (0, e3.x1)(eV) && (tU.isPoppedOut || tU.canPopout),
        tK = null == s ? void 0 : () => (0, tE.A)(s.id, { guildId: j, isPreview: !0, publishOptions: t$ }),
        tH =
            null == s
                ? null
                : (0, a.jsx)(td.A, {
                      projectId: s.id,
                      projectName: s.name,
                      guildId: j,
                      projectGuildId: s.guild_id,
                      isOwner: (0, ti.PV)(s),
                      canRemix: (0, ti.H_)(s),
                      onOpenProjectSettings: tK,
                      onTogglePreviewPaused: "frame" === W ? tN : void 0,
                      previewPaused: eu,
                      previewPauseDisabled: !eu && e5,
                      onTogglePopout: tB ? (tU.isPoppedOut ? tU.popIn : tU.popOut) : void 0,
                      poppedOut: tU.isPoppedOut,
                      onToggleDebug: _ ? tk : void 0,
                      debugOpen: I,
                      onExport: t_.onExport,
                      onImport: t_.onImport,
                      onRemix: tT,
                      onConnectTool: T
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
                                  restoreDisabled: L?.status === "restoring",
                                  onRestoreVersion: (e, t) => $(e, t, !0),
                              }),
                              void (0, eE.openModalLazy)(async () => {
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
                          V.modes.includes("widget") && "unavailable-authorization-revoked" !== V.profileState
                              ? en
                              : null,
                      previewProjectId: s.id,
                  }),
        tV =
            null == tq || null == s
                ? null
                : (0, a.jsx)("div", {
                      className: hb.As,
                      onMouseDown:
                          null == q || tq.disabled || tD
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, tg.dx)(q);
                                },
                      children: (0, a.jsx)(d.$, {
                          size: "sm",
                          variant: tO,
                          icon: tD ? hk : null != tF ? f.U : void 0,
                          text: tz,
                          onClick: () => tG("header"),
                      }),
                  }),
        tW = (0, a.jsx)(hv.A, {
            title: s?.name ?? eb.intl.string(ej.default.G1WwgK),
            project: s,
            onOpenProjectSettings: tK,
            onBack: b,
            hideShareTarget: null != b,
            actions:
                null == s
                    ? null
                    : (0, a.jsxs)("div", {
                          className: hb.FO,
                          children: [
                              (0, a.jsxs)("div", {
                                  className: hb.QQ,
                                  children: [
                                      (0, a.jsx)(tt, {
                                          targets: ed,
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
                                          })(W, X, J),
                                          onChange: em,
                                      }),
                                      er
                                          ? (0, a.jsxs)(a.Fragment, {
                                                children: [
                                                    "frame" === W
                                                        ? (0, a.jsx)(S.A.Icon, {
                                                              icon: ek ? hA : hS,
                                                              tooltip: ew,
                                                              "aria-label": ew,
                                                              selected: ek,
                                                              onClick: eA,
                                                          })
                                                        : null,
                                                    ek && "frame" === W
                                                        ? (0, a.jsx)(S.A.Icon, {
                                                              icon: hN,
                                                              tooltip: eO,
                                                              "aria-label": eO,
                                                              selected: eF,
                                                              onClick: ez,
                                                          })
                                                        : null,
                                                    (0, a.jsx)(eh, {
                                                        enabled: e9 && !te && !e5 && !eu,
                                                        onLongPress: tj,
                                                        children: (0, a.jsx)(S.A.Icon, {
                                                            ref: e7,
                                                            icon: m.x,
                                                            iconClassName: hb.D8,
                                                            tooltip: ty,
                                                            "aria-label": ty,
                                                            selected: te || e2,
                                                            disabled: eu || (e5 && !te),
                                                            onClick: te ? tb : e6,
                                                        }),
                                                    }),
                                                ],
                                            })
                                          : null,
                                      "frame" !== W || eu
                                          ? null
                                          : (0, a.jsx)(e4, { frame: eV, controlProjectId: s.id }),
                                      (0, e3.x1)(eW)
                                          ? (0, a.jsx)(S.A.Icon, {
                                                icon: h.RefreshIcon,
                                                tooltip: eb.intl.string(ej.default.FZIHQN),
                                                "aria-label": eb.intl.string(ej.default.FZIHQN),
                                                disabled: eX,
                                                onClick: eY,
                                            })
                                          : null,
                                  ],
                              }),
                              (0, a.jsx)("div", { className: hb.YJ }),
                              (0, a.jsx)(ey.A, { frame: eV }),
                              (0, a.jsx)(S.A.Icon, {
                                  icon: g.DoorExitIcon,
                                  tooltip: eb.intl.string(ej.default["/TlGcK"]),
                                  "aria-label": eb.intl.string(ej.default["/TlGcK"]),
                                  onClick: tM,
                              }),
                              (0, a.jsx)(S.A.Icon, {
                                  icon: hw,
                                  tooltip: eJ,
                                  "aria-label": eJ,
                                  selected: eQ,
                                  onClick: e0,
                              }),
                              tH,
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: o()(hb.nj, hj.T),
        children: [
            t_.importInput,
            (0, a.jsx)("main", {
                className: hb.JX,
                children:
                    null == s
                        ? (0, a.jsxs)("div", {
                              className: hb.j5,
                              children: [
                                  tW,
                                  (0, a.jsxs)("div", {
                                      className: hb.sD,
                                      children: [
                                          (0, a.jsx)(p.D, {
                                              variant: "heading-lg/semibold",
                                              children: eb.intl.string(ej.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(x.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: eb.intl.string(ej.default.fINulo),
                                          }),
                                          (0, a.jsx)(d.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: eb.intl.string(ej.default["WFJ/vb"]),
                                              onClick: () => (0, tr.listProjects)(j),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tp.bI.Provider, {
                              value: t$,
                              children: (0, a.jsx)(
                                  hx,
                                  {
                                      projectId: s.id,
                                      designFeedbackToggleRef: e7,
                                      applicationId: s.preview_application_id,
                                      previewApplicationId: s.preview_application_id,
                                      surface: eH,
                                      frameLaunchParams: et,
                                      header: tW,
                                      chatOpen: N,
                                      onCloseChat: e1,
                                      chatHeaderAction: tV,
                                      debugOpen: _ && I,
                                      onCloseDebug: tS,
                                      onRestoreVersion: $,
                                      onImportProject: (0, ti.PV)(s) ? t_.onImport : void 0,
                                      restoreState: L,
                                      previewReady: U,
                                      previewGate: tR,
                                      availability: V,
                                      activeMode: W,
                                      widgetApplicationId: en,
                                      overlayWidgetSize: el,
                                      previewPaused: eu,
                                      onResumePreview: tA,
                                  },
                                  s.id,
                              ),
                          }),
            }),
        ],
    });
}
function hk() {
    return (0, a.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: hb.Hv, itemClassName: hb.C5 });
}
function hw(e) {
    return (0, a.jsx)(j.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hS(e) {
    return (0, a.jsx)(b.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hA(e) {
    return (0, a.jsx)(y.k, { ...e, size: "custom", width: 20, height: 20 });
}
function hN(e) {
    return (0, a.jsx)(k.H, { ...e, size: "custom", width: 20, height: 20 });
}
